import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { MediaImage } from "@/components/ui/MediaImage";
import { RichText } from "@/components/ui/RichText";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { IntegrationSubNav } from "./IntegrationSubNav";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Article, Province } from "@/payload-types";

export interface IntegrationDetailViewProps {
  article: Article;
  relatedArticles?: Article[];
}

const topicLabels: Record<string, string> = {
  EXPORT_MARKET: "Xuất khẩu & Thị trường",
  STANDARDS: "Tiêu chuẩn & Chứng nhận",
  DIGITAL: "Chuyển đổi số OCOP",
};

export function IntegrationDetailView({
  article,
  relatedArticles = [],
}: IntegrationDetailViewProps) {
  const province =
    typeof article.province === "object" && article.province !== null
      ? (article.province as Province)
      : null;

  const topicLabel = article.topic
    ? topicLabels[article.topic] || article.topic
    : "OCOP Hội nhập";

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

  const breadcrumbs = [
    { label: "OCOP Hội nhập", href: "/vi/ocop-hoi-nhap" },
    ...(article.topic
      ? [
          {
            label: topicLabel,
            href:
              article.topic === "EXPORT_MARKET"
                ? "/vi/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te"
                : article.topic === "STANDARDS"
                  ? "/vi/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te"
                  : article.topic === "DIGITAL"
                    ? "/vi/ocop-hoi-nhap/chuyen-doi-so-ocop"
                    : undefined,
          },
        ]
      : []),
    { label: article.title },
  ];

  return (
    <article className="w-full bg-surface pb-16">
      <JsonLd data={buildArticleJsonLd(article, `/vi/ocop-hoi-nhap/${article.slug}`)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Trang chủ", url: "/vi" },
          { name: "OCOP Hội nhập", url: "/vi/ocop-hoi-nhap" },
          { name: article.title, url: `/vi/ocop-hoi-nhap/${article.slug}` },
        ])}
      />
      <IntegrationSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <header className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-4">
          <Badge variant="primary">{topicLabel}</Badge>
          {province && (
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
              {province.name}
            </span>
          )}
          {formattedDate && (
            <>
              <span className="text-outline text-xs">·</span>
              <time className="text-xs text-on-surface-variant font-body-sm">
                {formattedDate}
              </time>
            </>
          )}
          {article.readingMinutes && (
            <>
              <span className="text-outline text-xs">·</span>
              <span className="text-xs text-on-surface-variant font-body-sm">
                {article.readingMinutes} phút đọc
              </span>
            </>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight mb-6">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="font-body-lg text-lg sm:text-xl text-on-surface-variant leading-relaxed mb-6 font-medium">
            {article.excerpt}
          </p>
        )}
      </header>

      {/* Main Cover Image */}
      {article.coverImage && (
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden bg-surface-container shadow-sm border border-surface-container">
            <MediaImage
              media={article.coverImage}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Body */}
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-surface-container/70 shadow-xs">
          {article.content && Object.keys(article.content).length > 0 ? (
            <RichText content={article.content} />
          ) : article.excerpt ? (
            <div className="prose max-w-none text-on-surface-variant leading-relaxed text-base sm:text-lg space-y-4">
              <p>{article.excerpt}</p>
              <p>
                Tiến trình hội nhập kinh tế quốc tế mở ra cơ hội to lớn cho các
                chủ thể OCOP tiếp cận chuỗi phân phối hiện đại. Tuy nhiên, để
                cạnh tranh sòng phẳng, doanh nghiệp và hợp tác xã cần chủ động
                nâng cao năng lực quản trị, chuẩn hóa hệ thống quản lý an toàn
                thực phẩm, đồng thời tận dụng hiệu quả các công cụ sở hữu trí
                tuệ để bảo vệ thương hiệu trên trường quốc tế.
              </p>
            </div>
          ) : (
            <p className="text-on-surface-variant">
              Nội dung bài viết đang được cập nhật.
            </p>
          )}
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-container">
            <div>
              <span className="font-label-md text-xs text-primary font-bold uppercase tracking-wider block">
                TƯ LIỆU THAM KHẢO
              </span>
              <h2 className="font-serif text-2xl font-bold text-primary mt-1">
                Bài viết OCOP Hội nhập cùng chủ đề
              </h2>
            </div>
            <Link
              href="/vi/ocop-hoi-nhap"
              className="text-xs sm:text-sm font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
            >
              <span>Xem tất cả</span>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id || rel.slug} article={rel} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
