import React from "react";
import Link from "next/link";
import { MediaImage } from "./MediaImage";
import { Badge } from "./Badge";
import { getDocPath } from "@/lib/paths";
import type { Event, Province } from "@/payload-types";

export interface EventCardProps {
  event: Event;
  className?: string;
  priority?: boolean;
}

export function EventCard({
  event,
  className = "",
  priority = false,
}: EventCardProps) {
  const href = getDocPath("events", event);
  const provinceName =
    typeof event.province === "object" && event.province !== null
      ? (event.province as Province).name
      : undefined;

  const startDate = new Date(event.startAt);
  const formattedDay = startDate.getDate().toString().padStart(2, "0");
  const formattedMonth = `Th${startDate.getMonth() + 1}`;
  const formattedYear = startDate.getFullYear();

  return (
    <article
      className={`bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60 ${className}`}
    >
      <div className="relative w-full aspect-16/10 overflow-hidden bg-surface-container">
        <MediaImage
          media={event.coverImage}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary">Sự kiện xúc tiến</Badge>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div className="flex gap-4 items-start">
          {/* Date Badge */}
          <div className="w-14 h-14 rounded-xl bg-surface-beige border border-surface-container flex flex-col items-center justify-center shrink-0 text-center">
            <span className="font-serif text-lg font-bold text-primary leading-none">
              {formattedDay}
            </span>
            <span className="font-label-sm text-[11px] font-semibold text-secondary uppercase mt-0.5">
              {formattedMonth}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
              <Link href={href}>{event.title}</Link>
            </h3>

            {event.location && (
              <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 flex items-center gap-1 truncate">
                <span className="material-symbols-outlined text-[14px] text-accent shrink-0">
                  location_on
                </span>
                <span className="truncate">{event.location}</span>
                {provinceName && <span>({provinceName})</span>}
              </p>
            )}
          </div>
        </div>

        {event.excerpt && (
          <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-3 line-clamp-2 leading-relaxed">
            {event.excerpt}
          </p>
        )}

        <div className="pt-4 mt-4 border-t border-surface-container/60 flex items-center justify-between text-xs">
          <Link
            href={href}
            className="font-label-sm font-semibold text-primary group-hover:text-secondary inline-flex items-center gap-1"
          >
            <span>Chi tiết & Lịch trình</span>
            <span className="material-symbols-outlined text-[14px]">
              arrow_forward
            </span>
          </Link>
          <span className="text-on-surface-variant/70 text-xs font-body-sm">
            Năm {formattedYear}
          </span>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
