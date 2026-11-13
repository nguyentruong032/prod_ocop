import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getHome } from '@/lib/data/globals';
import { BlockRenderer } from '@/components/sections/BlockRenderer';
import { buildMetadata, buildOrganizationJsonLd, buildWebSiteJsonLd } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }> | { locale: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== 'vi') return {};

  const home = await getHome();
  return buildMetadata({
    title: 'Cổng thông tin điện tử OCOP Việt Nam',
    description: 'Chuyên trang thông tin điện tử OCOP Việt Nam - Kết nối sản phẩm OCOP đạt chuẩn 3-5 sao, lan tỏa văn hóa và câu chuyện nông sản Việt.',
    path: `/${locale}`,
    seo: home.seo,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== 'vi') {
    notFound();
  }

  const home = await getHome();
  const orgJsonLd = buildOrganizationJsonLd();
  const websiteJsonLd = buildWebSiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <BlockRenderer blocks={home.layout} />
    </>
  );
}
