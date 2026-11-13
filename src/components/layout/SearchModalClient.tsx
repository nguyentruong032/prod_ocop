"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export interface SearchModalClientProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SuggestionItem {
  title: string;
  url: string;
  kind?: string;
}

export function SearchModalClient({ isOpen, onClose }: SearchModalClientProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setSuggestions([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Debounce suggest API
  useEffect(() => {
    if (!query.trim() || query.length < 2) {
      setSuggestions([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/public/search/suggest?q=${encodeURIComponent(query.trim())}`,
        );
        if (res.ok) {
          const data = await res.json();
          setSuggestions(Array.isArray(data) ? data : data.items || []);
        } else {
          setSuggestions([]);
        }
      } catch {
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      onClose();
      router.push(`/vi/tim-kiem?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleSelectSuggestion = (url: string) => {
    onClose();
    router.push(url);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Tìm kiếm tư liệu OCOP"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center border-b border-surface-container p-4"
        >
          <span className="material-symbols-outlined text-[24px] text-outline ml-1 mr-3 shrink-0">
            search
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm sản phẩm, bài viết, sự kiện, chủ thể..."
            className="flex-1 bg-transparent text-on-surface text-base md:text-lg focus:outline-none placeholder:text-outline font-body-md"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-outline hover:text-on-surface mr-2"
              aria-label="Xóa từ khóa"
            >
              <span className="material-symbols-outlined text-[20px]">
                clear
              </span>
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold rounded bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors"
          >
            ESC
          </button>
        </form>

        <div className="max-h-96 overflow-y-auto p-4">
          {isLoading && (
            <div className="py-6 text-center text-on-surface-variant text-sm font-body-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin text-[18px]">
                progress_activity
              </span>
              <span>Đang tìm kiếm gợi ý...</span>
            </div>
          )}

          {!isLoading && suggestions.length > 0 && (
            <div className="space-y-1">
              <span className="text-xs font-semibold text-outline px-2 uppercase tracking-wider block mb-2">
                Gợi ý kết quả
              </span>
              {suggestions.map((item: SuggestionItem, idx: number) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectSuggestion(item.url)}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-surface-beige transition-colors flex items-center justify-between group"
                >
                  <span className="text-on-surface group-hover:text-primary font-medium text-sm">
                    {item.title}
                  </span>
                  {item.kind && (
                    <span className="text-xs px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                      {item.kind}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {!isLoading && query.trim() && suggestions.length === 0 && (
            <div className="py-8 text-center text-on-surface-variant font-body-sm">
              <p className="text-sm">
                Nhấn{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-surface-container font-mono text-xs">
                  Enter
                </kbd>{" "}
                để tìm kiếm toàn bộ với từ khóa "{query}"
              </p>
            </div>
          )}

          {!query.trim() && (
            <div className="py-4 text-center text-outline text-xs font-body-sm">
              Nhập ít nhất 2 ký tự để nhận gợi ý tìm kiếm tức thì.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModalClient;
