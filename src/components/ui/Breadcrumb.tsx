import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-body-sm font-body-sm text-on-surface-variant ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link
            href="/vi"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span className="sr-only">Trang chủ</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li className="text-outline-variant select-none" aria-hidden="true">
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </li>
              <li>
                {isLast || !item.href ? (
                  <span className="font-semibold text-primary truncate max-w-[200px] md:max-w-md inline-block" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
