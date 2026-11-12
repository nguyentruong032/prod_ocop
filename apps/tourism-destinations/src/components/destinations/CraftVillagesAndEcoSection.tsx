'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DestinationCard {
  id: string;
  category: 'lang-nghe' | 'du-lich-sinh-thai';
  tag: string;
  title: string;
  description: string;
  stats: string;
  image: string;
  alt: string;
  link: string;
}

const DESTINATIONS: DestinationCard[] = [
  {
    id: 'van-phuc',
    category: 'lang-nghe',
    tag: 'Làng nghề · ĐB sông Hồng',
    title: 'Làng nghề dệt lụa Vạn Phúc',
    description: 'Trải nghiệm dệt lụa ngàn năm tuổi và không gian phố nghề cổ kính.',
    stats: '05 Sản phẩm · 08 Câu chuyện',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwWN2jCIZr5WT8vsltsxvLd5-Zv5dhAANU9TsLVxI8j29hbGYrX0Y052mxrY6kdejOHtaGkLWxn51YmjUVeJZrXWp-p1KNmVy2l-WDxpd1ORxbxQtoKwsAdRaGCaIVo-dIfZ89PWDq3x8_PpeP2SUu_0MS1Zq30Xtbfvuda_ZTaLo_V2rthfrDBMe-iTsLA8cZd-woUdqQUnwR7j2NJ5ldTdICA-Fv9Nd6pqlTdZM',
    alt: 'Traditional silk weaving loom in Van Phuc silk village Hanoi, soft natural lighting on colorful woven patterns, artisan fingers carefully handling pure natural silk fibers, artistic close up documentary photograph.',
    link: '/diem-den-du-lich/lang-nghe-truyen-thong',
  },
  {
    id: 'phu-lang',
    category: 'lang-nghe',
    tag: 'Làng nghề · ĐB sông Hồng',
    title: 'Làng gốm men tro Phù Lãng',
    description: 'Kỹ thuật vuốt đất nung củi và hồn quê Kinh Bắc trầm mặc.',
    stats: '04 Sản phẩm · 06 Câu chuyện',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUMDxOrgg-y00cDLAGqWoLkMmDjqBdgAfP_lq2zIseX1wmPnBTnc50ehkpPTxvlqcCOQ1fM4NlMhPB6G7FqchH0YHflkloLkAXr5sF-GrkQYhdwnzOwZES2ZtY5nyAK4WSkdBPevZ-QluFuKO_z1P_MMLBABFGmWNJqipPbnckNvI9WN606qD_YayFTmqVpr535Leeb86NEf5mxGf0kRA29LLt0NzQpqtD5YBhNOw',
    alt: 'Earthenware pottery with traditional wood-ash glaze in Phu Lang craft village Bac Ninh, earthy terracotta textures, warm kiln fire glow, artisanal clay vessels drying in courtyard.',
    link: '/diem-den-du-lich/lang-nghe-truyen-thong',
  },
  {
    id: 'lai-vung',
    category: 'du-lich-sinh-thai',
    tag: 'Sinh thái · ĐB sông Cửu Long',
    title: 'Tuyến du lịch sinh thái nông thôn vườn quýt hồng Lai Vung',
    description: 'Miệt vườn trĩu quả mùa giáp hạt.',
    stats: '08 Sản phẩm · 05 Câu chuyện',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAx8G973R65sYBUlfKYfeu3HLgDWRKZljsDmcqgrdaL-ZJlwFsXYQ3I32WOlKVhWmxWAW4YjCCr5uWmVoYDXGI3JGmngYy4KSF5izHh3S8aGlRMO0k2FZ3O4DUJ0cAwLPjSjsXCDvdIP4syRrwcf25kCJhbqEV1x6ElcrcbrPd_c9TX59N5TZ4PiM8OYFa0qzcu69ei_JlQDkpERVH1WyaiFPUEIi-Ziof1XWC-uIQ',
    alt: 'Lush pink mandarin orchard in Lai Vung Dong Thap, golden ripe citrus hanging heavily on branches reflected in Mekong Delta canal waters, soft afternoon tropical sunlight, eco-tourism landscape.',
    link: '/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop',
  },
  {
    id: 'suoi-giang',
    category: 'du-lich-sinh-thai',
    tag: 'Văn hóa trà · Miền núi phía Bắc',
    title: 'Không gian văn hóa Trà Suối Giàng',
    description: 'Cây chè Shan Tuyết cổ thụ trên đỉnh mờ sương.',
    stats: '06 Sản phẩm · 07 Câu chuyện',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQCaM22RF1VXfcuXiZXA5WRUt6fiWahKN6QKDcCfa5XwoBzSO6ULy6iy01GBX4cgrAnFIKnxGqf8JJXL8DD0xh3SODV4wwmOrgTqWEZobbIZajj_ed1cu9bG04Jlcyv8XIc7eU3M_THw_Kjb1NuDS0KQGVH10In8FDEXOzhR2vdIyvzoOOkyJkWE5rADGPk2O8Y9DmVUrpt3Gwydd7uem_IWZQSPtidrIpSKozI0s',
    alt: 'Ancient Shan Tuyet tea trees atop misty Suoi Giang Yen Bai, mossy trunks over a century old surrounded by cloud inversion, ethnic Hmong tea pickers in traditional indigo attire.',
    link: '/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop',
  },
  {
    id: 'bao-la',
    category: 'lang-nghe',
    tag: 'Làng nghề · Duyên hải miền Trung',
    title: 'Làng nghề đan lát mây tre đan Bao La',
    description: 'Tỉ mỉ nan tre kết tinh đời sống cung đình xưa.',
    stats: '03 Sản phẩm · 04 Câu chuyện',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4zcUsLo__fW_KXC0YWk2cne1TvwfKGAd6YrOtTrwDxvPWWqZ8_njB0KGS4KkbErqdiR72POCDbCTUQwIAv_RTdyBcDqPTAo3NIFQ6EDAC4eH616rgiac_O1C6Bx_KvabqftAGmKZFQ2WTsDLP03bAMfN5HcCpqibBBTnGDDB6Y8AhPSyGnrfr3IhzHLQqOEMfXPAjWjMvV-92L0Or1fPOgV_yRLWt1ZC8ucZrBgY',
    alt: 'Elderly artisan in Bao La village Thua Thien Hue finely slicing bamboo strips for exquisite handwoven baskets, historic rural courtyard with sunlit bamboo fibers drying on wooden frames.',
    link: '/diem-den-du-lich/lang-nghe-truyen-thong',
  },
  {
    id: 'buon-ma-thuot',
    category: 'du-lich-sinh-thai',
    tag: 'Sinh thái di sản · Tây Nguyên',
    title: 'Tuyến du lịch cà phê di sản Buôn Ma Thuột',
    description: 'Hương vị Robusta thượng hạng giữa đại ngàn đất đỏ Bazan.',
    stats: '09 Sản phẩm · 08 Câu chuyện',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfcZbh-0nJEd-tRrcdmz5xeSP0twaRE4aJd9JVYZw9nk1um5h9th5BnaA3ld9cBA5tiTK7hhszTDQHO93KwWtkxcluXGQ7GPcwUiZU4wkF1cb_DVSmUoVe-paNcF_cPPlMN_JWziEy71BsnVpQMgQmsVOPnLC0ZkzLz1UsTPXUX1ZDa_jsDIgt81fPgucfoNtAG0PgSWhITUlg5xRBJDXiFR5-sZbpfbJEdkt8mec',
    alt: 'Vast red basalt soil coffee plantation in Buon Ma Thuot Dak Lak during blossom season, rich red earth, fragrant white blooms, shade trees sheltering mature Arabica and Robusta shrubs, documentary photography.',
    link: '/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop',
  },
];

export function CraftVillagesAndEcoSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'lang-nghe' | 'du-lich-sinh-thai'>('all');

  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (activeTab === 'all') return true;
    return d.category === activeTab;
  });

  return (
    <section className="w-full bg-[#F8F5EE] py-16" id="lang-nghe">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-[#B85D3B]">
              TUYẾN ĐIỂM VĂN HÓA NÔNG THÔN
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-1">
              Hành trình về những làng nghề và tuyến du lịch nông thôn.
            </h2>
          </div>
          {/* Bộ lọc tab */}
          <div className="flex items-center bg-[#FFFFFF] p-1 rounded-xl shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg font-label-sm text-label-sm transition-colors ${
                activeTab === 'all'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setActiveTab('lang-nghe')}
              className={`px-4 py-2 rounded-lg font-label-sm text-label-sm transition-colors ${
                activeTab === 'lang-nghe'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Làng nghề truyền thống
            </button>
            <button
              onClick={() => setActiveTab('du-lich-sinh-thai')}
              className={`px-4 py-2 rounded-lg font-label-sm text-label-sm transition-colors ${
                activeTab === 'du-lich-sinh-thai'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Du lịch sinh thái - Trải nghiệm OCOP
            </button>
          </div>
        </div>

        {/* Lưới 6 thẻ Locality / Destination Card */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-render="destination-grid"
          data-collection="destinations"
        >
          {filteredDestinations.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="bg-[#FFFFFF] rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-surface-container">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  data-alt={item.alt}
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-sm px-2.5 py-1 rounded font-label-sm text-label-sm text-[#1F4D3A]">
                  {item.tag}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-title-editorial text-title-editorial text-primary line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-on-surface font-label-sm text-label-sm">
                  <span className="text-primary font-semibold">{item.stats}</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
