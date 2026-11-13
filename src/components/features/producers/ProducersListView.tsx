import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProducerCard } from "@/components/ui/ProducerCard";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { UrlFilterBarClient } from "@/components/ui/UrlFilterBarClient";
import { getPaginationInfo } from "@/lib/pagination";
import type { LandingPage, Province } from "@/payload-types";
import type { PaginatedProducersResult } from "@/lib/data/producers";

export interface ProducersListViewProps {
  landing?: LandingPage | null;
  result: PaginatedProducersResult;
  provinces: Province[];
  baseUrl: string;
  selectedType?: string;
  selectedProvince?: string;
  searchQuery?: string;
}

const TYPE_OPTIONS = [
  { value: "COOPERATIVE", label: "Hợp tác xã (HTX)" },
  { value: "ENTERPRISE", label: "Doanh nghiệp" },
  { value: "HOUSEHOLD", label: "Hộ kinh doanh" },
];

export function ProducersListView({
  landing,
  result,
  provinces,
  baseUrl,
  selectedType,
  selectedProvince,
  searchQuery,
}: ProducersListViewProps) {
  const {
    docs: producers,
    totalDocs,
    page: currentPage,
    limit: pageSize,
  } = result;
  const pagination = getPaginationInfo(totalDocs, currentPage, pageSize);

  const title = landing?.heading || "Danh bạ Chủ thể OCOP Việt Nam";
  const description =
    landing?.intro ||
    "Mạng lưới hợp tác xã, doanh nghiệp và các hộ kinh doanh tiêu biểu, đóng vai trò hạt nhân trong việc bảo tồn văn hóa truyền thống và phát triển kinh tế nông thôn.";

  const provinceOptions = provinces.map((p) => ({
    value: p.slug,
    label: p.name,
  }));

  const filterFields = [
    {
      name: "type",
      label: "Loại hình chủ thể",
      options: TYPE_OPTIONS,
    },
    {
      name: "province",
      label: "Tỉnh / Thành phố",
      options: provinceOptions,
    },
  ];

  return (
    <div className="w-full bg-surface pb-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Chủ thể OCOP" }]} className="mb-4" />

        <header className="mb-8">
          <span className="font-label-md text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-2">
            HẠT NHÂN KINH TẾ NÔNG THÔN BẢN ĐỊA
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

        {/* Producers Grid */}
        {producers.length === 0 ? (
          <EmptyState
            title="Không tìm thấy chủ thể phù hợp"
            description="Vui lòng thử thay đổi loại hình tổ chức hoặc chọn địa bàn tỉnh thành khác."
            actionHref={baseUrl}
            actionLabel="Xóa bộ lọc"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {producers.map((producer) => (
              <ProducerCard
                key={producer.id || producer.slug}
                producer={producer}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          pagination={pagination}
          baseUrl={baseUrl}
          searchParams={{
            type: selectedType,
            province: selectedProvince,
            q: searchQuery,
          }}
        />
      </div>
    </div>
  );
}
