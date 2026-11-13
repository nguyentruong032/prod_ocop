import type { Metadata } from 'next';
import type { Article, Event, Product, SEOData, Media } from '@/payload-types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ocopvietnam.vn';
const DEFAULT_SITE_NAME = 'Cổng thông tin điện tử OCOP Việt Nam';
const DEFAULT_DESCRIPTION = 'Chuyên trang thông tin điện tử OCOP Việt Nam - Nơi tập trung, chia sẻ và lan tỏa câu chuyện, sản phẩm, và giá trị OCOP đến cộng đồng.';

export interface BuildMetadataParams {
  title?: string | null;
  description?: string | null;
  path?: string;
  seo?: SEOData | null;
  coverImage?: Media | string | null;
  noIndex?: boolean;
}

export function getMediaUrl(image?: Media | string | null): string | undefined {
  if (!image) return undefined;
  if (typeof image === 'string') {
    if (image.startsWith('http://') || image.startsWith('https://')) return image;
    return `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;
  }
  if (image.url) {
    if (image.url.startsWith('http://') || image.url.startsWith('https://')) return image.url;
    return `${SITE_URL}${image.url.startsWith('/') ? '' : '/'}${image.url}`;
  }
  if (image.filename) {
    const base = process.env.NEXT_PUBLIC_MEDIA_URL || SITE_URL;
    return `${base}/media/img/w1080/${image.filename.replace(/^\/+/, '')}@webp`;
  }
  return undefined;
}

export function buildMetadata({
  title,
  description,
  path = '',
  seo,
  coverImage,
  noIndex = false,
}: BuildMetadataParams): Metadata {
  const finalTitle = seo?.title || title || DEFAULT_SITE_NAME;
  const pageTitle = finalTitle.includes(DEFAULT_SITE_NAME) ? finalTitle : `${finalTitle} — ${DEFAULT_SITE_NAME}`;
  const finalDescription = seo?.description || description || DEFAULT_DESCRIPTION;

  const canonicalUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const ogImageUrl = getMediaUrl(seo?.ogImage) || getMediaUrl(coverImage) || `${SITE_URL}/logo.png`;

  return {
    title: pageTitle,
    description: finalDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: pageTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: DEFAULT_SITE_NAME,
      locale: 'vi_VN',
      type: 'website',
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: finalTitle,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: finalDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: DEFAULT_SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://www.facebook.com/ocopvietnam',
      'https://www.youtube.com/@ocopvietnam',
      'https://www.tiktok.com/@ocopvietnam',
    ],
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: DEFAULT_SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/vi/tim-kiem?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildArticleJsonLd(article: Article, path: string) {
  const imageUrl = getMediaUrl(article.coverImage) || `${SITE_URL}/logo.png`;
  return {
    '@context': 'https://schema.org',
    '@type': article.kind === 'NEWS' ? 'NewsArticle' : 'Article',
    headline: article.title,
    description: article.excerpt || '',
    image: imageUrl ? [imageUrl] : [],
    datePublished: article.publishedAt || article.createdAt,
    dateModified: article.updatedAt || article.publishedAt || article.createdAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${path}`,
    },
    publisher: {
      '@type': 'Organization',
      name: DEFAULT_SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

export function buildProductJsonLd(product: Product, path: string) {
  const imageUrl = getMediaUrl(product.coverImage) || `${SITE_URL}/logo.png`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.excerpt || '',
    image: imageUrl ? [imageUrl] : [],
    url: `${SITE_URL}${path}`,
  };
}

export function buildEventJsonLd(event: Event, path: string) {
  const imageUrl = getMediaUrl(event.coverImage) || `${SITE_URL}/logo.png`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.excerpt || '',
    startDate: event.startAt,
    endDate: event.endAt || event.startAt,
    location: {
      '@type': 'Place',
      name: event.location || 'Việt Nam',
    },
    image: imageUrl ? [imageUrl] : [],
    url: `${SITE_URL}${path}`,
  };
}
