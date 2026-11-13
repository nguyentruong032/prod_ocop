"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SearchModalClient } from "./SearchModalClient";

interface NavItem {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}

function getNavItems(locale: string): NavItem[] {
  const isEn = locale === "en";
  return [
    {
      label: isEn ? "News & Events" : "Tin tức & Sự kiện",
      href: `/${locale}/tin-tuc-su-kien`,
      children: [
        {
          label: isEn ? "OCOP Policies & Mechanisms" : "Chính sách và cơ chế OCOP",
          href: `/${locale}/tin-tuc-su-kien/chinh-sach-va-co-che`,
        },
        {
          label: isEn ? "Trade Promotion" : "Xúc tiến thương mại",
          href: `/${locale}/tin-tuc-su-kien/xuc-tien-thuong-mai`,
        },
        {
          label: isEn ? "Local OCOP" : "OCOP địa phương",
          href: `/${locale}/tin-tuc-su-kien/ocop-dia-phuong`,
        },
      ],
    },
    {
      label: isEn ? "OCOP Integration" : "OCOP Hội nhập",
      href: `/${locale}/ocop-hoi-nhap`,
      children: [
        {
          label: isEn ? "Export & Global Markets" : "Xuất khẩu và thị trường quốc tế",
          href: `/${locale}/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te`,
        },
        {
          label: isEn ? "Standards & Certifications" : "Tiêu chuẩn và chứng nhận quốc tế",
          href: `/${locale}/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te`,
        },
        {
          label: isEn ? "Digital Transformation" : "Chuyển đổi số OCOP",
          href: `/${locale}/ocop-hoi-nhap/chuyen-doi-so-ocop`,
        },
      ],
    },
    {
      label: isEn ? "OCOP Products" : "Sản phẩm OCOP",
      href: `/${locale}/san-pham-ocop`,
      children: [
        {
          label: isEn ? "Agriculture & Food" : "Nông sản và thực phẩm",
          href: `/${locale}/san-pham-ocop/nong-san-va-thuc-pham`,
        },
        {
          label: isEn ? "Medicinal Herbs & Health" : "Dược liệu và sản phẩm sức khỏe",
          href: `/${locale}/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe`,
        },
        {
          label: isEn ? "Handicrafts" : "Thủ công mỹ nghệ",
          href: `/${locale}/san-pham-ocop/thu-cong-my-nghe`,
        },
        {
          label: isEn ? "Products by Star Rating" : "Sản phẩm theo sao",
          href: `/${locale}/san-pham-ocop/san-pham-theo-sao`,
        },
      ],
    },
    {
      label: isEn ? "Producers" : "Chủ thể OCOP",
      href: `/${locale}/chu-the-ocop`,
    },
    {
      label: isEn ? "OCOP Stories" : "Câu chuyện OCOP",
      href: `/${locale}/cau-chuyen-ocop`,
      children: [
        {
          label: isEn ? "Indigenous Cultural Heritage" : "Văn hóa tinh hoa bản địa",
          href: `/${locale}/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia`,
        },
        {
          label: isEn ? "Multimedia Reportages" : "Phóng sự đa phương tiện",
          href: `/${locale}/cau-chuyen-ocop/phong-su-da-phuong-tien`,
        },
        {
          label: isEn ? "Producer Journeys" : "Hành trình chủ thể OCOP",
          href: `/${locale}/cau-chuyen-ocop/hanh-trinh-chu-the-ocop`,
        },
      ],
    },
    {
      label: isEn ? "Destinations" : "Điểm đến du lịch",
      href: `/${locale}/diem-den-du-lich`,
      children: [
        {
          label: isEn ? "Eco-Tourism & Experience" : "Du lịch sinh thái trải nghiệm OCOP",
          href: `/${locale}/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop`,
        },
        {
          label: isEn ? "Traditional Craft Villages" : "Làng nghề truyền thống",
          href: `/${locale}/diem-den-du-lich/lang-nghe-truyen-thong`,
        },
        {
          label: isEn ? "GIS OCOP Map" : "Bản đồ GIS OCOP",
          href: `/${locale}/diem-den-du-lich/ban-do-ocop-viet-nam`,
        },
      ],
    },
  ];
}

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const locale = pathname?.startsWith("/en") ? "en" : "vi";
  const navItems = getNavItems(locale);

  const switchLocalePath = (targetLocale: string) => {
    if (locale === targetLocale) return pathname;
    if (pathname.startsWith("/vi")) {
      return pathname.replace(/^\/vi/, `/${targetLocale}`);
    }
    if (pathname.startsWith("/en")) {
      return pathname.replace(/^\/en/, `/${targetLocale}`);
    }
    return `/${targetLocale}`;
  };

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}`;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-surface-container-lowest shadow-xs border-b border-surface-container">
        {/* Top bar with Logo & Actions */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b border-surface-container/60">
          <Link
            href={`/${locale}`}
            aria-label="Về trang chủ OCOP Việt Nam"
            className="flex items-center gap-3 shrink-0"
          >
            <Image
              src="/logo.webp"
              alt="OCOP Việt Nam"
              width={160}
              height={48}
              priority
              unoptimized
              style={{ width: "auto" }}
              className="h-12 w-auto object-contain shrink-0"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label={locale === "en" ? "Search OCOP archives" : "Tìm kiếm tư liệu OCOP"}
              className="h-10 px-3 sm:px-4 pl-9 sm:pl-10 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center font-body-sm text-body-sm border border-transparent hover:border-outline-variant relative text-left w-32 sm:w-56 md:w-64"
            >
              <span className="material-symbols-outlined text-[20px] absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <span className="truncate hidden sm:inline">
                {locale === "en" ? "Search archives, articles..." : "Tìm kiếm tư liệu, bài viết..."}
              </span>
              <span className="truncate sm:hidden">
                {locale === "en" ? "Search..." : "Tìm kiếm..."}
              </span>
            </button>

            {/* Language Switcher Toggle */}
            <div className="flex items-center bg-surface-container-low rounded-lg p-0.5 border border-surface-container/80 text-xs font-bold shrink-0">
              <Link
                href={switchLocalePath("vi")}
                className={`px-2.5 py-1.5 rounded transition-all ${
                  locale === "vi"
                    ? "bg-primary text-white shadow-2xs"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                title="Tiếng Việt"
              >
                VI
              </Link>
              <Link
                href={switchLocalePath("en")}
                className={`px-2.5 py-1.5 rounded transition-all ${
                  locale === "en"
                    ? "bg-primary text-white shadow-2xs"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                title="English"
              >
                EN
              </Link>
            </div>

            {/* Submit post button */}
            <Link
              href={`/${locale}/gui-bai-ho-so-ocop`}
              className="h-10 px-3.5 sm:px-5 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors flex items-center gap-1.5 font-label-md text-label-md shadow-xs shrink-0 font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">
                post_add
              </span>
              <span className="hidden md:inline">
                {locale === "en" ? "Submit Dossier" : "Gửi bài / Hồ sơ OCOP"}
              </span>
              <span className="md:hidden">
                {locale === "en" ? "Submit" : "Gửi hồ sơ"}
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden h-10 w-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
              aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[24px]">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:block w-full bg-surface-container-lowest">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              className="flex items-center justify-between gap-1 py-0"
              aria-label="Menu chính"
            >
              {navItems.map((item) => {
                const active = isActive(item.href);
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 py-3.5 px-3.5 font-body-md text-[15px] font-semibold transition-colors border-b-2 whitespace-nowrap rounded-t ${
                        active
                          ? "text-primary border-primary bg-surface-beige/40"
                          : "text-on-surface-variant hover:text-primary border-transparent group-hover:border-primary group-hover:text-primary group-hover:bg-surface-beige/60"
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasChildren && (
                        <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-primary transition-transform group-hover:rotate-180">
                          expand_more
                        </span>
                      )}
                    </Link>

                    {hasChildren && (
                      <div className="absolute top-full left-0 z-50 hidden group-hover:flex flex-col bg-surface-container-lowest shadow-xl border border-surface-container rounded-b-xl py-2 px-2 min-w-[260px] animate-in fade-in duration-150">
                        {item.children!.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`px-3 py-2.5 rounded-lg text-body-sm font-body-sm transition-colors flex items-center justify-between ${
                              pathname.startsWith(subItem.href)
                                ? "text-primary font-semibold bg-surface-beige"
                                : "text-on-surface-variant hover:text-primary hover:bg-surface-beige"
                            }`}
                          >
                            <span>{subItem.label}</span>
                            <span className="material-symbols-outlined text-[14px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                              chevron_right
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-surface-container bg-surface-container-lowest px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div
                  key={item.href}
                  className="border-b border-surface-container/40 pb-2"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-base font-semibold ${
                      active ? "text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {hasChildren && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children!.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-1.5 text-sm ${
                            pathname.startsWith(subItem.href)
                              ? "text-primary font-medium"
                              : "text-on-surface-variant hover:text-primary"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModalClient
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default Header;
