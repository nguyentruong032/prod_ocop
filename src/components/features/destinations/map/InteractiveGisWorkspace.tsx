'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MediaImage } from '@/components/ui/MediaImage';
import { REFORM_34_PROVINCES } from '@/lib/provinces-administrative-reform';

interface DossierItem {
  id: string;
  name: string;
  category: string;
  location: string;
  heritage: string;
  image: string;
  alt: string;
}

interface ProvinceDossier {
  id: string;
  code: string;
  region: string;
  province: string;
  coordinates: string;
  destinationsCount: number;
  craftVillagesCount: number;
  ocopProductsCount: number;
  storiesCount: number;
  items: DossierItem[];
}

const DOSSIERS: Record<string, ProvinceDossier> = {
  'thai-nguyen': {
    id: 'thai-nguyen',
    code: '#TN-2026',
    region: 'Vùng Đông Bắc Bộ • Mộc chè xứ Bắc',
    province: 'Tỉnh Thái Nguyên',
    coordinates: 'Tọa độ khảo sát: 21.5674° B, 105.8252° Đ • Vùng văn hóa sông Cầu',
    destinationsCount: 148,
    craftVillagesCount: 420,
    ocopProductsCount: 32,
    storiesCount: 12,
    items: [
      {
        id: '1',
        name: 'HTX Trà Tân Cương',
        category: '5 Sao Quốc gia',
        location: 'Xã Tân Cương, TP. Thái Nguyên',
        heritage: 'Sản vật di sản: Trà Đinh Ngọc thượng hạng',
        image: '/images/destinations/thai-nguyen-tea.webp',
        alt: 'Nương chè Tân Cương Thái Nguyên',
      },
      {
        id: '2',
        name: 'Không gian Văn hóa Trà La Bằng',
        category: 'Điểm du lịch OCOP',
        location: 'Xã La Bằng, Huyện Đại Từ',
        heritage: 'Trải nghiệm sao chè thủ công dưới chân Tam Đảo',
        image: '/images/destinations/la-bang-tea.webp',
        alt: 'Không gian Văn hóa Trà La Bằng',
      },
      {
        id: '3',
        name: 'Làng nghề Chè Xóm Hồng Thái',
        category: 'Làng nghề di sản',
        location: 'Xã Tân Cương, TP. Thái Nguyên',
        heritage: 'Bảo tồn 4 đời kỹ thuật ủ hương chè thảo mộc',
        image: '/images/destinations/hong-thai-craft.webp',
        alt: 'Làng nghề Chè Xóm Hồng Thái',
      },
    ],
  },
  'ha-noi': {
    id: 'ha-noi',
    code: '#HN-2026',
    region: 'Đồng bằng sông Hồng • Thăng Long nghìn năm',
    province: 'Thành phố Hà Nội',
    coordinates: 'Tọa độ khảo sát: 21.0285° B, 105.8542° Đ • Vùng văn hóa Thăng Long',
    destinationsCount: 260,
    craftVillagesCount: 1350,
    ocopProductsCount: 1640,
    storiesCount: 45,
    items: [
      {
        id: '1',
        name: 'Làng gốm cổ Bát Tràng',
        category: 'Làng nghề di sản',
        location: 'Huyện Gia Lâm, Hà Nội',
        heritage: 'Gốm men lam, men rạn ngàn năm tuổi',
        image: '/images/destinations/bat-trang-pottery.webp',
        alt: 'Làng gốm Bát Tràng Hà Nội',
      },
      {
        id: '2',
        name: 'Làng nghề dệt lụa Vạn Phúc',
        category: '5 Sao Quốc gia',
        location: 'Quận Hà Đông, Hà Nội',
        heritage: 'Lụa tơ tằm dệt vân mây cổ truyền',
        image: '/images/destinations/van-phuc-silk.webp',
        alt: 'Lụa Vạn Phúc Hà Đông',
      },
    ],
  },
  'quang-nam': {
    id: 'quang-nam',
    code: '#QN-2026',
    region: 'Duyên hải Miền Trung • Di sản văn hóa',
    province: 'Tỉnh Quảng Nam',
    coordinates: 'Tọa độ khảo sát: 15.8801° B, 108.3380° Đ • Lưu vực sông Thu Bồn',
    destinationsCount: 115,
    craftVillagesCount: 180,
    ocopProductsCount: 268,
    storiesCount: 28,
    items: [
      {
        id: '1',
        name: 'Vùng dược liệu Sâm Ngọc Linh',
        category: '5 Sao Quốc gia',
        location: 'Huyện Nam Trà My, Quảng Nam',
        heritage: 'Quốc bảo dược liệu Việt Nam',
        image: '/images/destinations/sam-ngoc-linh.webp',
        alt: 'Sâm Ngọc Linh Nam Trà My',
      },
      {
        id: '2',
        name: 'Làng gốm Thanh Hà',
        category: 'Làng nghề di sản',
        location: 'TP. Hội An, Quảng Nam',
        heritage: 'Nghệ thuật gốm đất nung cổ truyền 500 năm',
        image: '/images/destinations/thanh-ha-pottery.webp',
        alt: 'Làng gốm Thanh Hà Hội An',
      },
    ],
  },
  'dak-lak': {
    id: 'dak-lak',
    code: '#DL-2026',
    region: 'Tây Nguyên • Không gian văn hóa Cồng chiêng',
    province: 'Tỉnh Đắk Lắk',
    coordinates: 'Tọa độ khảo sát: 12.6667° B, 108.0500° Đ • Cao nguyên Đất đỏ Bazan',
    destinationsCount: 92,
    craftVillagesCount: 75,
    ocopProductsCount: 185,
    storiesCount: 20,
    items: [
      {
        id: '1',
        name: 'Chỉ dẫn địa lý Cà phê Buôn Ma Thuột',
        category: '5 Sao Quốc gia',
        location: 'TP. Buôn Ma Thuột & Krông Pắk',
        heritage: 'Hạt ngọc bazan vang danh thế giới',
        image: '/images/destinations/daklak-coffee.webp',
        alt: 'Cà phê Buôn Ma Thuột',
      },
      {
        id: '2',
        name: 'Làng dệt thổ cẩm Ê Đê Kơ Nia',
        category: 'Làng nghề di sản',
        location: 'Huyện Cư M’gar, Đắk Lắk',
        heritage: 'Họa tiết thổ cẩm truyền thống mẫu hệ',
        image: '/images/destinations/ede-weaving.webp',
        alt: 'Dệt thổ cẩm Ê Đê Đắk Lắk',
      },
    ],
  },
  'ben-tre': {
    id: 'ben-tre',
    code: '#BT-2026',
    region: 'Đồng bằng sông Cửu Long • Xứ Dừa Bến Tre',
    province: 'Tỉnh Bến Tre',
    coordinates: 'Tọa độ khảo sát: 10.2415° B, 106.3759° Đ • Hạ lưu ba dải cù lao sông Tiền',
    destinationsCount: 88,
    craftVillagesCount: 165,
    ocopProductsCount: 215,
    storiesCount: 18,
    items: [
      {
        id: '1',
        name: 'Hệ sinh thái chế biến dừa sáp & kẹo dừa',
        category: '5 Sao Quốc gia',
        location: 'Huyện Mỏ Cày Nam, Bến Tre',
        heritage: 'Chuỗi giá trị tinh hoa cây dừa Việt Nam',
        image: '/images/destinations/ben-tre-coconut.webp',
        alt: 'Chế biến dừa Bến Tre',
      },
      {
        id: '2',
        name: 'Làng nghề chỉ xơ dừa An Thạnh',
        category: 'Làng nghề di sản',
        location: 'Huyện Thạnh Phú, Bến Tre',
        heritage: 'Kinh tế tuần hoàn từ phụ phẩm dừa bản địa',
        image: '/images/destinations/coconut-fiber.webp',
        alt: 'Làng nghề chỉ xơ dừa Bến Tre',
      },
    ],
  },
};

export function InteractiveGisWorkspace() {
  const [activeLayer, setActiveLayer] = useState<'all' | '5star' | 'craft' | 'tour'>('all');
  const [selectedHotspot, setSelectedHotspot] = useState<string>('thai-nguyen');
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [gisViewMode, setGisViewMode] = useState<'current_63' | 'reform_34'>('current_63');

  const currentDossier = DOSSIERS[selectedHotspot] || DOSSIERS['thai-nguyen'];

  return (
    <section className="w-full py-8 bg-surface-container-low/40">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        {/* Top Control Bar: View Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-lowest p-4 rounded-xl border border-surface-container/60 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">public</span>
            <div>
              <span className="text-sm font-bold text-primary">Hệ thống phân định địa giới GIS:</span>
              <span className="text-xs text-on-surface-variant ml-2 hidden md:inline">
                Hỗ trợ tra cứu theo thực trạng 63 tỉnh hoặc phương án quy hoạch không gian 34 tỉnh (Phase 2)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setGisViewMode('current_63')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                gisViewMode === 'current_63'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              63 Tỉnh/Thành Hiện hữu
            </button>
            <button
              type="button"
              onClick={() => setGisViewMode('reform_34')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
                gisViewMode === 'reform_34'
                  ? 'bg-secondary text-white shadow-xs'
                  : 'text-on-surface-variant hover:text-secondary hover:bg-surface-container'
              }`}
            >
              <span>34 Tỉnh Quy hoạch (Phase 2)</span>
              <span className="px-1 py-0.2 bg-white/20 text-[10px] rounded">Mới</span>
            </button>
          </div>
        </div>

        {/* Interactive Workspace Container */}
        <div className="bg-surface-container-lowest rounded-xl border border-surface-container/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[720px]">
          {/* Left: Cartographic Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest relative flex flex-col p-4 md:p-6 justify-between border-b lg:border-b-0 lg:border-r border-surface-container/60">
            {/* Map Tool Controls Layer */}
            <div className="flex items-center justify-between gap-3 flex-wrap z-10 mb-3">
              <div className="flex items-center gap-1.5 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-surface-container/60 shadow-xs">
                <span className="material-symbols-outlined text-outline text-[18px]">layers</span>
                <span className="text-xs font-medium text-on-surface mr-1">Lớp:</span>
                <button
                  type="button"
                  onClick={() => setActiveLayer('all')}
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                    activeLayer === 'all'
                      ? 'bg-primary text-white'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  Tất cả
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLayer('5star')}
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                    activeLayer === '5star'
                      ? 'bg-primary text-white'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  5 Sao
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLayer('craft')}
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                    activeLayer === 'craft'
                      ? 'bg-primary text-white'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  Làng nghề
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLayer('tour')}
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                    activeLayer === 'tour'
                      ? 'bg-primary text-white'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  Điểm du lịch
                </button>
              </div>

              <div className="flex items-center gap-1.5 bg-surface/90 backdrop-blur-md p-1 rounded-lg border border-surface-container/60 shadow-xs">
                <button
                  type="button"
                  onClick={() => setZoomScale((prev) => Math.min(prev + 0.1, 1.4))}
                  aria-label="Phóng to bản đồ"
                  className="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                  title="Phóng to"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
                <button
                  type="button"
                  onClick={() => setZoomScale((prev) => Math.max(prev - 0.1, 0.8))}
                  aria-label="Thu nhỏ bản đồ"
                  className="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                  title="Thu nhỏ"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <button
                  type="button"
                  onClick={() => setZoomScale(1)}
                  aria-label="Đặt lại góc nhìn"
                  className="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                  title="Đặt lại"
                >
                  <span className="material-symbols-outlined text-[18px]">crop_free</span>
                </button>
                <span className="text-outline-variant">|</span>
                <span className="text-[11px] px-1 text-on-surface-variant font-mono">
                  1:2.500.000
                </span>
              </div>
            </div>

            {/* Stylized Vietnam S-Shape Cartography Canvas View */}
            <div
              style={{ transform: `scale(${zoomScale})`, transformOrigin: 'center center', transition: 'transform 0.2s ease-out' }}
              className="relative w-full h-[520px] md:h-[580px] my-2 flex items-center justify-center overflow-hidden rounded-xl bg-surface-container-low/30 border border-surface-container/40"
            >
              {/* Background Topography Grid */}
              <svg
                className="absolute inset-0 w-full h-full text-outline-variant/15 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern height="40" id="grid-carto" patternUnits="userSpaceOnUse" width="40">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.75"
                    />
                  </pattern>
                </defs>
                <rect fill="url(#grid-carto)" height="100%" width="100%" />
              </svg>

              {/* Geographic S-Curve Arc with Hotspots */}
              <div className="relative w-full max-w-md h-full flex flex-col items-center justify-between py-6 z-10">
                {/* Hotspot 1: Miền Núi & Trung Du Phía Bắc */}
                <div
                  onClick={() => setSelectedHotspot('thai-nguyen')}
                  className="w-full flex justify-start pl-8 relative group cursor-pointer"
                >
                  <div className="flex items-center gap-2 bg-surface-container-lowest/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-secondary/30 hover:scale-105 transition-transform">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-secondary/20" />
                    <div>
                      <div className="text-xs font-bold text-primary">
                        Hà Giang - Lào Cai - Yên Bái
                      </div>
                      <div className="text-[11px] text-on-surface-variant">
                        Trà Shan Tuyết cổ thụ, Thảo quả
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 2: Thái Nguyên */}
                <div
                  onClick={() => setSelectedHotspot('thai-nguyen')}
                  className="w-full flex justify-center -ml-16 relative cursor-pointer"
                >
                  <div
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg shadow-sm transition-all ${
                      selectedHotspot === 'thai-nguyen'
                        ? 'bg-primary text-white ring-4 ring-primary/20 scale-105'
                        : 'bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      local_cafe
                    </span>
                    <div>
                      <div className="text-xs font-bold">
                        Thái Nguyên {selectedHotspot === 'thai-nguyen' ? '★' : ''}
                      </div>
                      <div className={`text-[11px] ${selectedHotspot === 'thai-nguyen' ? 'text-white/80' : 'text-on-surface-variant'}`}>
                        Đệ nhất danh trà • 420 Làng nghề
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 3: Hà Nội */}
                <div
                  onClick={() => setSelectedHotspot('ha-noi')}
                  className="w-full flex justify-end pr-12 relative group cursor-pointer"
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-sm transition-all ${
                      selectedHotspot === 'ha-noi'
                        ? 'bg-primary text-white ring-4 ring-primary/20 scale-105'
                        : 'bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 text-on-surface hover:scale-105'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary ring-4 ring-tertiary/20" />
                    <div>
                      <div className="text-xs font-bold">
                        Hà Nội &amp; Bắc Ninh {selectedHotspot === 'ha-noi' ? '★' : ''}
                      </div>
                      <div className={`text-[11px] ${selectedHotspot === 'ha-noi' ? 'text-white/80' : 'text-on-surface-variant'}`}>
                        1.350+ SP • Gốm Bát Tràng, Lụa Vạn Phúc
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 4: Quảng Nam */}
                <div
                  onClick={() => setSelectedHotspot('quang-nam')}
                  className="w-full flex justify-center pl-10 relative group cursor-pointer"
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-sm transition-all ${
                      selectedHotspot === 'quang-nam'
                        ? 'bg-primary text-white ring-4 ring-primary/20 scale-105'
                        : 'bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 text-on-surface hover:scale-105'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-secondary/20" />
                    <div>
                      <div className="text-xs font-bold">
                        Quảng Nam - Đà Nẵng {selectedHotspot === 'quang-nam' ? '★' : ''}
                      </div>
                      <div className={`text-[11px] ${selectedHotspot === 'quang-nam' ? 'text-white/80' : 'text-on-surface-variant'}`}>
                        Sâm Ngọc Linh, Gốm Thanh Hà
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 5: Đắk Lắk */}
                <div
                  onClick={() => setSelectedHotspot('dak-lak')}
                  className="w-full flex justify-start pl-16 relative group cursor-pointer"
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-sm transition-all ${
                      selectedHotspot === 'dak-lak'
                        ? 'bg-primary text-white ring-4 ring-primary/20 scale-105'
                        : 'bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 text-on-surface hover:scale-105'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600 ring-4 ring-amber-600/20" />
                    <div>
                      <div className="text-xs font-bold">
                        Tây Nguyên (Đắk Lắk) {selectedHotspot === 'dak-lak' ? '★' : ''}
                      </div>
                      <div className={`text-[11px] ${selectedHotspot === 'dak-lak' ? 'text-white/80' : 'text-on-surface-variant'}`}>
                        Cà phê Buôn Ma Thuột, Mắc ca
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 6: Bến Tre */}
                <div
                  onClick={() => setSelectedHotspot('ben-tre')}
                  className="w-full flex justify-end pr-20 relative group cursor-pointer"
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-sm transition-all ${
                      selectedHotspot === 'ben-tre'
                        ? 'bg-primary text-white ring-4 ring-primary/20 scale-105'
                        : 'bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 text-on-surface hover:scale-105'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 ring-4 ring-emerald-600/20" />
                    <div>
                      <div className="text-xs font-bold">
                        ĐBSCL (Bến Tre - Cà Mau) {selectedHotspot === 'ben-tre' ? '★' : ''}
                      </div>
                      <div className={`text-[11px] ${selectedHotspot === 'ben-tre' ? 'text-white/80' : 'text-on-surface-variant'}`}>
                        Xứ Dừa Bến Tre, Tôm rừng Năm Căn
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Map Legend Bar */}
            <div className="bg-surface-container-lowest/95 backdrop-blur-md p-3 rounded-lg border border-surface-container/60 shadow-xs flex items-center justify-between flex-wrap gap-2 z-10 text-xs">
              <span className="font-bold text-primary">Chú giải GIS:</span>
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <span>OCOP 5 Sao Quốc gia</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                <span>Làng nghề di sản</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>Du lịch sinh thái OCOP</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                <span>Chỉ dẫn địa lý (GI)</span>
              </div>
            </div>
          </div>

          {/* Right: Coordinates & Dossier Sidebar (5 cols) */}
          <div className="lg:col-span-5 bg-surface-container-low p-5 md:p-6 flex flex-col justify-between gap-6">
            {gisViewMode === 'reform_34' ? (
              /* Phase 2: 34 Reorganized Provinces View */
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                      Quy hoạch Không gian Nông thôn mới (Phase 2)
                    </span>
                    <h2 className="text-xl font-bold text-primary mt-1">
                      Phương án 34 Đơn vị Hành chính Tỉnh/Thành
                    </h2>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Mô hình tích hợp nguồn lực chuỗi giá trị và phân vùng sinh thái đặc sản.
                    </p>
                  </div>
                  <span className="px-2 py-0.5 bg-secondary text-white text-xs font-semibold rounded">
                    34 Đơn vị
                  </span>
                </div>

                <div className="max-h-[500px] overflow-y-auto space-y-2.5 pr-1">
                  {REFORM_34_PROVINCES.map((unit) => (
                    <div
                      key={unit.code}
                      className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container/60 shadow-xs flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary">{unit.name}</span>
                        <span className="text-[11px] font-mono text-outline bg-surface-container-low px-1.5 py-0.5 rounded">
                          {unit.code}
                        </span>
                      </div>
                      <div className="text-[11px] text-secondary font-medium">
                        Sáp nhập từ: {unit.mergedFrom.join(', ')}
                      </div>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {unit.ocopPotential}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Standard 63 Provinces Dossier View */
              <div className="flex flex-col gap-5">
                {/* Header of Selected Territory */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                      {currentDossier.region}
                    </span>
                    <h2 className="text-xl font-bold text-primary mt-1">
                      {currentDossier.province}
                    </h2>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      {currentDossier.coordinates}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-primary text-white text-xs font-semibold rounded-lg shrink-0">
                    {currentDossier.code}
                  </span>
                </div>

                {/* Territory Micro Stats Grid */}
                <div className="grid grid-cols-2 gap-3 bg-surface-container-lowest p-4 rounded-lg border border-surface-container/60 shadow-xs">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-primary">
                      {currentDossier.destinationsCount}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Điểm đến du lịch &amp; trải nghiệm
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-secondary">
                      {currentDossier.craftVillagesCount}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Làng nghề &amp; Vùng nguyên liệu
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-tertiary">
                      {currentDossier.ocopProductsCount}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Sản phẩm OCOP 4–5 sao
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-primary">
                      {currentDossier.storiesCount}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Phóng sự tư liệu địa văn hóa
                    </span>
                  </div>
                </div>

                {/* Dossier Item Highlights */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-outline">
                    Điểm nhấn không gian khảo sát
                  </span>
                  <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
                    {currentDossier.items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container/60 shadow-xs flex items-center gap-3"
                      >
                        <div className="w-14 h-14 rounded-md overflow-hidden shrink-0 bg-surface-container relative">
                          <MediaImage
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">
                              {item.category}
                            </span>
                            <span className="text-xs text-on-surface-variant truncate">
                              {item.location}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-primary truncate mt-0.5">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-on-surface-variant line-clamp-1">
                            {item.heritage}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    href={`/vi/san-pham-ocop?province=${encodeURIComponent(currentDossier.province.replace('Tỉnh ', '').replace('Thành phố ', ''))}`}
                    className="flex-1 text-center py-2 px-3 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Tra cứu sản phẩm tại đây
                  </Link>
                  <Link
                    href={`/vi/diem-den-du-lich?province=${encodeURIComponent(currentDossier.province.replace('Tỉnh ', '').replace('Thành phố ', ''))}`}
                    className="flex-1 text-center py-2 px-3 bg-surface-container-lowest border border-surface-container text-primary text-xs font-semibold rounded-lg hover:bg-surface-container transition-colors"
                  >
                    Xem tuyến điểm du lịch
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveGisWorkspace;
