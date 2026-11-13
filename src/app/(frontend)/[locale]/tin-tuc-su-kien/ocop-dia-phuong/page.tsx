import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { listArticles } from "@/lib/data/articles";
import { LocalNewsView } from "@/components/features/news/LocalNewsView";
import { parsePageParam } from "@/lib/pagination";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    province?: string;
    region?: "BAC" | "TRUNG" | "NAM";
    page?: string;
  }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const [{ locale }, { page }] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};
  const landing = await getLandingPage("news-local");
  return buildMetadata({
    title: landing?.seo?.title || landing?.heading || "OCOP Địa phương — Tin tức phong trào",
    description: landing?.seo?.description || landing?.intro || "Tin tức phân hạng sao từ 63 tỉnh thành.",
    path: `/${locale}/tin-tuc-su-kien/ocop-dia-phuong`,
    seo: landing?.seo,
    noIndex: Boolean(page && Number(page) > 1),
  });
}

export default async function LocalNewsPage({ params, searchParams }: PageProps) {
  const [{ locale }, { province, region, page }] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();
  const currentPage = parsePageParam(page);
  const pageSize = 12;

  const [landing, provinces, articlesResult] = await Promise.all([
    getLandingPage("news-local"),
    listProvinces(),
    listArticles({
      topic: "LOCAL_OCOP",
      province,
      region,
      page: currentPage,
      limit: pageSize,
    }),
  ]);

  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Trang chủ", url: `/${locale}` },
    { name: "Tin tức & Sự kiện", url: `/${locale}/tin-tuc-su-kien` },
    { name: "OCOP địa phương", url: `/${locale}/tin-tuc-su-kien/ocop-dia-phuong` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <LocalNewsView
        landing={landing}
        articles={articlesResult.docs}
        provinces={provinces}
        totalDocs={articlesResult.totalDocs}
        currentPage={currentPage}
        pageSize={pageSize}
        selectedProvince={province}
        selectedRegion={region}
      />
    </>
  );
}
