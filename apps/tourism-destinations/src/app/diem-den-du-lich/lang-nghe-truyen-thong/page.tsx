import { Metadata } from 'next';
import { DestinationSubnav } from '@/components/destinations/DestinationSubnav';
import { CraftVillagesHeroSection } from '@/components/destinations/craft/CraftVillagesHeroSection';
import { CraftTaxonomySection } from '@/components/destinations/craft/CraftTaxonomySection';
import { CraftVillagesGridSection } from '@/components/destinations/craft/CraftVillagesGridSection';

export const metadata: Metadata = {
  title: 'Hồn Cốt Làng Nghề Truyền Thống Việt Nam | Di Sản Trăm Năm',
  description:
    'Tôn vinh hơn 1.850 làng nghề truyền thống trên dải đất hình chữ S, nơi lưu giữ tinh hoa tổ nghề, trầm tích văn hóa cha truyền con nối và khát vọng vươn tầm thế giới qua từng chứng chỉ OCOP Quốc gia.',
};

export default function CraftVillagesPage() {
  return (
    <main className="w-full bg-surface">
      {/* THANH SUB-HEADER CHUYÊN MỤC */}
      <DestinationSubnav activeTab="lang-nghe" />

      {/* EDITORIAL HERO & SPLIT MOSAIC */}
      <CraftVillagesHeroSection />

      {/* CRAFT TAXONOMY CHIPS */}
      <CraftTaxonomySection />

      {/* MAIN VILLAGE GRID (9 CARDS) */}
      <CraftVillagesGridSection />
    </main>
  );
}
