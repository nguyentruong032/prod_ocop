// API Route: /api/integration
// Returns paginated list of integration/export articles with filtering

import { NextRequest, NextResponse } from 'next/server';
import { IntegrationArticle, PaginatedResponse, SEOData } from '@ocop/shared-types';

const createSEO = (headline: string, excerpt: string): SEOData => ({
  metaTitle: `${headline} | OCOP Hội nhập`,
  metaDescription: excerpt,
  ogTitle: headline,
  ogDescription: excerpt,
  ogType: 'article',
  twitterCard: 'summary_large_image',
});

// Mock integration articles data
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
        <li>Bắt buộc khai báo điện tử qua hệ thống VNACCS/VCIS</li>
        <li>Mã HS code phải chính xác theo danh mục mới</li>
        <li>Chứng từ gốc C/O form E có hiệu lực 12 tháng</li>
      </ul>
      
      <h3>2. Quy trình kiểm dịch thực vật</h3>
      <p>Hàng nông sản OCOP cần chứng nhận kiểm dịch thực vật do Cục Kiểm dịch thực vật cấp. Thời gian xử lý: 3-5 ngày làm việc.</p>
    `,
    author: 'Cục Xúc tiến Thương mại - Bộ Công Thương',
    authorRole: 'Chuyên gia chính sách thương mại',
    date: '2025-01-15T08:00:00Z',
    readTime: '8 phút',
    image: '/images/integration/customs-procedure.jpg',
    tags: ['hải quan', 'trung quốc', 'xuất khẩu', 'nghị định 248', 'chứng từ gốc', 'kiểm dịch'],
    seo: createSEO(
      'Xuất khẩu OCOP sang Trung Quốc: Quy trình hải quan mới 2025',
      'Cập nhật quy trình khai báo hải quan, chứng từ gốc, kiểm dịch thực vật cho hàng hóa OCOP xuất khẩu sang thị trường Trung Quốc theo Nghị định 248/2024/NĐ-CP.'
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
      'Phân tích chi tiết sự khác biệt giữa 3 hệ tiêu chuẩn chất lượng nông sản, lộ trình chuyển đổi từ OCOP lên VietGAP và GlobalGAP.'
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
      'Hướng dẫn từng bước xây dựng kênh bán hàng online, marketing số, và quản lý đơn hàng cho các hợp tác xã, doanh nghiệp OCOP.'
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
      'Giới thiệu hệ thống OCOP NOW - nền tảng số tập trung quản lý hồ sơ, cấp chứng chỉ, truy xuất nguồn gốc sản phẩm OCOP trên toàn quốc.'
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
      'Phân tích Luật chống phá rừng (EUDR) và Chỉ thị Sorgfaltspflicht (CSDDD) của EU tác động đến chuỗi cung ứng OCOP xuất khẩu sang Châu Âu.'
    ),
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  let filtered = [...integrationArticlesData];

  if (category) {
    filtered = filtered.filter(item => item.category === category);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      item =>
        item.headline.toLowerCase().includes(searchLower) ||
        item.excerpt.toLowerCase().includes(searchLower) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  // Sort by date descending
  filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const data = filtered.slice(start, start + limit);

  const response: PaginatedResponse<IntegrationArticle> = {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };

  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  });
}hứng từ gốc C/O form E, kiểm dịch thực vật cho sản phẩm OCOP xuất khẩu sang Trung Quốc theo quy định mới 2025.',
      metaKeywords: ['xuất khẩu ocop trung quốc', 'hải quan 2025', 'chứng từ gốc form e', 'kiểm dịch thực vật', 'nghị định 248'],
      ogTitle: 'Xuất khẩu OCOP sang Trung Quốc: Quy trình hải quan mới 2025',
      ogDescription: 'Cập nhật quy trình khai báo hải quan, chứng từ gốc, kiểm dịch cho OCOP xuất khẩu sang Trung Quốc.',
      ogImage: '/images/integration/xuat-khau-trung-quoc-hai-quan.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/hoi-nhap/xuat-khau-trung-quoc-hai-quan-moi-2025',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Xuất khẩu OCOP sang Trung Quốc: Quy trình hải quan mới 2025',
        datePublished: '2025-01-15T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Cục Xúc tiến Thương mại - Bộ Công Thương' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    },
    createdAt: '2025-01-10T08:00:00Z',
    updatedAt: '2025-01-15T08:00:00Z'
  },
  {
    id: 'integration-2',
    slug: 'ky-tuc-chuan-bi-ho-so-xuat-khau-ocop-chuan-eu',
    title: 'Kỹ thuật chuẩn bị hồ sơ xuất khẩu OCOP chuẩn EU - HACCP, ISO 22000',
    summary: 'Hướng dẫn từng bước xây dựng hồ sơ HACCP, ISO 22000, FSSC 22000 cho sản phẩm OCOP nhằm đáp ứng tiêu chuẩn an toàn thực phẩm EU (EC 852/2004, EC 853/2004).',
    category: 'standards',
    publishedAt: '2025-01-10T08:00:00Z',
    author: 'Viện Kiểm định Chất lượng Việt Nam (Quacert)',
    tags: ['haccp', 'iso 22000', 'fssc 22000', 'eu', 'an toàn thực phẩm', 'hồ sơ xuất khẩu', 'chứng nhận'],
    seo: {
      metaTitle: 'Chuẩn bị hồ sơ xuất khẩu OCOP chuẩn EU: HACCP, ISO 22000, FSSC 22000 | OCOP Hội nhập',
      metaDescription: 'Hướng dẫn chi tiết xây dựng hồ sơ HACCP, ISO 22000, FSSC 22000 cho sản phẩm OCOP xuất khẩu EU. Quy trình, chi phí, thời gian, đơn vị tư vấn uy tín.',
      metaKeywords: ['haccp ocop', 'iso 22000 xuất khẩu', 'fssc 22000', 'chuẩn eu', 'an toàn thực phẩm ocop', 'hồ sơ xuất khẩu'],
      ogTitle: 'Kỹ thuật chuẩn bị hồ sơ xuất khẩu OCOP chuẩn EU - HACCP, ISO 22000',
      ogDescription: 'Hướng dẫn từng bước xây dựng hồ sơ HACCP, ISO 22000, FSSC 22000 cho OCOP xuất khẩu EU.',
      ogImage: '/images/integration/ho-so-xuat-khau-chuan-eu.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/hoi-nhap/ho-so-xuat-khau-chuan-eu-haccp-iso',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Kỹ thuật chuẩn bị hồ sơ xuất khẩu OCOP chuẩn EU - HACCP, ISO 22000',
        datePublished: '2025-01-10T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Viện Kiểm định Chất lượng Việt Nam (Quacert)' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    },
    createdAt: '2025-01-05T08:00:00Z',
    updatedAt: '2025-01-10T08:00:00Z'
  },
  {
    id: 'integration-3',
    slug: 'dang-ky-bao-ho-thuong-hieu-ocop-quoc-te-madrid',
    title: 'Đăng ký bảo hộ thương hiệu OCOP quốc tế qua Hệ thống Madrid',
    summary: 'Quy trình đơn giản hóa đăng ký thương hiệu OCOP bảo hộ tại 130 quốc gia thành viên Madrid. Chi phí, thời gian, ưu đãi cho chủ thể OCOP 4-5 sao.',
    category: 'ip',
    publishedAt: '2025-01-05T08:00:00Z',
    author: 'Cục Sở hữu trí tuệ - Bộ Khoa học Công nghệ',
    tags: ['thương hiệu', 'madrid', 'sở hữu trí tuệ', 'bảo hộ quốc tế', 'wi po', 'ocop 4-5 sao', 'ưu đãi'],
    seo: {
      metaTitle: 'Đăng ký thương hiệu OCOP quốc tế qua Madrid | 130 quốc gia, ưu đãi OCOP 4-5 sao',
      metaDescription: 'Hướng dẫn đăng ký bảo hộ thương hiệu OCOP qua Hệ thống Madrid (130 quốc gia). Chi phí giảm 90% so với đăng ký đơn lẻ. Ưu đãi cho OCOP 4-5 sao. Thời gian 12-18 tháng.',
      metaKeywords: ['thương hiệu ocop quốc tế', 'hệ thống madrid', 'bảo hộ thương hiệu', 'wipo', 'sở hữu trí tuệ ocop', 'ưu đãi ocop 4-5 sao'],
      ogTitle: 'Đăng ký bảo hộ thương hiệu OCOP quốc tế qua Hệ thống Madrid',
      ogDescription: '130 quốc gia, 1 hồ sơ, 1 phí, 1 ngôn ngữ. Ưu đãi 90% chi phí cho OCOP 4-5 sao. Thời gian 12-18 tháng.',
      ogImage: '/images/integration/thuong-hieu-ocop-madrid.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/hoi-nhap/dang-ky-thuong-hieu-ocop-madrid',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Đăng ký bảo hộ thương hiệu OCOP quốc tế qua Hệ thống Madrid',
        datePublished: '2025-01-05T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Cục Sở hữu trí tuệ - Bộ Khoa học Công nghệ' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    },
    createdAt: '2025-01-01T08:00:00Z',
    updatedAt: '2025-01-05T08:00:00Z'
  },
  {
    id: 'integration-4',
    slug: 'epc-rfid-traceability-cho-san-pham-ocop-xuat-khau',
    title: 'Triển khai EPC/RFID & GS1 Digital Link cho truy xuất OCOP xuất khẩu',
    summary: 'Giải pháp gắn thẻ EPC/RFID, mã QR GS1 Digital Link trên bao bì sản phẩm OCOP. Tích hợp blockchain Viettel/VNPT. Tuân thủ GS1 EPCIS 1.2, CBV 1.2.',
    category: 'technology',
    publishedAt: '2025-01-01T08:00:00Z',
    author: 'GS1 Việt Nam & Viettel Blockchain',
    tags: ['epc', 'rfid', 'gs1 digital link', 'qr code', 'blockchain', 'truy xuất', 'epcis', 'viettel', 'vnpt'],
    seo: {
      metaTitle: 'EPC/RFID & GS1 Digital Link cho truy xuất OCOP xuất khẩu | Viettel, VNPT Blockchain',
      metaDescription: 'Giải pháp truy xuất nguồn gốc OCOP xuất khẩu: thẻ EPC/RFID, GS1 Digital Link QR, blockchain Viettel/VNPT. Tuân thủ GS1 EPCIS 1.2. Chi phí, triển khai, hỗ trợ.',
      metaKeywords: ['epc rfid ocop', 'gs1 digital link', 'truy xuất nguồn gốc', 'blockchain ocop', 'viettel blockchain', 'vnpt chain', 'epcis 1.2'],
      ogTitle: 'Triển khai EPC/RFID & GS1 Digital Link cho truy xuất OCOP xuất khẩu',
      ogDescription: 'Giải pháp truy xuất OCOP xuất khẩu: EPC/RFID, GS1 Digital Link, Blockchain. Tuân thủ GS1 EPCIS 1.2.',
      ogImage: '/images/integration/epc-rfid-gs1-ocop.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/hoi-nhap/epc-rfid-gs1-digital-link-ocop',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Triển khai EPC/RFID & GS1 Digital Link cho truy xuất OCOP xuất khẩu',
        datePublished: '2025-01-01T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'GS1 Việt Nam & Viettel Blockchain' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    },
    createdAt: '2024-12-28T08:00:00Z',
    updatedAt: '2025-01-01T08:00:00Z'
  },
  {
    id: 'integration-5',
    slug: 'tham-gia-chuoi-cung-ung-toan-cau-gvc-cho-ocop',
    title: 'Tham gia Chuỗi giá trị toàn cầu (GVC) cho sản phẩm OCOP: Lộ trình 2025-2030',
    summary: 'Phân tích cơ hội tham gia GVC cho OCOP nông sản, thủ công mỹ nghệ, du lịch. Case study: Cà phê Buôn Ma Thuột, Gốm Bát Tràng, Lụa Vạn Phúc. Hỗ trợ chính sách mới.',
    category: 'market-access',
    publishedAt: '2024-12-25T08:00:00Z',
    author: 'Viện Nghiên cứu Chiến lược - Bộ Kế hoạch và Đầu tư',
    tags: ['gvc', 'chuỗi giá trị toàn cầu', 'lộ trình 2025-2030', 'cà phê', 'gốm', 'lụa', 'chính sách hỗ trợ', 'hội nhập'],
    seo: {
      metaTitle: 'Tham gia GVC cho OCOP: Lộ trình 2025-2030 | Cà phê, Gốm, Lụa case study',
      metaDescription: 'Phân tích lộ trình tham gia Chuỗi giá trị toàn cầu (GVC) cho OCOP 2025-2030. Case study: Cà phê Buôn Ma Thuột, Gốm Bát Tràng, Lụa Vạn Phúc. Chính sách hỗ trợ mới.',
      metaKeywords: ['gvc ocop', 'chuỗi giá trị toàn cầu', 'lộ trình 2025-2030', 'hội nhập quốc tế ocop', 'case study cà phê', 'gốm bát tràng', 'lụa vạn phúc'],
      ogTitle: 'Tham gia Chuỗi giá trị toàn cầu (GVC) cho OCOP: Lộ trình 2025-2030',
      ogDescription: 'Lộ trình GVC cho OCOP 2025-2030. Case study: Cà phê Buôn Ma Thuột, Gốm Bát Tràng, Lụa Vạn Phúc. Chính sách hỗ trợ.',
      ogImage: '/images/integration/gvc-ocop-lotrinh.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/hoi-nhap/tham-gia-gvc-ocop-lotrinh-2025-2030',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Tham gia Chuỗi giá trị toàn cầu (GVC) cho sản phẩm OCOP: Lộ trình 2025-2030',
        datePublished: '2024-12-25T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Viện Nghiên cứu Chiến lược - Bộ Kế hoạch và Đầu tư' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    },
    createdAt: '2024-12-20T08:00:00Z',
    updatedAt: '2024-12-25T08:00:00Z'
  },
  {
    id: 'integration-6',
    slug: 'tieu-chuan-vietgap-globalgap-cho-nong-san-ocop',
    title: 'Tiêu chuẩn VietGAP, GlobalG.A.P. cho nông sản OCOP: So sánh & Lộ trình chuyển đổi',
    summary: 'Bảng so sánh chi tiết VietGAP vs GlobalG.A.P.: yêu cầu, chi phí, thời gian, audit. Lộ trình chuyển đổi cho chủ thể OCOP 3 sao lên 4-5 sao nhằm xuất khẩu.',
    category: 'standards',
    publishedAt: '2024-12-20T08:00:00Z',
    author: 'Cục Chất lượng nông sản - Bộ Nông nghiệp và PTNT',
    tags: ['vietgap', 'globalgap', 'nông sản ocop', 'chuyển đổi', 'xuất khẩu', 'chứng nhận', 'audit', 'chi phí'],
    seo: {
      metaTitle: 'VietGAP vs GlobalG.A.P. cho OCOP: So sánh, chi phí, lộ trình chuyển đổi 3→4-5 sao',
      metaDescription: 'So sánh chi tiết VietGAP vs GlobalG.A.P.: yêu cầu kỹ thuật, chi phí audit, thời gian, lợi ích xuất khẩu. Lộ trình chuyển đổi OCOP 3 sao lên 4-5 sao.',
      metaKeywords: ['vietgap ocop', 'globalgap nông sản', 'chuyển đổi vietgap globalgap', 'ocop 3 sao lên 4 sao', 'xuất khẩu nông sản', 'chi phí audit'],
      ogTitle: 'Tiêu chuẩn VietGAP, GlobalG.A.P. cho nông sản OCOP: So sánh & Lộ trình',
      ogDescription: 'So sánh VietGAP vs GlobalG.A.P.: yêu cầu, chi phí, thời gian, audit. Lộ trình OCOP 3→4-5 sao xuất khẩu.',
      ogImage: '/images/integration/vietgap-globalgap-ocop.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/hoi-nhap/vietgap-globalgap-ocop-so-sanh-lotrinh',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Tiêu chuẩn VietGAP, GlobalG.A.P. cho nông sản OCOP: So sánh & Lộ trình chuyển đổi',
        datePublished: '2024-12-20T08:00:00+07:00',
        author: { '@type': 'Organization', name: 'Cục Chất lượng nông sản - Bộ Nông nghiệp và PTNT' },
        publisher: { '@type': 'Organization', name: 'OCOP Việt Nam' }
      }
    },
    createdAt: '2024-12-15T08:00:00Z',
    updatedAt: '2024-12-20T08:00:00Z'
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Pagination params
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  // Filter params
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  
  // Apply filters
  let filtered = [...integrationArticlesData];
  
  if (category) {
    filtered = filtered.filter(article => article.category === category);
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(searchLower) ||
      article.summary.toLowerCase().includes(searchLower) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }
  
  // Sort by publishedAt descending (newest first)
  filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
  // Pagination
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = filtered.slice(start, end);
  
  const response: PaginatedResponse<IntegrationArticle> = {
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