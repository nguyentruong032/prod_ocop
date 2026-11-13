import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { LegalDocRow } from "@/components/ui/LegalDocRow";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { UrlFilterBarClient } from "@/components/ui/UrlFilterBarClient";
import { NewsSubNav } from "./NewsSubNav";
import { getPaginationInfo } from "@/lib/pagination";
import type { LandingPage, LegalDocument } from "@/payload-types";

export interface PolicyViewProps {
  landing?: LandingPage | null;
  docs: LegalDocument[];
  totalDocs: number;
  currentPage: number;
  pageSize: number;
  level?: string;
  query?: string;
}

const LEVEL_OPTIONS = [
  { value: "Nghị định", label: "Nghị định" },
  { value: "Thông tư", label: "Thông tư" },
  { value: "Quyết định", label: "Quyết định" },
  { value: "Chỉ thị", label: "Chỉ thị" },
  { value: "Văn bản hướng dẫn", label: "Văn bản hướng dẫn" },
];

export function PolicyView({
  landing,
  docs,
  totalDocs,
  currentPage,
  pageSize,
  level,
  query,
}: PolicyViewProps) {
  const pagination = getPaginationInfo(totalDocs, currentPage, pageSize);

  const title = landing?.heading || "Chính sách & Cơ chế OCOP";
  const description =
    landing?.intro ||
    "Hệ thống văn bản quy phạm pháp luật, nghị định, thông tư và cơ chế hỗ trợ phát triển chuỗi giá trị sản phẩm OCOP toàn quốc.";

  return (
    <div className="w-full bg-surface pb-16">
      <NewsSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Tin tức & Sự kiện", href: "/vi/tin-tuc-su-kien" },
            { label: "Chính sách & Cơ chế" },
          ]}
          className="mb-4"
        />

        <header className="mb-8">
          <span className="font-label-md text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-2">
            KHO LƯU TRỮ VĂN BẢN QUỐC GIA
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
          <UrlFilterBarClient
            fields={[
              {
                name: "level",
                label: "Cấp văn bản",
                options: LEVEL_OPTIONS,
              },
            ]}
          />
        </div>

        {/* Legal Documents List */}
        {docs.length === 0 ? (
          <EmptyState
            title="Không tìm thấy văn bản phù hợp"
            description="Vui lòng thử tìm kiếm với từ khóa hoặc cấp văn bản khác."
            actionHref="/vi/tin-tuc-su-kien/chinh-sach-va-co-che"
            actionLabel="Xem tất cả văn bản"
          />
        ) : (
          <div className="space-y-4">
            {docs.map((doc) => (
              <LegalDocRow key={doc.id || doc.slug} doc={doc} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          pagination={pagination}
          baseUrl="/vi/tin-tuc-su-kien/chinh-sach-va-co-che"
          searchParams={{ level, q: query }}
        />
      </div>
    </div>
  );
}

export default PolicyView;
