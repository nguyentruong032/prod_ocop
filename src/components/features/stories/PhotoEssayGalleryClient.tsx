"use client";

import React, { useState } from "react";
import { MediaImage } from "@/components/ui/MediaImage";

export interface PhotoEssaySlide {
  id: string;
  image: string;
  alt: string;
  title: string;
  caption: string;
  photographer?: string;
}

export interface PhotoEssayGalleryProps {
  slides: PhotoEssaySlide[];
  essayTitle?: string;
}

export function PhotoEssayGalleryClient({
  slides,
  essayTitle = "Phóng sự ảnh: Hành trình Di sản & Đất đai",
}: PhotoEssayGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!slides || slides.length === 0) return null;
  const current = slides[currentIndex];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-surface-container-lowest rounded-2xl border border-surface-container/80 shadow-xs overflow-hidden my-8">
      {/* Top Bar */}
      <div className="p-4 sm:p-5 flex items-center justify-between border-b border-surface-container/60 bg-surface-container-low/40">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
            Photo Essay • Phóng sự ảnh tư liệu
          </span>
          <h4 className="text-base sm:text-lg font-bold font-serif text-primary mt-0.5">
            {essayTitle}
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold px-2 py-1 bg-surface-container rounded text-primary">
            {currentIndex + 1} / {slides.length}
          </span>
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            aria-label="Xem ảnh toàn màn hình"
            className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
            title="Mở rộng"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isFullscreen ? "fullscreen_exit" : "fullscreen"}
            </span>
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="relative w-full aspect-16/10 bg-black flex items-center justify-center overflow-hidden">
        <MediaImage
          src={current.image}
          alt={current.alt}
          fill
          className="object-contain"
        />

        {/* Prev / Next Buttons */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Ảnh trước"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-all backdrop-blur-xs"
        >
          <span className="material-symbols-outlined text-[22px]">
            chevron_left
          </span>
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Ảnh tiếp theo"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-all backdrop-blur-xs"
        >
          <span className="material-symbols-outlined text-[22px]">
            chevron_right
          </span>
        </button>
      </div>

      {/* Caption & Metadata */}
      <div className="p-4 sm:p-5 bg-surface-container-lowest flex flex-col gap-2">
        <h5 className="text-sm sm:text-base font-bold text-primary">
          {current.title}
        </h5>
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          {current.caption}
        </p>
        {current.photographer && (
          <div className="text-[11px] text-outline font-medium pt-1">
            Nhiếp ảnh: {current.photographer}
          </div>
        )}
      </div>

      {/* Thumbnails Bar */}
      <div className="p-3 bg-surface-container-low/30 border-t border-surface-container/60 flex items-center gap-2 overflow-x-auto no-scrollbar">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`relative w-16 h-12 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
              idx === currentIndex
                ? "border-primary ring-2 ring-primary/20 scale-105"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <MediaImage src={s.image} alt={s.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default PhotoEssayGalleryClient;
