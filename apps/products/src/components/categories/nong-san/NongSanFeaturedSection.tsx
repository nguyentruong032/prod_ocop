import React from 'react';

export function NongSanFeaturedSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-secondary font-label-md text-label-md uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-secondary" />
              Tuyển chọn di sản quốc gia
            </div>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary font-bold">
              Vị ngọt Thổ nhưỡng &amp; Hương vị Quê hương
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Bốn biểu tượng nông sản đạt chuẩn 5 sao quốc gia đại diện cho sự kiên trì gìn giữ thổ nhưỡng và tay nghề
              chế tác lương thực kỳ công.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase font-semibold">
              Chứng nhận OCOP 5 Sao
            </span>
          </div>
        </div>
        {/* Bento Grid 4 Tiêu Điểm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Card 1: Nước mắm Khải Hoàn (Chiếm 7 cols) */}
          <article className="lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
            <div className="md:w-1/2 relative min-h-[260px] md:min-h-[380px]">
              <img
                className="w-full h-full object-cover"
                data-alt="Dãy nhà thùng gỗ bời lời khổng lồ tại xưởng ủ chượp nước mắm truyền thống Phú Quốc, ánh sáng tự nhiên rọi qua khe cửa gỗ vào màu nước mắm nâu cánh gián sóng sánh trong vắt, tĩnh lặng trang nghiêm."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKVmocCvm3lDYtlcUDuVp2P3wEW3zgCmUZmvu3qGve2i1L5OcTOF5vJ0_73zzOGS8VWQzPLWowb12TTKZWJ_sZkXDrbohaghvxq31omIv1-e3-TBdph3ef88stZD-N3wlprMitzHxHPCG18SoZEcC4B3Pgxbe0DPxoGDbxqQ4l9_25vYCC-Sco-FVwqy6MQ9bPTKcmMvfYQNxxqNCTnhVkgoQiHtm_Z398u4j3V8c"
                alt="Nước mắm Cốt Khải Hoàn 43°N"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary text-[#C89B3C] font-label-md text-label-md">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                5 SAO QUỐC GIA
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase">
                  <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                  Phú Quốc, Kiên Giang
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold leading-snug">
                  Nước mắm Cốt Khải Hoàn 43°N
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-4 leading-relaxed">
                  Ủ chượp ròng rã 12-15 tháng từ cá cơm than vùng biển Kiên Giang trong thùng gỗ bời lời nguyên khối.
                  Nước cốt màu nâu cánh gián hổ phách, hậu vị ngọt đạm tự nhiên và chỉ dẫn địa lý được bảo hộ toàn cầu.
                </p>
              </div>
              <div className="pt-6 mt-4 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary font-medium">
                  Bảo hộ Chỉ dẫn địa lý EU &amp; VN
                </span>
                <a
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md uppercase font-semibold transition-colors"
                  href="#"
                >
                  Xem hồ sơ
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: Mật ong hoa bạc hà (Chiếm 5 cols) */}
          <article className="lg:col-span-5 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-56">
              <img
                className="w-full h-full object-cover"
                data-alt="Hũ thủy tinh chứa mật ong hoa bạc hà màu vàng chanh ánh xanh nhạt trong suốt, nền cao nguyên đá vôi Đồng Văn Hà Giang với sương mù và những bông hoa bạc hà tím dại mọc trên kẽ đá nứt nẻ."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHUmo1S7XG9BYpDCbf_HY4xhU3MXuWuT4cQc_VnXaCGmeV2iDRtns2ozfALaTlDOygbk2Eq6D0R7CxgJzt1TbsR0I_Z41owj05IujlgpYkoEdZ-g2FAlkoChaGdRbV0dl6SDMHZJFp3zrX77PTZImI5Vp42Mawd5kE547sa96AGOZfV1_aGNo0BRVhnRZJN5feTVurldgdK-BLk_jdrKowAfSqqtGpFl5eon11qG8"
                alt="Mật ong hoa Bạc Hà Cao nguyên đá"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary text-[#C89B3C] font-label-md text-label-md">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                5 SAO OCOP
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase">
                  <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                  Mèo Vạc - Đồng Văn, Hà Giang
                </div>
                <h3 className="font-headline-sm text-title-editorial text-primary font-bold">
                  Mật ong hoa Bạc Hà Cao nguyên đá
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                  Khai thác từ ong nội nuôi thả tự nhiên trên sườn núi đá vôi cao trên 1.200m, hút phấn hoa bạc hà dại nở
                  rộ vào mùa đông khắc nghiệt tạo nên sắc vàng chanh ánh xanh thơm lừng.
                </p>
              </div>
              <div className="pt-4 mt-3 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline">HTX Nông nghiệp Cao nguyên</span>
                <a
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md uppercase font-semibold transition-colors"
                  href="#"
                >
                  Hồ sơ di sản
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 3: Gạo Nàng Thơm Chợ Đào (Chiếm 6 cols) */}
          <article className="lg:col-span-6 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
            <div className="md:w-1/2 relative min-h-[220px]">
              <img
                className="w-full h-full object-cover"
                data-alt="Hạt gạo Nàng Thơm Chợ Đào thon dài, đục ở tâm như hạt lựu, đựng trong bát gốm mộc mạc, hạt cơm chín bóng bẩy tỏa khói nghi ngút thơm lừng, ánh sáng ấm cúng bữa cơm quê Việt."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxTooXcJZJsTpPnUVkn6F5MB2NgZ5YGs-2mgocHWPer7ukGlXX3MBQI6P3hlupqYuEzXOhkP9EYrycrPwT0L6gLiI7z7eyga_6cCRPjFe2QU6i1RVSenZispDCwXFStSX8Er0Ty73jtgxl9_et7lbit2HTZojBgCjKze8pof3uYaxguYK9xyS5_xyHOwZ8HqPwRRTR4VfeasyhJxF72a4VCl8FJ8uTJYv7RaZxyFI"
                alt="Gạo Nàng Thơm Chợ Đào"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary text-[#C89B3C] font-label-md text-label-md">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                5 SAO OCOP
              </div>
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase">
                  <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                  Mỹ Lệ, Cần Đước, Long An
                </div>
                <h3 className="font-headline-sm text-title-editorial text-primary font-bold">
                  Gạo Nàng Thơm Chợ Đào
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                  Giống lúa mùa cổ truyền 6 tháng chỉ thích nghi tốt nhất trên dải đất phù sa pha sét ven sông Rạch Đào.
                  Hạt cơm dẻo mềm, thơm ngát kéo dài sau nhiều giờ nấu.
                </p>
              </div>
              <div className="pt-4 mt-2 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary font-medium">Lúa mùa bản địa</span>
                <a
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md uppercase font-semibold transition-colors"
                  href="#"
                >
                  Xem chi tiết
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 4: Mận hậu sấy dẻo Mộc Châu (Chiếm 6 cols) */}
          <article className="lg:col-span-6 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
            <div className="md:w-1/2 relative min-h-[220px]">
              <img
                className="w-full h-full object-cover"
                data-alt="Những quả mận hậu Mộc Châu sấy dẻo màu đỏ tím sậm phủ phấn tự nhiên xếp trên nia tre đan thủ công, đằng sau là thung lũng mận Nà Ka Sơn La xanh ngát bạt ngàn mây phủ."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCswOW9H_cAGW2ZcfdrVYZX28Rytew8VOvhly4QiGk9hK23FEvFEWZRydTGLgGW5bTYUNzNTb3kmVms7hgTpSBJoK-T90dhwMgORMsv4enbbYYmn4C-PW2TwPnEuhGrsUfqnrE8QNbMqHgmBl9CzBJ77gPcjLjXId9h07JQvw7PQLfKNr0mSzDjmdXDvwg8XloZXf1t84LbfGgW7Ren2SHgqeJpfv2-aPz8a9kixA"
                alt="Mận hậu Sấy dẻo Mộc Châu"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary text-[#C89B3C] font-label-md text-label-md">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                5 SAO OCOP
              </div>
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase">
                  <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                  Mộc Châu, Sơn La
                </div>
                <h3 className="font-headline-sm text-title-editorial text-primary font-bold">
                  Mận hậu Sấy dẻo Mộc Châu
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                  Thu hoạch từ những cây mận cổ thụ thung lũng Nà Ka, sấy lạnh chân không giữ trọn vị chua thanh ngọt đằm
                  và hàm lượng vi chất dinh dưỡng tự nhiên mà không dùng chất phụ gia.
                </p>
              </div>
              <div className="pt-4 mt-2 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline">Công nghệ sấy lạnh</span>
                <a
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md uppercase font-semibold transition-colors"
                  href="#"
                >
                  Xem chi tiết
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
