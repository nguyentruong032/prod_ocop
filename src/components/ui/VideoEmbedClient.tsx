"use client";

import React, { useState } from "react";
import { MediaImage } from "./MediaImage";
import type { Media } from "@/payload-types";

export interface VideoEmbedClientProps {
  videoUrl: string;
  title?: string;
  coverImage?: Media | string | null;
  className?: string;
  aspectRatio?: string;
}

function getEmbedUrl(rawUrl: string): {
  embedUrl: string | null;
  provider: "youtube" | "vimeo" | null;
} {
  try {
    const url = new URL(rawUrl);
    const host = url.hostname.toLowerCase();

    // YouTube: exact host matching without includes
    if (
      host === "youtube.com" ||
      host === "www.youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtu.be"
    ) {
      let videoId: string | null = null;
      if (host === "youtu.be") {
        videoId = url.pathname.replace(/^\/+/, "").split("/")[0] || null;
      } else {
        videoId = url.searchParams.get("v");
      }

      if (videoId) {
        return {
          embedUrl: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`,
          provider: "youtube",
        };
      }
    }

    // Vimeo: exact host matching without includes
    if (
      host === "vimeo.com" ||
      host === "www.vimeo.com" ||
      host === "player.vimeo.com"
    ) {
      const match = url.pathname.match(/\/(\d+)/);
      if (match && match[1]) {
        return {
          embedUrl: `https://player.vimeo.com/video/${encodeURIComponent(match[1])}?autoplay=1`,
          provider: "vimeo",
        };
      }
    }

    return { embedUrl: null, provider: null };
  } catch {
    return { embedUrl: null, provider: null };
  }
}

export function VideoEmbedClient({
  videoUrl,
  title = "Video phóng sự OCOP",
  coverImage,
  className = "",
  aspectRatio = "aspect-16/9",
}: VideoEmbedClientProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { embedUrl, provider } = getEmbedUrl(videoUrl);

  if (!embedUrl || !provider) {
    if (!videoUrl) return null;
    return (
      <div className={`my-4 ${className}`.trim()}>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary underline break-all font-body-sm"
        >
          {title || videoUrl}
        </a>
      </div>
    );
  }

  if (isPlaying) {
    return (
      <div
        className={`relative ${aspectRatio} rounded-2xl overflow-hidden bg-black shadow-lg ${className}`}
      >
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative ${aspectRatio} rounded-2xl overflow-hidden bg-surface-container group cursor-pointer shadow-md border border-surface-container/70 ${className}`}
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      aria-label={`Phát video: ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
    >
      <MediaImage
        media={coverImage || "/anh_phong_canh.webp"}
        fill
        sizes="(max-width: 1024px) 100vw, 75vw"
        className="w-full h-full group-hover:scale-105 transition-transform duration-700"
        imageClassName="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 text-white group-hover:bg-primary group-hover:scale-110 flex items-center justify-center shadow-xl backdrop-blur-xs transition-all duration-300 ring-4 ring-white/30">
          <span className="material-symbols-outlined text-[36px] sm:text-[44px] ml-1">
            play_arrow
          </span>
        </div>
      </div>

      {/* Overlay caption */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <span className="text-xs uppercase tracking-widest text-accent font-bold block mb-1 font-label-sm">
          PHÓNG SỰ VIDEO
        </span>
        <h3 className="font-serif text-base sm:text-lg font-bold line-clamp-1">
          {title}
        </h3>
      </div>
    </div>
  );
}
