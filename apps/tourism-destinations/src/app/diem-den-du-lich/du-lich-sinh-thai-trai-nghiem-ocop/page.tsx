import { Metadata } from 'next';
import { DestinationSubnav } from '@/components/destinations/DestinationSubnav';
import { EcoHeroSection } from '@/components/destinations/eco/EcoHeroSection';
import { FeaturedEcoRouteSection } from '@/components/destinations/eco/FeaturedEcoRouteSection';
import { CuratedEcosystemsSection } from '@/components/destinations/eco/CuratedEcosystemsSection';
import { EcoDestinationsGridSection } from '@/components/destinations/eco/EcoDestinationsGridSection';

export const metadata: Metadata = {
  title: 'Du Lịch Sinh Thái & Trải Nghiệm OCOP | Nông Thôn Mở Cửa',
  description:
    'Khám phá các tuyến du lịch nông thôn gắn liền với vùng nguyên liệu OCOP sạch, mô hình nông nghiệp tuần hoàn và văn hóa cộng đồng bản địa.',
};

export default function EcoTourismPage() {
  return (
    <main className="w-full bg-surface">
      {/* THANH SUB-HEADER CHUYÊN MỤC */}
      <DestinationSubnav activeTab="du-lich-sinh-thai" />

      {/* HERO & METRICS */}
      <EcoHeroSection />

      {/* FEATURED ECO-ROUTE SPOTLIGHT */}
      <FeaturedEcoRouteSection />

      {/* CURATED JOURNEYS BY 4 ECOSYSTEMS */}
      <CuratedEcosystemsSection />

      {/* 9 ECO-DESTINATIONS GRID */}
      <EcoDestinationsGridSection />
    </main>
  );
}
