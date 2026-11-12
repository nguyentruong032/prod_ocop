'use client';

import { useState } from 'react';

export function CinemaPlayerSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#133326] text-on-primary py-12 lg:py-16">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-fixed-dim/20 flex items-center justify-center text-primary-fixed">
              <span className="material-symbols-outlined text-[24px]">movie</span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed font-semibold">
                Rạp chiếu Di sản Số
              </span>
              <h2 className="font-headline-md text-headline-md text-on-primary font-bold">
                Phim Tài liệu Điện ảnh Tiêu điểm
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-white/10 text-on-primary font-mono text-[11px] font-medium tracking-wide">
              4K ULTRA HD
            </span>
            <span className="px-3 py-1 rounded bg-white/10 text-on-primary font-mono text-[11px] font-medium tracking-wide">
              DOLBY AUDIO 5.1
            </span>
          </div>
        </div>
        {/* Cinema Grid (8 cols main player, 4 cols playlist) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Interactive Player Card */}
          <div className="lg:col-span-8 bg-black/40 rounded-xl overflow-hidden flex flex-col relative group">
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Cinematic still from Vietnam central highlands documentary: ethnic village elder playing bronze gong in traditional communal stilt house, golden firelight, aromatic rice wine terracotta jars with bamboo straws in foreground, deep forest green and amber cinematic tones, highly detailed documentary photography."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ZxtCydLL8Uw38X3Y64T3-7PXENUVWFzu3CYwBfWZH4cEDtO_L8z944VJPeGWwfM8d-Zn_zFz7egvzurmkXOnsG0fZOwW63_kR88x-70f39B3teQPRnoyLHI38UxYolFXHVvcY9PVhwD1loFolw8q1j9W9Xl-2_RqhstHoehtjmcpLj8SonxR8grdeDR7y6k5nyZDMO2RCtIwaWznHyaKeyhsLoFXM4L-M-2qIZs"
                alt="Âm vang cồng chiêng và men rượu cần truyền thống Tây Nguyên"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
              {/* Badges top left & right */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-semibold">
                  Tập đặc biệt
                </span>
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur text-white font-label-sm text-label-sm flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" /> Ký sự Điền dã 4K
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <button
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                  title="Lưu tư liệu"
                >
                  <span className="material-symbols-outlined text-[18px]">bookmark</span>
                </button>
              </div>
              {/* Central Circular Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  aria-label="Phát video"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 rounded-full bg-primary/80 hover:bg-primary text-tertiary-fixed-dim hover:text-white flex items-center justify-center shadow-xl backdrop-blur transition-all transform hover:scale-110 ring-4 ring-tertiary-fixed-dim/40 cursor-pointer"
                  id="main-play-btn"
                >
                  <span className="material-symbols-outlined text-[44px] ml-1">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
              </div>
              {/* Bottom Progress & Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2">
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer relative group/bar">
                  <div className="bg-tertiary-fixed-dim h-full w-[42%] rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-white/80 font-body-sm text-[12px] pt-1">
                  <div className="flex items-center gap-4">
                    <span
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="material-symbols-outlined text-[20px] text-white hover:text-tertiary-fixed-dim cursor-pointer"
                    >
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-white hover:text-tertiary-fixed-dim cursor-pointer">
                      volume_up
                    </span>
                    <span className="font-mono">07:52 / 18:45</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">
                      1080p60 • 4K
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-white hover:text-tertiary-fixed-dim cursor-pointer">
                      subtitles
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-white hover:text-tertiary-fixed-dim cursor-pointer">
                      fullscreen
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Video Details text block */}
            <div className="p-6 bg-[#0c241b] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-tertiary-fixed-dim font-label-sm text-label-sm mb-2">
                  <span>VÙNG TÂY NGUYÊN • ĐẮK LẮK</span>
                  <span>•</span>
                  <span>CHỦ THỂ: HTX CỒNG CHIÊNG BUÔN ĐÔN</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-tertiary-fixed">
                    <span className="material-symbols-outlined text-[14px]">star</span> OCOP 4 SAO
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white font-bold mb-2">
                  Âm vang cồng chiêng và men rượu cần truyền thống Tây Nguyên
                </h3>
                <p className="font-body-md text-body-md text-white/80 line-clamp-2">
                  Men lá rừng ủ trong chum sành cổ lưu truyền qua 5 thế hệ đồng bào Ê Đê. Những thước phim theo chân già làng Y Dhiam lên nương tìm 24 vị thảo mộc bí truyền trước mùa lễ hội đâm trâu tạ ơn thần lúa.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-white/60 font-body-sm text-body-sm">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> 48,250 lượt xem
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span> 14 Tháng 3, 2026
                  </span>
                </div>
                <button className="text-tertiary-fixed-dim hover:text-white flex items-center gap-1 text-label-sm font-semibold transition-colors">
                  <span>Tải tư liệu nghiên cứu</span>
                  <span className="material-symbols-outlined text-[16px]">file_download</span>
                </button>
              </div>
            </div>
          </div>
          {/* Next in Playlist (4 cols) */}
          <div className="lg:col-span-4 bg-[#0e271d] rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="font-headline-sm text-title-editorial text-white font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">playlist_play</span>
                  Danh sách phát tiếp theo
                </span>
                <span className="font-label-sm text-label-sm text-white/60">3/18 tập</span>
              </div>
              <div className="flex flex-col gap-3">
                {/* Item 1 */}
                <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex gap-3 cursor-pointer group">
                  <div className="w-28 h-20 rounded overflow-hidden relative shrink-0">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      data-alt="Traditional salt pan workers in Sa Huynh Quang Ngai Vietnam at sunset, harvesting mineral white sea salt crystals under warm orange and deep amber twilight sky, cinematic documentary quality."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXXTp4PejX0PSMd3890-TOmx8EZUPokUGH_yh6XAkgZNW4RwKWL5xfVBLV7wJx-QrPcX4zSJq4Zw013zLpsGPSjJ7sXllypoJkQSe1jrKgrYFGbtyfzPd-7cGq3CiTAbAjHVSZTyTvjKElFBYnCMsioxTsuPuNtDOsMaYjWHGeop5a3Y6jINUtyC8rKs3ODHEhmGBv7bmqmjxwjCHs9roP8_QsfKAVSCpI9zgdEFM"
                      alt="Muối Sa Huỳnh"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-mono px-1 rounded">
                      12:30
                    </span>
                  </div>
                  <div className="flex flex-col justify-between min-w-0">
                    <span className="font-label-sm text-[11px] text-tertiary-fixed tracking-wide uppercase font-semibold">
                      Tập 02 • Sa Huỳnh, Quảng Ngãi
                    </span>
                    <h4 className="font-title-editorial text-body-md text-white font-semibold line-clamp-2 group-hover:text-tertiary-fixed-dim transition-colors">
                      Vị ngọt của muối di sản Sa Huỳnh: Tinh hoa biển cả ngàn năm
                    </h4>
                    <span className="font-body-sm text-[12px] text-white/50">Phát hành 08/03/2026</span>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex gap-3 cursor-pointer group">
                  <div className="w-28 h-20 rounded overflow-hidden relative shrink-0">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      data-alt="Traditional woodcarver in Kim Bong carpentry village Hoi An Vietnam carving ornate dragon motifs onto salvaged dark jackfruit wood, sawdust floating in afternoon sunbeams, terracotta workshop backdrop."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_zXvf7PJTn9kNfD173Gk47UZziNBWBxsj5GpPGKRf-WiXRYxm3KrPC_jxSwtz8gmLGuENb1q0mNnxn8iD1uJfNsufxGFx5QNyG-WA532ducFS_mpmmyWnieU2J4GiDuum8_uT3sQ9W0LJL-VaSsg61Zc0iBV3chM7bHyvI8SIiSlzZb8_Xv61YEEk4kUGp77NfUYNhMpMVBFPxkKQHFn4f_vy_IsHvnxXMLWVpc"
                      alt="Làng mộc Kim Bồng"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-mono px-1 rounded">
                      15:10
                    </span>
                  </div>
                  <div className="flex flex-col justify-between min-w-0">
                    <span className="font-label-sm text-[11px] text-tertiary-fixed tracking-wide uppercase font-semibold">
                      Tập 03 • Hội An, Quảng Nam
                    </span>
                    <h4 className="font-title-editorial text-body-md text-white font-semibold line-clamp-2 group-hover:text-tertiary-fixed-dim transition-colors">
                      Đất nặn nên linh hồn: Làng mộc Kim Bồng và bí truyền dựng nhà rường
                    </h4>
                    <span className="font-body-sm text-[12px] text-white/50">Phát hành 01/03/2026</span>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex gap-3 cursor-pointer group">
                  <div className="w-28 h-20 rounded overflow-hidden relative shrink-0">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      data-alt="Thuy Xuan incense village in Hue Vietnam with colorful bouquets of red, yellow, and violet incense sticks drying in imperial courtyard sunshine, artisan woman hand rolling natural agarwood incense paste."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw5WFYIyXuM5clUghE0Ba2DB85NVbAPEFdJo_bjDlCxL_AXZ7sWsNtOugzE5bEU39LqpVfu69v9bH9GDJLHa_IeJAB3R8yaXcntQg1xVrvV7d1uecF9u1HAJjKT-GgjTSP_e8-lou7NpCYpOuxucDS_Trc8iMpS2_QlKCmme56NBpQ6W7WhoX6rT57MJH6l7zp04LEL_shfjSOColep_WKxtasIG3f4Q-hfWL42_s"
                      alt="Hương trầm xứ Huế"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-mono px-1 rounded">
                      14:20
                    </span>
                  </div>
                  <div className="flex flex-col justify-between min-w-0">
                    <span className="font-label-sm text-[11px] text-tertiary-fixed tracking-wide uppercase font-semibold">
                      Tập 04 • Thủy Xuân, Huế
                    </span>
                    <h4 className="font-title-editorial text-body-md text-white font-semibold line-clamp-2 group-hover:text-tertiary-fixed-dim transition-colors">
                      Hương trầm xứ Huế: Ký ức cố đô lưu giữ trong từng nén thảo mộc
                    </h4>
                    <span className="font-body-sm text-[12px] text-white/50">Phát hành 22/02/2026</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 mt-4">
              <a
                className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md flex items-center justify-center gap-2 transition-colors"
                href="#playlist"
              >
                <span className="material-symbols-outlined text-[18px]">video_library</span>
                <span>Xem toàn bộ 18 tập Ký sự Tây Nguyên & Miền Trung</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
