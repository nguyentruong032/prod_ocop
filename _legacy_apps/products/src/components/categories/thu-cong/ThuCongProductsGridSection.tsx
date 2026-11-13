'use client';

import React from 'react';

const CRAFT_PRODUCTS = [
  {
    id: 1,
    title: 'Bình gốm hoa lam Chu Đậu "Thiên Hạ Thái Bình"',
    location: 'Nam Sách, Hải Dương',
    stars: '5 Sao QG',
    starType: 'primary',
    tag: 'Gốm Cổ',
    desc: 'Hồi sinh từ dòng gốm bác học thế kỷ XV, men tro trấu độc bản kết hợp nét vẽ tay phóng khoáng của thợ vẽ tài hoa.',
    artisan: 'Công ty CP Gốm Chu Đậu',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQnYZ4vXGujaUZj9PPCW7Un8XpxDB8BrdlcAk1HRVthi_EeSzMFvrHI_H-Kk2lZxZQtVY8dgXRS1iof3o8T6rzyQSX7MZ-z1-T3Fihr9EFhZruDpk89rL1e2Y4AKMLaxiO9aFRgrr-DJLZ4rP7WcFYav16rA3u_-RrL_3_AZKr7nByCpjKAYcQKLhzEAh6NDrVV84wIs2YyPmXzPuHiUfAn4IeNtSQDYIVMeD5n80',
    alt: 'Gốm Chu Đậu',
  },
  {
    id: 2,
    title: 'Tranh sơn mài cẩn vỏ trứng "Về bến sông quê"',
    location: 'Duyên Thái, Thường Tín, Hà Nội',
    stars: '5 Sao QG',
    starType: 'primary',
    tag: 'Sơn Mài',
    desc: 'Trải qua 25 công đoạn mài nước khắt khe cùng sơn ta Phú Thọ nguyên chất, cẩn xà cừ biển tự nhiên óng ả ngũ sắc.',
    artisan: 'NNƯT Đỗ Văn Thái',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_4iQfHQBTIeRP5oUTkDLt0bzVWXFDoqF9WAJNl40dpfqR3XMjzGbigTCzvgP49Lb-MrLZ0ipSSX807P7oo2wLmTqCUiy76WvjeMUzGO0RfonPgdP2BtvxGjnrR9AxxpY2P4BnuDsMOJI3V0yTQygqDRsAlh1KpKTJTFZMiwQtD4s9qB7kyONUk8ElCN3m09sFIqU8GOP5fa7G-1iv2FME432vmtZHRaZffQft9J0',
    alt: 'Tranh sơn mài Hạ Thái',
  },
  {
    id: 3,
    title: 'Bộ ấm chén chạm bạc tứ linh Đồng Xâm',
    location: 'Hồng Thái, Kiến Xương, Thái Bình',
    stars: '4 Sao',
    starType: 'secondary',
    tag: 'Kim Hoàn',
    desc: 'Nghệ thuật chạm thúc bạc bằng ve và búa con với mật độ hoa văn dày đặc, không để lại bất kỳ khoảng trống đơn điệu.',
    artisan: 'HTX Chạm Bạc Đồng Xâm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2PtT_eIB2ZovPlWEhK7n2ZtyVVlwzqXhpAakO1_6nvR6mtxqZFhCBEPffqUWNtRipqUkdnLp4GF6TSajNmXAKph8o5tE_0gRGNQfT8r1PAz3ECpyGLAhxj8sSwn8ovI9dNWkOMAG9A2Xy11Uz4VbHAMH6nKYLA2q0WKM5_FTvmi63uCSMd-HRgah04i0yopUH_nYAHD_r1GHT_rrUvoMp8J_4g0ohlXI9gPUt06Q',
    alt: 'Chạm Bạc Đồng Xâm',
  },
  {
    id: 4,
    title: 'Khăn dệt lanh vẽ sáp ong chàm cổ H\'Mông',
    location: 'Lùng Tám, Quản Bạ, Hà Giang',
    stars: '5 Sao QG',
    starType: 'primary',
    tag: 'Dệt Lanh',
    desc: '41 công đoạn thủ công từ tước vỏ cây lanh, luộc tro, dệt khung cửi lưng và vẽ họa tiết hình học cổ truyền bằng sáp ong rừng.',
    artisan: 'Nghệ nhân Vàng Thị Mai',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxJFPYn9f40sF1ocFWrYbRW5wfVf5-IULGoFCVkQmrL2ALizF3n65MutD4R63xGUWZYOZ8R3WM6SmGsiUSBLoFyILlqexpswpjDWPdRfoKn_v3rjKjI4QhO6smFb-a1J6dpZtb8Khst4y4MVApptUULNCK3pmF0vBUhKOEhaBUU_wkIy0Ih0SVc35bneorooNPCpCyqcdpNT_WuSf9m88oAxTLMuYvXcEn3YCUy1o',
    alt: 'Dệt Lanh Lùng Tám',
  },
  {
    id: 5,
    title: 'Lục bình gốm men rạn đắp nổi Bát Tràng',
    location: 'Gia Lâm, Hà Nội',
    stars: '5 Sao QG',
    starType: 'primary',
    tag: 'Gốm Men Rạn',
    desc: 'Dòng men quý phục chế từ thời Lê Trung Hưng với sự chênh lệch hệ số giãn nở nhiệt, tạo nên mạng rạn mai rùa huyền bí.',
    artisan: 'NNND Trần Độ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi3fEH7JDixQ_w_wyfWGOpNWopiTrbwDBPhmHVYIBH4RWDNOh2sEyU48jkUi8m5O0ry-Kkw0wULN13pLXkvJRF5YgFyBJsfIb3lyKsGN84xZEPcArhxsoN4fhDt-1hEpqE7UnZgJjlnDScHwI_4tTWzl3zrDrV_H0ax6HZP_7axwXXCek6s-5rcRHbhlL60vhZxdSng3Sx9yUUz03Ts5Y-540kuZ744a8bXdCS4jk',
    alt: 'Gốm Bát Tràng',
  },
  {
    id: 6,
    title: 'Đỉnh hương đồng mắt cua đúc liền khối Ngũ Xã',
    location: 'Ba Đình, Hà Nội',
    stars: '4 Sao',
    starType: 'secondary',
    tag: 'Đúc Đồng',
    desc: 'Kỹ thuật rót đồng một lần không chắp vá, giữ lại nét trầm hùng và tiếng vang ngân của nghề đúc đồng Thăng Long nghìn tuổi.',
    artisan: 'Xưởng đúc đồng Ngũ Xã',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDILxPZLXxdvIhKu3HDCofUhcBtrktHStWQ1bxhOkTwlBHW_Cq9yKrRGoGth1lolOgwk1dp_G88BywOE77K3q27dDL8IGT3WeN3-JV89Lblwhc1GymzAf6frUjvJ4Kc2Stf4Uy6yKarg0eURPBaWHVbGcQzW4ydTpSR6Z5716Z28AFHHUmwtqZqzGHbRkxcRvlv6Usv5_-YmS_hQWS0J7TO5TNT1CFh69mDCXPgIB8',
    alt: 'Đúc Đồng Ngũ Xã',
  },
  {
    id: 7,
    title: 'Chiếu cói hoa dệt tay di sản Định Yên',
    location: 'Lấp Vò, Đồng Tháp',
    stars: '4 Sao',
    starType: 'secondary',
    tag: 'Dệt Cói',
    desc: 'Sợi cói nước ngọt dẻo dai được chọn lọc kỹ, đập dập và dệt thoi đôi tạo nên chiếu hoa bền bỉ qua năm tháng miền phù sa.',
    artisan: 'Làng nghề chiếu Định Yên',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEShgUc64HF2ZrL1msfOtc0Sy_bUQGqRRIeCfKOwzHUkOPzjO6r1WbJni_rwAnmq1YCtMAZV2U48uvOu9XeQt3nccqw0HDn0lDe5bqM37hPP5jbm7bfjbtTQOfMsE3KFunHxkcV70gKQiHCErxTa2DxDutH1AOGdZpnw1RfwIcGMnZ-rzNfCoImIzHi2W1riT-O6u9PesUUGKqf8GMKJZ67bkJXo_nIRTKtQcxpM4',
    alt: 'Chiếu Cói Định Yên',
  },
  {
    id: 8,
    title: 'Tủ chè khảm ốc đỏ xà cừ ngũ điện La Xuyên',
    location: 'Ý Yên, Nam Định',
    stars: '5 Sao QG',
    starType: 'primary',
    tag: 'Mộc Mỹ Nghệ',
    desc: 'Đỉnh cao kỹ nghệ chạm khắc gỗ kênh bong kết hợp cưa lọng ốc đỏ Singapore, chuẩn mực lối cổ cung đình Bắc Bộ.',
    artisan: 'Nghệ nhân Dương Văn Bẩy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcy94oEDCkTWsunCDUcvMK_5lPBpJP4tiOOHwik4XYdXrbqTj5f1Zx_6EIkQF0X9AMGt_cDaE3dEOb7QEppSgQHcLsrF_wbJq5X_bTwEvky2fbPxvrmqoZNXcykWvt2TndG-h8CK92AtHq8wjLa2NkHceVL2QLUXByA7SL1whCmTXvtpxzadoj1ZA462qRgtXfF91_ZO_ZOar4AcE4DmeozX2mX8G_k9jkd6-7-2Q',
    alt: 'Gỗ Mỹ Nghệ La Xuyên',
  },
  {
    id: 9,
    title: 'Nón bài thơ lá lụa 16 vành làng Chuông',
    location: 'Thanh Oai, Hà Nội',
    stars: '4 Sao',
    starType: 'secondary',
    tag: 'Nón Lá',
    desc: '16 vòng tre uốn chuẩn xác đến từng milimét, từng mũi kim khâu giấu mối công phu giữa hai lớp lá buông phơi sương trắng muốt.',
    artisan: 'Làng nghề nón Chuông',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACcPII-lG3AEYBAF6Wt9yxE524k-24rvz_p4ELYPtaKIVHmdyrDwuhAPc5weIwE9HhQImwiyA5MZtjQjVjyGLHXyANqTvwWCzRpTIRzR18eClEPd3MEYaFa9EHK2c8hdD8E9RYEMuGWZDg9WQaH02L1qGMpfRjvQr3h3ruVrnOBvPVWxzK4yBmM3svVRT_UUP8x4HSSqMyGspnR98pIKx3-ufWJiZHBq2-eudgcNk',
    alt: 'Nón Lá Làng Chuông',
  },
  {
    id: 10,
    title: 'Bộ trường kỷ nghê đỉnh gỗ hương Đồng Kỵ',
    location: 'Từ Sơn, Bắc Ninh',
    stars: '4 Sao',
    starType: 'secondary',
    tag: 'Gỗ Mỹ Nghệ',
    desc: 'Nghệ thuật liên kết mộng gỗ kín khít không dùng đinh kim loại, đường đục chạm hình tượng nghê thuần Việt sống động.',
    artisan: 'Hiệp hội Gỗ Đồng Kỵ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWUkgK1gBIk0mSdpP6ekNhkcXseHw7MAEWdSLxsJpDUmTD2pbMxmxcqI9ikN5Fb8yCnydoeTRwbpvAuwj1pJ31bqj9k9269mt6r52nIEdfYfRnk9g6Gs7ewT8aS-1liygqwoAJvejq9A1X1JaklzZNhxjP_f2g7OMzeN--vcGUFqx9hbsMRspRtQvfKWr3GXOwySa6zfJpReIsBrpo8vuoix0uz7cSymmr28xs_Rs',
    alt: 'Gỗ Mỹ Nghệ Đồng Kỵ',
  },
  {
    id: 11,
    title: 'Đèn lồng khung tre bọc lụa tơ tằm Hội An',
    location: 'TP. Hội An, Quảng Nam',
    stars: '4 Sao',
    starType: 'secondary',
    tag: 'Lồng Đèn Di Sản',
    desc: 'Nan tre già ngâm nước muối chống mối mọt, bọc lụa tơ tằm Hà Đông vẽ hoa cúc và thủy mặc mang lại ánh sáng ấm cúng.',
    artisan: 'Cơ sở đèn lồng Huỳnh Văn Ba',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6ur8SBi7JSYJAYLa51L4IOf2qR5QAetXOJWxfpbavDREYqu36YOENN1aA_bB3XNShzOdY4T9aASYvgAdDkRKCUGEXU8EyXvxhzogGRoBuKz1S3WuQKNfN98En42DJDgaZ3EwACpmxyyIbtYc8Ol7WI_aexqNLZgPd9PQI3VfprvKuIjYxkCwA7cZ3viPiMUrykU0sUcXtYeoCVZ3Acbs9yF1Q2GTRKZahzHG8baU',
    alt: 'Đèn Lồng Hội An',
  },
  {
    id: 12,
    title: 'Tấm dè thổ cẩm xâu cườm chì người Cơ Tu',
    location: 'Tây Giang, Quảng Nam',
    stars: '4 Sao',
    starType: 'secondary',
    tag: 'Dệt Cườm Dé',
    desc: 'Kỹ thuật dệt luồn cườm trực tiếp vào sợi chỉ trong quá trình dệt, mô tả thế giới quan đại ngàn Trường Sơn hùng vĩ.',
    artisan: 'HTX Dệt thổ cẩm Zơrây',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw1yHUdsdTZIk-s6QziLEh4CBXwSHsTFzQ2jmHY4eF8rjLIDa8ZJMH1up8ftxxk8XZR2h4WATo5mH82I9q6pKoQbfwTaE-inW-iFDKXZCXKkkNJMHfKHPAY8RCLpXDZQWfoSiGpLUYKf3GlGYZVodzKg7ELhXuBxnyjtRCkOgZIv3FdVRYPPz2IFq5MUYy62mZW-YSyVQgjCwtV_Kz93YERvQAp3icCX4wMtPAQZM',
    alt: 'Thổ cẩm Dệt Dé Kơtu',
  },
];

export function ThuCongProductsGridSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-16">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CRAFT_PRODUCTS.map((prod) => (
            <article
              key={prod.id}
              className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
            >
              <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={prod.image}
                  alt={prod.alt}
                 loading="lazy" decoding="async"/>
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-0.5 ${
                      prod.starType === 'primary'
                        ? 'bg-primary text-on-primary'
                        : 'bg-secondary text-on-secondary'
                    } font-label-sm text-label-sm uppercase rounded font-semibold flex items-center gap-1`}
                  >
                    <span
                      className="material-symbols-outlined text-[13px] text-tertiary-fixed"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      stars
                    </span>
                    {prod.stars}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm uppercase rounded">
                    {prod.tag}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-outline font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[15px] text-secondary">pin_drop</span>
                    <span className="truncate">{prod.location}</span>
                  </div>
                  <h4 className="font-title-editorial text-title-editorial text-primary font-serif mt-2 group-hover:text-secondary transition-colors">
                    {prod.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                    {prod.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-container flex flex-col gap-3">
                  <div className="flex items-center justify-between text-body-sm">
                    <span className="text-outline font-body-sm">Chủ thể / Nghệ nhân:</span>
                    <span className="text-primary font-medium truncate max-w-[150px]">{prod.artisan}</span>
                  </div>
                  <button
                    className="w-full py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    Liên hệ xưởng nghề / Tư liệu
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* Pagination / Archival Index Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-surface-container">
          <span className="font-body-sm text-body-sm text-outline">
            Trang 1 / 158 • Tổng số 1.890 hồ sơ thủ công mỹ nghệ được số hóa
          </span>
          <div className="flex items-center gap-1">
            <button
              className="w-10 h-10 rounded bg-surface-container-low text-outline flex items-center justify-center cursor-not-allowed opacity-50"
              aria-label="Trang trước"
              type="button"
              disabled
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              className="w-10 h-10 rounded bg-primary text-on-primary font-label-md text-label-md font-bold"
              type="button"
            >
              1
            </button>
            <button
              className="w-10 h-10 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors"
              type="button"
            >
              2
            </button>
            <button
              className="w-10 h-10 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors"
              type="button"
            >
              3
            </button>
            <span className="px-2 text-outline">...</span>
            <button
              className="w-10 h-10 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors"
              type="button"
            >
              158
            </button>
            <button
              className="w-10 h-10 rounded bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors"
              aria-label="Trang sau"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
