import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("x-cron-secret");

  if (!cronSecret || authHeader !== cronSecret) {
    return NextResponse.json(
      { error: "Không có quyền truy cập" },
      { status: 401 },
    );
  }

  try {
    const body = await request.json();
    const { tag, path } = body as { tag?: string; path?: string };

    if (tag) {
      // Revalidate tag immediately (expire: 0 per 01-FE.md#6)
      revalidateTag(tag, { expire: 0 });
    }

    if (path) {
      revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      tag: tag || null,
      path: path || null,
      timestamp: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Lỗi xử lý yêu cầu" },
      { status: 400 },
    );
  }
}
