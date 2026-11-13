// [DEV] MOCK: xóa khi ghép BE-4
import { NextRequest, NextResponse } from "next/server";
import { search } from "@/lib/data/search";

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.trim() || "";

  if (!q || q.length < 2) {
    return NextResponse.json({ suggestions: [] });
  }

  const result = await search({ q, pageSize: 5 });
  const suggestions = result.items.map((item) => ({
    title: item.title,
    url: item.path,
    kind: item.typeLabel,
  }));

  return NextResponse.json({ suggestions });
}
