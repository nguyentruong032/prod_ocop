import React from 'react';

export function DigitalCaseStudiesSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg">
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                Hồ sơ Điển hình Thực tế
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-sm md:text-headline-lg text-primary tracking-tight mt-1">
              Nghiên cứu Tình huống: Ba Câu chuyện Đổi mới Thành công
            </h2>
          </div>
          <p className="text-on-surface-variant font-body-sm text-body-sm max-w-md">
            Các mô hình HTX nông nghiệp kiểu mới tiên phong vượt qua rào cản kỹ thuật số, tạo cú hích doanh thu và nâng
            tầm định giá sản vật địa phương.
          </p>
        </div>
        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Case 1: HTX Trà Tân Cương */}
          <article className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Expansive misty terraced tea hills of Tan Cuong Thai Nguyen under gentle sunrise with modern solar-powered weather monitoring IoT sensors placed along organic rows of vibrant emerald green tea leaves"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4GxIwWVrqsK8nGJ0og7cu-20qfrjhEZa2PiXjHspNJEJIWWZf90Xnm_8uRrQC_JoTanRSO3X-mMZETgTw8r7GRBie5dXZ0o-aQROjFufHdxE8VbrK2DytoKuGWKJW_P5aqPt5NhPof5sRvBa_lvgUkX-z1vr2vdBydrkZUjQCZvCJoXYDJh4lW3wVEA9k7-0ith7K7Vv9liH4VDWeIKh5WhuEdKMXFhQ-pLobyNs"
                alt="Đồi chè Tân Cương Thái Nguyên"
               loading="lazy" decoding="async"/>
              <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold text-primary">
                Thái Nguyên
              </div>
              <div className="absolute bottom-3 right-3 bg-primary-container text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">star</span>
                OCOP 5 Sao
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">Tự động hóa Nông trường</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                  HTX Trà Tân Cương: Số hóa Vùng Chè 100 Héc-ta
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Tích hợp 24 trạm vi khí hậu không dây và camera quang phổ. Quy trình làm héo, diệt men, vò và sấy được
                  ghi chép bằng cảm biến nhiệt, giúp chất lượng mẻ chè đinh đồng đều 99,4%.
                </p>
              </div>
              <div className="pt-space-sm space-y-space-xs">
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>Hiệu quả gia tăng:</span>
                  <span className="font-bold text-primary">+42% Doanh thu xuất EU</span>
                </div>
                <a
                  className="font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center gap-1"
                  data-path="ho-so-tra-tan-cuong"
                  href="#"
                >
                  Xem toàn văn báo cáo trường hợp <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Case 2: Mắc ca Đắk Lắk */}
          <article className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="High tech rural agricultural cooperative livestream studio set up in Dak Lak Central Highlands surrounded by raw roasted macadamia nuts and artisanal jars where young Vietnamese farmers host international live sales"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_1RHF-3dQb22316agJyrtsV2yoUcXJEE0rxEvuvXEIZDB9BPqRFQ3ENh9SCUTdYXGxCj_8u346g2rBgs9Y18nLRya5Bq1s8xxke1n7qNvitJ_MPQ8M6J4v3ATMHNeZ78E3xCLf-oEUh2Sz4AzBTUzaae-5ukr_Q5DhJiwyKBXJYq7Xj1m-W-ZTCSm5Elyy15d7xlM4p86HFPspc69ic5NPKf_QuNyJgFCfj2De0s"
                alt="HTX Mắc ca Đắk Lắk"
               loading="lazy" decoding="async"/>
              <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold text-primary">
                Đắk Lắk
              </div>
              <div className="absolute bottom-3 right-3 bg-primary-container text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">star</span>
                OCOP 4 Sao
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  Thương mại Đa kênh Trực tiếp
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                  HTX Mắc ca Đắk Lắk: Livestream Triệu View Xuyên Biên Giới
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Đào tạo 15 bạn trẻ người Êđê trở thành người kể chuyện nông sản. Các phiên phát sóng trực tiếp bằng 3 thứ
                  tiếng (Việt, Anh, Trung) ngay tại vườn thu hút hơn 2 triệu lượt xem và bán sạch 35 tấn hạt sấy nứt.
                </p>
              </div>
              <div className="pt-space-sm space-y-space-xs">
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>Tốc độ tiêu thụ:</span>
                  <span className="font-bold text-secondary">35 tấn nông sản/chiến dịch</span>
                </div>
                <a
                  className="font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center gap-1"
                  data-path="ho-so-mac-ca-dak-lak"
                  href="#"
                >
                  Xem toàn văn báo cáo trường hợp <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Case 3: Nước mắm Khải Hoàn NFC */}
          <article className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Close up detailed view of a customer smartphone scanning an embedded NFC security tag on the artisanal glass neck of traditional Vietnamese fish sauce bottle resting on wooden barrel in heritage aging cellar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0caszidj_SEXwq6wmRDwBq_tg6Kuzvvx6bOxiH1QXNhiTI2rPs1FsO1kHvfY-ZVdHsPG5yEB59bGV04Jj_0ia63DLYa1XmsazEjfapTxOQNLJ8yEdbESbdJmLN3xHv5KwNtdL6k7n58vpGawZ2rtIaM8fHW5rzvT32Zp1dXoN6oPMZmNTaK3LKFO4GPg0dzFPADWwXqxZ8L6yOWWeQF0wgSZFYWP66nhMO9li25g"
                alt="Nước mắm Khải Hoàn NFC"
               loading="lazy" decoding="async"/>
              <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold text-primary">
                Kiên Giang
              </div>
              <div className="absolute bottom-3 right-3 bg-primary-container text-on-primary px-space-xs py-0.5 rounded font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">star</span>
                OCOP 5 Sao
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  Chống giả Mạo Công nghệ cao
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                  Nước Mắm Khải Hoàn: Triển Khai Tem Chống Giả NFC Mã Hóa
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Ứng dụng chip vi mạch siêu mỏng trên nắp chai. Khi chai bị mở ra, mạch điện tử tự đứt, ngăn chặn triệt
                  để hành vi tái sử dụng vỏ chai chính hãng để chứa nước mắm pha tạp chất kém chất lượng.
                </p>
              </div>
              <div className="pt-space-sm space-y-space-xs">
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>Tỷ lệ bảo vệ nhãn:</span>
                  <span className="font-bold text-primary">100% Không thể làm giả</span>
                </div>
                <a
                  className="font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center gap-1"
                  data-path="ho-so-khai-hoan-nfc"
                  href="#"
                >
                  Xem toàn văn báo cáo trường hợp <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
