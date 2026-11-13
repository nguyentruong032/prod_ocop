export function PlaybookSection() {
  return (
    <section className="w-full py-16 bg-[#f8f5ee] border-y border-[#e2dbd0]">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-label-md font-label-md uppercase tracking-wider text-secondary font-bold flex items-center gap-1.5 mb-2">
              <span className="material-symbols-outlined text-[18px]">menu_book</span> Cẩm nang thực hành OCOP
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
              Góc Chia sẻ Kinh nghiệm & Bài học Thực chiến
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Đúc kết từ hơn 200 buổi tọa đàm điền dã giữa các chuyên gia thẩm định, cố vấn kinh tế nông nghiệp và các nhà sáng lập trẻ.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Playbook 1 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-[#e2dbd0] flex flex-col justify-between hover:-translate-y-1 transition-transform shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-primary-container flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[28px]">payments</span>
              </div>
              <div className="text-label-sm font-label-sm text-secondary uppercase font-semibold mb-1">
                Chủ đề 01 · Tài chính
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary font-bold mb-3">
                Vốn & Tín dụng Xanh cho HTX mới thành lập
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Cách tiếp cận các gói vay ưu đãi từ Ngân hàng Chính sách Xã hội và quỹ tín thác phát triển nông thôn bền vững không thế chấp tài sản lớn.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e2dbd0]/60 flex items-center justify-between text-body-sm font-label-md text-primary font-semibold">
              <span>5 tài liệu đính kèm</span>
              <span className="material-symbols-outlined text-[20px]">download</span>
            </div>
          </div>
          {/* Playbook 2 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-[#e2dbd0] flex flex-col justify-between hover:-translate-y-1 transition-transform shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-tertiary flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[28px]">auto_stories</span>
              </div>
              <div className="text-label-sm font-label-sm text-secondary uppercase font-semibold mb-1">
                Chủ đề 02 · Thương hiệu
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary font-bold mb-3">
                Chuẩn hóa bao bì & Viết câu chuyện sản phẩm
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Biến truyền thuyết dân gian, tri thức bản địa thành narrative truyền thông có tính pháp lý sở hữu trí tuệ và hấp dẫn trên kệ hàng siêu thị.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e2dbd0]/60 flex items-center justify-between text-body-sm font-label-md text-primary font-semibold">
              <span>Mẫu hồ sơ chuẩn</span>
              <span className="material-symbols-outlined text-[20px]">description</span>
            </div>
          </div>
          {/* Playbook 3 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-[#e2dbd0] flex flex-col justify-between hover:-translate-y-1 transition-transform shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[28px]">diversity_3</span>
              </div>
              <div className="text-label-sm font-label-sm text-secondary uppercase font-semibold mb-1">
                Chủ đề 03 · Liên kết
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary font-bold mb-3">
                Xây dựng vùng nguyên liệu liên kết bền vững
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Nghệ thuật đàm phán hợp đồng bao tiêu, xây dựng quy chế chia sẻ lợi nhuận minh bạch và thuyết phục nông dân tuân thủ chuẩn GlobalGAP.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e2dbd0]/60 flex items-center justify-between text-body-sm font-label-md text-primary font-semibold">
              <span>Sơ đồ chuỗi giá trị</span>
              <span className="material-symbols-outlined text-[20px]">account_tree</span>
            </div>
          </div>
          {/* Playbook 4 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-[#e2dbd0] flex flex-col justify-between hover:-translate-y-1 transition-transform shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-lg bg-orange-50 text-secondary flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[28px]">storefront</span>
              </div>
              <div className="text-label-sm font-label-sm text-secondary uppercase font-semibold mb-1">
                Chủ đề 04 · Thị trường
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary font-bold mb-3">
                Chinh phục E-commerce và chuỗi siêu thị cao cấp
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Chiến lược bán buôn B2B vào hệ thống bán lẻ khó tính, kết hợp livestream tại vườn và quản trị chuỗi cung ứng lạnh đường dài.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e2dbd0]/60 flex items-center justify-between text-body-sm font-label-md text-primary font-semibold">
              <span>Bộ checklist 28 bước</span>
              <span className="material-symbols-outlined text-[20px]">checklist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
