import React from 'react';
import { IntegrationSubnav } from '@/components/integration/IntegrationSubnav';
import { ExportHeroSection } from '@/components/integration/export/ExportHeroSection';
import { MarketDeepDiveSection } from '@/components/integration/export/MarketDeepDiveSection';
import { RegionalPlaybooksSection } from '@/components/integration/export/RegionalPlaybooksSection';
import { MarketIntelligenceSection } from '@/components/integration/export/MarketIntelligenceSection';
import { TradeFairsCalendarSection } from '@/components/integration/export/TradeFairsCalendarSection';

export const metadata = {
  title: 'Xuất Khẩu & Thị Trường Quốc Tế | OCOP Hội Nhập Toàn Cầu',
  description: 'Chiến lược Mở rộng Thị phần & Xúc tiến Thương mại Quốc tế cho Sản phẩm OCOP.',
};

export default function ExportPage() {
  return (
    <main className="w-full min-h-screen bg-surface">
      <div className="w-full">
        {/* Navigation Tabs */}
        <IntegrationSubnav activeTab="xuat-khau" />

        {/* 2. Hero & Global Trade Landscape */}
        <ExportHeroSection />

        {/* 3. Tiêu điểm Thị trường Tuần này */}
        <MarketDeepDiveSection />

        {/* 4. Regional Trade Playbooks */}
        <RegionalPlaybooksSection />

        {/* 5. Danh mục Bài viết & Báo cáo Thị trường */}
        <MarketIntelligenceSection />

        {/* 6. Lịch Sự kiện Xúc tiến Thương mại & Hội chợ Quốc tế 2026 */}
        <TradeFairsCalendarSection />
      </div>
    </main>
  );
}
