import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const path = searchParams.get("path");

  const previewSecret =
    process.env.PREVIEW_SECRET || "ocop_preview_secret_2026";

  if (!secret || secret !== previewSecret) {
    return new NextResponse("Mã bảo mật xem trước không hợp lệ", {
      status: 401,
    });
  }

  // Prevent open redirect: path must start with '/' and not '//'
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return new NextResponse("Đường dẫn xem trước không hợp lệ", {
      status: 400,
    });
  }

  const draft = await draftMode();
  draft.enable();

  redirect(path);
}
