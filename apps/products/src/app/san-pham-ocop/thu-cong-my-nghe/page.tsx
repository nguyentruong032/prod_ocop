import React from 'react';
import { ProductsSubnav } from '@/components/layout/ProductsSubnav';
import { ThuCongHeroSection } from '@/components/categories/thu-cong/ThuCongHeroSection';
import { ThuCongShowcaseSection } from '@/components/categories/thu-cong/ThuCongShowcaseSection';
import { ThuCongProductsGridSection } from '@/components/categories/thu-cong/ThuCongProductsGridSection';

export const metadata = {
  title: 'Thủ Công Mỹ Nghệ & Nghệ Thuật Bản Địa OCOP',
  description: 'Bảo tồn tinh hoa nghề truyền thống Việt Nam: gốm, lụa, mây tre đan, kim hoàn.',
};

export default function ThuCongPage() {
  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Sub-header chuyên mục */}
      <ProductsSubnav activeCategory="thu-cong-my-nghe" />

      {/* Main content */}
      <main className="w-full min-h-[calc(100vh-128px)] bg-surface">
        <div className="flex flex-col w-full">
          <ThuCongHeroSection />
          <ThuCongShowcaseSection />
          <ThuCongProductsGridSection />
        </div>
      </main>
    </div>
  );
}
