import React from "react";
import Link from "next/link";

export interface SectionHeaderProps {
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  viewAllHref?: string | null;
  viewAllLabel?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  viewAllHref,
  viewAllLabel = "Xem tất cả",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 ${className}`}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="block font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider mb-2">
            {eyebrow}
          </span>
        )}
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-on-surface-variant font-body-md text-body-md leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 font-body-sm font-semibold text-primary hover:text-primary-action transition-colors shrink-0 group py-1"
        >
          <span>{viewAllLabel}</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
