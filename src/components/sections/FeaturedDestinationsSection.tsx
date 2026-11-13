import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MediaImage } from '@/components/ui/MediaImage';
import { Badge } from '@/components/ui/Badge';
import { getDocPath } from '@/lib/paths';
import type { FeaturedDestinationsBlock, Destination, Province } from '@/payload-types';

export interface FeaturedDestinationsSectionProps {
  block: FeaturedDestinationsBlock;
}

const fallbackDestinations: Destination[] = [
  {
    id: 'dest-1',
    title: 'Không gian văn hóa Trà Tân Cương',
    slug: 'khong-gian-van-hoa-tra-tan-cuong',
    kind: 'ECO_TOUR',
    coverImage: '/anh_phong_canh.webp',
    excerpt: 'Hành trình trải nghiệm đồi chè bát úp xanh mướt, tự tay hái búp chè một tôm hai lá và thưởng trà cùng nghệ nhân.',
    province: { id: 'p1', name: 'Thái Nguyên', slug: 'thai-nguyen', code: 'TN', region: 'BAC' },
  },
  {
    id: 'dest-2',
    title: 'Làng gốm Thanh Hà bên dòng sông Thu Bồn',
    slug: 'lang-gom-thanh-ha-song-thu-bon',
    kind: 'CRAFT_VILLAGE',
    coverImage: '/anh_phong_canh.webp',
    excerpt: 'Di sản làng nghề truyền thống hơn 500 năm tuổi, nơi các nghệ nhân lưu giữ kỹ thuật chuốt gốm đất sét thủ công độc đáo.',
    province: { id: 'p2', name: 'Quảng Nam', slug: 'quang-nam', code: 'QN', region: 'TRUNG' },
  },
  {
    id: 'dest-3',
    title: 'Làng hoa Sa Đéc và du lịch nông nghiệp xanh',
    slug: 'lang-hoa-sa-dec-du-lich-nong-nghiep-xanh',
    kind: 'DESTINATION',
    coverImage: '/anh_phong_canh.webp',
    excerpt: 'Vựa hoa kiểng lớn nhất miền Tây Nam Bộ với hàng nghìn chủng loại hoa nở rộ trên giàn nổi trên mặt nước phù sa.',
    province: { id: 'p3', name: 'Đồng Tháp', slug: 'dong-thap', code: 'DT', region: 'NAM' },
  },
];

export function FeaturedDestinationsSection({ block }: FeaturedDestinationsSectionProps) {
  const heading = block.heading || 'Điểm đến & Trải nghiệm sinh thái OCOP';
  const rawDestinations = (block.pinned || []).filter((item): item is Destination => typeof item === 'object' && item !== null);
  const destinations = rawDestinations.length > 0 ? rawDestinations : fallbackDestinations;

  const getKindLabel = (kind: string) => {
    switch (kind) {
      case 'CRAFT_VILLAGE':
        return 'Làng nghề truyền thống';
      case 'ECO_TOUR':
        return 'Du lịch sinh thái';
      default:
        return 'Điểm đến văn hóa';
    }
  };

  return (
    <section className="w-full bg-[#e8efea] py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CHUYÊN MỤC 04"
          title={heading}
          description="Kết nối các làng nghề cổ truyền, tuyến du lịch sinh thái nông nghiệp và điểm đến trải nghiệm văn hóa bản địa."
          viewAllHref="/vi/diem-den-du-lich"
          viewAllLabel="Xem tất cả điểm đến"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6">
          {destinations.slice(0, 3).map((dest) => {
            const provinceName =
              typeof dest.province === 'object' && dest.province !== null
                ? (dest.province as Province).name
                : undefined;

            return (
              <article
                key={dest.id || dest.slug}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60"
              >
                <div className="relative w-full aspect-16/10 overflow-hidden bg-surface-container">
                  <MediaImage
                    media={dest.coverImage}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="primary">{getKindLabel(dest.kind)}</Badge>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {provinceName && (
                      <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider block mb-1">
                        {provinceName}
                      </span>
                    )}
                    <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                      <Link href={getDocPath('destinations', dest)}>
                        {dest.title}
                      </Link>
                    </h3>
                    {dest.excerpt && (
                      <p className="font-body-sm text-xs md:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                        {dest.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-surface-container/60 flex items-center justify-between">
                    <Link
                      href={getDocPath('destinations', dest)}
                      className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
                    >
                      <span>Khám phá hành trình</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinationsSection;
