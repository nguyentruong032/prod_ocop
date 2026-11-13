import { Metadata } from 'next';
import { DestinationSubnav } from '@/components/destinations/DestinationSubnav';
import { GisMetricsSection } from '@/components/destinations/map/GisMetricsSection';
import { InteractiveGisWorkspace } from '@/components/destinations/map/InteractiveGisWorkspace';
import { RepresentativeProvincesGrid } from '@/components/destinations/map/RepresentativeProvincesGrid';
import { GeospatialJournalismSection } from '@/components/destinations/map/GeospatialJournalismSection';

export const metadata: Metadata = {
  title: 'Bản đồ OCOP Việt Nam: Số hóa không gian văn hóa & sản vật 63 tỉnh, thành',
  description:
    'Công cụ tương tác trực quan tra cứu tọa độ địa lý, chỉ dẫn địa lý, hệ sinh thái làng nghề và các điểm đến trải nghiệm sản phẩm OCOP đạt sao trên toàn quốc.',
};

export default function VietnamOcopMapPage() {
  return (
    <main className="w-full bg-surface">
      {/* THANH SUB-HEADER CHUYÊN MỤC */}
      <DestinationSubnav activeTab="ban-do" />

      {/* METRICS & BANNER */}
      <GisMetricsSection />

      {/* INTERACTIVE GIS WORKSPACE (2 COLUMNS) */}
      <InteractiveGisWorkspace />

      {/* GRID 6 REPRESENTATIVE PROVINCES */}
      <RepresentativeProvincesGrid />

      {/* GEOSPATIAL DATA JOURNALISM & ESSAY */}
      <GeospatialJournalismSection />
    </main>
  );
}
