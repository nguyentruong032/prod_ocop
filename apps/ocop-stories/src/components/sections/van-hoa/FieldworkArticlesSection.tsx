'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FieldworkArticle {
  imgSrc: string;
  dataAlt: string;
  province: string;
  tag: string;
  tagBg: string;
  category: string;
  dateText: string;
  title: string;
  desc: string;
  avatarText: string;
  avatarBg: string;
  author: string;
  readTime: string;
}

const articles: FieldworkArticle[] = [
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfI2zmVGQWZ3SkKTwexFfNAmH7ebe7N_5SBCZbMacEiyFCgRgx-1P9ss_O3Cx99Bbf98h7MmjhIlmYQQXgyERPFavjoXC1RST8YUg-QIK27hCB0qQtuxKGQlRH5kpwYLwirhPkXvCSGN0RkT6-pbaACt1oOrCgi_y69Afw8nzJYMlybSlYl4Mj7J-gmBogJa4bjdGnLpmq89cmOw1xKq66LUNoH3uf4msY76DXf-s',
    dataAlt:
      'Traditional blacksmiths pounding red-hot iron on heavy anvils inside an ancient forging workshop in Phuc Sen village, Cao Bang. Sparks flying into dark shadows, rugged mountain limestone peaks in background, documentary craft lighting.',
    province: 'Cao Bằng',
    tag: 'Làng nghề thủ công',
    tagBg: 'bg-secondary text-on-secondary',
    category: 'craft',
    dateText: 'Tháng 02/2026 · Ký sự làng nghề',
    title: 'Lửa lò rèn Phúc Sen và bí truyền thép nhíp xe của người Nùng An',
    desc: 'Không có nhiệt kế hay máy đo độ cứng, người thợ Phúc Sen dùng chính đôi mắt để nhận diện sắc độ hồng cam của thanh thép nung đỏ, truyền đời qua hàng trăm mùa rẫy.',
    avatarText: 'HQ',
    avatarBg: 'bg-primary-container text-primary-fixed',
    author: 'Hoàng Quảng Uyên',
    readTime: '9 phút đọc',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCUzU99jkhp7M640Dbdk0sbLpp97MarlVnJB9MyqKfCCC4CY8iyme09sE_lv09dgXNaSxxPnhQqnWl8Ahc4HaSJC1ysvv3XQ6UaswmI0x-R1K80xlazfJ2a8kq8T0k6MPGzjdznnFXkm8MBCofbibjMPjW2R5RHellEk08Mnqc3Pfjk70qcrOYrbp7_oyYkIqcLFVF_j5eSLlnJPV-8nq3zE7S-DWNVyhivA6yJ5Ag',
    dataAlt:
      'Vietnamese forest honey hunter high up in the dense canopy of ancient Melaleuca cajeputi trees in U Minh Forest, Ca Mau. Natural wild honeycomb dripping golden amber honey, smoke torch in hand, atmospheric misty swampland.',
    province: 'Cà Mau',
    tag: 'Tri thức dân gian',
    tagBg: 'bg-tertiary-fixed text-tertiary',
    category: 'knowledge',
    dateText: 'Tháng 02/2026 · Di sản phi vật thể',
    title: 'Nghề gác kèo ong U Minh: Bài học tôn trọng Mẹ Thiên Nhiên trong từng giọt mật',
    desc: 'Quy ước bất thành văn của thợ rừng: không bao giờ lấy cạn tổ mật, giữ lại tàng sáp non để bầy ong tiếp tục sinh sôi cho mùa tràm trổ hoa năm tới.',
    avatarText: 'NB',
    avatarBg: 'bg-secondary text-on-secondary',
    author: 'Nguyễn Bửu Toàn',
    readTime: '11 phút đọc',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7dHltVImOnRKUksFoZzm2gwhNm17ibPpZXk8-QZeE--l6cDAAP1qLzmWY3unFm4ujHC6vdCsORv67gFNOtYwbmkM6m8ond299XGEVK5nAZ7BjBj5R0BgC1mf-EdbS7uwByfZrAENnSP164QRzLaU6Ka8PycN_AIsZn8zmHz9IvblUZIhaUoBgN_AvUr7jHG4020I2bes6hQHRJw0YexMqw2KUvSHR_MCo5uxQZlE',
    dataAlt:
      'Steaming large earthen pots of simmering fermented shrimp paste and medicinal herbs in a peaceful garden in ancient Hue city. Clay jars arranged in stone courtyards, traditional royal culinary refinement, warm afternoon light.',
    province: 'Thừa Thiên Huế',
    tag: 'Ẩm thực truyền thống',
    tagBg: 'bg-primary-container text-primary-fixed',
    category: 'cuisine',
    dateText: 'Tháng 01/2026 · Hương vị Cung đình',
    title: 'Mắm tôm chua xứ Huế: Tinh tế sự giao thoa giữa mỹ học Cung đình và dân dã',
    desc: 'Từ con tôm đất nước ngọt sông Hương, qua sự tẩm ướp măng vòi, riềng non, ớt hiểm và rượu nếp thơm, tạo nên gam màu đỏ son đặc trưng và vị thanh tao khó lẫn.',
    avatarText: 'HY',
    avatarBg: 'bg-primary text-on-primary',
    author: 'Hồ Hoàng Yến',
    readTime: '8 phút đọc',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtAoKxwwTYownoN12qi2XP3b4-PJ1D8kOpeRjqNtZKet0tbcaGtMivTU8mt7XGmSGJDT45S9gFUdcOZINOurE2e2Ie-UO6eNtMPC5pUrDVRR-snn3EpYajWvEqj4yRIiKV38fTamh3gZ4oyikcjHzcc2ZctQSi8Z77Vfe6kynzWL-lKd6PmbWvIppA132DKLPR6JzcbNigm8LHbgf9zn7Vk95FbZ9mzokW6pfeliI',
    dataAlt:
      'Dao Do ethnic women gathering fragrant forest medicinal leaves and roots in high mountain bamboo valleys of Sapa, Lao Cai. Wooden barrels filled with steaming dark herbal medicinal bath water, mist, authentic ethnobotanical documentary style.',
    province: 'Lào Cai',
    tag: 'Bản sắc dân tộc thiểu số',
    tagBg: 'bg-secondary text-on-secondary',
    category: 'ethnic',
    dateText: 'Tháng 01/2026 · Cây thuốc bản địa',
    title: 'Bài thuốc tắm lá của người Dao Đỏ Tả Phìn: Kho tàng thực vật học giữa mây ngàn',
    desc: 'Hơn 30 vị thảo mộc rừng nguyên sinh được các mế Dao gìn giữ, mang năng lượng hồi phục diệu kỳ từ lòng đất và triết lý sống hòa hợp với thiên nhiên Hoàng Liên Sơn.',
    avatarText: 'LM',
    avatarBg: 'bg-primary-container text-primary-fixed',
    author: 'Lý Mẩy Kiều',
    readTime: '13 phút đọc',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbcRysCquzxQBNxuIy5F6Osnjv16m-Ml0xXEHmok9jJo8HcTE2ZvbFEgp4htjfNJSeqoIWFGCgZLxsPYqkw3nXpU2tNdc27x6L_frQ2tmz4Q8tLfUmSFbFxLWhgwUvkUznVZam9pwkfHlGvUVXfOiTcHfl2Fxwb3tk6Aarulf0SyPIcw_se3cIU00LMIUVFGTiCmc7TL-Wg5WeisnEul6ra_2vHnKur8S7zrgaC3s',
    dataAlt:
      'Traditional woodblock carvers printing iconic folk art onto handmade poonah paper Do in Dong Ho village, Bac Ninh. Natural dyes derived from scallop shell powder, ash, sophora flowers, and gardenia fruits drying under sunshine.',
    province: 'Bắc Ninh',
    tag: 'Làng nghề thủ công',
    tagBg: 'bg-secondary text-on-secondary',
    category: 'craft',
    dateText: 'Tháng 01/2026 · Di sản tranh dân gian',
    title: 'Màu dân tộc sáng bừng trên giấy điệp: Sức sống trường tồn của tranh Đông Hồ',
    desc: 'Sắc đen từ than lá tre, sắc trắng vỏ điệp tán nhuyễn, sắc vàng hoa hòe... Thiên nhiên dung dị hóa thân vào từng bản khắc gỗ mang cốt cách tâm hồn Việt.',
    avatarText: 'NT',
    avatarBg: 'bg-tertiary-fixed text-tertiary',
    author: 'Nguyễn Trọng Tạo',
    readTime: '10 phút đọc',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0qwBKxaDWtAzaoh8_JdKORRA_VZDNuFBct-l45W-D9VlmIeKrZQqQbvvjJKuh0SOg05m6ufUd37MACqCVVoM0dna3W8Pwz8Hs6qTegnCmxt1zoiTghZUO4aLLGUpJOrVFOYESp2gLqy0_84XH-kROuiBIrBzbHI3G2b293PGmKmoIHvGUqkl1VbsiFuNMNvvnoLNHNcqmJeSgmkmxXKuCO_7SxF-QSbkUfiiCWNA',
    dataAlt:
      'Golden ripe sticky rice fields on Mu Cang Chai stepped terraces harvested by Hmong farmers, traditional green sticky rice Com making in Tu Le, Yen Bai. Roasting unripe glutinous rice grains in clay pots, pounding in wooden mortars.',
    province: 'Yên Bái',
    tag: 'Ẩm thực truyền thống',
    tagBg: 'bg-primary-container text-primary-fixed',
    category: 'cuisine',
    dateText: 'Tháng 12/2025 · Ngọc thực thung lũng',
    title: 'Cốm nếp nương Tú Lệ: Giọt sữa của trời trên cánh đồng Mường Lò',
    desc: 'Gạo nếp Tan Lả gieo trên đất phù sa suối Thia ngậm sương đêm, được giã nhịp nhàng trong cối gỗ lúc bình minh, đem lại hương thơm ngào ngạt của đại ngàn.',
    avatarText: 'ĐL',
    avatarBg: 'bg-primary text-on-primary',
    author: 'Đỗ Linh Đan',
    readTime: '7 phút đọc',
  },
];

export function FieldworkArticlesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'Tất cả (240)' },
    { key: 'craft', label: 'Làng nghề thủ công' },
    { key: 'cuisine', label: 'Ẩm thực truyền thống' },
    { key: 'knowledge', label: 'Tri thức dân gian' },
    { key: 'ethnic', label: 'Bản sắc dân tộc thiểu số' },
  ];

  const filtered = articles.filter(
    (a) => selectedCategory === 'all' || a.category === selectedCategory
  );

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl" id="danh-sach-bai-viet">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        {/* Section Title & Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-wider">
              Lưu Trữ Điền Dã & Chuyên Đề
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
              Dòng Chảy Văn Hóa & Tri Thức Cổ
            </h2>
          </div>
          {/* Filter Component */}
          <div className="flex flex-wrap items-center gap-2" id="filter-container">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCategory(c.key)}
                className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  selectedCategory === c.key
                    ? 'bg-primary text-on-primary shadow-xs'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        {/* 6 In-Depth Fieldwork Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art, idx) => (
            <article
              key={idx}
              className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt={art.dataAlt}
                  src={art.imgSrc}
                  alt={art.title}
                 loading="lazy" decoding="async"/>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label-sm text-label-sm text-primary font-semibold">
                    {art.province}
                  </span>
                  <span className={`px-2.5 py-1 rounded ${art.tagBg} font-label-sm text-label-sm font-semibold`}>
                    {art.tag}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{art.dateText}</span>
                  <h3 className="font-title-editorial text-title-editorial text-primary font-bold mt-1 group-hover:text-secondary transition-colors">
                    <Link href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia">{art.title}</Link>
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-3">{art.desc}</p>
                </div>
                <div className="pt-6 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-full ${art.avatarBg} flex items-center justify-center font-bold text-xs`}
                    >
                      {art.avatarText}
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface font-medium">{art.author}</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> {art.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* Professional Editorial Pagination */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Hiển thị <span className="font-semibold text-primary">1 - 6</span> trên tổng số{' '}
            <span className="font-semibold text-primary">240</span> chuyên đề nghiên cứu
          </span>
          <nav aria-label="Phân trang tư liệu" className="flex items-center gap-1.5">
            <button
              className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors disabled:opacity-40"
              disabled
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <span className="w-9 h-9 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center shadow-xs">
              1
            </span>
            <a
              className="w-9 h-9 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center justify-center transition-colors"
              href="#page-2"
            >
              2
            </a>
            <a
              className="w-9 h-9 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center justify-center transition-colors"
              href="#page-3"
            >
              3
            </a>
            <span className="px-2 text-outline font-mono">...</span>
            <a
              className="w-9 h-9 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center justify-center transition-colors"
              href="#page-24"
            >
              24
            </a>
            <a
              className="h-9 px-3 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md flex items-center gap-1 transition-colors"
              href="#page-next"
            >
              <span>Trang tiếp</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
