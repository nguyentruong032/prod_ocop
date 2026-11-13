import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { EventCard } from "@/components/ui/EventCard";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { NewsSubNav } from "./NewsSubNav";
import { getPaginationInfo } from "@/lib/pagination";
import type { LandingPage, Event } from "@/payload-types";

export interface TradePromotionViewProps {
  landing?: LandingPage | null;
  events: Event[];
  totalDocs: number;
  currentPage: number;
  pageSize: number;
  status?: "upcoming" | "ongoing" | "ended" | "all";
}

const STATUS_TABS = [
  { value: "all", label: "Tất cả" },
  { value: "upcoming", label: "Sắp diễn ra" },
  { value: "ongoing", label: "Đang diễn ra" },
  { value: "ended", label: "Đã kết thúc" },
];

export function TradePromotionView({
  landing,
  events,
  totalDocs,
  currentPage,
  pageSize,
  status = "all",
}: TradePromotionViewProps) {
  const pagination = getPaginationInfo(totalDocs, currentPage, pageSize);

  const title = landing?.heading || "Xúc tiến Thương mại OCOP";
  const description =
    landing?.intro ||
    "Lịch trình các hội chợ triển lãm, diễn đàn kết nối cung cầu và chương trình xúc tiến bán hàng OCOP trên toàn quốc và quốc tế.";

  return (
    <div className="w-full bg-surface pb-16">
      <NewsSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Tin tức & Sự kiện", href: "/vi/tin-tuc-su-kien" },
            { label: "Xúc tiến thương mại" },
          ]}
          className="mb-4"
        />

        <header className="mb-8">
          <span className="font-label-md text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-2">
            KẾT NỐI GIAO THƯƠNG QUỐC GIA
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-body-md">
            {description}
          </p>
        </header>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 border-b border-surface-container pb-4 mb-8 overflow-x-auto no-scrollbar">
          {STATUS_TABS.map((tab) => {
            const isSelected = (status || "all") === tab.value;
            const href =
              tab.value === "all"
                ? "/vi/tin-tuc-su-kien/xuc-tien-thuong-mai"
                : `/vi/tin-tuc-su-kien/xuc-tien-thuong-mai?status=${tab.value}`;

            return (
              <Link
                key={tab.value}
                href={href}
                className={`px-4 py-2 rounded-lg font-label-md text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? "bg-secondary text-on-secondary shadow-xs"
                    : "bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* Events Grid */}
        {events.length === 0 ? (
          <EmptyState
            title="Không có sự kiện nào"
            description="Hiện không có sự kiện nào trong danh mục đã chọn. Vui lòng quay lại xem toàn bộ sự kiện."
            actionHref="/vi/tin-tuc-su-kien/xuc-tien-thuong-mai"
            actionLabel="Xem tất cả sự kiện"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {events.map((evt) => (
              <EventCard key={evt.id || evt.slug} event={evt} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          pagination={pagination}
          baseUrl="/vi/tin-tuc-su-kien/xuc-tien-thuong-mai"
          searchParams={{ status: status !== "all" ? status : undefined }}
        />
      </div>
    </div>
  );
}

export default TradePromotionView;
