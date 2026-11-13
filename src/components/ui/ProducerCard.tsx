import React from "react";
import Link from "next/link";
import { MediaImage } from "./MediaImage";
import { Badge } from "./Badge";
import { getDocPath } from "@/lib/paths";
import type { Producer, Province } from "@/payload-types";

export interface ProducerCardProps {
  producer: Producer;
  className?: string;
  priority?: boolean;
}

const typeLabels: Record<string, string> = {
  COOPERATIVE: "Hợp tác xã",
  ENTERPRISE: "Doanh nghiệp",
  HOUSEHOLD: "Hộ kinh doanh",
  OTHER: "Cơ sở sản xuất",
};

export function ProducerCard({
  producer,
  className = "",
  priority = false,
}: ProducerCardProps) {
  const href = getDocPath("producers", producer);
  const provinceName =
    typeof producer.province === "object" && producer.province !== null
      ? (producer.province as Province).name
      : undefined;

  const typeLabel = producer.type
    ? typeLabels[producer.type] || producer.type
    : "Chủ thể OCOP";

  return (
    <article
      className={`bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60 ${className}`}
    >
      <div className="relative w-full aspect-16/10 overflow-hidden bg-surface-container">
        <MediaImage
          media={producer.avatar || producer.coverImage}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="primary">{typeLabel}</Badge>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {provinceName && (
            <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider block mb-1">
              {provinceName}
            </span>
          )}
          <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
            <Link href={href}>{producer.name}</Link>
          </h3>

          {producer.address && (
            <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 flex items-start gap-1 line-clamp-1">
              <span className="material-symbols-outlined text-[14px] text-accent shrink-0 mt-0.5">
                location_on
              </span>
              <span className="truncate">{producer.address}</span>
            </p>
          )}

          {producer.bio && (
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
              {producer.bio}
            </p>
          )}
        </div>

        <div className="pt-4 mt-4 border-t border-surface-container/60 flex items-center justify-between text-xs">
          <Link
            href={href}
            className="font-label-sm font-semibold text-primary group-hover:text-secondary inline-flex items-center gap-1"
          >
            <span>Hồ sơ chủ thể</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
          </Link>
          <span className="text-on-surface-variant/70 flex items-center gap-1 font-body-sm">
            <span className="material-symbols-outlined text-[14px] text-accent">
              storefront
            </span>
            <span>Chủ thể OCOP</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProducerCard;
