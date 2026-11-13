import Link from 'next/link';

export function VanHoaSection() {
  return (
    <section
      className="w-full bg-surface-container-lowest py-16 lg:py-24"
      id="khoi-04-van-hoa"
      data-render="section-header"
      data-content-key="khoi-04-van-hoa"
    >
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold block mb-2">
              DI SẢN TRI THỨC DÂN GIAN
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold">
              Văn hóa bản địa và di sản nguyên liệu vùng miền
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
            Mỗi sản vật là sự kết tinh của thổ nhưỡng trù phú, khí hậu đặc thù và truyền thống hàng trăm năm được lưu giữ qua nhiều thế hệ.
          </p>
        </div>
        {/* Asymmetric Editorial Grid: 4 bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6" data-render="story-grid" data-collection="stories">
          {/* Bài 1: Chiếm 7 cột */}
          <article
            className="lg:col-span-7 bg-[#f8f5ee] rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow"
            data-card-type="story"
            data-slug="giu-lua-nghe-sao-che-tan-cuong"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                data-alt="Giant artisanal dark wooden barrels inside a traditional fish sauce barrelhouse on Phu Quoc island, warm shafts of tropical sunlight breaking through wooden slats onto golden amber liquid, authentic editorial photography"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6TM5juEkROd3cyQSAiUJJ84a0SKygV_hB3lwiYR5205AeGvlCyYg2xPRbpekoAVxHeiUddCGvc2IsoEejo_jBKUBFp2yYMZfmKd82GbgW_9OOwfOtXMHUpJQfdpIWNuIe-IPbVzenkLuf0RdCL1b9NQB99M7N3Tc-s80xv5AQoHtcvju7F4TZ_RgUe83x-Xgksfk1twyHsmo-BZFm3ddVNtudaujZRZWyJsVoFBQ')",
                }}
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-medium">
                Đặc sản Biển đảo
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mb-3">
                  <span className="font-semibold text-primary">Phú Quốc, Kiên Giang</span>
                  <span>•</span>
                  <span>8 phút đọc</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-3 group-hover:text-secondary transition-colors">
                  Giọt nước mắm truyền thống và trăm năm kiên định với biển đảo Phú Quốc
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Hành trình những thùng gỗ bời lời khổng lồ ủ cá cơm than tươi ròng rã 12 tháng, giữ trọn vị mặn mòi nguyên bản của biển cả Tây Nam mà không cần bất kỳ chất phụ gia công nghiệp nào.
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary font-semibold hover:underline"
                href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
              >
                <span>Đọc toàn văn ký sự</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </article>

          {/* Bài 2: Chiếm 5 cột */}
          <article
            className="lg:col-span-5 bg-[#f8f5ee] rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow"
            data-card-type="story"
            data-slug="khao-vong-lua-seg"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                data-alt="Elderly Vietnamese craftsman shaping rustic terracotta earthenware on a turning wheel at Phu Lang pottery village, warm earthen brown tones, river clay, tactile traditional ceramic textures"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZPB1ZEtk95XT7YKZM2nTCrKVpF4aryyHvuvKkWkAZgOdGuWYHoLhvvfJlXkijM02kvpPyrvAZw6b8EtaaCh424fT2ruSieicXS5-o4h6o83p4zmCqhoGBvkQ1rGE3uIe1EiNckI4IYiWJnO1Wu-b2kPVd99lRo9gL4DfbqlgHOUNQqEGWAsYZMNTRuIROCVXawXBCgmYJBdNDGFbgxt4_0Jrv9A3r6sDA_0WKqwo')",
                }}
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-medium">
                Làng nghề thủ công
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mb-3">
                  <span className="font-semibold text-primary">Quế Võ, Bắc Ninh</span>
                  <span>•</span>
                  <span>6 phút đọc</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-on-surface font-semibold mb-3 group-hover:text-secondary transition-colors">
                  Thổi hồn vào đất sét sông Cầu qua kỹ nghệ nung gốm men tro Phù Lãng
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Sắc nâu lươn độc bản không lẫn vào đâu được tạo nên từ lớp men tro gỗ rừng và củi đun thâu đêm suốt sáng bên dòng sông Cầu êm đềm.
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary font-semibold hover:underline"
                href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
              >
                <span>Đọc toàn văn ký sự</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </article>

          {/* Bài 3: Chiếm 5 cột */}
          <article
            className="lg:col-span-5 bg-[#f8f5ee] rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow"
            data-card-type="story"
            data-slug="det-tho-cam-cham"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                data-alt="Wild purple mint flowers blooming vigorously on the rugged gray limestone karst plateau of Dong Van Ha Giang, bees pollinating, cinematic sharp editorial photography"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlnjrHffn5q6NSfH7pc8aIxqsDmvwLV_EGfz9S9ago1SPo7Z3kga9SZ-zIbVj_V2_BXyfDMTm0sKmBrX1ZOb9o6F3HHclJDBffsKkeWm5S-G_lFeSh2Z4QGvOfk3Ir6rfCetFS7IfMbYV9BLjzeIwUfbwQ59CHFX370cvRfdelOVGHe0lTgVN5oa5ArlnilFCZfIiis-DpGzv_IKS-Zjvxjv4xb1YMRar3nou1n_s')",
                }}
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm font-medium">
                Dược liệu vùng cao
              </span>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mb-3">
                  <span className="font-semibold text-primary">Đồng Văn, Hà Giang</span>
                  <span>•</span>
                  <span>5 phút đọc</span>
                </div>
                <h3 className="font-title-editorial text-title-editorial text-on-surface font-semibold mb-3 group-hover:text-secondary transition-colors">
                  Mật ong Bạc Hà Cao nguyên đá - Tinh túy dược liệu từ hoa dại
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Giọt mật xanh ánh vàng sánh như ngọc, chỉ nở rộ vào mùa đông buốt giá trên những triền đá tai mèo cheo leo vùng cực Bắc Tổ quốc.
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary font-semibold hover:underline"
                href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
              >
                <span>Đọc toàn văn ký sự</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </article>

          {/* Bài 4: Chiếm 7 cột */}
          <article
            className="lg:col-span-7 bg-[#f8f5ee] rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow"
            data-card-type="story"
            data-slug="thanh-am-gom-do-vinh-long"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                data-alt="Close up of a Cham artisan weaving intricate geometric patterns on a wooden handloom, colorful natural dyed cotton threads, soft natural afternoon sunlight, culturally rich documentarian photography"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlrkyUtNXEu6GSoxZqhbTaSEzKlErMVClJZaWydtFKRrKGFPO8LRbF6OCP81O9TSnDEtT1IsNSzt3K0Tei-pIiEqxKbeTIB5jciLeBYrrk4ZZ4VDVGSx3Ivo5kK-t-SpcBysXAu06LQ1SIDPmSnfFCj1kJwdYize8WOQbKuurx6I-p8F1ZROyEiFxHymshXStUwax88UhIWg96RuGn2MqkHvnBKTVLIHXZltVuj3Y')",
                }}
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-medium">
                Dệt may truyền thống
              </span>
            </div>
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mb-3">
                  <span className="font-semibold text-primary">Ninh Phước, Ninh Thuận</span>
                  <span>•</span>
                  <span>7 phút đọc</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-3 group-hover:text-secondary transition-colors">
                  Bản hòa ca thổ cẩm dệt tay của đồng bào Chăm làng Mỹ Nghiệp
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                  Nhịp thoi lách cách qua bàn tay mềm mại của phụ nữ Chăm, lưu giữ những ký tự hoa văn cổ xưa cùng kỹ nghệ nhuộm màu từ lá cây, vỏ ốc và hạt rừng bản địa.
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary font-semibold hover:underline"
                href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
              >
                <span>Đọc toàn văn ký sự</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
