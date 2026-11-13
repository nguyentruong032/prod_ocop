"use client";

import React, { useState } from "react";

export function NewsletterFormClient() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/public/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Đăng ký thất bại. Vui lòng thử lại.");
      }

      setStatus("success");
      setFeedback(data.message || "Đăng ký nhận bản tin thành công!");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Đã có lỗi xảy ra. Vui lòng thử lại."
      );
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email nhận bản tin OCOP..."
          required
          disabled={status === "loading" || status === "success"}
          className="flex-1 px-4 py-2.5 rounded-lg bg-surface-container-lowest/15 border border-on-primary-container/30 text-white placeholder:text-on-primary-container/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-5 py-2.5 rounded-lg bg-accent text-on-secondary-container hover:bg-white text-xs sm:text-sm font-bold transition-all shadow-xs disabled:opacity-50 shrink-0"
        >
          {status === "loading" ? "Đang gửi..." : "Đăng ký"}
        </button>
      </form>

      {feedback && (
        <p
          className={`text-xs ${
            status === "success" ? "text-emerald-300 font-medium" : "text-rose-300"
          }`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}

export default NewsletterFormClient;
