// API Route: /api/ocop-now
// Returns paginated list of OCOP Now items with filtering

import { NextRequest, NextResponse } from 'next/server';
import { OCOPNowItem, PaginatedResponse } from '@ocop/shared-types';

// Mock OCOP Now items data
const ocopNowData: OCOPNowItem[] = [
  {
    id: 'ocop-now-1',
    slug: 'nghi-dinh-85-2024-ho-tro-xay-dung-thuong-hieu-quoc-te-ocop',
    type: 'policy',
    headline: 'Nghị định 85/2024/NĐ-CP: Hỗ trợ 50% chi phí xây dựng thương hiệu quốc tế cho OCOP 5 sao',
    excerpt: 'Chính sách mới hỗ trợ tối đa 2 tỷ VNĐ cho chủ thể OCOP 5 sao xây dựng thương hiệu, tham gia triển lãm quốc tế, R&D liên doanh với buyer toàn cầu.',
    content: `
      <h2>Nghị định 85/2024/NĐ-CP: Chính sách hỗ trợ thương hiệu OCOP quốc tế</h2>
      <p>Ngày 30/09/2024, Chính phủ ban hành Nghị định 85/2024/NĐ-CP quy định cơ chế, chính sách phát triển sản phẩm OCOP gắn liền với du lịch, xuất khẩu và chuyển đổi số. Điểm nổi bật là gói hỗ trợ xây dựng thương hiệu quốc tế.</p>

      <h3>1. Đối tượng được hỗ trợ</h3>
      <ul>
        <li>Chủ thể OCOP đạt 5 sao theo quy định hiện hành</li>
        <li>Có đăng ký bảo hộ thương hiệu tại Việt Nam</li>
        <li>Có kế hoạch xuất khẩu hoặc đã xuất khẩu sang ít nhất 1 thị trường quốc tế</li>
        <li>Cam kết đầu tư đồng vốn đối ứng ≥ 50% tổng chi phí</li>
      </ul>

      <h3>2. Mức hỗ trợ cụ thể</h3>
      <table>
        <thead><tr><th>Hạng mục</th><th>Mức hỗ trợ</th><th>Ghi chú</th></tr></thead>
        <tbody>
          <tr><td>Xây dựng thương hiệu quốc tế (thiết kế, đăng ký, marketing)</td><td>50% chi phí, tối đa 2 tỷ VNĐ</td><td>Bao gồm: nhận diện thương hiệu, bao bì, website đa ngôn ngữ, PR quốc tế</td></tr>
          <tr><td>Tham gia triển lãm, hội chợ quốc tế</td><td>100% chi phí gian hàng + vé máy bay 2 người</td><td>Tối đa 3 triển lãm/năm, ưu tiên: Anuga, SIAL, Foodex, THAIFEX</td></tr>
          <tr><td>R&D liên doanh với buyer toàn cầu</td><td>50% chi phí, tối đa 5 tỷ VNĐ</td><td>Yêu cầu cam kết mua hàng từ buyer (LOI/PO)</td></tr>
          <tr><td>Xây dựng kênh D2C cross-border (Amazon, Shopee Mall, Tmall)</td><td>70% chi phí platform + marketing năm đầu</td><td>Tối đa 500 triệu VNĐ/năm, hỗ trợ 2 năm</td></tr>
        </tbody>
      </table>

      <h3>3. Quy trình xin hỗ trợ</h3>
      <ol>
        <li>Nộp hồ sơ tại Sở Công Thương tỉnh/thành phố (trực tuyến qua Dịch vụ công quốc gia)</li>
        <li>Sở thẩm định, hội đồng chuyên môn đánh giá (15 ngày)</li>
        <li>Bộ Công Thương phê duyệt danh sách được hỗ trợ (10 ngày)</li>
        <li>Giải ngân theo tiến độ: 50% khi ký hợp đồng, 50% sau khi nghiệm thu</li>
      </ol>

      <h3>4. Hồ sơ yêu cầu</h3>
      <ul>
        <li>Đề nghị xin hỗ trợ (theo mẫu)</li>
        <li>Bản sao Chứng nhận OCOP 5 sao</li>
        <li>Bản sao Giấy chứng nhận đăng ký thương hiệu</li>
        <li>Kế hoạch kinh doanh/xuất khẩu chi tiết (3 năm)</li>
        <li>Báo cáo tài chính 2 năm gần nhất (đã kiểm toán)</li>
        <li>Cam kết đầu tư đồng vốn, không vi phạm pháp luật</li>
      </ul>

      <h3>5. Kết hợp với các chính sách khác</h3>
      <p>Chủ thể OCOP có thể <strong>tích hợp</strong> hỗ trợ này với:</p>
      <ul>
        <li>Hỗ trợ 50% chi phí HACCP/ISO 22000/FSSC 22000 (Quyết định 1234/QĐ-TTg)</li>
        <li>Hỗ trợ 70% phí đăng ký Madrid (Cục SHTT)</li>
        <li>Vay ưu đãi 0% lãi suất Quỹ phát triển OCOP (tối đa 10 tỷ VNĐ)</li>
        <li>Hỗ trợ 100% chi phí thử nghiệm mẫu đầu ra (tối đa 20 mẫu/năm)</li>
      </ul>

      <p><strong>Liên hệ:</strong> Sở Công Thương địa phương | Hotline Bộ Công Thương: 1900 636 889 | Cổng dịch vụ công quốc gia: dichvucong.gov.vn</p>
    `,
    publishedDate: '2024-10-01T08:00:00Z',
    source: 'Bộ Công Thương',
    tags: ['nghị định 85', 'thương hiệu quốc tế', 'ocop 5 sao', 'hỗ trợ tài chính', 'xuất khẩu'],
    seo: {
      metaTitle: 'Nghị định 85/2024: Hỗ trợ 50% xây dựng thương hiệu quốc tế OCOP 5 sao | OCOP NOW',
      metaDescription: 'Chi tiết Nghị định 85/2024/NĐ-CP: Hỗ trợ 2 tỷ VNĐ xây dựng thương hiệu, 100% chi phí triển lãm quốc tế, 5 tỷ VNĐ R&D liên doanh buyer. Quy trình, hồ sơ, điều kiện.',
      metaKeywords: ['nghị định 85 2024', 'thương hiệu ocop quốc tế', 'hỗ trợ ocop 5 sao', 'xuất khẩu ocop', 'chính sách mới ocop'],
      ogTitle: 'Nghị định 85/2024: Hỗ trợ 50% xây dựng thương hiệu quốc tế OCOP 5 sao',
      ogDescription: 'Chính sách mới hỗ trợ OCOP 5 sao đi quốc tế: 2 tỷ VNĐ thương hiệu, 100% triển lãm, 5 tỷ R&D. Xem điều kiện & quy trình.',
      ogImage: '/images/ocop-now/nghi-dinh-85-thuong-hieu-quoc-te.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/ocop-hoi-nhap/nghi-dinh-85-thuong-hieu-quoc-te',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Nghị định 85/2024/NĐ-CP: Hỗ trợ 50% chi phí xây dựng thương hiệu quốc tế cho OCOP 5 sao',
        datePublished: '2024-10-01T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Bộ Công Thương' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    }
  },
  {
    id: 'ocop-now-2',
    slug: 'hoi-nghi-tong-ket-10-nam-thuc-hien-chuong-trinh-ocop-quoc-gia',
    type: 'event',
    headline: 'Hội nghị Tổng kết 10 năm thực hiện Chương trình OCOP Quốc gia: 11.000 sản phẩm, 1.200 sản phẩm 4-5 sao',
    excerpt: 'Tổng kết 10 năm (2015-2024): 11.000 sản phẩm OCOP, trong đó 1.200 sản phẩm 4-5 sao. Doanh thu ước tính 120.000 tỷ VNĐ. Triển vọng 2025-2030: định hướng OCOP số, xanh, thương hiệu quốc gia.',
    content: `
      <h2>Hội nghị Tổng kết 10 năm Chương trình OCOP Quốc gia</h2>
      <p>Sáng 15/12/2024, tại Hà Nội, Bộ Công Thương phối hợp với Ủy ban Nhân dân các tỉnh thành tổ chức Hội nghị Tổng kết 10 năm thực hiện Chương trình "Mỗi xã một sản phẩm" (OCOP) gắn liền phát triển du lịch, xuất khẩu.</p>

      <h3>1. Kết quả 10 năm (2015-2024)</h3>
      <table>
        <thead><tr><th>Chỉ tiêu</th><th>Kết quả</th><th>So với mục tiêu</th></tr></thead>
        <tbody>
          <tr><td>Tổng số sản phẩm OCOP được công nhận</td><td>11.000</td><td>110% (mục tiêu 10.000)</td></tr>
          <tr><td>Sản phẩm 5 sao</td><td>280</td><td>140% (mục tiêu 200)</td></tr>
          <tr><td>Sản phẩm 4 sao</td><td>920</td><td>115% (mục tiêu 800)</td></tr>
          <tr><td>Sản phẩm 3 sao</td><td>9.800</td><td>109% (mục tiêu 9.000)</td></tr>
          <tr><td>Doanh thu ước tính</td><td>120.000 tỷ VNĐ</td><td>120% (mục tiêu 100.000 tỷ)</td></tr>
          <tr><td>Việc làm tạo ra</td><td>1.200.000</td><td>120% (mục tiêu 1.000.000)</td></tr>
          <tr><td>Giá trị xuất khẩu</td><td>2.5 tỷ USD</td><td>125% (mục tiêu 2.0 tỷ)</td></tr>
        </tbody>
      </table>

      <h3>2. 5 Mô hình điển hình được vinh danh</h3>
      <ol>
        <li><strong>Cà phê Buôn Ma Thuột (Đắk Lắk):</strong> 5 sao, xuất khẩu 40 quốc gia, thương hiệu quốc gia</li>
        <li><strong>Gốm Bát Tràng (Hà Nội):</strong> 5 sao, du lịch kết hợp, thiết kế hợp tác quốc tế</li>
        <li><strong>Lụa Vạn Phúc (Hà Nội):</strong> 5 sao, thời trang cao cấp, hợp tác Hermès, Eileen Fisher</li>
        <li><strong>Nước mắm Phú Quốc (Kiên Giang):</strong> 5 sao, chuẩn EU, xuất khẩu 25 quốc gia</li>
        <li><strong>Trà Tân Cương (Thái Nguyên):</strong> 5 sao, trà đặc sản, du lịch trà, Geographical Indication</li>
      </ol>

      <h3>3. Định hướng 2025-2030: OCOP Số - Xanh - Thương hiệu Quốc gia</h3>
      <h4>Trục 1: OCOP Số (Digital OCOP)</h4>
      <ul>
        <li>100% chủ thể OCOP 4-5 sao có website, sàn TMĐT, truy xuất blockchain</li>
        <li>Xây dựng "OCOP Digital Passport" cho từng sản phẩm (EPC/RFID + GS1 Digital Link)</li>
        <li>Platform "OCOP Connect": kết nối chủ thể OCOP - Buyer - Logistics - Ngân hàng</li>
        <li>AI hỗ trợ: Dự báo thị trường, tối ưu quy trình, marketing cá nhân hóa</li>
      </ul>

      <h4>Trục 2: OCOP Xanh (Green OCOP)</h4>
      <ul>
        <li>Chuyển đổi 50% diện tích nguyên liệu sang canh tác hữu cơ/VietGAP/GlobalG.A.P. năm 2030</li>
        <li>Bao bì sinh học phân hủy, tái chế: 100% OCOP 4-5 sao năm 2028</li>
        <li>Năng lượng tái tạo cho sản xuất: Mục tiêu Net Zero năm 2050</li>
        <li>Kinh tế tuần hoàn: Tận dụng phụ phẩm, xử lý rác thải thành tài nguyên</li>
      </ul>

      <h4>Trục 3: Thương hiệu Quốc gia (National Brand)</h4>
      <ul>
        <li>Xây dựng 10 "Thương hiệu Quốc gia OCOP" đại diện cho 10 vùng miền (2025-2027)</li>
        <li>Đăng ký bảo hộ Madrid 100% thương hiệu quốc gia (2025-2028)</li>
        <li>Marketing quốc gia: "OCOP Vietnam - Essence of Vietnam" tại 20 thị trường trọng điểm</li>
        <li>Du lịch OCOP: 500 điểm du lịch làng nghề/OCOP chuẩn quốc gia năm 2030</li>
      </ul>

      <h3>4. Cam kết của các Bộ, ngành, địa phương</h3>
      <ul>
        <li><strong>Bộ Công Thương:</strong> Ban hành Nghị định mới thay thế ND 35/2022, tăng cường hỗ trợ tài chính, kỹ thuật</li>
        <li><strong>Bộ Nông nghiệp:</strong> Vùng nguyên liệu chuyên canh 1 triệu ha cho OCOP năm 2030</li>
        <li><strong>Bộ KH&ĐT:</strong> Quỹ phát triển OCOP 50.000 tỷ VNĐ giai đoạn 2025-2030</li>
        <li><strong>Bộ Khoa học:</strong> Nghiên cứu, chuyển giao công nghệ chế biến sâu, bao bì thông minh</li>
        <li><strong>Các tỉnh thành:</strong> Đầu tư hạ tầng làng nghề, trung tâm logistics, trung tâm trình diễn OCOP</li>
      </ul>

      <h3>5. Kết luận của Thủ tướng Chính phủ</h3>
      <p>"OCOP không chỉ là sản phẩm, là câu chuyện Việt Nam. 10 năm qua đã tạo ra nền tảng vững chắc. Giai đoạn tới: OCOP phải là thương hiệu quốc gia, là mặt hàng xuất khẩu chủ lực, là điểm nhấn du lịch. Yêu cầu mỗi Bộ, ngành, địa phương đồng lòng, quyết tâm, hành động thực tế."</p>
    `,
    publishedDate: '2024-12-15T08:00:00Z',
    source: 'Bộ Công Thương',
    tags: ['10 năm ocop', 'tổng kết', '11.000 sản phẩm', '1.200 sản phẩm 4-5 sao', 'định hướng 2025-2030', 'ocop số', 'ocop xanh', 'thương hiệu quốc gia'],
    seo: {
      metaTitle: 'Tổng kết 10 năm OCOP: 11.000 sản phẩm, 1.200 sản phẩm 4-5 sao, 120.000 tỷ VNĐ doanh thu | OCOP NOW',
      metaDescription: 'Hội nghị tổng kết 10 năm Chương trình OCOP Quốc gia: 11.000 sản phẩm, 280 sản phẩm 5 sao, 920 sản phẩm 4 sao. Doanh thu 120.000 tỷ VNĐ. Định hướng 2025-2030: OCOP Số, Xanh, Thương hiệu Quốc gia.',
      metaKeywords: ['10 năm ocop', 'tổng kết ocop', '11.000 sản phẩm ocop', 'sản phẩm 4-5 sao', 'định hướng 2025-2030', 'ocop số', 'ocop xanh'],
      ogTitle: 'Tổng kết 10 năm OCOP: 11.000 sản phẩm, 1.200 sản phẩm 4-5 sao',
      ogDescription: 'Doanh thu 120.000 tỷ VNĐ, xuất khẩu 2.5 tỷ USD. Định hướng OCOP Số - Xanh - Thương hiệu Quốc gia 2025-2030.',
      ogImage: '/images/ocop-now/10-nam-ocop-tong-ket.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/ocop-hoi-nhap/10-nam-ocop-tong-ket',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Hội nghị Tổng kết 10 năm thực hiện Chương trình OCOP Quốc gia',
        datePublished: '2024-12-15T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Bộ Công Thương' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    }
  },
  {
    id: 'ocop-now-3',
    slug: 'thi-truong-ocop-quy-4-2024-ca-phe-gom-lua-dan-truong-tang-truong',
    type: 'market-update',
    headline: 'Báo cáo thị trường OCOP Quý 4/2024: Cà phê, Gốm, Lụa dẫn đầu tăng trưởng 25-40%',
    excerpt: 'Phân tích 3 nhóm sản phẩm OCOP tăng trưởng mạnh nhất Quý 4: Cà phê specialty (+40%), Gốm nghệ thuật (+35%), Lụa thời trang cao cấp (+25%). Cơ hội xuất khẩu EU, Mỹ, Nhật, Hàn.',
    content: `
      <h2>Báo cáo thị trường OCOP Quý 4/2024: Phân tích tăng trưởng & Cơ hội</h2>
      <p>Dựa trên dữ liệu Hải quan, Bộ Công Thương, và sàn TMĐT cross-border (Shopee, Lazada, TikTok Shop, Amazon), báo cáo phân tích hiệu quả kinh doanh OCOP Quý 4/2024 và xu hướng 2025.</p>

      <h3>1. Tổng quan thị trường Quý 4/2024</h3>
      <ul>
        <li><strong>Doanh thu tổng thể:</strong> 35.000 tỷ VNĐ (+18% so với Quý 3, +22% so với cùng kỳ)</li>
        <li><strong>Doanh thu xuất khẩu:</strong> 750 triệu USD (+25% so với cùng kỳ)</li>
        <li><strong>Số đơn hàng online:</strong> 2.5 triệu đơn (+30% so với cùng kỳ)</li>
        <li><strong>Giá trị đơn hàng trung bình (AOV):</strong> 450.000 VNĐ (+12% so với cùng kỳ)</li>
      </ul>

      <h3>2. Top 3 nhóm sản phẩm tăng trưởng mạnh nhất</h3>

      <h4>🥇 Nhóm 1: Cà phê Specialty & Chế biến sâu (+40%)</h4>
      <table>
        <thead><tr><chỉ tiêu</th><th>Quý 4/2024</th><th>Tăng trưởng</th><th>Thị trường chủ lực</th></tr></thead>
        <tbody>
          <tr><td>Cà phê hạt rang xay (Specialty)</td><td>1.200 tỷ VNĐ</td><td>+45%</td><td>Đức, Mỹ, Nhật, Hàn, EU</td></tr>
          <tr><td>Cà phê instant cao cấp</td><td>800 tỷ VNĐ</td><td>+38%</td><td>Trung Quốc, ASEAN, Mỹ</td></tr>
          <tr><td>Sô-cô-la bean-to-bar từ cà phê</td><td>350 tỷ VNĐ</td><td>+55%</td><td>EU, Mỹ, Singapore, UAE</td></tr>
          <tr><td>Nước ép cà phê, Bia cà phê</td><td>200 tỷ VNĐ</td><td>+60%</td><td>Nội địa, Nhật, Hàn</td></tr>
        </tbody>
      </table>
      <p><strong>Driver:</strong> Xu hướng "Third wave coffee", tiêu dùng bền vững, chứng nhận Rainforest Alliance/UTZ/Fairtrade. Giá cà phê Robusta kỷ lục 50 năm đẩy giá trị sản phẩm.</p>

      <h4>🥈 Nhóm 2: Gốm nghệ thuật & Đồ trang trí nhà (+35%)</h4>
      <table>
        <thead><tr><th>Chỉ tiêu</th><th>Quý 4/2024</th><th>Tăng trưởng</th><th>Thị trường chủ lực</th></tr></thead>
        <tbody>
          <tr><td>Gốm thủ công cao cấp (Bát Tràng, Chu Đậu, Lại Thiêu)</td><td>650 tỷ VNĐ</td><td>+38%</td><td>EU, Mỹ, Úc, Nhật, UAE</td></tr>
          <tr><td>Đèn gốm, 꽃병, đồ trang trí</td><td>400 tỷ VNĐ</td><td>+42%</td><td>Mỹ, EU, Singapore, HK</td></tr>
          <tr><td>Bộ ăn uống nghệ thuật (tableware)</td><td>300 tỷ VNĐ</td><td>+30%</td><td>Nhà hàng Michelin, Resort cao cấp</td></tr>
          <tr><td>Gốm kết hợp du lịch (trải nghiệm)</td><td>150 tỷ VNĐ</td><td>+28%</td><td>Du lịch nội địa, nhập cảnh</td></tr>
        </tbody>
      </table>
      <p><strong>Driver:</strong> Trend "Slow living", "Artisan home decor", thiết kế hợp tác designer quốc tế (IKEA, Williams-Sonoma, Museum shops). Bát Tràng Studio model thành công.</p>

      <h4>🥉 Nhóm 3: Lụa thời trang cao cấp & Bền vững (+25%)</h4>
      <table>
        <thead><tr><th>Chỉ tiêu</th><th>Quý 4/2024</th><th>Tăng trưởng</th><th>Thị trường chủ lực</th></tr></thead>
        <tbody>
          <tr><td>Vải lụa hữu cơ, nhuộm tự nhiên</td><td>500 tỷ VNĐ</td><td>+28%</td><td>EU (Hermès, Eileen Fisher), Mỹ, Nhật</td></tr>
          <tr><td>Thời trang lụa cao cấp (áo dài, dress, scarf)</td><td>450 tỷ VNĐ</td><td>+32%</td><td>Du lịch cao cấp, xuất khẩu, nội địa top-tier</td></tr>
          <tr><td>Phụ kiện lụa (khan, túi, khẩu trang)</td><td>200 tỷ VNĐ</td><td>+20%</td><td>Sàn TMĐT cross-border, gift shop</td></tr>
          <tr><td>Du lịch làng lụa Vạn Phúc</td><td>180 tỷ VNĐ</td><td>+35%</td><td>Du lịch trải nghiệm, MICE</td></tr>
        </tbody>
      </table>
      <p><strong>Driver:</strong> "Sustainable luxury", "Quiet luxury", nhuộm tự nhiên (indigo, bồ kết, trà), Geographical Indication (Chỉ dẫn địa lý) Vạn Phúc.</p>

      <h3>3. Cơ hội thị trường 2025</h3>
      <h4>Thị trường EU (Green Deal, CSRD, EUDR)</h4>
      <ul>
        <li>Yêu cầu truy xuất nguồn gốc (EUDR) → Cơ hội cho OCOP có blockchain/EPCIS</li>
        <li>Báo cáo phát triển bền vững (CSRD) → Buyer ưu tiên supplier có chứng chỉ xanh</li>
        <li>Carbon Border Adjustment Mechanism (CBAM) → Ưu tiên sản phẩm thấp carbon</li>
      </ul>

      <h4>Thị trường Mỹ (FSMA, FDA)</h4>
      <ul>
        <li>Food Safety Modernization Act (FSMA) Rule 204: Truy xuất 1 bước tiến/1 bước lùi</li>
        <li>FDA Food Facility Registration bắt buộc cho xuất khẩu thực phẩm</li>
        <li>Trend "Clean label", "Non-GMO", "Organic" → Phù hợp OCOP nông sản</li>
      </ul>

      <h4>Thị trường Nhật Bản (JAS, Organic JAS)</h4>
      <ul>
        <li>Tiêu chuẩn JAS (Japanese Agricultural Standard) cho hữu機</li>
        <li>Già hóa dân số → Nhu cầu thực phẩm chức năng, dễ tiêu hóa (OCOP phù hợp)</li>
        <li>Du lịch trải nghiệm văn hóa → Cơ hội OCOP du lịch</li>
      </ul>

      <h3>4. Khuyến nghị hành động cho chủ thể OCOP Quý 1/2025</h3>
      <ol>
        <li><strong>Nhóm Cà phê:</strong> Xây dựng hồ sơ EUDR, đăng ký TRACES, đầu tư máy rang thông minh, phát triển dòng sô-cô-la bean-to-bar</li>
        <li><strong>Nhóm Gốm:</strong> Hợp tác designer quốc tế, phát triển bộ sưu tập seasonal, tích hợp AR/VR trải nghiệm, đăng ký thiết kế công nghiệp</li>
        <li><strong>Nhóm Lụa:</strong> Chuyển đổi tơ lụa hữu cơ, nhuộm tự nhiên 100%, xây dựng studio thiết kế, phát triển du lịch làng nghề kết hợp fashion show</li>
        <li><strong>Tất cả:</strong> Triển khai OCOP Digital Passport, đăng ký Madrid, xây dựng kênh D2C cross-border, tham gia chương trình "OCOP Export Ready"</li>
      </ol>
    `,
    publishedDate: '2025-01-05T08:00:00Z',
    source: 'Cục Xúc tiến Thương mại - Bộ Công Thương & Nielsen Vietnam',
    tags: ['thị trường ocop quý 4 2024', 'cà phê specialty', 'gốm nghệ thuật', 'lụa thời trang', 'xuất khẩu eu', 'xuất khẩu mỹ', 'xuất khẩu nhật', 'báo cáo thị trường'],
    seo: {
      metaTitle: 'Báo cáo thị trường OCOP Quý 4/2024: Cà phê +40%, Gốm +35%, Lụa +25% | OCOP NOW',
      metaDescription: 'Phân tích 3 nhóm OCOP tăng trưởng mạnh Quý 4/2024: Cà phê specialty (+40%), Gốm nghệ thuật (+35%), Lụa thời trang (+25%). Cơ hội EU, Mỹ, Nhật, Hàn 2025. Khuyến nghị hành động.',
      metaKeywords: ['thị trường ocop quý 4 2024', 'cà phê specialty tăng trưởng', 'gốm nghệ thuật xuất khẩu', 'lụa thời trang cao cấp', 'báo cáo thị trường ocop', 'cơ hội xuất khẩu 2025'],
      ogTitle: 'Thị trường OCOP Quý 4/2024: Cà phê +40%, Gốm +35%, Lụa +25%',
      ogDescription: 'Top 3 nhóm tăng trưởng: Cà phê specialty, Gốm nghệ thuật, Lụa thời trang. Cơ hội EU Green Deal, US FSMA, Nhật JAS. Khuyến nghị Quý 1/2025.',
      ogImage: '/images/ocop-now/thi-truong-quy4-2024.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/ocop-hoi-nhap/thi-truong-quy4-2024',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Báo cáo thị trường OCOP Quý 4/2024: Cà phê, Gốm, Lụa dẫn đầu tăng trưởng',
        datePublished: '2025-01-05T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Cục Xúc tiến Thương mại - Bộ Công Thương & Nielsen Vietnam' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    }
  },
  {
    id: 'ocop-now-4',
    slug: 'khoi-dong-chuong-trinh-ocop-digital-passport-2025',
    type: 'technology',
    headline: 'Khởi động chương trình "OCOP Digital Passport 2025": 1.000 sản phẩm 4-5 sao triển khai EPC/RFID + Blockchain',
    excerpt: 'Chương trình quốc gia triển khai "Hành trình số sản phẩm" cho 1.000 sản phẩm OCOP 4-5 sao năm 2025. Hỗ trợ 70% chi phí thẻ EPC/RFID, 100% gas fee blockchain 3 tháng. Đăng ký GS1 Company Prefix miễn phí.',
    content: `
      <h2>Chương trình "OCOP Digital Passport 2025": Trí tuệ hóa truy xuất nguồn gốc</h2>
      <p>Ngày 10/01/2025, Bộ Công Thương phối hợp với GS1 Việt Nam, Viettel, VNPT chính thức khởi động Chương trình "OCOP Digital Passport 2025" - triễn khai hành trình số (Digital Product Passport) cho 1.000 sản phẩm OCOP 4-5 sao.</p>

      <h3>1. Mục tiêu chương trình</h3>
      <ul>
        <li>1.000 sản phẩm OCOP 4-5 sao có Digital Passport trước Tết Nguyên Đán 2026</li>
        <li>100% chủ thể OCOP 5 sao có GS1 Company Prefix, mã GTIN chuẩn quốc tế</li>
        <li>Xây dựng OCOP EPCIS Repository quốc gia (kết nối Viettel Blockchain, VNPT Chain)</li>
        <li>Tích hợp GS1 Digital Link Resolver quốc gia: ocop.vn/01/[GTIN]/[Lot]</li>
        <li>Consumer App "OCOP Trace" quét QR xem hành trình sản phẩm</li>
      </ul>

      <h3>2. Kiến trúc kỹ thuật OCOP Digital Passport</h3>
      <pre><code>
┌─────────────────────────────────────────────────────────────────┐
│                    OCOP Digital Passport                        │
├─────────────────────────────────────────────────────────────────┤
│  1. IDENTITY LAYER                                              │
│     • GS1 Company Prefix (đăng ký miễn phí cho OCOP 4-5 sao)   │
│     • GTIN-14 cho từng SKU (Global Trade Item Number)          │
│     • Serial/Lot/Batch number (AI 10, AI 21)                   │
│                                                                 │
│  2. DATA CARRIER LAYER                                          │
│     • EPC/RFID Tag (UHF Gen2V2 cho pallet/carton)              │
│     • NFC/RAIN Dual Tag (bao bì bán lẻ - tương tác KH)         │
│     • GS1 Digital Link QR Code (trên bao bì, bao gói)          │
│                                                                 │
│  3. EVENT REPOSITORY LAYER (EPCIS 1.2)                          │
│     • ObjectEvent: Commissioning, Observing                    │
│     • AggregationEvent: Packing, Palletizing                   │
│     • TransformationEvent: Processing, Manufacturing           │
│     • TransactionEvent: Shipping, Receiving, Selling           │
│     • CBV 1.2: Standard vocabularies                           │
│                                                                 │
│  4. TRUST LAYER (Blockchain)                                    │
│     • Viettel Blockchain (Hyperledger Fabric) - Enterprise     │
│     • VNPT Chain (EVM/Polygon-based) - NFT Traceability        │
│     • Smart Contract: Immutable event log, Access control      │
│                                                                 │
│  5. RESOLVER & CONSUMER LAYER                                   │
│     • GS1 Digital Link Resolver: ocop.vn/01/[GTIN]/[Lot]       │
│     • Consumer App: "OCOP Trace" (iOS/Android)                 │
│     • Buyer Portal: API cho import/retailer quốc tế            │
│     • Admin Dashboard: Quản lý, analytics, compliance          │
└─────────────────────────────────────────────────────────────────┘
      </code></pre>

      <h3>3. Hỗ trợ tài chính & Kỹ thuật năm 2025</h3>
      <table>
        <thead><tr><th>Hạng mục</th><th>Mức hỗ trợ</th><th>Điều kiện</th></tr></thead>
        <tbody>
          <tr><td>Đăng ký GS1 Company Prefix</td><td>100% miễn phí (tiết kiệm 3 triệu VNĐ/năm)</td><td>OCOP 4-5 sao, đăng ký qua Sở Công Thương</td></tr>
          <tr><td>Thẻ EPC/RFID (năm đầu)</td><td>70% chi phí, tối đa 200 triệu VNĐ</td><td>Mua từ nhà cung cấp được GS1 Việt Nam công nhận</td></tr>
          <tr><td>Thiết bị in/ghi thẻ (Printer/Encoder)</td><td>50% chi phí, tối đa 100 triệu VNĐ</td><td>OCOP 5 sao ưu tiên, OCOP 4 sao có kế hoạch mở rộng</td></tr>
          <tr><td>Gas fee Blockchain (Viettel/VNPT)</td><td>100% 3 tháng đầu, sau đó 50% 9 tháng tiếp</td><td>Sandbox 6 tháng miễn phí cả 2 nền tảng</td></tr>
          <tr><td>EPCIS Repository / Digital Link Resolver</td><td>Cung cấp miễn phí (hạ tầng quốc gia)</td><td>Hosted tại VNPT/Viettel Cloud, SLA 99.9%</td></tr>
          <tr><td>Đội ngũ kỹ sư triển khai</td><td>Miễn phí (Dự án "OCOP Digital Traceability")</td><td>On-site 5 ngày, remote support 6 tháng</td></tr>
          <tr><td>Consumer App "OCOP Trace"</td><td>Miễn phí branding, publish App Store/CH Play</td><td>Logo, màu sắc, tên thương hiệu chủ thể OCOP</td></tr>
        </tbody>
      </table>

      <h3>4. Lộ trình triển khai 2025</h3>
      <ol>
        <li><strong>Tháng 1-2 (Giai đoạn 1):</strong> Tuyển chọn 200 sản phẩm pilot (ưu tiên: cà phê, gốm, lụa, nước mắm, trà, cao su, điều, hồ tiêu, nghệ, đen)</li>
        <li><strong>Tháng 2-3:</strong> Đăng ký GS1 Prefix, thiết kế GTIN, mua thiết bị, tích hợp ERP</li>
        <li><strong>Tháng 3-4:</strong> Pilot in/ghi thẻ, test EPCIS event, test Consumer App, test Buyer Portal</li>
        <li><strong>Tháng 4-6 (Giai đoạn 2):</strong> Mở rộng 500 sản phẩm, đào tạo nhân viên, marketing "Quét QR - Biết nguồn"</li>
        <li><strong>Tháng 6-9 (Giai đoạn 3):</strong> 1.000 sản phẩm, tích hợp sàn TMĐT (Shopee, TikTok Shop, Amazon), xuất khẩu</li>
        <li><strong>Tháng 9-12:</strong> Nghiệm thu, báo cáo, mở rộng 2026 (mục tiêu 5.000 sản phẩm)</li>
      </ol>

      <h3>5. Lợi ích cho chủ thể OCOP</h3>
      <ul>
        <li><strong>Chống hàng giả:</strong> Mỗi sản phẩm có identity duy nhất, không thể copy</li>
        <li><strong>Tăng giá trị:</strong> Buyer quốc tế trả giá cao 15-30% cho sản phẩm có Digital Passport</li>
        <li><strong>Tuân thủ pháp lý:</strong> Đáp ứng EUDR, FSMA 204, CSRD, CBAM</li>
        <li><strong>Marketing:</strong> Consumer quét QR xem video trang trại, chứng nhận, review → Tăng trust, repeat purchase</li>
        <li><strong>Data-driven:</strong> Nắm được dữ liệu sell-out, consumer behavior, demand forecasting</li>
        <li><strong>Recall nhanh:</strong> Nếu sự cố → Recall chính xác lot/batch trong giờ, không phải recall toàn bộ</li>
      </ul>

      <h3>6. Đăng ký tham gia</h3>
      <p>Chủ thể OCOP 4-5 sao đăng ký tại: <strong>https://ocopvietnam.vn/digital-passport</strong> hoặc qua Sở Công Thương tỉnh/thành phố.</p>
      <ul>
        <li>Hạn đăng ký đợt 1: 28/02/2025 (200 sản phẩm pilot)</li>
        <li>Hạn đăng ký đợt 2: 30/04/2025 (500 sản phẩm)</li>
        <li>Hạn đăng ký đợt 3: 31/07/2025 (300 sản phẩm)</li>
      </ul>
      <p><strong>Hotline hỗ trợ:</strong> 1900 636 889 (phím 4) | Email: digitalpassport@ocop.vn</p>
    `,
    publishedDate: '2025-01-10T08:00:00Z',
    source: 'Bộ Công Thương, GS1 Việt Nam, Viettel, VNPT',
    tags: ['digital passport', 'epc rfid', 'blockchain', 'gs1 digital link', 'truy xuất nguồn gốc', 'ocop 4-5 sao', 'hỗ trợ 70%', 'viettel blockchain', 'vnpt chain'],
    seo: {
      metaTitle: 'OCOP Digital Passport 2025: 1.000 sản phẩm 4-5 sao EPC/RFID + Blockchain | OCOP NOW',
      metaDescription: 'Chương trình quốc gia OCOP Digital Passport 2025: 1.000 sản phẩm 4-5 sao triển khai EPC/RFID, GS1 Digital Link, Blockchain Viettel/VNPT. Hỗ trợ 70% thẻ, 100% gas fee 3 tháng, GS1 Prefix miễn phí.',
      metaKeywords: ['ocop digital passport', 'epc rfid ocop', 'gs1 digital link', 'blockchain truy xuất', 'viettel blockchain', 'vnpt chain', 'hành trình số sản phẩm', 'hỗ trợ ocop 4-5 sao'],
      ogTitle: 'OCOP Digital Passport 2025: 1.000 sản phẩm EPC/RFID + Blockchain',
      ogDescription: 'Hành trình số sản phẩm OCOP: EPC/RFID, GS1 Digital Link QR, Blockchain. Hỗ trợ 70% chi phí, GS1 Prefix miễn phí. Đăng ký hôm nay.',
      ogImage: '/images/ocop-now/digital-passport-2025.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/ocop-hoi-nhap/ocop-digital-passport-2025',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Khởi động chương trình "OCOP Digital Passport 2025": 1.000 sản phẩm 4-5 sao triển khai EPC/RFID + Blockchain',
        datePublished: '2025-01-10T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Bộ Công Thương, GS1 Việt Nam, Viettel, VNPT' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    }
  },
  {
    id: 'ocop-now-5',
    slug: 'ocop-bac-giang-luc-ngan-thanh-cong-xuat-khau-vao-trung-quoc-quan-mon-cai',
    type: 'success-story',
    headline: 'OCOP Bắc Giang - Lục Ngân: Thành công xuất khẩu chanh đào, thanh long qua cửa khẩu Móng Cái - 500 tấn/năm',
    excerpt: 'Hợp tác xã Chanh Đào Lục Ngân (OCOP 4 sao) kết nối xuất khẩu 500 tấn chanh đào, thanh long/năm sang Trung Quốc qua cửa khẩu Móng Cái. Áp dụng VietGAP, đăng ký mã cơ sở, C/O form E. Doanh thu 45 tỷ VNĐ/năm.',
    content: `
      <h2>Case Study: Hợp tác xã Chanh Đào Lục Ngân - Xuất khẩu thành công sang Trung Quốc</h2>
      <p>Hợp tác xã Chanh Đào Lục Ngân (Bắc Giang) - chủ thể OCOP 4 sao "Chanh đào Lục Ngân" - là điển hình thành công kết nối xuất khẩu nông sản tươi sang thị trường Trung Quốc qua cửa khẩu Móng Cái (Quảng Ninh).</p>

      <h3>1. Thông tin chủ thể</h3>
      <table>
        <thead><tr><th>Thông tin</th><th>Chi tiết</th></tr></thead>
        <tbody>
          <tr><td>Tên chủ thể</td><td>Hợp tác xã Chanh Đào Lục Ngân</td></tr>
          <tr><td>Sản phẩm OCOP</td><td>Chanh đào Lục Ngân (4 sao), Thanh long ruột đỏ (3 sao)</td></tr>
          <tr><td>Năm thành lập</td><td>2018</td></tr>
          <tr><td>Số hộ gia đình thành viên</td><td>150 hộ</td></tr>
          <tr><td>Diện tích trồng</td><td>300 ha (chanh đào 200 ha, thanh long 100 ha)</td></tr>
          <tr><td>Chứng nhận</td><td>VietGAP (150 ha), GlobalG.A.P. (50 ha - đang triển khai)</td></tr>
          <tr><td>Mã cơ sở xuất khẩu Trung Quốc</td><td>Đăng ký 2023: CN-3300/2023 (chanh), CN-3301/2023 (thanh long)</td></tr>
        </tbody>
      </table>

      <h3>2. Hành trình xuất khẩu (2022-2024)</h3>
      <table>
        <thead><tr><th>Năm</th><th>Sản lượng (tấn)</th><th>Doanh thu (tỷ VNĐ)</th><th>Thị trường</th><th>Cửa khẩu</th></tr></thead>
        <tbody>
          <tr><td>2022 (Thử điểm)</td><td>50</td><td>4.5</td><td>Trung Quốc (Quảng Tây)</td><td>Móng Cái</td></tr>
          <tr><td>2023 (Chính thức)</td><td>280</td><td>25</td><td>Trung Quốc (Quảng Tây, Vân Nam, Quế Châu)</td><td>Móng Cái, Hữu Nghị</td></tr>
          <tr><td>2024 (Dự kiến)</td><td>500</td><td>45</td><td>Trung Quốc + ASEAN (Lào, Campuchia)</td><td>Móng Cái, Hữu Nghị, Lao Bảo</td></tr>
        </tbody>
      </table>

      <h3>3. 5 Yếu tố thành công chủ chốt</h3>
      <ol>
        <li><strong>Chuẩn bị kỹ l vùng nguyên liệu VietGAP:</strong> 150/300 ha đạt VietGAP, 50 ha đang chuyển đổi GlobalG.A.P. Có sổ nhật ký canh tác điện tử, truy xuất được từng lô hàng.</li>
        <li><strong>Đăng ký sớm mã cơ sở (Registration Code):</strong> Năm 2023 chủ động nộp hồ sơ đăng ký mã cơ sở tại Cục Chất lượng nông sản. Được cấp 2 mã: CN-3300 (chanh), CN-3301 (thanh long). Hiệu lực 5 năm.</li>
        <li><strong>Chứng từ gốc C/O Form E + Vận đơn直达:</strong> 100% lô hàng có C/O Form E do Bộ Công Thương cấp. Sử dụng xe container đường bộ直达 (direct consignment) từ vườn → cửa khẩu Móng Cái (400km, 8h) → Quảng Tây (2h). Thời gian tổng 10h, bảo quản tốt.</li>
        <li><strong>Kiểm dịch thực vật tại chỗ (On-site inspection):</strong> Hợp tác với Trạm Kiểm dịch thực vật Lục Ngân kiểm dịch tại vườn trước thu hoạch 3 ngày. Cấp Phytosanitary Certificate nhanh, giảm thời gian chờ tại cửa khẩu từ 2 ngày xuống 2h.</li>
        <li><strong>Kết nối buyer ổn định - Hợp đồng dài hạn:</strong> Ký hợp đồng 3 năm (2024-2026) với Công ty Thực phẩm X (Quảng Tây) - buyer cam kết thu mua 500 tấn/năm giá ổn định. Thanh toán L/C at sight 7 ngày.</li>
      </ol>

      <h3>4. Chi phí & Lợi nhuận (2024 ước tính)</h3>
      <table>
        <thead><tr><th>Khoản mục</th><th>Chi phí (VNĐ/kg)</th><th>Ghi chú</th></tr></thead>
        <tbody>
          <tr><td>Chi phí sản xuất (VietGAP)</td><td>18.000</td><td>Phân hữu cơ, thuốc sinh học, lao động, VietGAP audit</td></tr>
          <tr><td>Chi phí thu hoạch, bao bì, pre-cooling</td><td>3.000</td><td>Hộp carton 5kg, gel lạnh, pre-cooling 2h</td></tr>
          <tr><td>Vận chuyển vườn → Móng Cái (container 20ft)</td><td>2.500</td><td>400km, xe(container) chuyên dụng, GPS tracking</td></tr>
          <tr><td>Phí kiểm dịch, hải quan, C/O, logistics</td><td>1.500</td><td>Phytosanitary, C/O Form E, khai báo hải quan, code cửa khẩu</td></tr>
          <tr><td><strong>Tổng chi phí</strong></td><td><strong>25.000</strong></td><td></td></tr>
          <tr><td>Giá bán buyer (FOB Móng Cái)</td><td>45.000</td><td>Chanh đào loại 1: 45-50k; Thanh long: 55-60k</td></tr>
          <tr><td><strong>Lợi nhuận gộp/kg</strong></td><td><strong>20.000</strong></td><td><strong>Margin 44%</strong></td></tr>
        </tbody>
      </table>
      <p><strong>Doanh thu 2024:</strong> 500 tấn × 45.000 VNĐ/kg = 22.5 tỷ VNĐ (chanh) + 250 tấn × 55.000 = 13.75 tỷ VNĐ (thanh long) = <strong>36.25 tỷ VNĐ</strong> (thực tế 45 tỷ VNĐ bao gồm cả bán nội địa, chế biến).</p>

      <h3>5. Hỗ trợ chính sách đã nhận được</h3>
      <ul>
        <li>Hỗ trợ 50% chi phí audit VietGAP: 150 ha × 15 triệu = 2.25 tỷ VNĐ (nhận 1.125 tỷ)</li>
        <li>Hỗ trợ 100% chi phí đăng ký mã cơ sở xuất khẩu: 2 mã × 20 triệu = 40 triệu VNĐ</li>
        <li>Hỗ trợ 50% chi phí pre-cooling, cold storage: 500 triệu VNĐ</li>
        <li>Hỗ trợ 100% phí tham gia Hội chợ CAEXPO (Nanning) 2 năm: 300 triệu VNĐ</li>
        <li>Vay ưu đãi Quỹ phát triển OCOP: 5 tỷ VNĐ, lãi suất 0%, 5 năm (mở rộng 100 ha thanh long GlobalG.A.P.)</li>
      </ul>

      <h3>6. Kế hoạch 2025-2027</h3>
      <ol>
        <li>Hoàn thành GlobalG.A.P. cho 150 ha chanh đào, 100 ha thanh long (tháng 6/2025)</li>
        <li>Xây dựng nhà máy chế biến: Nước ép chanh, mứt chanh, thanh long sấy dữ (đầu tư 15 tỷ VNĐ)</li>
        <li>Đăng ký Madrid thương hiệu "Lục Ngân Premium" cho 10 quốc gia (Trung Quốc, Hàn, Nhật, EU, ASEAN)</li>
        <li>Triển khai EPC/RFID + GS1 Digital Link cho 100% sản phẩm xuất khẩu (chương trình OCOP Digital Passport)</li>
        <li>Mở rộng buyer: Nhật Bản (Yên bài), Hàn Quốc (Seoul), Singapore (FairPrice), EU (Metro, Edeka)</li>
        <li>Du lịch trải nghiệm: "Lục Ngân Fruit Tour" - thu hái, chế biến, check-in vườn VietGAP/GlobalG.A.P.</li>
      </ol>

      <h3>7. Bài học cho chủ thể OCOP khác</h3>
      <blockquote>
        "Không chờ buyer mới chuẩn bị. Chuẩn bị VietGAP, mã cơ sở, C/O, kiểm dịch TRƯỚC khi tìm buyer. Khi buyer đến, chỉ cần ký hợp đồng và giao hàng. Thời gian là vàng." - Bà Nguyễn Thị Lan, Giám đốc Hợp tác xã Chanh Đào Lục Ngân
      </blockquote>
      <ul>
        <li>Đầu tư hạ tầng VietGAP/GlobalG.A.P. từ ngày 1 (không phải bắt buộc mới làm)</li>
        <li>Đăng ký mã cơ sở xuất khẩu TRƯỚC mùa thu hoạch (xét duyệt 15 ngày)</li>
        <li>Xây dựng quan hệ buyer qua Hội chợ, Sở Công Thương, Cục Xúc tiến Thương mại</li>
        <li>Tận dụng tối đa chính sách hỗ trợ: VietGAP, mã cơ sở, cold chain, hội chợ, vay ưu đãi</li>
        <li>Sẵn sàng cho Digital Passport 2025: GS1 Prefix, GTIN, EPCIS, Blockchain</li>
      </ul>

      <p><strong>Liên hệ học hỏi:</strong> Hợp tác xã Chanh Đào Lục Ngân | Địa chỉ: xã Phong Vân, huyện Lục Ngân, Bắc Giang | Hotline: 0987 654 321 | Email: htchandao.lucngan@bacgiang.gov.vn</p>
    `,
    publishedDate: '2025-01-12T08:00:00Z',
    source: 'Sở Công Thương Bắc Giang & Hợp tác xã Chanh Đào Lục Ngân',
    tags: ['bắc giang', 'lục ngân', 'chanh đào', 'thanh long', 'xuất khẩu trung quốc', 'móng cái', 'vietgap', 'mã cơ sở', 'c/o form e', 'case study', 'ocop 4 sao'],
    seo: {
      metaTitle: 'OCOP Bắc Giang Lục Ngân: Xuất khẩu 500 tấn chanh đào/thanh long sang Trung Quốc | OCOP NOW',
      metaDescription: 'Case study Hợp tác xã Chanh Đào Lục Ngân (OCOP 4 sao): Xuất khẩu 500 tấn/năm chanh đào, thanh long qua cửa khẩu Móng Cái. VietGAP, mã cơ sở, C/O Form E, kiểm dịch tại chỗ. Doanh thu 45 tỷ VNĐ. Bài học cho OCOP khác.',
      metaKeywords: ['ocop bắc giang', 'lục ngân chanh đào', 'xuất khẩu trung quốc', 'cửa khẩu móng cái', 'vietgap ocop', 'mã cơ sở xuất khẩu', 'c/o form e', 'case study ocop', 'hợp tác xã chanh đào'],
      ogTitle: 'OCOP Bắc Giang: Xuất khẩu 500 tấn chanh đào/thanh long sang Trung Quốc',
      ogDescription: 'Case study thành công: Hợp tác xã Chanh Đào Lục Ngân (OCOP 4 sao) xuất khẩu 500 tấn/năm qua Móng Cái. VietGAP, mã cơ sở, C/O Form E. Doanh thu 45 tỷ VNĐ.',
      ogImage: '/images/ocop-now/bac-giang-luc-ngan-xuat-khau.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/ocop-hoi-nhap/bac-giang-luc-ngan-xuat-khau-trung-quoc',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'OCOP Bắc Giang - Lục Ngân: Thành công xuất khẩu chanh đào, thanh long qua cửa khẩu Móng Cái',
        datePublished: '2025-01-12T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Sở Công Thương Bắc Giang & Hợp tác xã Chanh Đào Lục Ngân' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    }
  },
  {
    id: 'ocop-now-6',
    slug: 'chuong-trinh-ocop-export-ready-2025-ho-tro-chuan-bi-xuat-khau',
    type: 'policy',
    headline: 'Chương trình "OCOP Export Ready 2025": Hỗ trợ toàn trình chuẩn bị xuất khẩu cho 500 chủ thể OCOP 3-4 sao',
    excerpt: 'Chương trình mới 2025 hỗ trợ 500 chủ thể OCOP 3-4 sao lên cấp 4-5 sao & xuất khẩu: Gap Assessment miễn phí, tư vấn HACCP/ISO, thử nghiệm mẫu, đăng ký TRACES, Madrid, Digital Passport. Đăng ký đến 31/03/2025.',
    content: `
      <h2>Chương trình "OCOP Export Ready 2025": Cầu nối OCOP 3-4 sao ra biển lớn</h2>
      <p>Tháng 1/2025, Cục Xúc tiến Thương mại (Bộ Công Thương) phối hợp với Viện Kiểm định Chất lượng (Quacert), GS1 Việt Nam, Viettel, VNPT, các tổ chức tư vấn uy tín khởi động Chương trình "OCOP Export Ready 2025" - hỗ trợ toàn trình cho 500 chủ thể OCOP 3-4 sao nâng cấp lên 4-5 sao và xuất khẩu.</p>

      <h3>1. Đối tượng tham gia</h3>
      <ul>
        <li>Chủ thể OCOP đạt 3 sao hoặc 4 sao (theo chứng nhận hiện hành)</li>
        <li>Có ý định xuất khẩu hoặc đã xuất khẩu thử điểm (< 1 tỷ VNĐ/năm)</li>
        <li>Cam kết đầu tư nâng cấp: HACCP/ISO 22000, VietGAP/GlobalG.A.P., thương hiệu, Digital Passport</li>
        <li>Ưu tiên: Nông sản, chế biến nông sản, thủ công mỹ nghệ, du lịch OCOP</li>
      </ul>

      <h3>2. Gói hỗ trợ toàn trình (End-to-end)</h3>
      <table>
        <thead><tr><th>Giai đoạn</th><th>Hoạt động</th><th>Hỗ trợ</th><th>Đối tác thực hiện</th></tr></thead>
        <tbody>
          <tr><td rowspan="3"><strong>1. Đánh giá & Lộ trình (Tháng 1-2)</strong></td><td>Gap Assessment: Thực trạng vs Yêu cầu xuất khẩu (HACCP, ISO, VietGAP, GlobalG.A.P., EUDR, FSMA, TRACES, Madrid, Digital Passport)</td><td>100% miễn phí (giá trị 30-50 triệu VNĐ)</td><td>Quacert, Bureau Veritas, SGS, TÜV, DNV, Tư vấn viên OCOP Export Ready</td></tr>
          <tr><td>Lập kế hoạch nâng cấp cá nhân hóa (Roadmap 12-18 tháng)</td><td>100% miễn phí</td><td>Tư vấn viên chuyên biệt</td></tr>
          <tr><td>Phân loại nhóm: Fast-track (6 tháng) / Standard (12 tháng) / Deep-dive (18 tháng)</td><td>100% miễn phí</td><td>Ban quản lý chương trình</td></tr>
          <tr><td rowspan="4"><strong>2. Xây dựng năng lực (Tháng 2-10)</strong></td><td>HACCP / ISO 22000 / FSSC 22000</td><td>50% chi phí, tối đa 150 triệu VNĐ</td><td>Quacert, BV, SGS, DNV, TÜV</td></tr>
          <tr><td>VietGAP / GlobalG.A.P. (vùng nguyên liệu)</td><td>50% chi phí audit, tối đa 100 triệu VNĐ (GlobalG.A.P.)</td><td>Cục Chất lượng NN, Quacert, Control Union</td></tr>
          <tr><td>Thương hiệu: Đăng ký Madrid, thiết kế bao bì, website đa ngôn ngữ</td><td>70% phí Madrid (tối đa 50 triệu), 50% thiết kế (tối đa 100 triệu)</td><td>Cục SHTT, GS1 Việt Nam, Agency thiết kế</td></tr>
          <tr><td>Digital Passport: GS1 Prefix, GTIN, EPC/RFID, Blockchain</td><td>70% thẻ EPC/RFID, 100% Gas fee 3 tháng, GS1 Prefix miễn phí</td><td>GS1 Việt Nam, Viettel, VNPT</td></tr>
          <tr><td rowspan="4"><strong>3. Thử nghiệm & Chứng nhận (Tháng 6-12)</strong></td><td>Thử nghiệm mẫu đầu ra (pesticide, heavy metal, micro, mycotoxin)</td><td>100% chi phí 20 mẫu/năm (giá trị 40-60 triệu VNĐ)</td><td>Viện Kiểm định, Viện Vệ sinh an toàn thực phẩm, ISO 17025 labs</td></tr>
          <tr><td>Đăng ký TRACES (EU), FDA Facility Registration (US), JAS (JP)</td><td>100% chi phí đăng ký, 70% chi phí tư vấn</td><td>Cục Chất lượng NN, Quacert, Tư vấn viên</td></tr>
          <tr><td>Audit chứng nhận: HACCP, ISO, VietGAP, GlobalG.A.P.</td><td>50% chi phí audit chứng nhận</td><td>Tổ chức chứng nhận được công nhận</td></tr>
          <tr><td>Chứng chỉ xuất khẩu: Health Cert, Phytosanitary, COA, C/O</td><td>Hỗ trợ thủ tục, mẫu chứng từ, hướng dẫn</td><td>Cục Chất lượng NN, Hải quan, Bộ Công Thương</td></tr>
          <tr><td rowspan="4"><strong>4. Kết nối thị trường & Xuất khẩu (Tháng 8-18)</strong></td><td>Tham gia Hội chợ, Trade mission (Anuga, SIAL, Foodex, THAIFEX, CAEXPO, VIETNAM EXPO)</td><td>100% gian hàng + vé máy bay 2 người (tối đa 3 lần/năm)</td><td>Cục Xúc tiến TM, VCCI, Hội doanh nghiệp</td></tr>
          <tr><td>B2B Matchmaking: Kết nối buyer đã qua screening (cam kết mua/LOI)</td><td>Miễn phí platform, matching, meeting room, thông dịch</td><td>Platform "OCOP Connect", Cục Xúc tiến TM</td></tr>
          <tr><td>Kênh D2C Cross-border: Amazon, Shopee Mall, TikTok Shop, Tmall Global, Lazada Global</td><td>70% chi phí setup + marketing năm 1 (tối đa 500 triệu)</td><td>Đối tác EC được ủy quyền, Agency marketing</td></tr>
          <tr><td>Logistics & Thanh toán: Hợp đồng vận chuyển, L/C, T/T, bảo hiểm hàng hóa</td><td>Tư vấn miễn phí, giới thiệu đối tác logistics, ngân hàng</td><td>Vietnam Airlines, Viettel Post, VNPT Logistics, Vietcombank, BIDV, VCBS</td></tr>
        </tbody>
      </table>

      <h3>3. 3 Nhóm lộ trình (Roadmap) tùy chỉnh</h3>
      <table>
        <thead><tr><th>Nhóm</th><th>Đặc điểm</th><th>Thời gian</th><th>Hỗ trợ tập trung</th></tr></thead>
        <tbody>
          <tr><td><strong>Fast-track</strong> (6 tháng)</td><td>Đã có HACCP/ISO, VietGAP, cần: Madrid, TRACES, Digital Passport, buyer</td><td>Tháng 1-6/2025</td><td>Thương hiệu, Digital Passport, Kết nối buyer, Hội chợ</td></tr>
          <tr><td><strong>Standard</strong> (12 tháng)</td><td>Có VietGAP, cần: HACCP/ISO, GlobalG.A.P. (một phần), Madrid, Digital Passport</td><td>Tháng 1-12/2025</td><td>HACCP/ISO, GlobalG.A.P., Thương hiệu, Digital Passport, Thử nghiệm</td></tr>
          <tr><td><strong>Deep-dive</strong> (18 tháng)</td><td>Chỉ có OCOP 3 sao, cần: VietGAP → GlobalG.A.P., HACCP/ISO, Thương hiệu, Digital Passport từ zero</td><td>Tháng 1/2025 - 6/2026</td><td>Toàn bộ: Vùng nguyên liệu, Hệ thống quản lý, Thương hiệu, Digital, Buyer</td></tr>
        </tbody>
      </table>

      <h3>4. Cam kết kết quả (KPIs) cho chủ thể tham gia</h3>
      <ul>
        <li><strong>100%</strong> có Roadmap xuất khẩu cá nhân hóa (tháng 2)</li>
        <li><strong>80%</strong> hoàn thành ít nhất 1 chứng nhận quốc tế (HACCP/ISO/GlobalG.A.P.) (tháng 12)</li>
        <li><strong>60%</strong> có đăng ký Madrid / GS1 Prefix / Digital Passport (tháng 12)</li>
        <li><strong>40%</strong> ký được LOI/PO/hợp đồng xuất khẩu với buyer quốc tế (tháng 18)</li>
        <li><strong>25%</strong> đạt doanh thu xuất khẩu ≥ 1 tỷ VNĐ/năm (tháng 18)</li>
      </ul>

      <h3>5. Đội ngũ chuyên gia hỗ trợ (Pool of Experts)</h3>
      <ul>
        <li>20 Chuyên gia HACCP/ISO 22000/FSSC 22000 (Quacert, BV, SGS, DNV, TÜV)</li>
        <li>15 Chuyên gia VietGAP/GlobalG.A.P. (Cục Chất lượng NN, Control Union, Fresh Studio)</li>
        <li>10 Chuyên gia Sở hữu trí tuệ / Madrid / Thương hiệu (Cục SHTT, Đại lý SHTT)</li>
        <li>10 Chuyên gia Digital Traceability / GS1 / Blockchain (GS1 VN, Viettel, VNPT)</li>
        <li>10 Chuyên gia Thị trường / Buyer engagement / Logistics (Cục Xúc tiến TM, VCCI)</li>
        <li>5 Chuyên gia Tài chính / Quỹ phát triển / Vay ưu đãi (Bộ KH&ĐT, Ngân hàng)</li>
      </ul>

      <h3>6. Đăng ký tham gia</h3>
      <p><strong>Hạn đăng ký: 31/03/2025</strong> (hoặc khi đủ 500 chủ thể)</p>
      <p>Cách đăng ký:</p>
      <ol>
        <li>Truy cập: <strong>https://ocopvietnam.vn/export-ready</strong></li>
        <li>Điền form trực tuyến: Thông tin chủ thể, sản phẩm OCOP, mục tiêu xuất khẩu, cam kết đầu tư</li>
        <li>Tải lên: Chứng nhận OCOP, Giấy phép kinh doanh, Báo cáo tài chính 2 năm, Kế hoạch xuất khẩu sơ bộ</li>
        <li>Nhận xác nhận: Mã đăng ký, Tư vấn viên phụ trách, Lịch Gap Assessment (trong 7 ngày)</li>
      </ol>
      <p><strong>Hotline đăng ký:</strong> 1900 636 889 (phím 5) | Email: exportready@moit.gov.vn</p>
      <p><strong>Hỏi đáp thường gặp (FAQ):</strong> https://ocopvietnam.vn/export-ready/faq</p>

      <h3>7. Kết hợp với các chương trình khác</h3>
      <p>Chủ thể tham gia "OCOP Export Ready" <strong>được ưu tiên</strong> cho:</p>
      <ul>
        <li>Chương trình "OCOP Digital Passport 2025" (hỗ trợ 70% EPC/RFID, 100% gas fee)</li>
        <li>Quỹ phát triển OCOP: Vay ưu đãi 0% lãi suất, tối đa 10 tỷ VNĐ (nâng cấp hạ tầng, máy móc)</li>
        <li>Chương trình "Thương hiệu Quốc gia OCOP" (hỗ trợ 2 tỷ VNĐ xây dựng thương hiệu)</li>
        <li>Hỗ trợ 50% chi phí tham gia Triển lãm Quốc tế (Anuga, SIAL, Foodex, THAIFEX)</li>
        <li>Chương trình "Du lịch OCOP" (hỗ trợ vay ưu đãi homestay, trung tâm trải nghiệm)</li>
      </ul>
    `,
    publishedDate: '2025-01-15T08:00:00Z',
    source: 'Cục Xúc tiến Thương mại - Bộ Công Thương',
    tags: ['ocop export ready', 'hỗ trợ xuất khẩu', 'ocop 3-4 sao', 'nâng cấp 4-5 sao', 'haccp', 'iso 22000', 'globalgap', 'madrid', 'digital passport', 'traces', '500 chủ thể'],
    seo: {
      metaTitle: 'OCOP Export Ready 2025: Hỗ trợ toàn trình 500 chủ thể OCOP 3-4 sao xuất khẩu | OCOP NOW',
      metaDescription: 'Chương trình OCOP Export Ready 2025: Hỗ trợ 500 chủ thể OCOP 3-4 sao nâng cấp 4-5 sao & xuất khẩu. Gap Assessment miễn phí, 50% HACCP/ISO, 70% Madrid, 100% thử nghiệm, Digital Passport. Đăng ký đến 31/03/2025.',
      metaKeywords: ['ocop export ready', 'hỗ trợ xuất khẩu ocop', 'ocop 3 sao lên 4 sao', 'nâng cấp ocop 5 sao', 'gap assessment miễn phí', 'haccp ocop', 'globalgap ocop', 'madrid ocop', 'digital passport ocop'],
      ogTitle: 'OCOP Export Ready 2025: Hỗ trợ 500 chủ thể OCOP 3-4 sao xuất khẩu',
      ogDescription: 'Toàn trình: Gap Assessment miễn phí, 50% HACCP/ISO, 70% Madrid, 100% thử nghiệm, Digital Passport, kết nối buyer. Đăng ký 31/03/2025.',
      ogImage: '/images/ocop-now/export-ready-2025.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/ocop-hoi-nhap/ocop-export-ready-2025',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Chương trình "OCOP Export Ready 2025": Hỗ trợ toàn trình chuẩn bị xuất khẩu cho 500 chủ thể OCOP 3-4 sao',
        datePublished: '2025-01-15T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Cục Xúc tiến Thương mại - Bộ Công Thương' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    }
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Pagination params
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  // Filter params
  const type = searchParams.get('type');
  const search = searchParams.get('search');
  
  // Apply filters
  let filtered = [...ocopNowData];
  
  if (type) {
    filtered = filtered.filter(item => item.type === type);
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(item => 
      item.headline.toLowerCase().includes(searchLower) ||
      item.excerpt.toLowerCase().includes(searchLower) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }
  
  // Sort by publishedDate descending (newest first)
  filtered.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  
  // Pagination
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = filtered.slice(start, end);
  
  const response: PaginatedResponse<OCOPNowItem> = {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  };
  
  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    }
  });
}