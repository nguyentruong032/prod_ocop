'use client';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-on-primary" data-render="hero" data-page="home">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-alt="Majestic panoramic terraced rice fields and ancient tea hills of northwest Vietnam covered in tranquil morning mist and atmospheric clouds, warm natural morning light filtering through deep emerald foliage, documentary heritage photography style"
        data-img-src="backgroundImage"
        style={{
          backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCRwbF6mSpUS165Lv0kK1ub0j1Apqyo4pF_mGskJtCS79ZyQace58J4jJ_boXAfaG2arlnSBBCfN7ZOsLd2m3tXK4daMV5gm3TJuSGd-MustQf0fesUVlFNC_oIzVK-hKQ0XoIo8uhc1D_kNsXjdp70SjAVv8EPcAOZkWaTbq7GcZrNmHyegqmNl1Rr5hq-2aP05rY9aB1JCkZ1mVtOb28ehxWMCcFihw7sUKN6b64\')',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d]/90 via-[#012d1d]/75 to-black/80" />
      <div className="relative max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin py-24 md:py-32 lg:py-36 flex flex-col justify-center min-h-[580px]">
        <div className="inline-flex items-center gap-2 max-w-max">
          <span className="text-tertiary-fixed-dim font-label-md text-label-md uppercase tracking-[0.2em] font-bold" data-field="eyebrow">
            Khám phá OCOP Việt Nam
          </span>
          <span className="w-8 h-[1px] bg-tertiary-fixed-dim/60" />
        </div>
        <h1 className="font-headline-lg text-headline-lg md:text-[44px] md:leading-[1.18] text-surface-container-lowest font-bold max-w-3xl mt-4" data-field="headline">
          Những giá trị bản địa, những câu chuyện vượt thời gian.
        </h1>
        <p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-2xl mt-5 font-light" data-field="description">
          Từ vùng nguyên liệu đặc trưng đến bàn tay người làm nghề, mỗi sản phẩm OCOP đều gắn với văn hóa và đời sống
          của từng miền đất.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a className="px-6 py-3 rounded-lg bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-md text-label-md font-medium tracking-wide transition-all shadow-sm"
            href="#khoi-06-cau-chuyen" data-field="ctaPrimary.label" data-href="ctaPrimary.href">
            Khám phá câu chuyện
          </a>
          <a className="px-6 py-3 rounded-lg bg-transparent border border-surface-container-lowest/60 hover:bg-surface-container-lowest/10 text-surface-container-lowest font-label-md text-label-md font-medium tracking-wide transition-all"
            href="#khoi-05-san-pham" data-field="ctaSecondary.label" data-href="ctaSecondary.href">
            Khám phá sản phẩm
          </a>
        </div>
      </div>
    </section>
  );
}