export default function NotFound() {
  return (
    <>
      <section className="w-full bg-[#F8F5EE] py-space-xl">
        <div className="max-w-[1360px] mx-auto px-margin">
          {/* Divider tách biệt trang trọng & tiêu đề mô phỏng */}
          <div className="flex flex-col items-center justify-center mb-space-xl text-center">
            <div className="flex items-center gap-4 w-full max-w-2xl mb-4">
              <div className="flex-1 h-px bg-outline-variant"></div>
              <span className="px-space-md py-1 rounded bg-surface-container-lowest text-secondary font-label-sm text-label-sm uppercase tracking-widest font-semibold shadow-xs">
                TRANG KHÔNG TÌM THẤY (404)
              </span>
              <div className="flex-1 h-px bg-outline-variant"></div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
              Đường dẫn bạn truy cập không tồn tại hoặc đã được chuyển đổi.
            </p>
          </div>
          {/* Khung hiển thị trung tâm trang nhã */}
          <div className="relative max-w-4xl mx-auto bg-surface-container-lowest rounded-2xl shadow-xl p-12 md:p-16 flex flex-col items-center text-center overflow-hidden">
            {/* Họa tiết hoa văn chìm nền tinh xảo (Gốm và nông nghiệp truyền thống) */}
            <div className="absolute -top-12 -right-12 w-64 h-64 opacity-5 pointer-events-none text-primary">
              <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="2" />
                <path d="M50 5 Q70 50 50 95 Q30 50 50 5 Z" />
              </svg>
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 opacity-5 pointer-events-none text-primary">
              <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
                <polygon fill="none" points="50,5 95,95 5,95" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="55" fill="none" r="20" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            {/* Số 404 lớn nghệ thuật cách điệu font Serif màu Xanh rừng đậm #1F4D3A */}
            <div className="relative mb-space-sm select-none">
              <span className="font-quote-display text-[110px] md:text-[130px] font-bold text-primary leading-none tracking-tight block">
                404
              </span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-tertiary-container uppercase tracking-widest font-semibold">
                CHUYÊN TRANG TƯ LIỆU SỐ
              </span>
            </div>
            {/* Headline Serif sắc nét */}
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-sm">
              Trang bạn tìm không tồn tại.
            </h2>
            {/* Mô tả nguyên văn */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-space-lg leading-relaxed">
              Đường dẫn đã thay đổi hoặc không còn trên hệ thống.
            </p>
            {/* Nút chính nổi bật: Về trang chủ (Đất nung #B85D3B) */}
            <div className="mb-space-xl">
              <a
                className="h-12 px-8 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-all flex items-center gap-space-xs font-label-md text-label-md shadow-md hover:shadow-lg"
                href="/"
              >
                <span className="material-symbols-outlined text-[20px]">home</span>
                <span>Về trang chủ</span>
              </a>
            </div>
            {/* 6 liên kết nhanh dạng thẻ pill/card trang nhã dẫn tới 6 chuyên mục chính */}
            <div className="w-full pt-8">
              <div className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider mb-6 flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-outline-variant"></span>
                <span>HOẶC TRUY CẬP TRỰC TIẾP CÁC CHUYÊN MỤC TRỌNG ĐIỂM</span>
                <span className="w-6 h-px bg-outline-variant"></span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                <a
                  className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-3 text-left group"
                  href="/tin-tuc-su-kien"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-xs shrink-0">
                    <span className="material-symbols-outlined text-[20px]">newspaper</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-title-editorial text-[15px] text-primary truncate font-semibold">Tin tức & Sự kiện</span>
                    <span className="font-label-sm text-label-sm text-outline truncate">Thời sự & chính sách</span>
                  </div>
                </a>
                <a
                  className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-3 text-left group"
                  href="/san-pham-ocop"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-xs shrink-0">
                    <span className="material-symbols-outlined text-[20px]">stars</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-title-editorial text-[15px] text-primary truncate font-semibold">Sản phẩm OCOP</span>
                    <span className="font-label-sm text-label-sm text-outline truncate">Phân hạng sao quốc gia</span>
                  </div>
                </a>
                <a
                  className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-3 text-left group"
                  href="/cau-chuyen-ocop"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-xs shrink-0">
                    <span className="material-symbols-outlined text-[20px]">auto_stories</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-title-editorial text-[15px] text-primary truncate font-semibold">Câu chuyện OCOP</span>
                    <span className="font-label-sm text-label-sm text-outline truncate">Hành trình người giữ nghề</span>
                  </div>
                </a>
                <a
                  className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-3 text-left group"
                  href="/diem-den-du-lich"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-xs shrink-0">
                    <span className="material-symbols-outlined text-[20px]">map</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-title-editorial text-[15px] text-primary truncate font-semibold">Điểm đến & Du lịch</span>
                    <span className="font-label-sm text-label-sm text-outline truncate">Làng nghề & nông nghiệp</span>
                  </div>
                </a>
                <a
                  className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-3 text-left group"
                  href="/ocop-hoi-nhap"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-xs shrink-0">
                    <span className="material-symbols-outlined text-[20px]">public</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-title-editorial text-[15px] text-primary truncate font-semibold">OCOP Hội nhập</span>
                    <span className="font-label-sm text-label-sm text-outline truncate">Dữ liệu số & xuất khẩu</span>
                  </div>
                </a>
                <a
                  className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center gap-3 text-left group"
                  href="/gui-bai-ho-so-ocop"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-xs shrink-0">
                    <span className="material-symbols-outlined text-[20px]">groups</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-title-editorial text-[15px] text-primary truncate font-semibold">Gửi bài & Hồ sơ OCOP</span>
                    <span className="font-label-sm text-label-sm text-outline truncate">Góp ý & gửi bài</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}