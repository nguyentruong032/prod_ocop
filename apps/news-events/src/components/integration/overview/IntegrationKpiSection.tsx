export function IntegrationKpiSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end mb-space-xl">
          <div className="lg:col-span-8 space-y-space-sm">
            <span className="px-space-sm py-1 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm uppercase tracking-widest inline-block">
              Báo chí Dữ liệu Chuyên sâu
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary leading-tight">
              Nâng tầm Vị thế Nông sản &amp; Tinh hoa Bản địa trên Bản đồ Thương mại Toàn cầu
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant max-w-3xl">
              Tổng quan thực địa, bộ chỉ số lưu chuyển thương mại tự do (FTA) và lộ trình số hóa chuỗi giá trị cho hơn
              11.000 sản phẩm OCOP từ thôn bản bước ra thị trường đa quốc gia.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end gap-space-sm">
            <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex items-center gap-space-md">
              <div className="w-12 h-12 rounded bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[26px]">download</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Báo cáo Thường niên 2025–2026
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Bản đầy đủ PDF (48MB) • 182 trang
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data KPI Bar (4 Economic Indicators) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* KPI 1 */}
          <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Thị trường Đích
              </span>
              <span className="material-symbols-outlined text-primary text-[22px]">language</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              48+
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Quốc gia &amp; vùng lãnh thổ nhập khẩu chính ngạch sản phẩm OCOP
            </p>
            <div className="mt-space-sm pt-space-xs flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                trending_up
              </span>
              <span className="text-secondary font-semibold">+11 thị trường mới</span> trong 18 tháng
            </div>
          </div>

          {/* KPI 2 */}
          <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Chuỗi Cung ứng Số
              </span>
              <span className="material-symbols-outlined text-secondary text-[22px]">
                qr_code_scanner
              </span>
            </div>
            <div className="font-headline-lg text-headline-lg text-secondary tracking-tight font-bold">
              1.250+
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Doanh nghiệp &amp; HTX OCOP được số hóa truy xuất mã vùng trồng
            </p>
            <div className="mt-space-sm pt-space-xs flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
              <span>Mã định danh GS1 toàn cầu</span>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-container" />
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Tăng Trưởng Xuất Khẩu
              </span>
              <span className="material-symbols-outlined text-primary-container text-[22px]">
                query_stats
              </span>
            </div>
            <div className="font-headline-lg text-headline-lg text-primary-container tracking-tight font-bold">
              +28.4%
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Tăng trưởng kim ngạch xuất khẩu OCOP giai đoạn 2024–2026
            </p>
            <div className="mt-space-sm pt-space-xs flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-secondary text-[16px]">insights</span>
              <span>Đạt mốc 2.14 tỷ USD ước tính</span>
            </div>
          </div>

          {/* KPI 4 */}
          <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-tertiary" />
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Hiệp định Tự do
              </span>
              <span className="material-symbols-outlined text-tertiary text-[22px]">handshake</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-tertiary tracking-tight font-bold">
              18+
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Hiệp định Thương mại Tự do (FTA) đang được khai thác ưu đãi thuế quan
            </p>
            <div className="mt-space-sm pt-space-xs flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-primary text-[16px]">
                account_balance
              </span>
              <span>EVFTA, CPTPP, RCEP, UKVFTA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
