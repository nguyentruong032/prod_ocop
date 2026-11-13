'use client';

import React, { useState } from 'react';

export function SearchResultsClient() {
  const [searchTerm, setSearchTerm] = useState('Trà Tân Cương');
  const [activeChip, setActiveChip] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalSearchTerm, setModalSearchTerm] = useState('Trà');

  const chips = [
    { id: 'all', label: 'Tất cả', count: 24 },
    { id: 'san-pham', label: 'Sản phẩm OCOP', count: 6 },
    { id: 'cau-chuyen', label: 'Câu chuyện', count: 5 },
    { id: 'chu-the', label: 'Chủ thể OCOP', count: 3 },
    { id: 'diem-den', label: 'Điểm đến & Du lịch', count: 2 },
    { id: 'hoi-nhap', label: 'Bài Hội nhập', count: 2 },
    { id: 'tin-tuc', label: 'Tin tức', count: 3 },
    { id: 'su-kien', label: 'Sự kiện', count: 2 },
    { id: 'goc-nhin', label: 'Góc nhìn bạn đọc', count: 1 },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* KHỐI 02 – ĐẦU TRANG TÌM KIẾM & CHIP LỌC LOẠI NỘI DUNG (Nền Kem ấm #F8F5EE) */}
      <section className="w-full bg-[#F8F5EE] py-space-xl">
        <div className="max-w-[1360px] mx-auto px-gutter flex flex-col gap-space-lg">
          {/* Ô tìm kiếm lớn trang trọng ở giữa trang */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            <form
              className="w-full flex items-center bg-surface-container-lowest rounded-xl shadow-md p-2 gap-space-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="pl-3 flex items-center text-primary">
                <span className="material-symbols-outlined text-[28px]">search</span>
              </div>
              <input
                className="w-full bg-transparent font-body-lg text-body-lg text-on-surface placeholder:italic placeholder:text-outline focus:outline-none px-2"
                placeholder="Tìm sản phẩm, câu chuyện, làng nghề, chủ thể OCOP, tin tức…"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="px-space-lg py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 flex-shrink-0"
                type="submit"
              >
                <span>Tìm kiếm</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </form>
            {/* Dòng thống kê định hướng kết quả */}
            <div className="mt-space-md text-center flex flex-col gap-1">
              <h1 className="font-headline-sm text-headline-sm text-primary">
                Kết quả cho ‘{searchTerm}’ · <span className="text-secondary font-bold">24 kết quả</span>
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                Phân loại theo cơ sở dữ liệu số hóa di sản và tri thức nông thôn Việt Nam.
              </p>
            </div>
          </div>

          {/* Thanh Chip lọc theo đúng 9 loại nội dung */}
          <div className="w-full overflow-x-auto pb-1">
            <div className="flex items-center gap-2 min-w-max justify-start lg:justify-center">
              {chips.map((chip) => {
                const isActive = activeChip === chip.id;
                return (
                  <button
                    key={chip.id}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-[#1F4D3A] text-on-primary shadow-sm'
                        : 'bg-surface-container-lowest hover:bg-surface-container-high text-on-surface-variant'
                    }`}
                    onClick={() => setActiveChip(chip.id)}
                    type="button"
                  >
                    <span>{chip.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-md text-[10px] leading-tight font-bold ${
                        isActive ? 'bg-white/20' : 'bg-surface-variant text-on-surface'
                      }`}
                    >
                      {chip.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* KHỐI 03 – DANH SÁCH KẾT QUẢ & TRẠNG THÁI RỖNG (Nền Trắng #FFFFFF) */}
      <section className="w-full bg-[#FFFFFF] py-space-xl">
        <div className="max-w-[1360px] mx-auto px-gutter flex flex-col gap-space-xl">
          {/* A. PHẦN TRÊN: Danh sách kết quả hỗn hợp thẻ chuẩn báo chí di sản */}
          <div>
            <div className="flex items-center justify-between pb-space-sm mb-space-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <h2 className="font-headline-sm text-headline-sm text-primary">Tài liệu &amp; Dữ liệu đối soát</h2>
              </div>
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Trang 1 / 4 · Xếp theo độ tương thích di sản
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Thẻ 1: Product Card */}
              <article className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Mộc bản đặc sản trà Đinh Ngọc Tân Cương"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx4pHkEIejrXl3C5CYl5aS-9BO_91NyqLkDof403kMhQO_dTSmPa4lYDfzg4p-GNb5j9KZDX99YLRkzztR1lbbf6llnfs8TBGKpQijSKBG2Bk_jGHUSQyjsUeVvZcjvUl1jpbYDQBNIpwQKAGND-pCKLziv98o9lRJ9E_YgInhgoXq-XeGeAVVEyjPc_QGIM5OxNCdsHQlrvHix2Mbh6OzF4UyJ4abEUVNJhS4fwI"
                   loading="lazy" decoding="async"/>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1F4D3A] text-[#C89B3C] shadow-sm font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span>OCOP 5 Sao Quốc gia</span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm bg-surface-container-lowest">
                  <div className="space-y-1.5">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                      Sản phẩm OCOP
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container transition-colors">
                      Trà Đinh Ngọc Tân Cương
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      HTX Trà Tân Cương Thái Nguyên, thu hoạch từ nguồn gốc vùng trà đặc sản Tân Cương thổ nhưỡng phù sa
                      cổ sông Công.
                    </p>
                  </div>
                  <div className="pt-space-sm flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline">Thái Nguyên</span>
                    <a
                      className="inline-flex items-center gap-1 font-label-md text-label-md text-[#B85D3B] hover:text-on-secondary-container font-semibold uppercase tracking-wider"
                      href="/san-pham-ocop"
                    >
                      <span>Xem hồ sơ sản phẩm</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>
              </article>

              {/* Thẻ 2: Story Card */}
              <article className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Nghệ nhân cao tuổi sao chè thủ công trên chảo gang đỏ lửa"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3CCgASuElO6Cr8EUgNTa_Cz32OVuxkLUyiM4s-33u8gi-QNzT6D9Kxq1-keckkP-uNv33txEIPZoEOzNd9-_QpXQ1gZ5AlaAuViudguPS3e2Wlt2-_cK-Y-a_-zxOlABCPoSGXne6YwT5-pMIapA2Uva4GJ9Vr8Xr94PSKBOPyR0oVB9GTEsOZZkTDe7rM9Mlg7Ndx4A4xjwqXkoJuTmocCq90hQeVatSUAERQuY"
                   loading="lazy" decoding="async"/>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#984724] text-white shadow-sm font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                    Ký sự Di sản
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white font-label-sm text-label-sm">
                    7 phút đọc
                  </div>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm bg-surface-container-lowest">
                  <div className="space-y-1.5">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                      Chuyên khảo Longform Di sản
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container transition-colors">
                      Giữ lửa nghề sao chè Tân Cương bên sườn núi Cốc
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      Hành trình hơn nửa thế kỷ gìn giữ bí quyết cảm nhận nhiệt than củi và tiếng nổ lách tách của cánh
                      chè móc câu thượng hạng.
                    </p>
                  </div>
                  <div className="pt-space-sm flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline">Bút ký điền dã</span>
                    <a
                      className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold uppercase tracking-wider"
                      href="/cau-chuyen-ocop"
                    >
                      <span>Đọc bài ký sự</span>
                      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    </a>
                  </div>
                </div>
              </article>

              {/* Thẻ 3: Business Card */}
              <article className="flex flex-col bg-[#F8F5EE] rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-md justify-between group">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-[#1F4D3A] font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                      Chủ thể OCOP
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">Mã số: TN-8820</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-secondary transition-colors">
                      Hợp tác xã Trà Tân Cương Thái Nguyên
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Hồ sơ chủ thể OCOP tiêu biểu với 120 hộ nông dân liên kết sản xuất vùng nguyên liệu trà sạch theo
                      quy chuẩn VietGAP &amp; hữu cơ vi sinh.
                    </p>
                  </div>
                  <div className="p-3 bg-white/70 rounded-lg flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[26px]">nature_people</span>
                    <div className="text-xs">
                      <div className="font-semibold text-primary">120 Hộ nông gia liên kết</div>
                      <div className="text-on-surface-variant">Quy mô 85 ha canh tác nguyên liệu bản địa</div>
                    </div>
                  </div>
                </div>
                <div className="pt-space-md">
                  <a
                    className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors"
                    href="/gui-bai-ho-so-ocop"
                  >
                    <span>Xem hồ sơ chủ thể</span>
                    <span className="material-symbols-outlined text-[16px]">badge</span>
                  </a>
                </div>
              </article>

              {/* Thẻ 4: Locality Card */}
              <article className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Toàn cảnh những triền đồi chè Tân Cương xanh ngắt"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlSa7glfaNUyn6tyGsfwMDMDk6Mn2aNUPSqqhLt2ckCdwc7wd7olYlo66m3wU1YQ0aXhwzz4OdGtVL22aTEW__R19AUnSbJQnHeZsLkIkUdYzzqsXxPZwVaAKUrNgdnSIDb9iRl8ONxaMuQM-i4tQo1CMmpja2pUVYkIUEyDhvkUvuXJ4bItvWYmgIGGLyJubTkjGzoMrnKL58ly0Ui5IJDRiqqIihHDVU_prpQcA"
                   loading="lazy" decoding="async"/>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#1F4D3A] text-white shadow-sm font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                    Điểm đến &amp; Du lịch
                  </div>
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                    <span>Chỉ dẫn địa lý</span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm bg-surface-container-lowest">
                  <div className="space-y-1.5">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                      Không gian du lịch nông thôn
                    </span>
                    <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container transition-colors">
                      Vùng chè di sản Tân Cương - Tỉnh Thái Nguyên
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      12 điểm tham quan trải nghiệm văn hóa ẩm thực trà, homestay sinh thái và không gian thử trà nghệ
                      thuật giữa nương chè trăm tuổi.
                    </p>
                  </div>
                  <div className="pt-space-sm flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline">12 điểm trải nghiệm</span>
                    <a
                      className="inline-flex items-center gap-1 font-label-md text-label-md text-[#B85D3B] hover:text-on-secondary-container font-semibold uppercase tracking-wider"
                      href="/diem-den-du-lich"
                    >
                      <span>Khám phá địa phương</span>
                      <span className="material-symbols-outlined text-[16px]">explore</span>
                    </a>
                  </div>
                </div>
              </article>

              {/* Thẻ 5: Integration Card */}
              <article className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-md justify-between group">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-[#E8EFEA] text-[#1F4D3A] font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                      OCOP Hội nhập
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">Chuyên đề Xuất khẩu</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container transition-colors">
                      Tiềm năng đưa trà và thảo dược OCOP sang thị trường EU và chứng nhận Halal
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Phân tích chuỗi giá trị và hàng rào kỹ thuật: Rà soát dư lượng hoạt chất bảo vệ thực vật, kiểm
                      định carbon và tiêu chuẩn đóng gói thân thiện môi trường.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
                    <span>Phân tích dữ liệu &amp; Tham vấn chuyên gia nông nghiệp EU</span>
                  </div>
                </div>
                <div className="pt-space-md">
                  <a
                    className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold uppercase tracking-wider"
                    href="/ocop-hoi-nhap"
                  >
                    <span>Xem tư liệu nghiên cứu</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                  </a>
                </div>
              </article>

              {/* Thẻ 6: News Card */}
              <article className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-md justify-between group">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                      Tin tức &amp; Sự kiện
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">Tháng 03/2026</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container transition-colors">
                      Hội chợ xúc tiến thương mại tôn vinh văn hóa Trà Thái Nguyên 2026
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Chuỗi không gian giao lưu kết nối 63 tỉnh thành, trưng bày hơn 200 sản phẩm trà đạt phân hạng OCOP
                      từ 4 sao đến 5 sao cấp Quốc gia.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px] text-[#B85D3B]">calendar_month</span>
                    <span>Diễn ra từ 18/03 đến 22/03/2026 tại TP. Thái Nguyên</span>
                  </div>
                </div>
                <div className="pt-space-md">
                  <a
                    className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:text-on-secondary-container font-semibold uppercase tracking-wider"
                    href="/tin-tuc-su-kien"
                  >
                    <span>Chi tiết sự kiện</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                </div>
              </article>
            </div>
          </div>

          {/* B. PHẦN DƯỚI: KHUNG TRẠNG THÁI KHÔNG CÓ KẾT QUẢ (EMPTY STATE COMPONENT) */}
          <div className="w-full bg-[#E8EFEA] rounded-xl p-space-xl flex flex-col gap-space-lg shadow-sm">
            {/* Khung minh họa + thông điệp nguyên văn */}
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-sm">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-2">
                <span className="material-symbols-outlined text-[36px]">travel_explore</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Chưa tìm thấy nội dung phù hợp với từ khóa của bạn. Hãy thử từ khóa khác hoặc khám phá 6 chuyên mục dưới
                đây.
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Bạn có thể thử tìm theo tên địa phương (Hà Giang, Sơn La, Bến Tre), nhóm thảo dược bản địa, hoặc tên
                nghệ nhân giữ nghề.
              </p>
            </div>
            {/* Lưới 6 thẻ dẫn nhanh vào 6 chuyên mục chính */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter pt-space-sm">
              {/* Chuyên mục 1 */}
              <a
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all flex items-start gap-space-sm group shadow-sm"
                href="/tin-tuc-su-kien"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E8EFEA] flex items-center justify-center text-primary group-hover:bg-[#1F4D3A] group-hover:text-white transition-colors flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">newspaper</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container">
                    Tin tức &amp; Sự kiện
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Cập nhật chính sách, hội chợ và chuyển động OCOP
                  </p>
                </div>
              </a>
              {/* Chuyên mục 2 */}
              <a
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all flex items-start gap-space-sm group shadow-sm"
                href="/san-pham-ocop"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E8EFEA] flex items-center justify-center text-[#C89B3C] group-hover:bg-[#1F4D3A] group-hover:text-[#C89B3C] transition-colors flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container">
                    Sản phẩm OCOP
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Kho dữ liệu sản phẩm 3–5 sao có bảo chứng nguồn gốc
                  </p>
                </div>
              </a>
              {/* Chuyên mục 3 */}
              <a
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all flex items-start gap-space-sm group shadow-sm"
                href="/cau-chuyen-ocop"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E8EFEA] flex items-center justify-center text-[#B85D3B] group-hover:bg-[#B85D3B] group-hover:text-white transition-colors flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container">
                    Câu chuyện OCOP
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Ký sự điền dã người giữ nghề và văn hóa bản địa
                  </p>
                </div>
              </a>
              {/* Chuyên mục 4 */}
              <a
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all flex items-start gap-space-sm group shadow-sm"
                href="/diem-den-du-lich"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E8EFEA] flex items-center justify-center text-primary group-hover:bg-[#1F4D3A] group-hover:text-white transition-colors flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">forest</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container">
                    Điểm đến &amp; Du lịch
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Bản đồ làng nghề và điểm du lịch sinh thái nông thôn
                  </p>
                </div>
              </a>
              {/* Chuyên mục 5 */}
              <a
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all flex items-start gap-space-sm group shadow-sm"
                href="/ocop-hoi-nhap"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E8EFEA] flex items-center justify-center text-primary group-hover:bg-[#1F4D3A] group-hover:text-white transition-colors flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container">
                    OCOP Hội nhập
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Báo chí dữ liệu, tiêu chuẩn xuất khẩu và kết nối B2B
                  </p>
                </div>
              </a>
              {/* Chuyên mục 6 */}
              <a
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all flex items-start gap-space-sm group shadow-sm"
                href="/gui-bai-ho-so-ocop"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E8EFEA] flex items-center justify-center text-primary group-hover:bg-[#1F4D3A] group-hover:text-white transition-colors flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">contact_support</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-title-editorial text-title-editorial text-primary group-hover:text-primary-container">
                    Bạn đọc &amp; Tòa soạn
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Không gian phản ánh, gửi bài cộng tác và kết nối chủ thể
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KHỐI 04 – COMPONENT PHỤ: HỘP TÌM KIẾM NHANH (SEARCH MODAL OVERLAY) */}
      <section className="w-full bg-[#F8F5EE] py-space-xl">
        <div className="max-w-[1360px] mx-auto px-gutter">
          {/* Tiêu đề mô phỏng Search Modal */}
          <div className="mb-space-md flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                Tương tác Tra cứu Toàn hệ thống
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary">
                Mô phỏng Giao diện Hộp Tìm Kiếm Nhanh (Search Modal Overlay)
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                Phím tắt: [⌘K]
              </span>
              <button
                className="px-3 py-1.5 rounded-lg bg-[#1F4D3A] text-white font-label-md text-label-md uppercase tracking-wider"
                onClick={() => setIsModalOpen(!isModalOpen)}
                type="button"
              >
                Bật / Tắt Modal
              </button>
            </div>
          </div>

          {/* Trình bày trực quan Search Modal Box nổi */}
          {isModalOpen && (
            <div className="relative w-full rounded-2xl bg-black/40 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center shadow-xl">
              <div className="w-full max-w-3xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                {/* Thanh tìm kiếm bên trong Modal */}
                <div className="p-4 sm:p-5 flex items-center gap-3 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-[26px] text-primary">search</span>
                  <input
                    className="w-full bg-transparent font-body-lg text-body-lg text-on-surface placeholder:italic placeholder:text-outline focus:outline-none"
                    placeholder="Tìm sản phẩm, câu chuyện, làng nghề, chủ thể OCOP, tin tức…"
                    type="text"
                    value={modalSearchTerm}
                    onChange={(e) => setModalSearchTerm(e.target.value)}
                  />
                  <div className="flex items-center gap-2">
                    <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      ESC
                    </kbd>
                    <button
                      className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
                      onClick={() => setIsModalOpen(false)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                </div>

                {/* Nội dung Modal chia 2 trạng thái: State 1 (Gợi ý) & State 2 (Kết quả gõ từ khóa Trà) */}
                <div className="grid grid-cols-1 md:grid-cols-12 max-h-[520px] overflow-y-auto">
                  {/* State 2: Khu vực Kết quả trực tiếp khi đang gõ từ khóa 'Trà' (Cột chính 7 cột) */}
                  <div className="md:col-span-7 p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <div className="flex items-center justify-between pb-1">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                        Kết quả khớp nhất (5)
                      </span>
                      <span className="font-label-sm text-label-sm text-[#1F4D3A] bg-[#E8EFEA] px-2 py-0.5 rounded">
                        Từ khóa: “{modalSearchTerm}”
                      </span>
                    </div>

                    {/* Danh sách tối đa 5 kết quả khớp nhất */}
                    <div className="flex flex-col gap-2">
                      {/* 1. Nhóm Sản phẩm */}
                      <a
                        className="p-2.5 rounded-lg hover:bg-[#F8F5EE] transition-colors flex items-start gap-3 group"
                        href="/san-pham-ocop"
                      >
                        <div className="w-8 h-8 rounded-md bg-[#1F4D3A] flex items-center justify-center text-[#C89B3C] flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold text-[#C89B3C] uppercase tracking-wider">[5 Sao]</span>
                            <span className="font-label-md text-label-md text-primary group-hover:text-secondary truncate font-semibold">
                              Trà Đinh Ngọc Tân Cương
                            </span>
                          </div>
                          <span className="text-xs text-on-surface-variant truncate">
                            HTX Trà Tân Cương Thái Nguyên · Nông sản di sản
                          </span>
                        </div>
                      </a>

                      {/* 2. Nhóm Câu chuyện */}
                      <a
                        className="p-2.5 rounded-lg hover:bg-[#F8F5EE] transition-colors flex items-start gap-3 group"
                        href="/cau-chuyen-ocop"
                      >
                        <div className="w-8 h-8 rounded-md bg-[#B85D3B] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">menu_book</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-md text-label-md text-primary group-hover:text-[#B85D3B] truncate font-semibold">
                            Giữ lửa nghề sao chè Tân Cương
                          </span>
                          <span className="text-xs text-on-surface-variant truncate">
                            Ký sự điền dã · Nghệ nhân sao chè thủ công
                          </span>
                        </div>
                      </a>

                      {/* 3. Nhóm Chủ thể */}
                      <a
                        className="p-2.5 rounded-lg hover:bg-[#F8F5EE] transition-colors flex items-start gap-3 group"
                        href="/gui-bai-ho-so-ocop"
                      >
                        <div className="w-8 h-8 rounded-md bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">domain</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-md text-label-md text-primary group-hover:text-secondary truncate font-semibold">
                            HTX Trà Tân Cương Thái Nguyên
                          </span>
                          <span className="text-xs text-on-surface-variant truncate">
                            Chủ thể OCOP tiêu biểu · Liên kết 120 nông hộ
                          </span>
                        </div>
                      </a>

                      {/* 4. Nhóm Điểm đến */}
                      <a
                        className="p-2.5 rounded-lg hover:bg-[#F8F5EE] transition-colors flex items-start gap-3 group"
                        href="/diem-den-du-lich"
                      >
                        <div className="w-8 h-8 rounded-md bg-[#E8EFEA] flex items-center justify-center text-[#1F4D3A] flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">location_on</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-md text-label-md text-primary group-hover:text-secondary truncate font-semibold">
                            Vùng chè Tân Cương
                          </span>
                          <span className="text-xs text-on-surface-variant truncate">
                            Điểm du lịch sinh thái nông thôn &amp; Không gian văn hóa
                          </span>
                        </div>
                      </a>

                      {/* 5. Nhóm Thị trường */}
                      <a
                        className="p-2.5 rounded-lg hover:bg-[#F8F5EE] transition-colors flex items-start gap-3 group"
                        href="/ocop-hoi-nhap"
                      >
                        <div className="w-8 h-8 rounded-md bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">trending_up</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-md text-label-md text-primary group-hover:text-secondary truncate font-semibold">
                            Xuất khẩu trà hữu cơ sang thị trường EU
                          </span>
                          <span className="text-xs text-on-surface-variant truncate">
                            Phân tích chính sách tiêu chuẩn xanh và thị trường quốc tế
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* State 1: Khu vực Gợi ý nhanh & Từ khóa nổi bật (Cột phụ 5 cột) */}
                  <div className="md:col-span-5 p-space-md bg-[#F8F5EE] flex flex-col gap-space-md">
                    <div className="flex flex-col gap-2">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                        Gợi ý nhanh 6 chuyên mục chính
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        <a
                          className="px-2.5 py-1 rounded bg-white hover:bg-surface-container-high text-xs text-on-surface-variant hover:text-primary transition-colors"
                          href="/tin-tuc-su-kien"
                        >
                          Tin tức &amp; Sự kiện
                        </a>
                        <a
                          className="px-2.5 py-1 rounded bg-white hover:bg-surface-container-high text-xs text-on-surface-variant hover:text-primary transition-colors"
                          href="/san-pham-ocop"
                        >
                          Sản phẩm OCOP
                        </a>
                        <a
                          className="px-2.5 py-1 rounded bg-white hover:bg-surface-container-high text-xs text-on-surface-variant hover:text-primary transition-colors"
                          href="/cau-chuyen-ocop"
                        >
                          Câu chuyện OCOP
                        </a>
                        <a
                          className="px-2.5 py-1 rounded bg-white hover:bg-surface-container-high text-xs text-on-surface-variant hover:text-primary transition-colors"
                          href="/diem-den-du-lich"
                        >
                          Điểm đến &amp; Du lịch
                        </a>
                        <a
                          className="px-2.5 py-1 rounded bg-white hover:bg-surface-container-high text-xs text-on-surface-variant hover:text-primary transition-colors"
                          href="/ocop-hoi-nhap"
                        >
                          OCOP Hội nhập
                        </a>
                        <a
                          className="px-2.5 py-1 rounded bg-white hover:bg-surface-container-high text-xs text-on-surface-variant hover:text-primary transition-colors"
                          href="/gui-bai-ho-so-ocop"
                        >
                          Bạn đọc &amp; Tòa soạn
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                        Từ khóa nổi bật
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <button
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white hover:bg-secondary-fixed text-xs text-primary font-medium transition-colors"
                          onClick={() => {
                            setSearchTerm('Dược liệu');
                            setModalSearchTerm('Dược liệu');
                          }}
                          type="button"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>Dược liệu</span>
                        </button>
                        <button
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white hover:bg-secondary-fixed text-xs text-primary font-medium transition-colors"
                          onClick={() => {
                            setSearchTerm('Trà 5 sao');
                            setModalSearchTerm('Trà 5 sao');
                          }}
                          type="button"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
                          <span>Trà 5 sao</span>
                        </button>
                        <button
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white hover:bg-secondary-fixed text-xs text-primary font-medium transition-colors"
                          onClick={() => {
                            setSearchTerm('Làng nghề');
                            setModalSearchTerm('Làng nghề');
                          }}
                          type="button"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>Làng nghề</span>
                        </button>
                        <button
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white hover:bg-secondary-fixed text-xs text-primary font-medium transition-colors"
                          onClick={() => {
                            setSearchTerm('Du lịch sinh thái');
                            setModalSearchTerm('Du lịch sinh thái');
                          }}
                          type="button"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1F4D3A]" />
                          <span>Du lịch sinh thái</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-3 bg-white/60 rounded-lg text-xs text-on-surface-variant leading-relaxed">
                      <span className="font-semibold text-primary">Mẹo tra cứu:</span> Bạn có thể gõ mã sản phẩm OCOP hoặc
                      tên hợp tác xã để tra cứu dữ liệu gốc.
                    </div>
                  </div>
                </div>

                {/* Nút bấm nổi bật cuối modal */}
                <div className="p-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Hiển thị 24 kết quả tìm kiếm cho từ khóa ‘{modalSearchTerm}’
                  </span>
                  <button
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#1F4D3A] hover:bg-primary-container text-white font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                    onClick={() => {
                      setSearchTerm(modalSearchTerm);
                      setIsModalOpen(false);
                    }}
                    type="button"
                  >
                    <span>Xem tất cả kết quả</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
