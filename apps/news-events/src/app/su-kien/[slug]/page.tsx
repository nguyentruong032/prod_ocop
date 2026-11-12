// Event Detail Page: /su-kien/[slug]
// ISR with revalidate, generateMetadata, JSON-LD Event schema

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { fetchEventBySlug, fetchUpcomingEvents, fetchOngoingEvents } from '@/lib/api';
import type { Event } from '@ocop/shared-types';
import { EventCard } from '@/components/EventCard';

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

async function getEvent(slug: string): Promise<Event | null> {
  try {
    return await fetchEventBySlug(slug);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    return {
      title: 'Sự kiện không tồn tại',
      robots: 'noindex, nofollow',
    };
  }

  const seo = event.seo || {};
  const baseUrl = 'https://ocop.vn';

  return {
    title: seo.metaTitle || event.title,
    description: seo.metaDescription || event.description,
    keywords: seo.metaKeywords || event.tags?.join(', '),
    authors: [{ name: 'OCOP Việt Nam' }],
    creator: 'OCOP Việt Nam',
    publisher: 'OCOP Việt Nam',
    formatDetection: { telephone: false },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: seo.canonicalUrl || `/su-kien/${slug}`,
    },
    openGraph: {
      type: 'website',
      locale: 'vi_VN',
      url: `/su-kien/${slug}`,
      siteName: 'OCOP Việt Nam',
      title: seo.ogTitle || event.title,
      description: seo.ogDescription || event.description,
      images: event.thumbnail
        ? [
            {
              url: event.thumbnail.url,
              width: event.thumbnail.width || 1200,
              height: event.thumbnail.height || 630,
              alt: event.thumbnail.alt || event.title,
            },
          ]
        : [
            {
              url: '/images/og/su-kien-default-og.jpg',
              width: 1200,
              height: 630,
              alt: 'Sự kiện OCOP Việt Nam',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || event.title,
      description: seo.ogDescription || event.description,
      images: event.thumbnail ? [event.thumbnail.url] : ['/images/og/su-kien-default-og.jpg'],
      creator: '@ocopvietnam',
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
    'hoi-cho-ocop-quoc-te-2024',
    'workshop-xuat-khau-ocop-sang-eu',
    'dao-tao-chu-the-ocop-tp-hcm',
    'ngay-hoi-ocop-viet-nam',
    'tri-enh-nong-dan-ocop',
    'hoi-nghi-tong-ket-nam-2024',
  ];
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 3600; // 1 hour ISR revalidation

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    notFound();
  }

  const [upcomingEvents, ongoingEvents] = await Promise.all([
    fetchUpcomingEvents(3),
    fetchOngoingEvents(3),
  ]);

  const jsonLd = generateEventJsonLd(event);
  const typeLabel = getTypeLabel(event.type);
  const statusLabel = getStatusLabel(event.status);
  const statusBadgeClass = getStatusBadgeClass(event.status);

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
              <Link href="/tin-tuc-su-kien?type=su-kien" className="text-ocop-primary-500 hover:text-ocop-primary-700">
                Sự kiện
              </Link>
            </li>
            <li aria-hidden="true" className="text-ocop-primary-300">/</li>
            <li>
              <Link href={`/tin-tuc-su-kien?type=su-kien&status=${event.status}`} className="text-ocop-primary-500 hover:text-ocop-primary-700">
                {statusLabel}
              </Link>
            </li>
            <li aria-hidden="true" className="text-ocop-primary-300">/</li>
            <li aria-current="page" className="text-ocop-primary-900 font-medium truncate max-w-[300px]">
              {event.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Event Header */}
      <header className="container-main py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Link
              href={`/tin-tuc-su-kien?type=su-kien&status=${event.status}`}
              className={`badge ${statusBadgeClass}`}
            >
              {statusLabel}
            </Link>
            <Link
              href={`/tin-tuc-su-kien?type=su-kien&typeFilter=${event.type}`}
              className="badge bg-ocop-primary-100 text-ocop-primary-800"
            >
              {typeLabel}
            </Link>
            {event.isOnline && <span className="badge bg-purple-100 text-purple-800">🌐 Trực tuyến</span>}
            {event.isFree && <span className="badge bg-green-100 text-green-800">Miễn phí</span>}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ocop-primary-950 font-serif leading-tight mb-6">
            {event.title}
          </h1>

          {event.shortDescription && (
            <p className="text-lg text-ocop-primary-600 leading-relaxed mb-8 border-l-4 border-ocop-primary-500 pl-4 font-serif italic">
              {event.shortDescription}
            </p>
          )}

          {/* Key Event Info */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8 pb-8 border-b border-ocop-primary-100">
            <EventInfoItem
              icon="📅"
              label="Thời gian"
              value={
                <>
                  <time dateTime={event.startDate}>
                    {format(new Date(event.startDate), 'EEEE, dd/MM/yyyy', { locale: vi })}
                  </time>
                  {event.endDate && (
                    <>
                      {' — '}
                      <time dateTime={event.endDate}>
                        {format(new Date(event.endDate), 'EEEE, dd/MM/yyyy', { locale: vi })}
                      </time>
                    </>
                  )}
                  {event.startTime && <span className="ml-2 text-ocop-primary-500"> ({event.startTime})</span>}
                </>
              }
            />
            <EventInfoItem
              icon="📍"
              label="Địa điểm"
              value={
                <>
                  {event.venue}
                  {event.address && <span className="ml-2 text-ocop-primary-500">, {event.address}</span>}
                  {event.province && <span className="ml-2 text-ocop-primary-500">, {event.province}</span>}
                </>
              }
            />
            <EventInfoItem
              icon="👥"
              label="Đối tượng"
              value={event.targetAudience || 'Chung'}
            />
            <EventInfoItem
              icon="🎫"
              label="Đăng ký"
              value={
                event.registrationUrl ? (
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="text-ocop-primary-600 hover:underline">
                    Đăng ký ngay
                  </a>
                ) : (
                  <span className="text-ocop-primary-500">Tự do tham dự</span>
                )
              }
            />
          </div>

          {/* Organizer & Contact */}
          {event.organizer && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-ocop-primary-500 mb-8">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {event.organizer}
              </span>
              {event.contactEmail && (
                <a href={`mailto:${event.contactEmail}`} className="flex items-center gap-1 hover:text-ocop-primary-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {event.contactEmail}
                </a>
              )}
              {event.contactPhone && (
                <a href={`tel:${event.contactPhone}`} className="flex items-center gap-1 hover:text-ocop-primary-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {event.contactPhone}
                </a>
              )}
            </div>
          )}

          {/* Share Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8" role="group" aria-label="Chia sẻ sự kiện">
            <span className="text-sm font-medium text-ocop-primary-700">Chia sẻ:</span>
            <EventShareButtons event={event} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {event.registrationUrl && (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-3"
              >
                Đăng ký tham dự
              </a>
            )}
            {event.website && (
              <a
                href={event.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-3"
              >
                Thông tin chi tiết
              </a>
            )}
            <button
              onClick={async () => {
                const url = `https://ocop.vn/su-kien/${event.slug}`;
                try {
                  await navigator.clipboard.writeText(url);
                  alert('Đã sao chép liên kết sự kiện!');
                } catch {
                  alert('Không thể sao chép. Vui lòng thử lại.');
                }
              }}
              className="btn-secondary text-lg px-8 py-3"
              aria-label="Sao chép liên kết sự kiện"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 012-2h10a2 2 0 012 2v1m-6 12a2 2 0 114 0 2 2 0 01-4 0z" />
              </svg>
              Sao chép link
            </button>
          </div>
        </div>
      </header>

      {/* Event Thumbnail */}
      {event.thumbnail && (
        <figure className="w-full max-h-[500px] overflow-hidden">
          <Image
            src={event.thumbnail.url}
            alt={event.thumbnail.alt || event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {event.thumbnail.caption && (
            <figcaption className="container-main py-3 text-sm text-ocop-primary-500 text-center">
              {event.thumbnail.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Event Content */}
      <div className="container-main py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg prose-ocop max-w-none font-sans"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />

          {/* Tags */}
          {(event.tags?.length ?? 0) > 0 && (
            <div className="mt-12 pt-8 border-t border-ocop-primary-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-ocop-primary-700">Thẻ:</span>
                <div className="flex flex-wrap gap-2">
                  {event.tags?.map((tag) => (
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

          {/* Related Events */}
          <section className="mt-16">
            <h2 className="section-title mb-6">Sự kiện liên quan</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents
                .filter((e) => e.slug !== slug)
                .slice(0, 3)
                .map((e) => (
                  <EventCard key={e.slug} event={e} />
                ))}
              {upcomingEvents.filter((e) => e.slug !== slug).length < 3 &&
                ongoingEvents
                  .filter((e) => e.slug !== slug)
                  .slice(0, 3 - upcomingEvents.filter((e) => e.slug !== slug).length)
                  .map((e) => (
                    <EventCard key={e.slug} event={e} />
                  ))}
            </div>
          </section>

          {/* Calendar CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-ocop-primary-700 to-ocop-primary-900 text-white text-center">
            <h3 className="text-2xl font-bold font-serif mb-3">Đừng quên sự kiện quan trọng này!</h3>
            <p className="text-ocop-primary-100 mb-6 max-w-xl mx-auto">
              Thêm vào lịch để nhận nhắc nhở trước khi sự kiện bắt đầu.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={generateGoogleCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white/20 hover:bg-white/30 text-white border-white/30 whitespace-nowrap"
              >
                📅 Google Calendar
              </a>
              <a
                href={generateOutlookCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white/20 hover:bg-white/30 text-white border-white/30 whitespace-nowrap"
              >
                📅 Outlook Calendar
              </a>
              <a
                href={generateIcsUrl(event)}
                className="btn-secondary bg-white/20 hover:bg-white/30 text-white border-white/30 whitespace-nowrap"
              >
                📅 Tải file .ics
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

interface EventInfoItemProps {
  icon: string;
  label: string;
  value: React.ReactNode;
}

function EventInfoItem({ icon, label, value }: EventInfoItemProps) {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-xl bg-ocop-primary-50 border border-ocop-primary-100">
      <span className="text-sm font-medium text-ocop-primary-700 flex items-center gap-1">
        <span aria-hidden="true">{icon}</span>
        {label}
      </span>
      <div className="text-ocop-primary-900">{value}</div>
    </div>
  );
}

function EventShareButtons({ event }: { event: Event }) {
  const url = `https://ocop.vn/su-kien/${event.slug}`;
  const title = encodeURIComponent(event.title);
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
    </div>
  );
}

function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'hoi-cho': 'Hội chợ',
    'workshop': 'Workshop',
    'dao-tao': 'Đào tạo',
    'hoi-nghi': 'Hội nghị',
    'le-hoi': 'Lễ hội',
    'khac': 'Khác',
  };
  return labels[type] || type;
}

function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    'sap-dien-ra': 'Sắp diễn ra',
    'dang-dien-ra': 'Đang diễn ra',
    'da-ket-thuc': 'Đã kết thúc',
  };
  return labels[status] || status;
}

function getStatusBadgeClass(status: string): string {
  const classes: Record<string, string> = {
    'sap-dien-ra': 'bg-blue-100 text-blue-800',
    'dang-dien-ra': 'bg-green-100 text-green-800',
    'da-ket-thuc': 'bg-gray-100 text-gray-800',
  };
  return classes[status] || 'bg-ocop-primary-100 text-ocop-primary-800';
}

function generateEventJsonLd(event: Event) {
  const baseUrl = 'https://ocop.vn';

  const eventStatusMap: Record<string, string> = {
    'sap-dien-ra': 'https://schema.org/EventScheduled',
    'dang-dien-ra': 'https://schema.org/EventPostponed', // or EventRescheduled
    'da-ket-thuc': 'https://schema.org/EventCancelled', // Actually EventCompleted would be better
  };

  // Calculate duration
  let duration = '';
  if (event.startDate && event.endDate) {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    const diffDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      duration = `P${diffDays}D`;
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    eventStatus: eventStatusMap[event.status] || 'https://schema.org/EventScheduled',
    eventAttendanceMode: event.isOnline
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    location: event.isOnline
      ? {
          '@type': 'VirtualLocation',
          url: event.website || event.registrationUrl || `${baseUrl}/su-kien/${event.slug}`,
        }
      : {
          '@type': 'Place',
          name: event.venue,
          address: {
            '@type': 'PostalAddress',
            streetAddress: event.address || '',
            addressLocality: event.province || '',
            addressCountry: 'VN',
          },
        },
    image: event.thumbnail ? [event.thumbnail.url] : [`${baseUrl}/images/og/su-kien-default-og.jpg`],
    organizer: {
      '@type': 'Organization',
      name: event.organizer || 'OCOP Việt Nam',
      url: baseUrl,
    },
    url: `${baseUrl}/su-kien/${event.slug}`,
    offers: event.isFree
      ? {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'VND',
          availability: 'https://schema.org/InStock',
          url: event.registrationUrl || `${baseUrl}/su-kien/${event.slug}`,
        }
      : event.registrationUrl
      ? {
          '@type': 'Offer',
          url: event.registrationUrl,
          availability: 'https://schema.org/InStock',
        }
      : undefined,
    performer: event.speakers?.map((speaker) => ({
      '@type': 'Person',
      name: speaker,
    })),
    maximumAttendeeCapacity: event.capacity,
    inLanguage: 'vi-VN',
    isAccessibleForFree: event.isFree,
  };
}

function generateGoogleCalendarUrl(event: Event): string {
  const baseUrl = 'https://ocop.vn';
  const startTime: string = event.startTime ?? '00:00';
  const endTime: string = event.endTime ?? '23:59';
  const start = formatDateForCalendar(event.startDate, startTime);
  const end = event.endDate
    ? formatDateForCalendar(event.endDate, endTime)
    : start;
  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(`${event.shortDescription || ''}\n\nThông tin: ${baseUrl}/su-kien/${event.slug}`);
  const location = encodeURIComponent(`${event.venue}${event.address ? ', ' + event.address : ''}${event.province ? ', ' + event.province : ''}`);

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

function generateOutlookCalendarUrl(event: Event): string {
  const baseUrl = 'https://ocop.vn';
  const startTime: string = event.startTime ?? '00:00';
  const endTime: string = event.endTime ?? '23:59';
  const start = formatDateForCalendar(event.startDate, startTime, true);
  const end = event.endDate
    ? formatDateForCalendar(event.endDate, endTime, true)
    : start;
  const title = encodeURIComponent(event.title);
  const body = encodeURIComponent(`${event.shortDescription || ''}\n\nThông tin: ${baseUrl}/su-kien/${event.slug}`);
  const location = encodeURIComponent(`${event.venue}${event.address ? ', ' + event.address : ''}${event.province ? ', ' + event.province : ''}`);

  return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${start}&enddt=${end}&body=${body}&location=${location}`;
}

function generateIcsUrl(event: Event): string {
  const baseUrl = 'https://ocop.vn';
  const startTime: string = event.startTime ?? '00:00';
  const endTime: string = event.endTime ?? '23:59';
  const start = formatDateForIcs(event.startDate, startTime);
  const end = event.endDate
    ? formatDateForIcs(event.endDate, endTime)
    : formatDateForIcs(event.startDate, '23:59');
  const now = formatDateOnlyForIcs(new Date().toISOString().split('T')[0] ?? '');
  const uid = `${event.slug}@ocop.vn`;

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//OCOP Việt Nam//Event Calendar//VI
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${now}
DTSTART:${start}
DTEND:${end}
SUMMARY:${event.title}
DESCRIPTION:${event.shortDescription || ''}\\n\\nThông tin chi tiết: ${baseUrl}/su-kien/${event.slug}
LOCATION:${event.venue}${event.address ? ', ' + event.address : ''}${event.province ? ', ' + event.province : ''}
ORGANIZER;CN=OCOP Việt Nam:mailto:info@ocop.vn
URL:${baseUrl}/su-kien/${event.slug}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
}

function formatDateForCalendar(dateStr: string, timeStr: string = '00:00', outlook = false): string {
  const date = new Date(dateStr);
  const [hours, minutes] = timeStr.split(':');
  date.setHours(parseInt(hours ?? '0', 10), parseInt(minutes ?? '0', 10), 0, 0);

  if (outlook) {
    // Outlook format: YYYYMMDDTHHMMSSZ
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] ?? '';
  }
  // Google format: YYYYMMDDTHHMMSSZ
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] ?? '';
}

function formatDateForIcs(dateStr: string, timeStr: string = '00:00'): string {
  const date = new Date(dateStr);
  const [hours, minutes] = timeStr.split(':');
  date.setHours(parseInt(hours ?? '0', 10), parseInt(minutes ?? '0', 10), 0, 0);
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] ?? '';
}

function formatDateOnlyForIcs(dateStr: string): string {
  const date = new Date(dateStr);
  date.setHours(0, 0, 0, 0);
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] ?? '';
}