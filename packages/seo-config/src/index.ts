import type { SEOData, Product, Story, Destination, NewsArticle, Event, ChuThe, IntegrationArticle, SiteConfig } from '@ocop/shared-types';

// ============================================
// SITE-WIDE SEO CONFIGURATION
// ============================================

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ocopvietnam.vn';
export const siteName = 'OCOP Việt Nam';
export const siteDescription = 'Tạp chí tri thức bản địa & di sản nông thôn - Chuyên trang thông tin điện tử giới thiệu sản phẩm OCOP Việt Nam qua câu chuyện văn hóa bản địa, người giữ nghề, du lịch nông thôn và dữ liệu hội nhập.';

// Default Open Graph image
export const defaultOgImage = `${siteUrl}/images/og-default.jpg`;
export const defaultTwitterImage = `${siteUrl}/images/twitter-default.jpg`;

// ============================================
// JSON-LD SCHEMA GENERATORS
// ============================================

export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    alternateName: 'OCOP Vietnam',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: siteDescription,
    foundingDate: '2026',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressLocality: 'Hà Nội',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+84-24-XXXX-XXXX',
        contactType: 'customer service',
        availableLanguage: ['Vietnamese', 'English'],
      },
    ],
    sameAs: [
      'https://facebook.com/ocopvietnam',
      'https://twitter.com/ocopvietnam',
      'https://youtube.com/@ocopvietnam',
      'https://linkedin.com/company/ocopvietnam',
    ],
  };
}

export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    publisher: {
      '@type': 'Organization',
      name: siteName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/tim-kiem?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

export function generateArticleSchema(article: Story | NewsArticle | IntegrationArticle): object {
  const isStory = 'type' in article && ['feature', 'story', 'video'].includes(article.type);
  const articleType = isStory ? 'Article' : 'NewsArticle';

  // Handle different property names across types
  const image = 'featuredImage' in article ? article.featuredImage : (article.image || defaultOgImage);
  const datePublished = 'publishedDate' in article ? article.publishedDate : (article as NewsArticle).publishedAt;
  const dateModified = 'updatedAt' in article ? article.updatedAt : datePublished;

  return {
    '@context': 'https://schema.org',
    '@type': articleType,
    headline: article.headline,
    description: article.excerpt,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
      ...(article.authorRole && { jobTitle: article.authorRole }),
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${getArticleUrl(article)}`,
    },
    keywords: article.tags?.join(', '),
    articleSection: article.category,
    ...(isStory && {
      genre: article.subCategory,
      about: article.relatedProducts?.map(id => ({
        '@type': 'Product',
        '@id': `${siteUrl}/san-pham-ocop/${id}`,
      })),
    }),
  };
}

export function generateProductSchema(product: Product): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images?.[0] || defaultOgImage,
    brand: {
      '@type': 'Brand',
      name: siteName,
    },
    manufacturer: {
      '@type': 'Organization',
      name: product.producer,
    },
    sku: product.id,
    gtin13: product.id, // Placeholder - would need actual GTIN
    category: product.category,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.stars?.toString() || '5',
      reviewCount: '0', // Would need actual reviews
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'VND',
      lowPrice: extractLowPrice(product.price != null ? String(product.price) : undefined),
      highPrice: extractHighPrice(product.price != null ? String(product.price) : undefined),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: product.producer,
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Hạng sao OCOP',
        value: `${product.stars} Sao`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Tỉnh thành',
        value: product.province,
      },
      {
        '@type': 'PropertyValue',
        name: 'Chứng nhận',
        value: product.certifications?.join(', ') || '',
      },
    ],
  };
}

export function generateDestinationSchema(destination: Destination): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description,
    image: destination.image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: destination.district,
      addressRegion: destination.province,
      addressCountry: 'VN',
    },
    geo: destination.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: destination.coordinates.lat,
      longitude: destination.coordinates.lng,
    } : undefined,
    touristType: destination.category,
    containsPlace: destination.highlights?.map(h => ({
      '@type': 'Place',
      name: h,
    })),
  };
}

export function generateEventSchema(event: Event): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.headline,
    description: event.description,
    image: event.image || defaultOgImage,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    eventStatus: mapEventStatus(event.status),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'VN',
        addressLocality: event.province,
        streetAddress: event.address,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: event.organizer || siteName,
      url: siteUrl,
    },
    offers: event.registrationUrl ? {
      '@type': 'Offer',
      url: event.registrationUrl,
      price: '0',
      priceCurrency: 'VND',
      availability: 'https://schema.org/InStock',
    } : undefined,
  };
}

export function generateChuTheSchema(chuThe: ChuThe): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: chuThe.tenChuThe,
    alternateName: chuThe.tenSanPham,
    description: chuThe.moTa,
    url: `${siteUrl}/chu-the-ocop/${chuThe.slug}`,
    logo: chuThe.hinhAnh?.[0],
    address: {
      '@type': 'PostalAddress',
      addressLocality: chuThe.tinhThanh,
      addressCountry: 'VN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: chuThe.phone,
      email: chuThe.email,
      contactType: 'customer service',
      availableLanguage: 'Vietnamese',
    },
    makesOffer: {
      '@type': 'Offer',
      name: chuThe.tenSanPham,
      description: chuThe.moTa,
      category: chuThe.nganhHang,
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Hạng sao OCOP',
          value: chuThe.hangSao,
        },
        {
          '@type': 'PropertyValue',
          name: 'Loại hình',
          value: chuThe.loaiHinh,
        },
      ],
    },
  };
}

export function generateItemListSchema<T extends { id: string; slug: string; name: string }>(
  items: T[],
  type: 'ItemList',
  listName: string,
  baseUrl: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteUrl}${baseUrl}/${item.slug}`,
      name: item.name,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ============================================
// METADATA GENERATORS
// ============================================

export function generateMetadata(seo: SEOData, path: string): object {
  const url = `${siteUrl}${path}`;
  const ogImage = seo.ogImage || defaultOgImage;
  const twitterImage = seo.ogImage || defaultTwitterImage;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords?.join(', '),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: seo.ogType || 'website',
      locale: 'vi_VN',
      url,
      siteName,
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seo.ogTitle || seo.metaTitle,
        },
      ],
    },
    twitter: {
      card: seo.twitterCard || 'summary_large_image',
      site: '@ocopvietnam',
      creator: '@ocopvietnam',
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: [twitterImage],
    },
    alternates: {
      canonical: seo.canonicalUrl || url,
      languages: {
        'vi-VN': url,
        'en-US': url.replace('/vi/', '/en/'),
      },
    },
    other: {
      'theme-color': '#012d1d',
      'color-scheme': 'light',
    },
  };
}

export function generateHomeMetadata(): object {
  return generateMetadata({
    metaTitle: `${siteName} - ${siteDescription}`,
    metaDescription: siteDescription,
    metaKeywords: ['OCOP', 'Việt Nam', 'sản phẩm OCOP', 'du lịch nông thôn', 'văn hóa bản địa', 'di sản nông thôn'],
    ogTitle: siteName,
    ogDescription: siteDescription,
    ogType: 'website',
    canonicalUrl: siteUrl,
  }, '/');
}

export function generateProductMetadata(product: Product): object {
  return generateMetadata(product.seo, `/san-pham-ocop/${product.slug}`);
}

export function generateStoryMetadata(story: Story): object {
  return generateMetadata(story.seo, getArticleUrl(story));
}

export function generateDestinationMetadata(destination: Destination): object {
  return generateMetadata(destination.seo, `/diem-den-du-lich/${destination.slug}`);
}

export function generateNewsMetadata(news: NewsArticle): object {
  return generateMetadata(news.seo, `/tin-tuc-su-kien/${news.slug}`);
}

export function generateEventMetadata(event: Event): object {
  return generateMetadata(event.seo, `/tin-tuc-su-kien/su-kien/${event.slug}`);
}

export function generateCategoryMetadata(
  category: string,
  title: string,
  description: string,
  path: string
): object {
  return generateMetadata({
    metaTitle: `${title} | ${siteName}`,
    metaDescription: description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    canonicalUrl: `${siteUrl}${path}`,
  }, path);
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function getArticleUrl(article: Story | NewsArticle | IntegrationArticle): string {
  if ('type' in article && ['feature', 'story', 'video'].includes(article.type)) {
    return `/cau-chuyen-ocop/${article.slug}`;
  }
  if ('category' in article && ['Chính sách & Cơ chế', 'Hoạt động - Xúc tiến thương mại', 'OCOP Địa phương', 'Chính sách'].includes(article.category)) {
    return `/tin-tuc-su-kien/${article.slug}`;
  }
  return `/ocop-hoi-nhap/${article.slug}`;
}

function extractLowPrice(priceString?: string): string {
  if (!priceString) return '0';
  const match = priceString.match(/([\d.,]+)/);
  return match && match[1] ? match[1].replace(/[.,]/g, '') : '0';
}

function extractHighPrice(priceString?: string): string {
  if (!priceString) return '0';
  const matches = priceString.match(/([\d.,]+)/g);
  if (!matches || matches.length === 0) return '0';
  const last = matches[matches.length - 1];
  return last ? last.replace(/[.,]/g, '') : '0';
}

function mapEventStatus(status: string): string {
  switch (status) {
    case 'Sắp diễn ra':
      return 'https://schema.org/EventScheduled';
    case 'Đang diễn ra':
      return 'https://schema.org/EventPostponed'; // or EventRescheduled
    case 'Đã kết thúc':
      return 'https://schema.org/EventCancelled'; // or EventMovedOnline
    default:
      return 'https://schema.org/EventScheduled';
  }
}

// ============================================
// SITEMAP GENERATION
// ============================================

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemapEntries(
  products: Product[],
  stories: Story[],
  destinations: Destination[],
  news: NewsArticle[],
  events: Event[],
  chuTheList: ChuThe[],
  integrationArticles: IntegrationArticle[]
): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    { url: siteUrl, lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
    { url: `${siteUrl}/cau-chuyen-ocop`, changefreq: 'daily', priority: 0.9 },
    { url: `${siteUrl}/san-pham-ocop`, changefreq: 'daily', priority: 0.9 },
    { url: `${siteUrl}/diem-den-du-lich`, changefreq: 'daily', priority: 0.9 },
    { url: `${siteUrl}/tin-tuc-su-kien`, changefreq: 'hourly', priority: 0.9 },
    { url: `${siteUrl}/ocop-hoi-nhap`, changefreq: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/chu-the-ocop`, changefreq: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/ban-doc-toa-soan`, changefreq: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/tim-kiem`, changefreq: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/lien-he`, changefreq: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/chinh-sach-bao-mat`, changefreq: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/dieu-khoan`, changefreq: 'yearly', priority: 0.3 },
  ];

  // Products
  products.forEach(p => {
    entries.push({
      url: `${siteUrl}/san-pham-ocop/${p.slug}`,
      lastmod: p.updatedAt || p.createdAt,
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  // Stories
  stories.forEach(s => {
    entries.push({
      url: `${siteUrl}/cau-chuyen-ocop/${s.slug}`,
      lastmod: s.updatedAt || s.publishedDate,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });

  // Destinations
  destinations.forEach(d => {
    entries.push({
      url: `${siteUrl}/diem-den-du-lich/${d.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });

  // News
  news.forEach(n => {
    entries.push({
      url: `${siteUrl}/tin-tuc-su-kien/${n.slug}`,
      lastmod: n.updatedAt || n.publishedAt,
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  // Events
  events.forEach(e => {
    entries.push({
      url: `${siteUrl}/tin-tuc-su-kien/su-kien/${e.slug}`,
      lastmod: e.updatedAt || e.startDate,
      changefreq: 'weekly',
      priority: 0.7,
    });
  });

  // Chu The
  chuTheList.forEach(c => {
    entries.push({
      url: `${siteUrl}/chu-the-ocop/${c.slug}`,
      lastmod: c.updatedAt || c.createdAt,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });

  // Integration articles
  integrationArticles.forEach(a => {
    entries.push({
      url: `${siteUrl}/ocop-hoi-nhap/${a.slug}`,
      lastmod: a.date,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });

  return entries;
}

// ============================================
// ROBOTS.TXT GENERATION
// ============================================

export function generateRobotsTxt(): string {
  return `# OCOP Vietnam Robots.txt
User-agent: *
Allow: /

# Disallow admin/private paths
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /*.json$
Disallow: /search?q=

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 10

# Host
Host: ${siteUrl.replace('https://', '')}
`;
}

// ============================================
// STRUCTURED DATA HELPERS
// ============================================

export function combineStructuredData(...schemas: object[]): object[] {
  return schemas.filter(Boolean);
}

export function scriptTag(data: object): string {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

// ============================================
// EXPORTS
// ============================================

export const seoConfig = {
  siteUrl,
  siteName,
  siteDescription,
  defaultOgImage,
  defaultTwitterImage,
  generateMetadata,
  generateHomeMetadata,
  generateProductMetadata,
  generateStoryMetadata,
  generateDestinationMetadata,
  generateNewsMetadata,
  generateEventMetadata,
  generateCategoryMetadata,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateProductSchema,
  generateDestinationSchema,
  generateEventSchema,
  generateChuTheSchema,
  generateItemListSchema,
  generateFAQSchema,
  generateSitemapEntries,
  generateRobotsTxt,
  combineStructuredData,
  scriptTag,
};

export default seoConfig;