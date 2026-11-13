'use client';

const metrics = [
  {
    icon: 'public',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
    value: '45+',
    valueColor: 'text-primary',
    label: 'Quốc gia nhập khẩu sản phẩm OCOP',
  },
  {
    icon: 'qr_code_2',
    iconBg: 'bg-secondary-fixed',
    iconColor: 'text-secondary',
    value: '1.200+',
    valueColor: 'text-secondary',
    label: 'Doanh nghiệp thực hiện chuyển đổi số',
  },
  {
    icon: 'trending_up',
    iconBg: 'bg-surface-container-highest',
    iconColor: 'text-primary',
    value: '+28.4%',
    valueColor: 'text-primary',
    label: 'Tăng trưởng kim ngạch xuất khẩu OCOP',
  },
];

const donutChartData = {
  title: 'Tỷ trọng ngành hàng OCOP 4–5 sao năm 2026 (%)',
  centerValue: '100%',
  centerLabel: 'Quy chuẩn',
  segments: [
    { color: '#1b4332', dashArray: '42 58', dashOffset: '0', label: 'Nông sản chế biến', percentage: '42%' },
    { color: '#984724', dashArray: '26 74', dashOffset: '-42', label: 'Dược liệu & Thảo mộc', percentage: '26%' },
    { color: '#ce9e54', dashArray: '20 80', dashOffset: '-68', label: 'Thủ công mỹ nghệ', percentage: '20%' },
    { color: '#717973', dashArray: '12 88', dashOffset: '-88', label: 'Sinh vật cảnh & Khác', percentage: '12%' },
  ],
  legend: [
    { color: '#1b4332', label: 'Nông sản chế biến', percentage: '42%' },
    { color: '#984724', label: 'Dược liệu & Thảo mộc', percentage: '26%' },
    { color: '#ce9e54', label: 'Thủ công mỹ nghệ', percentage: '20%' },
    { color: '#717973', label: 'Sinh vật cảnh & Khác', percentage: '12%' },
  ],
};

const marketDossier = {
  category: 'Xuất khẩu & Thị trường quốc tế',
  label: 'Tiềm năng đưa trà và thảo dược OCOP 5 sao vào thị trường châu Âu',
  description: 'Nhu cầu sản phẩm hữu cơ có chứng nhận nguồn gốc tại EU mở ra cơ hội lớn giai đoạn 2026–2030...',
  author: 'TS. Lê Hoàng Nam · 10/2026',
  authorLinkText: 'Khảo cứu',
  authorLinkHref: '/ocop-hoi-nhap/tiem-nang-dua-tra-va-thao-duoc-vao-eu/index.html',
  imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARPK-sB1Hxl_996L23VT7vkhQas6o-RO3t85uttjM8GGzJGVfgWh-DRRVFfAvNLac6huYYAUER2MCqEBbIroHWgydsvb-_Jj4Bkl3uu6SF0iLnqB-0TJ0aDvcDwgj4rgsDT9l7J-SQZCdNnuciHcqh-fcmAbV7SWRO-aJepFOMWP3t59409rvkgh9ARxPQsJ4CeeFFd5IlXgWZZwGE0twZ-noXsuW7RuO1xP2aTKg',
  imageAlt: 'Modern international trade exhibition pavilion in Europe featuring Vietnamese organic premium agricultural goods and tea packaging, clean editorial documentary aesthetic',
};

const ocopNowEntries = [
  {
    time: '09:30',
    headline: 'Đoàn chuyên gia Nhật Bản khảo sát vùng dược liệu Quế Trà Bồng',
    description: 'Đánh giá tiêu chuẩn chế biến tinh dầu xuất khẩu.',
  },
  {
    time: '08:15',
    headline: 'Công bố 12 chủ thể OCOP hoàn thành mã QR truy xuất nguồn gốc số',
    description: 'Triển khai trong khuôn khổ chương trình chuyển đổi số nông nghiệp.',
  },
  {
    time: 'Hôm qua',
    headline: 'Ký kết ghi nhớ phân phối 5 dòng nông sản OCOP tại hội chợ ASEAN',
    description: 'Thúc đẩy xuất khẩu chính ngạch sang Singapore và Malaysia.',
  },
];

export default function Integration() {
  return (
    <section className="w-full bg-surface-container-lowest py-16" data-render="section-header" data-content-key="khoi-08-hoc-nhap">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div>
          <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-bold" data-field="label">CHUYÊN MỤC 05 · BÁO CHÍ DỮ LIỆU</span>
          <h2 className="font-headline-md text-headline-md font-bold text-primary mt-1" data-field="title">
            OCOP Việt Nam vươn ra thị trường quốc tế và chuyển đổi số.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl" data-field="description">
            Phân tích xuất khẩu, tiêu chuẩn chứng nhận quốc tế, chuyển đổi số và dòng chảy thời sự OCOP NOW.
          </p>
        </div>
        {/* 3 Key Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6" data-render="metrics">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-surface p-6 rounded-xl flex items-center gap-4 shadow-xs">
              <div className={`w-12 h-12 rounded-lg ${metric.iconBg} flex items-center justify-center ${metric.iconColor} shrink-0`}>
                <span className="material-symbols-outlined text-[26px]" data-field="icon">{metric.icon}</span>
              </div>
              <div>
                <span className={`font-headline-md text-headline-md font-bold ${metric.valueColor} leading-none block`}>{metric.value}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 block" data-field="label">{metric.label}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Data Journalism 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-stretch">
          {/* Col 1: Donut Chart Visualization (4 Cols) */}
          <div className="lg:col-span-4 bg-surface p-6 rounded-xl shadow-xs flex flex-col justify-between" data-render="analytics-donut">
            <div>
              <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Dữ liệu phân tích</span>
              <h3 className="font-title-editorial text-title-editorial font-bold text-primary mt-1" data-field="title">
                {donutChartData.title}
              </h3>
              {/* Inline SVG Donut Chart */}
              <div className="relative w-44 h-44 mx-auto my-5">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {donutChartData.segments.map((segment, index) => (
                    <circle
                      key={index}
                      cx="18"
                      cy="18"
                      fill="transparent"
                      r="14"
                      stroke={segment.color}
                      strokeDasharray={segment.dashArray}
                      strokeDashoffset={segment.dashOffset}
                      strokeWidth="4.5"
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary leading-none">{donutChartData.centerValue}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">{donutChartData.centerLabel}</span>
                </div>
              </div>
              {/* Legend */}
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
                {donutChartData.legend.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                      {item.label}
                    </span>
                    <span className="font-semibold text-primary">{item.percentage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-surface-container">
              <a className="font-label-md text-label-md text-primary hover:text-secondary font-semibold flex items-center gap-1"
                href="/ocop-hoi-nhap/index.html">
                Xem chi tiết báo cáo dữ liệu <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Col 2: Market Dossier Card (4 Cols) */}
          <article className="lg:col-span-4 bg-surface rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group" data-collection="integrationArticles" data-slug="tiem-nang-dua-tra-va-thao-duoc-vao-eu" data-content-key="tiem-nang-dua-tra-va-thao-duoc-vao-eu">
            <div>
              <div className="relative w-full h-44 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={marketDossier.imageAlt}
                  src={marketDossier.imageSrc}  loading="lazy" decoding="async"/>
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold" data-field="category">
                  {marketDossier.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-title-editorial text-title-editorial font-bold text-primary group-hover:text-secondary transition-colors" data-field="label">
                  {marketDossier.label}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed" data-field="description">
                  {marketDossier.description}
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>{marketDossier.author}</span>
                <a className="text-primary font-semibold flex items-center gap-0.5" href={marketDossier.authorLinkHref}>
                  {marketDossier.authorLinkText} <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </a>
              </div>
            </div>
          </article>
          {/* Col 3: OCOP NOW Live Stream (4 Cols) */}
          <div className="lg:col-span-4 bg-surface p-6 rounded-xl shadow-xs flex flex-col justify-between" data-render="ocop-now">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-surface-container">
                <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
                <span className="font-label-md text-label-md font-bold text-primary uppercase tracking-wide">OCOP NOW · Cập nhật trực tiếp</span>
              </div>
              {/* Timeline Entries */}
              <div className="flex flex-col gap-4 mt-4">
                {ocopNowEntries.map((entry, index) => (
                  <div key={index} className="flex gap-3" data-render="ocop-now-entry">
                    <span className="font-label-sm text-label-sm font-semibold text-secondary whitespace-nowrap pt-0.5" data-field="time">{entry.time}</span>
                    <div>
                      <h4 className="font-body-md text-body-md font-bold text-primary leading-snug" data-field="headline">{entry.headline}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1" data-field="description">{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm">
              <span className="text-on-surface-variant">Tần suất: Trực tuyến</span>
              <a className="text-primary font-semibold flex items-center gap-1" href="/ocop-hoi-nhap/tiem-nang-dua-tra-va-thao-duoc-vao-eu/index.html">Lưu trữ tin <span className="material-symbols-outlined text-[14px]">history</span></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-[#153427] text-on-primary font-label-md text-label-md font-medium shadow-xs transition-all"
            href="/ocop-hoi-nhap/index.html">
            <span>Đọc phân tích hội nhập</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}