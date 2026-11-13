"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/vi/ocop-hoi-nhap", label: "Tổng quan & Trụ cột", exact: true },
  {
    href: "/vi/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te",
    label: "Xuất khẩu & Thị trường",
  },
  {
    href: "/vi/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te",
    label: "Tiêu chuẩn & Chứng nhận",
  },
  { href: "/vi/ocop-hoi-nhap/chuyen-doi-so-ocop", label: "Chuyển đổi số OCOP" },
];

export function IntegrationSubNav() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-surface-container-lowest border-b border-surface-container/80 sticky top-16 z-30 shadow-2xs backdrop-blur-md bg-opacity-95">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar"
          aria-label="Chuyên mục OCOP Hội nhập"
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
                    ? "bg-primary text-white shadow-xs"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
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
