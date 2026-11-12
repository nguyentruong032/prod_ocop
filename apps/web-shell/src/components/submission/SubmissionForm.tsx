'use client';

import React, { useState } from 'react';

export function SubmissionForm() {
  const [activeTab, setActiveTab] = useState<1 | 2>(1);

  const handleSubmitTab1 = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Thông tin đã được gửi thành công đến Tòa soạn OCOP Việt Nam.');
  };

  const handleSubmitTab2 = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Tòa soạn đã ghi nhận hồ sơ chủ thể OCOP. Bộ phận tư liệu sẽ liên hệ thẩm định.');
  };

  return (
    <section className="w-full py-20 bg-surface-container-lowest text-on-surface" id="khu-vuc-bieu-mau">
      <div className="w-full max-w-[1080px] mx-auto px-gutter-mobile md:px-gutter-tablet xl:px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-2 font-semibold">
            CỔNG TIẾP NHẬN TRỰC TUYẾN
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight mb-3">
            Biểu mẫu gửi bài và hồ sơ thông tin OCOP.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Vui lòng chọn mục đích biểu mẫu phù hợp để ban biên tập điều phối bộ phận chuyên trách phản hồi sớm nhất.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center p-1.5 bg-surface-container-low rounded-xl max-w-xl mx-auto mb-10">
          <button
            className={`flex-1 py-3 px-4 rounded-lg font-label-md text-label-md transition flex items-center justify-center gap-2 ${
              activeTab === 1
                ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            onClick={() => setActiveTab(1)}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">edit_note</span>
            <span>Gửi bài / Ý kiến &amp; Liên hệ</span>
          </button>
          <button
            className={`flex-1 py-3 px-4 rounded-lg font-label-md text-label-md transition flex items-center justify-center gap-2 ${
              activeTab === 2
                ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            onClick={() => setActiveTab(2)}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">badge</span>
            <span>Gửi hồ sơ Chủ thể OCOP</span>
          </button>
        </div>

        {/* Container Form Box */}
        <div className="bg-surface p-8 md:p-12 rounded-2xl shadow-sm">
          {/* FORM TAB 1: Gửi bài / Ý kiến bạn đọc & Liên hệ */}
          {activeTab === 1 && (
            <form className="space-y-6" id="form-tab-1" onSubmit={handleSubmitTab1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="fullName">
                    Họ và tên <span className="text-error">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface placeholder:text-outline transition"
                    id="fullName"
                    placeholder="Nguyễn Văn A"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="email">
                    Email liên hệ <span className="text-error">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface placeholder:text-outline transition"
                    id="email"
                    placeholder="email@domain.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="phoneNumber">
                    Số điện thoại
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface placeholder:text-outline transition"
                    id="phoneNumber"
                    placeholder="09xx xxx xxx"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="organization">
                    Đơn vị / Tổ chức / Bút danh
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface placeholder:text-outline transition"
                    id="organization"
                    placeholder="HTX, viện nghiên cứu, hoặc bút danh cộng tác..."
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="categoryTopic">
                  Chuyên mục liên hệ <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface appearance-none transition pr-10"
                    id="categoryTopic"
                    required
                    defaultValue="gui-bai"
                  >
                    <option value="gui-bai">Gửi bài / Ý kiến bạn đọc</option>
                    <option value="de-xuat">Đề xuất câu chuyện &amp; nhân vật OCOP</option>
                    <option value="hop-tac">Hợp tác truyền thông</option>
                    <option value="gop-y">Góp ý nội dung</option>
                    <option value="khac">Vấn đề khác</option>
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                    expand_more
                  </span>
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="contentMessage">
                  Nội dung tin nhắn / Bài gửi <span className="text-error">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface placeholder:text-outline transition resize-y"
                  id="contentMessage"
                  placeholder="Nhập nội dung bài viết, ý kiến trao đổi hoặc tóm tắt thông tin cần liên hệ..."
                  required
                  rows={5}
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">Tệp đính kèm tư liệu</label>
                <div className="rounded-xl border-2 border-dashed border-outline-variant/80 hover:border-primary bg-surface-container-lowest p-6 text-center transition cursor-pointer flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">cloud_upload</span>
                  <p className="font-body-md text-body-md text-on-surface font-medium mb-1">
                    Chọn tệp hoặc kéo thả vào đây
                  </p>
                  <p className="font-label-sm text-label-sm text-outline">Định dạng DOCX, PDF, JPG, PNG tối đa 10MB</p>
                  <input className="hidden" id="fileAttachment" type="file" />
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                <p className="font-body-sm text-body-sm text-outline">
                  * Thông tin gửi đến được bảo mật và sử dụng đúng mục đích báo chí.
                </p>
                <button
                  className="px-8 py-3 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition font-label-md text-label-md inline-flex items-center gap-2 shadow-sm"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Gửi thông tin liên hệ</span>
                </button>
              </div>
            </form>
          )}

          {/* FORM TAB 2: Gửi hồ sơ Chủ thể OCOP */}
          {activeTab === 2 && (
            <form className="space-y-6" id="form-tab-2" onSubmit={handleSubmitTab2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">
                    Tên Chủ thể / Hợp tác xã / Doanh nghiệp <span className="text-error">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                    placeholder="HTX Nông nghiệp Bản Địa A..."
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">
                    Tên sản phẩm OCOP đăng ký <span className="text-error">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                    placeholder="Trà Shan Tuyết cổ thụ, Gốm mộc..."
                    required
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">
                    Hạng sao OCOP đạt được <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface appearance-none pr-10"
                      required
                      defaultValue="5"
                    >
                      <option value="5">OCOP 5 Sao (Cấp Quốc gia)</option>
                      <option value="4">OCOP 4 Sao (Cấp Tỉnh/TP)</option>
                      <option value="3">OCOP 3 Sao (Cấp Tỉnh/Huyện)</option>
                      <option value="tiem-nang">Tiềm năng 5 Sao nâng hạng</option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                      expand_more
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">
                    Tỉnh / Thành phố <span className="text-error">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                    placeholder="Hà Giang, Sơn La, Bến Tre..."
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">Số quyết định công nhận</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                    placeholder="Số QĐ / Năm cấp..."
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Tóm tắt câu chuyện văn hóa &amp; nguồn gốc bản địa <span className="text-error">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:outline-none font-body-md text-body-md text-on-surface"
                  placeholder="Mô tả vùng nguyên liệu, bí quyết truyền thống và ý nghĩa văn hóa của sản phẩm..."
                  required
                  rows={4}
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Đính kèm hồ sơ chứng nhận &amp; hình ảnh sản phẩm
                </label>
                <div className="rounded-xl border-2 border-dashed border-outline-variant/80 hover:border-primary bg-surface-container-lowest p-6 text-center transition cursor-pointer flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-2">folder_zip</span>
                  <p className="font-body-md text-body-md text-on-surface font-medium mb-1">
                    Tải lên trọn bộ hồ sơ hoặc bản scan chứng nhận
                  </p>
                  <p className="font-label-sm text-label-sm text-outline">
                    File PDF, ZIP hoặc bộ ảnh JPG sắc nét (Tối đa 25MB)
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary-container/10 border border-tertiary-fixed-dim/40 text-tertiary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                  Dành riêng cho chủ thể OCOP chính thức
                </span>
                <button
                  className="px-8 py-3 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 transition font-label-md text-label-md inline-flex items-center gap-2 shadow-sm"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>Gửi hồ sơ thẩm định OCOP</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
