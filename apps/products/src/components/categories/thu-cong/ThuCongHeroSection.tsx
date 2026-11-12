import React from 'react';

export function ThuCongHeroSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-12 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded bg-tertiary-fixed text-on-tertiary-fixed">
              <span className="material-symbols-outlined text-[16px] text-tertiary">history_edu</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                BẢO TỒN TINH HOA NGHỀ TRUYỀN THỐNG VIỆT NAM
              </span>
            </div>
            <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-primary tracking-tight">
              Thủ công Mỹ nghệ &amp;
              <br />
              <span className="text-secondary italic font-serif">Nghệ thuật Bản địa OCOP</span>
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant leading-relaxed">
              Không gian lưu trữ, khảo cứu và bảo tồn những tinh hoa được kết tinh qua bàn tay tài hoa của nghệ nhân các
              làng nghề truyền thống: từ gốm men tro Phù Lãng, tơ tằm Vạn Phúc dệt gấm, mây tre đan Phú Vinh đến khảm xà
              cừ và kim hoàn ngàn năm tuổi.
            </p>
            {/* Key Metrics / Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 bg-surface-container-low p-6 rounded-lg">
              <div className="flex flex-col">
                <span className="font-display-hero text-headline-md text-primary font-bold">1.890+</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Tác phẩm &amp; Sản phẩm mỹ nghệ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-hero text-headline-md text-secondary font-bold">650+</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Làng nghề truyền thống</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-hero text-headline-md text-tertiary font-bold">320+</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Nghệ nhân Nhân dân &amp; Ưu tú
                </span>
              </div>
            </div>
          </div>
          {/* Hero Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container">
              <img
                className="w-full h-full object-cover"
                data-alt="Close up photograph of a Vietnamese artisan shaping a clay vase on a pottery wheel in Phù Lãng village, natural warm light streaming from a workshop window, earthy terracotta tones, dust motes floating in air, traditional wooden tools in background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdHo9ZTlJdw2AEzHpnHtnWupMtACnD0X2obwDpw3N-Tips48uxmnqAlBAWnO7n5hpLQar7a5QIfW-qFjWHVXjb-bwjOd5VwcX0aHlximQowM2ROPDkKlkhTzZS1coKu6UfRqY86xr7ENpk_4-3fM84e-z1PjJ_hfrDFR436p8ma2VKjl9nElzcOhPoMBVwwMVplgjCkkKVbt_YC2_HzlNkAFd2GTWVTU1UIqTxcVU"
                alt="Nghệ nhân gốm Phù Lãng"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed">
                  Không gian Di sản Nghề
                </span>
                <p className="font-headline-sm text-headline-sm font-serif mt-1">
                  Nghệ nhân gốm Phù Lãng vần đất trên bàn xoay thủ công
                </p>
                <p className="font-body-sm text-body-sm text-primary-fixed mt-1">
                  Ảnh tư liệu Trung tâm Khảo cứu Di sản Nghề Bản địa, 2026
                </p>
              </div>
            </div>
            {/* Decorative Floating Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-surface-container-lowest p-5 rounded-lg shadow-xl max-w-xs flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                <span className="font-label-md text-label-md uppercase font-semibold text-primary">
                  Di sản Phi vật thể
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                100% sản phẩm được chứng nhận truy xuất làng nghề và thẩm định quy trình chế tác thủ công chuẩn mực.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
