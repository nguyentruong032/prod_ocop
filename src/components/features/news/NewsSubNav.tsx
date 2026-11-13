"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_TABS = [
  { label: "Tất cả tin & Sự kiện", href: "/vi/tin-tuc-su-kien", exact: true },
  {
    label: "Chính sách & Cơ chế",
    href: "/vi/tin-tuc-su-kien/chinh-sach-va-co-che",
  },
  {
    label: "Xúc tiến thương mại",
    href: "/vi/tin-tuc-su-kien/xuc-tien-thuong-mai",
  },
  { label: "OCOP địa phương", href: "/vi/tin-tuc-su-kien/ocop-dia-phuong" },
];

export function NewsSubNav() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-surface-container-lowest border-b border-surface-container sticky top-20 z-30 shadow-2xs">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar"
          aria-label="Phân mục Tin tức & Sự kiện"
        >
          {NAV_TABS.map((tab) => {
            const isActive = tab.exact
              ? pathname === tab.href
              : pathname.startsWith(tab.href);

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-4 py-2 rounded-full font-label-md text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-primary text-on-primary shadow-xs"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-beige"
                }`}
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

export default NewsSubNav;
