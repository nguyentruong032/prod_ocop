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
  const landing = await getLandingPage("integration-standards");
  return buildMetadata({
    title:
      landing?.seo?.title ||
      landing?.heading ||
      "Tiêu chuẩn & Chứng nhận quốc tế",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Rào cản kỹ thuật, GlobalGAP, Organic, FDA và bảo hộ sở hữu trí tuệ.",
    path: `/${locale}/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.province),
  });
}

export default async function StandardsIntegrationPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("integration-standards"),
    listProvinces(),
    listArticles({
      kind: "INTEGRATION",
      topic: "STANDARDS",
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
      baseUrl={`/${locale}/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te`}
      pageTitle="Tiêu chuẩn & Chứng nhận quốc tế"
      pageDescription="Chuẩn hóa chất lượng theo thông lệ quốc tế và bảo hộ quyền sở hữu trí tuệ nông sản."
      selectedProvince={sp.province}
      breadcrumbItems={[
        { label: "OCOP Hội nhập", href: `/${locale}/ocop-hoi-nhap` },
        { label: "Tiêu chuẩn & Chứng nhận" },
      ]}
    />
  );
}
