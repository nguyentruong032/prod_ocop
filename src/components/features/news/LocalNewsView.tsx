import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { UrlFilterBarClient } from "@/components/ui/UrlFilterBarClient";
import { NewsSubNav } from "./NewsSubNav";
import { getPaginationInfo } from "@/lib/pagination";
import type { LandingPage, Article, Province } from "@/payload-types";

export interface LocalNewsViewProps {
  landing?: LandingPage | null;
  articles: Article[];
  provinces: Province[];
  totalDocs: number;
  currentPage: number;
  pageSize: number;
  selectedProvince?: string;
  selectedRegion?: string;
}

const REGION_OPTIONS = [
  { value: "BAC", label: "Miền Bắc" },
  { value: "TRUNG", label: "Miền Trung - Tây Nguyên" },
  { value: "NAM", label: "Miền Nam" },
];

export function LocalNewsView({
  landing,
  articles,
  provinces,
  totalDocs,
  currentPage,
  pageSize,
  selectedProvince,
  selectedRegion,
}: LocalNewsViewProps) {
  const pagination = getPaginationInfo(totalDocs, currentPage, pageSize);

  const title = landing?.heading || "OCOP Địa phương";
  const description =
    landing?.intro ||
    "Tin tức chuyển động, kết quả phân hạng sao, câu chuyện phát triển sản phẩm và kinh nghiệm từ các tỉnh, thành phố trên toàn quốc.";

  const provinceOptions = provinces.map((p) => ({
    value: p.slug,
    label: p.name,
  }));

  return (
    <div className="w-full bg-surface pb-16">
      <NewsSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Tin tức & Sự kiện", href: "/vi/tin-tuc-su-kien" },
            { label: "OCOP địa phương" },
          ]}
          className="mb-4"
        />

        <header className="mb-8">
          <span className="font-label-md text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-2">
            63 TỈNH THÀNH CHUYỂN ĐỘNG
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-body-md">
            {description}
          </p>
        </header>

        {/* Filters */}
        <div className="mb-8">
          <UrlFilterBarClient
            fields={[
              {
                name: "region",
                label: "Vùng miền",
                options: REGION_OPTIONS,
              },
              {
                name: "province",
                label: "Tỉnh / Thành phố",
                options: provinceOptions,
              },
            ]}
          />
        </div>

        {/* Articles Grid */}
        {articles.length === 0 ? (
          <EmptyState
            title="Không tìm thấy bài viết địa phương phù hợp"
            description="Vui lòng thử chọn tỉnh, thành phố hoặc vùng miền khác."
            actionHref="/vi/tin-tuc-su-kien/ocop-dia-phuong"
            actionLabel="Xem tất cả tin địa phương"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id || article.slug} article={article} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          pagination={pagination}
          baseUrl="/vi/tin-tuc-su-kien/ocop-dia-phuong"
          searchParams={{
            region: selectedRegion,
            province: selectedProvince,
          }}
        />
      </div>
    </div>
  );
}

export default LocalNewsView;
