import { SubPageLayout } from '@/components/news/SubPageLayout';
import { NewsStreamSection } from '@/components/news/NewsStreamSection';
import { BannerAlertBox } from '@/components/news/BannerAlertBox';

const subNavItems = [
  { href: '/tin-tuc-su-kien/chinh-sach-va-co-che', label: 'Chính sách và cơ chế OCOP', key: 'chinh-sach-va-co-che' },
  { href: '/tin-tuc-su-kien/xuc-tien-thuong-mai', label: 'Xúc tiến thương mại', key: 'xuc-tien-thuong-mai' },
  { href: '/tin-tuc-su-kien/ocop-dia-phuong', label: 'OCOP địa phương', key: 'ocop-dia-phuong' },
];

const leadFeature = {
  title: 'Hải Phòng: Mô hình "OCOP Cảng" đầu tiên Việt Nam kết nối logistics xuất khẩu trực tiếp',
  excerpt: 'Cảng Hải Phòng phối hợp với Sở NN&PTNT thành lập khu tập trung OCOP đa năng 50 ha tại Vũ Mỹ (Thủy Nguyên). Tích hợp kho lạnh, nhà máy chế biến, trung tâm truy xuất nguồn gốc, bến barge nội địa nối thẳng tàu biển. 12 sản phẩm OCOP 4-5 sao (tôm, cá, bánh đa, nem) đã xuất khẩu trial sang Nhật, Hàn qua tuyến cảng này.',
  date: '22/10/2026',
  readTime: '6 phút đọc',
  category: 'Mô hình mới',
  author: 'Sở NN&PTNT Hải Phòng',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRfi7oEXCeK4AXQIIRhkm7cQ4ULDYf0IZgGISUSM9uS_3NybevcFgtjJfnHhq98EAobenvVhnsHZ38BrX280-Hfd1Y9vs6AtyJhtjyrvc8EwQ9MpEkWcT60f2bqUre2RSQNV5Napg1-9Erzyb3mtmllOnR6R_4ax-VRIUfSfTTUalVMhyT2iE6G86XPnWSlu5NQtg6PoS-sMnD3AvL7ZZIY9S00yC80kqGQf90iAE',
  alt: 'Khu OCOP Cảng Hải Phòng từ trên cao: kho lạnh tự động, dây chuyền chế biến tôm, bến barge, tàu container đỗ bến, logo OCOP lớn trên mái nhà xưởng.',
};

const sideArticles = [
  {
    title: 'Lào Cai: Xây dựng "Thung lũng OCOP Tây Bắc" gắn liền du lịch sinh thái',
    excerpt: 'Quy hoạch 10.000 ha chuyên canh OCOP tại 3 huyện Bát Xát, Mường Khương, Si Ma Cai. Sản phẩm mũi neo: táo mèo, mắc ca, nấm linh chi, rượu ngô. Kết hợp homestay, trải nghiệm nông nghiệp, tour thẩm định OCOP tại vườn.',
    date: '20/10/2026',
    readTime: '5 phút đọc',
    category: 'Du lịch OCOP',
    author: 'Sở NN&PTNT Lào Cai',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtkIL5uLiszk4Zk1iPaDHG9SDUoXBKTLFfVEaorN9FbN2VQQm5j-R_PVaAucsO7DNOe9k5IGrTn6UOhBwLvMy6GJGkPe8zioM-RqokbzpH559lXWP-SBq2g96VhWNeJTHf9PZafYEdXHLVWjQUK_vhk7_GZ8zi1u4mXfjuTEj4FjVTQOHFJO_crboaD5Wkpdt7jY4Qdr5FZtXgHepyyoQHZ1xDLrF5y1sVyV0w-L4',
    alt: 'Vườn táo mèo Lào Cai mùa thu hoạch, du khách trải nghiệm hái quả, homestay sân vườn background núi rừng Tây Bắc.',
  },
  {
    title: 'Bến Tre: Chuyển đổi số chuỗi giá trị Dừa OCOP - Từ vườn đến tay người tiêu dùng Nhật Bản',
    excerpt: 'HTX Dừa Xanh Bến Tre triển khai blockchain truy xuất nguồn gốc cho 5.000 ha dừa. Người tiêu dùng Nhật quét QR xem toàn bộ hành trình: vị trí vườn, ngày hái, quy trình chế biến, chứng chỉ hữu cơ JAS. Đơn hàng trial 20 container/năm.',
    date: '18/10/2026',
    readTime: '7 phút đọc',
    category: 'Số hóa chuỗi giá trị',
    author: 'HTX Dừa Xanh Bến Tre',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqfEpZlqidqajik2gOU0x0_yGeiK5NKVPOqaVh3meBWTSRNTuYGx1yaNlBmMBIA4q9IOb3RW-WoS5UMogdcFqg7lp4W2XZQ4dIfyocMgZFTlM11uIqdJoXkuU0qbdEWC1I0H8W301PLH0xY2S49h-DHjdocLxI1WsG4MWX3NiUbxROpBuTFKcft85vu3VhJJJz5-QQw_51lXTVXxS_0D4ZuJ1sc3-SY9D8Ujropow',
    alt: 'Nông dân Bến Tre quét QR trên điện thoại tại vườn dừa, màn hình hiển thị dữ liệu blockchain, background hàng ngàn cây dừa xanh mát.',
  },
  {
    title: 'Đắk Lắk: Cà phê Buôn Ma Thuột OCOP 5 sao - Hành trình chinh phục chỉ dẫn địa lý EU',
    excerpt: 'Hội đồng thẩm định OCOP cấp Quốc gia phê duyệt hồ sơ đề cử Cà phê Buôn Ma Thuột đạt 5 sao. Đồng thời nộp đơn đăng ký bảo hộ Chỉ dẫn địa lý tại EU. Dự kiến 2027 hoàn tất, mở cửa thị trường 450 triệu người tiêu dùng châu Âu.',
    date: '15/10/2026',
    readTime: '8 phút đọc',
    category: 'Chỉ dẫn địa lý',
    author: 'Sở NN&PTNT Đắk Lắk',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiMzMYgaInIxCbLdTfUmCMq7ci1Zamgtl7_EeBOGDxyvC0siC7tHpjVbqA6gNn84Ob4qG5SaiOmWve3C8LJJhUSpiUvhW-vySrMQ4zpQLT97sEFKqGMU64TPuXCx0CpQQ-iXMSJaNVAtXq-xwU24CO1NUhGN3WrF8dNEHVJPUJOmFfCKqVBD3lm5A584D6yODw-ws9Bh6JO9HBC4oPFgtlmimLw-UY00dTqEPcMhQ',
    alt: 'Vườn cà phê Buôn Ma Thuột chuẩn GI, biển hiệu chỉ dẫn địa lý, nông dân kiểm tra hạt cà phê chín, background núi rừng baseline.',
  },
];

const editorialFlow = [
  {
    title: 'Sơn La: Mộc Châu OCOP - Khi sữa, trà, quả mọng cùng vươn tới 5 sao',
    excerpt: 'Mộc Châu đầu tư 300 tỷ đồng xây trung tâm thu mua, chế biến, truy xuất nguồn gốc tập trung. 3 HTX sữa, 2 HTX trà, 1 HTX mơ đạt OCOP 4 sao. Mục tiêu 2027: toàn bộ 6 HTX đạt 5 sao, xuất khẩu sang Trung Quốc qua cửa khẩu Pả Vi.',
    date: '21/10/2026',
    readTime: '6 phút đọc',
    category: 'Báo cáo địa phương',
    author: 'UBND huyện Mộc Châu',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRfi7oEXCeK4AXQIIRhkm7cQ4ULDYf0IZgGISUSM9uS_3NybevcFgtjJfnHhq98EAobenvVhnsHZ38BrX280-Hfd1Y9vs6AtyJhtjyrvc8EwQ9MpEkWcT60f2bqUre2RSQNV5Napg1-9Erzyb3mtmllOnR6R_4ax-VRIUfSfTTUalVMhyT2iE6G86XPnWSlu5NQtg6PoS-sMnD3AvL7ZZIY9S00yC80kqGQf90iAE',
    alt: 'Trung tâm OCOP Mộc Châu, dây chuyền tiệt trùng sữa, khay trà sấy lạnh, mơ tươi chuẩn xuất khẩu.',
  },
  {
    title: 'Quảng Ninh: Mô hình "OCOP Biển - OCOP Rừng" kép tại Vân Đồn, Bình Liêu',
    excerpt: 'Vân Đồn: Tôm sú, cá khô, nước mắm OCOP 4 sao kết hợp du lịch cảng. Bình Liêu: Trà Shan, nấm trúc, mật ong OCOP 4 sao gắn tour leo núi. Đồng bộ thương hiệu "Quảng Ninh - Địa linh nhân kiệt" cho 2 dòng sản phẩm.',
    date: '19/10/2026',
    readTime: '5 phút đọc',
    category: 'Báo cáo địa phương',
    author: 'Sở NN&PTNT Quảng Ninh',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtkIL5uLiszk4Zk1iPaDHG9SDUoXBKTLFfVEaorN9FbN2VQQm5j-R_PVaAucsO7DNOe9k5IGrTn6UOhBwLvMy6GJGkPe8zioM-RqokbzpH559lXWP-SBq2g96VhWNeJTHf9PZafYEdXHLVWjQUK_vhk7_GZ8zi1u4mXfjuTEj4FjVTQOHFJO_crboaD5Wkpdt7jY4Qdr5FZtXgHepyyoQHZ1xDLrF5y1sVyV0w-L4',
    alt: 'Bãi biển Vân Đồn với gian hàng OCOP tôm cá, background núi Bình Liêu sương mù, du khách mua đặc sản.',
  },
  {
    title: 'An Giang: Lúa ST25 OCOP - Từ "gạo làng" thành "gạo thương hiệu quốc gia"',
    excerpt: 'Hợp tác xã Lúa An Giang áp dụng tiêu chuẩn ST25 cho 2.000 ha. Xây nhà máy xay hiện đại 100 tấn/ngày, kho lạnh 5.000 tấn. Xuất khẩu 5.000 tấn/năm sang Mỹ, EU, Trung Đông. Doanh thu HTX tăng 3 lần sau 2 năm đạt OCOP 5 sao.',
    date: '16/10/2026',
    readTime: '7 phút đọc',
    category: 'Báo cáo địa phương',
    author: 'HTX Lúa An Giang',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqfEpZlqidqajik2gOU0x0_yGeiK5NKVPOqaVh3meBWTSRNTuYGx1yaNlBmMBIA4q9IOb3RW-WoS5UMogdcFqg7lp4W2XZQ4dIfyocMgZFTlM11uIqdJoXkuU0qbdEWC1I0H8W301PLH0xY2S49h-DHjdocLxI1WsG4MWX3NiUbxROpBuTFKcft85vu3VhJJJz5-QQw_51lXTVXxS_0D4ZuJ1sc3-SY9D8Ujropow',
    alt: 'Nhà máy xay gạo ST25 An Giang, dây chuyền tự động, kiểm soát độ ẩm, bao bì thương hiệu OCOP 5 sao.',
  },
  {
    title: 'Cà Mau: Tôm sú, cua đů OCOP - Kết nối chuỗi giá trị bền vững rừng ngập mặn',
    excerpt: 'Mô hình tôm - rừng tại Năm Căn, Ngọc Hiển đạt chứng chỉ ASC, BAP. HTX phối hợp trồng rừng, nuôi tôm sinh thái. Sản phẩm OCOP 4 sao truy xuất toàn bộ: tọa độ ao, loại cám, ngày thu hoạch. Xuất khẩu trial 100 tấn/năm sang Nhật.',
    date: '14/10/2026',
    readTime: '6 phút đọc',
    category: 'Báo cáo địa phương',
    author: 'Sở NN&PTNT Cà Mau',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiMzMYgaInIxCbLdTfUmCMq7ci1Zamgtl7_EeBOGDxyvC0siC7tHpjVbqA6gNn84Ob4qG5SaiOmWve3C8LJJhUSpiUvhW-vySrMQ4zpQLT97sEFKqGMU64TPuXCx0CpQQ-iXMSJaNVAtXq-xwU24CO1NUhGN3WrF8dNEHVJPUJOmFfCKqVBD3lm5A584D6yODw-ws9Bh6JO9HBC4oPFgtlmimLw-UY00dTqEPcMhQ',
    alt: 'Ao tôm - rừng Cà Mau, cánh rừng đước xanh mướt, nông dân kiểm tra tôm, banner OCOP 4 sao.',
  },
  {
    title: 'Hà Giang: Tâm sự người Mèo Vạc - Đưa ngô, mía, táo mèo OCOP ra khỏi khe đá',
    excerpt: 'Chương trình "OCOP vùng sâu vùng xa" hỗ trợ 100% phí thẩm định, đào tạo kỹ thuật, kết nối tiêu thụ cho 5 huyện biên giới. 12 sản phẩm OCOP 3-4 sao mới cấp năm 2026. Thu nhập hộ gia đình tăng trung bình 40% so với trước khi tham gia OCOP.',
    date: '11/10/2026',
    readTime: '8 phút đọc',
    category: 'Báo cáo địa phương',
    author: 'UBND tỉnh Hà Giang',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh7Lf3CR6Q6gDdPr73iwIfUaD7VGQCwBqbMZD_B5lM2GMxNfM0SAK3d_Tdoa0ikaGhMHoZkSdYhAbK2FmfbSaehb3ZlLJ8frhd_HEjHXM4Ub8t4pRdo5grlQUx7j31XWuo16QQURkbL6lZQcK5Hm8TRvBE6ocpCCHkpAo0muESOzzCK07SHW8Vb4rE0VrFGLc3yeFEQGM3sFVtDPU2geoxnWuEyWd_UT48qnzzXow',
    alt: 'Đồng ruộng bậc thang Mèo Vạc, người đồng bào Mông chăm sóc ngô, táo mèo, background đá vôi khe nứt đặc trưng.',
  },
  {
    title: 'TP.HCM: "Chợ OCOP Sài Gòn" - Không gian trải nghiệm, bán hàng, du lịch văn hóa 24/7',
    excerpt: 'Quận 1 chuyển đổi chợ Bến Thành khu cũ thành "Chợ OCOP Sài Gòn" 5 tầng: Tầng 1-2 bán đặc sản 63 tỉnh, Tầng 3 trải nghiệm nấu ăn, Tầng 4 workshop thủ công, Tầng 5 cà phê đặc sản. Dự kiến khai trương Tết 2027.',
    date: '09/10/2026',
    readTime: '5 phút đọc',
    category: 'Báo cáo địa phương',
    author: 'UBND TP.HCM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS6aFP6GKdjnwEa_gHT6MWH7G2yDappzViuwKx6ULQAGRPB5uejZ4yME1WrAjwdDl1QojvPMfDx5eONRfNS1XkDUUZKAzrx-ZgHyYnq_qYK4mNKKg0UGLyIiRi2XEUaFd9JsitfWkcr_8nuRgJynqgbsv2ZVmN_XMFq2zXX16rrA-Gz3RYOo-B-BOWW2h0bzdRm3ohJrBnKR_9tAtgMd6Z81W4S778HqNaCW7Tq0c',
    alt: 'Thiết kế 3D Chợ OCOP Sài Gòn, không gian hiện đại, kệ hàng thông minh, khu trải nghiệm nấu ăn, logo OCOP nổi bật.',
  },
];

export default function OCOPDiaPhuongPage() {
  return (
    <SubPageLayout subNavItems={subNavItems}>
      <section className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl" id="tin-tuc-noi-bat">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
          {/* Lead Feature - 7 cols */}
          <article className="lg:col-span-7 bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={leadFeature.image} alt={leadFeature.alt} />
              <div className="absolute top-4 left-4">
                <span className="px-space-md py-1 bg-secondary text-on-secondary text-label-sm font-label-sm rounded uppercase tracking-wider shadow">
                  {leadFeature.category}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/90 to-transparent p-space-md pt-8 text-surface-container-lowest">
                <span className="font-label-sm text-label-sm text-tertiary-fixed flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">event</span>
                  {leadFeature.date} • {leadFeature.readTime}
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1">
              <h3 className="font-title-editorial text-[24px] leading-tight font-bold text-primary mb-space-sm hover:text-secondary transition-colors cursor-pointer">
                {leadFeature.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-space-md">
                {leadFeature.excerpt}
              </p>
              <div className="mt-auto pt-space-sm flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-surface-container-lowest flex items-center justify-center font-bold text-xs">
                    TV
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-semibold text-primary">{leadFeature.author}</span>
                    <span className="text-[11px] text-on-surface-variant">Đơn vị chủ trì</span>
                  </div>
                </div>
                <a className="inline-flex items-center text-secondary font-label-md text-label-md uppercase tracking-wider hover:text-on-secondary-container transition-colors" href="#">
                  Đọc toàn văn báo cáo
                  <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* 3 Side Articles - 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {sideArticles.map((article, index) => (
              <article key={index} className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow transition-shadow flex gap-space-md">
                <div className="w-32 h-28 shrink-0 overflow-hidden rounded bg-surface-container">
                  <img className="w-full h-full object-cover" src={article.image} alt={article.alt} />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">{article.category}</span>
                    <h4 className="font-title-editorial text-title-editorial font-bold text-primary line-clamp-2 hover:text-secondary cursor-pointer mt-1">
                      {article.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-body-sm text-outline mt-2">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1 text-on-surface-variant text-[12px]"><span className="material-symbols-outlined text-[14px]">schedule</span> {article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}

            {/* Banner Alert Box */}
            <BannerAlertBox
              icon="campaign"
              iconColor="text-tertiary-fixed"
              title="Tuần lễ OCOP Quốc gia 2026 - Đăng ký gian hàng"
              description="Hội chợ quy tụ 63 tỉnh thành tại Hà Nội, tháng 11/2026. Ưu tiên giảm 30% phí gian hàng cho sản phẩm OCOP 4-5 sao vùng sâu vùng xa."
              buttonText="Đăng ký ngay"
              buttonLink="#"
              buttonVariant="tertiary"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl" id="dong-chay-dia-phuong">
        <div className="mb-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">Dòng chảy Tin tức OCOP Địa phương</span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">Cập nhật liên tục hoạt động OCOP tại 63 tỉnh thành</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Báo cáo mô hình, thành tựu, kinh nghiệm triển khai OCOP từ các địa phương</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-xl">
          {editorialFlow.map((article, index) => (
            <article key={index} className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={article.image} alt={article.title} />
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