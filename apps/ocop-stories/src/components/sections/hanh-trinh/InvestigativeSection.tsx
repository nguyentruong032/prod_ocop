import Link from 'next/link';

export function InvestigativeSection() {
  return (
    <section className="w-full py-16 bg-surface">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#e2dbd0]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-6 bg-primary rounded-xs" />
            <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
              Ký sự Điền dã & Tiêu điểm Khởi nghiệp
            </h2>
          </div>
          <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider hidden sm:block">
            Chuyên luận chuyên sâu
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Lead Feature (Left, 8 Columns) */}
          <article className="lg:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-[#e2dbd0] group hover:shadow-md transition-shadow">
            <div className="relative overflow-hidden aspect-[16/9] w-full bg-[#e2dbd0]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Young Vietnamese agricultural engineer examining organic macadamia nuts harvest in Dak Lak plantation during golden sunrise light, wearing work clothes and checking quality, cinematic documentary photography style with deep green canopy and rich terracotta soil tones"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRt_sKT3ddwWX2xrHSOJ1uiAQwU6vEmmWde8jnezkIMfQVsSNCiVVNBfoYYYlAq6pAR9r4ZxKzlwyvnp5v8mGVa0bu11HGr1i0vdCLD9qd8FSIyTjz-NteCbC9vpkd9tRs0Z_q40Q5THxjWezgXSZEGYkI07qUIjRu358SAox_9iCAUqp5GdiSD_u-3cGYK698cstZDDT7ICpAOG9iaThNw7KGBTamXcPNv6JqOks"
                alt="Hành trình 7 năm của chàng kỹ sư 9x đưa hạt Mắc ca Đắk Lắk đạt chuẩn quốc tế"
               loading="lazy" decoding="async"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider shadow-xs">
                  Ký sự đặc biệt
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-xs text-primary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">location_on</span>
                  Đắk Lắk · Tây Nguyên
                </span>
              </div>
              <div className="absolute bottom-4 right-4 text-on-primary font-label-sm text-label-sm bg-primary/70 backdrop-blur-xs px-2.5 py-1 rounded">
                Thời lượng đọc: 10 phút
              </div>
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-4 text-label-sm font-label-sm text-on-surface-variant mb-4">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span> 14 Tháng 4, 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">person</span> Nhóm Phóng viên Kinh tế Nông nghiệp
                </span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-semibold">
                  OCOP 5 Sao tiềm năng
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-4 group-hover:text-secondary transition-colors">
                <Link href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop">
                  Hành trình 7 năm của chàng kỹ sư 9x đưa hạt Mắc ca Đắk Lắk đạt chuẩn quốc tế
                </Link>
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                Từ bỏ phòng thí nghiệm tự động hóa tại TP. Hồ Chí Minh với mức lương vạn người mơ ước, Nguyễn Văn Toàn trở về buôn làng Krông Năng. Đối diện với cái lắc đầu của bà con và khoản nợ tiền tỷ, anh kiên định số hóa quy trình sấy lạnh khép kín, đưa thương hiệu hạt Mắc ca Tây Nguyên xuất khẩu sang thị trường Nhật Bản và EU.
              </p>
              <div className="pt-6 border-t border-[#e2dbd0]/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-primary-fixed flex items-center justify-center font-bold font-headline-sm text-[16px]">
                    NV
                  </div>
                  <div>
                    <div className="text-label-md font-label-md text-primary font-semibold">Nguyễn Văn Toàn</div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant">
                      Giám đốc HTX Nông nghiệp Công nghệ cao Ea H&apos;leo
                    </div>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors text-label-md font-label-md"
                  href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop"
                >
                  <span>Đọc toàn văn ký sự</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Side Stack Stories (Right, 4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="bg-surface-container-low p-4 rounded-xl border border-[#e2dbd0]">
              <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">record_voice_over</span>
                Tiếng nói người tiên phong
              </span>
            </div>
            {/* Story 1 */}
            <article className="bg-surface-container-lowest p-5 rounded-xl border border-[#e2dbd0] hover:border-primary/40 transition-all flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant mb-2">
                  <span className="text-secondary font-semibold">Lào Cai · Dược liệu</span>
                  <span>8 phút đọc</span>
                </div>
                <h4 className="font-title-editorial text-title-editorial text-primary font-semibold mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  <Link href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop">
                    Nữ thủ lĩnh HTX Tả Phìn và câu chuyện đưa bài thuốc tắm Dao đỏ thành sản phẩm OCOP 4 sao
                  </Link>
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">
                  Chị Chảo Thị Yến quy tụ 80 phụ nữ dân tộc Dao gìn giữ 32 vị thuốc rừng quý, chuẩn hóa quy trình chiết xuất sinh học.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e2dbd0]/60 flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Tác giả: Minh An</span>
                <Link
                  href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop"
                  className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center font-semibold"
                >
                  Chi tiết →
                </Link>
              </div>
            </article>

            {/* Story 2 */}
            <article className="bg-surface-container-lowest p-5 rounded-xl border border-[#e2dbd0] hover:border-primary/40 transition-all flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant mb-2">
                  <span className="text-secondary font-semibold">Cà Mau · Rừng ngập mặn</span>
                  <span>6 phút đọc</span>
                </div>
                <h4 className="font-title-editorial text-title-editorial text-primary font-semibold mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  <Link href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop">
                    Từ bỏ lương nghìn USD về quê nuôi ong dưới tán rừng đước Mũi Cà Mau
                  </Link>
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">
                  Khai thác mật ong hoa đước tự nhiên bằng công nghệ gác kèo sinh thái, tạo sinh kế bền vững cho hàng chục hộ giữ rừng.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e2dbd0]/60 flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Tác giả: Thanh Tùng</span>
                <Link
                  href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop"
                  className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center font-semibold"
                >
                  Chi tiết →
                </Link>
              </div>
            </article>

            {/* Story 3 */}
            <article className="bg-surface-container-lowest p-5 rounded-xl border border-[#e2dbd0] hover:border-primary/40 transition-all flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant mb-2">
                  <span className="text-secondary font-semibold">Hà Nội · Làng nghề truyền thống</span>
                  <span>7 phút đọc</span>
                </div>
                <h4 className="font-title-editorial text-title-editorial text-primary font-semibold mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  <Link href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop">
                    Số hóa quy trình làm cốm Mễ Trì: Khởi nghiệp giữ nghề gia truyền thời 4.0
                  </Link>
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">
                  Bảo tồn hương cốm non mùa thu bằng bao bì màng sinh học nano phân hủy tự nhiên và hệ thống cấp đông sâu chuyên dụng.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e2dbd0]/60 flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Tác giả: Lê Hoàng</span>
                <Link
                  href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop"
                  className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center font-semibold"
                >
                  Chi tiết →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
