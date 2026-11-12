'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Story {
  slug: string;
  topic: string;
  topicLabel: string;
  topicBg: string;
  topicText: string;
  location: string;
  date: string;
  title: string;
  desc: string;
  readTime: string;
  bgImg: string;
  dataAlt: string;
  themeColor: 'primary' | 'secondary';
}

const stories: Story[] = [
  {
    slug: 'giu-lua-nghe-sao-che-tan-cuong',
    topic: 'khoi-nghiep',
    topicLabel: 'Khởi nghiệp nông thôn',
    topicBg: 'bg-primary',
    topicText: 'text-on-primary',
    location: 'Đắk Lắk',
    date: '12 Tháng 03, 2026',
    title: 'Kỹ sư 9x từ bỏ phố thị, đưa hạt Mắc ca Đắk Lắk đạt chuẩn quốc tế',
    desc: 'Xây dựng chuỗi liên kết với hơn 40 hộ đồng bào Ê Đê, cam kết không sử dụng thuốc diệt cỏ và bảo tồn nguồn nước đầu nguồn.',
    readTime: '4 phút',
    bgImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACDcs144_zHgMBuntamXA1TcNTz9DKmza1EulN2BT0ZLqD-vi0zsrrNIIV9jmYvX523NGHX91BAMgSQBw23Z6DVGoeR72gM2QpngSF6NZjPa4koUw-mbhUwVkbMLX0hjIUbKXQpEujrb9ss5ylhnzjr9UR0mhjVk4tnjcJiHSequlUf9vCns5S0lhXedFW1z6DZND0yJXZnFcsFeh4NRxjWsMKcTYIZEPmyiBEBBg',
    dataAlt: 'Young Vietnamese entrepreneur inspecting high tech macadamia nut processing line in Dak Lak, sunny facility',
    themeColor: 'primary',
  },
  {
    slug: 'giu-lua-nghe-sao-che-tan-cuong',
    topic: 'di-san',
    topicLabel: 'Di sản & Giữ nghề',
    topicBg: 'bg-secondary',
    topicText: 'text-on-secondary',
    location: 'Đông Anh, Hà Nội',
    date: '08 Tháng 03, 2026',
    title: 'Làng múa rối nước Đào Thục: Giữ hồn con rối gỗ trên mặt nước ao đình',
    desc: 'Kỹ thuật tạc gỗ sung chống ngấm nước và bí quyết điều khiển dây giật ngầm dưới làn nước đục đã được truyền dạy qua hơn 300 năm.',
    readTime: '6 phút',
    bgImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsTXxWVywYISdvShuzM76ah4gTGQaoNswzP0HP2_rAv8Huoqc-YokwxP7ehaSHg_N7FePlJAJs8EJZNUPrfCadZAb28hXMu9qMHNzroPk0B3BHUKITQkKKZH2GxwRonh63xZZMdsPPzj161kfvllIHd6630GzaKCjgCx54YlOs-EYfqW8b-3Ke8abrssnRN835QHi2tc2KU83u2hxsRNRCNt6LWLtRz4uSzB_rM3k',
    dataAlt: 'Elder artisan carving wooden water puppets at Dao Thuc village in Dong Anh Hanoi, colorful painted rustic puppets in workshop',
    themeColor: 'secondary',
  },
  {
    slug: 'giu-lua-nghe-sao-che-tan-cuong',
    topic: 'tri-thuc',
    topicLabel: 'Tri thức bản địa',
    topicBg: 'bg-tertiary',
    topicText: 'text-on-tertiary',
    location: 'Tả Phìn, Lào Cai',
    date: '02 Tháng 03, 2026',
    title: 'Bài thuốc tắm lá cây người Dao Đỏ: Từ tri thức rừng già đến sản phẩm OCOP',
    desc: 'Chuẩn hóa hơn 30 loại dược liệu mọc tự nhiên trên dãy Hoàng Liên Sơn thành sản phẩm cao tắm đóng chai phục vụ du lịch sức khỏe.',
    readTime: '5 phút',
    bgImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBpL1WHHcLwpgNKCPcuXGmCvo7YFL5uacaG1YpJ1adRif_Kk6VJCLcqV1zPwlsVAUakyWn32t-gmLkGX99OoMQQzb3Tfh8fSOwvZ1G6EvECEEV2_K24WkSLvdoYQe8B9HAoN1YibohBDaJZU12_ynDeYz628HQlyvkq8DZt7q6E744yRGB9OBm-iM9uwfmmWkla9dH0OfOydd0obMyAwyLBpPdqU_lJXo4-GF58gY',
    dataAlt: 'Dao ethnic woman in traditional embroidered attire collecting medicinal herbs in Ta Phin mist forest Sapa Lao Cai',
    themeColor: 'primary',
  },
  {
    slug: 'giu-lua-nghe-sao-che-tan-cuong',
    topic: 'cong-nghe-sach',
    topicLabel: 'Ứng dụng công nghệ sạch',
    topicBg: 'bg-primary-container',
    topicText: 'text-on-primary',
    location: 'Bình Thuận',
    date: '25 Tháng 02, 2026',
    title: 'Nhà sấy năng lượng mặt trời giúp thanh long sấy dẻo giữ trọn vi chất',
    desc: 'Giải pháp giảm 60% phát thải carbon so với lò sấy than truyền thống, mở đường cho sản phẩm thâm nhập chuỗi siêu thị cao cấp Nhật Bản.',
    readTime: '4 phút',
    bgImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDA0k9LjQHHW9fYO7WxRR3npVr42mr5ZlEOOIi_FF1BGufeTrRjR2RuCCHbZkBYb6qo2YGqEy92w5LBHDjb4xoicAuEahhyVgiNUX-ijMHkXzw3Jo7ukMrZTDHJyKOYQe2yFWx7FnHBCnztcleCY1hY4HriARv_y2c9rR7v5hNCxaHWxhzCugvwOqeOX9hxGuFQlIqHZSMsm7zQk8BG3NWoJHyflFB1tXiLhy3ArDg',
    dataAlt: 'Modern solar dome drying facility for dragon fruit chips in Binh Thuan Vietnam, sparkling clean organic agritech setup',
    themeColor: 'primary',
  },
  {
    slug: 'giu-lua-nghe-sao-che-tan-cuong',
    topic: 'di-san',
    topicLabel: 'Di sản & Giữ nghề',
    topicBg: 'bg-secondary',
    topicText: 'text-on-secondary',
    location: 'Thanh Oai, Hà Nội',
    date: '20 Tháng 02, 2026',
    title: 'Làng nón Chuông: Đường kim mũi chỉ giữ dáng nón bài thơ đất Bắc',
    desc: 'Từng chiếc lá cọ phơi sương trắng muốt, qua đôi bàn tay thoăn thoắt của các bà, các mẹ tạo nên chiếc nón bền bỉ thách thức nắng mưa.',
    readTime: '5 phút',
    bgImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUpzmLk6qFMby3jRIZ7LHVJaUVmW12CGT9UUGbOBF9DI3TBJO8RwiCJyFjNobc3d1EBrgRNWvQgpyvUsgbmeOKfteeL9nTKftehisFR8lmmlIBxW-CJq5KG3NM3L9hLZF_Jfu1X-fXH7bPZMNKHs-3agVDdPTnhlKxWRFFBJIbNnaRf-D8aNstO72Y4-TRRkPVSa4PCvezNhZJi_J1RvrGbvxzyAQR2KZlmx2qce0',
    dataAlt: 'Traditional handmade conical hat village Chuong in Hanoi, white palm leaf conical hats drying along village brick paths',
    themeColor: 'secondary',
  },
  {
    slug: 'giu-lua-nghe-sao-che-tan-cuong',
    topic: 'khoi-nghiep',
    topicLabel: 'Khởi nghiệp nông thôn',
    topicBg: 'bg-primary',
    topicText: 'text-on-primary',
    location: 'Lý Sơn, Quảng Ngãi',
    date: '15 Tháng 02, 2026',
    title: 'Khởi nghiệp tỏi đen Lý Sơn: Biến nông sản khô thành sản phẩm y dược',
    desc: 'Ứng dụng quy trình lên men nhiệt độ thấp 60 ngày giúp tăng lượng hoạt chất chống oxy hóa lên gấp 10 lần so với củ tỏi tươi.',
    readTime: '6 phút',
    bgImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW6kvEU6lCena_ZSmvidytq4eIOeOQGQhvdILgnhK2oD_X_rE5RNfp0uwuGNRdYXAICd5tew1r6RMnqI1z5TBOaVoJDVZAeA1fYaamTTXzXf6-pCSXyijybTNJXTKTC2Z9gZee27q1k-a7IXUqgYspZPOA9FkSJSyuIlwNyzOSbXAYj0cJdF_aLZoRgUvh-adEfLvrYRpPKi2TdOEHsC2L8GyAJ0SeMD8uep9JcN0',
    dataAlt: 'Female organic farmer sorting freshly harvested black shallots in Ly Son island volcanic soil fields, bright sunny daylight',
    themeColor: 'primary',
  },
];

export function LatestStoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'Tất cả chủ đề' },
    { key: 'khoi-nghiep', label: 'Khởi nghiệp nông thôn' },
    { key: 'di-san', label: 'Di sản & Giữ nghề' },
    { key: 'tri-thuc', label: 'Tri thức bản địa' },
    { key: 'cong-nghe-sach', label: 'Ứng dụng công nghệ sạch' },
  ];

  const filtered = stories.filter(
    (s) => selectedCategory === 'all' || s.topic === selectedCategory
  );

  return (
    <section className="w-full bg-[#f8f5ee] py-16 lg:py-24" id="khoi-07-stories">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider block mb-2">
              DÒNG DỮ LIỆU BÁO CHÍ
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold">
              Danh sách câu chuyện mới nhất
            </h2>
          </div>
          <span className="text-body-sm text-on-surface-variant font-body-sm mt-2 md:mt-0">
            Tổng hợp 268 bài viết & nghiên cứu điền dã
          </span>
        </div>
        {/* Bộ lọc chủ đề */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-[#e8efea]">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedCategory(c.key)}
              className={`story-filter-btn px-4 py-2 rounded font-label-sm text-label-sm transition-all ${
                selectedCategory === c.key
                  ? 'bg-primary text-on-primary font-medium'
                  : 'bg-surface-container-lowest hover:bg-surface-container-low text-on-surface'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" id="stories-grid">
          {filtered.map((s, idx) => (
            <article
              key={idx}
              data-card-type="story"
              data-slug={s.slug}
              data-topic={s.topic}
              className="story-card bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    data-alt={s.dataAlt}
                    style={{ backgroundImage: `url('${s.bgImg}')` }}
                  />
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded ${s.topicBg} ${s.topicText} font-label-sm text-label-sm font-medium`}
                  >
                    {s.topicLabel}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mb-2">
                    <span>{s.location}</span>
                    <span>•</span>
                    <span>{s.date}</span>
                  </div>
                  <h3
                    className={`font-title-editorial text-title-editorial text-on-surface font-bold mb-3 ${
                      s.themeColor === 'secondary'
                        ? 'group-hover:text-secondary'
                        : 'group-hover:text-primary'
                    } transition-colors`}
                  >
                    {s.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">{s.desc}</p>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant border-t border-[#f0f3ff] mt-4">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">timer</span> {s.readTime}
                </span>
                <Link
                  className={`font-label-sm text-label-sm ${
                    s.themeColor === 'secondary' ? 'text-secondary' : 'text-primary'
                  } font-semibold flex items-center gap-1 hover:underline`}
                  href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
                >
                  Đọc tiếp <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
