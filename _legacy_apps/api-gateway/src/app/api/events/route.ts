// API Route: /api/events
// Returns list of events with pagination and filtering by status

import { NextRequest, NextResponse } from 'next/server';
import { Event, PaginatedResponse, REVALIDATE_TAGS } from '@ocop/shared-types';

// Mock events data - Sự kiện OCOP (matching new Event interface)
const eventsData: Event[] = [
  {
    id: 'event-1',
    slug: 'hoi-cho-ocop-quoc-gia-2025',
    title: 'Hội chợ OCOP Quốc gia 2025 - "Vietnam OCOP Connect"',
    summary: 'Hội chợ OCOP lớn nhất năm 2025 với 1.000 gian hàng, 500 chủ thể OCOP 4-5 sao từ 63 tỉnh thành. Diễn ra tại ICE Hà Nội từ 15-19/5/2025.',
    description: `
      <h2>Hội chợ OCOP Quốc gia 2025 - Vietnam OCOP Connect</h2>
      <p>Sự kiện OCOP lớn nhất năm, quy mô chưa từng có, tập trung kết nối cung - cầu, xúc tiến thương mại và hội nhập quốc tế cho sản phẩm OCOP Việt Nam.</p>
      
      <h3>Thông tin chung</h3>
      <ul>
        <li><strong>Thời gian:</strong> 08:00 15/5/2025 - 21:00 19/5/2025 (5 ngày)</li>
        <li><strong>Địa điểm:</strong> Trung tâm Triển lãm Quốc tế ICE, 91 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội</li>
        <li><strong>Quy mô:</strong> 20.000 m², 1.000 gian hàng tiêu chuẩn (3m x 3m)</li>
        <li><strong>Chủ thể tham gia:</strong> 500 chủ thể OCOP 4-5 sao từ 63 tỉnh/thành phố</li>
        <li><strong>Khách dự kiến:</strong> 150.000 lượt người (bên trong: 100.000, quốc tế: 50.000)</li>
      </ul>
      
      <h3>5 Khu vực chủ đạo</h3>
      <ol>
        <li><strong>Khu Trưng bày & Bán hàng:</strong> 600 gian hàng sản phẩm OCOP 4-5 sao theo 8 nhóm ngành</li>
        <li><strong>Khu Kết nối Cung - Cầu:</strong> 200 gian hàng doanh nghiệp nhập khẩu, chuỗi siêu thị, sàn TMĐT</li>
        <li><strong>Khu Quốc tế:</strong> 50 gian hàng 20 quốc gia (Singapore, Nhật, Hàn, Mỹ, EU, Trung Quốc...)</li>
        <li><strong>Khu Du lịch OCOP:</strong> 100 gian hàng điểm du lịch, homestay, tour trải nghiệm OCOP</li>
        <li><strong>Khu Công nghệ & Chuyển đổi số:</strong> 50 gian hàng blockchain, AI, sàn TMĐT, traceability</li>
      </ol>
      
      <h3>Hoạt động nổi bật</h3>
      <ul>
        <li><strong>Ngày 15/5:</strong> Lễ khai mạc, Hội thảo "OCOP Digital 2025", B2B Matchmaking</li>
        <li><strong>Ngày 16/5:</strong> Diễn đàn Xuất khẩu OCOP, Ký kết MOU 50 doanh nghiệp</li>
        <li><strong>Ngày 17/5:</strong> Cuộc thi "Top Chef OCOP", Livestream bán hàng 24h</li>
        <li><strong>Ngày 18/5:</strong> Ngày Du lịch OCOP, Ký kết hợp tác du lịch 30 điểm</li>
        <li><strong>Ngày 19/5:</strong> Lễ bế mạc, Trao giải "Sản phẩm OCOP Yêu thích 2025"</li>
      </ul>
      
      <h3>Hỗ trợ chủ thể OCOP</h3>
      <ul>
        <li>Miễn 100% chi phí gian hàng cho sản phẩm 5 sao (giá trị 15 triệu VNĐ/gian)</li>
        <li>Hỗ trợ 50% chi phí gian hàng cho sản phẩm 4 sao</li>
        <li>Hỗ trợ vé máy bay/xe cho 2 người/đơn vị (tối đa 5 triệu VNĐ)</li>
        <li>Hỗ trợ 100% chi phí vận chuyển mẫu sản phẩm</li>
      </ul>
      
      <p><strong>Đăng ký:</strong> Trước 30/4/2025 tại <a href="https://ocopvietnam.vn/dang-ky-hoi-cho-2025">ocopvietnam.vn/dang-ky-hoi-cho-2025</a> hoặc liên hệ Hotline: 1900 636 889</p>
    `,
    content: `Hội chợ OCOP Quốc gia 2025 - Vietnam OCOP Connect là sự kiện OCOP lớn nhất năm 2025 với 1.000 gian hàng, 500 chủ thể OCOP 4-5 sao từ 63 tỉnh thành. Diễn ra tại ICE Hà Nội từ 15-19/5/2025.`,
    status: 'sap-dien-ra',
    eventType: 'hoi-cho',
    startDate: '2025-05-15T08:00:00Z',
    endDate: '2025-05-19T21:00:00Z',
    timezone: 'Asia/Ho_Chi_Minh',
    venue: 'Trung tâm Triển lãm Quốc tế ICE',
    address: '91 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội',
    province: 'Hà Nội',
    district: 'Hoàn Kiếm',
    coordinates: { lat: 21.0342, lng: 105.8512 },
    organizer: 'Bộ Kế hoạch và Đầu tư',
    coOrganizers: [
      'UBND Thành phố Hà Nội',
      'Hội Thương mại Công nghiệp Việt Nam (VCCI)',
      'Hiệp hội Thương mại điện tử Việt Nam (VECOM)'
    ],
    sponsors: [
      'Viettel',
      'VNPT',
      'FPT',
      'Agribank',
      'BIDV'
    ],
    featuredImage: '/images/events/hoi-cho-ocop-quoc-gia-2025.jpg',
    images: [
      '/images/events/hoi-cho-2025-1.jpg',
      '/images/events/hoi-cho-2025-2.jpg',
      '/images/events/hoi-cho-2025-3.jpg'
    ],
    registration: {
      required: true,
      url: 'https://ocopvietnam.vn/dang-ky-hoi-cho-2025',
      deadline: '2025-04-30T23:59:59Z',
      capacity: 500,
      fee: 0,
      feeDescription: 'Miễn phí cho sản phẩm OCOP 4-5 sao (hỗ trợ theo quy định)'
    },
    tags: ['hội chợ', 'quốc gia', '2025', 'xúc tiến thương mại', 'b2b', 'xuất khẩu', 'du lịch ocop'],
    targetAudience: ['Chủ thể OCOP', 'Doanh nghiệp nhập khẩu', 'Chuỗi siêu thị', 'Sàn TMĐT', 'Du lịch', 'Người tiêu dùng'],
    expectedAttendees: 150000,
    seo: {
      metaTitle: 'Hội chợ OCOP Quốc gia 2025 - Vietnam OCOP Connect | 15-19/5 ICE Hà Nội',
      metaDescription: 'Hội chợ OCOP lớn nhất 2025: 1.000 gian hàng, 500 chủ thể 4-5 sao, 150.000 khách. B2B Matchmaking, xuất khẩu, du lịch OCOP, chuyển đổi số. Đăng ký miễn phí trước 30/4.',
      metaKeywords: ['hội chợ ocop 2025', 'vietnam ocop connect', 'hội chợ ocop quốc gia', 'xúc tiến thương mại ocop', 'b2b ocop'],
      ogTitle: 'Hội chợ OCOP Quốc gia 2025 - Vietnam OCOP Connect',
      ogDescription: '15-19/5/2025 tại ICE Hà Nội. 1.000 gian hàng, 500 chủ thể OCOP 4-5 sao. B2B, xuất khẩu, du lịch, số hóa.',
      ogImage: '/images/events/hoi-cho-ocop-quoc-gia-2025.jpg',
      ogType: 'event',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/tin-tuc-su-kien/su-kien/hoi-cho-ocop-quoc-gia-2025',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Hội chợ OCOP Quốc gia 2025 - Vietnam OCOP Connect',
        startDate: '2025-05-15T08:00:00+07:00',
        endDate: '2025-05-19T21:00:00+07:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Trung tâm Triển lãm Quốc tế ICE',
          address: { '@type': 'PostalAddress', streetAddress: '91 Trần Hưng Đạo', addressLocality: 'Hà Nội', addressCountry: 'VN' }
        },
        organizer: { '@type': 'Organization', name: 'Bộ Kế hoạch và Đầu tư' }
      }
    },
    createdAt: '2024-12-01T08:00:00Z',
    updatedAt: '2025-01-15T08:00:00Z'
  },
  {
    id: 'event-2',
    slug: 'dien-dan-xuat-khau-ocop-asean-2025',
    title: 'Diễn đàn Xuất khẩu OCOP sang ASEAN 2025',
    summary: 'Diễn đàn chuyên sâu kết nối chủ thể OCOP với 50 doanh nghiệp nhập khẩu từ 10 quốc gia ASEAN. Tập trung: Thực phẩm, Đồ thủ công, Du lịch, Nông sản chế biến.',
    description: `
      <h2>Diễn đàn Xuất khẩu OCOP sang thị trường ASEAN 2025</h2>
      <p>Sự kiện chuyên biệt tập trung mở rộng thị trường xuất khẩu cho sản phẩm OCOP sang 10 quốc gia ASEAN - khối thị trường 670 triệu dân, GDP 3.600 tỷ USD.</p>
      
      <h3>Thông tin sự kiện</h3>
      <ul>
        <li><strong>Thời gian:</strong> 08:30 - 17:00, 20/6/2025</li>
        <li><strong>Địa điểm:</strong> Khách sạn InterContinental Hanoi Westlake, Hà Nội</li>
        <li><strong>Hình thức:</strong> Trực tiếp + Livestream (Zoom/YouTube)</li>
        <li><strong>Ngôn ngữ:</strong> Tiếng Việt, Tiếng Anh (phiên dịch đồng thời)</li>
      </ul>
      
      <h3>Đối tác quốc tế mời</h3>
      <ul>
        <li><strong>Singapore:</strong> FairPrice Group, RedMart, Sheng Siong (3)</li>
        <li><strong>Malaysia:</strong> AEON Malaysia, Jaya Grocer, Village Grocer (3)</li>
        <li><strong>Thái Lan:</strong> Central Food Retail, Tops Supermarket, Makro (3)</li>
        <li><strong>Indonesia:</strong> Hero Supermarket, Lotte Mart, Ranch Market (3)</li>
        <li><strong>Philippines:</strong> SM Retail, Robinsons, Rustan's (3)</li>
        <li><strong>Việt Nam:</strong> WinCommerce, Lotte Mart Vietnam, AEON Vietnam, Bach Hoa Xanh (4)</li>
        <li><strong>Các nước khác:</strong> Brunei, Lào, Campuchia, Myanmar (4)</li>
      </ul>
      
      <h3>Chương trình</h3>
      <table>
        <thead><tr><th>Thời gian</th><th>Nội dung</th><th>Người phát biểu</th></tr></thead>
        <tbody>
          <tr><td>08:30-09:00</td><td>Đón khách, Check-in, Networking</td><td>-</td></tr>
          <tr><td>09:00-09:30</td><td>Lễ khai mạc, Báo cáo "Cơ hội xuất khẩu OCOP sang ASEAN"</td><td>Bộ Công Thương</td></tr>
          <tr><td>09:30-10:30</td><td>Panel: "Rào cản kỹ thuật & Giải pháp" (SPS, TBT, Halal, Labeling)</td><td>Chuyên gia WTO, VCCI, 4 quốc gia</td></tr>
          <tr><td>10:30-10:45</td><td>Nghỉ giải lao, Networking</td><td>-</td></tr>
          <tr><td>10:45-12:00</td><td>B2B Matchmaking: 50 bàn hội thoại 1-1 (đã xếp lịch trước)</td><td>Chủ thể OCOP & Buyer</td></tr>
          <tr><td>12:00-13:30</td><td>Trưa: Bữa trưa giao lưu, Thử sản phẩm OCOP</td><td>-</td></tr>
          <tr><td>13:30-15:00</td><td>Workshop: "Chuẩn bị hồ sơ xuất khẩu, Traceability, E-commerce cross-border"</td><td>Viettel, VNPT, FPT, chuyên gia pháp lý</td></tr>
          <tr><td>15:00-15:15</td><td>Nghỉ giải lao</td><td>-</td></tr>
          <tr><td>15:15-16:30</td><td>Ký kết MOU/Hợp đồng, Trao chứng nhận "Partner Ready OCOP"</td><td>50 cặp đối tác</td></tr>
          <tr><td>16:30-17:00</td><td>Bế mạc, Chụp ảnh lưu niệm, Networking cuối</td><td>-</td></tr>
        </tbody>
      </table>
      
      <h3>Đối tượng tham dự</h3>
      <ul>
        <li>200 chủ thể OCOP 4-5 sao (đăng ký trước, ưu tiên có chứng nhận HACCP/ISO/FDA)</li>
        <li>50 Buyer quốc tế (đã xác nhận)</li>
        <li>50 Đại lý, phân phối, sàn TMĐT trong nước</li>
        <li>30 Cơ quan quản lý nhà nước, Hiệp hội</li>
      </ul>
      
      <h3>Đăng ký</h3>
      <p>Miễn phí cho chủ thể OCOP 4-5 sao. Đăng ký trước 10/6/2025. Chỉ nhận 200 đơn vị đầu tiên đủ điều kiện.</p>
    `,
    content: `Diễn đàn Xuất khẩu OCOP sang ASEAN 2025 kết nối chủ thể OCOP với 50 buyer từ 10 quốc gia ASEAN. Tập trung Thực phẩm, Đồ thủ công, Du lịch, Nông sản chế biến. B2B Matchmaking 50 bàn, ký kết MOU.`,
    status: 'sap-dien-ra',
    eventType: 'hoi-nghi',
    startDate: '2025-06-20T08:30:00Z',
    endDate: '2025-06-20T17:00:00Z',
    timezone: 'Asia/Ho_Chi_Minh',
    venue: 'Khách sạn InterContinental Hanoi Westlake',
    address: '5 Đ. Nhật Tân, Quảng An, Tây Hồ, Hà Nội',
    province: 'Hà Nội',
    district: 'Tây Hồ',
    coordinates: { lat: 21.0622, lng: 105.8194 },
    organizer: 'Bộ Công Thương',
    coOrganizers: [
      'ASEAN Business Advisory Council (ASEAN-BAC)',
      'Cục Xúc tiến Thương mại Việt Nam (VIETRADE)',
      'Hiệp hội Thương mại điện tử Việt Nam (VECOM)'
    ],
    sponsors: [
      'Standard Chartered Bank',
      'HSBC Vietnam',
      'DHL Express'
    ],
    featuredImage: '/images/events/dien-dan-xuat-khau-asean-2025.jpg',
    images: [
      '/images/events/xuat-khau-asean-1.jpg',
      '/images/events/xuat-khau-asean-2.jpg'
    ],
    registration: {
      required: true,
      url: 'https://ocopvietnam.vn/dang-ky-xuat-khau-asean-2025',
      deadline: '2025-06-10T23:59:59Z',
      capacity: 200,
      fee: 0,
      feeDescription: 'Miễn phí cho chủ thể OCOP 4-5 sao có chứng nhận HACCP/ISO/FDA'
    },
    tags: ['xuất khẩu', 'asean', 'diễn đàn', 'b2b', 'thương mại quốc tế', 'ocop'],
    targetAudience: ['Chủ thể OCOP 4-5 sao', 'Buyer ASEAN', 'Phân phối trong nước', 'Cơ quan quản lý'],
    expectedAttendees: 300,
    seo: {
      metaTitle: 'Diễn đàn Xuất khẩu OCOP sang ASEAN 2025 | 20/6 Hà Nội - 50 Buyer 10 quốc gia',
      metaDescription: 'Diễn đàn xuất khẩu OCOP sang ASEAN: 50 buyer từ 10 quốc gia, B2B Matchmaking 50 bàn, ký kết MOU. Miễn phí cho OCOP 4-5 sao. Đăng ký trước 10/6.',
      metaKeywords: ['xuất khẩu ocop asean', 'diễn đàn xuất khẩu', 'buyer asean', 'b2b matchmaking ocop', 'thương mại quốc tế'],
      ogTitle: 'Diễn đàn Xuất khẩu OCOP sang ASEAN 2025',
      ogDescription: '20/6/2025 Hà Nội. 50 buyer 10 quốc gia ASEAN. B2B 1-1, ký MOU, workshop chuẩn bị hồ sơ.',
      ogImage: '/images/events/dien-dan-xuat-khau-asean-2025.jpg',
      ogType: 'event',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/tin-tuc-su-kien/su-kien/dien-dan-xuat-khau-asean-2025',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Diễn đàn Xuất khẩu OCOP sang ASEAN 2025',
        startDate: '2025-06-20T08:30:00+07:00',
        endDate: '2025-06-20T17:00:00+07:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Khách sạn InterContinental Hanoi Westlake',
          address: { '@type': 'PostalAddress', streetAddress: '5 Đ. Nhật Tân', addressLocality: 'Hà Nội', addressCountry: 'VN' }
        },
        organizer: { '@type': 'Organization', name: 'Bộ Công Thương' }
      }
    },
    createdAt: '2024-12-15T08:00:00Z',
    updatedAt: '2025-01-20T08:00:00Z'
  },
  {
    id: 'event-3',
    slug: 'huan-luyen-ky-nang-so-ocop-mien-bac',
    title: 'Khóa huấn luyện Kỹ năng số cho chủ thể OCOP Miền Bắc - Lượt 1',
    summary: 'Chương trình đào tạo 40h miễn phí: Xây dựng website, Bán hàng trên sàn TMĐT, Livestream, Content marketing, Blockchain truy xuất. Dành cho 500 chủ thể OCOP các tỉnh Miền Bắc.',
    description: `
      <h2>Chương trình "OCOP Digital Skills" - Miền Bắc Lượt 1</h2>
      <p>Trong khuôn khổ chương trình OCOP Digital, Bộ KH&ĐT phối hợp Viettel, VNPT tổ chức khóa đào tạo kỹ năng số miễn phí cho 500 chủ thể OCOP tại 5 điểm tập trung Miền Bắc.</p>
      
      <h3>Thời gian & Địa điểm (5 điểm tập trung)</h3>
      <table>
        <thead><tr><th>Tỉnh/Thành phố</th><th>Thời gian</th><th>Địa điểm</th><th>Số lượng</th></tr></thead>
        <tbody>
          <tr><td>Hà Nội</td><td>7-11/4/2025</td><td>Trung tâm Đào tạo Viettel, Cầu Giấy</td><td>150</td></tr>
          <tr><td>Thái Nguyên</td><td>14-18/4/2025</td><td>Trung tâm Đào tạo VNPT, Thái Nguyên</td><td>80</td></tr>
          <tr><td>Lào Cai</td><td>21-25/4/2025</td><td>Nhà văn hóa tỉnh Lào Cai</td><td>70</td></tr>
          <tr><td>Sơn La</td><td>28/4-2/5/2025</td><td>Trường Cao đẳng Nghề Sơn La</td><td>100</td></tr>
          <tr><td>Điện Biên</td><td>5-9/5/2025</td><td>Trung tâm Văn hóa tỉnh Điện Biên</td><td>100</td></tr>
        </tbody>
      </table>
      
      <h3>Chương trình đào tạo 40h (5 ngày x 8h)</h3>
      <ol>
        <li><strong>Ngày 1: Nền tảng số OCOP</strong> - Giới thiệu ocop.vn, ocopmall.vn, Đăng ký tài khoản, Quản lý hồ sơ sản phẩm</li>
        <li><strong>Ngày 2: Website & SEO</strong> - Sử dụng template website OCOP, Cập nhật nội dung, SEO cơ bản, Google Search Console</li>
        <li><strong>Ngày 3: Bán hàng Sàn TMĐT</strong> - Mở shop Shopee/Lazada/TikTok Shop, Quản lý đơn hàng, CRM, Chăm sóc khách hàng</li>
        <li><strong>Ngày 4: Livestream & Content</strong> - Kỹ thuật livestream bán hàng, Viết content, Chụp ảnh/quay video sản phẩm, Công cụ AI</li>
        <li><strong>Ngày 5: Blockchain & An toàn</strong> - Truy xuất nguồn gốc blockchain, Chữ ký số, An toàn mạng, Bảo mật dữ liệu, Thi thực hành</li>
      </ol>
      
      <h3>Hỗ trợ học viên</h3>
      <ul>
        <li>Miễn 100% học phí, tài liệu, phần mềm</li>
        <li>Hỗ trợ ăn trưa, xe đi lại trong ngày</li>
        <li>Hỗ trợ chỗ ở cho học viên từ xa (tối đa 3 đêm)</li>
        <li>Cấp chứng chỉ "OCOP Digital Practitioner" (có hiệu lực 2 năm)</li>
        <li>Hỗ trợ sau đào tạo: 6 tháng tư vấn miễn phí qua Hotline/Zalo group</li>
      </ul>
      
      <h3>Điều kiện tham gia</h3>
      <ul>
        <li>Là chủ thể OCOP (HTX, Doanh nghiệp, Hộ gia đình) đang hoạt động</li>
        <li>Sản phẩm đã đạt OCOP 3 sao trở lên</li>
        <li>Có thiết bị: Laptop/Smartphone, kết nối internet ổn định</li>
        <li>Cam kết hoàn thành 100% chương trình, áp dụng vào thực tế</li>
      </ul>
      
      <p><strong>Đăng ký:</strong> Trước 25/3/2025 tại website ocop.vn/khoa-dao-tao-so hoặc qua Sở KH&ĐT tỉnh/thành phố.</p>
    `,
    content: `Khóa đào tạo Kỹ năng số OCOP Miền Bắc 40h miễn phí: Website, Sàn TMĐT, Livestream, Blockchain. 5 điểm: HN, Thái Nguyên, Lào Cai, Sơn La, Điện Biên. Cấp chứng chỉ OCOP Digital Practitioner.`,
    status: 'sap-dien-ra',
    eventType: 'dao-tao',
    startDate: '2025-04-07T08:00:00Z',
    endDate: '2025-05-09T17:00:00Z',
    timezone: 'Asia/Ho_Chi_Minh',
    venue: '5 điểm tập trung Miền Bắc',
    address: 'Hà Nội, Thái Nguyên, Lào Cai, Sơn La, Điện Biên',
    province: 'Hà Nội',
    district: 'Cầu Giấy',
    coordinates: { lat: 21.0285, lng: 105.8542 },
    organizer: 'Bộ Kế hoạch và Đầu tư',
    coOrganizers: [
      'Tập đoàn Viettel',
      'Tập đoàn VNPT',
      'Hiệp hội Thương mại điện tử Việt Nam (VECOM)'
    ],
    sponsors: [
      'Viettel',
      'VNPT'
    ],
    featuredImage: '/images/events/huan-luyen-ky-nang-so-mien-bac.jpg',
    images: [
      '/images/events/dao-tao-so-1.jpg',
      '/images/events/dao-tao-so-2.jpg'
    ],
    registration: {
      required: true,
      url: 'https://ocopvietnam.vn/dang-ky-dao-tao-so-mien-bac',
      deadline: '2025-03-25T23:59:59Z',
      capacity: 500,
      fee: 0,
      feeDescription: 'Hoàn toàn miễn phí (học phí, tài liệu, ăn trưa, chứng chỉ)'
    },
    tags: ['đào tạo', 'kỹ năng số', 'chuyển đổi số', 'miền bắc', 'livestream', 'sàn tmđt', 'blockchain', 'miễn phí'],
    targetAudience: ['Chủ thể OCOP 3-5 sao Miền Bắc', 'Nhân viên bán hàng', 'Quản trị marketing'],
    expectedAttendees: 500,
    seo: {
      metaTitle: 'Đào tạo Kỹ năng số OCOP Miền Bắc miễn phí 40h | 7/4-9/5/2025 - 5 địa điểm',
      metaDescription: 'Khóa đào tạo kỹ năng số OCOP Miền Bắc 40h miễn phí: Website, Sàn TMĐT, Livestream, Blockchain. 5 điểm: HN, Thái Nguyên, Lào Cai, Sơn La, Điện Biên. Cấp chứng chỉ. ĐK trước 25/3.',
      metaKeywords: ['đào tạo kỹ năng số ocop', 'ocop digital skills', 'miễn phí', 'livestream bán hàng', 'sàn tmđt', 'blockchain truy xuất', 'miền bắc'],
      ogTitle: 'Đào tạo Kỹ năng số OCOP Miền Bắc miễn phí 40h',
      ogDescription: '7/4-9/5/2025 tại 5 tỉnh. Website, Sàn TMĐT, Livestream, Blockchain. Cấp chứng chỉ. Hỗ trợ ăn ở, đi lại.',
      ogImage: '/images/events/huan-luyen-ky-nang-so-mien-bac.jpg',
      ogType: 'event',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/tin-tuc-su-kien/su-kien/huan-luyen-ky-nang-so-ocop-mien-bac',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Khóa huấn luyện Kỹ năng số cho chủ thể OCOP Miền Bắc - Lượt 1',
        startDate: '2025-04-07T08:00:00+07:00',
        endDate: '2025-05-09T17:00:00+07:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: '5 điểm tập trung Miền Bắc',
          address: { '@type': 'PostalAddress', addressLocality: 'Hà Nội', addressCountry: 'VN' }
        },
        organizer: { '@type': 'Organization', name: 'Bộ Kế hoạch và Đầu tư' }
      }
    },
    createdAt: '2025-01-10T08:00:00Z',
    updatedAt: '2025-02-15T08:00:00Z'
  },
  {
    id: 'event-4',
    slug: 'ngay-hoi-ocop-tay-nguyen-2024',
    title: 'Ngày hội OCOP Tây Nguyên 2024 - "Cà phê & Sô-cô-la"',
    summary: 'Sự kiện khánh thành 300 sản phẩm OCOP mới tại Tây Nguyên. Triển lãm cà phê Robusta, Arabica, Culi, Honey; Sô-cô-la bean-to-bar. 50.000 khách tham quan tại Buôn Ma Thuột.',
    description: `
      <h2>Ngày hội OCOP Tây Nguyên 2024 - Thành công rực rỡ</h2>
      <p>Từ 20-24/11/2024, Tại Quảng trường Trung tâm, TP. Buôn Ma Thuột (Đắk Lắk), Ngày hội OCOP Tây Nguyên đã diễn ra thành công tuyệt đối, khẳng định vị thế "Vương quốc Cà phê - Sô-cô-la Việt Nam".</p>
      
      <h3>Kết quả nổi bật</h3>
      <ul>
        <li><strong>300 sản phẩm OCOP mới</strong> được công bố (120 sản phẩm 5 sao, 180 sản phẩm 4 sao)</li>
        <li><strong>50.000 lượt khách</strong> tham quan, mua sắm trong 5 ngày</li>
        <li><strong>Doanh thu bán hàng:</strong> 45 tỷ VNĐ (trực tiếp tại hội chợ)</li>
        <li><strong>Ký kết 25 MOU</strong> hợp tác xuất khẩu, phân phối, du lịch trị giá 120 tỷ VNĐ</li>
        <li><strong>100 buyer quốc tế</strong> từ 15 quốc gia tham dự B2B</li>
      </ul>
      
      <h3>Sản phẩm tiêu biểu</h3>
      <ul>
        <li>Cà phê Robusta Buôn Ma Thuột OCOP 5 sao (5 đơn vị)</li>
        <li>Cà phê Arabica Cao suốp OCOP 5 sao (3 đơn vị)</li>
        <li>Cà phê Culi (Peaberry) OCOP 5 sao (4 đơn vị)</li>
        <li>Cà phê Honey, Natural, Anaerobic OCOP 4-5 sao (15 đơn vị)</li>
        <li>Sô-cô-la Bean-to-bar Đắk Lắk OCOP 5 sao (8 đơn vị)</li>
        <li>Sô-cô-la nhân rượu, nhân trái cây, nhân hạt OCOP 4 sao (12 đơn vị)</li>
        <li>Nước ép cà phê, Bia cà phê, Kem cà phê OCOP 3-4 sao (20 đơn vị)</li>
      </ul>
      
      <h3>Hoạt động đã diễn ra</h3>
      <ul>
        <li>Lễ khai mạc & Công bố 300 sản phẩm OCOP mới</li>
        <li>Cuộc thi "Golden Coffee Bean" - Tìm hạt cà phê ngon nhất</li>
        <li>Workshop "Bean to Bar: Từ hạt cacao đến tấm sô-cô-la"</li>
        <li>Diễn đàn "Cà phê Việt Nam: Thách thức & Cơ hội 2025"</li>
        <li>Tour du lịch "Cà phê & Sô-cô-la" - Tham quan vườn, nhà máy</li>
        <li>Livestream bán hàng 48h liên tục - Doanh thu 12 tỷ VNĐ</li>
      </ul>
      
      <p>Sự kiện đã kết thúc thành công. Xem lại Livestream tại <a href="https://youtube.com/@ocopvietnam">YouTube OCOP Việt Nam</a>. Chào đón Ngày hội OCOP Tây Nguyên 2026!</p>
    `,
    content: `Ngày hội OCOP Tây Nguyên 2024 đã diễn ra thành công 20-24/11/2024 tại Buôn Ma Thuột. 300 sản phẩm OCOP mới, 50.000 khách, 45 tỷ doanh thu, 25 MOU 120 tỷ. Cà phê, Sô-cô-la Bean-to-bar.`,
    status: 'da-ket-thuc',
    eventType: 'le-hoi',
    startDate: '2024-11-20T08:00:00Z',
    endDate: '2024-11-24T21:00:00Z',
    timezone: 'Asia/Ho_Chi_Minh',
    venue: 'Quảng trường Trung tâm TP. Buôn Ma Thuột',
    address: 'Phường Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk',
    province: 'Đắk Lắk',
    district: 'Buôn Ma Thuột',
    coordinates: { lat: 12.6676, lng: 108.0428 },
    organizer: 'UBND tỉnh Đắk Lắk',
    coOrganizers: [
      'Bộ Kế hoạch và Đầu tư',
      'Hiệp hội Cà phê - Cacao Việt Nam (VICOFA)',
      'Tập đoàn Vinacafe'
    ],
    sponsors: [
      'Trung Nguyên Legend',
      'Vinacafe',
      'Highlands Coffee',
      'Agribank Đắk Lắk'
    ],
    featuredImage: '/images/events/ngay-hoi-ocop-tay-nguyen-2024.jpg',
    images: [
      '/images/events/tay-nguyen-2024-1.jpg',
      '/images/events/tay-nguyen-2024-2.jpg',
      '/images/events/tay-nguyen-2024-3.jpg',
      '/images/events/tay-nguyen-2024-4.jpg'
    ],
    registration: {
      required: false,
      url: '',
      deadline: '',
      capacity: 0,
      fee: 0,
      feeDescription: 'Miễn phí vào cửa, không cần đăng ký trước'
    },
    tags: ['ngày hội', 'tây nguyên', 'cà phê', 'sô-cô-la', 'đắk lắk', 'buôn ma thuột', '2024', 'hoàn thành'],
    targetAudience: ['Người dân địa phương', 'Du khách', 'Chủ thể OCOP', 'Buyer', 'Phân phối'],
    expectedAttendees: 50000,
    seo: {
      metaTitle: 'Ngày hội OCOP Tây Nguyên 2024 - 300 sản phẩm mới, 50.000 khách, 45 tỷ doanh thu',
      metaDescription: 'Ngày hội OCOP Tây Nguyên 20-24/11/2024: 300 sản phẩm OCOP mới (120 sp 5 sao), 50.000 khách, 45 tỷ doanh thu, 25 MOU 120 tỷ. Cà phê, Sô-cô-la Bean-to-bar.',
      metaKeywords: ['ngày hội ocop tây nguyên', 'cà phê ocop', 'sô-cô-la ocop', 'đắk lắk', 'buôn ma thuột', '2024'],
      ogTitle: 'Ngày hội OCOP Tây Nguyên 2024 - Vương quốc Cà phê & Sô-cô-la',
      ogDescription: '20-24/11/2024 Buôn Ma Thuột. 300 sp OCOP mới. 50.000 khách. Cà phê Robusta, Arabica, Culi, Honey. Sô-cô-la Bean-to-bar.',
      ogImage: '/images/events/ngay-hoi-ocop-tay-nguyen-2024.jpg',
      ogType: 'event',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/tin-tuc-su-kien/su-kien/ngay-hoi-ocop-tay-nguyen-2024',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Ngày hội OCOP Tây Nguyên 2024 - "Cà phê & Sô-cô-la"',
        startDate: '2024-11-20T08:00:00+07:00',
        endDate: '2024-11-24T21:00:00+07:00',
        eventStatus: 'https://schema.org/EventCompleted',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Quảng trường Trung tâm TP. Buôn Ma Thuột',
          address: { '@type': 'PostalAddress', addressLocality: 'Buôn Ma Thuột', addressRegion: 'Đắk Lắk', addressCountry: 'VN' }
        },
        organizer: { '@type': 'Organization', name: 'UBND tỉnh Đắk Lắk' }
      }
    },
    createdAt: '2024-10-01T08:00:00Z',
    updatedAt: '2024-11-25T08:00:00Z'
  },
  {
    id: 'event-5',
    slug: 'workshop-truy-xuat-nguon-goc-blockchain',
    title: 'Workshop "Blockchain cho Truy xuất nguồn gốc OCOP" - Lượt 2',
    summary: 'Workshop chuyên sâu công nghệ Blockchain áp dụng truy xuất nguồn gốc sản phẩm OCOP. Demo trực tiếp hệ thống, hướng dẫn tích hợp API, chuẩn bị hồ sơ chứng nhận. 200 chủ thể OCOP tham dự.',
    description: `
      <h2>Workshop Blockchain Truy xuất nguồn gốc OCOP - Lượt 2</h2>
      <p>Sau thành công Lượt 1 (Tháng 10/2024), Lượt 2 tập trung thực hành tích hợp API, demo hệ thống production, giải quyết vướng mắc kỹ thuật.</p>
      
      <h3>Thông tin</h3>
      <ul>
        <li><strong>Thời gian:</strong> 08:30 - 16:30, 15/3/2025</li>
        <li><strong>Địa điểm:</strong> Tòa nhà Viettel, 285 Cách Mạng Tháng 8, Quận 10, TP.HCM</li>
        <li><strong>Hình thức:</strong> Trực tiếp (200 chỗ) + Online (Zoom - không giới hạn)</li>
      </ul>
      
      <h3>Chương trình chi tiết</h3>
      <table>
        <thead><tr><th>Thời gian</th><th>Nội dung</th></tr></thead>
        <tbody>
          <tr><td>08:30-09:00</td><td>Check-in, nhận tài liệu, quà tặng (Hardware wallet Ledger Nano S cho 50 đơn vị đầu tiên)</td></tr>
          <tr><td>09:00-09:45</td><td>Tổng quan: Blockchain trong truy xuất Nguồn gốc - Tiêu chuẩn GS1, ISO 22005, EU DR</td></tr>
          <tr><td>09:45-10:30</td><td>Kiến trúc hệ thống OCOP Traceability: Smart contract, IPFS, Oracle, Multi-chain (Polygon, BSC, VNPT Chain)</td></tr>
          <tr><td>10:30-10:45</td><td>Nghỉ giải lao</td></tr>
          <tr><td>10:45-12:00</td><td>Demo trực tiếp: Tạo batch, Mint NFT truy xuất, Quét QR code người tiêu dùng, Dashboard quản trị</td></tr>
          <tr><td>12:00-13:30</td><td>Trưa: Bữa trưa, Networking, Demo booth các nhà cung cấp giải pháp</td></tr>
          <tr><td>13:30-15:00</td><td>Thực hành: Tích hợp API vào website/Sàn TMĐT, Xử lý lỗi thường gặp, Best practices</td></tr>
          <tr><td>15:00-15:15</td><td>Nghỉ giải lao</td></tr>
          <tr><td>15:15-16:15</td><td>Q&A chuyên sâu: Chi phí, Gas fee, Pháp lý, Chữ ký số, Bảo mật, Mở rộng</td></tr>
          <tr><td>16:15-16:30</td><td>Trao chứng chỉ "OCOP Blockchain Integrator", Chụp ảnh, Bế mạc</td></tr>
        </tbody>
      </table>
      
      <h3>Hỗ trợ sau Workshop</h3>
      <ul>
        <li>Tài khoản Sandbox miễn phí 6 tháng (Viettel Blockchain, VNPT Chain)</li>
        <li>Hỗ trợ kỹ thuật 1-1 qua Zalo group chuyên biệt (6 tháng)</li>
        <li>Hỗ trợ 100% chi phí Gas fee 3 tháng đầu (tối đa 500 giao dịch/tháng)</li>
        <li>Template Smart contract, SDK, Postman collection sẵn sàng</li>
      </ul>
      
      <p><strong>Đăng ký:</strong> Miễn phí. Ưu tiên chủ thể OCOP 4-5 sao đã có website/sàn TMĐT. ĐK trước 10/3/2025.</p>
    `,
    content: `Workshop Blockchain OCOP Lượt 2: Demo production, thực hành API, Smart contract, NFT truy xuất. Tặng Ledger Nano S 50 đơn vị đầu. Hỗ trợ Gas fee 3 tháng. ĐK trước 10/3.`,
    status: 'sap-dien-ra',
    eventType: 'workshop',
    startDate: '2025-03-15T08:30:00Z',
    endDate: '2025-03-15T16:30:00Z',
    timezone: 'Asia/Ho_Chi_Minh',
    venue: 'Tòa nhà Viettel',
    address: '285 Cách Mạng Tháng 8, Quận 10, TP.HCM',
    province: 'TP.HCM',
    district: 'Quận 10',
    coordinates: { lat: 10.7769, lng: 106.6950 },
    organizer: 'Tập đoàn Viettel',
    coOrganizers: [
      'Bộ Kế hoạch và Đầu tư',
      'VNPT Chain',
      'Hiệp hội Blockchain Việt Nam'
    ],
    sponsors: [
      'Viettel',
      'Ledger',
      'Polygon Labs'
    ],
    featuredImage: '/images/events/workshop-blockchain-truy-xuat-2.jpg',
    images: [
      '/images/events/blockchain-workshop-1.jpg',
      '/images/events/blockchain-workshop-2.jpg'
    ],
    registration: {
      required: true,
      url: 'https://ocopvietnam.vn/dang-ky-workshop-blockchain-2',
      deadline: '2025-03-10T23:59:59Z',
      capacity: 200,
      fee: 0,
      feeDescription: 'Miễn phí. Tặng Hardware wallet Ledger Nano S cho 50 đơn vị đăng ký sớm nhất'
    },
    tags: ['workshop', 'blockchain', 'truy xuất nguồn gốc', 'traceability', 'nft', 'smart contract', 'viettel', 'miễn phí'],
    targetAudience: ['Chủ thể OCOP 4-5 sao', 'Lập trình viên', 'Quản trị hệ thống', 'Chuyên gia chất lượng'],
    expectedAttendees: 200,
    seo: {
      metaTitle: 'Workshop Blockchain Truy xuất Nguồn gốc OCOP Lượt 2 | 15/3 TP.HCM - Tặng Ledger Nano S',
      metaDescription: 'Workshop Blockchain OCOP Lượt 2: Demo production, thực hành API, Smart contract, NFT truy xuất. Tặng Ledger Nano S 50 đơn vị đầu. Hỗ trợ Gas fee 3 tháng. ĐK trước 10/3.',
      metaKeywords: ['blockchain ocop', 'truy xuất nguồn gốc', 'workshop blockchain', 'nft truy xuất', 'smart contract', 'viettel blockchain', 'ledger nano s'],
      ogTitle: 'Workshop Blockchain Truy xuất Nguồn gốc OCOP - Lượt 2',
      ogDescription: '15/3/2025 TP.HCM. Demo production, thực hành API, tặng Ledger Nano S. Hỗ trợ Gas fee 3 tháng.',
      ogImage: '/images/events/workshop-blockchain-truy-xuat-2.jpg',
      ogType: 'event',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/tin-tuc-su-kien/su-kien/workshop-truy-xuat-nguon-goc-blockchain',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Workshop "Blockchain cho Truy xuất nguồn gốc OCOP" - Lượt 2',
        startDate: '2025-03-15T08:30:00+07:00',
        endDate: '2025-03-15T16:30:00+07:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Tòa nhà Viettel',
          address: { '@type': 'PostalAddress', streetAddress: '285 Cách Mạng Tháng 8', addressLocality: 'TP.HCM', addressCountry: 'VN' }
        },
        organizer: { '@type': 'Organization', name: 'Tập đoàn Viettel' }
      }
    },
    createdAt: '2025-01-20T08:00:00Z',
    updatedAt: '2025-02-20T08:00:00Z'
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const status = searchParams.get('status')?.split(',') as ('sap-dien-ra' | 'dang-dien-ra' | 'da-ket-thuc')[] | null;
  const eventType = searchParams.get('eventType')?.split(',');
  const province = searchParams.get('province')?.split(',');
  const q = searchParams.get('q')?.toLowerCase();
  const sort = searchParams.get('sort') || 'startDate';
  const order = searchParams.get('order') as 'asc' | 'desc' || 'asc';

  let filtered = [...eventsData];

  // Apply filters
  if (status && status.length > 0) {
    filtered = filtered.filter(e => status.includes(e.status));
  }
  if (eventType && eventType.length > 0) {
    filtered = filtered.filter(e => e.eventType && eventType.includes(e.eventType));
  }
  if (province && province.length > 0) {
    filtered = filtered.filter(e => e.province && province.includes(e.province));
  }
  if (q) {
    filtered = filtered.filter(e =>
      e.title.toLowerCase().includes(q) ||
      (e.summary && e.summary.toLowerCase().includes(q)) ||
      (e.description && e.description.toLowerCase().includes(q)) ||
      (e.tags && e.tags.some(t => t.toLowerCase().includes(q))) ||
      (e.province && e.province.toLowerCase().includes(q)) ||
      (e.organizer && e.organizer.toLowerCase().includes(q))
    );
  }

  // Sort
  filtered.sort((a, b) => {
    const aVal = (a[sort as keyof Event] as any) ?? '';
    const bVal = (b[sort as keyof Event] as any) ?? '';
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;
  const events = filtered.slice(start, start + limit);

  // Get unique filter options
  const statuses = [...new Set(eventsData.map(e => e.status))];
  const eventTypes = [...new Set(eventsData.map(e => e.eventType))];
  const provinces = [...new Set(eventsData.map(e => e.province))];

  return NextResponse.json({
    data: events,
    meta: {
      page,
      limit,
      total: totalItems,
      totalPages,
    },
    filters: {
      statuses,
      eventTypes,
      provinces,
    }
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    }
  });
}