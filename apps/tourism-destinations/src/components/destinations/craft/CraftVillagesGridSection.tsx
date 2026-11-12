export function CraftVillagesGridSection() {
  return (
    <section className="w-full bg-surface py-space-md">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <span className="w-3 h-3 bg-secondary rounded" />
            <h2 className="font-headline-sm text-headline-sm text-primary">
              Tập danh mục Làng nghề Điểm đến Di sản
            </h2>
            <span className="bg-surface-container-high text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold">
              24 kết quả / trang
            </span>
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant hidden sm:block">
            Sắp xếp theo:{' '}
            <span className="text-primary font-bold">Xếp hạng OCOP &amp; Bề dày niên đại</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Card 1: Bát Tràng */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  data-alt="Nghệ nhân gốm Bát Tràng Hà Nội đang vuốt men rạn trên bàn xoay thủ công. Những lọ hoa men rạn men lam cổ truyền được xếp thẳng tắp trong xưởng gốm cổ kính, ánh sáng tự nhiên rọi qua khung cửa gỗ rêu phong, phản chiếu nét tĩnh lặng của không gian sáng tạo truyền thống."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1yJvyc1zvUsrtVSGieEULaCfmmfPcqz57ZKR2EOL-Jy-Q2HnBvZ8mDUQUN8wn0hQISJHSiJl-4FpPT1FYQURMoX3B-IgCCItuv41BGTbYQGoydrdV-kG7MG2RAeRhawLGNG2lI4l4xemJa8AyLJIVkLjsP8Sv3Zc3MXzq-yBOYMfE1NXX3SfMPOSGZ2R5k0pAHvu_LuU5dY_3aQCAO7dDEdQLuqdMDpKhKwkkbz4"
                  alt="Bát Tràng"
                />
                <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                  <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase">
                    Đồng bằng sông Hồng
                  </span>
                  <span className="bg-surface-container-lowest text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                    700 năm
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-primary/95 text-on-primary px-space-sm py-0.5 rounded flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-tertiary-container">
                    OCOP 5 Sao Quốc gia
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Gia Lâm, Thành phố Hà Nội</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng gốm Bát Tràng
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Bộ ấm chén men rạn hoa sen và gốm sứ tâm linh thờ cúng, nơi tinh hoa dòng men ngọc
                  nung củi lưu giữ trọn vẹn văn hiến Thăng Long.
                </p>
                <div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-xs rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Nghệ nhân: <strong className="text-on-surface">Tô Thanh Sơn</strong>
                  </span>
                  <span>35 lò gốm mẫu</span>
                </div>
              </div>
            </div>
            <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">Hồ sơ #DT-HN-001</span>
              <a
                className="inline-flex items-center gap-space-xs text-primary group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                href="#"
              >
                <span>Khám phá làng nghề</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 2: Quất Động */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  data-alt="Cận cảnh đôi bàn tay của nữ nghệ nhân thêu tay làng Quất Động Thường Tín Hà Nội đang thoăn thoắt kéo sợi chỉ tơ nhiều màu trên khung thêu gỗ. Bức tranh thêu phong cảnh chùa Một Cột và rặng tre Việt Nam với chi tiết sắc nét, đường chỉ mịn như lụa vẽ, ánh sáng studio mềm mại."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2LLphJc44wyCvB1_wdKRu6rdMTXPDyXdFNQbkoMLx9-3i8RNl705p0dQPXdK1ls5_yuwrBe7W_MFwHjov-RfeV3srMBvV49xwm27A665KHei1UJnFitcdTbWp0DworVr1dX7UxBVKCLAnIslXP12_kAWFc5NlHXJOSC30C2JFekxY-hBDpBupW3OCzlafBEc9Uz7iJnmzUNOoOscRxPfGpaeBExQ3x7ICfGfrGU"
                  alt="Quất Động"
                />
                <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                  <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase">
                    Đồng bằng sông Hồng
                  </span>
                  <span className="bg-surface-container-lowest text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                    400 năm
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-primary/95 text-on-primary px-space-sm py-0.5 rounded flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-tertiary-container">
                    OCOP 4 Sao Tỉnh
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Thường Tín, Thành phố Hà Nội</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng thêu Quất Động
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Tranh thêu tay phong cảnh di sản và hoàng bào phục dựng, bí quyết phối màu chỉ tơ
                  độc nhất vô nhị do cụ tổ Bùi Quốc Khái truyền dạy.
                </p>
                <div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-xs rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Nghệ nhân: <strong className="text-on-surface">Hoàng Thị Khương</strong>
                  </span>
                  <span>Thêu tay hai mặt</span>
                </div>
              </div>
            </div>
            <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">Hồ sơ #DT-HN-018</span>
              <a
                className="inline-flex items-center gap-space-xs text-primary group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                href="#"
              >
                <span>Khám phá làng nghề</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 3: Ngũ Xã */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  data-alt="Nghệ nhân làng đúc đồng Ngũ Xã Ba Đình Hà Nội đang gõ búa chạm khắc hoa văn rồng thời Lý trên mặt quả đại hồng chung bằng đồng đỏ. Lò than rực ánh lửa ấm, những pho tượng Phật đồng đen trầm mặc toát lên khí phách hào hoa kinh thành Thăng Long."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa0-xEtUvYDvfQUFl0NE5Y3hzKcB2zGpMhVIM0xBBWZF0s-jJw1EI8KDup9ylEPGhCl7Z0sNBWbvV3jDUxb2fy2MDtCsVd3AVjM92rqbylfXV8WzgArE02Yz_ZTw1prwygbP5g7yQReCBn_hIg5h3EaZHYavn_gOu-0pVEvkey12t2paur4yhXdJQKmRrYX6YOqEzrBxuLcEQ0PAVGmhqErS0mMGeJDwS6J3bc7ks"
                  alt="Ngũ Xã"
                />
                <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                  <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase">
                    Đồng bằng sông Hồng
                  </span>
                  <span className="bg-surface-container-lowest text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                    500 năm
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-primary/95 text-on-primary px-space-sm py-0.5 rounded flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-tertiary-container">
                    OCOP 4 Sao Cấp Tỉnh
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Ba Đình, Thành phố Hà Nội</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng đúc đồng Ngũ Xã
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Nghệ thuật đúc tượng đồng liền khối và chuông khánh di sản, biểu tượng của sự uy
                  nghiêm và kỹ thuật phối hợp hợp kim đồng thau đỉnh cao.
                </p>
                <div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-xs rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Nghệ nhân: <strong className="text-on-surface">Nguyễn Văn Ứng</strong>
                  </span>
                  <span>Đúc liền khối</span>
                </div>
              </div>
            </div>
            <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">Hồ sơ #DT-HN-042</span>
              <a
                className="inline-flex items-center gap-space-xs text-primary group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                href="#"
              >
                <span>Khám phá làng nghề</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 4: Mỹ Nghiệp */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  data-alt="Phụ nữ Chăm làng dệt thổ cẩm Mỹ Nghiệp tỉnh Ninh Thuận đang ngồi dệt vải trên khung dệt gỗ cổ xưa trong ngôi nhà rường truyền thống. Những cuộn chỉ màu đỏ chàm vàng rực rỡ dệt nên họa tiết tháp Chăm, quả trám và rồng bay sinh động, nắng gió phương Nam rọi vào ấm áp."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfJEveOI9zxGOs6hz567PKCuO4z19lJPLOpUXZLiwgvAhyoefXBoKcDO116wnEsJrHmVXNTddcEDLSOSlOdzy3OboyliSFpCpUKllj35chhqVldIH6BEAKQBTKwZWJhZeswwhkEbeExkZWjMZafgf3O-bYGFoYDuJqRuqTTlzMfzxGiZVRJYTlyx_CJw6c66a_nqo2Nn90TCNaSV0Fm5OxnLMIYxO0NYvGRLWyFU"
                  alt="Mỹ Nghiệp"
                />
                <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                  <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase">
                    Nam Trung Bộ
                  </span>
                  <span className="bg-surface-container-lowest text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                    900 năm
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-primary/95 text-on-primary px-space-sm py-0.5 rounded flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-tertiary-container">
                    OCOP 4 Sao Cấp Tỉnh
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Ninh Phước, Tỉnh Ninh Thuận</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng dệt thổ cẩm Mỹ Nghiệp (Inrah)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Khăn choàng và váy dạ hội hoa văn cổ của người Chăm dệt từ sợi bông tự nhiên,
                  nhuộm vỏ cây rừng và nhựa kiến đen bản địa.
                </p>
                <div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-xs rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Nghệ nhân: <strong className="text-on-surface">Thuận Thị Trụ</strong>
                  </span>
                  <span>Nhuộm màu thảo mộc</span>
                </div>
              </div>
            </div>
            <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">Hồ sơ #DT-NT-009</span>
              <a
                className="inline-flex items-center gap-space-xs text-primary group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                href="#"
              >
                <span>Khám phá làng nghề</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 5: Đồng Xâm */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  data-alt="Thợ chạm bạc làng Đồng Xâm Kiến Xương Thái Bình dùng đục nhỏ chạm khắc tỉ mỉ bức tranh tứ linh trên đĩa bạc mỹ nghệ nguyên chất. Ánh bạc trắng lấp lánh phản chiếu các chi tiết chạm lộng kênh bong kỳ công, không gian đậm chất làng quê đồng bằng châu thổ sông Hồng."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy5N172rTWOqSDkjspr2c3f8Z4YYPsBQo75NPjOu-Wft8Rht8rkCTi5cTO6QxbrkjmCdf3t8Ecrr55kvejCwfF-80q58G_JCVpXrx3NpKq92swAowr8Bhszh5AC4NvKKVo7dxQZ9NwP256fK60AO-_XGFNESR_0wfrYgmL3trj-31HHTYtcO8zGVQ46798bGR8jy7QoK9lQZBFl-2VBypECmIgyTv2gD2KmmL2Liw"
                  alt="Đồng Xâm"
                />
                <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                  <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase">
                    Đồng bằng sông Hồng
                  </span>
                  <span className="bg-surface-container-lowest text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                    550 năm
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-primary/95 text-on-primary px-space-sm py-0.5 rounded flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-tertiary-container">
                    OCOP 4 Sao Cấp Tỉnh
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Kiến Xương, Tỉnh Thái Bình</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng chạm bạc Đồng Xâm
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Hộp trầu, tranh phong cảnh và bộ đỉnh bạc mỹ nghệ với đường thúc chạm nổi chuẩn xác
                  từng milimet, tinh xảo bậc nhất chốn Bắc Kỳ.
                </p>
                <div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-xs rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Nghệ nhân: <strong className="text-on-surface">Đinh Quang Thắng</strong>
                  </span>
                  <span>Kỹ thuật chạm lộng</span>
                </div>
              </div>
            </div>
            <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">Hồ sơ #DT-TB-023</span>
              <a
                className="inline-flex items-center gap-space-xs text-primary group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                href="#"
              >
                <span>Khám phá làng nghề</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 6: Kim Bồng */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  data-alt="Xưởng mộc truyền thống làng Kim Bồng Cẩm Kim Hội An Quảng Nam bên dòng sông Thu Bồn hiền hòa. Mạt cưa thơm nức mùi gỗ mít gỗ kiền kiền, nghệ nhân điêu khắc đang tạo hình các mảng chạm đầu rồng cho thuyền gỗ và nhà cổ Hội An, không khí lao động miệt mài."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu3jO4Eo-fyS37Pt2p82nYg0iyVjUdeQbk1kr_xYfkINPXenWFhO7NO4CLp1iSqDvhybpPIHo9yhVzCn7cQ1kvsyTN8LD20mOF-9wc8hOIPMFkKNs0qycsKCfYYQILf-Q4G80Y-Dey3p8kWi2Wx4kk6HKdIEZLhh-rQ2hHr8cjGBq6egmpeC3Meu3apal4Wnhsya2ZUvRmhVn5f1MVw6KSB0SrqWHPZwDs--N13r0"
                  alt="Kim Bồng"
                />
                <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                  <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase">
                    Duyên hải Miền Trung
                  </span>
                  <span className="bg-surface-container-lowest text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                    600 năm
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-primary/95 text-on-primary px-space-sm py-0.5 rounded flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-tertiary-container">
                    OCOP 4 Sao Cấp Tỉnh
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Hội An, Tỉnh Quảng Nam</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng mộc Kim Bồng
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Nơi đóng nên những con thuyền buôn vượt đại dương và chạm khắc các công trình kiến
                  trúc rường cột làm nên Di sản văn hóa thế giới Đô thị cổ Hội An.
                </p>
                <div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-xs rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Nghệ nhân: <strong className="text-on-surface">Huỳnh Ri</strong>
                  </span>
                  <span>Mộc đóng tàu &amp; Kiến trúc</span>
                </div>
              </div>
            </div>
            <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">Hồ sơ #DT-QN-015</span>
              <a
                className="inline-flex items-center gap-space-xs text-primary group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                href="#"
              >
                <span>Khám phá làng nghề</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 7: Non Nước */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  data-alt="Tác phẩm điêu khắc đá cẩm thạch tinh xảo tại làng đá mỹ nghệ Non Nước dưới chân núi Ngũ Hành Sơn Đà Nẵng. Bức tượng Quan Âm Bồ Tát bằng đá trắng ngà mượt mà như ngọc, xung quanh là các tảng đá cẩm thạch thô và búa đục kim loại, nắng biển chiếu rực rỡ."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNlogQgIMhixb7Wx4tkJk9cormGLMFA3t5dQNcQRLP4_y2fArr_aR8BWaS0WoutWEgerZZUJo-9ioLh2XcgNs_yWCMlJG-bO0E-ktTuXWhPL6FUywYS5TrQ9qf870Gf9FF8JuJczeiERYwL67wTsgXMVpJ-YgnGXzz6czy2_fRQPTRQ3_bCIKLmLQBDUlsXc-BZquhiQM7qCPTWyPLqNYSqhlg0W2kISNZZTYJ9jQ"
                  alt="Non Nước"
                />
                <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                  <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase">
                    Nam Trung Bộ
                  </span>
                  <span className="bg-surface-container-lowest text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                    400 năm
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-primary/95 text-on-primary px-space-sm py-0.5 rounded flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-tertiary-container">
                    OCOP 4 Sao Cấp Tỉnh
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Ngũ Hành Sơn, Thành phố Đà Nẵng</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng đá mỹ nghệ Non Nước
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Nghệ thuật đẽo gọt đá cẩm thạch thành những tượng thần, phù điêu và đồ phong thủy
                  gắn liền với danh thắng Ngũ Hành Sơn huyền thoại.
                </p>
                <div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-xs rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Nghệ nhân: <strong className="text-on-surface">Nguyễn Long Bửu</strong>
                  </span>
                  <span>Điêu khắc cẩm thạch</span>
                </div>
              </div>
            </div>
            <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">Hồ sơ #DT-DN-004</span>
              <a
                className="inline-flex items-center gap-space-xs text-primary group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                href="#"
              >
                <span>Khám phá làng nghề</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 8: Thuận Hưng */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  data-alt="Khung cảnh làng nghề bánh tráng Thuận Hưng Thốt Nốt Cần Thơ rực rỡ với hàng nghìn vỉ phên tre phơi bánh tráng trắng muốt trải dài dọc bờ kênh sông Hậu. Người thợ tráng bánh tay cầm gáo dừa múc bột gạo nghi ngút khói thơm, ánh ban mai Nam Bộ trong trẻo."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqS6gZsqyk1QUjnGq_kmCAX-sSoFxm6Cy37QwHtLq0AJ1C3odfaneBknMznbSatTPB_AYDrWvoRqp1Ga2jRmdVJV5E6aVfMY5YhByOfPlqQqlku8NBLxs16TIMaeMnYThClLijGNAk-mFVy3FpgFN2ee9Ti-7qVLths0SHvqlW7GuvB0yHXAcSAJBMAyKRBdHUSVzvhVZxzbqYVzzAj7_OnoqjVXftZvaipmswmAo"
                  alt="Thuận Hưng"
                />
                <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                  <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase">
                    ĐBSCL
                  </span>
                  <span className="bg-surface-container-lowest text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                    200 năm
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-primary/95 text-on-primary px-space-sm py-0.5 rounded flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-tertiary-container">
                    OCOP 4 Sao Cấp Tỉnh
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Thốt Nốt, Thành phố Cần Thơ</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng bánh tráng Thuận Hưng
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Bánh tráng nem, bánh tráng dừa và bánh xốp thơm lừng mùi gạo lúa mới đồng bằng, gìn
                  giữ phong vị ẩm thực dân dã miệt vườn sông nước.
                </p>
                <div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-xs rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Nghệ nhân: <strong className="text-on-surface">Trần Thị Bé</strong>
                  </span>
                  <span>Bánh tráng thủ công</span>
                </div>
              </div>
            </div>
            <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">Hồ sơ #DT-CT-031</span>
              <a
                className="inline-flex items-center gap-space-xs text-primary group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                href="#"
              >
                <span>Khám phá làng nghề</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Card 9: Sa Đéc */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  data-alt="Làng hoa kiểng Sa Đéc Đồng Tháp với những giàn hoa cúc mâm xôi cúc vạn thọ trồng trên giàn tre bắc trên mặt nước phù sa. Người nông dân chèo xuồng ba lá chăm sóc hoa rực rỡ sắc vàng sắc hồng dưới ánh bình minh miền Tây trù phú, điểm đến du lịch OCOP sinh thái tuyệt mỹ."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgVGdrZwIpn8Jwc30RBEGOirFn4KC2DR3INGlT85VBOczJcj_sqa6kBl8ijnBhTMZeG6sJqb7Eos3nKRDxS5hWDN4GXaKA7VdRxmAJDYq0_k80XzoSUvO47FVgf8wgrG3wvRGcY-5ldzOYXIPhBykhATKcB5rHIrpQmz-X0ngfV377hT0zmDLQ2Ty4MGu4ya5GoLyH8Llj-4wVL1WSDSlB7A5kP7o7E2MJhc4zh5k"
                  alt="Sa Đéc"
                />
                <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
                  <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase">
                    ĐBSCL
                  </span>
                  <span className="bg-surface-container-lowest text-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm">
                    130 năm
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-primary/95 text-on-primary px-space-sm py-0.5 rounded flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-tertiary-container">
                    OCOP 4 Sao Du Lịch
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Thành phố Sa Đéc, Tỉnh Đồng Tháp</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                  Làng hoa kiểng Sa Đéc
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Vựa hoa kiểng trăm năm bên bờ sông Tiền, phát triển mô hình du lịch trải nghiệm
                  nông nghiệp sinh thái kết hợp bảo tồn giống hoa bản địa.
                </p>
                <div className="mt-space-xs pt-space-xs bg-surface-container-low p-space-xs rounded flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    Nghệ nhân: <strong className="text-on-surface">Nguyễn Phước Lộc</strong>
                  </span>
                  <span>Du lịch nông nghiệp</span>
                </div>
              </div>
            </div>
            <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">Hồ sơ #DT-DT-011</span>
              <a
                className="inline-flex items-center gap-space-xs text-primary group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                href="#"
              >
                <span>Khám phá làng nghề</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </article>
        </div>

        {/* Journalistic Archival Pagination */}
        <div className="flex items-center justify-between pt-space-md">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Hiển thị 9 trên tổng số 216 làng nghề trọng điểm quốc gia
          </span>
          <div className="flex items-center gap-space-xs">
            <button className="w-9 h-9 rounded bg-surface-container-lowest text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="w-9 h-9 rounded bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-9 h-9 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-9 h-9 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
              3
            </button>
            <span className="px-space-xs text-outline font-mono">...</span>
            <button className="w-9 h-9 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
              24
            </button>
            <button className="w-9 h-9 rounded bg-surface-container-lowest text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
