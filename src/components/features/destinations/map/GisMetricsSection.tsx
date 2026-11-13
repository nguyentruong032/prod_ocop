import React from "react";

export function GisMetricsSection() {
  return (
    <section className="w-full py-12 bg-surface">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
            <span className="material-symbols-outlined text-[16px]">explore</span>
            <span>Hệ thống Địa lý Dữ liệu &amp; Phân bố Không gian Bản địa (Phase 2 GIS)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
            Bản đồ OCOP Việt Nam: Số hóa không gian văn hóa &amp; sản vật toàn quốc
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant mt-2 leading-relaxed">
            Hệ thống bản đồ tương tác trực quan tra cứu tọa độ địa lý, chỉ dẫn địa lý (GI), hệ sinh thái làng
            nghề di sản và các điểm đến trải nghiệm sản phẩm OCOP đạt sao trên toàn quốc. Nền tảng tư liệu
            địa lý nông nghiệp thuộc Cổng thông tin OCOP Việt Nam điện tử.
          </p>
        </div>

        {/* 4 Key Spatial Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-4">
          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-xl border border-surface-container/60 shadow-xs flex flex-col gap-2">
            <div className="flex items-center justify-between text-primary">
              <span className="text-xs uppercase font-medium text-outline">
                Độ phủ hành chính
              </span>
              <span className="material-symbols-outlined text-[20px] text-secondary">
                share_location
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">63 / 63</div>
            <div className="text-xs sm:text-sm text-on-surface-variant">
              Tỉnh, thành phố đã hoàn tất số hóa tọa độ GIS chuẩn
            </div>
          </div>

          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-xl border border-surface-container/60 shadow-xs flex flex-col gap-2">
            <div className="flex items-center justify-between text-primary">
              <span className="text-xs uppercase font-medium text-outline">
                Chủ thể &amp; Vùng nguyên liệu
              </span>
              <span className="material-symbols-outlined text-[20px] text-primary">hub</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">10.800+</div>
            <div className="text-xs sm:text-sm text-on-surface-variant">
              Hợp tác xã &amp; Cơ sở chế biến nông sản đạt chứng nhận OCOP
            </div>
          </div>

          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-xl border border-surface-container/60 shadow-xs flex flex-col gap-2">
            <div className="flex items-center justify-between text-primary">
              <span className="text-xs uppercase font-medium text-outline">
                Di sản bách nghệ
              </span>
              <span className="material-symbols-outlined text-[20px] text-tertiary">
                architecture
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">1.850+</div>
            <div className="text-xs sm:text-sm text-on-surface-variant">
              Tọa độ làng nghề truyền thống và dòng họ nghệ nhân kế nghiệp
            </div>
          </div>

          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-xl border border-surface-container/60 shadow-xs flex flex-col gap-2">
            <div className="flex items-center justify-between text-primary">
              <span className="text-xs uppercase font-medium text-outline">
                Điểm du lịch OCOP
              </span>
              <span className="material-symbols-outlined text-[20px] text-secondary">
                cottage
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">320+</div>
            <div className="text-xs sm:text-sm text-on-surface-variant">
              Điểm đến trải nghiệm nông thôn gắn kết chuỗi văn hóa bản địa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GisMetricsSection;
