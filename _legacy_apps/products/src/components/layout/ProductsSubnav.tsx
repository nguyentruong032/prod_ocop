import React from 'react';
import Link from 'next/link';

interface ProductsSubnavProps {
  activeCategory?: 'san-pham-theo-sao' | 'nong-san-va-thuc-pham' | 'duoc-lieu-va-san-pham-suc-khoe' | 'thu-cong-my-nghe' | 'all';
}

export function ProductsSubnav({ activeCategory }: ProductsSubnavProps) {
  const isParentActive = activeCategory === 'all';

  return (
    <div className="bg-white pt-3 pb-0">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b-2 border-gray-200">
          <Link
            href="/san-pham-ocop"
            data-subnav="parent"
            className={`whitespace-nowrap transition-colors pb-2 -mb-[2px] border-b-2 ${
              isParentActive
                ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                : 'text-lg md:text-xl font-bold text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
            }`}
          >
            Sản phẩm OCOP
          </Link>

          <nav className="flex items-center gap-x-5 overflow-x-auto no-scrollbar" aria-label="Danh mục sản phẩm">
            <Link
              href="/san-pham-ocop/san-pham-theo-sao"
              data-subnav="item"
              className={`whitespace-nowrap transition-all pb-2 -mb-[2px] border-b-2 ${
                activeCategory === 'san-pham-theo-sao'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Sản phẩm theo sao
            </Link>
            <Link
              href="/san-pham-ocop/nong-san-va-thuc-pham"
              data-subnav="item"
              className={`whitespace-nowrap transition-colors pb-2 -mb-[2px] border-b-2 ${
                activeCategory === 'nong-san-va-thuc-pham'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Nông Sản &amp; Thực phẩm
            </Link>
            <Link
              href="/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe"
              data-subnav="item"
              className={`whitespace-nowrap transition-all pb-2 -mb-[2px] border-b-2 ${
                activeCategory === 'duoc-lieu-va-san-pham-suc-khoe'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Dược liệu và sản phẩm sức khỏe
            </Link>
            <Link
              href="/san-pham-ocop/thu-cong-my-nghe"
              data-subnav="item"
              className={`whitespace-nowrap transition-all pb-2 -mb-[2px] border-b-2 ${
                activeCategory === 'thu-cong-my-nghe'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Thủ công mỹ nghệ
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
