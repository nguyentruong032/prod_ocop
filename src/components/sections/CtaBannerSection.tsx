import React from "react";
import Link from "next/link";
import type { CtaBannerBlock } from "@/payload-types";

export interface CtaBannerSectionProps {
  block: CtaBannerBlock;
}

export function CtaBannerSection({ block }: CtaBannerSectionProps) {
  const { heading, text, cta } = block;

  const defaultCta = {
    label: "Gửi bài & Hồ sơ OCOP",
    href: "/vi/gui-bai-ho-so-ocop",
  };

  const finalCta = cta || defaultCta;

  return (
    <section className="w-full bg-primary py-16 lg:py-20 text-on-primary relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-accent/10 pointer-events-none blur-3xl" />
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-primary-fixed/10 pointer-events-none blur-3xl" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative text-center flex flex-col items-center">
        <span className="font-label-md text-xs sm:text-sm uppercase tracking-widest text-accent font-bold mb-3">
          KẾT NỐI CHỦ THỂ OCOP TOÀN QUỐC
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
          {heading}
        </h2>
        {text && (
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mt-4 leading-relaxed font-light">
            {text}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={finalCta.href}
            className="px-8 py-3.5 rounded-lg bg-accent hover:bg-accent-hover text-primary font-bold text-sm tracking-wide transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>{finalCta.label}</span>
            <span className="material-symbols-outlined text-[18px]">
              post_add
            </span>
          </Link>
          <Link
            href="/vi/chu-the-ocop"
            className="px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm tracking-wide transition-all"
          >
            Tra cứu danh bạ chủ thể
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaBannerSection;
