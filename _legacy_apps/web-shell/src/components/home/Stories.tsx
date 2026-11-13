'use client';

export function Stories() {
  return (
    <section className="w-full bg-[#f8f5ee] py-16" id="khoi-06-cau-chuyen" data-render="section-header" data-content-key="khoi-06-cau-chuyen">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div>
          <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-bold" data-field="label">
            CHUYÊN MỤC 03
          </span>
          <h2 className="font-headline-md text-headline-md font-bold text-primary mt-1" data-field="title">
            Những câu chuyện làm nên phần hồn sản phẩm OCOP.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl" data-field="description">
            Hành trình khởi nghiệp của các chủ thể, tinh hoa văn hóa bản địa và những thước phim chân thực về người giữ nghề.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Longform Feature Story (7 Cols) */}
          <article className="lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Elderly Vietnamese artisan tea master carefully roasting fresh tea leaves by hand over a traditional cast iron wok with warm glowing firewood embers, Tan Cuong Thai Nguyen authentic documentary portrait"
                data-img-src="image" data-img-alt="headline"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbcSvT6wzf5dGT-zwtx5-BiDFP77jMdvMBVXaaUFUnEFySbUKrmgksRzqoHX2iMGzmhfNg1kw8-5wigxLWQqTmrv5qFib3hTiPm3VsQtdbxwniB6gdgpw9YPppVcxG9Msys3OuJKYym0-qnJRvJkVceTANCLzBWxyNtdMXqa3u6pXp952xO91u181FCRe1T9UjxdBB4vsT--TquA7qK3bZvKZTPYkUunJlW0zO8vk" alt="Giữ lửa nghề sao chè truyền thống"  loading="lazy" decoding="async"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded bg-primary/90 text-surface-container-lowest font-label-sm text-label-sm font-medium" data-field="category">
                Văn hóa & Tinh hoa bản địa · Thái Nguyên
              </span>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant" data-field="readTime">5 phút đọc</span>
                <h3 className="font-title-editorial text-title-editorial md:text-headline-sm font-bold text-primary mt-2 group-hover:text-secondary transition-colors" data-field="headline">
                  Giữ lửa nghề sao chè truyền thống bên sườn núi Tân Cương
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed" data-field="excerpt">
                  Hơn bốn mươi năm gắn bó với đồi chè trung du, các nghệ nhân vẫn giữ cách sao chè bằng lửa củi, đôi bàn tay trần cảm nhận độ ấm của búp chè non...
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-surface-container">
                <span className="font-body-sm text-body-sm text-on-surface-variant italic" data-field="author">Ký sự điền dã của Ban Biên tập</span>
                <a className="font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  href="/cau-chuyen-ocop/giu-lua-nghe-sao-che-tan-cuong/index.html">
                  Đọc toàn bài viết <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
          {/* Right 3 Secondary Stories (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Story 1 */}
            <article className="bg-surface-container-lowest p-5 rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between group" data-collection="destinations" data-slug="hoi-an-quang-nam" data-content-key="hoi-an-quang-nam">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary font-medium" data-field="category">Hành trình chủ thể</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">4 phút đọc</span>
                </div>
                <h4 className="font-title-editorial text-title-editorial font-bold text-primary mt-2 group-hover:text-secondary transition-colors" data-field="headline">
                  Khát vọng hồi sinh giống lúa Séng Cù của người Dao đỏ
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2" data-field="desc">
                  Hành trình bảo tồn giống gạo thơm ngát trên những rẻo cao bậc thang Lào Cai qua nhiều thế hệ đồng bào.
                </p>
              </div>
              <div className="pt-3 mt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
                <span className="font-medium text-primary" data-field="author">HTX Nông nghiệp Bản Liền</span>
                <span className="material-symbols-outlined text-primary text-[16px]">read_more</span>
              </div>
            </article>
            {/* Story 2 */}
            <article className="bg-surface-container-lowest p-5 rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between group" data-collection="destinations" data-slug="sa-dec-dong-thap" data-content-key="sa-dec-dong-thap">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary font-medium" data-field="category">Văn hóa bản địa</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">6 phút đọc</span>
                </div>
                <h4 className="font-title-editorial text-title-editorial font-bold text-primary mt-2 group-hover:text-secondary transition-colors" data-field="headline">
                  Gìn giữ kỷ nghệ dệt thổ cẩm Chăm Châu Phong qua bao mùa nước nổi
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2" data-field="desc">
                  Nhịp thoi đưa bên bờ sông Hậu bảo lưu nét hoa văn dệt tay độc bản của phụ nữ làng nghề An Giang.
                </p>
              </div>
              <div className="pt-3 mt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
                <span className="font-medium text-primary" data-field="author">Làng nghề dệt thổ cẩm Châu Phong</span>
                <span className="material-symbols-outlined text-primary text-[16px]">read_more</span>
              </div>
            </article>
            {/* Story 3: Multimedia */}
            <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group" data-collection="stories" data-slug="thanh-am-gom-do-vinh-long" data-content-key="thanh-am-gom-do-vinh-long">
              <div className="relative w-full h-36 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Vinh Long red terracotta brick kiln towers glowing along Co Chien river canal, traditional artisan shaping red clay pottery with smoke rising in evening light"
                  data-img-src="image" data-img-alt="headline"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhvMm5-n987KKipgAbJ8WLcsuUuEyVO5hwp609-LQlzsMTMtmNq6gFi45P4uV9_WSls9qWxVLSFnZ3IRKwUi5t4oQFGD9kG2YqFJB10fmg6hrxD2tDFK6RMAXoQ4mKrTdetfgxGDAjU_1gmAmxOb7ejsH7c9wF8oTZXkIuLUJ7oiFoUdmX2bLOoFPl9oO7zvoLY8vKLScVcv8y8kaANZPggtfBADZzvxlupQd-87k" alt="Thanh âm gốm đỏ Vĩnh Long"  loading="lazy" decoding="async"/>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-surface-container-lowest/90 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                    Phóng sự đa phương
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/60 text-white font-label-sm text-label-sm" data-field="duration">
                    Video 12:45
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-title-editorial text-title-editorial font-bold text-primary group-hover:text-secondary transition-colors" data-field="headline">
                  Thanh âm gốm đỏ Vĩnh Long - Trăm tích trăm năm bên dòng Cổ Chiên
                </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="text-center mt-10">
          <a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-primary text-primary hover:text-on-primary font-label-md text-label-md font-medium shadow-xs transition-all"
            href="/cau-chuyen-ocop/index.html">
            <span>Đọc câu chuyện OCOP</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}