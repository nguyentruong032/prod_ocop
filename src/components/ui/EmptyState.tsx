import React from 'react';
import Link from 'next/link';

export interface EmptyStateProps {
  icon?: string;
  title?: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  className?: string;
}

export function EmptyState({
  icon = 'search_off',
  title = 'Không tìm thấy dữ liệu phù hợp',
  description = 'Vui lòng thử lại với các tiêu chí tìm kiếm hoặc bộ lọc khác.',
  actionHref,
  actionLabel = 'Xem tất cả',
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center py-16 px-4 bg-surface-container-low/50 rounded-2xl border border-dashed border-outline-variant my-8 ${className}`}>
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline mb-4">
        <span className="material-symbols-outlined text-[36px]">{icon}</span>
      </div>
      <h3 className="font-serif text-xl font-semibold text-primary mb-2">
        {title}
      </h3>
      <p className="font-body-md text-on-surface-variant max-w-md mb-6 leading-relaxed">
        {description}
      </p>
      {actionHref && (
        <Link
          href={actionHref}
          className="h-10 px-6 rounded-lg bg-primary text-on-primary hover:bg-primary-action transition-colors inline-flex items-center gap-2 font-label-md text-label-md font-semibold shadow-xs"
        >
          <span>{actionLabel}</span>
          <span className="material-symbols-outlined text-[16px]">refresh</span>
        </Link>
      )}
    </div>
  );
}

export default EmptyState;
