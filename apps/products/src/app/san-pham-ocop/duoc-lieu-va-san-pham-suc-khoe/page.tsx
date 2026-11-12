import React from 'react';
import { ProductsSubnav } from '@/components/layout/ProductsSubnav';
import { DuocLieuHeroSection } from '@/components/categories/duoc-lieu/DuocLieuHeroSection';
import { DuocLieuFeaturedSection } from '@/components/categories/duoc-lieu/DuocLieuFeaturedSection';
import { DuocLieuProductsGridSection } from '@/components/categories/duoc-lieu/DuocLieuProductsGridSection';
import { DuocLieuStoriesSection } from '@/components/categories/duoc-lieu/DuocLieuStoriesSection';

export const metadata = {
  title: 'Dược liệu & Sản phẩm Sức khỏe OCOP',
  description: 'Cơ sở dữ liệu các bài thuốc dân gian, cây dược liệu quý dưới tán rừng đại ngàn, tinh dầu thảo mộc và sản phẩm chăm sóc sức khỏe thuần tự nhiên đạt chuẩn OCOP quốc gia.',
};

export default function DuocLieuPage() {
  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Sub-header chuyên mục */}
      <ProductsSubnav activeCategory="duoc-lieu-va-san-pham-suc-khoe" />

      {/* Main content */}
      <main className="w-full min-h-[calc(100vh-128px)] bg-surface">
        <div className="flex flex-col w-full">
          <DuocLieuHeroSection />
          <DuocLieuFeaturedSection />
          <DuocLieuProductsGridSection />
          <DuocLieuStoriesSection />
        </div>
      </main>
    </div>
  );
}
