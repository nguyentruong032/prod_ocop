// API Route: /api/ecosystem-journeys
// Returns ecosystem journey routes for eco-tourism

import { NextRequest, NextResponse } from 'next/server';
import { EcosystemJourney, REVALIDATE_TAGS } from '@ocop/shared-types';

// Mock ecosystem journeys data - extracted from index.html design references
// Transformed to match EcosystemJourney interface from shared-types
const ecosystemJourneysData: EcosystemJourney[] = [
  {
    id: 'journey-bac-bo-mountains',
    slug: 'bac-bo-mountains',
    name: 'Hành Trình Bắc Bộ: Núi Rừng - Văn Hóa Dân Tộc',
    region: 'Bắc Bộ',
    description: 'Khám phá hệ sinh thái núi rừng Bắc Bộ qua các vườn quốc gia, khu bảo tồn thiên nhiên và văn hóa dân tộc độc đáo. Hành trình kết hợp du lịch sinh thái, trải nghiệm văn hóa và nghỉ dưỡng.',
    shortDescription: 'Núi rừng, văn hóa dân tộc, vườn quốc gia Bắc Bộ',
    duration: '7-10 ngày',
    difficulty: 'Trung bình - Khó',
    bestTime: 'Tháng 9 - Tháng 11, Tháng 3 - Tháng 5',
    provinces: ['Hà Giang', 'Cao Bằng', 'Bắc Kạn', 'Lào Cai', 'Lai Châu', 'Điện Biên', 'Sơn La', 'Hòa Bình'],
    highlights: [
      'Cao nguyên đá Đồng Văn - Di sản địa chất UNESCO',
      'Vườn quốc gia Ba Bể - Hồ nước ngọt lớn nhất',
      'Vườn quốc gia Hoàng Liên - Fansipan "Nóc nhà Đông Dương"',
      'Văn hóa Mông, Dao, Tày, Nùng, Lô Lô, Pù Péo',
      'Terraced fields (ruộng bậc thang) Mù Cang Chải, Y Tý',
      'Chợ phiên cuối tuần vùng cao',
    ],
    itinerary: [
      { day: 1, title: 'Hà Nội → Hà Giang', activities: ['Khởi hành sớm', 'Đi qua Tuyên Quang', 'Đến Hà Giang chiều', 'Check-in homestay'] },
      { day: 2, title: 'Hà Giang → Đồng Văn', activities: ['Đi đèo Bắc Sum', 'Cổng trời Quản Bạ', 'Thung lũng Nho Quế', 'Cổ trấn Đồng Văn'] },
      { day: 3, title: 'Đồng Văn → Lũng Cú → Mèo Vạc', activities: ['Cột mốc Lũng Cú', 'Đèo Ma Pi Lèng', 'Thuyền Nho Quế', 'Chợ Mèo Vạc'] },
      { day: 4, title: 'Mèo Vạc → Cao Bằng', activities: ['Đi qua Bảo Lạc', 'Tham quan Bản Gióc', 'Hang Ngườm Ngao', 'Đến Cao Bằng'] },
      { day: 5, title: 'Cao Bằng → Ba Bể', activities: ['Di tích Pác Bó', 'Hồ Bản Viết', 'Đến Ba Bể', 'Homestay bản Pac Ngòi'] },
      { day: 6, title: 'Ba Bể → Lào Cai', activities: ['Chèo kayak hồ Ba Bể', 'Hang Puồng', 'Di chuyển về Lào Cai', 'Nghỉ đêm Sapa'] },
      { day: 7, title: 'Sapa → Fansipan → Hà Nội', activities: ['Cáp treo Fansipan', 'Bản Cát Cát', 'Khởi hành về Hà Nội'] },
    ],
    inclusions: [
      'Xe du lịch 16-29 chỗ điều hòa',
      'Khách sạn/Homestay tiêu chuẩn 2-3 người/phòng',
      'Ăn uống theo chương trình (ăn địa phương)',
      'Vé tham quan, vé cáp treo Fansipan',
      'Hướng dẫn viên tiếng Việt am hiểu địa phương',
      'Nước khoáng 2 chai/người/ngày',
      'Bảo hiểm du lịch',
    ],
    exclusions: [
      'Vé máy bay/xe khứ hồi đến điểm xuất phát',
      'Chi phí cá nhân, đồ uống ngoài giờ ăn',
      'Tip hướng dẫn viên, tài xế (khuyến khích)',
      'Các dịch vụ không đề cập trong chương trình',
      'Phụ phí phòng đơn (nếu có)',
    ],
    priceFrom: '12.000.000đ',
    priceTo: '25.000.000đ',
    images: [
      '/images/ecosystem-journeys/bac-bo-1.jpg',
      '/images/ecosystem-journeys/bac-bo-2.jpg',
      '/images/ecosystem-journeys/bac-bo-3.jpg',
      '/images/ecosystem-journeys/bac-bo-4.jpg',
    ],
    seo: {
      metaTitle: 'Hành Trình Du Lịch Sinh Thái Bắc Bộ - Núi Rừng, Văn Hóa, UNESCO | OCOP Vietnam',
      metaDescription: 'Tour du lịch sinh thái Bắc Bộ 7-10 ngày: Đồng Văn, Ba Bể, Fansipan, Sapa. Di sản UNESCO, văn hóa dân tộc, OCOP. Giá từ 12.000.000đ.',
      metaKeywords: ['du lịch sinh thái Bắc Bộ', 'Hà Giang Loop', 'Cao nguyên đá Đồng Văn', 'Ba Bể', 'Fansipan', 'văn hóa dân tộc'],
      ogTitle: 'Hành Trình Bắc Bộ: Núi Rừng - Văn Hóa Dân Tộc',
      ogDescription: 'Khám phá hệ sinh thái núi rừng và văn hóa đa dạng 17 dân tộc Bắc Bộ',
      ogImage: '/images/ecosystem-journeys/bac-bo-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'journey-trung-bo-heritage',
    slug: 'trung-bo-heritage',
    name: 'Hành Trình Trung Bộ: Di Sản - Biển - Hang Động',
    region: 'Trung Bộ',
    description: 'Kết hợp di sản văn hóa thế giới, hệ sinh thái biển đảo và hang động kỳ vĩ. Hành trình từ di sản cổ điển đến thiên nhiên hoang sơ.',
    shortDescription: 'Di sản UNESCO, hang động, biển đảo Trung Bộ',
    duration: '5-7 ngày',
    difficulty: 'Dễ - Trung bình',
    bestTime: 'Tháng 4 - Tháng 8 (khô ráo)',
    provinces: ['Quảng Bình', 'Quảng Trị', 'Thừa Thiên Huế', 'Đà Nẵng', 'Quảng Nam', 'Quảng Ngãi', 'Bình Định', 'Phú Yên'],
    highlights: [
      'Vườn quốc gia Phong Nha - Kẻ Bàng - Di sản UNESCO',
      'Đại Nội Huế - Cố đô di sản UNESCO',
      'Phố cổ Hội An - Di sản UNESCO',
      'Thánh địa Mỹ Sơn - Văn hóa Chăm Pa',
      'Biển Đà Nẵng, Quy Nhơn, Phú Yên',
      'Hệ sinh thái ngập mặn, rừng ngập nước',
    ],
    itinerary: [
      { day: 1, title: 'Đà Nẵng → Phong Nha', activities: ['Đón sân bay Đà Nẵng', 'Di chuyển Quảng Bình', 'Tham quan Hang Thiên Đường', 'Nghỉ đêm Phong Nha'] },
      { day: 2, title: 'Phong Nha → Huế', activities: ['Hang Tiên Sơn, Hang Tối', 'Kayak hang Tối', 'Di chuyển Huế (qua Hồ Chí Minh)', 'Du thuyền sông Hương'] },
      { day: 3, title: 'Huế → Hội An', activities: ['Đại Nội, lăng tẩm', 'Di chuyển Hội An (qua Hải Vân)', 'Phố cổ Hội An đêm', 'Nghỉ Hội An'] },
      { day: 4, title: 'Hội An → Mỹ Sơn → Đà Nẵng', activities: ['Thánh địa Mỹ Sơn', 'Làng rau Trà Quế', 'Đi Đà Nẵng', 'Bà Nà Hills (tùy chọn)'] },
      { day: 5, title: 'Đà Nẵng → Quy Nhơn/Phú Yên', activities: ['Biển Mỹ Khê', 'Di chuyển nam', 'Biển Kỳ Co, Eo Gió', 'Nghỉ resort'] },
    ],
    inclusions: [
      'Xe du lịch cao cấp điều hòa',
      'Khách sạn 3-4* / Resort biển',
      'Ăn uống theo chương trình (đặc sản địa phương)',
      'Vé tham quan, vé cáp treo Bà Nà Hills',
      'Hướng dẫn viên tiếng Việt',
      'Nước khoáng, bảo hiểm du lịch',
    ],
    exclusions: [
      'Vé máy bay khứ hồi',
      'Chi phí cá nhân, đồ uống ngoài giờ ăn',
      'Tip hướng dẫn viên, tài xế',
      'Các dịch vụ không đề cập',
      'Phụ phí phòng đơn',
    ],
    priceFrom: '8.500.000đ',
    priceTo: '18.000.000đ',
    images: [
      '/images/ecosystem-journeys/trung-bo-1.jpg',
      '/images/ecosystem-journeys/trung-bo-2.jpg',
      '/images/ecosystem-journeys/trung-bo-3.jpg',
      '/images/ecosystem-journeys/trung-bo-4.jpg',
    ],
    seo: {
      metaTitle: 'Hành Trình Du Lịch Sinh Thái Trung Bộ - 3 Di Sản UNESCO, Hang Động, Biển | OCOP Vietnam',
      metaDescription: 'Tour Trung Bộ 5-7 ngày: Phong Nha, Huế, Hội An, Mỹ Sơn, biển Đà Nẵng/Quy Nhơn. 3 di sản UNESCO, hang động, biển đẹp. Giá từ 8.500.000đ.',
      metaKeywords: ['du lịch sinh thái Trung Bộ', 'Phong Nha Kẻ Bàng', 'Huế Hội An', 'Mỹ Sơn', 'biển Đà Nẵng', 'di sản UNESCO'],
      ogTitle: 'Hành Trình Trung Bộ: Di Sản - Biển - Hang Động',
      ogDescription: 'Hành trình qua 3 di sản UNESCO và hệ sinh thái biển đảo tuyệt đẹp',
      ogImage: '/images/ecosystem-journeys/trung-bo-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'journey-tay-nguyen-highlands',
    slug: 'tay-nguyen-highlands',
    name: 'Hành Trình Tây Nguyên: Cao Nguyên - Rừng Cây - Cà Phê',
    region: 'Tây Nguyên',
    description: 'Khám phá cao nguyên basalt đỏ, rừng nhiệt đới, văn hóa Gong, và làng cà phê nổi tiếng thế giới. Hành trình kết hợp sinh thái, nông nghiệp và văn hóa.',
    shortDescription: 'Cao nguyên basalt, cà phê, văn hóa Gong, rừng nhiệt đới',
    duration: '5-7 ngày',
    difficulty: 'Trung bình',
    bestTime: 'Tháng 11 - Tháng 3 (mùa khô, hoa cà phê nở)',
    provinces: ['Kon Tum', 'Gia Lai', 'Đắk Lắk', 'Đắk Nông', 'Lâm Đồng'],
    highlights: [
      'Cà phê Buôn Ma Thuột - Thủ phủ cà phê Việt Nam',
      'Văn hóa Gong - Di sản phi vật thể UNESCO',
      'Vườn quốc gia Chư Mom Ray, Yok Đôn',
      'Thác Drây Nur, Drây Sap, Thác Drayling',
      'Hồ Lắk - Hồ nước ngọt tự nhiên lớn thứ 2',
      'Đà Lạt - Thành phố ngàn hoa, nông nghiệp cao tech',
    ],
    itinerary: [
      { day: 1, title: 'Buôn Ma Thuột', activities: ['Đón sân bay Buôn Ma Thuột', 'Tham quan Bảo tàng Cà phê', 'Vườn cà phê Trung Nguyên', 'Nghỉ Buôn Ma Thuột'] },
      { day: 2, title: 'Buôn Ma Thuột → Lắk → Kon Tum', activities: ['Hồ Lắk, thuyền đáy bằng', 'Dân tộc M\'nông', 'Di chuyển Kon Tum', 'Nhà cộng đồng Rông'] },
      { day: 3, title: 'Kon Tum → Gia Lai', activities: ['Vườn quốc gia Chư Mom Ray', 'Văn hóa Gong Ba Na', 'Di chuyển Pleiku', 'Biển hồ T\'Nưng'] },
      { day: 4, title: 'Gia Lai → Đắk Lắk/Đắk Nông', activities: ['Thác Drây Nur, Drây Sap', 'Vườn tiêu, cao su', 'Đến Đắk Nông', 'Hang động Krông Nô'] },
      { day: 5, title: 'Đắk Nông → Đà Lạt', activities: ['Vườn quốc gia Tà Đùng', 'Di chuyển Đà Lạt', 'Vườn hoa, cà phê', 'Nghỉ Đà Lạt'] },
      { day: 6, title: 'Đà Lạt → Về', activities: ['Nông nghiệp cao tech', 'Mua đặc sản', 'Trả sân bay/bus'] },
    ],
    inclusions: [
      'Xe du lịch 16-29 chỗ điều hòa',
      'Khách sạn/Nghỉ dưỡng 2-4* / Farmstay',
      'Ăn uống theo chương trình (đặc sản Tây Nguyên)',
      'Vé tham quan, trải nghiệm văn hóa Gong',
      'Hướng dẫn viên tiếng Việt am hiểu văn hóa dân tộc',
      'Nước khoáng, bảo hiểm du lịch',
    ],
    exclusions: [
      'Vé máy bay khứ hồi',
      'Chi phí cá nhân, đồ uống ngoài giờ ăn',
      'Tip hướng dẫn viên, tài xế',
      'Các dịch vụ không đề cập',
      'Phụ phí phòng đơn',
      'Vé bay nội địa (nếu có trong chương trình)',
    ],
    priceFrom: '9.000.000đ',
    priceTo: '20.000.000đ',
    images: [
      '/images/ecosystem-journeys/tay-nguyen-1.jpg',
      '/images/ecosystem-journeys/tay-nguyen-2.jpg',
      '/images/ecosystem-journeys/tay-nguyen-3.jpg',
      '/images/ecosystem-journeys/tay-nguyen-4.jpg',
    ],
    seo: {
      metaTitle: 'Hành Trình Du Lịch Sinh Thái Tây Nguyên - Cà Phê, Văn Hóa Gong, Rừng | OCOP Vietnam',
      metaDescription: 'Tour Tây Nguyên 5-7 ngày: cà phê Buôn Ma Thuột, văn hóa Gong UNESCO, hồ Lắk, Đà Lạt. Nông nghiệp cao tech, rừng nhiệt đới. Giá từ 9.000.000đ.',
      metaKeywords: ['du lịch sinh thái Tây Nguyên', 'cà phê Buôn Ma Thuột', 'văn hóa Gong', 'Đà Lạt', 'hồ Lắk', 'rừng nhiệt đới'],
      ogTitle: 'Hành Trình Tây Nguyên: Cao Nguyên - Rừng Cây - Cà Phê',
      ogDescription: 'Tinh túy cà phê, âm thanh Gong, và vẻ đẹp cao nguyên basalt đỏ',
      ogImage: '/images/ecosystem-journeys/tay-nguyen-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'journey-mekong-delta',
    slug: 'mekong-delta',
    name: 'Hành Trình Đồng Bằng Sông Cửu Long: Sông Nước - Vườn Trái Cây - Chợ Nổi',
    region: 'Đồng bằng sông Cửu Long',
    description: 'Trải nghiệm văn hóa miền Tây đặc trưng với hệ thống sông ngòi, chợ nổi, vườn trái cây, và ẩm thực đậm đà. Hành trình du lịch sinh thái dựa trên cộng đồng.',
    shortDescription: 'Sông nước, chợ nổi, vườn trái cây, ẩm thực miền Tây',
    duration: '3-5 ngày',
    difficulty: 'Dễ',
    bestTime: 'Tháng 5 - Tháng 8 (mùa trái cây) hoặc Tháng 11 - Tháng 2 (mùa khô)',
    provinces: ['Cần Thơ', 'Vĩnh Long', 'Tiền Giang', 'Bến Tre', 'Trà Vinh', 'Sóc Trăng', 'An Giang', 'Kiên Giang', 'Bạc Liêu', 'Cà Mau'],
    highlights: [
      'Chợ nổi Cái Răng (Cần Thơ) - Chợ nổi lớn nhất',
      'Vườn trái cây Mỹ Khánh, Cái Bè, Vĩnh Long',
      'Khu du lịch sinh thái Tràm Chim (Đồng Tháp)',
      'Rừng ngập mặn U Minh (Kiên Giang, Cà Mau)',
      'Văn hóa Khmer, Chăm, Hoa (Sóc Trăng, Trà Vinh, An Giang)',
      'Phú Quốc - Ngọc trai biển Đông (Kiên Giang)',
    ],
    itinerary: [
      { day: 1, title: 'TP.HCM → Cần Thơ', activities: ['Khởi hành 7:00', 'Đến Cần Thơ 10:30', 'Tham quan chợ nổi Cái Răng (5:00 sáng)', 'Vườn trái cây Mỹ Khánh', 'Nghỉ Cần Thơ'] },
      { day: 2, title: 'Cần Thơ → Vĩnh Long → Bến Tre', activities: ['Chợ nổi Cái Răng bình minh', 'Du thuyền sông Hậu', 'Vĩnh Long: Vườn trái cây, làng gốm', 'Bến Tre: Xẻo Quýt, nước dừa', 'Nghỉ Bến Tre'] },
      { day: 3, title: 'Bến Tre → Trà Vinh → Sóc Trăng', activities: ['Rừng tràm, kênh rạch', 'Chùa Hang (Trà Vinh) - văn hóa Khmer', 'Bát Nâu (Sóc Trăng) - chợ nổi nhỏ', 'Nghỉ Sóc Trăng'] },
      { day: 4, title: 'Sóc Trăng → An Giang → Phú Quốc', activities: ['Chùa Dơi (Sóc Trăng)', 'Đi An Giang: Núi Cam, chợ nổi Long Xuyên', 'Bay ra Phú Quốc', 'Nghỉ resort Phú Quốc'] },
      { day: 5, title: 'Phú Quốc → Về', activities: ['Bãi Kem, VinWonders', 'Mua đặc sản: nước mắm, hạt điều', 'Trả sân bay', 'Bay về'] },
    ],
    inclusions: [
      'Xe du lịch TP.HCM - Miền Tây điều hòa',
      'Homestay ven sông/vườn / Khách sạn 2-4*',
      'Ăn uống theo chương trình (ẩm thực miền Tây)',
      'Vé tham quan, thuyền/xuồng chương trình',
      'Hướng dẫn viên tiếng Việt',
      'Nước khoáng, bảo hiểm du lịch',
    ],
    exclusions: [
      'Vé máy bay/bus khứ hồi TP.HCM',
      'Chi phí cá nhân, đồ uống ngoài giờ ăn',
      'Tip hướng dẫn viên, tài xế, chủ thuyền',
      'Các dịch vụ không đề cập',
      'Phụ phí phòng đơn',
      'Vé bay ra Phú Quốc (nếu có)',
    ],
    priceFrom: '4.500.000đ',
    priceTo: '12.000.000đ',
    images: [
      '/images/ecosystem-journeys/mekong-1.jpg',
      '/images/ecosystem-journeys/mekong-2.jpg',
      '/images/ecosystem-journeys/mekong-3.jpg',
      '/images/ecosystem-journeys/mekong-4.jpg',
    ],
    seo: {
      metaTitle: 'Hành Trình Du Lịch Sinh Thái Miền Tây - Chợ Nổi, Vườn Trái Cây, Phú Quốc | OCOP Vietnam',
      metaDescription: 'Tour Miền Tây 3-5 ngày: chợ nổi Cái Răng, vườn trái cây, rừng tràm, Phú Quốc. Văn hóa Khmer, Chăm, ẩm thực miền Tây. Giá từ 4.500.000đ.',
      metaKeywords: ['du lịch sinh thái Miền Tây', 'chợ nổi Cái Răng', 'vườn trái cây', 'Phú Quốc', 'nước mắm', 'văn hóa Khmer'],
      ogTitle: 'Hành Trình Miền Tây: Sông Nước - Vườn Trái Cây - Chợ Nổi',
      ogDescription: 'Văn hóa miền Tây sinh động: chợ nổi, vườn trái cây, ẩm thực đậm đà',
      ogImage: '/images/ecosystem-journeys/mekong-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const region = searchParams.get('region');
  const search = searchParams.get('search');
  const sort = searchParams.get('sort') || 'name';
  const order = searchParams.get('order') || 'asc';

  let filtered = [...ecosystemJourneysData];

  if (region) {
    filtered = filtered.filter(j => j.region === region);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(j =>
      j.name.toLowerCase().includes(q) ||
      j.region.toLowerCase().includes(q) ||
      j.description.toLowerCase().includes(q) ||
      j.provinces.some(p => p.toLowerCase().includes(q)) ||
      j.highlights.some(h => h.toLowerCase().includes(q))
    );
  }

  // Sorting
  filtered.sort((a, b) => {
    let aVal: string | number = '';
    let bVal: string | number = '';

    switch (sort) {
      case 'name':
        aVal = a.name;
        bVal = b.name;
        break;
      case 'region':
        aVal = a.region;
        bVal = b.region;
        break;
      case 'duration':
        aVal = a.duration;
        bVal = b.duration;
        break;
      default:
        aVal = a.name;
        bVal = b.name;
    }

    if (typeof aVal === 'string') {
      return order === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    return order === 'asc' ? aVal - bVal : bVal - aVal;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;
  const journeys = filtered.slice(start, start + limit);

  return NextResponse.json({
    data: journeys,
    meta: {
      page,
      limit,
      total: totalItems,
      totalPages,
    },
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      'X-Revalidate-Tag': REVALIDATE_TAGS.destinations,
    },
  });
}