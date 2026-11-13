"use client";

import React, { useEffect, useState } from "react";

export interface ReadingProgressClientProps {
  className?: string;
}

export function ReadingProgressClient({
  className = "",
}: ReadingProgressClientProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const percentage = Math.min(
          100,
          Math.max(0, (scrollTop / scrollHeight) * 100),
        );
        setProgress(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-1 bg-surface-container pointer-events-none ${className}`}
      role="progressbar"
      aria-label="Tiến độ đọc bài viết"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-secondary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
