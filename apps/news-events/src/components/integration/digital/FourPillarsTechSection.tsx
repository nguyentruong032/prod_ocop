import React from 'react';

export function FourPillarsTechSection() {
  return (
    <section className="w-full bg-surface py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Header */}
        <div className="max-w-3xl space-y-space-xs pb-space-lg">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary-container" />
            <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
              Khung Hạ tầng Chuyển đổi Số
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-sm md:text-headline-lg text-primary tracking-tight">
            Bốn Trụ cột Công nghệ Trọng điểm cho Nông sản OCOP Toàn quốc
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Hệ sinh thái kỹ thuật số được thiết kế riêng biệt để tương thích với quy mô của các Hợp tác xã, tổ hợp tác và
            chủ thể kinh tế địa phương.
          </p>
        </div>
        {/* Grid of 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {/* Pillar 1: Blockchain & IoT */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wide">
                  Trụ cột 01
                </span>
                <h3 className="font-headline-sm text-title-editorial text-primary mt-1 font-bold">
                  Truy xuất nguồn gốc Blockchain &amp; IoT Vườn trồng
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Trạm cảm biến vi khí hậu đo ẩm độ đất, cường độ nắng và lượng mưa thời gian thực. Mọi dữ liệu nhật ký bón
                phân hữu cơ được đồng bộ lên chuỗi khối, không thể chỉnh sửa hay tẩy xóa.
              </p>
            </div>
            <div className="pt-space-md mt-space-md bg-surface-container-low/50 p-space-sm rounded">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>Công nghệ ứng dụng:</span>
                <span className="font-semibold text-primary">Sub-GHz IoT, Polygon PoS</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Cross-border E-commerce */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-[26px]">shopping_cart_checkout</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wide">
                  Trụ cột 02
                </span>
                <h3 className="font-headline-sm text-title-editorial text-primary mt-1 font-bold">
                  Thương mại Điện tử Xuyên biên giới
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Xây dựng kênh phân phối trực tiếp D2C (Direct-to-Consumer) trên Amazon Global Selling, Alibaba B2B và
                TikTok Shop Southeast Asia. Giúp chủ thể OCOP làm chủ kho ngoại quan FBA và chuỗi logistics lạnh.
              </p>
            </div>
            <div className="pt-space-md mt-space-md bg-surface-container-low/50 p-space-sm rounded">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>Thị trường ưu tiên:</span>
                <span className="font-semibold text-secondary">Bắc Mỹ, EU, Nhật Bản</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: VR/AR Heritage Storytelling */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">view_in_ar</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wide">
                  Trụ cột 03
                </span>
                <h3 className="font-headline-sm text-title-editorial text-primary mt-1 font-bold">
                  Kể chuyện Thương hiệu &amp; VR/AR Di sản Bản địa
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Quét 3D không gian xưởng gốm Chăm Bàu Trúc, vườn quế Trà Bồng hay đồi chè cổ thụ Suối Giàng. Trải nghiệm
                tương tác sống động tái hiện tri thức bản địa thông qua camera điện thoại của du khách.
              </p>
            </div>
            <div className="pt-space-md mt-space-md bg-surface-container-low/50 p-space-sm rounded">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>Nền tảng trực quan:</span>
                <span className="font-semibold text-primary">WebXR &amp; Không gian 3D</span>
              </div>
            </div>
          </div>

          {/* Pillar 4: Smart Cooperative ERP */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-[26px]">account_tree</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wide">
                  Trụ cột 04
                </span>
                <h3 className="font-headline-sm text-title-editorial text-primary mt-1 font-bold">
                  Quản trị HTX Thông minh &amp; ERP Tinh gọn
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Giải pháp số hóa kế toán hợp tác xã nông nghiệp theo chuẩn Thông tư mới, kiểm soát kho lạnh bảo quản sâu,
                tự động hóa đơn từ hóa đơn điện tử và dự báo sản lượng thu hoạch bằng mô hình AI phân tích ảnh vệ tinh.
              </p>
            </div>
            <div className="pt-space-md mt-space-md bg-surface-container-low/50 p-space-sm rounded">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>Độ tinh gọn:</span>
                <span className="font-semibold text-secondary">Cloud SaaS HTX 4.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
