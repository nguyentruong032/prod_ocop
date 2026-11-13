"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/vi/cau-chuyen-ocop", label: "Tất cả câu chuyện", exact: true },
  {
    href: "/vi/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia",
    label: "Văn hóa & Tinh hoa bản địa",
  },
  {
    href: "/vi/cau-chuyen-ocop/phong-su-da-phuong-tien",
    label: "Phóng sự đa phương tiện",
  },
  {
    href: "/vi/cau-chuyen-ocop/hanh-trinh-chu-the-ocop",
    label: "Hành trình chủ thể",
  },
];

export function StoriesSubNav() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-surface-container-lowest border-b border-surface-container/80 sticky top-16 z-30 shadow-2xs backdrop-blur-md bg-opacity-95">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar"
          aria-label="Chuyên mục Câu chuyện OCOP"
        >
          {TABS.map((tab) => {
            const isActive = tab.exact
              ? pathname === tab.href
              : pathname.startsWith(tab.href);

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-secondary text-white shadow-xs"
                    : "text-on-surface-variant hover:text-secondary hover:bg-surface-container"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
