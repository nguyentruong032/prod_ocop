// API Route: /api/site-config
// Returns complete site configuration for all micro-frontends

import { NextResponse } from 'next/server';
import { SiteConfig, REVALIDATE_TAGS } from '@ocop/shared-types';

const siteConfig: SiteConfig = {
  brand: {
    name: 'OCOP Việt Nam',
    shortName: 'OCOP',
    tagline: 'Mỗi xã một sản phẩm - Vươn ra biển lớn',
    logo: '/images/logo/ocop-logo.svg',
    logoAlt: 'Logo OCOP Việt Nam - Mỗi xã một sản phẩm',
    colors: {
      primary: '#1B5E20',      // Dark green - main brand
      secondary: '#2E7D32',    // Medium green
      tertiary: '#4CAF50',     // Light green
      gold: '#FFD700',         // Gold accent
      surface: '#FAFAFA',      // Off-white surface
      warmWhite: '#FEFEFE',    // Pure white
      softGreen: '#E8F5E9',    // Light green background
      darkGreen: '#0D2818',    // Very dark green for text
    },
  },
  navigation: {
    main: [
      {
        key: 'san-pham',
        label: 'Sản phẩm OCOP',
        href: '/san-pham',
        children: [
          { key: 'ca-phe', label: 'Cà phê & Cacao', href: '/san-pham?category=ca-phe' },
          { key: 'trai-cay', label: 'Trái cây & Rau củ', href: '/san-pham?category=trai-cay' },
          { key: 'gia-vi', label: 'Gia vị & Chế biến', href: '/san-pham?category=gia-vi' },
          { key: 'thuc-pham', label: 'Thực phẩm chức năng', href: '/san-pham?category=thuc-pham' },
          { key: 'thu-cong', label: 'Thủ công mỹ nghệ', href: '/san-pham?category=thu-cong' },
          { key: 'det-may', label: 'Dệt may & Da', href: '/san-pham?category=det-may' },
          { key: 'du-lich', label: 'Du lịch OCOP', href: '/san-pham?category=du-lich' },
        ],
      },
      {
        key: 'diem-den',
        label: 'Điểm đến du lịch',
        href: '/diem-den',
        children: [
          { key: 'mien-bac', label: 'Miền Bắc', href: '/diem-den?region=mien-bac' },
          { key: 'mien-trung', label: 'Miền Trung', href: '/diem-den?region=mien-trung' },
          { key: 'mien-nam', label: 'Miền Nam', href: '/diem-den?region=mien-nam' },
          { key: 'lang-nghe', label: 'Làng nghề', href: '/diem-den?category=lang-nghe' },
          { key: 'vuon-quoc-gia', label: 'Vườn quốc gia', href: '/diem-den?category=vuon-quoc-gia' },
          { key: 'bien', label: 'Biển & Đảo', href: '/diem-den?category=bien' },
        ],
      },
      {
        key: 'cau-chuyen',
        label: 'Câu chuyện OCOP',
        href: '/cau-chuyen',
        children: [
          { key: 'nong-dan', label: 'Nông dân & Nghệ nhân', href: '/cau-chuyen?category=nong-dan' },
          { key: 'doanh-nghiep', label: 'Doanh nghiệp OCOP', href: '/cau-chuyen?category=doanh-nghiep' },
          { key: 'xuat-khau', label: 'Hành trình xuất khẩu', href: '/cau-chuyen?category=xuat-khau' },
          { key: 'cong-nghe', label: 'Công nghệ & Đổi mới', href: '/cau-chuyen?category=cong-nghe' },
          { key: 'video', label: 'Video OCOP', href: '/cau-chuyen?type=video' },
          { key: 'photo-essay', label: 'Photo Essay', href: '/cau-chuyen?type=photo-essay' },
        ],
      },
      {
        key: 'tin-tuc-su-kien',
        label: 'Tin tức & Sự kiện',
        href: '/tin-tuc-su-kien',
        children: [
          { key: 'tin-tuc', label: 'Tin tức', href: '/tin-tuc-su-kien?type=tin-tuc' },
          { key: 'su-kien', label: 'Sự kiện', href: '/tin-tuc-su-kien?type=su-kien' },
          { key: 'chinh-sach', label: 'Chính sách mới', href: '/tin-tuc-su-kien?category=chinh-sach' },
          { key: 'thi-truong', label: 'Báo cáo thị trường', href: '/tin-tuc-su-kien?category=thi-truong' },
        ],
      },
      {
        key: 'ocop-hoi-nhap',
        label: 'OCOP Hội nhập',
        href: '/ocop-hoi-nhap',
        children: [
          { key: 'xuat-khau', label: 'Xuất khẩu & Thị trường', href: '/ocop-hoi-nhap?category=xuat-khau' },
          { key: 'tieu-chuan', label: 'Tiêu chuẩn & Chứng nhận', href: '/ocop-hoi-nhap?category=tieu-chuan' },
          { key: 'chuyen-doi-so', label: 'Chuyển đổi số', href: '/ocop-hoi-nhap?category=chuyen-doi-so' },
          { key: 'ocop-now', label: 'OCOP NOW', href: '/ocop-hoi-nhap?category=ocop-now' },
        ],
      },
      {
        key: 'chu-the',
        label: 'Chủ thể OCOP',
        href: '/chu-the',
        children: [
          { key: 'hop-tac-xa', label: 'Hợp tác xã', href: '/chu-the?type=hop-tac-xa' },
          { key: 'doanh-nghiep', label: 'Doanh nghiệp', href: '/chu-the?type=doanh-nghiep' },
          { key: 'ho-gia-dinh', label: 'Hộ gia đình', href: '/chu-the?type=ho-gia-dinh' },
          { key: 'ca-nhan', label: 'Cá nhân', href: '/chu-the?type=ca-nhan' },
          { key: 'dang-ky', label: 'Đăng ký OCOP', href: '/chu-the/dang-ky' },
        ],
      },
    ],
    cta: {
      label: 'Đăng ký OCOP',
      href: '/dang-ky-ocop',
      icon: '📝',
    },
    user: {
      icon: '👤',
      href: '/tai-khoan',
    },
  },
  footer: {
    brand: {
      name: 'OCOP Việt Nam',
      description: 'Cổng thông tin điện tử quốc gia về Chương trình "Mỗi xã một sản phẩm" (OCOP). Kết nối sản phẩm, du lịch, câu chuyện và chủ thể OCOP với thị trường trong và ngoài nước.',
      badge: 'Quản lý bởi Bộ Công Thương',
    },
    columns: [
      {
        title: 'Sản phẩm & Du lịch',
        links: [
          { label: 'Sản phẩm OCOP', href: '/san-pham', key: 'san-pham' },
          { label: 'Điểm đến du lịch', href: '/diem-den', key: 'diem-den' },
          { label: 'Làng nghề OCOP', href: '/diem-den?category=lang-nghe', key: 'lang-nghe' },
          { label: 'Tour trải nghiệm', href: '/tour', key: 'tour' },
          { label: 'Đặt phòng & Vé', href: '/dat-ve', key: 'dat-ve' },
        ],
      },
      {
        title: 'Thông tin & Hỗ trợ',
        links: [
          { label: 'Tin tức mới nhất', href: '/tin-tuc-su-kien', key: 'tin-tuc' },
          { label: 'Sự kiện sắp tới', href: '/tin-tuc-su-kien?type=su-kien', key: 'su-kien' },
          { label: 'Chính sách OCOP', href: '/tin-tuc-su-kien?category=chinh-sach', key: 'chinh-sach' },
          { label: 'Hỏi đáp thường gặp', href: '/hoi-dap', key: 'hoi-dap' },
          { label: 'Liên hệ hỗ trợ', href: '/lien-he', key: 'lien-he' },
        ],
      },
      {
        title: 'OCOP Hội nhập',
        links: [
          { label: 'Xuất khẩu OCOP', href: '/ocop-hoi-nhap?category=xuat-khau', key: 'xuat-khau' },
          { label: 'Tiêu chuẩn quốc tế', href: '/ocop-hoi-nhap?category=tieu-chuan', key: 'tieu-chuan' },
          { label: 'Chuyển đổi số', href: '/ocop-hoi-nhap?category=chuyen-doi-so', key: 'chuyen-doi-so' },
          { label: 'OCOP NOW', href: '/ocop-hoi-nhap?category=ocop-now', key: 'ocop-now' },
          { label: 'Digital Passport', href: '/ocop-hoi-nhap/digital-passport', key: 'digital-passport' },
        ],
      },
      {
        title: 'Chủ thể & Đăng ký',
        links: [
          { label: 'Danh sách chủ thể', href: '/chu-the', key: 'chu-the' },
          { label: 'Hợp tác xã', href: '/chu-the?type=hop-tac-xa', key: 'hop-tac-xa' },
          { label: 'Doanh nghiệp', href: '/chu-the?type=doanh-nghiep', key: 'doanh-nghiep' },
          { label: 'Đăng ký OCOP', href: '/dang-ky-ocop', key: 'dang-ky' },
          { label: 'Tra cứu chứng nhận', href: '/tra-cuu', key: 'tra-cuu' },
        ],
      },
      {
        title: 'Kết nối với chúng tôi',
        links: [
          { label: 'Facebook', href: 'https://facebook.com/ocopvietnam', key: 'facebook' },
          { label: 'YouTube', href: 'https://youtube.com/@ocopvietnam', key: 'youtube' },
          { label: 'TikTok', href: 'https://tiktok.com/@ocopvietnam', key: 'tiktok' },
          { label: 'Zalo OA', href: 'https://zalo.me/ocopvietnam', key: 'zalo' },
          { label: 'Email: info@ocop.vn', href: 'mailto:info@ocop.vn', key: 'email' },
        ],
      },
    ],
    copyright: '© 2024 OCOP Việt Nam. Bảo lưu mọi quyền. Bộ Công Thương quản lý.',
    badge: 'Website chính thức của Chương trình OCOP Quốc gia',
  },
  forms: {
    newsletter: {
      title: 'Đăng ký nhận bản tin OCOP',
      description: 'Nhận thông tin mới nhất về sản phẩm, chính sách, sự kiện và cơ hội xuất khẩu OCOP hàng tuần.',
      fields: [
        { name: 'email', type: 'email', label: 'Email', placeholder: 'nhap.email@domain.com', required: true },
        { name: 'name', type: 'text', label: 'Họ tên', placeholder: 'Nguyễn Văn A', required: false },
        { name: 'interests', type: 'select', label: 'Quan tâm', placeholder: 'Chọn chủ đề', required: false, options: ['Sản phẩm mới', 'Chính sách', 'Xuất khẩu', 'Du lịch OCOP', 'Sự kiện', 'Tất cả'] },
      ],
      submitLabel: 'Đăng ký',
      successMessage: 'Cảm ơn bạn đã đăng ký! Bạn sẽ nhận được bản tin OCOP sớm nhất.',
    },
    contact: {
      title: 'Gửi phản hồi / Liên hệ',
      description: 'Chúng tôi sẵn sàng lắng nghe ý kiến đóng góp của bạn về chương trình OCOP.',
      fields: [
        { name: 'name', type: 'text', label: 'Họ tên', placeholder: 'Nguyễn Văn A', required: true },
        { name: 'email', type: 'email', label: 'Email', placeholder: 'nhap.email@domain.com', required: true },
        { name: 'phone', type: 'tel', label: 'Số điện thoại', placeholder: '090 123 4567', required: false },
        { name: 'subject', type: 'select', label: 'Chủ đề', placeholder: 'Chọn chủ đề', required: true, options: ['Sản phẩm OCOP', 'Du lịch OCOP', 'Đăng ký OCOP', 'Xuất khẩu', 'Chính sách', 'Kỹ thuật website', 'Khác'] },
        { name: 'message', type: 'textarea', label: 'Nội dung', placeholder: 'Chi tiết yêu cầu...', required: true },
      ],
      submitLabel: 'Gửi phản hồi',
      successMessage: 'Phản hồi của bạn đã được gửi. Chúng tôi sẽ liên hệ sớm nhất trong 24h.',
    },
    ketNoi: {
      title: 'Kết nối cơ hội kinh doanh',
      description: 'Đăng ký để buyer, nhà phân phối, đối tác liên hệ trực tiếp với chủ thể OCOP.',
      fields: [
        { name: 'companyName', type: 'text', label: 'Tên công ty / Tổ chức', placeholder: 'Công ty TNHH ABC', required: true },
        { name: 'contactPerson', type: 'text', label: 'Người liên hệ', placeholder: 'Nguyễn Văn A', required: true },
        { name: 'email', type: 'email', label: 'Email', placeholder: 'business@company.com', required: true },
        { name: 'phone', type: 'tel', label: 'Số điện thoại', placeholder: '090 123 4567', required: true },
        { name: 'role', type: 'select', label: 'Vai trò', placeholder: 'Chọn vai trò', required: true, options: ['Buyer quốc tế', 'Nhà phân phối trong nước', 'Sàn TMĐT', 'Đầu tư', 'Tổ chức hỗ trợ', 'Báo chí', 'Khác'] },
        { name: 'interestedProducts', type: 'textarea', label: 'Sản phẩm quan tâm', placeholder: 'Cà phê, Gốm, Lụa, Nước mắm...', required: false },
        { name: 'message', type: 'textarea', label: 'Chi tiết yêu cầu', placeholder: 'Mô tả nhu cầu hợp tác...', required: false },
      ],
      submitLabel: 'Gửi yêu cầu kết nối',
      successMessage: 'Yêu cầu kết nối đã được gửi. Đội ngũ OCOP sẽ phối hợp kết nối trong 48h.',
    },
  },
  search: {
    placeholder: 'Tìm kiếm sản phẩm, địa điểm, câu chuyện, tin tức, sự kiện, chủ thể OCOP...',
    suggestions: [
      { title: 'Cà phê Buôn Ma Thuột', type: 'product', url: '/san-pham/ca-phe-buon-ma-thuot-5-sao', category: 'Cà phê', icon: '☕' },
      { title: 'Làng gốm Bát Tràng', type: 'destination', url: '/diem-den/bat-trang', category: 'Làng nghề', icon: '🗺️' },
      { title: 'Người giữ lửa lụa Vạn Phúc', type: 'story', url: '/cau-chuyen/nguoi-giu-lua-van-phuc', category: 'Câu chuyện OCOP', icon: '📖' },
      { title: 'Nghị định 85/2024 OCOP', type: 'news', url: '/tin-tuc/nghi-dinh-85-2024-ho-tro-thuong-hieu-quoc-te', category: 'Chính sách', icon: '📰' },
      { title: 'Hội chợ OCOP Hà Nội 2025', type: 'event', url: '/su-kien/hoi-cho-ocop-ha-noi-2025', category: 'Hội chợ', icon: '📅' },
      { title: 'Hợp tác xã Chanh Đào Lục Ngân', type: 'chu-the', url: '/chu-the/hop-tac-xa-chan-dao-luc-ngan', category: 'Hợp tác xã', icon: '🏢' },
      { title: 'Xuất khẩu OCOP sang EU', type: 'integration', url: '/ocop-hoi-nhap/xuat-khau-ocop-sang-eu-chuan-csrd', category: 'Xuất khẩu', icon: '🌐' },
      { title: 'OCOP Digital Passport 2025', type: 'ocop-now', url: '/ocop-now/ocop-digital-passport-2025', category: 'Công nghệ', icon: '⚡' },
    ],
  },
};

export async function GET() {
  return NextResponse.json(siteConfig, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}