import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { IntegrationPillarsBlock } from '@/payload-types';

export interface IntegrationPillarsSectionProps {
  block: IntegrationPillarsBlock;
}

const defaultPillars = [
  {
    id: 'pillar-export',
    icon: 'public',
    title: 'Xuất khẩu & Thị trường quốc tế',
    description: 'Hỗ trợ mở rộng thị phần sang EU, Hoa Kỳ, Nhật Bản và các đối tác thương mại tự do thế hệ mới.',
    href: '/vi/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te',
  },
  {
    id: 'pillar-standards',
    icon: 'verified',
    title: 'Tiêu chuẩn & Chứng nhận quốc tế',
    description: 'Định vị thương hiệu nông sản qua hệ thống chứng nhận ISO, HACCP, GlobalGAP, FDA và Organic.',
    href: '/vi/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te',
  },
  {
    id: 'pillar-digital',
    icon: 'devices',
    title: 'Chuyển đổi số OCOP',
    description: 'Thương mại điện tử đa kênh, số hóa hồ sơ đánh giá và ứng dụng công nghệ truy xuất nguồn gốc.',
    href: '/vi/ocop-hoi-nhap/chuyen-doi-so-ocop',
  },
];

export function IntegrationPillarsSection({ block }: IntegrationPillarsSectionProps) {
  const items = block.items && block.items.length > 0 ? block.items : defaultPillars;

  return (
    <section className="w-full bg-surface-container-lowest py-16 border-t border-surface-container/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OCOP HỘI NHẬP"
          title="Nâng tầm vị thế nông sản Việt trên trường quốc tế"
          description="Ba trụ cột chiến lược thúc đẩy chuỗi giá trị OCOP tham gia sâu rộng vào mạng lưới thương mại toàn cầu."
          viewAllHref="/vi/ocop-hoi-nhap"
          viewAllLabel="Tìm hiểu chuyên trang Hội nhập"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6">
          {items.map((pillar, idx) => {
            const iconName = idx === 0 ? 'public' : idx === 1 ? 'verified' : 'devices';

            return (
              <div
                key={pillar.id || idx}
                className="bg-surface-beige/70 hover:bg-surface-beige rounded-2xl p-6 lg:p-8 border border-surface-container transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">{iconName}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {pillar.title}
                  </h3>
                  {pillar.description && (
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">
                      {pillar.description}
                    </p>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-surface-container">
                  <Link
                    href={pillar.href}
                    className="font-label-md text-sm font-semibold text-primary hover:text-secondary inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Khám phá trụ cột</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IntegrationPillarsSection;
