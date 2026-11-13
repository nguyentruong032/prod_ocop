// News Detail Page: /tin-tuc/[slug]
// ISR with revalidate, generateMetadata, JSON-LD Article schema

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { fetchNewsBySlug, fetchRelatedNews, fetchLatestNews } from '@/lib/api';
import type { NewsArticle } from '@ocop/shared-types';
import { NewsCard } from '@/components/NewsCard';
import { CategoryTabs } from '@/components/CategoryTabs';

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

async function getNewsArticle(slug: string): Promise<NewsArticle | null> {
  try {
    return await fetchNewsBySlug(slug);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    return {
      title: 'Tin tức không tồn tại',
      robots: 'noindex, nofollow',
    };
  }

  const seo = article.seo || {};
  const baseUrl = 'https://ocopvietnam.vn';

  return {
    title: seo.metaTitle || article.title,
    description: seo.metaDescription || article.excerpt,
    keywords: seo.metaKeywords || article.tags?.join(', '),
    authors: article.author ? [{ name: article.author }] : [{ name: 'OCOP Việt Nam' }],
    creator: 'OCOP Việt Nam',
    publisher: 'OCOP Việt Nam',
    formatDetection: { telephone: false },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: seo.canonicalUrl || `/tin-tuc/${slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'vi_VN',
      url: `/tin-tuc/${slug}`,
      siteName: 'OCOP Việt Nam',
      title: seo.ogTitle || article.title,
      description: seo.ogDescription || article.excerpt,
      images: article.thumbnail
        ? [
            {
              url: article.thumbnail.url,
              width: article.thumbnail.width || 1200,
              height: article.thumbnail.height || 630,
              alt: article.thumbnail.alt || article.title,
            },
          ]
        : [
            {
              url: '/images/og/tin-tuc-default-og.jpg',
              width: 1200,
              height: 630,
              alt: 'Tin tức OCOP Việt Nam',
            },
          ],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: article.author ? [article.author] : ['OCOP Việt Nam'],
      section: 'Tin tức',
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || article.title,
      description: seo.ogDescription || article.excerpt,
      images: article.thumbnail ? [article.thumbnail.url] : ['/images/og/tin-tuc-default-og.jpg'],
      creator: '@ocopvietnam',
    },
    other: {
      'article:author': article.author || 'OCOP Việt Nam',
      'article:publisher': 'OCOP Việt Nam',
      'article:section': 'Tin tức',
      'article:tag': article.tags.join(','),
      'article:published_time': article.publishedAt,
      'article:modified_time': article.updatedAt || article.publishedAt,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

export async function generateStaticParams() {
  // In production, fetch from CMS/database
  const slugs = [
    'chinh-sach-ocop-moi-2024',
    'hoi-cho-ocop-quoc-te',
    'bao-cao-thi-truong-xuat-khau',
    'workshop-xuat-khau-ocop',
    'dao-tao-chu-the-ocop',
    'ocop-5-sao-moi-nhat',
  ];
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 3600; // 1 hour ISR revalidation

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const [relatedNews, latestNews] = await Promise.all([
    fetchRelatedNews(slug, article.category, 3),
    fetchLatestNews(4),
  ]);

  const jsonLd = generateArticleJsonLd(article);
  const categoryLabel = getCategoryLabel(article.category);

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="border-b border-ocop-primary-100 bg-ocop-primary-50" aria-label="Breadcrumb">
        <div className="container-main py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-ocop-primary-500 hover:text-ocop-primary-700">
                Trang chủ
              </Link>
            </li>
            <li aria-hidden="true" className="text-ocop-primary-300">/</li>
            <li>
              <Link href="/tin-tuc-su-kien?type=tin-tuc" className="text-ocop-primary-500 hover:text-ocop-primary-700">
                Tin tức
              </Link>
            </li>
            <li aria-hidden="true" className="text-ocop-primary-300">/</li>
            <li>
              <Link href={`/tin-tuc-su-kien?type=tin-tuc&category=${article.category}`} className="text-ocop-primary-500 hover:text-ocop-primary-700">
                {categoryLabel}
              </Link>
            </li>
            <li aria-hidden="true" className="text-ocop-primary-300">/</li>
            <li aria-current="page" className="text-ocop-primary-900 font-medium truncate max-w-[300px]">
              {article.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="container-main py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Link
              href={`/tin-tuc-su-kien?type=tin-tuc&category=${article.category}`}
              className="badge bg-ocop-primary-100 text-ocop-primary-800"
            >
              {categoryLabel}
            </Link>
            {article.isBreaking && <span className="badge bg-red-100 text-red-800">BỘC</span>}
            {article.isFeatured && <span className="badge bg-ocop-gold-100 text-ocop-gold-800">NỔI BẬT</span>}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ocop-primary-950 font-serif leading-tight mb-6">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="text-lg text-ocop-primary-600 leading-relaxed mb-8 border-l-4 border-ocop-primary-500 pl-4 font-serif italic">
              {article.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-ocop-primary-500 mb-8 pb-8 border-b border-ocop-primary-100">
            {article.author && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {article.author}
              </span>
            )}
            <time dateTime={article.publishedAt} className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {format(new Date(article.publishedAt), 'EEEE, dd/MM/yyyy', { locale: vi })}
            </time>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime} min đọc
            </span>
            {article.viewCount && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {article.viewCount.toLocaleString('vi-VN')} lượt xem
              </span>
            )}
          </div>

          {/* Share Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8" role="group" aria-label="Chia sẻ bài viết">
            <span className="text-sm font-medium text-ocop-primary-700">Chia sẻ:</span>
            <ShareButtons article={article} />
          </div>
        </div>
      </header>

      {/* Article Thumbnail */}
      {article.thumbnail && (
        <figure className="w-full max-h-[600px] overflow-hidden">
          <Image
            src={article.thumbnail.url}
            alt={article.thumbnail.alt || article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {article.thumbnail.caption && (
            <figcaption className="container-main py-3 text-sm text-ocop-primary-500 text-center">
              {article.thumbnail.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Article Content */}
      <div className="container-main py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg prose-ocop max-w-none font-sans"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-ocop-primary-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-ocop-primary-700">Thẻ:</span>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tin-tuc-su-kien?search=${encodeURIComponent(tag)}`}
                      className="badge bg-ocop-primary-100 text-ocop-primary-700 hover:bg-ocop-primary-200"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Author Box */}
          {article.author && (
            <div className="mt-12 p-6 rounded-xl bg-ocop-primary-50 border border-ocop-primary-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-ocop-primary-200 flex items-center justify-center text-2xl font-bold text-ocop-primary-700 flex-shrink-0">
                  {article.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-semibold text-ocop-primary-900">{article.author}</h4>
                  <p className="text-sm text-ocop-primary-500 mt-1">Biên tập viên OCOP Việt Nam</p>
                </div>
              </div>
            </div>
          )}

          {/* Related News */}
          {(relatedNews.length > 0 || latestNews.length > 0) && (
            <section className="mt-16">
              <h2 className="section-title mb-6">Tin tức liên quan</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedNews.slice(0, 3).map((news) => (
                  <NewsCard key={news.slug} article={news} />
                ))}
                {relatedNews.length < 3 && latestNews.slice(0, 3 - relatedNews.length).map((news) => (
                  <NewsCard key={news.slug} article={news} />
                ))}
              </div>
            </section>
          )}

          {/* Newsletter CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-ocop-primary-700 to-ocop-primary-900 text-white text-center">
            <h3 className="text-2xl font-bold font-serif mb-3">Đừng bỏ lỡ tin tức OCOP</h3>
            <p className="text-ocop-primary-100 mb-6 max-w-xl mx-auto">
              Nhận bản tin hàng tuần với chính sách mới, cơ hội xuất khẩu, hội chợ và workshop độc quyền.
            </p>
            <form action="/api/newsletter" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Email của bạn"
                className="input flex-1 bg-ocop-primary-800 border-ocop-primary-600 text-white placeholder-ocop-primary-400 focus:border-ocop-primary-400 focus:ring-ocop-primary-900"
                required
              />
              <button type="submit" className="btn-primary bg-ocop-gold-500 hover:bg-ocop-gold-600 text-ocop-primary-950 whitespace-nowrap">
                Đăng ký ngay
              </button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}

function ShareButtons({ article }: { article: NewsArticle }) {
  const url = `https://ocopvietnam.vn/tin-tuc-su-kien/${article.slug}`;
  const title = encodeURIComponent(article.title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary px-3 py-2 text-sm"
        aria-label="Chia sẻ lên Facebook"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary px-3 py-2 text-sm"
        aria-label="Chia sẻ lên Twitter"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary px-3 py-2 text-sm"
        aria-label="Chia sẻ lên LinkedIn"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </a>
      <a
        href={`https://zalo.me/share?url=${encodedUrl}&title=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary px-3 py-2 text-sm"
        aria-label="Chia sẻ lên Zalo"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      </a>
      <button
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(url);
            alert('Đã sao chép liên kết!');
          } catch {
            alert('Không thể sao chép. Vui lòng thử lại.');
          }
        }}
        className="btn-secondary px-3 py-2 text-sm"
        aria-label="Sao chép liên kết"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 012-2h10a2 2 0 012 2v1m-6 12a2 2 0 114 0 2 2 0 01-4 0z" />
        </svg>
      </button>
    </div>
  );
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'chinh-sach-co-che': 'Chính sách & Cơ chế',
    'hoat-dong-xuc-tien': 'Hoạt động - Xúc tiến thương mại',
    'ocop-dia-phuong': 'OCOP Địa phương',
    'chinh-sach': 'Chính sách',
    'thi-truong': 'Báo cáo thị trường',
  };
  return labels[category] || category;
}

function generateArticleJsonLd(article: NewsArticle) {
  const baseUrl = 'https://ocopvietnam.vn';

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: article.thumbnail ? [article.thumbnail.url] : [`${baseUrl}/images/og/tin-tuc-default-og.jpg`],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.author || 'OCOP Việt Nam',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OCOP Việt Nam',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo-ocop.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/tin-tuc/${article.slug}`,
    },
    articleSection: getCategoryLabel(article.category),
    keywords: article.tags.join(', '),
    wordCount: article.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    inLanguage: 'vi-VN',
    isAccessibleForFree: true,
  };
}