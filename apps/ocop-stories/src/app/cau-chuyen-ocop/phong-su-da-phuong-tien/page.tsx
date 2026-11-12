import { Metadata } from 'next';
import { SubNavHeader } from '@/components/sections/hanh-trinh/SubNavHeader';
import { HeroSection } from '@/components/sections/phong-su/HeroSection';
import { CinemaPlayerSection } from '@/components/sections/phong-su/CinemaPlayerSection';
import { PodcastSection } from '@/components/sections/phong-su/PodcastSection';
import { PhotoEssaySection } from '@/components/sections/phong-su/PhotoEssaySection';
import { VideoLibrarySection } from '@/components/sections/phong-su/VideoLibrarySection';

export const metadata: Metadata = {
  title: 'Phóng sự đa phương tiện',
  description:
    'Lắng nghe hơi thở xứ sở qua âm thanh và hình ảnh sống động. Báo chí đa phương tiện & Thước phim tư liệu 4K.',
};

export default function PhongSuDaPhuongTienPage() {
  return (
    <>
      <SubNavHeader currentPath="/cau-chuyen-ocop/phong-su-da-phuong-tien" />
      <div className="flex flex-col w-full font-body-md text-on-surface antialiased bg-surface">
        <section className="w-full bg-surface-container-lowest border-b border-[#e2dbd0]" />
        <HeroSection />
        <CinemaPlayerSection />
        <PodcastSection />
        <PhotoEssaySection />
        <VideoLibrarySection />
      </div>
    </>
  );
}
