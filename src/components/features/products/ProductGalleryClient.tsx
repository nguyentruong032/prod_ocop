"use client";

import React, { useState } from "react";
import { MediaImage } from "@/components/ui/MediaImage";
import type { Media } from "@/payload-types";

export interface ProductGalleryClientProps {
  coverImage?: Media | string | null;
  gallery?: Array<{ image: Media | string; id?: string }> | null;
  productTitle: string;
}

export function ProductGalleryClient({
  coverImage,
  gallery,
  productTitle,
}: ProductGalleryClientProps) {
  const images: Array<Media | string> = [];
  if (coverImage) images.push(coverImage);
  if (gallery && Array.isArray(gallery)) {
    gallery.forEach((item) => {
      if (item.image) images.push(item.image);
    });
  }

  const allImages = images.length > 0 ? images : ["/anh_phong_canh.webp"];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = allImages[activeIndex] || allImages[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Active Image */}
      <div
        className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-surface-container border border-surface-container cursor-zoom-in group shadow-xs"
        onClick={() => setIsLightboxOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="Xem ảnh phóng to"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsLightboxOpen(true);
          }
        }}
      >
        <MediaImage
          media={activeImage}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          imageClassName="object-cover"
        />

        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-xs text-white text-xs font-body-sm flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-[16px]">zoom_in</span>
          <span>Phóng to</span>
        </div>
      </div>

      {/* Thumbnail Strip */}
      {allImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {allImages.map((img, idx) => {
            const isSelected = idx === activeIndex;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative w-20 h-16 sm:w-24 sm:h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/20 scale-102"
                    : "border-surface-container hover:border-outline-variant opacity-75 hover:opacity-100"
                }`}
                aria-label={`Xem ảnh ${idx + 1}`}
              >
                <MediaImage
                  media={img}
                  fill
                  sizes="96px"
                  imageClassName="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Ảnh phóng to của ${productTitle}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Đóng ảnh"
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>

          {allImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) =>
                    prev > 0 ? prev - 1 : allImages.length - 1,
                  );
                }}
                aria-label="Ảnh trước"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[28px]">
                  chevron_left
                </span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) =>
                    prev < allImages.length - 1 ? prev + 1 : 0,
                  );
                }}
                aria-label="Ảnh kế tiếp"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[28px]">
                  chevron_right
                </span>
              </button>
            </>
          )}

          <div
            className="relative max-w-4xl max-h-[85vh] w-full aspect-4/3 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <MediaImage
              media={activeImage}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              imageClassName="object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 text-white text-xs font-body-sm">
            {activeIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductGalleryClient;
