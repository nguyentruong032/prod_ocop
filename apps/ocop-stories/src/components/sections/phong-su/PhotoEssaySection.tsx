export function PhotoEssaySection() {
  return (
    <section className="w-full bg-surface-container-lowest py-14 lg:py-20 border-b border-[#e2dbd0]">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-[22px]">photo_library</span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                Phóng sự ảnh tương tác (Photo Essays)
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary font-bold">
              Ký họa Đất nước qua Lăng kính Nhiếp ảnh Di sản
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
              Mỗi bộ ảnh là một công trình điền dã chuyên sâu, kết hợp ghi chép thực địa và nghệ thuật ánh sáng tài liệu để tôn vinh vẻ đẹp lao động thuần hậu.
            </p>
          </div>
          <a
            className="px-4 py-2.5 rounded-lg border border-[#9c4a27] text-secondary hover:bg-secondary hover:text-white font-label-md text-label-md transition-colors flex items-center gap-2 shrink-0"
            href="#exhibitions"
          >
            <span>Xem trọn bộ 350+ Triển lãm ảnh</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
        {/* Photo Story Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Big Hero Story Card (7 cols) */}
          <div className="md:col-span-7 bg-surface-bright rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-alt="Vast golden tiered rice terrace fields in Mu Cang Chai Yen Bai during harvest season with Hmong women carrying woven bamboo baskets, warm late afternoon sunlight sweeping across mountain valleys, award-winning documentary photo style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3usSIwJnho7ySHbOay9B1XWN-Voaa0MqJmxTRSnGZ85kIvu29Q7TJlPIgrdVDzM5ARxzo4IGb91T0CEpHrTf_eoBWmPIhoHluPXmwO8cGlUHcAOGOkXFUdzyVV0MzjxrPv9CymJ-nPphmtyBqiSdfJhpJ6EEgr6QcYBId8_YxnVs-S8ZYDyjYdKEez6SGuceYyuT0TyuCcrR-rYgr-TvxjdPzmbsU2fOqzSmExyU"
                alt="Gặt lúa trên lưng trời: Bản hùng ca màu mật của người Mông Mù Cang Chải"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wider shadow-xs">
                  Bộ ảnh 24 tác phẩm • Giải Báo chí Quốc gia 2025
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-white/80 font-label-sm text-[12px] mb-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Mù Cang Chải, Yên Bái • Nếp Tan Lìm Mông OCOP 4 Sao</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-white leading-snug group-hover:text-tertiary-fixed transition-colors">
                  Gặt lúa trên lưng trời: Bản hùng ca màu mật của người Mông Mù Cang Chải
                </h3>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Từng bậc thang xếp tầng như nấc thang chạm tới mây ngàn được đồng bào đắp thủ công qua nhiều thế kỷ. Mùa gặt không chỉ là hạt gạo dẻo thơm, mà là tri thức điều tiết nguồn nước đầu nguồn và lễ mừng cơm mới linh thiêng.
              </p>
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-surface-container font-label-sm text-label-sm text-on-surface-variant">
                <span>Nhiếp ảnh & Ký sự: Hoàng Thế Nam</span>
                <span className="flex items-center gap-1 font-semibold text-primary">
                  <span className="material-symbols-outlined text-[16px]">photo_camera</span> 24 ảnh toàn cảnh & cận cảnh
                </span>
              </div>
            </div>
          </div>
          {/* Right 2 Stacked Cards (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Story Card 2 */}
            <div className="bg-surface-bright rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Autumn star anise harvest in Lang Son Vietnam, dried eight-pointed star pods laid out in sun-drenched wicker trays in village square, elderly Nung ethnic woman sorting fragrant spices, natural warm earth tones."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpqvA1qAua9d34hWCdVsbmpFEREoyoHxprOOP7BYU7Sr2irkN3xpALICALN-CgGgPCxmo8LpOd4vIT48RkQVUaF_UIbM1Zcbp8NDQMR_5w7KVG1diO7cPYSyNIeSEkwEZa50ZIatViNfUFe19BRlLowNmYI6H9C4JQh11hCZAq90XBG3AXItFCASbxXb6lwEh12Qcl4b9EK292PO5ReqOmHNAHQ3ZNWpGBb0PkDV4"
                  alt="Mùa hoa hồi xứ Lạng"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur text-white font-label-sm text-label-sm">
                  18 Tác phẩm độc quyền
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="font-label-sm text-[11px] text-tertiary-fixed tracking-wide uppercase">
                    Văn Quan, Lạng Sơn
                  </span>
                  <h4 className="font-headline-sm text-title-editorial font-bold text-white group-hover:text-tertiary-fixed transition-colors">
                    Mùa hoa hồi xứ Lạng: Thảo mộc thức giấc ngát thơm thung lũng đá
                  </h4>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest">
                <span>Nhiếp ảnh: Đỗ Thu Hà</span>
                <a className="text-secondary font-semibold hover:underline flex items-center gap-0.5" href="#gallery-2">
                  <span>Xem triển lãm</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </a>
              </div>
            </div>
            {/* Story Card 3 */}
            <div className="bg-surface-bright rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Traditional red terracotta brick and pottery kiln dome along Co Chien river in Vinh Long Mekong Delta Vietnam, billowing light wood smoke at dawn, terracotta pottery stacked in rustic river boats."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Po9_IQO3gyl9fhiIT-wHhSKwlf9K0V2ToTp72egHy97fogm8nV_FQ3rd6MGAq1nkb32GGdbrDVEyJg78j86gL4ZnYgdCSWOGSdbwquju6_bxKzWaqmZdUjOu__NSSQMBdvsiiWk5eEg3NZThrtT5knxgv-boJjyXcFOgOuWABXDK-DCGVCc2tC3WIMBxfO8puo6s3C-3WJm12TbNqhb4Ru4OvloHviWC1tlg_FY"
                  alt="Vương quốc gốm đỏ bên dòng Cổ Chiên"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur text-white font-label-sm text-label-sm">
                  22 Tác phẩm nghệ thuật
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="font-label-sm text-[11px] text-tertiary-fixed tracking-wide uppercase">
                    Mang Thít, Vĩnh Long
                  </span>
                  <h4 className="font-headline-sm text-title-editorial font-bold text-white group-hover:text-tertiary-fixed transition-colors">
                    Vương quốc gốm đỏ bên dòng Cổ Chiên: Trăm năm giữ lửa lò nung
                  </h4>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest">
                <span>Nhiếp ảnh: Lâm Huỳnh</span>
                <a className="text-secondary font-semibold hover:underline flex items-center gap-0.5" href="#gallery-3">
                  <span>Xem triển lãm</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
