// API Route: /api/search
// Returns search results and suggestions across all content types

import { NextRequest, NextResponse } from 'next/server';
import { SearchSuggestion, SearchParams, PaginatedResponse, REVALIDATE_TAGS } from '@ocop/shared-types';

// Mock search index - in production this would come from a search engine (Algolia, Meilisearch, Elasticsearch)
const searchIndex = {
  products: [
    { id: 'prod-1', slug: 'ca-phe-buon-ma-thuot-5-sao', title: 'Cà phê Buôn Ma Thuột 5 sao', type: 'product', category: 'Cà phê', url: '/san-pham/ca-phe-buon-ma-thuot-5-sao', icon: '☕' },
    { id: 'prod-2', slug: 'go-m-bat-trang-5-sao', title: 'Gốm Bát Tràng 5 sao', type: 'product', category: 'Gốm sứ', url: '/san-pham/go-m-bat-trang-5-sao', icon: '🏺' },
    { id: 'prod-3', slug: 'lua-van-phuc-5-sao', title: 'Lụa Vạn Phúc 5 sao', type: 'product', category: 'Dệt may', url: '/san-pham/lua-van-phuc-5-sao', icon: '👘' },
    { id: 'prod-4', slug: 'nuoc-mam-phu-quoc-5-sao', title: 'Nước mắm Phú Quốc 5 sao', type: 'product', category: 'Nước mắm', url: '/san-pham/nuoc-mam-phu-quoc-5-sao', icon: '🐟' },
    { id: 'prod-5', slug: 'tra-tan-cuong-5-sao', title: 'Trà Tân Cương 5 sao', type: 'product', category: 'Trà', url: '/san-pham/tra-tan-cuong-5-sao', icon: '🍵' },
    { id: 'prod-6', slug: 'cao-su-binh-phuoc-4-sao', title: 'Cao su Bình Phước 4 sao', type: 'product', category: 'Cao su', url: '/san-pham/cao-su-binh-phuoc-4-sao', icon: '🌳' },
    { id: 'prod-7', slug: 'dieu-binh-dinh-4-sao', title: 'Điều Bình Định 4 sao', type: 'product', category: 'Hạt điều', url: '/san-pham/dieu-binh-dinh-4-sao', icon: '🌰' },
    { id: 'prod-8', slug: 'ho-tieu-phu-quoc-5-sao', title: 'Hạt tiêu Phú Quốc 5 sao', type: 'product', category: 'Gia vị', url: '/san-pham/ho-tieu-phu-quoc-5-sao', icon: '🌶️' },
    { id: 'prod-9', slug: 'nghe-tay-ninh-4-sao', title: 'Nghệ Tây Ninh 4 sao', type: 'product', category: 'Gia vị', url: '/san-pham/nghe-tay-ninh-4-sao', icon: '🟡' },
    { id: 'prod-10', slug: 'den-da-nang-5-sao', title: 'Đèn đá Nổi Đà Nẵng 5 sao', type: 'product', category: 'Thủ công mỹ nghệ', url: '/san-pham/den-da-nang-5-sao', icon: '💡' },
  ],
  stories: [
    { id: 'story-1', slug: 'nguoi-giu-lua-van-phuc', title: 'Người giữ lửa lụa Vạn Phúc', type: 'story', category: 'Câu chuyện OCOP', url: '/cau-chuyen/nguoi-giu-lua-van-phuc', icon: '📖' },
    { id: 'story-2', slug: 'bat-trang-tu-lang-nghe-den-thuong-hieu-quoc-te', title: 'Bát Tràng: Từ làng nghề đến thương hiệu quốc tế', type: 'story', category: 'Câu chuyện OCOP', url: '/cau-chuyen/bat-trang-tu-lang-nghe-den-thuong-hieu-quoc-te', icon: '📖' },
    { id: 'story-3', slug: 'ca-phe-viet-nam-vuot-bien', title: 'Cà phê Việt Nam vượt biển', type: 'story', category: 'Xuất khẩu', url: '/cau-chuyen/ca-phe-viet-nam-vuot-bien', icon: '📖' },
    { id: 'story-4', slug: 'phu-quoc-nuoc-mam-chuan-eu', title: 'Phú Quốc: Nước mắm đạt chuẩn EU', type: 'story', category: 'Chứng nhận', url: '/cau-chuyen/phu-quoc-nuoc-mam-chuan-eu', icon: '📖' },
  ],
  destinations: [
    { id: 'dest-1', slug: 'buon-ma-thuot', title: 'Buôn Ma Thuột - Thủ đô cà phê', type: 'destination', category: 'Du lịch cà phê', url: '/diem-den/buon-ma-thuot', icon: '🗺️' },
    { id: 'dest-2', slug: 'bat-trang', title: 'Làng gốm Bát Tràng', type: 'destination', category: 'Làng nghề', url: '/diem-den/bat-trang', icon: '🗺️' },
    { id: 'dest-3', slug: 'van-phuc', title: 'Làng lụa Vạn Phúc', type: 'destination', category: 'Làng nghề', url: '/diem-den/van-phuc', icon: '🗺️' },
    { id: 'dest-4', slug: 'phu-quoc', title: 'Đảo Phú Quốc - Vương quốc nước mắm', type: 'destination', category: 'Du lịch biển', url: '/diem-den/phu-quoc', icon: '🗺️' },
    { id: 'dest-5', slug: 'tan-cuong', title: 'Tân Cương - Vùng trà đặc sản', type: 'destination', category: 'Du lịch trà', url: '/diem-den/tan-cuong', icon: '🗺️' },
  ],
  news: [
    { id: 'news-1', slug: 'nghi-dinh-85-2024-ho-tro-thuong-hieu-quoc-te', title: 'Nghị định 85/2024: Hỗ trợ thương hiệu quốc tế OCOP 5 sao', type: 'news', category: 'Chính sách & Cơ chế', url: '/tin-tuc/nghi-dinh-85-2024-ho-tro-thuong-hieu-quoc-te', icon: '📰' },
    { id: 'news-2', slug: 'hoi-nghi-tong-ket-10-nam-ocop', title: 'Hội nghị Tổng kết 10 năm OCOP: 11.000 sản phẩm', type: 'news', category: 'Hoạt động - Xúc tiến thương mại', url: '/tin-tuc/hoi-nghi-tong-ket-10-nam-ocop', icon: '📰' },
    { id: 'news-3', slug: 'thi-truong-ocop-quy-4-2024', title: 'Báo cáo thị trường OCOP Quý 4/2024: Cà phê +40%', type: 'news', category: 'OCOP Địa phương', url: '/tin-tuc/thi-truong-ocop-quy-4-2024', icon: '📰' },
  ],
  events: [
    { id: 'event-1', slug: 'hoi-cho-ocop-ha-noi-2025', title: 'Hội chợ OCOP Hà Nội 2025', type: 'event', category: 'Hội chợ', url: '/su-kien/hoi-cho-ocop-ha-noi-2025', icon: '📅' },
    { id: 'event-2', slug: 'trien-lam-anuga-2025', title: 'Triển lãm ANUGA 2025 - Đức', type: 'event', category: 'Triển lãm quốc tế', url: '/su-kien/trien-lam-anuga-2025', icon: '📅' },
    { id: 'event-3', slug: 'workshop-xuat-khau-eu', title: 'Workshop: Xuất khẩu OCOP sang EU', type: 'event', category: 'Đào tạo', url: '/su-kien/workshop-xuat-khau-eu', icon: '📅' },
  ],
  chuThe: [
    { id: 'chuthe-1', slug: 'hop-tac-xa-chan-dao-luc-ngan', title: 'Hợp tác xã Chanh Đào Lục Ngân', type: 'chu-the', category: 'Hợp tác xã', url: '/chu-the/hop-tac-xa-chan-dao-luc-ngan', icon: '🏢' },
    { id: 'chuthe-2', slug: 'cong-ty-gom-bat-trang', title: 'Công ty Gốm Bát Tràng', type: 'chu-the', category: 'Doanh nghiệp', url: '/chu-the/cong-ty-gom-bat-trang', icon: '🏢' },
    { id: 'chuthe-3', slug: 'hop-tac-xa-lua-van-phuc', title: 'Hợp tác xã Lụa Vạn Phúc', type: 'chu-the', category: 'Hợp tác xã', url: '/chu-the/hop-tac-xa-lua-van-phuc', icon: '🏢' },
  ],
  integration: [
    { id: 'int-1', slug: 'xuat-khau-ocop-sang-eu-chuan-csrd', title: 'Xuất khẩu OCOP sang EU: Chuẩn bị CSRD, EUDR', type: 'integration', category: 'Xuất khẩu & Thị trường quốc tế', url: '/ocop-hoi-nhap/xuat-khau-ocop-sang-eu-chuan-csrd', icon: '🌐' },
    { id: 'int-2', slug: 'digital-passport-ocop-2025', title: 'OCOP Digital Passport 2025: Blockchain truy xuất', type: 'integration', category: 'Chuyển đổi số', url: '/ocop-hoi-nhap/digital-passport-ocop-2025', icon: '🌐' },
    { id: 'int-3', slug: 'haccp-iso-22000-cho-ocop', title: 'HACCP/ISO 22000 cho sản phẩm OCOP', type: 'integration', category: 'Tiêu chuẩn & Chứng nhận', url: '/ocop-hoi-nhap/haccp-iso-22000-cho-ocop', icon: '🌐' },
  ],
  ocopNow: [
    { id: 'ocopnow-1', slug: 'nghi-dinh-85-2024-ho-tro-xay-dung-thuong-hieu-quoc-te-ocop', title: 'Nghị định 85/2024: Hỗ trợ thương hiệu quốc tế', type: 'ocop-now', category: 'Chính sách', url: '/ocop-now/nghi-dinh-85-2024-ho-tro-xay-dung-thuong-hieu-quoc-te-ocop', icon: '⚡' },
    { id: 'ocopnow-2', slug: '10-nam-ocop-tong-ket', title: 'Tổng kết 10 năm OCOP: 11.000 sản phẩm', type: 'ocop-now', category: 'Sự kiện', url: '/ocop-now/10-nam-ocop-tong-ket', icon: '⚡' },
    { id: 'ocopnow-3', slug: 'thi-truong-quy4-2024', title: 'Thị trường OCOP Quý 4/2024: Cà phê dẫn đầu', type: 'ocop-now', category: 'Thị trường', url: '/ocop-now/thi-truong-quy4-2024', icon: '⚡' },
  ],
};

// Flatten all items for global search
const allSearchItems = Object.values(searchIndex).flat();

function searchItems(query: string, filters: SearchParams): SearchSuggestion[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  let results = allSearchItems.filter(item => {
    const matchesQuery =
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q);

    const matchesCategory = !filters.category || item.category === filters.category;
    const matchesType = !filters.type || item.type === filters.type;

    return matchesQuery && matchesCategory && matchesType;
  });

  // Sort by relevance (exact title match first, then partial)
  results.sort((a, b) => {
    const aExact = a.title.toLowerCase() === q;
    const bExact = b.title.toLowerCase() === q;
    if (aExact && !bExact) return -1;
    if (!aExact && bExact) return 1;

    const aStarts = a.title.toLowerCase().startsWith(q);
    const bStarts = b.title.toLowerCase().startsWith(q);
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;

    return 0;
  });

  return results.slice(0, 20);
}

function getSuggestions(query: string, limit: number = 10): SearchSuggestion[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const suggestions = allSearchItems
    .filter(item => item.title.toLowerCase().includes(q))
    .slice(0, limit);

  return suggestions;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const params: SearchParams = {
    q: searchParams.get('q') || '',
    category: searchParams.get('category') || undefined,
    type: searchParams.get('type') || undefined,
    page: searchParams.get('page') || '1',
    limit: searchParams.get('limit') || '20',
    sort: searchParams.get('sort') || 'relevance',
    order: (searchParams.get('order') as 'asc' | 'desc') || 'desc',
  };

  const page = parseInt(params.page || '1', 10);
  const limit = parseInt(params.limit || '20', 10);

  if (!params.q) {
    // Return popular suggestions when no query
    const popularSuggestions = allSearchItems
      .filter(item => ['product', 'story', 'destination', 'news', 'event'].includes(item.type))
      .slice(0, 10);

    return NextResponse.json(
      {
        data: [],
        meta: { page: 1, limit, total: 0, totalPages: 0 },
        suggestions: popularSuggestions,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  }

  const results = searchItems(params.q!, params);
  const total = results.length;
  const totalPages = Math.ceil(total / limit);
  const paginatedResults = results.slice((page - 1) * limit, page * limit);

  const suggestions = getSuggestions(params.q!, 5);

  const response: PaginatedResponse<SearchSuggestion> & { suggestions: SearchSuggestion[] } = {
    data: paginatedResults,
    meta: { page, limit, total, totalPages },
    suggestions,
  };

  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  });
}