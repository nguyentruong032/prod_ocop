import { MetadataRoute } from 'next';
import { generateSitemapEntries } from '@ocop/seo-config';
import { getProducts, getStories, getDestinations, getNews, getEvents, getChuTheList, getIntegrationArticles } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = 'https://ocopvietnam.vn';

  try {
    const [
      productsResponse,
      storiesResponse,
      destinationsResponse,
      newsResponse,
      eventsResponse,
      chuTheListResponse,
      integrationArticlesResponse,
    ] = await Promise.all([
      getProducts({ limit: '1000' }).catch(() => ({ data: [] })),
      getStories({ limit: '1000' }).catch(() => ({ data: [] })),
      getDestinations({ limit: '1000' }).catch(() => ({ data: [] })),
      getNews({ limit: '1000' }).catch(() => ({ data: [] })),
      getEvents({ limit: '1000' }).catch(() => ({ data: [] })),
      getChuTheList({ limit: '1000' }).catch(() => ({ data: [] })),
      getIntegrationArticles({ limit: '1000' }).catch(() => ({ data: [] })),
    ]);

    const entries = generateSitemapEntries(
      productsResponse?.data || [],
      storiesResponse?.data || [],
      destinationsResponse?.data || [],
      newsResponse?.data || [],
      eventsResponse?.data || [],
      chuTheListResponse?.data || [],
      integrationArticlesResponse?.data || []
    );

    return entries.map((entry) => ({
      url: entry.url,
      lastModified: entry.lastmod ? new Date(entry.lastmod) : new Date(),
      changeFrequency: entry.changefreq,
      priority: entry.priority,
    }));
  } catch {
    return [
      { url: siteUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
      { url: `${siteUrl}/gui-bai-ho-so-ocop`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: `${siteUrl}/tim-kiem`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
      { url: `${siteUrl}/san-pham-ocop`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
      { url: `${siteUrl}/cau-chuyen-ocop`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
      { url: `${siteUrl}/diem-den-du-lich`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
      { url: `${siteUrl}/tin-tuc-su-kien`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
      { url: `${siteUrl}/ocop-hoi-nhap`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ];
  }
}
