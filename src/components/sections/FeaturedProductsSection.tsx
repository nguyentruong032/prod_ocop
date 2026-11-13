import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MediaImage } from '@/components/ui/MediaImage';
import { Badge } from '@/components/ui/Badge';
import { getDocPath } from '@/lib/paths';
import type { FeaturedProductsBlock, Product, Province } from '@/payload-types';

export interface FeaturedProductsSectionProps {
  block: FeaturedProductsBlock;
}

const fallbackProducts: Product[] = [
  {
    id: 'prod-1',
    title: 'Trà Đinh Ngọc Tân Cương',
    slug: 'tra-dinh-ngoc-tan-cuong',
    stars: 5,
    category: 'NONG_SAN_THUC_PHAM',
    coverImage: '/anh_phong_canh.webp',
    excerpt: 'Được tuyển chọn từ những búp trà đinh non tươi ngon nhất vùng đồi chè Tân Cương, Thái Nguyên.',
    province: { id: 'p1', name: 'Thái Nguyên', slug: 'thai-nguyen', code: 'TN', region: 'BAC' },
  },
  {
    id: 'prod-2',
    title: 'Nước mắm Phú Quốc truyền thống',
    slug: 'nuoc-mam-phu-quoc-truyen-thong',
    stars: 5,
    category: 'NONG_SAN_THUC_PHAM',
    coverImage: '/anh_phong_canh.webp',
    excerpt: 'Ủ chượp tự nhiên từ cá cơm than tươi và muối hạt tinh khiết trong thùng gỗ bời lời.',
    province: { id: 'p2', name: 'Kiên Giang', slug: 'kien-giang', code: 'KG', region: 'NAM' },
  },
  {
    id: 'prod-3',
    title: 'Sâm Ngọc Linh Kon Tum',
    slug: 'sam-ngoc-linh-kon-tum',
    stars: 5,
    category: 'DUOC_LIEU_SUC_KHOE',
    coverImage: '/anh_phong_canh.webp',
    excerpt: 'Quốc bảo dược liệu Việt Nam sinh trưởng tự nhiên dưới tán rừng nguyên sinh đỉnh Ngọc Linh.',
    province: { id: 'p3', name: 'Kon Tum', slug: 'kon-tum', code: 'KT', region: 'TRUNG' },
  },
  {
    id: 'prod-4',
    title: 'Gốm sứ Chu Đậu men tro trấu',
    slug: 'gom-su-chu-dau-men-tro-trau',
    stars: 4,
    category: 'THU_CONG_MY_NGHE',
    coverImage: '/anh_phong_canh.webp',
    excerpt: 'Dòng gốm cổ truyền mỹ nghệ bác học với kỹ thuật vẽ lam họa tiết chim hoa độc bản.',
    province: { id: 'p4', name: 'Hải Dương', slug: 'hai-duong', code: 'HD', region: 'BAC' },
  },
];

export function FeaturedProductsSection({ block }: FeaturedProductsSectionProps) {
  const heading = block.heading || 'Sản phẩm OCOP tiêu biểu';
  const rawProducts = (block.pinned || []).filter((item): item is Product => typeof item === 'object' && item !== null);
  const products = rawProducts.length > 0 ? rawProducts : fallbackProducts;

  return (
    <section className="w-full bg-surface-container-lowest py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CHUYÊN MỤC 02"
          title={heading}
          description="Khám phá các sản phẩm OCOP đạt chuẩn 3–5 sao từ khắp các vùng miền trên cả nước."
          viewAllHref="/vi/san-pham-ocop"
          viewAllLabel="Xem tất cả sản phẩm"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {products.slice(0, 4).map((product) => {
            const provinceName =
              typeof product.province === 'object' && product.province !== null
                ? (product.province as Province).name
                : undefined;

            return (
              <article
                key={product.id || product.slug}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60"
              >
                <div className="relative w-full aspect-4/3 overflow-hidden bg-surface-container">
                  <MediaImage
                    media={product.coverImage}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="stars" stars={product.stars}>
                      {product.stars} Sao
                    </Badge>
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
                      <Link href={getDocPath('products', product)}>
                        {product.title}
                      </Link>
                    </h3>
                    {product.excerpt && (
                      <p className="font-body-sm text-xs md:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                        {product.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-surface-container/60 flex items-center justify-between">
                    <Link
                      href={getDocPath('products', product)}
                      className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
                    >
                      <span>Hồ sơ sản phẩm</span>
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

export default FeaturedProductsSection;
