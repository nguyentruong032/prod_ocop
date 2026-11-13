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
  const landing = await getLandingPage("products-craft");
  return buildMetadata({
    title: landing?.seo?.title || landing?.heading || "Thủ công mỹ nghệ OCOP",
    description:
      landing?.seo?.description ||
      landing?.intro ||
      "Sản phẩm thủ công mỹ nghệ tinh xảo từ làng nghề truyền thống.",
    path: `/${locale}/san-pham-ocop/thu-cong-my-nghe`,
    seo: landing?.seo,
    noIndex: (Number(sp.page) || 1) > 1 && Boolean(sp.stars || sp.province),
  });
}

export default async function CraftProductsPage({
  params,
  searchParams,
}: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  if (locale !== "vi") notFound();
  const page = Number(sp.page) || 1;
  const stars = sp.stars ? Number(sp.stars) : undefined;

  const [landing, provinces, result] = await Promise.all([
    getLandingPage("products-craft"),
    listProvinces(),
    listProducts({
      stars,
      category: "THU_CONG_MY_NGHE",
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
      baseUrl={`/${locale}/san-pham-ocop/thu-cong-my-nghe`}
      pageTitle="Thủ công mỹ nghệ OCOP"
      pageDescription="Hồn cốt làng nghề Việt Nam - Tinh hoa bàn tay nghệ nhân và bản sắc văn hóa ngàn năm."
      selectedStars={stars}
      selectedCategory="THU_CONG_MY_NGHE"
      selectedProvince={sp.province}
      searchQuery={sp.q}
      categoryFixed
      breadcrumbItems={[
        { label: "Sản phẩm OCOP", href: `/${locale}/san-pham-ocop` },
        { label: "Thủ công mỹ nghệ" },
      ]}
    />
  );
}
