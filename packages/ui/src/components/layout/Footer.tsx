export function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary-fixed">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr] gap-x-16 gap-y-space-xl pb-space-xl">
          {/* Cột 1: Thương hiệu */}
          <div className="flex flex-col gap-space-md items-start">
            <div className="flex items-center gap-space-sm">
              <a href="/" aria-label="Về trang chủ OCOP Việt Nam" className="flex items-center gap-space-sm">
                <img
                  src="/logo.webp"
                  alt="OCOP Việt Nam Điện tử"
                  className="h-10 md:h-12 w-auto object-contain"
                  style={{ height: '8.5rem' }}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed max-w-sm">
              Chuyên trang thông tin điện tử OCOP Việt Nam - Nơi tập trung, chia sẻ và lan tỏa câu chuyện, sản phẩm,
              và giá trị OCOP đến cộng đồng.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/ocopvietnam" target="_blank" rel="noopener noreferrer" aria-label="Facebook OCOP Việt Nam" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-[24px]">public</span>
              </a>
              <a href="https://www.youtube.com/@ocopvietnam" target="_blank" rel="noopener noreferrer" aria-label="YouTube OCOP Việt Nam" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-[24px]">youtube_activity</span>
              </a>
              <a href="https://www.tiktok.com/@ocopvietnam" target="_blank" rel="noopener noreferrer" aria-label="TikTok OCOP Việt Nam" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-[24px]">live_tv</span>
              </a>
              <a href="https://zalo.me/ocopvietnam" target="_blank" rel="noopener noreferrer" aria-label="Zalo OCOP Việt Nam" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-[24px]">chat_bubble_outline</span>
              </a>
            </div>
          </div>

          {/* Cột 3: Thông tin liên hệ */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-primary-fixed-variant">Thông tin liên hệ</h3>
            <address className="not-italic font-body-sm text-body-sm text-on-primary-container leading-relaxed space-y-3">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">location_on</span>
                <span>Số 46 Tăng Bạt Hổ, phường Phạm Đình Hổ, quận Hai Bà Trưng, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary shrink-0">phone</span>
                <a href="tel:+842438255678" className="hover:text-on-primary-fixed-variant transition-colors">024.3869.2173</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary shrink-0">email</span>
                <a href="mailto:ocopvietnam2021@gmail.com" className="hover:text-on-primary-fixed-variant transition-colors">ocopvietnam2021@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary shrink-0">schedule</span>
                <span>Thứ 2 - Thứ 6: 8:00 - 17:00 (GMT+7)</span>
              </div>
            </address>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-on-primary-container/20 pt-space-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body-sm text-body-sm text-on-primary-container/70">
            © 2024 OCOP Việt Nam. Mọi quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6">
            <a href="/chinh-sach-bao-mat" className="font-body-sm text-body-sm text-on-primary-container/70 hover:text-on-primary-fixed-variant transition-colors">
              Chính sách bảo mật
            </a>
            <a href="/dieu-khoan-su-dung" className="font-body-sm text-body-sm text-on-primary-container/70 hover:text-on-primary-fixed-variant transition-colors">
              Điều khoản sử dụng
            </a>
            <a href="/gui-bai-ho-so-ocop" className="font-body-sm text-body-sm text-on-primary-container/70 hover:text-on-primary-fixed-variant transition-colors">
              Gửi bài / Hồ sơ OCOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}