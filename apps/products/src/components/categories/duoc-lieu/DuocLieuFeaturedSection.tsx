import React from 'react';

export const DuocLieuFeaturedSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-surface" id="quoc-bao-nam-duoc">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">
              Tôn vinh cội nguồn
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Quốc bảo Nam dược &amp; Thảo mộc trị liệu
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
              Những biểu tượng dược liệu tinh hoa được thiên nhiên ban tặng cho núi rừng Việt Nam, gắn liền với thổ nhưỡng đặc thù và tri thức gìn giữ ngàn đời.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase text-outline">
              Chỉ dẫn địa lý bảo hộ nghiêm ngặt
            </span>
          </div>
        </div>

        {/* Bento Grid for National Treasures */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Lead Feature: Sâm Ngọc Linh (7 Cols) */}
          <article className="lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="relative h-80 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Close up of genuine wild Ngoc Linh Ginseng root with red berries under humid primary mossy montane forest canopy in Kon Tum Vietnam"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCITlM97xozneBrACmmdltv5eU3OKTt1YK0h1FWobrqiYL3--jHZ7e-LbyVvZFopO0pDETkG1suyCkjVGms4-TNOK1FijQmvvMoJl8Ulk3RFB9FJXDbJ-UaY4dvwZoiSTS-guzfhK2GhSU90T9cXUZLII7JJKRVoLurehA6DFZxcESUvl1yAHIoBf0un4IhJKYhB_MkESkI_eH2W6WuX2Zq-1D6LL8EoQEKyJyPrj0"
               loading="lazy" decoding="async"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded bg-[#C89B3C] text-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider font-bold flex items-center gap-1 shadow">
                  <span className="material-symbols-outlined text-[14px]">stars</span>
                  OCOP 5 Sao Quốc Gia
                </span>
                <span className="px-2.5 py-1 rounded bg-primary/80 backdrop-blur-sm text-on-primary font-label-sm text-label-sm">
                  Quốc bảo Việt Nam
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                <div className="font-label-sm text-label-sm text-[#F2BE71] uppercase tracking-wider font-semibold">
                  Đỉnh Ngọc Linh • Tu Mơ Rông, Kon Tum
                </div>
                <h3 className="font-headline-md text-headline-md text-on-primary font-bold mt-1">
                  Sâm Ngọc Linh Kon Tum K5 Trầm
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Loài sâm quý chứa tới 52 hợp chất saponin đa dạng sinh học bậc nhất thế giới, sinh trưởng tự nhiên ở độ cao trên 2.000m dưới tầng thảm mục nguyên sinh của đại ngàn Kon Tum.
              </p>
              <div className="flex flex-wrap items-center justify-between pt-3 border-t border-[#E2DBD0]/60 gap-3">
                <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[18px] text-primary">verified_user</span>
                  <span>Chuẩn GACP-WHO • Mã QR truy xuất gen</span>
                </div>
                <a
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-[#79300F] font-semibold transition-colors"
                  href="#"
                >
                  <span>Xem tư liệu gốc</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Right Stack: 2 Sub Features (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: Quế Trà Bồng */}
            <article className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col sm:flex-row gap-5 group">
              <div className="sm:w-44 h-40 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Traditional harvesting of aromatic cinnamon bark rolls in Tra Bong Quang Ngai misty mountains"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARiUdPBp9Tdk79Gc1h2a3fBxrdlOAP4_Oa4eYJCAkltyMRfetfdapr0KIMa1ZBdd4AIIrFkLghiOGA8dhrTB6dllxJTkkLDcsuKy2aP0AQckLhN3FABdv7snGmX-jYZZxiuGj1feM2uyW33JxGiMsaZdiZFg3U2z40FnRtdSoi6jaTFnEdvORy6d5nf7Iy2P0iAnzTAYcyYdf4JxuUJoJsMyRhXZJs6ncE3u194P4"
                 loading="lazy" decoding="async"/>
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                  5 Sao
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Trà Bồng, Quảng Ngãi
                  </span>
                  <h4 className="font-headline-sm text-title-editorial text-primary font-semibold mt-0.5">
                    Tinh dầu Quế Trà Bồng
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1.5">
                    Vỏ quế rồng trứ danh chứa hàm lượng aldehyde cinnamic tinh khiết, chưng cất theo phương thức cổ truyền của đồng bào Cor.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-outline font-label-sm text-label-sm">Chứng nhận Hữu cơ</span>
                  <a
                    className="text-secondary hover:text-primary font-label-sm text-label-sm uppercase font-semibold flex items-center gap-1"
                    href="#"
                  >
                    <span>Hồ sơ</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Card 3: Mật ong Bạc hà Hà Giang */}
            <article className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col sm:flex-row gap-5 group">
              <div className="sm:w-44 h-40 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Pure mint flower honey jar with honey comb on karst plateau landscape of Dong Van Ha Giang"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjE5xG4nEOKuRrpI3jc-md0PNVP9i5mj7Z-4vLKiPwmcMCWg0G9gJI9gXMzd2PiU-jPUIJqzpUjD4AVRP8wupaWFyznEZUSeoK9Bqslhz2kEzycS0jfPkuQKkcFu-5FLmdy5ehNmYqCyljP6FqzEcgU5db4Vku4r_OuBBJU-eEFuh5JSeTup9Z0QASRqmeLuODGklOjpAKmEmga1bsm7YKUhwi87a-Lh3TzB0dfV4"
                 loading="lazy" decoding="async"/>
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#C89B3C] text-surface-container-lowest font-label-sm text-label-sm font-bold">
                  5 Sao
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Đồng Văn, Hà Giang
                  </span>
                  <h4 className="font-headline-sm text-title-editorial text-primary font-semibold mt-0.5">
                    Mật ong Bạc hà Cao nguyên đá
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1.5">
                    Hương mật thanh mát kết tinh từ loài hoa bạc hà dại nở rộ trên cao nguyên đá vôi vào mùa đông giá rét.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-outline font-label-sm text-label-sm">Chỉ dẫn Địa lý Hà Giang</span>
                  <a
                    className="text-secondary hover:text-primary font-label-sm text-label-sm uppercase font-semibold flex items-center gap-1"
                    href="#"
                  >
                    <span>Hồ sơ</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Two more highlights banner: Sa Pa & Thái Bình */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-5 rounded-xl bg-surface-container-low flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[32px]">science</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase text-outline">
                  Sa Pa, Lào Cai • OCOP 4 Sao
                </span>
                <h5 className="font-headline-sm text-title-editorial text-primary font-bold">
                  Đông trùng hạ thảo nuôi cấy bán tự nhiên
                </h5>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Ứng dụng khí hậu lạnh 1.600m tạo hàm lượng Cordycepin vượt trội.
                </p>
              </div>
            </div>
            <a
              className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors shrink-0"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>

          <div className="p-5 rounded-xl bg-surface-container-low flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[32px]">local_pharmacy</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase text-outline">
                  Quỳnh Phụ, Thái Bình • OCOP 4 Sao
                </span>
                <h5 className="font-headline-sm text-title-editorial text-primary font-bold">
                  Cao Cà gai leo An Thái chuẩn dược điển
                </h5>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Chiết xuất hoạt chất glycoalcaloid giải độc và phục hồi tế bào gan.
                </p>
              </div>
            </div>
            <a
              className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors shrink-0"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
