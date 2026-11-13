import React from 'react';
import Link from 'next/link';
import type { PaginationInfo } from '@/lib/pagination';

export interface PaginationProps {
  pagination: PaginationInfo;
  baseUrl: string;
  searchParams?: Record<string, string | number | undefined>;
  className?: string;
}

export function Pagination({
  pagination,
  baseUrl,
  searchParams = {},
  className = '',
}: PaginationProps) {
  const { currentPage, totalPages, hasPrevPage, hasNextPage, prevPage, nextPage } = pagination;

  if (totalPages <= 1) return null;

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, val]) => {
      if (val !== undefined && key !== 'page') {
        params.set(key, String(val));
      }
    });
    if (pageNumber > 1) {
      params.set('page', String(pageNumber));
    }
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const delta = 2;
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  return (
    <nav aria-label="Phân trang" className={`flex items-center justify-center gap-1.5 my-8 ${className}`}>
      {hasPrevPage && prevPage ? (
        <Link
          href={createPageUrl(prevPage)}
          className="h-10 px-3.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-beige transition-colors flex items-center justify-center font-body-sm"
          aria-label="Trang trước"
        >
          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          <span className="hidden sm:inline ml-1">Trước</span>
        </Link>
      ) : (
        <span
          className="h-10 px-3.5 rounded-lg border border-outline-variant/40 bg-surface-container-low text-on-surface-variant/40 cursor-not-allowed flex items-center justify-center font-body-sm"
          aria-hidden="true"
        >
          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          <span className="hidden sm:inline ml-1">Trước</span>
        </span>
      )}

      {getPageNumbers().map((page, idx) => {
        if (page === '...') {
          return (
            <span
              key={`dots-${idx}`}
              className="w-10 h-10 flex items-center justify-center text-outline font-body-sm select-none"
            >
              ...
            </span>
          );
        }

        const pageNum = Number(page);
        const isActive = pageNum === currentPage;

        return (
          <Link
            key={pageNum}
            href={createPageUrl(pageNum)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-body-sm font-semibold transition-colors ${
              isActive
                ? 'bg-primary text-on-primary shadow-xs'
                : 'border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-beige'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageNum}
          </Link>
        );
      })}

      {hasNextPage && nextPage ? (
        <Link
          href={createPageUrl(nextPage)}
          className="h-10 px-3.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-beige transition-colors flex items-center justify-center font-body-sm"
          aria-label="Trang sau"
        >
          <span className="hidden sm:inline mr-1">Sau</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        </Link>
      ) : (
        <span
          className="h-10 px-3.5 rounded-lg border border-outline-variant/40 bg-surface-container-low text-on-surface-variant/40 cursor-not-allowed flex items-center justify-center font-body-sm"
          aria-hidden="true"
        >
          <span className="hidden sm:inline mr-1">Sau</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        </span>
      )}
    </nav>
  );
}

export default Pagination;
