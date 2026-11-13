// API Route: /api/stories
// Returns list of OCOP stories/articles with pagination and filtering

import { NextRequest, NextResponse } from 'next/server';
import { Story, StoryType, PaginatedResponse } from '@ocop/shared-types';

// Mock story data - extracted from design references
const storiesData: Story[] = [
  {
    id: 'story-1',
    slug: 'tra-thai-nguyen-ve-dinh-cao',
    type: 'feature',
    category: 'Câu chuyện thành công',
    subCategory: 'Trà',
    province: 'Thái Nguyên',
    district: 'Định Hóa',
    headline: 'Trà Thái Nguyên: Vươn tầm quốc tế từ rễ cây đến ly trà',
    subHeadline: 'Hành trình 10 năm biến trà từ nông sản truyền thống thành thương hiệu OCOP 5 sao chinh phục thị trường khó tính',
    excerpt: 'Từ những đồi trà xanh mướt tại Định Hóa, Thái Nguyên, câu chuyện về trà Việt Nam đã bay xa chạm đến những sàn giao dịch quốc tế. Bí quyết nằm ở sự kết hợp giữa truyền thống nghìn năm và công nghệ hiện đại.',
    content: `<p>Trà Thái Nguyên không chỉ là một loại đồ uống, mà là biểu tượng của văn hóa Việt Nam. Tại huyện Định Hóa, những vườn trà cổ thụ hàng trăm năm tuổi vẫn được chăm sóc tỉ mỉ bởi các hộ gia đình truyền thống.</p><h2>Truyền thống gặp gỡ hiện đại</h2><p>Hợp tác xã Trà Định Hóa đã đầu tư dây chuyền chế biến công nghệ cao, áp dụng tiêu chuẩn VietGAP, HACCP, ISO 22000. Kết quả: sản lượng tăng 40%, giá trị xuất khẩu tăng 3 lần chỉ sau 2 năm đạt OCOP 5 sao.</p>`,
    author: 'Nguyễn Văn An',
    authorRole: 'Phóng viên chuyên ngành nông nghiệp',
    publishedDate: '2024-11-15T08:00:00Z',
    readTime: '8 phút đọc',
    tags: ['trà', 'thái-nguyên', 'ocop-5-sao', 'xuat-khau', 'vietgap'],
    featuredImage: '/images/stories/tra-thai-nguyen-hero.jpg',
    images: [
      '/images/stories/tra-thai-nguyen-1.jpg',
      '/images/stories/tra-thai-nguyen-2.jpg',
      '/images/stories/tra-thai-nguyen-3.jpg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=tra-thai-nguyen',
    duration: '12:34',
    relatedProducts: ['tra-dinh-hoa-5-sao', 'tra-thai-nguyen-xuat-khau'],
    relatedStories: ['story-2', 'story-5'],
    seo: {
      metaTitle: 'Trà Thái Nguyên: Vươn tầm quốc tế từ rễ cây đến ly trà | OCOP Vietnam',
      metaDescription: 'Hành trình 10 năm biến trà Thái Nguyên từ nông sản truyền thống thành thương hiệu OCOP 5 sao chinh phục thị trường quốc tế.',
      metaKeywords: ['trà thái nguyên', 'ocop 5 sao', 'xuất khẩu trà', 'vietgap'],
      ogTitle: 'Trà Thái Nguyên: Vươn tầm quốc tế từ rễ cây đến ly trà',
      ogDescription: 'Hành trình 10 năm biến trà từ nông sản truyền thống thành thương hiệu OCOP 5 sao chinh phục thị trường khó tính',
      ogImage: '/images/stories/tra-thai-nguyen-hero.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/cau-chuyen-ocop/tra-thai-nguyen-ve-dinh-cao',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Trà Thái Nguyên: Vươn tầm quốc tế từ rễ cây đến ly trà',
        datePublished: '2024-11-15T08:00:00Z',
        author: { '@type': 'Person', name: 'Nguyễn Văn An' }
      }
    },
    location: {
      province: 'Thái Nguyên',
      district: 'Định Hóa',
      coordinates: { lat: 21.5938, lng: 105.8382 }
    },
    createdAt: '2024-11-10T08:00:00Z',
    updatedAt: '2024-11-15T08:00:00Z'
  },
  {
    id: 'story-2',
    slug: 'banh-chung-phu-giay-nguyen-ban',
    type: 'story',
    category: 'Di sản văn hóa',
    subCategory: 'Ẩm thực',
    province: 'Hà Nội',
    district: 'Hoàn Kiếm',
    headline: 'Bánh chưng Phủ Giầy: Giữ lửa truyền thống ngàn năm',
    subHeadline: 'Làng bánh chưng cổ xưa tại trung tâm Hà Nội vẫn giữ nguyên hương vị nguyên bản qua nhiều thế hệ',
    excerpt: 'Giữa lòng phố cổ Hà Nội, mùi lá dong, gạo nếp và thịt heo quay vẫn bốc lên từ lò hấp truyền thống của gia đình ông Nguyễn Văn Bình - người giữ lửa nghề làm bánh chưng Phủ Giầy đã hơn 200 năm.',
    content: `<p>Phủ Giầy không chỉ là tên một món ăn, đó là tên gọi của một di sản văn hóa vô hình. Gia đình ông Bình là thế hệ thứ 7 tiếp quản nghề này.</p><h2>Bí quyết hương vị</h2><p>Gạo nếp cái hoa vàng, đậu xanh vỏ xanh, thịt heo ba chỉ, lá dong tươi - mọi nguyên liệu đều được chọn lọc kỹ càng. Quá trình gói, hấp 12 giờ liên tục trên bếp than hoa tạo nên hương vị đặc trưng không thể nhái được.</p>`,
    author: 'Trần Thị Lan',
    authorRole: 'Chuyên gia di sản ẩm thực',
    publishedDate: '2024-11-10T08:00:00Z',
    readTime: '6 phút đọc',
    tags: ['bánh chưng', 'phủ giầy', 'hà nội', 'di sản', 'ẩm thực'],
    featuredImage: '/images/stories/banh-chung-phu-giay.jpg',
    images: [
      '/images/stories/banh-chung-1.jpg',
      '/images/stories/banh-chung-2.jpg'
    ],
    relatedProducts: ['banh-chung-phu-giay', 'banh-chung-xanh'],
    relatedStories: ['story-1', 'story-3'],
    seo: {
      metaTitle: 'Bánh chưng Phủ Giầy: Giữ lửa truyền thống ngàn năm | OCOP Vietnam',
      metaDescription: 'Làng bánh chưng cổ xưa tại trung tâm Hà Nội vẫn giữ nguyên hương vị nguyên bản qua nhiều thế hệ.',
      metaKeywords: ['bánh chưng phủ giầy', 'hà nội', 'di sản ẩm thực', 'ocop'],
      ogTitle: 'Bánh chưng Phủ Giầy: Giữ lửa truyền thống ngàn năm',
      ogDescription: 'Giữa lòng phố cổ Hà Nội, mùi lá dong, gạo nếp và thịt heo quay vẫn bốc lên từ lò hấp truyền thống',
      ogImage: '/images/stories/banh-chung-phu-giay.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/cau-chuyen-ocop/banh-chung-phu-giay-nguyen-ban',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Bánh chưng Phủ Giầy: Giữ lửa truyền thống ngàn năm',
        datePublished: '2024-11-10T08:00:00Z',
        author: { '@type': 'Person', name: 'Trần Thị Lan' }
      }
    },
    location: {
      province: 'Hà Nội',
      district: 'Hoàn Kiếm',
      coordinates: { lat: 21.0285, lng: 105.8542 }
    },
    createdAt: '2024-11-05T08:00:00Z',
    updatedAt: '2024-11-10T08:00:00Z'
  },
  {
    id: 'story-3',
    slug: 'go-do-bau-truc-cham',
    type: 'photo-essay',
    category: 'Nghề thủ công',
    subCategory: 'Gốm',
    province: 'Ninh Thuận',
    district: 'Bác Ái',
    headline: 'Gốm Bau Trúc: Chàm tay tạo hình hồn Việt',
    subHeadline: 'Làng gốm cổ xưa nhất Đông Nam Á vẫn chế tác bằng tay không dùng bàn xoay',
    excerpt: 'Tại Bau Trúc - Ninh Thuận, người Chăm vẫn bảo tồn kỹ thuật làm gốm thủ công độc đáo: không bàn xoay, chỉ dùng tay và bàn chân để tạo hình. Mỗi sản phẩm là một tác phẩm nghệ thuật mang hồn cốt dân tộc.',
    content: `<p>Bau Trúc được UNESCO công nhận là làng gốm cổ xưa nhất Đông Nam Á còn tồn tại. Kỹ thuật "xoay bàn chân, đập tay" độc đáo tạo nên đường nét mềm mại, tự nhiên.</p><h2>Văn hóa sống</h2><p>Khác với gốm Bát Tràng dùng bàn xoay, người Chăm dùng bàn chân quay đĩa đất, hai tay đập hình. Kỹ thuật này đòi hỏi sự am hiểu sâu sắc về đất, lửa và cảm xúc nghệ nhân.</p>`,
    author: 'Lê Minh Tuấn',
    authorRole: 'Nhiếp ảnh gia văn hóa',
    publishedDate: '2024-11-05T08:00:00Z',
    readTime: '10 phút đọc',
    tags: ['gốm', 'bau truc', 'chăm', 'ninh thuận', 'nghề thủ công', 'unesco'],
    featuredImage: '/images/stories/go-bau-truc-hero.jpg',
    images: [
      '/images/stories/go-bau-truc-1.jpg',
      '/images/stories/go-bau-truc-2.jpg',
      '/images/stories/go-bau-truc-3.jpg',
      '/images/stories/go-bau-truc-4.jpg'
    ],
    relatedProducts: ['go-bau-truc-truyen-thong', 'go-bau-truc-hien-dai'],
    relatedStories: ['story-2', 'story-4'],
    seo: {
      metaTitle: 'Gốm Bau Trúc: Chàm tay tạo hình hồn Việt | OCOP Vietnam',
      metaDescription: 'Làng gốm cổ xưa nhất Đông Nam Á vẫn chế tác bằng tay không dùng bàn xoay - kỹ thuật độc đáo của người Chăm.',
      metaKeywords: ['gốm bau truc', 'người chăm', 'ninh thuận', 'di sản văn hóa', 'unesco'],
      ogTitle: 'Gốm Bau Trúc: Chàm tay tạo hình hồn Việt',
      ogDescription: 'Làng gốm cổ xưa nhất Đông Nam Á vẫn chế tác bằng tay không dùng bàn xoay',
      ogImage: '/images/stories/go-bau-truc-hero.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/cau-chuyen-ocop/go-do-bau-truc-cham',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Gốm Bau Trúc: Chàm tay tạo hình hồn Việt',
        datePublished: '2024-11-05T08:00:00Z',
        author: { '@type': 'Person', name: 'Lê Minh Tuấn' }
      }
    },
    location: {
      province: 'Ninh Thuận',
      district: 'Bác Ái',
      coordinates: { lat: 11.6739, lng: 108.8629 }
    },
    createdAt: '2024-11-01T08:00:00Z',
    updatedAt: '2024-11-05T08:00:00Z'
  },
  {
    id: 'story-4',
    slug: 'ca-phe-buon-ma-thuot-robusta',
    type: 'feature',
    category: 'Câu chuyện thành công',
    subCategory: 'Cà phê',
    province: 'Đắk Lắk',
    district: 'Buôn Ma Thuột',
    headline: 'Cà phê Buôn Ma Thuột: Vua Robusta chinh phục thế giới',
    subHeadline: 'Từ vùng cao nguyên đỏ, hạt cà phê Robusta Việt Nam đã khẳng định vị thế số 1 toàn cầu về sản lượng xuất khẩu',
    excerpt: 'Đắk Lắk - Thủ đô cà phê Việt Nam, nơi từng cây cà phê Robusta mọc trên đất bazan đỏ đặc trưng. Hành trình từ "hạt thô" đến "hạt chế biến sâu" đã tạo ra giá trị gấp 10 lần.',
    content: `<p>Cà phê Robusta Việt Nam chiếm 40% thị phần toàn cầu. Tại Buôn Ma Thuột, các doanh nghiệp OCOP đã đầu tư công nghệ rang xay, chiết xuất, đóng gói đạt chuẩn EU, USDA Organic.</p><h2>Chuyển dịch mô hình</h2><p>Từ bán hạt thô (green bean) sang bán thành phẩm: cà phê rang xay, cà phê hòa tan cao cấp, cà phê đặc sản (civet coffee, honey processed). Giá trị gia tăng tăng từ $2/kg lên $25-50/kg.</p>`,
    author: 'Phạm Quốc Dũng',
    authorRole: 'Chuyên gia cà phê & xuất khẩu',
    publishedDate: '2024-10-28T08:00:00Z',
    readTime: '12 phút đọc',
    tags: ['cà phê', 'buôn ma thuột', 'đắk lắk', 'robusta', 'xuất khẩu', 'ocop'],
    featuredImage: '/images/stories/ca-phe-buon-ma-thuot.jpg',
    images: [
      '/images/stories/ca-phe-1.jpg',
      '/images/stories/ca-phe-2.jpg',
      '/images/stories/ca-phe-3.jpg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=ca-phe-daklak',
    duration: '15:22',
    relatedProducts: ['ca-phe-buon-ma-thuot-5-sao', 'ca-phe-culi', 'ca-phe-honey'],
    relatedStories: ['story-1', 'story-5'],
    seo: {
      metaTitle: 'Cà phê Buôn Ma Thuột: Vua Robusta chinh phục thế giới | OCOP Vietnam',
      metaDescription: 'Hành trình từ hạt thô đến sản phẩm chế biến sâu giá trị cao của cà phê Robusta Việt Nam tại Đắk Lắk.',
      metaKeywords: ['cà phê buôn ma thuột', 'robusta', 'đắk lắk', 'xuất khẩu cà phê', 'ocop'],
      ogTitle: 'Cà phê Buôn Ma Thuột: Vua Robusta chinh phục thế giới',
      ogDescription: 'Từ vùng cao nguyên đỏ, hạt cà phê Robusta Việt Nam đã khẳng định vị thế số 1 toàn cầu',
      ogImage: '/images/stories/ca-phe-buon-ma-thuot.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/cau-chuyen-ocop/ca-phe-buon-ma-thuot-robusta',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Cà phê Buôn Ma Thuột: Vua Robusta chinh phục thế giới',
        datePublished: '2024-10-28T08:00:00Z',
        author: { '@type': 'Person', name: 'Phạm Quốc Dũng' }
      }
    },
    location: {
      province: 'Đắk Lắk',
      district: 'Buôn Ma Thuột',
      coordinates: { lat: 12.6676, lng: 108.0428 }
    },
    createdAt: '2024-10-25T08:00:00Z',
    updatedAt: '2024-10-28T08:00:00Z'
  },
  {
    id: 'story-5',
    slug: 'nuoc-mam-phu-quoc-truyen-thong',
    type: 'interview',
    category: 'Di sản văn hóa',
    subCategory: 'Nước mắm',
    province: 'Kiên Giang',
    district: 'Phú Quốc',
    headline: 'Nước mắm Phú Quốc: Bí mật 300 năm trong mỗi giọt',
    subHeadline: 'Phỏng vấn ông Nguyễn Văn Tám - Người giữ bí truyền chế biến nước mắm truyền thống thế hệ thứ 9',
    excerpt: 'Phú Quốc không chỉ nổi tiếng biển xanh cát trắng, mà còn là quê hương của nước mắm ngon nhất Việt Nam. Bí quyết: cá cơm tươi sống, muối biển khô, và thời gian 12-18 tháng ủ trong gỗ gõ.',
    content: `<p>"Nước mắm không phải làm, nước mắm phải ủ" - ông Tám chia sẻ. Quá trình ủ tự nhiên trong gỗ gõ (gỗ lim, gỗ sến) tạo nên hương vị đậm đà, màu cánh gián đặc trưng không thể nhân tạo được.</p><h2>Tiêu chuẩn OCOP</h2><p>Nước mắm Phú Quốc đạt OCOP 5 sao với độ đạm ≥ 30°N, không phụ gia, không màu, không chất bảo quản. Xuất khẩu sang 20 quốc gia包括 Nhật Bản, Hàn Quốc, EU, Mỹ.</p>`,
    author: 'Võ Thị Hương',
    authorRole: 'Phóng viên văn hóa - ẩm thực',
    publishedDate: '2024-10-20T08:00:00Z',
    readTime: '9 phút đọc',
    tags: ['nước mắm', 'phú quốc', 'kiên giang', 'truyền thống', 'ocop 5 sao', 'xuất khẩu'],
    featuredImage: '/images/stories/nuoc-mam-phu-quoc.jpg',
    images: [
      '/images/stories/nuoc-mam-1.jpg',
      '/images/stories/nuoc-mam-2.jpg'
    ],
    relatedProducts: ['nuoc-mam-phu-quoc-5-sao', 'nuoc-mam-phu-quoc-tu-nhien'],
    relatedStories: ['story-1', 'story-4'],
    seo: {
      metaTitle: 'Nước mắm Phú Quốc: Bí mật 300 năm trong mỗi giọt | OCOP Vietnam',
      metaDescription: 'Phỏng vấn người giữ bí truyền chế biến nước mắm Phú Quốc thế hệ thứ 9 - bí quyết 12-18 tháng ủ trong gỗ gõ.',
      metaKeywords: ['nước mắm phú quốc', 'kiên giang', 'truyền thống', 'ocop 5 sao', 'xuất khẩu'],
      ogTitle: 'Nước mắm Phú Quốc: Bí mật 300 năm trong mỗi giọt',
      ogDescription: 'Bí quyết: cá cơm tươi sống, muối biển khô, và thời gian 12-18 tháng ủ trong gỗ gõ.',
      ogImage: '/images/stories/nuoc-mam-phu-quoc.jpg',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/cau-chuyen-ocop/nuoc-mam-phu-quoc-truyen-thong',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Nước mắm Phú Quốc: Bí mật 300 năm trong mỗi giọt',
        datePublished: '2024-10-20T08:00:00Z',
        author: { '@type': 'Person', name: 'Võ Thị Hương' }
      }
    },
    location: {
      province: 'Kiên Giang',
      district: 'Phú Quốc',
      coordinates: { lat: 10.2245, lng: 103.9627 }
    },
    createdAt: '2024-10-15T08:00:00Z',
    updatedAt: '2024-10-20T08:00:00Z'
  },
  {
    id: 'story-6',
    slug: 'lua-van-phuc-ha-noi',
    type: 'video',
    category: 'Nghề thủ công',
    subCategory: 'Dệt lụa',
    province: 'Hà Nội',
    district: 'Hà Đông',
    headline: 'Lụa Vạn Phúc: Sợi tơ kết nối quá khứ và hiện tại',
    subHeadline: 'Video ghi lại quy trình dệt lụa thủ công và cách thiết kế hiện đại đưa lụa Vạn Phúc ra sàn diễn thời trang quốc tế',
    excerpt: 'Làng lụa Vạn Phúc với hơn 100 năm lịch sử, nơi tiếng khò khè máy dệt vẫn vang vọng hàng ngày. Sự kết hợp giữa kỹ thuật truyền thống và thiết kế hiện đại đã cho ra đời bộ sưu tập "Silk Road" chinh phục Paris Fashion Week.',
    content: `<p>Video tài liệu ghi lại toàn bộ quy trình: nuôi tơ, kéo tơ, nhuộm tự nhiên (lá chàm, củ nghệ, vỏ cà phê), dệt tay, hoàn thiện.</p><h2>Thời trang bền vững</h2><p>Bộ sưu tập "Silk Road" sử dụng 100% lụa tự nhiên, nhuộm bằng thực vật, không hóa chất. Được các nhà thiết kế quốc tế đánh giá cao về tính bền vững và sắc thái màu độc đáo.</p>`,
    author: 'Đội ngũ OCOP Media',
    authorRole: 'Ban biên tập đa phương tiện',
    publishedDate: '2024-10-15T08:00:00Z',
    readTime: '5 phút đọc',
    tags: ['lụa', 'vạn phúc', 'hà nội', 'dệt', 'thời trang', 'video', 'paris fashion week'],
    featuredImage: '/images/stories/lua-van-phuc-video.jpg',
    images: [
      '/images/stories/lua-van-phuc-1.jpg',
      '/images/stories/lua-van-phuc-2.jpg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=lua-van-phuc',
    duration: '18:45',
    relatedProducts: ['lua-van-phuc-truyen-thong', 'lua-van-phuc-hien-dai', 'ao-dai-lua-van-phuc'],
    relatedStories: ['story-2', 'story-3'],
    seo: {
      metaTitle: 'Lụa Vạn Phúc: Sợi tơ kết nối quá khứ và hiện tại | OCOP Vietnam',
      metaDescription: 'Video ghi lại quy trình dệt lụa thủ công và cách thiết kế hiện đại đưa lụa Vạn Phúc ra sàn diễn Paris Fashion Week.',
      metaKeywords: ['lụa vạn phúc', 'hà nội', 'dệt lụa', 'thời trang bền vững', 'paris fashion week'],
      ogTitle: 'Lụa Vạn Phúc: Sợi tơ kết nối quá khứ và hiện tại',
      ogDescription: 'Sự kết hợp giữa kỹ thuật truyền thống và thiết kế hiện đại đã cho ra đời bộ sưu tập "Silk Road"',
      ogImage: '/images/stories/lua-van-phuc-video.jpg',
      ogType: 'video',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/cau-chuyen-ocop/lua-van-phuc-ha-noi',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Lụa Vạn Phúc: Sợi tơ kết nối quá khứ và hiện tại',
        datePublished: '2024-10-15T08:00:00Z',
        duration: 'PT18M45S'
      }
    },
    location: {
      province: 'Hà Nội',
      district: 'Hà Đông',
      coordinates: { lat: 20.9711, lng: 105.7825 }
    },
    createdAt: '2024-10-10T08:00:00Z',
    updatedAt: '2024-10-15T08:00:00Z'
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const category = searchParams.get('category');
  const type = searchParams.get('type') as StoryType | null;
  const province = searchParams.get('province');
  const q = searchParams.get('q')?.toLowerCase();
  const sort = searchParams.get('sort') || 'publishedDate';
  const order = searchParams.get('order') as 'asc' | 'desc' || 'desc';

  let filtered = [...storiesData];

  // Apply filters
  if (category) {
    filtered = filtered.filter(s => s.category === category);
  }
  if (type) {
    filtered = filtered.filter(s => s.type === type);
  }
  if (province) {
    filtered = filtered.filter(s => s.province === province);
  }
  if (q) {
    filtered = filtered.filter(s => 
      s.headline.toLowerCase().includes(q) ||
      s.excerpt.toLowerCase().includes(q) ||
      s.tags.some(tag => tag.toLowerCase().includes(q)) ||
      s.category.toLowerCase().includes(q) ||
      s.province.toLowerCase().includes(q)
    );
  }

  // Sort
  filtered.sort((a, b) => {
    const aVal = (a[sort as keyof Story] as any) ?? '';
    const bVal = (b[sort as keyof Story] as any) ?? '';
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;
  const stories = filtered.slice(start, start + limit);

  // Get unique categories, types, provinces for filter options
  const categories = [...new Set(storiesData.map(s => s.category))];
  const types = [...new Set(storiesData.map(s => s.type))];
  const provinces = [...new Set(storiesData.map(s => s.province))];

  const response: PaginatedResponse<Story> = {
    data: stories,
    meta: {
      page,
      limit,
      total: totalItems,
      totalPages,
    }
  };

  return NextResponse.json({
    ...response,
    categories,
    types,
    provinces,
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    }
  });
}