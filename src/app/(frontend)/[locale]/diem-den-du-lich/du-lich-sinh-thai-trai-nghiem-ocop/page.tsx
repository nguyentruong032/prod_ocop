import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { listDestinations } from "@/lib/data/destinations";
import { EcoTourismView } from "@/components/features/destinations/EcoTourismView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ ecosystem?: string; province?: string; page?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};
  const landing = await getLandingPage("destinations-eco");
  return buildMetadata({
    title: landing?.seo?.title || landing?.heading || "Du Lịch Sinh Thái & Trải Nghiệm OCOP",
    description: landing?.seo?.description || landing?.intro || "Khám phá các tuyến du lịch nông thôn gắn với nguyên liệu OCOP sạch.",
    path: `/${locale}/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.ecosystem || sp.province),
  });
}

export default async function EcoTourismPage({ params, searchParams }: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("destinations-eco"),
    listProvinces(),
    listDestinations({
      kind: "ECO_TOUR",
      ecosystem: sp.ecosystem,
      province: sp.province,
      page: Number(sp.page) || 1,
      limit: 12,
    }),
  ]);

  return (
    <EcoTourismView
      landing={landing}
      result={result}
      provinces={provinces}
      selectedEcosystem={sp.ecosystem}
      selectedProvince={sp.province}
      baseUrl={`/${locale}/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop`}
    />
  );
}
