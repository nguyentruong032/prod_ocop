import React from 'react';

export function RegionalPlaybooksSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-lg">
        <div className="space-y-space-xs max-w-3xl">
          <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-wider">
            Cẩm nang Thực tiễn
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
            Cẩm Nang Tiếp Cận Thị Trường Theo Khu Vực
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tổng hợp các quy chuẩn hàng rào kỹ thuật, luật định an toàn vệ sinh thực phẩm và cẩm nang đàm phán thương
            mại theo 4 vùng địa lý then chốt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Region 1: EU */}
          <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">euro</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">KHU VỰC 01</span>
                <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">Thị Trường Châu Âu (EU)</h3>
              </div>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant pt-2">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Quy định EUDR:</strong> Chống phá rừng đối với chuỗi cà phê, cao su và hồ tiêu OCOP.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Kiểm định MRLs:</strong> Ngưỡng dư lượng thuốc BVTV tiệm cận mức 0.01 mg/kg.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Bao bì xanh:</strong> Giấy Kraft tái chế, mực in gốc đậu nành tự phân hủy.
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-space-sm">
              <a
                className="w-full inline-flex justify-center items-center gap-1 py-2 px-space-md bg-surface-container text-primary font-label-md text-label-md rounded hover:bg-primary hover:text-on-primary transition-all"
                href="#"
              >
                Tải sổ tay quy chuẩn EU
              </a>
            </div>
          </div>

          {/* Region 2: North America */}
          <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded bg-secondary text-on-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">flag</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">KHU VỰC 02</span>
                <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  Bắc Mỹ (Hoa Kỳ &amp; Canada)
                </h3>
              </div>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant pt-2">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Đạo luật FSMA:</strong> Hiện đại hóa an toàn thực phẩm, kế hoạch kiểm soát HARPC.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Số đăng ký FDA:</strong> Mã định danh cơ sở chế biến thực phẩm và thảo dược.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Kênh phân phối:</strong> Tiêu chuẩn vào hệ thống Costco, Trader Joe&apos;s, Whole Foods.
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-space-sm">
              <a
                className="w-full inline-flex justify-center items-center gap-1 py-2 px-space-md bg-surface-container text-primary font-label-md text-label-md rounded hover:bg-secondary hover:text-on-secondary transition-all"
                href="#"
              >
                Tải sổ tay quy chuẩn FSMA
              </a>
            </div>
          </div>

          {/* Region 3: East Asia */}
          <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded bg-tertiary-container text-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">temple_buddhist</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">KHU VỰC 03</span>
                <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  Đông Bắc Á (Nhật &amp; Hàn)
                </h3>
              </div>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant pt-2">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Tiêu chuẩn JAS &amp; MFDS:</strong> Hệ thống chứng nhận nông nghiệp hữu cơ Nhật Bản.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Kiểm dịch thực vật:</strong> Chiếu xạ, xử lý hơi nước nóng chống ruồi đục quả.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Đóng gói quà tặng:</strong> Định dạng hộp tinh xảo, kích thước khẩu phần nhỏ.
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-space-sm">
              <a
                className="w-full inline-flex justify-center items-center gap-1 py-2 px-space-md bg-surface-container text-primary font-label-md text-label-md rounded hover:bg-primary hover:text-on-primary transition-all"
                href="#"
              >
                Tải sổ tay thị trường JAS
              </a>
            </div>
          </div>

          {/* Region 4: Halal & Middle East */}
          <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">mosque</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">KHU VỰC 04</span>
                <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  Thị Trường Halal Hồi Giáo
                </h3>
              </div>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant pt-2">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Chứng nhận Halal:</strong> Quy chuẩn thẩm tra JAKIM (Malaysia) và MUI (Indonesia).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Danh mục tiềm năng:</strong> Cà phê robusta chế biến sâu, hạt điều Bình Phước, tiêu Phú Quốc.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">verified</span>
                  <span>
                    <strong>Hành lang Vùng Vịnh:</strong> Đón đầu thị trường UAE, Ả Rập Xê Út và Qatar.
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-space-sm">
              <a
                className="w-full inline-flex justify-center items-center gap-1 py-2 px-space-md bg-surface-container text-primary font-label-md text-label-md rounded hover:bg-primary hover:text-on-primary transition-all"
                href="#"
              >
                Tải quy chuẩn Halal 2026
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
