'use client';

export function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden bg-[#F8F5EE]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#C89B3C]/10 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#1F4D3A]/10 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#B85D3B]/5 blur-[200px]" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin py-space-3xl lg:py-space-4xl">
        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start lg:items-start text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F4D3A]/10 text-[#1F4D3A] font-label-md text-label-md uppercase tracking-wider font-semibold mb-6 shrink-0">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>award_star</span>
              <span>Đỉnh cao phẩm cấp địa phương</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline-lg text-headline-md lg:text-headline-lg lg:text-headline-xl text-[#012d1d] tracking-tight leading-tight max-w-xl mx-auto lg:mx-0 mb-6">
              Dấu ấn sản phẩm OCOP 5 sao cấp quốc gia.
            </h1>

            {/* Description */}
            <p className="font-body-md text-body-md lg:text-body-lg text-[#414844] leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Chứng nhận cao nhất trao bởi Hội đồng Đánh giá, Phân hạng Sản phẩm OCOP Trung ương, đại diện cho bản sắc Việt vươn tầm toàn cầu.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <a
                href="#san-pham-noi-bat"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-[#1F4D3A] hover:bg-[#132E22] text-white font-label-md text-label-md uppercase tracking-wider transition-all duration-200 shadow-sm"
              >
                <span>Khám phá sản phẩm 5 sao</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                href="#cau-chuyen"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-white hover:bg-[#E8EFEA] text-[#1F4D3A] hover:text-[#012d1d] font-label-md text-label-md uppercase tracking-wider transition-all duration-200 border border-[#C89B3C]/30"
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span>Đọc câu chuyện bản địa</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 text-[#717973] font-body-sm text-body-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#1F4D3A]">verified</span>
                <span className="font-semibold text-[#012d1d]">Chứng nhận Quốc gia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#1F4D3A]">public</span>
                <span className="font-semibold text-[#012d1d]">Công khai minh bạch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#1F4D3A]">shield</span>
                <span className="font-semibold text-[#012d1d]">Trích xuất số hóa</span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(1,45,29,0.25)]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFh3O5yUE7FOepJJQmNCtvVKrQQ6Zre39dRvxyd-W56YRlRWZ8D-xFAr6MROxZxGYiNsREVq1qpIc_uYYf63fBb5E-k03mHTZcmbaMRYGQcHGzFpaxhPD2w5JnDQB2hjbVQx58FMe-2xAk-KKqQKYDROs8rJWt9l-DK_GbJoia9hPeub8UdVNQJQFSYBKJk8s4EHTDI4qJVc2s9TzRWhvfbBcR9r6aYzXsC4G"
                alt="Collage of Vietnam OCOP 5-star products: premium green tea leaves from Thai Nguyen, aged fish sauce barrels from Phu Quoc, handwoven brocade textile from An Giang, and specialty coffee beans from Cau Dat Dalat, arranged in an elegant editorial composition with natural lighting."
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              {/* Floating badge on image */}
              <div className="absolute bottom-6 left-6 right-6 lg:left-6 lg:right-auto lg:w-72">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-[#E2DBD0]/60">
                  <div className="flex items-center gap-2 text-[#1F4D3A] font-label-sm text-label-sm uppercase tracking-wider font-semibold mb-2">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    <span>5 SAO QUỐC GIA</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#414844] leading-relaxed">
                    47 sản phẩm đạt tiêu chuẩn cao nhất năm 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#C89B3C]/20 blur-xl" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#1F4D3A]/15 blur-xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}