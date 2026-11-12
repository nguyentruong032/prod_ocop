import React from 'react';

export function ExportHeroSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-primary-container text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[14px]">query_stats</span>
              <span>Báo cáo Dữ liệu &amp; Xúc tiến Đầu tư OCOP Quốc tế</span>
            </div>
            <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-primary tracking-tight">
              Chiến lược Mở rộng Thị phần &amp; Xúc tiến Thương mại Quốc tế cho Sản phẩm OCOP
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant max-w-2xl">
              Bản đồ nghiên cứu và giải mã các thị trường mục tiêu trọng điểm: Châu Âu (EU), Bắc Mỹ, Đông Bắc Á (Nhật
              Bản, Hàn Quốc), ASEAN và Hành lang Hồi giáo (Halal) nhằm đưa nông sản và dược liệu bản địa Việt Nam vào
              các chuỗi bán lẻ tinh hoa thế giới.
            </p>
            {/* Export Key Indicators */}
            <div className="grid grid-cols-3 gap-space-md pt-space-md">
              <div className="bg-surface-container-lowest p-space-md rounded shadow-sm">
                <span className="font-label-sm text-label-sm text-outline uppercase block">Kim ngạch ước tính</span>
                <div className="font-headline-md text-headline-md text-primary font-bold mt-1">$1.85 Tỷ</div>
                <span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5 mt-0.5">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +14.2% YoY
                </span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded shadow-sm">
                <span className="font-label-sm text-label-sm text-outline uppercase block">Hội chợ quốc tế</span>
                <div className="font-headline-md text-headline-md text-primary font-bold mt-1">65+</div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">Đoàn thường niên</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded shadow-sm">
                <span className="font-label-sm text-label-sm text-outline uppercase block">Chuỗi cung ứng toàn cầu</span>
                <div className="font-headline-md text-headline-md text-secondary font-bold mt-1">240+</div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block mt-0.5">DN OCOP 4-5 sao</span>
              </div>
            </div>
          </div>
          {/* Analytical Map & Corridor Module (5 Cols) */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded shadow-sm space-y-space-md">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-label-md text-label-md text-primary uppercase font-bold tracking-wide">
                  Trục Hành lang Thương mại
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Tỷ trọng kim ngạch xuất khẩu OCOP phân bổ theo khu vực
                </p>
              </div>
              <span className="material-symbols-outlined text-tertiary-container text-[24px]">language</span>
            </div>
            {/* SVG Radial Data Chart */}
            <div className="py-space-xs flex items-center justify-center">
              <svg className="w-full max-w-sm" fill="none" viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#F0F3FF" height="200" rx="8" width="340" x="10" y="10" />
                {/* Europe Bar */}
                <text fill="#121C2C" fontFamily="Be Vietnam Pro" fontSize="12" fontWeight="600" x="30" y="45">
                  Châu Âu (EU) - 34%
                </text>
                <rect fill="#D9E3F9" height="12" rx="3" width="280" x="30" y="55" />
                <rect fill="#012D1D" height="12" rx="3" width="95" x="30" y="55" />
                {/* East Asia Bar */}
                <text fill="#121C2C" fontFamily="Be Vietnam Pro" fontSize="12" fontWeight="600" x="30" y="95">
                  Đông Bắc Á (Nhật, Hàn) - 28%
                </text>
                <rect fill="#D9E3F9" height="12" rx="3" width="280" x="30" y="105" />
                <rect fill="#984724" height="12" rx="3" width="78" x="30" y="105" />
                {/* North America Bar */}
                <text fill="#121C2C" fontFamily="Be Vietnam Pro" fontSize="12" fontWeight="600" x="30" y="145">
                  Bắc Mỹ (Hoa Kỳ, Canada) - 22%
                </text>
                <rect fill="#D9E3F9" height="12" rx="3" width="280" x="30" y="155" />
                <rect fill="#CE9E54" height="12" rx="3" width="62" x="30" y="155" />
                {/* Middle East & Halal Bar */}
                <text fill="#121C2C" fontFamily="Be Vietnam Pro" fontSize="12" fontWeight="600" x="30" y="195">
                  Hồi giáo (Halal) &amp; ASEAN - 16%
                </text>
                <rect fill="#D9E3F9" height="12" rx="3" width="280" x="30" y="205" />
                <rect fill="#1B4332" height="12" rx="3" width="45" x="30" y="205" />
              </svg>
            </div>
            <div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-outline">
              <span>Nguồn: Bộ Công Thương &amp; VCCI (Niên giám 2025)</span>
              <a className="text-secondary font-semibold hover:underline flex items-center gap-0.5" href="#">
                <span>Tải biểu đồ</span>
                <span className="material-symbols-outlined text-[14px]">download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
