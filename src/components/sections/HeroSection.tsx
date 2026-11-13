import React from "react";
import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";
import type { HeroBlock } from "@/payload-types";

export interface HeroSectionProps {
  block: HeroBlock;
}

export function HeroSection({ block }: HeroSectionProps) {
  const { eyebrow, heading, subheading, image, primaryCta, secondaryCta } =
    block;

  return (
    <section className="relative w-full overflow-hidden bg-primary text-on-primary">
      {/* Background Image with Fallback */}
      <div className="absolute inset-0">
        <MediaImage
          media={image}
          src="/anh_phong_canh.webp"
          alt="Phong cảnh OCOP Việt Nam"
          fill
          priority
          className="w-full h-full"
          imageClassName="object-cover"
        />
        {/* Dark Emerald Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d]/95 via-[#012d1d]/85 to-black/75" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 flex flex-col justify-center min-h-[540px]">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 max-w-max mb-3">
            <span className="text-tertiary-fixed-dim font-label-md text-label-md uppercase tracking-[0.2em] font-bold">
              {eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-tertiary-fixed-dim/60" />
          </div>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-[1.15] tracking-tight">
          {heading}
        </h1>

        {subheading && (
          <p className="font-body-lg text-base sm:text-lg text-white/90 max-w-2xl mt-5 leading-relaxed font-light">
            {subheading}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 mt-8">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-primary font-semibold text-sm tracking-wide transition-all shadow-md flex items-center gap-2"
            >
              <span>{primaryCta.label}</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          )}

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium text-sm tracking-wide transition-all"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
