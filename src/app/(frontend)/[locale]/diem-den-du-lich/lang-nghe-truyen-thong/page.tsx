import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { listDestinations } from "@/lib/data/destinations";
import { CraftVillagesView } from "@/components/features/destinations/CraftVillagesView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ craft?: string; province?: string; q?: string; page?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};
  const landing = await getLandingPage("destinations-craft");
  return buildMetadata({
    title: landing?.seo?.title || landing?.heading || "Hồn Cốt Làng Nghề Truyền Thống Việt Nam",
    description: landing?.seo?.description || landing?.intro || "Tôn vinh làng nghề truyền thống và tinh hoa tổ nghề OCOP.",
    path: `/${locale}/diem-den-du-lich/lang-nghe-truyen-thong`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.craft || sp.province || sp.q),
  });
}

export default async function CraftVillagesPage({ params, searchParams }: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("destinations-craft"),
    listProvinces(),
    listDestinations({
      kind: "CRAFT_VILLAGE",
      craftGroup: sp.craft,
      province: sp.province,
      q: sp.q,
      page: Number(sp.page) || 1,
      limit: 12,
    }),
  ]);

  return (
    <CraftVillagesView
      landing={landing}
      result={result}
      provinces={provinces}
      selectedCraft={sp.craft}
      selectedProvince={sp.province}
      searchQuery={sp.q}
      baseUrl={`/${locale}/diem-den-du-lich/lang-nghe-truyen-thong`}
    />
  );
}
