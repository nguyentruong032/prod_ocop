export function ProductsAndStoriesSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="mb-10">
          <span className="font-label-md text-label-md uppercase tracking-wider text-[#B85D3B]">
            DI SẢN &amp; TÁC PHẨM BẢN ĐỊA
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            Đặc sản và câu chuyện văn hóa từ các miền đất.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="bg-[#F8F5EE] rounded-xl p-5 flex flex-col justify-between shadow-sm group">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-surface-container mb-4 relative">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  data-alt="Traditional Vietnamese premium Tan Cuong Dinh Ngoc green tea in rustic ceramic vessel, dry needle-like leaves, earthy warm timber background, editorial documentary product still life."
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvciK-ay9Se-p3K4c5nuYnOwJudAiGdZg3fde2UgFmgIUz6wrGzHOxgyI0CRuS4A8-2Hv9Ax8yh0-EgGavq_8RLvJgheXNP1oIfgwR_iInrILIXKyAl0rd12ltG1X5Cf2UjYuzTke2R02HlddvFosKp4AeCHFvAg76khCHLBAaFqJr18fcVYnBmIlHyas_x-sCkrfGdN3vhhWHa0H69BcS998_Pk4dzRJtMnGKomk')`,
                  }}
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#FFFFFF] text-[#C89B3C] font-label-sm text-label-sm font-bold rounded shadow-sm flex items-center gap-1">
                  <span>★</span>
                  <span>OCOP 5 Sao</span>
                </div>
              </div>
              <div className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                Nông sản &amp; Thực phẩm · Thái Nguyên
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary line-clamp-2 mb-2">
                Trà Đinh Ngọc Tân Cương
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">
                HTX Trà Tân Cương Thái Nguyên
              </p>
            </div>
            <a
              className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold hover:text-[#B85D3B] transition-colors"
              href="/san-pham-ocop"
            >
              <span>Tìm hiểu nguồn gốc</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Product Card 2 */}
          <div className="bg-[#F8F5EE] rounded-xl p-5 flex flex-col justify-between shadow-sm group">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-surface-container mb-4 relative">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  data-alt="Authentic Van Phuc mulberry silk textile with ancient cloud and lotus embossed motifs, luxurious natural sheen, traditional textile archival exhibition lighting."
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6CmRRD0mn5f4_qgOvv7ekj-veHQ8lN8sO85D2uKM5FDmXY7xgRoDsyfFw_rM_iDWqEIrnA_ipIRknd8XtW7E7GwYPzIfZu21eeNaNG7WakgHW_pfPqsVKIoMZtt2jXcpOEeb76LhKID_ZMhVvr86dq6ngyJIS62Z7Dhsq5t2C7FUhGAcmldupHZgPktZqKPEXOqQ9qFdybJ2FnusP0M42Rn4OuxsgigjF9vRI6Tw')`,
                  }}
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#FFFFFF] text-[#C89B3C] font-label-sm text-label-sm font-bold rounded shadow-sm flex items-center gap-1">
                  <span>★</span>
                  <span>OCOP 4 Sao</span>
                </div>
              </div>
              <div className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                Thủ công mỹ nghệ &amp; Khác · Hà Nội
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary line-clamp-2 mb-2">
                Lụa tơ tằm Vạn Phúc dệt hoa văn cổ
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">
                HTX Dệt lụa Vạn Phúc
              </p>
            </div>
            <a
              className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold hover:text-[#B85D3B] transition-colors"
              href="/san-pham-ocop"
            >
              <span>Tìm hiểu nguồn gốc</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Story Card 1 */}
          <div className="bg-[#E8EFEA] rounded-xl p-5 flex flex-col justify-between shadow-sm group">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-surface-container mb-4">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  data-alt="Veteran tea artisan in Tan Cuong Thai Nguyen roasting green tea leaves with bare hands over a traditional wood-fired cast iron pan, glowing embers, smoke rising, focused contemplative expression."
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTygz4OYEAwnaeeMSyK8ALkrkVr1oKFay1IkhDzU5XZuE-tZ7-uMXAu6sdIiGfGZ23GOTSHRwYosAp5ZNmPmSZKWo1P8maMOHJ7-aQ4I8fukC_1S3GBr4jFIv7w_woPBERzVWVCoGcbCVljDYmSy3vLSk7nTSacz4B5zkmaXwW8DsvbvKKv3aH4IZp378LiL8Da4_i6Ioc6k4TX5RZLJncUCBClP19utVQVmrF9VM')`,
                  }}
                />
              </div>
              <div className="font-label-sm text-label-sm text-[#B85D3B] mb-1">
                Văn hóa &amp; Tinh hoa bản địa · Thái Nguyên
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary line-clamp-2 mb-2">
                Giữ lửa nghề sao chè truyền thống bên sườn núi Tân Cương
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">
                Hơn bốn mươi năm gắn bó với đồi chè trung du, các nghệ nhân vẫn giữ cách sao chè bằng lửa củi…
              </p>
            </div>
            <a
              href="/cau-chuyen-ocop"
              className="flex items-center justify-between text-on-surface font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <span>5 phút đọc</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                article
              </span>
            </a>
          </div>

          {/* Story Card 2 */}
          <div className="bg-[#E8EFEA] rounded-xl p-5 flex flex-col justify-between shadow-sm group">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-surface-container mb-4">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  data-alt="Ancient dragon kiln firing through the night in Phu Lang pottery village beside the Cau River Bac Ninh, flames illuminating red brick kiln, potter loading seasoned wood."
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEjUE_zm_Isx5ucyaETK_O7BaU6Y2H3YodratHyPzsiyG0EmWW4LXfsW8Yr4TjYPhdxav7RZAKw3P7oKl_2hSKT1gD0-rTku8rRzTPQglZzrcCVQl3b6rp2NKg67KJKNiTS1fjwF2w-l8kWZ_nOgyP5HK4MCL17xWDUxuo9i6jl7_3dMmfTnCes3sLy9SfQlPGjyF3AyFNaWrMNfNWNEfBiaJ_xt82bTqpFLQRJEY')`,
                  }}
                />
              </div>
              <div className="font-label-sm text-label-sm text-[#B85D3B] mb-1">
                Làng nghề &amp; Ký sự · Bắc Ninh
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary line-clamp-2 mb-2">
                Thổi hồn vào đất sét sông Cầu qua kỹ nghệ nung gốm men tro Phù Lãng
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">
                Những lò gốm củi rực sáng thâu đêm lưu giữ sắc nâu mộc mạc nghìn năm của văn hóa Kinh Bắc.
              </p>
            </div>
            <a
              href="/cau-chuyen-ocop"
              className="flex items-center justify-between text-on-surface font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <span>4 phút đọc</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                article
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
