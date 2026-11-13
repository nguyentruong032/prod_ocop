import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listArticles } from "@/lib/data/articles";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { IntegrationListView } from "@/components/features/integration/IntegrationListView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ pillar?: string; province?: string; page?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};
  const landing = await getLandingPage("integration-overview");
  return buildMetadata({
    title:
      landing?.seo?.title ||
      landing?.heading ||
      "OCOP Hội nhập kinh tế quốc tế",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Nâng tầm vị thế nông sản và tinh hoa bản địa trên thị trường toàn cầu.",
    path: `/${locale}/ocop-hoi-nhap`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.pillar || sp.province),
  });
}

export default async function IntegrationOverviewPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("integration-overview"),
    listProvinces(),
    listArticles({
      kind: "INTEGRATION",
      pillar: sp.pillar,
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
      baseUrl={`/${locale}/ocop-hoi-nhap`}
      pageTitle="OCOP Hội nhập kinh tế quốc tế"
      pageDescription="Chiến lược xuất khẩu, rào cản kỹ thuật và chuyển đổi số đưa sản phẩm Việt vươn tầm thế giới."
      selectedPillar={sp.pillar}
      selectedProvince={sp.province}
      showPillarCards={!sp.pillar}
    />
  );
}
