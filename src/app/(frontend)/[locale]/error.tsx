"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import vi from "@/i18n/vi.json";
import en from "@/i18n/en.json";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams();
  const locale = (params?.locale as string) === "en" ? "en" : "vi";
  const dict = locale === "en" ? en.error : vi.error;

  useEffect(() => {
    // Ghi log lỗi phía client, không để lộ stack trace ra giao diện người dùng
    console.error("Global Error boundary caught:", error);
  }, [error]);

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center px-4 py-16 bg-surface">
      <div className="max-w-md w-full bg-surface-container-lowest p-8 rounded-2xl border border-surface-container/80 shadow-xs text-center flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
          <span className="material-symbols-outlined text-[32px]">
            error_outline
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-primary">
          {dict.title}
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {dict.description}
        </p>
        <div className="pt-2 flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => reset()}
            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-xs"
          >
            {dict.retry}
          </button>
          <Link
            href={`/${locale}`}
            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-surface-container-low border border-surface-container text-primary text-sm font-semibold hover:bg-surface-container transition-colors"
          >
            {dict.home}
          </Link>
        </div>
      </div>
    </div>
  );
}
