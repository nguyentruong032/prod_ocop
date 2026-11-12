// API Route: /api/craft-villages
// Returns list of traditional craft villages with pagination and filtering

import { NextRequest, NextResponse } from 'next/server';
import { CraftVillage, REVALIDATE_TAGS } from '@ocop/shared-types';

// Mock craft villages data - extracted from index.html design references
// Transformed to match CraftVillage interface from shared-types
const craftVillagesData: CraftVillage[] = [
  {
    id: 'bat-trang',
    slug: 'bat-trang',
    name: 'Làng Gốm Bát Tràng',
    province: 'Hà Nội',
    region: 'Bắc Bộ',
    district: 'Gia Lâm',
    craftType: 'Gốm sứ',
    establishedYear: 1470,
    description: 'Làng gốm cổ truyền nổi tiếng nhất Việt Nam với hơn 500 năm lịch sử. Sản phẩm gốm Bát Tràng nổi bật với men trắng trong suốt, hoa văn đẹp mắt, độ bền cao. Được công nhận Di sản văn hóa quốc gia năm 2019.',
    shortDescription: 'Làng gốm 500 năm tuổi - Di sản văn hóa quốc gia',
    history: 'Bát Tràng hình thành từ cuối thế kỷ 15, phát triển mạnh dưới triều Lê - Trịnh. Nổi tiếng cung cấp gốm sứ cho triều đình và xuất khẩu ra Nhật Bản, Đông Nam Á qua cảng Phố Hiến.',
    specialties: [
      'Bát đĩa men trắng, men xanh, men nâu',
      'Bình hoa, lọ hoa trang trí',
      'Đồ thờ cúng, đồ dùng trà đạo',
      'Gốm nghệ thuật, gốm hiện đại',
      'Đồ chơi gốm, souvenir du lịch',
    ],
    products: [
      { name: 'Bình gốm men trắng', image: '/images/craft-villages/bat-trang-vase.jpg', description: 'Bình gốm men trắng trong suốt, kích thước 30cm', price: '450.000đ' },
      { name: 'Bộ trà gốm Bát Tràng', image: '/images/craft-villages/bat-trang-tea-set.jpg', description: 'Bộ trà 6 ly + 1 ấm gốm men xanh', price: '1.200.000đ' },
      { name: 'Đĩa trang trí men nâu', image: '/images/craft-villages/bat-trang-plate.jpg', description: 'Đĩa gốm men nâu hoa văn truyền thống', price: '180.000đ' },
    ],
    experiences: [
      { title: 'Tự xoay gốm tại bàn tay nghệ nhân', description: 'Hướng dẫn từng bước tạo hình sản phẩm gốm', duration: '45 phút', price: '150.000đ', image: '/images/experiences/bat-trang-throwing.jpg' },
      { title: 'Vẽ tranh trên sản phẩm gốm', description: 'Tự do sáng tác họa tiết trên sản phẩm bisque', duration: '60 phút', price: '200.000đ', image: '/images/experiences/bat-trang-painting.jpg' },
      { title: 'Tham quan lò nướng truyền thống', description: 'Tìm hiểu quy trình nướng gốm lò hỏa than', duration: '30 phút', price: 'Miễn phí', image: '/images/experiences/bat-trang-kiln.jpg' },
    ],
    images: [
      '/images/craft-villages/bat-trang-1.jpg',
      '/images/craft-villages/bat-trang-2.jpg',
      '/images/craft-villages/bat-trang-3.jpg',
    ],
    highlights: [
      'Di sản văn hóa quốc gia (2019)',
      'Hơn 500 năm lịch sử',
      'Trải nghiệm xoay gốm thực tế',
      'Sản phẩm xuất khẩu nhiều quốc gia',
    ],
    contact: {
      phone: '024 3678 1234',
      email: 'battrang.ceramics@hanoi.gov.vn',
      website: 'battrangceramics.vn',
      address: 'Phường Bát Tràng, Quận Gia Lâm, Hà Nội',
    },
    coordinates: {
      lat: 21.0167,
      lng: 105.8833,
    },
    seo: {
      metaTitle: 'Làng Gốm Bát Tràng - Di Sản Văn Hóa 500 Năm | OCOP Vietnam',
      metaDescription: 'Khám phá làng gốm Bát Tràng 500 năm tuổi: tự xoay gốm, mua đồ gốm sứ chính hãng, tham quan lò nướng. Di sản văn hóa quốc gia tại Hà Nội.',
      metaKeywords: ['làng gốm Bát Tràng', 'gốm sứ Hà Nội', 'di sản văn hóa', 'du lịch nghề truyền thống'],
      ogTitle: 'Làng Gốm Bát Tràng - Di Sản Văn Hóa 500 Năm',
      ogDescription: 'Trải nghiệm tự tay tạo nên sản phẩm gốm tại làng nghề cổ truyền nhất Việt Nam',
      ogImage: '/images/craft-villages/bat-trang-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'van-phuc',
    slug: 'van-phuc',
    name: 'Làng Lụa Vạn Phúc',
    province: 'Hà Nội',
    region: 'Bắc Bộ',
    district: 'Hà Đông',
    craftType: 'Dệt lụa',
    establishedYear: 1920,
    description: 'Làng lụa truyền thống nổi tiếng với vải lụa Vạn Phúc mịn màng, bền đẹp, hoa văn tinh xảo. Nơi bảo lưu kỹ thuật dệt lụa tay và dệt máy truyền thống. Sản phẩm phục vụ triều đình xưa, nay xuất khẩu rộng rãi.',
    shortDescription: 'Làng lụa truyền thống - Vải lụa mịn màng, bền đẹp',
    history: 'Vạn Phúc hình thành đầu thế kỷ 20, gắn liền với lịch sử làng nghề dệt may Hà Đông. Nổi tiếng vải lụa cung cấp cho hoàng gia và quan lại. Sau 1954, làng phát triển mạnh với hợp tác xã dệt lụa.',
    specialties: [
      'Vải lụa tơ tự nhiên 100%',
      'Áo dài lụa Vạn Phúc',
      'Khăn choàng, khăn quàng lụa',
      'Vải lụa in hoa văn truyền thống',
      'Vải lụa phối hiện đại',
      'Quà tặng lụa cao cấp',
    ],
    products: [
      { name: 'Áo dài lụa Vạn Phúc', image: '/images/craft-villages/van-phuc-ao-dai.jpg', description: 'Áo dài lụa tơ 100% may đo', price: '2.500.000đ' },
      { name: 'Khăn quàng lụa in hoa', image: '/images/craft-villages/van-phuc-scarf.jpg', description: 'Khăn quàng lụa in hoa văn truyền thống', price: '350.000đ' },
      { name: 'Vải lụa theo mét', image: '/images/craft-villages/van-phuc-fabric.jpg', description: 'Vải lụa tơ tự nhiên 100% bán theo mét', price: '450.000đ/m' },
    ],
    experiences: [
      { title: 'Tham quan xưởng dệt khung tay', description: 'Tìm hiểu quy trình dệt lụa truyền thống', duration: '30 phút', price: 'Miễn phí', image: '/images/experiences/van-phuc-weaving.jpg' },
      { title: 'Thử dệt một đoạn vải lụa', description: 'Trải nghiệm dệt khung tay dưới sự hướng dẫn', duration: '45 phút', price: '180.000đ', image: '/images/experiences/van-phuc-try-weaving.jpg' },
      { title: 'Thử đồ áo dài lụa', description: 'Thử và chụp ảnh với áo dài lụa Vạn Phúc', duration: '30 phút', price: '100.000đ', image: '/images/experiences/van-phuc-ao-dai-try.jpg' },
    ],
    images: [
      '/images/craft-villages/van-phuc-1.jpg',
      '/images/craft-villages/van-phuc-2.jpg',
      '/images/craft-villages/van-phuc-3.jpg',
    ],
    highlights: [
      'Di sản văn hóa quốc gia (2017)',
      'Vải lụa tơ 100% tự nhiên',
      'Xuất khẩu EU, Mỹ, Nhật Bản',
      'Trải nghiệm dệt khung tay',
    ],
    contact: {
      phone: '024 3356 7890',
      email: 'vanphuc.silk@hanoi.gov.vn',
      website: 'vanphucsilk.vn',
      address: 'Phường Vạn Phúc, Quận Hà Đông, Hà Nội',
    },
    coordinates: {
      lat: 20.9833,
      lng: 105.7833,
    },
    seo: {
      metaTitle: 'Làng Lụa Vạn Phúc - Vải Lụa Truyền Thống Hà Nội | OCOP Vietnam',
      metaDescription: 'Làng lụa Vạn Phúc Hà Nội: vải lụa tơ 100%, áo dài cao cấp, trải nghiệm dệt khung tay. Di sản văn hóa quốc gia, OCOP 4 sao.',
      metaKeywords: ['làng lụa Vạn Phúc', 'vải lụa Hà Nội', 'áo dài lụa', 'du lịch làng nghề'],
      ogTitle: 'Làng Lụa Vạn Phúc - Vải Lụa Truyền Thống Hà Nội',
      ogDescription: 'Nơi giữ gìn hồn cốt áo dài Việt qua từng chỉ vải lụa mịn màng',
      ogImage: '/images/craft-villages/van-phuc-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'phu-do',
    slug: 'phu-do',
    name: 'Làng Mì Phù Đô',
    province: 'Hà Nội',
    region: 'Bắc Bộ',
    district: 'Từ Liêm',
    craftType: 'Làm mì',
    establishedYear: 1950,
    description: 'Làng mì truyền thống nổi tiếng với mì Phù Đô dai, ngon, không chất bảo quản. Quy trình làm mì thủ công kết hợp máy móc hiện đại. Sản phẩm mì khô, mì tươi phục vụ cả nước.',
    shortDescription: 'Làng mì truyền thống - Mì dai, ngon, không chất bảo quản',
    history: 'Phù Đô bắt đầu làm mì từ năm 1950, truyền nghề từ các làng lân cận. Phát triển mạnh những năm 90 với việc cơ giới hóa một số khâu. Hiện là làng mì lớn nhất miền Bắc.',
    specialties: [
      'Mì khô gói, mì khô bịch',
      'Mì tươi làm ngay',
      'Mì ý, mì sợi, mì ống',
      'Mì ăn liền cao cấp',
      'Mì ăn kiêng, mì hữu cơ',
    ],
    products: [
      { name: 'Mì khô Phù Đô gói 500g', image: '/images/craft-villages/phu-do-mi-kho.jpg', description: 'Mì khô dai, ngon, không chất bảo quản', price: '45.000đ' },
      { name: 'Mì tươi Phù Đô 1kg', image: '/images/craft-villages/phu-do-mi-tuoi.jpg', description: 'Mì tươi làm ngày, dai ngon tự nhiên', price: '65.000đ' },
      { name: 'Mì ăn liền Phù Đô', image: '/images/craft-villages/phu-do-mi-an-lien.jpg', description: 'Mì ăn liền cao cấp, vị truyền thống', price: '8.500đ' },
    ],
    experiences: [
      { title: 'Tham quan dây chuyền sản xuất mì', description: 'Tìm hiểu quy trình sản xuất mì khép kín', duration: '30 phút', price: 'Miễn phí', image: '/images/experiences/phu-do-factory.jpg' },
      { title: 'Thử làm mì thủ công', description: 'Trải nghiệm nhào bột, ép mì thủ công', duration: '45 phút', price: '120.000đ', image: '/images/experiences/phu-do-making.jpg' },
      { title: 'Thử ăn mì tươi ngay tại làng', description: 'Thưởng thức mì tươi vừa làm với nước dùng truyền thống', duration: '30 phút', price: '50.000đ', image: '/images/experiences/phu-do-eating.jpg' },
    ],
    images: [
      '/images/craft-villages/phu-do-1.jpg',
      '/images/craft-villages/phu-do-2.jpg',
      '/images/craft-villages/phu-do-3.jpg',
    ],
    highlights: [
      'OCOP 4 sao, HACCP',
      'Mì dai, ngon, không chất bảo quản',
      'Làng mì lớn nhất miền Bắc',
      'Giá gốc xưởng',
    ],
    contact: {
      phone: '024 3765 4321',
      email: 'phudo.noodles@hanoi.gov.vn',
      website: 'phudonoodles.vn',
      address: 'Phường Phù Đô, Quận Từ Liêm, Hà Nội',
    },
    coordinates: {
      lat: 21.0500,
      lng: 105.7333,
    },
    seo: {
      metaTitle: 'Làng Mì Phù Đô - Mì Truyền Thống Dai Ngon Hà Nội | OCOP Vietnam',
      metaDescription: 'Làng mì Phù Đô Hà Nội: mì khô, mì tươi dai ngon không chất bảo quản. OCOP 4 sao. Mua mì giá gốc, tham quan quy trình sản xuất.',
      metaKeywords: ['làng mì Phù Đô', 'mì Hà Nội', 'mì khô', 'mì tươi', 'OCOP 4 sao'],
      ogTitle: 'Làng Mì Phù Đô - Mì Truyền Thống Dai Ngon',
      ogDescription: 'Hương vị mì dai thơm nức mũi từ làng nghề 70 năm tuổi',
      ogImage: '/images/craft-villages/phu-do-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'ngu-xa',
    slug: 'ngu-xa',
    name: 'Làng Đúc Đồng Ngũ Xã',
    province: 'Hà Nội',
    region: 'Bắc Bộ',
    district: 'Ba Đình',
    craftType: 'Đúc đồng',
    establishedYear: 1600,
    description: 'Làng đúc đồng cổ truyền với hơn 400 năm lịch sử. Nổi tiếng đúc chuông, tượng Phật, lư hương, đồ thờ cúng đồng chính hãng. Kỹ thuật đúc mô hàn (lost-wax casting) truyền thống.',
    shortDescription: 'Làng đúc đồng 400 năm - Chuông, tượng Phật, đồ thờ cúng',
    history: 'Ngũ Xã hình thành đầu thế kỷ 17, tập trung làm đồ đồng cho chùa chiền, đình đền, triều đình. Nổi tiếng chuông Ngũ Xã vang xa, tượng Phật được giới Phật tử tin dùng khắp nước.',
    specialties: [
      'Chuông chùa, chuông đình',
      'Tượng Phật, tượng Thần đồng',
      'Lư hương, bình hoa đồng',
      'Đồ thờ cúng đầy đủ',
      'Đồng hồ mặt trời, cân đồng',
      'Đồ trang trí đồng nghệ thuật',
    ],
    products: [
      { name: 'Chuông đồng nhỏ', image: '/images/craft-villages/ngu-xa-chuong.jpg', description: 'Chuông đồng thủ công, âm thanh trong trẻo', price: '800.000đ' },
      { name: 'Tượng Phật A Di Đà', image: '/images/craft-villages/ngu-xa-tuong-phat.jpg', description: 'Tượng Phật đồng đúc mô hàn cao 30cm', price: '2.500.000đ' },
      { name: 'Lư hương đồng nghệ thuật', image: '/images/craft-villages/ngu-xa-lu-huong.jpg', description: 'Lư hương đồng chạm khắc tinh xảo', price: '650.000đ' },
    ],
    experiences: [
      { title: 'Tham quan xưởng đúc mô hàn', description: 'Tìm hiểu kỹ thuật đúc mô hàn truyền thống', duration: '30 phút', price: 'Miễn phí', image: '/images/experiences/ngu-xa-casting.jpg' },
      { title: 'Thử đúc một sản phẩm nhỏ', description: 'Trải nghiệm đúc đồng tạo hình sản phẩm mini', duration: '60 phút', price: '350.000đ', image: '/images/experiences/ngu-xa-try-casting.jpg' },
      { title: 'Tham quan triển lãm chuông, tượng', description: 'Ngắm nhìn hàng trăm tác phẩm đúc đồng', duration: '30 phút', price: 'Miễn phí', image: '/images/experiences/ngu-xa-exhibition.jpg' },
    ],
    images: [
      '/images/craft-villages/ngu-xa-1.jpg',
      '/images/craft-villages/ngu-xa-2.jpg',
      '/images/craft-villages/ngu-xa-3.jpg',
    ],
    highlights: [
      'Di sản văn hóa quốc gia (2020)',
      'Hơn 400 năm lịch sử',
      'Kỹ thuật đúc mô hàn độc đáo',
      'Tượng Phật, chuông chính hãng',
    ],
    contact: {
      phone: '024 3825 6789',
      email: 'nguxa.bronze@hanoi.gov.vn',
      website: 'nguxabronze.vn',
      address: 'Phường Ngũ Xã, Quận Ba Đình, Hà Nội',
    },
    coordinates: {
      lat: 21.0333,
      lng: 105.8167,
    },
    seo: {
      metaTitle: 'Làng Đúc Đồng Ngũ Xã - Chuông, Tượng Phật 400 Năm | OCOP Vietnam',
      metaDescription: 'Làng đúc đồng Ngũ Xã Hà Nội: chuông chùa, tượng Phật, lư hương đồng thủ công 400 năm. Di sản văn hóa quốc gia. Mua đồ thờ cúng đồng chính hãng.',
      metaKeywords: ['làng đúc đồng Ngũ Xã', 'chuông đồng', 'tượng Phật đồng', 'di sản văn hóa'],
      ogTitle: 'Làng Đúc Đồng Ngũ Xã - Nghề Đúc Đồng 400 Năm',
      ogDescription: 'Tiếng chuông vang xa từ bàn tay nghệ nhân Ngũ Xã',
      ogImage: '/images/craft-villages/ngu-xa-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'dong-ho',
    slug: 'dong-ho',
    name: 'Làng Tranh Đông Hồ',
    province: 'Bắc Ninh',
    region: 'Bắc Bộ',
    district: 'Thuận Thành',
    craftType: 'In tranh dân gian',
    establishedYear: 1600,
    description: 'Làng tranh dân gian nổi tiếng nhất Việt Nam với tranh in mộc giấy điệp. Tranh Đông Hồ thể hiện đời sống, phong tục, tín ngưỡng người Việt. Được UNESCO ghi nhận Di sản văn hóa phi vật thể cần gấp cứu.',
    shortDescription: 'Làng tranh Đông Hồ - Di sản UNESCO cần gấp cứu',
    history: 'Đông Hồ hình thành thế kỷ 17, phát triển mạnh thế kỷ 18-19. Tranh in cho Tết Nguyên đán, trang trí nhà cửa. Suy thoái sau 1990, hiện đang được phục hồi và bảo tồn.',
    specialties: [
      'Tranh Đám Cưới Chuột', 'Tranh Lợn Đàn', 'Tranh Gà Đàn',
      'Tranh Thầy Đồ Cóc', 'Tranh Việt Đề', 'Tranh Hoa Mai',
      'Tranh Thần Tài', 'Tranh Bà Chúa Lúa',
    ],
    products: [
      { name: 'Tranh Đám Cưới Chuột', image: '/images/craft-villages/dong-ho-dam-cuoi.jpg', description: 'Tranh in mộc giấy điệp kích thước 30x40cm', price: '150.000đ' },
      { name: 'Tranh Lợn Đàn', image: '/images/craft-villages/dong-ho-lon-dan.jpg', description: 'Tranh in mộc giấy điệp kích thước 30x40cm', price: '150.000đ' },
      { name: 'Tranh Gà Đàn', image: '/images/craft-villages/dong-ho-ga-dan.jpg', description: 'Tranh in mộc giấy điệp kích thước 30x40cm', price: '150.000đ' },
    ],
    experiences: [
      { title: 'Thử in tranh mộc tay', description: 'Trải nghiệm in tranh mộc trên giấy điệp', duration: '30 phút', price: '80.000đ', image: '/images/experiences/dong-ho-printing.jpg' },
      { title: 'Tự tô màu tranh in sẵn', description: 'Tô màu tranh Đông Hồ theo ý thích', duration: '45 phút', price: '100.000đ', image: '/images/experiences/dong-ho-coloring.jpg' },
      { title: 'Tham quan quy trình làm giấy điệp', description: 'Tìm hiểu quy trình làm giấy điệp thủ công', duration: '30 phút', price: 'Miễn phí', image: '/images/experiences/dong-ho-paper.jpg' },
    ],
    images: [
      '/images/craft-villages/dong-ho-1.jpg',
      '/images/craft-villages/dong-ho-2.jpg',
      '/images/craft-villages/dong-ho-3.jpg',
    ],
    highlights: [
      'Di sản văn hóa phi vật thể quốc gia',
      'Đề xuất UNESCO cấp cứu gấp',
      'Tranh in mộc giấy điệp độc đáo',
      'Nét hồn Việt qua từng nét mộc',
    ],
    contact: {
      phone: '0222 3845 678',
      email: 'dongho.paintings@bacninh.gov.vn',
      website: 'donghopaintings.vn',
      address: 'Xã Đông Hồ, Huyện Thuận Thành, Bắc Ninh',
    },
    coordinates: {
      lat: 21.1833,
      lng: 106.1000,
    },
    seo: {
      metaTitle: 'Làng Tranh Đông Hồ - Di Sản Văn Hóa Phi Vật Thể UNESCO | OCOP Vietnam',
      metaDescription: 'Làng tranh Đông Hồ Bắc Ninh: tranh in mộc giấy điệp, Di sản UNESCO cần gấp cứu. Thử in tranh, mua tranh dân gian chính hãng.',
      metaKeywords: ['làng tranh Đông Hồ', 'tranh dân gian', 'in mộc', 'di sản UNESCO', 'Bắc Ninh'],
      ogTitle: 'Làng Tranh Đông Hồ - Di Sản Văn Hóa Phi Vật Thể',
      ogDescription: 'Nét hồn Việt qua từng nét mộc tranh Đông Hồ',
      ogImage: '/images/craft-villages/dong-ho-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'chau-chuong',
    slug: 'chau-chuong',
    name: 'Làng Nón Chậu Chương',
    province: 'Hà Nội',
    region: 'Bắc Bộ',
    district: 'Thanh Oai',
    craftType: 'Làm nón',
    establishedYear: 1800,
    description: 'Làng nón truyền thống nổi tiếng với nón cụ, nón bài thơ, nón gom. Kỹ thuật làm nón lá hiện chỉ còn ở Chậu Chương. Sản phẩm nón được xuất khẩu ra nhiều nước.',
    shortDescription: 'Làng nón bài thơ - Nón cụ, nón gom thủ công',
    history: 'Chậu Chương làm nón từ đầu thế kỷ 19. Nón Chậu Chương từng cung cấp cho hoàng gia. Nổi tiếng nón bài thơ có khắc chữ thơ trong lớp lá nón.',
    specialties: [
      'Nón cụ truyền thống',
      'Nón bài thơ (có chữ thơ bên trong)',
      'Nón gom, nón quai thao',
      'Nón trang trí, nón souvenir',
      'Mũ nón du lịch',
    ],
    products: [
      { name: 'Nón bài thơ truyền thống', image: '/images/craft-villages/chau-chuong-non-bai-tho.jpg', description: 'Nón lá có khắc chữ thơ bên trong', price: '180.000đ' },
      { name: 'Nón cụ nghệ nhân', image: '/images/craft-villages/chau-chuong-non-cu.jpg', description: 'Nón cụ làm thủ công hoàn toàn', price: '120.000đ' },
      { name: 'Nón gom du lịch', image: '/images/craft-villages/chau-chuong-non-gom.jpg', description: 'Nón gom nhẹ, thoáng mát cho du lịch', price: '90.000đ' },
    ],
    experiences: [
      { title: 'Thử móc nón lá', description: 'Trải nghiệm móc nón dưới sự hướng dẫn nghệ nhân', duration: '45 phút', price: '150.000đ', image: '/images/experiences/chau-chuong-making.jpg' },
      { title: 'Khắc thơ lên nón', description: 'Tự chọn thơ, khắc lên nón bài thơ', duration: '30 phút', price: '100.000đ', image: '/images/experiences/chau-chuong-poetry.jpg' },
      { title: 'Thử đội nón bài thơ', description: 'Thử và chụp ảnh với nón bài thơ', duration: '20 phút', price: '50.000đ', image: '/images/experiences/chau-chuong-try.jpg' },
    ],
    images: [
      '/images/craft-villages/chau-chuong-1.jpg',
      '/images/craft-villages/chau-chuong-2.jpg',
      '/images/craft-villages/chau-chuong-3.jpg',
    ],
    highlights: [
      'Di sản văn hóa quốc gia (2018)',
      'Nón bài thơ độc đáo Việt Nam',
      'Kỹ thuật làm nón chỉ còn ở đây',
      'Xuất khẩu nhiều quốc gia',
    ],
    contact: {
      phone: '024 3376 5432',
      email: 'chauchuong.hats@hanoi.gov.vn',
      website: 'chauchuonghats.vn',
      address: 'Xã Chậu Chương, Huyện Thanh Oai, Hà Nội',
    },
    coordinates: {
      lat: 20.8833,
      lng: 105.7167,
    },
    seo: {
      metaTitle: 'Làng Nón Chậu Chương - Nón Bài Thơ Truyền Thống | OCOP Vietnam',
      metaDescription: 'Làng nón Chậu Chương Hà Nội: nón cụ, nón bài thơ, nón gom thủ công. Di sản văn hóa quốc gia. Trải nghiệm móc nón, khắc thơ.',
      metaKeywords: ['làng nón Chậu Chương', 'nón bài thơ', 'nón cụ', 'di sản văn hóa', 'Hà Nội'],
      ogTitle: 'Làng Nón Chậu Chương - Nón Bài Thơ Nghệ Thuật',
      ogDescription: 'Chữ thơ hiện lên giữa lá nón - độc đáo làng nghề Chậu Chương',
      ogImage: '/images/craft-villages/chau-chuong-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'cam-thinh',
    slug: 'cam-thinh',
    name: 'Làng Bàn Ăn Cẩm Thịnh',
    province: 'Thái Bình',
    region: 'Bắc Bộ',
    district: 'Kiến Xương',
    craftType: 'Gỗ - Bàn ăn',
    establishedYear: 1970,
    description: 'Làng bàn ăn gỗ nổi tiếng cả nước với bàn ăn gỗ sồi, gỗ xoan, gỗ lim chất lượng cao. Thiết kế hiện đại, kết hợp truyền thống. Xuất khẩu sang nhiều thị trường khó tính.',
    shortDescription: 'Làng bàn ăn gỗ - Xuất khẩu EU, Mỹ, Nhật',
    history: 'Cẩm Thịnh bắt đầu làm bàn ăn từ những năm 70, phát triển mạnh từ 2000 với công nghệ CNC. Hiện là trung tâm sản xuất bàn ăn gỗ lớn nhất miền Bắc.',
    specialties: [
      'Bàn ăn gỗ sồi tự nhiên',
      'Bàn ăn gỗ xoan, gỗ lim',
      'Bàn ăn gỗ công nghiệp cao cấp',
      'Ghế ăn phối bàn',
      'Bàn trà, bàn làm việc gỗ',
      'Nội thất gỗ theo yêu cầu',
    ],
    products: [
      { name: 'Bàn ăn gỗ sồi 6 ghế', image: '/images/craft-villages/cam-thinh-ban-an-soi.jpg', description: 'Bàn ăn gỗ sồi tự nhiên 100%, 6 ghế', price: '18.500.000đ' },
      { name: 'Bàn ăn gỗ xoan 4 ghế', image: '/images/craft-villages/cam-thinh-ban-an-xoan.jpg', description: 'Bàn ăn gỗ xoan Việt Nam, 4 ghế', price: '12.000.000đ' },
      { name: 'Ghế ăn gỗ cao cấp', image: '/images/craft-villages/cam-thinh-ghe-an.jpg', description: 'Ghế ăn gỗ thiết kế công thái học', price: '2.200.000đ' },
    ],
    experiences: [
      { title: 'Tham quan dây chuyền CNC tự động', description: 'Tìm hiểu công nghệ gia công gỗ hiện đại', duration: '30 phút', price: 'Miễn phí', image: '/images/experiences/cam-thinh-cnc.jpg' },
      { title: 'Thử chạm khắc gỗ', description: 'Trải nghiệm chạm khắc hoa văn trên gỗ', duration: '45 phút', price: '200.000đ', image: '/images/experiences/cam-thinh-carving.jpg' },
      { title: 'Thử ngồi ghế, bàn trưng bày', description: 'Thử cảm giác ngồi các mẫu bàn ghế trưng bày', duration: '30 phút', price: 'Miễn phí', image: '/images/experiences/cam-thinh-showroom.jpg' },
    ],
    images: [
      '/images/craft-villages/cam-thinh-1.jpg',
      '/images/craft-villages/cam-thinh-2.jpg',
      '/images/craft-villages/cam-thinh-3.jpg',
    ],
    highlights: [
      'Xuất khẩu EU, Mỹ, Nhật Bản',
      'Chứng nhận FSC, CARB P2, ISO 9001',
      'Công nghệ CNC hiện đại',
      'Đặt bàn size riêng theo yêu cầu',
    ],
    contact: {
      phone: '0227 3876 543',
      email: 'camthinh.furniture@thaibinh.gov.vn',
      website: 'camthinhfurniture.vn',
      address: 'Xã Cẩm Thịnh, Huyện Kiến Xương, Thái Bình',
    },
    coordinates: {
      lat: 20.6167,
      lng: 106.3833,
    },
    seo: {
      metaTitle: 'Làng Bàn Ăn Cẩm Thịnh - Bàn Ăn Gỗ Xuất Khẩu Châu Âu | OCOP Vietnam',
      metaDescription: 'Làng bàn ăn Cẩm Thịnh Thái Bình: bàn ăn gỗ sồi, xoan, lim xuất khẩu EU, Mỹ. OCOP 4 sao, FSC. Đặt bàn size riêng, giá xưởng.',
      metaKeywords: ['làng bàn ăn Cẩm Thịnh', 'bàn ăn gỗ', 'xuất khẩu gỗ', 'Thái Bình', 'OCOP 4 sao'],
      ogTitle: 'Làng Bàn Ăn Cẩm Thịnh - Bàn Ăn Gỗ Cao Cấp',
      ogDescription: 'Từ làng nghề đến thương hiệu xuất khẩu - hành trình gỗ Cẩm Thịnh',
      ogImage: '/images/craft-villages/cam-thinh-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'ba-vi',
    slug: 'ba-vi',
    name: 'Làng Trà Bà Vì',
    province: 'Hà Nội',
    region: 'Bắc Bộ',
    district: 'Ba Vì',
    craftType: 'Trà',
    establishedYear: 1960,
    description: 'Làng trà nổi tiếng với trà xanh Bà Vì, trà đen, trà ướp hoa. Vùng trà Bà Vì đất bazan, khí hậu mát mẻ tạo hương vị trà đặc trưng. Sản phẩm trà OCOP 4 sao.',
    shortDescription: 'Làng trà Bà Vì - Trà xanh, trà ướp hoa đặc sản',
    history: 'Trồng trà Bà Vì từ năm 1960 do chuyên gia Nga hỗ trợ. Phát triển mạnh từ 1990. Hiện có diện tích trà lớn nhất Hà Nội với chất lượng cao.',
    specialties: [
      'Trà xanh Bà Vì (trà mạn, trà non)',
      'Trà đen Bà Vì',
      'Trà ướp hoa (trà nhài, trà hoa hồng)',
      'Trà túi lọc cao cấp',
      'Trà cold brew',
      'Set trà quà tặng',
    ],
    products: [
      { name: 'Trà xanh Bà Vì 100g', image: '/images/craft-villages/ba-vi-tra-xanh.jpg', description: 'Trà xanh Bà Vì mạn non cao cấp', price: '120.000đ' },
      { name: 'Trà ướp hoa nhài 100g', image: '/images/craft-villages/ba-vi-tra-uop-hoa.jpg', description: 'Trà xanh ướp hoa nhài truyền thống', price: '150.000đ' },
      { name: 'Set trà quà tặng cao cấp', image: '/images/craft-villages/ba-vi-tea-set.jpg', description: 'Hộp quà 3 loại trà: xanh, đen, ướp hoa', price: '450.000đ' },
    ],
    experiences: [
      { title: 'Tham quan vườn trà, hái lá trà', description: 'Trải nghiệm hái lá trà non tại vườn trà', duration: '60 phút', price: '150.000đ', image: '/images/experiences/ba-vi-harvest.jpg' },
      { title: 'Thử ướp hoa trà', description: 'Học cách ướp hoa nhài, hoa hồng vào trà', duration: '45 phút', price: '180.000đ', image: '/images/experiences/ba-vi-scenting.jpg' },
      { title: 'Trà đạo, thử uống các loại trà', description: 'Trải nghiệm nghi thức trà đạo Việt Nam', duration: '45 phút', price: '120.000đ', image: '/images/experiences/ba-vi-tea-ceremony.jpg' },
    ],
    images: [
      '/images/craft-villages/ba-vi-1.jpg',
      '/images/craft-villages/ba-vi-2.jpg',
      '/images/craft-villages/ba-vi-3.jpg',
    ],
    highlights: [
      'OCOP 4 sao, VietGAP, HACCP',
      'Đất bazan, khí hậu mát mẻ',
      'Trà ướp hoa truyền thống',
      'Trải nghiệm trà đạo đầy đủ',
    ],
    contact: {
      phone: '024 3387 6543',
      email: 'bavi.tea@hanoi.gov.vn',
      website: 'bavitea.vn',
      address: 'Xã Minh Quang, Huyện Ba Vì, Hà Nội',
    },
    coordinates: {
      lat: 21.1000,
      lng: 105.4167,
    },
    seo: {
      metaTitle: 'Làng Trà Bà Vì - Trà Xanh, Trà Ướp Hoa Đặc Sản | OCOP Vietnam',
      metaDescription: 'Làng trà Bà Vì Hà Nội: trà xanh, trà đen, trà ướp hoa nhài, hoa hồng. OCOP 4 sao, VietGAP. Tham quan vườn trà, trải nghiệm trà đạo.',
      metaKeywords: ['làng trà Bà Vì', 'trà xanh Hà Nội', 'trà ướp hoa', 'OCOP 4 sao', 'VietGAP'],
      ogTitle: 'Làng Trà Bà Vì - Hương Trà Đặc Sản Núi Rừng',
      ogDescription: 'Hương vị trà từ đất bazan Bà Vì - tinh khiết, thanh mát',
      ogImage: '/images/craft-villages/ba-vi-1.jpg',
      ogType: 'article',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '12', 10);
  const province = searchParams.get('province');
  const region = searchParams.get('region');
  const craftType = searchParams.get('craftType');
  const search = searchParams.get('search');
  const sort = searchParams.get('sort') || 'name';
  const order = searchParams.get('order') || 'asc';

  let filtered = [...craftVillagesData];

  if (province) {
    filtered = filtered.filter(v => v.province === province);
  }

  if (region) {
    filtered = filtered.filter(v => v.region === region);
  }

  if (craftType) {
    filtered = filtered.filter(v => v.craftType === craftType);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(v =>
      v.name.toLowerCase().includes(q) ||
      v.province.toLowerCase().includes(q) ||
      v.craftType.toLowerCase().includes(q) ||
      v.shortDescription.toLowerCase().includes(q) ||
      v.specialties.some(s => s.toLowerCase().includes(q))
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
      case 'province':
        aVal = a.province;
        bVal = b.province;
        break;
      case 'establishedYear':
        aVal = a.establishedYear;
        bVal = b.establishedYear;
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
  const villages = filtered.slice(start, start + limit);

  return NextResponse.json({
    data: villages,
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