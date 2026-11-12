export function CuratedEcosystemsSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
            Địa Lý &amp; Thổ Nhưỡng
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Bản Đồ Tuyến Hành Trình Theo 4 Hệ Sinh Thái
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Mỗi vùng thổ nhưỡng sinh ra những phong vị độc bản. Hành trình OCOP được định tuyến theo mạch chảy tự nhiên của đất trời và tập quán nông nghiệp truyền thống.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Ecosystem 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-space-sm">
              <div className="w-full h-44 rounded-lg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Magnificent high-mountain terraced rice fields in Mu Cang Chai and Hoang Su Phi during harvest season. Golden yellow paddy steps cascading down majestic mist-shrouded peaks under soft autumn rays, traditional rural Vietnam."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxXOyCIQkqtZioYxRHAuW8U2Vo4HXpnkZfRqG35oDUrQkyCJLufofgK1N0Juutw5s1BnQam--qnMBhZqCOqZeh8AIbb1PWm6_0BV9InnztzVPI0dsBfBlDrWGEq6Gw1F21ZbLpAA6U1Qmjv8dkt2mIQVGHqjVdW0HQIZuTf8Uitk0Vb7w4BvPiwbSSZnqhK1MpHlrCnpYGdUzqdnGFHEm9k2xNDLULDqG3HSoMSWE"
                  alt="Miền Non Cao"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                  Độ cao &gt;1.200m
                </span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary">
                Miền Non Cao &amp; Ruộng Bậc Thang
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Mù Cang Chải, Hoàng Su Phì, Mộc Châu. Gặp gỡ cộng đồng H&apos;Mông, Thái, La Chí và trải nghiệm canh tác lúa nếp nương, ngô men lá.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm flex items-center justify-between bg-surface-container-low p-space-xs rounded-lg">
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                24 Tuyến tour
              </span>
              <span className="material-symbols-outlined text-[18px] text-primary">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Ecosystem 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-space-sm">
              <div className="w-full h-44 rounded-lg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Ancient Red River Delta village architecture in Duong Lam and Bat Trang. Ancient moss-covered laterite brick walls, traditional village communal houses, ceramic kilns and banyan trees reflecting cultural heritage of Northern Vietnam."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAd6ynR367Lm7ZBUUA9n09nr0aaO1o8qW7tieBMAgqJF-513Xv-bI0s4v_4nTMaS_IObC142AVJaiIkOez8JY-LsDcS0c1nvkTw75otTfboBaQDXF44558WdZKgUJnbZerAexTrnscJ0wf8Pu1MRP85Q0SnDsTp9ST7wxkjHOp6wCpnGA8svFHEdwlk0FIwWBnICfovoMxifXJGn5ecGEagajnbDS8mW01cSOO_7g"
                  alt="Đồng Bằng Phù Sa"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                  Lưu vực sông Hồng
                </span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary">
                Đồng Bằng Phù Sa &amp; Làng Cổ
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Đường Lâm, Bát Tràng, Quần thể Tràng An. Nơi hội tụ tinh hoa làng nghề gốm sứ sành, làm tương nếp và canh tác nông sản vụ đông.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm flex items-center justify-between bg-surface-container-low p-space-xs rounded-lg">
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                19 Tuyến tour
              </span>
              <span className="material-symbols-outlined text-[18px] text-primary">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Ecosystem 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-space-sm">
              <div className="w-full h-44 rounded-lg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Sprawling red basalt soil organic coffee farm and agroforestry cacao plantation in Buon Ma Thuot Dak Lak Central Highlands. Ripe red coffee cherries glistening under canopy shade trees, rich red earth terrain, Vietnam highland culture."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtjOMEpwjIRVGkdOWkNlL36A7DdhfEZarPomluVzoh-KGSzjjdHgUVKJ8Smk8v8cypZsZ4Ysd-ysrQ6XaSJaF92jPv6WA70R_pNcYcqoGFmgxZmdS-aAR3lh3udDUKyPFYpkAwmE2HqA6OAYBW5JoGncK-bKXPcxq7qA3NVOWf1kFmRVjwwyr5jbtenwJjXnHPgZKZbNCdb4m4VS_CmmKjdadfVw_O64fDbf6ss_U"
                  alt="Cao Nguyên Đại Ngàn"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                  Đất đỏ Bazan
                </span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary">
                Cao Nguyên Đại Ngàn Đất Đỏ
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rừng cà phê Buôn Ma Thuột, Đắk Nông, Đồi chè Cầu Đất. Nông nghiệp cảnh quan đa tầng, ca cao hữu cơ và cồng chiêng lửa trại.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm flex items-center justify-between bg-surface-container-low p-space-xs rounded-lg">
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                18 Tuyến tour
              </span>
              <span className="material-symbols-outlined text-[18px] text-primary">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Ecosystem 4 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-space-sm">
              <div className="w-full h-44 rounded-lg overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Rich alluvial Mekong Delta orchard waterways in Cai Be Ben Tre and Ca Mau mangrove forest. Wooden boats loaded with tropical fruits gliding along water palm lined canals, vibrant green foliage and reflection of tranquil rivers."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjybIhdjkSBTAzWmvnotzL38vuJ-Lh7jj3zDrMIsLwoClYEebTnzdsg2TukiAwgQED6kKiAutuk37Th7HbGC2Vf8Xx_ZVumP1yIJTZnKypXJ_00oAclsdUgOshgbaumoutdqNIcZiOO-D3HSyvI0xzbUXtUQpFvsYwMc0Wn2XLbvPMI5cFDikEbydO4fx3GBfa75frbOy0g53m7GRA0XaV95i6szNZ0RHV-zl4PLE"
                  alt="Miệt Vườn &amp; Rừng Ngập Mặn"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                  Rừng ngập &amp; Sông rạch
                </span>
              </div>
              <h3 className="font-title-editorial text-title-editorial text-primary">
                Miệt Vườn &amp; Rừng Ngập Mặn
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rừng đước Mũi Cà Mau, Miệt vườn Cái Bè, Xứ Dừa Bến Tre. Khám phá sinh quyển đất ngập mặn, nuôi tôm sinh thái dưới tán rừng đước.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm flex items-center justify-between bg-surface-container-low p-space-xs rounded-lg">
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                24 Tuyến tour
              </span>
              <span className="material-symbols-outlined text-[18px] text-primary">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
