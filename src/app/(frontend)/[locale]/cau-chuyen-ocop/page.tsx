import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listArticles } from "@/lib/data/articles";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { StoriesListView } from "@/components/features/stories/StoriesListView";
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
  const landing = await getLandingPage("stories-landing");
  return buildMetadata({
    title:
      landing?.seo?.title ||
      landing?.heading ||
      "Câu chuyện OCOP – Hồn sản phẩm",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Khám phá văn hóa bản địa, ký sự điền dã và hành trình khởi nghiệp của các chủ thể.",
    path: `/${locale}/cau-chuyen-ocop`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.province),
  });
}

export default async function StoriesOverviewPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("stories-landing"),
    listProvinces(),
    listArticles({
      kind: "STORY",
      province: sp.province,
      page: Number(sp.page) || 1,
      limit: 12,
    }),
  ]);

  return (
    <StoriesListView
      landing={landing}
      result={result}
      provinces={provinces}
      baseUrl={`/${locale}/cau-chuyen-ocop`}
      pageTitle="Câu chuyện OCOP – Hồn sản phẩm"
      pageDescription="Đi sâu vào phần hồn của mỗi sản phẩm: văn hóa bản địa, ký sự điền dã và những thước phim tài liệu sống động."
      selectedProvince={sp.province}
    />
  );
}
