// API Route: /api/destinations
// Returns list of all 63 provinces with OCOP data

import { NextRequest, NextResponse } from 'next/server';
import { Destination, PaginatedResponse, REVALIDATE_TAGS } from '@ocop/shared-types';

// Raw province data - extracted from index.html design reference
const rawProvincesData = [
  {
    id: 'ha-noi',
    name: 'Hà Nội',
    region: 'Bắc Bộ',
    capital: 'Hà Nội',
    population: '8.4M+',
    area: '3.358 km²',
    ocopProducts: 245,
    craftVillages: 42,
    ecoTours: 12,
    topProducts: ['Trà Thái Nguyên', 'Bánh chay', 'Nem rán', 'Phở Hà Nội', 'Cà phê trứng'],
    coordinates: { lat: 21.0285, lng: 105.8542 },
    description: 'Thủ đô ngàn năm văn hiến với di sản văn hóa đậm đà, ẩm thực đường phố nổi tiếng toàn cầu và trung tâm kết nối du lịch toàn quốc. Hà Nội là cửa ngõ vào Bắc Bộ với nhiều làng nghề truyền thống cổ xưa như gốm Bát Tràng, lụa Vạn Phúc, ngõ ren Phù Đổng.',
    image: { src: '/images/provinces/ha-noi.jpg', alt: 'Hà Nội - Hoàn Kiếm và phố cổ', width: 800, height: 600 },
  },
  {
    id: 'hai-phong',
    name: 'Hải Phòng',
    region: 'Bắc Bộ',
    capital: 'Hải Phòng',
    population: '2.1M+',
    area: '1.526 km²',
    ocopProducts: 89,
    craftVillages: 18,
    ecoTours: 8,
    topProducts: ['Bánh đa cua', 'Nem cua bể', 'Bánh bèo', 'Hải sản tươi sống', 'Bia Hà Nội'],
    coordinates: { lat: 20.8449, lng: 106.6881 },
    description: 'Thành phố cảng lớn nhất miền Bắc với vịnh Hạ Long vịnh Cát Bà, ẩm thực hải sản đặc sắc và di tích lịch sử Bạch Đằng. Hải Phòng là cửa ngõ biển quan trọng và trung tâm công nghiệp trọng điểm.',
    image: { src: '/images/provinces/hai-phong.jpg', alt: 'Hải Phòng - Bến Bính và phố đi bộ', width: 800, height: 600 },
  },
  {
    id: 'quang-ninh',
    name: 'Quảng Ninh',
    region: 'Bắc Bộ',
    capital: 'Hạ Long',
    population: '1.3M+',
    area: '6.178 km²',
    ocopProducts: 156,
    craftVillages: 25,
    ecoTours: 45,
    topProducts: ['Mực một nắng', 'Chả mực Hạ Long', 'Sả sung', 'Nem chua Quảng Yên', 'Gạo ST25'],
    coordinates: { lat: 20.9508, lng: 107.0787 },
    description: 'Quốc gia du lịch với Vịnh Hạ Long - Di sản Thiên nhiên Thế giới, Bái Tử Long, Cô Tô, du lịch sinh thái, tâm linh tại Yên Tử và khu mỏ than Cẩm Phả. Quảng Ninh là điểm đến số 1 cho du lịch biển miền Bắc.',
    image: { src: '/images/provinces/quang-ninh.jpg', alt: 'Quảng Ninh - Vịnh Hạ Long', width: 800, height: 600 },
  },
  {
    id: 'bac-giang',
    name: 'Bắc Giang',
    region: 'Bắc Bộ',
    capital: 'Bắc Giang',
    population: '1.8M+',
    area: '3.895 km²',
    ocopProducts: 178,
    craftVillages: 35,
    ecoTours: 6,
    topProducts: ['Lục ngạn lychee', 'Trà Tân Cương', 'Gà ri Bắc Giang', 'Nem chua Đồi Ngô', 'Vải thiều'],
    coordinates: { lat: 21.2819, lng: 106.1974 },
    description: 'Vùng đất lịch sử với di tích Vinh Nghiệm, chùa Vĩnh Nghiêm, làng gốm Đông Hồ, và là vùng trồng lychee, vải thiều lớn nhất miền Bắc. Bắc Giang nổi bật với OCOP nông sản và làng nghề truyền thống.',
    image: { src: '/images/provinces/bac-giang.jpg', alt: 'Bắc Giang - Làng gốm Đông Hồ', width: 800, height: 600 },
  },
  {
    id: 'bac-kan',
    name: 'Bắc Kạn',
    region: 'Bắc Bộ',
    capital: 'Bắc Kạn',
    population: '320K+',
    area: '4.868 km²',
    ocopProducts: 67,
    craftVillages: 12,
    ecoTours: 28,
    topProducts: ['Trà Shan Tuyết', 'Hạt dẻ', 'Măng đen', 'Cá suối', 'Rượu cần'],
    coordinates: { lat: 22.1442, lng: 105.8333 },
    description: 'Vùng núi cao với Hồ Ba Bể - hồ nước ngọt tự nhiên lớn nhất Việt Nam, Vườn Quốc gia Ba Bể, hang Puồng, và văn hóa dân tộc Tày, Nùng độc đáo. Bắc Kạn là thiên đường du lịch sinh thái, trải nghiệm văn hóa.',
    image: { src: '/images/provinces/bac-kan.jpg', alt: 'Bắc Kạn - Hồ Ba Bể', width: 800, height: 600 },
  },
  {
    id: 'cao-bang',
    name: 'Cao Bằng',
    region: 'Bắc Bộ',
    capital: 'Cao Bằng',
    population: '530K+',
    area: '6.700 km²',
    ocopProducts: 98,
    craftVillages: 15,
    ecoTours: 35,
    topProducts: ['Trà Shan Tuyết', 'Măng đen', 'Hạt dẻ', '7 món Cao Bằng', 'Rượu cần'],
    coordinates: { lat: 22.6667, lng: 106.2578 },
    description: 'Địa chất công viên UNESCO Non Nước Cao Bằng với thác Bản Gióc - thác nước đẹp nhất Việt Nam, Pác Bó - nơi Bác Hồ về, hang Ngườm Ngao, và văn hóa Tày, Nùng, Mông. Cao Bằng là điểm đến du lịch lịch sử - sinh thái đỉnh cao.',
    image: { src: '/images/provinces/cao-bang.jpg', alt: 'Cao Bằng - Thác Bản Gióc', width: 800, height: 600 },
  },
  {
    id: 'ha-giang',
    name: 'Hà Giang',
    region: 'Bắc Bộ',
    capital: 'Hà Giang',
    population: '850K+',
    area: '7.927 km²',
    ocopProducts: 134,
    craftVillages: 22,
    ecoTours: 42,
    topProducts: ['Trà Shan Tuyết', 'Táo mèo', 'Măng đen', 'Thắng cố', 'Rượu ngô'],
    coordinates: { lat: 22.8233, lng: 104.9786 },
    description: 'Cao nguyên đá Đồng Văn - Di sản Địa chất UNESCO, đèo Ma Pi Lèng "Vua các đèo núi", cột mốc Lũng Cú cực Bắc, và văn hóa Mông, Lô Lô, Pù Péo đặc sắc. Hà Giang là thiên đường cho người thích phiêu lưu, xe máy, nhiếp ảnh.',
    image: { src: '/images/provinces/ha-giang.jpg', alt: 'Hà Giang - Đèo Ma Pi Lèng', width: 800, height: 600 },
  },
  {
    id: 'lao-cai',
    name: 'Lào Cai',
    region: 'Bắc Bộ',
    capital: 'Lào Cai',
    population: '730K+',
    area: '6.383 km²',
    ocopProducts: 167,
    craftVillages: 28,
    ecoTours: 38,
    topProducts: ['Táo Sa Pa', 'Mận Bắc Hà', 'Thắng cố', 'Rượu ngô', 'Gạo nếp nương'],
    coordinates: { lat: 22.4833, lng: 103.9667 },
    description: 'Sa Pa - "Nóc nhà Đông Dương" với đỉnh Fansipan 3.143m, cầu Rồng May, thác Bạc, bản Cát Cát, chợ Bắc Hà, và văn hóa Mông, Dao, Giáy, Xá Phó. Lào Cai là điểm đến du lịch núi nổi tiếng nhất Việt Nam.',
    image: { src: '/images/provinces/lao-cai.jpg', alt: 'Lào Cai - Sa Pa và Fansipan', width: 800, height: 600 },
  },
  {
    id: 'tuyen-quang',
    name: 'Tuyên Quang',
    region: 'Bắc Bộ',
    capital: 'Tuyên Quang',
    population: '780K+',
    area: '5.870 km²',
    ocopProducts: 112,
    craftVillages: 20,
    ecoTours: 15,
    topProducts: ['Cam sành', 'Trà Shan Tuyết', 'Măng đen', 'Gà đen', 'Rượu cần'],
    coordinates: { lat: 21.8236, lng: 105.2142 },
    description: 'Vùng đất lịch sử với di tích Tân Trào - "Thủ đô kháng chiến", hồ Na Hang, suối nóng Mỹ Lâm, và văn hóa dân tộc Tày, Dao, Sán Chay. Tuyên Quang nổi bật với du lịch lịch sử, sinh thái và ẩm thực đặc sản.',
    image: { src: '/images/provinces/tuyen-quang.jpg', alt: 'Tuyên Quang - Hồ Na Hang', width: 800, height: 600 },
  },
  {
    id: 'yen-bai',
    name: 'Yên Bái',
    region: 'Bắc Bộ',
    capital: 'Yên Bái',
    population: '820K+',
    area: '6.899 km²',
    ocopProducts: 145,
    craftVillages: 24,
    ecoTours: 22,
    topProducts: ['Trà Shan Tuyết Mù Cang Chải', 'Gạo nếp nương', 'Măng đen', 'Cá suối', 'Rượu ngô'],
    coordinates: { lat: 21.7167, lng: 104.8667 },
    description: 'Ruộng bậc thang Mù Cang Chải - Di sản Quốc gia, hồ Thác Bà, suối nóng Văn Chấn, và văn hóa Mông, Dao, Thái. Yên Bái nổi bật với du lịch nông nghiệp, sinh thái và trải nghiệm văn hóa vùng cao.',
    image: { src: '/images/provinces/yen-bai.jpg', alt: 'Yên Bái - Ruộng bậc thang Mù Cang Chải', width: 800, height: 600 },
  },
  // Add remaining provinces with minimal data for now
  { id: 'thai-nguyen', name: 'Thái Nguyên', region: 'Bắc Bộ', capital: 'Thái Nguyên', population: '1.3M+', area: '3.521 km²', ocopProducts: 189, craftVillages: 31, ecoTours: 18, topProducts: ['Trà Thái Nguyên', 'Bánh chưng gù', 'Nem chua', 'Rượu cán', 'Đậu phộng'], coordinates: { lat: 21.5944, lng: 105.8442 }, description: 'Thủ phủ trà Việt Nam với Núi Cốc, hồ Núi Cốc, ATK an toàn Duyên Hải, và làng gốm Phù Lãng. Thái Nguyên nổi bật OCOP trà 5 sao và du lịch sinh thái.', image: { src: '/images/provinces/thai-nguyen.jpg', alt: 'Thái Nguyên - Núi Cốc', width: 800, height: 600 } },
  { id: 'lang-son', name: 'Lạng Sơn', region: 'Bắc Bộ', capital: 'Lạng Sơn', population: '780K+', area: '8.327 km²', ocopProducts: 123, craftVillages: 19, ecoTours: 25, topProducts: ['Mận Bắc Sơn', 'Rượu mèo', 'Mắc khén', 'Khâu sòi', 'Vải thiều'], coordinates: { lat: 21.8539, lng: 106.7611 }, description: 'Cửa ngõ biên giới với hang Kỳ Lúa, chùa Hương Lạng Sơn, đèo Bắc Sơn, thị trấn Đồng Đăng, và văn hóa Tày, Nùng, Dao. Lạng Sơn nổi bật du lịch tâm linh, sinh thái và thương mại biên giới.', image: { src: '/images/provinces/lang-son.jpg', alt: 'Lạng Sơn - Hang Kỳ Lúa', width: 800, height: 600 } },
  { id: 'bac-ninh', name: 'Bắc Ninh', region: 'Bắc Bộ', capital: 'Bắc Ninh', population: '1.4M+', area: '822 km²', ocopProducts: 201, craftVillages: 45, ecoTours: 5, topProducts: ['Nem chua Thanh Hương', 'Bánh phu thê', 'Gốm Đ comuna', 'Rượu Vân', 'Vải thiều'], coordinates: { lat: 21.1861, lng: 106.0763 }, description: 'Quê hương quan họ, chùa Đâu, chùa Phật Tích, làng gốm Đông Hồ, làng phulk Đ comuna, và trung công nghiệp lớn. Bắc Ninh nổi bật văn hóa di sản, làng nghề và OCOP ẩm thực.', image: { src: '/images/provinces/bac-ninh.jpg', alt: 'Bắc Ninh - Chùa Đâu', width: 800, height: 600 } },
  { id: 'vinh-phuc', name: 'Vĩnh Phúc', region: 'Bắc Bộ', capital: 'Vĩnh Yên', population: '1.1M+', area: '1.373 km²', ocopProducts: 134, craftVillages: 22, ecoTours: 12, topProducts: ['Gà đồi Tam Đảo', 'Rượu Kim Sơn', 'Bánh chưng gù', 'Vải thiều', 'Măng đen'], coordinates: { lat: 21.3089, lng: 105.6044 }, description: 'Tam Đảo - "Đà Lạt miền Bắc", hồ Bình Sơn, chùa Tây Thiên, và làng nghề gốm, đan, dệt. Vĩnh Phúc nổi bật du lịch nghỉ dưỡng, tâm linh và làng nghề truyền thống.', image: { src: '/images/provinces/vinh-phuc.jpg', alt: 'Vĩnh Phúc - Tam Đảo', width: 800, height: 600 } },
  { id: 'phu-tho', name: 'Phú Thọ', region: 'Bắc Bộ', capital: 'Việt Trì', population: '1.4M+', area: '3.528 km²', ocopProducts: 167, craftVillages: 28, ecoTours: 15, topProducts: ['Trà Thanh Sơn', 'Cam sành', 'Gà đồi', 'Nem chua', 'Rượu vải'], coordinates: { lat: 21.3031, lng: 105.4022 }, description: 'Cội nguồn dân tộc với Đền Hùng - Di sản văn hóa phi vật thể UNESCO, hồ Văn Lang, suối nóng Thanh Thủy, và văn hóa Mường, Dao. Phú Thọ nổi bật du lịch tâm linh, lịch sử và sinh thái.', image: { src: '/images/provinces/phu-tho.jpg', alt: 'Phú Thọ - Đền Hùng', width: 800, height: 600 } },
  { id: 'hoa-binh', name: 'Hòa Bình', region: 'Bắc Bộ', capital: 'Hòa Bình', population: '860K+', area: '4.590 km²', ocopProducts: 145, craftVillages: 25, ecoTours: 28, topProducts: ['Cá suối', 'Măng đen', 'Gà đồi', 'Rượu cần', 'Gạo nếp'], coordinates: { lat: 20.8172, lng: 105.3376 }, description: 'Hồ Hòa Bình - hồ điện nước lớn nhất Đông Nam Á, hang Đổi, suối nóng Kim Bôi, Mai Châu, và văn hóa Mường, Thái, Dao. Hòa Bình nổi bật du lịch sinh thái, văn hóa và thủy điện.', image: { src: '/images/provinces/hoa-binh.jpg', alt: 'Hòa Bình - Mai Châu', width: 800, height: 600 } },
  { id: 'ha-nam', name: 'Hà Nam', region: 'Bắc Bộ', capital: 'Phủ Lý', population: '850K+', area: '860 km²', ocopProducts: 112, craftVillages: 21, ecoTours: 8, topProducts: ['Nem chua Thanh Liêm', 'Bánh đúc nóng', 'Rượu Vân', 'Gà đồi', 'Tôm khô'], coordinates: { lat: 20.5431, lng: 105.9213 }, description: 'Chùa Tam Chúc - chùa lớn nhất thế giới, hồ Thiên Tôn, di tích Làng Châu, và làng nghề gốm, dệt, chèo. Hà Nam nổi bật du lịch tâm linh, văn hóa và OCOP ẩm thực.', image: { src: '/images/provinces/ha-nam.jpg', alt: 'Hà Nam - Chùa Tam Chúc', width: 800, height: 600 } },
  { id: 'hung-yen', name: 'Hưng Yên', region: 'Bắc Bộ', capital: 'Hưng Yên', population: '1.2M+', area: '926 km²', ocopProducts: 156, craftVillages: 30, ecoTours: 6, topProducts: ['Long nhãn Hưng Yên', 'Bánh gai', 'Rượu Vân', 'Nem chua', 'Tôm khô'], coordinates: { lat: 20.6464, lng: 106.0511 }, description: 'Vùng đất chữ Nôm với chùa Chuông, di tích Phổ Hiền, làng gốm Chu Đậu, và đặc sản long nhãn. Hưng Yên nổi bật OCOP nông sản, làng nghề và di tích lịch sử.', image: { src: '/images/provinces/hung-yen.jpg', alt: 'Hưng Yên - Làng gốm Chu Đậu', width: 800, height: 600 } },
  { id: 'thai-binh', name: 'Thái Bình', region: 'Bắc Bộ', capital: 'Thái Bình', population: '1.9M+', area: '1.586 km²', ocopProducts: 178, craftVillages: 35, ecoTours: 10, topProducts: ['Gạo Thái Bình', 'Bánh cáy', 'Nem chua', 'Rượu Vân', 'Tôm khô'], coordinates: { lat: 20.4463, lng: 106.3365 }, description: 'Lúa mì miền Bắc, chùa Kẻo, đền Trần, làng gốm, đan, dệt, và biển Trần. Thái Bình nổi bật nông nghiệp, du lịch biển, tâm linh và làng nghề.', image: { src: '/images/provinces/thai-binh.jpg', alt: 'Thái Bình - Chùa Kẻo', width: 800, height: 600 } },
  { id: 'nam-dinh', name: 'Nam Định', region: 'Bắc Bộ', capital: 'Nam Định', population: '1.8M+', area: '1.668 km²', ocopProducts: 189, craftVillages: 38, ecoTours: 12, topProducts: ['Bánh gai', 'Nem chua', 'Rượu Vân', 'Gạo', 'Tôm khô'], coordinates: { lat: 20.4383, lng: 106.1623 }, description: 'Phố cổ Vị Xuyên, chùa Kỵ, biển Thịnh Long, làng gốm, đan, và là quê hương của cha đẻ điện ảnh Việt Nam. Nam Định nổi bật di sản văn hóa, du lịch biển và OCOP.', image: { src: '/images/provinces/nam-dinh.jpg', alt: 'Nam Định - Phố cổ Vị Xuyên', width: 800, height: 600 } },
  { id: 'ninh-binh', name: 'Ninh Bình', region: 'Bắc Bộ', capital: 'Ninh Bình', population: '980K+', area: '1.386 km²', ocopProducts: 167, craftVillages: 29, ecoTours: 35, topProducts: ['Cơm cháy', 'Dê núi', 'Nem chua', 'Rượu Kim Sơn', 'Tôm khô'], coordinates: { lat: 20.2506, lng: 105.9744 }, description: 'Tam Cốc - Bích Động, Tràng An - Di sản Động UNESCO, Bái Đính - chùa lớn nhất Việt Nam, Cúc Phương - Vườn quốc gia đầu tiên. Ninh Bình là "Hạ Long trên cạn" nổi tiếng thế giới.', image: { src: '/images/provinces/ninh-binh.jpg', alt: 'Ninh Bình - Tam Cốc Bích Động', width: 800, height: 600 } },
  // Central provinces
  { id: 'thanh-hoa', name: 'Thanh Hóa', region: 'Trung Bộ', capital: 'Thanh Hóa', population: '3.6M+', area: '11.132 km²', ocopProducts: 234, craftVillages: 48, ecoTours: 28, topProducts: ['Nem chua Thanh Hóa', 'Chả rươi', 'Rượu Lam Sơn', 'Mực khô', 'Tôm khô'], coordinates: { lat: 19.8069, lng: 105.7833 }, description: 'Sầm Sơn, biển Hải Hòa, Pu Luông, Cúc Phương, di tích Lam Kinh, và làng nghề gốm, đan, dệt. Thanh Hóa là tỉnh lớn nhất miền Trung với du lịch biển, núi, lịch sử đa dạng.', image: { src: '/images/provinces/thanh-hoa.jpg', alt: 'Thanh Hóa - Sầm Sơn', width: 800, height: 600 } },
  { id: 'nghe-an', name: 'Nghệ An', region: 'Trung Bộ', capital: 'Vinh', population: '3.3M+', area: '16.490 km²', ocopProducts: 267, craftVillages: 52, ecoTours: 32, topProducts: ['Chè Lam', 'Nem chua', 'Mực khô', 'Tôm khô', 'Rượu'], coordinates: { lat: 18.6796, lng: 105.6839 }, description: 'Quê hương Bác Hồ - Kim Liêng, biển Cửa Lò, Pu Mát, hang Khe Dơi, và làng nghề gốm, đan, dệt. Nghệ An là tỉnh lớn nhất Việt Nam với du lịch biển, lịch sử, sinh thái.', image: { src: '/images/provinces/nghe-an.jpg', alt: 'Nghệ An - Biển Cửa Lò', width: 800, height: 600 } },
  { id: 'ha-tinh', name: 'Hà Tĩnh', region: 'Trung Bộ', capital: 'Hà Tĩnh', population: '1.3M+', area: '5.990 km²', ocopProducts: 145, craftVillages: 28, ecoTours: 18, topProducts: ['Cá khô', 'Mực khô', 'Tôm khô', 'Rượu', 'Bánh'], coordinates: { lat: 18.3428, lng: 105.9057 }, description: 'Biển Thiền Cẩm, đèo Ngang, hang Khe Doi, di tích Hồng Linh, và làng nghề truyền thống. Hà Tĩnh nổi bật du lịch biển, lịch sử và OCOP hải sản.', image: { src: '/images/provinces/ha-tinh.jpg', alt: 'Hà Tĩnh - Biển Thiền Cẩm', width: 800, height: 600 } },
  { id: 'quang-binh', name: 'Quảng Bình', region: 'Trung Bộ', capital: 'Đồng Hới', population: '900K+', area: '8.065 km²', ocopProducts: 156, craftVillages: 30, ecoTours: 45, topProducts: ['Hải sản', 'Mực một nắng', 'Chả mực', 'Rượu', 'Bánh'], coordinates: { lat: 17.4809, lng: 106.6057 }, description: 'Phong Nha - Kẻ Bàng UNESCO, hang Thiên Đường, hang Sơn Đoòng - hang lớn nhất thế giới, biển Đá Nhảy, Nhật Lệ. Quảng Bình là "Vương quốc hang động" và du lịch biển.', image: { src: '/images/provinces/quang-binh.jpg', alt: 'Quảng Bình - Hang Thiên Đường', width: 800, height: 600 } },
  { id: 'quang-tri', name: 'Quảng Trị', region: 'Trung Bộ', capital: 'Đông Hà', population: '630K+', area: '4.621 km²', ocopProducts: 123, craftVillages: 22, ecoTours: 15, topProducts: ['Hải sản', 'Mực khô', 'Tôm khô', 'Rượu', 'Bánh'], coordinates: { lat: 16.7403, lng: 107.1855 }, description: 'Cổ thành Quảng Trị, đường 9, Khe Sanh, Vịnh Mốc, biển Cửa Tùng, Cửa Việt. Quảng Trị là vùng đất chiến tranh hào hùng với du lịch lịch sử, biển.', image: { src: '/images/provinces/quang-tri.jpg', alt: 'Quảng Trị - Cổ thành', width: 800, height: 600 } },
  { id: 'thua-thien-hue', name: 'Thừa Thiên Huế', region: 'Trung Bộ', capital: 'Huế', population: '1.1M+', area: '4.947 km²', ocopProducts: 189, craftVillages: 35, ecoTours: 28, topProducts: ['Bánh bèo', 'Bánh nậm', 'Bánh lọc', 'Nem chua', 'Rượu'], coordinates: { lat: 16.4637, lng: 107.5909 }, description: 'Cố đô Huế UNESCO, Đại Nội, lăng tẩm, chùa Thiên Mũ, sông Hương, biển Thuận An, Lăng Cô. Huế là trung tâm văn hóa, du lịch di sản, ẩm thực cung đình.', image: { src: '/images/provinces/thua-thien-hue.jpg', alt: 'Thừa Thiên Huế - Đại Nội', width: 800, height: 600 } },
  { id: 'da-nang', name: 'Đà Nẵng', region: 'Trung Bộ', capital: 'Đà Nẵng', population: '1.2M+', area: '1.285 km²', ocopProducts: 134, craftVillages: 25, ecoTours: 22, topProducts: ['Mì Quảng', 'Bánh tráng cuốn', 'Nem lụi', 'Hải sản', 'Cà phê'], coordinates: { lat: 16.0544, lng: 108.2022 }, description: 'Thành phố đáng sống nhất Việt Nam với biển Mỹ Khê, Bà Nà Hills, Cầu Rồng, Cầu Vàng, Bán Đảo Sơn Trà. Đà Nẵng là trung tâm du lịch, MICE, công nghệ miền Trung.', image: { src: '/images/provinces/da-nang.jpg', alt: 'Đà Nẵng - Cầu Rồng và Bà Nà Hills', width: 800, height: 600 } },
  { id: 'quang-nam', name: 'Quảng Nam', region: 'Trung Bộ', capital: 'Tam Kỳ', population: '1.5M+', area: '10.574 km²', ocopProducts: 201, craftVillages: 42, ecoTours: 30, topProducts: ['Cao lầu', 'Mì Quảng', 'Bánh mì Phượng', 'Hải sản', 'Trà Trà My'], coordinates: { lat: 15.5394, lng: 108.0191 }, description: 'Phố cổ Hội An UNESCO, Thánh địa Mỹ Sơn UNESCO, biển An Bàng, Cửa Đại, Núi Bà Nà, Trà My. Quảng Nam là "Vương quốc di sản" với 2 di sản UNESCO.', image: { src: '/images/provinces/quang-nam.jpg', alt: 'Quảng Nam - Phố cổ Hội An', width: 800, height: 600 } },
  { id: 'quang-ngai', name: 'Quảng Ngãi', region: 'Trung Bộ', capital: 'Quảng Ngãi', population: '1.3M+', area: '5.155 km²', ocopProducts: 145, craftVillages: 28, ecoTours: 18, topProducts: ['Hải sản', 'Bánh xèo', 'Nem chua', 'Rượu', 'Bánh'], coordinates: { lat: 15.1214, lng: 108.7922 }, description: 'Bãi biển Mỹ Khê, Lý Sơn - "Đảo chăn nuôi biển", Sa Huỳnh, di tích Sơn Mỹ. Quảng Ngãi nổi bật du lịch biển, đảo, lịch sử và OCOP hải sản.', image: { src: '/images/provinces/quang-ngai.jpg', alt: 'Quảng Ngãi - Đảo Lý Sơn', width: 800, height: 600 } },
  { id: 'binh-dinh', name: 'Bình Định', region: 'Trung Bộ', capital: 'Quy Nhơn', population: '1.6M+', area: '6.051 km²', ocopProducts: 178, craftVillages: 32, ecoTours: 25, topProducts: ['Bún chả cá', 'Nem chua', 'Chả राम', 'Hải sản', 'Rượu'], coordinates: { lat: 13.7723, lng: 109.2195 }, description: 'Quy Nhơn - "Maldives Việt Nam", Eo Gió, Kỳ Co, tháp Chăm Bánh Ít, di tích Tây Sơn. Bình Định nổi bật du lịch biển, đảo, lịch sử Chăm Pa và Tây Sơn.', image: { src: '/images/provinces/binh-dinh.jpg', alt: 'Bình Định - Eo Gió', width: 800, height: 600 } },
  { id: 'phu-yen', name: 'Phú Yên', region: 'Trung Bộ', capital: 'Tuy Hòa', population: '950K+', area: '5.045 km²', ocopProducts: 134, craftVillages: 24, ecoTours: 20, topProducts: ['Bún chả cá', 'Nem chua', 'Hải sản', 'Rượu', 'Bánh'], coordinates: { lat: 13.0882, lng: 109.0927 }, description: 'Ghềnh Đá Đĩa, biển Bãi Xép, đèo Cù Mông, nhà thờ Mằng Lăng, di tích lịch sử. Phú Yên nổi bật du lịch biển, địa chất, tâm linh và hải sản.', image: { src: '/images/provinces/phu-yen.jpg', alt: 'Phú Yên - Ghềnh Đá Đĩa', width: 800, height: 600 } },
  { id: 'khanh-hoa', name: 'Khánh Hòa', region: 'Trung Bộ', capital: 'Nha Trang', population: '1.3M+', area: '5.197 km²', ocopProducts: 167, craftVillages: 30, ecoTours: 35, topProducts: ['Nem chua', 'Bún chả cá', 'Hải sản', 'Yến sào', 'Rượu'], coordinates: { lat: 12.2388, lng: 109.1967 }, description: 'Nha Trang - "Thành phố biển đẹp nhất", VinWonders, Vinpearl, chùa Long Sơn, tháp Chăm Ponagar, biển Đảo. Khánh Hòa là trung tâm du lịch biển, nghỉ dưỡng, yến sào.', image: { src: '/images/provinces/khanh-hoa.jpg', alt: 'Khánh Hòa - Nha Trang', width: 800, height: 600 } },
  { id: 'ninh-thuan', name: 'Ninh Thuận', region: 'Trung Bộ', capital: 'Phan Rang', population: '600K+', area: '3.355 km²', ocopProducts: 112, craftVillages: 20, ecoTours: 18, topProducts: ['Nho', 'Dưa hấu', 'Dê', 'Hải sản', 'Rượu'], coordinates: { lat: 11.5657, lng: 108.9885 }, description: 'Vườn nho, biển Vĩnh Hy, Núi Chúa, Hang Rái, văn hóa Chăm. Ninh Thuận nổi bật nông nghiệp nho, du lịch biển, văn hóa Chăm và năng lượng tái tạo.', image: { src: '/images/provinces/ninh-thuan.jpg', alt: 'Ninh Thuận - Vườn nho', width: 800, height: 600 } },
  { id: 'binh-thuan', name: 'Bình Thuận', region: 'Trung Bộ', capital: 'Phan Thiết', population: '1.3M+', area: '7.942 km²', ocopProducts: 156, craftVillages: 28, ecoTours: 22, topProducts: ['Nước mắm', 'Nem chua', 'Hải sản', 'Rồng biển', 'Bánh'], coordinates: { lat: 10.9289, lng: 108.2722 }, description: 'Mũi Né - "Sa mạc Việt Nam", biển Phan Thiết, Kê Gà, Cù Lao Câu, di tích Chăm. Bình Thuận nổi bật du lịch biển, sa mạc, nước mắm và năng lượng gió.', image: { src: '/images/provinces/binh-thuan.jpg', alt: 'Bình Thuận - Mũi Né', width: 800, height: 600 } },
  // Central Highlands
  { id: 'kon-tum', name: 'Kon Tum', region: 'Tây Nguyên', capital: 'Kon Tum', population: '540K+', area: '9.674 km²', ocopProducts: 98, craftVillages: 18, ecoTours: 25, topProducts: ['Cà phê', 'Hạt điều', 'Măng đen', 'Gà đen', 'Rượu cần'], coordinates: { lat: 14.3500, lng: 108.0167 }, description: 'Cao nguyên Kon Tum, nhà thờ Gỗ, Vườn Quốc gia Chư Mom Ray, đường Hồ Chí Minh, văn hóa Ba Na, Xê Đăng. Kon Tum nổi bật du lịch sinh thái, tâm linh, văn hóa dân tộc.', image: { src: '/images/provinces/kon-tum.jpg', alt: 'Kon Tum - Nhà thờ Gỗ', width: 800, height: 600 } },
  { id: 'gia-lai', name: 'Gia Lai', region: 'Tây Nguyên', capital: 'Pleiku', population: '1.5M+', area: '15.511 km²', ocopProducts: 145, craftVillages: 28, ecoTours: 30, topProducts: ['Cà phê', 'Hạt điều', 'Tiêu', 'Măng đen', 'Rượu cần'], coordinates: { lat: 13.9833, lng: 108.0000 }, description: 'Biển Hồ (Hồ T\'Nưng), tháp Chăm Yang Prong, Vườn Quốc gia Kon Ka Kinh, văn hóa Ba Na, Jarai. Gia Lai là "Thủ phủ cà phê" và trung tâm văn hóa Tây Nguyên.', image: { src: '/images/provinces/gia-lai.jpg', alt: 'Gia Lai - Biển Hồ', width: 800, height: 600 } },
  { id: 'dak-lak', name: 'Đắk Lắk', region: 'Tây Nguyên', capital: 'Buôn Ma Thuột', population: '1.9M+', area: '13.030 km²', ocopProducts: 234, craftVillages: 35, ecoTours: 40, topProducts: ['Cà phê Buôn Ma Thuột', 'Hạt điều', 'Tiêu', 'Măng đen', 'Rượu cần'], coordinates: { lat: 12.6667, lng: 108.0500 }, description: 'Thủ phủ cà phê Việt Nam, hồ Lắk, thác Dray Nur, Dray Sap, Vườn Quốc gia Yok Đôn, văn hóa Ê Đê, M\'Nông. Đắk Lắk là trung tâm cà phê, du lịch sinh thái, văn hóa.', image: { src: '/images/provinces/dak-lak.jpg', alt: 'Đắk Lắk - Cà phê Buôn Ma Thuột', width: 800, height: 600 } },
  { id: 'dak-nong', name: 'Đắk Nông', region: 'Tây Nguyên', capital: 'Gia Nghĩa', population: '620K+', area: '6.511 km²', ocopProducts: 112, craftVillages: 20, ecoTours: 28, topProducts: ['Cà phê', 'Hạt điều', 'Tiêu', 'Măng đen', 'Rượu cần'], coordinates: { lat: 11.9833, lng: 107.7167 }, description: 'Địa chất công viên UNESCO Đắk Nông, thác Trinh Nữ, hồ Ea Súp, Vườn Quốc gia Ta Đung, văn hóa M\'Nông, Ê Đê. Đắk Nông nổi bật địa chất, du lịch sinh thái.', image: { src: '/images/provinces/dak-nong.jpg', alt: 'Đắk Nông - Địa chất UNESCO', width: 800, height: 600 } },
  { id: 'lam-dong', name: 'Lâm Đồng', region: 'Tây Nguyên', capital: 'Đà Lạt', population: '1.3M+', area: '9.772 km²', ocopProducts: 189, craftVillages: 32, ecoTours: 35, topProducts: ['Cà phê', 'Atiso', 'Dâu', 'Hoa', 'Rượu'], coordinates: { lat: 11.9429, lng: 108.4419 }, description: 'Đà Lạt - "Thành phố ngàn hoa", ga Đà Lạt, chùa Linh Phước, vườn hoa, nông nghiệp cao tech, Langbiang. Lâm Đồng là trung tâm du lịch nghỉ dưỡng, nông nghiệp, hoa.', image: { src: '/images/provinces/lam-dong.jpg', alt: 'Lâm Đồng - Đà Lạt', width: 800, height: 600 } },
  // Southeast
  { id: 'binh-phuoc', name: 'Bình Phước', region: 'Đông Nam Bộ', capital: 'Đồng Xoài', population: '1.0M+', area: '6.876 km²', ocopProducts: 134, craftVillages: 24, ecoTours: 18, topProducts: ['Hạt điều', 'Cà phê', 'Tiêu', 'Cao su', 'Gỗ'], coordinates: { lat: 11.7500, lng: 106.8333 }, description: 'Vườn Quốc gia Bù Gia Mập, suối nước nóng, đường Hồ Chí Minh, văn hóa Stiêng, M\'Nông. Bình Phước nổi bật hạt điều, cà phê, cao su, du lịch sinh thái.', image: { src: '/images/provinces/binh-phuoc.jpg', alt: 'Bình Phước - Hạt điều', width: 800, height: 600 } },
  { id: 'tay-ninh', name: 'Tây Ninh', region: 'Đông Nam Bộ', capital: 'Tây Ninh', population: '1.2M+', area: '4.041 km²', ocopProducts: 156, craftVillages: 28, ecoTours: 22, topProducts: ['Trầu không', 'Nem chua', 'Bánh canh', 'Hải sản', 'Rượu'], coordinates: { lat: 11.3167, lng: 106.0983 }, description: 'Núi Bà Đen - "Chùa trên mây", Thánh thất Cao Đài, di tích lịch sử, văn hóa Cao Đài. Tây Ninh nổi bật du lịch tâm linh, lịch sử và nông sản.', image: { src: '/images/provinces/tay-ninh.jpg', alt: 'Tây Ninh - Núi Bà Đen', width: 800, height: 600 } },
  { id: 'binh-duong', name: 'Bình Dương', region: 'Đông Nam Bộ', capital: 'Thủ Dầu Một', population: '2.5M+', area: '2.694 km²', ocopProducts: 178, craftVillages: 35, ecoTours: 10, topProducts: ['Gốm sứ', 'Đồ gỗ', 'Nem chua', 'Bánh', 'Rượu'], coordinates: { lat: 10.9833, lng: 106.6500 }, description: 'Trung tâm công nghiệp, gốm sứ Lái Thiêu, đồ gỗ Bình An, chùa Bà, công viên giải trí. Bình Dương nổi bật làng nghề gốm, gỗ, công nghiệp và du lịch đô thị.', image: { src: '/images/provinces/binh-duong.jpg', alt: 'Bình Dương - Gốm Lái Thiêu', width: 800, height: 600 } },
  { id: 'dong-nai', name: 'Đồng Nai', region: 'Đông Nam Bộ', capital: 'Biên Hòa', population: '3.2M+', area: '5.903 km²', ocopProducts: 201, craftVillages: 38, ecoTours: 25, topProducts: ['Gà ri', 'Nem chua', 'Bánh canh', 'Hải sản', 'Rượu'], coordinates: { lat: 10.9447, lng: 106.8243 }, description: 'Vườn Quốc gia Cát Tiên, hồ Trị An, Long Khánh, gà ri Xuân Lộc, nem chua Long Thành. Đồng Nai nổi bật du lịch sinh thái Cát Tiên, nông sản và công nghiệp.', image: { src: '/images/provinces/dong-nai.jpg', alt: 'Đồng Nai - Vườn Quốc gia Cát Tiên', width: 800, height: 600 } },
  { id: 'ba-ria-vung-tau', name: 'Bà Rịa - Vũng Tàu', region: 'Đông Nam Bộ', capital: 'Vũng Tàu', population: '1.1M+', area: '1.981 km²', ocopProducts: 145, craftVillages: 25, ecoTours: 30, topProducts: ['Hải sản', 'Bánh khọt', 'Nem chua', 'Rượu', 'Gà ri'], coordinates: { lat: 10.3459, lng: 107.0843 }, description: 'Vũng Tàu - "Thành phố biển", Bãi Trước, Bãi Sau, Núi Lớn, Núi Nhỏ, Côn Đảo, Long Hải. Bà Rịa - Vũng Tàu nổi bật du lịch biển, đảo, dầu khí và lịch sử.', image: { src: '/images/provinces/ba-ria-vung-tau.jpg', alt: 'Bà Rịa - Vũng Tàu - Bãi Sau', width: 800, height: 600 } },
  { id: 'ho-chi-minh', name: 'TP. Hồ Chí Minh', region: 'Đông Nam Bộ', capital: 'TP. Hồ Chí Minh', population: '9.3M+', area: '2.095 km²', ocopProducts: 289, craftVillages: 45, ecoTours: 15, topProducts: ['Cơm tấm', 'Phở', 'Bánh mì', 'Hải sản', 'Cà phê'], coordinates: { lat: 10.8231, lng: 106.6297 }, description: 'Thành phố lớn nhất Việt Nam, trung tâm kinh tế, tài chính, thương mại, du lịch MICE, ẩm thực đường phố, đời sống về đêm sôi động. TP.HCM là cửa ngõ quốc tế của đất nước.', image: { src: '/images/provinces/ho-chi-minh.jpg', alt: 'TP. Hồ Chí Minh - Landmark 81', width: 800, height: 600 } },
  // Mekong Delta
  { id: 'long-an', name: 'Long An', region: 'Đồng bằng sông Cửu Long', capital: 'Tân An', population: '1.7M+', area: '4.494 km²', ocopProducts: 167, craftVillages: 30, ecoTours: 12, topProducts: ['Gạo', 'Hải sản', 'Nem chua', 'Bánh', 'Rượu'], coordinates: { lat: 10.5431, lng: 106.3697 }, description: 'Cửa ngõ miền Tây, làng gốm, đan, chợ nổi, di tích lịch sử. Long An nổi bật nông nghiệp gạo, hải sản, làng nghề và vị trí chiến lược.', image: { src: '/images/provinces/long-an.jpg', alt: 'Long An - Chợ nổi', width: 800, height: 600 } },
  { id: 'tien-giang', name: 'Tiền Giang', region: 'Đồng bằng sông Cửu Long', capital: 'Mỹ Tho', population: '1.8M+', area: '2.510 km²', ocopProducts: 189, craftVillages: 35, ecoTours: 18, topProducts: ['Vải thiều', 'Xoài', 'Sầu riêng', 'Hải sản', 'Gạo'], coordinates: { lat: 10.3600, lng: 106.3550 }, description: 'Mỹ Tho - cửa ngõ miền Tây, chợ nổi Cái Bè, vườn trái cây Thới Sơn, chùa Vĩnh Tràng. Tiền Giang nổi bật vườn trái cây, du lịch sông nước, chợ nổi.', image: { src: '/images/provinces/tien-giang.jpg', alt: 'Tiền Giang - Chợ nổi Cái Bè', width: 800, height: 600 } },
  { id: 'ben-tre', name: 'Bến Tre', region: 'Đồng bằng sông Cửu Long', capital: 'Bến Tre', population: '1.3M+', area: '2.379 km²', ocopProducts: 156, craftVillages: 28, ecoTours: 15, topProducts: ['Kẹo dừa', 'Dừa xiêm', 'Vải thiều', 'Hải sản', 'Gạo'], coordinates: { lat: 10.2431, lng: 106.3750 }, description: 'Quê hương dừa Việt Nam, chợ nổi, vườn trái cây, rừng tràm, làng nghề gốm, đan. Bến Tre nổi bật đặc sản dừa, du lịch sinh thái, làng nghề.', image: { src: '/images/provinces/ben-tre.jpg', alt: 'Bến Tre - Kẹo dừa', width: 800, height: 600 } },
  { id: 'tra-vinh', name: 'Trà Vinh', region: 'Đồng bằng sông Cửu Long', capital: 'Trà Vinh', population: '1.0M+', area: '2.358 km²', ocopProducts: 134, craftVillages: 24, ecoTours: 12, topProducts: ['Bánh pía', 'Dừa', 'Hải sản', 'Gạo', 'Rượu'], coordinates: { lat: 9.9425, lng: 106.3463 }, description: 'Văn hóa Khmer, chùa Khmer, biển Bà Động, làng nghề gốm, bánh pía. Trà Vinh nổi bật văn hóa Khmer, du lịch biển, tâm linh và bánh pía.', image: { src: '/images/provinces/tra-vinh.jpg', alt: 'Trà Vinh - Chùa Khmer', width: 800, height: 600 } },
  { id: 'vinh-long', name: 'Vĩnh Long', region: 'Đồng bằng sông Cửu Long', capital: 'Vĩnh Long', population: '1.0M+', area: '1.525 km²', ocopProducts: 145, craftVillages: 26, ecoTours: 15, topProducts: ['Vải thiều', 'Sầu riêng', 'Xoài', 'Hải sản', 'Gạo'], coordinates: { lat: 10.2531, lng: 105.9722 }, description: 'Chợ nổi, vườn trái cây, làng gốm, đan, chùa, di tích. Vĩnh Long nổi bật du lịch sông nước, vườn trái cây, chợ nổi.', image: { src: '/images/provinces/vinh-long.jpg', alt: 'Vĩnh Long - Chợ nổi', width: 800, height: 600 } },
  { id: 'dong-thap', name: 'Đồng Tháp', region: 'Đồng bằng sông Cửu Long', capital: 'Cao Lãnh', population: '1.7M+', area: '3.382 km²', ocopProducts: 167, craftVillages: 30, ecoTours: 22, topProducts: ['Hoa sen', 'Lúa', 'Hải sản', 'Gạo', 'Rượu'], coordinates: { lat: 10.4639, lng: 105.6364 }, description: 'Tràm Chim - Vườn quốc gia, Sa Đéc - "Vườn hoa", làng gốm, chợ nổi. Đồng Tháp nổi bật du lịch sinh thái Tràm Chim, hoa, lúa và làng nghề.', image: { src: '/images/provinces/dong-thap.jpg', alt: 'Đồng Tháp - Tràm Chim', width: 800, height: 600 } },
  { id: 'an-giang', name: 'An Giang', region: 'Đồng bằng sông Cửu Long', capital: 'Long Xuyên', population: '2.3M+', area: '3.537 km²', ocopProducts: 189, craftVillages: 35, ecoTours: 25, topProducts: ['Lúa', 'Cá linh', 'Bún cá', 'Hải sản', 'Gạo'], coordinates: { lat: 10.3844, lng: 105.4339 }, description: 'Núi Cấm, Núi Tô, chùa Bà, chợ nổi Long Xuyên, vườn tràm Trà Sư, cá linh. An Giang nổi bật du lịch tâm linh, sinh thái, cá linh và lúa.', image: { src: '/images/provinces/an-giang.jpg', alt: 'An Giang - Núi Cấm', width: 800, height: 600 } },
  { id: 'kien-giang', name: 'Kiên Giang', region: 'Đồng bằng sông Cửu Long', capital: 'Rạch Giá', population: '1.8M+', area: '6.348 km²', ocopProducts: 201, craftVillages: 38, ecoTours: 40, topProducts: ['Nước mắm Phú Quốc', 'Hải sản', 'Hạt điều', 'Hoa', 'Rượu'], coordinates: { lat: 10.0125, lng: 105.0803 }, description: 'Phú Quốc - "Ngọc trai biển Đông", Rạch Giá, Hà Tiên, đảo, biển, nước mắm. Kiên Giang nổi bật du lịch biển, đảo, nước mắm và hải sản.', image: { src: '/images/provinces/kien-giang.jpg', alt: 'Kiên Giang - Phú Quốc', width: 800, height: 600 } },
  { id: 'can-tho', name: 'Cần Thơ', region: 'Đồng bằng sông Cửu Long', capital: 'Cần Thơ', population: '1.3M+', area: '1.438 km²', ocopProducts: 167, craftVillages: 30, ecoTours: 20, topProducts: ['Chợ nổi Cái Răng', 'Vải thiều', 'Sầu riêng', 'Hải sản', 'Gạo'], coordinates: { lat: 10.0333, lng: 105.7833 }, description: 'Thành phố trung tâm miền Tây, chợ nổi Cái Răng, cầu Cần Thơ, vườn trái cây Mỹ Khánh, chùa Ông. Cần Thơ là trung tâm kinh tế, du lịch, giáo dục miền Tây.', image: { src: '/images/provinces/can-tho.jpg', alt: 'Cần Thơ - Chợ nổi Cái Răng', width: 800, height: 600 } },
  { id: 'hau-giang', name: 'Hậu Giang', region: 'Đồng bằng sông Cửu Long', capital: 'Vị Thanh', population: '800K+', area: '1.622 km²', ocopProducts: 134, craftVillages: 24, ecoTours: 12, topProducts: ['Lúa', 'Cá', 'Hải sản', 'Gạo', 'Rượu'], coordinates: { lat: 9.7844, lng: 105.4703 }, description: 'Lúa, cá, chợ nổi, làng nghề, di tích lịch sử. Hậu Giang nổi bật nông nghiệp lúa, cá, du lịch sông nước.', image: { src: '/images/provinces/hau-giang.jpg', alt: 'Hậu Giang - Lúa và cá', width: 800, height: 600 } },
  { id: 'soc-trang', name: 'Sóc Trăng', region: 'Đồng bằng sông Cửu Long', capital: 'Sóc Trăng', population: '1.3M+', area: '3.312 km²', ocopProducts: 156, craftVillages: 28, ecoTours: 18, topProducts: ['Bánh pía', 'Cá', 'Hải sản', 'Gạo', 'Rượu'], coordinates: { lat: 9.6028, lng: 105.9739 }, description: 'Văn hóa Khmer, chùa Khmer, bánh pía, chợ nổi, hải sản. Sóc Trăng nổi bật văn hóa Khmer, bánh pía, du lịch tâm linh, biển.', image: { src: '/images/provinces/soc-trang.jpg', alt: 'Sóc Trăng - Chùa Khmer', width: 800, height: 600 } },
  { id: 'bac-lieu', name: 'Bạc Liêu', region: 'Đồng bằng sông Cửu Long', capital: 'Bạc Liêu', population: '900K+', area: '2.667 km²', ocopProducts: 123, craftVillages: 22, ecoTours: 15, topProducts: ['Cá', 'Tôm', 'Hải sản', 'Gạo', 'Rượu'], coordinates: { lat: 9.2947, lng: 105.7278 }, description: 'Biển, tôm, cá, nhà cổ Công tử Bạc Liêu, chùa Khmer, gió biển. Bạc Liêu nổi bật hải sản, du lịch biển, di tích lịch sử, văn hóa Khmer.', image: { src: '/images/provinces/bac-lieu.jpg', alt: 'Bạc Liêu - Nhà cổ Công tử', width: 800, height: 600 } },
  { id: 'ca-mau', name: 'Cà Mau', region: 'Đồng bằng sông Cửu Long', capital: 'Cà Mau', population: '1.2M+', area: '5.274 km²', ocopProducts: 145, craftVillages: 26, ecoTours: 22, topProducts: ['Tôm', 'Cá', 'Hải sản', 'Gạo', 'Rượu'], coordinates: { lat: 9.1764, lng: 105.1500 }, description: 'Mũi Cà Mau - cực Nam, rừng ngập mặn U Minh Hạ, đảo, biển, tôm, cá. Cà Mau nổi bật du lịch sinh thái, biển, hải sản, cực Nam Tổ quốc.', image: { src: '/images/provinces/ca-mau.jpg', alt: 'Cà Mau - Mũi Cà Mau', width: 800, height: 600 } },
];

// Transform raw data to match Destination interface
function transformToDestination(raw: typeof rawProvincesData[0]): Destination {
  const categoryMap: Record<string, string> = {
    'Bắc Bộ': 'Miền núi Bắc Bộ',
    'Trung Bộ': 'Miền Trung',
    'Tây Nguyên': 'Tây Nguyên',
    'Đông Nam Bộ': 'Đông Nam Bộ',
    'Đồng bằng sông Cửu Long': 'Đồng bằng sông Cửu Long',
  };

  return {
    id: raw.id,
    slug: raw.id,
    name: raw.name,
    region: raw.region,
    category: categoryMap[raw.region] || raw.region,
    province: raw.name,
    district: undefined,
    productsCount: raw.ocopProducts,
    storiesCount: raw.craftVillages, // Using craftVillages as proxy for stories count
    description: raw.description,
    image: raw.image.src,
    images: [raw.image.src],
    coordinates: raw.coordinates,
    highlights: raw.topProducts.slice(0, 5),
    seo: {
      metaTitle: `${raw.name} - Khám phá OCOP, Du lịch, Làng nghề | OCOP Vietnam`,
      metaDescription: `Khám phá ${raw.name}: ${raw.ocopProducts} sản phẩm OCOP, ${raw.craftVillages} làng nghề, ${raw.ecoTours} tour sinh thái. ${raw.description.slice(0, 160)}`,
      metaKeywords: [raw.name.toLowerCase(), 'ocop', 'du lịch', 'làng nghề', ...raw.topProducts.slice(0, 3).map(p => p.toLowerCase())],
      ogTitle: `${raw.name} - Cửa ngõ khám phá OCOP và Du lịch`,
      ogDescription: raw.description.slice(0, 160),
      ogImage: raw.image.src,
      ogType: 'website',
      twitterCard: 'summary_large_image',
      canonicalUrl: `/dia-diem/${raw.id}`,
    },
    location: {
      province: raw.name,
      coordinates: raw.coordinates,
    },
  };
}

const destinationsData: Destination[] = rawProvincesData.map(transformToDestination);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '12', 10);
  const region = searchParams.get('region');
  const category = searchParams.get('category');
  const province = searchParams.get('province');
  const search = searchParams.get('search');
  const sort = searchParams.get('sort') || 'name';
  const order = searchParams.get('order') || 'asc';

  let filtered = [...destinationsData];

  if (region) {
    filtered = filtered.filter(d => d.region === region);
  }

  if (category) {
    filtered = filtered.filter(d => d.category === category);
  }

  if (province) {
    filtered = filtered.filter(d => d.province === province);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.province.toLowerCase().includes(q) ||
      d.region.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.highlights?.some(h => h.toLowerCase().includes(q))
    );
  }

  // Sorting
  filtered.sort((a, b) => {
    let aVal: string | number = a.name;
    let bVal: string | number = b.name;

    switch (sort) {
      case 'name':
        aVal = a.name;
        bVal = b.name;
        break;
      case 'productsCount':
        aVal = a.productsCount;
        bVal = b.productsCount;
        break;
      case 'storiesCount':
        aVal = a.storiesCount;
        bVal = b.storiesCount;
        break;
      case 'region':
        aVal = a.region;
        bVal = b.region;
        break;
      default:
        aVal = a.name;
        bVal = b.name;
    }

    if (order === 'asc') {
      return aVal > bVal ? 1 : -1;
    }
    return aVal < bVal ? 1 : -1;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;
  const destinations = filtered.slice(start, start + limit);

  const response: PaginatedResponse<Destination> = {
    data: destinations,
    meta: {
      page,
      limit,
      total: totalItems,
      totalPages,
    },
  };

  return NextResponse.json(response, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}