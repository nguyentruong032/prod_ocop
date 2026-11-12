import { Metadata } from 'next';
import { SubNavHeader } from '@/components/sections/hanh-trinh/SubNavHeader';
import { HeroSection } from '@/components/sections/van-hoa/HeroSection';
import { HeritageCoverSection } from '@/components/sections/van-hoa/HeritageCoverSection';
import { CulturalRegionsSection } from '@/components/sections/van-hoa/CulturalRegionsSection';
import { FieldworkArticlesSection } from '@/components/sections/van-hoa/FieldworkArticlesSection';

export const metadata: Metadata = {
  title: 'Văn hóa & Tinh hoa bản địa',
  description:
    'Hồn đất, tình người và những bí quyết nghìn năm trao truyền. Kho tàng tri thức dân gian & Di sản sống.',
};

export default function VanHoaTinhHoaBanDiaPage() {
  return (
    <>
      <SubNavHeader currentPath="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia" />
      <div className="flex flex-col w-full font-body-md text-on-surface antialiased bg-surface">
        <section className="w-full bg-surface-container-lowest shadow-sm" />
        <HeroSection />
        <HeritageCoverSection />
        <CulturalRegionsSection />
        <FieldworkArticlesSection />
      </div>
    </>
  );
}
