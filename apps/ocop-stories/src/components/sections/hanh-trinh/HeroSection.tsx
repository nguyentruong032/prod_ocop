export function HeroSection() {
  return (
    <section className="w-full bg-[#f8f5ee] relative overflow-hidden py-12 md:py-16">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-0 w-80 h-80 rounded-full bg-secondary/5 blur-2xl pointer-events-none" />
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ffddb1]/40 border border-[#ce9e54]/40 text-tertiary-container font-label-md text-label-md uppercase tracking-wider mb-4">
              <span
                className="material-symbols-outlined text-[16px] text-[#ce9e54]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_fire_department
              </span>
              <span>Khởi nghiệp từ đất mẹ & Khát vọng vươn xa</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mb-6 max-w-4xl">
              Những người trẻ dấn thân, đánh thức tiềm năng xứ sở
            </h1>
            <p className="font-lead-paragraph text-lead-paragraph text-on-surface-variant max-w-3xl leading-relaxed">
              Hành trình rời phố về làng của thế hệ trí thức mới: Đặt cược tri thức công nghệ vào mảnh vườn quê hương, vực dậy các hợp tác xã kiểu mới, và kiên định chuyển đổi số để đưa tinh hoa bản địa thành chuẩn mực OCOP quốc gia và quốc tế.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-[#e2dbd0] space-y-4">
              <div className="flex items-center justify-between border-b border-[#e2dbd0]/60 pb-3">
                <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">
                  Dữ liệu quan sát
                </span>
                <span className="text-label-sm font-label-sm font-mono text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded">
                  Cập nhật 2026
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-headline-md font-headline-md font-bold text-primary">1.250+</div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant">
                      Chủ thể khởi nghiệp dưới 35 tuổi
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[24px]">group</span>
                </div>
                <div className="w-full bg-[#f2ece1] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[72%] rounded-full" />
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <div className="text-headline-md font-headline-md font-bold text-primary">68%</div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant">
                      Ứng dụng chế biến sâu & truy xuất số
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-tertiary-container text-[24px]">qr_code_2</span>
                </div>
                <div className="w-full bg-[#f2ece1] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[68%] rounded-full" />
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <div className="text-headline-md font-headline-md font-bold text-primary">450+</div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant">
                      Mô hình liên kết nông hộ bền vững
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary-container text-[24px]">handshake</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
