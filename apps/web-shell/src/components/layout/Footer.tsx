export function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary-fixed">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] gap-x-16 gap-y-space-xl pb-space-xl">
          {/* Cột 1: Thương hiệu */}
          <div className="flex flex-col gap-space-md items-start">
            <div className="flex items-center gap-space-sm">
              <a href="/" aria-label="Về trang chủ OCOP Việt Nam" className="flex items-center gap-space-sm">
                <img
                  src="/logo.png"
                  alt="OCOP Việt Nam Điện tử"
                  className="h-10 md:h-12 w-auto object-contain"
                  style={{ height: '8.5rem' }}
                />
              </a>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed max-w-sm">
              Chuyên trang thông tin điện tử giới thiệu sản phẩm OCOP Việt Nam qua câu chuyện văn hóa bản địa, người giữ
              nghề, du lịch nông thôn và dữ liệu hội nhập.
            </p>
            <span className="px-space-sm py-1 rounded-lg bg-surface-container-lowest/10 text-on-primary-container font-label-sm text-label-sm">
              Tư liệu số hóa Quốc gia
            </span>
          </div>

          {/* Cột 2: Chuyên mục */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-editorial text-title-editorial font-semibold text-surface-container-lowest">Chuyên mục</h3>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-primary-container">
              <li>
                <a className="hover:text-surface-container-lowest transition-colors" href="/tin-tuc-su-kien">
                  Tin tức và sự kiện
                </a>
              </li>
              <li>
                <a className="hover:text-surface-container-lowest transition-colors" href="/san-pham-ocop">
                  Sản phẩm OCOP
                </a>
              </li>
              <li>
                <a className="hover:text-surface-container-lowest transition-colors" href="/cau-chuyen-ocop">
                  Câu chuyện OCOP
                </a>
              </li>
              <li>
                <a className="hover:text-surface-container-lowest transition-colors" href="/diem-den-du-lich">
                  Điểm đến du lịch
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Bản tin */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-editorial text-title-editorial font-semibold text-surface-container-lowest">Kết nối & Bản tin</h3>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Đăng ký nhận tuyển tập các bài khảo cứu và câu chuyện di sản nông thôn định kỳ.
            </p>
            <form className="flex flex-col sm:flex-row gap-space-xs" data-form="newsletter">
              <input
                type="email"
                required
                placeholder="Email của bạn…"
                className="h-10 flex-1 min-w-0 px-space-md rounded-lg bg-surface-container-lowest/10 text-surface-container-lowest placeholder:text-on-primary-container/70 font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest/20 transition-all"
              />
              <button
                type="submit"
                className="h-10 px-space-md rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container font-label-md text-label-md whitespace-nowrap transition-colors"
              >
                Đăng ký
              </button>
            </form>
            <div className="flex items-center gap-space-sm">
              <a
                aria-label="Diễn đàn tri thức"
                className="w-9 h-9 rounded-lg bg-surface-container-lowest/10 text-on-primary-container hover:text-surface-container-lowest flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a
                aria-label="Thư viện video tư liệu"
                className="w-9 h-9 rounded-lg bg-surface-container-lowest/10 text-on-primary-container hover:text-surface-container-lowest flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </a>
              <a
                aria-label="Mạng lưới chuyên gia bản địa"
                className="w-9 h-9 rounded-lg bg-surface-container-lowest/10 text-on-primary-container hover:text-surface-container-lowest flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-md border-t border-surface-container-lowest/15 flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <p className="font-body-sm text-body-sm text-on-primary-container text-center md:text-left">
            © 2026 OCOP Digital Platform - Chuyên trang OCOP Việt Nam Điện tử. Bảo lưu mọi quyền.
          </p>
          <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-primary-container">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Di sản Nông thôn Việt Nam
          </span>
        </div>
      </div>
    </footer>
  );
}