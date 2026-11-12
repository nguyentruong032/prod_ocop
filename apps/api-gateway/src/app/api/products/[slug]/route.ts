// API Route: /api/products/[slug]
// Returns detailed product information by slug

import { NextRequest, NextResponse } from 'next/server';
import { Product, PaginatedResponse, REVALIDATE_TAGS } from '@ocop/shared-types';

// Mock product database - in production this comes from CMS/database
const products: Record<string, Product> = {
  'ca-phe-buon-ma-thuot-5-sao': {
    id: 'prod-1',
    slug: 'ca-phe-buon-ma-thuot-5-sao',
    name: 'Cà phê Buôn Ma Thuột 5 sao',
    shortDescription: 'Cà phê Robusta đặc sản Buôn Ma Thuột đạt chuẩn 5 sao OCOP, hương vị đậm đà, ACAFÉ.',
    description: `Cà phê Buôn Ma Thuột 5 sao là sản phẩm tiêu biểu của tỉnh Đắk Lắk, được trồng tại vùng đất bazan đỏ đặc trưng. Sản phẩm đạt chứng nhận OCOP 5 sao - cấp cao nhất của chương trình "Mỗi xã một sản phẩm".

**Đặc điểm nổi bật:**
- Giống cà phê Robusta chất lượng cao, trồng theo quy trình VietGAP
- Thu hoạch thủ công, chọn lọc quả chín đạt tiêu chuẩn
- Chế biến khô tự nhiên (natural process) giữ trọn hương vị
- Rang xay theo công nghệ hiện đại, bảo quản nitơ

**Hương vị:** Đậm đà, đắng nhẹ, hậu vị ngọt tự nhiên, mùi thơm nồng nàn đặc trưng của cà phê Buôn Ma Thuột.

**Chứng nhận:** OCOP 5 sao, VietGAP, HACCP, ISO 22000`,
    images: [
      { url: '/images/products/ca-phe-buon-ma-thuot-1.jpg', alt: 'Cà phê Buôn Ma Thuột hạt', caption: 'Hạt cà phê rang đồng nhất', type: 'image' as const },
      { url: '/images/products/ca-phe-buon-ma-thuot-2.jpg', alt: 'Cà phê Buôn Ma Thuột bột', caption: 'Bột cà phê mịn, thơm nức mũi', type: 'image' as const },
      { url: '/images/products/ca-phe-buon-ma-thuot-3.jpg', alt: 'Vườn cà phê Buôn Ma Thuột', caption: 'Vườn cà phê tại vùng đất bazan đỏ', type: 'image' as const },
    ],
    price: 280000,
    priceUnit: '500g',
    oldPrice: 320000,
    rating: 4.9,
    reviewCount: 1247,
    category: 'Cà phê',
    subCategory: 'Cà phê rang xay',
    tags: ['OCOP 5 sao', 'VietGAP', 'Xuất khẩu', 'Robusta', 'Đắk Lắk'],
    origin: {
      province: 'Đắk Lắk',
      district: 'Buôn Ma Thuột',
      coordinates: { lat: 12.6675, lng: 108.0372 },
    },
    producer: {
      id: 'chuthe-1',
      name: 'Hợp tác xã Cà phê Chanh Đào Lục Ngân',
      type: 'hop-tac-xa',
      logo: '/images/producers/chanh-dao-logo.svg',
      verified: true,
      certification: ['OCOP 5 sao', 'VietGAP', 'HACCP'],
      contact: {
        phone: '0262 385 6789',
        email: 'chanhdao@cop.daklak.vn',
        address: 'Lục Ngân, Bắc Giang (xưởng chế biến tại Buôn Ma Thuột)',
      },
    },
    specifications: [
      { key: 'Loại cà phê', value: 'Robusta 100%' },
      { key: 'Độ ẩm', value: '≤ 12.5%' },
      { key: 'Đen xanh', value: '≤ 1%' },
      { key: 'Tẩy/xoài', value: '≤ 0.5%' },
      { key: 'Cafein', value: '2.0 - 2.5%' },
      { key: 'Đóng gói', value: 'Hộp 500g, 밸브 một chiều' },
      { key: 'Bảo quản', value: 'Nơi khô ráo, tránh ánh nắng trực tiếp' },
      { key: 'HSD', value: '12 tháng từ NSX' },
    ],
    certifications: ['OCOP 5 sao', 'VietGAP', 'HACCP', 'ISO 22000', 'USDA Organic (đang xin)'],
    exportMarkets: ['EU', 'USA', 'Japan', 'Korea', 'ASEAN'],
    seo: {
      metaTitle: 'Cà phê Buôn Ma Thuột 5 sao OCOP - Hạt Robusta đặc sản Đắk Lắk',
      metaDescription: 'Mua cà phê Buôn Ma Thuột 5 sao OCOP chính hãng: Robusta 100%, VietGAP, HACCP. Hương vị đậm đà, xuất khẩu EU, Mỹ. Giá 280.000đ/500g.',
      metaKeywords: ['cà phê Buôn Ma Thuột', 'OCOP 5 sao', 'Robusta', 'Đắk Lắk', 'cà phê xuất khẩu'],
      ogTitle: 'Cà phê Buôn Ma Thuột 5 sao - Hương vị cao nguyên',
      ogDescription: 'Cà phê Robusta đặc sản đạt chuẩn 5 sao OCOP, chứng nhận VietGAP, HACCP, xuất khẩu quốc tế.',
      ogImage: '/images/products/ca-phe-buon-ma-thuot-og.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/san-pham/ca-phe-buon-ma-thuot-5-sao',
    },
    relatedProducts: ['tra-tan-cuong-5-sao', 'cao-su-binh-phuoc-4-sao', 'dieu-binh-dinh-4-sao'],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    viewCount: 45230,
    createdAt: '2023-01-15T08:00:00Z',
    updatedAt: '2024-11-01T10:30:00Z',
    publishedAt: '2023-02-01T08:00:00Z',
  },
  'go-m-bat-trang-5-sao': {
    id: 'prod-2',
    slug: 'go-m-bat-trang-5-sao',
    name: 'Gốm Bát Tràng 5 sao',
    shortDescription: 'Gốm sứ thủ công Bát Tràng truyền thống 700 năm, đạt OCOP 5 sao, men không chì, an toàn sức khỏe.',
    description: `Làng gốm Bát Tràng với lịch sử 700 năm là nơi bảo lưu nghề gốm thủ công truyền thống. Sản phẩm gốm 5 sao OCOP được đúc thủ công 100%, men không chì, đạt chuẩn an toàn thực phẩm quốc tế.`,
    images: [
      { url: '/images/products/go-m-bat-trang-1.jpg', alt: 'Bộ trà gốm Bát Tràng', caption: 'Bộ trà gốm thủ công Bát Tràng', type: 'image' as const },
      { url: '/images/products/go-m-bat-trang-2.jpg', alt: 'Chậu cây gốm Bát Tràng', caption: 'Chậu cây trang trí gốm men màu', type: 'image' as const },
    ],
    price: 850000,
    priceUnit: 'bộ 6 món',
    rating: 4.8,
    reviewCount: 892,
    category: 'Gốm sứ',
    subCategory: 'Đồ trang trí',
    tags: ['OCOP 5 sao', 'Thủ công', 'Bát Tràng', 'Không chì', 'Hà Nội'],
    origin: {
      province: 'Hà Nội',
      district: 'Gia Lâm',
      ward: 'Bát Tràng',
      coordinates: { lat: 21.0142, lng: 105.9037 },
    },
    producer: {
      id: 'chuthe-2',
      name: 'Công ty TNHH Gốm Bát Tràng',
      type: 'doanh-nghiep',
      logo: '/images/producers/bat-trang-logo.svg',
      verified: true,
      certification: ['OCOP 5 sao', 'ISO 9001'],
      contact: {
        phone: '024 3678 9012',
        email: 'info@batrangceramics.vn',
        address: 'Làng gốm Bát Tràng, Gia Lâm, Hà Nội',
      },
    },
    specifications: [
      { key: 'Chất liệu', value: 'Đất sét Bát Tràng tự nhiên' },
      { key: 'Kỹ thuật', value: 'Đúc thủ công, men không chì' },
      { key: 'Nhiệt độ nung', value: '1.280 - 1.300°C' },
      { key: 'An toàn', value: 'Không chì, không cadimi' },
      { key: 'Độ bền', value: 'Chịu nhiệt, rửa máy rửa bát' },
    ],
    certifications: ['OCOP 5 sao', 'ISO 9001', 'FDA (Mỹ)'],
    exportMarkets: ['EU', 'USA', 'Japan', 'Australia'],
    seo: {
      metaTitle: 'Gốm Bát Tràng 5 sao OCOP - Đồ gốm thủ công truyền thống Hà Nội',
      metaDescription: 'Gốm Bát Tràng 5 sao OCOP: 700 năm truyền thống, men không chì, an toàn FDA. Bộ trà, chậu cây, đồ trang trí thủ công 100%.',
      metaKeywords: ['gốm Bát Tràng', 'OCOP 5 sao', 'gốm sứ Hà Nội', 'đồ thủ công', 'men không chì'],
      ogTitle: 'Gốm Bát Tràng 5 sao - Nghệ thuật 700 năm',
      ogDescription: 'Gốm thủ công truyền thống Bát Tràng đạt chuẩn OCOP 5 sao, men an toàn sức khỏe, xuất khẩu toàn cầu.',
      ogImage: '/images/products/go-m-bat-trang-og.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/san-pham/go-m-bat-trang-5-sao',
    },
    relatedProducts: ['lua-van-phuc-5-sao', 'den-da-nang-5-sao'],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    viewCount: 32150,
    createdAt: '2023-03-20T08:00:00Z',
    updatedAt: '2024-10-15T14:20:00Z',
    publishedAt: '2023-04-01T08:00:00Z',
  },
  'lua-van-phuc-5-sao': {
    id: 'prod-3',
    slug: 'lua-van-phuc-5-sao',
    name: 'Lụa Vạn Phúc 5 sao',
    shortDescription: 'Lụa tơ tự nhiên Vạn Phúc Hà Đông, dệt thủ công truyền thống, mềm mượt, bền đẹp, OCOP 5 sao.',
    description: `Làng lụa Vạn Phúc với lịch sử dệt lụa hàng trăm năm. Sản phẩm lụa 5 sao OCOP sử dụng tơ tự nhiên 100%, dệt trên khung thủ công, tạo nên vải lụa mềm mượt, bền đẹp, thấm hút mồ hôi tốt.`,
    images: [
      { url: '/images/products/lua-van-phuc-1.jpg', alt: 'Vải lụa Vạn Phúc', caption: 'Vải lụa tơ tự nhiên Vạn Phúc', type: 'image' as const },
      { url: '/images/products/lua-van-phuc-2.jpg', alt: 'Áo dài lụa Vạn Phúc', caption: 'Áo dài lụa thiết kế hiện đại', type: 'image' as const },
    ],
    price: 1200000,
    priceUnit: 'mét',
    rating: 4.7,
    reviewCount: 567,
    category: 'Dệt may',
    subCategory: 'Vải lụa',
    tags: ['OCOP 5 sao', 'Lụa tơ', 'Vạn Phúc', 'Dệt thủ công', 'Hà Nội'],
    origin: {
      province: 'Hà Nội',
      district: 'Hà Đông',
      ward: 'Vạn Phúc',
      coordinates: { lat: 20.9711, lng: 105.7917 },
    },
    producer: {
      id: 'chuthe-3',
      name: 'Hợp tác xã Lụa Vạn Phúc',
      type: 'hop-tac-xa',
      logo: '/images/producers/van-phuc-logo.svg',
      verified: true,
      certification: ['OCOP 5 sao', 'Craft Village'],
      contact: {
        phone: '024 3356 7890',
        email: 'vanphucsilk@vphuc.hanoi.vn',
        address: 'Làng lụa Vạn Phúc, Hà Đông, Hà Nội',
      },
    },
    specifications: [
      { key: 'Chất liệu', value: 'Tơ tự nhiên 100%' },
      { key: 'Kỹ thuật', value: 'Dệt khung thủ công' },
      { key: 'Độ rộng', value: '90-110 cm' },
      { key: 'Trọng lượng', value: '60-80 g/m²' },
      { key: 'Bảo quản', value: 'Giặt khô hoặc giặt tay nước lạnh' },
    ],
    certifications: ['OCOP 5 sao', 'Làng nghề truyền thống Quốc gia'],
    exportMarkets: ['EU', 'USA', 'Japan', 'Korea'],
    seo: {
      metaTitle: 'Lụa Vạn Phúc 5 sao OCOP - Vải lụa tơ thủ công Hà Nội',
      metaDescription: 'Lụa Vạn Phúc 5 sao OCOP: Tơ tự nhiên 100%, dệt thủ công truyền thống. Vải mềm mượt, bền đẹp, thấm hút tốt. Giá từ 1.200.000đ/m.',
      metaKeywords: ['lụa Vạn Phúc', 'OCOP 5 sao', 'vải lụa tơ', 'dệt may Hà Nội', 'lụa thủ công'],
      ogTitle: 'Lụa Vạn Phúc 5 sao - Tinh hoa nghề dệt',
      ogDescription: 'Vải lụa tơ tự nhiên dệt thủ công truyền thống, đạt chuẩn OCOP 5 sao, xuất khẩu quốc tế.',
      ogImage: '/images/products/lua-van-phuc-og.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/san-pham/lua-van-phuc-5-sao',
    },
    relatedProducts: ['go-m-bat-trang-5-sao', 'dieu-binh-dinh-4-sao'],
    isFeatured: true,
    isNew: true,
    isBestseller: false,
    viewCount: 21340,
    createdAt: '2023-06-10T08:00:00Z',
    updatedAt: '2024-11-05T09:15:00Z',
    publishedAt: '2023-07-01T08:00:00Z',
  },
  'nuoc-mam-phu-quoc-5-sao': {
    id: 'prod-4',
    slug: 'nuoc-mam-phu-quoc-5-sao',
    name: 'Nước mắm Phú Quốc 5 sao',
    shortDescription: 'Nước mắm nhĩ truyền thống Phú Quốc, ứ(com) cá cơm tươi, men tự nhiên 12-18 tháng, OCOP 5 sao.',
    description: `Nước mắm Phú Quốc nổi tiếng toàn quốc với hương vị đậm đà, mặn ngọt hài hòa. Quy trình ủ men truyền thống 12-18 tháng trong gỗ gô đỏ, không thêm chất bảo quản, tạo ra nước mắm nhĩ protein cao (>30°N).`,
    images: [
      { url: '/images/products/nuoc-mam-phu-quoc-1.jpg', alt: 'Nước mắm Phú Quốc', caption: 'Nước mắm nhĩ protein >30°N', type: 'image' as const },
      { url: '/images/products/nuoc-mam-phu-quoc-2.jpg', alt: 'Chai nước mắm', caption: 'Chai thủy tinh 500ml, 1L', type: 'image' as const },
    ],
    price: 180000,
    priceUnit: '500ml',
    rating: 4.9,
    reviewCount: 2156,
    category: 'Nước mắm',
    subCategory: 'Nước mắm nhĩ',
    tags: ['OCOP 5 sao', 'Phú Quốc', 'Nước mắm nhĩ', 'Protein cao', 'Kiên Giang'],
    origin: {
      province: 'Kiên Giang',
      district: 'Phú Quốc',
      coordinates: { lat: 10.2259, lng: 103.9672 },
    },
    producer: {
      id: 'chuthe-4',
      name: 'Công ty TNHH Nước mắm Khải Hoàn',
      type: 'doanh-nghiep',
      logo: '/images/producers/khai-hoan-logo.svg',
      verified: true,
      certification: ['OCOP 5 sao', 'HACCP', 'ISO 22000', 'EU Organic'],
      contact: {
        phone: '0297 398 7654',
        email: 'khaihoan@nuocmamphuquoc.vn',
        address: 'Đường 30/4, Dương Đông, Phú Quốc, Kiên Giang',
      },
    },
    specifications: [
      { key: 'Độ protein', value: '> 30°N (nhĩ)' },
      { key: 'Nguyên liệu', value: 'Cá cơm tươi, muối biển tinh khiết' },
      { key: 'Thời gian ủ', value: '12 - 18 tháng' },
      { key: 'Loại men', value: 'Gỗ gô đỏ truyền thống' },
      { key: 'Chất bảo quản', value: 'Không thêm' },
      { key: 'Đóng gói', value: 'Chai thủy tinh 250ml, 500ml, 1L' },
    ],
    certifications: ['OCOP 5 sao', 'HACCP', 'ISO 22000', 'EU Organic', 'MSC'],
    exportMarkets: ['EU', 'USA', 'Japan', 'Korea', 'ASEAN', 'Middle East'],
    seo: {
      metaTitle: 'Nước mắm Phú Quốc 5 sao OCOP - Nhĩ protein >30°N chính hãng',
      metaDescription: 'Nước mắm Phú Quốc 5 sao OCOP: Cá cơm tươi, ủ men 12-18 tháng gỗ gô đỏ, protein >30°N. Không chất bảo quản. Giá 180.000đ/500ml.',
      metaKeywords: ['nước mắm Phú Quốc', 'OCOP 5 sao', 'nước mắm nhĩ', 'protein cao', 'Kiên Giang'],
      ogTitle: 'Nước mắm Phú Quốc 5 sao - Hương vị biển',
      ogDescription: 'Nước mắm nhĩ truyền thống ủ men 18 tháng, protein >30°N, đạt chuẩn EU Organic, OCOP 5 sao.',
      ogImage: '/images/products/nuoc-mam-phu-quoc-og.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/san-pham/nuoc-mam-phu-quoc-5-sao',
    },
    relatedProducts: ['ho-tieu-phu-quoc-5-sao', 'nghe-tay-ninh-4-sao'],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    viewCount: 56780,
    createdAt: '2022-11-01T08:00:00Z',
    updatedAt: '2024-11-10T11:00:00Z',
    publishedAt: '2022-12-01T08:00:00Z',
  },
  'tra-tan-cuong-5-sao': {
    id: 'prod-5',
    slug: 'tra-tan-cuong-5-sao',
    name: 'Trà Tân Cương 5 sao',
    shortDescription: 'Trà xanh đặc sản Tân Cương Thái Nguyên, hương vị đậm đà, vị ngọt hậu, màu nước vàng son, OCOP 5 sao.',
    description: `Trà Tân Cương là đặc sản của Thái Nguyên, trồng tại vùng núi cao trên 600m so với mực nước biển. Khí hậu mát mẻ, sương mù nhiều tạo nên chất lượng trà xuất sắc.`,
    images: [
      { url: '/images/products/tra-tan-cuong-1.jpg', alt: 'Trà Tân Cương khô', caption: 'Lá trà khô chuẩn OCOP 5 sao', type: 'image' as const },
      { url: '/images/products/tra-tan-cuong-2.jpg', alt: 'Nước trà Tân Cương', caption: 'Nước trà màu vàng son đặc trưng', type: 'image' as const },
    ],
    price: 450000,
    priceUnit: '200g',
    rating: 4.8,
    reviewCount: 1034,
    category: 'Trà',
    subCategory: 'Trà xanh',
    tags: ['OCOP 5 sao', 'Tân Cương', 'Trà xanh', 'Thái Nguyên', 'Vùng núi'],
    origin: {
      province: 'Thái Nguyên',
      district: 'Đại Từ',
      coordinates: { lat: 21.5928, lng: 105.8442 },
    },
    producer: {
      id: 'chuthe-5',
      name: 'Hợp tác xã Trà Tân Cương',
      type: 'hop-tac-xa',
      logo: '/images/producers/tan-cuong-logo.svg',
      verified: true,
      certification: ['OCOP 5 sao', 'VietGAP', 'Organic'],
      contact: {
        phone: '0208 387 6543',
        email: 'tancuongtea@thainnguyen.vn',
        address: 'Tân Cương, Đại Từ, Thái Nguyên',
      },
    },
    specifications: [
      { key: 'Loại trà', value: 'Trà xanh (Green tea)' },
      { key: 'Giống cây', value: 'Trà Shan tuyết, Trà지요' },
      { key: 'Độ cao trồng', value: '600 - 1.200m' },
      { key: 'Hương vị', value: 'Đậm đà, ngọt hậu, ít đắng' },
      { key: 'Màu nước', value: 'Vàng son, trong vắt' },
      { key: 'Đóng gói', value: 'Hộp kim loại 100g, 200g, 500g' },
    ],
    certifications: ['OCOP 5 sao', 'VietGAP', 'Organic Việt Nam'],
    exportMarkets: ['EU', 'USA', 'Japan', 'Taiwan', 'Middle East'],
    seo: {
      metaTitle: 'Trà Tân Cương 5 sao OCOP - Trà xanh đặc sản Thái Nguyên',
      metaDescription: 'Trà Tân Cương 5 sao OCOP: Vùng núi 600m+, hương đậm vị ngọt hậu, màu vàng son. VietGAP, Organic. Giá 450.000đ/200g.',
      metaKeywords: ['trà Tân Cương', 'OCOP 5 sao', 'trà xanh Thái Nguyên', 'trà Shan', 'trà vùng núi'],
      ogTitle: 'Trà Tân Cương 5 sao - Tinh túy núi rừng',
      ogDescription: 'Trà xanh đặc sản Thái Nguyên trồng vùng cao, đạt chuẩn OCOP 5 sao, VietGAP, Organic.',
      ogImage: '/images/products/tra-tan-cuong-og.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/san-pham/tra-tan-cuong-5-sao',
    },
    relatedProducts: ['ca-phe-buon-ma-thuot-5-sao', 'nghe-tay-ninh-4-sao'],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    viewCount: 28900,
    createdAt: '2023-02-14T08:00:00Z',
    updatedAt: '2024-10-20T16:45:00Z',
    publishedAt: '2023-03-01T08:00:00Z',
  },
};

// Category list for filtering
const categories = [
  'Cà phê', 'Gốm sứ', 'Dệt may', 'Nước mắm', 'Trà',
  'Cao su', 'Hạt điều', 'Gia vị', 'Thủ công mỹ nghệ', 'Thực phẩm chức năng',
];

function getProductsPage(page: number, limit: number, filters: { category?: string; province?: string; rating?: number; sort?: string; order?: 'asc' | 'desc' }): PaginatedResponse<Product> {
  let results = Object.values(products);

  if (filters.category) {
    results = results.filter(p => p.category === filters.category);
  }
  if (filters.province) {
    results = results.filter(p => p.origin.province === filters.province);
  }
  if (filters.rating) {
    results = results.filter(p => p.rating >= filters.rating!);
  }

  // Sorting
  const sortBy = filters.sort || 'createdAt';
  const order = filters.order || 'desc';
  results.sort((a, b) => {
    let aVal = a[sortBy as keyof Product];
    let bVal = b[sortBy as keyof Product];
    if (typeof aVal === 'string') aVal = aVal.toLowerCase();
    if (typeof bVal === 'string') bVal = bVal.toLowerCase();
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const total = results.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const data = results.slice(start, start + limit);

  return { data, meta: { page, limit, total, totalPages } };
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // If no slug, return paginated list
  if (!slug || slug === 'list') {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '12', 10);
    const category = searchParams.get('category') || undefined;
    const province = searchParams.get('province') || undefined;
    const rating = searchParams.get('rating') ? parseFloat(searchParams.get('rating')!) : undefined;
    const sort = searchParams.get('sort') || 'createdAt';
    const order = (searchParams.get('order') as 'asc' | 'desc') || 'desc';

    const response = getProductsPage(page, limit, { category, province, rating, sort, order });
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  }

  const product = products[slug];

  if (!product) {
    return NextResponse.json(
      { success: false, message: 'Sản phẩm không tồn tại', errors: [`Product with slug "${slug}" not found`] },
      { status: 404 }
    );
  }

  // Increment view count (in production: use Redis/database)
  product.viewCount = (product.viewCount || 0) + 1;

  return NextResponse.json(product, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
}