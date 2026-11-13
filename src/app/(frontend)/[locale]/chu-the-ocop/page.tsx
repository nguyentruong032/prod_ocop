import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listProducers } from "@/lib/data/producers";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { ProducersListView } from "@/components/features/producers/ProducersListView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    type?: string;
    province?: string;
    q?: string;
    page?: string;
  }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};
  const landing = await getLandingPage("producers-landing");
  return buildMetadata({
    title:
      landing?.seo?.title ||
      landing?.heading ||
      "Danh bạ Chủ thể OCOP Việt Nam",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Mạng lưới các hợp tác xã, doanh nghiệp OCOP.",
    path: `/${locale}/chu-the-ocop`,
    seo: landing?.seo,
    noIndex:
      (Number(sp.page) || 1) > 1 && Boolean(sp.type || sp.province || sp.q),
  });
}

export default async function ProducersDirectoryPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("producers-landing"),
    listProvinces(),
    listProducers({
      type: sp.type,
      province: sp.province,
      q: sp.q,
      page: Number(sp.page) || 1,
      limit: 12,
    }),
  ]);

  return (
    <ProducersListView
      landing={landing}
      result={result}
      provinces={provinces}
      baseUrl={`/${locale}/chu-the-ocop`}
      selectedType={sp.type}
      selectedProvince={sp.province}
      searchQuery={sp.q}
    />
  );
}
