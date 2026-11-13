import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductCard } from "@/components/ui/ProductCard";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { UrlFilterBarClient } from "@/components/ui/UrlFilterBarClient";
import { ProductsSubNav } from "./ProductsSubNav";
import { getPaginationInfo } from "@/lib/pagination";
import type { LandingPage, Province } from "@/payload-types";
import type { PaginatedProductsResult } from "@/lib/data/products";

export interface ProductsListViewProps {
  landing?: LandingPage | null;
  result: PaginatedProductsResult;
  provinces: Province[];
  baseUrl: string;
  pageTitle: string;
  pageDescription: string;
  selectedStars?: number;
  selectedCategory?: string;
  selectedProvince?: string;
  searchQuery?: string;
  categoryFixed?: boolean;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
}

const CATEGORY_OPTIONS = [
  { value: "NONG_SAN_THUC_PHAM", label: "Nông sản & Thực phẩm" },
  { value: "DUOC_LIEU_SUC_KHOE", label: "Dược liệu & Sức khỏe" },
  { value: "THU_CONG_MY_NGHE", label: "Thủ công mỹ nghệ" },
  { value: "KHAC", label: "Ngành hàng khác" },
];

const STAR_OPTIONS = [
  { value: "5", label: "5 Sao (Cấp Quốc gia)" },
  { value: "4", label: "4 Sao (Cấp Tỉnh)" },
  { value: "3", label: "3 Sao (Cấp Huyện)" },
];

export function ProductsListView({
  landing,
  result,
  provinces,
  baseUrl,
  pageTitle,
  pageDescription,
  selectedStars,
  selectedCategory,
  selectedProvince,
  searchQuery,
  categoryFixed = false,
  breadcrumbItems,
}: ProductsListViewProps) {
  const {
    docs: products,
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
    {
      name: "stars",
      label: "Hạng sao",
      options: STAR_OPTIONS,
    },
    ...(!categoryFixed
      ? [
          {
            name: "category",
            label: "Ngành hàng",
            options: CATEGORY_OPTIONS,
          },
        ]
      : []),
    {
      name: "province",
      label: "Tỉnh / Thành phố",
      options: provinceOptions,
    },
  ];

  const defaultBreadcrumbs = [
    {
      label: "Sản phẩm OCOP",
      href: baseUrl === "/vi/san-pham-ocop" ? undefined : "/vi/san-pham-ocop",
    },
    ...(baseUrl !== "/vi/san-pham-ocop" ? [{ label: pageTitle }] : []),
  ];

  return (
    <div className="w-full bg-surface pb-16">
      <ProductsSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={breadcrumbItems || defaultBreadcrumbs}
          className="mb-4"
        />

        <header className="mb-8">
          <span className="font-label-md text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-2">
            HỆ SINH THÁI SẢN PHẨM OCOP VIỆT NAM
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-body-md">
            {description}
          </p>
        </header>

        {/* Filter Bar */}
        <div className="mb-8">
          <UrlFilterBarClient fields={filterFields} />
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <EmptyState
            title="Không tìm thấy sản phẩm phù hợp"
            description="Vui lòng thử thay đổi hạng sao, ngành hàng hoặc chọn tỉnh thành khác."
            actionHref={baseUrl}
            actionLabel="Xóa bộ lọc"
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
            stars: selectedStars,
            category: !categoryFixed ? selectedCategory : undefined,
            province: selectedProvince,
            q: searchQuery,
          }}
        />
      </div>
    </div>
  );
}

export default ProductsListView;
