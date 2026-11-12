import React from 'react';

export function ComplianceRoadmapSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="max-w-2xl space-y-space-xs">
            <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider">
              LỘ TRÌNH THỰC THI CHUẨN HÓA
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              6 Giai Đoạn Vượt Qua Kỳ Đánh Giá Độc Lập
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Phương pháp luận đúc kết từ 320 hợp tác xã điểm, giúp các chủ thể OCOP tối ưu hóa chi phí và rút ngắn thời
              gian chuẩn bị hồ sơ từ 18 tháng xuống còn 6-9 tháng.
            </p>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
            Được bảo trợ bởi Hội đồng Khoa học OCOP
          </div>
        </div>
        {/* 6-Step Chronological Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* Bước 1 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="font-display-hero text-headline-md font-bold text-outline-variant group-hover:text-primary transition-colors">
                01
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                Tháng 1 - 2
              </span>
            </div>
            <h3 className="font-title-editorial text-title-editorial text-primary">Khảo sát &amp; Phân tích Nền Đất - Nước</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Lấy mẫu thổ nhưỡng và nguồn nước ngầm tại 100% diện tích dự kiến chứng nhận. Gửi mẫu về phòng kiểm định đo
              lường hàm lượng Asen, Chì, Thủy ngân và tàn dư thuốc trừ cỏ gốc Clo hữu cơ.
            </p>
            <div className="pt-space-xs text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">checklist</span> Hồ sơ mẫu phân tích mẫu A/B
            </div>
          </div>

          {/* Bước 2 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="font-display-hero text-headline-md font-bold text-outline-variant group-hover:text-primary transition-colors">
                02
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                Tháng 3 - 4
              </span>
            </div>
            <h3 className="font-title-editorial text-title-editorial text-primary">Chuẩn Hóa Quy Trình SOP Canh Tác</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Biên soạn Quy trình Thao tác Chuẩn (SOP) bằng ngôn ngữ bình dị cho từng hộ thành viên. Thành lập vùng đệm
              bảo vệ (Buffer Zone) tối thiểu 50-100m ngăn ô nhiễm chéo từ các hộ lân cận.
            </p>
            <div className="pt-space-xs text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">checklist</span> Bản đồ cắm mốc ranh giới
            </div>
          </div>

          {/* Bước 3 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="font-display-hero text-headline-md font-bold text-outline-variant group-hover:text-primary transition-colors">
                03
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                Tháng 4 - 5
              </span>
            </div>
            <h3 className="font-title-editorial text-title-editorial text-primary">Đào Tạo &amp; Số Hóa Nhật Ký Nông Hộ</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Thay thế sổ tay ghi chép giấy bằng ứng dụng nhật ký điện tử. Nông dân quét mã QR nhập liệu từng đợt cắt
              tỉa, ủ phân hữu cơ vi sinh, bẫy bả sinh học kèm định vị thời gian thực (Timestamp).
            </p>
            <div className="pt-space-xs text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">checklist</span> 100% nông hộ có tài khoản số
            </div>
          </div>

          {/* Bước 4 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="font-display-hero text-headline-md font-bold text-outline-variant group-hover:text-primary transition-colors">
                04
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                Tháng 6
              </span>
            </div>
            <h3 className="font-title-editorial text-title-editorial text-primary">Kiểm Toán Nội Bộ &amp; Khắc Phục Điểm Không Phù Hợp</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Ban Kiểm soát HTX tiến hành đánh giá chéo giả lập điều kiện của tổ chức quốc tế. Lập biên bản CAR
              (Corrective Action Request) xử lý triệt để các tồn tại về kho chứa phân bón và bảo hộ lao động.
            </p>
            <div className="pt-space-xs text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">checklist</span> Báo cáo kiểm toán nội bộ đạt &gt;95%
            </div>
          </div>

          {/* Bước 5 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="font-display-hero text-headline-md font-bold text-outline-variant group-hover:text-primary transition-colors">
                05
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                Tháng 7
              </span>
            </div>
            <h3 className="font-title-editorial text-title-editorial text-primary">Thử Nghiệm Phòng Lab Độc Lập Chỉ Định</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Lấy mẫu thành phẩm đại diện niêm phong gửi đến phòng lab quốc tế (Eurofins, SGS, Vinacontrol). Tiến hành
              quét toàn diện dải hóa chất mục tiêu, vi sinh vật gây hại (Salmonella, E.coli).
            </p>
            <div className="pt-space-xs text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">checklist</span> Phiếu kết quả Certificate of Analysis (CoA)
            </div>
          </div>

          {/* Bước 6 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="font-display-hero text-headline-md font-bold text-secondary group-hover:text-primary transition-colors">
                06
              </span>
              <span className="px-space-sm py-0.5 rounded bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
                Cấp chứng nhận
              </span>
            </div>
            <h3 className="font-title-editorial text-title-editorial text-primary">Đánh Giá Chính Thức &amp; Cấp Chứng Thư</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Chuyên gia đánh giá hiện trường từ Bureau Veritas, SGS hoặc Control Union kiểm tra đột xuất tại vườn và
              nhà máy. Chứng nhận quốc tế được cấp và đồng bộ mã tra cứu trên cổng dữ liệu OCOP.
            </p>
            <div className="pt-space-xs text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">checklist</span> Tra cứu chứng nhận số toàn cầu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
