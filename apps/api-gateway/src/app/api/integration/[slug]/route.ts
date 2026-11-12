// API Route: /api/integration/[slug]
// Returns a single integration article by slug

import { NextRequest, NextResponse } from 'next/server';
import { IntegrationArticle, SEOData } from '@ocop/shared-types';

const createSEO = (headline: string, excerpt: string, image?: string): SEOData => ({
  metaTitle: `${headline} | OCOP Hội nhập`,
  metaDescription: excerpt,
  ogTitle: headline,
  ogDescription: excerpt,
  ogImage: image,
  ogType: 'article',
  twitterCard: 'summary_large_image',
});

// Mock integration articles data - same as list endpoint
const integrationArticlesData: IntegrationArticle[] = [
  {
    id: 'integration-1',
    slug: 'ocop-xuat-khau-sang-trung-quoc-thong-quan-hai-quan',
    category: 'Xuất khẩu & Thị trường quốc tế',
    headline: 'Xuất khẩu OCOP sang Trung Quốc: Quy trình hải quan mới 2025',
    excerpt: 'Cập nhật quy trình khai báo hải quan, chứng từ gốc, kiểm dịch thực vật cho hàng hóa OCOP xuất khẩu sang thị trường Trung Quốc theo Nghị định 248/2024/NĐ-CP.',
    content: `
      <h2>Xuất khẩu OCOP sang Trung Quốc: Quy trình hải quan mới 2025</h2>
      <p>Từ 01/01/2025, Nghị định 248/2024/NĐ-CP quy định mới về quản lý hải quan áp dụng cho hàng hóa xuất nhập khẩu, trong đó có nhiều thay đổi quan trọng trực tiếp ảnh hưởng đến chủ thể OCOP xuất khẩu sang Trung Quốc.</p>
      
      <h3>1. Thay đổi chính về khai báo hải quan</h3>
      <ul>
        <li><strong>Bắt buộc khai báo điện tử:</strong> 100% tờ khai hải quan phải nộp qua hệ thống VNACCS/VCIS trước khi hàng hóa đến cửa khẩu.</li>
        <li><strong>Mã HS 8 số bắt buộc:</strong> Phân loại mã HS chi tiết đến 8 số (thay vì 6 số như cũ) để xác định chính xác thuế suất, quy trình kiểm dịch.</li>
        <li><strong>Khai báo trước (Pre-declaration):</strong> Cho phép khai báo trước 30 ngày khi chưa có đầy đủ chứng từ, bổ sung sau khi có chứng từ gốc.</li>
      </ul>
      
      <h3>2. Chứng từ gốc (C/O) form E - ASEAN-China FTA</h3>
      <p>Để hưởng thuế ưu đãi FTA ASEAN-Trung Quốc, sản phẩm OCOP cần:</p>
      <ul>
        <li>C/O form E do Bộ Công Thương cấp (hoặc đơn vị được ủy quyền)</li>
        <li>Quy tắc gốc: Wholly obtained hoặc RVC ≥ 40% hoặc CTHS ở cấp 4 chữ số</li>
        <li>Chứng từ vận đơn trực tiếp (direct consignment) hoặc qua cảng trung chuyển có chứng từ không buôn bán</li>
        <li><strong>Mới 2025:</strong> C/O điện tử (e-Form E) được chấp nhận tại 15 cửa khẩu Trung Quốc (thử điểm)</li>
      </ul>
      
      <h3>3. Kiểm dịch thực vật - Thông tư 24/2024/TT-BNNPTNT</h3>
      <table>
        <thead><tr><th>Nhóm sản phẩm</th><th>Yêu cầu kiểm dịch</th><th>Chứng từ</th><th>Thời gian</th></tr></thead>
        <tbody>
          <tr><td>Nông sản tươi (trái cây, rau củ)</td><td>Kiểm dịch tại chỗ trồng + tại cửa khẩu</td><td>Phytosanitary Certificate</td><td>7-10 ngày</td></tr>
          <tr><td>Nông sản chế biến (sấy, ép, mứt)</td><td>Kiểm tra chứng từ HACCP/ISO 22000</td><td>Health Certificate + COA</td><td>3-5 ngày</td></tr>
          <tr><td>Gạo, ngũ cốc</td><td>Kiểm tra nấm mốc, dư lượng thuốc bảo vệ thực vật, kim loại nặng</td><td>Phytosanitary + Test Report</td><td>5-7 ngày</td></tr>
          <tr><td>Cà phê, hồ tiêu</td><td>Kiểm tra Ochratoxin A, caffeine</td><td>Health Certificate + COA</td><td>3-5 ngày</td></tr>
        </tbody>
      </table>
      
      <h3>4. Đăng ký cơ sở sản xuất (Registration Code) - Công văn 1234/BNN-TY</h3>
      <p>Từ 2025, cơ sở sản xuất OCOP xuất khẩu nông sản sang Trung Quốc <strong>bắt buộc đăng ký mã cơ sở</strong> tại Cục Chất lượng nông sản trước khi xuất khẩu. Quy trình:</p>
      <ol>
        <li>Nộp hồ sơ đăng ký (Giấy phép kinh doanh, Chứng nhận OCOP, HACCP/ISO, Sơ đồ nhà xưởng)</li>
        <li>Cục Chất lượng nông sản thẩm định 15 ngày</li>
        <li>Cấp mã cơ sở (Registration Code) - hiệu lực 5 năm</li>
        <li>Cập nhật thay đổi (nếu có) trong 10 ngày</li>
      </ol>
      
      <h3>5. Cửa khẩu khuyến nghị cho OCOP</h3>
      <ul>
        <li><strong>Hữu Nghị (Lạng Sơn):</strong> Phù hợp nông sản tươi, thời gian thông quan nhanh</li>
        <li><strong>Lào Cai (Lào Cai):</strong> Chuyên ngũ cốc, cà phê, đường bộ ngắn</li>
        <li><strong>Móng Cái (Quảng Ninh):</strong> Hàng hóa giá trị cao, đường bộ + đường biển</li>
        <li><strong>Cửa khẩu đường biển (Hải Phòng, Cái Mép):</strong> Hàng container, số lượng lớn</li>
      </ul>
      
      <h3>6. Chi phí ước tính (VNĐ/kg)</h3>
      <table>
        <thead><tr><th>Khoản chi phí</th><th>Nông sản tươi</th><th>Chế biến</th></tr></thead>
        <tbody>
          <tr><td>Thuế nhập khẩu (sau C/O form E)</td><td>0-5%</td><td>0-10%</td></tr>
          <tr><td>Thuế GTGT nhập khẩu</td><td>5%</td><td>5%</td></tr>
          <tr><td>Phí kiểm dịch</td><td>500-2.000</td><td>300-1.000</td></tr>
          <tr><td>Phí khai báo hải quan</td><td>200-500</td><td>200-500</td></tr>
          <tr><td>Vận chuyển đến cửa khẩu</td><td>1.000-3.000</td><td>800-2.000</td></tr>
        </tbody>
      </table>
      
      <h3>7. Hỗ trợ cho chủ thể OCOP 4-5 sao</h3>
      <ul>
        <li>Hỗ trợ 50% chi phí audit HACCP/ISO 22000 (tối đa 50 triệu VNĐ)</li>
        <li>Hỗ trợ 100% chi phí đăng ký mã cơ sở xuất khẩu</li>
        <li>Tư vấn miễn phí quy trình qua Hotline 1900 636 889</li>
        <li>Ứng dụng "OCOP Export Assistant" tra cứu mã HS, thuế suất, quy trình</li>
      </ul>
      
      <p><strong>Liên hệ hỗ trợ:</strong> Cục Xúc tiến Thương mại - Bộ Công Thương | Hotline: 1900 636 889 | Email: xuatkhauocop@moit.gov.vn</p>
    `,
    author: 'Cục Xúc tiến Thương mại - Bộ Công Thương',
    authorRole: 'Chuyên gia chính sách thương mại',
    date: '2025-01-15T08:00:00Z',
    readTime: '15 phút',
    image: '/images/integration/customs-procedure.jpg',
    tags: ['hải quan', 'trung quốc', 'xuất khẩu', 'nghị định 248', 'chứng từ gốc', 'kiểm dịch'],
    seo: createSEO(
      'Xuất khẩu OCOP sang Trung Quốc: Quy trình hải quan mới 2025',
      'Cập nhật quy trình khai báo hải quan, chứng từ gốc, kiểm dịch thực vật cho hàng hóa OCOP xuất khẩu sang thị trường Trung Quốc theo Nghị định 248/2024/NĐ-CP.',
      '/images/integration/customs-procedure.jpg'
    ),
  },
  {
    id: 'integration-2',
    slug: 'chuan-chi-tieu-ocop-vietgap-globalgap',
    category: 'Tiêu chuẩn & Chứng nhận',
    headline: 'Tiêu chuẩn OCOP, VietGAP, GlobalGAP: So sánh và lộ trình nâng cấp',
    excerpt: 'Phân tích chi tiết sự khác biệt giữa 3 hệ tiêu chuẩn chất lượng nông sản, lộ trình chuyển đổi từ OCOP lên VietGAP và GlobalGAP để tiếp cận thị trường xuất khẩu khó tính.',
    content: `
      <h2>Tiêu chuẩn OCOP, VietGAP, GlobalGAP: So sánh và lộ trình nâng cấp</h2>
      <p>Hiểu rõ sự khác biệt giữa các tiêu chuẩn giúp doanh nghiệp OCOP lập kế hoạch nâng cấp chất lượng đúng đắn, tiết kiệm chi phí và thời gian.</p>
      
      <h3>Bảng so sánh 3 tiêu chuẩn</h3>
      <table>
        <tr><th>Tiêu chí</th><th>OCOP</th><th>VietGAP</th><th>GlobalGAP</th></tr>
        <tr><td>Phạm vi</td><td>Toàn quốc gia VN</td><td>Toàn quốc gia VN</td><td>Quốc tế</td></tr>
        <tr><td>Yêu cầu tài liệu</td><td>Cơ bản</td><td>Chi tiết</td><td>Rất chi tiết</td></tr>
        <tr><td>Thẩm định</td><td>Sở NN&PTNT</td><td>Tổ chức đượcunjuk</td><td>Tổ chức chứng nhận quốc tế</td></tr>
        <tr><td>Chi phí</td><td>Thấp</td><td>Trung bình</td><td>Cao</td></tr>
      </table>
      
      <h3>Lộ trình nâng cấp khuyến nghị</h3>
      <ol>
        <li>Năm 1: Đạt OCOP 3-4 sao</li>
        <li>Năm 2: Chuyển đổi sang VietGAP</li>
        <li>Năm 3-4: Xây dựng hệ thống quản lý theo GlobalGAP</li>
        <li>Năm 5: Đạt chứng nhận GlobalGAP</li>
      </ol>
    `,
    author: 'Viện Khoa học Nông nghiệp Việt Nam',
    authorRole: 'Chuyên gia tiêu chuẩn hóa',
    date: '2025-01-10T09:30:00Z',
    readTime: '12 phút',
    image: '/images/integration/standards-comparison.jpg',
    tags: ['vietgap', 'globalgap', 'tiêu chuẩn', 'chứng nhận', 'nâng cấp chất lượng'],
    seo: createSEO(
      'Tiêu chuẩn OCOP, VietGAP, GlobalGAP: So sánh và lộ trình nâng cấp',
      'Phân tích chi tiết sự khác biệt giữa 3 hệ tiêu chuẩn chất lượng nông sản, lộ trình chuyển đổi từ OCOP lên VietGAP và GlobalGAP.',
      '/images/integration/standards-comparison.jpg'
    ),
  },
  {
    id: 'integration-3',
    slug: 'chuyen-doi-so-cho-hang-nghiep-o-cop',
    category: 'Chuyển đổi số',
    headline: 'Chuyển đổi số cho hàng nghề OCOP: Từ truyền thống sang thương mại điện tử',
    excerpt: 'Hướng dẫn từng bước xây dựng kênh bán hàng online, marketing số, và quản lý đơn hàng cho các hợp tác xã, doanh nghiệp OCOP quy mô nhỏ và vừa.',
    content: `
      <h2>Chuyển đổi số cho hàng nghề OCOP</h2>
      <p>Chuyển đổi số không còn là lựa chọn mà là yêu cầu bắt buộc để sản phẩm OCOP tiếp cận được khách hàng toàn quốc và quốc tế.</p>
      
      <h3>3 trụ cột chuyển đổi số</h3>
      <ul>
        <li><strong>Nền tảng bán hàng:</strong> Sàn TMĐT (Shopee, TikTok Shop, Tiki), Website riêng, Zalo OA</li>
        <li><strong>Marketing số:</strong> Content marketing, Seeding, KOL/KOC, Livestream bán hàng</li>
        <li><strong>Quản trị vận hành:</strong> ERP nhẹ, CRM, Quản lý kho, Vận chuyển</li>
      </ul>
      
      <h3>Gói hỗ trợ từ Chính phủ</h3>
      <p>Chương trình "Chuyển đổi số nông nghiệp và phát triển nông thôn" cấp hỗ trợ 50% chi phí phần mềm, đào tạo nhân sự cho hợp tác xã OCOP.</p>
    `,
    author: 'Trung tâm Phát triển Công nghệ Thông tin - Bộ Nông nghiệp',
    authorRole: 'Trưởng phòng Chuyển đổi số',
    date: '2025-01-05T10:00:00Z',
    readTime: '10 phút',
    image: '/images/integration/digital-transformation.jpg',
    tags: ['chuyển đổi số', 'thương mại điện tử', 'marketing online', 'erp', 'hợp tác xã'],
    seo: createSEO(
      'Chuyển đổi số cho hàng nghề OCOP: Từ truyền thống sang thương mại điện tử',
      'Hướng dẫn từng bước xây dựng kênh bán hàng online, marketing số, và quản lý đơn hàng cho các hợp tác xã, doanh nghiệp OCOP.',
      '/images/integration/digital-transformation.jpg'
    ),
  },
  {
    id: 'integration-4',
    slug: 'ocop-now-ung-dung-quoc-gia-quan-ly-treo-cap',
    category: 'OCOP NOW',
    headline: 'OCOP NOW: Ứng dụng quốc gia quản lý, truy xuất, cấp chứng chỉ OCOP',
    excerpt: 'Giới thiệu hệ thống OCOP NOW - nền tảng số tập trung quản lý hồ sơ, cấp chứng chỉ, truy xuất nguồn gốc sản phẩm OCOP trên toàn quốc.',
    content: `
      <h2>OCOP NOW: Ứng dụng quốc gia quản lý, truy xuất, cấp chứng chỉ OCOP</h2>
      <p>Hệ thống OCOP NOW được Bộ Công Thương triển khai từ năm 2023, nhằm số hóa toàn bộ quy trình cấp chứng chỉ OCOP và truy xuất nguồn gốc.</p>
      
      <h3>Tính năng chính</h3>
      <ul>
        <li>Đăng ký, nộp hồ sơ cấp chứng chỉ OCOP trực tuyến</li>
        <li>Theo dõi trạng thái xử lý hồ sơ real-time</li>
        <li>Tra cứu chứng chỉ OCOP bằng mã QR trên bao bì</li>
        <li>Quản lý danh mục sản phẩm OCOP quốc gia</li>
        <li>Báo cáo, thống kê tự động cho các cấp quản lý</li>
      </ul>
      
      <h3>Lợi ích cho doanh nghiệp</h3>
      <p>Giảm 70% thời gian nộp hồ sơ, giảm 50% chi phí hành chính, minh bạch hóa quy trình thẩm định.</p>
    `,
    author: 'Bộ Công Thương - Cục Xúc tiến Thương mại',
    authorRole: 'Điều phối viên dự án OCOP NOW',
    date: '2025-01-01T08:00:00Z',
    readTime: '6 phút',
    image: '/images/integration/ocop-now-platform.jpg',
    tags: ['ocop now', 'ứng dụng quốc gia', 'số hóa', 'truy xuất nguồn gốc', 'cấp chứng chỉ'],
    seo: createSEO(
      'OCOP NOW: Ứng dụng quốc gia quản lý, truy xuất, cấp chứng chỉ OCOP',
      'Giới thiệu hệ thống OCOP NOW - nền tảng số tập trung quản lý hồ sơ, cấp chứng chỉ, truy xuất nguồn gốc sản phẩm OCOP trên toàn quốc.',
      '/images/integration/ocop-now-platform.jpg'
    ),
  },
  {
    id: 'integration-5',
    slug: 'xuat-khau-nong-san-ocop-sang-chau-au-yeu-cau-moi',
    category: 'Xuất khẩu & Thị trường quốc tế',
    headline: 'Xuất khẩu nông sản OCOP sang Châu Âu: Yêu cầu mới về CSDDD và EUDR',
    excerpt: 'Phân tích Luật chống phá rừng (EUDR) và Chỉ thị Sorgfaltspflicht (CSDDD) của EU tác động như thế nào đến chuỗi cung ứng OCOP xuất khẩu sang thị trường Châu Âu.',
    content: `
      <h2>Xuất khẩu nông sản OCOP sang Châu Âu: Yêu cầu mới về CSDDD và EUDR</h2>
      <p>Từ 30/12/2024, Luật chống phá rừng EU (EUDR) chính thức có hiệu lực, yêu cầu doanh nghiệp chứng minh hàng hóa không gây phá rừng.</p>
      
      <h3>Yêu cầu chính của EUDR</h3>
      <ul>
        <li>Tọa độ GPS của lô đất trồng (polygon cho lô > 4ha)</li>
        <li>Chứng minh không chuyển đổi mục đích sử dụng đất sau 31/12/2020</li>
        <li>Khai báo due diligence qua hệ thống EU Information System</li>
      </ul>
      
      <h3>CSDDD - Chỉ thị chăm sóc đúng đắn</h3>
      <p>Áp dụng từ 2027 cho doanh nghiệp > 1000 nhân viên, doanh thu > 450 triệu EUR. Yêu cầu xác định, ngăn chặn, khắc phục tác động tiêu cực đến nhân quyền và môi trường.</p>
      
      <h3>Hành động cho OCOP Việt Nam</h3>
      <ol>
        <li>Xây dựng bản đồ số vùng nguyên liệu (GIS mapping)</li>
        <li>Hợp tác với đơn vị xác thực thứ 3 (Control Union, SGS, Bureau Veritas)</li>
        <li>Áp dụng blockchain cho truy xuất nguồn gốc</li>
      </ol>
    `,
    author: 'Cục Xúc tiến Thương mại - Bộ Công Thương',
    authorRole: 'Chuyên gia thị trường EU',
    date: '2024-12-20T14:00:00Z',
    readTime: '15 phút',
    image: '/images/integration/eu-requirements.jpg',
    tags: ['eu', 'eudr', 'csddd', 'xuất khẩu châu âu', 'phá rừng', 'truy xuất nguồn gốc'],
    seo: createSEO(
      'Xuất khẩu nông sản OCOP sang Châu Âu: Yêu cầu mới về CSDDD và EUDR',
      'Phân tích Luật chống phá rừng (EUDR) và Chỉ thị Sorgfaltspflicht (CSDDD) của EU tác động đến chuỗi cung ứng OCOP xuất khẩu sang Châu Âu.',
      '/images/integration/eu-requirements.jpg'
    ),
  },
];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = integrationArticlesData.find(a => a.slug === slug);

  if (!article) {
    return NextResponse.json(
      { error: 'Integration article not found', slug },
      { status: 404 }
    );
  }

  return NextResponse.json(article, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    }
  });
}