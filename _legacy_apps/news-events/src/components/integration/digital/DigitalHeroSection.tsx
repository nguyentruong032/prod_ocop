import React from 'react';

export function DigitalHeroSection() {
  return (
    <section className="w-full bg-surface py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        {/* Breadcrumb & Metadata Badge */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-lg">
          <div className="flex items-center gap-space-sm">
            <span className="px-space-sm py-0.5 rounded bg-primary-container/15 text-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase">
              Báo chí Dữ liệu Chuyên sâu • Kỷ yếu 2026
            </span>
            <span className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping" />
              Hệ sinh thái IoT 63 Tỉnh Thành
            </span>
          </div>
          <div className="text-on-surface-variant font-label-sm text-label-sm italic">
            Cập nhật ngày 24/02/2026 | Trung tâm Dữ liệu Nông thôn mới Quốc gia
          </div>
        </div>
        {/* Main Headline Title & Lead Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <div className="lg:col-span-8 space-y-space-md">
            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-primary tracking-tight">
              Số hóa Chuỗi Giá trị OCOP: Từ Minh bạch Nguồn gốc đến Thương mại Điện tử Xuyên biên giới
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant leading-relaxed">
              Làn sóng chuyển đổi số đang tái định hình diện mạo nông sản Việt Nam. Bằng việc kết hợp giao thức chuỗi
              khối (Blockchain), trạm quan trắc vi khí hậu IoT và Hộ chiếu Sản phẩm Số (DPP), các hợp tác xã bản địa tự
              tin bước ra vũ đài thương mại điện tử quốc tế, xóa bỏ ranh giới địa lý để đưa tinh hoa làng nghề tiếp cận
              trực tiếp thị trường toàn cầu.
            </p>
          </div>
          {/* Real-time Metrics Card */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-md space-y-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                Chỉ số Số hóa Toàn quốc
              </span>
              <span className="material-symbols-outlined text-secondary">analytics</span>
            </div>
            <div className="space-y-space-md">
              {/* Stat 1 */}
              <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-headline-md text-headline-md text-primary font-bold">12.480+</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    Mã QR truy xuất nguồn gốc động
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary-container text-[28px]">qr_code_2</span>
              </div>
              {/* Stat 2 */}
              <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-headline-md text-headline-md text-secondary font-bold">452</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    Gian hàng chính hãng Amazon, Shopee &amp; TikTok
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary text-[28px]">storefront</span>
              </div>
              {/* Stat 3 */}
              <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-headline-md text-headline-md text-primary font-bold">85,6%</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    Hợp tác xã áp dụng Nhật ký điện tử
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary-container text-[28px]">fact_check</span>
              </div>
            </div>
            <div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                Dữ liệu Bộ NN&amp;PTNT
              </span>
              <span className="text-secondary font-semibold">Tăng 34% cùng kỳ 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
