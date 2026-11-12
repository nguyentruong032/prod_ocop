export function CulturalRegionsSection() {
  return (
    <section className="w-full bg-[#f8f5ee] py-space-xl">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        {/* Section Header with Cultural Symbolism */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-tertiary-container" />
            <span className="font-label-md text-label-md uppercase tracking-widest text-tertiary-container font-bold">
              KHÔNG GIAN VĂN HÓA BẢN ĐỊA
            </span>
            <span className="w-8 h-px bg-tertiary-container" />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
            Bốn Miền Trầm Tích & Hệ Sinh Thái Sản Vật
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Địa linh sinh nhân kiệt. Mỗi vùng địa lý của dải đất hình chữ S định hình nên hệ tri thức canh tác, phương thức chế tác và bản sắc văn hóa ẩm thực độc nhất vô nhị.
          </p>
        </div>
        {/* 4 Cultural Regions Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Region 1: Northwest & Northeast */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Spectacular ancient Shan Tuyet tea trees cloaked in mist high in the rocky peaks of Ha Giang, Northwest Vietnam. Hmong women in colorful indigo hemp clothes gathering silver tea buds, dramatic mountain ridges, ethereal emerald and silver lighting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWGw8jQ2EOUrNcdFkqLNr9ZcYGTNtKCqrXPLp8WMUT29ymnEo70FqeyKvJ_ygDtkaAAAvfPx-IyCvKa56IBO23kWEqrowwjqhlARbw-hK_4NIYleI65MoTfGAiMeJW_risr-rPGhZxtEl4z5n7IXnvJB5OzsYk6Y4wrxcTBAU4onyNSiI3n-rCV7QRVNy7sXQby3Q0woODWZscFovKWCy218_j7gt3bi9BUVTaqf4"
                alt="Tây Bắc & Đông Bắc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-label-sm text-label-sm text-tertiary-fixed font-semibold uppercase">
                  Vùng 01 · Non cao
                </span>
                <h3 className="font-title-editorial text-title-editorial text-on-primary font-bold">
                  Tây Bắc & Đông Bắc
                </h3>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Kho báu thảo mộc quý hiếm, những đồi chè Shan tuyết cổ thụ hàng trăm năm tuổi, và kỹ nghệ dệt lanh, nhuộm chàm thêu hoa của 20+ dân tộc vùng cao.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Chè Shan tuyết
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Dệt lanh H&apos;Mông
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Thảo quả rừng
                  </span>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:text-secondary transition-colors"
                href="#region-1"
              >
                <span>Khám phá 58 di sản vùng</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Region 2: Red River Delta */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Traditional Red River Delta craftsman courtyard with red terracotta roof tiles, ceramic drying racks in Chu Dau or Bat Trang, ancient bronze bells and woven silk fabrics glistening in soft golden morning sunlight."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBkntqwQN6je777pJ1qD47VWPPwzhBi5l0LGYXc8Yi6MGJnsjz4IKbqMSDP8X5NeHp41864UxtEpsdDdmuzn-h0QFig8yzg8fWZOp-pi9OhFYZ__vG_y4VzbKMp6M-KZPvftcEl_HP_8Euqk3hmH7wYbP3VRpvo6icOxPEV5PVTAIkn53QEhJ4s6XZ5VPp28IdRh-OJWzAZx7wU8T-1AkbSBWZQcu14QTFHpx4ttY"
                alt="Đồng Bằng Sông Hồng"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-label-sm text-label-sm text-tertiary-fixed font-semibold uppercase">
                  Vùng 02 · Đất nghìn năm
                </span>
                <h3 className="font-title-editorial text-title-editorial text-on-primary font-bold">
                  Đồng Bằng Sông Hồng
                </h3>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Cái nôi nghìn năm văn hiến tụ hội tinh hoa làng nghề gốm sứ Chu Đậu, đúc đồng Ngũ Xã, tơ lụa Vạn Phúc cùng mỹ vị ẩm thực Kinh kỳ Tràng An tao nhã.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Gốm men lam
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Lụa tơ tằm
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Đồng chạm khắc
                  </span>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:text-secondary transition-colors"
                href="#region-2"
              >
                <span>Khám phá 92 di sản vùng</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Region 3: Central Coast & Central Highlands */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Sun-drenched Central Vietnam coastal salt fields reflecting sky next to green basalt hills of the Central Highlands, coffee blossoms blooming, hand-carved wooden musical instruments of Ba Na ethnic artisans in deep earth tones."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXt0oOMvQXRi9b5rfSgNCkZO8iggRLhN_6QafxUbGW-gZjeBtFfphmk6WdRVR7sZcOrxaEJmVUuy0lEhJa0HvEjc-3DzIaDmPkIBY4VZt1XAR3Bw9UMeZKUw2vIdbobj0tgRFKvsDrVCQNonVdXiKmaNQk3n188-IiofwwbcqlzXpi5YENpB3QJALfGXHGO9ps-ph5EOcr926wZlrRfsBVCg558423GYg13gRzWio"
                alt="Miền Trung & Tây Nguyên"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-label-sm text-label-sm text-tertiary-fixed font-semibold uppercase">
                  Vùng 03 · Nắng gió đại ngàn
                </span>
                <h3 className="font-title-editorial text-title-editorial text-on-primary font-bold">
                  Miền Trung & Tây Nguyên
                </h3>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Sự hòa quyện giữa vị mặn mòi của nước mắm cá cơm duyên hải miền Trung và hương thơm nồng nàn của cà phê, hồ tiêu đất đỏ bazan cùng thổ cẩm Ba Na.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Mắm truyền thống
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Cà phê Robusta
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Trầm hương cổ
                  </span>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:text-secondary transition-colors"
                href="#region-3"
              >
                <span>Khám phá 76 di sản vùng</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Region 4: Mekong Delta */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Lush green waterways of the Mekong Delta with wooden sampans navigating mangrove forests, mangrove honey collectors with smoky earthen smokers, lotus fields in Dong Thap under warm tropical afternoon sun."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb89CcMWerDUVmuDL-ATHUZjOBommvEhMH_VR1dcB-L5I9z9vzUG3hHwxzjrp7W8kPFqWskpmgKGBLdA-pPCI2HRuyTPoaXIae0w4GG2C5jWPYo0oqQWAoxjoQL7rEDOnF2B512JIcQQeOFms63r5ejI2rAb0cdLI78lkRoAYIy0mzNNmhovOgou1_AXvPru4xfAl_lERkAdDKrjRtVg7L089p7JxnAUf1pq-T5VI"
                alt="Đồng Bằng Sông Cửu Long"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-label-sm text-label-sm text-tertiary-fixed font-semibold uppercase">
                  Vùng 04 · Chín nhánh sông rồng
                </span>
                <h3 className="font-title-editorial text-title-editorial text-on-primary font-bold">
                  Đồng Bằng Sông Cửu Long
                </h3>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Văn minh sông nước miệt vườn trù phú, kỹ nghệ gác kèo ong rừng tràm U Minh, làng chiếu cói rực rỡ và các sản vật từ sen Tháp Mười, dừa sáp Trà Vinh.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Mật ong tràm
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Làng chiếu Định Yên
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                    Sen Đồng Tháp
                  </span>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:text-secondary transition-colors"
                href="#region-4"
              >
                <span>Khám phá 64 di sản vùng</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
