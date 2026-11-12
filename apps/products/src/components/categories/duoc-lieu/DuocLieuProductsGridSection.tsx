import React from 'react';

interface ProductItem {
  name: string;
  location: string;
  rating: string;
  badge: string;
  isFiveStar: boolean;
  desc: string;
  metaIcon: string;
  metaText: string;
  image: string;
  alt: string;
}

const products: ProductItem[] = [
  {
    name: 'Sâm Ngọc Linh ngâm Mật ong Rừng',
    location: 'Tu Mơ Rông, Kon Tum',
    rating: '5 Sao',
    badge: 'GACP-WHO',
    isFiveStar: true,
    desc: 'Chủ thể: Công ty CP Sâm Ngọc Linh Kon Tum. Củ sâm trên 10 năm tuổi ngâm mật ong khoái đại ngàn.',
    metaIcon: 'eco',
    metaText: 'Độ cao 2.200m • Mã số vùng trồng KT-01',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqR9z7EIHcaoHnmSmW-sCsdktTLFLwwAzzKDol8AwTB3Q9huM-yiwKRTDCMCciFrpf2arh7Qt7obrQbqoajeqcKWAT_dV8Oy2N314HzJx8KpmB70D4v52Q9_bsQGDYSEd8_AGoyW6CaFFAbCXqZJITmwzrLlE0BQ8G7zL9j9aF3BeMcCd8XubVEEeIsBRw1VNoJLwm1Ozbk9s5oU3VMVkZ1ADpxro3a529IgAbAPo',
    alt: 'Traditional glass jar filled with wild sliced Ngoc Linh ginseng preserved in golden forest honey'
  },
  {
    name: 'Tinh dầu Tràm gió Cung đình Huế',
    location: 'Phú Lộc, Thừa Thiên Huế',
    rating: '4 Sao',
    badge: 'Làng nghề',
    isFiveStar: false,
    desc: 'Chủ thể: HTX Dược liệu Tràm Lộc Thủy. Chiết xuất 100% lá tràm gió tự nhiên, nồng độ Cineol đạt 65%.',
    metaIcon: 'verified',
    metaText: 'Kiểm định Viện Dược liệu TW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoGH1w6YeSr63yJ-8kjanqeAdhO7Wd5500hltGSHF_RN-ldNYDgdZl6xTcYG1KD5kU35-xcywE9n0N_y-vMrp4zDu6wq10vyvhG6NPwzdLzoo0a4zDRcmu4BlIDZlxI7dK_F3OH74peOjTYxcz1bDObUZak3YKs5DKOhMTdBsnNY_mo4MAxOd6mxulSH9uE0YLV27QcUewcZeO3ov-0YJRtBzIzWv9hlnCbYaIoRo',
    alt: 'Dark amber glass essential oil bottle with pure cajeput leaves surrounding it'
  },
  {
    name: 'Trà hoa vàng Nữ hoàng Thảo mộc',
    location: 'Ba Chẽ, Quảng Ninh',
    rating: '5 Sao',
    badge: 'Hữu cơ',
    isFiveStar: true,
    desc: 'Chủ thể: Công ty CP Kinh doanh Lâm sản Đạp Thanh. Búp hoa sấy thăng hoa giữ nguyên sắc vàng và dưỡng chất.',
    metaIcon: 'psychology',
    metaText: 'Giàu Selen, Polyphenol tự nhiên',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgbOB9tjhrBTh1azDQH0MYtLHCBMaezxi0p59e_wn02SyV-L116TR1Fn8l8J0Tq1zIQY6yZnMJ5nScv1Y9vKcr2S4N-ShMahiL3zSqTS1u1qCg4P_SvOUTJwOH3mlt-K2x_LBwVGdgciZ486dbrhl2AdLgCHg8j-EyZ9NDtWZAN4tLAzPSRxTAy5Zr7MAfO4mx-_VaSw8O_DRcvChgATfrPojoL14HfjLiGjMqMag',
    alt: 'Vibrant golden camellia chrysantha dried blossoms brewing in a clear glass teapot'
  },
  {
    name: 'Cao mềm Atiso Đà Lạt Tinh chế',
    location: 'Đà Lạt, Lâm Đồng',
    rating: '5 Sao',
    badge: 'GACP-WHO',
    isFiveStar: true,
    desc: 'Chủ thể: Công ty CP Dược Lâm Đồng (Ladophar). Chiết xuất từ 100% lá Atiso tươi đạt chuẩn Thực hành tốt.',
    metaIcon: 'local_florist',
    metaText: 'Hàm lượng Cynarin tiêu chuẩn quốc tế',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlN40tIdT2buS0WHIw9Ec_SyFE95SY9JiDr8NzSMHydtMOLseWvXjdWEic5XS7kTuNtt6Fc_Lnel1mYLuv1yu1aXEGf5ahSL5Ia-PtGg2RVAYzmVjp4VAAPFPTGaEFR3TlEwaUDf_fyPb8bjuJ7pzcFGJtx3Huzl9ku7ijcydKlb76YPp6VCqc-58q_QeP8vGpiIF-49sXzkRzksn-gmQTdZwHQ6pT9Q156GUu40Q',
    alt: 'Fresh purple green artichoke flowers in misty terraced garden in Da Lat highland plateau'
  },
  {
    name: 'Củ Đương quy Bắc Hà sấy lạnh',
    location: 'Bắc Hà, Lào Cai',
    rating: '4 Sao',
    badge: 'Tự nhiên',
    isFiveStar: false,
    desc: 'Chủ thể: HTX Dược liệu Sơn Tây. Củ dầy nhánh, mùi thơm nồng, thu hái sau 24 tháng nuôi dưỡng trên đất mùn núi cao.',
    metaIcon: 'terrain',
    metaText: 'Cao nguyên trắng Bắc Hà 1.200m',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByaw4HOYD6JTyw6FPs0w3Of40jozluzsGgK2KmWyydw84PsfTqnCtKEUeoa0SFzmoecrWMH2Lpx3gJLBQqYEkkxEYdASrnzJhgHGd4777dw4PW53F3JSGo2wvzuJCfqPCBmVzBv8M4j0Uz1JEr4ZBF9xiZvOkt2_BSQ7tC2c5X0ZL_RLJpsX2NKf8xH5bB8ZAsAlJxYV-lA-Uwvaj8GJTdEh_yxEGpv4-DFuYQpYY',
    alt: 'Harvested Angelica sinensis roots drying on traditional bamboo trays'
  },
  {
    name: 'Tinh bột Nghệ đỏ Chí Tân',
    location: 'Khoái Châu, Hưng Yên',
    rating: '4 Sao',
    badge: 'VietGAP',
    isFiveStar: false,
    desc: 'Chủ thể: HTX Nông nghiệp Chí Tân. Giống nghệ đỏ nếp bản địa ven sông Hồng với nồng độ Curcumin cao gấp 3 lần nghệ vàng.',
    metaIcon: 'water_drop',
    metaText: 'Lọc ly tâm loại bỏ hoàn toàn dầu nhựa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvs53V9c8RiprTs8QPDyur0y6zQ2eHCDAyhWoX68BTTiFcUeObCI43yaYX0nR2KIrWoathxRI9yV2fBTk08iFFqbYjmliF7wKgcKcJkC5fWBRXNZLA502395l3eIH_3wrfcvYTATgrH5n5ZQuTSm9i6k9hLUWnfoAAFA9jYMj5IBy9COA-wGtRNNRNKHWOyAH4nN6HJiZaFP1SzRq-rG7OZFj0Y2bmEm2n2Nkzo5k',
    alt: 'Deep orange freshly ground turmeric root and fine pure turmeric starch powder'
  },
  {
    name: 'Tinh dầu Hồi Xứ Lạng Chưng cất',
    location: 'Văn Quan, Lạng Sơn',
    rating: '5 Sao',
    badge: 'Chỉ dẫn ĐL',
    isFiveStar: true,
    desc: 'Chủ thể: HTX Chế biến Nông lâm sản Văn Quan. Hoa hồi cánh dầy chín rộ thu hái trên triền núi đá vôi Đông Bắc.',
    metaIcon: 'public',
    metaText: 'Xuất khẩu tiêu chuẩn Châu Âu & Nhật Bản',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeTfmOY6N0J_Pg28ObCP2v38bSh-PX-79SuJmtFAmC7efRq8yIx7N0Nx_abtUJuVxDwqSPCG_st695VJ7klDep2m4whLzVOz84rtPRlIcJNNAEOfV3BrDBLF-ufCms6jNETNCgHNbTAnO559zJc58AVIiUOWebmX-Z8SmpcnJ1kXme6sBKLZqEgEM0kvBjY45WETmNXndh-waAFnvtysmKVuiGG4BoFgokVZGVHAc',
    alt: 'Beautiful dry eight horned star anise fruits piled on linen cloth with amber essential oil vial'
  },
  {
    name: 'Ba kích tím Rừng Tiên Yên',
    location: 'Tiên Yên, Quảng Ninh',
    rating: '4 Sao',
    badge: 'Tự nhiên',
    isFiveStar: false,
    desc: 'Chủ thể: HTX Nông nghiệp Thuận Phát. Củ nạc thịt tím thẫm, bóc lõi thủ công và sấy khô bằng lò hơi dược liệu.',
    metaIcon: 'military_tech',
    metaText: 'Di sản cây thuốc Nam bản địa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCotiYfCe6i4cOgV9Az-M-C6H6KqR3yHVUr3zZZmbBTvGqBpYd93iRfwpHpec98dm77kTEGhkXc10jsEB6_E1m_l14MGAG5zvde1UIQXExlOe4ZLvdAKweoz-8jSwym3sZzlCkJCUizG9vDXMH0aSIrXrww2Z_TLzNEUokeCx0traCJmq_GpmIxecYp0fOFujPe-3qgOpzQLzZUb8_GL56hpZnVtvqp67Hrqls9DS4',
    alt: 'Deep purple wild Morinda officinalis roots freshly dug up from fertile forest soil'
  },
  {
    name: 'Trà Giảo cổ lam 7 lá Fansipan',
    location: 'Sa Pa, Lào Cai',
    rating: '4 Sao',
    badge: 'GACP-WHO',
    isFiveStar: false,
    desc: 'Chủ thể: HTX Thuốc Nam Tả Phìn. Dòng 7 lá quý hiếm sinh trưởng ở độ cao 2.000m trên dãy Hoàng Liên Sơn hùng vĩ.',
    metaIcon: 'favorite',
    metaText: 'Hỗ trợ ổn định đường huyết & mỡ máu',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYIQmo649iAJou7_YsYUxe0cUWSofxLgwMFHbunH_sWHejWgMkxAlKeSfm7OgfZN5R3h_cMvOFSbSrhpdjjf-l5K-QOURaCVwNML4gSVfaFzSgjysBa-MxbJRIYgc2EF8zKe_Sn7bq5m4YgNCmeydknKfH9KjLcQP3tkiqHjno__nEsRJcm2qbnhyIjJYTOTR8Kb0NIrO-NujbKO--i0TPIVfIQMCBX-UOp-ACMHA',
    alt: 'Fresh Gynostemma pentaphyllum seven leaf wild vines growing under deep mountain evergreen forest shade'
  },
  {
    name: 'Tỏi đen cô đơn Đảo núi lửa Lý Sơn',
    location: 'Huyện Đảo Lý Sơn, Quảng Ngãi',
    rating: '5 Sao',
    badge: 'Đặc sản đảo',
    isFiveStar: true,
    desc: 'Chủ thể: HTX Nông nghiệp Lý Sơn. Lên men tự nhiên 90 ngày theo công nghệ Nhật Bản từ tỏi cô đơn cát san hô.',
    metaIcon: 'healing',
    metaText: 'Hàm lượng S-allyl-cysteine tăng gấp 5 lần',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzWm-T94bBCwsonoKvCZHxNejzq1NyeKEy6mRceNRtCpJ8P6Cr50j3p2EHLtO1vHWm0JRtSEtwEg0u93x_5bEXs7W9XCDdyrsdwlsD9S-s2nOY8JLleRYyF2pIvsmrL2dOJyP7cMvn5Lmu7BvEcBqZoF4vqAEbek-gDUENvUEd5TJdSJEl1r2V6UmwZe2Hj30exnPWDLRHPzJsWPb4cNmYe6eI0qcUBfX_yQ60WEw',
    alt: 'Peeled glossy black garlic single cloves placed on volcanic soil rocks'
  },
  {
    name: 'Cao Chè vằng sẻ Định Sơn',
    location: 'Cam Lộ, Quảng Trị',
    rating: '4 Sao',
    badge: 'Làng nghề',
    isFiveStar: false,
    desc: 'Chủ thể: HTX Nông sản Cam Lộ. Nấu cô đặc bằng than củi thủ công từ lá chè vằng sẻ thu hái trên đồi đất đỏ bazan.',
    metaIcon: 'child_care',
    metaText: 'Thức uống thanh nhiệt cho phụ nữ sau sinh',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB_5NuNs_qU1DkWenAUUYn2l4AgW4bAbkBo_RhKoZ5XaQ9v3mqPe80IeaGcHFxaRPv9AV176AR6QHACiw_0Fu0suTZdzU2VPcdpd8y6-X5e51oPfJk9X98rpLFxYfWiynwzTnqenkxElMEBgYHEqgcsqCAqIJtn8veBAP-YyarP-M83-8YmhRuRSHj-ahwhybUjjeLyEajtnFbmTM0YKdpOCpb7FtcacjJOqcsOMs',
    alt: 'Traditional dark herbal tea resin jelly wrapped in banana leaf'
  },
  {
    name: 'Nấm Lim xanh tự nhiên Tiên Phước',
    location: 'Tiên Phước, Quảng Nam',
    rating: '4 Sao',
    badge: 'Tự nhiên',
    isFiveStar: false,
    desc: 'Chủ thể: HTX Nấm Lim xanh Quảng Nam. Nấm mọc tự nhiên trên thân gỗ lim mục trong rừng Trường Sơn nguyên thủy.',
    metaIcon: 'forest',
    metaText: 'Nguồn gốc tự nhiên rừng phòng hộ Tiên Lãnh',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_PUgNDQQptTqLgn4FuaatYaj1hvIzRR2fuzH-HS4SOmGqSiKxbbVOeB-As3Q5MHS4lPTYej2WtPXSofoKFrNeI1SMuryi8WPTelH7B3oBzcF8NGhfXRgE8QhYZ7LBijxO2kf-Sz4-91dAD6wOuuESi2I-c2BnJpzjNP0ci9aKkQjQaIB9yl14BUF0xOV379Eey0lWB5STIFiQ6Xxxb9oMzi_doXe2zlCum3FMP5s',
    alt: 'Wild Ganoderma lucidum lim green mushrooms growing naturally on dead ironwood tree trunk'
  }
];

export const DuocLieuProductsGridSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-surface">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item, idx) => (
            <article
              key={idx}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.alt}
                    src={item.image}
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {item.isFiveStar ? (
                      <span className="px-2 py-0.5 rounded bg-[#C89B3C] text-surface-container-lowest font-label-sm text-label-sm font-bold flex items-center gap-0.5 shadow">
                        <span className="material-symbols-outlined text-[13px]">stars</span>
                        5 Sao
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[13px]">star</span>
                        4 Sao
                      </span>
                    )}
                    <span
                      className={`px-2 py-0.5 rounded font-label-sm text-label-sm ${
                        item.badge === 'GACP-WHO' || item.badge === 'Hữu cơ' || item.badge === 'Chỉ dẫn ĐL' || item.badge === 'Đặc sản đảo'
                          ? 'bg-primary/90 text-on-primary'
                          : 'bg-surface-container-lowest/90 text-primary font-semibold'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    {item.location}
                  </span>
                  <h4 className="font-headline-sm text-title-editorial text-primary font-semibold group-hover:text-secondary transition-colors">
                    {item.name}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="mt-2 pt-2 border-t border-[#E2DBD0]/60 flex items-center gap-1.5 text-outline font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px] text-primary">{item.metaIcon}</span>
                    <span>{item.metaText}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <a
                  className="w-full py-2.5 rounded bg-surface-container-low hover:bg-primary hover:text-on-primary text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  href="#"
                >
                  <span>Tìm hiểu nguồn gốc</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination / Archival Index Controls */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E2DBD0]/70">
          <div className="font-body-sm text-body-sm text-outline">
            Đang xem trang <strong className="text-on-surface">1</strong> trên tổng số{' '}
            <strong className="text-on-surface">112</strong> trang hồ sơ tư liệu
          </div>
          <div className="flex items-center gap-1.5">
            <button
              className="w-9 h-9 rounded bg-surface-container-low text-outline flex items-center justify-center cursor-not-allowed"
              disabled
              aria-label="Trang trước"
            >
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
            <span className="px-2 text-outline">...</span>
            <button className="w-9 h-9 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
              112
            </button>
            <button
              className="w-9 h-9 rounded bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors"
              aria-label="Trang tiếp"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
