export function RepresentativeProvincesGrid() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low/20">
      <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
              Hồ sơ địa phương điển hình
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
              Danh mục Phân bổ Tọa độ theo Tỉnh/Thành Tiêu biểu
            </h2>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            Hiển thị 6 hồ sơ không gian hoàn thiện cấu trúc dữ liệu di sản &amp; GIS
          </div>
        </div>
        {/* 6-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Card 1: Hà Nội */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Traditional lacquerware and ceramic artisans working in Bat Trang ancient craft village Hanoi with sunlit drying terracotta vessels and atmospheric river mists"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdvcBru0hYtWxHSyunb1uTYjKRaRUCvP_xAA7k_J3pOh--yE74dHvaXnYcdibYpT--k307dqKWEzyX_qIMUeV8fzeOK1SNXGgWsjJJS4WedZ6--tWTPeGv6jakeu6sPDWu2yYCpF4pwA5SrSy5hF1_MvAnfCWhQxdllwFGGKD24cWS-KRPKgqWIqFPSiIk3ndrou-Gzjj-QoFfus4w8itS05mLVytiy_NJF_R2jMQ"
                  alt="Hà Nội"
                />
                <div className="absolute top-2 left-2 px-space-xs py-0.5 bg-primary text-on-primary rounded text-label-sm font-label-sm">
                  Đồng bằng sông Hồng
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  Thăng Long nghìn năm bách nghệ
                </span>
                <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                  Thành phố Hà Nội
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Hạt nhân bảo tồn làng nghề truyền thống lớn nhất cả nước với các chuỗi giá trị gốm Bát Tràng, lụa Vạn Phúc, khảm trai Chuyên Mỹ.
                </p>
              </div>
            </div>
            <div className="pt-space-sm flex items-center justify-between font-label-sm text-label-sm bg-surface-container-low p-space-sm rounded-lg">
              <div>
                <span className="font-bold text-primary">1.350</span> Sản phẩm OCOP
              </div>
              <div className="text-outline-variant">•</div>
              <div>
                <span className="font-bold text-secondary">318</span> Làng nghề số hóa
              </div>
            </div>
          </div>

          {/* Card 2: Thái Nguyên */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Terraced green tea plantations in Tan Cuong Thai Nguyen under serene morning light with mist floating over reservoir lake and local tea farmers"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0kfvBMAmgKZbUaplIoHqgXvfkkNUuAk1tycAA5F5EHnMEqmjuoSs6TPb_OuvlRa1ZfVaVGbTurBu6Z__UOqSCmSqazXXndBZbX3sumgGLmgYtWkn85Qzi1xNts4q4kGPAHp5s50Nh8z0uvpAQvjxcqL_-uvPmndg6xHayV4s0oRh5xfARKJsGfoLk9n8amSgkCQeDskEtWVus6gJsbLoRb8Nt13BHlinEWMvPgfI"
                  alt="Thái Nguyên"
                />
                <div className="absolute top-2 left-2 px-space-xs py-0.5 bg-primary text-on-primary rounded text-label-sm font-label-sm">
                  Trung du Miền núi phía Bắc
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  Đệ nhất danh trà xứ Bắc
                </span>
                <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                  Tỉnh Thái Nguyên
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Quy tụ 4 vùng trà đặc sản di sản: Tân Cương, La Bằng, Trại Cài, Khe Cốc với chỉ dẫn địa lý được bảo hộ nghiêm ngặt.
                </p>
              </div>
            </div>
            <div className="pt-space-sm flex items-center justify-between font-label-sm text-label-sm bg-surface-container-low p-space-sm rounded-lg">
              <div>
                <span className="font-bold text-primary">173</span> Sản phẩm OCOP
              </div>
              <div className="text-outline-variant">•</div>
              <div>
                <span className="font-bold text-secondary">4</span> Vùng chè đặc sản
              </div>
            </div>
          </div>

          {/* Card 3: Quảng Nam */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Artisanal pottery spinning wheel in Thanh Ha pottery village Quang Nam alongside silkworm weaving looms in Ma Chau with warm earthy terracotta lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW-Iz-aGSdI9XuZTDyTCjoSQHNMjDn1uKYt1k1kP5L-nhN9yw2M4W11-vmBP8HujnLFpAt84om7-iy8HoMjPmZBE_CCD_A6vbwcJ018CXKNQaBdEDOinrFsK11YgNbQzGs_K8sHYiC8NSyY9oEezLoKjdTrs4zowAeiMOkeOgotbxAtsKEdmMM3LlWtG7tDzu_wEl5N97rmAT4WdJf2DhGj7SDuXVOifeOhu8E1fA"
                  alt="Quảng Nam"
                />
                <div className="absolute top-2 left-2 px-space-xs py-0.5 bg-primary text-on-primary rounded text-label-sm font-label-sm">
                  Bắc Trung Bộ &amp; Duyên hải
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  Di sản văn hóa &amp; Thảo dược đại ngàn
                </span>
                <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                  Tỉnh Quảng Nam
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Vành đai dược liệu Sâm Ngọc Linh Nam Trà My kết hợp các làng nghề ven sông Thu Bồn như gốm Thanh Hà, dệt lụa Mã Châu.
                </p>
              </div>
            </div>
            <div className="pt-space-sm flex items-center justify-between font-label-sm text-label-sm bg-surface-container-low p-space-sm rounded-lg">
              <div>
                <span className="font-bold text-primary">268</span> Sản phẩm OCOP
              </div>
              <div className="text-outline-variant">•</div>
              <div>
                <span className="font-bold text-secondary">Sâm Ngọc Linh</span> GI
              </div>
            </div>
          </div>

          {/* Card 4: Đắk Lắk */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Sun-dried ripe red coffee cherries spread over raised drying tables in Buon Ma Thuot Dak Lak basalt plateau with long wooden Ede communal houses in background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVzFtq7jN_mCNnLDxXcbmVt8w0U2R0cHr9tMTlaLjNKcIBRsMSCRO_tpQeRipHVBNCZj1Sp3H9K2DQ2RcUy84qmr5JO4q2T0e_V7X5q4aKe7SJ0usuvSbPI3f7IJP2Jj0zEQgPc3hBzvZUBBnI8lak4l8tTA4gh5dpiXgT1kNaXBvd3QKk0MqPFU0BYlOW3QuHF4AbwODcLpTa_oOlkwuq-e3MFeyrRUMSb_10-5M"
                  alt="Đắk Lắk"
                />
                <div className="absolute top-2 left-2 px-space-xs py-0.5 bg-primary text-on-primary rounded text-label-sm font-label-sm">
                  Tây Nguyên
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  Thủ phủ cà phê &amp; Đất đỏ bazan
                </span>
                <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                  Tỉnh Đắk Lắk
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Không gian văn hóa Cồng chiêng gắn liền chuỗi giá trị Cà phê Buôn Ma Thuột, hạt Mắc ca Krông Năng và mật ong hoa rừng.
                </p>
              </div>
            </div>
            <div className="pt-space-sm flex items-center justify-between font-label-sm text-label-sm bg-surface-container-low p-space-sm rounded-lg">
              <div>
                <span className="font-bold text-primary">145</span> Sản phẩm OCOP
              </div>
              <div className="text-outline-variant">•</div>
              <div>
                <span className="font-bold text-secondary">Cà phê BMT</span> Chỉ dẫn GI
              </div>
            </div>
          </div>

          {/* Card 5: Bến Tre */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Lush green coconut canal waterways in Ben Tre Mekong Delta with artisanal workers handcrafting coconut shell crafts and organic macapuno wax coconut confectionery"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5TsJG20U3tSoNb7JTIGegBTiGnvI0ldHcCIzeptjLMtBpI44q_MhCFzGWYXE3tBPMURdppJP4jgtPWsLnj6mpVbLwA193_Ei1YhcxH57h9CGcTPuGdDRMZwxRlSEgOf-rly56p9sB2DsvQW-3_IOSjSM1tWDfcMciR7AEbfgONrvf8OmOmJRVaJ9Ui54y77pFWCaf6SKhVvJCo1IboMhNim1OR80EPxJzoiiLJ_Y"
                  alt="Bến Tre"
                />
                <div className="absolute top-2 left-2 px-space-xs py-0.5 bg-primary text-on-primary rounded text-label-sm font-label-sm">
                  Đồng bằng Sông Cửu Long
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  Xứ dừa đồng khởi &amp; Kinh tế tuần hoàn
                </span>
                <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                  Tỉnh Bến Tre
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Hệ sinh thái sản phẩm dừa độc bản: kẹo dừa Mỏ Cày, chỉ xơ dừa, dầu dừa tinh khiết và du lịch sinh thái sông nước Cù lao.
                </p>
              </div>
            </div>
            <div className="pt-space-sm flex items-center justify-between font-label-sm text-label-sm bg-surface-container-low p-space-sm rounded-lg">
              <div>
                <span className="font-bold text-primary">182</span> Sản phẩm OCOP
              </div>
              <div className="text-outline-variant">•</div>
              <div>
                <span className="font-bold text-secondary">Chuỗi Dừa sáp</span> &amp; Thủ công
              </div>
            </div>
          </div>

          {/* Card 6: Cà Mau */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Vast mangrove forest waterways in Nam Can Ca Mau Vietnam with wooden fishing boats harvesting eco-certified black tiger prawns and giant sea mud crabs under coastal sunset"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtpLUKHykgjftw4LtwAlKQ9AdroBquUMEtU0cjzaT-Y1V9h5mn4QUOjwEUA4U97Jy_5zDQHOQT5o07r98g8IUnsgkw0-qNHyYXiMH3ZqV8u7TRDblD4WpmpBJUdo4l4nF3EP3EkIv3HDgn6UhOr0izVdgn3XP_3A62cU1vsQM7JAEMIxLDlPlLdFbWuNnZpRr3kDTB7F-WRRk1t-G5XLa574XN4ZE1ZlonvFTjEMw"
                  alt="Cà Mau"
                />
                <div className="absolute top-2 left-2 px-space-xs py-0.5 bg-primary text-on-primary rounded text-label-sm font-label-sm">
                  Đồng bằng Sông Cửu Long
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  Rừng ngập mặn &amp; Thổ nhưỡng cực Nam
                </span>
                <h3 className="font-title-editorial text-title-editorial text-primary font-bold">
                  Tỉnh Cà Mau
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Hệ sinh thái sản vật rừng đước U Minh Hạ và mũi Cà Mau: Cua biển Năm Căn, tôm khô sinh thái, mật ong hoa tràm nguyên chất.
                </p>
              </div>
            </div>
            <div className="pt-space-sm flex items-center justify-between font-label-sm text-label-sm bg-surface-container-low p-space-sm rounded-lg">
              <div>
                <span className="font-bold text-primary">116</span> Sản phẩm OCOP
              </div>
              <div className="text-outline-variant">•</div>
              <div>
                <span className="font-bold text-secondary">Cua Năm Căn</span> Tôm sinh thái
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
