import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listArticles } from "@/lib/data/articles";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { IntegrationListView } from "@/components/features/integration/IntegrationListView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ province?: string; page?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};
  const landing = await getLandingPage("integration-digital");
  return buildMetadata({
    title: landing?.seo?.title || landing?.heading || "Chuyển đổi số OCOP",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Ứng dụng công nghệ số trong quản trị, truy xuất nguồn gốc và thương mại điện tử.",
    path: `/${locale}/ocop-hoi-nhap/chuyen-doi-so-ocop`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.province),
  });
}

export default async function DigitalIntegrationPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("integration-digital"),
    listProvinces(),
    listArticles({
      kind: "INTEGRATION",
      topic: "DIGITAL",
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
      baseUrl={`/${locale}/ocop-hoi-nhap/chuyen-doi-so-ocop`}
      pageTitle="Chuyển đổi số OCOP"
      pageDescription="Số hóa chuỗi giá trị nông nghiệp và kết nối logistics nông sản xuyên biên giới."
      selectedProvince={sp.province}
      breadcrumbItems={[
        { label: "OCOP Hội nhập", href: `/${locale}/ocop-hoi-nhap` },
        { label: "Chuyển đổi số OCOP" },
      ]}
    />
  );
}
