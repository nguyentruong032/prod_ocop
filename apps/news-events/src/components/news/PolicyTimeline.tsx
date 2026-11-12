interface TimelineItemProps {
  phase: string;
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItemProps[] = [
  {
    phase: 'GIAI ĐOẠN I (2026)',
    year: '2026',
    title: 'Chuẩn hóa Hồ sơ Số',
    description: '100% hồ sơ chấm sao phân cấp trực tuyến trên Cổng dữ liệu Nông thôn mới Quốc gia.',
  },
  {
    phase: 'GIAI ĐOẠN II (2027)',
    year: '2027',
    title: 'Tín dụng Xanh Toàn diện',
    description: 'Giải ngân 10.000 tỷ vốn vay ưu đãi thông qua Agribank và Ngân hàng CSXH cho HTX OCOP.',
  },
  {
    phase: 'GIAI ĐOẠN III (2028–2029)',
    year: '2028–2029',
    title: 'Thừa nhận Chuẩn Quốc tế',
    description: 'Ký kết hiệp định song phương công nhận chứng chỉ OCOP 5 sao tương đương Organic EU và USDA.',
  },
  {
    phase: 'GIAI ĐOẠN IV (2030)',
    year: '2030',
    title: 'Bền vững & Thương hiệu',
    description: 'Hình thành 50 trung tâm thương mại OCOP quốc gia và hệ thống logistics nông thôn đồng bộ.',
  },
];

export function PolicyTimeline() {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm">
      <h3 className="font-title-editorial text-title-editorial font-bold text-primary mb-space-lg flex items-center gap-2">
        <span className="material-symbols-outlined text-secondary">timeline</span>
        Lộ trình Triển khai Đề án Chính sách OCOP Quốc gia (2026–2030)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
        {timelineData.map((item, index) => (
          <div key={index} className="bg-surface-container-low p-space-md rounded flex flex-col">
            <span className="font-mono text-xs font-bold text-secondary">{item.phase}</span>
            <span className="font-title-editorial text-body-md font-bold text-primary mt-1">{item.title}</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}