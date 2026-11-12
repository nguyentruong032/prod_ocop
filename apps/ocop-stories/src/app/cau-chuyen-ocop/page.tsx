import { Metadata } from 'next';
import { SubNavHeader } from '@/components/sections/hanh-trinh/SubNavHeader';
import { HeroSection } from '@/components/sections/main/HeroSection';
import { LongformSpotlightSection } from '@/components/sections/main/LongformSpotlightSection';
import { VanHoaSection } from '@/components/sections/main/VanHoaSection';
import { ChuTheSection } from '@/components/sections/main/ChuTheSection';
import { MultimediaSection } from '@/components/sections/main/MultimediaSection';
import { LatestStoriesSection } from '@/components/sections/main/LatestStoriesSection';

export const metadata: Metadata = {
  title: 'Câu chuyện OCOP – Hồn sản phẩm',
  description:
    'Đi sâu vào phần hồn của mỗi sản phẩm: hành trình khởi nghiệp của các chủ thể, văn hóa bản địa và những thước phim tài liệu sống động.',
};

export default function CauChuyenOcopPage() {
  return (
    <div className="flex flex-col w-full">
      <SubNavHeader currentPath="/cau-chuyen-ocop" />
      <HeroSection />
      <LongformSpotlightSection />
      <VanHoaSection />
      <ChuTheSection />
      <MultimediaSection />
      <LatestStoriesSection />
    </div>
  );
}
