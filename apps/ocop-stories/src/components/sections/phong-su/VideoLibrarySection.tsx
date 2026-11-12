'use client';

import { useState } from 'react';

interface VideoItem {
  imgSrc: string;
  dataAlt: string;
  duration: string;
  location: string;
  category: string;
  product: string;
  title: string;
  desc: string;
  coop: string;
  views: string;
  region: string;
}

const videos: VideoItem[] = [
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqJpXtL0pZAESU7OezNTBM2fZDpBi22HSmIfzgKRyf1NWtdZZizTp_iiak4DEM5tXSRl_delMY7uROMor4dXLGYq4IgPLDSVF10Tx_QCGfWnzCygN4JMcqAibdVW6KEPc4SbsQheU6GLkhA65I4NBHZP83aOAl-DxXHm0C8CJVihWlimcxkjcyAUJuK7yyQBl1yju9mOi8Ks7qEnrsrL3vOHIMPingJmp8u3biFiw',
    dataAlt:
      'Traditional hand woven brocade textiles hung to dry in Pa Co Mai Chau Hoa Binh Vietnam, Hmong artisan woman spinning hemp fiber, rich indigo blue natural dyes.',
    duration: '11:45',
    location: 'Mai Châu, Hòa Bình',
    category: 'chuyen-nguoi-lam-nghe',
    product: 'Dệt thổ cẩm Pà Cò (4 Sao)',
    title: "Ký ức sợi gai và màu chàm rừng của người H'Mông Pà Cò",
    desc: 'Hành trình từ cây lanh trên nương đá tai mèo biến thành những dải khăn thổ cẩm tinh xảo dưới bàn tay mẹ già 80 tuổi.',
    coop: 'HTX Thổ cẩm Pà Cò Xanh',
    views: '12.4K',
    region: 'Trung du & Miền núi phía Bắc',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDi_U3x4bXK-3pEKrcv2XOxeYZrCZ9kUMs2Uh9yYHTYrqCCNfGBleGDsSpimJr-CByo4tvvIcBXP8UMzd-3qY9hJbu65qJywzZix0U4PkuY4-iuOBR7JmVwAFg9xNiv-fYW5ooQz8Dfpl_lgNqCQ4VyfconDGjMLM29CmwMQ0eGK9HUlw0uzW2E7lGV7H5D8vecOiQzgcnVAVLFYgodgPBCvIF0_cg4qmwTKiEJlB8',
    dataAlt:
      'Traditional Ba Dong sedge mat weaving in Tra Cu Tra Vinh Vietnam, vibrant red and green dyed strands of rush woven on wooden handlooms by Khmer artisans.',
    duration: '14:20',
    location: 'Trà Cú, Trà Vinh',
    category: 'ky-su-dien-da',
    product: 'Chiếu cói Cà Hom (4 Sao)',
    title: 'Nhịp thoi dệt chiếu Cà Hom: Giọt mồ hôi trên đồng cói mặn',
    desc: 'Nghệ thuật nhuộm phẩm màu tự nhiên và công phu dệt chiếu hoa của đồng bào Khmer Nam Bộ bên dòng sông Hậu.',
    coop: 'HTX Thủ công Mỹ nghệ Trà Cú',
    views: '9.8K',
    region: 'Đồng bằng Sông Cửu Long',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMFEUWztGG2iK2SU0J7p0ne7bLvcopC08lgUBmLNJBu2MB6aLouqVACOJY4kc2lk1-5plfU_DRJ89YBhrOtIBT5LkdKI236ivpRFf2t2EDp14y3CCr8lK0VQ8vjBZziLCfmZ9L8kH8Hqz_nGxf3KgLgj7-SgWXGgrSlHErvfRzR9T7a0UChN7g5zkJGMjp1PQp8wDoh8IpnVMko28X_zyZkJzWyVSo7DDbqcyqmxU',
    dataAlt:
      'Traditional Bat Trang ceramics master shaping clay on potter wheel, terracotta pottery kiln yard, glaze recipe handwritten manuscript in background Hanoi Vietnam.',
    duration: '19:05',
    location: 'Gia Lâm, Hà Nội',
    category: 'phim-tai-lieu-ngan',
    product: 'Gốm Men Tro Cổ Bát Tràng (5 Sao)',
    title: 'Lửa thử men tro: Giải mã công thức gốm thất truyền thời Lê - Mạc',
    desc: 'Hành trình 20 năm phục dựng dòng men tro trấu cổ kính của nghệ nhân ưu tú Trần Độ tại làng gốm ven sông Hồng.',
    coop: 'HTX Gốm Sứ Di Sản Bát Tràng',
    views: '31.2K',
    region: 'Đồng bằng Sông Hồng',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrSQYWxnGSNMVAg3_NCROm14NjnmP9eedsw1d8W0WeerAV3AeHjxBthHVTcDsj8aLPxgzbiWE8DGwk3DzXb6-pZVMcWVe-WA3_BeZVbUKl330g4yS-DAG7t0--OvlhJK_4SMAl8rhTaN3r-YIpxi9tjsWwej1_1SZ5gIzfZiunTdd019DmSw9HCxgWA_v086wjWHr-8s0cq493ui8LHbmN-uva_Z_BdbBYAPzleEI',
    dataAlt:
      'Golden mountain honey harvesting from wild giant bees in U Minh Ha cajuput mangrove forest Ca Mau Vietnam, smoking bee smoker tool, honey combs glowing golden under swamp forest canopy.',
    duration: '16:30',
    location: 'U Minh Hạ, Cà Mau',
    category: 'ky-su-dien-da',
    product: 'Mật ong hoa tràm (5 Sao)',
    title: 'Kèo ong U Minh: Thợ gác kèo và văn hóa sinh tồn giữa rừng ngập nước',
    desc: 'Theo chân những thợ rừng lành nghề len lỏi xuồng ba lá gác kèo tràm, thu hoạch dòng mật hoa tràm vàng óng sánh đặc.',
    coop: 'HTX Mật ong Rừng U Minh',
    views: '18.7K',
    region: 'Đồng bằng Sông Cửu Long',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRwBX_pcbftUlIOWPpcxWLYeTUfX8pnYukXVg_l9_fJFE6qbXrfPDixGA3jAIA9SGktflPJGTnn2PRTm1et2iPKvtNmveJF-P96VMo4wtWrfcGea1JvHF0nRtBiHh5mwUUcPyfXDIEZOlkdN0tdXojXfKAqw3L8IUYoAz0EaOpELRvCfJfBElqV9iD9yzHcDDNaXiMBNiCKumpgnSWYYoRPFr8qcx-0AlopITwTrw',
    dataAlt:
      'Traditional conical hat making in Chuong village Hanoi Vietnam, women arranging white palm leaves on circular bamboo frame, stitching fine silk thread, soft domestic lighting.',
    duration: '09:50',
    location: 'Thanh Oai, Hà Nội',
    category: 'chuyen-nguoi-lam-nghe',
    product: 'Nón lá Làng Chuông (4 Sao)',
    title: 'Từng mũi kim trên vành nón Chuông: Ký ức nghìn năm bên bờ sông Đáy',
    desc: '16 vành nón bằng nứa uốn cong chuẩn mực, lá cọ trắng tinh là phẳng bằng lưỡi cày nóng tạo nên biểu tượng duyên dáng Việt Nam.',
    coop: 'HTX Nón Lá Truyền Thống Chuông',
    views: '14.1K',
    region: 'Đồng bằng Sông Hồng',
  },
  {
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7RO7jv2rgqLUbGa4PR49c9JrYb__hftB783RRxNvgPdxcfFJCnh5PIP-FF1X2QWdCzEwMErnuli2B0i5k26_fI18qI8xzUseeY1GlBXo0cQLWYYDD5OWUD8GJRMNgULzOLIhqabSxgODaVT9rABNmsbBIaGyuRUtqnxfEu6x2vwoWmA28g6IaEmegtfIC3LvPsaHxeR_1rQ16S4KEG8Yz0ie_6O7Zw38RJ7nO-_E',
    dataAlt:
      'Traditional rice paper making craft in Thuan Hung Can Tho Vietnam, artisan spreading thin rice batter onto steaming cloth cauldron, sun-drying on bamboo lattice racks in Mekong delta sun.',
    duration: '13:15',
    location: 'Thốt Nốt, Cần Thơ',
    category: 'huong-dan-trai-nghiem',
    product: 'Bánh tráng Thuận Hưng (4 Sao)',
    title: 'Mùi bột gạo trên vỉ phên tre: Hai thế kỷ giữ nếp bánh tráng Thuận Hưng',
    desc: 'Dậy từ 3 giờ sáng nhóm lửa tráng bánh, cách người phụ nữ miệt vườn biến hạt gạo Nàng Thơm thành chiếc bánh tráng dẻo thơm nức tiếng.',
    coop: 'HTX Bánh Tráng Thuận Hưng',
    views: '8.6K',
    region: 'Đồng bằng Sông Cửu Long',
  },
];

export function VideoLibrarySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const tabs = [
    { key: 'all', label: 'Tất cả Video (180)' },
    { key: 'phim-tai-lieu-ngan', label: 'Phim tài liệu ngắn (54)' },
    { key: 'ky-su-dien-da', label: 'Ký sự điền dã (62)' },
    { key: 'chuyen-nguoi-lam-nghe', label: 'Chuyện người làm nghề (45)' },
    { key: 'huong-dan-trai-nghiem', label: 'Hướng dẫn trải nghiệm (19)' },
  ];

  const filtered = videos.filter((v) => {
    const matchCat = selectedCategory === 'all' || v.category === selectedCategory;
    const matchRegion = selectedRegion === 'all' || v.region === selectedRegion;
    return matchCat && matchRegion;
  });

  return (
    <section className="w-full bg-[#e8efea] py-14 lg:py-20">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                Thư viện Tư liệu Phim ảnh
              </span>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary font-bold mt-1">
                Khám phá Kho Phim theo Thể loại & Địa phương
              </h2>
            </div>
            {/* Region Dropdown Filter */}
            <div className="flex items-center gap-2">
              <span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">Khu vực:</span>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="h-10 px-3 pr-8 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-outline-variant/60 focus:outline-none focus:border-primary"
              >
                <option value="all">Tất cả 63 Tỉnh Thành</option>
                <option value="Đồng bằng Sông Hồng">Đồng bằng Sông Hồng</option>
                <option value="Trung du & Miền núi phía Bắc">Trung du & Miền núi phía Bắc</option>
                <option value="Bắc Trung Bộ & Duyên hải Miền Trung">Bắc Trung Bộ & Duyên hải Miền Trung</option>
                <option value="Tây Nguyên hùng vĩ">Tây Nguyên hùng vĩ</option>
                <option value="Đông Nam Bộ">Đông Nam Bộ</option>
                <option value="Đồng bằng Sông Cửu Long">Đồng bằng Sông Cửu Long</option>
              </select>
            </div>
          </div>
          {/* Filter Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key)}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md whitespace-nowrap transition-colors ${
                  selectedCategory === tab.key
                    ? 'bg-primary text-on-primary shadow-xs'
                    : 'bg-surface-container-lowest hover:bg-white text-on-surface-variant hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* 6 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-video overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt={v.dataAlt}
                    src={v.imgSrc}
                    alt={v.title}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 text-white font-mono text-[10px]">
                    4K ULTRA HD
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-[11px]">
                    {v.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[26px] ml-0.5">play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 font-label-sm text-[11px] text-secondary font-semibold uppercase mb-1.5">
                    <span>{v.location}</span>
                    <span>•</span>
                    <span>{v.product}</span>
                  </div>
                  <h3 className="font-headline-sm text-title-editorial font-bold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                    {v.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{v.desc}</p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>{v.coop}</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">visibility</span> {v.views}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
