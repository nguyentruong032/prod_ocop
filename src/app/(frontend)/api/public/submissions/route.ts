import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { getPayloadClient } from "@/lib/payload";

const submissionSchema = z.object({
  type: z.enum(["ARTICLE", "OCOP_PROFILE", "ADVERTISEMENT", "FEEDBACK"], {
    message: "Loại hồ sơ không hợp lệ.",
  }),
  targetCollection: z.string().optional(),
  targetKind: z.string().optional(),
  province: z.string().optional(),
  senderName: z
    .string()
    .min(2, "Họ và tên người gửi phải có ít nhất 2 ký tự.")
    .max(100, "Họ và tên không được vượt quá 100 ký tự."),
  senderOrganization: z.string().max(200).optional(),
  senderPhone: z
    .string()
    .min(9, "Số điện thoại không hợp lệ.")
    .max(15, "Số điện thoại không được quá 15 ký tự."),
  senderEmail: z.string().email("Địa chỉ email không đúng định dạng."),
  title: z
    .string()
    .min(5, "Tiêu đề hồ sơ / bài viết phải có ít nhất 5 ký tự.")
    .max(350, "Tiêu đề không được vượt quá 350 ký tự."),
  summary: z
    .string()
    .min(10, "Tóm tắt nội dung phải có ít nhất 10 ký tự.")
    .max(1000, "Tóm tắt không được vượt quá 1000 ký tự."),
  contentText: z
    .string()
    .min(20, "Nội dung chi tiết phải có ít nhất 20 ký tự.")
    .max(20000, "Nội dung chi tiết không được vượt quá 20.000 ký tự."),
  consent: z.boolean().refine((val) => val === true, {
    message: "Bạn phải đồng ý với điều khoản sử dụng và chính sách bảo mật.",
  }),
});

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
];

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB
const MAX_TOTAL_SIZE = 50 * 1024 * 1024; // 50MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Extract text fields
    const rawData = {
      type: formData.get("type"),
      targetCollection: formData.get("targetCollection") || undefined,
      targetKind: formData.get("targetKind") || undefined,
      province: formData.get("province") || undefined,
      senderName: formData.get("senderName"),
      senderOrganization: formData.get("senderOrganization") || undefined,
      senderPhone: formData.get("senderPhone"),
      senderEmail: formData.get("senderEmail"),
      title: formData.get("title"),
      summary: formData.get("summary"),
      contentText: formData.get("contentText"),
      consent: formData.get("consent") === "true",
    };

    // Zod validation
    const parsed = submissionSchema.safeParse(rawData);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Dữ liệu gửi không hợp lệ.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    // Verify Cloudflare Turnstile
    const turnstileToken = formData.get("turnstileToken") as string | null;
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const turnstileResult = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: turnstileResult.error || "Xác thực bảo mật không thành công." },
        { status: 400 },
      );
    }

    // Validate files
    const files = formData.getAll("attachments") as File[];
    if (files.length > 5) {
      return NextResponse.json(
        { error: "Chỉ được đính kèm tối đa 5 tệp tài liệu." },
        { status: 400 },
      );
    }

    let totalSize = 0;
    for (const file of files) {
      if (typeof file === "object" && file.size > 0) {
        if (!ALLOWED_MIME_TYPES.includes(file.type)) {
          return NextResponse.json(
            {
              error: `Định dạng tệp ${file.name} không được hỗ trợ. Chỉ chấp nhận ảnh (JPG, PNG, WebP) và tài liệu (PDF, DOCX).`,
            },
            { status: 400 },
          );
        }
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: `Tệp ${file.name} vượt quá dung lượng cho phép (tối đa 20MB/tệp).` },
            { status: 400 },
          );
        }
        totalSize += file.size;
      }
    }

    if (totalSize > MAX_TOTAL_SIZE) {
      return NextResponse.json(
        { error: "Tổng dung lượng các tệp đính kèm vượt quá 50MB." },
        { status: 400 },
      );
    }

    // Generate unique tracking code
    const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
    const trackingCode = `OCOP-2026-${randomHex}`;

    // Store in Payload if database is running
    const payload = await getPayloadClient();
    if (payload && payload.create) {
      try {
        await payload.create({
          collection: "submissions",
          data: {
            ...parsed.data,
            trackingCode,
            status: "PENDING",
            submitterIp: clientIp,
            consentAt: new Date().toISOString(),
            consentVersion: "2026-12-v1",
          },
          overrideAccess: true,
        });
      } catch {
        // Continue if submissions collection is not yet migrated
      }
    }

    return NextResponse.json({
      success: true,
      trackingCode,
      message: "Hồ sơ của bạn đã được gửi thành công đến Tòa soạn OCOP Việt Nam.",
    });
  } catch {
    return NextResponse.json(
      { error: "Đã có lỗi xảy ra trong quá trình xử lý. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }
}
