import { notFound, permanentRedirect } from "next/navigation";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import {
  getArticle,
  getRelatedArticles,
  listArticles,
} from "@/lib/data/articles";
import { listProducts } from "@/lib/data/products";
import { lookupRedirect } from "@/lib/redirects";
import { StoryDetailView } from "@/components/features/stories/StoryDetailView";
import { buildMetadata } from "@/lib/seo";
import type { Province } from "@/payload-types";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const res = await listArticles({ kind: "STORY", limit: 50 });
  return res.docs.map((a) => ({ slug: a.slug, locale: "vi" }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "vi") return {};
  const article = await getArticle(slug, "STORY");
  if (!article) return {};

  return buildMetadata({
    title: article.seo?.title || article.title,
    description: article.seo?.description || article.excerpt,
    path: `/${locale}/cau-chuyen-ocop/${slug}`,
    seo: article.seo,
    coverImage: article.coverImage,
  });
}

export default async function StoryDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "vi") notFound();

  const isDraft = (await draftMode()).isEnabled;
  const article = await getArticle(slug, "STORY", isDraft);

  if (!article) {
    const redirectUrl = await lookupRedirect(
      `/${locale}/cau-chuyen-ocop/${slug}`,
    );
    if (redirectUrl) permanentRedirect(redirectUrl);
    notFound();
  }

  const provSlug =
    typeof article.province === "object" && article.province
      ? (article.province as Province).slug
      : undefined;
  const [related, products] = await Promise.all([
    getRelatedArticles(article.id, "STORY", article.topic, 4),
    listProducts({ province: provSlug, limit: 4 }),
  ]);

  return (
    <StoryDetailView
      article={article}
      relatedStories={related}
      relatedProducts={products.docs}
    />
  );
}
