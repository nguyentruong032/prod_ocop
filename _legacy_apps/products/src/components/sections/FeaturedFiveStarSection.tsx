'use client';

interface FeaturedProduct {
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
}

const featuredProducts = [
  {
    slug: 'tra-xanh-tan-cuong',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1M-hPCyKjYjN4XQDk_rwfVbr4zVPCZx_3M0JiFbQflNHtEmgSD_tW0yTuVnhLO-Yc_QG3LRk3i_sLhPb8SeI6Wr69RanWvPE5vQZSqdv5_0v3N3VrTfWkqrVrGK4Gq_LVEqJLymXRlsYNw879pK8xEDtGAFBke4eS_OhN4yRe-RxKWgMX9rRNRuuEFYOi0UEkLCFrH0Py7xDsxZqW8EHiYgxPBvy',
    alt: 'Fresh vibrant green tea leaves of Tan Cuong Thai Nguyen in bamboo drying trays with morning mist over tea hills background, vivid emerald and jade tones.',
    stars: '5 SAO' as const,
    category: 'Nông sản & Thực phẩm',
    province: 'Thái Nguyên',
    title: 'Trà xanh Tân Cương đặc sản',
    producer: 'HTX Trà Tân Cương',
    code: 'TN-TC-001',
    ctaType: 'origin' as const,
  },
  {
    slug: 'nuoc-mam-phu-quoc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj8pK2rM_Nt0LQR_wwMf5kZ4VhVxMvMEpGx-IPkQFLG4NmQiDKZkvoHFQUbB_nY26xJyHgcL3B9ECKc33wnGUMIicxPOF4n_M6fD2_wX9_v02TXGGDaDyRvYbCU_KiYDiCKEgOKp_NhJjxEZGtvJ3c1XvWwXJaB1nxGRE_8UYC-Kn-JnWczfuKYYGEdiypuQHLSNYxZ6tmaMoVRXxQe',
    alt: 'Traditional wooden aging barrels of Phu Quoc fish sauce in rustic warehouse, golden amber liquid catching light through barrel staves, heritage fermentation atmosphere.',
    stars: '5 SAO' as const,
    category: 'Nông sản & Thực phẩm',
    province: 'Kiên Giang',
    title: 'Nước mắm truyền thống Phú Quốc',
    producer: 'Công ty TNHH Nước mắm Khải Hoàn',
    code: 'KG-PQ-008',
    ctaType: 'origin' as const,
  },
  {
    slug: 'ca-phe-cau-dat',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJ3KQvNHX7IDtGUBGnL65h-q1_NQfIfPUy2vVkBpWYxZBMzqRVIB1xrLW94aKvRW36_EHArk-h5xGf7t4l8JoGjO4-aTKjR9g88LKMqAE4PB1CvvKm_7J3jCVHpM1E3i_OxUQST6lHsj0TXxC2g0LbxxG_P5y4yfqqTHxS4rMzgepJb7FnVa_W1s5PymEf7eY8MVtrd0BjOGQPdbog',
    alt: 'Artisan coffee roaster examining specialty Arabica beans at Cau Dat Dalat farm, misty highland coffee plantation with red ripe cherries on branches in background.',
    stars: '5 SAO' as const,
    category: 'Nông sản & Thực phẩm',
    province: 'Lâm Đồng',
    title: 'Cà phê Arabica Cầu Đất Cầu Kỷ',
    producer: 'Nông trại Cà phê Di sản Cầu Đất',
    code: 'LD-CD-067',
    ctaType: 'origin' as const,
  },
  {
    slug: 'khan-ran-cham',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9fK5u1KzH_N3L9nN6Z6JXy0L3PQRgM7w8Zk1B3E8QvY2VnXmTtR5U8Io1W2Z0xP7C6Q8aG3kV9bN4hJ2E1D5sY6L0pR8tZ7W4X3cV2B1nM9qA',
    alt: 'Cham woman weaver working on traditional wooden foot loom, intricately weaving black and white checkered scarves and floral brocade patterns in Chau Phong An Giang village.',
    stars: '3 SAO' as const,
    category: 'Thủ công mỹ nghệ & Khác',
    province: 'An Giang',
    title: 'Khăn rằn thổ cẩm dệt tay Chăm',
    producer: 'Làng nghề dệt thổ cẩm Châu Phong',
    code: 'AG-CP-019',
    ctaType: 'contact' as const,
  },
] as const;

export function FeaturedFiveStarSection() {
  return (
    <section id="san-pham-noi-bat" className="w-full bg-white py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-[#1F4D3A] uppercase tracking-wider font-semibold">
              Đỉnh cao phẩm cấp quốc gia
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-[#012d1d] mt-2 mb-3 tracking-tight">
              Sản phẩm OCOP 5 sao tiêu biểu.
            </h2>
            <p className="font-body-md text-body-md text-[#414844]">
              Bộ sưu tập những sản phẩm đạt chuẩn 5 sao cấp quốc gia — tiêu chuẩn vàng của chất lượng, nguồn gốc và di sản Việt.
            </p>
          </div>
          <a
            href="#tat-ca-san-pham"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#1F4D3A] hover:bg-[#132E22] text-white font-label-md text-label-md uppercase tracking-wider transition-all duration-200 shadow-sm shrink-0"
          >
            <span>Xem tất cả 47 sản phẩm 5 sao</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Large Lead Card (8 cols) */}
          <div className="lg:col-span-8">
            <article
              data-card-type="product"
              data-slug={featuredProducts[0].slug}
              className="bg-[#F8F5EE] rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-500 relative group"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={featuredProducts[0].image}
                  alt={featuredProducts[0].alt}
                  loading="lazy"
                />
                {/* Star Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#1F4D3A] text-white shadow-lg">
                  <span className="material-symbols-outlined text-[16px] text-[#C89B3C]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    stars
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-[#C89B3C]">OCOP {featuredProducts[0].stars}</span>
                </div>
                {/* Product Code */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-black/60 backdrop-blur-sm text-white font-label-sm text-label-sm">
                  Mã: {featuredProducts[0].code}
                </div>
                {/* Floating CTA on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                  <a
                    href="#"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-white hover:bg-[#F8F5EE] text-[#1F4D3A] font-label-md text-label-md uppercase tracking-wider transition-all duration-200 shadow-lg"
                  >
                    <span className="material-symbols-outlined text-[16px]">source_notes</span>
                    <span>Tìm hiểu nguồn gốc</span>
                  </a>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[#B85D3B] font-label-sm text-label-sm uppercase font-semibold mb-2">
                    {featuredProducts[0].category} • {featuredProducts[0].province}
                  </div>
                  <h3 className="font-headline-md text-title-editorial lg:text-headline-sm font-bold text-[#012d1d] mb-3 leading-snug line-clamp-2 group-hover:text-[#B85D3B] transition-colors">
                    {featuredProducts[0].title}
                  </h3>
                  <p className="font-body-md text-body-md text-[#717973] mb-6 leading-relaxed">
                    <span className="font-medium text-[#414844]">Chủ thể sản xuất:</span> {featuredProducts[0].producer}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E2DBD0]/60 flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 px-6 py-3 rounded bg-[#1F4D3A] hover:bg-[#132E22] text-white font-label-sm text-label-sm uppercase tracking-wider transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">source_notes</span>
                    <span>Tìm hiểu nguồn gốc</span>
                  </a>
                  <button
                    className="w-10 h-10 rounded hover:bg-[#E8EFEA] flex items-center justify-center text-[#717973] hover:text-[#012d1d] transition-colors"
                    title="Lưu hồ sơ"
                  >
                    <span className="material-symbols-outlined text-[20px]">bookmark</span>
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column: 3 Secondary Cards (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {featuredProducts.slice(1).map((product, index) => (
              <article
                key={product.slug}
                data-card-type="product"
                data-slug={product.slug}
                className="bg-[#F8F5EE] rounded-xl overflow-hidden flex flex-col h-[420px] shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative w-full h-[220px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1F4D3A] text-white shadow">
                    <span className="material-symbols-outlined text-[14px] text-[#C89B3C]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                    <span className="font-label-sm text-label-sm font-bold text-[#C89B3C]">OCOP {product.stars}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white font-label-sm text-label-sm">
                    Mã: {product.code}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[#B85D3B] font-label-sm text-label-sm uppercase font-semibold mb-1">
                      {product.category} • {product.province}
                    </div>
                    <h3 className="font-headline-sm text-title-editorial font-bold text-[#012d1d] mb-2 leading-snug line-clamp-2 group-hover:text-[#B85D3B] transition-colors">
                      {product.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-[#717973] mb-4">
                      <span className="font-medium text-[#414844]">Chủ thể sản xuất:</span> {product.producer}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2DBD0]/60 flex items-center justify-between">
                    {product.ctaType === 'origin' ? (
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#1F4D3A] hover:bg-[#132E22] text-white font-label-sm text-label-sm uppercase tracking-wider transition-colors"
                      >
                        <span className="material-symbols-outlined text-[15px]">source_notes</span>
                        <span>Tìm hiểu nguồn gốc</span>
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#B85D3B] text-[#B85D3B] hover:bg-[#B85D3B] hover:text-white font-label-sm text-label-sm uppercase tracking-wider transition-colors"
                      >
                        <span className="material-symbols-outlined text-[15px]">badge</span>
                        <span>Liên hệ thương hiệu</span>
                      </a>
                    )}
                    <button
                      className="w-8 h-8 rounded hover:bg-[#E8EFEA] flex items-center justify-center text-[#717973] hover:text-[#012d1d] transition-colors"
                      title="Lưu hồ sơ"
                    >
                      <span className="material-symbols-outlined text-[18px]">bookmark</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}