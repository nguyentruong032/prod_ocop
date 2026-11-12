import React from 'react';

export function TechnicalArticlesSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs">
            <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider">
              CẨM NANG &amp; HƯỚNG DẪN KỸ THUẬT
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Nghiên Cứu Chuyên Sâu Về Hàng Rào Kỹ Thuật Nông Sản
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Các chuyên khảo được chấp bút bởi Hội đồng Thẩm định OCOP Quốc gia và đại diện các phòng thử nghiệm quốc tế.
            </p>
          </div>
          <div className="flex items-center gap-space-sm">
            <button className="px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors">
              Mới nhất
            </button>
            <button className="px-space-md py-space-xs rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors">
              Đọc nhiều nhất
            </button>
          </div>
        </div>
        {/* 6 Technical Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* Bài 1 */}
          <article className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-md group hover:bg-surface-container transition-colors">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span className="text-secondary font-semibold">KIỂM ĐỊNH BAO BÌ</span>
                <span>18/03/2026</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Kiểm soát vi nhựa và thôi nhiễm kim loại nặng trong bao bì đựng nông sản chế biến
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Hướng dẫn lựa chọn màng nhôm thực phẩm, thủy tinh trung tính và nhựa sinh học tự hủy đạt chứng chỉ FDA 21 CFR
                và Chỉ thị EU 10/2011.
              </p>
            </div>
            <div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>GS. Trần Đình Long</span>
              <span className="flex items-center gap-1 font-semibold text-primary">
                Xem chi tiết <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </article>

          {/* Bài 2 */}
          <article className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-md group hover:bg-surface-container transition-colors">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span className="text-secondary font-semibold">DƯ LƯỢNG HÓA CHẤT</span>
                <span>15/03/2026</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Giải bài toán Chlorpyrifos và Tricyclazole trên gạo đặc sản ST25 xuất khẩu
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Kinh nghiệm từ các tổ hợp tác Sóc Trăng trong việc xây dựng mô hình lúa - tôm hữu cơ tự nhiên, cách ly
                tuyệt đối nguồn nước mặt ô nhiễm.
              </p>
            </div>
            <div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>ThS. Nguyễn Văn Hải (SGS)</span>
              <span className="flex items-center gap-1 font-semibold text-primary">
                Xem chi tiết <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </article>

          {/* Bài 3 */}
          <article className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-md group hover:bg-surface-container transition-colors">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span className="text-secondary font-semibold">THƯƠNG MẠI HỒI GIÁO</span>
                <span>12/03/2026</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Quy trình đánh giá Halal cho dây chuyền chế biến mật ong và siro thảo dược
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Những tiêu chí kỹ thuật về enzym phụ gia, quy trình tẩy rửa thiết bị không cồn và thủ tục tiếp đoàn kiểm
                định của cơ quan tôn giáo Malaysia JAKIM.
              </p>
            </div>
            <div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>TS. Lê Mai Khanh</span>
              <span className="flex items-center gap-1 font-semibold text-primary">
                Xem chi tiết <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </article>

          {/* Bài 4 */}
          <article className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-md group hover:bg-surface-container transition-colors">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span className="text-secondary font-semibold">DẤU CHÂN CARBON</span>
                <span>08/03/2026</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Kiểm kê khí nhà kính ISO 14064 trong canh tác cà phê chè Arabica Cầu Đất
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Tính toán hệ số hấp thụ carbon của cây che bóng và các giải pháp tuần hoàn vỏ cà phê thành than sinh học
                (Biochar) để bù trừ lượng phát thải.
              </p>
            </div>
            <div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>Viện Môi trường Nông nghiệp</span>
              <span className="flex items-center gap-1 font-semibold text-primary">
                Xem chi tiết <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </article>

          {/* Bài 5 */}
          <article className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-md group hover:bg-surface-container transition-colors">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span className="text-secondary font-semibold">TRUY XUẤT NGUỒN GỐC</span>
                <span>04/03/2026</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Ứng dụng GS1 Digital Link: Mã vạch thông minh thay thế mã vạch truyền thống
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Cho phép khách hàng tại Đức hoặc Hoa Kỳ quét mã sản phẩm OCOP xem ngay chứng chỉ phòng lab, hình ảnh vệ
                tinh vườn trồng và nhật ký thu hoạch.
              </p>
            </div>
            <div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>Trung tâm Mã số Mã vạch QG</span>
              <span className="flex items-center gap-1 font-semibold text-primary">
                Xem chi tiết <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </article>

          {/* Bài 6 */}
          <article className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-md group hover:bg-surface-container transition-colors">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span className="text-secondary font-semibold">PHÒNG TRÁNH NHIỄM CHÉO</span>
                <span>01/03/2026</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                Thiết kế nhà xưởng đạt chuẩn BRCGS cho sản phẩm mứt trái cây và nước ép
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Nguyên lý một chiều, phân tách vùng kiểm soát cao (High-care zone) và cách xử lý áp suất dương ngăn côn
                trùng xâm nhập vào khu vực đóng chai.
              </p>
            </div>
            <div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span>Kỹ sư Vũ Thành Trung</span>
              <span className="flex items-center gap-1 font-semibold text-primary">
                Xem chi tiết <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
