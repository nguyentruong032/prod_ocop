import React from "react";
import Link from "next/link";
import { MediaImage } from "./MediaImage";
import { Badge } from "./Badge";
import { getDocPath } from "@/lib/paths";
import type { Destination, Province } from "@/payload-types";

export interface DestinationCardProps {
  destination: Destination;
  className?: string;
  priority?: boolean;
}

const kindLabels: Record<string, string> = {
  CRAFT_VILLAGE: "Làng nghề truyền thống",
  ECO_TOUR: "Du lịch sinh thái",
  DESTINATION: "Điểm đến văn hóa",
};

export function DestinationCard({
  destination,
  className = "",
  priority = false,
}: DestinationCardProps) {
  const href = getDocPath("destinations", destination);
  const provinceName =
    typeof destination.province === "object" && destination.province !== null
      ? (destination.province as Province).name
      : undefined;

  const kindLabel = kindLabels[destination.kind] || "Điểm đến OCOP";

  return (
    <article
      className={`bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col group border border-surface-container/60 ${className}`}
    >
      <div className="relative w-full aspect-16/10 overflow-hidden bg-surface-container">
        <MediaImage
          media={destination.coverImage}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="primary">{kindLabel}</Badge>
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
            <Link href={href}>{destination.title}</Link>
          </h3>
          {destination.excerpt && (
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
              {destination.excerpt}
            </p>
          )}
        </div>

        <div className="pt-4 mt-4 border-t border-surface-container/60 flex items-center justify-between text-xs">
          <Link
            href={href}
            className="font-label-sm font-semibold text-primary group-hover:text-secondary inline-flex items-center gap-1"
          >
            <span>Khám phá điểm đến</span>
            <span className="material-symbols-outlined text-[14px]">
              arrow_forward
            </span>
          </Link>
          <span className="text-on-surface-variant/70 flex items-center gap-1 font-body-sm">
            <span className="material-symbols-outlined text-[14px] text-accent">
              explore
            </span>
            <span>Trải nghiệm</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
