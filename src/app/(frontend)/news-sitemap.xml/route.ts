import { listArticles } from "@/lib/data/articles";
import { getDocPath } from "@/lib/paths";

export const dynamic = "force-dynamic";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ocopvietnam.vn";

  try {
    const { docs: articles } = await listArticles({
      kind: "NEWS",
      limit: 100,
    });

    const urlEntries = articles.map((article) => {
      const path = getDocPath("articles", article);
      const loc = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
      const pubDate = article.publishedAt
        ? new Date(article.publishedAt).toISOString()
        : article.createdAt
          ? new Date(article.createdAt).toISOString()
          : new Date().toISOString();
      const title = escapeXml(article.title || "");

      return `  <url>
    <loc>${loc}</loc>
    <news:news>
      <news:publication>
        <news:name>Tạp chí OCOP Việt Nam</news:name>
        <news:language>vi</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${title}</news:title>
    </news:news>
  </url>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlEntries.join("\n")}
</urlset>`;

    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (err) {
    console.error("Lỗi tạo Google News Sitemap:", err);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"></urlset>`,
      {
        status: 200,
        headers: { "Content-Type": "application/xml; charset=utf-8" },
      }
    );
  }
}
