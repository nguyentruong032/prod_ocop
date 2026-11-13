import { Metadata } from 'next';
import Link from 'next/link';
import { SubmissionForm } from '@/components/submission/SubmissionForm';

export const metadata: Metadata = {
  title: 'Gửi bài & Hồ sơ OCOP | Cổng kết nối Tòa soạn OCOP Việt Nam',
  description:
    'Diễn đàn bạn đọc và Cổng kết nối Tòa soạn OCOP Việt Nam. Nơi lắng nghe góc nhìn chuyên gia, ý kiến bạn đọc và tiếp nhận bài viết cộng tác, hồ sơ giới thiệu từ các chủ thể OCOP.',
};

export default function GuiBaiHoSoOcopPage() {
  return (
    <main className="w-full bg-background min-h-screen pt-0">
      {/* SUB-CATEGORY HEADER */}
      <div className="flex flex-col w-full">
        {/* KHỐI 02 – HERO & ĐIỀU HƯỚNG TIỂU MỤC */}
        <section className="relative w-full overflow-hidden bg-primary text-on-primary pt-16 pb-20 md:pb-28">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center mix-blend-overlay opacity-30"
              data-alt="Editorial team researching native Vietnamese agricultural records and artisanal crafts in a warm, scholarly studio bathed in soft morning light with handmade parchment and botanical specimen books"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1a0YjOslP8_uOfJJyFq9NDSSOFFPWMkrNEEBsKwNIq8iE3Ol5wc0f8_9IeGaZXVz6udi84xnEjqjk-Df7lEVmJueHNp1mvyLBQoEEXoT1mt4w3Geo5YVzn3EiOUo3GyEzL0wL9O5WepZobcISQ6wY9WTMSYpWDPLWC6XI2g5evyhw5seUUljJzNq5ngEOwcGTeqwwVlDU-UvvIVuc_qkyqP8EDQBIDvxsLjNbTIY')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
          </div>
          <div className="relative z-10 w-full max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet xl:px-gutter flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-tertiary-container/30 border border-tertiary-fixed-dim/30">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim" />
              <span className="font-label-md text-label-md tracking-wider uppercase text-tertiary-fixed-dim">
                BẠN ĐỌC &amp; TÒA SOẠN
              </span>
            </div>
            {/* Headline Hero */}
            <h1 className="font-headline-lg text-headline-lg md:text-display-hero text-on-primary max-w-4xl tracking-tight leading-tight mb-6">
              Diễn đàn bạn đọc và Cổng kết nối Tòa soạn OCOP Việt Nam
            </h1>
            {/* Description */}
            <p className="font-lead-paragraph text-lead-paragraph text-slate-200 max-w-3xl mb-8 font-light">
              Nơi lắng nghe góc nhìn chuyên gia, ý kiến bạn đọc và tiếp nhận bài viết cộng tác, hồ sơ giới thiệu từ các
              chủ thể OCOP trên cả nước.
            </p>
            {/* Action Button & Navigation */}
            <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2 border-t border-outline-variant/10">
              <a
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition shadow-md w-fit"
                href="#khu-vuc-bieu-mau"
              >
                <span className="material-symbols-outlined text-lg">edit_note</span>
                <span>Gửi bài / Liên hệ hợp tác</span>
              </a>
              {/* Sub-section Navigation Bar (Glassmorphism Pill) */}
              <nav
                aria-label="Điều hướng tiểu mục"
                className="flex items-center p-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md border border-surface-container-lowest/15 shadow-sm"
              >
                <a
                  className="px-5 py-2 rounded-full font-label-md text-label-md text-on-primary bg-surface-container-lowest/20 transition-all hover:bg-surface-container-lowest/30 flex items-center gap-1.5"
                  href="#khu-vuc-bieu-mau"
                >
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">forward_to_inbox</span>
                  <span>Gửi bài / Hợp tác</span>
                </a>
                <a
                  className="px-5 py-2 rounded-full font-label-md text-label-md text-slate-300 hover:text-on-primary transition-all flex items-center gap-1.5"
                  href="#goc-nhin-tieu-diem"
                >
                  <span className="material-symbols-outlined text-[16px]">forum</span>
                  <span>Ý kiến &amp; Góc nhìn</span>
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* KHỐI 05 – KHU VỰC BIỂU MẪU TRỰC TUYẾN (2 TAB CHUYỂN ĐỔI) */}
        <SubmissionForm />

        {/* KHỐI 03 – Ý KIẾN BẠN ĐỌC & GÓC NHÌN TIÊU ĐIỂM */}
        <section className="w-full py-20 bg-surface-container-lowest text-on-surface" id="goc-nhin-tieu-diem">
          <div className="w-full max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet xl:px-gutter">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-2">
                  GÓC NHÌN &amp; ĐỐI THOẠI
                </span>
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
                  Góc nhìn chuyên gia và tiếng nói từ thực tiễn bạn đọc.
                </h2>
              </div>
              <a
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-on-primary transition font-label-md text-label-md shrink-0"
                href="#danh-sach-goc-nhin"
              >
                <span>Xem góc nhìn bạn đọc</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Featured Editorial Quote Card (Left 7 Cols) */}
              <article className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute -right-8 -bottom-10 opacity-5 select-none pointer-events-none text-primary">
                  <span className="material-symbols-outlined text-[240px]">format_quote</span>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                      Bảo tồn tri thức bản địa
                    </span>
                    <span className="text-outline text-label-sm">•</span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">Tháng 10/2026</span>
                    <span className="text-outline text-label-sm">•</span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">6 phút đọc</span>
                  </div>
                  <div className="mb-8">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4 block">
                      format_quote
                    </span>
                    <blockquote className="font-quote-display text-quote-display text-on-surface leading-relaxed italic">
                      “Giá trị lớn nhất của OCOP không nằm ở số lượng đơn hàng tức thời, mà ở sự phục sinh của lòng tự hào
                      bản địa. Mỗi cây cầu nối văn hóa giữa làng quê và người tiêu dùng trí thức là một lần chúng ta bảo
                      vệ thành công kho tàng tri thức ngàn năm của tổ tiên.”
                    </blockquote>
                  </div>
                </div>
                <div className="relative z-10 pt-6 border-t border-outline-variant/40 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm shrink-0">
                    NM
                  </div>
                  <div>
                    <h3 className="font-title-editorial text-title-editorial text-primary font-semibold">
                      ThS. Nguyễn Đình Minh
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Viện Nghiên cứu Nông nghiệp bản địa &amp; Phát triển Nông thôn
                    </p>
                  </div>
                </div>
              </article>

              {/* 3 Story Cards Stack (Right 5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4" id="danh-sach-goc-nhin">
                {/* Card 1 */}
                <article className="bg-surface rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                        Chuyển đổi số
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">Góc nhìn</span>
                    </div>
                    <h4 className="font-title-editorial text-title-editorial text-on-surface line-clamp-2 mb-2">
                      Chuyển đổi số trong HTX không chỉ là đưa sản phẩm lên sàn
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">
                      Chuyển đổi số trong HTX không chỉ là đưa sản phẩm lên sàn, mà là số hóa câu chuyện của người làm
                      nghề.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-outline-variant/30">
                    <span className="material-symbols-outlined text-[16px] text-primary">school</span>
                    <span className="font-body-sm text-body-sm font-medium text-primary">TS. Hoàng Bích Ngọc</span>
                    <span className="text-outline text-body-sm">–</span>
                    <span className="font-body-sm text-body-sm text-outline truncate">Học viện Nông nghiệp Việt Nam</span>
                  </div>
                </article>

                {/* Card 2 */}
                <article className="bg-surface rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase font-semibold">
                        Bảo hộ xuất xứ
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">Ý kiến cơ sở</span>
                    </div>
                    <h4 className="font-title-editorial text-title-editorial text-on-surface line-clamp-2 mb-2">
                      Cần cơ chế bảo hộ chỉ dẫn địa lý nghiêm ngặt cho dược liệu
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">
                      Cần cơ chế bảo hộ chỉ dẫn địa lý nghiêm ngặt hơn cho các vùng nguyên liệu dược liệu quý tự nhiên bản
                      địa.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-outline-variant/30">
                    <span className="material-symbols-outlined text-[16px] text-primary">person</span>
                    <span className="font-body-sm text-body-sm font-medium text-primary">Độc giả Lê Văn Tuấn</span>
                    <span className="text-outline text-body-sm">–</span>
                    <span className="font-body-sm text-body-sm text-outline truncate">HTX Dược liệu Tây Bắc</span>
                  </div>
                </article>

                {/* Card 3 */}
                <article className="bg-surface rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">
                        Trải nghiệm di sản
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">Báo chí</span>
                    </div>
                    <h4 className="font-title-editorial text-title-editorial text-on-surface line-clamp-2 mb-2">
                      Du lịch làng nghề OCOP: Chạm tay vào đất, ngửi khói lò nung
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">
                      Du lịch làng nghề OCOP: Hãy để du khách được chạm tay vào đất, ngửi mùi khói củi của lò nung truyền
                      thống.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-outline-variant/30">
                    <span className="material-symbols-outlined text-[16px] text-primary">history_edu</span>
                    <span className="font-body-sm text-body-sm font-medium text-primary">Nhà báo Trần Quốc Cường</span>
                    <span className="text-outline text-body-sm">–</span>
                    <span className="font-body-sm text-body-sm text-outline truncate">Ban Văn hóa &amp; Di sản</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* KHỐI 04 – QUY TRÌNH 3 BƯỚC GỬI BÀI & HỒ SƠ GIỚI THIỆU OCOP */}
        <section className="w-full py-20 bg-[#F8F5EE] text-on-surface">
          <div className="w-full max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet xl:px-gutter">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-label-md text-label-md text-tertiary-fixed-dim uppercase tracking-widest block mb-2 font-bold">
                HƯỚNG DẪN ĐỒNG HÀNH
              </span>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight mb-4">
                Quy trình tiếp nhận và biên tập hồ sơ trên nền tảng.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
                Quy trình biên tập 3 bước minh bạch, đồng hành cùng các chủ thể OCOP và cộng tác viên trên cả nước.
              </p>
            </div>

            {/* 3 Steps Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 01 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display-hero text-display-hero text-tertiary-fixed-dim/40 font-bold leading-none select-none">
                      01
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl">description</span>
                    </div>
                  </div>
                  <span className="inline-block px-2 py-0.5 mb-2 rounded bg-tertiary-fixed-dim/15 text-tertiary font-label-sm text-label-sm font-semibold">
                    Giai đoạn 1
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary mb-3">Bước 01 - Gửi hồ sơ</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Điền thông tin đơn vị và sản phẩm tiêu biểu vào biểu mẫu bên dưới. Tải lên ảnh chất lượng cao và tài
                    liệu thuyết minh nguồn gốc sản phẩm.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-secondary">cloud_upload</span>
                  <span className="font-label-sm text-label-sm">Đính kèm ảnh &amp; văn bản thuyết minh</span>
                </div>
              </div>

              {/* Step 02 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display-hero text-display-hero text-primary/30 font-bold leading-none select-none">
                      02
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-primary-fixed/30 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl">fact_check</span>
                    </div>
                  </div>
                  <span className="inline-block px-2 py-0.5 mb-2 rounded bg-primary-fixed/40 text-primary font-label-sm text-label-sm font-semibold">
                    Giai đoạn 2
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary mb-3">
                    Bước 02 - Kiểm tra &amp; Biên tập
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Ban biên tập đối chiếu chứng nhận OCOP và biên tập bài viết. Đảm bảo tính chuẩn xác, khách quan và
                    văn phong báo chí văn hóa bản địa.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                  <span className="font-label-sm text-label-sm">Đối chiếu số hiệu &amp; sao chứng nhận</span>
                </div>
              </div>

              {/* Step 03 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display-hero text-display-hero text-secondary/30 font-bold leading-none select-none">
                      03
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-secondary-fixed/40 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-2xl">public</span>
                    </div>
                  </div>
                  <span className="inline-block px-2 py-0.5 mb-2 rounded bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm font-semibold">
                    Giai đoạn 3
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary mb-3">
                    Bước 03 - Đăng tải &amp; Kết nối
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Hồ sơ sản phẩm, câu chuyện được xuất bản kèm thông tin liên hệ trực tiếp. Đưa giá trị thương hiệu bản
                    địa tiếp cận độc giả toàn quốc.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-secondary">hub</span>
                  <span className="font-label-sm text-label-sm">Xuất bản đa phương tiện phi thương mại</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KHỐI 06 – THÔNG TIN TÒA SOẠN */}
        <section className="w-full py-20 bg-[#E8EFEA] text-on-surface">
          <div className="w-full max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet xl:px-gutter">
            {/* Section Header */}
            <div className="mb-12">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-2 font-bold">
                ĐỊA CHỈ &amp; LIÊN HỆ TÒA SOẠN
              </span>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
                Kết nối với Ban biên tập.
              </h2>
            </div>

            {/* 4 Cards Grid Horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Địa chỉ Tòa soạn */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-5">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-1">
                    TRỤ SỞ CHÍNH
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary mb-3">Địa chỉ Tòa soạn</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Tòa nhà Báo chí Nông thôn, Tầng 8, Số 68 Đường Đinh Nghệ, Cầu Giấy, TP. Hà Nội.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30 text-primary flex items-center gap-1 font-label-sm text-label-sm font-semibold">
                  <span>Bản đồ hành chính</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </div>
              </div>

              {/* Card 2: Email biên tập */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed/30 flex items-center justify-center text-primary mb-5">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-1">
                    BAN BIÊN TẬP
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary mb-3">Email biên tập</h3>
                  <div className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <p className="font-medium text-primary">toasoan@ocopvietnam.vn</p>
                    <p>bandoc@ocopvietnam.vn</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm">
                  <span>Tiếp nhận bài viết &amp; tư liệu</span>
                </div>
              </div>

              {/* Card 3: Email hợp tác & Hotline */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-secondary-fixed/40 flex items-center justify-center text-secondary mb-5">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-1">
                    HỢP TÁC TRUYỀN THÔNG
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary mb-3">Email hợp tác</h3>
                  <div className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <p className="font-medium text-secondary">hoptac@ocopvietnam.vn</p>
                    <p className="font-bold text-on-surface">Hotline: 024.3826.8899</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm">
                  <span>Hỗ trợ hồ sơ chủ thể OCOP</span>
                </div>
              </div>

              {/* Card 4: Giờ làm việc */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-tertiary-fixed/30 flex items-center justify-center text-tertiary mb-5">
                    <span className="material-symbols-outlined text-2xl">schedule</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-1">
                    THỜI GIAN LÀM VIỆC
                  </span>
                  <h3 className="font-title-editorial text-title-editorial text-primary mb-3">Giờ làm việc</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Thứ Hai – Thứ Sáu, 08:30 – 17:30.
                    <br />
                    <span className="text-primary font-medium">(Trực tiếp nhận hồ sơ trực tuyến 24/7).</span>
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30 text-on-surface-variant flex items-center gap-1.5 font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                  <span>Trực tuyến hệ thống hoạt động</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
