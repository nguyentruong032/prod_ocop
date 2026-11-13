import React from 'react';
import { IntegrationSubnav } from '@/components/integration/IntegrationSubnav';
import { DigitalHeroSection } from '@/components/integration/digital/DigitalHeroSection';
import { DigitalPassportSection } from '@/components/integration/digital/DigitalPassportSection';
import { FourPillarsTechSection } from '@/components/integration/digital/FourPillarsTechSection';
import { DigitalCaseStudiesSection } from '@/components/integration/digital/DigitalCaseStudiesSection';
import { DigitalArticlesSection } from '@/components/integration/digital/DigitalArticlesSection';

export const metadata = {
  title: 'Chuyển Đổi Số OCOP | OCOP Hội Nhập Toàn Cầu',
  description: 'Số hóa Chuỗi Giá trị OCOP: Từ Minh bạch Nguồn gốc đến Thương mại Điện tử Xuyên biên giới.',
};

export default function DigitalTransformationPage() {
  return (
    <main className="w-full min-h-screen bg-surface">
      <div className="flex flex-col w-full">
        {/* Navigation Tabs */}
        <IntegrationSubnav activeTab="chuyen-doi-so" />

        {/* Editorial Lead Header & Live Indicator */}
        <DigitalHeroSection />

        {/* Deep Dive Spotlight Feature: Nước Mắm Phú Quốc & Digital Passport */}
        <DigitalPassportSection />

        {/* 4 Pillar Tech Cards: Bốn Trụ cột Công nghệ Trọng điểm */}
        <FourPillarsTechSection />

        {/* Case Studies: Điển cứu Chuyển đổi số Thành công */}
        <DigitalCaseStudiesSection />

        {/* News Grid: Lưới 6 Bài viết & Cẩm nang Công nghệ Nông nghiệp Số */}
        <DigitalArticlesSection />
      </div>
    </main>
  );
}
