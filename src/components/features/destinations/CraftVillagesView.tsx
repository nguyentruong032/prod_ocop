import React from "react";
import Link from "next/link";
import { DestinationSubnav } from "./DestinationSubnav";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { UrlFilterBarClient, type FilterField } from "@/components/ui/UrlFilterBarClient";
import { getPaginationInfo } from "@/lib/pagination";
import type { LandingPage, Province } from "@/payload-types";
import type { PaginatedDestinationsResult } from "@/lib/data/destinations";

const CRAFT_OPTIONS = [
  { value: "", label: "Tất cả nhóm nghề" },
  { value: "GOM_SU", label: "Gốm sứ truyền thống" },
  { value: "DET_MAY", label: "Dệt the & Thổ cẩm" },
  { value: "MAY_TRE_DAN", label: "Mây tre đan" },
  { value: "DIEU_KHAC", label: "Điêu khắc mỹ nghệ" },
  { value: "KIM_HOAN", label: "Kim hoàn & Đậu bạc" },
  { value: "KHAC", label: "Nghề thủ công khác" },
];

export interface CraftVillagesViewProps {
  landing: LandingPage | null;
  result: PaginatedDestinationsResult;
  provinces: Province[];
  selectedCraft?: string;
  selectedProvince?: string;
  searchQuery?: string;
  baseUrl: string;
}

export function CraftVillagesView({
  landing,
  result,
  provinces,
  selectedCraft,
  selectedProvince,
  searchQuery,
  baseUrl,
}: CraftVillagesViewProps) {
  const heading =
    landing?.heading || "Hồn Cốt Làng Nghề Truyền Thống Việt Nam";
  const intro =
    landing?.intro ||
    "Tôn vinh hàng nghìn làng nghề truyền thống trên dải đất hình chữ S, nơi lưu giữ tinh hoa tổ nghề, trầm tích văn hóa và khát vọng vươn tầm thế giới qua từng chứng chỉ OCOP Quốc gia.";

  const filterFields: FilterField[] = [
    {
      name: "craft",
      label: "Nhóm nghề thủ công",
      options: CRAFT_OPTIONS,
    },
    {
      name: "province",
      label: "Tỉnh / Thành phố",
      options: [
        { value: "", label: "Tất cả địa phương" },
        ...provinces.map((p) => ({ value: p.slug, label: p.name })),
      ],
    },
  ];

  const pagination = getPaginationInfo(
    result.totalDocs,
    result.page,
    result.limit,
  );

  return (
    <div className="w-full bg-background min-h-screen">
      <DestinationSubnav activeTab="craft" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb
          items={[
            { label: "Điểm đến du lịch", href: "/vi/diem-den-du-lich" },
            { label: "Làng nghề truyền thống" },
          ]}
          className="mb-6"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/5 via-surface-container-low to-surface-container rounded-3xl p-8 sm:p-12 mb-8 border border-surface-container shadow-2xs">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-label-md font-semibold text-secondary uppercase tracking-widest block mb-2">
              DI SẢN TRĂM NĂM — TINH HOA TỔ NGHỀ
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight mb-4">
              {heading}
            </h1>
            <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
              {intro}
            </p>
          </div>

          {/* Quick craft taxonomy chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            <Link
              href={baseUrl}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors ${
                !selectedCraft
                  ? "bg-secondary text-white"
                  : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              TẤT CẢ LÀNG NGHỀ
            </Link>
            {CRAFT_OPTIONS.filter((c) => c.value).map((c) => {
              const isActive = selectedCraft === c.value;
              return (
                <Link
                  key={c.value}
                  href={`${baseUrl}?craft=${c.value}`}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors ${
                    isActive
                      ? "bg-secondary text-white"
                      : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {c.label.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Filter Bar */}
        <section className="mb-8">
          <UrlFilterBarClient fields={filterFields} />
        </section>

        {/* Results Grid */}
        {result.docs.length === 0 ? (
          <EmptyState
            title="Chưa tìm thấy làng nghề phù hợp"
            description="Hãy thử chọn nhóm nghề khác hoặc từ khóa tìm kiếm tổng quát hơn."
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {result.docs.map((dest, idx) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                priority={idx < 3}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {result.totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <Pagination
              pagination={pagination}
              baseUrl={baseUrl}
              searchParams={{
                craft: selectedCraft,
                province: selectedProvince,
                q: searchQuery,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CraftVillagesView;
