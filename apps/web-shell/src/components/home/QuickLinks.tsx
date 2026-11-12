'use client';

export function QuickLinks() {
  return (
    <section className="w-full bg-surface-container-lowest py-16" data-render="section-header" data-content-key="khoi-03-cua-ngo">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10">
          <div>
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold" data-field="label">
              Cửa ngõ tư liệu số
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-primary mt-1" data-field="title">
              Khám phá hệ sinh thái OCOP Việt Nam.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl" data-field="description">
              Tra cứu nhanh theo dòng sản phẩm đặc trưng, câu chuyện chủ thể và bản đồ điểm đến văn hóa trên cả nước.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant/80">
            <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
            <span data-field="badge">Dữ liệu xác thực cấp Quốc gia</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-render="quick-links">
          <a className="group bg-surface rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all"
            data-render="quick-link" href="#khoi-05-san-pham" data-href="href">
            <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary mb-4 group-hover:scale-105 transition-transform" data-field="iconBg">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }} data-field="icon">workspace_premium</span>
            </div>
            <h3 className="font-title-editorial text-title-editorial font-bold text-primary group-hover:text-secondary transition-colors" data-field="label">
              Sản phẩm (3–5 Sao)
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2" data-field="desc">
              Hệ thống chuẩn hóa phân hạng chất lượng và bảo chứng nguồn gốc địa lý quốc gia.
            </p>
          </a>
          <a className="group bg-surface rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all"
            data-render="quick-link" href="#khoi-05-san-pham" data-href="href">
            <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform" data-field="iconBg">
              <span className="material-symbols-outlined text-[28px]" data-field="icon">eco</span>
            </div>
            <h3 className="font-title-editorial text-title-editorial font-bold text-primary group-hover:text-secondary transition-colors" data-field="label">
              Dược liệu & Sức khỏe
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2" data-field="desc">
              Tinh hoa cây thuốc quý bản địa, tri thức chữa bệnh dân gian các vùng đồng bào.
            </p>
          </a>
          <a className="group bg-surface rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all"
            data-render="quick-link" href="#khoi-07-diem-den" data-href="href">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary mb-4 group-hover:scale-105 transition-transform" data-field="iconBg">
              <span className="material-symbols-outlined text-[28px]" data-field="icon">holiday_village</span>
            </div>
            <h3 className="font-title-editorial text-title-editorial font-bold text-primary group-hover:text-secondary transition-colors" data-field="label">
              Làng nghề & Du lịch
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2" data-field="desc">
              Không gian trải nghiệm sinh thái, tuyến tham quan di sản thủ công và cảnh quan.
            </p>
          </a>
          <a className="group bg-surface rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all"
            data-render="quick-link" href="#khoi-09-toa-soan" data-href="href">
            <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface mb-4 group-hover:scale-105 transition-transform" data-field="iconBg">
              <span className="material-symbols-outlined text-[28px]" data-field="icon">diversity_3</span>
            </div>
            <h3 className="font-title-editorial text-title-editorial font-bold text-primary group-hover:text-secondary transition-colors" data-field="label">
              Chủ thể OCOP
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2" data-field="desc">
              Mạng lưới hợp tác xã, doanh nghiệp cộng đồng và các nghệ nhân tài hoa giữ nghề.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}