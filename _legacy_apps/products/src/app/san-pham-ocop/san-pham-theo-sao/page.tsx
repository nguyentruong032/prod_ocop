import React from 'react';
import { ProductsSubnav } from '@/components/layout/ProductsSubnav';
import { StarMetricsAndTabsSection } from '@/components/categories/theo-sao/StarMetricsAndTabsSection';
import { FeaturedFiveStarSpotlightSection } from '@/components/categories/theo-sao/FeaturedFiveStarSpotlightSection';
import { StarCategorizedProductsGridSection } from '@/components/categories/theo-sao/StarCategorizedProductsGridSection';
import { StarStoriesSection } from '@/components/categories/theo-sao/StarStoriesSection';

export const metadata = {
  title: 'Sản Phẩm Theo Sao OCOP Việt Nam',
  description: 'Danh mục phân hạng sản phẩm OCOP 3 sao, 4 sao và 5 sao quốc gia.',
};

export default function SanPhamTheoSaoPage() {
  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Sub-header chuyên mục */}
      <ProductsSubnav activeCategory="san-pham-theo-sao" />

      {/* Metrics & Tab bar */}
      <StarMetricsAndTabsSection />

      {/* MAIN BODY CONTENT */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-16 py-10 space-y-16">
        {/* Khối tiêu điểm: Dấu ấn 5 sao */}
        <FeaturedFiveStarSpotlightSection />

        {/* Lưới sản phẩm theo sao */}
        <StarCategorizedProductsGridSection />

        {/* Ký sự di sản */}
        <StarStoriesSection />
      </main>
    </div>
  );
}
