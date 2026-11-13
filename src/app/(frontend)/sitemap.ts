import type { MetadataRoute } from 'next';
import { getCached } from '@/lib/cache';
import { getPayloadClient } from '@/lib/payload';
import { getDocPath } from '@/lib/paths';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ocopvietnam.vn';

const staticRoutes = [
  '/vi',
  '/vi/tin-tuc-su-kien',
  '/vi/tin-tuc-su-kien/chinh-sach-va-co-che',
  '/vi/tin-tuc-su-kien/xuc-tien-thuong-mai',
  '/vi/tin-tuc-su-kien/ocop-dia-phuong',
  '/vi/ocop-hoi-nhap',
  '/vi/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te',
  '/vi/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te',
  '/vi/ocop-hoi-nhap/chuyen-doi-so-ocop',
  '/vi/san-pham-ocop',
  '/vi/san-pham-ocop/nong-san-va-thuc-pham',
  '/vi/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe',
  '/vi/san-pham-ocop/thu-cong-my-nghe',
  '/vi/san-pham-ocop/san-pham-theo-sao',
  '/vi/chu-the-ocop',
  '/vi/cau-chuyen-ocop',
  '/vi/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia',
  '/vi/cau-chuyen-ocop/phong-su-da-phuong-tien',
  '/vi/cau-chuyen-ocop/hanh-trinh-chu-the-ocop',
  '/vi/diem-den-du-lich',
  '/vi/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop',
  '/vi/diem-den-du-lich/lang-nghe-truyen-thong',
  '/vi/tim-kiem',
  '/vi/gui-bai-ho-so-ocop',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getCached(
    ['sitemap'],
    ['sitemap'],
    async () => {
      const now = new Date();

      const items: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: now,
        changeFrequency: route === '/vi' ? 'daily' : 'weekly',
        priority: route === '/vi' ? 1.0 : 0.8,
      }));

      const payload = await getPayloadClient();
      if (!payload) return items;

      try {
        // Fetch up to 500 published articles
        const articlesRes = await payload.find<{ slug: string; kind?: string | null; updatedAt?: string }>({
          collection: 'articles',
          where: { _status: { equals: 'published' } },
          limit: 500,
          select: { slug: true, kind: true, updatedAt: true },
        });

        articlesRes.docs?.forEach((doc) => {
          items.push({
            url: `${SITE_URL}${getDocPath('articles', doc)}`,
            lastModified: doc.updatedAt ? new Date(doc.updatedAt) : now,
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        });

        // Fetch up to 500 published products
        const productsRes = await payload.find<{ slug: string; updatedAt?: string }>({
          collection: 'products',
          where: { _status: { equals: 'published' } },
          limit: 500,
          select: { slug: true, updatedAt: true },
        });

        productsRes.docs?.forEach((doc) => {
          items.push({
            url: `${SITE_URL}${getDocPath('products', doc)}`,
            lastModified: doc.updatedAt ? new Date(doc.updatedAt) : now,
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        });

        // Fetch up to 500 published destinations
        const destinationsRes = await payload.find<{ slug: string; updatedAt?: string }>({
          collection: 'destinations',
          where: { _status: { equals: 'published' } },
          limit: 500,
          select: { slug: true, updatedAt: true },
        });

        destinationsRes.docs?.forEach((doc) => {
          items.push({
            url: `${SITE_URL}${getDocPath('destinations', doc)}`,
            lastModified: doc.updatedAt ? new Date(doc.updatedAt) : now,
            changeFrequency: 'weekly',
            priority: 0.6,
          });
        });
      } catch {
        // Fallback to static routes
      }

      return items;
    },
    86400,
  );
}
