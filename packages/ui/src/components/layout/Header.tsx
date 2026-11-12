'use client';

import { useState, useEffect, useRef } from 'react';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchModalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearchModal();
      }
      if (e.key === '/' && !isSearchOpen && document.activeElement === document.body) {
        e.preventDefault();
        openSearchModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const openSearchModal = () => {
    setIsSearchOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSearchModal = () => {
    setIsSearchOpen(false);
    document.body.style.overflow = '';
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const query = formData.get('search')?.toString().trim();
    if (query) {
      closeSearchModal();
      window.location.href = `/tim-kiem?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface-container-lowest shadow-sm border-b border-surface-light-green">
        <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin h-20 flex items-center justify-between border-b border-surface-light-green/60">
          <a href="/" aria-label="Về trang chủ OCOP Việt Nam" className="flex items-center gap-space-md group shrink-0">
            <img src="/logo.webp" alt="OCOP Việt Nam Điện tử" style={{ height: '18rem' }} className="w-auto object-contain shrink-0" loading="eager" fetchPriority="high" decoding="async" />
          </a>
          <div className="flex-1"></div>
          <div className="flex items-center gap-space-md">
            <div className="relative hidden sm:block">
              <button
                id="search-modal-trigger"
                aria-label="Tìm kiếm tư liệu"
                className="h-10 px-4 pl-10 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-2 font-body-sm text-body-sm border border-transparent hover:border-outline-variant w-52 md:w-64 text-left"
                onClick={openSearchModal}
              >
                <span className="material-symbols-outlined text-[20px] absolute left-3 text-on-surface-variant">search</span>
                <span className="truncate">Tìm kiếm tư liệu, bài viết...</span>
              </button>
            </div>
            <button
              aria-label="Tìm kiếm"
              className="sm:hidden h-10 w-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant"
              id="search-modal-trigger-mobile"
              onClick={openSearchModal}
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
            <a
              className="h-10 px-space-lg rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors flex items-center gap-space-xs font-label-md text-label-md shadow-xs shrink-0"
              href="/gui-bai-ho-so-ocop"
            >
              <span className="material-symbols-outlined text-[18px]">post_add</span>
              <span className="hidden md:inline">Gửi bài / Hồ sơ OCOP</span>
              <span className="md:hidden">Gửi hồ sơ</span>
            </a>
          </div>
        </div>
        <div className="w-full bg-surface-container-lowest">
          <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
            <nav className="flex items-center justify-between gap-1 overflow-x-visible relative py-0" data-active-classes="text-primary font-semibold border-b-2 border-primary">
              {/* Tin tức và sự kiện */}
              <div className="relative group">
                <a
                  className="inline-flex items-center gap-1.5 py-3.5 px-4 font-body-md text-[15px] font-semibold text-on-surface-variant hover:text-primary whitespace-nowrap transition-colors border-b-2 border-transparent group-hover:border-primary group-hover:text-primary group-hover:bg-surface-beige/60 rounded-t nav-link"
                  data-path="tin-tuc-su-kien"
                  href="/tin-tuc-su-kien"
                >
                  <span>Tin tức & Sự kiện</span>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-primary transition-transform group-hover:rotate-180">expand_more</span>
                </a>
                <div className="absolute top-full left-0 z-50 hidden group-hover:flex flex-col bg-surface-container-lowest shadow-xl border border-surface-container rounded-b-xl py-3 px-2 min-w-[240px]">
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/tin-tuc-su-kien/chinh-sach-va-co-che">
                    <span>Chính sách và cơ chế OCOP</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/tin-tuc-su-kien/xuc-tien-thuong-mai">
                    <span>Xúc tiến thương mại</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/tin-tuc-su-kien/ocop-dia-phuong">
                    <span>OCOP địa phương</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                </div>
              </div>
              {/* Sản phẩm OCOP */}
              <div className="relative group">
                <a
                  className="inline-flex items-center gap-1.5 py-3.5 px-4 font-body-md text-[15px] font-semibold text-on-surface-variant hover:text-primary whitespace-nowrap transition-colors border-b-2 border-transparent group-hover:border-primary group-hover:text-primary group-hover:bg-surface-beige/60 rounded-t nav-link"
                  data-path="san-pham-ocop"
                  href="/san-pham-ocop"
                >
                  <span>Sản phẩm OCOP</span>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-primary transition-transform group-hover:rotate-180">expand_more</span>
                </a>
                <div className="absolute top-full left-0 z-50 hidden group-hover:flex flex-col bg-surface-container-lowest shadow-xl border border-surface-container rounded-b-xl py-3 px-2 min-w-[240px]">
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/san-pham-ocop/san-pham-theo-sao">
                    <span>Sản phẩm theo sao</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/san-pham-ocop/nong-san-va-thuc-pham">
                    <span>Nông sản & Thực phẩm</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe">
                    <span>Dược liệu và sản phẩm sức khỏe</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/san-pham-ocop/thu-cong-my-nghe">
                    <span>Thủ công mỹ nghệ</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                </div>
              </div>
              {/* Câu chuyện OCOP */}
              <div className="relative group">
                <a
                  className="inline-flex items-center gap-1.5 py-3.5 px-4 font-body-md text-[15px] font-semibold text-on-surface-variant hover:text-primary whitespace-nowrap transition-colors border-b-2 border-transparent group-hover:border-primary group-hover:text-primary group-hover:bg-surface-beige/60 rounded-t nav-link"
                  data-path="cau-chuyen-ocop"
                  href="/cau-chuyen-ocop"
                >
                  <span>Câu chuyện OCOP</span>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-primary transition-transform group-hover:rotate-180">expand_more</span>
                </a>
                <div className="absolute top-full left-0 z-50 hidden group-hover:flex flex-col bg-surface-container-lowest shadow-xl border border-surface-container rounded-b-xl py-3 px-2 min-w-[240px]">
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop">
                    <span>Hành trình chủ thể OCOP</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia">
                    <span>Văn hóa & Tinh hoa bản địa</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/cau-chuyen-ocop/phong-su-da-phuong-tien">
                    <span>Phóng sự đa phương tiện</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                </div>
              </div>
              {/* Điểm đến du lịch */}
              <div className="relative group">
                <a
                  className="inline-flex items-center gap-1.5 py-3.5 px-4 font-body-md text-[15px] font-semibold text-on-surface-variant hover:text-primary whitespace-nowrap transition-colors border-b-2 border-transparent group-hover:border-primary group-hover:text-primary group-hover:bg-surface-beige/60 rounded-t nav-link"
                  data-path="diem-den-du-lich"
                  href="/diem-den-du-lich"
                >
                  <span>Điểm đến du lịch</span>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-primary transition-transform group-hover:rotate-180">expand_more</span>
                </a>
                <div className="absolute top-full left-0 z-50 hidden group-hover:flex flex-col bg-surface-container-lowest shadow-xl border border-surface-container rounded-b-xl py-3 px-2 min-w-[240px]">
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/diem-den-du-lich/lang-nghe-truyen-thong">
                    <span>Làng nghề truyền thống</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop">
                    <span>Du lịch sinh thái - Trải nghiệm OCOP</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/diem-den-du-lich/ban-do-ocop-viet-nam">
                    <span>Bản đồ OCOP Việt Nam</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                </div>
              </div>
              {/* OCOP Hội Nhập */}
              <div className="relative group">
                <a
                  className="inline-flex items-center gap-1.5 py-3.5 px-4 font-body-md text-[15px] font-semibold text-on-surface-variant hover:text-primary whitespace-nowrap transition-colors border-b-2 border-transparent group-hover:border-primary group-hover:text-primary group-hover:bg-surface-beige/60 rounded-t nav-link"
                  data-path="ocop-hoi-nhap"
                  href="/ocop-hoi-nhap"
                >
                  <span>OCOP Hội Nhập</span>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-primary transition-transform group-hover:rotate-180">expand_more</span>
                </a>
                <div className="absolute top-full left-0 z-50 hidden group-hover:flex flex-col bg-surface-container-lowest shadow-xl border border-surface-container rounded-b-xl py-3 px-2 min-w-[240px]">
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te">
                    <span>Xuất khẩu & Thị trường quốc tế</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te">
                    <span>Tiêu chuẩn & Chứng nhận quốc tế</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                  <a className="px-3 py-2 rounded-lg text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-beige transition-colors flex items-center justify-between" href="/ocop-hoi-nhap/chuyen-doi-so-OCOP">
                    <span>Chuyển đổi số OCOP</span>
                    <span className="material-symbols-outlined text-[14px]"></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <div
        className={`fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm ${isSearchOpen ? 'flex' : 'hidden'} items-center justify-center p-4`}
        id="search-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
      >
        <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-2xl p-6 flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm" id="search-modal-title">
              <span className="material-symbols-outlined text-[24px]">search</span>
              <span>Tra cứu tư liệu & hồ sơ</span>
            </div>
            <button
              className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-outline hover:text-on-surface"
              id="search-modal-close"
              onClick={closeSearchModal}
              aria-label="Đóng tìm kiếm"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              ref={searchInputRef}
              className="w-full h-12 px-4 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline outline-none ring-0 focus:bg-surface-container-lowest transition-all"
              placeholder="Nhập từ khóa tìm kiếm (VD: Chè Shan Tuyết, Gốm Bát Tràng, tiêu chuẩn 5 sao...)"
              type="search"
              name="search"
              id="search-input"
              autoComplete="off"
            />
          </form>
          <div className="flex items-center justify-between text-outline font-label-sm text-label-sm pt-2">
            <span>Gợi ý: Tìm kiếm theo chủ thể, mã vùng địa lý, hoặc phân hạng sao</span>
            <span>Nhấn ESC để đóng</span>
          </div>
        </div>
        <div className="absolute inset-0" onClick={closeSearchModal} aria-hidden="true" />
      </div>
    </>
  );
}