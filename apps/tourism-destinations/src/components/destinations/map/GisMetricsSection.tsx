export function GisMetricsSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-xs max-w-4xl">
          <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            <span className="material-symbols-outlined text-[15px]">explore</span>
            <span>Hệ thống Địa lý Dữ liệu &amp; Phân bố Không gian Bản địa</span>
          </div>
          <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-primary tracking-tight">
            Bản đồ OCOP Việt Nam: Số hóa không gian văn hóa &amp; sản vật 63 tỉnh, thành
          </h1>
          <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant mt-space-xs leading-relaxed">
            Công cụ tương tác trực quan tra cứu tọa độ địa lý, chỉ dẫn địa lý, hệ sinh thái làng
            nghề và các điểm đến trải nghiệm sản phẩm OCOP đạt sao trên toàn quốc. Nền tảng tư liệu
            địa lý nông nghiệp thuộc Cổng thông tin OCOP Việt Nam điện tử.
          </p>
        </div>
        {/* 4 Key Spatial Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-space-md">
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between text-primary">
              <span className="font-label-sm text-label-sm uppercase text-outline">
                Độ phủ hành chính
              </span>
              <span className="material-symbols-outlined text-[20px] text-secondary">
                share_location
              </span>
            </div>
            <div className="font-display-hero text-headline-md text-primary font-bold">63 / 63</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              Tỉnh, thành phố đã hoàn tất số hóa tọa độ GIS chuẩn
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between text-primary">
              <span className="font-label-sm text-label-sm uppercase text-outline">
                Chủ thể &amp; Vùng nguyên liệu
              </span>
              <span className="material-symbols-outlined text-[20px] text-primary">hub</span>
            </div>
            <div className="font-display-hero text-headline-md text-primary font-bold">10.800+</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              Hợp tác xã &amp; Cơ sở chế biến nông sản đạt chứng nhận OCOP
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between text-primary">
              <span className="font-label-sm text-label-sm uppercase text-outline">
                Di sản bách nghệ
              </span>
              <span className="material-symbols-outlined text-[20px] text-tertiary-container">
                architecture
              </span>
            </div>
            <div className="font-display-hero text-headline-md text-primary font-bold">1.850+</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              Tọa độ làng nghề truyền thống và dòng họ nghệ nhân kế nghiệp
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between text-primary">
              <span className="font-label-sm text-label-sm uppercase text-outline">
                Điểm du lịch OCOP
              </span>
              <span className="material-symbols-outlined text-[20px] text-secondary">
                cottage
              </span>
            </div>
            <div className="font-display-hero text-headline-md text-primary font-bold">320+</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">
              Điểm đến trải nghiệm nông thôn gắn kết chuỗi văn hóa bản địa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
