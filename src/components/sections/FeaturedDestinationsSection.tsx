import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DestinationCard } from "@/components/ui/DestinationCard";
import type { FeaturedDestinationsBlock, Destination } from "@/payload-types";

export interface FeaturedDestinationsSectionProps {
  block: FeaturedDestinationsBlock;
}

const fallbackDestinations: Destination[] = [
  {
    id: "dest-1",
    title: "Không gian văn hóa Trà Tân Cương",
    slug: "khong-gian-van-hoa-tra-tan-cuong",
    kind: "ECO_TOUR",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Hành trình trải nghiệm đồi chè bát úp xanh mướt, tự tay hái búp chè một tôm hai lá và thưởng trà cùng nghệ nhân.",
    province: {
      id: "p1",
      name: "Thái Nguyên",
      slug: "thai-nguyen",
      code: "TN",
      region: "BAC",
    },
  },
  {
    id: "dest-2",
    title: "Làng gốm Thanh Hà bên dòng sông Thu Bồn",
    slug: "lang-gom-thanh-ha-song-thu-bon",
    kind: "CRAFT_VILLAGE",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Di sản làng nghề truyền thống hơn 500 năm tuổi, nơi các nghệ nhân lưu giữ kỹ thuật chuốt gốm đất sét thủ công độc đáo.",
    province: {
      id: "p2",
      name: "Quảng Nam",
      slug: "quang-nam",
      code: "QN",
      region: "TRUNG",
    },
  },
  {
    id: "dest-3",
    title: "Làng hoa Sa Đéc và du lịch nông nghiệp xanh",
    slug: "lang-hoa-sa-dec-du-lich-nong-nghiep-xanh",
    kind: "DESTINATION",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Vựa hoa kiểng lớn nhất miền Tây Nam Bộ với hàng nghìn chủng loại hoa nở rộ trên giàn nổi trên mặt nước phù sa.",
    province: {
      id: "p3",
      name: "Đồng Tháp",
      slug: "dong-thap",
      code: "DT",
      region: "NAM",
    },
  },
];

export function FeaturedDestinationsSection({
  block,
}: FeaturedDestinationsSectionProps) {
  const heading = block.heading || "Điểm đến & Trải nghiệm sinh thái OCOP";
  const rawDestinations = (block.pinned || []).filter(
    (item): item is Destination => typeof item === "object" && item !== null,
  );
  const destinations =
    rawDestinations.length > 0 ? rawDestinations : fallbackDestinations;

  return (
    <section className="w-full bg-[#e8efea] py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CHUYÊN MỤC 04"
          title={heading}
          description="Kết nối các làng nghề cổ truyền, tuyến du lịch sinh thái nông nghiệp và điểm đến trải nghiệm văn hóa bản địa."
          viewAllHref="/vi/diem-den-du-lich"
          viewAllLabel="Xem tất cả điểm đến"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6">
          {destinations.slice(0, 3).map((dest) => (
            <DestinationCard key={dest.id || dest.slug} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinationsSection;
