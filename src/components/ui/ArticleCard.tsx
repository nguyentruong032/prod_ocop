import React from "react";
import Link from "next/link";
import { MediaImage } from "./MediaImage";
import { Badge } from "./Badge";
import { getDocPath } from "@/lib/paths";
import type { Article, Province } from "@/payload-types";

export interface ArticleCardProps {
  article: Article;
  variant?: "default" | "lead" | "compact" | "horizontal";
  className?: string;
  priority?: boolean;
}

export function ArticleCard({
  article,
  variant = "default",
  className = "",
  priority = false,
}: ArticleCardProps) {
  const href = getDocPath("articles", article);
  const provinceName =
    typeof article.province === "object" && article.province !== null
      ? (article.province as Province).name
      : undefined;

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

  if (variant === "compact") {
    return (
      <article
        className={`flex gap-3 sm:gap-4 p-3 rounded-xl bg-surface-container-lowest border border-surface-container/60 hover:shadow-xs transition-all group ${className}`}
      >
        <Link
          href={href}
          className="relative w-24 h-20 sm:w-28 sm:h-22 shrink-0 rounded-lg overflow-hidden bg-surface-container"
        >
          <MediaImage
            media={article.coverImage}
            fill
            sizes="120px"
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
              <Link href={href}>{article.title}</Link>
            </h4>
          </div>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-body-sm mt-1">
            {formattedDate && (
              <time dateTime={article.publishedAt || ""}>{formattedDate}</time>
            )}
            {article.readingMinutes && (
              <>
                <span aria-hidden="true">·</span>
                <span>{article.readingMinutes} phút đọc</span>
              </>
            )}
          </div>
        </div>
      </article>
    );
  }

  if (variant === "lead") {
    return (
      <article
        className={`bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60 ${className}`}
      >
        <div className="relative w-full aspect-16/9 overflow-hidden bg-surface-container">
          <MediaImage
            media={article.coverImage}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="primary">Tiêu điểm</Badge>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
              {formattedDate && (
                <time dateTime={article.publishedAt || ""}>
                  {formattedDate}
                </time>
              )}
              {provinceName && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{provinceName}</span>
                </>
              )}
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mt-2 group-hover:text-secondary transition-colors line-clamp-2">
              <Link href={href}>{article.title}</Link>
            </h3>
            {article.excerpt && (
              <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-3 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>

          <div className="pt-6 mt-6 border-t border-surface-container flex items-center justify-between">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 font-label-md text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
            >
              <span>Đọc toàn văn</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            {article.readingMinutes && (
              <span className="text-xs text-on-surface-variant/80 flex items-center gap-1 font-body-sm">
                <span className="material-symbols-outlined text-[14px]">
                  schedule
                </span>
                <span>{article.readingMinutes} phút</span>
              </span>
            )}
          </div>
        </div>
      </article>
    );
  }

  // Default grid card
  return (
    <article
      className={`bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60 ${className}`}
    >
      <div className="relative w-full aspect-16/10 overflow-hidden bg-surface-container">
        <MediaImage
          media={article.coverImage}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {article.kind === "STORY" && (
          <div className="absolute top-3 left-3">
            <Badge variant="terracotta">Câu chuyện</Badge>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium mb-1.5">
            {formattedDate && (
              <time dateTime={article.publishedAt || ""}>{formattedDate}</time>
            )}
            {provinceName && (
              <>
                <span aria-hidden="true">·</span>
                <span>{provinceName}</span>
              </>
            )}
          </div>
          <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
            <Link href={href}>{article.title}</Link>
          </h3>
          {article.excerpt && (
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>

        <div className="pt-4 mt-4 border-t border-surface-container/60 flex items-center justify-between text-xs">
          <Link
            href={href}
            className="font-label-sm font-semibold text-primary group-hover:text-secondary inline-flex items-center gap-1"
          >
            <span>Chi tiết</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
          </Link>
          {article.readingMinutes && (
            <span className="text-on-surface-variant/70 flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">
                schedule
              </span>
              <span>{article.readingMinutes}p</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
