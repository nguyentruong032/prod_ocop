import { MetadataRoute } from 'next';
import { generateRobotsTxt } from '@ocop/seo-config';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://ocopvietnam.vn';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/_next/',
        '/*.json$',
        '/search?q=',
        '/gui-bai-ho-so-ocop/thank-you',
        '/chu-the-ocop/*/edit',
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl.replace('https://', ''),
  };
}