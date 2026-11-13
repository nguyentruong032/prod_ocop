import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLandingPage } from "@/lib/data/globals";
import { listArticles } from "@/lib/data/articles";
import { listEvents } from "@/lib/data/events";
import { NewsLandingView } from "@/components/features/news/NewsLandingView";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};

  const landing = await getLandingPage("news-landing");
  return buildMetadata({
    title:
      landing?.seo?.title ||
      landing?.heading ||
      "Tin tức & Sự kiện OCOP Việt Nam",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Cổng thông tin thời sự, chính sách, xúc tiến thương mại và nhịp đập OCOP các địa phương.",
    path: `/${locale}/tin-tuc-su-kien`,
    seo: landing?.seo,
  });
}

export default async function NewsEventsPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "vi") notFound();

  const [landing, articlesResult, eventsResult] = await Promise.all([
    getLandingPage("news-landing"),
    listArticles({ kind: "NEWS", limit: 9 }),
    listEvents({ when: "upcoming", limit: 3 }),
  ]);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Trang chủ", url: `/${locale}` },
    { name: "Tin tức & Sự kiện", url: `/${locale}/tin-tuc-su-kien` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <NewsLandingView
        landing={landing}
        news={articlesResult.docs}
        upcomingEvents={eventsResult.docs}
      />
    </>
  );
}
