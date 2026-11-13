import { NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";
import { getDocPath } from "@/lib/paths";
import type { Article } from "@/payload-types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ocopvietnam.vn";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const payload = await getPayloadClient();
  let articles: Article[] = [];

  if (payload) {
    try {
      const res = await payload.find<Article>({
        collection: "articles",
        where: {
          _status: { equals: "published" },
          kind: { equals: "NEWS" },
        },
        sort: "-publishedAt",
        limit: 50,
        select: {
          title: true,
          slug: true,
          kind: true,
          excerpt: true,
          publishedAt: true,
        },
      });
      articles = res.docs || [];
    } catch {
      articles = [];
    }
  }

  const itemsXml = articles
    .map((doc) => {
      const url = `${SITE_URL}${getDocPath("articles", doc)}`;
      const pubDate = doc.publishedAt
        ? new Date(doc.publishedAt).toUTCString()
        : new Date().toUTCString();
      const title = escapeXml(doc.title || "");
      const description = escapeXml(doc.excerpt || "");

      return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tin tức &amp; Sự kiện — OCOP Việt Nam</title>
    <link>${SITE_URL}/vi/tin-tuc-su-kien</link>
    <description>Kênh thông tin thời sự, chính sách, xúc tiến thương mại và nhịp đập OCOP địa phương.</description>
    <language>vi</language>
    <atom:link href="${SITE_URL}/tin-tuc-su-kien/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
