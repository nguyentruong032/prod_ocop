export interface Product {
  slug: string;
  image: string;
  alt: string;
  stars: '5 SAO' | '4 SAO' | '3 SAO';
  category: string;
  province: string;
  title: string;
  producer: string;
  code: string;
  ctaType: 'origin' | 'contact';
  // Detail page specific fields
  description?: string;
  images?: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
  originStory?: string;
  certifications?: string[];
  relatedProducts?: string[];
}

export const allProducts: Product[] = [
  {
    slug: 'tra-xanh-tan-cuong',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1M-hPCyKjYjN4XQDk_rwfVbr4zVPCZx_3M0JiFbQflNHtEmgSD_tW0yTuVnhLO-Yc_QG3LRk3i_sLhPb8SeI6Wr69RanWvPE5vQZSqdv5_0v3N3VrTfWkqrVrGK4Gq_LVEqJLymXRlsYNw879pK8xEDtGAFBke4eS_OhN4yRe-RxKWgMX9rRNRuuEFYOi0UEkLCFrH0Py7xDsxZqW8EHiYgxPBvy',
    alt: 'Fresh vibrant green tea leaves of Tan Cuong Thai Nguyen in bamboo drying trays with morning mist over tea hills background, vivid emerald and jade tones.',
    stars: '5 SAO',
    category: 'Nông sản & Thực phẩm',
    province: 'Thái Nguyên',
    title: 'Trà xanh Tân Cương đặc sản',
    producer: 'HTX Trà Tân Cương',
    code: 'TN-TC-001',
    ctaType: 'origin',
    description: 'Trà xanh Tân Cương được trồng và chế biến tại vùng trà Tân Cương, Thái Nguyên - nơi có khí hậu mát mẻ, đất bazan màu đỏ giàu dinh dưỡng. Quy trình hấp, cuộn, sấy thủ công truyền thống giữ nguyên hương vị tanh đắng đặc trưng, vị ngọt hậu thanh êm dịu, nước trà màu xanh ngọc trong vắt.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1M-hPCyKjYjN4XQDk_rwfVbr4zVPCZx_3M0JiFbQflNHtEmgSD_tW0yTuVnhLO-Yc_QG3LRk3i_sLhPb8SeI6Wr69RanWvPE5vQZSqdv5_0v3N3VrTfWkqrVrGK4Gq_LVEqJLymXRlsYNw879pK8xEDtGAFBke4eS_OhN4yRe-RxKWgMX9rRNRuuEFYOi0UEkLCFrH0Py7xDsxZqW8EHiYgxPBvy',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj8pK2rM_Nt0LQR_wwMf5kZ4VhVxMvMEpGx-IPkQFLG4NmQiDKZkvoHFQUbB_nY26xJyHgcL3B9ECKc33wnGUMIicxPOF4n_M6fD2_wX9_v02TXGGDaDyRvYbCU_KiYDiCKEgOKp_NhJjxEZGtvJ3c1XvWwXJaB1nxGRE_8UYC-Kn-JnWczfuKYYGEdiypuQHLSNYxZ6tmaMoVRXxQe',
    ],
    specifications: [
      { label: 'Chủng loại', value: 'Trà Shan, Trà đen lai' },
      { label: 'Phương pháp chế biến', value: 'Hấp - Cuộn - Sấy thủ công' },
      { label: 'Trọng lượng gói', value: '100g / 250g / 500g' },
      { label: 'Hạn sử dụng', value: '24 tháng kể từ NSX' },
      { label: 'Điều kiện bảo quản', value: 'Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp' },
      { label: 'Xuất xứ', value: 'Thôn Tân Cương, Huyện Đại Từ, Thái Nguyên' },
    ],
    originStory: 'Tân Cương từ xưa được mệnh danh là "Vương quốc trà" của Việt Nam. Với đất bazan đỏ, khí hậu mát mẻ quanh năm, sương móc dày đặc, vùng đất này tạo ra hương vị trà độc đáo không đâu có được. Người dân Tân Cương gìn giữ bí quyết chế biến trà thủ công qua nhiều thế hệ: hấp lá non trên lò than hồng, cuộn tay trên bàn tre, sấy khô ráo trên than hoa. Mỗi lá trà đều được chăm chút như một tác phẩm nghệ thuật.',
    certifications: ['OCOP 5 sao cấp Quốc gia', 'Chứng nhận ViệtGAP', 'Chứng nhận An toàn thực phẩm HACCP'],
    relatedProducts: ['tra-dinh-ngoc-tan-cuong', 'tinh-dau-que-tra-bong'],
  },
  {
    slug: 'nuoc-mam-phu-quoc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj8pK2rM_Nt0LQR_wwMf5kZ4VhVxMvMEpGx-IPkQFLG4NmQiDKZkvoHFQUbB_nY26xJyHgcL3B9ECKc33wnGUMIicxPOF4n_M6fD2_wX9_v02TXGGDaDyRvYbCU_KiYDiCKEgOKp_NhJjxEZGtvJ3c1XvWwXJaB1nxGRE_8UYC-Kn-JnWczfuKYYGEdiypuQHLSNYxZ6tmaMoVRXxQe',
    alt: 'Traditional wooden aging barrels of Phu Quoc fish sauce in rustic warehouse, golden amber liquid catching light through barrel staves, heritage fermentation atmosphere.',
    stars: '5 SAO',
    category: 'Nông sản & Thực phẩm',
    province: 'Kiên Giang',
    title: 'Nước mắm truyền thống Phú Quốc',
    producer: 'Công ty TNHH Nước mắm Khải Hoàn',
    code: 'KG-PQ-008',
    ctaType: 'origin',
    description: 'Nước mắm Phú Quốc được ủ truyền thống từ cá cơm tươi sống biển đảo và muối biển tinh khiết trong thùng gỗ lim xanh trên 12 tháng. Nước mắm đạt độ đạm 43°N, màu ngọc bích tự nhiên, mùi hương nồng nàn đặc trưng, vị mặn đậm đà hòa quyện vị ngọt tự nhiên của cá.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj8pK2rM_Nt0LQR_wwMf5kZ4VhVxMvMEpGx-IPkQFLG4NmQiDKZkvoHFQUbB_nY26xJyHgcL3B9ECKc33wnGUMIicxPOF4n_M6fD2_wX9_v02TXGGDaDyRvYbCU_KiYDiCKEgOKp_NhJjxEZGtvJ3c1XvWwXJaB1nxGRE_8UYC-Kn-JnWczfuKYYGEdiypuQHLSNYxZ6tmaMoVRXxQe',
    ],
    specifications: [
      { label: 'Độ đạm', value: '43°N' },
      { label: 'Thành phần', value: 'Cá cơm, muối biển' },
      { label: 'Thời gian ủ', value: '12-18 tháng' },
      { label: 'Dung tích', value: '500ml / 1 lít / 2 lít' },
      { label: 'Hạn sử dụng', value: '36 tháng' },
      { label: 'Xuất xứ', value: 'Phú Quốc, Kiên Giang' },
    ],
    originStory: 'Phú Quốc không chỉ nổi tiếng với biển xanh cát trắng mà còn là "thủ phủ" nước mắm truyền thống Việt Nam. Bí quyết nước mắm ngon nằm ở cá cơm tươi bắt đúng mùa, muối biển rang sạch không cặn, và thùng gỗ lim xanh年代久远. Người ủ nước mắm Phú Quốc gọi đây là "nghề đợi chờ" - đợi cá chín, đợi muối tan, đợi thời gian biến đổi. 12 tháng trôi qua, nước mắm chín lấy màu cánh gián đặc trưng, mùi nồng nàn lan tỏa khắp xưởng ủ.',
    certifications: ['OCOP 5 sao cấp Quốc gia', 'Chứng nhận chỉ định địa lý Phú Quốc', 'ISO 22000:2018'],
    relatedProducts: ['ca-phe-cau-dat', 'man-hau-say-moc-chau'],
  },
  {
    slug: 'ca-phe-cau-dat',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ3KQvNHX7IDtGUBGnL65h-q1_NQfIfPUy2vVkBpWYxZBMzqRVIB1xrLW94aKvRW36_EHArk-h5xGf7t4l8JoGjO4-aTKjR9g88LKMqAE4PB1CvvKm_7J3jCVHpM1E3i_OxUQST6lHsj0TXxC2g0LbxxG_P5y4yfqqTHxS4rMzgepJb7FnVa_W1s5PymEf7eY8MVtrd0BjOGQPdbog',
    alt: 'Artisan coffee roaster examining specialty Arabica beans at Cau Dat Dalat farm, misty highland coffee plantation with red ripe cherries on branches in background.',
    stars: '5 SAO',
    category: 'Nông sản & Thực phẩm',
    province: 'Lâm Đồng',
    title: 'Cà phê Arabica Cầu Đất Cầu Kỷ',
    producer: 'Nông trại Cà phê Di sản Cầu Đất',
    code: 'LD-CD-067',
    ctaType: 'origin',
    description: 'Cà phê Arabica Cầu Đất trồng tại độ cao 1.500m trên đà núi Lăng Biăng, đà núi Cầu Đất - Đà Lạt. Hạt cà phê được gom thủ công, ủ men tự nhiên (natural process) và rang trung bình (medium roast) để giữ trọn hương hoa quả, vị chua nhẹ thanh tao, hậu vị ngọt đậm đà kéo dài.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ3KQvNHX7IDtGUBGnL65h-q1_NQfIfPUy2vVkBpWYxZBMzqRVIB1xrLW94aKvRW36_EHArk-h5xGf7t4l8JoGjO4-aTKjR9g88LKMqAE4PB1CvvKm_7J3jCVHpM1E3i_OxUQST6lHsj0TXxC2g0LbxxG_P5y4yfqqTHxS4rMzgepJb7FnVa_W1s5PymEf7eY8MVtrd0BjOGQPdbog',
    ],
    specifications: [
      { label: 'Chủng loại', value: 'Arabica Typica, Bourbon, Catimor' },
      { label: 'Độ cao trồng', value: '1.500 - 1.650m' },
      { label: 'Phương pháp chế biến', value: 'Natural / Honey / Washed' },
      { label: 'Độ rang', value: 'Medium (City+)' },
      { label: 'Trọng lượng', value: '250g / 500g / 1kg' },
      { label: 'Hạn sử dụng', value: '12 tháng kể từ ngày rang' },
      { label: 'Xuất xứ', value: 'Cầu Đất, Đà Lạt, Lâm Đồng' },
    ],
    originStory: 'Cầu Đất - tên gọi gợi nhớ đến những con đường uốn lượn dẫn đến "thiên đường cà phê" trên cao nguyên Đà Lạt. Từ thập niên 30 thế kỷ XX, người Pháp mang giống Arabica về trồng thử nghiệm và khám phá ra "terroir" hoàn hảo: độ cao 1.500m, nhiệt độ trung bình 18-22°C, sương móc bao phủ quanh năm. Hiện nay, nông dân Cầu Đất vẫn gìn giữ cách trồng trọt bền vững, thu hoạch thủ công từng quả chín đỏ, ủ men theo phương pháp tự nhiên để bảo toàn "hồn" cà phê.',
    certifications: ['OCOP 5 sao cấp Quốc gia', 'Chứng nhận Specialty Coffee Association (SCA) 85+', 'VietGAP'],
    relatedProducts: ['ca-phe-arabica-cau-ky', 'nuoc-mam-phu-quoc'],
  },
  {
    slug: 'keo-dua-sap-ben-tre',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ20NQGr-GJZbWofAWYO4bhoSGyF7Y7o3MahADUZFXyQKQln6QOJpGsAKLzNckexu1b7nT_WlBLGTMte0jWvU07dxNifSLiaeq_UFtGZ3RxFGCAxPajilO-IbZPEprAg_h7urP-H3iQIAgo1wqNMYfKah636fVhKW9sdFgrQfsrXigjm3HbxWgwjqzb8NtcDZ-E-4-H55RShxIXtjCFDu0ChpW2olIeI48-3lJiM',
    alt: 'Chewy wax coconut candy wrapped neatly in dried banana leaves and lotus wrapper, thick rich coconut cream texture in a rural Mekong Delta Ben Tre grove.',
    stars: '4 SAO',
    category: 'Nông sản & Thực phẩm',
    province: 'Bến Tre',
    title: 'Kẹo dừa sáp dẻo truyền thống',
    producer: 'Công ty TNHH Đặc sản Bến Tre',
    code: 'BT-CT-021',
    ctaType: 'origin',
    description: 'Kẹo dừa sáp Bến Tre được làm từ nước cốt dừa tươi nguyên chất, đường mía và chút muối, đun chảy theo bí quyết gia truyền. Kẹo dẻo dai, mềm mịn, tan chảy ngay trên đầu lưỡi với vị béo ngậy của dừa xiêm xanh Bến Tre, bao bì lá chuối khô, vỏ sen thủ công.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ20NQGr-GJZbWofAWYO4bhoSGyF7Y7o3MahADUZFXyQKQln6QOJpGsAKLzNckexu1b7nT_WlBLGTMte0jWvU07dxNifSLiaeq_UFtGZ3RxFGCAxPajilO-IbZPEprAg_h7urP-H3iQIAgo1wqNMYfKah636fVhKW9sdFgrQfsrXigjm3HbxWgwjqzb8NtcDZ-E-4-H55RShxIXtjCFDu0ChpW2olIeI48-3lJiM',
    ],
    specifications: [
      { label: 'Thành phần chính', value: 'Nước cốt dừa tươi, đường mía, muối' },
      { label: 'Loại dừa', value: 'Dừa xiêm xanh Bến Tre' },
      { label: 'Trọng lượng', value: '200g / 500g / 1kg' },
      { label: 'Bao bì', value: 'Lá chuối khô, vỏ sen thủ công' },
      { label: 'Hạn sử dụng', value: '6 tháng' },
      { label: 'Xuất xứ', value: 'Châu Thành, Bến Tre' },
    ],
    originStory: 'Bến Tre - "Hòn ngọc ngân" của đồng bằng sông Cửu Long - nổi tiếng với những vườn dừa xiêm xanh trải dài bờ sông. Kẹo dừa sáp ra đời từ khéo léo biến tấu món quà của thiên nhiên: lấy nước cốt dừa tươi rót từ quả dừa vừa hái, đun sôi với đường mía địa phương trên bếp lửa than, khuấy tay liên tục 3-4 giờ cho đến khi hỗn hợp đặc lại, dẻo dai. Mỗi miếng kẹo được bọc thủ công trong lá chuối khô thơm lừng - dấu ấn văn hóa miền Tây thuần khiết.',
    certifications: ['OCOP 4 sao cấp Quốc gia', 'Chứng nhận 3 sao OCOP tỉnh Bến Tre', 'An toàn thực phẩm'],
    relatedProducts: ['man-hau-say-moc-chau', 'tra-xanh-tan-cuong'],
  },
  {
    slug: 'man-hau-say-moc-chau',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFy0Ik1cMf_h1XFgfel-fkBU5ru6eU-C6xQAk2xzf2-ygDrhmZaplpHykUQYLn0SklNy2g9hHHttLeE_j12QOEjYJvfzS6Gg5NrXPB3M6hz9KBR2hx8Zgr45SHGqUCmZ-iSLUyGErhVS89d9qx_4UIuUhDxWQoFAbcwCGmY5cwDJxbnYjYsGRhl4YxPapkftmVkdMcLAv1Ur83_aB7uXA3L201wmSAo_GigFIYSN8',
    alt: 'Sun-dried tart red plums of Moc Chau Son La plateau resting in flat bamboo sieves on high mountain background, rich deep crimson and ruby dried fruit textures.',
    stars: '3 SAO',
    category: 'Nông sản & Thực phẩm',
    province: 'Sơn La',
    title: 'Mận hậu sấy dẻo Mộc Châu',
    producer: 'HTX Nông nghiệp Bản Ôn',
    code: 'SL-MC-045',
    ctaType: 'origin',
    description: 'Mận hậu Mộc Châu được thu hoạch tại độ cao 1.000m+, sấy tại nhiệt độ thấp giữ nguyên màu đỏ tươi tự nhiên, vị chua ngọt cân bằng, dai dai, không thêm chất bảo quản, không đường hóa học. Sản phẩm giàu vitamin C, anthocyanin và chất xơ.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFy0Ik1cMf_h1XFgfel-fkBU5ru6eU-C6xQAk2xzf2-ygDrhmZaplpHykUQYLn0SklNy2g9hHHttLeE_j12QOEjYJvfzS6Gg5NrXPB3M6hz9KBR2hx8Zgr45SHGqUCmZ-iSLUyGErhVS89d9qx_4UIuUhDxWQoFAbcwCGmY5cwDJxbnYjYsGRhl4YxPapkftmVkdMcLAv1Ur83_aB7uXA3L201wmSAo_GigFIYSN8',
    ],
    specifications: [
      { label: 'Loại mận', value: 'Mận hậu (Prunus salicina)' },
      { label: 'Độ cao trồng', value: '1.000 - 1.200m' },
      { label: 'Phương pháp sấy', value: 'Sấy nhiệt độ thấp (Low-temp drying)' },
      { label: 'Độ ẩm', value: '15-18%' },
      { label: 'Trọng lượng', value: '100g / 250g / 500g' },
      { label: 'Hạn sử dụng', value: '12 tháng' },
      { label: 'Xuất xứ', value: 'Bản Ôn, Mộc Châu, Sơn La' },
    ],
    originStory: 'Mộc Châu - cao nguyên Tây Bắc lãng mạn với những đồi mận trắng ngần vào mùa hoa. Mận hậu Mộc Châu có vị chua đặc trưng, khác biệt hẳn so với các loại mận khác. Người dân tộc Mông, Thái tại Bản Ôn gìn giữ nghề sấy mận truyền thống: chọn quả chín đến điểm, rửa sạch, cắt đôi lấy hạt, sấy trên lò than hoa hoặc năng lượng mặt trời trong 2-3 ngày đêm. Mận sấy chín giữ trọn màu đỏ руби, vị chua ngọt hòa quyện, dai dai kích thích vị giác.',
    certifications: ['OCOP 3 sao cấp Quốc gia', 'VietGAP', 'An toàn thực phẩm'],
    relatedProducts: ['keo-dua-sap-ben-tre', 'tinh-dau-que-tra-bong'],
  },
  {
    slug: 'tinh-dau-que-tra-bong',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_57dzURRfbyDL3lJY_HhLnTnN3MtBf__8o6bieFdb3SbwockcOs6eYnu14_eKSJ0SuavACAAylnOO2m1xupQ15HAWOTDR5nu2-COTttWrB1VvAnfbGOAhvAfShM0qOpy_K-5nD3UhH4ZPSVsmiKd_o4ZZcZsZGW2-zhxQgnRKpRL4YYiOz7w_W80oxp0EXCoVcyCZGxuTsn-F2iJk9E6xwszcEnyKk5bNesyUUWE',
    alt: 'Harvested aromatic thick cinnamon bark stacked carefully in traditional drying yard with small glass ampoule of distilled cinnamon essential oil in foreground, warm earthy brown tonality.',
    stars: '4 SAO',
    category: 'Dược liệu & Sức khỏe',
    province: 'Quảng Nam',
    title: 'Tinh dầu Quế Trà Bồng',
    producer: 'Hợp tác xã Tinh dầu Quế Bản địa',
    code: 'QN-TB-033',
    ctaType: 'origin',
    description: 'Tinh dầu quế Trà Bồng chiết tách bằng phương pháp hấp nước từ vỏ quế già 15-20 năm, mọc tự nhiên trên đồi núi Trà Bồng. Tinh dầu màu vàng nâu đặc trưng, mùi hương nồng nàn, ấm áp, hàm lượng cinnamaldehyde > 80%, an toàn tuyệt đối cho da nhạy cảm khi 희석 đúng tỷ lệ.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_57dzURRfbyDL3lJY_HhLnTnN3MtBf__8o6bieFdb3SbwockcOs6eYnu14_eKSJ0SuavACAAylnOO2m1xupQ15HAWOTDR5nu2-COTttWrB1VvAnfbGOAhvAfShM0qOpy_K-5nD3UhH4ZPSVsmiKd_o4ZZcZsZGW2-zhxQgnRKpRL4YYiOz7w_W80oxp0EXCoVcyCZGxuTsn-F2iJk9E6xwszcEnyKk5bNesyUUWE',
    ],
    specifications: [
      { label: 'Phương pháp chiết tách', value: 'Hấp nước (Steam distillation)' },
      { label: 'Phần dùng', value: 'Vỏ quế già 15-20 năm' },
      { label: 'Thành phần chính', value: 'Cinnamaldehyde > 80%, Eugenol, Linalool' },
      { label: 'Dung tích', value: '10ml / 30ml / 50ml' },
      { label: 'Hạn sử dụng', value: '36 tháng' },
      { label: 'Xuất xứ', value: 'Trà Bồng, Quảng Nam' },
    ],
    originStory: 'Trà Bồng - "thủ phủ quế" của Việt Nam - nằm sâu trong núi Quảng Nam, nơi quế mọc tự nhiên rải rác khắp sườn đồi. Người dân tộc Ca Dong, Xe Đăng tại đây coi quế là "cây thần", chỉ thu hái vỏ quế khi cây già 15-20 năm, vào mùa khô, trăng tròn. Vỏ quế được bóc thủ công, phơi khô tự nhiên, sau đó hấp nước trong lò đất truyền thống. Mỗi lọ tinh dầu 10ml cần vỏ quế từ 1kg cây non - sự tập trung tinh hoa của rừng núi.',
    certifications: ['OCOP 4 sao cấp Quốc gia', 'Chứng nhận USDA Organic', 'ISO 9001:2015'],
    relatedProducts: ['tra-xanh-tan-cuong', 'man-hau-say-moc-chau'],
  },
  {
    slug: 'ca-phe-arabica-cau-ky',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxIpMmcNUec5k6W1S3MLt-f8S7_SuIRMJlwnqSXSZXg-zqRSs7Y9aKuq8qAzx4vgUW3oQYzyS4RMZWNCGXWCPwsQNVnuxkcOpEFpWHP2NkH6GYcLpGpU58ITi-HQR4CPDWzgx1FtDjpjQrAHSf_6kKrZH24xvkeRMDOXoOkDeVklHGnpr_N560os9qkYfzPKtPWLVeg35qJ69eHRzzGbHKeYgWUzkuCYUg1ZLmEIA',
    alt: 'Handcrafted parchment paper bag of specialty roasted Arabica coffee beans grown on misty high hills of Cau Dat Dalat Lam Dong, surrounded by fresh red coffee cherries on coffee branch.',
    stars: '4 SAO',
    category: 'Nông sản & Thực phẩm',
    province: 'Lâm Đồng',
    title: 'Cà phê Arabica Cầu Đất Cầu Kỷ',
    producer: 'Nông trại Cà phê Di sản Cầu Đất',
    code: 'LD-CD-067',
    ctaType: 'origin',
    description: 'Cà phê Arabica Cầu Kỷ - dòng chính thống từ vùng Cầu Đất, Đà Lạt. Hạt cà phê được gom từng quả chín đỏ, ủ men honey process tạo vị ngọt caramel tự nhiên, rang dark roast đậm đà cho pha phin, espresso. Hương thơm nồng nàn lan tỏa, vị đắng thanh, hậu vị ngọt béo dai dẳng.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxIpMmcNUec5k6W1S3MLt-f8S7_SuIRMJlwnqSXSZXg-zqRSs7Y9aKuq8qAzx4vgUW3oQYzyS4RMZWNCGXWCPwsQNVnuxkcOpEFpWHP2NkH6GYcLpGpU58ITi-HQR4CPDWzgx1FtDjpjQrAHSf_6kKrZH24xvkeRMDOXoOkDeVklHGnpr_N560os9qkYfzPKtPWLVeg35qJ69eHRzzGbHKeYgWUzkuCYUg1ZLmEIA',
    ],
    specifications: [
      { label: 'Chủng loại', value: 'Arabica Catimor, Typica' },
      { label: 'Độ cao trồng', value: '1.550m' },
      { label: 'Phương pháp chế biến', value: 'Honey process (Black honey)' },
      { label: 'Độ rang', value: 'Dark roast (Full City+)' },
      { label: 'Trọng lượng', value: '250g / 500g / 1kg' },
      { label: 'Hạn sử dụng', value: '12 tháng kể từ ngày rang' },
      { label: 'Xuất xứ', value: 'Cầu Đất, Đà Lạt, Lâm Đồng' },
    ],
    originStory: 'Cầu Kỷ - tên gọi mang đậm sự kiêu hãnh của người nông dân Cầu Đất. Đây là dòng cà phê Arabica được tuyển chọn, lai tạo phù hợp với "terroir" Đà Lạt, mang lại năng suất cao, chất lượng ổn định. Nông dân Cầu Kỷ áp dụng quy trình canh tác bền vững: không dùng thuốc trừ sâu hóa học, tưới tiêu bằng nước suối thiên nhiên, bón phân hữu cơ từ vỏ cà phê. Hạt cà phê chín đỏ được gom thủ công một cách tỉ mỉ - đây là chìa khóa của hương vị đặc biệt.',
    certifications: ['OCOP 4 sao cấp Quốc gia', 'SCA 84+ points', 'VietGAP'],
    relatedProducts: ['ca-phe-cau-dat', 'tra-xanh-tan-cuong'],
  },
  {
    slug: 'khan-ran-cham',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgSNT_zZgeZRPA1l_RrSO4r6XfsJiiPwjQ-XU-HUBfLr3jm1JCykO0meGMLTGT2SuOxJfeMKxAhSo1lE0IJb63m9osq31T6P2PY1O21TZW8veNCusICkqMfNSmUKsqIdHvS8fLnhOtB5wOgXpFZgOzrvDEADrWyP-tQ_FNyy9vdKsMh6pHWLGtji8pO6U5fBnfWWoM2dRI729iGwcKT92IdhpeDEHzBsvh6L3FSX8',
    alt: 'Cham woman weaver working on traditional wooden foot loom, intricately weaving black and white checkered scarves and floral brocade patterns in Chau Phong An Giang village.',
    stars: '3 SAO',
    category: 'Thủ công mỹ nghệ & Khác',
    province: 'An Giang',
    title: 'Khăn rằn thổ cẩm dệt tay Chăm',
    producer: 'Làng nghề dệt thổ cẩm Châu Phong',
    code: 'AG-CP-019',
    ctaType: 'contact',
    description: 'Khăn rằn thổ cẩm người Chăm tại Châu Phong, An Giang được dệt thủ công trên khung dệt truyền thống bằng sợi cotton tự nhiên, nhuộm màu từ gốc cây (lá chàm, vỏ đậu đen, củ nghệ). Họa tiết(kind) hình học, hoa văn truyền thống mang ý nghĩa phong thủy, cầu mưa cầu bội. Mỗi chiếc khăn là tác phẩm nghệ thuật độc bản.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgSNT_zZgeZRPA1l_RrSO4r6XfsJiiPwjQ-XU-HUBfLr3jm1JCykO0meGMLTGT2SuOxJfeMKxAhSo1lE0IJb63m9osq31T6P2PY1O21TZW8veNCusICkqMfNSmUKsqIdHvS8fLnhOtB5wOgXpFZgOzrvDEADrWyP-tQ_FNyy9vdKsMh6pHWLGtji8pO6U5fBnfWWoM2dRI729iGwcKT92IdhpeDEHzBsvh6L3FSX8',
    ],
    specifications: [
      { label: 'Chất liệu', value: 'Cotton 100% tự nhiên' },
      { label: 'Kỹ thuật', value: 'Dệt khung tay truyền thống' },
      { label: 'Màu sắc', value: 'Nhuộm tự nhiên (lá chàm, vỏ đậu, củ nghệ)' },
      { label: 'Kích thước', value: '40x180cm / 50x200cm (tùy chỉnh)' },
      { label: 'Họa tiết', value: 'Hình học, hoa văn Chăm truyền thống' },
      { label: 'Xuất xứ', value: 'Làng Châu Phong, Châu Phú, An Giang' },
    ],
    originStory: 'Người Chăm tại Châu Phong, An Giang dệt khăn rằn thổ cẩm từ bao đời nay - không chỉ là nghề thủ công mà là "ngôn ngữ" văn hóa. Phụ nữ Chăm học dệt từ nhỏ, mỗi chiếc khăn dệt xong là một câu chuyện: họa tiết "sắp" (chim bay) cầu tự do, "kơ-răm" (khóm đường) cầu mùa màng bội thu, "pơ-tao" (hoa sen) cầu thanh bình. Sợi cotton được vần tay, nhuộm màu từ gốc cây trong rừng, dệt trên khung gỗ đơn giản nhưng đòi hỏi sự kiên nhẫn, tỉ mỉ đến từng milimet.',
    certifications: ['OCOP 3 sao cấp Quốc gia', 'Danh hiệu "Làng nghề truyền thống 30 năm" tỉnh An Giang'],
    relatedProducts: ['tra-dinh-ngoc-tan-cuong', 'keo-dua-sap-ben-tre'],
  },
  {
    slug: 'tra-dinh-ngoc-tan-cuong',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1M-hPCyKjYjN4XQDk_rwfVbr4zVPCZx_3M0JiFbQflNHtEmgSD_tW0yTuVnhLO-Yc_QG3LRk3i_sLhPb8SeI6Wr69RanWvPE5vQZSqdv5_0v3N3VrTfWkqrVrGK4Gq_LVEqJLymXRlsYNw879pK8xEDtGAFBke4eS_OhN4yRe-RxKWgMX9rRNRuuEFYOi0UEkLCFrH0Py7xDsxZqW8EHiYgxPBvy',
    alt: 'Premium Shan Tuyet tea buds from ancient tea trees in Ha Giang highlands, delicate silver-white buds with golden tips.',
    stars: '5 SAO',
    category: 'Nông sản & Thực phẩm',
    province: 'Hà Giang',
    title: 'Trà Shan Tuyết cổ thụ Hà Giang',
    producer: 'HTX Trà Shan Tuyết Yên Bái',
    code: 'HG-YB-012',
    ctaType: 'origin',
    description: 'Trà Shan Tuyết Hà Giang thu hoạch từ những cây trà cổ thụ hàng trăm năm tuổi trên đà núi đá vôi Hà Giang độ cao 1.200m+. Lá non mọc giữa sương móc quanh năm, phủ lớp lông trắng tinh xỉn như tuyết rơi. Trà được chế biến thủ công: tẩm ủ, cuộn tay, sấy than hoa. Nước trà vàng óng, hương lan tỏa mạnh mẽ, vị đắng tanh nhanh tan, ngọt hậu đậm đà, say lòng người uống.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1M-hPCyKjYjN4XQDk_rwfVbr4zVPCZx_3M0JiFbQflNHtEmgSD_tW0yTuVnhLO-Yc_QG3LRk3i_sLhPb8SeI6Wr69RanWvPE5vQZSqdv5_0v3N3VrTfWkqrVrGK4Gq_LVEqJLymXRlsYNw879pK8xEDtGAFBke4eS_OhN4yRe-RxKWgMX9rRNRuuEFYOi0UEkLCFrH0Py7xDsxZqW8EHiYgxPBvy',
    ],
    specifications: [
      { label: 'Chủng loại', value: 'Trà Shan Tuyết (Camellia sinensis var. assamica)' },
      { label: 'Tuổi cây', value: '100 - 300 năm' },
      { label: 'Độ cao trồng', value: '1.200 - 1.500m' },
      { label: 'Phương pháp chế biến', value: 'Cuộn tay - Sấy than hoa thủ công' },
      { label: 'Trọng lượng gói', value: '50g / 100g / 250g' },
      { label: 'Hạn sử dụng', value: '24 tháng' },
      { label: 'Xuất xứ', value: 'Quản Bạ, Yên Minh, Hà Giang' },
    ],
    originStory: 'Trà Shan Tuyết Hà Giang - "Nàng tiên trà" của núi đá vôi Đông Văn. Những cây trà cổ thụ mọc kín trên vách đá dựng đứng, rễ chui sâu vào khe nứt hút dinh dưỡng từ khoáng sản đá vôi. Người dân tộc Mông, Dao, Giay leo dốc nhổm mình hái lá non giữa sương móc, tay run run sợ làm gãy nhánh non. Bí quyết chế biến được truyền miệng: tẩm ủ lá non trên giấy bần, cuộn tay trên đùi, sấy khô trên lò than hoa đất nung. Mỗi nắm trà là hơi thở của rừng núi.',
    certifications: ['OCOP 5 sao cấp Quốc gia', 'Chứng nhận chỉ định địa lý Shan Tuyết Hà Giang', 'VietGAP'],
    relatedProducts: ['tra-xanh-tan-cuong', 'tinh-dau-que-tra-bong'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const product = getProductBySlug(slug);
  if (!product || !product.relatedProducts) return [];
  return product.relatedProducts
    .map((relatedSlug) => getProductBySlug(relatedSlug))
    .filter((p): p is Product => p !== undefined)
    .slice(0, limit);
}

export function getAllProductSlugs(): string[] {
  return allProducts.map((p) => p.slug);
}