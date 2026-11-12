'use client';

import { useState } from 'react';

interface ArticleItem {
  id: string;
  category: 'xuat-khau' | 'tieu-chuan' | 'chuyen-doi-so';
  tag: string;
  tagColor: string;
  location: string;
  readTime: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  image: string;
  alt: string;
}

const ARTICLES: ArticleItem[] = [
  {
    id: '1',
    category: 'xuat-khau',
    tag: 'Xúc tiến Thương mại',
    tagColor: 'bg-primary text-on-primary',
    location: 'Hà Nội • Diễn đàn VCCI',
    readTime: '8 phút đọc',
    title: 'Thúc đẩy chuỗi hợp tác công - tư (PPP): Đưa 300 sản phẩm OCOP vào hệ thống bán lẻ Đông Á',
    summary:
      'Tổng hợp cam kết và biên bản ghi nhớ tại Hội nghị Xúc tiến Thương mại Quốc gia: gỡ vướng thủ tục thanh toán L/C và hỗ trợ pháp lý phòng vệ thương mại.',
    author: 'Ban Thư ký Diễn đàn',
    date: '15/03/2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUONXkClovA-Hnfyhde4xOKCA3uP2rNh3rTxoVTn8FRUah_XycNmoq6nk7p5YOEVLJpYWAK-sTOxA42CZ_nM3L3H8DwYYvlMpxs85UtC6w0p5klsJvDNKDFM6qb827c68MAXDSpEOAtFGHnG0C2gHbK25BCu2zFjNRlmtg1LwWMn-4-cYgJrEcL5scAe7KhqBVqELGVCUfBD4mIkha6KvvMA11F_FQ9K7gwdGHjBc',
    alt: 'Editorial photograph of Vietnamese trade delegates and international business buyers',
  },
  {
    id: '2',
    category: 'tieu-chuan',
    tag: 'Tiêu chuẩn Kỹ thuật',
    tagColor: 'bg-secondary text-on-secondary',
    location: 'Đồng Tháp • Sen Tháp Mười',
    readTime: '11 phút đọc',
    title: 'Vượt qua hàng rào kiểm nghiệm 800 chỉ tiêu hóa chất để đạt chứng nhận hữu cơ USDA',
    summary:
      'Ký sự thực địa từ các cánh đồng sen thâm canh sạch tại ĐBSCL: bài học quản lý bùn đất, nguồn nước tưới và bảo vệ đệm sinh học trước quy chuẩn Hoa Kỳ.',
    author: 'KS. Lê Hoàng Long',
    date: '12/03/2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuDeaIO139MsIA0VRtKcERVv-jVhtSuQ9SY7xYE9cI4krvh1jjRlf3k28XTbd5pIJ1cXjTERkYBGCq40pnFvowE23gjFzKQD76JDDa9oXfIndpO-ZJc1YerenASoHdWYUp_fcEGFrvaQQ5dbkgWX2SK1i8IB0dKwcPFyhc0p6x3t1ULQGP-BmnYouFUxkvNl4fL6hEyTXc_jDQZYhSdQPYyVCttRVmUaYxa4_Q5C8',
    alt: 'Close-up photograph of an organic agricultural lab technician analyzing dried Vietnamese lotus seeds',
  },
  {
    id: '3',
    category: 'chuyen-doi-so',
    tag: 'Chuyển đổi số',
    tagColor: 'bg-primary-container text-tertiary-fixed',
    location: 'TP. Hồ Chí Minh • Logistics Hub',
    readTime: '6 phút đọc',
    title: 'Ứng dụng hợp đồng thông minh Blockchain vào truy xuất nguồn gốc hồ tiêu Chư Sê',
    summary:
      'Minh bạch từng công đoạn thu hái, phơi sấy và đóng gói: giải pháp giúp nông dân Tây Nguyên kết nối trực tiếp với nhà phân phối sỉ tại Hamburg (Đức).',
    author: 'Nguyễn Thùy Linh, M.Sc',
    date: '09/03/2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYP6HICqT1VVDlyihVo6u2DbpgyZAjpyIHN5_hZA8Sly_H4X0t7h1cKBBLULMea1u-AIQHrB6SOnBcpOd6pKfel9_rDf1WYZhhh2X1dRY5UEuNbGPUXhK6Tu8Qn_Q_4C-DHDbWv3YzB6CFrEAegBoW4nL7k7Y4rEtFz9YYZbj7SyHGBNeQdXbKdHkEmqHReq4Sw0C7RePh_BjTQIc-hf1Np9XP6BNliH8tgD6WA-M',
    alt: 'Modern logistics and digital fulfillment center',
  },
  {
    id: '4',
    category: 'xuat-khau',
    tag: 'Thủ công Mỹ nghệ',
    tagColor: 'bg-primary text-on-primary',
    location: 'Hà Nội • Làng nghề Bát Tràng',
    readTime: '9 phút đọc',
    title: 'Gốm mỹ nghệ và mây tre đan OCOP: Khi thiết kế đương đại giải bài toán thuế môi trường',
    summary:
      'Thay đổi chất trợ dung, loại bỏ hoàn toàn chì và cadmium trong men gốm giúp các làng nghề truyền thống vượt qua quy chuẩn kiểm định khắt khe của Bắc Âu.',
    author: 'Vũ Minh Trí (Viện Mỹ thuật)',
    date: '04/03/2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiV4WnpK2tDWn2uGAQsoynvflg11LcwPIwv_LCBXK7RtuMBFCKHVQtO_XUsLPG1B2JQqsjGlcks83Tig_i7arrIgMmvGy_hJaU7cyAenUphrCc7faK8n9POq0uI3Cwsm4RleVA7YMI4z2iUgn988MBD1WfEfJaHdWkhcfWXP4EjbhTS3W21IJAZGYPXMC1OxszHT16DjQSPg_xxQHk7304Gc9H0Z5QYfG0BkLD25Y',
    alt: 'Artisanal ceramics and handmade Bat Trang craft pottery',
  },
  {
    id: '5',
    category: 'tieu-chuan',
    tag: 'Bảo tồn Di sản',
    tagColor: 'bg-secondary text-on-secondary',
    location: 'Yên Bái • Rừng Trà Cổ Thụ',
    readTime: '13 phút đọc',
    title: 'Đăng ký Chỉ dẫn Địa lý (GI) tại Thụy Sĩ: Tấm hộ chiếu vàng cho Bạch Trà ngàn năm tuổi',
    summary:
      'Quy trình chứng minh tính độc bản thổ nhưỡng, độ cao 1.400m và gen cây trà bản địa để được Tổ chức Sở hữu Trí tuệ Thế giới (WIPO) bảo hộ thương hiệu toàn cầu.',
    author: 'TS. Hoàng Lan Anh',
    date: '28/02/2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBn-MCXBlXopPiA9Gs-G7yYb0BvjA9qYXgePWqkoE8KLBmIYRxelOVnrJvPK4NM5VYkIlqEBlhtZvysO8mHDXndZqatTrMJp3HBVJ0nBUj7cxX4VdMhG87lK3hVcQ5PBVcFKnG3EVPnbTpbSpaAbkiQ8LfYg0-FQ8K4ze836c_ZpY4WbfMRk0KJscC9kTohtHmAWOrpcwPiAV-S54ffaC_XX7aKNQFSI9Turtn5Xs',
    alt: 'Sun-drenched lush green terraced tea hills of Suoi Giang',
  },
  {
    id: '6',
    category: 'chuyen-doi-so',
    tag: 'Thương mại Điện tử',
    tagColor: 'bg-primary-container text-tertiary-fixed',
    location: 'Thương vụ Quốc tế',
    readTime: '7 phút đọc',
    title: 'Xây dựng gian hàng quốc gia OCOP trên Alibaba & Amazon: Kinh nghiệm từ 50 HTX tiên phong',
    summary:
      'Xử lý bài toán kho ngoại quan (FBA), chính sách hoàn hủy, dịch thuật nội dung đa ngôn ngữ và cách vận hành chiến dịch quảng cáo từ khóa nông sản organic.',
    author: 'Chuyên trang E-Commerce',
    date: '20/02/2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9viaXjBOO8oLLtFS4WltZJzZSfGEVVRsS-Fy1qwST2q_GLPWqvev2524-de5LW68X83fQuenW1ocD1sAJU0uZsmsqGSkN0e_SVrCvil2SOLcUFW4TZl04hXDz2ZYS0ektNRmXnfUauD74RHUtozPF1uPqLE-iqKxqVd6eFK8AQSA5JhAMjtKQqzF9NDfZRlF7F5gtaBAhhJlevemEFVPqzr7UjSke7wkDpSkL0uk',
    alt: 'Digital ecommerce studio setup showing content creator',
  },
];

export function EditorialArticlesGridSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'xuat-khau' | 'tieu-chuan' | 'chuyen-doi-so'>('all');

  const filteredArticles = ARTICLES.filter((art) => {
    if (selectedFilter === 'all') return true;
    return art.category === selectedFilter;
  });

  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-lg">
        {/* Section Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-sm">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">
              Báo Cáo Nghiên Cứu &amp; Ký Sự Hội Nhập
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Lưu trữ 240+ bài viết phân tích, phóng sự ảnh và cẩm nang thương vụ cập nhật liên tục.
            </p>
          </div>
          {/* Filter Pills & Dropdown */}
          <div className="flex flex-wrap items-center gap-space-sm">
            <div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded shadow-sm">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1 rounded font-label-sm text-label-sm transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setSelectedFilter('xuat-khau')}
                className={`px-3 py-1 rounded font-label-sm text-label-sm transition-colors ${
                  selectedFilter === 'xuat-khau'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Xuất khẩu
              </button>
              <button
                onClick={() => setSelectedFilter('tieu-chuan')}
                className={`px-3 py-1 rounded font-label-sm text-label-sm transition-colors ${
                  selectedFilter === 'tieu-chuan'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Tiêu chuẩn
              </button>
              <button
                onClick={() => setSelectedFilter('chuyen-doi-so')}
                className={`px-3 py-1 rounded font-label-sm text-label-sm transition-colors ${
                  selectedFilter === 'chuyen-doi-so'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Chuyển đổi số
              </button>
            </div>
            <select className="px-space-md py-1.5 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none shadow-sm cursor-pointer">
              <option>Mới nhất xuất bản</option>
              <option>Xem nhiều nhất</option>
              <option>Báo cáo có dữ liệu tải về</option>
            </select>
          </div>
        </div>

        {/* Articles Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="articles-grid">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="article-card bg-surface-container-lowest rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    data-alt={art.alt}
                    src={art.image}
                    alt={art.title}
                   loading="lazy" decoding="async"/>
                  <span
                    className={`absolute top-3 left-3 px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold ${art.tagColor}`}
                  >
                    {art.tag}
                  </span>
                </div>
                <div className="p-space-lg space-y-space-xs">
                  <div className="flex items-center gap-2 text-label-sm font-label-sm text-outline">
                    <span>{art.location}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-title-editorial text-title-editorial text-on-surface hover:text-primary transition-colors cursor-pointer leading-snug">
                    {art.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>
              <div className="p-space-lg pt-0 flex items-center justify-between font-label-sm text-label-sm text-outline">
                <span className="text-primary font-semibold">{art.author}</span>
                <span>{art.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Component */}
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Hiển thị <strong>{filteredArticles.length}</strong> trong tổng số <strong>128</strong> tài liệu chuyên đề
          </span>
          <div className="flex items-center gap-1">
            <button
              className="w-9 h-9 rounded bg-surface-container-lowest text-outline hover:text-primary flex items-center justify-center transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button
              className="w-9 h-9 rounded bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm"
              type="button"
            >
              1
            </button>
            <button
              className="w-9 h-9 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              2
            </button>
            <button
              className="w-9 h-9 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              3
            </button>
            <span className="px-2 text-outline">...</span>
            <button
              className="w-9 h-9 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              22
            </button>
            <button
              className="w-9 h-9 rounded bg-surface-container-lowest text-outline hover:text-primary flex items-center justify-center transition-colors shadow-sm"
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
