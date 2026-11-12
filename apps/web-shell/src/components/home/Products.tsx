'use client';

export function Products() {
  return (
    <section className="w-full bg-surface-container-lowest py-16" id="khoi-05-san-pham" data-render="section-header" data-content-key="khoi-05-san-pham">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div>
          <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-bold" data-field="label">
            CHUYÊN MỤC 02
          </span>
          <h2 className="font-headline-md text-headline-md font-bold text-primary mt-1" data-field="title">
            Mỗi sản phẩm, một dấu ấn bản địa.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl" data-field="description">
            Khám phá sản phẩm phân loại theo hạng sao (5 sao, 4 sao, 3 sao) và 3 nhóm ngành trọng tâm.
          </p>
        </div>
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2" data-render="filter-tabs" data-page="san-pham-ocop">
          <button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold whitespace-nowrap">
            Tất cả
          </button>
          <button className="px-4 py-2 rounded-lg bg-surface text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-medium whitespace-nowrap transition-colors">
            Nông sản & Thực phẩm
          </button>
          <button className="px-4 py-2 rounded-lg bg-surface text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-medium whitespace-nowrap transition-colors">
            Dược liệu & Sức khỏe
          </button>
          <button className="px-4 py-2 rounded-lg bg-surface text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-medium whitespace-nowrap transition-colors">
            Thủ công mỹ nghệ & Khác
          </button>
        </div>
        {/* 4 Non-commercial Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8" data-render="product-grid" data-collection="products">
          {/* Product 1 */}
          <article className="bg-surface rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group" data-collection="products" data-slug="tra-dinh-ngoc-tan-cuong">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Artisanal loose leaf green tea leaves dried to perfection on authentic wooden tray with porcelain teacup in Tan Cuong Thai Nguyen tea hills background, natural soft lighting"
                data-img-src="image" data-img-alt="headline"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQZg4eHHL-Oh28ibFos0gPvVhmiL4R3TZDOk1-y7wTnpdxMJwo6TUwjxGNmAAsxr5bcv2KaK1mThBBgmZHxNOWHojD_Y9PpwSk7kun0yH0g1gF-vD-kqyV2SAOpLIsukdPetLMDR41g3tQS0uvuoY1ENAu3fBUtrozsxXvEFse0vQmRnNq-0Nn0Foo0fxGnxCR1z-B-EpJon2EIwIhHmpXB1R8OJj0PUKo8cNdkgo" alt="Trà Đinh Ngọc Tân Cương" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-[#c89b3c] font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span><span data-field="stars">OCOP 5 Sao</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-medium" data-field="category">Nông sản & Thực phẩm · Thái Nguyên</span>
                <h3 className="font-title-editorial text-title-editorial font-bold text-primary mt-1.5 group-hover:text-secondary transition-colors" data-field="name">
                  Trà Đinh Ngọc Tân Cương
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 font-medium" data-field="producer">
                  HTX Trà Tân Cương Thái Nguyên
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">verified</span><span data-field="certifiedYear">Chứng nhận 2026</span></span>
                <span className="font-semibold text-primary group-hover:underline">Xem hồ sơ</span>
              </div>
            </div>
          </article>
          {/* Product 2 */}
          <article className="bg-surface rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group" data-collection="products" data-slug="nuoc-mam-cot-khai-hoan">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Traditional wooden fish sauce barrel vats in Phu Quoc island factory, artisan holding clear amber fish sauce in glass flask, warm artisanal rustic cellar lighting"
                data-img-src="image" data-img-alt="headline"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN9Jj4ZMQELsX8Ii10OfkJmfNhtIo28EehXMLa3pgJZpNUhHkdqpm3Jz8grSjevMSJ-wecMaTLqrnSNvzG5Jc7WiZijWB_SCxhXdcKA86H9U31NkXkxjhAoyqz0G8hwkWB5P5RjSZ1DFUPnypDKPeI0E-RAY2xuv7_c0yS-uRZkwDLgDgxtqqGObiP-Sv8tLAGYeAwxVIOE-sBQDxVtXXPKMFLexNG1yElcXfX470" alt="Nước mắm Cốt Khải Hoàn 43°N" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-[#c89b3c] font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span><span data-field="stars">OCOP 5 Sao</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-medium" data-field="category">Nông sản & Thực phẩm · Kiên Giang</span>
                <h3 className="font-title-editorial text-title-editorial font-bold text-primary mt-1.5 group-hover:text-secondary transition-colors" data-field="name">
                  Nước mắm Cốt Khải Hoàn 43°N
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 font-medium" data-field="producer">
                  Doanh nghiệp Nước mắm Khải Hoàn Phú Quốc
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">verified</span><span data-field="certifiedYear">Chứng nhận 2026</span></span>
                <span className="font-semibold text-primary group-hover:underline">Xem hồ sơ</span>
              </div>
            </div>
          </article>
          {/* Product 3 */}
          <article className="bg-surface rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group" data-collection="products" data-slug="mat-ong-bac-ha-cao-nguyen">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Raw pure mint honey honeycomb and glass jar on stone background amidst purple mint flowers in Dong Van Karst Plateau Ha Giang Vietnam, soft natural mountain light"
                data-img-src="image" data-img-alt="headline"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9H4shWXKL58ZBWGY66jltbMjcDjKuP6h3T90ZOQO_rshI_K-Gy1juBXsNJAmVJzOxfjktLKYHq4LP-F7WlLeDEyX6kjsOsYYWm2fUS9SnlXrvqekLSlGvuEtRkXjFi_WIaS4uds-2VfbqxX_Fsw7MEQJCNvziRFNVDeB-4DxD-vpii2uLaPAV2Dq_gOUfkxI5qRYZ4sSH4ol8vSBGyRE2RgCXfalZOwNEx8yejQc" alt="Mật ong Bạc Hà Cao nguyên đá" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-[#c89b3c] font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span><span data-field="stars">OCOP 4 Sao</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-medium" data-field="category">Dược liệu & Sức khỏe · Hà Giang</span>
                <h3 className="font-title-editorial text-title-editorial font-bold text-primary mt-1.5 group-hover:text-secondary transition-colors" data-field="name">
                  Mật ong Bạc Hà Cao nguyên đá
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 font-medium" data-field="producer">
                  HTX Nông nghiệp Cao nguyên Mèo Vạc
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">verified</span><span data-field="certifiedYear">Chứng nhận 2025</span></span>
                <span className="font-semibold text-primary group-hover:underline">Xem hồ sơ</span>
              </div>
            </div>
          </article>
          {/* Product 4 */}
          <article className="bg-surface rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group" data-collection="products" data-slug="gom-men-tro-phu-lang">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Traditional wood-fired Phu Lang ceramic glazed vase with natural ash glaze sitting on rustic potter workshop bench, earthy terracotta and earthen tones with authentic texture"
                data-img-src="image" data-img-alt="headline"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVAmt1t6f6KrmJqdNkRSK9-zWIGLN9munCAarsnVXUK1FFz3Ec1nAxVfNW4xMOx2m21mRB12TTxS0TQCO53XutEGP3M0sVnGESt9qLdZhvjIcR6plWAjzbd4L1mep8dTzC8ruq9hAm6gEGasVyh9G_1JRE3kPYQFaU8JpgV3ltqxA34whzyqKYcAHbUengbvCeb90hfA9iNvF48hKLs6DTmMEAiwKRZt_HC3R72N8" alt="Gốm men tro Phù Lãng" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-[#c89b3c] font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span><span data-field="stars">OCOP 4 Sao</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-medium" data-field="category">Thủ công mỹ nghệ · Bắc Ninh</span>
                <h3 className="font-title-editorial text-title-editorial font-bold text-primary mt-1.5 group-hover:text-secondary transition-colors" data-field="name">
                  Gốm men tro Phù Lãng
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 font-medium" data-field="producer">
                  Xưởng nghệ nhân Nguyễn Văn Tuấn
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">verified</span><span data-field="certifiedYear">Chứng nhận 2025</span></span>
                <span className="font-semibold text-primary group-hover:underline">Xem hồ sơ</span>
              </div>
            </div>
          </article>
        </div>
        <div className="text-center mt-10">
          <a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-[#153427] text-on-primary font-label-md text-label-md font-medium shadow-xs transition-all"
            href="/san-pham-ocop/index.html">
            <span>Xem tất cả sản phẩm OCOP</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}