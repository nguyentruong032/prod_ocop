'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import type { Event } from '@ocop/shared-types';

interface EventCardProps {
  event: Event;
  variant?: 'default' | 'featured' | 'compact' | 'calendar';
}

const statusConfig: Record<Event['status'], { label: string; className: string; icon: string }> = {
  'sap-dien-ra': { label: 'Sắp diễn ra', className: 'badge-status-upcoming', icon: '⏳' },
  'dang-dien-ra': { label: 'Đang diễn ra', className: 'badge-status-ongoing', icon: '🔴' },
  'da-ket-thuc': { label: 'Đã kết thúc', className: 'badge-status-ended', icon: '✅' },
};

const typeLabels: Record<string, string> = {
  'hoi-cho': 'Hội chợ',
  'trien-lam': 'Triển lãm',
  'workshop': 'Workshop',
  'dao-tao': 'Đào tạo',
  'hoi-nghi': 'Hội nghị',
  'webinar': 'Webinar',
};

export function EventCard({ event, variant = 'default' }: EventCardProps) {
  const status = statusConfig[event.status];
  const typeLabel = typeLabels[event.type] || event.type;

  if (variant === 'compact') {
    return (
      <Link
        href={`/su-kien/${event.slug}`}
        className="flex gap-3 p-3 rounded-lg bg-white border border-ocop-primary-100 hover:border-ocop-primary-200 hover:shadow-md transition-all"
      >
        <div className="flex flex-col items-center justify-center gap-1 w-16 flex-shrink-0 rounded-lg bg-ocop-primary-50 p-2">
          <span className="text-2xl font-bold text-ocop-primary-700 font-serif">
            {format(new Date(event.startDate), 'dd', { locale: vi })}
          </span>
          <span className="text-xs font-medium text-ocop-primary-600 uppercase">
            {format(new Date(event.startDate), 'MMM', { locale: vi })}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-1">
            <span className={`badge ${status.className}`}>{status.icon} {status.label}</span>
            <span className="badge bg-ocop-primary-100 text-ocop-primary-700">{typeLabel}</span>
          </div>
          <p className="text-sm font-medium text-ocop-primary-900 line-clamp-1">{event.title}</p>
          <p className="text-xs text-ocop-primary-500 flex items-center gap-1">
            📍 {event.location.venue}, {event.location.province}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === 'calendar') {
    return (
      <article className="card p-4">
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center gap-1 w-16 flex-shrink-0 rounded-lg bg-ocop-primary-50 p-3">
            <span className="text-3xl font-bold text-ocop-primary-700 font-serif">
              {format(new Date(event.startDate), 'dd', { locale: vi })}
            </span>
            <span className="text-sm font-medium text-ocop-primary-600 uppercase">
              {format(new Date(event.startDate), 'MMM', { locale: vi })}
            </span>
            <span className={`badge ${status.className} text-xs`}>{status.label}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="badge bg-ocop-primary-100 text-ocop-primary-700">{typeLabel}</span>
              {event.isFree && <span className="badge bg-green-100 text-green-800">Miễn phí</span>}
              {event.isOnline && <span className="badge bg-blue-100 text-blue-800">Trực tuyến</span>}
            </div>
            <Link href={`/su-kien/${event.slug}`} className="block">
              <h3 className="font-semibold text-ocop-primary-950 line-clamp-1 mb-1 hover:text-ocop-primary-700 transition-colors">
                {event.title}
              </h3>
            </Link>
            <div className="flex flex-wrap items-center gap-3 text-sm text-ocop-primary-500">
              <span className="flex items-center gap-1">
                📍 {event.location.venue}
              </span>
              {event.endDate && (
                <span className="flex items-center gap-1">
                  ⏰ {format(new Date(event.startDate), 'HH:mm', { locale: vi })} - {format(new Date(event.endDate), 'HH:mm', { locale: vi })}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article className="card overflow-hidden">
        <Link href={`/su-kien/${event.slug}`} className="block">
          <div className="relative aspect-video overflow-hidden">
            {event.thumbnail ? (
              <Image
                src={event.thumbnail.url}
                alt={event.thumbnail.alt || event.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-ocop-primary-50 text-6xl">📅</div>
            )}
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              <span className={`badge ${status.className}`}>{status.icon} {status.label}</span>
              <span className="badge bg-ocop-primary-100 text-ocop-primary-700">{typeLabel}</span>
            </div>
            {event.isFree && (
              <div className="absolute top-3 right-3 badge bg-green-100 text-green-800">MIỄN PHÍ</div>
            )}
            {event.isOnline && (
              <div className="absolute bottom-3 right-3 badge bg-blue-100 text-blue-800">TRỰC TUYẾN</div>
            )}
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <time className="text-xs text-ocop-primary-500 flex items-center gap-1" dateTime={event.startDate}>
                📅 {format(new Date(event.startDate), 'dd/MM/yyyy', { locale: vi })}
                {event.endDate && ` - ${format(new Date(event.endDate), 'dd/MM/yyyy', { locale: vi })}`}
              </time>
            </div>
            <div className="flex items-center gap-2 text-sm text-ocop-primary-500 mb-3">
              <span className="flex items-center gap-1">📍 {event.location.venue}</span>
              <span className="text-ocop-primary-400">|</span>
              <span>{event.location.province}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-ocop-primary-950 line-clamp-2 mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-ocop-primary-600 line-clamp-2 mb-3">{event.shortDescription}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {event.organizer && (
                  <span className="text-sm text-ocop-primary-500">Tổ chức: {event.organizer}</span>
                )}
              </div>
              <span className="text-sm font-medium text-ocop-primary-700 flex items-center gap-1">
                Xem chi tiết <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="card-hover card overflow-hidden">
      <Link href={`/su-kien/${event.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          {event.thumbnail ? (
            <Image
              src={event.thumbnail.url}
              alt={event.thumbnail.alt || event.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-ocop-primary-50 text-6xl">📅</div>
          )}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            <span className={`badge ${status.className}`}>{status.icon} {status.label}</span>
            <span className="badge bg-ocop-primary-100 text-ocop-primary-700">{typeLabel}</span>
          </div>
          {event.isFree && (
            <div className="absolute top-3 right-3 badge bg-green-100 text-green-800">MIỄN PHÍ</div>
          )}
          {event.isOnline && (
            <div className="absolute bottom-3 right-3 badge bg-blue-100 text-blue-800">TRỰC TUYẾN</div>
          )}
        </div>
        <div className="p-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <time className="text-xs text-ocop-primary-500 flex items-center gap-1" dateTime={event.startDate}>
              📅 {format(new Date(event.startDate), 'dd/MM/yyyy', { locale: vi })}
              {event.endDate && ` - ${format(new Date(event.endDate), 'dd/MM/yyyy', { locale: vi })}`}
            </time>
          </div>
          <div className="flex items-center gap-2 text-sm text-ocop-primary-500 mb-3">
            <span className="flex items-center gap-1">📍 {event.location.venue}</span>
            <span className="text-ocop-primary-400">|</span>
            <span>{event.location.province}</span>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-ocop-primary-950 line-clamp-2 mb-2">
            {event.title}
          </h3>
          <p className="text-sm text-ocop-primary-600 line-clamp-2">{event.shortDescription}</p>
        </div>
      </Link>
    </article>
  );
}