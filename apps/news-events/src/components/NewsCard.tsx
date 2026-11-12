'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import type { NewsArticle } from '@ocop/shared-types';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'default' | 'featured' | 'compact';
}

const categoryColors: Record<string, string> = {
  'chinh-sach-co-che': 'bg-blue-100 text-blue-800',
  'hoat-dong-xuc-tien': 'bg-green-100 text-green-800',
  'ocop-dia-phuong': 'bg-orange-100 text-orange-800',
  'chinh-sach': 'bg-purple-100 text-purple-800',
  'thi-truong': 'bg-red-100 text-red-800',
};

const categoryLabels: Record<string, string> = {
  'chinh-sach-co-che': 'Chính sách & Cơ chế',
  'hoat-dong-xuc-tien': 'Hoạt động - Xúc tiến TM',
  'ocop-dia-phuong': 'OCOP Địa phương',
  'chinh-sach': 'Chính sách',
  'thi-truong': 'Báo cáo thị trường',
};

export function NewsCard({ article, variant = 'default' }: NewsCardProps) {
  const categoryColor = categoryColors[article.category] || 'bg-ocop-primary-100 text-ocop-primary-800';
  const categoryLabel = categoryLabels[article.category] || article.category;

  if (variant === 'compact') {
    return (
      <Link
        href={`/tin-tuc/${article.slug}`}
        className="flex gap-3 p-3 rounded-lg bg-white border border-ocop-primary-100 hover:border-ocop-primary-200 hover:shadow-md transition-all"
      >
        <div className="relative h-20 w-32 flex-shrink-0 rounded-lg overflow-hidden bg-ocop-primary-50">
          {article.thumbnail ? (
            <Image
              src={article.thumbnail.url}
              alt={article.thumbnail.alt || article.title}
              fill
              sizes="128px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-3xl">📰</div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-ocop-primary-900 line-clamp-2">{article.title}</p>
          <div className="mt-1 flex items-center gap-2 text-xs text-ocop-primary-500">
            <time dateTime={article.publishedAt}>
              {format(new Date(article.publishedAt), 'dd/MM/yyyy', { locale: vi })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{article.readTime} min đọc</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <article className="card overflow-hidden">
        <Link href={`/tin-tuc/${article.slug}`} className="block">
          <div className="relative aspect-video overflow-hidden">
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt={article.thumbnail.alt || article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-ocop-primary-50 text-6xl">📰</div>
            )}
            <div className="absolute top-3 left-3">
              <span className={`badge ${categoryColor}`}>{categoryLabel}</span>
            </div>
            {article.isBreaking && (
              <div className="absolute top-3 right-3 badge bg-red-100 text-red-800">BỘC</div>
            )}
            {article.isFeatured && (
              <div className="absolute bottom-3 left-3 badge bg-ocop-gold-100 text-ocop-gold-800">NỔI BẬT</div>
            )}
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <time className="text-xs text-ocop-primary-500" dateTime={article.publishedAt}>
                {format(new Date(article.publishedAt), 'dd/MM/yyyy', { locale: vi })}
              </time>
              <span className="text-xs text-ocop-primary-400">·</span>
              <span className="text-xs text-ocop-primary-500">{article.readTime} min đọc</span>
              {article.viewCount && (
                <>
                  <span className="text-xs text-ocop-primary-400">·</span>
                  <span className="text-xs text-ocop-primary-500 flex items-center gap-1">
                    👁 {article.viewCount.toLocaleString('vi-VN')}
                  </span>
                </>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-ocop-primary-950 line-clamp-2 mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-ocop-primary-600 line-clamp-2 mb-3">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-ocop-primary-700">Xem chi tiết</span>
              <span className="text-ocop-primary-500" aria-hidden="true">→</span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="card-hover card overflow-hidden">
      <Link href={`/tin-tuc/${article.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          {article.thumbnail ? (
            <Image
              src={article.thumbnail.url}
              alt={article.thumbnail.alt || article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-ocop-primary-50 text-6xl">📰</div>
          )}
          <div className="absolute top-3 left-3">
            <span className={`badge ${categoryColor}`}>{categoryLabel}</span>
          </div>
          {article.isBreaking && (
            <div className="absolute top-3 right-3 badge bg-red-100 text-red-800">BỘC</div>
          )}
          {article.isFeatured && (
            <div className="absolute bottom-3 left-3 badge bg-ocop-gold-100 text-ocop-gold-800">NỔI BẬT</div>
          )}
        </div>
        <div className="p-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <time className="text-xs text-ocop-primary-500" dateTime={article.publishedAt}>
              {format(new Date(article.publishedAt), 'dd/MM/yyyy', { locale: vi })}
            </time>
            <span className="text-xs text-ocop-primary-400">·</span>
            <span className="text-xs text-ocop-primary-500">{article.readTime} min đọc</span>
            {article.viewCount && (
              <>
                <span className="text-xs text-ocop-primary-400">·</span>
                <span className="text-xs text-ocop-primary-500 flex items-center gap-1">
                  👁 {article.viewCount.toLocaleString('vi-VN')}
                </span>
              </>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-ocop-primary-950 line-clamp-2 mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-ocop-primary-600 line-clamp-2">{article.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}