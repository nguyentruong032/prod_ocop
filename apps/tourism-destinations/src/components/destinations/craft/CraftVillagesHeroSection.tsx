export function CraftVillagesHeroSection() {
  return (
    <section className="w-full bg-surface py-space-xl">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
          <div className="max-w-3xl flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span>Di sản trăm năm &amp; Tinh hoa thủ công bản địa</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Hồn cốt Làng nghề truyền thống Việt Nam: Nơi bàn tay tài hoa chạm vào thời gian
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant pt-space-xs">
              Tôn vinh hơn 1.850 làng nghề truyền thống trên dải đất hình chữ S, nơi lưu giữ tinh
              hoa tổ nghề, trầm tích văn hóa cha truyền con nối và khát vọng vươn tầm thế giới qua
              từng chứng chỉ OCOP Quốc gia.
            </p>
          </div>
          {/* Archival Stat Badges */}
          <div className="grid grid-cols-3 gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm shrink-0">
            <div className="flex flex-col gap-space-xs">
              <span className="font-headline-md text-headline-md text-primary font-bold">1.850+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Làng nghề ghi nhận
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-headline-md text-headline-md text-secondary font-bold">3.200+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Sản phẩm OCOP thủ công
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-headline-md text-headline-md text-tertiary-container font-bold">450+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Nghệ nhân ưu tú &amp; NNND
              </span>
            </div>
          </div>
        </div>

        {/* Feature Split Mosaic: Phù Lãng Hero (65%) & 3 Heritage Spotlights (35%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Main Lead Feature (8 Columns) */}
          <article className="lg:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="relative w-full h-[380px] md:h-[460px] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Toàn cảnh làng gốm men tro Phù Lãng Bắc Ninh cổ kính ven bờ sông Cầu. Hình ảnh những lò nung củi truyền thống đang nghi ngút khói lam chiều, hàng trăm chiếc chum vại bình gốm đất nung mộc mạc xếp lớp trên sân gạch rêu phong. Tông màu nâu đất nung ấm áp, ánh chiều tà vàng mật ong rọi qua hàng cây cau và mái ngói âm dương, phong cách nhiếp ảnh tài liệu báo chí nghệ thuật di sản sâu lắng."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdp0NBRyxW1JBNWj-XwWMptOBSTCh42VE0Ary6ww4X8kxMp5OS4f_nikXhGunAtDBJ9xOc4-rHz_FdqU-ZB2HbQ3-STD-9f2y8-gR0k5pldYVjZKJPa4tnqM4KKE55VneK7JEMSmI4ae-rQh-A-6vMDsIso2d6VSJUQCxSTNyZ6Xbm22LyD5PR3iRmc9Fx53N9BYJQD9aHZozyNV7j0u_npogjyDKXyEHarYW7Ios"
                alt="Gốm Phù Lãng"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute top-space-md left-space-md flex flex-wrap gap-space-xs">
                <span className="bg-secondary text-on-secondary px-space-sm py-space-xs rounded font-label-md text-label-md uppercase tracking-wider font-semibold">
                  Làng nghề 800 năm
                </span>
                <span className="bg-surface-container-lowest/90 backdrop-blur-md text-primary px-space-sm py-space-xs rounded font-label-sm text-label-sm flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-container">
                    military_tech
                  </span>
                  OCOP 4 Sao Tỉnh Bắc Ninh
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-space-lg md:p-space-xl text-on-primary flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-md font-label-sm text-label-sm text-inverse-primary">
                  <span>Văn hóa Gốm cổ Bắc Bộ</span>
                  <span>•</span>
                  <span>Phóng sự điền dã chuyên sâu</span>
                  <span>•</span>
                  <span>7 phút đọc</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-primary">
                  Gốm Phù Lãng: Bí mật trầm tích đất sét hồng và ngọn lửa nghìn năm sông Cầu
                </h2>
                <p className="font-body-md text-body-md text-on-primary-container line-clamp-2">
                  Không diêm dúa son phấn men ngọc men lam, đất sét đỏ au lấy từ đáy sông và
                  tro gỗ nghiến đã làm nên chất men da lươn thô ráp, thủy chung với ngọn lửa
                  rừng suốt tám thế kỷ thăng trầm.
                </p>
              </div>
            </div>
            <div className="p-space-md md:p-space-lg flex items-center justify-between bg-surface-container-low">
              <div className="flex items-center gap-space-md">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-title-editorial font-bold">
                  NV
                </div>
                <div>
                  <p className="font-title-editorial text-body-md text-primary font-bold">
                    Nguyễn Vĩnh Phúc
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Ban Nghiên cứu Di sản Dân tộc học
                  </p>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-sm rounded transition-colors uppercase tracking-wider"
                href="#"
              >
                <span>Đọc toàn văn phóng sự</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </article>

          {/* Right 3 Spotlight Cards (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-space-md justify-between">
            {/* Item 1 */}
            <article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-xs group">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                    Dệt lụa • Hà Nội
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                    Làng lụa Vạn Phúc: Nếp tơ óng ả nghìn năm kinh kỳ
                  </h3>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors shrink-0">
                  arrow_outward
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Dòng lụa Vân cổ truyền dệt hoa cúc, hoa mai bằng tơ tằm nguyên chất bảo lưu giá
                trị ngàn xưa giữa phố thị sầm uất.
              </p>
              <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-space-xs text-tertiary-container font-semibold">
                  <span className="material-symbols-outlined text-[14px]">star</span> OCOP 5 Sao Quốc gia
                </span>
                <span>Hơn 1.000 năm tuổi</span>
              </div>
            </article>

            {/* Item 2 */}
            <article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-xs group">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                    Mây tre nón • Hà Nội
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                    Làng nón lá Chuông: Từng mũi kim khâu trên vành nón trắng
                  </h3>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors shrink-0">
                  arrow_outward
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Lá lụi lấy từ rừng sâu, cước thanh tao và đôi tay thoăn thoắt của những bà mế
                vùng bãi sông Đáy giữ cốt cách thanh cao phụ nữ Việt.
              </p>
              <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-space-xs text-tertiary-container font-semibold">
                  <span className="material-symbols-outlined text-[14px]">star</span> OCOP 4 Sao Cấp Tỉnh
                </span>
                <span>Hơn 300 năm tuổi</span>
              </div>
            </article>

            {/* Item 3 */}
            <article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-xs group">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                    Cói &amp; Bèo bồng • Ninh Bình
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                    Làng cói Kim Sơn: Đánh thức bãi bồi bằng sợi cói vươn trời Tây
                  </h3>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors shrink-0">
                  arrow_outward
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Hành trình quai đê lấn biển của Doanh điền sứ Nguyễn Công Trứ hóa thành những
                kiện thảm cói, hộp thủ công mỹ nghệ xuất ngoại khắp năm châu.
              </p>
              <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-space-xs text-tertiary-container font-semibold">
                  <span className="material-symbols-outlined text-[14px]">star</span> OCOP 5 Sao Xuất Khẩu
                </span>
                <span>Hơn 200 năm tuổi</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
