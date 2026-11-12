import { SubPageLayout } from '@/components/news/SubPageLayout';
import { LegalDocumentCard } from '@/components/news/LegalDocumentCard';
import { PolicyTimeline } from '@/components/news/PolicyTimeline';
import { NewsStreamSection } from '@/components/news/NewsStreamSection';
import { BannerAlertBox } from '@/components/news/BannerAlertBox';

const subNavItems = [
  { href: '/tin-tuc-su-kien/chinh-sach-va-co-che', label: 'Chính sách và cơ chế OCOP', key: 'chinh-sach-va-co-che' },
  { href: '/tin-tuc-su-kien/xuc-tien-thuong-mai', label: 'Xúc tiến thương mại', key: 'xuc-tien-thuong-mai' },
  { href: '/tin-tuc-su-kien/ocop-dia-phuong', label: 'OCOP địa phương', key: 'ocop-dia-phuong' },
];

const policyDocuments = [
  {
    documentNumber: 'NĐ 85/2026/NĐ-CP',
    issuingAuthority: 'Chính phủ',
    title: 'Cơ chế đặc thù tín dụng xanh cho hợp tác xã OCOP ứng dụng công nghệ số',
    excerpt: 'Hỗ trợ bù lãi suất 2,5%/năm cho vay đầu tư công nghệ, máy móc, thiết bị; cho vay vốn lưu động ngắn hạn; tháo gỡ khó khăn về tài sản bảo đảm đất nông nghiệp tập trung.',
    effectiveDate: '15/10/2026',
    pdfSize: '2.4 MB',
  },
  {
    documentNumber: 'TT 12/2026/TT-BNNPTNT',
    issuingAuthority: 'Bộ NN&PTNT',
    title: 'Quy trình thẩm định, cấp, thu hồi Chứng nhận sản phẩm OCOP 4-5 sao',
    excerpt: 'Đồng bộ hóa tiêu chuẩn thẩm định với hệ thống truy xuất nguồn gốc quốc gia; yêu cầu bắt buộc chứng chỉ HACCP/ISO 22000 cho nhóm thực phẩm; quy định minh bạch hóa chi phí thẩm định.',
    effectiveDate: '01/11/2026',
    pdfSize: '1.8 MB',
  },
  {
    documentNumber: 'QĐ 450/QĐ-BCT',
    issuingAuthority: 'Bộ Công Thương',
    title: 'Phê duyệt Đề án Xúc tiến thương mại OCOP số giai đoạn 2026–2030',
    excerpt: 'Xây dựng sàn TMĐT quốc gia OCOP Digital; hỗ trợ 100% phí gia nhập sàn cho sản phẩm 4-5 sao vùng sâu vùng xa; chương trình Livestream bán hàng OCOP định kỳ hàng tháng.',
    effectiveDate: '20/10/2026',
    pdfSize: '3.1 MB',
  },
  {
    documentNumber: 'NĐ 72/2026/NĐ-CP',
    issuingAuthority: 'Chính phủ',
    title: 'Cơ chế hỗ trợ chuyển đổi bao bì thân thiện môi trường cho sản phẩm OCOP',
    excerpt: 'Hỗ trợ 50% chi phí thiết kế, thử nghiệm, chứng nhận bao bì xanh; ưu tiên vốn vay ưu đãi cho doanh nghiệp sản xuất bao bì phân hủy sinh học; quy định chế tài bao bì theo lộ trình 2026–2030.',
    effectiveDate: '05/10/2026',
    pdfSize: '1.5 MB',
  },
  {
    documentNumber: 'TT 08/2026/TT-BVHTTDL',
    issuingAuthority: 'Bộ VVH&TDL',
    title: 'Quy định bảo hộ Chỉ dẫn địa lý và Nhãn hiệu tập thể sản phẩm bản địa',
    excerpt: 'Thủ tục đăng ký nhanh 60 ngày cho sản phẩm OCOP 4-5 sao; cơ chế giải quyết tranh chấp Chỉ dẫn địa lý; hỗ trợ pháp lý miễn phí cho HTX/doanh nghiệp vùng sâu vùng xa.',
    effectiveDate: '12/10/2026',
    pdfSize: '2.0 MB',
  },
  {
    documentNumber: 'NĐ 90/2026/NĐ-CP',
    issuingAuthority: 'Chính phủ',
    title: 'Cơ chế ưu đãi đất, thuế cho dự án khu tập trung OCOP đa năng',
    excerpt: 'Cho thuê đất lâu dài 50 năm cho khu OCOP kết hợp du lịch, chế biến, logistics; miễn giảm thuế thu nhập doanh nghiệp 4 năm, giảm 50% 9 năm tiếp theo; đơn giản hóa thủ tục chuyển đổi mục đích sử dụng đất.',
    effectiveDate: '25/10/2026',
    pdfSize: '2.7 MB',
  },
];

const expertAnalysis = [
  {
    title: 'Phân tích: Tác động của NĐ 85/2026 đến khả năng tiếp cận vốn của HTX vùng núi',
    author: 'TS. Nguyễn Hồng Lam - Viện Kinh tế Nông thôn',
    date: '22/10/2026',
    readTime: '8 phút đọc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRfi7oEXCeK4AXQIIRhkm7cQ4ULDYf0IZgGISUSM9uS_3NybevcFgtjJfnHhq98EAobenvVhnsHZ38BrX280-Hfd1Y9vs6AtyJhtjyrvc8EwQ9MpEkWcT60f2bqUre2RSQNV5Napg1-9Erzyb3mtmllOnR6R_4ax-VRIUfSfTTUalVMhyT2iE6G86XPnWSlu5NQtg6PoS-sMnD3AvL7ZZIY9S00yC80kqGQf90iAE',
    alt: 'TS. Nguyễn Hồng Lam phát biểu tại hội thảo chính sách, màn hình hiển thị biểu đồ phân tích tín dụng xanh cho HTX vùng cao.',
    category: 'Phân tích chuyên gia',
  },
  {
    title: 'Đánh giá thực thi TT 12/2026: Cơ hội và thách thức cho đơn vị thẩm định',
    author: 'ThS. Trần Văn Đức - Cục Chất lượng NN&PTNT',
    date: '19/10/2026',
    readTime: '6 phút đọc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtkIL5uLiszk4Zk1iPaDHG9SDUoXBKTLFfVEaorN9FbN2VQQm5j-R_PVaAucsO7DNOe9k5IGrTn6UOhBwLvMy6GJGkPe8zioM-RqokbzpH559lXWP-SBq2g96VhWNeJTHf9PZafYEdXHLVWjQUK_vhk7_GZ8zi1u4mXfjuTEj4FjVTQOHFJO_crboaD5Wkpdt7jY4Qdr5FZtXgHepyyoQHZ1xDLrF5y1sVyV0w-L4',
    alt: 'Hội thảo đào tạo đơn vị thẩm định OCOP, giảng viên hướng dẫn quy trình mới trên màn hình cảm ứng.',
    category: 'Phân tích chuyên gia',
  },
  {
    title: 'So sánh quốc tế: Cơ chế tín dụng xanh Việt Nam so với Green Finance Framework EU',
    author: 'PGS.TS. Lê Thị Mai - ĐH Kinh tế Quốc dân',
    date: '15/10/2026',
    readTime: '10 phút đọc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqfEpZlqidqajik2gOU0x0_yGeiK5NKVPOqaVh3meBWTSRNTuYGx1yaNlBmMBIA4q9IOb3RW-WoS5UMogdcFqg7lp4W2XZQ4dIfyocMgZFTlM11uIqdJoXkuU0qbdEWC1I0H8W301PLH0xY2S49h-DHjdocLxI1WsG4MWX3NiUbxROpBuTFKcft85vu3VhJJJz5-QQw_51lXTVXxS_0D4ZuJ1sc3-SY9D8Ujropow',
    alt: 'Bảng so sánh tiêu chuẩn tài chính xanh Việt Nam - EU trên màn hình hội nghị quốc tế.',
    category: 'So sánh quốc tế',
  },
  {
    title: 'Bảo hộ Chỉ dẫn địa lý: Bài học từ Champagne (Pháp) cho Cà phê Buôn Ma Thuột',
    author: 'Luật sư Nguyễn Minh Tuấn - VP Luật Sở hữu Trí tuệ',
    date: '12/10/2026',
    readTime: '7 phút đọc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiMzMYgaInIxCbLdTfUmCMq7ci1Zamgtl7_EeBOGDxyvC0siC7tHpjVbqA6gNn84Ob4qG5SaiOmWve3C8LJJhUSpiUvhW-vySrMQ4zpQLT97sEFKqGMU64TPuXCx0CpQQ-iXMSJaNVAtXq-xwU24CO1NUhGN3WrF8dNEHVJPUJOmFfCKqVBD3lm5A584D6yODw-ws9Bh6JO9HBC4oPFgtlmimLw-UY00dTqEPcMhQ',
    alt: 'Luật sư tư vấn về chiến lược bảo hộ chỉ dẫn địa lý, bản đồ vùng canh tác cà phê Buôn Ma Thuột.',
    category: 'Sở hữu trí tuệ',
  },
];

export default function ChinhSachVaCoChePage() {
  return (
    <SubPageLayout subNavItems={subNavItems}>
      <section className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl" id="van-ban-chinh-sach">
        <div className="mb-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">Văn bản chính sách</span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">Hệ thống văn bản quy phạm pháp luật mới nhất</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Cập nhật liên tục các Nghị định, Thông tư, Quyết định liên quan đến chính sách OCOP</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-xl">
          {policyDocuments.map((doc, index) => (
            <LegalDocumentCard key={index} {...doc} />
          ))}
        </div>
      </section>

      <section className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl" id="lo-trinh-trien-khai">
        <PolicyTimeline />
      </section>

      <section className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl" id="phan-tich-chuyen-gia">
        <div className="mb-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">Phân tích chuyên gia</span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">Đọc hiểu Chính sách từ góc nhìn Chuyên môn</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Các chuyên gia kinh tế, pháp lý, nông nghiệp giải mã tác động thực tiễn của chính sách mới</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
          {expertAnalysis.map((article, index) => (
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
                <div className="mt-auto pt-space-sm flex items-center justify-between">
                  <span className="text-body-sm font-medium text-on-surface">{article.author}</span>
                  <span className="text-secondary text-label-sm font-label-sm uppercase font-semibold">{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <NewsStreamSection
        title="Tin tức Chính sách & Cơ chế mới nhất"
        subtitle="Cập nhật liên tục các thay đổi chính sách, văn bản mới và phân tích tác động"
      />
    </SubPageLayout>
  );
}