import React from 'react';

export function StandardsHeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-surface-container-low via-surface to-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <div className="lg:col-span-8 space-y-space-md">
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Chuẩn hóa Chất lượng: Chiếc Vé Thông hành Đưa Sản phẩm OCOP Vươn Tầm Toàn cầu
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant leading-relaxed">
              Chuyển giao từ tập quán sản xuất thủ công manh mún sang kỷ nguyên kiểm định dữ liệu độc lập. Để vượt qua
              hàng rào kỹ thuật của Liên minh Châu Âu, Bắc Mỹ và các nền kinh tế Hồi giáo, mỗi giọt mật ong đại ngàn,
              từng búp chè Shan Tuyết cổ thụ hay mẻ nước mắm truyền thống đều phải qua hàng trăm chỉ tiêu kiểm tra độc
              lập tại phòng thử nghiệm đạt chuẩn ISO/IEC 17025.
            </p>
            {/* Core Metrology Badges */}
            <div className="pt-space-sm flex flex-wrap gap-space-sm">
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">science</span> Phổ sắc ký khí
                GC-MS/MS &amp; LC-MS/MS
              </span>
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">eco</span> Truy xuất nguồn gốc chuỗi
                khối (Blockchain)
              </span>
              <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-container">policy</span> Quy định
                chống suy thoái rừng EUDR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
