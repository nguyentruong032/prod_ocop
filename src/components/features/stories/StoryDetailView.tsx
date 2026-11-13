import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { MediaImage } from "@/components/ui/MediaImage";
import { RichText } from "@/components/ui/RichText";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { VideoEmbedClient } from "@/components/ui/VideoEmbedClient";
import { ReadingProgressClient } from "@/components/ui/ReadingProgressClient";
import { StoriesSubNav } from "./StoriesSubNav";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Article, Product, Province } from "@/payload-types";

export interface StoryDetailViewProps {
  article: Article;
  relatedStories?: Article[];
  relatedProducts?: Product[];
}

const topicLabels: Record<string, string> = {
  CULTURE: "Văn hóa & Tinh hoa bản địa",
  REPORTAGE: "Phóng sự đa phương tiện",
  JOURNEY: "Hành trình chủ thể OCOP",
};

export function StoryDetailView({
  article,
  relatedStories = [],
  relatedProducts = [],
}: StoryDetailViewProps) {
  const province =
    typeof article.province === "object" && article.province !== null
      ? (article.province as Province)
      : null;

  const topicLabel = article.topic
    ? topicLabels[article.topic] || article.topic
    : "Câu chuyện OCOP";

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

  const breadcrumbs = [
    { label: "Câu chuyện OCOP", href: "/vi/cau-chuyen-ocop" },
    ...(article.topic
      ? [
          {
            label: topicLabel,
            href:
              article.topic === "CULTURE"
                ? "/vi/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
                : article.topic === "REPORTAGE"
                  ? "/vi/cau-chuyen-ocop/phong-su-da-phuong-tien"
                  : article.topic === "JOURNEY"
                    ? "/vi/cau-chuyen-ocop/hanh-trinh-chu-the-ocop"
                    : undefined,
          },
        ]
      : []),
    { label: article.title },
  ];

  return (
    <article className="w-full bg-surface pb-16 relative">
      <JsonLd data={buildArticleJsonLd(article, `/vi/cau-chuyen-ocop/${article.slug}`)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Trang chủ", url: "/vi" },
          { name: "Câu chuyện OCOP", url: "/vi/cau-chuyen-ocop" },
          { name: article.title, url: `/vi/cau-chuyen-ocop/${article.slug}` },
        ])}
      />
      {/* Scroll Reading Progress Bar */}
      <ReadingProgressClient />

      <StoriesSubNav />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <header className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-4">
          <Badge variant="secondary">{topicLabel}</Badge>
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

      {/* Main Visual: Video or Cover Image */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {article.videoUrl ? (
          <VideoEmbedClient
            videoUrl={article.videoUrl}
            title={article.title}
            coverImage={article.coverImage}
            aspectRatio="aspect-16/9"
          />
        ) : article.coverImage ? (
          <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden bg-surface-container shadow-sm border border-surface-container">
            <MediaImage
              media={article.coverImage}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
      </div>

      {/* Story Content Body */}
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-surface-container/70 shadow-xs">
          {article.content && Object.keys(article.content).length > 0 ? (
            <RichText content={article.content} />
          ) : article.excerpt ? (
            <div className="prose max-w-none text-on-surface-variant leading-relaxed text-base sm:text-lg space-y-4 font-body-md">
              <p>{article.excerpt}</p>
              <p>
                Mỗi sản phẩm OCOP không đơn thuần là một vật phẩm tiêu dùng, mà
                là kết tinh của một miền trầm tích văn hóa, một hành trình đẫm
                mồ hôi và khát vọng giữ nghề của những con người bình dị nơi
                thôn dã. Khi được cầm trên tay sản phẩm, người tiêu dùng cảm
                nhận được trọn vẹn hương vị của đất trời và tấm lòng thơm thảo
                của người làm ra nó.
              </p>
            </div>
          ) : (
            <p className="text-on-surface-variant">
              Nội dung câu chuyện đang được cập nhật.
            </p>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-container">
            <div>
              <span className="font-label-md text-xs text-secondary font-bold uppercase tracking-wider block">
                SẢN PHẨM TRONG CÂU CHUYỆN
              </span>
              <h2 className="font-serif text-2xl font-bold text-primary mt-1">
                Sản phẩm OCOP tiêu biểu liên quan
              </h2>
            </div>
            <Link
              href="/vi/san-pham-ocop"
              className="text-xs sm:text-sm font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
            >
              <span>Xem tất cả sản phẩm</span>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id || p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Related Stories Section */}
      {relatedStories.length > 0 && (
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-container">
            <div>
              <span className="font-label-md text-xs text-secondary font-bold uppercase tracking-wider block">
                TIẾP TỤC HÀNH TRÌNH
              </span>
              <h2 className="font-serif text-2xl font-bold text-primary mt-1">
                Những câu chuyện OCOP đặc sắc khác
              </h2>
            </div>
            <Link
              href="/vi/cau-chuyen-ocop"
              className="text-xs sm:text-sm font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
            >
              <span>Xem tất cả</span>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedStories.map((s) => (
              <ArticleCard key={s.id || s.slug} article={s} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
