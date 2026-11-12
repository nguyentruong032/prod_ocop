export function HeroSection() {
  return (
    <section className="w-full bg-surface-bright py-12 lg:py-16">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container" />
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary-container font-bold">
                Báo chí đa phương tiện & Thước phim tư liệu 4K
              </span>
            </div>
            <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-primary tracking-tight leading-tight">
              Lắng nghe hơi thở xứ sở qua âm thanh và hình ảnh sống động
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant max-w-3xl pt-2">
              Trải nghiệm chân thực từ nương chè Tây Bắc ngút ngàn sương trắng đến miệt vườn sông nước Cửu Long trĩu quả phù sa. Toàn bộ tư liệu được ghi nhận qua chuỗi phim tài liệu độc bản, podcast ký sự điền dã và các chuyên đề phóng sự ảnh tương tác (Photo Essay).
            </p>
          </div>
          {/* Thống kê Multimedia Panel */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between border-b border-surface-container pb-3">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Kho dữ liệu số
              </span>
              <span className="inline-flex items-center gap-1 text-primary text-body-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified_user</span> Chuẩn lưu trữ quốc gia
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-bold text-primary">180+</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 leading-snug">
                  Ký sự 4K & Phim tư liệu
                </span>
              </div>
              <div className="flex flex-col border-l border-surface-container pl-3">
                <span className="font-headline-md text-headline-md font-bold text-secondary">95</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 leading-snug">
                  Tập Podcast Điền dã
                </span>
              </div>
              <div className="flex flex-col border-l border-surface-container pl-3">
                <span className="font-headline-md text-headline-md font-bold text-tertiary-container">350+</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 leading-snug">
                  Bộ ảnh Phóng sự độc quyền
                </span>
              </div>
            </div>
            <div className="bg-surface-container-low px-3 py-2 rounded-lg flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-secondary text-[20px]">graphic_eq</span>
              <span>Âm thanh chất lượng cao 96kHz Lossless & Hình ảnh HDR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
