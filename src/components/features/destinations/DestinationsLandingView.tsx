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

export interface DestinationsLandingViewProps {
  landing: LandingPage | null;
  result: PaginatedDestinationsResult;
  provinces: Province[];
  selectedProvince?: string;
  baseUrl: string;
}

export function DestinationsLandingView({
  landing,
  result,
  provinces,
  selectedProvince,
  baseUrl,
}: DestinationsLandingViewProps) {
  const heading =
    landing?.heading || "Điểm Đến & Du Lịch Văn Hóa Nông Thôn OCOP";
  const intro =
    landing?.intro ||
    "Khám phá không gian văn hóa bản địa, vùng trồng trọt di sản và mạng lưới làng nghề truyền thống gắn liền với hệ sinh thái sản phẩm OCOP đạt chuẩn quốc gia.";

  const filterFields: FilterField[] = [
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
      <DestinationSubnav activeTab="all" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb items={[{ label: "Điểm đến du lịch" }]} className="mb-6" />

        {/* Hero Header */}
        <section className="bg-gradient-to-br from-surface-container-low to-surface-container rounded-3xl p-8 sm:p-12 mb-10 border border-surface-container/80 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-label-md font-semibold text-secondary uppercase tracking-widest block mb-2">
              DU LỊCH NÔNG THÔN &amp; DI SẢN BẢN ĐỊA
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight mb-4">
              {heading}
            </h1>
            <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
              {intro}
            </p>
          </div>

          {/* 2 Feature Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-surface-container/60">
            <Link
              href="/vi/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop"
              className="group p-6 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-high transition-all border border-surface-container/70 shadow-xs flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">
                  eco
                </span>
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-1">
                  Du lịch sinh thái &amp; Trải nghiệm OCOP
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2">
                  Trekking vùng nguyên liệu hữu cơ, miệt vườn trái cây và du lịch cộng đồng nông thôn.
                </p>
              </div>
            </Link>

            <Link
              href="/vi/diem-den-du-lich/lang-nghe-truyen-thong"
              className="group p-6 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-high transition-all border border-surface-container/70 shadow-xs flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">
                  palette
                </span>
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-1">
                  Làng nghề truyền thống Việt Nam
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2">
                  Gốm sứ, dệt lụa, mây tre đan, điêu khắc đá — nơi bảo tồn hồn cốt văn hóa nghìn năm.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="mb-8">
          <UrlFilterBarClient fields={filterFields} />
        </section>

        {/* Results Grid */}
        {result.docs.length === 0 ? (
          <EmptyState
            title="Chưa tìm thấy điểm đến phù hợp"
            description="Hiện chưa có điểm đến du lịch hoặc làng nghề nào theo tiêu chí bạn vừa chọn. Hãy thử xóa bớt bộ lọc."
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
              searchParams={{ province: selectedProvince }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DestinationsLandingView;
