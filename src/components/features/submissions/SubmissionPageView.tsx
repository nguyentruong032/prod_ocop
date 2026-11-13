"use client";

import React, { useState } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SubmissionFormClient } from "./SubmissionFormClient";
import { TrackingFormClient } from "./TrackingFormClient";
import type { LandingPage, Province } from "@/payload-types";

export interface SubmissionPageViewProps {
  landing: LandingPage | null;
  provinces: Province[];
}

export function SubmissionPageView({
  landing,
  provinces,
}: SubmissionPageViewProps) {
  const [activeTab, setActiveTab] = useState<"submit" | "track">("submit");

  const heading =
    landing?.heading || "Cổng Tiếp Nhận Dữ Liệu &amp; Hồ Sơ OCOP";
  const intro =
    landing?.intro ||
    "Nơi tiếp nhận bài viết đóng góp từ bạn đọc, hồ sơ số hóa chủ thể và sản phẩm OCOP từ các địa phương trên toàn quốc.";

  return (
    <div className="w-full bg-background min-h-screen">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Gửi bài & Hồ sơ OCOP" }]} className="mb-6" />

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs sm:text-sm font-label-md font-semibold text-secondary uppercase tracking-widest block mb-2">
            CỔNG TIẾP NHẬN TRỰC TUYẾN
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary tracking-tight leading-tight mb-3">
            {heading}
          </h1>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center p-1.5 bg-surface-container rounded-2xl max-w-md mx-auto mb-10 border border-surface-container-high shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab("submit")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === "submit"
                ? "bg-surface-container-lowest text-primary shadow-xs"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              edit_note
            </span>
            <span>Gửi bài / Hồ sơ</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("track")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === "track"
                ? "bg-surface-container-lowest text-primary shadow-xs"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              search_check
            </span>
            <span>Tra cứu trạng thái</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "submit" ? (
          <SubmissionFormClient provinces={provinces} />
        ) : (
          <TrackingFormClient />
        )}
      </div>
    </div>
  );
}

export default SubmissionPageView;
