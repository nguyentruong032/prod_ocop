// API Route: /api/tours
// Returns list of eco-tours with pagination and filtering

import { NextRequest, NextResponse } from 'next/server';

// Mock eco-tours data - extracted from index.html design references
const toursData = [
  {
    id: 'eco-tour-ba-be-3d2n',
    slug: 'ba-be-3d2n',
    name: 'Khám phá Hồ Ba Bể - Vườn Quốc Gia Ba Bể 3N2Đ',
    region: 'Bắc Bộ',
    province: 'Bắc Kạn',
    duration: '3 ngày 2 đêm',
    difficulty: 'Dễ',
    groupSize: '8-12 người',
    price: '4.500.000đ',
    originalPrice: '5.200.000đ',
    rating: 4.9,
    reviewCount: 234,
    highlights: [
      'Tham quan hồ Ba Bể - hồ nước ngọt tự nhiên lớn nhất Việt Nam',
      'Thăm hang Pुआng - hang động đá vôi kỳ vĩ',
      'Trải nghiệm văn hóa dân tộc Tày tại bản Pac Ngòi',
      'Thưởng thức đặc sản: cá suối, măng đen, rượu cần',
      'Chèo kayak trên hồ vào buổi sớm mai',
    ],
    itinerary: [
      { day: 1, title: 'Hà Nội - Ba Bể', activities: ['Khởi hành 6:00 sáng', 'Ghé làng nghề gốm Bát Tràng', 'Ăn trưa tại Thái Nguyên', 'Đến Ba Bể 15:00', 'Check-in homestay', 'Dạo quanh bản Pac Ngòi', 'Ăn tối đặc sản', 'Tổ lửa trại, uống rượu cần'] },
      { day: 2, title: 'Khám phá Ba Bể', activities: ['Chèo kayak xem bình minh 5:30', 'Ăn sáng', 'Tham quan hang Puồng', 'Thuyền tham quan hồ Ba Bể', 'Ăn trưa tại nhà dân', 'Thăm thác Đầu Đẳng', 'Về homestay nghỉ ngơi', 'Ăn tối BBQ'] },
      { day: 3, title: 'Ba Bể - Hà Nội', activities: ['Ăn sáng sớm', 'Tham quan chùa Phật Tích', 'Mua đặc sản tại chợ bản', 'Khởi hành về Hà Nội 10:00', 'Ăn trưa trên đường', 'Về Hà Nội 16:00'] },
    ],
    included: [
      'Xe du lịch cao cấp đón/trả tại Hà Nội',
      'Lưu trú 2 đêm homestay tiêu chuẩn 2-3 người/phòng',
      'Ăn uống theo chương trình (2 sáng, 3 trưa, 2 tối)',
      'Vé tham quan, vé thuyền, kayak',
      'Hướng dẫn viên địa phương suốt hành trình',
      'Bảo hiểm du lịch 20.000.000đ/người',
      'Nước uống, khăn lạnh trên xe',
    ],
    excluded: [
      'Chi phí cá nhân, đồ uống ngoài chương trình',
      'Tip hướng dẫn viên, tài xế (khuyên dùng 50.000đ/ngày/người)',
      'VAT (10%)',
    ],
    bestTime: 'Tháng 10 - Tháng 4 năm sau',
    images: [
      { src: '/images/tours/ba-be-1.jpg', alt: 'Hồ Ba Bể bình minh', width: 1200, height: 800 },
      { src: '/images/tours/ba-be-2.jpg', alt: 'Chèo kayak trên hồ Ba Bể', width: 1200, height: 800 },
      { src: '/images/tours/ba-be-3.jpg', alt: 'Homestay bản Pac Ngòi', width: 1200, height: 800 },
    ],
    coordinates: { lat: 22.4167, lng: 105.6167 },
    tags: ['sinh thái', 'văn hóa', 'nghỉ dưỡng', 'gia đình'],
    seo: {
      metaTitle: 'Tour Hồ Ba Bể 3N2Đ - Khám Phá Vườn Quốc Gia Ba Bể | OCOP Vietnam',
      metaDescription: 'Tour du lịch sinh thái Hồ Ba Bể 3 ngày 2 đêm: chèo kayak, thăm hang Puồng, trải nghiệm văn hóa Tày, thưởng thức đặc sản. Giá từ 4.500.000đ. Đặt tour ngay!',
      metaKeywords: ['tour Ba Bể', 'du lịch sinh thái Bắc Kạn', 'hồ Ba Bể', 'tour 3 ngày 2 đêm'],
      ogTitle: 'Tour Hồ Ba Bể 3N2Đ - Khám Phá Vườn Quốc Gia Ba Bể',
      ogDescription: 'Trải nghiệm du lịch sinh thái đỉnh cao tại hồ nước ngọt lớn nhất Việt Nam',
      ogImage: '/images/tours/ba-be-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
  {
    id: 'eco-tour-ban-gioc-4d3n',
    slug: 'ban-gioc-4d3n',
    name: 'Bản Gióc - Pác Bó - Thác Bản Gióc 4N3Đ',
    region: 'Bắc Bộ',
    province: 'Cao Bằng',
    duration: '4 ngày 3 đêm',
    difficulty: 'Trung bình',
    groupSize: '10-15 người',
    price: '6.800.000đ',
    originalPrice: '7.500.000đ',
    rating: 4.8,
    reviewCount: 187,
    highlights: [
      'Chiêm ngưỡng thác Bản Gióc - thác nước đẹp nhất Việt Nam',
      'Tham quan di tích sử Pác Bó - nơi Bác Hồ về sau 30 năm đi cứu nước',
      'Khám phá hang Ngườm Ngao - hang động vạn năm',
      'Trải nghiệm văn hóa Tày, Nùng tại bản Đàm Thòn',
      'Thưởng thức 7 món đặc sản Cao Bằng',
    ],
    itinerary: [
      { day: 1, title: 'Hà Nội - Cao Bằng', activities: ['Khởi hành 5:30 sáng', 'Ăn sáng trên đường', 'Đến Cao Bằng 12:00', 'Ăn trưa', 'Tham quan Pác Bó, hang Cốc Bó', 'Check-in khách sạn/homestay', 'Tự do khám phá thị trấn', 'Ăn tối đặc sản'] },
      { day: 2, title: 'Thác Bản Gióc - Hang Ngườm Ngao', activities: ['Ăn sáng 6:30', 'Khởi hành đi Bản Gióc 7:30', 'Tham quan thác Bản Gióc', 'Tham quan hang Ngườm Ngao', 'Ăn trưa picnic', 'Ghé bản Đàm Thòn - làng gốm', 'Về Cao Bằng', 'Ăn tối'] },
      { day: 3, title: 'Cao Bằng - Hồ Bản Viết - Mắt Thần', activities: ['Ăn sáng', 'Đi hồ Bản Viết', 'Tham quan Mắt Thần', 'Ăn trưa', 'Tham quan làng nghề đan tre', 'Về Cao Bằng', 'Ăn tối chia tay'] },
      { day: 4, title: 'Cao Bằng - Hà Nội', activities: ['Ăn sáng sớm', 'Mua đặc sản', 'Khởi hành 8:00', 'Ăn trưa trên đường', 'Về Hà Nội 15:00'] },
    ],
    included: [
      'Xe du lịch cao cấp 16-29 chỗ',
      'Lưu trú 3 đêm khách sạn 3* / homestay',
      'Ăn uống đầy đủ theo chương trình',
      'Vé tham quan tất cả điểm',
      'Hướng dẫn viên tiếng Việt',
      'Bảo hiểm du lịch',
      'Nước, khăn lạnh',
    ],
    excluded: [
      'Chi phí cá nhân',
      'Tip hướng dẫn viên, tài xế',
      'VAT 10%',
      'Vé máy bay (nếu có)',
    ],
    bestTime: 'Tháng 9 - Tháng 11 (nước thác nhiều nhất)',
    images: [
      { src: '/images/tours/ban-gioc-1.jpg', alt: 'Thác Bản Gióc toàn cảnh', width: 1200, height: 800 },
      { src: '/images/tours/ban-gioc-2.jpg', alt: 'Hang Ngườm Ngao', width: 1200, height: 800 },
      { src: '/images/tours/ban-gioc-3.jpg', alt: 'Làng gốm Đàm Thòn', width: 1200, height: 800 },
    ],
    coordinates: { lat: 22.8833, lng: 106.7167 },
    tags: ['sinh thái', 'lịch sử', 'văn hóa', 'nhiếp ảnh'],
    seo: {
      metaTitle: 'Tour Bản Gióc 4N3Đ - Thác Nước Đẹp Nhất Việt Nam | OCOP Vietnam',
      metaDescription: 'Tour Cao Bằng 4 ngày 3 đêm: tham quan thác Bản Gióc, Pác Bó, hang Ngườm Ngao, trải nghiệm văn hóa Tày Nùng. Giá từ 6.800.000đ. Book ngay!',
      metaKeywords: ['tour Cao Bằng', 'thác Bản Gióc', 'Pác Bó', 'du lịch sinh thái Cao Bằng'],
      ogTitle: 'Tour Bản Gióc 4N3Đ - Thác Nước Đẹp Nhất Việt Nam',
      ogDescription: 'Khám phá thác nước hoành tráng và di tích lịch sử hào hùng',
      ogImage: '/images/tours/ban-gioc-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
  {
    id: 'eco-tour-sapa-fansipan-3d2n',
    slug: 'sapa-fansipan-3d2n',
    name: 'Sapa - Fansipan "Nóc Nhà Đông Dương" 3N2Đ',
    region: 'Bắc Bộ',
    province: 'Lào Cai',
    duration: '3 ngày 2 đêm',
    difficulty: 'Khó',
    groupSize: '12-18 người',
    price: '5.900.000đ',
    originalPrice: '6.500.000đ',
    rating: 4.9,
    reviewCount: 456,
    highlights: [
      'Chinh phục đỉnh Fansipan 3.143m bằng cáp treo hiện đại',
      'Check-in cầu Rồng May - cầu kính dài nhất thế giới',
      'Tham quan thác Bạc, thác Tình Yêu',
      'Trải nghiệm văn hóa Mông, Dao tại bản Cát Cát',
      'Mua sắm tại chợ Sapa đêm',
    ],
    itinerary: [
      { day: 1, title: 'Hà Nội - Sapa', activities: ['Khởi hành 21:30 (xe giường nằm)', 'Đến Sapa 5:30 sáng', 'Ăn sáng, check-in khách sạn', 'Tham quan thác Bạc, cầu Rồng May', 'Ăn trưa', 'Tham quan bản Cát Cát', 'Tự do khám phá chợ Sapa', 'Ăn tối'] },
      { day: 2, title: 'Chinh phục Fansipan', activities: ['Ăn sáng 6:00', 'Đi cáp treo lên Fansipan 7:00', 'Tham quan chùa Bảo Hà, Kim Sơn Bảo Thắng', 'Check-in đỉnh Fansipan', 'XuốngStation Sapa 11:00', 'Ăn trưa', 'Tham quan vườn Hoa Hồng, Thác Tình Yêu', 'Ăn tối đặc sản'] },
      { day: 3, title: 'Sapa - Hà Nội', activities: ['Ăn sáng', 'Mua đặc sản tại chợ Sapa', 'Khởi hành 11:00', 'Ăn trưa trên đường', 'Về Hà Nội 17:00'] },
    ],
    included: [
      'Xe giường nằm VIP Hà Nội - Sapa khứ hồi',
      'Cáp treo Fansipan khứ hồi',
      'Lưu trú 2 đêm khách sạn 3-4*',
      'Ăn uống theo chương trình',
      'Vé tham quan, vé cáp treo',
      'Hướng dẫn viên',
      'Bảo hiểm du lịch',
    ],
    excluded: [
      'Chi phí cá nhân',
      'Tip',
      'VAT 10%',
      'Đồ ăn thêm ngoài chương trình',
    ],
    bestTime: 'Tháng 3 - Tháng 5 (hoa mộc miến) hoặc Tháng 9 - Tháng 11 (lúa chín)',
    images: [
      { src: '/images/tours/sapa-1.jpg', alt: 'Đỉnh Fansipan', width: 1200, height: 800 },
      { src: '/images/tours/sapa-2.jpg', alt: 'Cầu Rồng May', width: 1200, height: 800 },
      { src: '/images/tours/sapa-3.jpg', alt: 'Bản Cát Cát', width: 1200, height: 800 },
    ],
    coordinates: { lat: 22.3406, lng: 103.8442 },
    tags: ['leo núi', 'check-in', 'văn hóa', 'nghỉ dưỡng'],
    seo: {
      metaTitle: 'Tour Sapa Fansipan 3N2Đ - Chinh Phục Nóc Nhà Đông Dương | OCOP Vietnam',
      metaDescription: 'Tour Sapa 3 ngày 2 đêm: cáp treo Fansipan, cầu Rồng May, thác Bạc, bản Cát Cát. Giá từ 5.900.000đ. Đặt chỗ ngay hôm nay!',
      metaKeywords: ['tour Sapa', 'Fansipan', 'cáp treo Fansipan', 'du lịch Lào Cai'],
      ogTitle: 'Tour Sapa Fansipan 3N2Đ - Chinh Phục Nóc Nhà Đông Dương',
      ogDescription: 'Trải nghiệm đỉnh cao Fansipan 3.143m và văn hóa dân tộc Mông Dao',
      ogImage: '/images/tours/sapa-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
  {
    id: 'eco-tour-ha-giang-loop-4d3n',
    slug: 'ha-giang-loop-4d3n',
    name: 'Hành Trình Cao Nguyên Đá Đồng Văn - Hà Giang 4N3Đ',
    region: 'Bắc Bộ',
    province: 'Hà Giang',
    duration: '4 ngày 3 đêm',
    difficulty: 'Khó',
    groupSize: '8-12 người (xe máy) / 10-16 người (xe du lịch)',
    price: '7.500.000đ',
    originalPrice: '8.200.000đ',
    rating: 5.0,
    reviewCount: 312,
    highlights: [
      'Chinh phục đèo Ma Pi Lèng - "Vua các đèo núi"',
      'Tham quan Lũng Cú - cực Bắc Tổ quốc',
      'Khám phá cổ trấn Đồng Văn - Di sản địa chất UNESCO',
      'Trải nghiệm văn hóa Mông, Lô Lô, Pù Péo',
      'Check-in cổng trời Quản Bạ, thung lũng Nho Quế',
    ],
    itinerary: [
      { day: 1, title: 'Hà Nội - Hà Giang - Quản Bạ', activities: ['Khởi hành 20:00 (xe giường nằm)', 'Đến Hà Giang 5:00', 'Ăn sáng, lên xe máy/xe du lịch', 'Đi qua đèo Bắc Sum', 'Tham quan cổng trời Quản Bạ', 'Ăn trưa tại Yên Minh', 'Đến Đồng Văn 16:00', 'Check-in, ăn tối'] },
      { day: 2, title: 'Đồng Văn - Lũng Cú - Mèo Vạc', activities: ['Ăn sáng 7:00', 'Đi Lũng Cú - cột mốc cực Bắc', 'Tham quan cổ trấn Đồng Văn', 'Đi đèo Ma Pi Lèng', 'Tham quan thung lũng Nho Quế (thuyền)', 'Ăn trưa', 'Đến Mèo Vạc', 'Check-in, ăn tối'] },
      { day: 3, title: 'Mèo Vạc - Khâu Vai - Yên Minh', activities: ['Ăn sáng', 'Tham quan chợ phiên Khâu Vai (nếu đúng ngày)', 'Đi qua đèo Mèo Vạc', 'Tham quan vua Mèo Vạc', 'Ăn trưa', 'Về Yên Minh', 'Check-in homestay', 'Ăn tối'] },
      { day: 4, title: 'Yên Minh - Hà Giang - Hà Nội', activities: ['Ăn sáng sớm', 'Khởi hành về Hà Giang', 'Ghé thung lũng Nho Quế lần 2 (nếu chưa)', 'Ăn trưa Hà Giang', 'Khởi hành về Hà Nội 13:00', 'Về Hà Nội 22:00'] },
    ],
    included: [
      'Xe giường nằm VIP Hà Nội - Hà Giang khứ hồi',
      'Xe máy dẫn đường / xe du lịch 16 chỗ (tùy chọn)',
      'Lưu trú 3 đêm homestay/khách sạn',
      'Ăn uống đầy đủ (3 sáng, 4 trưa, 3 tối)',
      'Vé tham quan, vé thuyền Nho Quế',
      'Hướng dẫn viên địa phương',
      'Bảo hiểm du lịch 50.000.000đ',
      'Phụ kiện an toàn (mũ, áo mưa, găng tay)',
    ],
    excluded: [
      'Chi phí cá nhân, đồ uống',
      'Tip hướng dẫn viên, tài xế',
      'VAT 10%',
      'Bia, rượu ngoài chương trình',
    ],
    bestTime: 'Tháng 10 - Tháng 12 (hoa tam giác mạch) hoặc Tháng 3 - Tháng 5 (mưa ít)',
    images: [
      { src: '/images/tours/ha-giang-1.jpg', alt: 'Đèo Ma Pi Lèng', width: 1200, height: 800 },
      { src: '/images/tours/ha-giang-2.jpg', alt: 'Cột mốc Lũng Cú', width: 1200, height: 800 },
      { src: '/images/tours/ha-giang-3.jpg', alt: 'Cổ trấn Đồng Văn', width: 1200, height: 800 },
    ],
    coordinates: { lat: 22.8211, lng: 104.9786 },
    tags: ['xe máy', 'phiêu lưu', 'văn hóa', 'nhiếp ảnh', 'di sản UNESCO'],
    seo: {
      metaTitle: 'Tour Hà Giang 4N3Đ - Cao Nguyên Đá Đồng Văn & Đèo Ma Pi Lèng | OCOP Vietnam',
      metaDescription: 'Tour Hà Giang 4 ngày 3 đêm: chinh phục Ma Pi Lèng, Lũng Cú, cổ trấn Đồng Văn. Di sản địa chất UNESCO. Giá từ 7.500.000đ. Book tour xe máy/xe du lịch!',
      metaKeywords: ['tour Hà Giang', 'cao nguyên đá Đồng Văn', 'Ma Pi Lèng', 'Lũng Cú', 'du lịch xe máy'],
      ogTitle: 'Tour Hà Giang 4N3Đ - Cao Nguyên Đá Đồng Văn & Đèo Ma Pi Lèng',
      ogDescription: 'Hành trình chinh phục "Vua các đèo núi" và cực Bắc Tổ quốc',
      ogImage: '/images/tours/ha-giang-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
  {
    id: 'eco-tour-phong-nha-3d2n',
    slug: 'phong-nha-3d2n',
    name: 'Phong Nha - Kẻ Bàng: Vương Quốc Hang Động 3N2Đ',
    region: 'Trung Bộ',
    province: 'Quảng Bình',
    duration: '3 ngày 2 đêm',
    difficulty: 'Trung bình',
    groupSize: '10-16 người',
    price: '5.200.000đ',
    originalPrice: '5.800.000đ',
    rating: 4.9,
    reviewCount: 278,
    highlights: [
      'Tham quan hang Thiên Đường - "Cung điện địa cung"',
      'Khám phá hang Tiên Sơn - hang khô đẹp nhất',
      'Thuyền kayak vào hang Tối - trải nghiệm độc đáo',
      'Tham quan Vườn Quốc gia Phong Nha - Kẻ Bàng UNESCO',
      'Thưởng thức hải sản Quảng Bình tươi ngon',
    ],
    itinerary: [
      { day: 1, title: 'Đà Nẵng/Huế - Phong Nha', activities: ['Đón tại sân bay/gaHuế/Đà Nẵng', 'Di chuyển về Phong Nha', 'Ăn trưa', 'Tham quan hang Thiên Đường', 'Check-in khách sạn/homestay', 'Tự do khám phá thị trấn', 'Ăn tối hải sản'] },
      { day: 2, title: 'Hang Tiên Sơn - Hang Tối - Chày River', activities: ['Ăn sáng 7:00', 'Tham quan hang Tiên Sơn', 'Thuyền kayak vào hang Tối', 'Ăn trưa picnic', 'Tham quan Chày River - Dark Cave', 'Thử zipline, bơi lội', 'Về khách sạn', 'Ăn tối'] },
      { day: 3, title: 'Phong Nha - Về', activities: ['Ăn sáng', 'Tham quan hang Phong Nha (thuyền)', 'Mua đặc sản', 'Khởi hành về sân bay/ga', 'Kết thúc tour'] },
    ],
    included: [
      'Xe du lịch đón/trả sân bay/ga',
      'Lưu trú 2 đêm khách sạn 3*',
      'Ăn uống theo chương trình',
      'Vé tham quan tất cả hang động',
      'Kayak, zipline, thiết bị an toàn',
      'Hướng dẫn viên',
      'Bảo hiểm du lịch',
    ],
    excluded: [
      'Vé máy bay/tàu hỏa khứ hồi',
      'Chi phí cá nhân',
      'Tip',
      'VAT 10%',
    ],
    bestTime: 'Tháng 4 - Tháng 8 (khô ráo, dễ đi hang)',
    images: [
      { src: '/images/tours/phong-nha-1.jpg', alt: 'Hang Thiên Đường', width: 1200, height: 800 },
      { src: '/images/tours/phong-nha-2.jpg', alt: 'Kayak hang Tối', width: 1200, height: 800 },
      { src: '/images/tours/phong-nha-3.jpg', alt: 'Chày River', width: 1200, height: 800 },
    ],
    coordinates: { lat: 17.5894, lng: 106.2872 },
    tags: ['hang động', 'di sản UNESCO', 'phiêu lưu', 'sinh thái'],
    seo: {
      metaTitle: 'Tour Phong Nha 3N2Đ - Hang Thiên Đường, Hang Tối, Tiên Sơn | OCOP Vietnam',
      metaDescription: 'Tour Quảng Bình 3 ngày 2 đêm: khám phá hang Thiên Đường, Tiên Sơn, kayak hang Tối. Di sản thế giới UNESCO. Giá từ 5.200.000đ.',
      metaKeywords: ['tour Phong Nha', 'hang Thiên Đường', 'Quảng Bình', 'di sản UNESCO', 'du lịch hang động'],
      ogTitle: 'Tour Phong Nha 3N2Đ - Vương Quốc Hang Động UNESCO',
      ogDescription: 'Khám phá hệ thống hang động lớn nhất và đẹp nhất Đông Dương',
      ogImage: '/images/tours/phong-nha-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
  {
    id: 'eco-tour-hue-hoian-4d3n',
    slug: 'hue-hoian-4d3n',
    name: 'Huế - Hội An: Di Sản Văn Hóa Thế Giới 4N3Đ',
    region: 'Trung Bộ',
    province: 'Thừa Thiên Huế',
    duration: '4 ngày 3 đêm',
    difficulty: 'Dễ',
    groupSize: '15-25 người',
    price: '6.500.000đ',
    originalPrice: '7.200.000đ',
    rating: 4.8,
    reviewCount: 389,
    highlights: [
      'Tham quan Đại Nội Huế - Cố đô di sản UNESCO',
      'Du thuyền sông Hương, chùa Thiên Mụ',
      'Check-in phố cổ Hội An ban đêm lung linh đèn lồng',
      'Tham quan Thánh địa Mỹ Sơn - văn hóa Chăm Pa',
      'Thưởng thức ẩm thực cung đình Huế & đặc sản Hội An',
    ],
    itinerary: [
      { day: 1, title: 'Đà Nẵng - Huế', activities: ['Đón tại sân bay Đà Nẵng', 'Di chuyển về Huế (qua Hải Vân)', 'Ăn trưa', 'Tham quan Đại Nội, Tử Đạo', 'Du thuyền sông Hương, chùa Thiên Mụ', 'Check-in khách sạn', 'Ăn tối ẩm thực cung đình'] },
      { day: 2, title: 'Huế - Hội An', activities: ['Ăn sáng', 'Tham quan lăng Minh Mạng, Khải Định', 'Di chuyển về Hội An (qua đèo Hải Vân)', 'Ăn trưa', 'Tham quan phố cổ Hội An', 'Check-in', 'Tự do check-in phố cổ đêm', 'Ăn tối'] },
      { day: 3, title: 'Mỹ Sơn - Trà Quế', activities: ['Ăn sáng sớm', 'Đi Thánh địa Mỹ Sơn', 'Về Hội An, ăn trưa', 'Tham quan làng rau thơm Trà Quế', 'Làm bánh xèo, cao lầu', 'Tự do mua sắm', 'Ăn tối chia tay'] },
      { day: 4, title: 'Hội An - Đà Nẵng - Về', activities: ['Ăn sáng', 'Mua đặc sản', 'Đi Đà Nẵng', 'Ghé Bà Nà Hills (tùy chọn)', 'Trả tại sân bay'] },
    ],
    included: [
      'Xe du lịch cao cấp suốt hành trình',
      'Lưu trú 3 đêm khách sạn 4*',
      'Ăn uống đầy đủ (3 sáng, 4 trưa, 3 tối)',
      'Vé tham quan Đại Nội, Mỹ Sơn, phố cổ',
      'Du thuyền sông Hương',
      'Hướng dẫn viên',
      'Bảo hiểm du lịch',
    ],
    excluded: [
      'Vé máy bay khứ hồi',
      'Chi phí cá nhân',
      'Tip',
      'VAT 10%',
      'Bà Nà Hills (tự túc)',
    ],
    bestTime: 'Tháng 2 - Tháng 4 (Huế Festival) hoặc Tháng 9 - Tháng 11',
    images: [
      { src: '/images/tours/hue-hoian-1.jpg', alt: 'Đại Nội Huế', width: 1200, height: 800 },
      { src: '/images/tours/hue-hoian-2.jpg', alt: 'Phố cổ Hội An đêm', width: 1200, height: 800 },
      { src: '/images/tours/hue-hoian-3.jpg', alt: 'Thánh địa Mỹ Sơn', width: 1200, height: 800 },
    ],
    coordinates: { lat: 16.4637, lng: 107.5909 },
    tags: ['di sản UNESCO', 'văn hóa', 'ẩm thực', 'nghỉ dưỡng', 'gia đình'],
    seo: {
      metaTitle: 'Tour Huế Hội An 4N3Đ - 2 Di Sản UNESCO & Ẩm Thực Cung Đình | OCOP Vietnam',
      metaDescription: 'Tour Huế Hội An 4 ngày 3 đêm: Đại Nội, Mỹ Sơn, phố cổ Hội An, ẩm thực cung đình. 2 di sản UNESCO. Giá từ 6.500.000đ.',
      metaKeywords: ['tour Huế Hội An', 'Đại Nội', 'Mỹ Sơn', 'phố cổ Hội An', 'di sản UNESCO'],
      ogTitle: 'Tour Huế Hội An 4N3Đ - 2 Di Sản Văn Hóa Thế Giới',
      ogDescription: 'Hành trình qua cố đô Huế và phố cổ Hội An lung linh đèn lồng',
      ogImage: '/images/tours/hue-hoian-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
  {
    id: 'eco-tour-da-lat-3d2n',
    slug: 'da-lat-3d2n',
    name: 'Đà Lạt - Thành Phố Ngàn Hoa 3N2Đ',
    region: 'Tây Nguyên',
    province: 'Lâm Đồng',
    duration: '3 ngày 2 đêm',
    difficulty: 'Dễ',
    groupSize: '15-25 người',
    price: '4.800.000đ',
    originalPrice: '5.500.000đ',
    rating: 4.7,
    reviewCount: 421,
    highlights: [
      'Check-in ga Đà Lạt, chùa Linh Phước, chùa Trúc Lâm',
      'Tham quan vườn hoa, thung lũng tình yêu, hồ Xuân Hương',
      'Du lịch nông nghiệp cao tech: vườn dâu, cà phê, hoa cúc',
      'Thử trượt tuyết, luge tại Đà Lạt Alps',
      'Mua đặc sản: atiso, dâu, cà phê, hoa khô',
    ],
    itinerary: [
      { day: 1, title: 'TP.HCM - Đà Lạt', activities: ['Bay TP.HCM - Đà Lạt (hoặc xe giường nằm)', 'Đón tại sân bay/ga', 'Ăn trưa', 'Tham quan ga Đà Lạt, chùa Linh Phước', 'Check-in khách sạn', 'Dạo hồ Xuân Hương chiều', 'Ăn tối', 'Dạo chợ Đà Lạt đêm'] },
      { day: 2, title: 'Khám phá Đà Lạt', activities: ['Ăn sáng', 'Tham quan thung lũng Tình Yêu, chùa Trúc Lâm', 'Đi cáp treo lên đồi Robin', 'Ăn trưa', 'Du lịch nông nghiệp: vườn dâu, cà phê', 'Thử trượt luge Đà Lạt Alps', 'Ăn tối đặc sản'] },
      { day: 3, title: 'Đà Lạt - TP.HCM', activities: ['Ăn sáng', 'Mua đặc sản tại chợ Đà Lạt', 'Ghé vườn hoa/cafe view', 'Ăn trưa', 'Trả sân bay/ga', 'Bay về TP.HCM'] },
    ],
    included: [
      'Vé máy bay TP.HCM - Đà Lạt khứ hồi (hoặc xe giường nằm)',
      'Xe du lịch tại Đà Lạt',
      'Lưu trú 2 đêm khách sạn 3-4*',
      'Ăn uống theo chương trình',
      'Vé tham quan, cáp treo, luge',
      'Hướng dẫn viên',
      'Bảo hiểm du lịch',
    ],
    excluded: [
      'Chi phí cá nhân',
      'Tip',
      'VAT 10%',
      'Đồ ăn thêm',
    ],
    bestTime: 'Tháng 11 - Tháng 3 (hoa đẹp nhất) hoặc Tháng 7 - Tháng 9 (mùa dâu)',
    images: [
      { src: '/images/tours/da-lat-1.jpg', alt: 'Hồ Xuân Hương', width: 1200, height: 800 },
      { src: '/images/tours/da-lat-2.jpg', alt: 'Vườn dâu Đà Lạt', width: 1200, height: 800 },
      { src: '/images/tours/da-lat-3.jpg', alt: 'Ga Đà Lạt', width: 1200, height: 800 },
    ],
    coordinates: { lat: 11.9429, lng: 108.4419 },
    tags: ['nghỉ dưỡng', 'hoa', 'nông nghiệp', 'gia đình', 'check-in'],
    seo: {
      metaTitle: 'Tour Đà Lạt 3N2Đ - Thành Phố Ngàn Hoa & Nông Nghiệp Cao Tech | OCOP Vietnam',
      metaDescription: 'Tour Đà Lạt 3 ngày 2 đêm: ga Đà Lạt, chùa Linh Phước, vườn dâu, cà phê, trượt luge. Giá từ 4.800.000đ. Bay từ TP.HCM/Hà Nội.',
      metaKeywords: ['tour Đà Lạt', 'thành phố ngàn hoa', 'nông nghiệp cao tech', 'vườn dâu', 'cà phê Đà Lạt'],
      ogTitle: 'Tour Đà Lạt 3N2Đ - Thành Phố Ngàn Hoa & Nông Nghiệp Cao Tech',
      ogDescription: 'Khám phá Đà Lạt bốn mùa hoa, nông nghiệp thông minh và ẩm thực đặc sắc',
      ogImage: '/images/tours/da-lat-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
  {
    id: 'eco-tour-phu-quoc-4d3n',
    slug: 'phu-quoc-4d3n',
    name: 'Phú Quốc - Ngọc Trai Biển Đông 4N3Đ',
    region: 'Đồng bằng sông Cửu Long',
    province: 'Kiên Giang',
    duration: '4 ngày 3 đêm',
    difficulty: 'Dễ',
    groupSize: '15-25 người',
    price: '7.900.000đ',
    originalPrice: '8.900.000đ',
    rating: 4.9,
    reviewCount: 512,
    highlights: [
      'Nghỉ dưỡng biển Bãi Kem - bãi biển đẹp nhất Việt Nam',
      'Tham quan VinWonders, Vinpearl Safari',
      'Đi cáp treo qua biển dài nhất thế giới',
      'Tham quan nhà tù Phú Quốc, chợ đêm Dương Đông',
      'Thưởng thức hải sản tươi, nước mắm Phú Quốc',
    ],
    itinerary: [
      { day: 1, title: 'TP.HCM/Hà Nội - Phú Quốc', activities: ['Bay ra Phú Quốc', 'Đón tại sân bay', 'Ăn trưa', 'Check-in resort', 'Tự do bơi biển Bãi Kem', 'Ăn tối hải sản', 'Dạo chợ đêm Dương Đông'] },
      { day: 2, title: 'VinWonders & Vinpearl Safari', activities: ['Ăn sáng', 'Cáp treo qua biển đi Hòn Tre', 'Chơi VinWonders cả ngày', 'Ăn trưa tại VinWonders', 'Chiều: Vinpearl Safari', 'Về resort', 'Ăn tối BBQ biển'] },
      { day: 3, title: 'Khám phá Phú Quốc', activities: ['Ăn sáng', 'Tham quan nhà tù Phú Quốc', 'Ghé xưởng nước mắm, hồ tiêu', 'Ăn trưa', 'Bơi biển Bãi São / Bãi Kem', 'Massage thư giãn', 'Ăn tối chia tay'] },
      { day: 4, title: 'Phú Quốc - Về', activities: ['Ăn sáng sớm', 'Mua đặc sản: nước mắm, hạt điều, mực khô', 'Trả sân bay', 'Bay về'] },
    ],
    included: [
      'Vé máy bay khứ hồi',
      'Xe du lịch tại Phú Quốc',
      'Lưu trú 3 đêm resort 4-5*',
      'Ăn uống đầy đủ',
      'Vé VinWonders, Vinpearl Safari, cáp treo',
      'Vé tham quan nhà tù',
      'Hướng dẫn viên',
      'Bảo hiểm du lịch',
    ],
    excluded: [
      'Chi phí cá nhân',
      'Tip',
      'VAT 10%',
      'Massage, spa',
    ],
    bestTime: 'Tháng 11 - Tháng 4 (khô ráo, biển đẹp nhất)',
    images: [
      { src: '/images/tours/phu-quoc-1.jpg', alt: 'Bãi Kem Phú Quốc', width: 1200, height: 800 },
      { src: '/images/tours/phu-quoc-2.jpg', alt: 'VinWonders Phú Quốc', width: 1200, height: 800 },
      { src: '/images/tours/phu-quoc-3.jpg', alt: 'Cáp treo qua biển', width: 1200, height: 800 },
    ],
    coordinates: { lat: 10.2237, lng: 103.9667 },
    tags: ['biển', 'nghỉ dưỡng', 'giải trí', 'hải sản', 'gia đình'],
    seo: {
      metaTitle: 'Tour Phú Quốc 4N3Đ - Bãi Kem, VinWonders, Cáp Treo Dài Nhất Thế Giới | OCOP Vietnam',
      metaDescription: 'Tour Phú Quốc 4 ngày 3 đêm: bãi Kem, VinWonders, Safari, cáp treo, hải sản, nước mắm. Giá từ 7.900.000đ. Bay từ TP.HCM/Hà Nội.',
      metaKeywords: ['tour Phú Quốc', 'Bãi Kem', 'VinWonders', 'cáp treo Phú Quốc', 'hải sản Phú Quốc'],
      ogTitle: 'Tour Phú Quốc 4N3Đ - Ngọc Trai Biển Đông & VinWonders',
      ogDescription: 'Nghỉ dưỡng biển đẹp nhất Việt Nam cùng khu giải trí hàng đầu Đông Nam Á',
      ogImage: '/images/tours/phu-quoc-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
  {
    id: 'eco-tour-con-dao-3d2n',
    slug: 'con-dao-3d2n',
    name: 'Côn Đảo - Thiên Đường Biển Hoang Sơ 3N2Đ',
    region: 'Đông Nam Bộ',
    province: 'Bà Rịa - Vũng Tàu',
    duration: '3 ngày 2 đêm',
    difficulty: 'Trung bình',
    groupSize: '10-16 người',
    price: '6.500.000đ',
    originalPrice: '7.200.000đ',
    rating: 4.8,
    reviewCount: 167,
    highlights: [
      'Bơi biển Bãi Đầm Trầu - top 10 bãi biển đẹp nhất thế giới',
      'Tham quan nhà tù Côn Đảo - "Địa ngục trần gian"',
      'Ngắm san hô, câu cá tại Bãi Nhỏ',
      'Tham quan mộ Vợ chồng Võ Thị Sáu, Hàng Dương',
      'Thưởng thức hải sản tươi sống nhất',
    ],
    itinerary: [
      { day: 1, title: 'TP.HCM - Côn Đảo', activities: ['Bay TP.HCM - Côn Đảo (45p)', 'Đón tại sân bay', 'Ăn trưa', 'Check-in resort', 'Bơi biển Bãi Đầm Trầu', 'Ăn tối hải sản', 'Dạo phố thị trấn đêm'] },
      { day: 2, title: 'Khám phá Côn Đảo', activities: ['Ăn sáng', 'Tham quan nhà tù Côn Đảo, chuồng Cọp, chuồng Bò', 'Ghé mộ Võ Thị Sáu, nghĩa trang Hàng Dương', 'Ăn trưa', 'Thuyền ra biển ngắm san hô Bãi Nhỏ', 'Câu cá, bơi lội', 'Về resort', 'Ăn tối'] },
      { day: 3, title: 'Côn Đảo - TP.HCM', activities: ['Ăn sáng sớm', 'Bơi biển cuối cùng / mua đặc sản', 'Ăn trưa', 'Trả sân bay', 'Bay về TP.HCM'] },
    ],
    included: [
      'Vé máy bay TP.HCM - Côn Đảo khứ hồi',
      'Xe du lịch tại Côn Đảo',
      'Lưu trú 2 đêm resort 4*',
      'Ăn uống theo chương trình',
      'Vé tham quan nhà tù',
      'Thuyền ra biển, thiết bị ngắm san hô',
      'Hướng dẫn viên',
      'Bảo hiểm du lịch',
    ],
    excluded: [
      'Chi phí cá nhân',
      'Tip',
      'VAT 10%',
      'Câu cá (cần câu tự túc)',
    ],
    bestTime: 'Tháng 3 - Tháng 9 (biển phẳng, san hô đẹp)',
    images: [
      { src: '/images/tours/con-dao-1.jpg', alt: 'Bãi Đầm Trầu', width: 1200, height: 800 },
      { src: '/images/tours/con-dao-2.jpg', alt: 'Nhà tù Côn Đảo', width: 1200, height: 800 },
      { src: '/images/tours/con-dao-3.jpg', alt: 'San hô Bãi Nhỏ', width: 1200, height: 800 },
    ],
    coordinates: { lat: 8.6833, lng: 106.6000 },
    tags: ['biển', 'lịch sử', 'san hô', 'nghỉ dưỡng', 'hoang sơ'],
    seo: {
      metaTitle: 'Tour Côn Đảo 3N2Đ - Bãi Đầm Trầu, Nhà Tù, Ngắm San Hô | OCOP Vietnam',
      metaDescription: 'Tour Côn Đảo 3 ngày 2 đêm: Bãi Đầm Trầu top 10 thế giới, nhà tù Côn Đảo, ngắm san hô. Giá từ 6.500.000đ. Bay từ TP.HCM 45 phút.',
      metaKeywords: ['tour Côn Đảo', 'Bãi Đầm Trầu', 'nhà tù Côn Đảo', 'ngắm san hô', 'du lịch biển'],
      ogTitle: 'Tour Côn Đảo 3N2Đ - Thiên Đường Biển Hoang Sơ & Lịch Sử',
      ogDescription: 'Khám phá thiên đường biển hoang sơ và di tích lịch sử hào hùng',
      ogImage: '/images/tours/con-dao-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
  {
    id: 'eco-tour-mekong-3d2n',
    slug: 'mekong-3d2n',
    name: 'Đồng Bằng Sông Cửu Long - Chợ Nổi & Vườn Trái Cây 3N2Đ',
    region: 'Đồng bằng sông Cửu Long',
    province: 'Cần Thơ',
    duration: '3 ngày 2 đêm',
    difficulty: 'Dễ',
    groupSize: '15-25 người',
    price: '4.200.000đ',
    originalPrice: '4.800.000đ',
    rating: 4.7,
    reviewCount: 289,
    highlights: [
      'Tham quan chợ nổi Cái Răng - chợ nổi lớn nhất miền Tây',
      'Du thuyền sông Hậu, ngắm bình minh trên sông',
      'Tham quan vườn trái cây: xoài, vải, sầu riêng',
      'Trải nghiệm 삶 việc nông dân: gieo trồng, thu hoạch',
      'Thưởng thức ẩm thực miền Tây: lẩu mắm, bún riêu, cá lóc nướng',
    ],
    itinerary: [
      { day: 1, title: 'TP.HCM - Cần Thơ', activities: ['Khởi hành 7:00 từ TP.HCM', 'Đến Cần Thơ 10:30', 'Ăn trưa', 'Tham quan chùa Ông, nhà cổ Bình Thủy', 'Check-in khách sạn/homestay', 'Dạo chợ đêm Ninh Kiều', 'Ăn tối đặc sản miền Tây'] },
      { day: 2, title: 'Chợ Nổi Cái Răng - Vườn Trái Cây', activities: ['Khởi hành 5:00 xem bình minh chợ nổi Cái Răng', 'Ăn sáng trên thuyền', 'Tham quan vườn trái cây Mỹ Khánh', 'Thử thu hoạch xoài, vải', 'Ăn trưa nhà dân', 'Chiều: thăm làng nghề gốm, làm bánh pía', 'Về Cần Thơ', 'Ăn tối'] },
      { day: 3, title: 'Cần Thơ - TP.HCM', activities: ['Ăn sáng', 'Mua đặc sản tại chợ Cần Thơ', 'Khởi hành 10:00', 'Ăn trưa trên đường', 'Về TP.HCM 14:00'] },
    ],
    included: [
      'Xe du lịch TP.HCM - Cần Thơ khứ hồi',
      'Thuyền tham quan chợ nổi, vườn trái cây',
      'Lưu trú 2 đêm khách sạn/homestay',
      'Ăn uống đầy đủ',
      'Vé tham quan, trải nghiệm nông dân',
      'Hướng dẫn viên',
      'Bảo hiểm du lịch',
    ],
    excluded: [
      'Chi phí cá nhân',
      'Tip',
      'VAT 10%',
      'Rượu bia ngoài chương trình',
    ],
    bestTime: 'Tháng 5 - Tháng 8 (mùa trái cây) hoặc Tháng 11 - Tháng 2 (mùa khô)',
    images: [
      { src: '/images/tours/mekong-1.jpg', alt: 'Chợ nổi Cái Răng bình minh', width: 1200, height: 800 },
      { src: '/images/tours/mekong-2.jpg', alt: 'Vườn trái cây Mỹ Khánh', width: 1200, height: 800 },
      { src: '/images/tours/mekong-3.jpg', alt: 'Du thuyền sông Hậu', width: 1200, height: 800 },
    ],
    coordinates: { lat: 10.0333, lng: 105.7833 },
    tags: ['chợ nổi', 'vườn trái cây', 'văn hóa miền Tây', 'gia đình', 'ẩm thực'],
    seo: {
      metaTitle: 'Tour Miền Tây 3N2Đ - Chợ Nổi Cái Răng, Vườn Trái Cây, Ẩm Thực | OCOP Vietnam',
      metaDescription: 'Tour Đồng Bằng Sông Cửu Long 3 ngày 2 đêm: chợ nổi Cái Răng, vườn trái cây, lẩu mắm, bún riêu. Giá từ 4.200.000đ. Khởi hành từ TP.HCM.',
      metaKeywords: ['tour miền Tây', 'chợ nổi Cái Răng', 'vườn trái cây', 'Cần Thơ', 'ẩm thực miền Tây'],
      ogTitle: 'Tour Miền Tây 3N2Đ - Chợ Nổi & Vườn Trái Cây',
      ogDescription: 'Trải nghiệm văn hóa miền Tây sinh động: chợ nổi, vườn trái cây, ẩm thực đậm đà',
      ogImage: '/images/tours/mekong-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
    },
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '12', 10);
  const region = searchParams.get('region');
  const province = searchParams.get('province');
  const difficulty = searchParams.get('difficulty');
  const search = searchParams.get('search');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const sort = searchParams.get('sort') || 'rating';
  const order = searchParams.get('order') || 'desc';

  let filtered = [...toursData];

  if (region) {
    filtered = filtered.filter(t => t.region === region);
  }

  if (province) {
    filtered = filtered.filter(t => t.province === province);
  }

  if (difficulty) {
    filtered = filtered.filter(t => t.difficulty === difficulty);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.province.toLowerCase().includes(q) ||
      t.region.toLowerCase().includes(q) ||
      t.highlights.some(h => h.toLowerCase().includes(q)) ||
      t.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  if (minPrice) {
    const min = parseInt(minPrice.replace(/\D/g, ''), 10);
    filtered = filtered.filter(t => parseInt(t.price.replace(/\D/g, ''), 10) >= min);
  }

  if (maxPrice) {
    const max = parseInt(maxPrice.replace(/\D/g, ''), 10);
    filtered = filtered.filter(t => parseInt(t.price.replace(/\D/g, ''), 10) <= max);
  }

  // Sorting
  filtered.sort((a, b) => {
    let aVal: number | string;
    let bVal: number | string;

    switch (sort) {
      case 'price':
        aVal = parseInt(a.price.replace(/\D/g, ''), 10);
        bVal = parseInt(b.price.replace(/\D/g, ''), 10);
        break;
      case 'rating':
        aVal = a.rating;
        bVal = b.rating;
        break;
      case 'reviewCount':
        aVal = a.reviewCount;
        bVal = b.reviewCount;
        break;
      case 'duration':
        aVal = a.duration;
        bVal = b.duration;
        break;
      default:
        aVal = a.rating;
        bVal = b.rating;
    }

    if (order === 'asc') {
      return aVal > bVal ? 1 : -1;
    }
    return aVal < bVal ? 1 : -1;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;
  const tours = filtered.slice(start, start + limit);

  return NextResponse.json({
    tours,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
    },
    filters: {
      regions: [...new Set(toursData.map(t => t.region))],
      provinces: [...new Set(toursData.map(t => t.province))],
      difficulties: [...new Set(toursData.map(t => t.difficulty))],
      priceRange: {
        min: Math.min(...toursData.map(t => parseInt(t.price.replace(/\D/g, ''), 10))),
        max: Math.max(...toursData.map(t => parseInt(t.price.replace(/\D/g, ''), 10))),
      },
    },
  });
}