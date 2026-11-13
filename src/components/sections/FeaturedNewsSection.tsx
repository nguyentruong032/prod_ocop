import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArticleCard } from "@/components/ui/ArticleCard";
import type { FeaturedNewsBlock, Article } from "@/payload-types";

export interface FeaturedNewsSectionProps {
  block: FeaturedNewsBlock;
}

const fallbackArticles: Article[] = [
  {
    id: "news-1",
    title:
      "Phát triển thương hiệu OCOP gắn với tiêu chuẩn chất lượng và chuyển đổi số",
    slug: "phat-trien-thuong-hieu-ocop-gan-voi-tieu-chuan-chat-luong",
    kind: "NEWS",
    topic: "POLICY",
    publishedAt: "2026-11-10T08:00:00Z",
    excerpt:
      "Hội nghị toàn quốc đánh giá kết quả triển khai chương trình OCOP giai đoạn mới, thúc đẩy liên kết chuỗi giá trị và thị trường số.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 5,
  },
  {
    id: "news-2",
    title: "Xúc tiến thương mại các sản phẩm OCOP 5 sao tại thị trường quốc tế",
    slug: "xuc-tien-thuong-mai-san-pham-ocop-5-sao-quoc-te",
    kind: "NEWS",
    topic: "TRADE",
    publishedAt: "2026-11-08T09:30:00Z",
    excerpt:
      "Đoàn doanh nghiệp OCOP Việt Nam tham gia hội chợ thương mại nông sản quốc tế, mở rộng hợp đồng xuất khẩu chính ngạch.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 4,
  },
  {
    id: "news-3",
    title: "Hỗ trợ các chủ thể OCOP hoàn thiện bao bì và chỉ dẫn địa lý",
    slug: "ho-tro-chu-the-ocop-hoan-thien-bao-bi-chi-dan-dia-ly",
    kind: "NEWS",
    topic: "LOCAL_OCOP",
    publishedAt: "2026-11-05T14:00:00Z",
    excerpt:
      "Các địa phương đẩy mạnh tập huấn nâng cao năng lực thiết kế nhận diện thương hiệu và bảo hộ sở hữu trí tuệ cho sản phẩm làng nghề.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 4,
  },
];

export function FeaturedNewsSection({ block }: FeaturedNewsSectionProps) {
  const heading = block.heading || "Tin tức & Sự kiện tiêu điểm";
  const rawArticles = (block.pinned || []).filter(
    (item): item is Article => typeof item === "object" && item !== null,
  );
  const articles = rawArticles.length > 0 ? rawArticles : fallbackArticles;

  const [leadArticle, ...secondaryArticles] = articles;

  return (
    <section className="w-full bg-surface-beige py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CHUYÊN MỤC 01"
          title={heading}
          description="Nhịp đập chính sách, hoạt động xúc tiến thương mại và chuyển động OCOP trên toàn quốc."
          viewAllHref="/vi/tin-tuc-su-kien"
          viewAllLabel="Xem tất cả tin tức"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {leadArticle && (
            <div className="lg:col-span-7 flex flex-col">
              <ArticleCard article={leadArticle} variant="lead" priority />
            </div>
          )}

          {secondaryArticles.length > 0 && (
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {secondaryArticles.map((article) => (
                <ArticleCard
                  key={article.id || article.slug}
                  article={article}
                  variant="compact"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedNewsSection;
