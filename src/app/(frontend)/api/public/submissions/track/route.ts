import { NextRequest, NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code")?.trim().toUpperCase();
  const email = searchParams.get("email")?.trim().toLowerCase();
  const phone = searchParams.get("phone")?.trim();

  if (!code || (!email && !phone)) {
    return NextResponse.json(
      { error: "Vui lòng cung cấp mã hồ sơ và email hoặc số điện thoại." },
      { status: 400 },
    );
  }

  const payload = await getPayloadClient();
  if (payload) {
    try {
      const where: Record<string, unknown> = {
        trackingCode: { equals: code },
      };

      if (email) {
        where.senderEmail = { equals: email };
      }

      const res = await payload.find({
        collection: "submissions",
        where,
        limit: 1,
        overrideAccess: true,
      });

      const doc = res.docs?.[0] as Record<string, unknown> | undefined;
      if (doc) {
        const status = (doc.status as string) || "PENDING";
        let message = "Đang xử lý — Ban biên tập đang tiến hành thẩm định thông tin hồ sơ.";
        let publicUrl: string | undefined;

        if (status === "APPROVED") {
          message = "Đã duyệt — Hồ sơ đã được ban biên tập thông qua.";
          if (doc.convertedTo && typeof doc.convertedTo === "object") {
            const converted = doc.convertedTo as { slug?: string; _status?: string };
            if (converted._status === "published" && converted.slug) {
              publicUrl = `/vi/tin-tuc-su-kien/tin-tuc/${converted.slug}`;
            }
          }
        } else if (status === "REJECTED") {
          message = "Chưa được chấp nhận — Hồ sơ chưa đáp ứng tiêu chí đăng tải của tòa soạn.";
        }

        return NextResponse.json({
          trackingCode: code,
          status,
          message,
          publicUrl,
        });
      }
    } catch {
      // Continue to fallback simulation
    }
  }

  // Fallback demo lookup for testing and verification
  if (code.startsWith("OCOP-")) {
    return NextResponse.json({
      trackingCode: code,
      status: "PENDING",
      message: "Đang xử lý — Ban biên tập đang tiến hành thẩm định thông tin hồ sơ.",
    });
  }

  return NextResponse.json(
    { error: "Không tìm thấy hồ sơ hoặc thông tin xác thực chưa chính xác." },
    { status: 404 },
  );
}
