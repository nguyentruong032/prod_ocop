export function LeadInvestigativeSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Title Badge */}
        <div className="flex items-center justify-between pb-space-sm mb-space-lg">
          <div className="flex items-center gap-space-sm">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <h2 className="font-headline-md text-headline-md text-primary">
              Tiêu Điểm Điều Tra &amp; Nghiên Cứu Chuyên Sâu
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-outline hidden sm:inline-block">
            Hồ sơ chuyên san Số 42 / Quý I-2026
          </span>
        </div>

        {/* Asymmetrical Editorial Spread (8 col main / 4 col analytical side) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Main Lead Dossier (8 Columns) */}
          <article className="lg:col-span-8 bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col">
            {/* Lead Product Imagery */}
            <div className="relative w-full h-[380px] md:h-[460px] overflow-hidden bg-primary-container">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                data-alt="Editorial still life photograph showcasing authentic Vietnamese OCOP specialty goods on a rustic weathered dark wood table. Glass bottles of traditional Phu Quoc fish sauce with rope-tied necks, a rustic ceramic jar of wild forest honey with a wooden dipper and honeycomb, fresh whole star anise in a woven bamboo basket, cinnamon bark rolls, and dark roasted Arabica coffee beans in a vintage ceramic crock. Warm cinematic chiaroscuro lighting, earthy tones of deep terracotta, amber gold, and forest green."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYbc2t0xx0iJL1cGXt_WqhYixlwRWQ3CXeKb8Le6q-ahqAR72Lr294L0rMhZDffv5nQLSNU34frIE_M7pgQ6NckiR-85x3ph0gwZawAzL_VDksf1-U5gS2Na2wnXSC78_nSLd6yUPpRnsR0d3UHGFtMCR5FBzBzStuK-B-sCEuLCIFRHA4ikY06tLpHhOVyBpOoePW9PtlyMe1eKkfFnyHxj8agi1aoTLwU6on4II"
                alt="Nông sản OCOP Việt Nam"
               loading="lazy" decoding="async"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute top-space-md left-space-md flex flex-wrap gap-2">
                <span className="px-space-sm py-1 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-secondary" /> Đại Phóng Sự Thực Địa
                </span>
                <span className="px-space-sm py-1 rounded bg-primary text-tertiary-fixed font-label-sm text-label-sm shadow-sm">
                  Chuẩn OCOP 5 Sao Quốc Gia
                </span>
              </div>
              <div className="absolute bottom-space-lg left-space-lg right-space-lg text-on-primary space-y-space-xs">
                <div className="flex items-center gap-space-sm text-label-sm font-label-sm text-primary-fixed">
                  <span>Chuyên khảo: Nông sản Chế biến Sâu</span>
                  <span>•</span>
                  <span>Thời gian đọc: 14 phút</span>
                  <span>•</span>
                  <span>GS. Trần Thế Bách &amp; Ban Chuyên đề Đối ngoại</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-primary hover:text-tertiary-fixed transition-colors">
                  Chiến lược đưa hạt Robusta đặc sản và Trà Shan Tuyết cổ thụ chinh phục phân khúc siêu cao cấp tại EU và Nhật Bản
                </h3>
              </div>
            </div>

            {/* Body Synopsis & Inline Data Viz */}
            <div className="p-space-lg md:p-space-xl space-y-space-md">
              <p className="font-lead-paragraph text-lead-paragraph text-on-surface italic font-serif">
                “Không chỉ dừng ở việc bán nguyên liệu thô theo bao tải, những lô trà di sản ngậm sương Hoàng Liên Sơn
                và dòng cà phê lên men yếm khí Đắk Lắk đang tái định vị hình hài nông sản Việt Nam tại kinh đô ẩm thực
                Paris và Tokyo thông qua chỉ dẫn địa lý nghiêm ngặt.”
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Việc vượt qua rào cản Quy định Chống phá rừng của Liên minh châu Âu (EUDR) và tiêu chuẩn dư lượng MRLs
                khắt khe của Nhật Bản đòi hỏi các hợp tác xã OCOP 5 sao phải số hóa 100% tọa độ polygon từng gốc cây.
                Nghiên cứu độc quyền dưới đây chỉ ra bước nhảy vọt về biên lợi nhuận ròng: gia tăng từ 18% lên 62% khi
                chuyển đổi từ thương mại tiểu ngạch sang bao bì định danh văn hóa cao cấp.
              </p>
              {/* Embedded Infographic: Market Share Distribution & Premium Margins */}
              <div className="p-space-md rounded bg-surface-container-low space-y-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-title-editorial text-title-editorial text-primary">
                      Biến động Biên lợi nhuận &amp; Định vị Giá trị Gia tăng
                    </h4>
                    <p className="font-label-sm text-label-sm text-outline">
                      So sánh Nông sản Thô vs Sản phẩm OCOP 5 sao Chứng nhận Chỉ dẫn Địa lý (2023 - 2026)
                    </p>
                  </div>
                  <span className="px-space-sm py-1 bg-surface-container-lowest text-primary font-label-sm text-label-sm rounded self-start font-semibold">
                    Đơn vị: USD / Kg
                  </span>
                </div>
                {/* Inline SVG Infographic Bar Chart */}
                <div className="w-full bg-surface-container-lowest p-space-md rounded">
                  <svg
                    className="w-full h-auto text-primary"
                    fill="none"
                    viewBox="0 0 700 160"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Axes */}
                    <line
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      strokeWidth="1.5"
                      x1="160"
                      x2="160"
                      y1="10"
                      y2="135"
                    />
                    <line
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      strokeWidth="1.5"
                      x1="160"
                      x2="680"
                      y1="135"
                      y2="135"
                    />
                    {/* Gridlines */}
                    <line
                      stroke="currentColor"
                      strokeDasharray="3 3"
                      strokeOpacity="0.08"
                      x1="290"
                      x2="290"
                      y1="10"
                      y2="135"
                    />
                    <line
                      stroke="currentColor"
                      strokeDasharray="3 3"
                      strokeOpacity="0.08"
                      x1="420"
                      x2="420"
                      y1="10"
                      y2="135"
                    />
                    <line
                      stroke="currentColor"
                      strokeDasharray="3 3"
                      strokeOpacity="0.08"
                      x1="550"
                      x2="550"
                      y1="10"
                      y2="135"
                    />
                    <line
                      stroke="currentColor"
                      strokeDasharray="3 3"
                      strokeOpacity="0.08"
                      x1="680"
                      x2="680"
                      y1="10"
                      y2="135"
                    />
                    {/* Labels X */}
                    <text fill="#717973" fontFamily="Be Vietnam Pro" fontSize="10" textAnchor="middle" x="160" y="152">
                      $0
                    </text>
                    <text fill="#717973" fontFamily="Be Vietnam Pro" fontSize="10" textAnchor="middle" x="290" y="152">
                      $25
                    </text>
                    <text fill="#717973" fontFamily="Be Vietnam Pro" fontSize="10" textAnchor="middle" x="420" y="152">
                      $50
                    </text>
                    <text fill="#717973" fontFamily="Be Vietnam Pro" fontSize="10" textAnchor="middle" x="550" y="152">
                      $75
                    </text>
                    <text fill="#717973" fontFamily="Be Vietnam Pro" fontSize="10" textAnchor="middle" x="680" y="152">
                      $100+
                    </text>
                    {/* Row 1: Robusta Đặc Sản */}
                    <text fill="#121c2c" fontFamily="Be Vietnam Pro" fontSize="12" fontWeight="600" x="10" y="38">
                      Robusta Honey Dak Lak
                    </text>
                    {/* Bar 1 Raw */}
                    <rect fill="#c1c8c2" height="12" rx="2" width="75" x="160" y="24" />
                    <text fill="#717973" fontFamily="Be Vietnam Pro" fontSize="9" x="242" y="34">
                      $4.2 (Thô xô)
                    </text>
                    {/* Bar 1 OCOP 5-Sao */}
                    <rect fill="#984724" height="14" rx="2" width="340" x="160" y="40" />
                    <text fill="#984724" fontFamily="Be Vietnam Pro" fontSize="10" fontWeight="bold" x="508" y="52">
                      $62.5 (OCOP Specialty Single-Origin)
                    </text>
                    {/* Row 2: Trà Shan Tuyết Cổ Thụ */}
                    <text fill="#121c2c" fontFamily="Be Vietnam Pro" fontSize="12" fontWeight="600" x="10" y="98">
                      Trà Shan Tuyết Suối Giàng
                    </text>
                    {/* Bar 2 Raw */}
                    <rect fill="#c1c8c2" height="12" rx="2" width="110" x="160" y="84" />
                    <text fill="#717973" fontFamily="Be Vietnam Pro" fontSize="9" x="278" y="94">
                      $14.0 (Trà búp xao thông thường)
                    </text>
                    {/* Bar 2 OCOP 5-Sao */}
                    <rect fill="#012d1d" height="14" rx="2" width="480" x="160" y="100" />
                    <text fill="#012d1d" fontFamily="Be Vietnam Pro" fontSize="10" fontWeight="bold" x="648" y="112">
                      $120.0 (Bạch Trà Cổ Thụ Đóng Hộp)
                    </text>
                  </svg>
                </div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-outline-variant inline-block rounded-xs" /> Nông sản xuất thô
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-secondary inline-block rounded-xs" /> OCOP Đóng gói Chế biến Sâu
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-primary inline-block rounded-xs" /> OCOP Di sản Hạng Đặc biệt
                  </span>
                </div>
              </div>
              {/* Action Link */}
              <div className="pt-space-sm flex items-center justify-between">
                <a
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md"
                  href="#"
                >
                  <span>Đọc toàn văn hồ sơ phân tích thị trường</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <span className="font-label-sm text-label-sm text-outline">
                  Lưu trữ: #OCOP-EXP-2026-EU
                </span>
              </div>
            </div>
          </article>

          {/* Right Side: 3 Compact Analytical Dossiers with Mini Charts (4 Columns) */}
          <div className="lg:col-span-4 space-y-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary">Phân Tích Đa Chiều</span>
              <span className="font-label-sm text-label-sm text-secondary font-semibold">
                Tóm tắt Nghị sự
              </span>
            </div>

            {/* Mini Feature 1 */}
            <article className="bg-surface-container-lowest p-space-md rounded shadow-sm hover:shadow-md transition-shadow space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                  Hoa Kỳ / FDA
                </span>
                <span className="font-label-sm text-label-sm text-outline">Hôm nay</span>
              </div>
              <h4 className="font-title-editorial text-title-editorial text-on-surface hover:text-primary transition-colors cursor-pointer">
                Mã số vùng trồng và rào cản kỹ thuật kiểm dịch thực vật tại thị trường Hoa Kỳ
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Khảo sát trên 420 mã số vùng trồng trái cây OCOP: những lỗ hổng trong kiểm soát dư lượng thuốc bảo vệ
                thực vật và giải pháp chuẩn hóa mã số số hóa.
              </p>
              {/* Sparkline visualization */}
              <div className="pt-space-xs flex items-center justify-between text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <svg
                    className="text-secondary stroke-current fill-none stroke-[2]"
                    height="24"
                    viewBox="0 0 84 24"
                    width="84"
                  >
                    <polyline points="0,20 18,14 36,18 54,6 72,10 84,2" />
                  </svg>
                  <span className="font-label-sm text-label-sm font-semibold text-secondary">
                    +34.8% Vùng cấp mã
                  </span>
                </div>
                <a className="text-primary hover:text-secondary text-label-sm font-label-sm flex items-center" href="#">
                  Chi tiết <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </a>
              </div>
            </article>

            {/* Mini Feature 2 */}
            <article className="bg-surface-container-lowest p-space-md rounded shadow-sm hover:shadow-md transition-shadow space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                  Trung Đông / Halal
                </span>
                <span className="font-label-sm text-label-sm text-outline">2 ngày trước</span>
              </div>
              <h4 className="font-title-editorial text-title-editorial text-on-surface hover:text-primary transition-colors cursor-pointer">
                Hành trình chứng nhận Halal cho nông sản OCOP Tây Nam Bộ: Cơ hội thị trường 2.000 tỷ USD
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Nghiên cứu chuỗi chế biến dừa Bến Tre, xoài cát Hòa Lộc và thủy sản nước ngọt đạt chuẩn đạo Hồi JAKIM
                &amp; GSO.
              </p>
              {/* Progress visualization */}
              <div className="pt-space-xs space-y-1">
                <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                  <span>Tiến độ cấp phép Halal ĐBSCL</span>
                  <span className="font-bold text-primary">68% / Mục tiêu 2026</span>
                </div>
                <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '68%' }} />
                </div>
              </div>
            </article>

            {/* Mini Feature 3 */}
            <article className="bg-surface-container-lowest p-space-md rounded shadow-sm hover:shadow-md transition-shadow space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                  Logistics Lạnh
                </span>
                <span className="font-label-sm text-label-sm text-outline">3 ngày trước</span>
              </div>
              <h4 className="font-title-editorial text-title-editorial text-on-surface hover:text-primary transition-colors cursor-pointer">
                Giải bài toán logistics đường biển và chuỗi bảo quản lạnh (Cold Chain) cho trái cây tươi
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Công nghệ biến đổi khí quyển CA và chiếu xạ tại chỗ giúp kéo dài tuổi thọ thanh long, bưởi da xanh
                trên các chuyến hải trình 28 ngày sang Rotterdam.
              </p>
              <div className="pt-space-xs flex items-center justify-between text-on-surface-variant">
                <span className="font-label-sm text-label-sm text-outline">Giảm hao hụt từ 22% → 6.4%</span>
                <a className="text-primary hover:text-secondary text-label-sm font-label-sm flex items-center" href="#">
                  Xem bản tin <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </a>
              </div>
            </article>

            {/* Editorial Quote Block */}
            <div className="p-space-md rounded bg-surface-container-high text-on-surface space-y-space-xs">
              <span className="material-symbols-outlined text-secondary text-[24px]">format_quote</span>
              <p className="font-body-sm text-body-sm italic text-on-surface">
                “Nông sản OCOP chỉ thực sự hội nhập khi chúng ta bán câu chuyện văn hóa gắn chặt với chỉ số tiêu chuẩn
                kiểm nghiệm định lượng.”
              </p>
              <p className="font-label-sm text-label-sm font-semibold text-primary pt-1">
                — TS. Đặng Kim Sơn, Chuyên gia Chính sách Nông nghiệp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
