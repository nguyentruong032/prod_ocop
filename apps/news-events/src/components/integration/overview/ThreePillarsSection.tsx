import Link from 'next/link';

export function ThreePillarsSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-lg">
        <div className="text-center max-w-3xl mx-auto space-y-space-xs">
          <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-widest">
            Trọng Tâm Hành Động
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Ba Trụ Cột Đột Phá Hội Nhập OCOP Toàn Cầu
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Hệ thống hóa kiến thức thể chế, tiêu chuẩn kỹ thuật thực hành và công nghệ phân phối xuyên biên giới cho
            các chủ thể nông thôn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Pillar Card 1 */}
          <div className="bg-surface-container-lowest rounded p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-14 h-14 rounded bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">travel_explore</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                  Trụ Cột 01
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  Xuất khẩu &amp; Thị trường Quốc tế
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Khai thác chuyên sâu các cam kết ưu đãi thuế quan từ EVFTA, CPTPP, RCEP; xây dựng mạng lưới Thương vụ
                Việt Nam hỗ trợ đưa hàng OCOP vào kệ đại siêu thị Metro, AEON, Costco.
              </p>
              <ul className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">arrow_right</span>
                  <span>Cẩm nang thị trường EU &amp; Bắc Mỹ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">arrow_right</span>
                  <span>Chiến lược nông sản Halal Trung Đông</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">arrow_right</span>
                  <span>Xúc tiến thương mại song phương</span>
                </li>
              </ul>
            </div>
            <div className="pt-space-lg">
              <Link
                className="w-full py-space-sm rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-colors"
                href="/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te"
              >
                <span>Khám phá tài liệu thị trường</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </Link>
            </div>
          </div>

          {/* Pillar Card 2 */}
          <div className="bg-surface-container-lowest rounded p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-14 h-14 rounded bg-secondary text-on-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">verified_user</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                  Trụ Cột 02
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  Tiêu chuẩn &amp; Chứng nhận Quốc tế
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Bộ công cụ hướng dẫn chuyển đổi quy trình canh tác và chế biến theo các bộ chuẩn: Hữu cơ USDA/EU,
                GlobalG.A.P, Fairtrade, tiêu chuẩn an toàn thực phẩm HACCP, ISO 22000.
              </p>
              <ul className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">arrow_right</span>
                  <span>Quy trình chuyển đổi canh tác hữu cơ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">arrow_right</span>
                  <span>Bộ tiêu chí kiểm soát dư lượng EU MRLs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">arrow_right</span>
                  <span>Hồ sơ năng lực kiểm toán xã hội SMETA</span>
                </li>
              </ul>
            </div>
            <div className="pt-space-lg">
              <Link
                className="w-full py-space-sm rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-colors"
                href="/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te"
              >
                <span>Tra cứu bộ tiêu chuẩn kiểm định</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </Link>
            </div>
          </div>

          {/* Pillar Card 3 */}
          <div className="bg-surface-container-lowest rounded p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-14 h-14 rounded bg-tertiary-container text-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">cloud_sync</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                  Trụ Cột 03
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  Chuyển đổi số &amp; B2B Xuyên biên giới
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Ứng dụng tem định danh điện tử, nền tảng truy xuất nguồn gốc nông sản Blockchain, thúc đẩy gian hàng
                quốc gia OCOP trên sàn thương mại điện tử quốc tế Amazon, Alibaba.
              </p>
              <ul className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">arrow_right</span>
                  <span>Tài khoản doanh nghiệp Amazon Global Selling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">arrow_right</span>
                  <span>Dữ liệu số hóa vùng nguyên liệu GIS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">arrow_right</span>
                  <span>Hợp đồng thông minh &amp; Thanh toán quốc tế</span>
                </li>
              </ul>
            </div>
            <div className="pt-space-lg">
              <Link
                className="w-full py-space-sm rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-colors"
                href="/ocop-hoi-nhap/chuyen-doi-so-OCOP"
              >
                <span>Tiếp cận cẩm nang số hóa</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
