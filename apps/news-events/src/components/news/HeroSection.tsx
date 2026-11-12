interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={`max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl ${className || ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        {/* Featured News Card - 7 cols on lg */}
        <article className="lg:col-span-7 bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1LEKw4aCODgV45-iQaN0q8iZ_gEeTYAjLyEO02l94ftTwYR47TLIyUqEYfDWOPA42VYpbB7HMyZxedzAeT6MjvQ0zZRLlW0GO-3ZBBWd2aAqpSE3dgBPvGVftTiaG8MBsyw5cYsS4BlBChA-ADgUVUFVJC9KYa3QGx_CGfEFw85py_DUI81xNIlS2nryXrM7a1FQ5_Fft0DJzzhdqhISc04k2vD7nQuldZkpn6hA"
              alt="Hội nghị Quốc hội về chính sách OCOP: các bộ trưởng nông nghiệp, giám đốc hợp tác xã, chuyên gia kinh tế thảo luận tài liệu chính sách. Bàn gỗ sơn tự nhiên, background con dấu nhà nước, ánh sáng tự nhiên định hướng, nhiếp ảnh báo chí nghiêm túc với điểm nhấn xanh rừng sâu."
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute top-4 left-4">
              <span className="px-space-md py-1 bg-secondary text-on-secondary text-label-sm font-label-sm rounded uppercase tracking-wider shadow">
                Tiêu điểm Nghị quyết
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/90 to-transparent p-space-md pt-8 text-surface-container-lowest">
              <span className="font-label-sm text-label-sm text-tertiary-fixed flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">event</span>
                Hà Nội • Ngày 20/10/2026 • 6 phút đọc tư liệu
              </span>
            </div>
          </div>
          <div className="p-space-lg flex flex-col flex-1">
            <h3 className="font-title-editorial text-[24px] leading-tight font-bold text-primary mb-space-sm hover:text-secondary transition-colors cursor-pointer">
              Nghị quyết mới về gói tín dụng xanh và cơ chế hỗ trợ chủ thể OCOP giai đoạn 2026–2030
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-space-md">
              Chính phủ vừa ban hành cơ chế đặc thù cho các hợp tác xã nông nghiệp ứng dụng công nghệ số, hỗ trợ bù lãi suất 2,5%/năm và tháo gỡ điểm nghẽn tài sản bảo đảm đối với đất nông nghiệp tập trung. Đây được xem là động lực sống còn để chuyển đổi các đặc sản 3-4 sao lên chuẩn xuất khẩu quốc tế.
            </p>
            {/* Legal Excerpt Callout */}
            <div className="bg-surface-container-low p-space-md rounded mb-space-md">
              <div className="flex items-start gap-space-sm text-body-sm font-body-sm text-on-surface italic">
                <span className="material-symbols-outlined text-[20px] text-primary shrink-0 not-italic">format_quote</span>
                <span className="">"Ưu tiên 100% nguồn vốn xúc tiến thương mại số cho các chủ thể do phụ nữ và đồng bào thiểu số làm chủ tại vùng sâu, vùng xa có chứng nhận OCOP từ 4 sao trở lên." — <em>Trích Điều 8, Khoản 2</em></span>
              </div>
            </div>
            <div className="mt-auto pt-space-sm flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary-container text-surface-container-lowest flex items-center justify-center font-bold text-xs">
                  TS
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-semibold text-primary">TS. Nguyễn Hồng Lam</span>
                  <span className="text-[11px] text-on-surface-variant">Viện Kinh tế Nông thôn</span>
                </div>
              </div>
              <a className="inline-flex items-center text-secondary font-label-md text-label-md uppercase tracking-wider hover:text-on-secondary-container transition-colors" href="#">
                Đọc toàn văn hồ sơ
                <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </article>

        {/* 3 Spotlight News Cards - 5 cols on lg */}
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <article className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow transition-shadow flex gap-space-md">
            <div className="w-32 h-28 shrink-0 overflow-hidden rounded bg-surface-container">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiMzMYgaInIxCbLdTfUmCMq7ci1Zamgtl7_EeBOGDxyvC0siC7tHpjVbqA6gNn84Ob4qG5SaiOmWve3C8LJJhUSpiUvhW-vySrMQ4zpQLT97sEFKqGMU64TPuXCx0CpQQ-iXMSJaNVAtXq-xwU24CO1NUhGN3WrF8dNEHVJPUJOmFfCKqVBD3lm5A584D6yODw-ws9Bh6JO9HBC4oPFgtlmimLw-UY00dTqEPcMhQ" alt="Xưởng chế biến thảo dược truyền thống Việt Nam với máy sấy năng lượng mặt trời hiện đại và tem chứng nhận sinh học. Ánh sáng tự nhiên mềm nhấn mạnh lá trà thảo dược màu hổ phách và khay tre tự nhiên." loading="eager" fetchPriority="high" decoding="async" />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Chuỗi giá trị</span>
                <h4 className="font-title-editorial text-title-editorial font-bold text-primary line-clamp-2 hover:text-secondary cursor-pointer mt-1">
                  Định hướng chuẩn hóa chuỗi giá trị OCOP gắn với kinh tế tuần hoàn
                </h4>
              </div>
              <div className="flex items-center justify-between text-body-sm text-outline mt-2">
                <span>18/10/2026</span>
                <span className="flex items-center gap-1 text-on-surface-variant text-[12px]"><span className="material-symbols-outlined text-[14px]">schedule</span> 4 phút đọc</span>
              </div>
            </div>
          </article>

          <article className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow transition-shadow flex gap-space-md">
            <div className="w-32 h-28 shrink-0 overflow-hidden rounded bg-surface-container">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh7Lf3CR6Q6gDdPr73iwIfUaD7VGQCwBqbMZD_B5lM2GMxNfM0SAK3d_Tdoa0ikaGhMHoZkSdYhAbK2FmfbSaehb3ZlLJ8frhd_HEjHXM4Ub8t4pRdo5grlQUx7j31XWuo16QQURkbL6lZQcK5Hm8TRvBE6ocpCCHkpAo0muESOzzCK07SHW8Vb4rE0VrFGLc3yeFEQGM3sFVtDPU2geoxnWuEyWd_UT48qnzzXow" alt="Máy tính bảng hiển thị mã QR truy xuất nguồn gốc độ phân giải cao và văn bản chứng nhận sao quốc gia cạnh ly trà thủ công gốm trong studio nghệ nhân tối giản. Tông màu đất mờ, ánh sáng xanh rừng và terracotta." loading="eager" fetchPriority="high" decoding="async" />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="font-label-sm text-label-sm text-surface-tint uppercase font-semibold">Số hóa thẩm định</span>
                <h4 className="font-title-editorial text-title-editorial font-bold text-primary line-clamp-2 hover:text-secondary cursor-pointer mt-1">
                  Quy trình thẩm định và tái cấp chứng nhận 4-5 sao theo chuẩn dữ liệu quốc gia
                </h4>
              </div>
              <div className="flex items-center justify-between text-body-sm text-outline mt-2">
                <span>15/10/2026</span>
                <span className="flex items-center gap-1 text-on-surface-variant text-[12px]"><span className="material-symbols-outlined text-[14px]">schedule</span> 5 phút đọc</span>
              </div>
            </div>
          </article>

          <article className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow transition-shadow flex gap-space-md">
            <div className="w-32 h-28 shrink-0 overflow-hidden rounded bg-surface-container">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS6aFP6GKdjnwEa_gHT6MWH7G2yDappzViuwKx6ULQAGRPB5uejZ4yME1WrAjwdDl1QojvPMfDx5eONRfNS1XkDUUZKAzrx-ZgHyYnq_qYK4mNKKg0UGLyIiRi2XEUaFd9JsitfWkcr_8nuRgJynqgbsv2ZVmN_XMFq2zXX16rrA-Gz3RYOo-B-BOWW2h0bzdRm3ohJrBnKR_9tAtgMd6Z81W4S778HqNaCW7Tq0c" alt="Chứng nhận Chỉ dẫn địa lý chính bản đóng dấu đỏ chính thức đặt cạnh trái bưởi chín và hộp sơn mài truyền thống. Ánh sáng studio mềm kiến trúc, không gian lưu trữ học thuật." loading="eager" fetchPriority="high" decoding="async" />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Sở hữu trí tuệ</span>
                <h4 className="font-title-editorial text-title-editorial font-bold text-primary line-clamp-2 hover:text-secondary cursor-pointer mt-1">
                  Cơ chế bảo hộ quyền sở hữu trí tuệ và Chỉ dẫn địa lý cho sản phẩm bản địa
                </h4>
              </div>
              <div className="flex items-center justify-between text-body-sm text-outline mt-2">
                <span>12/10/2026</span>
                <span className="flex items-center gap-1 text-on-surface-variant text-[12px]"><span className="material-symbols-outlined text-[14px]">schedule</span> 7 phút đọc</span>
              </div>
            </div>
          </article>

          {/* Banner Alert Box */}
          <div className="bg-primary text-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">folder_special</span>
              <div>
                <p className="font-label-md text-label-md font-semibold text-tertiary-fixed">Hồ sơ thẩm định cấp Quốc gia đợt 2</p>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim">Tiếp nhận hồ sơ đến hết 30/11/2026</p>
              </div>
            </div>
            <a className="px-space-md py-1 bg-tertiary-fixed text-tertiary font-label-sm text-label-sm uppercase font-bold rounded hover:bg-surface-container-lowest transition-colors" href="#">
              Xem mẫu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}