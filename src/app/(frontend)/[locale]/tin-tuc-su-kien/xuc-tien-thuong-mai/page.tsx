import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLandingPage } from "@/lib/data/globals";
import { listEvents } from "@/lib/data/events";
import { TradePromotionView } from "@/components/features/news/TradePromotionView";
import { parsePageParam } from "@/lib/pagination";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    status?: "upcoming" | "ongoing" | "ended" | "all";
    page?: string;
  }>;
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  const { page } = await searchParams;
  const landing = await getLandingPage("news-trade");

  return buildMetadata({
    title:
      landing?.seo?.title ||
      landing?.heading ||
      "Xúc tiến thương mại OCOP Việt Nam",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Lịch trình sự kiện và hội chợ xúc tiến thương mại nông sản OCOP.",
    path: `/${locale}/tin-tuc-su-kien/xuc-tien-thuong-mai`,
    seo: landing?.seo,
    noIndex: Boolean(page && Number(page) > 1),
  });
}

export default async function TradePromotionPage({
  params,
  searchParams,
}: PageProps) {
  const { locale } = await params;
  if (locale !== "vi") notFound();

  const { status, page } = await searchParams;
  const currentPage = parsePageParam(page);
  const pageSize = 12;

  const [landing, eventsResult] = await Promise.all([
    getLandingPage("news-trade"),
    listEvents({ when: status || "all", page: currentPage, limit: pageSize }),
  ]);

  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Trang chủ", url: `/${locale}` },
    { name: "Tin tức & Sự kiện", url: `/${locale}/tin-tuc-su-kien` },
    {
      name: "Xúc tiến thương mại",
      url: `/${locale}/tin-tuc-su-kien/xuc-tien-thuong-mai`,
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <TradePromotionView
        landing={landing}
        events={eventsResult.docs}
        totalDocs={eventsResult.totalDocs}
        currentPage={currentPage}
        pageSize={pageSize}
        status={status}
      />
    </>
  );
}
