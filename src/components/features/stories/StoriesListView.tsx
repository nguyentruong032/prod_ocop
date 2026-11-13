import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { MediaImage } from "@/components/ui/MediaImage";
import { Badge } from "@/components/ui/Badge";
import { StoriesSubNav } from "./StoriesSubNav";
import { getPaginationInfo } from "@/lib/pagination";
import { getDocPath } from "@/lib/paths";
import type { LandingPage, Province } from "@/payload-types";
import type { PaginatedArticlesResult } from "@/lib/data/articles";

export interface StoriesListViewProps {
  landing?: LandingPage | null;
  result: PaginatedArticlesResult;
  provinces: Province[];
  baseUrl: string;
  pageTitle: string;
  pageDescription: string;
  selectedProvince?: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
}

export function StoriesListView({
  landing,
  result,
  baseUrl,
  pageTitle,
  pageDescription,
  selectedProvince,
  breadcrumbItems,
}: StoriesListViewProps) {
  const {
    docs: articles,
    totalDocs,
    page: currentPage,
    limit: pageSize,
  } = result;
  const pagination = getPaginationInfo(totalDocs, currentPage, pageSize);

  const title = landing?.heading || pageTitle;
  const description = landing?.intro || pageDescription;

  const defaultBreadcrumbs = [
    {
      label: "Câu chuyện OCOP",
      href:
        baseUrl === "/vi/cau-chuyen-ocop" ? undefined : "/vi/cau-chuyen-ocop",
    },
    ...(baseUrl !== "/vi/cau-chuyen-ocop" ? [{ label: pageTitle }] : []),
  ];

  const leadStory = currentPage === 1 && !selectedProvince ? articles[0] : null;
  const remainingStories = leadStory ? articles.slice(1) : articles;

  return (
    <div className="w-full bg-surface pb-16">
      <StoriesSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={breadcrumbItems || defaultBreadcrumbs}
          className="mb-4"
        />

        <header className="mb-8">
          <span className="font-label-md text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-2">
            HỒN SẢN PHẨM &amp; TINH HOA VĂN HÓA BẢN ĐỊA
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-body-md">
            {description}
          </p>
        </header>

        {/* Lead Story Spotlight (Page 1) */}
        {leadStory && (
          <div className="mb-12">
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden border border-surface-container/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 group">
              <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-surface-container">
                <MediaImage
                  media={leadStory.coverImage}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary">Ký sự Điền dã</Badge>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-3 font-medium">
                    <span className="text-secondary font-bold uppercase tracking-wider">
                      TIÊU ĐIỂM HỒN NÔNG SẢN
                    </span>
                    {leadStory.readingMinutes && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{leadStory.readingMinutes} phút đọc</span>
                      </>
                    )}
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary group-hover:text-secondary transition-colors mb-4 leading-snug">
                    <Link href={getDocPath("articles", leadStory)}>
                      {leadStory.title}
                    </Link>
                  </h2>

                  {leadStory.excerpt && (
                    <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed line-clamp-4 font-body-md mb-6">
                      {leadStory.excerpt}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-surface-container/60 flex items-center justify-between">
                  <Link
                    href={getDocPath("articles", leadStory)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-action transition-all shadow-2xs"
                  >
                    <span>Đọc câu chuyện</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                  <span className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-accent">
                      auto_stories
                    </span>
                    <span>Hồ sơ di sản</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stories Grid */}
        {articles.length === 0 ? (
          <EmptyState
            title="Chưa có câu chuyện phù hợp"
            description="Vui lòng quay lại sau hoặc khám phá các chuyên mục khác."
            actionHref={baseUrl}
            actionLabel="Xem tất cả câu chuyện"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingStories.map((story) => (
              <ArticleCard key={story.id || story.slug} article={story} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          pagination={pagination}
          baseUrl={baseUrl}
          searchParams={{
            province: selectedProvince,
          }}
        />
      </div>
    </div>
  );
}
