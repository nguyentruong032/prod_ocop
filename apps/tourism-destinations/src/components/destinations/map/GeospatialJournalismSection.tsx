export function GeospatialJournalismSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Data Visualization (Bar & Altitude Chart) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
              Trắc đồ phân bố địa sinh thái
            </span>
            <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
              Mật độ sản phẩm OCOP 4–5 sao theo độ cao địa hình (Việt Nam 2026)
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Khảo sát 2.140 sản phẩm đạt chuẩn quốc gia và cấp tỉnh phân bổ từ vùng ven biển đến rẻo cao trên 1.500m.
            </p>
          </div>
          {/* Inline SVG Data Chart */}
          <div className="w-full py-space-md">
            <div className="flex flex-col gap-space-sm">
              {/* Tier 1 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="text-primary font-bold">
                    Vùng cao &gt; 1.200m (Dược liệu, Trà cổ thụ Shan tuyết)
                  </span>
                  <span className="text-on-surface-variant">420 SP (19.6%)</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '38%' }} />
                </div>
              </div>
              {/* Tier 2 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="text-primary font-bold">
                    Vùng đồi gò 500m - 1.200m (Cà phê, Mắc ca, Chè búp)
                  </span>
                  <span className="text-on-surface-variant">615 SP (28.7%)</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '58%' }} />
                </div>
              </div>
              {/* Tier 3 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="text-primary font-bold">
                    Đồng bằng phù sa 0m - 500m (Lúa đặc sản, Bách nghệ)
                  </span>
                  <span className="text-on-surface-variant">780 SP (36.4%)</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary-container rounded-full" style={{ width: '74%' }} />
                </div>
              </div>
              {/* Tier 4 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="text-primary font-bold">
                    Vùng ven biển &amp; Rừng ngập mặn (Thủy sản sinh thái, Muối)
                  </span>
                  <span className="text-on-surface-variant">325 SP (15.2%)</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-surface-tint rounded-full" style={{ width: '32%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-space-sm bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[20px]">analytics</span>
            <span>
              Nguồn: Viện Quy hoạch &amp; Dữ liệu Nông thôn Quốc gia, xử lý định vị GIS tháng 02/2026.
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Essay */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
              Chuyên đề nghiên cứu địa văn hóa
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Đọc bản đồ OCOP: Khi thổ nhưỡng và tiểu khí hậu định hình chuỗi giá trị nông sản độc bản
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Quan sát tấm bản đồ OCOP toàn quốc không đơn thuần là đếm các chấm định vị hành chính. Đó là chuyến du hành xuyên qua các tầng trầm tích sinh thái: từ lớp mùn nguyên sinh trên dãy Hoàng Liên Sơn nuôi dưỡng cội trà Shan Tuyết cổ thụ, qua vùng đất sét sông Đáy làm nên gốm sứ truyền thống, đến thổ nhưỡng đất đỏ bazan bazơ cao nguyên Tây Nguyên hay nước lợ phù sa cửa biển Cửu Long.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Mỗi ngôi sao OCOP gắn trên bản đồ là một lời khẳng định về chủ quyền tri thức bản địa—nơi mà công nghệ số hóa GIS đang giúp lưu giữ nguyên vẹn tọa độ của từng gốc quế Trà My, từng giàn tiêu Phú Quốc và từng lò nung thủ công trước nguy cơ mai một của thời đại công nghiệp hóa.
            </p>
          </div>
          <div className="pt-space-xs">
            <a
              className="inline-flex items-center gap-space-xs text-secondary hover:text-on-secondary-container font-label-md text-label-md font-bold uppercase tracking-wider"
              href="#"
            >
              <span>Đọc toàn văn bài luận địa lý nông nghiệp</span>
              <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
