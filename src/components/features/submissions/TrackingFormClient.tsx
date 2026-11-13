"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

interface TrackingResult {
  trackingCode: string;
  status: "PENDING" | "IN_REVIEW" | "APPROVED" | "REJECTED";
  message: string;
  publicUrl?: string;
}

export function TrackingFormClient() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = code.trim().toUpperCase();
    const cleanEmail = email.trim();

    if (!cleanCode || !cleanEmail) {
      setError("Vui lòng điền đầy đủ mã hồ sơ và địa chỉ email đã đăng ký.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(
        `/api/public/submissions/track?code=${encodeURIComponent(cleanCode)}&email=${encodeURIComponent(cleanEmail)}`,
      );

      const data = (await res.json()) as TrackingResult & { error?: string };

      if (!res.ok || data.error) {
        setError(
          data.error ||
            "Không tìm thấy hồ sơ tương ứng hoặc thông tin xác thực chưa khớp.",
        );
        setIsLoading(false);
        return;
      }

      setResult(data);
      setIsLoading(false);
    } catch {
      setError("Không thể kết nối đến máy chủ tra cứu. Vui lòng thử lại sau.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Tracking Search Form */}
      <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-3xl border border-surface-container shadow-2xs mb-8">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2 text-center">
          Tra Cứu Trạng Thái Xử Lý Hồ Sơ
        </h3>
        <p className="text-xs sm:text-sm text-on-surface-variant text-center mb-6">
          Nhập mã theo dõi được cấp sau khi gửi bài cùng email người gửi để xem tiến độ tiếp nhận từ Ban Biên tập.
        </p>

        <form onSubmit={handleTrack} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
              Mã theo dõi hồ sơ <span className="text-error">*</span>
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="Ví dụ: OCOP-2026-AB12CD"
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface font-mono placeholder:text-outline"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
              Email đăng ký gửi bài <span className="text-error">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@domain.com"
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-outline"
            />
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-error/10 border border-error/20 text-error text-xs sm:text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                error
              </span>
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-white font-semibold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-xs"
          >
            {isLoading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[18px]">
                  progress_activity
                </span>
                <span>Đang tra cứu hệ thống...</span>
              </>
            ) : (
              <>
                <span>Tra Cứu Tiến Độ</span>
                <span className="material-symbols-outlined text-[18px]">
                  search
                </span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Result Display Box */}
      {result && (
        <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-surface-container-high shadow-md animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-surface-container/60 pb-4 mb-4">
            <div>
              <span className="text-xs text-on-surface-variant block font-body-sm">
                Mã hồ sơ:
              </span>
              <span className="font-mono font-bold text-lg text-primary">
                {result.trackingCode}
              </span>
            </div>
            <div>
              {result.status === "APPROVED" && (
                <Badge variant="primary">ĐÃ DUYỆT</Badge>
              )}
              {(result.status === "PENDING" || result.status === "IN_REVIEW") && (
                <Badge variant="secondary">ĐANG XỬ LÝ</Badge>
              )}
              {result.status === "REJECTED" && (
                <Badge variant="outline">CHƯA PHÙ HỢP</Badge>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm sm:text-base text-on-surface leading-relaxed">
              {result.message}
            </p>

            {result.publicUrl && (
              <div className="pt-2">
                <Link
                  href={result.publicUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-container transition-colors shadow-xs"
                >
                  <span>Xem nội dung đã đăng tải</span>
                  <span className="material-symbols-outlined text-[16px]">
                    open_in_new
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackingFormClient;
