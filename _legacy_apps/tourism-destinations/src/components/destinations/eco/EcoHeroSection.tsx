export function EcoHeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-surface-container-low via-surface to-surface py-space-xl">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
          <div className="max-w-4xl flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 text-primary w-fit font-label-md text-label-md uppercase tracking-wider">
              <span className="material-symbols-outlined text-[14px]">nature_people</span>
              <span>Nông thôn mở cửa &amp; Du lịch trải nghiệm bền vững</span>
            </div>
            <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-primary tracking-tight">
              Chạm vào thiên nhiên, sống giữa miệt vườn và bản làng sinh thái
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant leading-relaxed">
              Khám phá các tuyến du lịch nông thôn gắn liền với vùng nguyên liệu OCOP sạch, mô hình
              nông nghiệp tuần hoàn và văn hóa cộng đồng bản địa từ Mù Cang Chải đến miệt vườn sông
              nước Cửu Long.
            </p>
          </div>
          <div className="flex items-center gap-space-sm self-start lg:self-end">
            <button className="px-space-lg py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">travel_explore</span>
              <span>Tra cứu lộ trình</span>
            </button>
            <button className="px-space-lg py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
              <span>Tải bản đồ số</span>
            </button>
          </div>
        </div>

        {/* Numeric Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
          <div className="flex items-start gap-space-md p-space-sm">
            <div className="w-12 h-12 rounded-lg bg-primary-container text-tertiary-fixed-dim flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">holiday_village</span>
            </div>
            <div className="flex flex-col">
              <div className="font-display-hero text-headline-md text-primary font-bold">320+</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">
                Điểm du lịch cộng đồng &amp; nông thôn đạt chuẩn phân hạng OCOP
              </div>
            </div>
          </div>
          <div className="flex items-start gap-space-md p-space-sm">
            <div className="w-12 h-12 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">route</span>
            </div>
            <div className="flex flex-col">
              <div className="font-display-hero text-headline-md text-secondary font-bold">85+</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">
                Tuyến hành trình du lịch sinh thái trải nghiệm xanh liên vùng
              </div>
            </div>
          </div>
          <div className="flex items-start gap-space-md p-space-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">recycling</span>
            </div>
            <div className="flex flex-col">
              <div className="font-display-hero text-headline-md text-primary font-bold">100%</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">
                Điểm đến cam kết nông nghiệp tuần hoàn, giữ gìn cảnh quan tự nhiên
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
