import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import type { FeaturedProductsBlock, Product } from "@/payload-types";

export interface FeaturedProductsSectionProps {
  block: FeaturedProductsBlock;
}

const fallbackProducts: Product[] = [
  {
    id: "prod-1",
    title: "Trà Đinh Ngọc Tân Cương",
    slug: "tra-dinh-ngoc-tan-cuong",
    stars: 5,
    category: "NONG_SAN_THUC_PHAM",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Được tuyển chọn từ những búp trà đinh non tươi ngon nhất vùng đồi chè Tân Cương, Thái Nguyên.",
    province: {
      id: "p1",
      name: "Thái Nguyên",
      slug: "thai-nguyen",
      code: "TN",
      region: "BAC",
    },
  },
  {
    id: "prod-2",
    title: "Nước mắm Phú Quốc truyền thống",
    slug: "nuoc-mam-phu-quoc-truyen-thong",
    stars: 5,
    category: "NONG_SAN_THUC_PHAM",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Ủ chượp tự nhiên từ cá cơm than tươi và muối hạt tinh khiết trong thùng gỗ bời lời.",
    province: {
      id: "p2",
      name: "Kiên Giang",
      slug: "kien-giang",
      code: "KG",
      region: "NAM",
    },
  },
  {
    id: "prod-3",
    title: "Sâm Ngọc Linh Kon Tum",
    slug: "sam-ngoc-linh-kon-tum",
    stars: 5,
    category: "DUOC_LIEU_SUC_KHOE",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Quốc bảo dược liệu Việt Nam sinh trưởng tự nhiên dưới tán rừng nguyên sinh đỉnh Ngọc Linh.",
    province: {
      id: "p3",
      name: "Kon Tum",
      slug: "kon-tum",
      code: "KT",
      region: "TRUNG",
    },
  },
  {
    id: "prod-4",
    title: "Gốm sứ Chu Đậu men tro trấu",
    slug: "gom-su-chu-dau-men-tro-trau",
    stars: 4,
    category: "THU_CONG_MY_NGHE",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Dòng gốm cổ truyền mỹ nghệ bác học với kỹ thuật vẽ lam họa tiết chim hoa độc bản.",
    province: {
      id: "p4",
      name: "Hải Dương",
      slug: "hai-duong",
      code: "HD",
      region: "BAC",
    },
  },
];

export function FeaturedProductsSection({
  block,
}: FeaturedProductsSectionProps) {
  const heading = block.heading || "Sản phẩm OCOP tiêu biểu";
  const rawProducts = (block.pinned || []).filter(
    (item): item is Product => typeof item === "object" && item !== null,
  );
  const products = rawProducts.length > 0 ? rawProducts : fallbackProducts;

  return (
    <section className="w-full bg-surface-container-lowest py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CHUYÊN MỤC 02"
          title={heading}
          description="Khám phá các sản phẩm OCOP đạt chuẩn 3–5 sao từ khắp các vùng miền trên cả nước."
          viewAllHref="/vi/san-pham-ocop"
          viewAllLabel="Xem tất cả sản phẩm"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id || product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProductsSection;
