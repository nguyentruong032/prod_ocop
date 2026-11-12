import React from 'react';

export function FeaturedFiveStarSpotlightSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-primary pl-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-secondary font-label-md">
            ĐẲNG CẤP XUẤT KHẨU
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-headline-md text-primary mt-1">
            Dấu ấn OCOP 5 Sao Quốc gia - Tinh hoa nông sản Việt
          </h2>
          <p className="text-on-surface-variant text-sm mt-1">
            Hồ sơ thẩm định cấp Trung ương của những báu vật nông sản mang hồn cốt dân tộc
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-on-surface-variant font-medium">Bảo chứng bởi Hội đồng OCOP Quốc gia</span>
          <span
            className="material-symbols-outlined text-primary text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            workspace_premium
          </span>
        </div>
      </div>
      {/* Grid 4 Sản phẩm 5 sao nổi bật */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Feature 1: Trà Đinh Ngọc Tân Cương */}
        <article className="bg-surface-container-lowest border border-[#d5e1dc] rounded flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-square w-full overflow-hidden bg-[#e8efea]">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Exquisite loose-leaf Vietnamese Tan Cuong green tea meticulously displayed on dark textured slate pottery"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAT21mFT9AQQvAqOADcAsd8a62cnjoaye81yWNwGf05BTDs5AZ6qZC1-HKuBqPkXYsqqnoSZvX6g6NcKvrz4t8L68vixYB4VtTdNIa7B_-8Ey7flZxZL_JZFAeQN8gLrdIP-0HdlXdeshYe-JQF3Kh8n-qNpbUtqEWWUGJdtm3q5a3i7EuyHhYeg6Yurq82iolM4jXNXnYqIj2TXk34jwo6K_9DZkBXZJ9P-TijQ"
              alt="Trà Đinh Ngọc Tân Cương"
             loading="lazy" decoding="async"/>
            <span className="absolute top-3 left-3 bg-[#1b4332] text-[#f9fbfa] text-[11px] font-bold px-2 py-1 rounded shadow">
              ★★★★★ 5 SAO
            </span>
            <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-mono px-2 py-0.5 rounded border border-[#d5e1dc]">
              ID: OCOP-5S-TN001
            </span>
          </div>
          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-secondary font-medium mb-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>Thái Nguyên</span>
              </div>
              <h3 className="text-lg font-bold font-headline-sm text-primary group-hover:text-secondary transition-colors">
                Trà Đinh Ngọc Tân Cương
              </h3>
              <p className="text-xs text-on-surface-variant mt-1.5">
                HTX Trà Xanh Thái Nguyên • Thu hái từ 1 tôm 1 lá non sương sớm vùng đồi chè cổ thụ.
              </p>
            </div>
            <div className="pt-3 border-t border-[#eaf0ee] flex items-center justify-between">
              <div className="text-[11px] text-on-surface-variant">
                <span className="block text-primary font-semibold">QĐ 919/QĐ-TTg</span>
                <span>Chứng nhận hữu cơ quốc tế</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary group-hover:translate-x-0.5 transition-all"
                href="#"
              >
                <span>Hồ sơ</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </article>

        {/* Feature 2: Nước mắm Cốt Khải Hoàn 43°N */}
        <article className="bg-surface-container-lowest border border-[#d5e1dc] rounded flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-square w-full overflow-hidden bg-[#e8efea]">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Traditional artisan fish sauce from Phu Quoc resting inside a handcrafted vintage glass bottle"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsTRmQZTk3qBJ0va-9KvezGSmFvRShdrhgEl7XuXWdu6gxrT46xwEYWLW9Cvp0SJsb6rmsHCFhevLMaGGHeckylvObYpvn18MpGFR2l_-eMO6CydF5EHyu_hv66GfRna_iCEO-D_G3vATGCgPqZu6MDbOB2zRgJPf3tjgUONgqGV1uIpbTSYTOtoGxwh39hVH7_x6KDQx1FQtJD4xphpbjrfFc7XCxEa724RXMJVs"
              alt="Nước Mắm Cốt Khải Hoàn 43°N"
             loading="lazy" decoding="async"/>
            <span className="absolute top-3 left-3 bg-[#1b4332] text-[#f9fbfa] text-[11px] font-bold px-2 py-1 rounded shadow">
              ★★★★★ 5 SAO
            </span>
            <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-mono px-2 py-0.5 rounded border border-[#d5e1dc]">
              ID: OCOP-5S-KG014
            </span>
          </div>
          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-secondary font-medium mb-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>Phú Quốc, Kiên Giang</span>
              </div>
              <h3 className="text-lg font-bold font-headline-sm text-primary group-hover:text-secondary transition-colors">
                Nước Mắm Cốt Khải Hoàn 43°N
              </h3>
              <p className="text-xs text-on-surface-variant mt-1.5">
                Công ty CP TM Khải Hoàn • Ủ chượp gài nén cá cơm than truyền thống 15-18 tháng.
              </p>
            </div>
            <div className="pt-3 border-t border-[#eaf0ee] flex items-center justify-between">
              <div className="text-[11px] text-on-surface-variant">
                <span className="block text-primary font-semibold">Chỉ dẫn địa lý EU</span>
                <span>Độ đạm tự nhiên 43°N</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary group-hover:translate-x-0.5 transition-all"
                href="#"
              >
                <span>Hồ sơ</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </article>

        {/* Feature 3: Sâm Ngọc Linh K5 Trầm */}
        <article className="bg-surface-container-lowest border border-[#d5e1dc] rounded flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-square w-full overflow-hidden bg-[#e8efea]">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Rare whole Ngoc Linh wild ginseng root resting cleanly on aged raw timber bark"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjKc_11N_ljQNd2lCoclXOMdG0vmuF90I44-bwOj7eVAml9SoXW_EBVSw25hmTik_Wb4M88q3EQIw8qMiO_bKg69FbfP3bg3FrSC4j1pPJ-1r9zIgQdK2iA9xicNtXW7_rVHoVfNz-r6SIcDebCVn_UfWidsvAVmc1pzF__Q-vhi4IG6ONKUu2dEO6MtetunC34L0bMAi4qHErt5NjSegbYtuxBklNGPk4C5wF-DU"
              alt="Sâm Ngọc Linh K5 Trầm"
             loading="lazy" decoding="async"/>
            <span className="absolute top-3 left-3 bg-[#1b4332] text-[#f9fbfa] text-[11px] font-bold px-2 py-1 rounded shadow">
              ★★★★★ 5 SAO
            </span>
            <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-mono px-2 py-0.5 rounded border border-[#d5e1dc]">
              ID: OCOP-5S-KT009
            </span>
          </div>
          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-secondary font-medium mb-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>Tu Mơ Rông, Kon Tum</span>
              </div>
              <h3 className="text-lg font-bold font-headline-sm text-primary group-hover:text-secondary transition-colors">
                Sâm Ngọc Linh K5 Trầm
              </h3>
              <p className="text-xs text-on-surface-variant mt-1.5">
                Công ty CP Sâm Ngọc Linh Kon Tum • Sinh trưởng dưới tán rừng già nguyên sinh độ cao 2.000m.
              </p>
            </div>
            <div className="pt-3 border-t border-[#eaf0ee] flex items-center justify-between">
              <div className="text-[11px] text-on-surface-variant">
                <span className="block text-primary font-semibold">Bảo hộ Quốc gia</span>
                <span>Hàm lượng MR2 tối ưu</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary group-hover:translate-x-0.5 transition-all"
                href="#"
              >
                <span>Hồ sơ</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </article>

        {/* Feature 4: Gạo ST25 Ông Cua */}
        <article className="bg-surface-container-lowest border border-[#d5e1dc] rounded flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-square w-full overflow-hidden bg-[#e8efea]">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Premium long translucent grains of ST25 Vietnamese fragrant rice neatly poured into a handcrafted rustic ceramic bowl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu69b-hMjmteG8JkO3-VC9xVGfWFnYEWlHyy4rR1IkYK8CDMpAh-id6JGVu3SwTnnMTwm80ETddDmZV-k2jwhBwc-ZeuFIxr01dFT3QFj-1l82uXjOn1hpB5H4hMMoDvsiFRexVeZZY6tySuHxtSPUXw0eMPKD9nwtoWQuvcEbGhxm_pPLs1g6LKWFrBsAJdUfpc8cKlmm07lKF9s4NeBA9d9SiG-l8HuFr2F8Qcw"
              alt="Gạo ST25 Lúa Tôm Ông Cua"
             loading="lazy" decoding="async"/>
            <span className="absolute top-3 left-3 bg-[#1b4332] text-[#f9fbfa] text-[11px] font-bold px-2 py-1 rounded shadow">
              ★★★★★ 5 SAO
            </span>
            <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-mono px-2 py-0.5 rounded border border-[#d5e1dc]">
              ID: OCOP-5S-ST003
            </span>
          </div>
          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-secondary font-medium mb-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>Mỹ Xuyên, Sóc Trăng</span>
              </div>
              <h3 className="text-lg font-bold font-headline-sm text-primary group-hover:text-secondary transition-colors">
                Gạo ST25 Lúa Tôm Ông Cua
              </h3>
              <p className="text-xs text-on-surface-variant mt-1.5">
                DNTN Hồ Quang Trí • Mô hình canh tác luân canh lúa - tôm sạch sinh thái bền vững.
              </p>
            </div>
            <div className="pt-3 border-t border-[#eaf0ee] flex items-center justify-between">
              <div className="text-[11px] text-on-surface-variant">
                <span className="block text-primary font-semibold">Gạo Ngon Nhất TG</span>
                <span>Quy trình hữu cơ VietGAP</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary group-hover:translate-x-0.5 transition-all"
                href="#"
              >
                <span>Hồ sơ</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
