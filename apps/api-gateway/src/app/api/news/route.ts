// API Route: /api/news
// Returns list of news articles with pagination and filtering by category

import { NextRequest, NextResponse } from 'next/server';
import { NewsArticle, PaginatedResponse, NewsCategory } from '@ocop/shared-types';

// Mock news data - Tin tức & Sự kiện
const newsData: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'chinh-sach-moi-ho-tro-ocop-2025',
    category: 'chinh-sach-co-che' as NewsCategory,
    title: 'Chính sách mới hỗ trợ OCOP 2025: Vay vốn ưu đãi, miễn giảm thuế',
    headline: 'Chính sách mới hỗ trợ OCOP 2025: Vay vốn ưu đãi, miễn giảm thuế',
    publishedAt: '2025-01-15T08:00:00Z',
    updatedAt: '2025-01-15T08:00:00Z',
    excerpt: 'Chính phủ ban hành Nghị định 15/2025/NĐ-CP quy định chính sách hỗ trợ sản phẩm OCOP bao gồm vay vốn ưu đãi đến 70% giá trị dự án, miễn giảm thuế thu nhập doanh nghiệp 4 năm đầu.',
    content: `
      <h2>Nội dung chính của Nghị định 15/2025/NĐ-CP</h2>
      <p>Ngày 15/1/2025, Chính phủ ban hành Nghị định 15/2025/NĐ-CP quy định các chính sách hỗ trợ phát triển sản phẩm OCOP. Đây là văn bản quy phạm pháp luật quan trọng nhất từ trước đến nay về mặt hỗ trợ tài chính, thuế và đất đai cho chương trình OCOP.</p>
      
      <h3>1. Hỗ trợ vốn vay ưu đãi</h3>
      <ul>
        <li>Mức vay tối đa 70% tổng vốn đầu tư dự án</li>
        <li>Lãi suất ưu đãi 3%/năm trong 5 năm đầu</li>
        <li>Thời gian vay tối đa 10 năm, thời gian ân hạn 2 năm</li>
      </ul>
      
      <h3>2. Hỗ trợ thuế</h3>
      <ul>
        <li>Miễn thuế TNDN 4 năm đầu có thu nhập</li>
        <li>Giảm 50% thuế TNDN 9 năm tiếp theo</li>
      </ul>
      
      <h3>3. Hỗ trợ đất đai</h3>
      <ul>
        <li>Miễn 100% tiền thuê đất 5 năm đầu</li>
        <li>Giảm 50% tiền thuê đất 7 năm tiếp theo</li>
        <li>Ưu tiên cấp đất cho khu chế biến, kho bảo quản nông sản OCOP</li>
      </ul>
      
      <h3>4. Hỗ trợ khác</h3>
      <ul>
        <li>Hỗ trợ 50% chi phí xây dựng thương hiệu, traceability, đăng ký bảo hộ</li>
        <li>Hỗ trợ 70% chi phí tham gia hội chợ, triển lãm quốc tế</li>
        <li>Đào tạo miễn phí kỹ năng số, marketing online cho chủ thể OCOP</li>
      </ul>
      
      <p><strong>Hiệu lực:</strong> Nghị định có hiệu lực thi hành từ 01/03/2025. Các chủ thể OCOP có thể nộp hồ sơ tại Sở Kế hoạch và Đầu tư tỉnh/thành phố nơi đặt cơ sở chính.</p>
    `,
    author: 'Bộ Kế hoạch và Đầu tư',
    authorRole: 'Cơ quan ban hành',
    readTime: '8 phút',
    tags: ['chính sách', 'hỗ trợ', 'vay vốn', 'thuế', 'ocop 2025', 'nghị định 15'],
    isBreaking: true,
    isFeatured: true,
    viewCount: 15420,
    seo: {
      metaTitle: 'Chính sách mới hỗ trợ OCOP 2025: Vay 70% vốn, miễn thuế 4 năm',
      metaDescription: 'Nghị định 15/2025/NĐ-CP: Vay vốn ưu đãi 70% dự án, lãi 3%/năm, miễn TNDN 4 năm, giảm 50% 9 năm sau. Hỗ trợ đất, thương hiệu, hội chợ quốc tế.',
      metaKeywords: ['chính sách ocop 2025', 'nghị định 15/2025', 'hỗ trợ ocop', 'vay vốn ưu đãi', 'miễn thuế ocop'],
      ogTitle: 'Chính sách mới hỗ trợ OCOP 2025: Vay 70% vốn, miễn thuế 4 năm',
      ogDescription: 'Nghị định 15/2025/NĐ-CP ban hành ngày 15/1/2025 hỗ trợ mạnh mẽ cho sản phẩm OCOP',
      ogImage: '/images/news/chinh-sach-moi-ocop-2025.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/tin-tuc/chinh-sach-moi-ho-tro-ocop-2025',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Chính sách mới hỗ trợ OCOP 2025: Vay vốn ưu đãi, miễn giảm thuế',
        datePublished: '2025-01-15T08:00:00Z',
        dateModified: '2025-01-15T08:00:00Z',
        author: { '@type': 'Organization', name: 'Bộ Kế hoạch và Đầu tư' },
        publisher: { '@type': 'Organization', name: 'Cổng thông tin OCOP Việt Nam' }
      }
    },
    location: {
      province: 'Hà Nội',
      coordinates: { lat: 21.0285, lng: 105.8542 }
    },
    createdAt: '2025-01-15T08:00:00Z',
    updatedAtField: '2025-01-20T08:00:00Z'
  },
  {
    id: 'news-2',
    slug: 'ocop-tay-bac-xuat-khau-singapore',
    category: 'hoat-dong-xuc-tien' as NewsCategory,
    title: 'Sản phẩm OCOP Tây Bắc lần đầu xuất khẩu ra Singapore',
    headline: 'Sản phẩm OCOP Tây Bắc lần đầu xuất khẩu ra Singapore',
    publishedAt: '2025-02-10T08:00:00Z',
    updatedAt: '2025-02-10T08:00:00Z',
    excerpt: 'Hợp tác xã Táo mèo Mường La (Sơn La) và HTX Nghệ thuật sành răng Tả Phìn (Lào Cai) ký kết hợp đồng xuất khẩu táo mèo sấy, gốm sành răng sang Singapore trị giá 200 ngàn USD/lần.',
    content: `
      <h2>Đột phá xuất khẩu đầu tiên cho OCOP vùng núi</h2>
      <p>Ngày 10/2/2025, tại Hà Nội, Lễ ký kết hợp đồng xuất khẩu sản phẩm OCOP Tây Bắc ra thị trường Singapore đã diễn ra trang trọng với sự chứng kiến của Bộ Công Thương, Đại sứ quán Singapore tại Việt Nam.</p>
      
      <h3>Các sản phẩm xuất khẩu</h3>
      <ul>
        <li><strong>Táo mèo Mường La sấy dẻo</strong> (OCOP 4 sao) - HTX Táo mèo Mường La, Sơn La</li>
        <li><strong>Gốm sành răng Tả Phìn</strong> (OCOP 4 sao) - HTX Nghệ thuật sành răng Tả Phìn, Lào Cai</li>
        <li><strong>Mắc ca sấy, mật ong rừng</strong> (OCOP 3-4 sao) - Các HTX tại Yên Bái, Hòa Bình</li>
      </ul>
      
      <h3>Giá trị hợp đồng</h3>
      <ul>
        <li>Giá trị đơn hàng đầu: 200,000 USD/lần</li>
        <li>Tần suất: 1 lần/tháng (12 lần/năm)</li>
        <li>Tổng giá trị dự kiến năm 2025: 2.4 triệu USD</li>
        <li>Đối tác nhập khẩu: FairPrice Group (Singapore)</li>
      </ul>
      
      <h3>Ý nghĩa</h3>
      <p>Đây là lần đầu tiên sản phẩm OCOP từ các tỉnh vùng núi Tây Bắc chính thức 진출 (thâm nhập) thị trường Singapore - một trong những thị trường khó tính nhất về tiêu chuẩn an toàn thực phẩm. Việc này chứng minh chất lượng sản phẩm OCOP Việt Nam đã đáp ứng được tiêu chuẩn quốc tế khắt khe.</p>
      
      <p>Ông Nguyễn Văn Toàn - Giám đốc HTX Táo mèo Mường La chia sẻ: <em>"Chúng tôi đã đầu tư 5 tỷ VNĐ nâng cấp nhà máy sấy công nghệ lạnh, đạt chứng nhận HACCP, ISO 22000 để đáp ứng tiêu chuẩn xuất khẩu. Đây là kết quả 3 năm nỗ lực của toàn thể 85 hội viên."</em></p>
    `,
    author: 'Phòng Thương mại Việt Nam tại Singapore',
    authorRole: 'Cơ quan phối hợp',
    readTime: '6 phút',
    tags: ['xuất khẩu', 'singapore', 'tây bắc', 'táo mèo', 'gốm sành răng', 'ocop 4 sao'],
    isBreaking: false,
    isFeatured: true,
    viewCount: 8750,
    seo: {
      metaTitle: 'OCOP Tây Bắc xuất khẩu Singapore: Táo mèo Mường La, gốm Tả Phìn',
      metaDescription: 'HTX Táo mèo Mường La (Sơn La) và HTX Gốm Tả Phìn (Lào Cai) ký hợp đồng xuất khẩu 200 ngàn USD/lần ra Singapore. Sản phẩm OCOP 4 sao đạt chuẩn HACCP, ISO 22000.',
      metaKeywords: ['ocop tây bắc xuất khẩu', 'táo mèo mường la', 'gốm tà phìn', 'singapore', 'ocop 4 sao'],
      ogTitle: 'Sản phẩm OCOP Tây Bắc lần đầu xuất khẩu ra Singapore',
      ogDescription: 'Táo mèo Mường La, gốm sành răng Tả Phìn OCOP 4 sao thâm nhập thị trường Singapore khó tính',
      ogImage: '/images/news/ocop-tay-bac-xuat-khau-singapore.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/tin-tuc/ocop-tay-bac-xuat-khau-singapore',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Sản phẩm OCOP Tây Bắc lần đầu xuất khẩu ra Singapore',
        datePublished: '2025-02-10T08:00:00Z',
        author: { '@type': 'Organization', name: 'Phòng Thương mại Việt Nam tại Singapore' },
        publisher: { '@type': 'Organization', name: 'Cổng thông tin OCOP Việt Nam' }
      }
    },
    location: {
      province: 'Hà Nội',
      coordinates: { lat: 21.0285, lng: 105.8542 }
    },
    createdAt: '2025-02-10T08:00:00Z',
    updatedAtField: '2025-02-10T08:00:00Z'
  },
  {
    id: 'news-3',
    slug: 'hoi-nghi-tong-ket-ocop-10-nam',
    category: 'hoat-dong-xuc-tien' as NewsCategory,
    title: 'Hội nghị Tổng kết 10 năm triển khai Chương trình OCOP Toàn quốc',
    headline: 'Hội nghị Tổng kết 10 năm triển khai Chương trình OCOP Toàn quốc',
    publishedAt: '2025-02-20T08:00:00Z',
    updatedAt: '2025-02-20T08:00:00Z',
    excerpt: 'Hội nghị tổng kết 10 năm OCOP (2015-2025) diễn ra tại Hà Nội với 1.200 đại biểu. Kết quả: 10.500 sản phẩm OCOP, trong đó 1.200 sản phẩm 5 sao. Doanh thu ước tính 120.000 tỷ VNĐ.',
    content: `
      <h2>Tổng kết 10 năm OCOP: Thành tựu lịch sử</h2>
      <p>Sáng 20/2/2025, tại Trung tâm Hội nghị Quốc gia (Hà Nội), Hội nghị Tổng kết 10 năm triển khai Chương trình "Mỗi xã một sản phẩm" (OCOP) toàn quốc diễn ra trọng thể.</p>
      
      <h3>Kết quả nổi bật sau 10 năm (2015-2025)</h3>
      <table>
        <thead>
          <tr><th>Chỉ tiêu</th><th>Kết quả</th><th>So với mục tiêu</th></tr>
        </thead>
        <tbody>
          <tr><td>Tổng số sản phẩm OCOP</td><td>10.523</td><td>Vượt 105%</td></tr>
          <tr><td>Sản phẩm 5 sao</td><td>1.247</td><td>Vượt 124%</td></tr>
          <tr><td>Sản phẩm 4 sao</td><td>3.156</td><td>Đạt 100%</td></tr>
          <tr><td>Sản phẩm 3 sao</td><td>6.120</td><td>Đạt 98%</td></tr>
          <tr><td>Tổng doanh thu ước tính</td><td>120.000 tỷ VNĐ</td><td>Vượt 120%</td></tr>
          <tr><td>Tạo việc làm</td><td>1.2 triệu lượt người</td><td>Vượt 150%</td></tr>
          <tr><td>Xuất khẩu</td><td>45 quốc gia</td><td>Mới đạt được</td></tr>
        </tbody>
      </table>
      
      <h3>Các tỉnh thành tích xuất sắc</h3>
      <ol>
        <li><strong>Hà Nội:</strong> 850 sản phẩm OCOP (120 sản phẩm 5 sao)</li>
        <li><strong>Lâm Đồng:</strong> 620 sản phẩm (95 sản phẩm 5 sao - nông nghiệp cao-tech)</li>
        <li><strong>Đắk Lắk:</strong> 580 sản phẩm (88 sản phẩm 5 sao - cà phê, sô-cô-la)</li>
        <li><strong>Thái Nguyên:</strong> 450 sản phẩm (67 sản phẩm 5 sao - trà)</li>
        <li><strong>Kiên Giang:</strong> 380 sản phẩm (55 sản phẩm 5 sao - nước mắm, hải sản)</li>
      </ol>
      
      <h3>Chương trình OCOP giai đoạn 2026-2030</h3>
      <p>Thủ tướng Phạm Minh Chính chỉ đạo: Giai đoạn 2026-2030 tập trung vào "Chất lượng - Hiệu quả - Bền vững":</p>
      <ul>
        <li>Mục tiêu: 20.000 sản phẩm OCOP, 3.000 sản phẩm 5 sao</li>
        <li>100% sản phẩm 5 sao có truy xuất nguồn gốc, thương hiệu riêng</li>
        <li>50% sản phẩm 5 sao xuất khẩu</li>
        <li>Chuyển đổi số toàn diện: 100% chủ thể OCOP bán hàng online</li>
        <li>Phát triển du lịch kết hợp OCOP: 1.000 điểm du lịch OCOP</li>
      </ul>
    `,
    author: 'Bộ Kế hoạch và Đầu tư',
    authorRole: 'Cơ quan chủ trì',
    readTime: '10 phút',
    tags: ['hội nghị', '10 năm ocop', 'tổng kết', 'thành tựu', 'giai đoạn 2026-2030'],
    isBreaking: true,
    isFeatured: true,
    viewCount: 25680,
    seo: {
      metaTitle: 'Tổng kết 10 năm OCOP: 10.500 sản phẩm, 1.200 sản phẩm 5 sao, 120.000 tỷ VNĐ',
      metaDescription: 'Hội nghị tổng kết 10 năm OCOP (2015-2025): 10.523 sản phẩm, 1.247 sản phẩm 5 sao, doanh thu 120.000 tỷ VNĐ, tạo việc làm 1.2 triệu người. Giai đoạn 2026-2030 mục tiêu 20.000 sản phẩm.',
      metaKeywords: ['tổng kết 10 năm ocop', 'hội nghị ocop', 'thành tựu ocop', 'ocop 2026-2030'],
      ogTitle: 'Tổng kết 10 năm OCOP: 10.500 sản phẩm, 1.200 sao 5, 120.000 tỷ VNĐ',
      ogDescription: 'Chương trình OCOP 10 năm: Vượt mục tiêu mọi chỉ tiêu. Giai đoạn mới 2026-2030 hướng tới 20.000 sản phẩm.',
      ogImage: '/images/news/hoi-nghi-tong-ket-ocop-10-nam.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/tin-tuc/hoi-nghi-tong-ket-ocop-10-nam',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Hội nghị Tổng kết 10 năm triển khai Chương trình OCOP Toàn quốc',
        datePublished: '2025-02-20T08:00:00Z',
        author: { '@type': 'Organization', name: 'Bộ Kế hoạch và Đầu tư' },
        publisher: { '@type': 'Organization', name: 'Cổng thông tin OCOP Việt Nam' }
      }
    },
    location: {
      province: 'Hà Nội',
      coordinates: { lat: 21.0285, lng: 105.8542 }
    },
    createdAt: '2025-02-20T08:00:00Z',
    updatedAtField: '2025-02-20T08:00:00Z'
  },
  {
    id: 'news-4',
    slug: 'lam-dong-xay-dung-khu-cong-nghe-cao-ocop',
    category: 'ocop-dia-phuong' as NewsCategory,
    title: 'Lâm Đồng xây dựng Khu công nghệ cao OCOP đầu tiên tại Việt Nam',
    headline: 'Lâm Đồng xây dựng Khu công nghệ cao OCOP đầu tiên tại Việt Nam',
    publishedAt: '2025-03-01T08:00:00Z',
    updatedAt: '2025-03-01T08:00:00Z',
    excerpt: 'Tỉnh Lâm Đồng khởi công Khu công nghệ cao OCOP Lâm Đồng diện tích 50 ha, tổng đầu tư 2.000 tỷ VNĐ. Tập trung nuôi cấy mô, chế biến sâu nông sản cao-tech: atiso, hoa cúc, dâu tây, cà phê.',
    content: `
      <h2>Khu công nghệ cao OCOP Lâm Đồng: Mô hình mới cho nông nghiệp 4.0</h2>
      <p>Ngày 01/3/2025, tại huyện Đơn Dương (Lâm Đồng), Lễ khởi công Khu công nghệ cao OCOP Lâm Đồng - dự án đầu tiên loại này tại Việt Nam - đã diễn ra.</p>
      
      <h3>Thông tin dự án</h3>
      <ul>
        <li><strong>Vị trí:</strong> Xã Thanh Mỹ, huyện Đơn Dương, tỉnh Lâm Đồng</li>
        <li><strong>Diện tích:</strong> 50 ha</li>
        <li><strong>Tổng đầu tư:</strong> 2.000 tỷ VNĐ (ngân sách trung ương 500 tỷ, địa phương 300 tỷ, xã hội hóa 1.200 tỷ)</li>
        <li><strong>Thời gian triển khai:</strong> 2025-2027 (3 giai đoạn)</li>
        <li><strong>Chủ đầu tư:</strong> Sở KH&ĐT Lâm Đồng phối hợp Tập đoàn VinGroup</li>
      </ul>
      
      <h3>Chức năng chính</h3>
      <ol>
        <li><strong>Trung tâm Nuôi cấy mô & Giống cây:</strong> Sản xuất 50 triệu cây giống/năm (atiso, hoa cúc, dâu tây, cà phê, măng cụt...)</li>
        <li><strong>Nhà máy Chế biến sâu công nghệ cao:</strong> Công suất 50.000 tấn/năm (sấy lạnh, chiết xuất, nano, đóng gói thông minh)</li>
        <li><strong>Trung tâm R&D OCOP:</strong> Phòng thí nghiệm ISO 17025, hợp tác Viện Nông nghiệp Lâm Đồng, Đại học Đà Lạt</li>
        <li><strong>Khu Logistics & Cold Chain:</strong> Kho lạnh 20.000 pallet, truy xuất nguồn gốc blockchain</li>
        <li><strong>Khu Du lịch nông nghiệp OCOP:</strong> Trải nghiệm thu hoạch, chế biến, mua sắm trực tiếp</li>
      </ol>
      
      <h3>Sản phẩm mục tiêu</h3>
      <ul>
        <li>Atiso chiết xuất, trà atiso, kem dưỡng da atiso (OCOP 5 sao)</li>
        <li>Hoa cúc chiết xuất tinh dầu, trà hoa cúc, mỹ phẩm (OCOP 5 sao)</li>
        <li>Dâu tây sấy lạnh, mứt dâu, kem dâu (OCOP 4-5 sao)</li>
        <li>Cà phê đặc sản Arabica, Culi, Honey (OCOP 5 sao)</li>
        <li>Măng cụt, chôm chôm, thanh long sấy lạnh xuất khẩu (OCOP 4 sao)</li>
      </ul>
      
      <p>Dự án dự kiến tạo việc làm trực tiếp 2.000 người, gián tiếp 10.000 người. Doanh thu kỳ vọng năm 2030: 5.000 tỷ VNĐ.</p>
    `,
    author: 'Sở Kế hoạch và Đầu tư Lâm Đồng',
    authorRole: 'Chủ đầu tư',
    readTime: '7 phút',
    tags: ['lâm đồng', 'khu công nghệ cao', 'nông nghiệp 4.0', 'atiso', 'hoa cúc', 'dâu tây', 'cà phê'],
    isBreaking: false,
    isFeatured: false,
    viewCount: 12340,
    seo: {
      metaTitle: 'Lâm Đồng khởi công Khu công nghệ cao OCOP đầu tiên Việt Nam: 2.000 tỷ, 50 ha',
      metaDescription: 'Khu CNC OCOP Lâm Đồng 50 ha, 2.000 tỷ VNĐ tại Đơn Dương. Nuôi cấy mô 50 triệu cây/năm, chế biến sâu 50.000 tấn/năm: atiso, hoa cúc, dâu tây, cà phê. Tạo việc 2.000 người.',
      metaKeywords: ['lâm đồng ocop', 'khu công nghệ cao ocop', 'nông nghiệp 4.0', 'atiso', 'hoa cúc', 'đơn dương'],
      ogTitle: 'Lâm Đồng xây dựng Khu công nghệ cao OCOP đầu tiên Việt Nam',
      ogDescription: '50 ha, 2.000 tỷ VNĐ, nuôi cấy mô 50 triệu cây/năm, chế biến sâu atiso, hoa cúc, dâu tây, cà phê công nghệ cao.',
      ogImage: '/images/news/lam-dong-khu-cong-nghe-cao-ocop.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/tin-tuc/lam-dong-xay-dung-khu-cong-nghe-cao-ocop',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Lâm Đồng xây dựng Khu công nghệ cao OCOP đầu tiên tại Việt Nam',
        datePublished: '2025-03-01T08:00:00Z',
        author: { '@type': 'Organization', name: 'Sở Kế hoạch và Đầu tư Lâm Đồng' },
        publisher: { '@type': 'Organization', name: 'Cổng thông tin OCOP Việt Nam' }
      }
    },
    location: {
      province: 'Lâm Đồng',
      district: 'Đơn Dương',
      coordinates: { lat: 11.9404, lng: 108.4583 }
    },
    createdAt: '2025-03-01T08:00:00Z',
    updatedAtField: '2025-03-01T08:00:00Z'
  },
  {
    id: 'news-5',
    slug: 'chuong-trinh-ocop-voi-chuyen-doi-so',
    category: 'chinh-sach-co-che' as NewsCategory,
    title: 'Chương trình OCOP gắn với chuyển đổi số: 100% chủ thể bán hàng online 2026',
    headline: 'Chương trình OCOP gắn với chuyển đổi số: 100% chủ thể bán hàng online 2026',
    publishedAt: '2025-03-10T08:00:00Z',
    updatedAt: '2025-03-10T08:00:00Z',
    excerpt: 'Bộ KH&ĐT triển khai "OCOP Digital" - nền tảng số thống nhất: website chuẩn, sàn TMĐT tích hợp, truy xuất blockchain, marketing AI. Hỗ trợ 70% chi phí cho chủ thể OCOP.',
    content: `
      <h2>OCOP Digital: Chuyển đổi số toàn diện cho 10.000+ sản phẩm</h2>
      <p>Tháng 3/2025, Bộ Kế hoạch và Đầu tư chính thức triển khai chương trình "OCOP Digital" - chiến lược chuyển đổi số cho toàn bộ hệ thống sản phẩm OCOP Việt Nam.</p>
      
      <h3>3 trụ cột của OCOP Digital</h3>
      <ol>
        <li><strong>Nền tảng Website chuẩn OCOP:</strong> Template thống nhất, SEO tối ưu, đa ngôn ngữ (VN/EN/CN), tích hợp schema.org Product, FAQ, Review</li>
        <li><strong>Hệ sinh thái Sàn TMĐT OCOP:</strong> Sàn B2B (ocop.vn), Sàn B2C (ocopmall.vn), tích hợp Shopee, Lazeka, TikTok Shop</li>
        <li><strong>Công nghệ cốt lõi:</strong> Blockchain truy xuất nguồn gốc, AI marketing cá nhân hóa, Big Data phân tích xu hướng tiêu dùng</li>
      </ol>
      
      <h3>Hỗ trợ tài chính</h3>
      <ul>
        <li>Hỗ trợ 70% chi phí xây dựng website (tối đa 15 triệu VNĐ/sản phẩm)</li>
        <li>Hỗ trợ 50% hoa hồng sàn TMĐT 12 tháng đầu (tối đa 50 triệu VNĐ)</li>
        <li>Hỗ trợ 100% chi phí tích hợp blockchain traceability</li>
        <li>Đào tạo miễn phí: 40h/khoá cho chủ thể OCOP (kỹ năng bán online, livestream, content)</li>
      </ul>
      
      <h3>KPI mục tiêu 2026</h3>
      <ul>
        <li>100% sản phẩm 5 sao có website chuẩn, bán online</li>
        <li>80% sản phẩm 4 sao có website, bán online</li>
        <li>50% sản phẩm 3 sao có website, bán online</li>
        <li>Doanh thu online đạt 30% tổng doanh thu OCOP (hiện tại ~5%)</li>
        <li>10.000 chủ thể OCOP được đào tạo kỹ năng số</li>
      </ul>
      
      <p>Đơn vị triển khai kỹ thuật: Viettel, VNPT, FPT, CMC (trúng thầu gói thầu A, B, C, D). Dự kiến hoàn thành giai đoạn 1 (3.000 sản phẩm 5-4 sao) quý 4/2025.</p>
    `,
    author: 'Bộ Kế hoạch và Đầu tư',
    authorRole: 'Cơ quan chủ trì',
    readTime: '9 phút',
    tags: ['chuyển đổi số', 'ocop digital', 'bán hàng online', 'blockchain', 'ai marketing', 'sàn tmđt'],
    isBreaking: false,
    isFeatured: true,
    viewCount: 9870,
    seo: {
      metaTitle: 'OCOP Digital: 100% chủ thể 5 sao bán online 2026, hỗ trợ 70% chi phí',
      metaDescription: 'Chương trình OCOP Digital: Website chuẩn, sàn TMĐT tích hợp, blockchain truy xuất, AI marketing. Hỗ trợ 70% chi phí web, 50% hoa hồng sàn. Mục tiêu 2026: 100% sp 5 sao online.',
      metaKeywords: ['ocop digital', 'chuyển đổi số ocop', 'bán hàng online ocop', 'blockchain truy xuất', 'ai marketing'],
      ogTitle: 'OCOP Digital: Chuyển đổi số toàn diện, 100% chủ thể 5 sao online 2026',
      ogDescription: 'Website chuẩn, sàn TMĐT, blockchain, AI marketing. Hỗ trợ 70% chi phí. Đào tạo miễn phí 40h cho 10.000 chủ thể.',
      ogImage: '/images/news/ocop-digital-chuyen-doi-so.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/tin-tuc/chuong-trinh-ocop-voi-chuyen-doi-so',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Chương trình OCOP gắn với chuyển đổi số: 100% chủ thể bán hàng online 2026',
        datePublished: '2025-03-10T08:00:00Z',
        author: { '@type': 'Organization', name: 'Bộ Kế hoạch và Đầu tư' },
        publisher: { '@type': 'Organization', name: 'Cổng thông tin OCOP Việt Nam' }
      }
    },
    location: {
      province: 'Hà Nội',
      coordinates: { lat: 21.0285, lng: 105.8542 }
    },
    createdAt: '2025-03-10T08:00:00Z',
    updatedAtField: '2025-03-10T08:00:00Z'
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const category = searchParams.get('category')?.split(',');
  const q = searchParams.get('q')?.toLowerCase();
  const sort = searchParams.get('sort') || 'publishedAt';
  const order = searchParams.get('order') as 'asc' | 'desc' || 'desc';

  let filtered = [...newsData];

  // Apply filters
  if (category && category.length > 0) {
    filtered = filtered.filter(n => category.includes(n.category));
  }
  if (q) {
    filtered = filtered.filter(n =>
      n.title.toLowerCase().includes(q) ||
      n.excerpt.toLowerCase().includes(q) ||
      n.content.toLowerCase().includes(q) ||
      n.tags.some(t => t.toLowerCase().includes(q)) ||
      n.category.toLowerCase().includes(q)
    );
  }

  // Sort
  filtered.sort((a, b) => {
    const aVal = a[sort as keyof NewsArticle];
    const bVal = b[sort as keyof NewsArticle];
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;
  const news = filtered.slice(start, start + limit);

  // Get unique filter options
  const categories = [...new Set(newsData.map(n => n.category))];

  return NextResponse.json({
    data: news,
    meta: {
      page,
      limit,
      total: totalItems,
      totalPages,
    },
    filters: {
      categories,
    }
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    }
  });
}