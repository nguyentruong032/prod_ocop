import { getCached } from "@/lib/cache";
import { getPayloadClient } from "@/lib/payload";
import type { Product, Province, Producer } from "@/payload-types";

export interface ListProductsParams {
  stars?: number;
  category?:
    | "NONG_SAN_THUC_PHAM"
    | "DUOC_LIEU_SUC_KHOE"
    | "THU_CONG_MY_NGHE"
    | "KHAC"
    | string;
  province?: string;
  q?: string;
  page?: number;
  limit?: number;
  isFeatured?: boolean;
}

export interface PaginatedProductsResult {
  docs: Product[];
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export interface ProductsStarsCount {
  total: number;
  stars3: number;
  stars4: number;
  stars5: number;
}

const fallbackProducts: Product[] = [
  {
    id: "prod-1",
    title: "Trà Đinh Ngọc Tân Cương",
    slug: "tra-dinh-ngoc-tan-cuong",
    stars: 5,
    category: "NONG_SAN_THUC_PHAM",
    coverImage: "/anh_phong_canh.webp",
    gallery: [
      { id: "g-1", image: "/anh_phong_canh.webp" },
      { id: "g-2", image: "/anh_phong_canh.webp" },
    ],
    excerpt:
      "Tuyển chọn từ những đọt trà non tươi nhất vùng chè Tân Cương, sản xuất theo quy trình VietGAP khép kín.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-tn",
      name: "Thái Nguyên",
      slug: "thai-nguyen",
      code: "TN",
      region: "BAC",
    },
    producer: {
      id: "prod-coop-1",
      name: "Hợp tác xã Chè Hảo Đạt",
      slug: "htx-che-hao-dat",
      type: "COOPERATIVE",
      phone: "0208.3855.999",
      address: "Xã Tân Cương, TP. Thái Nguyên, tỉnh Thái Nguyên",
    },
  },
  {
    id: "prod-2",
    title: "Nước mắm Phú Quốc truyền thống Khải Hoàn",
    slug: "nuoc-mam-phu-quoc-truyen-thong",
    stars: 5,
    category: "NONG_SAN_THUC_PHAM",
    coverImage: "/anh_phong_canh.webp",
    gallery: [{ id: "g-3", image: "/anh_phong_canh.webp" }],
    excerpt:
      "Ủ chượp tự nhiên từ cá cơm than tươi và muối biển Bà Rịa trong thùng gỗ bời lời trên 12 tháng.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-kg",
      name: "Kiên Giang",
      slug: "kien-giang",
      code: "KG",
      region: "NAM",
    },
    producer: {
      id: "prod-coop-2",
      name: "Công ty Cổ phần Nước mắm Khải Hoàn",
      slug: "cong-ty-nuoc-mam-khai-hoan",
      type: "ENTERPRISE",
      phone: "0297.3848.555",
      address: "Phường Dương Đông, TP. Phú Quốc, tỉnh Kiên Giang",
    },
  },
  {
    id: "prod-3",
    title: "Sâm Ngọc Linh Kon Tum K5",
    slug: "sam-ngoc-linh-kon-tum",
    stars: 5,
    category: "DUOC_LIEU_SUC_KHOE",
    coverImage: "/anh_phong_canh.webp",
    gallery: [{ id: "g-4", image: "/anh_phong_canh.webp" }],
    excerpt:
      "Quốc bảo dược liệu Việt Nam sinh trưởng tự nhiên dưới tán rừng nguyên sinh đỉnh núi Ngọc Linh.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-kt",
      name: "Kon Tum",
      slug: "kon-tum",
      code: "KT",
      region: "TRUNG",
    },
    producer: {
      id: "prod-coop-3",
      name: "Công ty Cổ phần Sâm Ngọc Linh Kon Tum",
      slug: "cong-ty-sam-ngoc-linh-kon-tum",
      type: "ENTERPRISE",
      phone: "0260.3862.999",
      address: "Huyện Tu Mơ Rông, tỉnh Kon Tum",
    },
  },
  {
    id: "prod-4",
    title: "Gốm sứ Chu Đậu vẽ vàng kim",
    slug: "gom-su-chu-dau-men-tro-trau",
    stars: 4,
    category: "THU_CONG_MY_NGHE",
    coverImage: "/anh_phong_canh.webp",
    gallery: [{ id: "g-5", image: "/anh_phong_canh.webp" }],
    excerpt:
      "Dòng gốm cổ truyền mỹ nghệ bác học với kỹ thuật làm men tro trấu độc bản và họa tiết chuốt tay tinh xảo.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-hd",
      name: "Hải Dương",
      slug: "hai-duong",
      code: "HD",
      region: "BAC",
    },
    producer: {
      id: "prod-coop-4",
      name: "Công ty Cổ phần Gốm Chu Đậu",
      slug: "cong-ty-gom-chu-dau",
      type: "ENTERPRISE",
      phone: "0220.3541.258",
      address: "Xã Thái Tân, huyện Nam Sách, tỉnh Hải Dương",
    },
  },
  {
    id: "prod-5",
    title: "Mật ong Bạc Hà Cao nguyên đá Mèo Vạc",
    slug: "mat-ong-bac-ha-meo-vac",
    stars: 4,
    category: "NONG_SAN_THUC_PHAM",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Khai thác từ ong hút mật hoa bạc hà mọc hoang dã trên hốc đá vôi ở độ cao trên 1.200m.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-hg",
      name: "Hà Giang",
      slug: "ha-giang",
      code: "HG",
      region: "BAC",
    },
    producer: {
      id: "prod-coop-5",
      name: "HTX Nông nghiệp Cao nguyên đá Mèo Vạc",
      slug: "htx-nong-nghiep-meo-vac",
      type: "COOPERATIVE",
      address: "Thị trấn Mèo Vạc, tỉnh Hà Giang",
    },
  },
  {
    id: "prod-6",
    title: "Cao Atiso Đà Lạt nguyên chất Ladophar",
    slug: "cao-atiso-da-lat-nguyen-chat",
    stars: 4,
    category: "DUOC_LIEU_SUC_KHOE",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Chiết xuất 100% từ lá tươi atiso trồng tại vùng đất cao nguyên sương mù Đà Lạt.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-ld",
      name: "Lâm Đồng",
      slug: "lam-dong",
      code: "LD",
      region: "TRUNG",
    },
    producer: {
      id: "prod-coop-6",
      name: "Công ty Cổ phần Dược Lâm Đồng Ladophar",
      slug: "cong-ty-duoc-lam-dong-ladophar",
      type: "ENTERPRISE",
      address: "Phường 11, TP. Đà Lạt, tỉnh Lâm Đồng",
    },
  },
  {
    id: "prod-7",
    title: "Tơ lụa dệt hoa Mã Châu Duy Xuyên",
    slug: "to-lua-ma-chau-duy-xuyen",
    stars: 4,
    category: "THU_CONG_MY_NGHE",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Làng nghề ươm tơ dệt lụa hơn 400 năm bên bờ sông Thu Bồn, chất vải óng ả tự nhiên từ kén tằm dâu.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-qn",
      name: "Quảng Nam",
      slug: "quang-nam",
      code: "QN",
      region: "TRUNG",
    },
    producer: {
      id: "prod-coop-7",
      name: "HTX Dệt lụa truyền thống Mã Châu",
      slug: "htx-det-lua-ma-chau",
      type: "COOPERATIVE",
      address: "Thị trấn Nam Phước, huyện Duy Xuyên, tỉnh Quảng Nam",
    },
  },
  {
    id: "prod-8",
    title: "Gạo ST25 Ông Cua Sóc Trăng",
    slug: "gao-st25-ong-cua-soc-trang",
    stars: 5,
    category: "NONG_SAN_THUC_PHAM",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Gạo ngon nhất thế giới lai tạo bởi kỹ sư Hồ Quang Cua, hạt gạo thon dài, dẻo thơm mùi lá dứa.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-st",
      name: "Sóc Trăng",
      slug: "soc-trang",
      code: "ST",
      region: "NAM",
    },
    producer: {
      id: "prod-coop-8",
      name: "DNTN Hồ Quang Trí",
      slug: "dntn-ho-quang-tri",
      type: "ENTERPRISE",
      address: "Huyện Mỹ Xuyên, tỉnh Sóc Trăng",
    },
  },
  {
    id: "prod-9",
    title: "Tinh dầu sả chanh Trà Bồng",
    slug: "tinh-dau-sa-chanh-tra-bong",
    stars: 3,
    category: "DUOC_LIEU_SUC_KHOE",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Chưng cất lôi cuốn hơi nước từ cây sả chanh tươi trồng trên đồi núi miền Tây Quảng Ngãi.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-qng",
      name: "Quảng Ngãi",
      slug: "quang-ngai",
      code: "QNG",
      region: "TRUNG",
    },
    producer: {
      id: "prod-coop-9",
      name: "Hộ kinh doanh Tinh dầu Quế Sả Trà Bồng",
      slug: "hkd-tinh-dau-tra-bong",
      type: "HOUSEHOLD",
      address: "Huyện Trà Bồng, tỉnh Quảng Ngãi",
    },
  },
  {
    id: "prod-10",
    title: "Nón lá truyền thống Làng Chuông",
    slug: "non-la-lang-chuong",
    stars: 3,
    category: "THU_CONG_MY_NGHE",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Khâu tay từ lá lụi trắng tinh khôi, từng đường kim mũi cước tỉ mỉ của các nghệ nhân làng Chuông.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-hn",
      name: "Hà Nội",
      slug: "ha-noi",
      code: "HN",
      region: "BAC",
    },
    producer: {
      id: "prod-coop-10",
      name: "Hộ kinh doanh Nghệ nhân Tạ Thu Hương",
      slug: "hkd-nghe-nhan-ta-thu-huong",
      type: "HOUSEHOLD",
      address: "Làng Chuông, huyện Thanh Oai, Hà Nội",
    },
  },
  {
    id: "prod-11",
    title: "Miến dong Na Rì Bắc Kạn",
    slug: "mien-dong-na-ri-bac-kan",
    stars: 3,
    category: "NONG_SAN_THUC_PHAM",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Làm hoàn toàn từ củ dong riềng đỏ vùng cao, sợi miến trong, dai giòn tự nhiên không dùng hóa chất tẩy.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-bk",
      name: "Bắc Kạn",
      slug: "bac-kan",
      code: "BK",
      region: "BAC",
    },
    producer: {
      id: "prod-coop-11",
      name: "HTX Miến dong Tài Hoan",
      slug: "htx-mien-dong-tai-hoan",
      type: "COOPERATIVE",
      address: "Xã Côn Minh, huyện Na Rì, tỉnh Bắc Kạn",
    },
  },
  {
    id: "prod-12",
    title: "Trầm hương Vạn Giã Khánh Hòa",
    slug: "tram-huong-van-gia-khanh-hoa",
    stars: 4,
    category: "DUOC_LIEU_SUC_KHOE",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Tạo tác từ cây dó bầu tích trầm tự nhiên tại xứ trầm hương Khánh Hòa, hương thơm thanh khiết lưu giữ bền lâu.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-kh",
      name: "Khánh Hòa",
      slug: "khanh-hoa",
      code: "KH",
      region: "TRUNG",
    },
    producer: {
      id: "prod-coop-12",
      name: "Công ty Trầm hương Khánh Hòa ATC",
      slug: "cong-ty-tram-huong-atc",
      type: "ENTERPRISE",
      address: "Huyện Vạn Ninh, tỉnh Khánh Hòa",
    },
  },
];

export async function listProducts(
  params: ListProductsParams = {},
): Promise<PaginatedProductsResult> {
  const {
    stars,
    category,
    province,
    q,
    page = 1,
    limit = 12,
    isFeatured,
  } = params;

  const keyParts = [
    "products",
    String(stars || "all"),
    category || "all",
    province || "all",
    q || "all",
    String(isFeatured ?? "all"),
    String(page),
    String(limit),
  ];

  return getCached(
    keyParts,
    ["products"],
    async () => {
      const payload = await getPayloadClient();

      if (!payload) {
        let filtered = [...fallbackProducts];

        if (stars) {
          filtered = filtered.filter((p) => p.stars === stars);
        }
        if (category) {
          filtered = filtered.filter((p) => p.category === category);
        }
        if (isFeatured !== undefined) {
          filtered = filtered.filter(
            (p) => Boolean(p.isFeatured) === isFeatured,
          );
        }
        if (province) {
          filtered = filtered.filter((p) => {
            if (!p.province || typeof p.province !== "object") return false;
            return (
              (p.province as Province).slug === province ||
              (p.province as Province).id === province
            );
          });
        }
        if (q) {
          const query = q.toLowerCase().trim();
          filtered = filtered.filter(
            (p) =>
              p.title.toLowerCase().includes(query) ||
              (p.excerpt && p.excerpt.toLowerCase().includes(query)) ||
              (typeof p.producer === "object" &&
                p.producer &&
                p.producer.name.toLowerCase().includes(query)),
          );
        }

        const totalDocs = filtered.length;
        const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
        const start = (page - 1) * limit;
        const docs = filtered.slice(start, start + limit);

        return {
          docs,
          totalDocs,
          totalPages,
          page,
          limit,
          hasPrevPage: page > 1,
          hasNextPage: page < totalPages,
        };
      }

      try {
        const where: Record<string, unknown> = {
          _status: { equals: "published" },
        };

        if (stars) where.stars = { equals: stars };
        if (category) where.category = { equals: category };
        if (isFeatured !== undefined) where.isFeatured = { equals: isFeatured };
        if (province) where["province.slug"] = { equals: province };
        if (q) {
          where.or = [{ title: { contains: q } }, { excerpt: { contains: q } }];
        }

        const res = await payload.find<Product>({
          collection: "products",
          where,
          locale: "vi",
          overrideAccess: false,
          sort: "-stars",
          limit,
          select: {
            title: true,
            slug: true,
            stars: true,
            category: true,
            province: true,
            producer: true,
            coverImage: true,
            excerpt: true,
            isFeatured: true,
          },
        });

        const totalDocs =
          (res as unknown as { totalDocs?: number }).totalDocs ||
          res.docs.length;
        const totalPages = Math.max(1, Math.ceil(totalDocs / limit));

        return {
          docs: res.docs || [],
          totalDocs,
          totalPages,
          page,
          limit,
          hasPrevPage: page > 1,
          hasNextPage: page < totalPages,
        };
      } catch {
        return {
          docs: fallbackProducts.slice(0, limit),
          totalDocs: fallbackProducts.length,
          totalPages: 1,
          page: 1,
          limit,
          hasPrevPage: false,
          hasNextPage: false,
        };
      }
    },
    3600,
  );
}

export async function countProductsByStars(): Promise<ProductsStarsCount> {
  return getCached(
    ["products-count-by-stars"],
    ["products"],
    async () => {
      const payload = await getPayloadClient();

      if (!payload) {
        const stars3 = fallbackProducts.filter((p) => p.stars === 3).length;
        const stars4 = fallbackProducts.filter((p) => p.stars === 4).length;
        const stars5 = fallbackProducts.filter((p) => p.stars === 5).length;
        return {
          total: fallbackProducts.length,
          stars3,
          stars4,
          stars5,
        };
      }

      try {
        const [c3, c4, c5] = await Promise.all([
          payload.find({
            collection: "products",
            where: { _status: { equals: "published" }, stars: { equals: 3 } },
            limit: 1,
          }),
          payload.find({
            collection: "products",
            where: { _status: { equals: "published" }, stars: { equals: 4 } },
            limit: 1,
          }),
          payload.find({
            collection: "products",
            where: { _status: { equals: "published" }, stars: { equals: 5 } },
            limit: 1,
          }),
        ]);

        const getCount = (r: unknown) =>
          (r as { totalDocs?: number })?.totalDocs ?? 0;
        const stars3 = getCount(c3);
        const stars4 = getCount(c4);
        const stars5 = getCount(c5);

        return {
          total: stars3 + stars4 + stars5,
          stars3,
          stars4,
          stars5,
        };
      } catch {
        return {
          total: fallbackProducts.length,
          stars3: 3,
          stars4: 5,
          stars5: 4,
        };
      }
    },
    3600,
  );
}

export async function getProduct(
  slug: string,
  draft = false,
): Promise<Product | null> {
  const fetcher = async () => {
    const payload = await getPayloadClient();
    if (!payload) {
      return fallbackProducts.find((p) => p.slug === slug) || null;
    }

    try {
      const where: Record<string, unknown> = {
        slug: { equals: slug },
      };
      if (!draft) {
        where._status = { equals: "published" };
      }

      const res = await payload.find<Product>({
        collection: "products",
        where,
        locale: "vi",
        overrideAccess: false,
        limit: 1,
      });

      return res.docs?.[0] || null;
    } catch {
      return fallbackProducts.find((p) => p.slug === slug) || null;
    }
  };

  if (draft) {
    return fetcher();
  }

  return getCached(
    ["product", slug],
    ["products", `product:${slug}`],
    fetcher,
    3600,
  );
}

export async function getProductsByProducer(
  producerIdOrSlug: string,
  limit = 8,
): Promise<Product[]> {
  return getCached(
    ["products-by-producer", producerIdOrSlug, String(limit)],
    ["products"],
    async () => {
      const payload = await getPayloadClient();

      if (!payload) {
        return fallbackProducts
          .filter((p) => {
            if (!p.producer) return false;
            if (typeof p.producer === "string")
              return p.producer === producerIdOrSlug;
            return (
              p.producer.id === producerIdOrSlug ||
              p.producer.slug === producerIdOrSlug
            );
          })
          .slice(0, limit);
      }

      try {
        const res = await payload.find<Product>({
          collection: "products",
          where: {
            _status: { equals: "published" },
            or: [
              { "producer.id": { equals: producerIdOrSlug } },
              { "producer.slug": { equals: producerIdOrSlug } },
            ],
          },
          locale: "vi",
          overrideAccess: false,
          limit,
        });

        return res.docs || [];
      } catch {
        return fallbackProducts.slice(0, limit);
      }
    },
    3600,
  );
}
