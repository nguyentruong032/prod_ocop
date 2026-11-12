// API Route: /api/products
// Returns list of OCOP products with pagination and filtering

import { NextRequest, NextResponse } from 'next/server';
import { Product, ProductFilter, PaginatedResponse } from '@ocop/shared-types';

// Mock product data
const productsData: Product[] = [
  {
    id: 'tra-dinh-hoa-5-sao',
    slug: 'tra-dinh-hoa-5-sao',
    name: 'Trà xanh Định Hóa 5 sao OCOP',
    stars: 5,
    category: 'Đồ uống',
    subCategory: 'Trà',
    province: 'Thái Nguyên',
    district: 'Định Hóa',
    producer: 'Hợp tác xã Trà Định Hóa',
    producerType: 'Hợp tác xã',
    description: 'Trà xanh thủ công từ vườn trà cổ thụ hàng trăm năm tại Định Hóa. Hương vị đậm đà, vị ngọt hậu thanh, mùi hương tự nhiên tinh khiết. Chế biến theo quy trình VietGAP, đạt chuẩn OCOP 5 sao.',
    ingredients: ['Lá trà xanh tươi (100%)'],
    process: ['Hấp tách', 'Uốn tay', 'Sấy khô', 'Lọc phân loại', 'Đóng gói hút chân không'],
    certifications: ['OCOP 5 sao', 'VietGAP', 'HACCP', 'ISO 22000', 'USDA Organic'],
    awards: ['Giải vàng Vietnam Value 2023', 'Top 10 sản phẩm OCOP xuất sắc 2024', 'Giải thưởng Trà Việt Nam 2023'],
    nutritionInfo: 'Mỗi 100g: Catechin 12-15%, Caffeine 2-3%, Vitamin C 180mg, Amino acid 4-5%',
    storage: 'Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp. Sau khi mở dùng trong 6 tháng.',
    price: '450.000 - 850.000 VNĐ/100g',
    images: [
      '/images/products/tra-dinh-hoa-1.jpg',
      '/images/products/tra-dinh-hoa-2.jpg',
      '/images/products/tra-dinh-hoa-3.jpg'
    ],
    specs: {
      weight: ['50g', '100g', '250g', '500g'],
      origin: 'Định Hóa, Thái Nguyên',
      harvestSeason: 'Mùa xuân (tháng 3-4), Mùa hè (tháng 6-7), Mùa thu (tháng 9-10)',
      materials: ['Lá trà non', 'Lá trà già'],
      dimensions: 'Hộp: 12x8x4cm (50g)'
    },
    seo: {
      metaTitle: 'Trà xanh Định Hóa 5 sao OCOP - Hợp tác xã Trà Định Hóa',
      metaDescription: 'Trà xanh thủ công từ vườn trà cổ thụ hàng trăm năm tại Định Hóa, Thái Nguyên. Đạt OCOP 5 sao, VietGAP, xuất khẩu quốc tế.',
      metaKeywords: ['trà định hóa', 'trà thái nguyên', 'ocop 5 sao', 'trà xanh', 'vietgap'],
      ogTitle: 'Trà xanh Định Hóa 5 sao OCOP',
      ogDescription: 'Trà xanh thủ công từ vườn trà cổ thụ hàng trăm năm tại Định Hóa',
      ogImage: '/images/products/tra-dinh-hoa-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/products/tra-dinh-hoa-5-sao',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Trà xanh Định Hóa 5 sao OCOP',
        brand: { '@type': 'Brand', name: 'Hợp tác xã Trà Định Hóa' },
        offers: { '@type': 'Offer', price: '450000', priceCurrency: 'VND' }
      }
    },
    relatedProducts: ['tra-thai-nguyen-xuat-khau', 'tra-thai-nguyen-huyen-vi', 'tra-xanh-vietgap'],
    location: {
      province: 'Thái Nguyên',
      district: 'Định Hóa',
      coordinates: { lat: 21.5938, lng: 105.8382 }
    },
    createdAt: '2023-01-15T08:00:00Z',
    updatedAt: '2024-11-01T08:00:00Z'
  },
  {
    id: 'banh-chung-phu-giay',
    slug: 'banh-chung-phu-giay',
    name: 'Bánh chưng Phủ Giầy truyền thống',
    stars: 5,
    category: 'Ẩm thực',
    subCategory: 'Bánh mặn',
    province: 'Hà Nội',
    district: 'Hoàn Kiếm',
    producer: 'Gia đình Nguyễn Văn Bình',
    producerType: 'Hộ gia đình',
    description: 'Bánh chưng Phủ Giầy nổi tiếng Hà Nội với truyền thống hơn 200 năm. Gạo nếp cái hoa vàng, đậu xanh vỏ xanh, thịt heo ba chỉ, lá dong tươi - gói tay, hấp 12h trên bếp than hoa.',
    ingredients: ['Gạo nếp cái hoa vàng', 'Đậu xanh vỏ xanh', 'Thịt heo ba chỉ', 'Lá dong', 'Muối', 'Tiêu', 'Hành tím'],
    process: ['Ngâm gạo nếp', 'Luộc đậu xanh', 'Ướp thịt', 'Gói bánh lá dong', 'Hấp than hoa 12h', 'Ép dẹt', 'Đóng gói'],
    certifications: ['OCOP 5 sao', 'Di sản ẩm thực Quốc gia', 'HACCP'],
    awards: ['Top 10 món ăn ngon Hà Nội', 'Giải thưởng ẩm thực Việt Nam 2023', 'Di sản văn hóa vô hình quận Hoàn Kiếm'],
    nutritionInfo: 'Mỗi 100g: Protein 8.5g, Carbs 22g, Fat 6.2g, Energy 175 kcal',
    storage: 'Bảo quản tủ mát 3-5 ngày, tủ đông 1 tháng. Hấp lại trước khi ăn.',
    price: '120.000 - 180.000 VNĐ/cái (500g)',
    images: [
      '/images/products/banh-chung-phu-giay-1.jpg',
      '/images/products/banh-chung-phu-giay-2.jpg'
    ],
    specs: {
      weight: ['300g', '500g', '1kg'],
      origin: 'Phủ Giầy, Hoàn Kiếm, Hà Nội',
      harvestSeason: 'Cả năm (tăng cao dịp Tết Nguyên đán)',
      materials: ['Gạo nếp', 'Đậu xanh', 'Thịt heo', 'Lá dong'],
      dimensions: 'Tròn: đường kính 12cm, cao 4cm'
    },
    seo: {
      metaTitle: 'Bánh chưng Phủ Giầy truyền thống - OCOP 5 sao Hà Nội',
      metaDescription: 'Bánh chưng Phủ Giầy nổi tiếng Hà Nội truyền thống 200 năm. Gạo nếp cái, đậu xanh, thịt heo ba chỉ, hấp than hoa 12h. OCOP 5 sao.',
      metaKeywords: ['bánh chưng phủ giầy', 'bánh chưng hà nội', 'ocop 5 sao', 'ẩm thực truyền thống'],
      ogTitle: 'Bánh chưng Phủ Giầy truyền thống',
      ogDescription: 'Bánh chưng Phủ Giầy nổi tiếng Hà Nội truyền thống 200 năm',
      ogImage: '/images/products/banh-chung-phu-giay-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/products/banh-chung-phu-giay',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Bánh chưng Phủ Giầy truyền thống',
        brand: { '@type': 'Brand', name: 'Gia đình Nguyễn Văn Bình' },
        offers: { '@type': 'Offer', price: '120000', priceCurrency: 'VND' }
      }
    },
    relatedProducts: ['banh-chung-xanh', 'banh-tet-phu-giay', 'banh-chung-gao-lut'],
    location: {
      province: 'Hà Nội',
      district: 'Hoàn Kiếm',
      coordinates: { lat: 21.0285, lng: 105.8542 }
    },
    createdAt: '2020-01-01T08:00:00Z',
    updatedAt: '2024-10-15T08:00:00Z'
  },
  {
    id: 'go-bau-truc-truyen-thong',
    slug: 'go-bau-truc-truyen-thong',
    name: 'Gốm Bau Trúc truyền thống người Chăm',
    stars: 5,
    category: 'Nghề thủ công',
    subCategory: 'Gốm - Sứ',
    province: 'Ninh Thuận',
    district: 'Bác Ái',
    producer: 'Hợp tác xã Gốm Bau Trúc',
    producerType: 'Hợp tác xã',
    description: 'Sản phẩm gốm thủ công độc đáo của người Chăm tại Bau Trúc - làng gốm cổ xưa nhất Đông Nam Á. Kỹ thuật "xoay bàn chân, đập tay" không dùng bàn xoay, tạo hình hoàn toàn bằng tay.',
    ingredients: ['Đất sét Bau Trúc', 'Cát sông', 'Nước'],
    process: ['Làm đất', 'Tạo hình tay (xoay bàn chân, đập tay)', 'Sấy tự nhiên', 'Nung hồng-than/gốm men', 'Làm mát', 'Hoàn thiện'],
    certifications: ['OCOP 5 sao', 'Di sản văn hóa vô hình Quốc gia', 'UNESCO - Làng gốm cổ xưa nhất Đông Nam Á'],
    awards: ['Giải vàng Triển lãm Nghề thủ công Việt Nam 2023', 'Top 10 sản phẩm OCOP du lịch 2024', 'Giải thưởng Văn hóa Chăm 2023'],
    storage: 'Tránh va đập mạnh, rửa bằng nước sạch, khăn mềm. Không dùng trong lò vi sóng, máy rửa bát.',
    price: '200.000 - 2.500.000 VNĐ/sản phẩm',
    images: [
      '/images/products/go-bau-truc-1.jpg',
      '/images/products/go-bau-truc-2.jpg',
      '/images/products/go-bau-truc-3.jpg'
    ],
    specs: {
      weight: ['200g - 5kg tùy sản phẩm'],
      origin: 'Bau Trúc, Bác Ái, Ninh Thuận',
      harvestSeason: 'Cả năm (khó khăn mùa mưa bão)',
      materials: ['Đất sét tự nhiên', 'Men gốm truyền thống'],
      dimensions: 'Đa dạng: chén, bình, vases, đồ trang trí, nồi nấu'
    },
    seo: {
      metaTitle: 'Gốm Bau Trúc truyền thống người Chăm - OCOP 5 sao Ninh Thuận',
      metaDescription: 'Gốm Bau Trúc - làng gốm cổ xưa nhất Đông Nam Á, kỹ thuật xoay bàn chân đập tay độc đáo của người Chăm. OCOP 5 sao, Di sản UNESCO.',
      metaKeywords: ['gốm bau truc', 'người chăm', 'ninh thuận', 'nghề thủ công', 'ocop 5 sao', 'unesco'],
      ogTitle: 'Gốm Bau Trúc truyền thống người Chăm',
      ogDescription: 'Làng gốm cổ xưa nhất Đông Nam Á, kỹ thuật xoay bàn chân đập tay độc đáo',
      ogImage: '/images/products/go-bau-truc-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/products/go-bau-truc-truyen-thong',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Gốm Bau Trúc truyền thống người Chăm',
        brand: { '@type': 'Brand', name: 'Hợp tác xã Gốm Bau Trúc' },
        offers: { '@type': 'Offer', price: '200000', priceCurrency: 'VND' }
      }
    },
    relatedProducts: ['go-bau-truc-hien-dai', 'go-bau-truc-men-sac', 'do-trang-tri-bau-truc'],
    location: {
      province: 'Ninh Thuận',
      district: 'Bác Ái',
      coordinates: { lat: 11.6739, lng: 108.8629 }
    },
    createdAt: '2015-01-01T08:00:00Z',
    updatedAt: '2024-10-10T08:00:00Z'
  },
  {
    id: 'ca-phe-buon-ma-thuot-5-sao',
    slug: 'ca-phe-buon-ma-thuot-5-sao',
    name: 'Cà phê Robusta Buôn Ma Thuột 5 sao OCOP',
    stars: 5,
    category: 'Đồ uống',
    subCategory: 'Cà phê',
    province: 'Đắk Lắk',
    district: 'Buôn Ma Thuột',
    producer: 'Công ty TNHH Cà phê Buôn Ma Thuột',
    producerType: 'Doanh nghiệp',
    description: 'Cà phê Robusta cao cấp từ vùng cao nguyên bazan đỏ Buôn Ma Thuột. Hạt được tuyển chọn, chế biến ướt/honey/natural, rang xay công nghệ hiện đại đạt chuẩn EU, USDA Organic.',
    ingredients: ['Hạt cà phê Robusta 100%'],
    process: ['Thu hoạch chọn lọc', 'Chế biến ướt/honey/natural', 'Sấy khô', 'Rang Profile', 'Xay', 'Đóng gói hút chân không/nitrogen'],
    certifications: ['OCOP 5 sao', 'VietGAP', 'HACCP', 'ISO 22000', 'USDA Organic', 'EU Organic', 'Rainforest Alliance'],
    awards: ['Vietnam Coffee Stars 2023 - Gold', 'Best Robusta ASEAN 2024', 'Top 10 sản phẩm xuất khẩu nông nghiệp 2023'],
    nutritionInfo: 'Mỗi 100g: Caffeine 2.2-2.7g, Chlorogenic acid 7-10g, Lipid 12-16g, Protein 11-13g',
    storage: 'Bảo quản nơi khô ráo, mát, tránh ánh nắng. Sau mở dùng trong 3 tháng để giữ hương vị tốt nhất.',
    price: '280.000 - 650.000 VNĐ/250g',
    images: [
      '/images/products/ca-phe-buon-ma-thuot-1.jpg',
      '/images/products/ca-phe-buon-ma-thuot-2.jpg',
      '/images/products/ca-phe-buon-ma-thuot-3.jpg'
    ],
    specs: {
      weight: ['100g', '250g', '500g', '1kg'],
      origin: 'Buôn Ma Thuột, Đắk Lắk',
      harvestSeason: 'Mùa vụ chính: 11-12 / Mùa vụ phụ: 3-4',
      materials: ['Hạt Robusta Screen 18', 'Hạt Culi (Peaberry)'],
      dimensions: 'Túi: 18x12x5cm (250g)'
    },
    seo: {
      metaTitle: 'Cà phê Robusta Buôn Ma Thuột 5 sao OCOP - Đắk Lắk',
      metaDescription: 'Cà phê Robusta cao cấp từ vùng cao nguyên bazan đỏ Buôn Ma Thuột. Chế biến ướt/honey/natural, rang xay chuẩn EU, USDA Organic. OCOP 5 sao.',
      metaKeywords: ['cà phê buôn ma thuột', 'cà phê robusta', 'đắk lắk', 'ocop 5 sao', 'cà phê xuất khẩu'],
      ogTitle: 'Cà phê Robusta Buôn Ma Thuột 5 sao OCOP',
      ogDescription: 'Cà phê Robusta cao cấp từ vùng cao nguyên bazan đỏ Buôn Ma Thuột',
      ogImage: '/images/products/ca-phe-buon-ma-thuot-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/products/ca-phe-buon-ma-thuot-5-sao',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Cà phê Robusta Buôn Ma Thuột 5 sao OCOP',
        brand: { '@type': 'Brand', name: 'Công ty TNHH Cà phê Buôn Ma Thuột' },
        offers: { '@type': 'Offer', price: '280000', priceCurrency: 'VND' }
      }
    },
    relatedProducts: ['ca-phe-culi', 'ca-phe-honey', 'ca-phe-natural', 'ca-phe-rang-xay'],
    location: {
      province: 'Đắk Lắk',
      district: 'Buôn Ma Thuột',
      coordinates: { lat: 12.6676, lng: 108.0428 }
    },
    createdAt: '2022-01-15T08:00:00Z',
    updatedAt: '2024-11-01T08:00:00Z'
  },
  {
    id: 'nuoc-mam-phu-quoc-5-sao',
    slug: 'nuoc-mam-phu-quoc-5-sao',
    name: 'Nước mắm Phú Quốc truyền thống 5 sao OCOP',
    stars: 5,
    category: 'Gia vị',
    subCategory: 'Nước mắm',
    province: 'Kiên Giang',
    district: 'Phú Quốc',
    producer: 'Hợp tác xã Nước mắm Phú Quốc',
    producerType: 'Hợp tác xã',
    description: 'Nước mắm Phú Quốc nổi tiếng với độ đạm ≥ 30°N. Cá cơm tươi, muối biển khô, ủ tự nhiên 12-18 tháng trong gỗ gõ (lim, sến). Không phụ gia, không màu, không chất bảo quản.',
    ingredients: ['Cá cơm tươi (Stolephorus spp.)', 'Muối biển khô (tỷ lệ 3:1)'],
    process: ['Tắm muối cá cơm', 'Ủ trong gỗ gõ 12-18 tháng', 'Lọc lấy nước mắm nhĩ', 'Kiểm tra độ đạm', 'Đóng gói thủy tinh'],
    certifications: ['OCOP 5 sao', 'Chỉ dẫn địa lý Phú Quốc', 'HACCP', 'ISO 22000', 'FDA (Mỹ)', 'JAS (Nhật)'],
    awards: ['Top 10 nước mắm Việt Nam 2023', 'Giải thưởng sản phẩm xuất khẩu vượt trội 2024', 'Top 50 thương hiệu Việt Nam 2023'],
    nutritionInfo: 'Mỗi 100ml: Protein ≥ 30g (độ đạm 30°N), Natri 6-8g, Kali 1.2g, Canxi 150mg, Amino acid tự do đa dạng',
    storage: 'Bảo quản nơi khô ráo, mát. Sau mở nắp dùng trong 12 tháng. Không cần tủ lạnh.',
    price: '180.000 - 450.000 VNĐ/500ml',
    images: [
      '/images/products/nuoc-mam-phu-quoc-1.jpg',
      '/images/products/nuoc-mam-phu-quoc-2.jpg'
    ],
    specs: {
      weight: ['200ml', '500ml', '1L', '2L', '5L'],
      origin: 'Phú Quốc, Kiên Giang',
      harvestSeason: 'Mùa cá cơm: 3-9 hàng năm',
      materials: ['Cá cơm tươi', 'Muối biển', 'Gỗ gõ (lim, sến)'],
      dimensions: 'Chai thủy tinh: 22x6x6cm (500ml)'
    },
    seo: {
      metaTitle: 'Nước mắm Phú Quốc truyền thống 5 sao OCOP - Kiên Giang',
      metaDescription: 'Nước mắm Phú Quốc độ đạm ≥ 30°N, ủ 12-18 tháng trong gỗ gõ. Không phụ gia, xuất khẩu 20 quốc gia. OCOP 5 sao, Chỉ dẫn địa lý.',
      metaKeywords: ['nước mắm phú quốc', 'nước mắm 5 sao', 'kiên giang', 'chỉ dẫn địa lý', 'ocop'],
      ogTitle: 'Nước mắm Phú Quốc truyền thống 5 sao OCOP',
      ogDescription: 'Nước mắm Phú Quốc độ đạm ≥ 30°N, ủ 12-18 tháng trong gỗ gõ',
      ogImage: '/images/products/nuoc-mam-phu-quoc-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/products/nuoc-mam-phu-quoc-5-sao',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Nước mắm Phú Quốc truyền thống 5 sao OCOP',
        brand: { '@type': 'Brand', name: 'Hợp tác xã Nước mắm Phú Quốc' },
        offers: { '@type': 'Offer', price: '180000', priceCurrency: 'VND' }
      }
    },
    relatedProducts: ['nuoc-mam-phu-quoc-tu-nhien', 'nuoc-mam-phu-quoc-chiet-xuat', 'muoi-bien-phu-quoc'],
    location: {
      province: 'Kiên Giang',
      district: 'Phú Quốc',
      coordinates: { lat: 10.2245, lng: 103.9627 }
    },
    createdAt: '2018-01-01T08:00:00Z',
    updatedAt: '2024-10-20T08:00:00Z'
  },
  {
    id: 'lua-van-phuc-truyen-thong',
    slug: 'lua-van-phuc-truyen-thong',
    name: 'Lụa Vạn Phúc thủ công nhuộm tự nhiên',
    stars: 5,
    category: 'Dệt may',
    subCategory: 'Vải lụa',
    province: 'Hà Nội',
    district: 'Hà Đông',
    producer: 'Hợp tác xã Dệt lụa Vạn Phúc',
    producerType: 'Hợp tác xã',
    description: 'Vải lụa thủ công từ làng Vạn Phúc 100 năm tuổi. Nuôi tơ, kéo tơ, nhuộm tự nhiên (lá chàm, củ nghệ, vỏ cà phê, lá trà), dệt tay trên khung gỗ truyền thống.',
    ingredients: ['Tơ tằm tự nhiên 100%', 'Chất nhuộm thực vật'],
    process: ['Nuôi tằm', 'Kéo tơ', 'Nhuộm tự nhiên', 'Sấy', 'Dệt tay', 'Hoàn thiện (giặt, ủi, kiểm tra)'],
    certifications: ['OCOP 5 sao', 'Di sản văn hóa vô hình Quốc gia', 'Vietnam Craft Village', 'Eco-friendly Certificate'],
    awards: ['Paris Fashion Week 2024 - Bộ sưu tập "Silk Road"', 'Top 10 làng nghề du lịch Việt Nam 2023', 'Giải thưởng Thời trang bền vững ASEAN 2024'],
    storage: 'Giặt khô hoặc giặt tay nước lạnh, xà phòng dịu. Ủi nhiệt độ thấp. Tránh ánh nắng trực tiếp.',
    price: '800.000 - 3.500.000 VNĐ/m (tùy loại vải, hoa văn)',
    images: [
      '/images/products/lua-van-phuc-1.jpg',
      '/images/products/lua-van-phuc-2.jpg'
    ],
    specs: {
      weight: ['50-120 g/m²'],
      origin: 'Vạn Phúc, Hà Đông, Hà Nội',
      harvestSeason: 'Cả năm',
      materials: ['Tơ tằm', 'Nhuộm lá chàm', 'Nhuộm củ nghệ', 'Nhuộm vỏ cà phê', 'Nhuộm lá trà'],
      dimensions: 'Rổn宽 90-110cm, bán thành phẩm áo dài, khăn choàng, túi xách'
    },
    seo: {
      metaTitle: 'Lụa Vạn Phúc thủ công nhuộm tự nhiên - OCOP 5 sao Hà Nội',
      metaDescription: 'Vải lụa thủ công từ làng Vạn Phúc 100 năm. Nhuộm tự nhiên lá chàm, củ nghệ, vỏ cà phê. Bộ sưu tập "Silk Road" chinh phục Paris Fashion Week.',
      metaKeywords: ['lụa vạn phúc', 'vải lụa', 'hà nội', 'nhuộm tự nhiên', 'thời trang bền vững', 'ocop 5 sao'],
      ogTitle: 'Lụa Vạn Phúc thủ công nhuộm tự nhiên',
      ogDescription: 'Vải lụa thủ công từ làng Vạn Phúc 100 năm, nhuộm tự nhiên',
      ogImage: '/images/products/lua-van-phuc-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/products/lua-van-phuc-truyen-thong',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Lụa Vạn Phúc thủ công nhuộm tự nhiên',
        brand: { '@type': 'Brand', name: 'Hợp tác xã Dệt lụa Vạn Phúc' },
        offers: { '@type': 'Offer', price: '800000', priceCurrency: 'VND' }
      }
    },
    relatedProducts: ['lua-van-phuc-hien-dai', 'ao-dai-lua-van-phuc', 'khan-choang-lua-van-phuc', 'tui-xach-lua-van-phuc'],
    location: {
      province: 'Hà Nội',
      district: 'Hà Đông',
      coordinates: { lat: 20.9711, lng: 105.7825 }
    },
    createdAt: '2010-01-01T08:00:00Z',
    updatedAt: '2024-10-15T08:00:00Z'
  },
  {
    id: 'tra-thai-nguyen-xuat-khau',
    slug: 'tra-thai-nguyen-xuat-khau',
    name: 'Trà Thái Nguyên xuất khẩu cao cấp',
    stars: 4,
    category: 'Đồ uống',
    subCategory: 'Trà',
    province: 'Thái Nguyên',
    district: 'Phú Lương',
    producer: 'Công ty Cổ phần Trà Thái Nguyên',
    producerType: 'Doanh nghiệp',
    description: 'Trà xanh, trà đen, trà ướp hoa thương hiệu Thái Nguyên dành cho xuất khẩu. Vườn trà VietGAP, chế biến dây chuyền tự động, đạt chuẩn EU, Japan, Korea, Middle East.',
    ingredients: ['Lá trà xanh/đen tươi', 'Hoa nhài/hoa hồng (cho trà ướp)'],
    process: ['Hấp tách', 'Uốn/cuộn', 'Ox hóa (trà đen)', 'Ướp hoa (trà ướp)', 'Sấy', 'Phân loại', 'Đóng gói'],
    certifications: ['OCOP 4 sao', 'VietGAP', 'HACCP', 'ISO 22000', 'JAS (Nhật)', 'KFDA (Hàn)'],
    awards: ['Top 5 thương hiệu trà xuất khẩu 2023', 'Giải thưởng Trà ASEAN 2024'],
    storage: 'Bảo quản nơi khô ráo, mát, kín đáo. Dùng trong 18 tháng.',
    price: '200.000 - 500.000 VNĐ/100g',
    images: ['/images/products/tra-thai-nguyen-xk-1.jpg'],
    seo: {
      metaTitle: 'Trà Thái Nguyên xuất khẩu cao cấp - OCOP 4 sao',
      metaDescription: 'Trà xanh, trà đen, trà ướp hoa Thái Nguyên xuất khẩu EU, Nhật, Hàn. VietGAP, HACCP, OCOP 4 sao.',
      metaKeywords: ['trà thái nguyên', 'trà xuất khẩu', 'ocop 4 sao', 'vietgap'],
      ogTitle: 'Trà Thái Nguyên xuất khẩu cao cấp',
      ogImage: '/images/products/tra-thai-nguyen-xk-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/products/tra-thai-nguyen-xuat-khau',
      structuredData: {}
    },
    relatedProducts: ['tra-dinh-hoa-5-sao', 'tra-thai-nguyen-huyen-vi'],
    location: { province: 'Thái Nguyên', district: 'Phú Lương', coordinates: { lat: 21.4833, lng: 105.7167 } },
    createdAt: '2023-06-01T08:00:00Z',
    updatedAt: '2024-10-01T08:00:00Z'
  },
  {
    id: 'ca-phe-culi',
    slug: 'ca-phe-culi',
    name: 'Cà phê Culi (Peaberry) Buôn Ma Thuột đặc sản',
    stars: 5,
    category: 'Đồ uống',
    subCategory: 'Cà phê',
    province: 'Đắk Lắk',
    district: 'Buôn Ma Thuột',
    producer: 'Công ty TNHH Cà phê Buôn Ma Thuột',
    producerType: 'Doanh nghiệp',
    description: 'Hạt Culi (Peaberry) hiếm - chỉ 5-10% sản lượng, hình tròn đặc trưng, hương vị đậm đà, nồng nàn hơn cà phê thường. Chế biến honey, natural, rang profile chuyên biệt.',
    ingredients: ['Hạt cà phê Culi (Peaberry) 100%'],
    process: ['Thu hoạch Culi riêng', 'Chế biến honey/natural', 'Sấy', 'Rang profile Culi', 'Xay', 'Đóng gói nitrogen'],
    certifications: ['OCOP 5 sao', 'VietGAP', 'HACCP', 'USDA Organic'],
    awards: ['Best Peaberry Vietnam 2023', 'Specialty Coffee Association Score 88+'],
    storage: 'Nơi khô mát, kín đáo. Dùng trong 3 tháng sau mở.',
    price: '550.000 - 1.200.000 VNĐ/250g',
    images: ['/images/products/ca-phe-culi-1.jpg'],
    seo: {
      metaTitle: 'Cà phê Culi Buôn Ma Thuột đặc sản - OCOP 5 sao',
      metaDescription: 'Hạt Culi (Peaberry) hiếm 5-10% sản lượng, hương vị nồng nàn đặc trưng. Chế biến honey/natural, OCOP 5 sao.',
      metaKeywords: ['cà phê culi', 'peaberry', 'buôn ma thuột', 'cà phê đặc sản', 'ocop 5 sao'],
      ogTitle: 'Cà phê Culi Buôn Ma Thuột đặc sản',
      ogImage: '/images/products/ca-phe-culi-1.jpg',
      ogType: 'product',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocop.vn/products/ca-phe-culi',
      structuredData: {}
    },
    relatedProducts: ['ca-phe-buon-ma-thuot-5-sao', 'ca-phe-honey', 'ca-phe-natural'],
    location: { province: 'Đắk Lắk', district: 'Buôn Ma Thuột', coordinates: { lat: 12.6676, lng: 108.0428 } },
    createdAt: '2023-01-01T08:00:00Z',
    updatedAt: '2024-11-01T08:00:00Z'
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const stars = searchParams.get('stars')?.split(',').map(Number) as (3|4|5)[] | null;
  const category = searchParams.get('category')?.split(',');
  const province = searchParams.get('province')?.split(',');
  const producerType = searchParams.get('producerType')?.split(',');
  const q = searchParams.get('q')?.toLowerCase();
  const sort = searchParams.get('sort') || 'createdAt';
  const order = searchParams.get('order') as 'asc' | 'desc' || 'desc';

  let filtered = [...productsData];

  // Apply filters
  if (stars && stars.length > 0) {
    filtered = filtered.filter(p => stars.includes(p.stars));
  }
  if (category && category.length > 0) {
    filtered = filtered.filter(p => category.includes(p.category));
  }
  if (province && province.length > 0) {
    filtered = filtered.filter(p => province.includes(p.province));
  }
  if (producerType && producerType.length > 0) {
    filtered = filtered.filter(p => producerType.includes(p.producerType));
  }
  if (q) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.province.toLowerCase().includes(q) ||
      p.producer.toLowerCase().includes(q) ||
      p.tags?.some(tag => tag.toLowerCase().includes(q))
    );
  }

  // Sort
  filtered.sort((a, b) => {
    const aVal = a[sort as keyof Product];
    const bVal = b[sort as keyof Product];
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;
  const products = filtered.slice(start, start + limit);

  // Get unique filter options
  const categories = [...new Set(productsData.map(p => p.category))];
  const subCategories = [...new Set(productsData.map(p => p.subCategory).filter(Boolean))];
  const provinces = [...new Set(productsData.map(p => p.province))];
  const producerTypes = [...new Set(productsData.map(p => p.producerType))];
  const starOptions = [3, 4, 5] as const;

  return NextResponse.json({
    data: products,
    meta: {
      page,
      limit,
      total: totalItems,
      totalPages,
    },
    filters: {
      categories,
      subCategories,
      provinces,
      producerTypes,
      stars: starOptions,
    }
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    }
  });
}