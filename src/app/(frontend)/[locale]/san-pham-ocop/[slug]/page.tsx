import { notFound, permanentRedirect } from "next/navigation";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import { getProduct, listProducts } from "@/lib/data/products";
import { lookupRedirect } from "@/lib/redirects";
import { ProductDetailView } from "@/components/features/products/ProductDetailView";
import {
  buildMetadata,
  buildProductJsonLd,
  buildBreadcrumbJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const res = await listProducts({ limit: 50 });
  return res.docs.map((p) => ({ slug: p.slug, locale: "vi" }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "vi") return {};
  const product = await getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.seo?.title || product.title,
    description: product.seo?.description || product.excerpt,
    path: `/${locale}/san-pham-ocop/${slug}`,
    seo: product.seo,
    coverImage: product.coverImage,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "vi") notFound();

  const isDraft = (await draftMode()).isEnabled;
  const product = await getProduct(slug, isDraft);

  if (!product) {
    const redirectUrl = await lookupRedirect(
      `/${locale}/san-pham-ocop/${slug}`,
    );
    if (redirectUrl) permanentRedirect(redirectUrl);
    notFound();
  }

  const relatedRes = await listProducts({
    category: product.category,
    limit: 5,
  });
  const related = relatedRes.docs.filter((p) => p.slug !== slug).slice(0, 4);
  const path = `/${locale}/san-pham-ocop/${slug}`;
  const breadcrumbs = [
    { name: "Trang chủ", url: `/${locale}` },
    { name: "Sản phẩm OCOP", url: `/${locale}/san-pham-ocop` },
    { name: product.title, url: path },
  ];

  return (
    <>
      <JsonLd data={buildProductJsonLd(product, path)} />
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbs)} />
      <ProductDetailView product={product} relatedProducts={related} />
    </>
  );
}
