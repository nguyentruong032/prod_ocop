import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { UrlFilterBarClient } from "@/components/ui/UrlFilterBarClient";
import { IntegrationSubNav } from "./IntegrationSubNav";
import { getPaginationInfo } from "@/lib/pagination";
import type { LandingPage, Province } from "@/payload-types";
import type { PaginatedArticlesResult } from "@/lib/data/articles";

export interface IntegrationListViewProps {
  landing?: LandingPage | null;
  result: PaginatedArticlesResult;
  provinces: Province[];
  baseUrl: string;
  pageTitle: string;
  pageDescription: string;
  selectedPillar?: string;
  selectedMarket?: string;
  selectedProvince?: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  showPillarCards?: boolean;
  headerContent?: React.ReactNode;
}

const PILLAR_OPTIONS = [
  { value: "EXPORT_MARKET", label: "Xuất khẩu & Thị trường" },
  { value: "STANDARDS", label: "Tiêu chuẩn & Chứng nhận" },
  { value: "DIGITAL", label: "Chuyển đổi số OCOP" },
];

const MARKET_OPTIONS = [
  { value: "EU", label: "Châu Âu (EU)" },
  { value: "US", label: "Hoa Kỳ" },
  { value: "JAPAN", label: "Nhật Bản" },
  { value: "CHINA", label: "Trung Quốc" },
  { value: "HALAL", label: "Thị trường Halal" },
];

export function IntegrationListView({
  landing,
  result,
  provinces,
  baseUrl,
  pageTitle,
  pageDescription,
  selectedPillar,
  selectedMarket,
  selectedProvince,
  breadcrumbItems,
  showPillarCards = false,
  headerContent,
}: IntegrationListViewProps) {
  const {
    docs: articles,
    totalDocs,
    page: currentPage,
    limit: pageSize,
  } = result;
  const pagination = getPaginationInfo(totalDocs, currentPage, pageSize);

  const title = landing?.heading || pageTitle;
  const description = landing?.intro || pageDescription;

  const provinceOptions = provinces.map((p) => ({
    value: p.slug,
    label: p.name,
  }));

  const filterFields = [
    ...(showPillarCards || baseUrl === "/vi/ocop-hoi-nhap"
      ? [
          {
            name: "pillar",
            label: "Trụ cột hội nhập",
            options: PILLAR_OPTIONS,
          },
        ]
      : []),
    ...(baseUrl.includes("xuat-khau")
      ? [
          {
            name: "marketCode",
            label: "Thị trường mục tiêu",
            options: MARKET_OPTIONS,
          },
        ]
      : []),
    {
      name: "province",
      label: "Địa phương",
      options: provinceOptions,
    },
  ];

  const defaultBreadcrumbs = [
    {
      label: "OCOP Hội nhập",
      href: baseUrl === "/vi/ocop-hoi-nhap" ? undefined : "/vi/ocop-hoi-nhap",
    },
    ...(baseUrl !== "/vi/ocop-hoi-nhap" ? [{ label: pageTitle }] : []),
  ];

  return (
    <div className="w-full bg-surface pb-16">
      <IntegrationSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={breadcrumbItems || defaultBreadcrumbs}
          className="mb-4"
        />

        <header className="mb-8">
          <span className="font-label-md text-xs sm:text-sm text-primary font-bold uppercase tracking-widest block mb-2">
            HỘI NHẬP KINH TẾ QUỐC TẾ &amp; CHUỖI GIÁ TRỊ TOÀN CẦU
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-body-md">
            {description}
          </p>
        </header>

        {headerContent}

        {/* 3 Pillar Cards (When on overview page) */}
        {showPillarCards && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Link
              href="/vi/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te"
              className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container/80 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">
                    public
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                  Xuất khẩu & Thị trường
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Tận dụng các hiệp định thương mại tự do (EVFTA, CPTPP, RCEP)
                  để đưa sản phẩm OCOP ra biển lớn.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary group-hover:text-secondary mt-4 flex items-center gap-1">
                <span>Khám phá thị trường</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </span>
            </Link>

            <Link
              href="/vi/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te"
              className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container/80 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">
                    verified
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                  Tiêu chuẩn & Chứng nhận
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Đáp ứng rào cản kỹ thuật khắt khe: GlobalGAP, Organic, FDA,
                  Halal, ISO 22000 và bảo hộ quyền SHTT.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary group-hover:text-secondary mt-4 flex items-center gap-1">
                <span>Tìm hiểu tiêu chuẩn</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </span>
            </Link>

            <Link
              href="/vi/ocop-hoi-nhap/chuyen-doi-so-ocop"
              className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container/80 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">
                    qr_code_scanner
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                  Chuyển đổi số OCOP
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Số hóa chuỗi cung ứng, minh bạch dữ liệu nhật ký canh tác số
                  và thương mại điện tử xuyên biên giới.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary group-hover:text-secondary mt-4 flex items-center gap-1">
                <span>Xem giải pháp số</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </span>
            </Link>
          </div>
        )}

        {/* Filter Bar */}
        <div className="mb-8">
          <UrlFilterBarClient fields={filterFields} />
        </div>

        {/* Articles List */}
        {articles.length === 0 ? (
          <EmptyState
            title="Chưa có bài viết phù hợp"
            description="Vui lòng thử chọn trụ cột hoặc địa phương khác."
            actionHref={baseUrl}
            actionLabel="Xóa bộ lọc"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <ArticleCard
                key={article.id || article.slug}
                article={article}
                variant={
                  idx === 0 &&
                  !selectedPillar &&
                  !selectedMarket &&
                  !selectedProvince
                    ? "default"
                    : "default"
                }
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          pagination={pagination}
          baseUrl={baseUrl}
          searchParams={{
            pillar: selectedPillar,
            marketCode: selectedMarket,
            province: selectedProvince,
          }}
        />
      </div>
    </div>
  );
}
