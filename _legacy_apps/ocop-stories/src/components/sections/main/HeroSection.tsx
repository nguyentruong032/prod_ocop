import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-primary text-on-primary"
      data-render="hero"
      data-page="cau-chuyen-ocop"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-alt="Panoramic terraced tea fields wrapped in morning mountain mist in Northern Vietnam, majestic emerald hills with artisanal tea pickers working under warm golden sunrise, cinematic wide-angle documentary photograph"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxf16uuKyyUu6V7NH3sgjt2Cda-nyR7Sonc76LNmWwI207DE4_EnJJZx8zA4OpiJcOmTnpPTE3EVXyRJ31fIYhS-SZjqXC30g9-B_pDwhnYRaMonFvhAmEy1uT7GJZ6g7jb9fg8lvB32wA5kII8M3p5BXAuo7smC0doKtdU7oYziUyQK9t0dKn7Xcv5HzWv8iwLAOZUqytOfiHz06VuNZ5UpoeODPHnfTeqSdixDQ')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
      <div className="relative max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin pt-20 pb-16 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-tertiary-container text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-widest font-semibold mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse" />
          CÂU CHUYỆN OCOP – HỒN SẢN PHẨM
        </span>
        <h1 className="font-display-hero text-headline-lg md:text-display-hero max-w-4xl text-on-primary mb-6 leading-tight font-bold">
          Câu chuyện từ những vùng đất, những bàn tay giữ nghề.
        </h1>
        <p className="font-lead-paragraph text-lead-paragraph text-primary-fixed-dim max-w-3xl mb-8">
          Đi sâu vào phần hồn của mỗi sản phẩm: hành trình khởi nghiệp của các chủ thể, văn hóa bản địa và những thước phim tài liệu sống động.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            className="h-12 px-8 rounded bg-secondary text-on-secondary hover:bg-on-secondary-container transition-all flex items-center gap-2 font-label-md text-label-md shadow-md"
            href="#longform-spotlight"
          >
            <span>Khám phá câu chuyện</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </a>
        </div>
        {/* Thanh điều hướng 3 Tiểu mục cốt lõi & Tag phụ */}
        <div className="w-full bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-5 border border-outline-variant/20 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="px-4 py-2.5 rounded bg-surface-container-lowest text-primary font-label-md text-label-md transition-all hover:shadow flex items-center gap-2 font-semibold"
              href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop"
            >
              <span className="material-symbols-outlined text-[18px]">person_pin</span>
              <span>Hành trình khởi nghiệp / Chủ thể OCOP</span>
            </Link>
            <Link
              className="px-4 py-2.5 rounded bg-surface-container-lowest/20 hover:bg-surface-container-lowest text-on-primary hover:text-primary font-label-md text-label-md transition-all flex items-center gap-2"
              href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
            >
              <span className="material-symbols-outlined text-[18px]">auto_stories</span>
              <span>Văn hóa & Tinh hoa bản địa</span>
            </Link>
            <Link
              className="px-4 py-2.5 rounded bg-surface-container-lowest/20 hover:bg-surface-container-lowest text-on-primary hover:text-primary font-label-md text-label-md transition-all flex items-center gap-2"
              href="/cau-chuyen-ocop/phong-su-da-phuong-tien"
            >
              <span className="material-symbols-outlined text-[18px]">videocam</span>
              <span>Video / Multimedia</span>
            </Link>
          </div>
          <div className="h-px lg:h-8 w-full lg:w-px bg-outline-variant/30" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-surface-container-lowest/15 text-primary-fixed text-label-sm font-label-sm">
              Con người và nghề
            </span>
            <span className="px-3 py-1 rounded bg-surface-container-lowest/15 text-primary-fixed text-label-sm font-label-sm">
              Nguyên liệu và vùng trồng
            </span>
            <span className="px-3 py-1 rounded bg-surface-container-lowest/15 text-primary-fixed text-label-sm font-label-sm">
              Văn hóa và ẩm thực
            </span>
            <span className="px-3 py-1 rounded bg-surface-container-lowest/15 text-primary-fixed text-label-sm font-label-sm">
              Đổi mới sáng tạo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
