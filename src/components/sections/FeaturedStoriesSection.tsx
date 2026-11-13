import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MediaImage } from '@/components/ui/MediaImage';
import { Badge } from '@/components/ui/Badge';
import { getDocPath } from '@/lib/paths';
import type { FeaturedStoriesBlock, Article, Province } from '@/payload-types';

export interface FeaturedStoriesSectionProps {
  block: FeaturedStoriesBlock;
}

const fallbackStories: Article[] = [
  {
    id: 'story-1',
    title: 'Giữ lửa nghề sao chè truyền thống bên sườn núi Tân Cương',
    slug: 'giu-lua-nghe-sao-che-tan-cuong',
    kind: 'STORY',
    topic: 'CULTURE',
    publishedAt: '2026-11-09T10:00:00Z',
    excerpt: 'Hơn bốn mươi năm gắn bó với đồi chè trung du, các nghệ nhân vẫn giữ cách sao chè bằng lửa củi, đôi bàn tay trần cảm nhận độ ấm của búp chè non...',
    coverImage: '/anh_phong_canh.webp',
    readingMinutes: 5,
    province: { id: 'p1', name: 'Thái Nguyên', slug: 'thai-nguyen', code: 'TN', region: 'BAC' },
  },
  {
    id: 'story-2',
    title: 'Khát vọng đưa hạt sen Đồng Tháp bay xa',
    slug: 'khat-vong-dua-hat-sen-dong-thap-bay-xa',
    kind: 'STORY',
    topic: 'JOURNEY',
    publishedAt: '2026-11-06T15:00:00Z',
    excerpt: 'Hành trình vượt khó của nữ hợp tác xã vùng châu thổ sông Tiền, biến hạt sen đồng quê thành sản phẩm sấy thăng hoa xuất khẩu.',
    coverImage: '/anh_phong_canh.webp',
    readingMinutes: 4,
    province: { id: 'p2', name: 'Đồng Tháp', slug: 'dong-thap', code: 'DT', region: 'NAM' },
  },
  {
    id: 'story-3',
    title: 'Nghệ nhân gốm Chăm Bàu Trúc và điệu múa của đất sét',
    slug: 'nghe-nhan-gom-cham-bau-truc',
    kind: 'STORY',
    topic: 'CULTURE',
    publishedAt: '2026-11-03T08:00:00Z',
    excerpt: 'Không bàn xoay, người phụ nữ Chăm đi giật lùi quanh khối đất sét, thổi linh hồn di sản văn hóa phi vật thể nhân loại vào từng chiếc bình gốm.',
    coverImage: '/anh_phong_canh.webp',
    readingMinutes: 6,
    province: { id: 'p3', name: 'Ninh Thuận', slug: 'ninh-thuan', code: 'NT', region: 'TRUNG' },
  },
];

export function FeaturedStoriesSection({ block }: FeaturedStoriesSectionProps) {
  const heading = block.heading || 'Câu chuyện OCOP nổi bật';
  const rawStories = (block.pinned || []).filter((item): item is Article => typeof item === 'object' && item !== null);
  const stories = rawStories.length > 0 ? rawStories : fallbackStories;

  const [mainStory, ...otherStories] = stories;

  return (
    <section className="w-full bg-surface-beige py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CHUYÊN MỤC 03"
          title={heading}
          description="Hành trình khởi nghiệp, văn hóa tinh hoa bản địa và những con người tâm huyết gìn giữ nghề truyền thống."
          viewAllHref="/vi/cau-chuyen-ocop"
          viewAllLabel="Xem tất cả câu chuyện"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {mainStory && (
            <article className="lg:col-span-7 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60">
              <div className="relative w-full aspect-16/10 overflow-hidden bg-surface-container">
                <MediaImage
                  media={mainStory.coverImage}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="terracotta">Ký sự đặc biệt</Badge>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant font-medium mb-2">
                    {mainStory.readingMinutes && (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">schedule</span>
                        <span>{mainStory.readingMinutes} phút đọc</span>
                      </span>
                    )}
                    {typeof mainStory.province === 'object' && mainStory.province && (
                      <span>· {(mainStory.province as Province).name}</span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    <Link href={getDocPath('articles', mainStory)}>
                      {mainStory.title}
                    </Link>
                  </h3>

                  {mainStory.excerpt && (
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-3 line-clamp-3 leading-relaxed">
                      {mainStory.excerpt}
                    </p>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-surface-container flex items-center justify-between">
                  <span className="font-body-sm text-xs text-outline italic">Ký sự OCOP</span>
                  <Link
                    href={getDocPath('articles', mainStory)}
                    className="font-label-md text-sm text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>Đọc toàn bài</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          )}

          <div className="lg:col-span-5 flex flex-col gap-5">
            {otherStories.slice(0, 2).map((story) => (
              <article
                key={story.id || story.slug}
                className="bg-surface-container-lowest rounded-xl p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group border border-surface-container/60 flex-1"
              >
                <div>
                  <div className="relative w-full aspect-16/9 rounded-lg overflow-hidden mb-3 bg-surface-container">
                    <MediaImage
                      media={story.coverImage}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-serif text-base md:text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    <Link href={getDocPath('articles', story)}>
                      {story.title}
                    </Link>
                  </h4>
                  {story.excerpt && (
                    <p className="font-body-sm text-xs md:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                      {story.excerpt}
                    </p>
                  )}
                </div>
                <div className="pt-3 mt-3 border-t border-surface-container/60 flex items-center justify-between">
                  <span className="text-xs text-outline font-body-sm">
                    {story.readingMinutes ? `${story.readingMinutes} phút đọc` : 'Bài viết'}
                  </span>
                  <Link
                    href={getDocPath('articles', story)}
                    className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
                  >
                    <span>Xem tiếp</span>
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

export default FeaturedStoriesSection;
