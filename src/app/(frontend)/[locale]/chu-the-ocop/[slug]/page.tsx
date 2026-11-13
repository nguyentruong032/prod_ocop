import { notFound, permanentRedirect } from "next/navigation";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import { getProducer, listProducers } from "@/lib/data/producers";
import { getProductsByProducer } from "@/lib/data/products";
import { lookupRedirect } from "@/lib/redirects";
import { ProducerDetailView } from "@/components/features/producers/ProducerDetailView";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const res = await listProducers({ limit: 50 });
  return res.docs.map((p) => ({ slug: p.slug, locale: "vi" }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "vi") return {};
  const producer = await getProducer(slug);
  if (!producer) return {};

  return buildMetadata({
    title: producer.seo?.title || producer.name,
    description:
      producer.seo?.description ||
      producer.bio ||
      `Hồ sơ chủ thể OCOP: ${producer.name}`,
    path: `/${locale}/chu-the-ocop/${slug}`,
    seo: producer.seo,
    coverImage: producer.avatar || producer.coverImage,
  });
}

export default async function ProducerDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "vi") notFound();

  const isDraft = (await draftMode()).isEnabled;
  const producer = await getProducer(slug, isDraft);

  if (!producer) {
    const redirectUrl = await lookupRedirect(`/${locale}/chu-the-ocop/${slug}`);
    if (redirectUrl) permanentRedirect(redirectUrl);
    notFound();
  }

  const products = await getProductsByProducer(
    producer.id || producer.slug,
    12,
  );
  const path = `/${locale}/chu-the-ocop/${slug}`;
  const breadcrumbs = [
    { name: "Trang chủ", url: `/${locale}` },
    { name: "Chủ thể OCOP", url: `/${locale}/chu-the-ocop` },
    { name: producer.name, url: path },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbs)} />
      <ProducerDetailView producer={producer} products={products} />
    </>
  );
}
