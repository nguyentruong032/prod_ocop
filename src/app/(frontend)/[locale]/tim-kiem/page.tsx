import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { search } from "@/lib/data/search";
import { listProvinces } from "@/lib/data/globals";
import { SearchResultsView } from "@/components/features/search/SearchResultsView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    q?: string;
    type?: string;
    province?: string;
    page?: string;
  }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};

  const title = sp.q
    ? `Tìm kiếm: "${sp.q}" — Cổng thông tin OCOP Việt Nam`
    : "Tra cứu & Tìm kiếm OCOP | Cổng dữ liệu số hóa di sản nông thôn";

  return buildMetadata({
    title,
    description: "Hệ thống tra cứu dữ liệu sản phẩm, chủ thể, làng nghề và văn bản chính sách OCOP toàn quốc.",
    path: `/${locale}/tim-kiem`,
    noIndex: Boolean(sp.page && Number(sp.page) > 1),
  });
}

export default async function SearchPage({ params, searchParams }: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [provinces, result] = await Promise.all([
    listProvinces(),
    search({
      q: sp.q,
      type: sp.type,
      province: sp.province,
      page: Number(sp.page) || 1,
      pageSize: 12,
    }),
  ]);

  return (
    <SearchResultsView
      result={result}
      query={sp.q || ""}
      selectedType={sp.type || "ALL"}
      selectedProvince={sp.province}
      provinces={provinces}
      baseUrl={`/${locale}/tim-kiem`}
    />
  );
}
