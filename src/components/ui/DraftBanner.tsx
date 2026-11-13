import React from "react";
import Link from "next/link";
import { draftMode } from "next/headers";

export async function DraftBanner() {
  const { isEnabled } = await draftMode();

  if (!isEnabled) {
    return null;
  }

  return (
    <aside
      aria-label="Thông báo chế độ xem trước bản nháp"
      className="w-full bg-amber-600 text-white px-4 py-2 text-xs sm:text-sm font-medium sticky top-0 z-50 flex items-center justify-between shadow-sm"
    >
      <div className="max-w-[1360px] mx-auto w-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">visibility</span>
          <span>Bạn đang xem bản nháp (Draft Mode)</span>
        </div>
        <Link
          href="/api/preview/exit"
          prefetch={false}
          className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-xs font-semibold transition-colors"
        >
          Thoát bản nháp
        </Link>
      </div>
    </aside>
  );
}

export default DraftBanner;
