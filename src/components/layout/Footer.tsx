import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { SiteSetting } from "@/payload-types";
import { NewsletterFormClient } from "@/components/ui/NewsletterFormClient";

export interface FooterProps {
  settings?: SiteSetting | null;
}

export function Footer({ settings }: FooterProps) {
  const hotline = settings?.hotline || "024.3869.2173";
  const email = settings?.contactEmail || "ocopvietnam2021@gmail.com";
  const address =
    settings?.address ||
    "Số 46 Tăng Bạt Hổ, phường Phạm Đình Hổ, quận Hai Bà Trưng, Hà Nội";
  const tagline =
    settings?.tagline ||
    "Chuyên trang thông tin điện tử OCOP Việt Nam - Nơi tập trung, chia sẻ và lan tỏa câu chuyện, sản phẩm, và giá trị OCOP đến cộng đồng.";
  const footerNote =
    settings?.footerNote || "© 2026 OCOP Việt Nam. Mọi quyền được bảo lưu.";
  const editorialContact = settings?.editorialContact;

  const socialLinks =
    settings?.socialLinks && settings.socialLinks.length > 0
      ? settings.socialLinks
      : [
          { platform: "Facebook", url: "https://www.facebook.com/ocopvietnam" },
          { platform: "YouTube", url: "https://www.youtube.com/@ocopvietnam" },
          { platform: "TikTok", url: "https://www.tiktok.com/@ocopvietnam" },
          { platform: "Zalo", url: "https://zalo.me/ocopvietnam" },
        ];

  const getSocialIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes("facebook")) return "public";
    if (p.includes("youtube")) return "youtube_activity";
    if (p.includes("tiktok")) return "live_tv";
    return "chat_bubble_outline";
  };

  return (
    <footer className="w-full bg-primary-container text-on-primary-fixed border-t border-surface-container">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] gap-8 lg:gap-12 pb-10 border-b border-on-primary-container/20">
          {/* Cột 1: Thông tin thương hiệu & Bản tin */}
          <div className="flex flex-col gap-4 items-start">
            <Link
              href="/vi"
              aria-label="Về trang chủ OCOP Việt Nam"
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.webp"
                alt="OCOP Việt Nam"
                width={140}
                height={42}
                unoptimized
                style={{ width: "auto" }}
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed max-w-md">
              {tagline}
            </p>

            {/* Newsletter Subscription Box */}
            <div className="w-full max-w-md pt-2">
              <span className="block text-xs font-bold text-on-primary uppercase tracking-wider mb-2">
                Đăng ký nhận bản tin OCOP tuần
              </span>
              <NewsletterFormClient />
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.platform}
                  className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {getSocialIcon(item.platform)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-base md:text-lg font-bold text-on-primary">
              Chuyên mục
            </h3>
            <ul className="space-y-2 text-body-sm font-body-sm text-on-primary-container">
              <li>
                <Link
                  href="/vi/tin-tuc-su-kien"
                  className="hover:text-on-primary transition-colors"
                >
                  Tin tức & Sự kiện
                </Link>
              </li>
              <li>
                <Link
                  href="/vi/san-pham-ocop"
                  className="hover:text-on-primary transition-colors"
                >
                  Sản phẩm OCOP
                </Link>
              </li>
              <li>
                <Link
                  href="/vi/chu-the-ocop"
                  className="hover:text-on-primary transition-colors"
                >
                  Chủ thể OCOP
                </Link>
              </li>
              <li>
                <Link
                  href="/vi/cau-chuyen-ocop"
                  className="hover:text-on-primary transition-colors"
                >
                  Câu chuyện OCOP
                </Link>
              </li>
              <li>
                <Link
                  href="/vi/diem-den-du-lich"
                  className="hover:text-on-primary transition-colors"
                >
                  Điểm đến du lịch
                </Link>
              </li>
              <li>
                <Link
                  href="/vi/diem-den-du-lich/ban-do-ocop-viet-nam"
                  className="hover:text-on-primary transition-colors"
                >
                  Bản đồ GIS OCOP
                </Link>
              </li>
              <li>
                <Link
                  href="/vi/ocop-hoi-nhap"
                  className="hover:text-on-primary transition-colors"
                >
                  OCOP Hội nhập
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Thông tin liên hệ */}
          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-base md:text-lg font-bold text-on-primary">
              Thông tin liên hệ
            </h3>
            <address className="not-italic font-body-sm text-body-sm text-on-primary-container leading-relaxed space-y-2.5">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-accent shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-accent shrink-0">
                  phone
                </span>
                <a
                  href={`tel:${hotline.replace(/[^\d+]/g, "")}`}
                  className="hover:text-on-primary transition-colors"
                >
                  {hotline}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-accent shrink-0">
                  email
                </span>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-on-primary transition-colors"
                >
                  {email}
                </a>
              </div>
              {editorialContact?.hours && (
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-accent shrink-0">
                    schedule
                  </span>
                  <span>{editorialContact.hours}</span>
                </div>
              )}
            </address>
          </div>
        </div>

        {/* Dòng bản quyền & chính sách */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body-sm text-on-primary-container/70">
          <p>{footerNote}</p>
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <Link
              href="/vi/tin-tuc-su-kien/chinh-sach-va-co-che"
              className="hover:text-on-primary transition-colors"
            >
              Chính sách & Cơ chế
            </Link>
            <Link
              href="/vi/gui-bai-ho-so-ocop"
              className="hover:text-on-primary transition-colors"
            >
              Gửi bài viết
            </Link>
            <Link
              href="/news-sitemap.xml"
              className="hover:text-on-primary transition-colors"
            >
              Google News
            </Link>
            <Link
              href="/rss.xml"
              className="hover:text-on-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">
                rss_feed
              </span>
              <span>RSS</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
