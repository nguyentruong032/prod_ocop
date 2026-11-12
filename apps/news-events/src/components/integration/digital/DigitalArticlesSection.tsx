import React from 'react';

export function DigitalArticlesSection() {
  return (
    <section className="w-full bg-surface py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-space-lg">
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-container" />
              <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                Cẩm nang &amp; Báo chí Chuyên đề
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-sm md:text-headline-lg text-primary tracking-tight mt-1">
              Tri thức Số hóa cho Kinh tế Hợp tác xã
            </h2>
          </div>
          <a
            className="hidden sm:inline-flex items-center gap-1 font-label-md text-label-md text-secondary font-semibold hover:underline"
            data-path="tat-ca-bai-viet-cong-nghe"
            href="#"
          >
            <span>Xem tất cả bài viết</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </a>
        </div>
        {/* 6-Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* Article 1 */}
          <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="px-space-xs py-0.5 rounded bg-surface-container-low font-semibold text-primary">
                  Cẩm nang Livestream
                </span>
                <span>18/02/2026</span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary hover:text-secondary transition-colors">
                <a data-path="bai-viet-livestream-nong-san" href="#">
                  Nghệ thuật Livestream Bán Nông sản OCOP: Từ Kịch bản Đồng ruộng đến Đơn hàng Xuyên lục địa
                </a>
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                Tổng hợp bộ công cụ chuẩn bị ánh sáng tự nhiên, góc máy cận cảnh độ tươi ngon của trái cây và cách thức
                xây dựng sự tin cậy từ những câu chuyện lam lũ chân thật của nông dân.
              </p>
            </div>
            <div className="pt-space-md mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Tác giả: ThS. Hoàng Mạnh Quân</span>
              <span>5 phút đọc</span>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="px-space-xs py-0.5 rounded bg-surface-container-low font-semibold text-secondary">
                  E-Commerce B2B
                </span>
                <span>15/02/2026</span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary hover:text-secondary transition-colors">
                <a data-path="bai-viet-alibaba-xuat-khau" href="#">
                  Hướng dẫn Xây dựng Gian hàng Quốc tế Chuẩn B2B trên Alibaba cho Hợp tác xã Vừa &amp; Nhỏ
                </a>
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                Quy chuẩn hình ảnh bao bì, bảng phân tích kiểm định dư lượng hóa chất độc hại SGS và kỹ năng thương thảo
                điều kiện FOB/CIF trực tuyến với các nhà nhập khẩu Nhật Bản và Bắc Âu.
              </p>
            </div>
            <div className="pt-space-md mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Tác giả: Ban Xúc tiến Thương mại</span>
              <span>8 phút đọc</span>
            </div>
          </article>

          {/* Article 3 */}
          <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="px-space-xs py-0.5 rounded bg-surface-container-low font-semibold text-primary">
                  An ninh Dữ liệu
                </span>
                <span>12/02/2026</span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary hover:text-secondary transition-colors">
                <a data-path="bai-viet-an-ninh-mang-htx" href="#">
                  Quản trị Rủi ro An ninh Mạng và Bảo vệ Mã Định danh Sản phẩm OCOP trên Không gian Số
                </a>
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                Các thủ đoạn sao chép mã QR động, làm giả chứng thư xuất xứ số và biện pháp phòng vệ nhiều lớp cho máy
                chủ cơ sở dữ liệu vùng trồng thuộc các liên hiệp HTX.
              </p>
            </div>
            <div className="pt-space-md mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Tác giả: KS. Trần Quốc Hùng</span>
              <span>6 phút đọc</span>
            </div>
          </article>

          {/* Article 4 */}
          <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="px-space-xs py-0.5 rounded bg-surface-container-low font-semibold text-primary">
                  Logistics Lạnh
                </span>
                <span>09/02/2026</span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary hover:text-secondary transition-colors">
                <a data-path="bai-viet-cold-chain-iot" href="#">
                  Chuỗi Cung ứng Lạnh (Cold Chain) Thông minh: Cứu cánh cho Trái cây Đặc sản Nhiệt đới
                </a>
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                Giải pháp tích hợp cảm biến nhiệt độ vào từng container vận chuyển thanh long, bưởi da xanh và sầu riêng,
                giúp kiểm soát tỷ lệ hao hụt sau thu hoạch dưới 3,5%.
              </p>
            </div>
            <div className="pt-space-md mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Tác giả: TS. Đặng Minh Châu</span>
              <span>7 phút đọc</span>
            </div>
          </article>

          {/* Article 5 */}
          <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="px-space-xs py-0.5 rounded bg-surface-container-low font-semibold text-secondary">
                  Pháp lý &amp; Tiêu chuẩn
                </span>
                <span>05/02/2026</span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary hover:text-secondary transition-colors">
                <a data-path="bai-viet-dpp-chau-au" href="#">
                  Hộ chiếu Số Sản phẩm Châu Âu (EU DPP): Nông sản Việt Cần Chuẩn bị Những Gì?
                </a>
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                Phân tích các yêu cầu bắt buộc sắp áp dụng của Liên minh Châu Âu về tính minh bạch chuỗi cung ứng, dấu
                chân carbon và hồ sơ trách nhiệm xã hội gắn liền mã số lô hàng.
              </p>
            </div>
            <div className="pt-space-md mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Tác giả: Nhóm Nghiên cứu OCOP EU</span>
              <span>9 phút đọc</span>
            </div>
          </article>

          {/* Article 6 */}
          <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="px-space-xs py-0.5 rounded bg-surface-container-low font-semibold text-primary">
                  Tài chính Nông thôn
                </span>
                <span>01/02/2026</span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary hover:text-secondary transition-colors">
                <a data-path="bai-viet-fintech-ocop" href="#">
                  Fintech Nông nghiệp: Hóa giải Cơn khát Vốn Mở rộng Vùng trồng Nhờ Dữ liệu Đơn hàng
                </a>
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                Mô hình thế chấp tài sản số và dòng tiền trực tuyến qua sàn thương mại giúp các HTX bản địa tiếp cận
                nguồn vốn vay ưu đãi không cần tài sản đảm bảo hữu hình.
              </p>
            </div>
            <div className="pt-space-md mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Tác giả: Vũ Thị Phương Thảo</span>
              <span>6 phút đọc</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
