'use client';

import { useState } from 'react';
import Link from 'next/link';

interface RegionData {
  id: string;
  name: string;
  code: string;
  province: string;
  regionLabel: string;
  destinations: number;
  craftVillages: number;
  ocopProducts: number;
  culturalStories: number;
  description: string;
  pinTop: string;
  pinLeft: string;
}

const REGIONS: RegionData[] = [
  {
    id: 'trung-du-bac-bo',
    name: 'Trung du và MN phía Bắc',
    code: 'VN-TN',
    province: 'Tỉnh Thái Nguyên',
    regionLabel: 'Trung du và miền núi phía Bắc',
    destinations: 148,
    craftVillages: 420,
    ocopProducts: 32,
    culturalStories: 12,
    description:
      'Thái Nguyên giữ vị thế trung tâm văn hóa trà cổ truyền, nơi hội tụ hàng trăm làng nghề chế biến chè thủ công tinh hoa, kết nối du lịch trải nghiệm sinh thái vùng trung du Bắc Bộ đặc sắc.',
    pinTop: '28%',
    pinLeft: '45%',
  },
  {
    id: 'dong-bang-song-hong',
    name: 'Đồng bằng sông Hồng',
    code: 'VN-HN',
    province: 'Thành phố Hà Nội',
    regionLabel: 'Đồng bằng sông Hồng',
    destinations: 260,
    craftVillages: 1350,
    ocopProducts: 1640,
    culturalStories: 45,
    description:
      'Cái nôi văn hóa nghìn năm Thăng Long - Hà Nội với mạng lưới làng nghề truyền thống dày đặc nhất cả nước, kết hợp du lịch di sản và nông nghiệp đô thị sinh thái.',
    pinTop: '34%',
    pinLeft: '40%',
  },
  {
    id: 'bac-trung-bo-dhmt',
    name: 'Bắc Trung Bộ và DHMT',
    code: 'VN-QN',
    province: 'Tỉnh Quảng Nam',
    regionLabel: 'Duyên hải miền Trung',
    destinations: 115,
    craftVillages: 180,
    ocopProducts: 154,
    culturalStories: 28,
    description:
      'Vùng đất di sản văn hóa thế giới Hội An, Mỹ Sơn kết nối các làng nghề truyền thống gốm Thanh Hà, mộc Kim Bồng và chuỗi du lịch sinh thái nông thôn miền Trung.',
    pinTop: '52%',
    pinLeft: '53%',
  },
  {
    id: 'tay-nguyen',
    name: 'Tây Nguyên',
    code: 'VN-DL',
    province: 'Tỉnh Đắk Lắk',
    regionLabel: 'Tây Nguyên',
    destinations: 95,
    craftVillages: 65,
    ocopProducts: 128,
    culturalStories: 19,
    description:
      'Thủ phủ cà phê Buôn Ma Thuột cùng không gian văn hóa cồng chiêng Tây Nguyên, các nông trường cà phê hữu cơ và du lịch cộng đồng buôn làng đậm bản sắc.',
    pinTop: '66%',
    pinLeft: '56%',
  },
  {
    id: 'dong-nam-bo',
    name: 'Đông Nam Bộ',
    code: 'VN-BR',
    province: 'Tỉnh Bà Rịa - Vũng Tàu',
    regionLabel: 'Đông Nam Bộ',
    destinations: 88,
    craftVillages: 72,
    ocopProducts: 98,
    culturalStories: 15,
    description:
      'Vùng kinh tế năng động kết hợp du lịch nghỉ dưỡng sinh thái ven biển, nông nghiệp công nghệ cao và các sản phẩm OCOP chế biến xuất khẩu tiêu biểu.',
    pinTop: '78%',
    pinLeft: '48%',
  },
  {
    id: 'dong-bang-song-cuu-long',
    name: 'ĐB sông Cửu Long',
    code: 'VN-DT',
    province: 'Tỉnh Đồng Tháp',
    regionLabel: 'Đồng bằng sông Cửu Long',
    destinations: 175,
    craftVillages: 210,
    ocopProducts: 350,
    culturalStories: 34,
    description:
      'Vùng đất hoa Sa Đéc, miệt vườn trái cây trĩu quả Lai Vung, văn hóa sông nước miệt vườn Cửu Long và hệ thống sinh thái du lịch cộng đồng đặc trưng Nam Bộ.',
    pinTop: '82%',
    pinLeft: '34%',
  },
];

export function InteractiveMapSection() {
  const [selectedRegionIndex, setSelectedRegionIndex] = useState(0);
  const currentRegion = REGIONS[selectedRegionIndex];

  return (
    <section className="w-full bg-[#E8EFEA] py-16" id="ban-do-ocop">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="mb-10 space-y-2">
          <span className="font-label-md text-label-md uppercase tracking-wider text-[#B85D3B]">
            KHÔNG GIAN TỌA ĐỘ VĂN HÓA
          </span>
          <h2 className="font-headline-md text-headline-md text-primary">
            Bản đồ phân bố không gian văn hóa và sản phẩm OCOP 34 tỉnh, thành phố.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* CỘT TRÁI: Bản đồ tương tác Việt Nam */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-xl p-6 shadow-sm flex flex-col gap-6">
            {/* Thanh lọc nhanh 6 vùng miền địa lý */}
            <div className="flex flex-wrap gap-2 text-on-surface">
              {REGIONS.map((region, idx) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegionIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm transition-colors ${
                    selectedRegionIndex === idx
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container hover:bg-surface-dim text-on-surface'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>

            {/* Khung hiển thị mô phỏng bản đồ số vector Việt Nam */}
            <div className="relative w-full h-[460px] bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center">
              {/* Bản đồ vector nền biểu tượng dáng hình đất nước chữ S */}
              <svg
                className="w-full h-full max-w-sm text-primary-fixed-dim/40 opacity-70 p-4"
                fill="currentColor"
                viewBox="0 0 200 400"
              >
                <path d="M70,20 C90,15 120,25 110,45 C100,65 95,80 85,110 C75,140 90,170 100,200 C110,230 115,260 105,290 C95,320 80,340 60,370 C50,385 40,370 45,350 C50,330 65,300 70,270 C75,240 65,210 60,180 C55,150 70,120 75,90 C80,60 60,35 70,20 Z" />
              </svg>

              {/* Pins & Markers các tỉnh trọng điểm */}
              {/* Thái Nguyên */}
              <div
                onClick={() => setSelectedRegionIndex(0)}
                className={`absolute top-[28%] left-[45%] flex items-center gap-1.5 cursor-pointer group ${
                  selectedRegionIndex === 0 ? 'z-10' : 'opacity-75 hover:opacity-100'
                }`}
              >
                {selectedRegionIndex === 0 ? (
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#B85D3B] text-on-primary text-[10px] items-center justify-center font-bold">
                      ●
                    </span>
                  </span>
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F4D3A]" />
                )}
                <span
                  className={`px-2 py-0.5 rounded font-label-sm text-label-sm shadow-md ${
                    selectedRegionIndex === 0
                      ? 'bg-primary text-[#FFFFFF]'
                      : 'bg-white/90 text-on-surface'
                  }`}
                >
                  Thái Nguyên
                </span>
              </div>

              {/* Hà Nội */}
              <div
                onClick={() => setSelectedRegionIndex(1)}
                className={`absolute top-[34%] left-[40%] flex items-center gap-1.5 cursor-pointer ${
                  selectedRegionIndex === 1 ? 'z-10' : 'opacity-75 hover:opacity-100'
                }`}
              >
                {selectedRegionIndex === 1 ? (
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#B85D3B] text-on-primary text-[10px] items-center justify-center font-bold">
                      ●
                    </span>
                  </span>
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F4D3A]" />
                )}
                <span
                  className={`px-2 py-0.5 rounded font-label-sm text-label-sm ${
                    selectedRegionIndex === 1
                      ? 'bg-primary text-[#FFFFFF] shadow-md'
                      : 'text-on-surface-variant'
                  }`}
                >
                  Hà Nội
                </span>
              </div>

              {/* Hội An */}
              <div
                onClick={() => setSelectedRegionIndex(2)}
                className={`absolute top-[52%] left-[53%] flex items-center gap-1.5 cursor-pointer ${
                  selectedRegionIndex === 2 ? 'z-10' : 'opacity-75 hover:opacity-100'
                }`}
              >
                {selectedRegionIndex === 2 ? (
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#B85D3B] text-on-primary text-[10px] items-center justify-center font-bold">
                      ●
                    </span>
                  </span>
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F4D3A]" />
                )}
                <span
                  className={`px-2 py-0.5 rounded font-label-sm text-label-sm ${
                    selectedRegionIndex === 2
                      ? 'bg-primary text-[#FFFFFF] shadow-md'
                      : 'text-on-surface-variant'
                  }`}
                >
                  Hội An
                </span>
              </div>

              {/* Đắk Lắk */}
              <div
                onClick={() => setSelectedRegionIndex(3)}
                className={`absolute top-[66%] left-[56%] flex items-center gap-1.5 cursor-pointer ${
                  selectedRegionIndex === 3 ? 'z-10' : 'opacity-75 hover:opacity-100'
                }`}
              >
                {selectedRegionIndex === 3 ? (
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#B85D3B] text-on-primary text-[10px] items-center justify-center font-bold">
                      ●
                    </span>
                  </span>
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F4D3A]" />
                )}
                <span
                  className={`px-2 py-0.5 rounded font-label-sm text-label-sm ${
                    selectedRegionIndex === 3
                      ? 'bg-primary text-[#FFFFFF] shadow-md'
                      : 'text-on-surface-variant'
                  }`}
                >
                  Đắk Lắk
                </span>
              </div>

              {/* An Giang */}
              <div
                onClick={() => setSelectedRegionIndex(5)}
                className="absolute top-[82%] left-[34%] flex items-center gap-1.5 cursor-pointer opacity-75 hover:opacity-100"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F4D3A]" />
                <span className="font-label-sm text-label-sm text-on-surface-variant">An Giang</span>
              </div>

              {/* Bến Tre */}
              <div
                onClick={() => setSelectedRegionIndex(5)}
                className="absolute top-[84%] left-[44%] flex items-center gap-1.5 cursor-pointer opacity-75 hover:opacity-100"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F4D3A]" />
                <span className="font-label-sm text-label-sm text-on-surface-variant">Bến Tre</span>
              </div>

              {/* Ghi chú trạng thái chờ trang trọng */}
              <div className="absolute bottom-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-[#B85D3B] text-[18px]">explore</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Bản đồ đang được cập nhật.
                </span>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: Thẻ tóm tắt nhanh tỉnh/thành đang chọn */}
          <div className="lg:col-span-5 bg-[#FFFFFF] rounded-xl p-8 shadow-sm flex flex-col justify-between h-full">
            {currentRegion && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-sm text-label-sm text-primary uppercase">
                    Tọa độ khảo sát
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Mã vùng: {currentRegion?.code}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {currentRegion?.province}
                </h3>
                <p className="font-body-sm text-body-sm text-[#B85D3B] mb-6">
                  {currentRegion?.regionLabel}
                </p>

                {/* Thống kê nổi bật */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-surface-container-low">
                    <div className="font-headline-sm text-headline-sm text-primary">
                      {currentRegion?.destinations}
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Điểm đến du lịch
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low">
                    <div className="font-headline-sm text-headline-sm text-primary">
                      {currentRegion?.craftVillages}
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Làng nghề công nhận
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low">
                    <div className="font-headline-sm text-headline-sm text-primary">
                      {currentRegion?.ocopProducts}
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Sản phẩm OCOP
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low">
                    <div className="font-headline-sm text-headline-sm text-primary">
                      {currentRegion?.culturalStories}
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Câu chuyện văn hóa bản địa
                    </div>
                  </div>
                </div>

                {/* Giới thiệu ngắn về tài nguyên chè và di sản làng nghề */}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                  {currentRegion?.description}
                </p>
              </div>
            )}

            <Link
              href="/diem-den-du-lich/ban-do-ocop-viet-nam"
              className="w-full py-3 bg-[#1F4D3A] text-[#FFFFFF] hover:bg-primary-container font-label-md text-label-md rounded-lg shadow-sm transition-colors text-center block"
            >
              Mở bản đồ toàn cảnh chi tiết
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
