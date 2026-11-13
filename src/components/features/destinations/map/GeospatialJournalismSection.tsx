import React from "react";
import Link from "next/link";

export function GeospatialJournalismSection() {
  return (
    <section className="w-full py-12 bg-surface">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Data Visualization (Bar & Altitude Chart) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6 bg-surface-container-lowest p-6 rounded-xl border border-surface-container/60 shadow-xs">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-secondary uppercase font-bold tracking-wider">
              Trắc đồ phân bố địa sinh thái
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-primary">
              Mật độ sản phẩm OCOP 4–5 sao theo độ cao địa hình (Việt Nam 2026)
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Khảo sát 2.140 sản phẩm đạt chuẩn quốc gia và cấp tỉnh phân bổ từ vùng ven biển đến rẻo cao trên 1.500m.
            </p>
          </div>

          {/* Inline Data Chart */}
          <div className="w-full py-2">
            <div className="flex flex-col gap-4">
              {/* Tier 1 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-primary font-bold">
                    Vùng cao &gt; 1.200m (Dược liệu, Trà cổ thụ Shan tuyết)
                  </span>
                  <span className="text-on-surface-variant font-medium">420 SP (19.6%)</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "38%" }} />
                </div>
              </div>

              {/* Tier 2 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-primary font-bold">
                    Vùng đồi gò 500m - 1.200m (Cà phê, Mắc ca, Chè búp)
                  </span>
                  <span className="text-on-surface-variant font-medium">615 SP (28.7%)</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: "58%" }} />
                </div>
              </div>

              {/* Tier 3 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-primary font-bold">
                    Đồng bằng phù sa 0m - 500m (Lúa đặc sản, Bách nghệ)
                  </span>
                  <span className="text-on-surface-variant font-medium">780 SP (36.4%)</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary rounded-full" style={{ width: "74%" }} />
                </div>
              </div>

              {/* Tier 4 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-primary font-bold">
                    Vùng ven biển &amp; Rừng ngập mặn (Thủy sản sinh thái, Muối)
                  </span>
                  <span className="text-on-surface-variant font-medium">325 SP (15.2%)</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-amber-600 rounded-full" style={{ width: "32%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-surface-container-low rounded-lg text-xs text-on-surface-variant flex items-center gap-2 border border-surface-container/40">
            <span className="material-symbols-outlined text-secondary text-[18px]">analytics</span>
            <span>
              Nguồn: Viện Quy hoạch &amp; Dữ liệu Nông thôn Quốc gia, xử lý định vị GIS tháng 02/2026.
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Essay */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6 bg-surface-container-lowest p-6 rounded-xl border border-surface-container/60 shadow-xs">
          <div className="flex flex-col gap-3">
            <span className="text-xs text-secondary uppercase font-bold tracking-wider">
              Chuyên đề nghiên cứu địa văn hóa
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-primary">
              Đọc bản đồ OCOP: Khi thổ nhưỡng và tiểu khí hậu định hình chuỗi giá trị nông sản độc bản
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Quan sát tấm bản đồ OCOP toàn quốc không đơn thuần là đếm các chấm định vị hành chính. Đó là chuyến du hành xuyên qua các tầng trầm tích sinh thái: từ lớp mùn nguyên sinh trên dãy Hoàng Liên Sơn nuôi dưỡng cội trà Shan Tuyết cổ thụ, qua vùng đất sét sông Đáy làm nên gốm sứ truyền thống, đến thổ nhưỡng đất đỏ bazan cao nguyên Tây Nguyên hay nước lợ phù sa cửa biển Cửu Long.
            </p>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Mỗi ngôi sao OCOP gắn trên bản đồ là một lời khẳng định về chủ quyền tri thức bản địa—nơi mà công nghệ số hóa GIS đang giúp lưu giữ nguyên vẹn tọa độ của từng gốc quế Trà My, từng giàn tiêu Phú Quốc và từng lò nung thủ công trước nguy cơ mai một của thời đại công nghiệp hóa.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/vi/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
              className="inline-flex items-center gap-1.5 text-secondary hover:text-primary text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Đọc toàn văn bài luận địa lý nông nghiệp</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeospatialJournalismSection;
