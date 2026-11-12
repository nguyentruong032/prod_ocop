'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';
import type { QuickLink } from '@ocop/shared-types';

interface QuickLinksProps {
  links?: QuickLink[];
  className?: string;
}

const defaultLinks: QuickLink[] = [
  {
    icon: '🏺',
    iconBg: 'bg-brand-gold/20',
    label: 'Sản phẩm OCOP',
    desc: 'Khám phá 500+ sản phẩm đạt chuẩn 3-5 sao',
    href: '/san-pham-ocop',
  },
  {
    icon: '📖',
    iconBg: 'bg-brand-secondary/20',
    label: 'Câu chuyện OCOP',
    desc: 'Những người giữ nghề và di sản văn hóa',
    href: '/cau-chuyen-ocop',
  },
  {
    icon: '🗺️',
    iconBg: 'bg-brand-primary/20',
    label: 'Điểm đến du lịch',
    desc: 'Du lịch nông thôn, làng nghề, vườn trái',
    href: '/diem-den-du-lich',
  },
  {
    icon: '📰',
    iconBg: 'bg-green-600/20',
    label: 'Tin tức & Sự kiện',
    desc: 'Chính sách mới, hội chợ, xúc tiến thương mại',
    href: '/tin-tuc-su-kien',
  },
  {
    icon: '🤝',
    iconBg: 'bg-purple-600/20',
    label: 'Hội nhập & Xuất khẩu',
    desc: 'Tiêu chuẩn quốc tế, chuyển đổi số, OCOP NOW',
    href: '/ocop-hoi-nhap',
  },
  {
    icon: '🏢',
    iconBg: 'bg-orange-600/20',
    label: 'Chủ thể OCOP',
    desc: 'Hợp tác xã, doanh nghiệp, hộ gia đình',
    href: '/chu-the-ocop',
  },
];

export function QuickLinks({ links = defaultLinks, className }: QuickLinksProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-24 bg-surface-elevated border-y border-border',
        className
      )}
      aria-labelledby="quick-links-title"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2
            id="quick-links-title"
            className="text-heading-xl md:text-heading-lg font-bold text-text-primary mb-4"
          >
            Khám phá OCOP Việt Nam
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Sáu cửa ngõ vào thế giới sản phẩm OCOP - từ câu chuyện người giữ nghề
            đến cơ hội hội nhập quốc tế
          </p>
        </header>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          role="list"
        >
          {links.map((link, index) => (
            <article
              key={link.href}
              className={cn(
                'group relative p-6 rounded-2xl bg-surface border border-border',
                'transition-all duration-300 hover:border-brand-gold/50',
                'hover:shadow-brand hover:-translate-y-1',
                'focus-within:ring-2 focus-within:ring-brand-gold focus-within:ring-offset-2',
                'animate-slide-up'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
            >
              <a
                href={link.href}
                className="block h-full focus:outline-none"
                aria-label={`Xem ${link.label} - ${link.desc}`}
              >
                <div
                  className={cn(
                    'w-14 h-14 rounded-xl flex items-center justify-center mb-4',
                    'transition-all duration-300 group-hover:scale-110',
                    link.iconBg
                  )}
                  aria-hidden="true"
                >
                  <span className="text-2xl md:text-3xl" aria-hidden="true">
                    {link.icon}
                  </span>
                </div>

                <h3 className="text-heading-sm font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                  {link.label}
                </h3>

                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {link.desc}
                </p>

                <span
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-brand-gold"
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}