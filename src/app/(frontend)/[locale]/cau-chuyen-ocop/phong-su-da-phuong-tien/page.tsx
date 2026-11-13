import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listArticles } from "@/lib/data/articles";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { MultimediaStoriesView } from "@/components/features/stories/MultimediaStoriesView";
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
  const landing = await getLandingPage("stories-multimedia");
  return buildMetadata({
    title:
      landing?.seo?.title || landing?.heading || "Phóng sự đa phương tiện OCOP",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Những thước phim tài liệu điện ảnh 4K chân thực về nông nghiệp và làng nghề.",
    path: `/${locale}/cau-chuyen-ocop/phong-su-da-phuong-tien`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.province),
  });
}

export default async function MultimediaStoriesPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("stories-multimedia"),
    listProvinces(),
    listArticles({
      kind: "STORY",
      topic: "REPORTAGE",
      province: sp.province,
      page: Number(sp.page) || 1,
      limit: 12,
    }),
  ]);

  return (
    <MultimediaStoriesView
      landing={landing}
      result={result}
      provinces={provinces}
      baseUrl={`/${locale}/cau-chuyen-ocop/phong-su-da-phuong-tien`}
      pageTitle="Phóng sự đa phương tiện"
      pageDescription="Rạp chiếu di sản số: Những thước phim tài liệu điện ảnh và ký sự âm thanh sống động từ thực địa nông thôn."
      selectedProvince={sp.province}
    />
  );
}
