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

const ECOSYSTEM_OPTIONS = [
  { value: "", label: "Tất cả hệ sinh thái" },
  { value: "HIGHLAND_TEA_COFFEE", label: "Cao nguyên Chè & Cà phê" },
  { value: "RIVER_GARDEN_DELTA", label: "Sông nước Miệt vườn" },
  { value: "MEDICINAL_FOREST", label: "Rừng Dược liệu Bản địa" },
  { value: "COASTAL_ISLAND", label: "Duyên hải & Đảo ngọc" },
];

export interface EcoTourismViewProps {
  landing: LandingPage | null;
  result: PaginatedDestinationsResult;
  provinces: Province[];
  selectedEcosystem?: string;
  selectedProvince?: string;
  baseUrl: string;
}

export function EcoTourismView({
  landing,
  result,
  provinces,
  selectedEcosystem,
  selectedProvince,
  baseUrl,
}: EcoTourismViewProps) {
  const heading =
    landing?.heading || "Du Lịch Sinh Thái & Trải Nghiệm OCOP";
  const intro =
    landing?.intro ||
    "Khám phá các tuyến du lịch nông thôn gắn liền với vùng nguyên liệu OCOP sạch, mô hình nông nghiệp tuần hoàn và văn hóa cộng đồng bản địa.";

  const filterFields: FilterField[] = [
    {
      name: "ecosystem",
      label: "Hệ sinh thái",
      options: ECOSYSTEM_OPTIONS,
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
      <DestinationSubnav activeTab="eco" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb
          items={[
            { label: "Điểm đến du lịch", href: "/vi/diem-den-du-lich" },
            { label: "Du lịch sinh thái" },
          ]}
          className="mb-6"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-surface-container-low to-surface-container rounded-3xl p-8 sm:p-12 mb-8 border border-surface-container shadow-2xs">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-label-md font-semibold text-secondary uppercase tracking-widest block mb-2">
              HÀNH TRÌNH NÔNG THÔN MỞ CỬA
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight mb-4">
              {heading}
            </h1>
            <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
              {intro}
            </p>
          </div>

          {/* Quick ecosystem chip links */}
          <div className="mt-8 flex flex-wrap gap-2">
            <Link
              href={baseUrl}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors ${
                !selectedEcosystem
                  ? "bg-primary text-white"
                  : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              TẤT CẢ HỆ SINH THÁI
            </Link>
            {ECOSYSTEM_OPTIONS.filter((e) => e.value).map((eco) => {
              const isActive = selectedEcosystem === eco.value;
              return (
                <Link
                  key={eco.value}
                  href={`${baseUrl}?ecosystem=${eco.value}`}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {eco.label.toUpperCase()}
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
            title="Chưa tìm thấy tuyến du lịch sinh thái phù hợp"
            description="Hãy thử chọn hệ sinh thái khác hoặc đặt lại bộ lọc để xem các tuyến điểm đến hấp dẫn."
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
                ecosystem: selectedEcosystem,
                province: selectedProvince,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default EcoTourismView;
