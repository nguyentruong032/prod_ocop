'use client';

import React, { useState } from 'react';

export function StarMetricsAndTabsSection() {
  const [activeStar, setActiveStar] = useState<'all' | '5' | '4' | '3'>('5');

  return (
    <div className="relative flex h-auto w-full flex-col bg-[#f9fbfa] overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-6 md:px-16 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1280px] w-full flex-1">
            {/* Thống kê nhanh Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-6">
              <div className="flex flex-col justify-between rounded p-6 bg-surface-container-lowest border border-[#d5e1dc] shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 text-tertiary-fixed-dim/10 pointer-events-none">
                  <span
                    className="material-symbols-outlined text-8xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-on-surface-variant text-sm font-semibold tracking-wide">
                    Sản phẩm 5 Sao Quốc gia
                  </p>
                  <span className="text-xs bg-[#f4ebe1] text-[#984724] px-2.5 py-0.5 rounded font-bold">
                    Cấp Thủ tướng công nhận
                  </span>
                </div>
                <p className="text-primary text-3xl font-bold font-headline-sm my-2">42 Sản phẩm</p>
                <div className="flex items-center gap-1.5 text-[#07882c] text-sm font-medium">
                  <span className="material-symbols-outlined text-base">verified</span>
                  <span>100% Đạt chuẩn xuất khẩu &amp; Sở hữu trí tuệ</span>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded p-6 bg-surface-container-lowest border border-[#d5e1dc] shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-on-surface-variant text-sm font-semibold tracking-wide">
                    Sản phẩm 4 Sao Cấp tỉnh/Trung ương
                  </p>
                  <span className="text-xs bg-[#eaf0ee] text-[#1b4332] px-2.5 py-0.5 rounded font-bold">
                    Tiềm năng 5 sao
                  </span>
                </div>
                <p className="text-primary text-3xl font-bold font-headline-sm my-2">2.450+ Sản phẩm</p>
                <div className="flex items-center gap-1.5 text-[#07882c] text-sm font-medium">
                  <span className="material-symbols-outlined text-base">trending_up</span>
                  <span>+18.4% Thẩm định nâng cấp chuỗi giá trị</span>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded p-6 bg-surface-container-lowest border border-[#d5e1dc] shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-on-surface-variant text-sm font-semibold tracking-wide">
                    Sản phẩm 3 Sao Bản địa đặc trưng
                  </p>
                  <span className="text-xs bg-[#eaf0ee] text-[#1b4332] px-2.5 py-0.5 rounded font-bold">
                    Quy mô cơ sở
                  </span>
                </div>
                <p className="text-primary text-3xl font-bold font-headline-sm my-2">8.300+ Sản phẩm</p>
                <div className="flex items-center gap-1.5 text-[#07882c] text-sm font-medium">
                  <span className="material-symbols-outlined text-base">store</span>
                  <span>+12.6% Mở rộng thị trường liên vùng</span>
                </div>
              </div>
            </div>

            {/* Bộ điều hướng Tab Hạng Sao */}
            <div className="border-b border-[#d5e1dc] my-4 overflow-x-auto scrollbar-none">
              <div className="flex min-w-max gap-8">
                <button
                  type="button"
                  onClick={() => setActiveStar('all')}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-3.5 pt-3 transition-colors ${
                    activeStar === 'all'
                      ? 'border-b-primary text-primary'
                      : 'border-b-transparent text-[#5f8676] hover:text-primary'
                  }`}
                >
                  <span className="text-sm font-bold tracking-wide">Tất cả hạng sao</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStar('5')}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-3.5 pt-3 transition-colors ${
                    activeStar === '5'
                      ? 'border-b-primary text-primary'
                      : 'border-b-transparent text-[#5f8676] hover:text-primary'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500 font-bold tracking-widest">★★★★★</span>
                    <span className="text-sm font-bold tracking-wide">5 Sao Quốc gia</span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant font-normal">
                    Tinh hoa xuất khẩu hàng đầu
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStar('4')}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-3.5 pt-3 transition-colors ${
                    activeStar === '4'
                      ? 'border-b-primary text-primary'
                      : 'border-b-transparent text-[#5f8676] hover:text-primary'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500/80 font-bold tracking-widest">★★★★</span>
                    <span className="text-sm font-bold tracking-wide">4 Sao Cấp tỉnh/Trung ương</span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant font-normal">
                    Chất lượng vượt trội, phân phối toàn quốc
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStar('3')}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-3.5 pt-3 transition-colors ${
                    activeStar === '3'
                      ? 'border-b-primary text-primary'
                      : 'border-b-transparent text-[#5f8676] hover:text-primary'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500/60 font-bold tracking-widest">★★★</span>
                    <span className="text-sm font-bold tracking-wide">3 Sao Cấp huyện/Tỉnh</span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant font-normal">
                    Đặc sản bản địa, khởi sắc nông thôn
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
