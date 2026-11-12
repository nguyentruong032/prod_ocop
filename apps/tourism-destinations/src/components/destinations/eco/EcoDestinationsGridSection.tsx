export function EcoDestinationsGridSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-lg">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
            Danh Sách Tuyến Điểm Sinh Thái Tiêu Biểu
          </h2>
          <span className="font-label-sm text-label-sm text-outline">Trang 1 / 18</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Ban Ang pine forest and organic strawberry cultivation gardens in Moc Chau highland Son La Vietnam. Strolling pathways under majestic pine trees and wooden greenhouses with plump ripe strawberries, crisp clean mountain atmosphere."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpNbIaPZhFJ3WdCNpqNWkqDmhfI-d-9eIv6g7pUFbMByOaxJwlI69pe90n18ofcINMViZdhsg9IuvoHt3aWu5EB8MhdObm_2GYTUqAuZgRqvFK9o0z1Pw3GgijeICcfpI7uYrox7NfhgSdqxvbEQb-dLwLg-S7oHAN9SYSqFJe9Gjq1zzDxUlGeVj4hsO8oMpG6BSVunqTX-UeU0h1K5bjC3qyU24MjPeCSsvSlic"
                  alt="Bản Áng"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    2N1Đ
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm">
                    Non Cao
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>Mộc Châu, Sơn La</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  HTX Du lịch Nông nghiệp Bản Áng
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Trải nghiệm hái dâu tây hữu cơ ven rừng thông, làm bánh dày truyền thống người Thái và thưởng thức sữa chua nếp cẩm OCOP.
                </p>
                <div className="mt-2 p-space-xs rounded bg-surface-container-low text-primary font-body-sm text-body-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                  <span>OCOP: Dâu tây Mộc Châu 4 sao &amp; Sữa tươi</span>
                </div>
              </div>
            </div>
            <div className="p-space-md pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  thumb_up
                </span>
                <span>98% hài lòng (420 đánh giá)</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline"
                href="#"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Vast aromatic rose fields and floral greenhouses in Sa Dec flower village Dong Thap Vietnam. Vibrant damask and heritage roses in full bloom with local flower artisans tending plants under Mekong sunshine."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9DcjZM3GoI51aC6zxFRP3J5_EH-FNSkHpmIxoCIT2bs0TI8frjsZ7PYSw_wrdm78VF-L81j4LzcDCR0pqUnfOs4MYrbCLRyOmxFFpbdaS4T7BVao3UuePMJIS04tvHZvWwL-M-ZvWpndHpCzO0eIjzPBk1skFdPngYiciRaW_kLV45bH4DFu2JxQo5rBBMtcJwIVEhhJTvfCopIzbuLuv89y0Hde1_ffEpDjs-iA"
                  alt="Sa Đéc"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    Trong ngày
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm">
                    Miệt Vườn
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>Sa Đéc, Đồng Tháp</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Khu du lịch sinh thái Cánh đồng hoa hồng Sa Đéc
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Tham gia chưng cất nước hoa hồng tinh khiết, thưởng thức trà ướp hoa tươi và chèo thuyền ba lá ngắm thảm thực vật phù sa.
                </p>
                <div className="mt-2 p-space-xs rounded bg-surface-container-low text-primary font-body-sm text-body-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                  <span>OCOP: Nước cất hoa hồng 4 sao &amp; Rượu sen</span>
                </div>
              </div>
            </div>
            <div className="p-space-md pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  thumb_up
                </span>
                <span>96% hài lòng (310 đánh giá)</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline"
                href="#"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Traditional Tay ethnic stilt house village in Quynh Son Bac Son Lang Son surrounded by lush emerald green limestone karst peaks and golden ripe paddy fields in panoramic wide view."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8hrK9Mge51sEXZfpVU1OgiiwR9k6qiPYBHisJvoIPSmNMox5xNDHMRYC5ZM2ljF4BpzJwvslFUaZCVKdOQ12W015GaRdlzpfWy9frATYbKqi1B41EF26ahKJdF2Md6CDHzRDNOx213MZi_NRNoVhZFXmM8r_obTDUpHm5ZJ2MrLnvxUNU1W0K3gAiJXmWk1WAgCucemwPmmCT6waySrKuzwE5ix-xur-kEoZOunU"
                  alt="Quỳnh Sơn"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    2N1Đ
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm">
                    Làng Cổ Non Sông
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>Bắc Sơn, Lạng Sơn</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng du lịch cộng đồng Quỳnh Sơn
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Trải nghiệm lợp ngói âm dương cổ xưa, hái quýt vàng Bắc Sơn trên sườn núi đá vôi và thưởng thức xôi cẩm ngũ sắc nồng ấm.
                </p>
                <div className="mt-2 p-space-xs rounded bg-surface-container-low text-primary font-body-sm text-body-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                  <span>OCOP: Quýt Bắc Sơn 4 sao &amp; Lạp xưởng hun khói</span>
                </div>
              </div>
            </div>
            <div className="p-space-md pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  thumb_up
                </span>
                <span>99% hài lòng (185 đánh giá)</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline"
                href="#"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Ancient tea trees with thick mossy trunks clinging to high limestone mountains in Suoi Giang Van Chan Yen Bai. Local H'Mong artisans demonstrating manual pan firing of tea over wood ember fires."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRUa-AQ1No5r5TtsgS4B2d_hWDUinoBOZ2iTW6qCo9XWu03NcbujR0ScVjhc7HLoYK_4pt5BVd4uTde1h0l6g4DA4LlyapxsaCTvK8K7FxiD4vwh_lSrfSklAtyrnzmsa8DuXhbnkw4lhfQ8bLR8J7f8IfkqebLqYfLp1jGiJhFVYoL6ejmPVNn7vS48MASMTJGEn5ffMtGil6Sg62dMiSjz-mrh7I3coAsSAiWeU"
                  alt="Suối Giàng"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    3N2Đ
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm">
                    Văn Hóa Trà
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>Văn Chấn, Yên Bái</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Không gian văn hóa trà Suối Giàng
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Leo cây chè cổ thụ hơn 300 tuổi, học nghi thức uống trà thanh đạm và đắm mình trong không gian nhạc cụ khèn Mông bên sườn dốc.
                </p>
                <div className="mt-2 p-space-xs rounded bg-surface-container-low text-primary font-body-sm text-body-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                  <span>OCOP: Bạch Trà Suối Giàng 5 sao</span>
                </div>
              </div>
            </div>
            <div className="p-space-md pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  thumb_up
                </span>
                <span>100% hài lòng (512 đánh giá)</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline"
                href="#"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Eco-friendly shaded coffee plantation at Aeroco Coffee farm Buon Ma Thuot Dak Lak. Multi-tier forest farming with ripe coffee, fruit trees, bees pollinating flowers, clean rustic agricultural tourism."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOKjMnV_gQxqbP2zsHvom8QMBAPzjA1RkYO-Np5LJ8stx6BL0i05-WZDVoA-sSLhCIKHWqy_EBm3CBrzdg_wuErSKD2fu6KsQxdezaEHnHn9bxikrpxqY_22jhAZoQbDGGBcgbZtn5NiWYOUZgv7O3_ciValpCSZGE7RGPONOhw7aiIDGYAb5wql1Igl5FsWiz07d0umS-XkOQXkS0VSq7ZYiSKE0g9IKtTzHiBxI"
                  alt="Aeroco Coffee"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    2N1Đ
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm">
                    Cao Nguyên Bazan
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>Buôn Ma Thuột, Đắk Lắk</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Nông trại Cà phê hữu cơ Aeroco Coffee
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Tìm hiểu mô hình nông lâm kết hợp không hóa chất, trải nghiệm thử nếm hương vị cà phê đặc sản cupping và ngủ lều giữa vườn cây.
                </p>
                <div className="mt-2 p-space-xs rounded bg-surface-container-low text-primary font-body-sm text-body-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                  <span>OCOP: Cà phê bột Aeroco 4 sao</span>
                </div>
              </div>
            </div>
            <div className="p-space-md pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  thumb_up
                </span>
                <span>97% hài lòng (278 đánh giá)</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline"
                href="#"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Bac Lieu coastal bird sanctuary with flocks of white egrets nesting in mangrove canopy alongside artisanal solar sea salt crystallizing flat beds under warm sunny skies."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjClU0jp0ef-ipArvpHSzViIEjphTuTpjcvz2uqYD3G9Pj68FDEye-ySAHrbv82-JuEHNeinaAU3j9GBY2BBRTo13firqUjxGnP1u4WmScvgWPhy0nfUr9IoCU_ppzgv_sSrVqR_ZZoGmHkKc8a0zZv6-YKMUDrw2mTdEl2e-hpsvFm3ZxSOU1uXEx39j4K92VoRzz71DB7cLOaI-8LVgV0KabU9TfVEh5O9k8uiQ"
                  alt="Vườn chim Bạc Liêu"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    Trong ngày
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm">
                    Duyên Hải
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>Thành phố Bạc Liêu</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Khu bảo tồn Vườn chim Bạc Liêu &amp; HTX Muối
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Xem chim hoang dã làm tổ trong rừng tự nhiên, theo chân diêm dân cào muối truyền thống và thưởng thức ba khía muối đậm đà.
                </p>
                <div className="mt-2 p-space-xs rounded bg-surface-container-low text-primary font-body-sm text-body-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                  <span>OCOP: Muối ăn Bạc Liêu &amp; Ba khía muối 4 sao</span>
                </div>
              </div>
            </div>
            <div className="p-space-md pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  thumb_up
                </span>
                <span>95% hài lòng (160 đánh giá)</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline"
                href="#"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Dense primeval U Minh Melaleuca wetland forest in Ca Mau. Experienced beekeepers wearing mesh veils inspecting natural honeycombs dripping with amber wild honey on slanted wooden rafters deep in swamp woods."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy5iGk3tBcLYnuPrcd887fDNodzLbXxtBZnmflvjyH7-HqNXEGKb3IT78ZIs_uC9j5KpXNKlijETlbp61P2bFVc95bGJZ1eR-VmIKQBHPEE8KHEOocpcdlqtUPe8FonMsEHcHMPoaYkoC8HrxxQIt1cQtgWfo5LH_P-jd8Ksn0OBpXCrOYkxe9j5b9FdgTWYJp9qFuLNJMo9CPFeEmkrSvBHZFRL_JgwGLh5x-PyA"
                  alt="U Minh Hạ"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    2N1Đ
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm">
                    Rừng Tràm
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>U Minh Hạ, Cà Mau</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  HTX Mật ong Rừng U Minh Hạ
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Theo ghe máy len lỏi vào rừng tràm nguyên sinh, trực tiếp cùng thợ gác kèo lấy tổ ong mật hoang dã và nếm mật tươi nguyên chất.
                </p>
                <div className="mt-2 p-space-xs rounded bg-surface-container-low text-primary font-body-sm text-body-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                  <span>OCOP: Mật ong hoa tràm U Minh 4 sao</span>
                </div>
              </div>
            </div>
            <div className="p-space-md pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  thumb_up
                </span>
                <span>99% hài lòng (340 đánh giá)</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline"
                href="#"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Expansive night-blooming dragon fruit plantation illuminated by thousands of warm LED light bulbs creating a magical glowing night farm landscape in Cho Gao Tien Giang Vietnam."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL7BPD-wQmv1hc_BePefol5WpnnvByOSMURGuDg-IxZSFbZFnOqVlW0sxOD9eifr7PmJGZlFFLFoEcd4gw-DJTGWQ42L2FfuWrttYq-6x3l0D44En4XVW5He54uN2yhx4FsGM_1A9jVp3urLFTIn5Tm6CqcCcuqxqWP63dI1elkbUXNSOTIgnVNZE-RSxO2ydWkbjKuH9JQEJeyddcDrbQXfOJtxfr7wW0UGXKxOU"
                  alt="Chợ Gạo"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    Trong ngày
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm">
                    Sông Nước
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>Chợ Gạo, Tiền Giang</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Tuyến trải nghiệm Vườn Thanh long Chợ Gạo
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Thưởng ngoạn biển đèn thắp sáng ban đêm của hàng ngàn gốc thanh long ruột đỏ, tự tay hái quả và thưởng thức rượu vang thanh long.
                </p>
                <div className="mt-2 p-space-xs rounded bg-surface-container-low text-primary font-body-sm text-body-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                  <span>OCOP: Rượu vang thanh long &amp; Trái tươi VietGAP</span>
                </div>
              </div>
            </div>
            <div className="p-space-md pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  thumb_up
                </span>
                <span>94% hài lòng (210 đánh giá)</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline"
                href="#"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 9 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="The southernmost tip of Vietnam at Cape Ca Mau with stilt houses above coastal mangrove wetlands where local farmers farm ecological organic black tiger prawns under thick mangrove roots."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpznCzooIQKSP0XRxmWJA3vcTSgUrV3TT5gc4q991c0vT_qFQtsha6gvsHZQF2cPuZoKZxL4l5nxLni-pif3Ix53LAdyeu2GpjboyzIcKd4LihoJaTsE40IIJD865W71QXFAtVwBwsTJ17B3NFoCcxeB3JX9ngKKbsOyPrRPW5ChrYCGDUW9jzL0iumIuCEhtny1leEe8RFwE18cZwLk5d_f_wmd0d0Vssdp148nY"
                  alt="Đất Mũi"
                />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    3N2Đ
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary font-label-sm text-label-sm">
                    Địa Đầu Tổ Quốc
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>Ngọc Hiển, Cà Mau</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Không gian du lịch cộng đồng Đất Mũi
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Học cách giở lợp bắt cua biển, đặt trúm cá thòi lòi trên bùn lầy rừng ngập mặn và ăn bữa cơm đậm chất lính đi mở cõi phương Nam.
                </p>
                <div className="mt-2 p-space-xs rounded bg-surface-container-low text-primary font-body-sm text-body-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    verified
                  </span>
                  <span>OCOP: Bánh phồng tôm Đất Mũi &amp; Cua Năm Căn</span>
                </div>
              </div>
            </div>
            <div className="p-space-md pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  thumb_up
                </span>
                <span>98% hài lòng (489 đánh giá)</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold hover:underline"
                href="#"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Pagination */}
        <div className="flex items-center justify-center gap-space-xs pt-space-lg">
          <button className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center hover:bg-surface-container">
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold">
            1
          </button>
          <button className="w-10 h-10 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md hover:bg-surface-container">
            2
          </button>
          <button className="w-10 h-10 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md hover:bg-surface-container">
            3
          </button>
          <span className="px-2 text-outline">...</span>
          <button className="w-10 h-10 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md hover:bg-surface-container">
            18
          </button>
          <button className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center hover:bg-surface-container">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
