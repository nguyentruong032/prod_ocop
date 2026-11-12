import React from 'react';

export function MarketIntelligenceSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin space-y-space-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase font-bold">Dữ Liệu &amp; Báo Cáo</span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
              Tin Tức &amp; Báo Cáo Tình Báo Thị Trường
            </h2>
          </div>
          <div className="flex items-center gap-space-xs">
            <button className="px-space-md py-1.5 rounded bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors">
              Mới nhất
            </button>
            <button className="px-space-md py-1.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container transition-colors">
              Xem nhiều nhất
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* Card 1 */}
          <article className="bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Tư liệu cánh đồng chè hữu cơ trên núi cao mù sương Tây Bắc cùng nghệ nhân nông nghiệp kiểm tra búp non đạt chuẩn xuất khẩu Châu Âu ánh sáng ban mai."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU0Dko3JUEw6rm6yWLRWEVklFMQXjqoI8exFGGKhRK6aeOcGWB5R28slf5zmX5a-t_kkZM3pucBVnEPg46Xzj7J6BESZtT1PVtNV0F-fxc068oEAiL2kc_FVUVXDgjV9iMWc2wuDoVAaTylt2yklFY8Trz7yMyRcxtQUOkDX2bRFoR2DeiUeHm8VV5sQWsEEJ-Nz2SvQ5tC1y8GbYa2Hz6tzxI8uwkMuoiXgBfBd4"
                alt="Cánh đồng chè hữu cơ trên núi cao"
               loading="lazy" decoding="async"/>
              <span className="absolute top-3 left-3 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded">
                Thị trường Anh (UK)
              </span>
            </div>
            <div className="p-space-md space-y-space-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-outline">
                  <span className="flex items-center gap-1 text-secondary font-semibold">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +22.8% nhu cầu
                  </span>
                  <span>Cập nhật: 21/03/2026</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary tracking-tight mt-2">
                  Hậu Brexit: Anh Quốc điều chỉnh hạn ngạch thuế quan ưu đãi cho chè và gia vị đặc sản OCOP
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                  Cơ hội tận dụng UKVFTA khi London cắt giảm kiểm tra ngẫu nhiên đối với các cơ sở chế biến đạt chứng
                  nhận BRC Global Standard.
                </p>
              </div>
              <div className="pt-space-sm flex items-center justify-between text-label-sm font-label-sm text-outline">
                <span className="italic">Chuyên viên: Đoàn Tuấn Anh (Vụ Thị trường Âu Mỹ)</span>
                <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Khu xưởng sản xuất gốm mỹ nghệ truyền thống với nghệ nhân chuốt gốm thủ công men tro cổ kính của làng gốm Chu Đậu phục vụ xuất khẩu thị trường Nhật Bản."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJXaTIbfBbOE7wTUbCHukrRltyjDRoRomSxgdDUdeN1l_WBIDS6vU60eqz1qC80huRQ74xxAg3rMsLp5sMQmIGcS0w647CHPcZBISKuZyRDqFHN7xeD9rVGJuitnbsuMLIAnOLI2q-qoET64P-35nLZBrw0rf7CoRdfUqkOCNSv0Je-bnNcEQSzftO2VeCEr5zsobHYOnxiT0LhVSXwgPboEC8oqmSLmSVOgOB74c"
                alt="Khu xưởng sản xuất gốm mỹ nghệ Chu Đậu"
               loading="lazy" decoding="async"/>
              <span className="absolute top-3 left-3 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded">
                Thị trường Nhật Bản
              </span>
            </div>
            <div className="p-space-md space-y-space-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-outline">
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    <span className="material-symbols-outlined text-[14px]">verified</span> Ổn định dài hạn
                  </span>
                  <span>Cập nhật: 19/03/2026</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary tracking-tight mt-2">
                  Chuỗi cung ứng thủ công mỹ nghệ: Tiêu chuẩn kiểm soát hóa chất chì &amp; cadmium trên men gốm sứ
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                  Hướng dẫn làng nghề gốm sứ Chu Đậu và Bát Tràng đáp ứng Đạo luật Vệ sinh Thực phẩm MHLW của Nhật Bản
                  đối với dụng cụ chứa đựng ẩm thực.
                </p>
              </div>
              <div className="pt-space-sm flex items-center justify-between text-label-sm font-label-sm text-outline">
                <span className="italic">Chuyên gia: ThS. Vũ Minh Trí (Hiệp hội Làng nghề)</span>
                <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Nông dân thu hái hồ tiêu hữu cơ trên giàn cao tại Phú Quốc nắng vàng rực rỡ, quả tiêu căng bóng hạt đỏ và đen chọn lọc đóng gói chân không."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtxCpc-_fNo1yKaBiW8YqhSjgMNcOIhnkEUwB0ss9HWokaWtUmZccDcsla9DVCFZ0LmeVuvvd2uawgYFUWKmp5CFHNyGK45ez9uVrKeOFb-AMQ0V51kdz-D5BFv3vgYGNOYOyVGi1YaWCcOhho8jxy9lWyc1H0vXpC6e46KdLCMdLyx5_u4MSVm1Rs-g-Job-wx3igDZ8uYBCXTIueNOE5lzQEPkBRnRK3xjJp9gQ"
                alt="Thu hái hồ tiêu Phú Quốc"
               loading="lazy" decoding="async"/>
              <span className="absolute top-3 left-3 bg-tertiary-container text-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded">
                Thị trường Hoa Kỳ
              </span>
            </div>
            <div className="p-space-md space-y-space-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-outline">
                  <span className="flex items-center gap-1 text-secondary font-semibold">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +31.5% kim ngạch
                  </span>
                  <span>Cập nhật: 17/03/2026</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary tracking-tight mt-2">
                  Hồ tiêu Phú Quốc &amp; Thảo quả Tây Bắc: Khai thác phân khúc gia vị Gourmet tại các siêu thị New York
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                  Phân tích thị hiếu tiêu dùng gia vị nguyên bản, hữu cơ đóng cối xay sẵn của phân khúc khách hàng
                  thượng lưu bờ Đông Hoa Kỳ.
                </p>
              </div>
              <div className="pt-space-sm flex items-center justify-between text-label-sm font-label-sm text-outline">
                <span className="italic">Tham vấn: Thương vụ Việt Nam tại Hoa Kỳ</span>
                <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Chế biến hạt điều rang muối thủ công tại Bình Phước đóng gói hộp thiếc cao cấp trang trí hoa văn dân gian đạt chứng chỉ Halal quốc tế."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_V_dt_ewu-F6QOsG6PXZgxcMwpSNPZg2Dum2TvGKb146K9xdqUFIZOAMfLE_VpIW3bBgWnPfGDgv7dSkm4b1kAqxF-MXjA24p6ihO4Nvca6HRXzMUepTXP9BAeTHgKCGF8-V_4tLWMn76x0hoekbku24vnXIBbf-fKxZzol9n39mo43OotmJmaQSqFXm-YAI_xlIUGljVoN0gRqAeeXdXa03GbKDTy33U9GZVbZA"
                alt="Chế biến hạt điều Bình Phước"
               loading="lazy" decoding="async"/>
              <span className="absolute top-3 left-3 bg-primary-container text-primary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded">
                Thị trường Trung Đông
              </span>
            </div>
            <div className="p-space-md space-y-space-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-outline">
                  <span className="flex items-center gap-1 text-secondary font-semibold">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +18.4% tiêu thụ
                  </span>
                  <span>Cập nhật: 14/03/2026</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary tracking-tight mt-2">
                  Mở rộng mạng lưới phân phối hạt điều và trái cây sấy dẻo OCOP sang các đại siêu thị Lulu Hypermarket
                  tại Dubai
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                  Thỏa thuận song phương giữa Cục Chế biến &amp; Phát triển Thị trường Nông sản với chuỗi bán lẻ bán
                  đảo Ả Rập chuẩn bị cho mùa Ramadan 2026.
                </p>
              </div>
              <div className="pt-space-sm flex items-center justify-between text-label-sm font-label-sm text-outline">
                <span className="italic">Chuyên viên: Nguyễn Hải Đăng (Đại sứ quán VN tại UAE)</span>
                <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
              </div>
            </div>
          </article>

          {/* Card 5 */}
          <article className="bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Chai rượu vang sim rừng Phú Quốc và mật hoa dừa Trà Vinh trưng bày trang trọng tại triển lãm công nghiệp thực phẩm quốc tế ở Paris Pháp."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCueE2VmFGZIki8JIbmOAGpwswdG9WicLp5EG2CXAKfQPrm7AJ-HSEUMKws0KVExzgJkHc4o-h3Chy8fp1VQYWoZP1A_ls_p4ZUr8Ln7CIO8qTUytqSGdfoBp3ql9p_Zw91hffMyiXV4Vwew50rZ1hd_rOS-z5tQAD5AKh-UfEvWH4MrZPk_AxrbzHksYRnWYurCwa8cs-LLBFrYyxYnUZcsM4n-buUwmXUYfXmou4"
                alt="Rượu vang sim rừng Phú Quốc và mật hoa dừa Trà Vinh"
               loading="lazy" decoding="async"/>
              <span className="absolute top-3 left-3 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded">
                Thị trường Pháp (France)
              </span>
            </div>
            <div className="p-space-md space-y-space-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-outline">
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    <span className="material-symbols-outlined text-[14px]">local_fire_department</span> Điểm nóng
                  </span>
                  <span>Cập nhật: 11/03/2026</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary tracking-tight mt-2">
                  Nước ép mật hoa dừa &amp; đường hoa dừa Trà Vinh: Chinh phục thị trường sản phẩm thuần chay (Vegan)
                  Paris
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                  Chứng nhận thuần chay châu Âu cùng chỉ số đường huyết thấp (Low GI) tạo nên đột phá doanh số cho hợp
                  tác xã Khmer Nam Bộ.
                </p>
              </div>
              <div className="pt-space-sm flex items-center justify-between text-label-sm font-label-sm text-outline">
                <span className="italic">Chuyên gia: Trần Thu Dung (Hội Doanh nhân VN tại Pháp)</span>
                <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
              </div>
            </div>
          </article>

          {/* Card 6 */}
          <article className="bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Phòng thí nghiệm kiểm định nông sản hiện đại kiểm tra dư lượng dược chất trong sâm Ngọc Linh và đông trùng hạ thảo bằng thiết bị HPLC chính xác cao."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByn8AAB2jXbdVnSKV4ofi-AyqfO2f374bFdYir1X5B1UMeovf07LZrjdNeI9Ho4lHSudv0gZADFFx2YYF26R1pap9BX-65Ymnj_B8soYpQKeVlHbVshPq5-77QwyJQGJrFIxA_GoWrPT7elMaHV-8d9Q3g2AzAfncDaj26J2cB1-MOaGv-ItV8dTgXe3ZodcflJigupLApcU3GarEHUfF8OVxYau7sZkdsmQvfoH4"
                alt="Kiểm định sâm Ngọc Linh"
               loading="lazy" decoding="async"/>
              <span className="absolute top-3 left-3 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded">
                Thị trường Hàn Quốc
              </span>
            </div>
            <div className="p-space-md space-y-space-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-outline">
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    <span className="material-symbols-outlined text-[14px]">verified</span> Giá trị cao
                  </span>
                  <span>Cập nhật: 09/03/2026</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-primary tracking-tight mt-2">
                  Sâm Ngọc Linh &amp; Thảo dược Kon Tum: Đàm phán quy chế bảo hộ tương đương nhân sâm Hàn Quốc
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                  Thành công bước đầu trong việc đưa định danh Saponin MR2 vào danh mục dược thảo được cơ quan an toàn
                  KFDA công nhận nhập khẩu nguyên liệu.
                </p>
              </div>
              <div className="pt-space-sm flex items-center justify-between text-label-sm font-label-sm text-outline">
                <span className="italic">Nghiên cứu: Viện Dược liệu Quốc gia</span>
                <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
