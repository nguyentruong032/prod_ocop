import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductCard } from "@/components/ui/ProductCard";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { UrlFilterBarClient } from "@/components/ui/UrlFilterBarClient";
import { ProductsSubNav } from "./ProductsSubNav";
import { getPaginationInfo } from "@/lib/pagination";
import type { LandingPage, Province } from "@/payload-types";
import type {
  PaginatedProductsResult,
  ProductsStarsCount,
} from "@/lib/data/products";

export interface ProductsByStarsViewProps {
  landing?: LandingPage | null;
  result: PaginatedProductsResult;
  provinces: Province[];
  starsCounts: ProductsStarsCount;
  currentStars?: number;
  selectedProvince?: string;
}

export function ProductsByStarsView({
  landing,
  result,
  provinces,
  starsCounts,
  currentStars,
  selectedProvince,
}: ProductsByStarsViewProps) {
  const {
    docs: products,
    totalDocs,
    page: currentPage,
    limit: pageSize,
  } = result;
  const pagination = getPaginationInfo(totalDocs, currentPage, pageSize);
  const baseUrl = "/vi/san-pham-ocop/san-pham-theo-sao";

  const title = landing?.heading || "Phân hạng Sản phẩm OCOP theo sao";
  const description =
    landing?.intro ||
    "Hệ thống đánh giá và phân hạng sản phẩm OCOP từ 3 đến 5 sao theo Quyết định của Thủ tướng Chính phủ, tôn vinh chất lượng và bản sắc văn hóa địa phương.";

  const provinceOptions = provinces.map((p) => ({
    value: p.slug,
    label: p.name,
  }));

  const filterFields = [
    {
      name: "province",
      label: "Tỉnh / Thành phố",
      options: provinceOptions,
    },
  ];

  const starTabs = [
    { stars: undefined, label: "Tất cả hạng sao", count: starsCounts.total },
    {
      stars: 5,
      label: "5 Sao Quốc gia",
      count: starsCounts.stars5,
      badge: "Thủ tướng công nhận",
    },
    {
      stars: 4,
      label: "4 Sao Cấp tỉnh",
      count: starsCounts.stars4,
      badge: "Tiềm năng 5 sao",
    },
    {
      stars: 3,
      label: "3 Sao Cấp huyện",
      count: starsCounts.stars3,
      badge: "Đặc trưng bản địa",
    },
  ];

  return (
    <div className="w-full bg-surface pb-16">
      <ProductsSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Sản phẩm OCOP", href: "/vi/san-pham-ocop" },
            { label: "Sản phẩm theo sao" },
          ]}
          className="mb-4"
        />

        <header className="mb-8">
          <span className="font-label-md text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-2">
            TIÊU CHUẨN ĐÁNH GIÁ VÀ XẾP HẠNG QUỐC GIA
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-body-md">
            {description}
          </p>
        </header>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-2xl p-6 bg-surface-container-lowest border border-surface-container/80 shadow-2xs relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary px-2.5 py-1 rounded-full bg-secondary/10">
                Cấp Quốc Gia
              </span>
              <span className="text-accent text-lg">★★★★★</span>
            </div>
            <div className="my-2">
              <span className="text-3xl font-serif font-bold text-primary block">
                {starsCounts.stars5} Sản phẩm
              </span>
              <span className="text-sm text-on-surface-variant font-medium mt-1 block">
                Sản phẩm 5 Sao (Thủ tướng phê duyệt)
              </span>
            </div>
            <div className="pt-3 border-t border-surface-container/60 text-xs text-secondary flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              <span>100% Đạt chuẩn xuất khẩu và bảo hộ SHTT</span>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-surface-container-lowest border border-surface-container/80 shadow-2xs relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-full bg-primary/10">
                Cấp Tỉnh / TP
              </span>
              <span className="text-accent text-lg">★★★★☆</span>
            </div>
            <div className="my-2">
              <span className="text-3xl font-serif font-bold text-primary block">
                {starsCounts.stars4} Sản phẩm
              </span>
              <span className="text-sm text-on-surface-variant font-medium mt-1 block">
                Sản phẩm 4 Sao (UBND tỉnh công nhận)
              </span>
            </div>
            <div className="pt-3 border-t border-surface-container/60 text-xs text-primary flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-[16px]">
                trending_up
              </span>
              <span>Tiềm năng nâng hạng lên 5 sao quốc gia</span>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-surface-container-lowest border border-surface-container/80 shadow-2xs relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-outline px-2.5 py-1 rounded-full bg-surface-container">
                Cấp Huyện / TX
              </span>
              <span className="text-accent text-lg">★★★☆☆</span>
            </div>
            <div className="my-2">
              <span className="text-3xl font-serif font-bold text-primary block">
                {starsCounts.stars3} Sản phẩm
              </span>
              <span className="text-sm text-on-surface-variant font-medium mt-1 block">
                Sản phẩm 3 Sao (Thế mạnh đặc sản địa phương)
              </span>
            </div>
            <div className="pt-3 border-t border-surface-container/60 text-xs text-outline flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-[16px]">
                storefront
              </span>
              <span>Nền tảng chuỗi giá trị nông thôn bền vững</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation for Stars */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surface-container pb-4 mb-8">
          <nav
            className="flex items-center gap-2 overflow-x-auto"
            aria-label="Lọc theo sao"
          >
            {starTabs.map((tab) => {
              const isActive =
                (tab.stars === undefined && !currentStars) ||
                (tab.stars !== undefined && currentStars === tab.stars);
              const tabHref =
                tab.stars !== undefined
                  ? `${baseUrl}?stars=${tab.stars}${selectedProvince ? `&province=${selectedProvince}` : ""}`
                  : `${baseUrl}${selectedProvince ? `?province=${selectedProvince}` : ""}`;

              return (
                <Link
                  key={tab.label}
                  href={tabHref}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all inline-flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-white shadow-xs"
                      : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-surface-container text-outline"
                    }`}
                  >
                    {tab.count}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="w-full sm:w-auto">
            <UrlFilterBarClient fields={filterFields} />
          </div>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <EmptyState
            title="Không có sản phẩm nào cho tiêu chí này"
            description="Vui lòng thử chọn hạng sao khác hoặc tỉnh thành khác."
            actionHref={baseUrl}
            actionLabel="Xem tất cả sản phẩm theo sao"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id || product.slug} product={product} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          pagination={pagination}
          baseUrl={baseUrl}
          searchParams={{
            stars: currentStars,
            province: selectedProvince,
          }}
        />
      </div>
    </div>
  );
}
