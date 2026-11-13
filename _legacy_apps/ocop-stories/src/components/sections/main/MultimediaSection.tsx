import Link from 'next/link';

export function MultimediaSection() {
  return (
    <section className="w-full bg-primary text-on-primary py-16 lg:py-24" id="khoi-06-multimedia">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-label-md text-label-md text-tertiary-fixed font-semibold uppercase tracking-wider block mb-2">
              PHÓNG SỰ TRUYỀN HÌNH & KÝ SỰ SỐ
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-primary font-bold">
              Thước phim chân thực từ vùng nguyên liệu và xưởng chế tác
            </h2>
          </div>
          <p className="font-body-md text-body-md text-primary-fixed-dim max-w-md mt-4 md:mt-0">
            Âm thanh của núi rừng, hơi ấm của lửa lò nung và những lát cắt đời thường sinh động qua lăng kính tư liệu truyền hình chất lượng 4K.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Video chính (trái / giữa): Chiếm 7 cột */}
          <div className="lg:col-span-7 bg-primary-container rounded-xl overflow-hidden shadow-lg group">
            <div className="relative aspect-video w-full overflow-hidden cursor-pointer">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                data-alt="Central Highlands ethnic community celebrating with traditional bronze gongs and ceremonial earthen jars of Can wine around communal longhouse bonfire, cinematic golden hour footage frame"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB64U0WdmIocZpXy9hol-yMmCenX1cgkSRu7KKkN4Xp7QyynBQfrW9AJfzXhwcn2-bWH7MrUBaroYSiBBN0QBfXKgk3lFd0CuBfLal2HP8fghkyYUsIxcIJ8SkwZ5rzUL7xl_pT78erMGE2tkZQrNs85j94Q0ZiRzIdzskqFHIIp9hVCUb4ZSoFphxFaLz9tT1QL6pk6OdRbAjTCpDvwnP44r4G5-UtYheqp-64ilw')",
                }}
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-[42px] ml-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </div>
              </div>
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-error text-on-error font-label-sm text-label-sm font-bold flex items-center gap-1 shadow">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> 4K ULTRA HD
              </span>
              <span className="absolute bottom-4 right-4 px-2.5 py-1 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-sm text-label-sm font-mono font-medium">
                12:45
              </span>
            </div>
            <div className="p-6 lg:p-8">
              <span className="font-label-sm text-label-sm text-tertiary-fixed font-semibold uppercase tracking-wider">
                PHÓNG SỰ ĐẶC BIỆT · TÂY NGUYÊN
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold mt-2 mb-3">
                Âm vang cồng chiêng và men rượu cần truyền thống Tây Nguyên
              </h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim line-clamp-2">
                Khám phá bí mật men lá rừng của đồng bào Ba Na, quy trình ủ trấu trong ghè sành cổ và mối liên kết tâm linh với đại ngàn bất tận.
              </p>
            </div>
          </div>
          {/* 3 Thẻ Video phụ (phải): Chiếm 5 cột */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Video phụ 1 */}
            <div className="bg-primary-container/60 hover:bg-primary-container p-4 rounded-xl transition-colors cursor-pointer flex gap-4 items-center group">
              <div className="relative w-36 aspect-video shrink-0 rounded overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Traditional salt workers raking glistening white sea crystals under blazing midday sun at Sa Huynh Quang Ngai salt flats, documentary photo"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVKnqGhSi6A-2O3b6m8TnS2IeMqhDzQvKnh9V5zODI89r0kMVZxIbbvliU34KSV93b1MVOq7ApEfUsWR5GHhtO_o1pvz9DngszfDBDkCh87anJAao4MKwVqArT5v-vIbYdJxs78Ux-JZpRqb8-tI31wNR_8A-AEHqhmbmVaOCOvrFNvSz4ykaeO_UOsXAVMeMZ6ltdBCSPqP3rRfv5R-IbxV86Rxe60kwc7BZ0ITI')",
                  }}
                />
                <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-white text-[24px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                </div>
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-inverse-surface/90 text-[10px] text-white font-mono">
                  08:15
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-label-sm text-tertiary-fixed font-semibold uppercase">QUẢNG NGÃI</span>
                <h4 className="font-title-editorial text-[16px] text-on-primary font-semibold truncate group-hover:text-tertiary-fixed transition-colors mt-0.5">
                  Vị ngọt của muối di sản Sa Huỳnh
                </h4>
                <p className="text-body-sm text-primary-fixed-dim text-[13px] line-clamp-1 mt-1">
                  Đời diêm dân qua ba thế hệ gắn liền với hạt muối sạch.
                </p>
              </div>
            </div>
            {/* Video phụ 2 */}
            <div className="bg-primary-container/60 hover:bg-primary-container p-4 rounded-xl transition-colors cursor-pointer flex gap-4 items-center group">
              <div className="relative w-36 aspect-video shrink-0 rounded overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Traditional wood carving masters chiseling fine dragon motifs into ancient timber at Dong Ky Bac Ninh craft village"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-RpmaWUzy0K0q5Q3Rr5khWPlx9UQve3uviUj8tlmwapsf7ErCJ5DUoLmcYfjPs-tZm_wwlphRT1O3aqOek7QAzBKHulRIe4HIfLNimeiloqILIY5L20mG-wD23WEqotN5ztkBcu4y1bYdTEfb8ho47e7PC35_mt_WS9LNbdT9BNHZ972LmZl8e3aaHGvLlzAYxe0MCiAO5cXWTBS-rmrtVyP9TXO6--iZXT30jLc')",
                  }}
                />
                <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-white text-[24px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                </div>
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-inverse-surface/90 text-[10px] text-white font-mono">
                  09:30
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-label-sm text-tertiary-fixed font-semibold uppercase">BẮC NINH</span>
                <h4 className="font-title-editorial text-[16px] text-on-primary font-semibold truncate group-hover:text-tertiary-fixed transition-colors mt-0.5">
                  Nhát đục nghìn năm làng mộc Đồng Kỵ
                </h4>
                <p className="text-body-sm text-primary-fixed-dim text-[13px] line-clamp-1 mt-1">
                  Giữ hồn cốt hoa văn thời Lý trong không gian sống hiện đại.
                </p>
              </div>
            </div>
            {/* Video phụ 3 */}
            <div className="bg-primary-container/60 hover:bg-primary-container p-4 rounded-xl transition-colors cursor-pointer flex gap-4 items-center group">
              <div className="relative w-36 aspect-video shrink-0 rounded overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Green lush cajeput essential oil distillery in Hue Vietnam with steam rising from copper stills, aromatic forest plants"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_7_HOk1qMbt6eoCvIqAHvGt2-JCV7fDkaJtBpcR8Dzl5Obxqd0W6oSuVJv2qFtt11mk9ig97rocdkQ8ANFx0dVE03O2LGOQ9zBXUlMwWEk5-DTTj1TVS3LKYyTsYaZZmemAMS_u9_EAUHHwrbAZOqf0IgsUVltecUDjFs-MPppBsq1R5bW1_8eCusyui4bxMfKtpGeMXntBiDPzBujpjRiezirlhujQ5qMr0oQB4')",
                  }}
                />
                <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-white text-[24px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                </div>
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-inverse-surface/90 text-[10px] text-white font-mono">
                  11:02
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-label-sm text-tertiary-fixed font-semibold uppercase">
                  THỪA THIÊN HUẾ
                </span>
                <h4 className="font-title-editorial text-[16px] text-on-primary font-semibold truncate group-hover:text-tertiary-fixed transition-colors mt-0.5">
                  Hương tràm Lộc Thủy - Ký ức cố đô
                </h4>
                <p className="text-body-sm text-primary-fixed-dim text-[13px] line-clamp-1 mt-1">
                  Nồi cất tinh dầu đỏ lửa suốt bốn mùa gió rét miền Trung.
                </p>
              </div>
            </div>
            {/* CTA to multimedia library */}
            <div className="pt-2">
              <Link
                className="h-11 px-5 rounded bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary flex items-center justify-center gap-2 font-label-md text-label-md transition-colors"
                href="/cau-chuyen-ocop/phong-su-da-phuong-tien"
              >
                <span>Xem toàn bộ 140+ thước phim tài liệu OCOP</span>
                <span className="material-symbols-outlined text-[16px]">smart_display</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
