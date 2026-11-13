import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="w-full bg-surface-beige py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-surface-container-lowest rounded-2xl shadow-xl p-8 md:p-14 flex flex-col items-center text-center border border-surface-container">
          <span className="font-serif text-8xl md:text-9xl font-bold text-primary leading-none select-none tracking-tight">
            404
          </span>
          <span className="mt-3 px-4 py-1 rounded-full bg-surface-container font-label-sm text-xs font-semibold text-secondary uppercase tracking-widest">
            Trang không tìm thấy
          </span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-4 tracking-tight">
            Trang bạn tìm không tồn tại hoặc đã thay đổi
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-md mt-3 leading-relaxed text-sm md:text-base">
            Đường dẫn có thể đã được chuyển đổi hoặc không còn khả dụng trên hệ thống OCOP Việt Nam.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/vi"
              className="h-11 px-6 rounded-lg bg-primary text-on-primary hover:bg-primary-action transition-colors inline-flex items-center gap-2 font-semibold text-sm shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">home</span>
              <span>Về Trang chủ</span>
            </Link>
            <Link
              href="/vi/tim-kiem"
              className="h-11 px-6 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors inline-flex items-center gap-2 font-semibold text-sm border border-outline-variant/60"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
              <span>Tìm kiếm tư liệu</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
