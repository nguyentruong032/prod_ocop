import React from "react";
import Link from "next/link";
import type { QuickLinksBlock } from "@/payload-types";

export interface QuickLinksSectionProps {
  block: QuickLinksBlock;
}

export function QuickLinksSection({ block }: QuickLinksSectionProps) {
  const items = block.items || [];

  if (items.length === 0) return null;

  return (
    <section className="w-full bg-surface-container-lowest py-14 border-b border-surface-container/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
          <div>
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              Cửa ngõ tư liệu số
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-1">
              Khám phá hệ sinh thái OCOP Việt Nam
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 max-w-2xl text-sm md:text-base">
              Tra cứu nhanh theo dòng sản phẩm đặc trưng, câu chuyện chủ thể và
              văn hóa bản địa.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant/80">
            <span className="material-symbols-outlined text-primary text-[18px]">
              verified
            </span>
            <span>Dữ liệu xác thực cấp Quốc gia</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const iconName = item.icon || "star";

            return (
              <Link
                key={item.id || idx}
                href={item.href}
                className="group bg-surface-container-low/60 hover:bg-surface-container-low rounded-xl p-6 flex flex-col items-center text-center shadow-2xs hover:shadow-sm border border-surface-container transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">
                    {iconName}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {item.label}
                </h3>
                {item.description && (
                  <p className="font-body-sm text-xs md:text-sm text-on-surface-variant mt-2 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickLinksSection;
