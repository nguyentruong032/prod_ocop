import { notFound, permanentRedirect } from "next/navigation";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import {
  getArticle,
  getRelatedArticles,
  listArticles,
} from "@/lib/data/articles";
import { lookupRedirect } from "@/lib/redirects";
import { IntegrationDetailView } from "@/components/features/integration/IntegrationDetailView";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const res = await listArticles({ kind: "INTEGRATION", limit: 50 });
  return res.docs.map((a) => ({ slug: a.slug, locale: "vi" }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "vi") return {};
  const article = await getArticle(slug, "INTEGRATION");
  if (!article) return {};

  return buildMetadata({
    title: article.seo?.title || article.title,
    description: article.seo?.description || article.excerpt,
    path: `/${locale}/ocop-hoi-nhap/${slug}`,
    seo: article.seo,
    coverImage: article.coverImage,
  });
}

export default async function IntegrationDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "vi") notFound();

  const isDraft = (await draftMode()).isEnabled;
  const article = await getArticle(slug, "INTEGRATION", isDraft);

  if (!article) {
    const redirectUrl = await lookupRedirect(
      `/${locale}/ocop-hoi-nhap/${slug}`,
    );
    if (redirectUrl) permanentRedirect(redirectUrl);
    notFound();
  }

  const related = await getRelatedArticles(
    article.id,
    "INTEGRATION",
    article.topic,
    4,
  );

  return <IntegrationDetailView article={article} relatedArticles={related} />;
}
