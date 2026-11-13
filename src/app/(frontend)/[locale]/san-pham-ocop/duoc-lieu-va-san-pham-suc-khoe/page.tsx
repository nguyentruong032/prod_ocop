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
  const landing = await getLandingPage("products-herbal");
  return buildMetadata({
    title:
      landing?.seo?.title || landing?.heading || "Dược liệu & Sức khỏe OCOP",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Dược liệu quý, tinh dầu thiên nhiên an toàn sức khỏe.",
    path: `/${locale}/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.stars || sp.province),
  });
}

export default async function HerbalProductsPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();
  const page = Number(sp.page) || 1;
  const stars = sp.stars ? Number(sp.stars) : undefined;

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("products-herbal"),
    listProvinces(),
    listProducts({
      stars,
      category: "DUOC_LIEU_SUC_KHOE",
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
      baseUrl={`/${locale}/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe`}
      pageTitle="Dược liệu & Sức khỏe OCOP"
      pageDescription="Kho tàng dược liệu bản địa - Tinh túy từ rừng thiêng và các bài thuốc dân gian truyền đời."
      selectedStars={stars}
      selectedCategory="DUOC_LIEU_SUC_KHOE"
      selectedProvince={sp.province}
      searchQuery={sp.q}
      categoryFixed
      breadcrumbItems={[
        { label: "Sản phẩm OCOP", href: `/${locale}/san-pham-ocop` },
        { label: "Dược liệu & Sức khỏe" },
      ]}
    />
  );
}
