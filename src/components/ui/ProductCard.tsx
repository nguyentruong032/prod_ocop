import React from "react";
import Link from "next/link";
import { MediaImage } from "./MediaImage";
import { Badge } from "./Badge";
import { getDocPath } from "@/lib/paths";
import type { Product, Province, Producer } from "@/payload-types";

export interface ProductCardProps {
  product: Product;
  className?: string;
  priority?: boolean;
}

const categoryLabels: Record<string, string> = {
  NONG_SAN_THUC_PHAM: "Nông sản & Thực phẩm",
  DUOC_LIEU_SUC_KHOE: "Dược liệu & Sức khỏe",
  THU_CONG_MY_NGHE: "Thủ công mỹ nghệ",
  DICH_VU_DU_LICH: "Dịch vụ du lịch nông thôn",
  DO_UONG: "Đồ uống",
  SINH_VAT_CANH: "Sinh vật cảnh",
};

export function ProductCard({
  product,
  className = "",
  priority = false,
}: ProductCardProps) {
  const href = getDocPath("products", product);
  const provinceName =
    typeof product.province === "object" && product.province !== null
      ? (product.province as Province).name
      : undefined;

  const producerName =
    typeof product.producer === "object" && product.producer !== null
      ? (product.producer as Producer).name
      : undefined;

  const categoryLabel = product.category
    ? categoryLabels[product.category] || product.category
    : null;

  return (
    <article
      className={`bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60 ${className}`}
    >
      <div className="relative w-full aspect-4/3 overflow-hidden bg-surface-container">
        <MediaImage
          media={product.coverImage}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="stars" stars={product.stars}>
            {product.stars} Sao
          </Badge>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-on-surface-variant mb-1 font-body-sm">
            {provinceName && (
              <span className="font-semibold text-secondary uppercase tracking-wider">
                {provinceName}
              </span>
            )}
            {categoryLabel && (
              <span className="text-on-surface-variant/80 truncate max-w-[140px]">
                {categoryLabel}
              </span>
            )}
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug mt-1">
            <Link href={href}>{product.title}</Link>
          </h3>

          {producerName && (
            <p className="font-body-sm text-xs text-on-surface-variant/90 mt-1.5 flex items-center gap-1 truncate">
              <span className="material-symbols-outlined text-[14px] text-outline">
                storefront
              </span>
              <span className="truncate">{producerName}</span>
            </p>
          )}

          {product.excerpt && (
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
              {product.excerpt}
            </p>
          )}
        </div>

        <div className="pt-4 mt-4 border-t border-surface-container/60 flex items-center justify-between">
          <Link
            href={href}
            className="font-label-sm text-xs font-semibold text-primary group-hover:text-secondary inline-flex items-center gap-1"
          >
            <span>Chi tiết sản phẩm</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
          </Link>
          <span className="text-xs text-on-surface-variant/70 flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[14px] text-accent">
              verified
            </span>
            <span>OCOP</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
