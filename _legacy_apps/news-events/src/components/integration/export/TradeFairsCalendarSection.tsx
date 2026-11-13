import React from 'react';

export function TradeFairsCalendarSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase font-bold">Xúc Tiến Ngoại Giao</span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
              Lịch Sự Kiện Thương Mại &amp; Hội Chợ Quốc Tế 2026
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-bold hover:underline"
            href="#"
          >
            <span>Xem trọn bộ lịch 65 hội chợ quốc gia</span>
            <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
          </a>
        </div>
        <div className="bg-surface-container-lowest rounded shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-surface-container text-primary font-label-md text-label-md uppercase tracking-wider">
                <th className="py-space-md px-space-lg">Tên Sự Kiện / Hội Chợ</th>
                <th className="py-space-md px-space-md">Thời Gian &amp; Địa Điểm</th>
                <th className="py-space-md px-space-md">Nhóm Sản Phẩm Trọng Tâm</th>
                <th className="py-space-md px-space-md">Trạng Thái Đăng Ký</th>
                <th className="py-space-md px-space-lg text-right">Đầu Mối Quốc Gia</th>
              </tr>
            </thead>
            <tbody className="font-body-sm text-body-sm text-on-surface divide-y-0">
              {/* Event 1: Gulfood */}
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-space-md px-space-lg">
                  <div className="font-bold text-primary font-headline-sm text-headline-sm">Gulfood Dubai 2026</div>
                  <span className="font-label-sm text-label-sm text-outline">
                    Hội chợ đồ uống và thực phẩm lớn nhất toàn cầu
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="font-semibold text-primary">16/04 - 20/04/2026</div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Dubai World Trade Centre, UAE
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <span className="inline-block bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm px-2 py-0.5 rounded">
                    Gia vị, Cà phê, Hạt điều Halal
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm font-bold">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-ping" /> Còn 12 gian hàng
                  </span>
                </td>
                <td className="py-space-md px-space-lg text-right">
                  <button className="px-space-md py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-container transition-all">
                    Đăng ký tham gia
                  </button>
                </td>
              </tr>
              {/* Event 2: Foodex Japan */}
              <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/40">
                <td className="py-space-md px-space-lg">
                  <div className="font-bold text-primary font-headline-sm text-headline-sm">Foodex Japan 2026</div>
                  <span className="font-label-sm text-label-sm text-outline">
                    Triển lãm Quốc tế Thực phẩm &amp; Đồ uống Nhật Bản
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="font-semibold text-primary">12/05 - 15/05/2026</div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Tokyo Big Sight, Nhật Bản</span>
                </td>
                <td className="py-space-md px-space-md">
                  <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-label-sm px-2 py-0.5 rounded">
                    Trà hữu cơ, Bún miến, Nông sản sấy
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-outline" /> Đang xét duyệt hồ sơ
                  </span>
                </td>
                <td className="py-space-md px-space-lg text-right">
                  <button className="px-space-md py-1.5 bg-secondary text-on-secondary font-label-md text-label-md rounded hover:bg-secondary/90 transition-all">
                    Chi tiết phái đoàn
                  </button>
                </td>
              </tr>
              {/* Event 3: Biofach Germany */}
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-space-md px-space-lg">
                  <div className="font-bold text-primary font-headline-sm text-headline-sm">Biofach Germany 2026</div>
                  <span className="font-label-sm text-label-sm text-outline">
                    Hội chợ Thương mại Thực phẩm Hữu cơ Số 1 Thế giới
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="font-semibold text-primary">08/07 - 11/07/2026</div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    NürnbergMesse, Nuremberg, Đức
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <span className="inline-block bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm px-2 py-0.5 rounded">
                    Thảo dược, Tinh dầu, Nông sản Organic
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm font-bold">
                    <span className="w-2 h-2 rounded-full bg-secondary" /> Mở cổng đăng ký
                  </span>
                </td>
                <td className="py-space-md px-space-lg text-right">
                  <button className="px-space-md py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-container transition-all">
                    Đăng ký tham gia
                  </button>
                </td>
              </tr>
              {/* Event 4: SIAL Paris */}
              <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/40">
                <td className="py-space-md px-space-lg">
                  <div className="font-bold text-primary font-headline-sm text-headline-sm">SIAL Paris 2026</div>
                  <span className="font-label-sm text-label-sm text-outline">
                    Đại hội Đổi mới Sáng tạo Thực phẩm Toàn cầu
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="font-semibold text-primary">17/10 - 21/10/2026</div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Paris Nord Villepinte, Pháp</span>
                </td>
                <td className="py-space-md px-space-md">
                  <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-label-sm px-2 py-0.5 rounded">
                    Nước mắm truyền thống, Trái cây chế biến
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-outline" /> Lập kế hoạch tài trợ
                  </span>
                </td>
                <td className="py-space-md px-space-lg text-right">
                  <button className="px-space-md py-1.5 bg-surface-container text-primary font-label-md text-label-md rounded hover:bg-surface-container-high transition-all">
                    Xem tiêu chí chọn
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
