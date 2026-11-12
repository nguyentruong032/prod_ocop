'use client';

import { useState } from 'react';

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
        category: '5 Sao',
        location: 'Xã Tân Cương, TP. Thái Nguyên',
        heritage: 'Sản vật di sản: Trà Đinh Ngọc thượng hạng',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAO7qf0RR8fmflXq_4sR86VgJ7XIXfkYaPcn-79C25dMlgaSkXiAP4GhyYOOEtKJpzLSiWah-kr8Wrpu2oL4XZcr-4_qd-jBdI2O3AXm-KwzOPo3dRr_9j9AXtwsf_VuN6xEUwYf9fY9GgOm_0xMjEqNVwTXdozq-5EGlao79eL4a7yWj0zqGJT5ON4JEifbCAGOiwiqsnWG8O0hqYBI_aAzVrhHtHVQq87QDL6WHM',
        alt: 'Tea harvest fields in Tan Cuong commune Thai Nguyen Vietnam with green undulating hills morning mist and artisan tea harvesters wearing traditional bamboo cone hats under soft dawn lighting',
      },
      {
        id: '2',
        name: 'Không gian Văn hóa Trà La Bằng',
        category: 'Điểm du lịch',
        location: 'Xã La Bằng, Huyện Đại Từ',
        heritage: 'Trải nghiệm sao chè thủ công dưới chân Tam Đảo',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAfLj1AzrnuCCfz2Qwyavy9OIHvjVuSP65dosQwF1a88bPVucNuTgum5ZggIaUuuBL9nA9oI9ZD2SVX7zdjryD8BFmSulBIWVm-wqueWwht-2UC-8EirKC1xk8AxXhtF5bazfbiXUM4kSQpXavijnkCVA_Z_TNENrQNYChmo1EJQS6e6LDVpijolIVEGxcPdF__3iEO8z-ecQCeRQ3j41zKghCYLCTzQdIKWo6KGpg',
        alt: 'Traditional open-air tea pavilion and cultural exhibition space in La Bang Dai Tu Thai Nguyen surrounded by emerald tea bushes and Tam Dao mountain foothills with artisans performing wood charcoal tea roasting',
      },
      {
        id: '3',
        name: 'Làng nghề Chè Xóm Hồng Thái',
        category: 'Làng nghề',
        location: 'Xã Tân Cương & Vùng ven Sông Cầu, Huyện Đồng Hỷ',
        heritage: 'Bảo tồn 4 đời kỹ thuật ủ hương thảo mộc',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDoKdveMlwKv-Pdlh71SLvwuLqFcX3FR4I8YRTvx7_8-lIR2twrJVG9N1_8XBZu6XhwPsJiq5ZCEQRZ3-wZl7224iVf54K-SZoFF7vPs5VBFtQ2VUgtPVEkuNKmi_HxqE-TQOByPYj7DNHAZR8ClHi_Izk9qlvf14YLEPlwsAcnkOdb34H1hpYj7wJ75FUbkDScgeaCn3PJb5ykCM74MY4xO35lRCR7pC7hOxiyRXE',
        alt: 'Traditional craft tea village Hong Thai Dong Hy Thai Nguyen Vietnam with rustic wooden drying trays clay ovens and generational artisans rolling freshly picked tea leaves',
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
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCdvcBru0hYtWxHSyunb1uTYjKRaRUCvP_xAA7k_J3pOh--yE74dHvaXnYcdibYpT--k307dqKWEzyX_qIMUeV8fzeOK1SNXGgWsjJJS4WedZ6--tWTPeGv6jakeu6sPDWu2yYCpF4pwA5SrSy5hF1_MvAnfCWhQxdllwFGGKD24cWS-KRPKgqWIqFPSiIk3ndrou-Gzjj-QoFfus4w8itS05mLVytiy_NJF_R2jMQ',
        alt: 'Bat Trang ancient craft village Hanoi',
      },
      {
        id: '2',
        name: 'Làng nghề dệt lụa Vạn Phúc',
        category: '5 Sao',
        location: 'Quận Hà Đông, Hà Nội',
        heritage: 'Lụa tơ tằm dệt vân mây cổ truyền',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB6CmRRD0mn5f4_qgOvv7ekj-veHQ8lN8sO85D2uKM5FDmXY7xgRoDsyfFw_rM_iDWqEIrnA_ipIRknd8XtW7E7GwYPzIfZu21eeNaNG7WakgHW_pfPqsVKIoMZtt2jXcpOEeb76LhKID_ZMhVvr86dq6ngyJIS62Z7Dhsq5t2C7FUhGAcmldupHZgPktZqKPEXOqQ9qFdybJ2FnusP0M42Rn4OuxsgigjF9vRI6Tw',
        alt: 'Van Phuc silk weaving',
      },
    ],
  },
  'quang-nam': {
    id: 'quang-nam',
    code: '#QN-2026',
    region: 'Bắc Trung Bộ & Duyên hải • Di sản văn hóa',
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
        category: '5 Sao',
        location: 'Huyện Nam Trà My, Quảng Nam',
        heritage: 'Quốc bảo dược liệu Việt Nam',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAW-Iz-aGSdI9XuZTDyTCjoSQHNMjDn1uKYt1k1kP5L-nhN9yw2M4W11-vmBP8HujnLFpAt84om7-iy8HoMjPmZBE_CCD_A6vbwcJ018CXKNQaBdEDOinrFsK11YgNbQzGs_K8sHYiC8NSyY9oEezLoKjdTrs4zowAeiMOkeOgotbxAtsKEdmMM3LlWtG7tDzu_wEl5N97rmAT4WdJf2DhGj7SDuXVOifeOhu8E1fA',
        alt: 'Sam Ngoc Linh Nam Tra My',
      },
    ],
  },
};

export function InteractiveGisWorkspace() {
  const [activeLayer, setActiveLayer] = useState<'all' | '5star' | 'craft' | 'tour'>('all');
  const [selectedHotspot, setSelectedHotspot] = useState<string>('thai-nguyen');
  const [zoomScale, setZoomScale] = useState<number>(1);

  const currentDossier = DOSSIERS[selectedHotspot] || DOSSIERS['thai-nguyen'];

  return (
    <section className="w-full py-space-xl bg-surface-container-low/40">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-lg">
        {/* Interactive workspace container */}
        <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[720px]">
          {/* Left: Cartographic Map Canvas (60% Desktop: 7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest relative flex flex-col p-space-md md:p-space-lg justify-between">
            {/* Map Tool Controls Layer */}
            <div className="flex items-center justify-between gap-space-sm flex-wrap z-10">
              <div className="flex items-center gap-space-xs bg-surface/90 backdrop-blur-md px-space-sm py-space-xs rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-outline text-[18px]">layers</span>
                <span className="font-label-md text-label-md text-on-surface">Lớp dữ liệu:</span>
                <button
                  onClick={() => setActiveLayer('all')}
                  className={`px-space-xs py-0.5 rounded text-label-sm font-label-sm transition-colors ${
                    activeLayer === 'all'
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  Tất cả
                </button>
                <button
                  onClick={() => setActiveLayer('5star')}
                  className={`px-space-xs py-0.5 rounded text-label-sm font-label-sm transition-colors ${
                    activeLayer === '5star'
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  OCOP 5 Sao
                </button>
                <button
                  onClick={() => setActiveLayer('craft')}
                  className={`px-space-xs py-0.5 rounded text-label-sm font-label-sm transition-colors ${
                    activeLayer === 'craft'
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  Làng nghề
                </button>
                <button
                  onClick={() => setActiveLayer('tour')}
                  className={`px-space-xs py-0.5 rounded text-label-sm font-label-sm transition-colors ${
                    activeLayer === 'tour'
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  Điểm du lịch
                </button>
              </div>

              <div className="flex items-center gap-space-xs bg-surface/90 backdrop-blur-md p-1 rounded-lg shadow-sm">
                <button
                  onClick={() => setZoomScale((prev) => Math.min(prev + 0.1, 1.4))}
                  aria-label="Zoom in"
                  className="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                  title="Phóng to"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
                <button
                  onClick={() => setZoomScale((prev) => Math.max(prev - 0.1, 0.8))}
                  aria-label="Zoom out"
                  className="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                  title="Thu nhỏ"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <button
                  onClick={() => setZoomScale(1)}
                  aria-label="Reset view"
                  className="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                  title="Đặt lại góc nhìn"
                >
                  <span className="material-symbols-outlined text-[18px]">crop_free</span>
                </button>
                <span className="text-outline-variant">|</span>
                <span className="font-label-sm text-label-sm px-1 text-on-surface-variant">
                  Tỷ lệ 1:2.500.000
                </span>
              </div>
            </div>

            {/* Stylized S-Shaped Vietnam Cartography SVG / Canvas View */}
            <div
              style={{ transform: `scale(${zoomScale})`, transformOrigin: 'center center', transition: 'transform 0.2s ease-out' }}
              className="relative w-full h-[520px] md:h-[580px] my-space-sm flex items-center justify-center overflow-hidden rounded-lg bg-surface-container-low/30"
            >
              {/* Background Topography Graphic Simulation */}
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

              {/* Geographic S-Curve Arc Representation with Regional Clusters */}
              <div className="relative w-full max-w-md h-full flex flex-col items-center justify-between py-6">
                {/* Hotspot 1: Miền Núi & Trung Du Phía Bắc */}
                <div
                  onClick={() => setSelectedHotspot('thai-nguyen')}
                  className="w-full flex justify-start pl-12 relative group cursor-pointer"
                >
                  <div className="flex items-center gap-space-xs bg-surface-container-lowest/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-secondary/20 hover:scale-105 transition-transform">
                    <span className="w-3 h-3 rounded-full bg-secondary ring-4 ring-secondary/20" />
                    <div>
                      <div className="font-title-editorial text-body-sm font-bold text-primary">
                        Hà Giang - Lào Cai - Yên Bái
                      </div>
                      <div className="font-label-sm text-label-sm text-outline">
                        Chè Shan Tuyết, Thảo quả, Thổ cẩm H&apos;Mông
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 2: Thái Nguyên (ĐANG CHỌN - ACTIVE FOCUS) */}
                <div
                  onClick={() => setSelectedHotspot('thai-nguyen')}
                  className="w-full flex justify-center -ml-16 relative cursor-pointer"
                >
                  <div
                    className={`flex items-center gap-space-xs px-3.5 py-2 rounded-lg shadow-md transition-all ${
                      selectedHotspot === 'thai-nguyen'
                        ? 'bg-primary text-on-primary ring-4 ring-primary/20 scale-110'
                        : 'bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">
                      local_cafe
                    </span>
                    <div>
                      <div className="font-title-editorial text-body-sm font-bold">
                        Thái Nguyên {selectedHotspot === 'thai-nguyen' ? '(Đang chọn)' : ''}
                      </div>
                      <div className="font-label-sm text-label-sm text-primary-fixed">
                        Đệ nhất danh trà • 420 Làng nghề
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 3: Đồng Bằng Sông Hồng & Hà Nội */}
                <div
                  onClick={() => setSelectedHotspot('ha-noi')}
                  className="w-full flex justify-end pr-16 relative group cursor-pointer"
                >
                  <div
                    className={`flex items-center gap-space-xs px-3 py-1.5 rounded-lg shadow-sm transition-all ${
                      selectedHotspot === 'ha-noi'
                        ? 'bg-primary text-on-primary ring-4 ring-primary/20 scale-110'
                        : 'bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 hover:scale-105'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-tertiary-container ring-4 ring-tertiary-container/20" />
                    <div>
                      <div
                        className={`font-title-editorial text-body-sm font-bold ${
                          selectedHotspot === 'ha-noi' ? 'text-white' : 'text-primary'
                        }`}
                      >
                        Hà Nội &amp; Bắc Ninh
                      </div>
                      <div
                        className={`font-label-sm text-label-sm ${
                          selectedHotspot === 'ha-noi' ? 'text-gray-200' : 'text-outline'
                        }`}
                      >
                        1.350 sản phẩm • Gốm Bát Tràng, Lụa Vạn Phúc
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 4: Bắc Trung Bộ & Quảng Nam */}
                <div
                  onClick={() => setSelectedHotspot('quang-nam')}
                  className="w-full flex justify-center pl-10 relative group cursor-pointer"
                >
                  <div
                    className={`flex items-center gap-space-xs px-3 py-1.5 rounded-lg shadow-sm transition-all ${
                      selectedHotspot === 'quang-nam'
                        ? 'bg-primary text-on-primary ring-4 ring-primary/20 scale-110'
                        : 'bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 hover:scale-105'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-secondary-container ring-4 ring-secondary-container/20" />
                    <div>
                      <div
                        className={`font-title-editorial text-body-sm font-bold ${
                          selectedHotspot === 'quang-nam' ? 'text-white' : 'text-primary'
                        }`}
                      >
                        Nghệ An - Quảng Nam
                      </div>
                      <div
                        className={`font-label-sm text-label-sm ${
                          selectedHotspot === 'quang-nam' ? 'text-gray-200' : 'text-outline'
                        }`}
                      >
                        Sâm Ngọc Linh, Gốm Thanh Hà, Nước mắm Cửa Lò
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 5: Tây Nguyên - Đắk Lắk */}
                <div
                  onClick={() => setSelectedHotspot('thai-nguyen')}
                  className="w-full flex justify-start pl-20 relative group cursor-pointer"
                >
                  <div className="flex items-center gap-space-xs bg-surface-container-lowest/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-outline-variant/30 hover:scale-105 transition-transform">
                    <span className="w-3 h-3 rounded-full bg-tertiary ring-4 ring-tertiary/20" />
                    <div>
                      <div className="font-title-editorial text-body-sm font-bold text-primary">
                        Tây Nguyên (Đắk Lắk - Gia Lai)
                      </div>
                      <div className="font-label-sm text-label-sm text-outline">
                        Cà phê Buôn Ma Thuột, Mắc ca, Rượu cần
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotspot 6: ĐBSCL - Bến Tre & Cà Mau */}
                <div
                  onClick={() => setSelectedHotspot('thai-nguyen')}
                  className="w-full flex justify-end pr-24 relative group cursor-pointer"
                >
                  <div className="flex items-center gap-space-xs bg-surface-container-lowest/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-outline-variant/30 hover:scale-105 transition-transform">
                    <span className="w-3 h-3 rounded-full bg-primary-container ring-4 ring-primary-container/20" />
                    <div>
                      <div className="font-title-editorial text-body-sm font-bold text-primary">
                        Bến Tre - Cần Thơ - Cà Mau
                      </div>
                      <div className="font-label-sm text-label-sm text-outline">
                        Kinh tế dừa, Tôm sinh thái rừng đước Năm Căn
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Map Legend Bar */}
            <div className="bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-lg shadow-sm flex items-center justify-between flex-wrap gap-space-sm z-10 text-body-sm">
              <span className="font-label-md text-label-md text-primary font-bold">
                Chú giải GIS:
              </span>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <span>OCOP 5 Sao Quốc gia</span>
              </div>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
                <span>Làng nghề di sản</span>
              </div>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>Du lịch sinh thái OCOP</span>
              </div>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                <span>Chỉ dẫn địa lý (GI)</span>
              </div>
            </div>
          </div>

          {/* Right: Survey Coordinates & Cultural Dossier Panel (40% Desktop: 5 cols) */}
          <div className="lg:col-span-5 bg-surface-container-low p-space-lg flex flex-col justify-between gap-space-md">
            {currentDossier && (
              <div className="flex flex-col gap-space-md">
                {/* Header of Selected Territory */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
                      {currentDossier?.region}
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">
                      {currentDossier?.province}
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {currentDossier?.coordinates}
                    </p>
                  </div>
                  <span className="px-space-sm py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded-lg">
                    Hồ sơ số {currentDossier?.code}
                  </span>
                </div>

                {/* Territory Micro Stats Grid */}
                <div className="grid grid-cols-2 gap-space-sm bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                      {currentDossier?.destinationsCount}
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Điểm đến du lịch &amp; trải nghiệm
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                      {currentDossier?.craftVillagesCount}
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Làng nghề được công nhận
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm font-bold text-tertiary-container">
                      {currentDossier?.ocopProductsCount}
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Sản phẩm OCOP 4 sao &amp; 5 sao
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm font-bold text-primary-container">
                      {currentDossier?.storiesCount}
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Câu chuyện văn hóa bản địa
                    </span>
                  </div>
                </div>

                {/* Representative Locations of Selected Territory */}
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                    Điểm đến &amp; Vùng nguyên liệu tiêu biểu
                  </span>
                  {currentDossier?.items?.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-space-md bg-surface-container-lowest p-space-sm rounded-lg shadow-sm hover:bg-surface-bright transition-colors"
                    >
                      <img
                        className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                        data-alt={item.alt}
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-editorial text-body-md font-bold text-primary truncate">
                            {item.name}
                          </span>
                          <span className="px-1.5 py-0.5 bg-primary-container text-on-primary font-label-sm text-label-sm rounded">
                            {item.category}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                          {item.location}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary mt-0.5">
                          {item.heritage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Button for Dossier */}
            <div className="pt-space-sm">
              <a
                className="w-full inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-space-sm px-space-md rounded-lg shadow-sm transition-colors uppercase tracking-wider"
                href="#"
              >
                <span>Xem báo cáo số hóa đầy đủ của Tỉnh này</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
