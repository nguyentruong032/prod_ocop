import Link from 'next/link';

export function LongformSpotlightSection() {
  return (
    <section
      className="w-full bg-[#f8f5ee] py-16 lg:py-24"
      id="longform-spotlight"
      data-render="section-header"
      data-content-key="khoi-03-longform"
    >
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-secondary text-[24px]">bookmark_heart</span>
          <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">
            TÂM ĐIỂM KÝ SỰ BÁO CHÍ
          </span>
        </div>
        {/* Feature Card 3:2 layout */}
        <article className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-transform hover:-translate-y-1 duration-300">
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[540px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="Vietnamese tea master tenderly roasting green tea leaves with bare hands in a cast iron pan over an ancestral wood fire hearth, glowing embers, amber light, smoke wisps, cultural documentary aesthetic"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdtNJJfs2RsPk47bhFbSk0CpDQNEHbCuFOcLVvKSs4EL5tJ44mnahclkwXZLpIhFgwrczvQ-qpZZehBi5LWDQjlhif-uy67NwT5XVRITyee9PWu_GwwvktilIHoIwA8_-qafvtZQlIUFH_8P4TWPnZXXpcI-glLjZ8D53oMom29iDoiuLGxPNqDA8dFyeYj3Q7qV6swDoSolrFMaK7Xtk5gC2mpapYlnAE_h4Vv38')",
              }}
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-medium">
                Longform Di Sản
              </span>
              <span className="px-3 py-1 rounded bg-surface-container-lowest text-tertiary-container font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm">
                <span
                  className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>{' '}
                5 Sao Quốc Gia
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-surface-container-lowest">
            <div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-4">
                <span className="text-secondary font-semibold">Văn hóa & Tinh hoa bản địa</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> Thái Nguyên
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface mb-6 leading-tight font-bold">
                Giữ lửa nghề sao chè truyền thống bên sườn núi Tân Cương
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Hơn bốn mươi năm gắn bó với đồi chè trung du, các nghệ nhân vẫn giữ cách sao chè bằng lửa củi. Từng ngón tay cảm nhận độ nóng của chảo gang, từng cánh trà xoăn tít đượm hương cốm non mộc mạc làm nên danh trà đất Việt.
              </p>
              <div className="flex items-center gap-4 text-on-surface-variant font-body-sm text-body-sm mb-8 pb-6 border-b border-[#e8efea]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">schedule</span> 5 phút đọc
                </span>
                <span>•</span>
                <span>Chấp bút: Ban Văn hóa Di sản</span>
                <span>•</span>
                <span className="text-primary font-medium">Tư liệu lưu trữ 2026</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Link
                className="h-11 px-6 rounded bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center gap-2 font-label-md text-label-md shadow-sm"
                href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
              >
                <span>Đọc câu chuyện</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              <div className="flex items-center gap-3 text-outline">
                <button className="p-2 rounded-full hover:bg-surface-container transition-colors" title="Lưu bài viết">
                  <span className="material-symbols-outlined text-[20px]">bookmark_add</span>
                </button>
                <button className="p-2 rounded-full hover:bg-surface-container transition-colors" title="Chia sẻ">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
