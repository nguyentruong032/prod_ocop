import React from 'react';

export function DigitalPassportSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Tag */}
        <div className="flex items-center gap-space-sm pb-space-md">
          <span className="w-2.5 h-2.5 bg-secondary rounded-full" />
          <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
            Tiêu điểm Phóng sự Độc quyền
          </span>
        </div>
        {/* Feature Split Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-sm items-center">
          {/* Visual Presentation Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                data-alt="Traditional artisan bottles of premium Phu Quoc fish sauce 35N and honey jars arranged on rustic weathered dark wood table with woven bamboo spice trays star anise and cinnamon sticks under warm moody chiaroscuro editorial lighting inspired by heritage Vietnamese artisanal archives"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQAYHHY-meg5Szwiuvd08y23s1ys_E3zSg_hdHvxC3S37x5bV9KzhYo3m5pFSCfB-EFu9-oLGoItms6gSZkiP6ukxiO7LhpcK7Y4gVCQ2s1OiHylae5lFexLZ7qo3ovXFFFcki0brcwzB5tHA_HbIc_Dql2T4HEPIg7T24IUW9zrpT7uRxHLliR9kDpzoTiGL4ffjnBTTOsKM1AV4zELpYNk1B_yBxm-Q211cKyu8"
                alt="Nước Mắm Phú Quốc 35°N"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              {/* Digital Passport Verification Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-lg shadow-md flex items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 bg-primary-container text-on-primary rounded flex items-center justify-center font-headline-sm text-headline-sm">
                    <span className="material-symbols-outlined">dataset</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-primary font-bold">Nước Mắm Phú Quốc 35°N</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span>Mã Hash: 0x8a92...f41b</span>
                      <span className="material-symbols-outlined text-[13px] text-primary">check_circle</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-space-xs py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                    OCOP 5 Sao
                  </span>
                  <div className="font-label-sm text-label-sm text-outline mt-1">12 Tháng Ủ Chượp</div>
                </div>
              </div>
            </div>
          </div>
          {/* Narrative Content Right */}
          <div className="lg:col-span-6 space-y-space-md">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-secondary text-[16px]">history_edu</span>
              <span>Chuyên đề: Công nghệ Bảo tồn Di sản</span>
              <span>•</span>
              <span>Thời lượng đọc: 7 phút</span>
            </div>
            <h2 className="font-headline-lg text-headline-sm md:text-headline-lg text-primary tracking-tight">
              Từ chiếc tem giấy đến Hộ chiếu Số Sản phẩm (Digital Product Passport): Hành trình đưa chai nước mắm truyền
              thống lên nền tảng đám mây toàn cầu
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Trước đây, chai nước mắm truyền thống của bà con Phú Quốc chỉ mang một nhãn giấy dán thủ công, dễ bị làm
              giả hoặc đánh tráo thông tin khi bước qua các cửa khẩu quốc tế. Hôm nay, mỗi giọt mắm 35°N được gắn chip
              định danh NFC và mã hóa trên mạng lưới Blockchain phi tập trung.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Người tiêu dùng tại Paris hay Tokyo chỉ cần một chạm từ điện thoại để tra cứu: mẻ cá cơm than đánh bắt tại
              tọa độ nào trên vịnh Thái Lan, tỷ lệ muối Bà Rịa nguyên chất, nhật ký 12 tháng ủ chượp trong thùng gỗ bời
              lời và kết quả kiểm nghiệm hàm lượng axit amin độc lập từ viện Pasteur.
            </p>
            {/* Interactive Process Snapshot */}
            <div className="grid grid-cols-3 gap-space-sm pt-space-xs">
              <div className="bg-surface-container-lowest p-space-sm rounded-lg text-center shadow-xs">
                <span className="material-symbols-outlined text-primary text-[22px]">sailing</span>
                <div className="font-label-md text-label-md text-primary font-bold mt-1">Tọa độ Đánh bắt</div>
                <div className="font-label-sm text-label-sm text-outline">Kinh độ &amp; Vĩ độ Vùng biển</div>
              </div>
              <div className="bg-surface-container-lowest p-space-sm rounded-lg text-center shadow-xs">
                <span className="material-symbols-outlined text-primary text-[22px]">inventory_2</span>
                <div className="font-label-md text-label-md text-primary font-bold mt-1">Gỗ Thùng Chượp</div>
                <div className="font-label-sm text-label-sm text-outline">Gỗ Quao &amp; Bời Lời 12M</div>
              </div>
              <div className="bg-surface-container-lowest p-space-sm rounded-lg text-center shadow-xs">
                <span className="material-symbols-outlined text-secondary text-[22px]">verified_user</span>
                <div className="font-label-md text-label-md text-secondary font-bold mt-1">Tem Chip NFC</div>
                <div className="font-label-sm text-label-sm text-outline">Chống giả tuyệt đối 1:1</div>
              </div>
            </div>
            <div className="pt-space-sm flex items-center gap-space-md">
              <a
                className="px-space-md py-space-sm rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all flex items-center gap-1 shadow-sm"
                data-path="ho-so-nuoc-mam-phu-quoc"
                href="#"
              >
                <span>Đọc toàn văn hồ sơ số hóa</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <a
                className="px-space-md py-space-sm rounded bg-surface-container-lowest text-secondary font-label-md text-label-md hover:bg-surface-container transition-all flex items-center gap-1 shadow-xs"
                data-path="xem-nhat-ky-blockchain"
                href="#"
              >
                <span className="material-symbols-outlined text-[16px]">token</span>
                <span>Kiểm chứng Ledger</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
