import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { listDestinations } from "@/lib/data/destinations";
import { DestinationsLandingView } from "@/components/features/destinations/DestinationsLandingView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ province?: string; page?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};
  const landing = await getLandingPage("destinations-landing");
  return buildMetadata({
    title: landing?.seo?.title || landing?.heading || "Điểm Đến & Du Lịch OCOP",
    description: landing?.seo?.description || landing?.intro || "Bản đồ nông sản và điểm đến văn hóa nông thôn.",
    path: `/${locale}/diem-den-du-lich`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.province),
  });
}

export default async function DestinationsPage({ params, searchParams }: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("destinations-landing"),
    listProvinces(),
    listDestinations({
      province: sp.province,
      page: Number(sp.page) || 1,
      limit: 12,
    }),
  ]);

  return (
    <DestinationsLandingView
      landing={landing}
      result={result}
      provinces={provinces}
      selectedProvince={sp.province}
      baseUrl={`/${locale}/diem-den-du-lich`}
    />
  );
}
