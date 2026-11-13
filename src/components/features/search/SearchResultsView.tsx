import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { MediaImage } from "@/components/ui/MediaImage";
import { getPaginationInfo } from "@/lib/pagination";
import type { SearchResult, SearchType } from "@/lib/data/search";
import type { Province } from "@/payload-types";

export interface SearchResultsViewProps {
  result: SearchResult;
  query: string;
  selectedType: string;
  selectedProvince?: string;
  provinces: Province[];
  baseUrl: string;
}

const CHIP_TYPES: Array<{ id: SearchType; label: string }> = [
  { id: "ALL", label: "Tất cả" },
  { id: "ARTICLE", label: "Bài viết & Tin tức" },
  { id: "PRODUCT", label: "Sản phẩm OCOP" },
  { id: "PRODUCER", label: "Chủ thể OCOP" },
  { id: "DESTINATION", label: "Điểm đến du lịch" },
  { id: "EVENT", label: "Sự kiện" },
  { id: "LEGAL", label: "Văn bản chính sách" },
];

export function SearchResultsView({
  result,
  query,
  selectedType,
  selectedProvince,
  provinces,
  baseUrl,
}: SearchResultsViewProps) {
  const currentType = (selectedType.toUpperCase() as SearchType) || "ALL";

  return (
    <div className="w-full bg-background min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb items={[{ label: "Tra cứu & Tìm kiếm" }]} className="mb-6" />

        {/* Search Input Bar Section */}
        <section className="bg-gradient-to-br from-surface-container-low to-surface-container rounded-3xl p-6 sm:p-10 mb-8 border border-surface-container shadow-2xs">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-primary text-center mb-6">
              Tra Cứu &amp; Tìm Kiếm Dữ Liệu OCOP
            </h1>

            <form
              method="GET"
              action={baseUrl}
              className="flex flex-col sm:flex-row gap-3 bg-surface-container-lowest p-2 rounded-2xl shadow-sm border border-surface-container/80"
            >
              <div className="flex-1 flex items-center px-3">
                <span className="material-symbols-outlined text-[24px] text-primary mr-2">
                  search
                </span>
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Tìm sản phẩm, câu chuyện, làng nghề, chủ thể OCOP, văn bản..."
                  className="w-full bg-transparent text-sm sm:text-base text-on-surface focus:outline-none placeholder:text-outline"
                />
              </div>

              {selectedType && selectedType !== "ALL" && (
                <input type="hidden" name="type" value={selectedType} />
              )}
              {selectedProvince && (
                <input type="hidden" name="province" value={selectedProvince} />
              )}

              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary-container text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Tìm kiếm</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </form>

            {/* Results Headline */}
            {query && (
              <div className="mt-4 text-center">
                <p className="text-sm sm:text-base text-on-surface-variant font-body-sm">
                  Kết quả cho từ khóa &ldquo;<strong className="text-primary font-bold">{query}</strong>&rdquo; ·{" "}
                  <span className="text-secondary font-bold">
                    {result.totalItems} kết quả
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Type Filter Chips with Dynamic Facet Counts */}
          {query && (
            <div className="mt-8 pt-6 border-t border-surface-container/60 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 min-w-max justify-start lg:justify-center">
                {CHIP_TYPES.map((chip) => {
                  const isActive = currentType === chip.id;
                  const count = result.facets[chip.id] ?? 0;
                  const chipUrl = `${baseUrl}?q=${encodeURIComponent(query)}&type=${chip.id}${selectedProvince ? `&province=${selectedProvince}` : ""}`;

                  return (
                    <Link
                      key={chip.id}
                      href={chipUrl}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                        isActive
                          ? "bg-primary text-white font-semibold shadow-xs"
                          : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-primary"
                      }`}
                    >
                      <span>{chip.label}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded-md text-[11px] font-bold ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-surface-container text-on-surface-variant"
                        }`}
                      >
                        {count}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* Results List */}
        {!query ? (
          <EmptyState
            title="Nhập từ khóa để tra cứu"
            description="Tìm kiếm nhanh thông tin sản phẩm OCOP đạt sao, câu chuyện văn hóa, hồ sơ chủ thể, sự kiện xúc tiến thương mại và văn bản pháp lý."
          />
        ) : result.totalItems === 0 ? (
          <EmptyState
            title="Không tìm thấy kết quả phù hợp"
            description={`Không có nội dung nào khớp với từ khóa "${query}". Hãy thử kiểm tra lỗi chính tả hoặc tìm kiếm bằng từ khóa tổng quát hơn.`}
          />
        ) : (
          <div className="space-y-4 mb-12">
            {result.items.map((item) => (
              <article
                key={`${item.type}-${item.id}`}
                className="bg-surface-container-lowest rounded-2xl p-5 sm:p-6 border border-surface-container/70 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 group"
              >
                {item.coverImage && (
                  <div className="relative w-full sm:w-48 aspect-16/10 rounded-xl overflow-hidden bg-surface-container shrink-0">
                    <MediaImage
                      media={item.coverImage}
                      fill
                      sizes="(max-width: 640px) 100vw, 192px"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{item.typeLabel}</Badge>
                      {item.provinceName && (
                        <span className="text-xs text-secondary font-semibold uppercase tracking-wider">
                          {item.provinceName}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-lg sm:text-xl font-bold text-primary group-hover:text-secondary transition-colors leading-snug mb-2">
                      <Link href={item.path}>{item.title}</Link>
                    </h2>

                    {item.excerpt && (
                      <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed font-body-sm">
                        {item.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-surface-container/60 flex items-center justify-between">
                    <Link
                      href={item.path}
                      className="text-xs font-semibold text-primary group-hover:text-secondary inline-flex items-center gap-1"
                    >
                      <span>Xem chi tiết</span>
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </Link>

                    {item.publishedAt && (
                      <span className="text-xs text-on-surface-variant/70">
                        {new Date(item.publishedAt).toLocaleDateString("vi-VN")}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {result.totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <Pagination
              pagination={getPaginationInfo(
                result.totalItems,
                result.page,
                result.pageSize,
              )}
              baseUrl={baseUrl}
              searchParams={{
                q: query,
                type: selectedType,
                province: selectedProvince,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResultsView;
