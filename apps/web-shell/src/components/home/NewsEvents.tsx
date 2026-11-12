'use client';

import { useState } from 'react';

export function NewsEvents() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Tất cả thông tin' },
    { id: 1, label: 'Chính sách & Cơ chế' },
    { id: 2, label: 'Hoạt động - Xúc tiến thương mại' },
    { id: 3, label: 'OCOP Địa phương' },
  ];

  return (
    <section className="w-full bg-[#f8f5ee] py-16" data-render="section-header" data-content-key="khoi-04-tin-tuc">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-bold" data-field="label">
              CHUYÊN MỤC 01
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-primary mt-1" data-field="title">
              Nhịp đập chính sách và chuyển động OCOP toàn quốc.
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap mt-6" data-render="filter-tabs" data-page="tin-tuc-su-kien">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-full font-label-sm text-label-sm font-medium shadow-xs transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <article
            className="lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
            data-collection="stories" data-slug="giu-lua-nghe-sao-che-tan-cuong"
            data-content-key="giu-lua-nghe-sao-che-tan-cuong"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="National assembly conference hall discussing green agricultural policies and rural cooperative development in Vietnam, formal plenary session ambiance, deep green and amber indoor architectural lighting"
                data-img-src="image"
                data-img-alt="headline"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjWJD-yF4gcEoWQLa8ke94KI2E8FHei_Fsf8eo7AksYdXfDTOiXx8qM_RiozjYR4ci9khAUUTeadCKA3Svk3iMKQckQXowmEXPa-7LfXpS-PrTJVJFBryg94tPAerZSJ4Wnc1-nzDWOsWWH9h7hrh7vTmloq6CkQ1G4LSzPpTd08Qg9bp6R47OshHUKbge7Sd73cmXyEmMseiv5swOKkeL2m9oSn3IUzRMvT0STK8"
                alt="Nghị quyết mới về gói tín dụng xanh"
               loading="lazy" decoding="async"/>
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold tracking-wider uppercase" data-field="category">
                CHÍNH SÁCH BÁO TỰ
              </span>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-3 font-label-sm text-label-sm text-on-surface-variant">
                  <span data-field="publishedDate">24/10/2026</span>
                  <span>•</span>
                  <span>6 phút đọc</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial md:text-headline-sm md:leading-snug font-bold text-primary mt-3 group-hover:text-secondary transition-colors" data-field="headline">
                  Nghị quyết mới về gói tín dụng xanh và cơ chế hỗ trợ chủ thể OCOP giai đoạn 2026–2030
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 line-clamp-3" data-field="excerpt">
                  Quy hoạch tài chính đồng bộ tập trung ưu tiên liên kết hợp tác xã vùng sâu, chuẩn hóa vùng dược liệu
                  bền vững và bảo trợ bảo tồn nghề truyền thống.
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-surface-container">
                <span className="font-body-sm text-body-sm text-on-surface-variant font-medium" data-field="author">Văn
                  phòng Điều phối Nông thôn mới TW</span>
                <span className="font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Xem toàn văn <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </article>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <article
              className="bg-surface-container-lowest p-5 rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              data-collection="stories" data-slug="khao-vong-lua-seg" data-content-key="khao-vong-lua-seg"
            >
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-medium uppercase tracking-wide" data-field="category">
                  Hoạt động - Xúc tiến thương mại · 20/10/2026
                </span>
                <h4 className="font-title-editorial text-title-editorial font-bold text-primary mt-1.5 group-hover:text-secondary transition-colors" data-field="headline">
                  Hơn 200 chủ thể tham gia tuần lễ sản phẩm OCOP tại Hà Nội
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2" data-field="desc">
                  Không gian quảng bá hội tụ nông sản tinh hoa và sản phẩm thủ công mỹ nghệ của các tỉnh miền núi phía
                  Bắc.
                </p>
              </div>
              <div className="pt-3 mt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span data-field="location">Hà Nội</span>
                <span className="text-primary font-medium flex items-center gap-0.5" data-href="slug">Chi tiết <span className="material-symbols-outlined text-[14px]">chevron_right</span></span>
              </div>
            </article>
            <article
              className="bg-surface-container-lowest p-5 rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              data-collection="stories" data-slug="det-tho-cam-cham" data-content-key="det-tho-cam-cham"
            >
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-medium uppercase tracking-wide" data-field="category">
                  Chính sách & Cơ chế · 19/10/2026
                </span>
                <h4 className="font-title-editorial text-title-editorial font-bold text-primary mt-1.5 group-hover:text-secondary transition-colors" data-field="headline">
                  Định hướng chuẩn hóa chuỗi giá trị phát triển OCOP gắn với tiêu chuẩn Net Zero
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2" data-field="desc">
                  Thúc đẩy sản xuất hữu cơ khép kín, ứng dụng bao bì thân thiện môi trường cho các nhóm ngành hàng đặc
                  sản.
                </p>
              </div>
              <div className="pt-3 mt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span data-field="location">Diễn đàn Nông nghiệp</span>
                <span className="text-primary font-medium flex items-center gap-0.5" data-href="slug">Chi tiết <span className="material-symbols-outlined text-[14px]">chevron_right</span></span>
              </div>
            </article>
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed/30 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-semibold tracking-wide" data-field="status">
                    Sắp diễn ra
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold" data-field="startDate">15–18/11/2026</span>
                </div>
                <h4 className="font-title-editorial text-title-editorial font-bold text-primary mt-2" data-field="headline">
                  Hội chợ giới thiệu sản phẩm OCOP và đặc sản vùng miền 2026
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[16px]">location_on</span>
                  <span data-field="location">Địa điểm: TP. Cần Thơ</span>
                </p>
              </div>
              <div className="mt-4 pt-3 flex justify-end">
                <a className="px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold transition-colors"
                  href="/tin-tuc-su-kien/index.html" data-href="slug">
                  Chi tiết sự kiện
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-primary text-primary hover:text-on-primary font-label-md text-label-md font-medium shadow-xs transition-all"
            href="/tin-tuc-su-kien/su-kien/hoi-cho-gioi-thieu-san-pham-ocop-va-dac-san-vung-mien-2026/index.html">
            <span>Xem thêm tin tức & sự kiện</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}