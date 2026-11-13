export function CraftTaxonomySection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              Phân loại học thủ công dân tộc
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary">
              Năm nhóm vật liệu dệt nên diện mạo nông thôn
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Mỗi chất liệu đại diện cho một tầng trầm tích địa lý và tri thức thực vật học, khoáng
            vật học bản địa được tích lũy qua hàng thế kỷ.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
          {/* Category 1 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">soup_kitchen</span>
              </div>
              <span className="font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant px-space-xs py-0.5 rounded font-mono">
                380+ Làng
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                Gốm sứ &amp; Đất nung
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Chu Đậu, Bát Tràng, Phù Lãng, Thổ Hà, Bàu Trúc
              </p>
            </div>
          </div>

          {/* Category 2 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">texture</span>
              </div>
              <span className="font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant px-space-xs py-0.5 rounded font-mono">
                420+ Làng
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                Dệt lụa &amp; Thổ cẩm
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Vạn Phúc, Nha Xá, Mỹ Nghiệp, Lùng Tám, Mã Châu
              </p>
            </div>
          </div>

          {/* Category 3 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">grass</span>
              </div>
              <span className="font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant px-space-xs py-0.5 rounded font-mono">
                510+ Làng
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                Mây tre đan &amp; Cói
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Phú Vinh, Bao La, Kim Sơn, Thạch Cầu, Cần Thơ
              </p>
            </div>
          </div>

          {/* Category 4 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">carpenter</span>
              </div>
              <span className="font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant px-space-xs py-0.5 rounded font-mono">
                340+ Làng
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                Điêu khắc &amp; Sơn mài
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Hạ Thái, Cát Đằng, Non Nước, Kim Bồng, Chàng Sơn
              </p>
            </div>
          </div>

          {/* Category 5 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">hardware</span>
              </div>
              <span className="font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant px-space-xs py-0.5 rounded font-mono">
                200+ Làng
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                Đúc đồng &amp; Kim hoàn
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Ngũ Xã, Đại Bái, Định Công, Đồng Xâm, Phước Kiều
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
