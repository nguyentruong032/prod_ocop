import React from "react";
import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";

interface ProvinceCardData {
  id: string;
  name: string;
  subtitle: string;
  region: string;
  description: string;
  image: string;
  alt: string;
  productsCount: number;
  craftVillagesCount: number;
  slug: string;
}

const REPRESENTATIVE_PROVINCES: ProvinceCardData[] = [
  {
    id: "hanoi",
    name: "Thành phố Hà Nội",
    subtitle: "Thăng Long nghìn năm bách nghệ",
    region: "Đồng bằng sông Hồng",
    description: "Hạt nhân bảo tồn làng nghề truyền thống lớn nhất cả nước với các chuỗi giá trị gốm Bát Tràng, lụa Vạn Phúc, khảm trai Chuyên Mỹ.",
    image: "/images/destinations/bat-trang-pottery.webp",
    alt: "Nghệ nhân gốm Bát Tràng Hà Nội",
    productsCount: 1350,
    craftVillagesCount: 318,
    slug: "Ha-Noi",
  },
  {
    id: "thai-nguyen",
    name: "Tỉnh Thái Nguyên",
    subtitle: "Đệ nhất danh trà xứ Bắc",
    region: "Trung du Miền núi phía Bắc",
    description: "Quy tụ 4 vùng trà đặc sản di sản: Tân Cương, La Bằng, Trại Cài, Khe Cốc với chỉ dẫn địa lý được bảo hộ nghiêm ngặt.",
    image: "/images/destinations/thai-nguyen-tea.webp",
    alt: "Đồi chè Tân Cương Thái Nguyên",
    productsCount: 173,
    craftVillagesCount: 148,
    slug: "Thai-Nguyen",
  },
  {
    id: "quang-nam",
    name: "Tỉnh Quảng Nam",
    subtitle: "Xứ sở Di sản & Dược liệu Quốc bảo",
    region: "Duyên hải Nam Trung Bộ",
    description: "Nơi gìn giữ tinh hoa Sâm Ngọc Linh trên đỉnh núi thiêng Nam Trà My, cùng làng gốm Thanh Hà và dệt lụa tơ tằm Mã Châu ven sông Thu Bồn.",
    image: "/images/destinations/sam-ngoc-linh.webp",
    alt: "Vườn Sâm Ngọc Linh Quảng Nam",
    productsCount: 268,
    craftVillagesCount: 45,
    slug: "Quang-Nam",
  },
  {
    id: "lam-dong",
    name: "Tỉnh Lâm Đồng",
    subtitle: "Cao nguyên Hoa & Trà B’Lao",
    region: "Tây Nguyên",
    description: "Trung tâm nông nghiệp công nghệ cao của cả nước với các sản phẩm trà Oolong Bảo Lộc, rau hoa ôn đới Đà Lạt và tơ tằm Nam Ban.",
    image: "/images/destinations/lam-dong-tea.webp",
    alt: "Đồi chè Oolong Bảo Lộc Lâm Đồng",
    productsCount: 215,
    craftVillagesCount: 38,
    slug: "Lam-Dong",
  },
  {
    id: "ben-tre",
    name: "Tỉnh Bến Tre",
    subtitle: "Thủ phủ Xứ Dừa Miệt vườn",
    region: "Đồng bằng sông Cửu Long",
    description: "Tiên phong chế biến sâu các sản phẩm từ cây dừa đạt chuẩn 5 sao OCOP xuất khẩu sang thị trường Châu Âu, Mỹ và Nhật Bản.",
    image: "/images/destinations/ben-tre-coconut.webp",
    alt: "Chế biến kẹo dừa thủ công Bến Tre",
    productsCount: 165,
    craftVillagesCount: 52,
    slug: "Ben-Tre",
  },
  {
    id: "dak-lak",
    name: "Tỉnh Đắk Lắk",
    subtitle: "Thủ phủ Cà phê & Bản sắc Tây Nguyên",
    region: "Tây Nguyên",
    description: "Vựa cà phê Robusta chất lượng cao, hạt tiêu Đắk Song và các điểm du lịch trải nghiệm văn hóa cồng chiêng buôn làng Ê Đê.",
    image: "/images/destinations/daklak-coffee.webp",
    alt: "Rẫy cà phê chín đỏ Buôn Ma Thuột",
    productsCount: 185,
    craftVillagesCount: 32,
    slug: "Dak-Lak",
  },
];

export function RepresentativeProvincesGrid() {
  return (
    <section className="w-full py-12 bg-surface-container-low/20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              Hồ sơ địa phương điển hình
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-primary mt-1">
              Danh mục Phân bổ Tọa độ theo Tỉnh/Thành Tiêu biểu
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-on-surface-variant">
            Hiển thị 6 hồ sơ không gian hoàn thiện cấu trúc dữ liệu di sản &amp; GIS
          </div>
        </div>

        {/* 6-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPRESENTATIVE_PROVINCES.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest rounded-xl p-5 border border-surface-container/60 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-3">
                <div className="relative h-48 w-full rounded-lg overflow-hidden bg-surface-container">
                  <MediaImage
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-primary/90 text-white rounded text-xs font-medium backdrop-blur-xs">
                    {item.region}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-secondary font-bold">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-primary">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs bg-surface-container-low p-3 rounded-lg border border-surface-container/40">
                <div>
                  <span className="font-bold text-primary">{item.productsCount}</span>{" "}
                  <span className="text-on-surface-variant">Sản phẩm OCOP</span>
                </div>
                <div className="text-outline-variant">•</div>
                <div>
                  <span className="font-bold text-secondary">{item.craftVillagesCount}</span>{" "}
                  <span className="text-on-surface-variant">Làng nghề số hóa</span>
                </div>
                <div className="text-outline-variant">•</div>
                <Link
                  href={`/vi/san-pham-ocop?province=${encodeURIComponent(item.name.replace("Tỉnh ", "").replace("Thành phố ", ""))}`}
                  className="font-semibold text-primary hover:underline"
                >
                  Khám phá
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RepresentativeProvincesGrid;
