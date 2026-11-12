'use client';

import { useState } from 'react';

interface PodcastItem {
  episode: number;
  durationText: string;
  durationTime: string;
  dateText: string;
  imgSrc: string;
  dataAlt: string;
  guestTitle: string;
  guestName: string;
  title: string;
  quote: string;
  topic: string;
}

const podcasts: PodcastItem[] = [
  {
    episode: 28,
    durationText: 'Tập 28 • 32 phút',
    durationTime: '32:10',
    dateText: 'Tháng 3, 2026',
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKHcL98k4AcxzGM-RxW5AoqSkTN4uB8rdwQhLEwL-GFA8SsFUfAMrC9yuxK8f0Ij3Pb7JZTsvQQpbuIzbp_hDqnjsTjiGdCbBqdA8_fcQsRVvH_asVL69W2k38lnq1aviSPUqnIri6OyrbOPSmfslididf6xFYHiveR2KMeQFiUnR_Ez_SKvDMC9R-jkbm9y1H-RnliFiCZUcz9Jlmb6JwoE6kCBwsboCzNxVkKug',
    dataAlt:
      'Vietnamese veteran tea master Mr. Nguyen Van Cuong walking through misty emerald green Tan Cuong tea hill in Thai Nguyen at early sunrise, carrying bamboo basket, gentle morning mist.',
    guestTitle: 'Khách mời đàm thoại',
    guestName: 'Nghệ nhân Nguyễn Văn Cường',
    title: 'Hương chè Tân Cương trong sương sớm: Triết lý sao chè củi lửa của người già xứ Thái',
    quote:
      '"Sao một mẻ chè đinh móc câu không thể vội, phải nghe tiếng búp chè reo trên chảo gang và ngửi thấy mùi cốm non quyện vào từng thớ gỗ cháy."',
    topic: 'Chủ đề: Nông nghiệp trà cổ',
  },
  {
    episode: 27,
    durationText: 'Tập 27 • 28 phút',
    durationTime: '28:45',
    dateText: 'Tháng 2, 2026',
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_XS-R8hhFuZWVLfP_bBucL2s_ndMxf_p6hj25T3KV2RaWx43ufXHQnF1VLkntaZ-blp_GBbYST7Vq_gv_zi4L4wdDQiB8zYM1MvrO1dYvtl2cjR_VDzFY7Mp4dqown8jW6R8ZLnDH1NUwZ8vwD72wA0yKfCkiK331gpsfAcRSF1SjKxnk4E1dVIUmJc1ZAAGtVlmhgt3fK5u36gTp8pkM-Bb_c7PO-yhcXAYnbtc',
    dataAlt:
      'Traditional giant wooden fermentation barrels of fish sauce in Phu Quoc Vietnam, sunlight filtering into warehouse hitting amber drops of pure fish sauce, artisanal craftsmanship.',
    guestTitle: 'Khách mời đàm thoại',
    guestName: 'Bà Đặng Thị Hải Yến (HTX Phú Quốc)',
    title: 'Bí mật ủ chượp nước mắm trăm năm đảo ngọc Phú Quốc: Khi kiên nhẫn hóa thành ngọc thực',
    quote:
      'Hành trình gìn giữ từng thùng gỗ bời lời, tỉ lệ muối Bà Rịa với cá cơm than tươi ròng vừa cất lưới từ biển Tây, được ủ ròng rã suốt 12 đến 15 tháng dưới mái vòm nắng gió.',
    topic: 'Chủ đề: Thủy hải sản lên men',
  },
  {
    episode: 26,
    durationText: 'Tập 26 • 35 phút',
    durationTime: '35:12',
    dateText: 'Tháng 2, 2026',
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9V4fAeEcQnNfk6KJbfGT8SyaJ0rdpr3FhFDcJN6x7CrTRbeWwmp99soFzvWAfVICFymQGG9BLsAglxWynHstCACx7A4QJ4mrEheR7yPi4n-Uok3qAzB66MbGWIfH37Ni1WBDFC3tgFonObO5Gx7O1GgHV5M0zXoiDY3Zf2oK0jxnCvs6FE9uxxlIUL6tMad6AlsPwPPMZziNXTGtN65VOvsET7xLn6qzF92VA9J8',
    dataAlt:
      'Wild Ngoc Linh ginseng plant growing under primeval jungle canopy on cloudy mountain in Nam Tra My Quang Nam Vietnam, rich dark organic soil, emerald green moss.',
    guestTitle: 'Khách mời đàm thoại',
    guestName: 'TS. Trần Anh Khoa & Đồng bào Xê Đăng',
    title: 'Sâm Ngọc Linh: Hành trình từ cây cỏ dại dưới tán rừng già đến vị thế Quốc bảo Việt Nam',
    quote:
      'Câu chuyện bảo vệ rừng nguyên sinh đỉnh 2.500m để cứu lấy cội rễ sâm, đối mặt với sinh tử và khát vọng đưa dược liệu quý ngút ngàn của đồng bào vươn tầm dược điển thế giới.',
    topic: 'Chủ đề: Dược liệu bản địa',
  },
];

export function PodcastSection() {
  const [playingEp, setPlayingEp] = useState<number | null>(null);

  const togglePlay = (ep: number) => {
    setPlayingEp(playingEp === ep ? null : ep);
  };

  return (
    <section className="w-full bg-[#f8f5ee] py-14 lg:py-20 border-b border-[#e2dbd0]">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">podcasts</span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                Ký sự Âm thanh Điền dã • Số Phát hành Định kỳ Thứ Sáu
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary font-bold">
              Podcast Ký sự: &quot;Tiếng nói từ Đất Mẹ&quot;
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
              Không gian đàm thoại lắng đọng cùng những nghệ nhân, nhà khoa học thực vật và các chủ nhiệm hợp tác xã đang ngày đêm gìn giữ nguồn gen bản địa.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-white font-label-md text-label-md shadow-xs flex items-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">rss_feed</span>
              <span>Đăng ký RSS Feed</span>
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md shadow-xs flex items-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">headphones</span>
              <span>Nghe trên Spotify / Apple</span>
            </button>
          </div>
        </div>
        {/* 3 Thẻ Audio Podcast */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {podcasts.map((p) => (
            <div
              key={p.episode}
              className="bg-surface-container-lowest p-6 rounded-xl shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#eaf2ee] text-[#1b4332] font-label-sm text-label-sm font-semibold">
                    {p.durationText}
                  </span>
                  <span className="font-mono text-body-sm text-on-surface-variant">{p.dateText}</span>
                </div>
                <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4">
                  <img className="w-full h-full object-cover" data-alt={p.dataAlt} src={p.imgSrc} alt={p.title}  loading="lazy" decoding="async"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="font-label-sm text-[11px] text-tertiary-fixed-dim uppercase tracking-wider">
                      {p.guestTitle}
                    </span>
                    <p className="font-title-editorial text-body-md font-semibold text-white">{p.guestName}</p>
                  </div>
                </div>
                <h3 className="font-headline-sm text-title-editorial text-primary font-bold mb-3 hover:text-secondary transition-colors">
                  {p.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-6">{p.quote}</p>
              </div>
              {/* Audio Player UI Widget */}
              <div className="bg-surface-container-low p-3.5 rounded-lg flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <button
                    aria-label={`Phát tập ${p.episode}`}
                    onClick={() => togglePlay(p.episode)}
                    className="w-9 h-9 rounded-full bg-primary text-on-primary hover:bg-secondary flex items-center justify-center transition-colors shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {playingEp === p.episode ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                  {/* Sound wave visualizer SVG */}
                  <svg className="h-6 w-44 text-primary opacity-80" fill="currentColor" viewBox="0 0 100 24">
                    <rect height="8" rx="1.5" width="3" x="2" y="8" />
                    <rect height="16" rx="1.5" width="3" x="8" y="4" />
                    <rect height="12" rx="1.5" width="3" x="14" y="6" />
                    <rect height="20" rx="1.5" width="3" x="20" y="2" />
                    <rect height="6" rx="1.5" width="3" x="26" y="9" />
                    <rect height="14" rx="1.5" width="3" x="32" y="5" />
                    <rect height="22" rx="1.5" width="3" x="38" y="1" />
                    <rect height="10" rx="1.5" width="3" x="44" y="7" />
                    <rect height="16" rx="1.5" width="3" x="50" y="4" />
                    <rect height="4" rx="1.5" width="3" x="56" y="10" />
                    <rect height="18" rx="1.5" width="3" x="62" y="3" />
                    <rect height="8" rx="1.5" width="3" x="68" y="8" />
                    <rect height="14" rx="1.5" width="3" x="74" y="5" />
                    <rect height="6" rx="1.5" width="3" x="80" y="9" />
                    <rect height="20" rx="1.5" width="3" x="86" y="2" />
                    <rect height="12" rx="1.5" width="3" x="92" y="6" />
                  </svg>
                  <span className="font-mono text-body-sm text-[12px] text-on-surface-variant font-medium">
                    {p.durationTime}
                  </span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-[11px] pt-1 border-t border-outline-variant/30">
                  <span>{p.topic}</span>
                  <a className="text-secondary font-semibold hover:underline" href="#summary">
                    Xem tóm tắt số →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
