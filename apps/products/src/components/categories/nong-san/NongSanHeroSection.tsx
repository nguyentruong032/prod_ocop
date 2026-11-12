import React from 'react';

export function NongSanHeroSection() {
  return (
    <section className="w-full bg-surface-container-low relative overflow-hidden py-14 lg:py-20">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-1/4 w-64 h-64 rounded-full bg-tertiary-fixed-dim/10 blur-2xl pointer-events-none" />
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-primary-fixed/40 text-primary font-label-md text-label-md uppercase tracking-wider">
              <span
                className="material-symbols-outlined text-[15px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              Hệ sinh thái nông sản bản địa &amp; ẩm thực truyền thống
            </div>
            <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-primary tracking-tight font-bold">
              Nông sản &amp; Thực phẩm OCOP Việt Nam
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant max-w-3xl leading-relaxed">
              Kho tư liệu số hóa nông sản, gạo đặc sản, gia vị cổ truyền, thủy hải sản và chế phẩm dinh dưỡng gìn giữ trọn
              vẹn vị ngọt phù sa, nắng gió thổ nhưỡng cùng tri thức mùa vụ từ 63 tỉnh thành Việt Nam.
            </p>
            {/* Thống kê chuyên mục */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter pt-4 mt-2">
              <div className="flex flex-col bg-surface-container-lowest p-5 rounded-lg shadow-sm">
                <span className="font-display-hero text-headline-md text-primary font-bold">5.120+</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Hồ sơ nông sản &amp; ẩm thực số hóa
                </span>
              </div>
              <div className="flex flex-col bg-surface-container-lowest p-5 rounded-lg shadow-sm">
                <span className="font-display-hero text-headline-md text-secondary font-bold">1.840</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Hợp tác xã nông thôn kết nối
                </span>
              </div>
              <div className="flex flex-col bg-surface-container-lowest p-5 rounded-lg shadow-sm">
                <span className="font-display-hero text-headline-md text-on-tertiary-container font-bold">100%</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Canh tác an toàn &amp; Hữu cơ bản địa
                </span>
              </div>
            </div>
          </div>
          {/* Cột Phải: Hình ảnh đại diện phóng sự mùa màng */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-surface-container">
              <img
                className="w-full h-80 lg:h-96 object-cover"
                data-alt="Bức ảnh chụp góc rộng cánh đồng lúa chín vàng óng ả tại thung lũng Mường Lò Yên Bái trong sương sớm mai, những người nông dân nón lá đang gặt lúa thủ công, ánh nắng vàng rực rỡ, bố cục tạp chí di sản nông thôn ấm áp cổ điển."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2pt_HaG1Q5q_I5wF4JC3dIc8EOe63IqbwotFJL4Ono4qfmh0e1C3O-5-odZ1f4QlUEVN-gOApinktxcKiImMDsLxutR8nMSZMF-TrhKZGhQqX5UZTLOg1LWiiTz-uNTUKjJ4_EiCNmlajvoAB-qQYVPPdxMKF5C8m-voNK1P4YKkjkXoP3YzamYTu8YswSKedJ-Jq7R8aiGd4j1dPaOGWutZOS99K9fYLyjcYLwo"
                alt="Lúa Nàng Thơm Chợ Đào"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 text-on-primary">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed">
                  Ký sự mùa màng
                </span>
                <p className="font-headline-sm text-title-editorial text-on-primary font-semibold mt-1">
                  Lúa Nàng Thơm Chợ Đào &amp; Hương phù sa châu thổ Cửu Long
                </p>
                <div className="flex items-center gap-2 mt-2 font-body-sm text-body-sm text-primary-fixed">
                  <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                  Huyện Cần Đước, Long An
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
