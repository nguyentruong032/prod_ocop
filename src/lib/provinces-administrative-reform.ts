/**
 * Bảng dữ liệu định hướng cải cách hành chính (Phase 2): Ánh xạ 63 tỉnh/thành hiện hữu -> 34 tỉnh/thành quy hoạch mới
 * Phục vụ hiển thị lớp dữ liệu GIS quy hoạch không gian nông nghiệp OCOP tương lai.
 */

export interface ReformProvinceUnit {
  code: string;
  name: string;
  region: 'BAC_BO' | 'BAC_TRUNG_BO' | 'DUYEN_HAI_NAM_TRUNG_BO' | 'TAY_NGUYEN' | 'DONG_NAM_BO' | 'DBSCL';
  regionName: string;
  mergedFrom: string[];
  headquarter: string;
  ocopPotential: string;
}

export const REFORM_34_PROVINCES: ReformProvinceUnit[] = [
  // 1. Vùng Đồng bằng sông Hồng & Bắc Bộ (10 đơn vị)
  {
    code: 'HN',
    name: 'Thành phố Hà Nội (Mở rộng)',
    region: 'BAC_BO',
    regionName: 'Vùng Thủ đô & Đồng bằng sông Hồng',
    mergedFrom: ['Thành phố Hà Nội'],
    headquarter: 'Hà Nội',
    ocopPotential: 'Trung tâm nghiên cứu bách nghệ, bảo tồn 1.350+ sản phẩm OCOP và làng nghề di sản',
  },
  {
    code: 'HP',
    name: 'Thành phố Hải Phòng',
    region: 'BAC_BO',
    regionName: 'Vùng Duyên hải Đông Bắc',
    mergedFrom: ['Thành phố Hải Phòng'],
    headquarter: 'Hải Phòng',
    ocopPotential: 'Thủy hải sản chế biến sâu, nước mắm Cát Hải, dịch vụ logistics xuất khẩu OCOP',
  },
  {
    code: 'QN',
    name: 'Tỉnh Quảng Ninh',
    region: 'BAC_BO',
    regionName: 'Vùng Duyên hải Đông Bắc',
    mergedFrom: ['Tỉnh Quảng Ninh'],
    headquarter: 'Hạ Long',
    ocopPotential: 'Nôi khởi xướng OCOP Việt Nam, thủy sản hải đảo, trà hoa vàng Ba Chẽ',
  },
  {
    code: 'HD-HY',
    name: 'Tỉnh Hải Hưng',
    region: 'BAC_BO',
    regionName: 'Đồng bằng sông Hồng',
    mergedFrom: ['Tỉnh Hải Dương', 'Tỉnh Hưng Yên'],
    headquarter: 'TP. Hải Dương',
    ocopPotential: 'Nông sản đồng bằng chất lượng cao: Vải thiều Thanh Hà, Nhãn lồng Hưng Yên, gốm Chu Đậu',
  },
  {
    code: 'HN-ND-TB',
    name: 'Tỉnh Nam Hà Thái',
    region: 'BAC_BO',
    regionName: 'Đồng bằng sông Hồng duyên hải',
    mergedFrom: ['Tỉnh Nam Định', 'Tỉnh Hà Nam', 'Tỉnh Thái Bình'],
    headquarter: 'TP. Nam Định',
    ocopPotential: 'Lúa đặc sản Tám xoan, nếp cái hoa vàng, bách nghệ đồ gỗ mỹ nghệ La Xuyên',
  },
  {
    code: 'NB',
    name: 'Tỉnh Ninh Bình',
    region: 'BAC_BO',
    regionName: 'Vùng Cố đô & Sinh thái Tràng An',
    mergedFrom: ['Tỉnh Ninh Bình'],
    headquarter: 'TP. Ninh Bình',
    ocopPotential: 'Du lịch sinh thái OCOP di sản thế giới, cơm cháy, cói Kim Sơn',
  },
  {
    code: 'VP-BN',
    name: 'Tỉnh Vĩnh Bắc',
    region: 'BAC_BO',
    regionName: 'Vùng Trung du Bắc Bộ',
    mergedFrom: ['Tỉnh Vĩnh Phúc', 'Tỉnh Bắc Ninh'],
    headquarter: 'TP. Bắc Ninh',
    ocopPotential: 'Làng nghề quan họ, gốm Phù Lãng, đồng Đại Bái, rau an toàn Tam Đảo',
  },
  {
    code: 'TN-BK',
    name: 'Tỉnh Thái Bắc',
    region: 'BAC_BO',
    regionName: 'Vùng Đông Bắc Bộ',
    mergedFrom: ['Tỉnh Thái Nguyên', 'Tỉnh Bắc Kạn'],
    headquarter: 'TP. Thái Nguyên',
    ocopPotential: 'Đệ nhất danh trà Tân Cương - La Bằng, miến dong Na Rì, hồng không hạt',
  },
  {
    code: 'BG-LS',
    name: 'Tỉnh Bắc Lạng',
    region: 'BAC_BO',
    regionName: 'Vùng Đông Bắc Bộ biên mậu',
    mergedFrom: ['Tỉnh Bắc Giang', 'Tỉnh Lạng Sơn'],
    headquarter: 'TP. Bắc Giang',
    ocopPotential: 'Vải thiều Lục Ngạn, hoa hồi Lạng Sơn, vịt quay Thất Khê, thạch đen Tràng Định',
  },
  {
    code: 'PT-TQ-HG',
    name: 'Tỉnh Phú Tuyên Giang',
    region: 'BAC_BO',
    regionName: 'Vùng Cội nguồn & Cao nguyên đá',
    mergedFrom: ['Tỉnh Phú Thọ', 'Tỉnh Tuyên Quang', 'Tỉnh Hà Giang'],
    headquarter: 'TP. Việt Trì',
    ocopPotential: 'Bưởi Đoan Hùng, chè Shan tuyết cổ thụ Tây Côn Lĩnh, mật ong bạc hà Mèo Vạc',
  },

  // 2. Vùng Tây Bắc Bộ (3 đơn vị)
  {
    code: 'LC-YB',
    name: 'Tỉnh Lào Yên',
    region: 'BAC_BO',
    regionName: 'Vùng Hoàng Liên Sơn',
    mergedFrom: ['Tỉnh Lào Cai', 'Tỉnh Yên Bái'],
    headquarter: 'TP. Yên Bái',
    ocopPotential: 'Quế Văn Yên, nếp Tú Lệ, cá hồi Sa Pa, du lịch cộng đồng ruộng bậc thang',
  },
  {
    code: 'SL-HB',
    name: 'Tỉnh Sơn Hòa',
    region: 'BAC_BO',
    regionName: 'Vùng Tây Bắc đồi gò',
    mergedFrom: ['Tỉnh Sơn La', 'Tỉnh Hòa Bình'],
    headquarter: 'TP. Sơn La',
    ocopPotential: 'Vựa cây ăn quả miền Bắc (xoài tròn Yên Châu, mận Mộc Châu), cam Cao Phong',
  },
  {
    code: 'DB-LC',
    name: 'Tỉnh Điện Biên Lai',
    region: 'BAC_BO',
    regionName: 'Vùng Biên cương Tây Bắc',
    mergedFrom: ['Tỉnh Điện Biên', 'Tỉnh Lai Châu'],
    headquarter: 'TP. Điện Biên Phủ',
    ocopPotential: 'Gạo Điện Biên Mường Thanh, sâm Lai Châu, chè cổ thụ Sùng Phài',
  },

  // 3. Vùng Bắc Trung Bộ (4 đơn vị)
  {
    code: 'TH',
    name: 'Tỉnh Thanh Hóa',
    region: 'BAC_TRUNG_BO',
    regionName: 'Vùng Cửa ngõ Bắc Trung Bộ',
    mergedFrom: ['Tỉnh Thanh Hóa'],
    headquarter: 'TP. Thanh Hóa',
    ocopPotential: 'Nem chua Thanh Hóa, nước mắm Ba Làng, chiếu cói Nga Sơn, quế ngọc Thường Xuân',
  },
  {
    code: 'NA-HT',
    name: 'Tỉnh Nghệ Tĩnh',
    region: 'BAC_TRUNG_BO',
    regionName: 'Vùng Văn hóa Lam Hồng',
    mergedFrom: ['Tỉnh Nghệ An', 'Tỉnh Hà Tĩnh'],
    headquarter: 'TP. Vinh',
    ocopPotential: 'Cam Xã Đoài, sen Nam Đàn, cu đơ Hà Tĩnh, trầm hương Hương Khê',
  },
  {
    code: 'QB-QT',
    name: 'Tỉnh Bình Trị',
    region: 'BAC_TRUNG_BO',
    regionName: 'Vùng Di sản & Cồn cát',
    mergedFrom: ['Tỉnh Quảng Bình', 'Tỉnh Quảng Trị'],
    headquarter: 'TP. Đồng Hới',
    ocopPotential: 'Khoai deo Quảng Bình, tiêu Cùa, cao dược liệu cà gai leo An Xuân',
  },
  {
    code: 'TTH',
    name: 'Thành phố Thừa Thiên Huế (Trực thuộc TW)',
    region: 'BAC_TRUNG_BO',
    regionName: 'Vùng Cố đô Di sản',
    mergedFrom: ['Tỉnh Thừa Thiên Huế'],
    headquarter: 'TP. Huế',
    ocopPotential: 'Ẩm thực cung đình, thanh trà Thủy Biều, tinh dầu tràm Lộc Thủy, gốm Phước Tích',
  },

  // 4. Vùng Duyên hải Nam Trung Bộ (4 đơn vị)
  {
    code: 'DN-QN',
    name: 'Thành phố Đà Nẵng - Quảng Nam',
    region: 'DUYEN_HAI_NAM_TRUNG_BO',
    regionName: 'Vùng Kinh tế trọng điểm Miền Trung',
    mergedFrom: ['Thành phố Đà Nẵng', 'Tỉnh Quảng Nam'],
    headquarter: 'Đà Nẵng',
    ocopPotential: 'Quốc bảo Sâm Ngọc Linh, quế Trà My, lụa Mã Châu, gốm Thanh Hà',
  },
  {
    code: 'QNG-BD',
    name: 'Tỉnh Quảng Nghĩa Định',
    region: 'DUYEN_HAI_NAM_TRUNG_BO',
    regionName: 'Vùng Xứ Nẫu & Đảo ngọc',
    mergedFrom: ['Tỉnh Quảng Ngãi', 'Tỉnh Bình Định'],
    headquarter: 'TP. Quy Nhơn',
    ocopPotential: 'Tỏi Lý Sơn, cá ngừ đại dương Tam Quan, rượu Bàu Đá, bánh ít lá gai',
  },
  {
    code: 'PY-KH',
    name: 'Tỉnh Phú Khánh',
    region: 'DUYEN_HAI_NAM_TRUNG_BO',
    regionName: 'Vùng Vịnh biển & Yến sào',
    mergedFrom: ['Tỉnh Phú Yên', 'Tỉnh Khánh Hòa'],
    headquarter: 'TP. Nha Trang',
    ocopPotential: 'Yến sào Khánh Hòa, trầm hương Vạn Giã, bò một nắng Sơn Hòa, tôm hùm Sông Cầu',
  },
  {
    code: 'NT-BT',
    name: 'Tỉnh Thuận Hải',
    region: 'DUYEN_HAI_NAM_TRUNG_BO',
    regionName: 'Vùng Nắng gió & Muối biển',
    mergedFrom: ['Tỉnh Ninh Thuận', 'Tỉnh Bình Thuận'],
    headquarter: 'TP. Phan Thiết',
    ocopPotential: 'Nho & táo Phan Rang, nước mắm Phan Thiết, thanh long Bình Thuận, gốm Bàu Trúc',
  },

  // 5. Vùng Tây Nguyên (3 đơn vị)
  {
    code: 'GL-KT',
    name: 'Tỉnh Gia Kon',
    region: 'TAY_NGUYEN',
    regionName: 'Vùng Bắc Tây Nguyên',
    mergedFrom: ['Tỉnh Kon Tum', 'Tỉnh Gia Lai'],
    headquarter: 'TP. Pleiku',
    ocopPotential: 'Cà phê đặc sản Gia Lai, sâm Ngô Linh Tu Mơ Rông, chuối rừng mồ côi',
  },
  {
    code: 'DL-DK',
    name: 'Tỉnh Đắk Lắk Nông',
    region: 'TAY_NGUYEN',
    regionName: 'Vùng Thủ phủ Cà phê',
    mergedFrom: ['Tỉnh Đắk Lắk', 'Tỉnh Đắk Nông'],
    headquarter: 'TP. Buôn Ma Thuột',
    ocopPotential: 'Chỉ dẫn địa lý Cà phê Buôn Ma Thuột, hạt tiêu Đắk Song, hạt mắc ca',
  },
  {
    code: 'LD',
    name: 'Tỉnh Lâm Đồng',
    region: 'TAY_NGUYEN',
    regionName: 'Vùng Cao nguyên Hoa & Chè B’Lao',
    mergedFrom: ['Tỉnh Lâm Đồng'],
    headquarter: 'TP. Đà Lạt',
    ocopPotential: 'Rau hoa Đà Lạt, chè Oolong Bảo Lộc, tơ tằm Nam Ban, atiso',
  },

  // 6. Vùng Đông Nam Bộ (4 đơn vị)
  {
    code: 'HCM',
    name: 'Thành phố Hồ Chí Minh',
    region: 'DONG_NAM_BO',
    regionName: 'Đô thị đặc biệt',
    mergedFrom: ['Thành phố Hồ Chí Minh'],
    headquarter: 'TP. Hồ Chí Minh',
    ocopPotential: 'Trung tâm xúc tiến thương mại nông sản số, yến sào Cần Giờ, khô cá dứa',
  },
  {
    code: 'BD-BP',
    name: 'Tỉnh Sông Bé',
    region: 'DONG_NAM_BO',
    regionName: 'Vùng Cao su & Điều xuất khẩu',
    mergedFrom: ['Tỉnh Bình Dương', 'Tỉnh Bình Phước'],
    headquarter: 'TP. Thủ Dầu Một',
    ocopPotential: 'Hạt điều Bình Phước (5 sao), gốm sứ Lái Thiêu, sơn mài Tương Bình Hiệp',
  },
  {
    code: 'DN',
    name: 'Tỉnh Đồng Nai',
    region: 'DONG_NAM_BO',
    regionName: 'Vùng Đất đỏ Cây trái',
    mergedFrom: ['Tỉnh Đồng Nai'],
    headquarter: 'TP. Biên Hòa',
    ocopPotential: 'Bưởi Tân Triều, chôm chôm Long Khánh, sen Nhơn Trạch',
  },
  {
    code: 'BRVT-TN',
    name: 'Tỉnh Vũng Tàu - Tây Ninh',
    region: 'DONG_NAM_BO',
    regionName: 'Vùng Biển đảo & Núi Bà',
    mergedFrom: ['Tỉnh Bà Rịa - Vũng Tàu', 'Tỉnh Tây Ninh'],
    headquarter: 'TP. Vũng Tàu',
    ocopPotential: 'Bánh tráng phơi sương Trảng Bàng, muối tôm Tây Ninh, mãng cầu Bà Đen',
  },

  // 7. Vùng Đồng bằng sông Cửu Long (6 đơn vị)
  {
    code: 'CT',
    name: 'Thành phố Cần Thơ',
    region: 'DBSCL',
    regionName: 'Trung tâm Vùng Tây Nam Bộ',
    mergedFrom: ['Thành phố Cần Thơ'],
    headquarter: 'Cần Thơ',
    ocopPotential: 'Lúa gạo xuất khẩu, bánh tét lá cẩm, du lịch sông nước Chợ nổi Cái Răng',
  },
  {
    code: 'LA-TG',
    name: 'Tỉnh Tiền Long',
    region: 'DBSCL',
    regionName: 'Vùng Cửa ngõ Đồng Tháp Mười',
    mergedFrom: ['Tỉnh Long An', 'Tỉnh Tiền Giang'],
    headquarter: 'TP. Mỹ Tho',
    ocopPotential: 'Xoài cát Hòa Lộc, vú sữa Lò Rèn, thanh long Châu Thành, gạo Nàng Thơm Chợ Đào',
  },
  {
    code: 'BT-TV',
    name: 'Tỉnh Bến Trà',
    region: 'DBSCL',
    regionName: 'Vùng Xứ Dừa & Duyên hải Cù Lao',
    mergedFrom: ['Tỉnh Bến Tre', 'Tỉnh Trà Vinh'],
    headquarter: 'TP. Bến Tre',
    ocopPotential: 'Hệ sinh thái chế biến dừa Bến Tre (5 sao), dừa sáp Trà Vinh, tôm khô Vinh Kim',
  },
  {
    code: 'VL-DT',
    name: 'Tỉnh Đồng Vĩnh',
    region: 'DBSCL',
    regionName: 'Vùng Đất Sen Hồng & Trái ngọt',
    mergedFrom: ['Tỉnh Đồng Tháp', 'Tỉnh Vĩnh Long'],
    headquarter: 'TP. Cao Lãnh',
    ocopPotential: 'Sen Đồng Tháp, nem Lai Vung, bưởi Năm Roi Bình Minh, gốm đỏ Mang Thít',
  },
  {
    code: 'AG-KG',
    name: 'Tỉnh An Kiên',
    region: 'DBSCL',
    regionName: 'Vùng Thất Sơn & Đảo ngọc Phú Quốc',
    mergedFrom: ['Tỉnh An Giang', 'Tỉnh Kiên Giang'],
    headquarter: 'TP. Long Xuyên',
    ocopPotential: 'Nước mắm Phú Quốc, hồ tiêu Phú Quốc, thốt nốt Bảy Núi, mắm cá Châu Đốc',
  },
  {
    code: 'HG-ST-BL-CM',
    name: 'Tỉnh Cà Mau Mới (Bán đảo Cà Mau)',
    region: 'DBSCL',
    regionName: 'Vùng Cực Nam Tổ Quốc',
    mergedFrom: ['Tỉnh Hậu Giang', 'Tỉnh Sóc Trăng', 'Tỉnh Bạc Liêu', 'Tỉnh Cà Mau'],
    headquarter: 'TP. Cà Mau',
    ocopPotential: 'Cua Năm Căn Cà Mau, tôm sinh thái rừng đước, gạo ST25, muối Bạc Liêu, bánh pía Sóc Trăng',
  },
];

/**
 * Tra cứu tỉnh cải cách hành chính theo tên tỉnh cũ (63 tỉnh)
 */
export function mapOldToReformProvince(oldProvinceName: string): ReformProvinceUnit | undefined {
  if (!oldProvinceName) return undefined;
  const normalized = oldProvinceName.trim().toLowerCase();
  return REFORM_34_PROVINCES.find((unit) =>
    unit.mergedFrom.some((p) => p.toLowerCase().includes(normalized) || normalized.includes(p.toLowerCase()))
  );
}

export function getAllReformProvinces(): ReformProvinceUnit[] {
  return REFORM_34_PROVINCES;
}
