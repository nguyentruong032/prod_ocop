import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MediaImage } from "@/components/ui/MediaImage";
import { Badge } from "@/components/ui/Badge";
import type { Event, Province } from "@/payload-types";

export interface EventDetailViewProps {
  event: Event;
}

export function EventDetailView({ event }: EventDetailViewProps) {
  const provinceName =
    typeof event.province === "object" && event.province !== null
      ? (event.province as Province).name
      : undefined;

  const startDate = new Date(event.startAt);
  const formattedStart = startDate.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedEnd = event.endAt
    ? new Date(event.endAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  const agenda = event.agenda as {
    schedule?: Array<{ time: string; activity: string }>;
  } | null;
  const scheduleItems = agenda?.schedule || [];

  return (
    <div className="w-full bg-surface-container-lowest pb-20">
      {/* Top Breadcrumb */}
      <div className="border-b border-surface-container/60 bg-surface">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <Breadcrumb
            items={[
              { label: "Tin tức & Sự kiện", href: "/vi/tin-tuc-su-kien" },
              {
                label: "Xúc tiến thương mại",
                href: "/vi/tin-tuc-su-kien/xuc-tien-thuong-mai",
              },
              { label: event.title },
            ]}
          />
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="secondary">Sự kiện xúc tiến thương mại</Badge>
            {provinceName && <Badge variant="primary">{provinceName}</Badge>}
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-primary leading-tight tracking-tight">
            {event.title}
          </h1>

          {/* Key Event Facts Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 p-6 rounded-2xl bg-surface-beige border border-surface-container">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  calendar_month
                </span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-secondary font-label-sm block">
                  Thời gian tổ chức
                </span>
                <p className="font-body-md text-sm sm:text-base font-bold text-primary mt-0.5">
                  {formattedStart} {formattedEnd && ` — ${formattedEnd}`}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  location_on
                </span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-secondary font-label-sm block">
                  Địa điểm
                </span>
                <p className="font-body-md text-sm sm:text-base font-bold text-primary mt-0.5">
                  {event.location || "Việt Nam"}
                  {provinceName && ` (${provinceName})`}
                </p>
              </div>
            </div>
          </div>

          {/* Excerpt */}
          {event.excerpt && (
            <p className="mt-6 text-base sm:text-lg text-on-surface-variant leading-relaxed font-body-md">
              {event.excerpt}
            </p>
          )}
        </header>

        {/* Cover Image */}
        {event.coverImage && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xs bg-surface-container">
            <MediaImage
              media={event.coverImage}
              priority={true}
              className="w-full"
              imageClassName="w-full max-h-[520px] object-cover"
            />
          </div>
        )}

        {/* Event Agenda Schedule */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-secondary text-[26px]">
              view_timeline
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
              Chương trình &amp; Lịch trình chi tiết
            </h2>
          </div>

          {scheduleItems.length > 0 ? (
            <div className="space-y-4">
              {scheduleItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
                >
                  <div className="font-mono text-sm font-bold text-secondary bg-surface-container-lowest px-3 py-1 rounded-lg border border-surface-container shrink-0 w-fit">
                    {item.time}
                  </div>
                  <p className="font-body-md text-sm sm:text-base text-on-surface font-medium flex-1">
                    {item.activity}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-surface-container-low text-on-surface-variant italic">
              Lịch trình chi tiết của phiên kết nối đang được ban tổ chức hoàn
              tất và công bố trước ngày khai mạc.
            </div>
          )}
        </section>

        {/* Registration CTA Box */}
        <div className="p-8 rounded-2xl bg-primary text-on-primary flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="font-label-md text-xs uppercase text-accent font-bold tracking-wider block mb-1">
              DÀNH CHO CHỦ THỂ &amp; ĐỐI TÁC
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Đăng ký tham gia gian hàng hoặc giao thương
            </h3>
            <p className="font-body-md text-sm text-white/80 mt-1 max-w-xl">
              Chủ thể OCOP có nhu cầu quảng bá sản phẩm hoặc tham gia kết nối
              B2B vui lòng gửi thông tin trực tiếp về ban tổ chức.
            </p>
          </div>
          <Link
            href="/vi/gui-bai-ho-so-ocop"
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-primary font-bold text-sm tracking-wide transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Gửi hồ sơ tham gia</span>
            <span className="material-symbols-outlined text-[18px]">
              post_add
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetailView;
