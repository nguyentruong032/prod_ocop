export function DataVisualizationsSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
              Hạ Tầng Dữ Liệu Quốc Gia
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">
              Bản Đồ Phân Phối Nông Sản OCOP 5 Sao &amp; Cơ Cấu Giá Trị Gia Tăng
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-space-sm py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">
              Dữ liệu thực tế Hải quan &amp; VCCI
            </span>
          </div>
        </div>

        {/* 2-Column Visualizations Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* Chart 1: Export Flow by Continent (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded shadow-sm space-y-space-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-title-editorial text-title-editorial text-primary">
                  Luồng Phân Phối OCOP 5 Sao Theo Châu Lục
                </h3>
                <span className="font-label-sm text-label-sm text-outline">Năm 2025 (Ước lượng)</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tỷ trọng kim ngạch các mặt hàng OCOP đạt chuẩn 5 sao quốc gia xuất khẩu chính ngạch theo phân vùng địa lý.
              </p>
            </div>

            {/* Interactive Donut / Flow Visualization via Clean SVG */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-md items-center py-space-sm">
              <div className="sm:col-span-6 flex justify-center">
                <svg className="transform -rotate-90" height="220" viewBox="0 0 42 42" width="220">
                  {/* Background Circle */}
                  <circle
                    cx="21"
                    cy="21"
                    fill="transparent"
                    r="15.91549430918954"
                    stroke="#f0f3ff"
                    strokeWidth="5"
                  />
                  {/* Segment 1: Châu Á (38%) */}
                  <circle
                    cx="21"
                    cy="21"
                    fill="transparent"
                    r="15.91549430918954"
                    stroke="#012d1d"
                    strokeDasharray="38 62"
                    strokeDashoffset="0"
                    strokeWidth="5"
                  />
                  {/* Segment 2: Châu Âu (31%) */}
                  <circle
                    cx="21"
                    cy="21"
                    fill="transparent"
                    r="15.91549430918954"
                    stroke="#984724"
                    strokeDasharray="31 69"
                    strokeDashoffset="-38"
                    strokeWidth="5"
                  />
                  {/* Segment 3: Bắc Mỹ (21%) */}
                  <circle
                    cx="21"
                    cy="21"
                    fill="transparent"
                    r="15.91549430918954"
                    stroke="#ce9e54"
                    strokeDasharray="21 79"
                    strokeDashoffset="-69"
                    strokeWidth="5"
                  />
                  {/* Segment 4: Trung Đông & Khác (10%) */}
                  <circle
                    cx="21"
                    cy="21"
                    fill="transparent"
                    r="15.91549430918954"
                    stroke="#414844"
                    strokeDasharray="10 90"
                    strokeDashoffset="-90"
                    strokeWidth="5"
                  />
                  <text
                    fill="#012d1d"
                    fontFamily="Noto Serif"
                    fontSize="5"
                    fontWeight="bold"
                    textAnchor="middle"
                    transform="rotate(90 21 21)"
                    x="21"
                    y="20"
                  >
                    $2.14B
                  </text>
                  <text
                    fill="#717973"
                    fontFamily="Be Vietnam Pro"
                    fontSize="2.5"
                    textAnchor="middle"
                    transform="rotate(90 21 21)"
                    x="21"
                    y="24.5"
                  >
                    Tổng kim ngạch
                  </text>
                </svg>
              </div>
              <div className="sm:col-span-6 space-y-space-xs font-body-sm text-body-sm">
                <div className="p-space-xs rounded bg-surface-container-low flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary inline-block" />
                    <span className="font-medium text-on-surface">Châu Á (Nhật, Hàn, Trung)</span>
                  </span>
                  <span className="font-bold text-primary">38.0%</span>
                </div>
                <div className="p-space-xs rounded bg-surface-container-low flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary inline-block" />
                    <span className="font-medium text-on-surface">Châu Âu (EU27, UK)</span>
                  </span>
                  <span className="font-bold text-secondary">31.0%</span>
                </div>
                <div className="p-space-xs rounded bg-surface-container-low flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ce9e54] inline-block" />
                    <span className="font-medium text-on-surface">Bắc Mỹ (Hoa Kỳ, Canada)</span>
                  </span>
                  <span className="font-bold text-tertiary">21.0%</span>
                </div>
                <div className="p-space-xs rounded bg-surface-container-low flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-outline inline-block" />
                    <span className="font-medium text-on-surface">Trung Đông &amp; Châu Úc</span>
                  </span>
                  <span className="font-bold text-on-surface">10.0%</span>
                </div>
              </div>
            </div>

            <div className="pt-space-xs text-label-sm font-label-sm text-outline flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">info</span>
              <span>
                Tăng trưởng mạnh nhất: Nhóm sản phẩm gia vị và thảo mộc tự nhiên tại thị trường Bắc Âu.
              </span>
            </div>
          </div>

          {/* Chart 2: Deep Processing Value Structure (5 cols) */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded shadow-sm space-y-space-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-title-editorial text-title-editorial text-primary">
                  Cơ Cấu Giá Trị Gia Tăng Chế Biến Sâu
                </h3>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  Phân tích Chuỗi
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tỷ lệ giá trị đóng góp trên mỗi 100 USD kim ngạch hàng OCOP cao cấp xuất khẩu.
              </p>
            </div>

            {/* Stacked Bar Visual */}
            <div className="space-y-space-sm py-space-xs">
              <div className="space-y-1">
                <div className="flex justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface font-medium">
                    Bao bì, Định danh &amp; Kể chuyện Văn hóa
                  </span>
                  <span className="font-bold text-secondary">38% ($38)</span>
                </div>
                <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '38%' }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface font-medium">
                    Công nghệ Chế biến &amp; Chiết xuất Sâu
                  </span>
                  <span className="font-bold text-primary">27% ($27)</span>
                </div>
                <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '27%' }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface font-medium">
                    Nguyên liệu Thô tại Nông hộ (Farm-gate)
                  </span>
                  <span className="font-bold text-[#ce9e54]">22% ($22)</span>
                </div>
                <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden">
                  <div className="bg-[#ce9e54] h-full rounded-full" style={{ width: '22%' }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface font-medium">
                    Chứng nhận &amp; Thử nghiệm Phòng Lab
                  </span>
                  <span className="font-bold text-outline">13% ($13)</span>
                </div>
                <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden">
                  <div className="bg-outline h-full rounded-full" style={{ width: '13%' }} />
                </div>
              </div>
            </div>

            <div className="p-space-sm rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">
                lightbulb
              </span>
              <span>
                Định vị bao bì bản địa gia tăng tới 3.2 lần khả năng chấp nhận mức giá cao của người tiêu dùng quốc tế.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
