import React from 'react';

export function MarketDeepDiveSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase font-semibold">
              Chuyên Khảo Phân Tích
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
              Tiêu Điểm Thương Mại Tuần Này
            </h2>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[20px]">calendar_month</span>
            <span>Số phát hành chuyên đề: Tuần 3, Tháng 3/2026</span>
          </div>
        </div>
        {/* Main Deep-dive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Lead Feature Article (7 Cols) */}
          <article className="lg:col-span-7 bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="relative h-80 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Báo chí tư liệu chụp Diễn đàn Kinh tế Quốc gia và Hội nghị Xúc tiến Thương mại OCOP với các đại biểu bộ ngành, quan chức ngoại giao và đại diện thương mại quốc tế ngồi tại bàn hội nghị lớn, phông nền cờ đỏ sao vàng cùng ánh sáng báo chí chân thực."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIPhXujlDBg8v2ulLomNWno51GDUKsG3GM_33FR5ua05eX8Xk5h5ZMsJ8uz-EZjhXSov3s5vbi7TSo5Do21KqMSfa9VijfzIXYFou4fEdm-uc5Uu1SHxdVe8mqKy7vKfogYhr7uBBerY3jJNGm2cOGmptTFlyQ0n-HKNIAVvN8d7AhVFcQ4p98nBEZVskEsK_DVmS1u1ttR-qEE1eIuUfbeaKRWAZuTq5KrmzDUY0"
                alt="Diễn đàn Kinh tế Quốc gia và Hội nghị Xúc tiến Thương mại OCOP"
               loading="lazy" decoding="async"/>
              <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm px-space-sm py-1 rounded shadow">
                HỒ SƠ HIỆP ĐỊNH THƯƠNG MẠI
              </div>
              <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-space-sm py-1 rounded text-label-sm font-label-sm text-primary">
                12 phút đọc tư liệu
              </div>
            </div>
            <div className="p-space-lg space-y-space-md flex-1 flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
                  <span className="font-semibold text-secondary">Liên minh Châu Âu (EU)</span>
                  <span>•</span>
                  <span>Tác giả: TS. Lê Hoài Nam (Chuyên gia WTO &amp; FTA)</span>
                </div>
                <h3 className="font-headline-md text-headline-sm md:text-headline-md text-primary tracking-tight">
                  Hiệp định EVFTA sau 5 năm: Cánh cửa vàng và những rào cản kỹ thuật khắt khe cho gia vị và thảo dược
                  OCOP Việt Nam
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Mức thuế quan giảm về 0% mở ra cơ hội hàng trăm triệu euro, tuy nhiên chỉ tiêu dư lượng thuốc bảo vệ
                  thực vật (MRLs) siết chặt cùng bộ tiêu chuẩn thẩm tra chuỗi cung ứng xanh khiến các hợp tác xã thảo
                  dược bản địa phải tái cấu trúc toàn diện quy trình kiểm nghiệm.
                </p>
              </div>
              {/* Supporting product documentary shot */}
              <div className="pt-space-md flex items-center gap-space-md bg-surface-container-low p-space-md rounded">
                <img
                  className="w-24 h-24 object-cover rounded shadow-sm flex-shrink-0"
                  data-alt="Tĩnh vật mộc mạc chụp các sản phẩm nông sản gia vị OCOP xuất khẩu gồm chai nước mắm Phú Quốc truyền thống nút bấc buộc dây thừng gai, lọ mật ong rừng Đắk Lắk, quế chi, hoa hồi sấy khô trên đĩa tre đan mộc mạc ánh sáng tự nhiên trầm ấm."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC82HKd2p0VEcHMKArLjHc30OqkVRsEcuoeS-ubg17kaPZVUf2tzOJws0woT7wzAg692ZgJ1js9V5RNbTWGUQd20Hcnm3q-NRmRaXH52EQ8KsfX4jZNKvmV3WDXGDjwsRH4pkZcQCRaa9d3oH-jjBxMddn-0SKVZR6uAcjwpVPpokGM1I_QJmx9lnhsBrWUuHKSLVqh0VcTF920YEH8acNUsoHNUxsIccjvmXSfKqA"
                  alt="Nông sản gia vị OCOP xuất khẩu"
                 loading="lazy" decoding="async"/>
                <div className="space-y-1">
                  <div className="font-label-md text-label-md text-primary font-bold">Nghiên cứu ca điển hình:</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Gia vị hồi Lạng Sơn, quế Yên Bái và nước mắm Phú Quốc chỉ dẫn địa lý vượt qua 42 hàng rào kiểm
                    dịch để lên kệ chuỗi siêu thị Metro &amp; Carrefour.
                  </p>
                  <a
                    className="text-secondary font-label-sm text-label-sm font-bold hover:underline inline-flex items-center gap-1"
                    href="#"
                  >
                    Đọc toàn văn hồ sơ thẩm định <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
          {/* 3 Market Analytical Sub-Features (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-md justify-between">
            {/* Sub Article 1: Germany */}
            <article className="bg-surface-container-lowest p-space-md rounded shadow-sm space-y-space-xs hover:bg-surface-container-low transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed/40 px-2 py-0.5 rounded font-semibold">
                  Cộng hòa Liên bang Đức
                </span>
                <span className="font-label-sm text-label-sm text-outline">08:30 • 20/03/2026</span>
              </div>
              <h4 className="font-title-editorial text-title-editorial text-primary tracking-tight">
                Xu hướng Tiêu dùng Hữu cơ &amp; Chứng chỉ Demeter: Cánh cửa ngách cho chè Shan Tuyết cổ thụ Hà Giang
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Người tiêu dùng Đức sẵn sàng trả chênh lệch 60% cho nông sản có chứng nhận canh tác nông nghiệp sinh
                động (Biodynamic) và câu chuyện cộng đồng dân tộc thiểu số giữ rừng.
              </p>
              <div className="pt-1 flex items-center justify-between text-label-sm font-label-sm text-outline">
                <span>Tham vấn: Thương vụ Việt Nam tại Berlin</span>
                <span className="material-symbols-outlined text-[18px] text-primary">arrow_outward</span>
              </div>
            </article>
            {/* Sub Article 2: Japan */}
            <article className="bg-surface-container-lowest p-space-md rounded shadow-sm space-y-space-xs hover:bg-surface-container-low transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-primary-container bg-primary-fixed/60 px-2 py-0.5 rounded font-semibold">
                  Thị trường Nhật Bản
                </span>
                <span className="font-label-sm text-label-sm text-outline">16:15 • 18/03/2026</span>
              </div>
              <h4 className="font-title-editorial text-title-editorial text-primary tracking-tight">
                Rào cản Luật Vệ sinh Thực phẩm &amp; Văn hóa Thẩm mỹ Đóng gói: Bài học từ gốm Chu Đậu và xoài tròn Yên
                Châu
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Không chỉ là độ ngọt hay độ bền gốm men tro, thị trường Đông Bắc Á đòi hỏi bao bì kể trọn vẹn gia phả
                làng nghề và tính thẩm mỹ tối giản, tinh khiết.
              </p>
              <div className="pt-1 flex items-center justify-between text-label-sm font-label-sm text-outline">
                <span>Tham vấn: Trung tâm Xúc tiến JETRO Hà Nội</span>
                <span className="material-symbols-outlined text-[18px] text-primary">arrow_outward</span>
              </div>
            </article>
            {/* Sub Article 3: Singapore */}
            <article className="bg-surface-container-lowest p-space-md rounded shadow-sm space-y-space-xs hover:bg-surface-container-low transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-tertiary-container bg-tertiary-fixed/60 px-2 py-0.5 rounded font-semibold">
                  Thị trường Singapore
                </span>
                <span className="font-label-sm text-label-sm text-outline">10:00 • 15/03/2026</span>
              </div>
              <h4 className="font-title-editorial text-title-editorial text-primary tracking-tight">
                Chiến lược “30 by 30” và Bàn đạp Phân phối Hub: Cơ hội cho rau củ khí canh &amp; nấm dược liệu OCOP
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Singapore nhập khẩu 90% thực phẩm và là trung tâm giao thương tái xuất khẩu sang toàn vùng Nam Thái
                Bình Dương với các yêu cầu kiểm soát truy xuất QR nghiêm ngặt.
              </p>
              <div className="pt-1 flex items-center justify-between text-label-sm font-label-sm text-outline">
                <span>Tham vấn: VCCI Quốc tế</span>
                <span className="material-symbols-outlined text-[18px] text-primary">arrow_outward</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
