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
  const landing = await getLandingPage("products-agri");
  return buildMetadata({
    title:
      landing?.seo?.title || landing?.heading || "Nông sản & Thực phẩm OCOP",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Nông sản tươi ngon, đặc sản vùng miền đạt chuẩn.",
    path: `/${locale}/san-pham-ocop/nong-san-va-thuc-pham`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.stars || sp.province),
  });
}

export default async function AgriProductsPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();
  const page = Number(sp.page) || 1;
  const stars = sp.stars ? Number(sp.stars) : undefined;

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("products-agri"),
    listProvinces(),
    listProducts({
      stars,
      category: "NONG_SAN_THUC_PHAM",
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
      baseUrl={`/${locale}/san-pham-ocop/nong-san-va-thuc-pham`}
      pageTitle="Nông sản & Thực phẩm OCOP"
      pageDescription="Hương vị trù phú của đất mẹ - Tuyển chọn nông sản sạch và thực phẩm chế biến tinh hoa bản địa."
      selectedStars={stars}
      selectedCategory="NONG_SAN_THUC_PHAM"
      selectedProvince={sp.province}
      searchQuery={sp.q}
      categoryFixed
      breadcrumbItems={[
        { label: "Sản phẩm OCOP", href: `/${locale}/san-pham-ocop` },
        { label: "Nông sản & Thực phẩm" },
      ]}
    />
  );
}
