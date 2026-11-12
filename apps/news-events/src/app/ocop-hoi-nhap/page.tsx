import { Metadata } from 'next';
import { IntegrationSubnav } from '@/components/integration/IntegrationSubnav';
import { IntegrationKpiSection } from '@/components/integration/overview/IntegrationKpiSection';
import { LeadInvestigativeSection } from '@/components/integration/overview/LeadInvestigativeSection';
import { ThreePillarsSection } from '@/components/integration/overview/ThreePillarsSection';
import { DataVisualizationsSection } from '@/components/integration/overview/DataVisualizationsSection';
import { EditorialArticlesGridSection } from '@/components/integration/overview/EditorialArticlesGridSection';

export const metadata: Metadata = {
  title: 'OCOP Hội Nhập | Nâng Tầm Vị Thế Nông Sản & Tinh Hoa Bản Địa Toàn Cầu',
  description:
    'Tổng quan thực địa, bộ chỉ số lưu chuyển thương mại tự do (FTA) và lộ trình số hóa chuỗi giá trị cho hơn 11.000 sản phẩm OCOP bước ra thị trường quốc tế.',
};

export default function OcopIntegrationOverviewPage() {
  return (
    <main className="w-full bg-surface min-h-[calc(100vh-28rem)]">
      <div className="flex flex-col w-full">
        {/* THANH SUB-HEADER CHUYÊN MỤC */}
        <IntegrationSubnav activeTab="overview" />

        {/* EDITORIAL SECTION HEADER & KPI DASHBOARD */}
        <IntegrationKpiSection />

        {/* DATA JOURNALISM SPOTLIGHT: LEAD INVESTIGATIVE FEATURE */}
        <LeadInvestigativeSection />

        {/* 3 NAVIGATION HUB PILLAR CARDS */}
        <ThreePillarsSection />

        {/* INTERACTIVE DATA VISUALIZATIONS SECTION */}
        <DataVisualizationsSection />

        {/* FILTERABLE GRID OF 6 HIGH-IMPACT EDITORIAL ARTICLES */}
        <EditorialArticlesGridSection />
      </div>
    </main>
  );
}
