'use client';

import { useState } from 'react';

interface NewsFilterBarProps {
  categories?: string[];
  initialCategory?: string;
  onFilterChange?: (category: string) => void;
}

export function NewsFilterBar({ categories = ['Tất cả', 'Chính sách & Cơ chế', 'Xúc tiến thương mại', 'OCOP địa phương', 'Báo chí Văn hóa', 'Di sản Bản địa'], initialCategory = 'Tất cả', onFilterChange }: NewsFilterBarProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onFilterChange?.(category);
  };

  return (
    <div className="flex flex-wrap items-center gap-space-sm" role="group" aria-label="Bộ lọc danh mục tin tức">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-1.5 text-label-sm font-label-sm rounded-full transition-all ${
            activeCategory === category
              ? 'bg-primary text-surface-container-lowest shadow-sm'
              : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
          }`}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}