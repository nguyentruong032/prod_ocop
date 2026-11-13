import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listArticles } from "@/lib/data/articles";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { IntegrationListView } from "@/components/features/integration/IntegrationListView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    marketCode?: string;
    province?: string;
    page?: string;
  }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};
  const landing = await getLandingPage("integration-export");
  return buildMetadata({
    title:
      landing?.seo?.title ||
      landing?.heading ||
      "Xuất khẩu & Thị trường quốc tế",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Chiến lược đưa sản phẩm OCOP vào các thị trường FTA trọng điểm.",
    path: `/${locale}/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te`,
    seo: landing?.seo,
    noIndex:
      (Number(sp.page) || 1) > 1 && Boolean(sp.marketCode || sp.province),
  });
}

export default async function ExportMarketPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("integration-export"),
    listProvinces(),
    listArticles({
      kind: "INTEGRATION",
      topic: "EXPORT_MARKET",
      marketCode: sp.marketCode,
      province: sp.province,
      page: Number(sp.page) || 1,
      limit: 12,
    }),
  ]);

  return (
    <IntegrationListView
      landing={landing}
      result={result}
      provinces={provinces}
      baseUrl={`/${locale}/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te`}
      pageTitle="Xuất khẩu & Thị trường quốc tế"
      pageDescription="Khai thác lợi thế từ EVFTA, CPTPP và mở rộng thị phần tại Châu Âu, Hoa Kỳ, Nhật Bản."
      selectedMarket={sp.marketCode}
      selectedProvince={sp.province}
      breadcrumbItems={[
        { label: "OCOP Hội nhập", href: `/${locale}/ocop-hoi-nhap` },
        { label: "Xuất khẩu & Thị trường" },
      ]}
    />
  );
}
