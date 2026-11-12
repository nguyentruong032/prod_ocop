'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Business {
  slug: string;
  type: string;
  typeLabel: string;
  province: string;
  title: string;
  desc: string;
  industry: string;
  cert: string;
  bgImg: string;
  icon: string;
  iconColor: string;
  tagBg: string;
  tagText: string;
}

const businesses: Business[] = [
  {
    slug: 'hop-tac-xa-tra-tan-cuong-thai-nguyen',
    type: 'hop-tac-xa',
    typeLabel: 'Hợp tác xã · Thái Nguyên',
    province: 'Thái Nguyên',
    title: 'Hợp tác xã Trà Tân Cương Thái Nguyên',
    desc: 'Gìn giữ giống chè trung du cổ và chế biến trà đặc sản theo tiêu chuẩn canh tác hữu cơ, liên kết bao tiêu cho hơn 120 hộ nông hộ vùng lõi Tân Cương.',
    industry: 'Đồ uống',
    cert: '04 sản phẩm OCOP (4-5 Sao)',
    bgImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeX5DtLx7VaVkjWcYQWf1F4LAoLn5lXSSAxq6GrdM7WsAeMSrS_ZnSPQIeTm4Qn8zmKYG7pRy-HWYCgWJoUEhg6_TGKFqsHXLnnTFUJU0jRWCaujiAUQGkDoFcRGD7VklVlCAGI0230K92l5TUcytsr38VyCtUzJpQXcvo4QrOX3F9FIJFmTX9S9aAM553cOnqNTC3haRkXhOm4RqZYXQd2nATQpVyaBv2C_tgG1c',
    icon: 'spa',
    iconColor: 'text-primary',
    tagBg: 'bg-primary',
    tagText: 'text-on-primary',
  },
  {
    slug: 'doanh-nghiep-nuoc-mam-khai-hoan',
    type: 'doanh-nghiep',
    typeLabel: 'Doanh nghiệp · Kiên Giang',
    province: 'Kiên Giang',
    title: 'Doanh nghiệp nước mắm Khải Hoàn',
    desc: '100 năm gìn giữ vựa cá cơm than và phương pháp ủ chượp thùng gỗ bời lời, tiên phong bảo hộ chỉ dẫn địa lý nước mắm Phú Quốc tại Liên minh châu Âu (EU).',
    industry: 'Nông sản & Thực phẩm',
    cert: '03 sản phẩm OCOP (5 Sao)',
    bgImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbosLQ1VJ_h_DsUn9D2uCTSKVQp08vNMvh75nQtp04KJVTqI_qQ6GjmtGjxQ_EfECI8onLyAjEVAEoBSsvJA6CnmxYfVTZxLrk3YqaMxSTTeHeyTvwgCAHBZm9rC3WimDmw2v35swIdLsiw6EEeY2z9gTlbcwYxeKeskR7CuaqpHjSrvNohKe-NAXQuqpvNCTnyD-5q42YVuwn_Qu5d7aF6N0QWKTG23HAV3IEF0I',
    icon: 'water_drop',
    iconColor: 'text-secondary',
    tagBg: 'bg-secondary',
    tagText: 'text-on-secondary',
  },
  {
    slug: 'htx-nong-nghiep-cao-nguyen-meo-vac',
    type: 'hop-tac-xa',
    typeLabel: 'Làng nghề · Hà Nội',
    province: 'Hà Nội',
    title: 'Hợp tác xã Dệt lụa Vạn Phúc',
    desc: 'Kỹ nghệ dệt tơ tằm cổ truyền nghìn năm tuổi kết tinh di sản Thăng Long, bảo tồn mẫu hoa văn Vân cổ truyền và kết hợp thiết kế ứng dụng hiện đại.',
    industry: 'Thủ công mỹ nghệ',
    cert: '05 sản phẩm OCOP (4-5 Sao)',
    bgImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPR8-ULBqnxY66QcHPpdNED4rat-DUSwQJY0Svjc9bMYC1JR73z3BB3wYNrPel5i6oQOrd2bWuCDzH0hDpwhNC-shHPkpKkuiravrvu79c6hn8VELJHMjizMMsDcS-eRfyUl-1w6aP3ZKYl9qSrtUbgNXNDV7KcsLEaDfL_qPWNqCTzY7PBqn8iGIhJaa3mg3erTBnlv6xgO8OH1xuiF6rvEbqb3Rt46S6zEDxjO8',
    icon: 'pattern',
    iconColor: 'text-tertiary-container',
    tagBg: 'bg-tertiary-container',
    tagText: 'text-on-tertiary-container',
  },
];

export function ChuTheSection() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedProvince, setSelectedProvince] = useState('all');

  const filterButtons = [
    { key: 'all', label: 'Tất cả' },
    { key: 'doanh-nghiep', label: 'Doanh nghiệp' },
    { key: 'hop-tac-xa', label: 'Hợp tác xã' },
    { key: 'to-hop-tac', label: 'Tổ hợp tác' },
    { key: 'ho-kinh-doanh', label: 'Hộ kinh doanh / Làng nghề' },
  ];

  const filtered = businesses.filter((b) => {
    const matchType = selectedType === 'all' || b.type === selectedType;
    const matchProvince = selectedProvince === 'all' || b.province === selectedProvince;
    return matchType && matchProvince;
  });

  return (
    <section
      className="w-full bg-[#e8efea] py-16 lg:py-24"
      id="khoi-05-chu-the"
      data-render="section-header"
      data-content-key="khoi-05-chu-the"
    >
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider block mb-2">
              HỒ SƠ NĂNG LỰC BẢN ĐỊA
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold">
              Chân dung những chủ thể và người giữ lửa nghề
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-3 md:mt-0">
            Gặp gỡ những hợp tác xã tiên phong, nghệ nhân tâm huyết đưa sản vật địa phương vươn tầm chuẩn mực.
          </p>
        </div>
        {/* Bộ lọc nhanh: Loại hình chủ thể + Tỉnh/thành phố */}
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-xs mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold mr-1">LOẠI HÌNH:</span>
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setSelectedType(btn.key)}
                className={`px-3.5 py-1.5 rounded font-label-sm text-label-sm transition-colors ${
                  selectedType === btn.key
                    ? 'bg-primary text-on-primary font-medium'
                    : 'bg-surface-container-low hover:bg-surface-container text-on-surface'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">ĐỊA BÀN:</label>
            <div className="relative">
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="h-9 px-3 pr-8 rounded bg-surface-container-low text-body-sm text-on-surface font-body-sm appearance-none cursor-pointer focus:outline-none focus:bg-surface-container"
              >
                <option value="all">63 Tỉnh/Thành phố</option>
                <option value="Thái Nguyên">Thái Nguyên</option>
                <option value="Kiên Giang">Kiên Giang</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Bắc Ninh">Bắc Ninh</option>
                <option value="Hà Giang">Hà Giang</option>
              </select>
              <span className="material-symbols-outlined text-[16px] absolute right-2 top-2.5 pointer-events-none text-outline">
                expand_more
              </span>
            </div>
          </div>
        </div>
        {/* Lưới 3 thẻ Business Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-render="business-grid" data-collection="businesses">
          {filtered.map((b) => (
            <div
              key={b.slug}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
              data-card-type="business"
              data-slug={b.slug}
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url('${b.bgImg}')` }}
                  />
                  <div className="absolute bottom-3 right-3 w-12 h-12 rounded bg-surface-container-lowest shadow-md p-1.5 flex items-center justify-center">
                    <span className={`material-symbols-outlined ${b.iconColor} text-[28px]`}>{b.icon}</span>
                  </div>
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded ${b.tagBg} ${b.tagText} font-label-sm text-label-sm font-semibold`}
                  >
                    {b.typeLabel}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2 group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-5 line-clamp-3">{b.desc}</p>
                  <div className="flex items-center justify-between py-3 border-t border-[#e8efea] text-body-sm font-body-sm">
                    <span className="text-on-surface-variant">Ngành hàng:</span>
                    <span className="font-semibold text-primary">{b.industry}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 text-body-sm font-body-sm">
                    <span className="text-on-surface-variant">Quy mô chứng nhận:</span>
                    <span className="font-semibold text-secondary">{b.cert}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  className="w-full h-11 rounded bg-[#f8f5ee] hover:bg-primary hover:text-on-primary text-primary transition-colors flex items-center justify-center gap-2 font-label-md text-label-md font-semibold"
                  href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop"
                >
                  <span>Khám phá thương hiệu</span>
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
