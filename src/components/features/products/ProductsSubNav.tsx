"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_TABS = [
  { label: "Tất cả sản phẩm", href: "/vi/san-pham-ocop", exact: true },
  {
    label: "Nông sản & Thực phẩm",
    href: "/vi/san-pham-ocop/nong-san-va-thuc-pham",
  },
  {
    label: "Dược liệu & Sức khỏe",
    href: "/vi/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe",
  },
  { label: "Thủ công mỹ nghệ", href: "/vi/san-pham-ocop/thu-cong-my-nghe" },
  { label: "Sản phẩm theo sao", href: "/vi/san-pham-ocop/san-pham-theo-sao" },
];

export function ProductsSubNav() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-surface-container-lowest border-b border-surface-container sticky top-20 z-30 shadow-2xs">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar"
          aria-label="Phân loại Sản phẩm OCOP"
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

export default ProductsSubNav;
