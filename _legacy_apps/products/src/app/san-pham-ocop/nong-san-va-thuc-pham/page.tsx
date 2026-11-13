import React from 'react';
import { ProductsSubnav } from '@/components/layout/ProductsSubnav';
import { NongSanHeroSection } from '@/components/categories/nong-san/NongSanHeroSection';
import { NongSanFeaturedSection } from '@/components/categories/nong-san/NongSanFeaturedSection';
import { NongSanProductsGridSection } from '@/components/categories/nong-san/NongSanProductsGridSection';

export const metadata = {
  title: 'Nông Sản & Thực Phẩm OCOP Việt Nam',
  description: 'Hệ sinh thái nông sản bản địa & ẩm thực truyền thống OCOP Việt Nam.',
};

export default function NongSanPage() {
  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Sub-header chuyên mục */}
      <ProductsSubnav activeCategory="nong-san-va-thuc-pham" />

      {/* Main content */}
      <main className="w-full min-h-[calc(100vh-128px)] bg-surface">
        <div className="flex flex-col w-full">
          <NongSanHeroSection />
          <NongSanFeaturedSection />
          <NongSanProductsGridSection />
        </div>
      </main>
    </div>
  );
}
