'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { NewsCard } from '@/components/NewsCard';
import { EventCard } from '@/components/EventCard';
import { CategoryTabs } from '@/components/CategoryTabs';
import { NewsFilter } from '@/components/NewsFilter';
import { EventFilter } from '@/components/EventFilter';
import { fetchNewsPaginated, fetchEventsPaginated } from '@/lib/api';
import type { NewsArticle, Event, PaginatedResponse } from '@ocop/shared-types';

interface NewsEventsPageProps {
  initialNews?: PaginatedResponse<NewsArticle>;
  initialEvents?: PaginatedResponse<Event>;
}

export function NewsEventsPage({ initialNews, initialEvents }: NewsEventsPageProps) {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [news, setNews] = useState<PaginatedResponse<NewsArticle> | null>(initialNews || null);
  const [events, setEvents] = useState<PaginatedResponse<Event> | null>(initialEvents || null);
  const [loadingNews, setLoadingNews] = useState(!initialNews);
  const [loadingEvents, setLoadingEvents] = useState(!initialEvents);
  const [newsFilters, setNewsFilters] = useState({ category: '', page: 1 });
  const [eventFilters, setEventFilters] = useState({ status: '', page: 1 });

  useEffect(() => {
    if (!initialNews) {
      loadNews();
    }
  }, [initialNews, newsFilters]);

  useEffect(() => {
    if (!initialEvents) {
      loadEvents();
    }
  }, [initialEvents, eventFilters]);

  const loadNews = async (page = 1) => {
    setLoadingNews(true);
    try {
      const data = await fetchNewsPaginated({
        page: page.toString(),
        limit: '9',
        category: newsFilters.category || undefined,
      });
      setNews(data);
    } catch (error) {
      console.error('Failed to load news:', error);
    } finally {
      setLoadingNews(false);
    }
  };

  const loadEvents = async (page = 1) => {
    setLoadingEvents(true);
    try {
      const data = await fetchEventsPaginated({
        page: page.toString(),
        limit: '9',
        status: eventFilters.status || undefined,
      });
      setEvents(data);
    } catch (error) {
      console.error('Failed to load events:', error);
    } finally {
      setLoadingEvents(false);
    }
  };

  const handleNewsFilterChange = (filters: typeof newsFilters) => {
    setNewsFilters(filters);
    loadNews(filters.page);
  };

  const handleEventFilterChange = (filters: typeof eventFilters) => {
    setEventFilters(filters);
    loadEvents(filters.page);
  };

  const handlePageChange = (page: number) => {
    if (activeTab === 'news') {
      setNewsFilters(prev => ({ ...prev, page }));
      loadNews(page);
    } else {
      setEventFilters(prev => ({ ...prev, page }));
      loadEvents(page);
    }
  };

  const newsCategories = [
    { value: '', label: 'Tất cả' },
    { value: 'chinh-sach-co-che', label: 'Chính sách & Cơ chế' },
    { value: 'hoat-dong-xuc-tien', label: 'Hoạt động - Xúc tiến thương mại' },
    { value: 'ocop-dia-phuong', label: 'OCOP Địa phương' },
    { value: 'chinh-sach', label: 'Chính sách' },
  ];

  const eventStatuses = [
    { value: '', label: 'Tất cả' },
    { value: 'sap-dien-ra', label: 'Sắp diễn ra' },
    { value: 'dang-dien-ra', label: 'Đang diễn ra' },
    { value: 'da-ket-thuc', label: 'Đã kết thúc' },
  ];

  return (
    <div className="min-h-screen bg-ocop-primary-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ocop-primary-50 to-white">
        <div className="absolute inset-0 bg-[url('/images/patterns/green-dots.svg')] opacity-5" aria-hidden="true" />
        <div className="container-main section relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-ocop-primary-100 px-4 py-1.5 text-sm font-medium text-ocop-primary-800 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocop-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ocop-primary-500" />
              </span>
              Cập nhật liên tục - Thông tin chính thức từ Bộ Công Thương
            </span>
            <h1 className="page-title font-serif">
              Tin tức & <span className="text-ocop-primary-700">Sự kiện</span> OCOP
            </h1>
            <p className="page-description">
              Nắm bắt nhanh chóng chính sách mới, báo cáo thị trường, hội chợ triển lãm,
              workshop xuất khẩu và các chương trình đào tạo hỗ trợ chủ thể OCOP.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/tin-tuc-su-kien?type=tin-tuc"
                className="btn-primary text-base px-8 py-4"
              >
                Xem tất cả tin tức
              </Link>
              <Link
                href="/tin-tuc-su-kien?type=su-kien"
                className="btn-secondary text-base px-8 py-4"
              >
                Xem sự kiện sắp tới
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-ocop-primary-100">
        <div className="container-main py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatItem value="1,247" label="Bài tin tức" icon="📰" />
            <StatItem value="89" label="Sự kiện năm nay" icon="📅" />
            <StatItem value="23" label="Hội chợ/Triển lãm" icon="🏢" />
            <StatItem value="156" label="Workshop/Dào tạo" icon="🎓" />
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="section">
        <div className="container-main">
          <CategoryTabs
            activeTab={activeTab}
            onTabChange={(tabId: string) => setActiveTab(tabId as 'news' | 'events')}
            tabs={[
              { id: 'news', label: 'Tin tức', count: news?.meta.total || 0, icon: '📰' },
              { id: 'events', label: 'Sự kiện', count: events?.meta.total || 0, icon: '📅' },
            ]}
          />

          {/* News Tab Content */}
          {activeTab === 'news' && (
            <NewsTabContent
              news={news}
              loading={loadingNews}
              filters={newsFilters}
              onFilterChange={handleNewsFilterChange}
              onPageChange={handlePageChange}
              categories={newsCategories}
            />
          )}

          {/* Events Tab Content */}
          {activeTab === 'events' && (
            <EventsTabContent
              events={events}
              loading={loadingEvents}
              filters={eventFilters}
              onFilterChange={handleEventFilterChange}
              onPageChange={handlePageChange}
              statuses={eventStatuses}
            />
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-ocop-primary-900 text-white section">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">
              Không bỏ lỡ bất kỳ cập nhật nào
            </h2>
            <p className="text-ocop-primary-100 mb-8">
              Đăng ký nhận bản tin OCOP hàng tuần: chính sách mới, cơ hội xuất khẩu, hội chợ, workshop.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="/api/newsletter" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Email của bạn"
                className="input flex-1 bg-ocop-primary-800 border-ocop-primary-700 text-white placeholder-ocop-primary-400 focus:border-ocop-primary-400 focus:ring-ocop-primary-900"
                required
              />
              <button type="submit" className="btn-primary bg-ocop-gold-500 hover:bg-ocop-gold-600 text-ocop-primary-950 whitespace-nowrap">
                Đăng ký
              </button>
            </form>
            <p className="mt-4 text-sm text-ocop-primary-300">
              Không spam. Hủy đăng ký bất kỳ lúc nào.{' '}
              <a href="/chinh-sach-bao-mat" className="underline hover:text-white">Chính sách bảo mật</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="p-4 sm:p-6">
      <span className="text-3xl sm:text-4xl block mb-2" aria-hidden="true">{icon}</span>
      <div className="text-3xl sm:text-4xl font-bold text-ocop-primary-900 font-serif">{value}</div>
      <div className="mt-1 text-sm text-ocop-primary-600">{label}</div>
    </div>
  );
}

function NewsTabContent({
  news,
  loading,
  filters,
  onFilterChange,
  onPageChange,
  categories,
}: {
  news: PaginatedResponse<import('@ocop/shared-types').NewsArticle> | null;
  loading: boolean;
  filters: { category: string; page: number };
  onFilterChange: (filters: { category: string; page: number }) => void;
  onPageChange: (page: number) => void;
  categories: { value: string; label: string }[];
}) {
  return (
    <>
      {/* Filters */}
      <NewsFilter
        category={filters.category}
        categories={categories}
        onChange={(category) => onFilterChange({ category, page: 1 })}
      />

      {/* Results */}
      <div className="mt-6">
        {loading ? (
          <NewsSkeletonGrid />
        ) : news?.data.length ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.data.map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>

            {/* Pagination */}
            {news.meta.totalPages > 1 && (
              <Pagination
                currentPage={news.meta.page}
                totalPages={news.meta.totalPages}
                onPageChange={onPageChange}
              />
            )}

            <div className="mt-4 text-sm text-ocop-primary-500 text-center">
              Hiển thị {news.meta.limit * (news.meta.page - 1) + 1} -{' '}
              {Math.min(news.meta.limit * news.meta.page, news.meta.total)} của {news.meta.total} kết quả
            </div>
          </>
        ) : (
          <EmptyState
            icon="📰"
            title="Chưa có tin tức nào"
            description={filters.category ? 'Thử thay đổi bộ lọc để xem thêm kết quả.' : 'Hiện tại chưa có tin tức nào phù hợp.'}
          />
        )}
      </div>
    </>
  );
}

function EventsTabContent({
  events,
  loading,
  filters,
  onFilterChange,
  onPageChange,
  statuses,
}: {
  events: PaginatedResponse<import('@ocop/shared-types').Event> | null;
  loading: boolean;
  filters: { status: string; page: number };
  onFilterChange: (filters: { status: string; page: number }) => void;
  onPageChange: (page: number) => void;
  statuses: { value: string; label: string }[];
}) {
  return (
    <>
      {/* Filters */}
      <EventFilter
        status={filters.status}
        statuses={statuses}
        onChange={(status) => onFilterChange({ status, page: 1 })}
      />

      {/* Results */}
      <div className="mt-6">
        {loading ? (
          <EventsSkeletonGrid />
        ) : events?.data.length ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.data.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>

            {/* Pagination */}
            {events.meta.totalPages > 1 && (
              <Pagination
                currentPage={events.meta.page}
                totalPages={events.meta.totalPages}
                onPageChange={onPageChange}
              />
            )}

            <div className="mt-4 text-sm text-ocop-primary-500 text-center">
              Hiển thị {events.meta.limit * (events.meta.page - 1) + 1} -{' '}
              {Math.min(events.meta.limit * events.meta.page, events.meta.total)} của {events.meta.total} kết quả
            </div>
          </>
        ) : (
          <EmptyState
            icon="📅"
            title="Chưa có sự kiện nào"
            description={filters.status ? 'Thử thay đổi bộ lọc để xem thêm kết quả.' : 'Hiện tại chưa có sự kiện nào phù hợp.'}
          />
        )}
      </div>
    </>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    (p) => p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1)
  );

  return (
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Phân trang">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn-secondary px-3 py-2"
        aria-label="Trang trước"
      >
        ‹
      </button>

      {visiblePages.map((page, index) => {
        const prevPage = visiblePages[index - 1];
        const showEllipsis = prevPage && page - prevPage > 1;

        return (
          <Fragment key={page}>
            {showEllipsis && <span className="px-2 text-ocop-primary-400">…</span>}
            <button
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                page === currentPage
                  ? 'bg-ocop-primary-700 text-white'
                  : 'text-ocop-primary-600 hover:bg-ocop-primary-100'
              }`}
              aria-label={`Trang ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </Fragment>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn-secondary px-3 py-2"
        aria-label="Trang sau"
      >
        ‹
      </button>
    </nav>
  );
}

function EmptyState({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="py-16 text-center">
      <span className="text-6xl block mb-4" aria-hidden="true">{icon}</span>
      <h3 className="text-xl font-semibold text-ocop-primary-900 mb-2">{title}</h3>
      <p className="text-ocop-primary-500">{description}</p>
    </div>
  );
}

function NewsSkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="card p-4 animate-pulse">
          <div className="aspect-video w-full rounded-lg bg-ocop-primary-100 mb-3" />
          <div className="h-4 w-1/4 bg-ocop-primary-200 rounded mb-2" />
          <div className="h-6 w-full bg-ocop-primary-200 rounded mb-2" />
          <div className="h-4 w-3/4 bg-ocop-primary-200 rounded mb-2" />
          <div className="h-4 w-full bg-ocop-primary-200 rounded mb-1" />
          <div className="h-4 w-full bg-ocop-primary-200 rounded" />
        </div>
      ))}
    </div>
  );
}

function EventsSkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="card p-4 animate-pulse">
          <div className="aspect-video w-full rounded-lg bg-ocop-primary-100 mb-3" />
          <div className="h-4 w-1/4 bg-ocop-primary-200 rounded mb-2" />
          <div className="h-6 w-full bg-ocop-primary-200 rounded mb-2" />
          <div className="h-4 w-1/2 bg-ocop-primary-200 rounded mb-2" />
          <div className="h-4 w-full bg-ocop-primary-200 rounded mb-1" />
          <div className="h-4 w-full bg-ocop-primary-200 rounded" />
        </div>
      ))}
    </div>
  );
}