import React from 'react';

export function StarStoriesSection() {
  return (
    <section className="space-y-6 pt-6 border-t border-[#d5e1dc]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-secondary font-label-md">
            GHI CHÉP TÒA SOẠN
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-headline-md text-primary mt-1">
            Câu chuyện đằng sau hành trình thăng hạng sao OCOP
          </h2>
          <p className="text-on-surface-variant text-sm mt-1">
            Từ sản vật làng quê đến chứng nhận 5 sao Quốc gia: Khát vọng khẳng định vị thế nông sản Việt
          </p>
        </div>
        <a
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary transition-colors"
          href="#"
        >
          <span>Xem tất cả câu chuyện di sản</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Story 1 */}
        <article className="bg-[#f8f5ee] border border-[#e5decb] rounded overflow-hidden flex flex-col justify-between shadow-sm group">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Elderly Vietnamese master artisan with weathered hands delicately sorting green tea leaves in traditional wicker flat basket inside a morning sunlit rustic wooden cottage in Tan Cuong"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdenWJJFYekrJ8oEedeiXEoKZ4fNMVXaaGLmW03d-ShBseaCtuptntlksMJIew_v0yeZie7xo63XOE2Hb-0pJq8tQbi1GBwIVifw6PsQ9Q4w58uqfk-5BTL4oNLqX9L7QDATs5HXM0mMLjW7ecIzpggsVcrV5xlS_y1m3KhDDuISMSjcxq3fBMvjDGMYNIVcqia38Oh52MJ8J5M6ZaAsuU6grFTCAC2oW5TbnetKA"
              alt="Nghệ nhân chè Tân Cương"
             loading="lazy" decoding="async"/>
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Hành trình 5 Sao • Thái Nguyên
              </span>
              <h3 className="font-headline-sm font-bold text-lg text-primary mt-1.5 group-hover:text-secondary transition-colors">
                Hơi thở của sương và lửa: Đằng sau từng đọt Trà Đinh Tân Cương đạt chuẩn ngoại giao
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-2">
                Không chỉ đơn thuần là kỹ thuật sao chè bằng chảo gang củi lửa, hành trình đạt 5 sao Quốc gia đòi hỏi 7
                năm chuẩn hóa chỉ số vi lượng đất và quy trình đóng gói vô trùng đạt chuẩn FDA Hoa Kỳ.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-on-surface-variant pt-4 border-t border-[#e5decb]">
              <span>Tác giả: Minh Khang • 6 phút đọc</span>
              <span className="material-symbols-outlined text-secondary text-base">menu_book</span>
            </div>
          </div>
        </article>

        {/* Story 2 */}
        <article className="bg-[#f8f5ee] border border-[#e5decb] rounded overflow-hidden flex flex-col justify-between shadow-sm group">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="An expansive natural aerial perspective of the vast coastal fish sauce barrel houses in Phu Quoc Vietnam during gentle maritime dawn"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2kfUEENTOZzqpiI_r6iYFf_2lLU0BcUhq39AwXZwCn7ltRiyKrcAWApOaZAvRIoLqs-tqjZCAq0WTAce7nxVIwXhSHXp569Y-A6BaepLZiME35oHi26g23zudUJ_gEDGzE9o2cCn7s7y1shnAjfslOXJgxNClR2XRcazO4G-_1y5sczYpS5Ux0WEZ2byhlh2q8Hn4Ear0u8gKgwaXPuse3uGW-WtmcR99h49F530"
              alt="Nhà thùng nước mắm Phú Quốc"
             loading="lazy" decoding="async"/>
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Hành trình 5 Sao • Kiên Giang
              </span>
              <h3 className="font-headline-sm font-bold text-lg text-primary mt-1.5 group-hover:text-secondary transition-colors">
                Mặn mòi trăm năm thùng gỗ: Bảo vệ chỉ dẫn địa lý nước mắm Phú Quốc tại liên minh Châu Âu
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-2">
                Chuyện về những người giữ hồn nghề chượp cá cơm than, kiên định không pha đấu hương liệu công nghiệp,
                biến giọt nước mắm truyền thống thành niềm tự hào văn hóa ẩm thực toàn cầu.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-on-surface-variant pt-4 border-t border-[#e5decb]">
              <span>Tác giả: Tuệ An • 8 phút đọc</span>
              <span className="material-symbols-outlined text-secondary text-base">menu_book</span>
            </div>
          </div>
        </article>

        {/* Story 3 */}
        <article className="bg-[#f8f5ee] border border-[#e5decb] rounded overflow-hidden flex flex-col justify-between shadow-sm group">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Vietnamese indigenous Xo Dang woman tenderly holding a freshly uncovered wild Ngoc Linh ginseng flower pod amidst dense mystical misty canopy in Kon Tum mountain range"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJIUwlJW64mTEaJRQAAtyxSZciJd3OdgmirjTGhlqhahMg9aD6OQL3aQSohyMAzDw6alY2Ail9sGE6ynO8CmSIwXqWRRFOlNff_YskKxb3KaOv1wtaXBLcLKazLiAn6PvrELRBEKFfwH8lbU6tTrTs0TG8kDu61RGQyeTilrCc2YwTHJWaUH_xOM2CWq1x2wpGoJDcDbSnCsyPltd-4H3b0ByNSv5K6S2v56VeJL8"
              alt="Sâm Ngọc Linh Kon Tum"
             loading="lazy" decoding="async"/>
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Hành trình 5 Sao • Kon Tum
              </span>
              <h3 className="font-headline-sm font-bold text-lg text-primary mt-1.5 group-hover:text-secondary transition-colors">
                Dưới bóng đại ngàn Tu Mơ Rông: Khi đồng bào Xơ Đăng làm chủ chuỗi giá trị sâm Quốc bảo
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-2">
                Biến cây thuốc giấu của làng thành thương hiệu quốc gia 5 sao, bài toán bảo tồn nguồn gien bản địa và
                hành trình đưa bà con thoát nghèo bền vững qua mô hình HTX kiểu mới.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-on-surface-variant pt-4 border-t border-[#e5decb]">
              <span>Tác giả: Hoàng Sơn • 7 phút đọc</span>
              <span className="material-symbols-outlined text-secondary text-base">menu_book</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
