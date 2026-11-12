'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';
import type { SectionData, Product, Story, Destination, NewsArticle, Event } from '@ocop/shared-types';

interface FeaturedSectionsProps {
  sections?: SectionData[];
  products?: Product[];
  stories?: Story[];
  destinations?: Destination[];
  news?: NewsArticle[];
  events?: Event[];
  className?: string;
}

const mockSections: SectionData[] = [
  {
    id: 'featured-products',
    label: 'Sản phẩm nổi bật',
    title: 'Sản phẩm OCOP tiêu biểu',
    headline: 'Những sản phẩm đạt chuẩn 5 sao, đại diện cho tinh hoa vùng miền',
    description: 'Chuẩn 5 sao OCOP - Tự hào của người Việt',
    bgColor: 'bg-surface-elevated',
    filterTabs: ['Tất cả', '5 Sao', '4 Sao', '3 Sao'],
  },
  {
    id: 'featured-stories',
    label: 'Câu chuyện',
    title: 'Câu chuyện người giữ nghề',
    headline: 'Những bàn tay khéo, trái tim nhiệt huyết',
    description: 'Hành trình biến di sản thành sản phẩm OCOP',
    bgColor: 'bg-surface',
  },
  {
    id: 'featured-destinations',
    label: 'Điểm đến',
    title: 'Điểm đến du lịch nông thôn',
    headline: 'Trải nghiệm văn hóa bản địa tại nơi sinh ra sản phẩm',
    description: 'Làng nghề, vườn trái, chợ đêm văn hóa',
    bgColor: 'bg-surface-elevated',
  },
  {
    id: 'featured-news',
    label: 'Tin tức',
    title: 'Tin tức & Sự kiện mới nhất',
    headline: 'Cập nhật chính sách, hội chợ, xúc tiến thương mại',
    description: 'Đừng bỏ lỡ cơ hội hội nhập và phát triển',
    bgColor: 'bg-surface',
  },
];

export function FeaturedSections({
  sections = mockSections,
  products = [],
  stories = [],
  destinations = [],
  news = [],
  events = [],
  className,
}: FeaturedSectionsProps) {
  const sectionComponents: Record<string, React.ReactNode> = {
    'featured-products': <ProductGridSection items={products.slice(0, 8)} />,
    'featured-stories': <StoryGridSection items={stories.slice(0, 6)} />,
    'featured-destinations': <DestinationGridSection items={destinations.slice(0, 6)} />,
    'featured-news': <NewsEventGridSection news={news.slice(0, 4)} events={events.slice(0, 4)} />,
  };

  return (
    <div className={cn('space-y-16 md:space-y-24', className)}>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={cn(
            'py-16 md:py-24',
            section.bgColor
          )}
          aria-labelledby={`${section.id}-title`}
        >
          <div className="container mx-auto px-4">
            <header className="text-center mb-12 md:mb-16">
              {section.label && (
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-caption font-medium mb-4">
                  {section.label}
                </span>
              )}
              <h2
                id={`${section.id}-title`}
                className="text-heading-xl md:text-heading-lg font-bold text-text-primary mb-4"
              >
                {section.title}
              </h2>
              {section.headline && (
                <p className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-6">
                  {section.headline}
                </p>
              )}
              {section.description && (
                <p className="text-body-md text-text-muted max-w-xl mx-auto">
                  {section.description}
                </p>
              )}
            </header>

            {sectionComponents[section.id]}

            <div className="mt-10 text-center">
              <a
                href={`/${section.id.replace('featured-', '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
              >
                Xem tất cả
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

// ============================================
// SECTION COMPONENTS
// ============================================

function ProductGridSection({ items }: { items: any[] }) {
  if (!items.length) return <ProductGridSkeleton count={8} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
      {items.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}

function StoryGridSection({ items }: { items: any[] }) {
  if (!items.length) return <StoryGridSkeleton count={6} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
      {items.map((story, index) => (
        <StoryCard key={story.id} story={story} index={index} />
      ))}
    </div>
  );
}

function DestinationGridSection({ items }: { items: any[] }) {
  if (!items.length) return <DestinationGridSkeleton count={6} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
      {items.map((dest, index) => (
        <DestinationCard key={dest.id} destination={dest} index={index} />
      ))}
    </div>
  );
}

function NewsEventGridSection({ news, events }: { news: any[]; events: any[] }) {
  const allItems = [
    ...news.map(n => ({ ...n, type: 'news' as const })),
    ...events.map(e => ({ ...e, type: 'event' as const })),
  ].slice(0, 8);

  if (!allItems.length) return <NewsEventGridSkeleton count={8} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
      {allItems.map((item, index) => (
        item.type === 'news' ? (
          <NewsCard key={item.id} news={item} index={index} />
        ) : (
          <EventCard key={item.id} event={item} index={index} />
        )
      ))}
    </div>
  );
}

// ============================================
// CARD COMPONENTS
// ============================================

interface ProductCardProps {
  product: any;
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const stars = '★'.repeat(product.stars || 3) + '☆'.repeat(5 - (product.stars || 3));

  return (
    <article
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-brand hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-gold focus-within:ring-offset-2 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
      role="listitem"
    >
      <a href={`/san-pham-ocop/${product.slug}`} className="block h-full focus:outline-none">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.images?.[0] || '/images/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.stars && (
              <span className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-brand-primary flex items-center gap-1">
                <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {product.stars} Sao
              </span>
            )}
            <span className="bg-brand-secondary text-white px-3 py-1 rounded-full text-caption font-medium">
              {product.category}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="bg-brand-gold text-brand-primary px-3 py-1 rounded-full text-caption font-bold">
              {product.province}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-heading-sm font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-body-sm text-text-secondary mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-body-sm font-medium text-brand-primary">
              {product.producer}
            </span>
            <span className="text-body-xs text-text-muted flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              {product.district}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

interface StoryCardProps {
  story: any;
  index: number;
}

function StoryCard({ story, index }: StoryCardProps) {
  const typeLabels: Record<string, string> = {
    feature: 'Bài đặc viết',
    story: 'Câu chuyện',
    video: 'Video',
    interview: 'Phỏng vấn',
    'photo-essay': 'Bản ảnh',
  };

  return (
    <article
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-brand hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-gold focus-within:ring-offset-2 animate-slide-up flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
      role="listitem"
    >
      <a href={`/cau-chuyen-ocop/${story.slug}`} className="block focus:outline-none">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={story.featuredImage || '/images/placeholder-story.jpg'}
            alt={story.headline}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <span className="bg-brand-gold text-brand-primary px-3 py-1 rounded-full text-caption font-semibold">
              {typeLabels[story.type] || story.type}
            </span>
            {story.category && (
              <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-caption font-medium text-text-primary">
                {story.category}
              </span>
            )}
          </div>
          {story.videoUrl && (
            <button className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors" aria-label="Xem video">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-body-xs text-text-muted mb-3">
            <time dateTime={story.publishedDate}>
              {new Date(story.publishedDate).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{story.readTime || '5 min đọc'}</span>
          </div>
          <h3 className="text-heading-sm font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors flex-1">
            {story.headline}
          </h3>
          <p className="text-body-sm text-text-secondary line-clamp-2 mb-3">
            {story.excerpt}
          </p>
          <div className="flex items-center gap-3 pt-3 border-t border-border">
            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-medium text-body-sm">
              {story.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-body-sm font-medium text-text-primary">{story.author}</p>
              {story.authorRole && <p className="text-body-xs text-text-muted">{story.authorRole}</p>}
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

interface DestinationCardProps {
  destination: any;
  index: number;
}

function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <article
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-brand hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-gold focus-within:ring-offset-2 animate-slide-up flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
      role="listitem"
    >
      <a href={`/diem-den-du-lich/${destination.slug}`} className="block focus:outline-none">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={destination.image || '/images/placeholder-destination.jpg'}
            alt={destination.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-heading-md font-bold text-white mb-1">{destination.name}</h3>
            <p className="text-body-sm text-white/80 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              {destination.province}
            </p>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-brand-gold text-brand-primary px-3 py-1 rounded-full text-caption font-semibold">
              {destination.productsCount} SP
            </span>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded-full text-caption font-medium">
              {destination.category}
            </span>
            <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-caption font-medium">
              {destination.region}
            </span>
          </div>
          {destination.description && (
            <p className="text-body-sm text-text-secondary line-clamp-3 mb-4 flex-1">
              {destination.description}
            </p>
          )}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-body-sm text-text-muted">
              {destination.storiesCount} câu chuyện
            </span>
            <span className="text-brand-primary font-medium text-body-sm group-hover:underline">
              Khám phá →
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

interface NewsCardProps {
  news: any;
  index: number;
}

function NewsCard({ news, index }: NewsCardProps) {
  return (
    <article
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-brand hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-gold focus-within:ring-offset-2 animate-slide-up flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
      role="listitem"
    >
      <a href={`/tin-tuc-su-kien/${news.slug}`} className="block focus:outline-none">
        {news.image && (
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={news.image}
              alt={news.headline}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <span className="absolute top-3 left-3 bg-brand-primary text-white px-3 py-1 rounded-full text-caption font-medium">
              {news.category}
            </span>
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-body-xs text-text-muted mb-3">
            <time dateTime={news.date}>
              {new Date(news.date).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </time>
          </div>
          <h3 className="text-heading-sm font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors flex-1">
            {news.headline}
          </h3>
          <p className="text-body-sm text-text-secondary line-clamp-2 mb-4">
            {news.excerpt}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            {news.author && (
              <span className="text-body-xs text-text-muted flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                {news.author}
              </span>
            )}
            {news.readTime && (
              <span className="text-body-xs text-text-muted flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {news.readTime}
              </span>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}

interface EventCardProps {
  event: any;
  index: number;
}

function EventCard({ event, index }: EventCardProps) {
  const statusColors: Record<string, string> = {
    'Sắp diễn ra': 'bg-green-500/10 text-green-600',
    'Đang diễn ra': 'bg-blue-500/10 text-blue-600',
    'Đã kết thúc': 'bg-gray-500/10 text-gray-600',
  };

  return (
    <article
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-brand hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-gold focus-within:ring-offset-2 animate-slide-up flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
      role="listitem"
    >
      <a href={`/tin-tuc-su-kien/su-kien/${event.slug}`} className="block focus:outline-none">
        {event.image && (
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={event.image}
              alt={event.headline}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-caption font-medium capitalize" style={{ backgroundColor: statusColors[event.status]?.split(' ')[0] || 'bg-gray-100', color: statusColors[event.status]?.split(' ')[1] || 'text-gray-600' }}>
              {event.status}
            </span>
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-body-xs mb-3">
            <time dateTime={event.date} className="text-brand-primary font-medium flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(event.date).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </time>
          </div>
          <h3 className="text-heading-sm font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors flex-1">
            {event.headline}
          </h3>
          <p className="text-body-sm text-text-secondary line-clamp-2 mb-4 flex items-center gap-1">
            <svg className="w-4 h-4 text-brand-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            {event.location}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            {event.organizer && (
              <span className="text-body-xs text-text-muted flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                {event.organizer}
              </span>
            )}
            {event.registrationUrl && (
              <span className="text-brand-primary font-medium text-body-sm">Đăng ký →</span>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}

// ============================================
// SKELETON COMPONENTS
// ============================================

function ProductGridSkeleton({ count = 8 }: { count: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Đang tải sản phẩm">
      {Array.from({ length: count }).map((_, i) => (
        <article key={i} className="bg-surface rounded-2xl border border-border overflow-hidden animate-pulse" role="listitem">
          <div className="aspect-[4/3] bg-surface-sunken" />
          <div className="p-5 space-y-3">
            <div className="h-4 bg-surface-sunken rounded w-3/4" />
            <div className="h-4 bg-surface-sunken rounded w-1/2" />
            <div className="h-3 bg-surface-sunken rounded w-full" />
            <div className="h-3 bg-surface-sunken rounded w-2/3" />
            <div className="h-3 bg-surface-sunken rounded w-1/3 mt-4" />
          </div>
        </article>
      ))}
    </div>
  );
}

function StoryGridSkeleton({ count = 6 }: { count: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Đang tải câu chuyện">
      {Array.from({ length: count }).map((_, i) => (
        <article key={i} className="bg-surface rounded-2xl border border-border overflow-hidden animate-pulse flex flex-col" role="listitem">
          <div className="aspect-[16/9] bg-surface-sunken" />
          <div className="p-5 flex-1 space-y-3">
            <div className="h-3 bg-surface-sunken rounded w-1/4" />
            <div className="h-5 bg-surface-sunken rounded w-3/4" />
            <div className="h-4 bg-surface-sunken rounded w-full" />
            <div className="h-4 bg-surface-sunken rounded w-2/3" />
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-8 h-8 rounded-full bg-surface-sunken" />
              <div className="space-y-1">
                <div className="h-3 bg-surface-sunken rounded w-1/3" />
                <div className="h-2 bg-surface-sunken rounded w-1/4" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function DestinationGridSkeleton({ count = 6 }: { count: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Đang tải điểm đến">
      {Array.from({ length: count }).map((_, i) => (
        <article key={i} className="bg-surface rounded-2xl border border-border overflow-hidden animate-pulse flex flex-col" role="listitem">
          <div className="aspect-[4/3] bg-surface-sunken relative">
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="p-5 flex-1 space-y-3">
            <div className="flex gap-2">
              <div className="h-5 bg-surface-sunken rounded-full w-20" />
              <div className="h-5 bg-surface-sunken rounded-full w-24" />
            </div>
            <div className="h-4 bg-surface-sunken rounded w-full" />
            <div className="h-4 bg-surface-sunken rounded w-3/4" />
            <div className="h-3 bg-surface-sunken rounded w-1/3 mt-4" />
          </div>
        </article>
      ))}
    </div>
  );
}

function NewsEventGridSkeleton({ count = 8 }: { count: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Đang tải tin tức sự kiện">
      {Array.from({ length: count }).map((_, i) => (
        <article key={i} className="bg-surface rounded-2xl border border-border overflow-hidden animate-pulse flex flex-col" role="listitem">
          <div className="aspect-[16/9] bg-surface-sunken" />
          <div className="p-5 flex-1 space-y-3">
            <div className="h-3 bg-surface-sunken rounded w-1/4" />
            <div className="h-5 bg-surface-sunken rounded w-3/4" />
            <div className="h-4 bg-surface-sunken rounded w-full" />
            <div className="h-4 bg-surface-sunken rounded w-2/3" />
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="h-3 bg-surface-sunken rounded w-1/3" />
              <div className="h-3 bg-surface-sunken rounded w-1/4" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}