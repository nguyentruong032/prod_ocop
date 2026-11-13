import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { EventCard } from "@/components/ui/EventCard";
import { NewsSubNav } from "./NewsSubNav";
import type { LandingPage, Article, Event } from "@/payload-types";

export interface NewsLandingViewProps {
  landing?: LandingPage | null;
  news: Article[];
  upcomingEvents: Event[];
}

export function NewsLandingView({
  landing,
  news,
  upcomingEvents,
}: NewsLandingViewProps) {
  const [leadArticle, ...otherArticles] = news;

  const title = landing?.heading || "Tin tức & Sự kiện OCOP Việt Nam";
  const description =
    landing?.intro ||
    "Cổng cập nhật chính sách, phong trào OCOP các địa phương, và các chương trình xúc tiến thương mại nông sản.";

  return (
    <div className="w-full bg-surface pb-16">
      <NewsSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Tin tức & Sự kiện" }]} className="mb-4" />

        {/* Page Hero Header with unique H1 */}
        <header className="mb-10">
          <span className="font-label-md text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-2">
            TRUNG TÂM TRUYỀN THÔNG & THỜI SỰ OCOP
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-body-md">
            {description}
          </p>
        </header>

        {/* Lead News & Secondary News */}
        {leadArticle && (
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 flex flex-col">
                <ArticleCard article={leadArticle} variant="lead" priority />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                {otherArticles.slice(0, 3).map((article) => (
                  <ArticleCard
                    key={article.id || article.slug}
                    article={article}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* More News Grid */}
        {otherArticles.length > 3 && (
          <section className="mb-16">
            <SectionHeader
              eyebrow="TIN MỚI CẬP NHẬT"
              title="Nhịp đập OCOP các địa phương"
              description="Thông tin các hoạt động đánh giá, phân hạng và xây dựng chuỗi giá trị nông sản."
              viewAllHref="/vi/tin-tuc-su-kien/ocop-dia-phuong"
              viewAllLabel="Xem thêm tin địa phương"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.slice(3, 9).map((article) => (
                <ArticleCard
                  key={article.id || article.slug}
                  article={article}
                />
              ))}
            </div>
          </section>
        )}

        {/* Upcoming Events Calendar */}
        {upcomingEvents.length > 0 && (
          <section className="mt-16 pt-12 border-t border-surface-container">
            <SectionHeader
              eyebrow="XÚC TIẾN THƯƠNG MẠI"
              title="Sự kiện & Hội chợ sắp diễn ra"
              description="Lịch trình các phiên chợ OCOP, tuần lễ nông sản và hội nghị kết nối giao thương."
              viewAllHref="/vi/tin-tuc-su-kien/xuc-tien-thuong-mai"
              viewAllLabel="Xem tất cả sự kiện"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {upcomingEvents.map((evt) => (
                <EventCard key={evt.id || evt.slug} event={evt} />
              ))}
            </div>
          </section>
        )}

        {/* Quick Links banner to Policies */}
        <div className="mt-16 p-8 rounded-2xl bg-primary text-on-primary flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="font-label-md text-xs uppercase text-accent font-bold tracking-wider block mb-1">
              HỆ THỐNG VĂN BẢN
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              Tra cứu Chính sách & Cơ chế OCOP mới nhất
            </h2>
            <p className="font-body-md text-sm text-white/80 mt-1 max-w-xl">
              Kho lưu trữ Nghị định, Thông tư, Quyết định và tài liệu hướng dẫn
              quy trình công nhận chuẩn OCOP.
            </p>
          </div>
          <Link
            href="/vi/tin-tuc-su-kien/chinh-sach-va-co-che"
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-primary font-bold text-sm tracking-wide transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Tra cứu văn bản</span>
            <span className="material-symbols-outlined text-[18px]">
              policy
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsLandingView;
