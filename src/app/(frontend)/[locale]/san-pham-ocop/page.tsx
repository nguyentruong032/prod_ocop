import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listProducts } from "@/lib/data/products";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { ProductsListView } from "@/components/features/products/ProductsListView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    stars?: string;
    category?: string;
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
  const landing = await getLandingPage("products-landing");
  return buildMetadata({
    title: landing?.seo?.title || landing?.heading || "Sản phẩm OCOP Việt Nam",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Hệ sinh thái sản phẩm OCOP đạt chuẩn 3 đến 5 sao.",
    path: `/${locale}/san-pham-ocop`,
    seo: landing?.seo,
    noIndex:
      (Number(sp.page) || 1) > 1 &&
      Boolean(sp.stars || sp.category || sp.province),
  });
}

export default async function ProductsLandingPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();
  const page = Number(sp.page) || 1;
  const stars = sp.stars ? Number(sp.stars) : undefined;

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("products-landing"),
    listProvinces(),
    listProducts({
      stars,
      category: sp.category,
      province: sp.province,
      q: sp.q,
      page,
      limit: 12,
    }),
  ]);

  return (
    <ProductsListView
      landing={landing}
      result={result}
      provinces={provinces}
      baseUrl={`/${locale}/san-pham-ocop`}
      pageTitle="Sản phẩm OCOP Việt Nam"
      pageDescription="Hệ sinh thái sản phẩm OCOP đạt chuẩn 3 đến 5 sao trên toàn quốc."
      selectedStars={stars}
      selectedCategory={sp.category}
      selectedProvince={sp.province}
      searchQuery={sp.q}
    />
  );
}
