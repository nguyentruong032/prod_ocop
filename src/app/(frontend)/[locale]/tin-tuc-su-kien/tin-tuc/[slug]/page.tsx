import { notFound, permanentRedirect } from "next/navigation";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import {
  getArticle,
  getRelatedArticles,
  listArticles,
} from "@/lib/data/articles";
import { lookupRedirect } from "@/lib/redirects";
import { NewsDetailView } from "@/components/features/news/NewsDetailView";
import {
  buildMetadata,
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const res = await listArticles({ kind: "NEWS", limit: 50 });
  return res.docs.map((a) => ({ slug: a.slug, locale: "vi" }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "vi") return {};
  const article = await getArticle(slug, "NEWS");
  if (!article) return {};

  return buildMetadata({
    title: article.seo?.title || article.title,
    description: article.seo?.description || article.excerpt,
    path: `/${locale}/tin-tuc-su-kien/tin-tuc/${slug}`,
    seo: article.seo,
    coverImage: article.coverImage,
  });
}

export default async function NewsArticleDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (locale !== "vi") notFound();

  const isDraft = (await draftMode()).isEnabled;
  const article = await getArticle(slug, "NEWS", isDraft);

  if (!article) {
    const redirectUrl = await lookupRedirect(
      `/${locale}/tin-tuc-su-kien/tin-tuc/${slug}`,
    );
    if (redirectUrl) permanentRedirect(redirectUrl);
    notFound();
  }

  const related = await getRelatedArticles(
    article.id,
    "NEWS",
    article.topic,
    3,
  );
  const articlePath = `/${locale}/tin-tuc-su-kien/tin-tuc/${slug}`;
  const articleJsonLd = buildArticleJsonLd(article, articlePath);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Trang chủ", url: `/${locale}` },
    { name: "Tin tức & Sự kiện", url: `/${locale}/tin-tuc-su-kien` },
    { name: article.title, url: articlePath },
  ]);

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbs} />
      <NewsDetailView article={article} relatedArticles={related} />
    </>
  );
}
