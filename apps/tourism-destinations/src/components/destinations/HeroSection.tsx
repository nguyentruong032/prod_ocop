import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#1F4D3A] text-white"
      data-render="hero"
      data-page="diem-den-du-lich"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-alt="Breathtaking panoramic vista of northern Vietnamese terraced tea hills and traditional artisanal craft village shrouded in morning mist and warm golden hour sunlight, lush emerald green foliage, quiet atmospheric documentary style, cultural heritage photography."
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjnYe1HloeoU0B_S_7xZKUBQjrLobI9JXhlumnNPlSY9Kz_F5vAdGuP_lkqPwwx2pPOo7l0lFoGCiiGi_WI-z6e2LMpAw1ZPeS0n1JjnmsMsBOiwXUXnQwOxI4nEPTxzdU4tOVQbU6sfsOKCTqopIzzqWRvIAEDO-Llc6thNtMjV1QhhaGzFDPtKzYe6RDvVum9ymBNfcNVvB7RHETCywd9n5VEV2CKaCMPlSg2c0')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F4D3A] via-[#1F4D3A]/60 to-transparent" />
      <div className="relative max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin pt-20 pb-16 flex flex-col">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
            <span className="font-label-md text-label-md uppercase tracking-wider text-[#C89B3C]">
              ĐIỂM ĐẾN &amp; DU LỊCH OCOP
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-[#FFFFFF] leading-tight">
            Mỗi vùng đất một bản sắc, mỗi làng nghề một hành trình trải nghiệm.
          </h1>
          <p className="font-lead-paragraph text-lead-paragraph text-surface-container-high max-w-2xl">
            Khám phá các làng nghề truyền thống, tuyến du lịch sinh thái nông thôn và bản đồ phân bố sản phẩm OCOP khắp Việt Nam.
          </p>
          <div className="pt-2">
            <a
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1F4D3A] text-[#FFFFFF] hover:bg-primary-container font-label-md text-label-md rounded-lg shadow-md transition-all"
              href="/chu-the-ocop"
            >
              Khám phá điểm đến
            </a>
          </div>
        </div>

        {/* 3 Tiểu mục cấu thành (Cards kính mờ nổi bật ngay chân hero) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <Link
            className="p-5 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md hover:bg-surface-container-lowest/20 transition-all text-[#FFFFFF] group"
            href="/diem-den-du-lich/lang-nghe-truyen-thong"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-[#C89B3C] text-2xl group-hover:scale-110 transition-transform">
                cottage
              </span>
              <span className="material-symbols-outlined text-surface-container-high opacity-60 text-lg">
                arrow_outward
              </span>
            </div>
            <div className="font-title-editorial text-title-editorial text-[#FFFFFF] mb-1">
              Làng nghề truyền thống
            </div>
            <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
              Di sản sống, bàn tay khéo léo của nghệ nhân qua ngàn năm văn hiến.
            </p>
          </Link>

          <Link
            className="p-5 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md hover:bg-surface-container-lowest/20 transition-all text-[#FFFFFF] group"
            href="/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-[#C89B3C] text-2xl group-hover:scale-110 transition-transform">
                eco
              </span>
              <span className="material-symbols-outlined text-surface-container-high opacity-60 text-lg">
                arrow_outward
              </span>
            </div>
            <div className="font-title-editorial text-title-editorial text-[#FFFFFF] mb-1">
              Du lịch sinh thái - Trải nghiệm OCOP
            </div>
            <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
              Hành trình nông thôn, trải nghiệm nguồn nguyên liệu trù phú sạch lành.
            </p>
          </Link>

          <Link
            className="p-5 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md hover:bg-surface-container-lowest/20 transition-all text-[#FFFFFF] group"
            href="/diem-den-du-lich/ban-do-ocop-viet-nam"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-[#C89B3C] text-2xl group-hover:scale-110 transition-transform">
                map
              </span>
              <span className="material-symbols-outlined text-surface-container-high opacity-60 text-lg">
                arrow_outward
              </span>
            </div>
            <div className="font-title-editorial text-title-editorial text-[#FFFFFF] mb-1">
              Bản đồ OCOP Việt Nam
            </div>
            <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
              Hệ thống tọa độ địa lý sản phẩm và không gian di sản 63 tỉnh thành.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
