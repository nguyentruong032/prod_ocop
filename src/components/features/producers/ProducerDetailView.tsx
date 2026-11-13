import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/ui/ProductCard";
import { MediaImage } from "@/components/ui/MediaImage";
import type { Producer, Product, Province } from "@/payload-types";

export interface ProducerDetailViewProps {
  producer: Producer;
  products: Product[];
}

const typeLabels: Record<string, string> = {
  COOPERATIVE: "Hợp tác xã",
  ENTERPRISE: "Doanh nghiệp",
  HOUSEHOLD: "Hộ kinh doanh",
  OTHER: "Cơ sở sản xuất",
};

export function ProducerDetailView({
  producer,
  products,
}: ProducerDetailViewProps) {
  const province =
    typeof producer.province === "object" && producer.province !== null
      ? (producer.province as Province)
      : null;

  const typeLabel = producer.type
    ? typeLabels[producer.type] || producer.type
    : "Chủ thể OCOP";

  return (
    <article className="w-full bg-surface pb-16">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Breadcrumb
          items={[
            { label: "Chủ thể OCOP", href: "/vi/chu-the-ocop" },
            { label: producer.name },
          ]}
        />
      </div>

      {/* Main Profile Header */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-10 border border-surface-container/70 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Avatar / Logo */}
            <div className="lg:col-span-3 flex flex-col items-center sm:items-start">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-surface-container border-2 border-surface-container/80 shadow-xs mb-4">
                <MediaImage
                  media={producer.avatar || producer.coverImage}
                  alt={producer.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 128px, 160px"
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge variant="primary" className="mb-2">
                {typeLabel}
              </Badge>
              {province && (
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider block">
                  {province.name}
                </span>
              )}
            </div>

            {/* Profile Information */}
            <div className="lg:col-span-9 flex flex-col justify-between">
              <div>
                <span className="font-label-md text-xs text-secondary font-bold uppercase tracking-wider block mb-1">
                  HỒ SƠ CHỦ THỂ KINH TẾ NÔNG THÔN
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight tracking-tight mb-4">
                  {producer.name}
                </h1>

                {/* Bio */}
                {producer.bio && (
                  <p className="text-on-surface-variant font-body-md text-base sm:text-lg leading-relaxed mb-6">
                    {producer.bio}
                  </p>
                )}

                {/* Contact Attributes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-surface-container/30 border border-surface-container text-xs sm:text-sm font-body-sm">
                  {producer.address && (
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[18px] text-accent shrink-0 mt-0.5">
                        location_on
                      </span>
                      <div>
                        <span className="text-on-surface-variant/80 block text-xs">
                          Địa chỉ cơ sở
                        </span>
                        <span className="font-medium text-primary">
                          {producer.address}
                        </span>
                      </div>
                    </div>
                  )}

                  {producer.phone && (
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[18px] text-accent shrink-0 mt-0.5">
                        phone
                      </span>
                      <div>
                        <span className="text-on-surface-variant/80 block text-xs">
                          Số điện thoại
                        </span>
                        <a
                          href={`tel:${producer.phone}`}
                          className="font-medium text-primary hover:text-secondary transition-colors"
                        >
                          {producer.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {producer.email && (
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[18px] text-accent shrink-0 mt-0.5">
                        mail
                      </span>
                      <div>
                        <span className="text-on-surface-variant/80 block text-xs">
                          Thư điện tử
                        </span>
                        <a
                          href={`mailto:${producer.email}`}
                          className="font-medium text-primary hover:text-secondary transition-colors truncate block"
                        >
                          {producer.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {producer.website && (
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[18px] text-accent shrink-0 mt-0.5">
                        language
                      </span>
                      <div>
                        <span className="text-on-surface-variant/80 block text-xs">
                          Trang thông tin điện tử
                        </span>
                        <a
                          href={producer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-secondary hover:underline truncate block"
                        >
                          {producer.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producer's Products Section */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container">
          <div>
            <span className="font-label-md text-xs text-secondary font-bold uppercase tracking-wider block">
              DANH MỤC SẢN PHẨM OCOP
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-1">
              Sản phẩm đạt chuẩn của chủ thể ({products.length})
            </h2>
          </div>
          <Link
            href="/vi/chu-the-ocop"
            className="text-xs sm:text-sm font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
          >
            <span>← Quay lại danh bạ</span>
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-2xl p-8 text-center border border-surface-container">
            <span className="material-symbols-outlined text-[40px] text-outline mb-2 block">
              inventory_2
            </span>
            <p className="text-on-surface-variant font-medium">
              Chủ thể hiện chưa có sản phẩm nào được công bố trong cơ sở dữ
              liệu.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id || product.slug} product={product} />
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
