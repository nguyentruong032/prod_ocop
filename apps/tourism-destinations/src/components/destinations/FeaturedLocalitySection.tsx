import Link from 'next/link';

export function FeaturedLocalitySection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="mb-8">
          <h2 className="font-headline-md text-headline-md text-primary">Miền đất OCOP tiêu biểu.</h2>
        </div>
        {/* 1 Thẻ Locality Card khổ lớn chiếm trọn hàng ngang */}
        <div className="w-full bg-[#F8F5EE] rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 relative min-h-[360px] lg:min-h-[480px]">
            <div
              className="w-full h-full bg-cover bg-center"
              data-alt="Expansive panoramic 16:9 aerial photography of emerald green Tan Cuong tea hills in Thai Nguyen Vietnam bathed in morning sunrise light, gentle mountain mist floating over undulating terraces, quiet agrarian landscape."
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlC-DXvuJjK6OwJbnKyEBpYxpFqbpgB7eWd6qobao8UlnzbYwAbqxG_ybnvxJP7Te6I5IZP3-Ty1eGNNMYABq6MoVWHtcdrmA7rVLMA_5k8_NjX6QEize6Km4ilevvfxTh5Xum_hCJXtM-lO9L2mVxd6DJtZaSg2jTqJOOqPwhVWrjwPTYwSQvlhEFoPGxplMuhO2zY9SBFUwKUYaso6o2aZLxw26jgsa8xM9tNko')`,
              }}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm text-[#FFFFFF] rounded-lg font-label-sm text-label-sm">
                Tiêu điểm tháng
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-label-sm text-label-sm uppercase tracking-wider text-[#B85D3B]">
                Làng nghề &amp; Du lịch sinh thái · Trung du Bắc Bộ
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Tỉnh Thái Nguyên</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Vùng đất trung du nổi tiếng với đồi chè cổ truyền và du lịch trải nghiệm văn hóa trà.
              </p>
              <div className="flex items-center gap-6 pt-4 text-on-surface">
                <div>
                  <span className="font-title-editorial text-title-editorial text-primary font-bold">32</span>
                  <span className="block font-label-sm text-label-sm text-on-surface-variant">Sản phẩm</span>
                </div>
                <div className="h-8 w-px bg-outline-variant/40" />
                <div>
                  <span className="font-title-editorial text-title-editorial text-primary font-bold">12</span>
                  <span className="block font-label-sm text-label-sm text-on-surface-variant">Câu chuyện</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <Link
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#1F4D3A] text-[#FFFFFF] hover:bg-primary-container font-label-md text-label-md rounded-lg transition-colors"
                href="/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop"
              >
                Khám phá điểm đến
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
