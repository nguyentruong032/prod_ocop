import React from 'react';

export const DuocLieuHeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-surface-container-low overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#1F4D3A_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin pt-12 pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-fixed/40 text-on-primary-fixed-variant self-start">
              <span className="material-symbols-outlined text-[16px]">eco</span>
              <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                Kho báu dược liệu bản địa &amp; y học cổ truyền
              </span>
            </div>
            <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-primary tracking-tight font-bold">
              Dược liệu &amp; Sản phẩm Sức khỏe OCOP
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant max-w-3xl leading-relaxed">
              Cơ sở dữ liệu các bài thuốc dân gian, cây dược liệu quý dưới tán rừng đại ngàn, tinh dầu thảo mộc và sản phẩm chăm sóc sức khỏe thuần tự nhiên đạt chuẩn OCOP quốc gia.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary hover:bg-[#132E22] text-on-primary font-label-md text-label-md uppercase tracking-wider transition-all shadow-md"
                href="#khoi-tra-cuu"
              >
                <span className="material-symbols-outlined text-[18px]">search</span>
                <span>Tra cứu vùng dược liệu</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-surface-container-lowest border border-outline-variant hover:border-primary text-primary font-label-md text-label-md uppercase tracking-wider transition-all"
                href="#quoc-bao-nam-duoc"
              >
                <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                <span>Quốc bảo Nam dược</span>
              </a>
            </div>
          </div>
          {/* Metric Badges Box */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-5">
              <div className="flex items-center gap-4 pb-4 border-b border-[#E2DBD0]/60">
                <div className="w-12 h-12 rounded-lg bg-primary-fixed/50 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[28px]">medication</span>
                </div>
                <div>
                  <div className="font-display-hero text-headline-sm font-bold text-primary">1.340+</div>
                  <div className="font-body-sm text-body-sm text-outline">Sản phẩm Dược liệu chuẩn hóa</div>
                </div>
              </div>
              <div className="flex items-center gap-4 pb-4 border-b border-[#E2DBD0]/60">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed/50 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[28px]">spa</span>
                </div>
                <div>
                  <div className="font-display-hero text-headline-sm font-bold text-secondary">450+</div>
                  <div className="font-body-sm text-body-sm text-outline">Vùng trồng quy chuẩn GACP-WHO</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed/60 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#372200] text-[28px]">nature</span>
                </div>
                <div>
                  <div className="font-display-hero text-headline-sm font-bold text-primary">85 Đơn vị</div>
                  <div className="font-body-sm text-body-sm text-outline">Bảo tồn nguồn gen quý đại ngàn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
