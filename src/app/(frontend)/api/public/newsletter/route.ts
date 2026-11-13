// [DEV] MOCK: xóa hoặc kết nối Mailchimp/SendGrid/DB khi ghép BE Phase 2
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body || {};

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Vui lòng nhập địa chỉ email hợp lệ" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Định dạng email không đúng" },
        { status: 400 }
      );
    }

    // Mô phỏng lưu đăng ký newsletter vào cơ sở dữ liệu
    return NextResponse.json(
      {
        success: true,
        message: "Cảm ơn bạn đã đăng ký nhận bản tin OCOP Việt Nam!",
        email,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Đã có lỗi xảy ra khi xử lý đăng ký" },
      { status: 500 }
    );
  }
}
