'use client';

interface Category {
  slug: string;
  image: string;
  alt: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  description: string;
  count: string;
}

const categories: Category[] = [
  {
    slug: 'nong-san-thuc-pham',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFy0Ik1cMf_h1XFgfel-fkBU5ru6eU-C6xQAk2xzf2-ygDrhmZaplpHykUQYLn0SklNy2g9hHHttLeE_j12QOEjYJvfzS6Gg5NrXPB3M6hz9KBR2hx8Zgr45SHGqUCmZ-iSLUyGErhVS89d9qx_4UIuUhDxWQoFAbcwCGmY5cwDJxbnYjYsGRhl4YxPapkftmVkdMcLAv1Ur83_aB7uXA3L201wmSAo_GigFIYSN8',
    alt: 'Mosaic of Vietnam regional specialties: green tea leaves, dried mango strips, cashew nuts, fermented shrimp paste, rice paper rolls, and coconut candy arranged on banana leaves.',
    badge: 'Nông sản & Thực phẩm',
    badgeBg: '#1F4D3A',
    badgeText: '#C89B3C',
    title: 'Nông sản & Thực phẩm',
    description: 'Trà đặc sản, gia vị vùng miền, hạt dinh dưỡng và đồ uống lên men truyền thống gắn liền với thổ nhưỡng từng dải đất phù sa.',
    count: '5.120+ hồ sơ',
  },
  {
    slug: 'duoc-lieu-suc-khoe',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_57dzURRfbyDL3lJY_HhLnTnN3MtBf__8o6bieFdb3SbwockcOs6eYnu14_eKSJ0SuavACAAylnOO2m1xupQ15HAWOTDR5nu2-COTttWrB1VvAnfbGOAhvAfShM0qOpy_K-5nD3UhH4ZPSVsmiKd_o4ZZcZsZGW2-zhxQgnRKpRL4YYiOz7w_W80oxp0EXCoVcyCZGxuTsn-F2iJk9E6xwszcEnyKk5bNesyUUWE',
    alt: 'Assorted Vietnamese medicinal herbs: ginseng roots, lingzhi mushrooms, cinnamon bark, artemisia leaves, and turmeric powder in traditional bamboo baskets.',
    badge: 'Dược liệu & Sức khỏe',
    badgeBg: '#372200',
    badgeText: '#C89B3C',
    title: 'Dược liệu & Sức khỏe',
    description: 'Nghệ tây, nhân sâm, linh chi, quế, sâm ngọc linh và các vị thuốc nam quý hiếm được tuyển chọn từ rừng già vùng cao.',
    count: '1.840+ hồ sơ',
  },
  {
    slug: 'thu-cong-my-nghe',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgSNT_zZgeZRPA1l_RrSO4r6XfsJiiPwjQ-XU-HUBfLr3jm1JCykO0meGMLTGT2SuOxJfeMKxAhSo1lE0IJb63m9osq31T6P2PY1O21TZW8veNCusICkqMfNSmUKsqIdHvS8fLnhOtB5wOgXpFZgOzrvDEADrWyP-tQ_FNyy9vdKsMh6pHWLGtji8pO6U5fBnfWWoM2dRI729iGwcKT92IdhpeDEHzBsvh6L3FSX8',
    alt: 'Cham woman weaver working on traditional wooden foot loom, intricately weaving black and white checkered scarves and floral brocade patterns in Chau Phong An Giang village.',
    badge: 'Thủ công mỹ nghệ & Khác',
    badgeBg: '#1F4D3A',
    badgeText: '#C89B3C',
    title: 'Thủ công mỹ nghệ & Khác',
    description: 'Gốm men tro, dệt thổ cẩm, tranh sơn mài, điêu khắc gỗ và sản phẩm thủ công tinh xảo mang hồn cốt làng nghề Việt.',
    count: '2.310+ hồ sơ',
  },
  {
    slug: 'diem-den-du-lich',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi5Br2cDjcnieLKmblultsXnVSjkNqxanczpEkosVYRdsEowu79MclPetTUM4M22AgkogkCBNHFaW5MBFsFXoxajtD5QckRChh5ci4gWgoSWnZ1ZlAKnLktnI_mqhjZ0GZkkoaxJPwt6ZqPYla1Y-GmpqW5KYJTKKDAaRkdwelROSer2IwsZnzgG2QWgU0ZwAVsRaOMfwPqRT4cZsLh6Tq_ydydDYvEf-Kf1DtU7M',
    alt: 'Sunrise over terraced rice fields in Mu Cang Chai Yen Bai, ethnic Hmong village nestled in misty valleys with traditional stilt houses and winding mountain roads.',
    badge: 'Điểm đến & Du lịch',
    badgeBg: '#012D1D',
    badgeText: '#C89B3C',
    title: 'Điểm đến & Du lịch',
    description: 'Homestay bản địa, tour trải nghiệm nghề, vườn trồng tiêu biểu và điểm đến du lịch sinh thái gắn liền với sản phẩm OCOP.',
    count: '420+ điểm đến',
  },
];

export function CategoryCardsSection() {
  return (
    <section id="danh-muc-san-pham" className="w-full bg-[#F8F5EE] py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-[#1F4D3A] uppercase tracking-wider font-semibold">
              Khám phá theo danh mục
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-[#012d1d] mt-2 mb-3 tracking-tight">
              4 nhóm sản phẩm OCOP đại diện.
            </h2>
            <p className="font-body-md text-body-md text-[#414844]">
              Duyệt nhanh theo ngành hàng để tìm đúng loại sản phẩm, chủ thể hoặc vùng miền bạn quan tâm.
            </p>
          </div>
          <a
            href="#tat-ca-danh-muc"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white hover:bg-[#E8EFEA] text-[#1F4D3A] hover:text-[#012d1d] font-label-md text-label-md uppercase tracking-wider transition-all duration-200 border border-[#C89B3C]/30 shrink-0"
          >
            <span>Xem tất cả danh mục</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/san-pham-ocop/danh-muc/${category.slug}`}
              className="group relative rounded-xl overflow-hidden h-[420px] flex flex-col justify-end p-6 bg-[#012d1d] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={category.image}
                  alt={category.alt}
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              <div className="relative z-10">
                {/* Category Badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 backdrop-blur-sm text-white font-label-sm text-label-sm uppercase tracking-wider font-semibold mb-4"
                  style={{ borderColor: category.badgeText }}
                >
                  <span style={{ color: category.badgeText }}>
                    {category.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline-sm text-title-editorial font-bold text-white mb-3 group-hover:text-[#C89B3C] transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="font-body-sm text-body-sm text-white/80 line-clamp-3 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-1.5 text-white font-label-sm text-label-sm uppercase tracking-wider font-semibold group-hover:gap-3 transition-all duration-200">
                  <span>Xem {category.count}</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}