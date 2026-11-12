import React from 'react';

export function ThuCongShowcaseSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              DI SẢN ĐẠI DIỆN NÔNG THÔN VIỆT NAM
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
              Bàn tay vàng &amp; Hồn cốt làng nghề nghìn năm
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Những tác phẩm hội tụ chuẩn mực cao nhất về kỹ thuật tạo hình, tri thức sử dụng nguyên liệu thảo mộc bản địa
            và giá trị truyền thừa qua nhiều thế hệ gia tộc.
          </p>
        </div>
        {/* Bento-style Curated Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Lead Feature: Lụa tơ tằm Vạn Phúc (Large 7-col Card) */}
          <article className="lg:col-span-7 bg-surface-container-low rounded-xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-alt="Master silk weaver in Vạn Phúc village adjusting warp threads on an antique wooden Jacquard loom, fine mulberry silk with embossed traditional cloud and dragon patterns shimmering under sunlight, deep golden emerald aesthetic"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS4fa7UMz1zCCYmT7UHYYErw-IKZgPeAYmy63X2ou-YWHn7tI2IGF6hfPgHKG_w5FVSyg59q6pH8M9L2UTbM9Zioig3XgIxI6GzPN2UagWEU4J4NnijD2JacaFawpEXbLC9aBD8QfDhk-LgdetUSThOo8i9iHWu36gkmqZsAQOdEpKIF0grxbjOjwnU7AAt_JOpLy3JqMTGAcBTQPb44ktj_H9AZ7Vs_KEXKvw-Ws"
                alt="Lụa tơ tằm Vạn Phúc"
               loading="lazy" decoding="async"/>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 bg-primary text-on-primary text-label-sm font-label-sm uppercase rounded font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">stars</span>
                  OCOP 5 Sao Quốc Gia
                </span>
                <span className="px-2.5 py-1 bg-surface-container-lowest/90 backdrop-blur-sm text-primary text-label-sm font-label-sm uppercase rounded font-semibold">
                  Lụa Vân Cổ Truyền
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-outline font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">pin_drop</span>
                <span>Làng lụa Vạn Phúc, Hà Đông, TP. Hà Nội</span>
                <span>•</span>
                <span>Nghệ nhân Ưu tú Phạm Khắc Hà</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-serif">
                Lụa Vân tơ tằm dệt hoa cúc dây &amp; mây song hỷ
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Tác phẩm dệt tay hoàn toàn từ sợi tơ tằm tự nhiên vùng bãi bồi sông Đáy. Hoa văn chìm nổi tinh vi chỉ
                hiện rõ khi nghiêng theo ánh sáng, giữ lại nguyên vẹn bí truyền &quot;mềm như nước, ấm ngày đông, mát ngày hè&quot;
                của hoàng thành Thăng Long xưa.
              </p>
              <div className="pt-4 flex items-center justify-between">
                <a
                  className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-secondary font-bold hover:text-[#79300f] transition-colors"
                  href="#"
                >
                  Khám phá hồ sơ di sản
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
                <span className="font-label-sm text-label-sm text-outline">
                  Kỹ thuật dệt tơ hơn 1.000 năm tuổi
                </span>
              </div>
            </div>
          </article>

          {/* Secondary Right Column: Gốm Phù Lãng & Thổ cẩm Chăm (5-col) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Gốm Phù Lãng */}
            <article className="bg-surface-container-low rounded-xl p-6 flex flex-col sm:flex-row gap-5 group shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full sm:w-48 aspect-square rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Traditional ash glazed ceramic jar from Phù Lãng village, rough natural clay texture with deep amber and forest green runny wood ash glaze, displayed in an artisan kiln yard"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH39kSjO10S89WCrtgrXrTxHp9oPtn1-5bsCiZn_1dAKN8PzSzV_aEj0O53LeBmRagnkIV3kZN0EUSWX_kihDwVk21Hy4iarIP7H_RkPzz1eLZOgkVStOLfSm-571b8jj8zOcvspjlgk85jW2IfLrFCbZ_fR-6dl-VWx3pE7IGios5HUHl29hRiPfkeYgrCgWycdQ2EFRSQGNNjiQz5B6hJswonepCdfJxDMMRF_4"
                  alt="Gốm Phù Lãng"
                 loading="lazy" decoding="async"/>
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary text-on-primary text-[10px] uppercase font-semibold rounded">
                  OCOP 5 Sao
                </span>
              </div>
              <div className="flex flex-col justify-between gap-2 flex-1">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                    Gốm men tro củi nung
                  </span>
                  <h4 className="font-title-editorial text-title-editorial text-primary mt-1 font-serif">
                    Bình hoa gốm men da lươn thủ công Phù Lãng
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">
                    Đất sét đỏ nung củi liên tục 72 giờ, tạo màu men tự nhiên từ tro gỗ rừng không pha hóa chất.
                  </p>
                </div>
                <div className="flex items-center justify-between text-outline text-body-sm pt-2">
                  <span>TX. Quế Võ, Bắc Ninh</span>
                  <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
                </div>
              </div>
            </article>

            {/* Thổ cẩm dệt tay Chăm An Giang */}
            <article className="bg-surface-container-low rounded-xl p-6 flex flex-col sm:flex-row gap-5 group shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full sm:w-48 aspect-square rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Chau Phong Cham ethnic woman in An Giang hand weaving geometric red and indigo brocade textiles using foot-treadle wooden loom, detailed view of dyed cotton threads"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyu_juBcpHXY0uHXz4zv_0B_2s3_kyinxBrCCaoeZrVUlpg3j1k7Z4TrLTlhhyniaqSHhxihXpmsSFJP_7WCgVoOz9bA1Ne11djinnq-H598fdwDHSuTC283Nz_oCxcH-cu6HBYKXhvOkP5zLdXO1kOXESMhwnRlSjEQaq39mSw1KnNAu3n0p_7Ny2cMclQLRvNS1ugBH9HSpdnypkwW1YYxOUhH4_18lIkIk1OZo"
                  alt="Thổ cẩm dệt tay Chăm"
                 loading="lazy" decoding="async"/>
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-secondary text-on-secondary text-[10px] uppercase font-semibold rounded">
                  OCOP 4 Sao
                </span>
              </div>
              <div className="flex flex-col justify-between gap-2 flex-1">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                    Dệt thủ công bản địa
                  </span>
                  <h4 className="font-title-editorial text-title-editorial text-primary mt-1 font-serif">
                    Khăn choàng thổ cẩm hoa văn lồng đèn Chăm
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">
                    HTX dệt Châu Phong nhuộm vỏ cây mặc nưa truyền thống, sắc đen huyền và họa tiết kỷ hà huyền bí.
                  </p>
                </div>
                <div className="flex items-center justify-between text-outline text-body-sm pt-2">
                  <span>TX. Tân Châu, An Giang</span>
                  <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom Duo: Mây tre Phú Vinh & Tranh Đông Hồ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <article className="bg-surface-container-low rounded-xl p-6 flex flex-col sm:flex-row gap-5 group shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-full sm:w-44 aspect-[4/3] rounded-lg overflow-hidden shrink-0 bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Exquisitely woven bamboo basket from Phú Vinh village, hair-thin bamboo strips woven into intricate openwork lace patterns, warm natural cane texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxcC5WdVC-Ih-giYKcHNfFuln16HVsgyvyZCawAj_SRLBEUsXECER08qUOfl_Gf_pwxIvlyL4Qv-BM8_IP2XpUqIOdfw2-u-a69fV3dPuzl8cFP1D6b_95CYdD9M0tDKbEwYvvFLJPzlLg6GeKUtyD942mRNyRtRM2RAmk7Cab8fA7UOQNjH7t2Qt1L0rAnl7GCfmsTishWO29NytCTICD9rcRauYCj9oXxOQRDuY"
                alt="Lẵng mây Phú Vinh"
               loading="lazy" decoding="async"/>
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary text-on-primary text-[10px] uppercase font-semibold rounded">
                OCOP 4 Sao
              </span>
            </div>
            <div className="flex flex-col justify-between gap-2">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  Mây tre đan tinh xảo
                </span>
                <h4 className="font-title-editorial text-title-editorial text-primary font-serif">
                  Lẵng mây nan sợi tơ Phú Vinh
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Kỹ thuật chẻ nan mỏng như sợi chỉ, uốn lượn hoa văn gấm tre truyền thống xã Phú Nghĩa, Chương Mỹ.
                </p>
              </div>
              <span className="font-body-sm text-body-sm text-outline">
                Nghệ nhân Nguyễn Văn Trung • Chương Mỹ, Hà Nội
              </span>
            </div>
          </article>

          <article className="bg-surface-container-low rounded-xl p-6 flex flex-col sm:flex-row gap-5 group shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-full sm:w-44 aspect-[4/3] rounded-lg overflow-hidden shrink-0 bg-surface-container">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Artisan applying natural red color to a woodblock print in Đông Hồ village, handmade Dó paper coated with shimmering mother-of-pearl scallop shell powder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWAsFb1-CLMPOIE-ZbEbMxsviaZEQzxcp7zBvuneH2vSOWsRpZXcjfSHIkMcGfqKL5_M33_ZArtxGU9nVTrKrvo9VyxVI8ReOfkLOgZKiYRS3c9Uzzw1ta2PV2tvwKu_Bt5OnTcN0zz1KJzTAVk4jY3qn9mVLjNAQ2EdD3wp1zd2jtWTT5n1p_THKK8tXsCXcOngkpfD8uWAwgDkS4DZhe2r7YYeOe3nW-k2O9Mjc"
                alt="Tranh Đông Hồ"
               loading="lazy" decoding="async"/>
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary text-on-primary text-[10px] uppercase font-semibold rounded">
                OCOP 5 Sao
              </span>
            </div>
            <div className="flex flex-col justify-between gap-2">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  Tranh khắc gỗ dân gian
                </span>
                <h4 className="font-title-editorial text-title-editorial text-primary font-serif">
                  Bộ tranh Tố Nữ giấy điệp Đông Hồ
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Giấy Dó quét điệp óng ánh từ vỏ sò biển, màu vẽ hoàn toàn từ hoa hòe, than lá tre và gỗ vang.
                </p>
              </div>
              <span className="font-body-sm text-body-sm text-outline">
                Gia tộc Nghệ nhân Nguyễn Đăng Chế • Thuận Thành, Bắc Ninh
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
