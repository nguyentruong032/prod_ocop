import { Metadata } from 'next';
import { SubNavHeader } from '@/components/sections/hanh-trinh/SubNavHeader';
import { HeroSection } from '@/components/sections/hanh-trinh/HeroSection';
import { InvestigativeSection } from '@/components/sections/hanh-trinh/InvestigativeSection';
import { PlaybookSection } from '@/components/sections/hanh-trinh/PlaybookSection';
import { ArticleStreamSection } from '@/components/sections/hanh-trinh/ArticleStreamSection';

export const metadata: Metadata = {
  title: 'Hành trình chủ thể OCOP',
  description:
    'Những người trẻ dấn thân, đánh thức tiềm năng xứ sở. Hành trình rời phố về làng của thế hệ trí thức mới.',
};

export default function HanhTrinhChuTheOcopPage() {
  return (
    <>
      <SubNavHeader currentPath="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop" />
      <div className="flex flex-col w-full font-body-md text-on-surface antialiased bg-surface">
        <section className="w-full bg-surface-container-lowest border-b border-[#e2dbd0]/80 shadow-xs" />
        <HeroSection />
        <InvestigativeSection />
        <PlaybookSection />
        <ArticleStreamSection />
      </div>
    </>
  );
}
