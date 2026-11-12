export function FeaturedEcoRouteSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-lg">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
              Tâm Điểm Mùa Này
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary">
              Tuyến Du Lịch Trải Nghiệm Tiêu Điểm
            </h2>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant hidden md:inline">
            Bình chọn bởi Hội đồng Di sản &amp; Bạn đọc OCOP
          </span>
        </div>
        {/* Hero Card + 3 Secondary Cards Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Main Lead Feature Card (8 Cols) */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="relative w-full h-[380px] lg:h-[460px] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-alt="Breathtaking morning mist enveloping terraced Shan Tuyet ancient tea mountains in Ta Xua and Ban Cong, Vietnam. Indigenous Dao and H'Mong women wearing traditional embroidered indigo garments delicately picking dew-covered silver white tea buds under golden sunrise light, organic and documentary photojournalism style, lush forest canopy."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTKN1N-OtLKvsIU818IhiF8PTDUpa8gECjuWnQudd-ocDrhkRurx-Rz2C6T8fmW6p4RqbAfaK711H6FdNlfL3idfZnQ-WHwuAAK7NYzKquDcNaOKdQ-p4XzuXBv7HX-6A3fscjlZoIaWUPsA2uI2NoqyPwWwQ6HzBDtwW1J21Rb2S5juZmj0iO1XGqlQXwA-4cgivHYXbYHCrhxH07cf4fWXokbI4uY6xKNKfoY_c"
                alt="Tà Xùa &amp; Bản Công"
               loading="lazy" decoding="async"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute top-space-md left-space-md flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                  Hành trình vàng
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm font-medium">
                  3 Ngày 2 Đêm
                </span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md text-on-primary flex flex-col gap-space-xs">
                <div className="flex items-center gap-2 text-tertiary-fixed font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Sơn La — Yên Bái • Vùng cao Tây Bắc</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm lg:text-headline-md text-on-primary">
                  Săn mây đỉnh Tà Xùa &amp; Trải nghiệm hái chè Shan Tuyết cổ thụ Bản Công
                </h3>
              </div>
            </div>
            <div className="p-space-lg flex flex-col gap-space-md bg-surface-container-lowest">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Lộ trình đi sâu vào vùng chè trăm tuổi trên độ cao 1.800m. Du khách cùng người Dao đỏ dậy từ 5 giờ sáng hái búp chè ngậm sương, tự tay vò và sao chè theo phương pháp thủ công bên bếp lửa truyền thống, thưởng thức tiệc cá suối nướng và rượu men lá.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    OCOP Trực tiếp:
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-low text-primary font-body-sm text-body-sm font-medium">
                    Trà mạn Shan Tuyết 5 sao
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-low text-primary font-body-sm text-body-sm font-medium">
                    Mật ong rừng Tà Xùa
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-low text-primary font-body-sm text-body-sm font-medium">
                    Thịt trâu sấy gác bếp
                  </span>
                </div>
                <a
                  className="inline-flex items-center gap-1.5 text-secondary hover:text-on-secondary-container font-label-md text-label-md font-semibold group/btn"
                  href="#"
                >
                  <span>Khám phá trọn gói tuyến</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* 3 Follow-up Destinations (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            {/* Sub-item 1 */}
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-xs hover:bg-surface-container-low transition-colors group">
              <div className="relative h-36 rounded-lg overflow-hidden mb-1">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Serene mangrove island landscape at Cu Lao Dung, Soc Trang, Mekong Delta. Traditional wooden boat navigating narrow brackish river channels flanked by lush water coconut palms, local farmers collecting natural Nypa palm sweet sap in earthen clay pots under warm equatorial sunlight."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsBwPCY5zDZ-N_H5rQMJSA9N34eqKb4k8W933bqwoz_M-CHoNCjrUVsdwC2r3WtHoQpbmVXT5zBd5FL-5N03Jo_x3zw2d5Com5mE1Gf_dR9wGreq4nyQtDtxuQS9QnTr6RoR1QMb0vrRq21paZbdplEIaidR8kOkyHCw3-ipqI7mo_hhZOor3huMLkU1x0O_MyGDjKynJJAwMFYP-bh4oFsY4HLn3QmsKaTI5cKso"
                  alt="Cù Lao Dung"
                 loading="lazy" decoding="async"/>
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary/90 text-on-primary font-label-sm text-label-sm">
                  Đồng bằng Sông Cửu Long
                </span>
              </div>
              <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">star</span>
                <span>OCOP 4 sao • Mật dừa nước hữu cơ</span>
              </div>
              <h4 className="font-title-editorial text-title-editorial text-primary leading-tight">
                Miệt vườn Cù Lao Dung (Sóc Trăng): Gác kèo ong &amp; thu hoạch mật dừa nước
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Chèo xuồng len lỏi rặng bần ngập mặn, học bí quyết lấy mật hoa dừa tự nhiên và thưởng thức bữa trưa cá lóc nướng trui rơm rạ.
              </p>
            </div>

            {/* Sub-item 2 */}
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-xs hover:bg-surface-container-low transition-colors group">
              <div className="relative h-36 rounded-lg overflow-hidden mb-1">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Misty herbal valley of Ta Phin in Sa Pa Lao Cai Vietnam. Terraced organic medicinal botanical gardens with Red Dao ethnic women harvesting aromatic medicinal foliage for traditional herbal baths, wooden tubs steaming with herbal infusion against mountain backdrops."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpXvnwkYChUlPf6zq4v3EY9lFVNd629VgTsLoGwvQ_rKDagQn8y4b9qvgeYY1AtJ1g0rpH5H5Nrehp7IPCaVLewyreUlsLAEOZPEc_VnFgkyjm7bkqsKFDET25oe901Sh88zmYZowMvlWbHoig1jLDExZU3tnnfvHPtwkOGqFT072RLCw2-Bic4DNgushwwgkTrEtRj5v8Evn6oLg9QGWF9NkTGCPGGQcMV9LcHsE"
                  alt="Tả Phìn"
                 loading="lazy" decoding="async"/>
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary/90 text-on-primary font-label-sm text-label-sm">
                  Tây Bắc • Sa Pa
                </span>
              </div>
              <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">spa</span>
                <span>Dược liệu bản địa • Dao Đỏ</span>
              </div>
              <h4 className="font-title-editorial text-title-editorial text-primary leading-tight">
                Thung lũng dược liệu Tả Phìn: Tắm lá thuốc và vườn thảo dược hữu cơ
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Nhận diện 40 vị thuốc rừng quý hiếm, ngâm mình trong thùng gỗ pơ mu và nghe thầy lang truyền miệng bí quyết bảo tồn nguồn gen.
              </p>
            </div>

            {/* Sub-item 3 */}
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-xs hover:bg-surface-container-low transition-colors group">
              <div className="relative h-36 rounded-lg overflow-hidden mb-1">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Vibrant blooming pink lotus fields in Dong Thap wetland alongside Tram Chim national park. Wooden sampan rowing amidst tall melaleuca forests, Sarus cranes taking flight at sunset over mirror-like wetlands, peaceful Vietnamese countryside."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiY9TemLlSQ-8NMYL12xvTmOFseaHQN42v-FlJ2GyBnAyciO3WRZGiFMybjD-ENvqsLxc2VOlYtYJDfr80Su52yUnozy0Jd17YCzAdlT5DpnekPePdLLtg_7I4rxNB_MQ_Bkw-JwgS6htIvGhdXEUjEolIRocYXYzvQWrmIga42Z2VuwN1Gp48sYr3AfZrkI1UZQFuWV_WM5D_dDz5M8wHsG2A9wH2g0B7wtotcNU"
                  alt="Tràm Chim &amp; Đồng Sen"
                 loading="lazy" decoding="async"/>
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary/90 text-on-primary font-label-sm text-label-sm">
                  Đồng Tháp Mười
                </span>
              </div>
              <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">local_florist</span>
                <span>Sinh thái đất ngập nước &amp; Trà sen</span>
              </div>
              <h4 className="font-title-editorial text-title-editorial text-primary leading-tight">
                Tràm Chim &amp; Đồng sen Tháp Mười: Ngắm sếu, hái sen và ướp trà sen
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Trải nghiệm làm trà sen ướp qua đêm từ bông sen bách diệp mọc tự nhiên trên đồng lũ phù sa sông Mê Kông.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
