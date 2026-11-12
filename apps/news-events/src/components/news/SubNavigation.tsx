'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubNavigationProps {
  parentHref?: string;
  parentLabel?: string;
  items?: Array<{
    href: string;
    label: string;
    key: string;
  }>;
}

export function SubNavigation({
  parentHref = '/tin-tuc-su-kien',
  parentLabel = 'Tin tức & sự kiện',
  items = [
    { href: '/tin-tuc-su-kien/chinh-sach-va-co-che', label: 'Chính sách và cơ chế OCOP', key: 'chinh-sach-va-co-che' },
    { href: '/tin-tuc-su-kien/xuc-tien-thuong-mai', label: 'Xúc tiến thương mại', key: 'xuc-tien-thuong-mai' },
    { href: '/tin-tuc-su-kien/ocop-dia-phuong', label: 'OCOP địa phương', key: 'ocop-dia-phuong' },
  ],
}: SubNavigationProps) {
  const pathname = usePathname();

  const isParentActive = () => {
    return (
      pathname === parentHref ||
      pathname === parentHref + '/' ||
      pathname === '/'
    );
  };

  const isItemActive = (href: string) => {
    const routeOnly = href.replace(/^\/tin-tuc-su-kien/, '');
    return (
      pathname === href ||
      pathname.startsWith(href + '/') ||
      (routeOnly !== '' && (pathname === routeOnly || pathname.startsWith(routeOnly + '/')))
    );
  };

  const parentActiveClass = 'text-lg md:text-xl font-bold text-[#2C5E2E] pb-2 -mb-[2px] border-b-2 border-[#2C5E2E] whitespace-nowrap transition-colors';
  const parentInactiveClass = 'text-lg md:text-xl font-bold text-[#2C5E2E] pb-2 -mb-[2px] border-b-2 border-transparent hover:border-[#2C5E2E] whitespace-nowrap transition-colors';
  const itemActiveClass = 'text-lg md:text-xl font-bold text-[#2C5E2E] pb-2 -mb-[2px] border-b-2 border-[#2C5E2E] whitespace-nowrap transition-colors';
  const itemInactiveClass = 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] pb-2 -mb-[2px] border-b-2 border-transparent hover:border-[#2C5E2E] whitespace-nowrap transition-all';

  return (
    <div className="bg-white pt-3 pb-0">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b-2 border-gray-200">
          <Link
            href={parentHref}
            data-subnav="parent"
            className={isParentActive() ? parentActiveClass : parentInactiveClass}
          >
            {parentLabel}
          </Link>

          <nav className="flex items-center gap-x-5 overflow-x-auto no-scrollbar" aria-label="Danh mục con">
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                data-subnav="item"
                className={isItemActive(item.href) ? itemActiveClass : itemInactiveClass}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
