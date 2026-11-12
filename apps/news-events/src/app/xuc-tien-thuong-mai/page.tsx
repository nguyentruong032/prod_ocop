'use client';

import { useState } from 'react';
import { SubPageLayout } from '@/components/news/SubPageLayout';
import { EventsCalendarHub } from '@/components/news/EventsCalendarHub';
import { NewsStreamSection } from '@/components/news/NewsStreamSection';
import { NewsFilterBar } from '@/components/news/NewsFilterBar';
import { BannerAlertBox } from '@/components/news/BannerAlertBox';

const subNavItems = [
  { href: '/tin-tuc-su-kien/chinh-sach-va-co-che', label: 'Chính sách và cơ chế OCOP', key: 'chinh-sach-va-co-che' },
  { href: '/tin-tuc-su-kien/xuc-tien-thuong-mai', label: 'Xúc tiến thương mại', key: 'xuc-tien-thuong-mai' },
  { href: '/tin-tuc-su-kien/ocop-dia-phuong', label: 'OCOP địa phương', key: 'ocop-dia-phuong' },
];

const spotlightArticles = [
  {
    title: 'Ra mắt sàn TMĐT "OCOP Digital": Kết nối trực tiếp 50.000 HTX với người tiêu dùng toàn cầu',
    excerpt: 'Sàn thương mại điện tử quốc gia đầu tiên chuyên cho sản phẩm OCOP đã chính thức vận hành. Tích hợp truy xuất nguồn gốc blockchain, thanh toán quốc tế, logistics xuyên biên.',
    date: '20/10/2026',
    readTime: '5 phút đọc',
    category: 'Số hóa thương mại',
    author: 'Bộ Công Thương',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRfi7oEXCeK4AXQIIRhkm7cQ4ULDYf0IZgGISUSM9uS_3NybevcFgtjJfnHhq98EAobenvVhnsHZ38BrX280-Hfd1Y9vs6AtyJhtjyrvc8EwQ9MpEkWcT60f2bqUre2RSQNV5Napg1-9Erzyb3mtmllOnR6R_4ax-VRIUfSfTTUalVMhyT2iE6G86XPnWSlu5NQtg6PoS-sMnD3AvL7ZZIY9S00yC80kqGQf90iAE',
    alt: 'Giao diện sàn OCOP Digital trên màn hình điện thoại và laptop, hiển thị danh mục sản phẩm, mã QR truy xuất nguồn gốc, cờ các quốc gia xuất khẩu.',
    link: '#',
  },
  {
    title: 'Hiệp định MOA với AEON Nhật: Cửa ngõ xuất khẩu rau quả OCOP 4 sao sang thị trường khắt khe nhất châu Á',
    excerpt: 'Hợp tác xã Rau sạch Mê Linh (Hà Nội) ký kết ghi nhớ hợp tác (MOA) cung cấp rau quả OCOP 4 sao cho chuỗi siêu thị AEON Nhật Bản. Tiêu chuẩn JAS Organic là chìa khóa.',
    date: '18/10/2026',
    readTime: '7 phút đọc',
    category: 'Xuất khẩu',
    author: 'Báo chí OCOP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtkIL5uLiszk4Zk1iPaDHG9SDUoXBKTLFfVEaorN9FbN2VQQm5j-R_PVaAucsO7DNOe9k5IGrTn6UOhBwLvMy6GJGkPe8zioM-RqokbzpH559lXWP-SBq2g96VhWNeJTHf9PZafYEdXHLVWjQUK_vhk7_GZ8zi1u4mXfjuTEj4FjVTQOHFJO_crboaD5Wkpdt7jY4Qdr5FZtXgHepyyoQHZ1xDLrF5y1sVyV0w-L4',
    alt: 'Lễ ký kết MOA giữa HTX Mê Linh và AEON Nhật, đại diện hai bên trao đổi văn bản, background logo OCOP và cờ Việt - Nhật.',
    link: '#',
  },
  {
    title: 'Chiến lược "Một sản phẩm - Một thị trường": Tập trung nguồn lực xúc tiến 50 mặt hàng OCOP chủ lực',
    excerpt: 'Bộ Công Thương phê duyệt danh sách 50 sản phẩm OCOP ưu tiên xúc tiến thương mại giai đoạn 2026-2028. Mỗi sản phẩm gán một đơn vị chủ trì, một thị mục tiêu, một ngân sách riêng biệt.',
    date: '15/10/2026',
    readTime: '6 phút đọc',
    category: 'Chiến lược xúc tiến',
    author: 'Cục Xúc tiến Thương mại',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqfEpZlqidqajik2gOU0x0_yGeiK5NKVPOqaVh3meBWTSRNTuYGx1yaNlBmMBIA4q9IOb3RW-WoS5UMogdcFqg7lp4W2XZQ4dIfyocMgZFTlM11uIqdJoXkuU0qbdEWC1I0H8W301PLH0xY2S49h-DHjdocLxI1WsG4MWX3NiUbxROpBuTFKcft85vu3VhJJJz5-QQw_51lXTVXxS_0D4ZuJ1sc3-SY9D8Ujropow',
    alt: 'Bản đồ Việt Nam gán 50 sản phẩm OCOP chủ lực vào các thị trường mục tiêu: Mỹ, EU, Nhật, Hàn, Trung Quốc, ASEAN.',
    link: '#',
  },
];

const tradeNewsArticles = [
  {
    title: 'Hội chợ OCOP Quốc gia 2026: Ghi nhận 120 đơn hàng xuất khẩu tiềm năng trị giá 25 triệu USD',
    excerpt: 'Tổng giá trị đơn hàng chào hàng đạt 25 triệu USD. Sản phẩm thực phẩm chế biến sẵn và đồ uống chiếm tỷ trọng lớn nhất. 47 doanh nghiệp ký kết MOU hợp tác lâu dài.',
    date: '12/10/2026',
    readTime: '4 phút đọc',
    category: 'Sự kiện',
    author: 'Ban tổ chức Hội chợ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRfi7oEXCeK4AXQIIRhkm7cQ4ULDYf0IZgGISUSM9uS_3NybevcFgtjJfnHhq98EAobenvVhnsHZ38BrX280-Hfd1Y9vs6AtyJhtjyrvc8EwQ9MpEkWcT60f2bqUre2RSQNV5Napg1-9Erzyb3mtmllOnR6R_4ax-VRIUfSfTTUalVMhyT2iE6G86XPnWSlu5NQtg6PoS-sMnD3AvL7ZZIY9S00yC80kqGQf90iAE',
    alt: 'Sảnh hội chợ OCOP Quốc gia, người nước ngoài thử sản phẩm, bàn giao hợp đồng, banner "Kết nối OCOP ra thế giới".',
  },
  {
    title: 'Xúc tiến thương mại số vùng núi: Livestream bán hàng thu hút 2 triệu lượt xem, doanh thu 5 tỷ đồng',
    excerpt: 'Chương trình "Nông sản vùng cao lên kệ số" kết nối trực tiếp 100 HTX vùng núi với KOL/KOC. Sản phẩm tiêu biểu: chè Shan Tuyết, mắc ca, táo mèo, nấm linh chi.',
    date: '10/10/2026',
    readTime: '5 phút đọc',
    category: 'Thương mại điện tử',
    author: 'Trung tâm Xúc tiến TMĐT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtkIL5uLiszk4Zk1iPaDHG9SDUoXBKTLFfVEaorN9FbN2VQQm5j-R_PVaAucsO7DNOe9k5IGrTn6UOhBwLvMy6GJGkPe8zioM-RqokbzpH559lXWP-SBq2g96VhWNeJTHf9PZafYEdXHLVWjQUK_vhk7_GZ8zi1u4mXfjuTEj4FjVTQOHFJO_crboaD5Wkpdt7jY4Qdr5FZtXgHepyyoQHZ1xDLrF5y1sVyV0w-L4',
    alt: 'Buổi livestream bán hàng tại xưởng chế biến chè Shan Tuyết Lào Cai, người dẫn chương trình giới thiệu sản phẩm, màn hình hiển thị đơn hàng real-time.',
  },
  {
    title: 'Bao bì xanh: Yêu cầu bắt buộc cho xuất khẩu OCOP sang EU từ năm 2027',
    excerpt: 'Theo quy định PPWR (Packaging and Packaging Waste Regulation) của EU, từ 2027 tất cả bao bì phải tái chế hoặc phân hủy sinh học. Hỗ trợ 50% chi phí chuyển đổi cho OCOP 4-5 sao.',
    date: '08/10/2026',
    readTime: '6 phút đọc',
    category: 'Rào cản kỹ thuật',
    author: 'Chuyên gia WTO - Việt Nam',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqfEpZlqidqajik2gOU0x0_yGeiK5NKVPOqaVh3meBWTSRNTuYGx1yaNlBmMBIA4q9IOb3RW-WoS5UMogdcFqg7lp4W2XZQ4dIfyocMgZFTlM11uIqdJoXkuU0qbdEWC1I0H8W301PLH0xY2S49h-DHjdocLxI1WsG4MWX3NiUbxROpBuTFKcft85vu3VhJJJz5-QQw_51lXTVXxS_0D4ZuJ1sc3-SY9D8Ujropow',
    alt: 'Các mẫu bao bì phân hủy sinh học, túi giấy kraft, hộp mía được thử nghiệm tại trung tâm kiểm định bao bì Việt Nam.',
  },
  {
    title: 'Tuyến đường xuất khẩu OCOP sang Mỹ: Chứng chỉ FDA, FSMA và cơ hội từ hiệp định thương mại',
    excerpt: 'Hướng dẫn từng bước đăng ký FDA Food Facility Registration, FSVP Importer, PCQI cho sản phẩm OCOP. Danh sách 20 sản phẩm ưu tiên tiếp cận thị trường Mỹ qua GSP.',
    date: '05/10/2026',
    readTime: '8 phút đọc',
    category: 'Hướng dẫn xuất khẩu',
    author: 'Luật sư Thương mại Quốc tế',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiMzMYgaInIxCbLdTfUmCMq7ci1Zamgtl7_EeBOGDxyvC0siC7tHpjVbqA6gNn84Ob4qG5SaiOmWve3C8LJJhUSpiUvhW-vySrMQ4zpQLT97sEFKqGMU64TPuXCx0CpQQ-iXMSJaNVAtXq-xwU24CO1NUhGN3WrF8dNEHVJPUJOmFfCKqVBD3lm5A584D6yODw-ws9Bh6JO9HBC4oPFgtlmimLw-UY00dTqEPcMhQ',
    alt: 'Tài liệu hướng dẫn đăng ký FDA, chứng chỉ FSMA trên bàn làm việc, cạnh ly nước mắm Phú Quốc và hộp trà OCOP.',
  },
  {
    title: 'Kết nối cung - cầu OCOP - Lotte, Central, Big C: 300 sản phẩm mới lên kệ siêu thị lớn',
    excerpt: 'Chương trình "OCOP lên kệ siêu thị" quý 4/2026 đưa 300 sản phẩm OCOP 3-5 sao vào hệ thống bán lẻ hiện đại. Hỗ trợ phí trưng bày, promoción, đào tạo nhân viên bán hàng.',
    date: '02/10/2026',
    readTime: '4 phút đọc',
    category: 'Phân phối trong nước',
    author: 'Cục Xúc tiến Thương mại',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh7Lf3CR6Q6gDdPr73iwIfUaD7VGQCwBqbMZD_B5lM2GMxNfM0SAK3d_Tdoa0ikaGhMHoZkSdYhAbK2FmfbSaehb3ZlLJ8frhd_HEjHXM4Ub8t4pRdo5grlQUx7j31XWuo16QQURkbL6lZQcK5Hm8TRvBE6ocpCCHkpAo0muESOzzCK07SHW8Vb4rE0VrFGLc3yeFEQGM3sFVtDPU2geoxnWuEyWd_UT48qnzzXow',
    alt: 'Kệ hàng OCOP tại siêu thị Lotte Mart, banner "Sản phẩm OCOP Việt Nam", khách hàng chọn mua đặc sản các tỉnh.',
  },
  {
    title: 'Thương hiệu tập thể "OCOP Việt Nam": Đăng ký bảo hộ tại 15 quốc gia mục tiêu',
    excerpt: 'Văn phòng Sở hữu trí tuệ Quốc gia đã nộp đơn đăng ký thương hiệu tập thể "OCOP Việt Nam" theo Hệ thống Madrid tại 15 quốc gia: Mỹ, EU, Nhật, Hàn, Trung Quốc, ASEAN...',
    date: '30/09/2026',
    readTime: '5 phút đọc',
    category: 'Bảo hộ thương hiệu',
    author: 'Cục Sở hữu Trí tuệ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS6aFP6GKdjnwEa_gHT6MWH7G2yDappzViuwKx6ULQAGRPB5uejZ4yME1WrAjwdDl1QojvPMfDx5eONRfNS1XkDUUZKAzrx-ZgHyYnq_qYK4mNKKg0UGLyIiRi2XEUaFd9JsitfWkcr_8nuRgJynqgbsv2ZVmN_XMFq2zXX16rrA-Gz3RYOo-B-BOWW2h0bzdRm3ohJrBnKR_9tAtgMd6Z81W4S778HqNaCW7Tq0c',
    alt: 'Chứng nhận đăng ký thương hiệu quốc tế Madrid, bản đồ 15 quốc gia được bảo hộ thương hiệu tập thể OCOP Việt Nam.',
  },
];

export default function XucTienThuongMaiPage() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const categories = [
    'Tất cả',
    'Xuất khẩu',
    'Thương mại điện tử',
    'Chiến lược xúc tiến',
    'Sự kiện',
    'Rào cản kỹ thuật',
    'Hướng dẫn xuất khẩu',
    'Phân phối trong nước',
    'Bảo hộ thương hiệu',
  ];

  const filteredArticles = activeFilter === 'Tất ca' 
    ? tradeNewsArticles 
    : tradeNewsArticles.filter(a => a.category === activeFilter);

  return (
    <SubPageLayout subNavItems={subNavItems}>
      <section className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl" id="diem-noi-bat">
        <div className="mb-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">Điểm nổi bật</span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">Các Tin tức Xúc tiến Thương mại Quan trọng Nhất</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg mb-space-xl">
          {spotlightArticles.map((article, index) => (
            <article key={index} className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={article.image} alt={article.alt}  loading="lazy" decoding="async"/>
              </div>
              <div className="p-space-lg flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-surface-container text-secondary text-label-sm font-label-sm rounded uppercase">{article.category}</span>
                  <span className="text-body-sm text-outline">• {article.date}</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial font-bold text-primary mb-space-sm hover:text-secondary cursor-pointer transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-space-md flex-1">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-space-sm flex items-center justify-between">
                  <span className="text-body-sm font-medium text-on-surface">{article.author}</span>
                  <a className="inline-flex items-center text-secondary font-label-sm text-label-sm uppercase tracking-wider hover:text-on-secondary-container transition-colors" href={article.link}>
                    Đọc tiếp
                    <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <EventsCalendarHub />

      <section className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl" id="dong-tin-xuc-tien">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">Dòng tin Xúc tiến Thương mại</span>
            <h2 className="font-headline-md text-headline-md text-primary mt-1">Cập nhật liên tục hoạt động xúc tiến, xuất khẩu, hội chợ, sàn TMĐT</h2>
          </div>
          <NewsFilterBar categories={categories} initialCategory="Tất cả" onFilterChange={setActiveFilter} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-xl">
          {filteredArticles.map((article, index) => (
            <article key={index} className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={article.image} alt={article.alt || article.title}  loading="lazy" decoding="async"/>
              </div>
              <div className="p-space-lg flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-surface-container text-secondary text-label-sm font-label-sm rounded uppercase">{article.category}</span>
                  <span className="text-body-sm text-outline">• {article.date}</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial font-bold text-primary mb-space-sm hover:text-secondary cursor-pointer transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-space-md flex-1">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-space-sm flex items-center justify-between">
                  <span className="text-body-sm font-medium text-on-surface">{article.author}</span>
                  <span className="text-secondary text-label-sm font-label-sm uppercase font-semibold">{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <nav className="flex items-center justify-center gap-2" aria-label="Phan trang">
          <button className="px-3 py-1.5 text-body-sm font-body-sm text-on-surface-variant hover:bg-surface-container rounded transition-colors disabled:opacity-50" disabled aria-label="Trang truoc">
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-body-md font-body-md text-primary bg-primary-fixed rounded font-bold">1</button>
          <button className="w-10 h-10 flex items-center justify-center text-body-md font-body-md text-on-surface-variant hover:bg-surface-container rounded transition-colors" aria-label="Trang 2">2</button>
          <button className="w-10 h-10 flex items-center justify-center text-body-md font-body-md text-on-surface-variant hover:bg-surface-container rounded transition-colors" aria-label="Trang 3">3</button>
          <span className="w-10 h-10 flex items-center justify-center text-body-md font-body-md text-outline">...</span>
          <button className="w-10 h-10 flex items-center justify-center text-body-md font-body-md text-on-surface-variant hover:bg-surface-container rounded transition-colors" aria-label="Trang 10">10</button>
          <button className="px-3 py-1.5 text-body-sm font-body-sm text-on-surface-variant hover:bg-surface-container rounded transition-colors" aria-label="Trang sau">
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </nav>
      </section>
    </SubPageLayout>
  );
}