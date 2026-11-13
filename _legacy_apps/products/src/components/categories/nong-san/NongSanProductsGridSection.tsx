'use client';

import React from 'react';

const PRODUCTS = [
  {
    id: 1,
    title: 'Cà phê Arabica Cầu Đất',
    location: 'Cầu Đất, Lâm Đồng',
    stars: 5,
    tag: 'Chỉ dẫn địa lý',
    desc: 'Trồng ở độ cao 1.650m trên đất đỏ bazan bazan màu mỡ. Vị chua thanh hoa quả tự nhiên quyện vị ngọt đắng tao nhã.',
    coop: 'HTX Cà phê Trạm Hành',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP3ZMXZ6UjKu1L3cjDR4u8C7PRvqqxyyrUhUlLyZFiwyxdiNI1v_l9YHoH8ZJodU1XlsRCr7Fh4ySYkcolq33ZxNa6soLV6P8COKu-Rf6HnPxoCi7FEOi83wP1tp9rPejzjf4yMAshHiSPsw2HkWNv-hFDEYW3cddH3NMQId-t_79hkjTF1oC5k6J2ltzSPxZ5z0Zm9VdC37M2prcwvI8Q8kRP1K9TbuOcB6I5SQk',
    alt: 'Cà phê Arabica Cầu Đất',
  },
  {
    id: 2,
    title: 'Kẹo Dừa Sáp Nguyên Chất',
    location: 'Châu Thành, Bến Tre',
    stars: 4,
    tag: 'Đặc sản bản địa',
    desc: 'Chế biến từ cơm dừa sáp Cầu Kè béo dẻo đặc quánh kết hợp mạch nha nếp lúa non không chất bảo quản công nghiệp.',
    coop: 'Cơ sở Dừa Sáp Quê Dừa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGsPIX8C0ZxgfhX5Yj3UDNImoWhGraT1ecp3VssfcIJ2VFsQlI3VaF0cAmdkQj13f6RQ0461YVcNIoTjRan-ppPERPEmwjDidvcw0dzgiGMUCLNZXpJI3vIGNcDmz0zICX6tQqr4vdJ-RAGNUwxey8U3WN7Exps4iVILLjLOyw1ElOaErI-h3i_MkNQu-BF1gutrH71yrIy5sGcLisToDPhnD-GeoUfWhwJBAkTpk',
    alt: 'Kẹo dừa sáp Bến Tre',
  },
  {
    id: 3,
    title: 'Chẩm Chéo Rừng Mường Chà',
    location: 'Mường Chà, Điện Biên',
    stars: 4,
    tag: 'Tri thức dân tộc',
    desc: 'Hòa quyện hạt mắc khén thơm nức, hạt dổi rừng, ớt nướng than và rau thơm gia truyền của đồng bào dân tộc Thái.',
    coop: 'HTX Hương Rừng Điện Biên',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-7ZYthdirKqJtx_er_HoThLgeV2a_hyGLmd1-rWX2zlTldy09iReGy7Az-kRJ0rDg0oHJO1TKb2ZsHj_NfTxx8Oiox2bEzdvuN2sJduYphUcFTX8EhjK3b_eia7LsYj05alj5yEFhY3gjzFCByP6g8fWmqdIHvx2Z8t-NWBbZZ1vOESQn24K6HSl6ktJ2tqgTfLYx8Bl_419y-jPjtCowKTy14UrJvDL_rb7aR8E',
    alt: 'Chẩm chéo Điện Biên',
  },
  {
    id: 4,
    title: 'Miến Dong Na Rì Cổ Truyền',
    location: 'Na Rì, Bắc Kạn',
    stars: 5,
    tag: 'Truyền thống bản địa',
    desc: '100% tinh bột củ dong riềng đỏ trồng trên sườn núi đá vôi. Sợi miến dai giòn tự nhiên, nấu lâu không bị trương nát.',
    coop: 'HTX Miến Dong Côn Minh',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzwPgKm2GLL2IdA1_zpyjCb_Me78QEhFCFt_tpEZIHiAZUnOIOFSNUjIBsl45dIGGd85Qvw7P6w3-qFxvAhWzHQP5m4slnGBG7YalWzz_8dTVrd2A1Nc_Kcqxt09goXdj65fRHdIK6kYpxCF1vSAnXh_HELAJCYkmqzDKN5eEXk1n9Y204rBzXGOYpdraaV2XkCLhRXwPte07A7HinI_Plu5efnFT_5jD9_sOACWU',
    alt: 'Miến dong Na Rì',
  },
  {
    id: 5,
    title: 'Tỏi Đen Cô Đơn Đảo Lý Sơn',
    location: 'Đảo Lý Sơn, Quảng Ngãi',
    stars: 5,
    tag: 'Chỉ dẫn địa lý',
    desc: 'Trồng từ đất cát san hô và nham thạch núi lửa cổ, lên men sinh học 60 ngày cho hàm lượng hoạt chất S-allyl cysteine vượt trội.',
    coop: 'HTX Nông sản Đảo Hải Đội',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSgBnm1q37bkoSZcIOUt56QaglKGTgg2LjHVKVF1fT9l_0CEo2kuvOsTgiOqTGxFXoWHxNGGlKU2qFleIOXYPoBVGkWPbdUP2bsHowhmtNJCHr6mbeex1Fp7yBBlZQ7LhHXpwoA2Ei1wFSOC3Hcot92rH-NrSEsJwVmxWteYO_hlEaJAb0DGpEddWeqdtTG-TB-VzGfEnDTuMmXOa6xnSJXLYs5CRarSYAqM44UL8',
    alt: 'Tỏi đen Lý Sơn',
  },
  {
    id: 6,
    title: 'Nấm Hương Khô Rừng Sa Pa',
    location: 'Sa Pa, Lào Cai',
    stars: 4,
    tag: 'Hữu cơ tự nhiên',
    desc: 'Khai thác từ thân cây dẻ rừng ẩm ướt ở độ cao 1.800m. Cánh nấm cúp tròn dày dặn, nước dùng ngọt thanh đặc trưng.',
    coop: 'HTX Nông Lâm Sa Pa Xanh',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoRUIjJVruq2JRzdQXBv_puuf3gut2L6hDrs22rH7Rzr7p_46PWYqnJLQDwg0NnDMeiC-vh8vn_YleK7s-A6HSKJ8olRADO9q4fVkOeXKx7Zk_cQYo_-3mAdHWKQAHJ9B0zFPDTR64hCDRfDjAOR7YBbWj5cnU5S_v5XOfzwEL-JARIPjrt_AxIiVZLRHeZyC3XD-0rndRe9A6YY9kTmFjyGuqdoWcWOuAqyEKjD4',
    alt: 'Nấm hương Sa Pa',
  },
  {
    id: 7,
    title: 'Cá Kho Niêu Đất Làng Vũ Đại',
    location: 'Lý Nhân, Hà Nam',
    stars: 4,
    tag: 'Làng nghề cổ truyền',
    desc: 'Cá trắm đen nuôi sông kho liên tục 16 giờ với củi nhãn trong niêu đất Nghệ An. Xương nhừ tan, thịt chắc đậm vị đồng chiêm.',
    coop: 'Làng nghề Hòa Hậu',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_Bd65cWlQCkiaE7mYsaztV16HKBPgOEp4kr1eYAjtNFzxw_a_MWbtB1nWZOfLJAjXB3-V6rG6RX13h5Gta1Pp1bmSOytXsnranymXIuQFK0PSzwNv9p2gDBq4-4Z5tCoYw0lAotSpvJpwQE_tTPOhAGhjft5EigWbxW0rhK1l92XebzP6gdFtDnTqfuMLWKmckZeGDjad3k-A4hddhxA3oMtaPXYO9TCNz2ryojk',
    alt: 'Cá kho làng Vũ Đại',
  },
  {
    id: 8,
    title: 'Hạt Điều Vỏ Lụa Rang Củi',
    location: 'Bù Gia Mập, Bình Phước',
    stars: 5,
    tag: 'Chỉ dẫn địa lý',
    desc: 'Hạt điều giống thuần bản địa trồng trên đất đỏ bazan. Rang thủ công bằng củi khô giữ độ giòn xốp và vị ngọt bùi béo tự nhiên.',
    coop: 'HTX Hạt Điều Bình Phước',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCda_FRZ0n6xdUu0o1c_GTRF6qcNbx6qp_fW43xvNoTtIB6mmE4uTIzgSIjvsC9x-jIsG5T7oyh7LwoGyOSiCyq69d8iIWKEPIS-1tMCHbZ2ZbIcHCrsyDPMN7uR-ElaPvBu6-M81hB-eHAbR-dJHgpoLv_hrRJQ7FT_eFWvROorZj4vi6nwsyxLMW8qBbJuD3B_pJ48PNrneRUoCY0pTgI0ruoPr13iII14BByWCQ',
    alt: 'Hạt điều Bình Phước',
  },
  {
    id: 9,
    title: 'Hạt Tiêu Sọ Chín Đỏ Phú Quốc',
    location: 'Cửa Dương, Phú Quốc',
    stars: 4,
    tag: 'Chỉ dẫn địa lý',
    desc: 'Hạt tiêu chín già trên cây được thu hoạch thủ công, chà vỏ ngâm nước suối tự nhiên. Cay nồng ấm đọng lâu và mùi thơm rất sâu.',
    coop: 'HTX Tiêu Đảo Ngọc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkRCcF7aDh-X1P2EnwJxmuZx8NlHIlx19iGqgcWEfGZNIkDS1O3iZ13LwWJBixbUVrTbRfNWYBGQvdd1VcHkWnqpNIJltwuIjFMaLhZSgYnnErXHVMALzfTPov0cItLA2vRgm9LP2oNJ-BAtoxIr0MGgBtKKx9ZmKWhNMlp1yKT63QF275AmWju7c8AwfZ1WgeDTZTckWWTeTwYCwAHbzy9jRMQGBy7cqDu2RXp1M',
    alt: 'Tiêu sọ Phú Quốc',
  },
  {
    id: 10,
    title: 'Tôm Khô Sinh Thái Rạch Gốc',
    location: 'Ngọc Hiển, Cà Mau',
    stars: 4,
    tag: 'Sinh thái rừng đước',
    desc: 'Đánh bắt từ tôm đất tự nhiên sống dưới tán rừng ngập mặn Cà Mau. Luộc nước biển nguyên chất phơi đủ nắng, vị ngọt đậm đà.',
    coop: 'HTX Thủy sản Tân Phát',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqTFJsZRnm9Kk-hfHHc7Dn9dTUEiH919fiPVAR3DHUv4ISO9Y14A3AjevurhHN0bocjhWc1fbR-RwYpuou3hCfasC86FfSjdBhFQ5xD468WF_2zDDTAqG1hkKCtHOsSp1fesxf7f5roqlF2LUV7EhyLvhJXX9KyjTiHEIh-PxNu22f-nmvHUXQLrqAL1yJDDegxZX6h57HU-Y530w5JAdOo6KbPphf4X6Vub6IjgA',
    alt: 'Tôm khô Rạch Gốc',
  },
  {
    id: 11,
    title: 'Bánh Pía Đậu Xanh Sầu Riêng',
    location: 'Vũng Thơm, Sóc Trăng',
    stars: 4,
    tag: 'Di sản ẩm thực',
    desc: 'Hơn 100 năm nghề làm bánh gia truyền của người Hoa vùng Vũng Thơm. Vỏ bánh ngàn lớp mỏng tang ôm ấp nhân sầu riêng tươi thơm béo.',
    coop: 'Bánh Pía Cổ Truyền Tân Huê',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoiS5gyUi0gxvrAQ9dyoMbhbAps6xjbfaEArIsehG4x70Bz4ZVN7zywFl-Da777bUwCQpqOF0w5ODxqQJQwxRYtstIKwQLRkFe3qP9OW5ixwMdzQvuna5ONxsjG0Af_jhX8xmu-8w0_z4n8v2uEyul8SfUHC8P6hddnqvSClaKImMOW_fccb8TFWZXHN9lMl-twUklhmGIyVHE5txtCgg7Av_c8i7bNbO_bDDWscM',
    alt: 'Bánh pía Sóc Trăng',
  },
  {
    id: 12,
    title: 'Mật Dừa Nước Cô Đặc Tự Nhiên',
    location: 'Cần Giờ, TP. Hồ Chí Minh',
    stars: 4,
    tag: 'Chỉ số đường huyết thấp',
    desc: 'Trích lấy từng giọt tinh chất từ cuống dừa nước rừng ngập mặn sinh quyển Cần Giờ. Vị ngọt thanh dịu mát, giàu khoáng chất tự nhiên.',
    coop: 'HTX Dừa Nước Cần Giờ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS3YQEc9GdpWWqaipyWqJuKxIBd7y5WJkuBHrizxjC-lPqU8jtWCoSK2JY8bvOlKYk5h75dQjE6dTQvr4SNDu1R-UiQosj9HvBglS3VX6MMAmqdxUo17Uq_1t8I_JvpxB1gxHojJ_BniozEDuSWhkjK46AvykepGeA6Jc7QUyrvLoh5ustJNMo19YPW-uiSU9BIS2zxqQkWNYch3WuhG8yMGEmmdEuwwaVeA2iFUk',
    alt: 'Mật dừa nước Cần Giờ',
  },
];

export function NongSanProductsGridSection() {
  return (
    <section className="w-full py-16 bg-surface">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {PRODUCTS.map((prod) => (
            <article
              key={prod.id}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative h-52">
                <img className="w-full h-full object-cover" src={prod.image} alt={prod.alt}  loading="lazy" decoding="async"/>
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary text-[#C89B3C] font-label-sm text-label-sm">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                  {prod.stars} SAO
                </div>
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-primary/80 backdrop-blur-sm text-on-primary font-label-sm text-label-sm">
                  {prod.tag}
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-2">
                  <span className="text-outline font-label-sm text-label-sm uppercase flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {prod.location}
                  </span>
                  <h4 className="font-headline-sm text-title-editorial text-primary font-bold">
                    {prod.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    {prod.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary font-medium">{prod.coop}</span>
                  <a
                    className="inline-flex items-center gap-1 text-secondary hover:text-primary font-label-md text-label-md uppercase font-semibold"
                    href="#"
                  >
                    Nguồn gốc <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* Pagination / Xem thêm */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="font-body-sm text-body-sm text-outline">
            Đang xem trang 1 trong tổng số 427 trang dữ liệu OCOP Nông sản
          </span>
          <div className="flex items-center gap-2">
            <button
              className="w-10 h-10 rounded bg-surface-container-lowest text-outline hover:text-primary flex items-center justify-center transition-colors shadow-sm"
              aria-label="Trang trước"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button
              className="w-10 h-10 rounded bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center font-bold"
              type="button"
            >
              1
            </button>
            <button
              className="w-10 h-10 rounded bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container font-label-md text-label-md flex items-center justify-center transition-colors"
              type="button"
            >
              2
            </button>
            <button
              className="w-10 h-10 rounded bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container font-label-md text-label-md flex items-center justify-center transition-colors"
              type="button"
            >
              3
            </button>
            <span className="px-2 text-outline">...</span>
            <button
              className="w-10 h-10 rounded bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container font-label-md text-label-md flex items-center justify-center transition-colors"
              type="button"
            >
              427
            </button>
            <button
              className="w-10 h-10 rounded bg-surface-container-lowest text-outline hover:text-primary flex items-center justify-center transition-colors shadow-sm"
              aria-label="Trang sau"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
