export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-surface-container-low via-surface to-surface-container-lowest py-space-xl lg:py-16">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 flex flex-col">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-tertiary-container" />
              <span className="font-label-md text-label-md uppercase tracking-widest text-tertiary-container font-bold">
                KHO TÀNG TRI THỨC DÂN GIAN & DI SẢN SỐNG
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-6">
              Hồn đất, tình người và những bí quyết nghìn năm trao truyền
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant max-w-3xl">
              Mỗi sản phẩm OCOP không đơn thuần là vật phẩm tiêu dùng, mà là kết tinh văn hóa ngàn năm, đúc kết từ tri thức dân gian, sự giao hòa thiêng liêng giữa con người và thổ nhưỡng của non sông đất Việt.
            </p>
          </div>
          {/* Archival Stats Module */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-5">
            <div className="flex items-center justify-between pb-3">
              <span className="font-label-md text-label-md text-primary uppercase font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
                Dữ liệu di sản điền dã
              </span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                Cập nhật 2026
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">diversity_3</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary leading-tight">54</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Dân tộc anh em với bản sắc sản vật độc bản
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">cottage</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary leading-tight">1.850+</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Làng nghề truyền thống & tri thức dân gian
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">psychology_alt</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary leading-tight">320+</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Bí quyết canh tác & chế biến cổ truyền
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
