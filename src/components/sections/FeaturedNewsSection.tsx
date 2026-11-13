import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MediaImage } from '@/components/ui/MediaImage';
import { Badge } from '@/components/ui/Badge';
import { getDocPath } from '@/lib/paths';
import type { FeaturedNewsBlock, Article } from '@/payload-types';

export interface FeaturedNewsSectionProps {
  block: FeaturedNewsBlock;
}

const fallbackArticles: Article[] = [
  {
    id: 'news-1',
    title: 'Phát triển thương hiệu OCOP gắn với tiêu chuẩn chất lượng và chuyển đổi số',
    slug: 'phat-trien-thuong-hieu-ocop-gan-voi-tieu-chuan-chat-luong',
    kind: 'NEWS',
    topic: 'POLICY',
    publishedAt: '2026-11-10T08:00:00Z',
    excerpt: 'Hội nghị toàn quốc đánh giá kết quả triển khai chương trình OCOP giai đoạn mới, thúc đẩy liên kết chuỗi giá trị và thị trường số.',
    coverImage: '/anh_phong_canh.webp',
  },
  {
    id: 'news-2',
    title: 'Xúc tiến thương mại các sản phẩm OCOP 5 sao tại thị trường quốc tế',
    slug: 'xuc-tien-thuong-mai-san-pham-ocop-5-sao-quoc-te',
    kind: 'NEWS',
    topic: 'TRADE',
    publishedAt: '2026-11-08T09:30:00Z',
    excerpt: 'Đoàn doanh nghiệp OCOP Việt Nam tham gia hội chợ thương mại nông sản quốc tế, mở rộng hợp đồng xuất khẩu chính ngạch.',
    coverImage: '/anh_phong_canh.webp',
  },
  {
    id: 'news-3',
    title: 'Hỗ trợ các chủ thể OCOP hoàn thiện bao bì và chỉ dẫn địa lý',
    slug: 'ho-tro-chu-the-ocop-hoan-thien-bao-bi-chi-dan-dia-ly',
    kind: 'NEWS',
    topic: 'LOCAL_OCOP',
    publishedAt: '2026-11-05T14:00:00Z',
    excerpt: 'Các địa phương đẩy mạnh tập huấn nâng cao năng lực thiết kế nhận diện thương hiệu và bảo hộ sở hữu trí tuệ cho sản phẩm làng nghề.',
    coverImage: '/anh_phong_canh.webp',
  },
];

export function FeaturedNewsSection({ block }: FeaturedNewsSectionProps) {
  const heading = block.heading || 'Tin tức & Sự kiện tiêu điểm';
  const rawArticles = (block.pinned || []).filter((item): item is Article => typeof item === 'object' && item !== null);
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
          {/* Bài tiêu điểm chính (7 Cột) */}
          {leadArticle && (
            <article className="lg:col-span-7 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60">
              <div className="relative w-full aspect-16/9 overflow-hidden bg-surface-container">
                <MediaImage
                  media={leadArticle.coverImage}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary">Tiêu điểm</Badge>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                <div>
                  {leadArticle.publishedAt && (
                    <span className="font-body-sm text-xs text-on-surface-variant font-medium">
                      {new Date(leadArticle.publishedAt).toLocaleDateString('vi-VN')}
                    </span>
                  )}
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mt-2 group-hover:text-secondary transition-colors line-clamp-2">
                    <Link href={getDocPath('articles', leadArticle)}>
                      {leadArticle.title}
                    </Link>
                  </h3>
                  {leadArticle.excerpt && (
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-3 line-clamp-3 leading-relaxed">
                      {leadArticle.excerpt}
                    </p>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-surface-container flex items-center justify-between">
                  <Link
                    href={getDocPath('articles', leadArticle)}
                    className="font-label-md text-sm text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>Xem toàn bài</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Danh sách bài phụ (5 Cột) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {secondaryArticles.slice(0, 3).map((article) => (
              <article
                key={article.id || article.slug}
                className="bg-surface-container-lowest rounded-xl p-4 md:p-5 shadow-2xs hover:shadow-xs transition-all flex gap-4 group border border-surface-container/60"
              >
                <div className="relative w-28 h-24 sm:w-32 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                  <MediaImage
                    media={article.coverImage}
                    fill
                    sizes="120px"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    {article.publishedAt && (
                      <span className="font-body-sm text-xs text-outline block mb-1">
                        {new Date(article.publishedAt).toLocaleDateString('vi-VN')}
                      </span>
                    )}
                    <h4 className="font-serif text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                      <Link href={getDocPath('articles', article)}>
                        {article.title}
                      </Link>
                    </h4>
                  </div>
                  <Link
                    href={getDocPath('articles', article)}
                    className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1 mt-2"
                  >
                    <span>Chi tiết</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedNewsSection;
