import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLandingPage } from "@/lib/data/globals";
import { listLegalDocs } from "@/lib/data/legal-docs";
import { PolicyView } from "@/components/features/news/PolicyView";
import { parsePageParam } from "@/lib/pagination";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ level?: string; q?: string; page?: string }>;
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  const { page } = await searchParams;
  const landing = await getLandingPage("news-policy");

  return buildMetadata({
    title:
      landing?.seo?.title ||
      landing?.heading ||
      "Chính sách và cơ chế OCOP Việt Nam",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Hệ thống văn bản quy phạm pháp luật, nghị định, thông tư về OCOP.",
    path: `/${locale}/tin-tuc-su-kien/chinh-sach-va-co-che`,
    seo: landing?.seo,
    noIndex: Boolean(page && Number(page) > 1),
  });
}

export default async function PolicyDocumentsPage({
  params,
  searchParams,
}: PageProps) {
  const { locale } = await params;
  if (locale !== "vi") notFound();

  const { level, q, page } = await searchParams;
  const currentPage = parsePageParam(page);
  const pageSize = 12;

  const [landing, docsResult] = await Promise.all([
    getLandingPage("news-policy"),
    listLegalDocs({ level, q, page: currentPage, limit: pageSize }),
  ]);

  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Trang chủ", url: `/${locale}` },
    { name: "Tin tức & Sự kiện", url: `/${locale}/tin-tuc-su-kien` },
    {
      name: "Chính sách & Cơ chế",
      url: `/${locale}/tin-tuc-su-kien/chinh-sach-va-co-che`,
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PolicyView
        landing={landing}
        docs={docsResult.docs}
        totalDocs={docsResult.totalDocs}
        currentPage={currentPage}
        pageSize={pageSize}
        level={level}
        query={q}
      />
    </>
  );
}
