import React from 'react';
import { IntegrationSubnav } from '@/components/integration/IntegrationSubnav';
import { StandardsHeroSection } from '@/components/integration/standards/StandardsHeroSection';
import { TechnicalInvestigationSection } from '@/components/integration/standards/TechnicalInvestigationSection';
import { StandardsMatrixSection } from '@/components/integration/standards/StandardsMatrixSection';
import { ComplianceRoadmapSection } from '@/components/integration/standards/ComplianceRoadmapSection';
import { TechnicalArticlesSection } from '@/components/integration/standards/TechnicalArticlesSection';

export const metadata = {
  title: 'Tiêu Chuẩn & Chứng Nhận Quốc Tế | OCOP Hội Nhập Toàn Cầu',
  description: 'Chuẩn hóa Chất lượng: Chiếc Vé Thông hành Đưa Sản phẩm OCOP Vươn Tầm Toàn cầu.',
};

export default function StandardsPage() {
  return (
    <main className="w-full min-h-screen bg-surface">
      <div className="flex flex-col w-full">
        {/* Navigation Tabs */}
        <IntegrationSubnav activeTab="tieu-chuan" />

        {/* Hero & Khung Tiêu chuẩn Chất lượng Toàn cầu */}
        <StandardsHeroSection />

        {/* Ký sự Phân tích Tiêu điểm */}
        <TechnicalInvestigationSection />

        {/* Ma trận Hệ thống Tiêu chuẩn Quốc tế Phổ biến */}
        <StandardsMatrixSection />

        {/* Hướng dẫn Lộ trình 6 Bước Đạt Chứng nhận Quốc tế */}
        <ComplianceRoadmapSection />

        {/* Lưới Bài viết & Hướng dẫn Thực thi Kỹ thuật */}
        <TechnicalArticlesSection />
      </div>
    </main>
  );
}
