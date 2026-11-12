import Link from 'next/link';

interface ArticleItem {
  imgSrc: string;
  dataAlt: string;
  tag: string;
  tagBg: string;
  date: string;
  readTime: string;
  title: string;
  desc: string;
  author: string;
}

const articles: ArticleItem[] = [
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkKQmDFkG_mXUdNdjowAb0BcopdtfZ09GB_fwHidXd01rL318ciZTcMF_PduirtCqU9R7Ri-O82lYDfRDdvMh3UFPrIqt8aG8x049G42dxPQHzxjH8Gs3k8AJuxz3Tafj81HHQdwI67s2PhITl9EjdaqYxUtJ3xzQPe6BuIzA-uFNQF0GsJ0f_3vmiJsiCkovJRX4IBbHdKTLVp_iJO-mIYjWLczsqODr2IIuH21E',
    dataAlt:
      'Young Vietnamese woman holding freshly harvested organic tea leaves in Thai Nguyen mountain mist, wearing traditional conical hat, crisp morning sunlight on dew drops, authentic high-altitude agriculture documentary',
    tag: 'Thái Nguyên · Chè hữu cơ',
    tagBg: 'bg-primary-container text-on-primary',
    date: '08 Tháng 4, 2026',
    readTime: '5 phút đọc',
    title: 'Cô cử nhân ngành Hóa và khát vọng hồi sinh đồi chè cổ thụ La Bằng',
    desc: 'Ứng dụng vi sinh vật bản địa phân hủy bã đậu nành bón gốc chè, đưa sản phẩm đạt chuẩn OCOP 4 sao và được chỉ định làm quà tặng ngoại giao.',
    author: 'Ký sự: Chu Văn An',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmahueIafgkMnXyF_kK5a5z8XHfOBUEV5K7dbyhQYC_UOvIEDQm9EeFaeQ8ZGZGKsRYA5BWLTn33fzOVSTiCOKqq0PtKLm_Y7kDl7XAo8pWc4tb_AQasvaiaV08SfQiuQtFbxCm4AaFyLHfZ0YNDB1e7Wk3UYToIuosYw1YaXDsZGlAktmTVZtXn_MpHe600tWfzt0tfym7xrqzvFksw9YKKacw6oqI7mjAwwKvbg',
    dataAlt:
      'Vietnamese craftsman hand weaving natural sedge seagrass mats and baskets in Ninh Binh artisan workshop, natural light beaming through thatched roof, eco-friendly handicraft production',
    tag: 'Ninh Bình · Mỹ nghệ xanh',
    tagBg: 'bg-secondary text-on-secondary',
    date: '02 Tháng 4, 2026',
    readTime: '6 phút đọc',
    title: 'Tái sinh cói Kim Sơn: Khởi nghiệp với những đơn hàng không rác thải nhựa',
    desc: 'Đưa sợi cói truyền thống vào chuỗi cung ứng khách sạn 5 sao toàn cầu thay thế hoàn toàn đồ dùng một lần, giải quyết việc làm cho 120 phụ nữ nông thôn.',
    author: 'Ký sự: Kim Ngân',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDo5xfCs9fLI2y7sL9MphIS7Py56uHdiWMDk8UeGmc9YihggOnYARyZPE-_PLDrYsD29CulB5hopDBQIzCCVbkpGRA2lfUDx9Qxjqt2Vd3Y19PaceVEhloA4ZsjUP167QILdgOX4tWwaLOuIlGcB-CQIGHIOrUg3prgbz2WXLGj6Ps3RUocOTFHPUKBlCKi5p-jOQw-L7bbKELZYNiq6QHrzfHqAAbwVCoQPltKpZ4',
    dataAlt:
      'Artisanal fish sauce barrels made of traditional wood in Phu Quoc coastal salt air, amber colored fish sauce pouring from bamboo spigot into earthenware jar, warm golden hues and rich textures',
    tag: 'Kiên Giang · Gia vị truyền thống',
    tagBg: 'bg-primary-container text-on-primary',
    date: '27 Tháng 3, 2026',
    readTime: '7 phút đọc',
    title: 'Truyền nhân đời thứ 4 nhà thùng Phú Quốc và bài toán giữ đạm tự nhiên',
    desc: 'Kiên định công thức ủ chượp gài nén 18 tháng trong thùng gỗ bời lời, bảo vệ chỉ dẫn địa lý nước mắm truyền thống trước sự lấn lướt của phụ gia công nghiệp.',
    author: 'Ký sự: Phạm Duy',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQrDGRwV6G6dk4PzgyxUh6mbVnE8yk1rAYUG-QrW7WM5iHSy5V0F0RwHut91HuWZkdoXpiSO96JII3tn-wkRld_t3x_LEoeOd28V2qPO63BpDK-ccy08eyeGECkQf9PCK_0jA7q8_yEKbZsutyd7p240DKBL0p6rkww0ddpJNcRDHm5TiQEcEVtD6PATdi1bnUPzpy4wOYREdk9QxVOPYX7SFFzRMIJGJq1db5qJs',
    dataAlt:
      'Close up of Vietnamese high mountain ginseng Ngoc Linh roots in soil-dusted wooden tray, surrounded by moss and deep mountain forest background, rich botanical detail and earthy colors',
    tag: 'Kon Tum · Dược liệu quý',
    tagBg: 'bg-primary-container text-on-primary',
    date: '21 Tháng 3, 2026',
    readTime: '8 phút đọc',
    title: 'Bảo tồn sâm Ngọc Linh: Người Xơ Đăng lập HTX giữ báu vật ngàn năm',
    desc: 'Được đào tạo từ dự án OCOP quốc gia, thanh niên dân tộc Xơ Đăng thành lập vườn ươm giống bản địa, gắn chíp NFC truy xuất nguồn gốc từng củ sâm.',
    author: 'Ký sự: Y Blúp',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAAJwndG00p2w77hn9QkB08O5cFNABCMqjlvvrLs5v9ov_oswv47a9pAuPcznGzD2Q8bR7Mo_9Q0lwfMhEi94xi0q9KZUumJGzxT5XvmKJBQ6kmpDxDkI7YA-4z9OsIYidtjNs1Rqduz2jZlVvK2v1OKRxFfeZYUK553iha37RqWC8sgaDG87p7Y56zUtPmW4zh0gAxKi5UCClF7_Vncm3zTHyECWmeA3szhKkAU4',
    dataAlt:
      'Mekong Delta coconut agro-forestry farm with organic coconut candy packaging workshop, clean stainless steel drying tables and artisan packaging, warm natural delta light',
    tag: 'Bến Tre · Nông sản dừa',
    tagBg: 'bg-secondary text-on-secondary',
    date: '15 Tháng 3, 2026',
    readTime: '5 phút đọc',
    title: 'Hành trình đưa mật hoa dừa Trà Vinh đạt chứng nhận hữu cơ USDA',
    desc: 'Hai vợ chồng thạc sĩ sinh học miệt mài gõ từng bắp hoa dừa để thu mật hoa chỉ số đường huyết thấp, mở hướng đi mới cho ngành dừa Tây Nam Bộ.',
    author: 'Ký sự: Thạch Sang',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqEhan_3k8pwKgBttOKVKK88WHdDX23Ph7RGfuXBazAzlc32CU1UxpGnCnT-pYci6iGJPbnjs7m3jsk9vIdjK4lBYB4YpKRtN1QCYUDlpgQD1Bw370nq7yTco3ldaZf6mgMt5-ymUm0G3kniYWpekr4FhWdNcYIKCsxpvJkd-Ntu_bHPke_-cEF-UQf6mxO6qTpFPmcFwDb1QAZUvzBMO6E4YHmm1PFUuvAoBP9o',
    dataAlt:
      'Traditional ceramic pottery wheel shaping terracotta jar in Bat Trang or Chu Dau ancient kiln style, clay splatters, artisan hands shaping raw earthy pottery with focused expression',
    tag: 'Hải Dương · Gốm Chu Đậu',
    tagBg: 'bg-primary-container text-on-primary',
    date: '09 Tháng 3, 2026',
    readTime: '6 phút đọc',
    title: 'Chàng kiến trúc sư trẻ phục dựng men tro trấu: Hồn gốm Chu Đậu thế kỷ 21',
    desc: 'Kết hợp kiểu dáng tối giản Scandinavian với họa tiết chim lạc truyền thống và men tro tự nhiên, sản phẩm đạt OCOP 5 sao xuất khẩu.',
    author: 'Ký sự: Trần Hà',
  },
];

export function ArticleStreamSection() {
  return (
    <section className="w-full py-16 bg-surface-container-lowest">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-[#e2dbd0]">
          <div>
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
              Lưu trữ báo chí
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">
              Dòng chảy Câu chuyện Khởi nghiệp
            </h2>
          </div>
          <div className="text-body-sm font-body-sm text-on-surface-variant mt-2 md:mt-0">
            Hiển thị 6 / 148 bài ký sự được thẩm định
          </div>
        </div>

        {/* 6-Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="bg-surface-container-lowest rounded-xl overflow-hidden border border-[#e2dbd0] group hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e2dbd0]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    data-alt={art.dataAlt}
                    src={art.imgSrc}
                    alt={art.title}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded ${art.tagBg} font-label-sm text-label-sm`}>
                      {art.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant mb-2">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-title-editorial text-title-editorial text-primary font-bold mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    <Link href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop">{art.title}</Link>
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-4 leading-relaxed">
                    {art.desc}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-3 border-t border-[#e2dbd0]/60 flex items-center justify-between text-body-sm font-label-md">
                <span className="text-on-surface-variant font-normal">{art.author}</span>
                <Link
                  href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop"
                  className="text-secondary font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Đọc tiếp →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <nav aria-label="Pagination" className="flex items-center justify-center gap-2 pt-6 border-t border-[#e2dbd0]">
          <button
            className="h-10 px-4 rounded-lg border border-[#e2dbd0] text-body-sm font-body-sm text-on-surface-variant hover:text-primary hover:border-primary transition-colors flex items-center gap-1 disabled:opacity-50"
            disabled
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            <span>Trang trước</span>
          </button>
          <span className="w-10 h-10 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center font-bold">
            1
          </span>
          <a
            className="w-10 h-10 rounded-lg border border-[#e2dbd0] text-on-surface hover:border-primary font-label-md text-label-md flex items-center justify-center transition-colors"
            href="#page-2"
          >
            2
          </a>
          <a
            className="w-10 h-10 rounded-lg border border-[#e2dbd0] text-on-surface hover:border-primary font-label-md text-label-md flex items-center justify-center transition-colors"
            href="#page-3"
          >
            3
          </a>
          <span className="w-10 h-10 flex items-center justify-center text-outline-variant">...</span>
          <a
            className="w-10 h-10 rounded-lg border border-[#e2dbd0] text-on-surface hover:border-primary font-label-md text-label-md flex items-center justify-center transition-colors"
            href="#page-15"
          >
            15
          </a>
          <a
            className="h-10 px-4 rounded-lg border border-[#e2dbd0] text-body-sm font-body-sm text-on-surface hover:text-primary hover:border-primary transition-colors flex items-center gap-1"
            href="#page-next"
          >
            <span>Trang tiếp</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
