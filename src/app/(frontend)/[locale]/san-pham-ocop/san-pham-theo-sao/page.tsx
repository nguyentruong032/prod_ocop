import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listProducts, countProductsByStars } from "@/lib/data/products";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { ProductsByStarsView } from "@/components/features/products/ProductsByStarsView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ stars?: string; province?: string; page?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") return {};
  const landing = await getLandingPage("products-stars");
  return buildMetadata({
    title:
      landing?.seo?.title ||
      landing?.heading ||
      "Phân hạng Sản phẩm OCOP theo sao",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Tra cứu sản phẩm OCOP đạt 3 sao, 4 sao và 5 sao quốc gia.",
    path: `/${locale}/san-pham-ocop/san-pham-theo-sao`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.stars || sp.province),
  });
}

export default async function ProductsByStarsPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();
  const page = Number(sp.page) || 1;
  const stars = sp.stars ? Number(sp.stars) : undefined;

  const [landing, starsCounts, provinces, result] = await Promise.all([
    getLandingPage("products-stars"),
    countProductsByStars(),
    listProvinces(),
    listProducts({ stars, province: sp.province, page, limit: 12 }),
  ]);

  return (
    <ProductsByStarsView
      landing={landing}
      result={result}
      provinces={provinces}
      starsCounts={starsCounts}
      currentStars={stars}
      selectedProvince={sp.province}
    />
  );
}
