'use client';

import { useState } from 'react';
import { allProducts, type Product } from '@/lib/products';

const starOptions = ['5 SAO', '4 SAO', '3 SAO'] as const;
const categoryOptions = ['Tất cả', 'Nông sản & Thực phẩm', 'Dược liệu & Sức khỏe', 'Thủ công mỹ nghệ & Khác'] as const;
const provinceOptions = ['Tất cả tỉnh', 'Thái Nguyên', 'Kiên Giang', 'Lâm Đồng', 'Bến Tre', 'Sơn La', 'Quảng Nam', 'An Giang', 'Hà Giang'] as const;
const sortOptions = ['Mặc định', 'Mới nhất', 'Sao cao nhất', 'Tên A-Z'] as const;

export function ProductFilterAndGridSection() {
  const [selectedStars, setSelectedStars] = useState<string>('Tất cả');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [selectedProvince, setSelectedProvince] = useState<string>('Tất cả tỉnh');
  const [selectedSort, setSelectedSort] = useState<string>('Mặc định');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    if (selectedStars !== 'Tất cả' && product.stars !== selectedStars) return false;
    if (selectedCategory !== 'Tất cả' && product.category !== selectedCategory) return false;
    if (selectedProvince !== 'Tất cả tỉnh' && product.province !== selectedProvince) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort) {
      case 'Mới nhất':
        return 0; // Keep original order for demo
      case 'Sao cao nhất': {
        const starOrder = { '5 SAO': 3, '4 SAO': 2, '3 SAO': 1 };
        return starOrder[b.stars] - starOrder[a.stars];
      }
      case 'Tên A-Z':
        return a.title.localeCompare(b.title, 'vi');
      default:
        return 0;
    }
  });

  const renderProductCard = (product: Product, index: number) => (
    <article
      key={product.slug}
      data-card-type="product"
      data-slug={product.slug}
      className="bg-[#F8F5EE] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all duration-300 group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          src={product.image}
          alt={product.alt}
          loading="lazy"
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1F4D3A] text-white shadow">
          <span className="material-symbols-outlined text-[15px] text-[#C89B3C]" style={{ fontVariationSettings: "'FILL' 1" }}>
            stars
          </span>
          <span className="font-label-sm text-label-sm font-bold text-[#C89B3C]">OCOP {product.stars}</span>
        </div>
        <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white font-label-sm text-label-sm">
          Mã: {product.code}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[#B85D3B] font-label-sm text-label-sm uppercase font-semibold mb-1">
            {product.category} • {product.province}
          </div>
          <h3 className="font-headline-sm text-title-editorial font-bold text-[#012d1d] mb-2 leading-snug line-clamp-2 group-hover:text-[#B85D3B] transition-colors">
            {product.title}
          </h3>
          <p className="font-body-sm text-body-sm text-[#717973] mb-4">
            <span className="font-medium text-[#414844]">Chủ thể sản xuất:</span> {product.producer}
          </p>
        </div>
        <div className="pt-4 border-t border-[#E2DBD0]/60 flex items-center justify-between">
          {product.ctaType === 'origin' ? (
            <a
              href={`/san-pham-ocop/${product.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#1F4D3A] hover:bg-[#132E22] text-white font-label-sm text-label-sm uppercase tracking-wider transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">source_notes</span>
              <span>Tìm hiểu nguồn gốc</span>
            </a>
          ) : (
            <a
              href={`/san-pham-ocop/${product.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#B85D3B] text-[#B85D3B] hover:bg-[#B85D3B] hover:text-white font-label-sm text-label-sm uppercase tracking-wider transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">badge</span>
              <span>Liên hệ thương hiệu</span>
            </a>
          )}
          <button
            className="w-8 h-8 rounded hover:bg-[#E8EFEA] flex items-center justify-center text-[#717973] hover:text-[#012d1d] transition-colors"
            title="Lưu hồ sơ"
            onClick={(e) => e.preventDefault()}
          >
            <span className="material-symbols-outlined text-[18px]">bookmark</span>
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section id="tat-ca-san-pham" className="w-full bg-white py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-[#1F4D3A] uppercase tracking-wider font-semibold">
              Tất cả sản phẩm OCOP
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-[#012d1d] mt-2 mb-3 tracking-tight">
              Bộ sưu tập hoàn chỉnh {allProducts.length}+ hồ sơ sản phẩm.
            </h2>
            <p className="font-body-md text-body-md text-[#414844]">
              Lọc theo sao, danh mục, tỉnh thành và sắp xếp để tìm nhanh sản phẩm phù hợp.
            </p>
          </div>
        </div>

        {/* Filter Bar + Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-white border border-[#E2DBD0] hover:bg-[#F8F5EE] text-[#1F4D3A] font-label-md text-label-md uppercase tracking-wider transition-all duration-200"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
            <span>Bộ lọc</span>
            <span className="material-symbols-outlined text-[18px]">{isFilterOpen ? 'expand_less' : 'expand_more'}</span>
          </button>

          {/* Filter Sidebar */}
          <aside
            className={`lg:w-64 lg:flex-shrink-0 ${isFilterOpen ? 'block' : 'lg:block hidden'}`}
            aria-label="Bộ lọc sản phẩm"
          >
            <div className="bg-[#F8F5EE] rounded-xl p-5 lg:p-6 h-fit sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-title-editorial text-title-editorial font-semibold text-[#012d1d]">
                  Bộ lọc nâng cao
                </h3>
                <button
                  className="lg:hidden text-[#717973] hover:text-[#012d1d]"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
              </div>

              {/* Stars Filter */}
              <div className="mb-6">
                <label className="font-label-sm text-label-sm text-[#414844] uppercase tracking-wider font-semibold block mb-3">
                  Cấp sao OCOP
                </label>
                <div className="flex flex-col gap-2">
                  {['Tất cả', ...starOptions].map((star) => (
                    <label
                      key={star}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-200 cursor-pointer"
                      style={{
                        borderColor: selectedStars === star ? '#1F4D3A' : '#E2DBD0',
                        backgroundColor: selectedStars === star ? '#E8EFEA' : 'transparent',
                      }}
                    >
                      <input
                        type="radio"
                        name="stars"
                        value={star}
                        checked={selectedStars === star}
                        onChange={() => setSelectedStars(star)}
                        className="w-4 h-4 text-[#1F4D3A] border-[#C89B3C] focus:ring-[#1F4D3A] accent-[#1F4D3A]"
                      />
                      <span className="font-body-sm text-body-sm text-[#121c2c]">
                        {star === 'Tất cả' ? 'Tất cả cấp sao' : `OCOP ${star}`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="font-label-sm text-label-sm text-[#414844] uppercase tracking-wider font-semibold block mb-3">
                  Danh mục
                </label>
                <div className="flex flex-col gap-2">
                  {categoryOptions.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-200 cursor-pointer"
                      style={{
                        borderColor: selectedCategory === cat ? '#1F4D3A' : '#E2DBD0',
                        backgroundColor: selectedCategory === cat ? '#E8EFEA' : 'transparent',
                      }}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-4 h-4 text-[#1F4D3A] border-[#C89B3C] focus:ring-[#1F4D3A] accent-[#1F4D3A]"
                      />
                      <span className="font-body-sm text-body-sm text-[#121c2c]">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Province Filter */}
              <div className="mb-6">
                <label className="font-label-sm text-label-sm text-[#414844] uppercase tracking-wider font-semibold block mb-3">
                  Tỉnh/Thành phố
                </label>
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                  {provinceOptions.map((prov) => (
                    <label
                      key={prov}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-200 cursor-pointer"
                      style={{
                        borderColor: selectedProvince === prov ? '#1F4D3A' : '#E2DBD0',
                        backgroundColor: selectedProvince === prov ? '#E8EFEA' : 'transparent',
                      }}
                    >
                      <input
                        type="radio"
                        name="province"
                        value={prov}
                        checked={selectedProvince === prov}
                        onChange={() => setSelectedProvince(prov)}
                        className="w-4 h-4 text-[#1F4D3A] border-[#C89B3C] focus:ring-[#1F4D3A] accent-[#1F4D3A]"
                      />
                      <span className="font-body-sm text-body-sm text-[#121c2c]">{prov}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort Filter */}
              <div className="mb-6 pt-4 border-t border-[#E2DBD0]/60">
                <label className="font-label-sm text-label-sm text-[#414844] uppercase tracking-wider font-semibold block mb-3">
                  Sắp xếp
                </label>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-white border border-[#E2DBD0] text-[#121c2c] font-body-sm text-body-sm outline-none focus:border-[#1F4D3A] focus:ring-1 focus:ring-[#1F4D3A] appearance-none cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Active Filters Count */}
              {(selectedStars !== 'Tất cả' || selectedCategory !== 'Tất cả' || selectedProvince !== 'Tất cả tỉnh') && (
                <div className="pt-4 border-t border-[#E2DBD0]/60">
                  <button
                    onClick={() => {
                      setSelectedStars('Tất cả');
                      setSelectedCategory('Tất cả');
                      setSelectedProvince('Tất cả tỉnh');
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-[#E8EFEA] text-[#B85D3B] font-label-sm text-label-sm uppercase tracking-wider transition-colors border border-[#B85D3B]/30"
                  >
                    <span className="material-symbols-outlined text-[16px]">filter_alt_off</span>
                    <span>Xóa tất cả bộ lọc</span>
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {/* Results Info + Desktop Sort */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="font-body-sm text-body-sm text-[#717973]">
                Hiển thị <span className="font-bold text-[#012d1d]">{sortedProducts.length}</span> sản phẩm trên tổng số{' '}
                <span className="font-bold text-[#012d1d]">{allProducts.length}</span> hồ sơ
              </div>
              <div className="hidden sm:block">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="h-10 px-4 rounded-lg bg-white border border-[#E2DBD0] text-[#121c2c] font-body-sm text-body-sm outline-none focus:border-[#1F4D3A] focus:ring-1 focus:ring-[#1F4D3A] appearance-none cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-render="product-grid" data-collection="products">
              {sortedProducts.map(renderProductCard)}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E2DBD0]/60">
              <div className="font-body-sm text-body-sm text-[#717973]">
                Hiển thị trang <span className="font-bold text-[#012d1d]">1</span> trên tổng số <span
                  className="font-bold text-[#012d1d]">15</span> trang tư liệu
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  className="w-10 h-10 rounded bg-[#1F4D3A] text-white font-label-md text-label-md font-bold flex items-center justify-center shadow-sm"
                  disabled
                  aria-label="Trang hiện tại"
                >
                  1
                </button>
                <button
                  className="w-10 h-10 rounded bg-[#F8F5EE] hover:bg-[#E8EFEA] text-[#121c2c] font-label-md text-label-md font-medium flex items-center justify-center transition-colors"
                  aria-label="Trang 2"
                >
                  2
                </button>
                <button
                  className="w-10 h-10 rounded bg-[#F8F5EE] hover:bg-[#E8EFEA] text-[#121c2c] font-label-md text-label-md font-medium flex items-center justify-center transition-colors"
                  aria-label="Trang 3"
                >
                  3
                </button>
                <span className="px-2 text-[#717973]">…</span>
                <button
                  className="w-10 h-10 rounded bg-[#F8F5EE] hover:bg-[#E8EFEA] text-[#121c2c] font-label-md text-label-md font-medium flex items-center justify-center transition-colors"
                  aria-label="Trang 15"
                >
                  15
                </button>
                <button
                  className="inline-flex items-center gap-1 px-4 h-10 rounded bg-[#F8F5EE] hover:bg-[#1F4D3A] hover:text-white text-[#121c2c] font-label-sm text-label-sm uppercase font-semibold transition-colors"
                  aria-label="Trang sau"
                >
                  <span>Trang sau</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}