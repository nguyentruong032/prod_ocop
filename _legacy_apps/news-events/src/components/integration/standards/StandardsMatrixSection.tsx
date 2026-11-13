import React from 'react';

export function StandardsMatrixSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-xl">
        <div className="max-w-3xl space-y-space-xs">
          <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider">
            HỆ THỐNG QUY CHUẨN THÔNG HÀNH
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Ma Trận Tiêu Chuẩn Quốc Tế Cho Từng Nhóm Sản Phẩm OCOP
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Mỗi thị trường mục tiêu đòi hỏi một bộ &quot;hộ chiếu chất lượng&quot; riêng biệt. Đây là ma trận 5 nhóm chuẩn mực
            cốt lõi mà các chủ thể OCOP 4 sao và 5 sao bắt buộc phải nắm vững trước khi đàm phán hợp đồng thương mại
            quốc tế.
          </p>
        </div>
        {/* 5 Standards Cards in Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* Thẻ 1: Canh tác Nông nghiệp Tốt */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between space-y-space-md group hover:shadow-xl transition-all">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[28px]">agriculture</span>
                </span>
                <span className="px-space-sm py-0.5 rounded bg-primary-fixed-dim/30 text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                  NÔNG SẢN TƯƠI
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Thực Hành Nông Nghiệp Tốt (GlobalG.A.P &amp; VietGAP nâng cao)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Quy chuẩn về an toàn sinh học vùng trồng, bảo vệ người lao động, truy xuất nguồn gốc từ giống, phân bón
                và nguồn nước ngầm.
              </p>
              <div className="space-y-space-xs pt-space-xs">
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                  <span>Thị trường ưu tiên:</span>
                  <span className="font-semibold text-primary">EU, Úc, Nhật Bản, Bắc Mỹ</span>
                </div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                  <span>Thời hạn hiệu lực:</span>
                  <span className="text-on-surface-variant">Tái đánh giá hàng năm (12 tháng)</span>
                </div>
              </div>
            </div>
            <div className="pt-space-sm">
              <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary group-hover:translate-x-1 transition-transform">
                Xem quy định kiểm toán điểm trồng <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Thẻ 2: Hữu cơ Quốc tế */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between space-y-space-md group hover:shadow-xl transition-all">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[28px]">nature</span>
                </span>
                <span className="px-space-sm py-0.5 rounded bg-tertiary-fixed/60 text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                  KHÔNG HÓA CHẤT
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Chứng Nhận Hữu Cơ Quốc Tế (USDA Organic, EU, JAS Organic)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tuyệt đối không sử dụng thuốc diệt cỏ, phân bón hóa học, hạt giống biến đổi gen (Non-GMO) và bức xạ ion
                hóa trong chu trình 3 năm chuyển đổi đất.
              </p>
              <div className="space-y-space-xs pt-space-xs">
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                  <span>Thị trường ưu tiên:</span>
                  <span className="font-semibold text-primary">Hoa Kỳ, EU, Nhật Bản, Thụy Sĩ</span>
                </div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                  <span>Giai đoạn chuyển đổi:</span>
                  <span className="text-on-surface-variant">24 - 36 tháng lấy mẫu đất</span>
                </div>
              </div>
            </div>
            <div className="pt-space-sm">
              <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary group-hover:translate-x-1 transition-transform">
                Danh mục hoạt chất cấm tuyệt đối <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Thẻ 3: Quản lý An toàn Thực phẩm Nhà xưởng */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between space-y-space-md group hover:shadow-xl transition-all">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[28px]">factory</span>
                </span>
                <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                  CHẾ BIẾN SÂU
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                An Toàn Nhà Xưởng Chế Biến (HACCP, ISO 22000, BRCGS, FSSC)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Phân tích mối nguy và điểm kiểm soát tới hạn (CCP). Đảm bảo dây chuyền chiết rót, sấy khô, đóng gói tuân
                thủ phòng sạch và vệ sinh công nghiệp.
              </p>
              <div className="space-y-space-xs pt-space-xs">
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                  <span>Thị trường ưu tiên:</span>
                  <span className="font-semibold text-primary">Toàn cầu &amp; Kênh siêu thị lớn</span>
                </div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                  <span>Yêu cầu trọng yếu:</span>
                  <span className="text-on-surface-variant">Kiểm soát CCP &amp; Hồ sơ lô mẻ</span>
                </div>
              </div>
            </div>
            <div className="pt-space-sm">
              <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary group-hover:translate-x-1 transition-transform">
                Sơ đồ luồng di chuyển vô trùng <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Thẻ 4: Tiêu chuẩn Văn hóa & Xã hội */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between space-y-space-md group hover:shadow-xl transition-all">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[28px]">mosque</span>
                </span>
                <span className="px-space-sm py-0.5 rounded bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                  ĐA DẠNG TÍN NGƯỠNG
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Văn Hóa &amp; Tôn Giáo (Chứng Nhận Halal, Kosher, Fairtrade)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Không chứa cồn, dẫn xuất từ lợn; đảm bảo chuỗi cung ứng minh bạch không bóc lột sức lao động, bảo vệ giá
                thu mua tối thiểu cho nông dân nhỏ.
              </p>
              <div className="space-y-space-xs pt-space-xs">
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                  <span>Thị trường ưu tiên:</span>
                  <span className="font-semibold text-primary">Trung Đông, Malaysia, Indonesia, Israel</span>
                </div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                  <span>Cơ quan cấp phép:</span>
                  <span className="text-on-surface-variant">JAKIM, MUI, Halal Center VN</span>
                </div>
              </div>
            </div>
            <div className="pt-space-sm">
              <span className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary group-hover:translate-x-1 transition-transform">
                Quy tắc chứng nhận Halal OCOP <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Thẻ 5: Tiêu chuẩn Môi trường & Bền vững (Spanning 2 columns on lg) */}
          <div className="lg:col-span-2 p-space-lg rounded-xl bg-gradient-to-br from-primary-container to-primary text-on-primary shadow-lg flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="w-12 h-12 rounded-lg bg-surface-container-lowest/15 flex items-center justify-center text-primary-fixed">
                    <span className="material-symbols-outlined text-[28px]">forest</span>
                  </span>
                  <div>
                    <span className="px-space-sm py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                      QUY ĐỊNH MỚI 2025 - 2026
                    </span>
                    <div className="font-headline-sm text-headline-sm text-on-primary mt-space-xs">
                      Trách Nhiệm Sinh Thái (Chứng Chỉ Rừng FSC, EUDR &amp; Dấu Chân Carbon)
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                Theo quy định EUDR mới nhất, các sản phẩm cà phê, cao su, gỗ, quế, hồi OCOP xuất sang Liên minh Châu Âu
                phải chứng minh tọa độ địa lý (GPS Polygon) của từng thửa đất canh tác không gây mất rừng sau ngày
                31/12/2020. Đồng thời tính toán lượng phát thải khí nhà kính (Scope 1, 2, 3) trên từng đơn vị bao bì.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
                <div className="p-space-sm rounded-lg bg-primary/40">
                  <div className="font-label-md text-label-md text-primary-fixed-dim">Dữ liệu Geolocation</div>
                  <div className="font-body-sm text-body-sm text-on-primary">Định vị vệ tinh thửa đất nông hộ</div>
                </div>
                <div className="p-space-sm rounded-lg bg-primary/40">
                  <div className="font-label-md text-label-md text-primary-fixed-dim">Rừng Tự Nhiên</div>
                  <div className="font-body-sm text-body-sm text-on-primary">100% không chuyển đổi rừng sau 2020</div>
                </div>
                <div className="p-space-sm rounded-lg bg-primary/40">
                  <div className="font-label-md text-label-md text-primary-fixed-dim">Chứng chỉ FSC / PEFC</div>
                  <div className="font-body-sm text-body-sm text-on-primary">Áp dụng cho dược liệu tán rừng</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-space-sm">
              <span className="font-label-sm text-label-sm text-primary-fixed-dim italic">
                Bắt buộc đối với nhóm Cà phê &amp; Quế hồi xuất khẩu sang EU
              </span>
              <a
                className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-bright transition-colors inline-flex items-center gap-space-xs"
                href="#"
              >
                Tải Cẩm nang số hóa tọa độ EUDR <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
