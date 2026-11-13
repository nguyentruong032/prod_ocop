import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { VideoEmbedClient } from "@/components/ui/VideoEmbedClient";
import { StoriesSubNav } from "./StoriesSubNav";
import { getPaginationInfo } from "@/lib/pagination";
import { getDocPath } from "@/lib/paths";
import type { LandingPage, Province } from "@/payload-types";
import type { PaginatedArticlesResult } from "@/lib/data/articles";

export interface MultimediaStoriesViewProps {
  landing?: LandingPage | null;
  result: PaginatedArticlesResult;
  provinces: Province[];
  baseUrl: string;
  pageTitle: string;
  pageDescription: string;
  selectedProvince?: string;
}

export function MultimediaStoriesView({
  landing,
  result,
  baseUrl,
  pageTitle,
  pageDescription,
  selectedProvince,
}: MultimediaStoriesViewProps) {
  const {
    docs: articles,
    totalDocs,
    page: currentPage,
    limit: pageSize,
  } = result;
  const pagination = getPaginationInfo(totalDocs, currentPage, pageSize);

  const title = landing?.heading || pageTitle;
  const description = landing?.intro || pageDescription;

  // Find first video article to feature in Cinema Player
  const featuredVideoArticle =
    articles.find((a) => Boolean(a.videoUrl)) || articles[0];
  const libraryArticles = featuredVideoArticle
    ? articles.filter((a) => a.id !== featuredVideoArticle.id)
    : articles;

  return (
    <div className="w-full bg-surface pb-16">
      <StoriesSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Câu chuyện OCOP", href: "/vi/cau-chuyen-ocop" },
            { label: "Phóng sự đa phương tiện" },
          ]}
          className="mb-4"
        />

        <header className="mb-8">
          <span className="font-label-md text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-2">
            RẠP CHIẾU DI SẢN SỐ &amp; ĐIỀN DÃ ĐA PHƯƠNG TIỆN
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-body-md">
            {description}
          </p>
        </header>

        {/* Featured Cinema Player Section */}
        {featuredVideoArticle && (
          <section className="mb-14 rounded-3xl bg-surface-container-lowest p-6 sm:p-8 lg:p-10 border border-surface-container/80 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
                <span className="font-label-md text-xs text-secondary font-bold uppercase tracking-wider">
                  PHIM TÀI LIỆU TIÊU ĐIỂM
                </span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface-container text-on-surface-variant">
                4K ULTRA HD • SOUNDSCAPE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                {featuredVideoArticle.videoUrl ? (
                  <VideoEmbedClient
                    videoUrl={featuredVideoArticle.videoUrl}
                    title={featuredVideoArticle.title}
                    coverImage={featuredVideoArticle.coverImage}
                    aspectRatio="aspect-16/9"
                  />
                ) : (
                  <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-surface-container">
                    <VideoEmbedClient
                      videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      title={featuredVideoArticle.title}
                      coverImage={featuredVideoArticle.coverImage}
                    />
                  </div>
                )}
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-on-surface-variant block mb-2 font-medium">
                    {featuredVideoArticle.readingMinutes
                      ? `${featuredVideoArticle.readingMinutes} phút theo dõi`
                      : "Phóng sự tài liệu"}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-primary hover:text-secondary transition-colors mb-3 leading-snug">
                    <Link href={getDocPath("articles", featuredVideoArticle)}>
                      {featuredVideoArticle.title}
                    </Link>
                  </h2>
                  {featuredVideoArticle.excerpt && (
                    <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-4 font-body-md mb-6">
                      {featuredVideoArticle.excerpt}
                    </p>
                  )}
                </div>

                <Link
                  href={getDocPath("articles", featuredVideoArticle)}
                  className="w-full py-3 rounded-xl bg-primary hover:bg-primary-action text-white text-xs sm:text-sm font-semibold text-center transition-all inline-flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Xem chi tiết phóng sự</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Multimedia Library Section */}
        <div className="mb-6 flex items-center justify-between pb-3 border-b border-surface-container">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
            Kho tư liệu phóng sự &amp; Ký sự hình ảnh
          </h2>
          <span className="text-xs text-on-surface-variant font-medium">
            {totalDocs} tác phẩm
          </span>
        </div>

        {articles.length === 0 ? (
          <EmptyState
            title="Chưa có phóng sự nào"
            description="Các tác phẩm phóng sự đa phương tiện đang được hoàn thiện sản xuất."
            actionHref={baseUrl}
            actionLabel="Tải lại trang"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraryArticles.map((story) => (
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
