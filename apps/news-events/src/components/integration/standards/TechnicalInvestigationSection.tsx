import React from 'react';

export function TechnicalInvestigationSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="p-space-lg md:p-space-xl rounded-xl bg-surface-container-low shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Image Composition */}
            <div className="lg:col-span-5 space-y-space-md">
              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Traditional dark green celadon ceramic teapot with handle and spout, small ceramic teacups resting on rustic textured wood plinth, handwoven bamboo winnowing tray filled with dried dark Shan Tuyet tea leaves next to handmade clay jars with cork stoppers, earthy warm terracotta background, moody museum-grade studio lighting, heritage Vietnamese tea craftsmanship"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmz3JmIbGrAdQrS0_mf203lNcdjZ0SN4xo-RDSNgGnDd-7Jx4bNIjDMj5Bc2m85lc02QThJywefCoDAJ5k3z_F8kdRGlduVKw-QYmQN8xYE9vWP7XQDLiIkUwkkSrTR7RGeA4hJgq5E6Gha6oIpXYQj9Pvz7H3ldQu2pm0a2gmo3kSPps-tImKbfTW6LbJO0oCq_Rej5ajvbIcUSMGFCrKN2iK5elvD_f2l3VXToY"
                  alt="Chè Shan Tuyết Tây Côn Lĩnh (Hà Giang)"
                />
                <div className="absolute bottom-3 left-3 right-3 p-space-sm rounded-lg bg-primary/90 backdrop-blur-md text-on-primary flex items-center justify-between text-body-sm font-body-sm">
                  <span className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">spa</span>
                    Chè Shan Tuyết Tây Côn Lĩnh (Hà Giang)
                  </span>
                  <span className="px-space-xs py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm">
                    EU ORGANIC
                  </span>
                </div>
              </div>
              {/* Secondary Image Thumbnail for spice and harvest detail */}
              <div className="grid grid-cols-2 gap-space-md">
                <div className="relative rounded-lg overflow-hidden shadow-sm h-32 group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Artisanal glass bottles of traditional amber Phu Quoc fish sauce with string ties and cork lids alongside cinnamon sticks and star anise in round bamboo steamer baskets on rustic dark wooden table, soft dramatic moody lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKY8yZ7AhPW42Q4FjCZKEhfBmu-YXAxZ7YGtNvGViNjJhJI1OVuDLmk1qLodU4QPgW_PxWv3o4l4ZvYgj2aWKhSKEJoG78UFflwxYBesOtAXRZx4xC_yxeN_HS8f4_A0_tlSCRU1nL7cdOyhOTxdlK0gZmByN42UxxrIpen9d70nhMrVZgO4qCeUXMuNrpPtLfJ0aSZkNJ8TvNuIkLoMTcWYbuL78JeK0jrybvRws"
                    alt="Nước mắm Phú Quốc 35°N"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-xs">
                    <span className="font-label-sm text-label-sm text-on-primary">Nước mắm Phú Quốc 35°N</span>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Chứng nhận</span>
                    <div className="font-title-editorial text-title-editorial text-primary mt-space-xs">
                      Chỉ dẫn Địa lý EU GI
                    </div>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[16px] text-primary">task_alt</span> 100% Không hóa
                    chất bảo quản
                  </span>
                </div>
              </div>
            </div>
            {/* Longform Article Body */}
            <div className="lg:col-span-7 space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="px-space-sm py-0.5 rounded bg-secondary/15 text-secondary font-label-md text-label-md font-semibold">
                  KÝ SỰ PHÂN TÍCH TIÊU ĐIỂM
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">timer</span> 8 phút đọc
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary leading-tight">
                Vượt qua bài kiểm tra 500 chỉ tiêu dư lượng hóa chất: Hành trình chứng nhận hữu cơ EU Organic cho chè Shan
                Tuyết cổ thụ Hà Giang
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Ở độ cao trên 1.400 mét thuộc dãy Tây Côn Lĩnh, những cây chè cổ thụ hàng trăm năm tuổi ngậm sương mù
                quanh năm đã tạo nên nguồn nguyên liệu độc bản. Tuy nhiên, khi đối diện với phòng phân tích của tổ chức
                Control Union tại Hà Lan, câu chuyện thần bí về độ cao và sương gió phải nhường chỗ cho dữ liệu số:
                danh mục 517 hoạt chất thuốc bảo vệ thực vật, kim loại nặng Pb, Cd, As và độc tố nấm Aflatoxin.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md p-space-md rounded-lg bg-surface-container-lowest shadow-sm">
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-semibold font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[18px] text-secondary">assignment_turned_in</span>
                    Khu vực đệm cách ly 1.5km
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Xóa bỏ nguy cơ nhiễm chéo từ các nương ngô sử dụng thuốc diệt cỏ thông qua thỏa thuận cộng đồng bản
                    địa người Dao áo dài.
                  </p>
                </div>
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-semibold font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[18px] text-secondary">biotech</span>
                    Giới hạn định lượng &lt; 0.01 mg/kg
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Đáp ứng ngưỡng khắt khe nhất của Ủy ban Tiêu chuẩn Thực phẩm Codex và Quy định (EU) 2018/848 về sản
                    phẩm hữu cơ.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a
                  className="px-space-lg py-space-sm rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-all shadow-md inline-flex items-center gap-space-xs"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[18px]">article</span> Đọc toàn văn hồ sơ kiểm định
                </a>
                <a
                  className="px-space-md py-space-sm rounded-lg text-secondary hover:bg-secondary/10 font-label-md text-label-md transition-colors inline-flex items-center gap-space-xs"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span> Tải bản đối sánh 517 chỉ tiêu
                  (.PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
