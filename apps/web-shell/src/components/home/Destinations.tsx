'use client';

import { useState } from 'react';

const regionalFilters = ['Bắc Bộ', 'Trung Bộ', 'Nam Bộ'];

const featuredLocality = {
  category: 'Làng nghề & Du lịch sinh thái · Trung du Bắc Bộ',
  name: 'Tỉnh Thái Nguyên',
  description: 'Vùng đất trung du nổi tiếng với đồi chè cổ truyền và du lịch trải nghiệm văn hóa trà.',
  stats: '32 Sản phẩm · 12 Câu chuyện',
  imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
  imageAlt: 'Lush rolling tea terraces of Thai Nguyen in early morning mist, local tea farmer walking along narrow ridge between green bushes, peaceful Vietnamese countryside',
  badge: 'Tiêu điểm',
  linkHref: '/diem-den-du-lich/index.html',
  linkText: 'Xem lộ trình',
};

const parallelDestinations = [
  {
    category: 'Du lịch trải nghiệm · Hội An, Quảng Nam',
    headline: 'Không gian làng rau Trà Quế và gốm Thanh Hà bên sông Thu Bồn',
    description: 'Trải nghiệm canh tác hữu cơ bồi đắp từ rong sông và nghệ thuật gốm nung đất sét thủ công.',
    author: '18 Sản phẩm OCOP',
  },
  {
    category: 'Sinh thái nông nghiệp · Sa Đéc, Đồng Tháp',
    headline: 'Làng hoa trăm tuổi và hành trình phát triển du lịch nông nghiệp xanh',
    description: 'Sắc màu phù sa đồng bằng sông Cửu Long gắn với mô hình tham quan làng nghề cây cảnh sinh thái.',
    author: '15 Sản phẩm OCOP',
  },
];

export default function Destinations() {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section className="w-full bg-[#e8efea] py-16" id="khoi-07-diem-den" data-render="section-header" data-content-key="khoi-07-diem-den">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div>
          <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-bold" data-field="label">CHUYÊN MỤC 04</span>
          <h2 className="font-headline-md text-headline-md font-bold text-primary mt-1" data-field="title">
            Hành trình về những làng nghề và miền đất OCOP.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl" data-field="description">
            Kết nối điểm đến làng nghề truyền thống, tuyến du lịch sinh thái trải nghiệm và Bản đồ OCOP 34 tỉnh, thành phố.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Interactive Map Widget (5 Cols) */}
          <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Không gian tọa độ số</span>
                  <h3 className="font-title-editorial text-title-editorial font-bold text-primary">Bản đồ OCOP 34 Tỉnh thành</h3>
                </div>
                <span className="material-symbols-outlined text-primary text-[28px]">explore</span>
              </div>
              {/* Stylized S-curve Vietnam Geography Graphic */}
              <div className="relative w-full h-52 my-4 rounded-lg bg-surface-container-low overflow-hidden flex items-center justify-center p-3">
                <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 320 180">
                  {/* S-curve abstract spine */}
                  <path d="M 80 20 C 130 25, 170 45, 140 75 C 115 100, 200 120, 220 160" opacity="0.35" strokeDasharray="3 3" strokeLinecap="round" strokeWidth="3" />
                  <path d="M 90 25 Q 160 50 145 80 T 215 155" opacity="0.8" strokeLinecap="round" strokeWidth="4" />
                  {/* Key Point 1: Thai Nguyen */}
                  <g className="cursor-pointer">
                    <circle cx="120" cy="38" fill="#1b4332" r="6" />
                    <circle cx="120" cy="38" opacity="0.4" r="10" stroke="#1b4332" strokeWidth="1.5" />
                    <text fill="#012d1d" fontFamily="Be Vietnam Pro" fontSize="10" fontWeight="600" x="132" y="42">Thái Nguyên</text>
                  </g>
                  {/* Key Point 2: Hoi An */}
                  <g className="cursor-pointer">
                    <circle cx="150" cy="85" fill="#984724" r="6" />
                    <circle cx="150" cy="85" opacity="0.4" r="10" stroke="#984724" strokeWidth="1.5" />
                    <text fill="#752d0b" fontFamily="Be Vietnam Pro" fontSize="10" fontWeight="600" x="162" y="89">Hội An (Quảng Nam)</text>
                  </g>
                  {/* Key Point 3: Can Tho */}
                  <g className="cursor-pointer">
                    <circle cx="195" cy="145" fill="#1b4332" r="6" />
                    <circle cx="195" cy="145" opacity="0.4" r="10" stroke="#1b4332" strokeWidth="1.5" />
                    <text fill="#012d1d" fontFamily="Be Vietnam Pro" fontSize="10" fontWeight="600" x="125" y="155">TP. Cần Thơ</text>
                  </g>
                </svg>
              </div>
              {/* Quantitative Summary */}
              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="bg-surface p-3 rounded-lg text-center">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary block leading-none">148</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">Điểm du lịch OCOP</span>
                </div>
                <div className="bg-surface p-3 rounded-lg text-center">
                  <span className="font-headline-sm text-headline-sm font-bold text-secondary block leading-none">420</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">Làng nghề công nhận</span>
                </div>
              </div>
              {/* Regional Filters */}
              <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-surface-container">
                {regionalFilters.map((region, index) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(index)}
                    className={`flex-1 py-1.5 rounded font-label-sm text-label-sm font-medium transition-colors ${
                      activeRegion === index
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface hover:bg-surface-container text-on-surface'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3">
              <a className="w-full py-2.5 rounded-lg bg-primary hover:bg-[#153427] text-on-primary text-center font-label-md text-label-md font-medium flex items-center justify-center gap-2 transition-all"
                href="/diem-den-du-lich/index.html">
                <span className="material-symbols-outlined text-[18px]">map</span>
                <span>Mở bản đồ toàn cảnh chi tiết</span>
              </a>
            </div>
          </div>
          {/* Locality Showcase (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Featured Locality Card */}
            <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row group" data-collection="destinations" data-slug="tinh-thai-nguyen" data-content-key="tinh-thai-nguyen">
              <div className="relative sm:w-1/2 min-h-[220px] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={featuredLocality.imageAlt}
                  src={featuredLocality.imageSrc} />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-primary text-primary-fixed font-label-sm text-label-sm font-semibold">
                  {featuredLocality.badge}
                </span>
              </div>
              <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-medium" data-field="category">{featuredLocality.category}</span>
                  <h3 className="font-title-editorial text-title-editorial font-bold text-primary mt-1.5 group-hover:text-secondary transition-colors" data-field="name">
                    {featuredLocality.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed" data-field="description">
                    {featuredLocality.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium" data-field="stats">{featuredLocality.stats}</span>
                  <a className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    href={featuredLocality.linkHref}>
                    {featuredLocality.linkText} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
            {/* 2 Parallel Destinations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {parallelDestinations.map((dest, index) => (
                <article key={index} className="bg-surface-container-lowest p-5 rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary font-medium" data-field="category">{dest.category}</span>
                    <h4 className="font-title-editorial text-title-editorial font-bold text-primary mt-1.5 group-hover:text-secondary transition-colors" data-field="headline">
                      {dest.headline}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2" data-field="desc">
                      {dest.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
                    <span className="font-medium text-primary" data-field="author">{dest.author}</span>
                    <span className="material-symbols-outlined text-primary text-[16px]">chevron_right</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-primary text-primary hover:text-on-primary font-label-md text-label-md font-medium shadow-xs transition-all"
            href="/diem-den-du-lich/index.html">
            <span>Khám phá điểm đến & bản đồ</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}