'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/products';
import { getRelatedProducts } from '@/lib/products';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const allImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const currentImage = allImages[selectedImageIndex] as string;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isGalleryOpen) return;
    if (e.key === 'ArrowLeft') {
      setSelectedImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    } else if (e.key === 'ArrowRight') {
      setSelectedImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    } else if (e.key === 'Escape') {
      setIsGalleryOpen(false);
    }
  };

  return (
    <article className="w-full bg-white">
      {/* Breadcrumb */}
      <nav
        className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin py-6"
        aria-label="Đường dẫn"
      >
        <ol className="flex items-center gap-2 font-body-sm text-body-sm text-outline">
          <li>
            <a href="/" className="hover:text-primary-action transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">home</span>
              Trang chủ
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link href="/san-pham-ocop" className="hover:text-primary-action transition-colors">
              Sản phẩm OCOP
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-primary font-medium truncate max-w-[200px]" aria-current="page">
              {product.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero Gallery */}
      <section className="w-full bg-surface-beige py-space-lg lg:py-space-xl">
        <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Main Image Gallery */}
            <div className="space-4">
              {/* Main Image */}
              <div
                className="relative aspect-[4/5] lg:aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-sm"
                role="button"
                tabIndex={0}
                onClick={() => setIsGalleryOpen(true)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsGalleryOpen(true); } }}
                aria-label={`Mở thư viện ảnh ${product.title}`}
              >
                <Image
                  src={currentImage}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {allImages.length > 1 && (
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === selectedImageIndex
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(index); }}
                        aria-label={`Ảnh ${index + 1}`}
                        aria-current={index === selectedImageIndex ? 'true' : 'false'}
                      />
                    ))}
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <button
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:bg-white hover:text-primary-action transition-colors shadow-sm"
                    onClick={(e) => { e.stopPropagation(); setIsGalleryOpen(true); }}
                    aria-label="Phóng to ảnh"
                  >
                    <span className="material-symbols-outlined text-[22px]">fullscreen</span>
                  </button>
                </div>
              </div>

              {/* Thumbnail Strip */}
              {allImages.length > 1 && (
                <div
                  className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
                  role="list"
                  aria-label="Chọn ảnh xem trước"
                >
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      className={`relative flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === selectedImageIndex
                          ? 'border-primary-action shadow-[0_0_0_2px_rgba(31,77,58,0.2)]'
                          : 'border-transparent hover:border-accent/50'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                      aria-label={`Ảnh ${index + 1}`}
                      aria-current={index === selectedImageIndex ? 'true' : 'false'}
                      role="listitem"
                    >
                      <Image
                        src={img}
                        alt={`${product.alt} - xem trước ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between lg:pt-space-md">
              {/* Badge & Category */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary-action text-white shadow-sm">
                  <span className="material-symbols-outlined text-[15px] text-accent" style={{ fontVariationSettings: "'FILL' 1" }}>
                    stars
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-accent">OCOP {product.stars}</span>
                </span>
                <span className="text-terracotta font-label-sm text-label-sm uppercase font-semibold">
                  {product.category} • {product.province}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary mb-4 leading-snug tracking-tight">
                {product.title}
              </h1>

              {/* Producer & Code */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-outline font-body-sm text-body-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">factory</span>
                  <span>
                    <span className="font-medium text-on-surface-variant">Chủ thể SX: </span>
                    {product.producer}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">badge</span>
                  <span>
                    <span className="font-medium text-on-surface-variant">Mã hồ sơ: </span>
                    {product.code}
                  </span>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="mb-8 p-5 lg:p-6 rounded-xl bg-white border border-divider/60">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{product.description}</p>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-divider/60">
                <a
                  href="#nguon-goc"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-action hover:bg-primary-action-hover text-white font-label-md text-label-md uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">source_notes</span>
                  <span>Tìm hiểu nguồn gốc</span>
                </a>
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white font-label-md text-label-md uppercase tracking-wider transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">contact_mail</span>
                  <span>Liên hệ thương hiệu</span>
                </a>
                <button
                  className="w-12 h-12 rounded-lg bg-surface-container-lowest border border-divider hover:bg-surface-beige hover:border-accent flex items-center justify-center text-outline hover:text-primary-action transition-all duration-200"
                  title="Lưu hồ sơ"
                  aria-label="Lưu hồ sơ sản phẩm"
                >
                  <span className="material-symbols-outlined text-[22px]">bookmark</span>
                </button>
                <button
                  className="w-12 h-12 rounded-lg bg-surface-container-lowest border border-divider hover:bg-surface-beige hover:border-accent flex items-center justify-center text-outline hover:text-primary-action transition-all duration-200"
                  title="Chia sẻ"
                  aria-label="Chia sẻ sản phẩm"
                >
                  <span className="material-symbols-outlined text-[22px]">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Thư viện ảnh ${product.title}`}
          onKeyDown={handleKeyDown}
        >
          <button
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setIsGalleryOpen(false)}
            aria-label="Đóng thư viện ảnh"
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
          <button
            className="absolute left-6 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors hidden sm:block"
            onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))}
            aria-label="Ảnh trước"
          >
            <span className="material-symbols-outlined text-[32px]">chevron_left</span>
          </button>
          <button
            className="absolute right-6 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors hidden sm:block"
            onClick={() => setSelectedImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))}
            aria-label="Ảnh sau"
          >
            <span className="material-symbols-outlined text-[32px]">chevron_right</span>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full px-4">
            <Image
              src={allImages[selectedImageIndex] as string}
              alt={`${product.alt} - phóng to ${selectedImageIndex + 1}`}
              className="max-h-[80vh] w-auto mx-auto object-contain"
              priority
            />
            <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex gap-2" role="list" aria-label="Chọn ảnh">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === selectedImageIndex
                      ? 'border-accent'
                      : 'border-white/30 hover:border-white/50'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`Ảnh ${index + 1}`}
                  aria-current={index === selectedImageIndex ? 'true' : 'false'}
                  role="listitem"
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <section
          id="thong-so"
          className="w-full bg-white py-space-3xl lg:py-space-4xl border-y border-divider/60"
        >
          <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
            <header className="max-w-2xl mb-10 lg:mb-14">
              <span className="font-label-md text-label-md text-primary-action uppercase tracking-wider font-semibold">
                Thông số kỹ thuật
              </span>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary mt-2 tracking-tight">
                Chi tiết thông số sản phẩm
              </h2>
            </header>
            <div className="rounded-xl border border-divider overflow-hidden">
              <dl className="divide-y divide-divider/60">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr_2fr] gap-4 px-6 py-5 hover:bg-surface-beige/50 transition-colors"
                  >
                    <dt className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                      {spec.label}
                    </dt>
                    <dd className="font-body-md text-body-md text-on-background">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* Origin Story */}
      {product.originStory && (
        <section
          id="nguon-goc"
          className="w-full bg-surface-beige py-space-3xl lg:py-space-4xl"
        >
          <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
            <header className="max-w-2xl mb-10 lg:mb-14 text-center">
              <span className="font-label-md text-label-md text-primary-action uppercase tracking-wider font-semibold">
                Nguồn gốc & Câu chuyện
              </span>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary mt-2 tracking-tight">
                Hành trình từ gốc rễ đến bàn tay bạn
              </h2>
            </header>
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {product.originStory}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Certifications */}
      {product.certifications && product.certifications.length > 0 && (
        <section
          id="chung-nhan"
          className="w-full bg-white py-space-3xl lg:py-space-4xl"
        >
          <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
            <header className="max-w-2xl mb-10 lg:mb-14 text-center">
              <span className="font-label-md text-label-md text-primary-action uppercase tracking-wider font-semibold">
                Chứng nhận & Chất lượng
              </span>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary mt-2 tracking-tight">
                Các chứng nhận đạt được
              </h2>
            </header>
            <div className="flex flex-wrap justify-center gap-4">
              {product.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-divider hover:border-accent hover:shadow-md transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary-action">
                    verified
                  </span>
                  <span className="font-body-sm text-body-sm text-on-background font-medium">{cert}</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section
        id="san-pham-lien-quan"
        className="w-full bg-white py-space-3xl lg:py-space-4xl border-t border-divider/60"
      >
        <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
          <header className="max-w-2xl mb-10 lg:mb-14">
            <span className="font-label-md text-label-md text-primary-action uppercase tracking-wider font-semibold">
              Sản phẩm liên quan
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary mt-2 tracking-tight">
              Khám phá thêm sản phẩm cùng vùng, cùng danh mục
            </h2>
          </header>
          <RelatedProducts product={product} />
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="lien-he"
        className="w-full bg-primary py-space-3xl lg:py-space-4xl"
      >
        <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin text-center">
          <span className="material-symbols-outlined text-[48px] text-accent mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
            support_agent
          </span>
          <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-white mb-4">
            Muốn liên hệ trực tiếp với thương hiệu?
          </h2>
          <p className="font-body-lg text-body-lg text-divider/80 mb-8 max-w-xl mx-auto">
            Chúng tôi sẵn sàng kết nối bạn với chủ thể sản xuất để trao đổi, hợp tác hoặc đặt hàng số lượng lớn.
          </p>
          <a
            href="/lien-he"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-primary font-label-lg text-label-lg uppercase tracking-wider font-bold transition-colors shadow-lg shadow-accent/30"
          >
            <span className="material-symbols-outlined text-[22px]">contact_mail</span>
            <span>Liên hệ ngay</span>
          </a>
        </div>
      </section>
    </article>
  );
}

function RelatedProducts({ product }: { product: Product }) {
  const relatedProducts = getRelatedProducts(product.slug, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((relatedProduct: Product, index: number) => (
        <Link
          key={relatedProduct.slug}
          href={`/san-pham-ocop/${relatedProduct.slug}`}
          className="group bg-surface-beige rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src={relatedProduct.image}
              alt={relatedProduct.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary-action text-white shadow">
              <span className="material-symbols-outlined text-[15px] text-accent" style={{ fontVariationSettings: "'FILL' 1" }}>
                stars
              </span>
              <span className="font-label-sm text-label-sm font-bold text-accent">OCOP {relatedProduct.stars}</span>
            </div>
          </div>
          <div className="p-5">
            <div className="text-terracotta font-label-sm text-label-sm uppercase font-semibold mb-1">
              {relatedProduct.category} • {relatedProduct.province}
            </div>
            <h3 className="font-headline-sm text-title-editorial font-bold text-primary mb-2 leading-snug line-clamp-2 group-hover:text-terracotta transition-colors">
              {relatedProduct.title}
            </h3>
            <p className="font-body-sm text-body-sm text-outline">
              <span className="font-medium text-on-surface-variant">{relatedProduct.producer}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}