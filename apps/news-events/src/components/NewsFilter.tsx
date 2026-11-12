'use client';

import { useState } from 'react';
import type { FilterOption } from '@ocop/shared-types';

interface NewsFilterProps {
  category: string;
  categories: FilterOption[];
  onChange: (category: string) => void;
}

export function NewsFilter({ category, categories, onChange }: NewsFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <label htmlFor="news-category-filter" className="label shrink-0">
          Danh mục:
        </label>
        <div className="relative flex-1 min-w-[200px]">
          <button
            type="button"
            id="news-category-filter"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full input flex items-center justify-between text-left"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label="Chọn danh mục tin tức"
          >
            <span>
              {categories.find((c) => c.value === category)?.label || 'Tất cả danh mục'}
            </span>
            <svg
              className={`w-5 h-5 text-ocop-primary-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <ul
              role="listbox"
              aria-label="Danh mục tin tức"
              className="absolute z-10 mt-1 w-full rounded-lg border border-ocop-primary-200 bg-white shadow-lg max-h-60 overflow-auto"
            >
              {categories.map((cat) => (
                <li key={cat.value} role="option" aria-selected={category === cat.value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(cat.value);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                      category === cat.value
                        ? 'bg-ocop-primary-50 text-ocop-primary-900 font-medium'
                        : 'text-ocop-primary-700 hover:bg-ocop-primary-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="sr-only" aria-live="polite">
        {category ? `Đã chọn danh mục: ${categories.find((c) => c.value === category)?.label}` : 'Đang hiển thị tất cả danh mục'}
      </div>
    </div>
  );
}