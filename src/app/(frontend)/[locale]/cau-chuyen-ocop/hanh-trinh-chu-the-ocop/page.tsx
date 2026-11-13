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
  const landing = await getLandingPage("stories-journey");
  return buildMetadata({
    title: landing?.seo?.title || landing?.heading || "Hành trình Chủ thể OCOP",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Những câu chuyện khởi nghiệp vượt khó đưa sản vật làng quê thành thương hiệu lớn.",
    path: `/${locale}/cau-chuyen-ocop/hanh-trinh-chu-the-ocop`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.province),
  });
}

export default async function JourneyStoriesPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("stories-journey"),
    listProvinces(),
    listArticles({
      kind: "STORY",
      topic: "JOURNEY",
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
      baseUrl={`/${locale}/cau-chuyen-ocop/hanh-trinh-chu-the-ocop`}
      pageTitle="Hành trình Chủ thể OCOP"
      pageDescription="Ý chí, nghị lực và khát vọng làm giàu trên mảnh đất quê hương của các chủ thể kinh tế nông thôn."
      selectedProvince={sp.province}
      breadcrumbItems={[
        { label: "Câu chuyện OCOP", href: `/${locale}/cau-chuyen-ocop` },
        { label: "Hành trình Chủ thể OCOP" },
      ]}
    />
  );
}
