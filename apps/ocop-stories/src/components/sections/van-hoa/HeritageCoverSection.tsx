import Link from 'next/link';

export function HeritageCoverSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex items-center justify-between mb-8 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-secondary rounded-DEFAULT" />
            <div>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">Ký sự Di sản Bản địa</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Những thước phim ký ức và dòng chảy bút ký bảo tồn tri thức dân gian
              </p>
            </div>
          </div>
          <a
            className="hidden sm:inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors"
            href="#danh-sach-bai-viet"
          >
            <span>Xem tất cả tư liệu ký sự</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Lead Feature Story: Tân Cương Tea */}
          <article className="lg:col-span-7 bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col group">
            <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-alt="An elderly Vietnamese artisan with weathered hands stirring green tea leaves by hand in a glowing cast-iron wok over a wood fire hearth. Soft natural smoke drifting through the rustic wooden workshop in Tan Cuong, Thai Nguyen, captured in warm chiaroscuro documentary light with rich organic emerald and charcoal tones."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuqAllV1Pee0yZQGLOPa1YjgoYio0C-7Eibvw5G4QMaoYeghqCVpg017F2a3wYGPSoUdFNMwe_cz8D0yLVUzIu9gfANIGHnbELzecl7SmCM_2JN1hxy0ntMz8ZQOD4HrWEWIEndQ5svNllDS6i4EJVjr0oKD2cUNQ6z3pAr0hxKzw0X0S5SXfgdQCphHTxaBjB24GQ3fXSfYAjVxc5F51cRpAShmcoyntIauNhE00"
                alt="Bảo tồn tri thức sao chè thủ công của nghệ nhân vùng núi Tân Cương"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">location_on</span>
                  Thái Nguyên
                </span>
                <span className="px-3 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                  Ký sự đặc biệt
                </span>
                <span className="px-3 py-1 rounded bg-primary-container text-primary-fixed font-label-sm text-label-sm font-medium">
                  Di sản sống
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                <span className="font-label-sm text-label-sm text-tertiary-fixed tracking-wider uppercase">
                  Bút ký điền dã · TS. Vũ Minh Thông
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary font-bold mt-1 group-hover:text-primary-fixed transition-colors">
                  Bảo tồn tri thức sao chè thủ công của nghệ nhân vùng núi Tân Cương: Khi đôi bàn tay lắng nghe từng búp lá
                </h3>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-surface-container-lowest">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
                &ldquo;Sao chè không thể dùng máy móc thay thế được xúc giác của người thợ. Phải dùng mu bàn tay áp vào đáy chảo, nghe hơi nước bốc lên từ gân lá, nếm vị chát dịu trên đầu lưỡi lúc nửa đêm để biết búp chè đã ngậm đủ lửa hay chưa...&rdquo; — Hành trình 40 năm giữ lửa bếp gang của nghệ nhân Đào Thanh Vân.
              </p>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-sm">
                    VT
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary font-semibold">TS. Vũ Minh Thông</h4>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Viện Nghiên cứu Văn hóa Dân gian · 14 phút đọc
                    </span>
                  </div>
                </div>
                <Link
                  className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
                >
                  <span>Đọc toàn văn ký sự</span>
                  <span className="material-symbols-outlined text-[16px]">menu_book</span>
                </Link>
              </div>
            </div>
          </article>
          {/* Right Side: 3 Curated Cultural Vignettes */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Story 1: Nuoc Mam Phu Quoc */}
            <article className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col sm:flex-row gap-4 group">
              <div className="w-full sm:w-36 h-36 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Massive ancient wooden barrels made of litsea wood strapped with rattan ropes inside a traditional fish sauce house in Phu Quoc. Warm rays of sunlight penetrating the rustic warehouse illuminated fine dust particles, amber droplets dripping from wooden spigots, deep warm terracotta and wood tones."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKUCZJm9lzuonc3SxK2szO9Dq0UWbn5JgJ-tij0CG4mUejJ6QPQ8CAzK1VKUaPY1cgN9YNF8gqKmDwi8TpU4_DKgjRgm7PId4om8KnZ03gdNat0gssgVcoYePDhgOxEtDpm49XRfCx_wzkr8sBQbWt2z8enkabXtfD9Ybj7Djjyx8kBnODuN-rymdTpX51_Yt2b-nBUo_ELiByJb2rCoEIN6_bFcc_m_yezrmRm8k"
                  alt="Nước mắm Phú Quốc"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary text-[10px] font-label-sm uppercase font-semibold">
                  Kiên Giang
                </span>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                    Hương vị trầm tích
                  </span>
                  <h4 className="font-title-editorial text-title-editorial text-primary font-bold group-hover:text-secondary transition-colors mt-1">
                    Nghệ thuật ủ mắm cá cơm than Phú Quốc: Giọt ngọc trăm năm lắng đọng từ biển khơi
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-2">
                    Quy trình gài nén cá cơm than tươi rói trên nhà thùng gỗ bời lời, phơi sương ròng rã 12 tháng để rút lấy nước cốt mắm nâu cánh gián thuần khiết.
                  </p>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mt-3 pt-2">
                  <span>Bút ký: Mai Lan Anh</span>
                  <Link
                    href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
                    className="flex items-center gap-1 text-primary font-medium"
                  >
                    Đọc tiếp <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </Link>
                </div>
              </div>
            </article>
            {/* Story 2: Tho Cam Cham My Nghiep */}
            <article className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col sm:flex-row gap-4 group">
              <div className="w-full sm:w-36 h-36 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="A Cham woman artisan sitting gracefully at a traditional wooden horizontal loom, hand-weaving intricate geometric brocade textiles in village My Nghiep, Ninh Thuan. Natural dyed threads in deep ochre, madder red, and indigo, soft daylight falling on traditional motifs, fine craft details."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXh5u6Gisodwy7D8zzMhtLvrvSgvRWugEg9eJMu3x3ay_IOj7KbrVnFtgLl4nVenX0REMg5fhvndYRo5glzo5eaSomnPfpSMX0e-n_yKMO6AjCac0S_fKz_romGoteCkJQS5rINIv3hTA2lYd2zmJECwjyAEhskK_nICrbQsNLL6hqpUL_649_idIHIDbRdz3B5welj6yIRGOtmkGWedIHEyUE16uNgjJTtX-QSYU"
                  alt="Dệt thổ cẩm Chăm Mỹ Nghiệp"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary text-[10px] font-label-sm uppercase font-semibold">
                  Ninh Thuận
                </span>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                    Dệt thổ cẩm cổ
                  </span>
                  <h4 className="font-title-editorial text-title-editorial text-primary font-bold group-hover:text-secondary transition-colors mt-1">
                    Bản hòa ca thổ cẩm dệt tay làng Mỹ Nghiệp: Sợi chỉ nối quá khứ với hiện tại
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-2">
                    Giải mã ngôn ngữ hoa văn hình học cổ sơ và bí quyết nhuộm vỏ cây rừng của đồng bào Chăm qua bàn tay tài hoa của các nữ nghệ nhân.
                  </p>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mt-3 pt-2">
                  <span>Nghiên cứu: Inrasara</span>
                  <Link
                    href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
                    className="flex items-center gap-1 text-primary font-medium"
                  >
                    Đọc tiếp <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </Link>
                </div>
              </div>
            </article>
            {/* Story 3: Men Tro Gom Phu Lang */}
            <article className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col sm:flex-row gap-4 group">
              <div className="w-full sm:w-36 h-36 rounded-lg overflow-hidden shrink-0 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Rustic earthenware pottery jars with natural wood-ash glaze arranged along the brick kilns on the banks of Cau River in Phu Lang village, Bac Ninh. Earthy ochre, eel-skin brown glaze hues, stacks of firewood, morning mist rising over clay vessels, authentic cultural documentary feel."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOrC54Fi0MR4qOu9BRl3UYtFDpAd4nkfPDE1hU-h2yIoioovHep087CxkNoQXzHuB8JPikoazLSgPOg2oy_0PNilVVcrY1FefO2Bbi5JWy2HAtIyKOxearAbP0gbwtyQikW1Gjp40e3-TOW8A3GE4VuVr70xHH7fkK0ygncIZG0LtqpRdBtNySA4454QFndFRkYlqrJqpHdX5NIbF2FrW43lQK7dM7H5jrrw8iT6Q"
                  alt="Men tro gốm cổ Phù Lãng"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary text-[10px] font-label-sm uppercase font-semibold">
                  Bắc Ninh
                </span>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                    Gốm men tro sông Cầu
                  </span>
                  <h4 className="font-title-editorial text-title-editorial text-primary font-bold group-hover:text-secondary transition-colors mt-1">
                    Men tro gốm cổ Phù Lãng: Bí mật trầm tích đất sét và ngọn lửa nung củi
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-2">
                    Đặc sắc lớp men da lươn tự nhiên tạo nên từ tro trấu và đất phù sa, tôn vinh dáng hình mộc mạc của văn hóa làng nghề châu thổ sông Hồng.
                  </p>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mt-3 pt-2">
                  <span>Khảo cứu: Trần Đức Thuận</span>
                  <Link
                    href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
                    className="flex items-center gap-1 text-primary font-medium"
                  >
                    Đọc tiếp <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
