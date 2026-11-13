import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MediaImage } from "@/components/ui/MediaImage";
import { Badge } from "@/components/ui/Badge";
import { RichText } from "@/components/ui/RichText";
import { ArticleCard } from "@/components/ui/ArticleCard";
import type { Article, Province } from "@/payload-types";

export interface NewsDetailViewProps {
  article: Article;
  relatedArticles: Article[];
}

export function NewsDetailView({
  article,
  relatedArticles,
}: NewsDetailViewProps) {
  const provinceName =
    typeof article.province === "object" && article.province !== null
      ? (article.province as Province).name
      : undefined;

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <article className="w-full bg-surface-container-lowest pb-20">
      {/* Top Breadcrumb */}
      <div className="border-b border-surface-container/60 bg-surface">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <Breadcrumb
            items={[
              { label: "Tin tức & Sự kiện", href: "/vi/tin-tuc-su-kien" },
              { label: article.title },
            ]}
          />
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="primary">Tin tức OCOP</Badge>
            {provinceName && <Badge variant="secondary">{provinceName}</Badge>}
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-primary leading-tight tracking-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant font-body-sm pb-6 border-b border-surface-container">
            {formattedDate && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-outline">
                  calendar_today
                </span>
                <time dateTime={article.publishedAt || ""}>
                  {formattedDate}
                </time>
              </span>
            )}
            {article.readingMinutes && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-outline">
                  schedule
                </span>
                <span>{article.readingMinutes} phút đọc</span>
              </span>
            )}
            <span className="flex items-center gap-1 ml-auto text-primary font-medium">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              <span>Ban Biên Tập OCOP</span>
            </span>
          </div>

          {/* Excerpt Lead */}
          {article.excerpt && (
            <div className="mt-6 p-4 sm:p-5 rounded-xl bg-surface-beige border-l-4 border-accent">
              <p className="font-body-lg text-base sm:text-lg font-medium text-primary leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          )}
        </header>

        {/* Featured Cover Image */}
        {article.coverImage && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-xs bg-surface-container">
            <MediaImage
              media={article.coverImage}
              showCaption={true}
              priority={true}
              className="w-full"
              imageClassName="w-full max-h-[560px] object-cover"
            />
          </div>
        )}

        {/* Main Article Content */}
        <div className="max-w-[840px] mx-auto prose-lg font-body-md text-on-surface">
          {article.content ? (
            <RichText content={article.content} />
          ) : (
            <div className="py-8 text-on-surface-variant italic text-center">
              Nội dung chi tiết của bản tin đang được đồng bộ và cập nhật...
            </div>
          )}
        </div>

        {/* Share & Editorial Footer */}
        <div className="max-w-[840px] mx-auto mt-12 pt-8 border-t border-surface-container flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-on-surface-variant font-body-sm">
            <span>Nguồn: </span>
            <strong className="text-primary font-semibold">
              Cổng thông tin điện tử OCOP Việt Nam
            </strong>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/vi/tin-tuc-su-kien"
              className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-xs font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">
                arrow_back
              </span>
              <span>Về danh mục tin tức</span>
            </Link>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-surface-container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-primary">
                Tin tức liên quan
              </h2>
              <Link
                href="/vi/tin-tuc-su-kien"
                className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
              >
                <span>Xem tất cả tin</span>
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((rel) => (
                <ArticleCard key={rel.id || rel.slug} article={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

export default NewsDetailView;
