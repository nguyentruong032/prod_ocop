import { NewsFilterBar } from './NewsFilterBar';
import { NewsArticleCard } from './NewsArticleCard';

interface NewsStreamSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  articles?: Array<{
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    author: string;
    image: string;
    alt: string;
    link?: string;
  }>;
}

export function NewsStreamSection({ className, title = 'Dòng chảy Tin tức & Sự kiện', subtitle = 'Cập nhật liên tục các tin tức, chính sách, sự kiện mới nhất về OCOP', articles = [] }: NewsStreamSectionProps) {
  const defaultArticles = [
    {
      title: 'Gỡ nút thắt tiếp cận vốn: Vì sao nhiều HTX OCOP vẫn khó vay ngân hàng?',
      excerpt: 'Mặc dù chính sách tín dụng đã nới lỏng định giá nhà xưởng trên đất nông nghiệp, song khâu minh bạch hóa sổ sách kế toán điện tử vẫn là rào cản lớn nhất.',
      date: '22/10/2026',
      readTime: '5 phút đọc',
      category: 'Chính sách & Cơ chế',
      author: 'Võ Minh Trí (Chuyên gia tài chính)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRfi7oEXCeK4AXQIIRhkm7cQ4ULDYf0IZgGISUSM9uS_3NybevcFgtjJfnHhq98EAobenvVhnsHZ38BrX280-Hfd1Y9vs6AtyJhtjyrvc8EwQ9MpEkWcT60f2bqUre2RSQNV5Napg1-9Erzyb3mtmllOnR6R_4ax-VRIUfSfTTUalVMhyT2iE6G86XPnWSlu5NQtg6PoS-sMnD3AvL7ZZIY9S00yC80kqGQf90iAE',
      alt: 'Kinh tế sư nông nghiệp trình bày biểu đồ phân tích trên màn hình số cho lãnh đạo hợp tác xã tại Sơn La. Biểu đồ trực quan minh họa năng suất xuất khẩu cà phê, mận dưới chính sách hỗ trợ OCOP.',
    },
    {
      title: 'Bảo hộ Chỉ dẫn Địa lý ra biển lớn: Bài học từ Nước mắm Phú Quốc và Chè Shan Tuyết',
      excerpt: 'Kinh nghiệm vượt qua các rào cản kiểm định khắt khe của Liên minh châu Âu (EU) thông qua các hiệp định bảo hộ nhãn hiệu đã được quy chế hóa.',
      date: '20/10/2026',
      readTime: '6 phút đọc',
      category: 'Bảo hộ thương hiệu',
      author: 'ThS. Lê Hoàng Yến',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtkIL5uLiszk4Zk1iPaDHG9SDUoXBKTLFfVEaorN9FbN2VQQm5j-R_PVaAucsO7DNOe9k5IGrTn6UOhBwLvMy6GJGkPe8zioM-RqokbzpH559lXWP-SBq2g96VhWNeJTHf9PZafYEdXHLVWjQUK_vhk7_GZ8zi1u4mXfjuTEj4FjVTQOHFJO_crboaD5Wkpdt7jY4Qdr5FZtXgHepyyoQHZ1xDLrF5y1sVyV0w-L4',
      alt: 'Thùng gỗ nước mắm Phú Quốc dưới ánh nắng vàng rọi xuyên kho tối. Nghề thủ công truyền thống rõ nét và di sản quốc gia được bảo hộ bằng nhãn hiệu tập thể địa lý.',
    },
    {
      title: 'Địa phương hóa chính sách: Mô hình kích cầu OCOP thành công tại Đồng bằng Sông Cửu Long',
      excerpt: 'Các tỉnh Tiền Giang, Bến Tre và Đồng Tháp đã trích lập quỹ phát triển công nghệ cao hỗ trợ trực tiếp 50 triệu đồng cho mỗi mẫu thiết kế bao bì thân thiện môi trường.',
      date: '17/10/2026',
      readTime: '4 phút đọc',
      category: 'Kinh tế Nông thôn',
      author: 'Đoàn Tấn Lợi (PV Điều tra)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqfEpZlqidqajik2gOU0x0_yGeiK5NKVPOqaVh3meBWTSRNTuYGx1yaNlBmMBIA4q9IOb3RW-WoS5UMogdcFqg7lp4W2XZQ4dIfyocMgZFTlM11uIqdJoXkuU0qbdEWC1I0H8W301PLH0xY2S49h-DHjdocLxI1WsG4MWX3NiUbxROpBuTFKcft85vu3VhJJJz5-QQw_51lXTVXxS_0D4ZuJ1sc3-SY9D8Ujropow',
      alt: 'Hội nghị hợp tác xã bưởi Đồng bằng Sông Cửu Long, nông dân cao tuổi xem xét tiêu chuẩn bao bì trên bàn thông minh tại Cần Thơ, bao quanh bởi sắc xanh lá và vàng cam tươi sáng.',
    },
    {
      title: 'Tuyến đường xuất khẩu OCOP sang Nhật Bản: TừAOI đến tiêu chuẩn JAS',
      excerpt: 'Hợp tác xã Rau sạch Mê Linh (Hà Nội) đã ký MOA với tập đoàn AEON Nhật để cung cấp rau quả OCOP 4 sao. Tiêu chuẩn JAS Organic là chìa khóa.',
      date: '15/10/2026',
      readTime: '7 phút đọc',
      category: 'Xúc tiến thương mại',
      author: 'Báo chí OCOP',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiMzMYgaInIxCbLdTfUmCMq7ci1Zamgtl7_EeBOGDxyvC0siC7tHpjVbqA6gNn84Ob4qG5SaiOmWve3C8LJJhUSpiUvhW-vySrMQ4zpQLT97sEFKqGMU64TPuXCx0CpQQ-iXMSJaNVAtXq-xwU24CO1NUhGN3WrF8dNEHVJPUJOmFfCKqVBD3lm5A584D6yODw-ws9Bh6JO9HBC4oPFgtlmimLw-UY00dTqEPcMhQ',
      alt: 'Ký kết MOA giữa HTX Mê Linh và AEON Nhật, bàn tay trao đổi văn bản, background logo OCOP và cờ Việt - Nhật.',
    },
    {
      title: 'Hội chợ OCOP Quốc gia 2026: Ghi nhận 120 đơn hàng xuất khẩu tiềm năng',
      excerpt: 'Tổng giá trị đơn hàng chào hàng đạt 25 triệu USD. Sản phẩm thực phẩm chế biến sẵn và đồ uống chiếm tỷ trọng lớn nhất.',
      date: '12/10/2026',
      readTime: '4 phút đọc',
      category: 'Sự kiện',
      author: 'Ban tổ chức Hội chợ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh7Lf3CR6Q6gDdPr73iwIfUaD7VGQCwBqbMZD_B5lM2GMxNfM0SAK3d_Tdoa0ikaGhMHoZkSdYhAbK2FmfbSaehb3ZlLJ8frhd_HEjHXM4Ub8t4pRdo5grlQUx7j31XWuo16QQURkbL6lZQcK5Hm8TRvBE6ocpCCHkpAo0muESOzzCK07SHW8Vb4rE0VrFGLc3yeFEQGM3sFVtDPU2geoxnWuEyWd_UT48qnzzXow',
      alt: 'Sảnh hội chợ OCOP Quốc gia, người nước ngoài thử sản phẩm, bàn giao hợp đồng, banner "Kết nối OCOP ra thế giới".',
    },
    {
      title: 'Chuyển đổi số quản trị HTX: Từ sổ sách giấy đến ERP nông nghiệp',
      excerpt: 'Chương trình đào tạo "Quản trị số OCOP" đã triển khai cho 500 HTX trên toàn quốc. Kết quả: giảm 40% thời gian lập báo cáo, tăng 25% độ chính xác dữ liệu.',
      date: '10/10/2026',
      readTime: '6 phút đọc',
      category: 'Số hóa thẩm định',
      author: 'Trung tâm Đổi mới Sáng tạo Nông nghiệp',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS6aFP6GKdjnwEa_gHT6MWH7G2yDappzViuwKx6ULQAGRPB5uejZ4yME1WrAjwdDl1QojvPMfDx5eONRfNS1XkDUUZKAzrx-ZgHyYnq_qYK4mNKKg0UGLyIiRi2XEUaFd9JsitfWkcr_8nuRgJynqgbsv2ZVmN_XMFq2zXX16rrA-Gz3RYOo-B-BOWW2h0bzdRm3ohJrBnKR_9tAtgMd6Z81W4S778HqNaCW7Tq0c',
      alt: 'Lớp học thực hành ERP nông nghiệp, giảng viên hướng dẫn HTX nhập liệu trên máy tính bảng, màn hình hiển thị dashboard quản lý chuỗi cung ứng.',
    },
  ];

  const displayArticles = articles.length > 0 ? articles : defaultArticles;

  return (
    <section className={`max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl ${className || ''}`} id="dong-chay-tin-tuc">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
        <div>
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">Dòng tin liên tục</span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">{title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">{subtitle}</p>
        </div>
        <NewsFilterBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-xl">
        {displayArticles.map((article, index) => (
          <NewsArticleCard key={index} {...article} />
        ))}
      </div>
      <Pagination />
    </section>
  );
}

function Pagination() {
  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Phân trang">
      <button className="px-3 py-1.5 text-body-sm font-body-sm text-on-surface-variant hover:bg-surface-container rounded transition-colors disabled:opacity-50" disabled aria-label="Trang trước">
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
  );
}