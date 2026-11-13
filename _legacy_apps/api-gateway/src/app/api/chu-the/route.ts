// API Route: /api/chu-the
// Returns list of OCOP subjects/chủ thể with pagination and filtering

import { NextRequest, NextResponse } from 'next/server';
import { ChuThe, PaginatedResponse, REVALIDATE_TAGS } from '@ocop/shared-types';

// Mock chu-the data - Chủ thể OCOP (hợp tác xã, doanh nghiệp, hộ gia đình)
const chuTheData: ChuThe[] = [
  {
    id: 'chu-the-1',
    slug: 'hop-tac-xa-tra-dinh-hoa',
    tenChuThe: 'Hợp tác xã Trà Định Hóa',
    loaiHinh: 'Hợp tác xã',
    tenSanPham: 'Trà xanh, Trà đen, Trà ướp hoa',
    hangSao: '5 Sao',
    nganhHang: 'Trà',
    tinhThanh: 'Thái Nguyên',
    nguoiDaiDien: 'Nguyễn Văn An',
    email: 'hotro@tradinhhoa.vn',
    phone: '0208 389 1234',
    website: 'https://tradinhhoa.vn',
    moTa: 'Hợp tác xã Trà Định Hóa thành lập năm 2015 với 120 hội viên, quản lý 45.5 ha vườn trà. Sản phẩm chủ lực trà xanh thủ công đạt OCOP 5 sao, xuất khẩu sang 15 quốc gia.',
    hinhAnh: ['/images/chu-the/hop-tac-xa-tra-dinh-hoa-1.jpg', '/images/chu-the/hop-tac-xa-tra-dinh-hoa-2.jpg'],
    certifications: ['OCOP 5 sao', 'VietGAP', 'HACCP', 'ISO 22000', 'USDA Organic'],
    awards: ['Top 10 OCOP xuất sắc 2023', 'Giải thưởng nông sản Việt Nam 2022'],
    location: {
      province: 'Thái Nguyên',
      district: 'Định Hóa',
      ward: 'Phú Tiến',
      address: 'Thôn Cây Bằng, xã Phú Tiến, huyện Định Hóa, Thái Nguyên',
    },
    seo: {
      metaTitle: 'Hợp tác xã Trà Định Hóa - OCOP 5 Sao Thái Nguyên',
      metaDescription: 'Hợp tác xã Trà Định Hóa chuyên sản xuất trà xanh, trà đen, trà ướp hoa đạt chuẩn OCOP 5 sao, VietGAP, HACCP, ISO 22000, USDA Organic. Xuất khẩu 15 quốc gia.',
      metaKeywords: ['trà Thái Nguyên', 'OCOP 5 sao', 'hợp tác xã trà', 'xuất khẩu trà'],
      ogTitle: 'Hợp tác xã Trà Định Hóa - Thương hiệu trà OCOP 5 sao',
      ogDescription: 'Khám phá câu chuyện thành công của Hợp tác xã Trà Định Hóa - từ rễ cây đến ly trà chinh phục 15 quốc gia.',
      ogImage: '/images/chu-the/hop-tac-xa-tra-dinh-hoa-og.jpg',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/chu-the-ocop/hop-tac-xa-tra-dinh-hoa',
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-12-01T10:30:00Z',
  },
  {
    id: 'chu-the-2',
    slug: 'cong-ty-tnhh-ca-phe-buon-ma-thuot',
    tenChuThe: 'Công ty TNHH Cà phê Buôn Ma Thuột',
    loaiHinh: 'Doanh nghiệp',
    tenSanPham: 'Cà phê Robusta, Cà phê Arabica, Cà phê hòa tan',
    hangSao: '5 Sao',
    nganhHang: 'Cà phê',
    tinhThanh: 'Đắk Lắk',
    nguoiDaiDien: 'Lê Văn Bình',
    email: 'info@buonmathuotcoffee.vn',
    phone: '0262 385 5678',
    website: 'https://buonmathuotcoffee.vn',
    moTa: 'Đơn vị tiên phong sản xuất cà phê Robusta đặc sản Buôn Ma Thuột đạt chuẩn OCOP 5 sao. Công nghệ chế biến khô tự nhiên, rang xay nitơ bảo quản hương vị nguyên bản.',
    hinhAnh: ['/images/chu-the/ca-phe-buon-ma-thuot-1.jpg', '/images/chu-the/ca-phe-buon-ma-thuot-2.jpg'],
    certifications: ['OCOP 5 sao', 'VietGAP', 'UTZ', 'Rainforest Alliance', 'ISO 9001'],
    awards: ['Thương hiệu Việt Nam 2023', 'Top 50 doanh nghiệp nông nghiệp 2022'],
    location: {
      province: 'Đắk Lắk',
      district: 'Buôn Ma Thuột',
      ward: 'Tân Lợi',
      address: 'Số 123 Nguyễn Chí Thanh, phường Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk',
    },
    seo: {
      metaTitle: 'Công ty Cà phê Buôn Ma Thuột - Cà phê Robusta OCOP 5 Sao',
      metaDescription: 'Cà phê Robusta đặc sản Buôn Ma Thuột đạt OCOP 5 sao, VietGAP, UTZ, Rainforest Alliance. Chế biến khô tự nhiên, rang xay công nghệ nitơ.',
      metaKeywords: ['cà phê Buôn Ma Thuột', 'Robusta 5 sao', 'OCOP cà phê', 'xuất khẩu cà phê'],
      ogTitle: 'Cà phê Buôn Ma Thuột - Hương vị cao nguyên Đắk Lắk',
      ogDescription: 'Trải nghiệm hương vị cà phê Robusta nguyên bản từ vùng đất bazan đỏ Buôn Ma Thuột - OCOP 5 sao.',
      ogImage: '/images/chu-the/ca-phe-buon-ma-thuot-og.jpg',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/chu-the-ocop/cong-ty-tnhh-ca-phe-buon-ma-thuot',
    },
    createdAt: '2023-06-20T09:00:00Z',
    updatedAt: '2024-11-15T14:20:00Z',
  },
  {
    id: 'chu-the-3',
    slug: 'ho-gia-dinh-nuoc-mam-phu-quoc',
    tenChuThe: 'Hộ gia đình Nước mắm Phú Quốc',
    loaiHinh: 'Hộ gia đình',
    tenSanPham: 'Nước mắm nhĩ, Nước mắm câu, Nước mắm chiết',
    hangSao: '4 Sao',
    nganhHang: 'Nước mắm',
    tinhThanh: 'Kiên Giang',
    nguoiDaiDien: 'Nguyễn Thị Cúc',
    email: 'nuocmamphuquoc@gmail.com',
    phone: '0912 345 678',
    website: 'https://nuocmamphuquoc.vn',
    moTa: 'Hộ gia đình truyền thống 3 đời làm nghề nước mắm tại Phú Quốc. Sử dụng cá cơm tươi sống, muối biển thiên nhiên, ủ chai gỗ truyền thống 12-18 tháng.',
    hinhAnh: ['/images/chu-the/nuoc-mam-phu-quoc-1.jpg'],
    certifications: ['OCOP 4 sao', 'VietGAP', 'Chứng nhận an toàn vệ sinh thực phẩm'],
    awards: ['Nước mắm ngon Việt Nam 2023', 'Sản phẩm OCOP tiêu biểu Kiên Giang 2022'],
    location: {
      province: 'Kiên Giang',
      district: 'Phú Quốc',
      ward: 'Dương Đông',
      address: 'Xóm 3, xã Dương Đông, huyện Phú Quốc, Kiên Giang',
    },
    seo: {
      metaTitle: 'Nước mắm Phú Quốc truyền thống - Hộ gia đình 3 đời OCOP 4 Sao',
      metaDescription: 'Nước mắm Phú Quốc thủ công truyền thống 3 đời, ủ chai gỗ 12-18 tháng từ cá cơm tươi, muối biển tự nhiên. OCOP 4 sao, VietGAP.',
      metaKeywords: ['nước mắm Phú Quốc', 'nước mắm nhĩ', 'OCOP 4 sao', 'thủ công truyền thống'],
      ogTitle: 'Nước mắm Phú Quốc - Vị ngon 3 đời truyền thống',
      ogDescription: 'Khám phá quy trình làm nước mắm thủ công tại Phú Quốc - di sản ẩm thực Việt Nam.',
      ogImage: '/images/chu-the/nuoc-mam-phu-quoc-og.jpg',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/chu-the-ocop/ho-gia-dinh-nuoc-mam-phu-quoc',
    },
    createdAt: '2022-03-10T07:30:00Z',
    updatedAt: '2024-10-05T11:00:00Z',
  },
  {
    id: 'chu-the-4',
    slug: 'ca-nhan-lang-gom-bat-trang',
    tenChuThe: 'Nghệ nhân Làng gốm Bát Tràng - Nguyễn Văn Đức',
    loaiHinh: 'Cá nhân',
    tenSanPham: 'Gốm sứ men trắng, Gốm men xanh, Gốm men nâu, Đồ trang trí',
    hangSao: '3 Sao',
    nganhHang: 'Gốm sứ',
    tinhThanh: 'Hà Nội',
    nguoiDaiDien: 'Nguyễn Văn Đức',
    email: 'ducbatrang@gmail.com',
    phone: '0987 654 321',
    website: 'https://battrangceramics.vn',
    moTa: 'Nghệ nhân gốm Bát Tràng thế hệ thứ 7, kế thừa nghề truyền thống 500 năm. Sản phẩm gốm men trắng trong suốt, hoa văn đẹp mắt, được công nhận Di sản văn hóa quốc gia.',
    hinhAnh: ['/images/chu-the/bat-trang-1.jpg', '/images/chu-the/bat-trang-2.jpg', '/images/chu-the/bat-trang-3.jpg'],
    certifications: ['OCOP 3 sao', 'Chứng nhận Di sản văn hóa quốc gia', 'Người thợ lành nghề Hà Nội'],
    awards: ['Nghệ nhân tiêu biểu làng gốm Bát Tràng 2023', 'Giải thưởng thiết kế sản phẩm OCOP 2022'],
    location: {
      province: 'Hà Nội',
      district: 'Gia Lâm',
      ward: 'Bát Tràng',
      address: 'Số 45 đường chính làng gốm Bát Tràng, xã Bát Tràng, huyện Gia Lâm, Hà Nội',
    },
    seo: {
      metaTitle: 'Nghệ nhân Bát Tràng Nguyễn Văn Đức - Gốm sứ OCOP 3 Sao',
      metaDescription: 'Nghệ nhân gốm Bát Tràng thế hệ 7, sản phẩm gốm men trắng, men xanh, men nâu truyền thống 500 năm. Di sản văn hóa quốc gia, OCOP 3 sao.',
      metaKeywords: ['gốm Bát Tràng', 'nghệ nhân gốm', 'Di sản văn hóa', 'OCOP 3 sao'],
      ogTitle: 'Làng gốm Bát Tràng - Nghệ nhân Nguyễn Văn Đức',
      ogDescription: 'Trải nghiệm nghệ thuật gốm sứ 500 năm tại Bát Tràng qua đôi tay nghệ nhân Nguyễn Văn Đức.',
      ogImage: '/images/chu-the/bat-trang-og.jpg',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://ocopvietnam.vn/chu-the-ocop/ca-nhan-lang-gom-bat-trang',
    },
    createdAt: '2021-09-01T06:00:00Z',
    updatedAt: '2024-09-20T09:45:00Z',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const loaiHinh = searchParams.get('loaiHinh')?.split(',') as ('Hợp tác xã' | 'Doanh nghiệp' | 'Hộ gia đình' | 'Cá nhân')[] | null;
  const tinhThanh = searchParams.get('tinhThanh')?.split(',');
  const q = searchParams.get('q')?.toLowerCase();
  const sort = searchParams.get('sort') || 'tenChuThe';
  const order = searchParams.get('order') as 'asc' | 'desc' || 'asc';

  let filtered = [...chuTheData];

  // Apply filters
  if (loaiHinh && loaiHinh.length > 0) {
    filtered = filtered.filter(c => loaiHinh.includes(c.loaiHinh));
  }
  if (tinhThanh && tinhThanh.length > 0) {
    filtered = filtered.filter(c => tinhThanh.includes(c.tinhThanh));
  }
  if (q) {
    filtered = filtered.filter(c =>
      c.tenChuThe.toLowerCase().includes(q) ||
      c.moTa.toLowerCase().includes(q) ||
      c.tenSanPham.toLowerCase().includes(q) ||
      c.tinhThanh.toLowerCase().includes(q) ||
      c.nganhHang.toLowerCase().includes(q)
    );
  }

  // Sort
  filtered.sort((a, b) => {
    const aVal = (a[sort as keyof ChuThe] as any) ?? '';
    const bVal = (b[sort as keyof ChuThe] as any) ?? '';
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;
  const chuThe = filtered.slice(start, start + limit);

  // Get unique filter options
  const types = [...new Set(chuTheData.map(c => c.loaiHinh))];
  const provinces = [...new Set(chuTheData.map(c => c.tinhThanh))];

  return NextResponse.json({
    data: chuThe,
    meta: {
      page,
      limit,
      total: totalItems,
      totalPages,
    },
    filters: {
      types,
      provinces,
    }
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    }
  });
}