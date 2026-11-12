import { Metadata } from 'next';
import { DestinationSubnav } from '@/components/destinations/DestinationSubnav';
import { HeroSection } from '@/components/destinations/HeroSection';
import { InteractiveMapSection } from '@/components/destinations/InteractiveMapSection';
import { FeaturedLocalitySection } from '@/components/destinations/FeaturedLocalitySection';
import { CraftVillagesAndEcoSection } from '@/components/destinations/CraftVillagesAndEcoSection';
import { ProductsAndStoriesSection } from '@/components/destinations/ProductsAndStoriesSection';

export const metadata: Metadata = {
  title: 'Điểm Đến & Du Lịch OCOP | Bản Đồ Nông Sản & Điểm Đến Văn Hóa Nông Thôn Việt Nam',
  description:
    'Khám phá không gian văn hóa bản địa, vùng trồng trọt di sản và mạng lưới làng nghề truyền thống gắn liền với hệ sinh thái sản phẩm OCOP đạt chuẩn quốc gia.',
};

export default function DestinationsPage() {
  return (
    <main className="w-full bg-background min-h-screen pt-0">
      <DestinationSubnav activeTab="overview" />
      <div className="flex flex-col w-full">
        {/* KHỐI 02 – HERO & ĐIỀU HƯỚNG TIỂU MỤC */}
        <HeroSection />

        {/* KHỐI 03 – BẢN ĐỒ OCOP VIỆT NAM TƯƠNG TÁC (Nền Xanh sương #E8EFEA) */}
        <InteractiveMapSection />

        {/* KHỐI 04 – ĐIỂM ĐẾN / ĐỊA PHƯƠNG TIÊU ĐIỂM (Nền Trắng #FFFFFF) */}
        <FeaturedLocalitySection />

        {/* KHỐI 05 – LÀNG NGHỀ TRUYỀN THỐNG & DU LỊCH SINH THÁI TRẢI NGHIỆM (Nền Kem ấm #F8F5EE) */}
        <CraftVillagesAndEcoSection />

        {/* KHỐI 06 – SẢN PHẨM & CÂU CHUYỆN GẮN VỚI VÙNG ĐẤT (Nền Trắng #FFFFFF) */}
        <ProductsAndStoriesSection />
      </div>
    </main>
  );
}
