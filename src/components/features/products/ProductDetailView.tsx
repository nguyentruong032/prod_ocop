import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/ui/ProductCard";
import { RichText } from "@/components/ui/RichText";
import { MediaImage } from "@/components/ui/MediaImage";
import { ProductGalleryClient } from "./ProductGalleryClient";
import { getDocPath } from "@/lib/paths";
import type { Product, Producer, Province } from "@/payload-types";

export interface ProductDetailViewProps {
  product: Product;
  relatedProducts?: Product[];
}

const categoryLabels: Record<string, string> = {
  NONG_SAN_THUC_PHAM: "Nông sản & Thực phẩm",
  DUOC_LIEU_SUC_KHOE: "Dược liệu & Sức khỏe",
  THU_CONG_MY_NGHE: "Thủ công mỹ nghệ",
  DICH_VU_DU_LICH: "Dịch vụ du lịch nông thôn",
  DO_UONG: "Đồ uống",
  SINH_VAT_CANH: "Sinh vật cảnh",
  KHAC: "Ngành hàng khác",
};

export function ProductDetailView({
  product,
  relatedProducts = [],
}: ProductDetailViewProps) {
  const producer =
    typeof product.producer === "object" && product.producer !== null
      ? (product.producer as Producer)
      : null;

  const province =
    typeof product.province === "object" && product.province !== null
      ? (product.province as Province)
      : null;

  const categoryName = product.category
    ? categoryLabels[product.category] || product.category
    : "";

  const breadcrumbs = [
    { label: "Sản phẩm OCOP", href: "/vi/san-pham-ocop" },
    ...(categoryName
      ? [
          {
            label: categoryName,
            href:
              product.category === "NONG_SAN_THUC_PHAM"
                ? "/vi/san-pham-ocop/nong-san-va-thuc-pham"
                : product.category === "DUOC_LIEU_SUC_KHOE"
                  ? "/vi/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe"
                  : product.category === "THU_CONG_MY_NGHE"
                    ? "/vi/san-pham-ocop/thu-cong-my-nghe"
                    : undefined,
          },
        ]
      : []),
    { label: product.title },
  ];

  return (
    <article className="w-full bg-surface pb-16">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Main Hero Overview */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-10 border border-surface-container/70 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Gallery Column */}
            <div className="lg:col-span-6">
              <ProductGalleryClient
                coverImage={product.coverImage}
                gallery={product.gallery}
                productTitle={product.title}
              />
            </div>

            {/* Product Meta Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <Badge variant="stars" stars={product.stars}>
                    {product.stars} Sao Quốc Gia
                  </Badge>
                  {categoryName && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-container text-on-surface-variant">
                      {categoryName}
                    </span>
                  )}
                  {province && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary uppercase tracking-wider">
                      {province.name}
                    </span>
                  )}
                </div>

                {/* Main H1 Title */}
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight tracking-tight mb-4">
                  {product.title}
                </h1>

                {/* Producer Quick Info */}
                {producer && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-container/40 border border-surface-container mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-surface-container shrink-0 flex items-center justify-center overflow-hidden">
                      {producer.avatar ? (
                        <MediaImage
                          media={producer.avatar}
                          alt={producer.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-primary text-[24px]">
                          storefront
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-on-surface-variant block font-medium">
                        Chủ thể sản xuất
                      </span>
                      <Link
                        href={getDocPath("producers", producer)}
                        className="font-serif font-bold text-sm sm:text-base text-primary hover:text-secondary transition-colors truncate block"
                      >
                        {producer.name}
                      </Link>
                    </div>
                    <Link
                      href={getDocPath("producers", producer)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-surface-container text-primary hover:bg-surface transition-colors shrink-0"
                    >
                      Hồ sơ chủ thể
                    </Link>
                  </div>
                )}

                {/* Excerpt */}
                {product.excerpt && (
                  <div className="text-on-surface-variant font-body-md text-base leading-relaxed mb-6">
                    {product.excerpt}
                  </div>
                )}

                {/* Quick Attributes */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-surface-container text-xs sm:text-sm font-body-sm">
                  <div>
                    <span className="text-on-surface-variant block mb-1">
                      Hạng sao OCOP
                    </span>
                    <span className="font-bold text-primary flex items-center gap-1">
                      <span className="text-accent">★</span> {product.stars} Sao
                    </span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block mb-1">
                      Nguồn gốc xuất xứ
                    </span>
                    <span className="font-bold text-primary">
                      {province ? province.name : "Việt Nam"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#thong-tin-chi-tiet"
                  className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-action text-white text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    menu_book
                  </span>
                  <span>Xem chi tiết câu chuyện</span>
                </a>

                {producer && (
                  <Link
                    href={getDocPath("producers", producer)}
                    className="px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary/5 text-sm font-semibold transition-all inline-flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      contact_support
                    </span>
                    <span>Liên hệ chủ thể</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Content & Details Section */}
      <section
        id="thong-tin-chi-tiet"
        className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Story & Lexical Body */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container/70 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-6 pb-4 border-b border-surface-container flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                verified
              </span>
              <span>Hồ sơ & Câu chuyện Sản phẩm</span>
            </h2>

            {product.content && Object.keys(product.content).length > 0 ? (
              <RichText content={product.content} />
            ) : product.excerpt ? (
              <div className="prose max-w-none text-on-surface-variant leading-relaxed">
                <p className="text-base sm:text-lg mb-4">{product.excerpt}</p>
                <p className="text-base text-on-surface-variant/90 leading-relaxed">
                  Sản phẩm đã được Hội đồng đánh giá, phân hạng sản phẩm OCOP
                  cấp Quốc gia thẩm định nghiêm ngặt theo Bộ tiêu chí OCOP Việt
                  Nam, đáp ứng đầy đủ các tiêu chuẩn kỹ thuật về an toàn thực
                  phẩm, chỉ dẫn địa lý, sở hữu trí tuệ và bảo vệ môi trường nông
                  thôn.
                </p>
              </div>
            ) : (
              <p className="text-on-surface-variant">
                Thông tin chi tiết về sản phẩm đang được cập nhật.
              </p>
            )}
          </div>

          {/* Sidebar: Producer and Origin Details */}
          <div className="lg:col-span-4 space-y-6">
            {producer && (
              <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container/70 shadow-2xs">
                <span className="font-label-md text-xs text-secondary font-bold uppercase tracking-wider block mb-2">
                  CHỦ THỂ SẢN XUẤT
                </span>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">
                  {producer.name}
                </h3>
                {producer.address && (
                  <p className="text-xs sm:text-sm text-on-surface-variant flex items-start gap-2 mb-3">
                    <span className="material-symbols-outlined text-[16px] text-accent shrink-0 mt-0.5">
                      location_on
                    </span>
                    <span>{producer.address}</span>
                  </p>
                )}
                {producer.phone && (
                  <p className="text-xs sm:text-sm text-on-surface-variant flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-[16px] text-accent shrink-0">
                      phone
                    </span>
                    <span>{producer.phone}</span>
                  </p>
                )}
                {producer.email && (
                  <p className="text-xs sm:text-sm text-on-surface-variant flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-[16px] text-accent shrink-0">
                      mail
                    </span>
                    <span className="truncate">{producer.email}</span>
                  </p>
                )}
                <Link
                  href={getDocPath("producers", producer)}
                  className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs text-center block transition-colors"
                >
                  Xem toàn bộ sản phẩm của chủ thể →
                </Link>
              </div>
            )}

            {/* Quality Standard Card */}
            <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10">
              <span className="font-label-md text-xs text-primary font-bold uppercase tracking-wider block mb-2">
                CAM KẾT CHẤT LƯỢNG OCOP
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    100% Nguyên liệu đặc trưng từ vùng trồng được kiểm định
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Quy trình sản xuất an toàn theo chuẩn VietGAP / GlobalGAP /
                    ISO
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Được truy xuất nguồn gốc số hóa trên Cổng thông tin OCOP
                    Quốc gia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-label-md text-xs text-secondary font-bold uppercase tracking-wider block">
                KHÁM PHÁ THÊM
              </span>
              <h2 className="font-serif text-2xl font-bold text-primary mt-1">
                Sản phẩm OCOP cùng danh mục
              </h2>
            </div>
            <Link
              href="/vi/san-pham-ocop"
              className="text-xs sm:text-sm font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
            >
              <span>Xem tất cả</span>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id || p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
