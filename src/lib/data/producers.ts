import { getCached } from "@/lib/cache";
import { getPayloadClient } from "@/lib/payload";
import type { Producer, Province } from "@/payload-types";

export interface ListProducersParams {
  type?: "COOPERATIVE" | "ENTERPRISE" | "HOUSEHOLD" | string;
  province?: string;
  q?: string;
  page?: number;
  limit?: number;
  isFeatured?: boolean;
}

export interface PaginatedProducersResult {
  docs: Producer[];
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const fallbackProducers: Producer[] = [
  {
    id: "prod-coop-1",
    name: "Hợp tác xã Chè Hảo Đạt",
    slug: "htx-che-hao-dat",
    type: "COOPERATIVE",
    phone: "0208.3855.999",
    email: "chehaodat@gmail.com",
    website: "https://chehaodat.vn",
    address: "Xã Tân Cương, TP. Thái Nguyên, tỉnh Thái Nguyên",
    avatar: "/logo.webp",
    coverImage: "/anh_phong_canh.webp",
    bio: "Đơn vị tiêu biểu của vùng chè Tân Cương với hơn 50ha vùng nguyên liệu đạt chuẩn VietGAP, tiên phong ứng dụng công nghệ chế biến chè bán tự động và đạt nhiều giải thưởng OCOP 5 sao cấp Quốc gia.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-tn",
      name: "Thái Nguyên",
      slug: "thai-nguyen",
      code: "TN",
      region: "BAC",
    },
  },
  {
    id: "prod-coop-2",
    name: "Công ty Cổ phần Nước mắm Khải Hoàn",
    slug: "cong-ty-nuoc-mam-khai-hoan",
    type: "ENTERPRISE",
    phone: "0297.3848.555",
    email: "khaihoanphuquoc@gmail.com",
    website: "https://nuocmamkhaihoan.com",
    address:
      "Số 11 đường Hùng Vương, phường Dương Đông, TP. Phú Quốc, tỉnh Kiên Giang",
    avatar: "/logo.webp",
    coverImage: "/anh_phong_canh.webp",
    bio: "Kế thừa nghề sản xuất nước mắm truyền thống hơn 40 năm với hàng trăm thùng gỗ bời lời lớn nhất đảo ngọc Phú Quốc, bảo đảm chỉ dẫn địa lý được Liên minh châu Âu (EU) bảo hộ.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-kg",
      name: "Kiên Giang",
      slug: "kien-giang",
      code: "KG",
      region: "NAM",
    },
  },
  {
    id: "prod-coop-3",
    name: "Công ty Cổ phần Sâm Ngọc Linh Kon Tum",
    slug: "cong-ty-sam-ngoc-linh-kon-tum",
    type: "ENTERPRISE",
    phone: "0260.3862.999",
    email: "contact@samngoclinh.com",
    website: "https://samngoclinh.com",
    address: "Huyện Tu Mơ Rông, tỉnh Kon Tum",
    avatar: "/logo.webp",
    coverImage: "/anh_phong_canh.webp",
    bio: "Doanh nghiệp tiên phong bảo tồn và nhân giống nguồn gen gốc Sâm Ngọc Linh quý hiếm, sở hữu vùng trồng hàng nghìn ha dưới tán rừng nguyên sinh Kon Tum.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-kt",
      name: "Kon Tum",
      slug: "kon-tum",
      code: "KT",
      region: "TRUNG",
    },
  },
  {
    id: "prod-coop-4",
    name: "Công ty Cổ phần Gốm Chu Đậu",
    slug: "cong-ty-gom-chu-dau",
    type: "ENTERPRISE",
    phone: "0220.3541.258",
    email: "chudauceramic@gmail.com",
    website: "https://chudauceramic.vn",
    address: "Xã Thái Tân, huyện Nam Sách, tỉnh Hải Dương",
    avatar: "/logo.webp",
    coverImage: "/anh_phong_canh.webp",
    bio: "Hồi sinh dòng gốm cổ Chu Đậu danh tiếng từ thế kỷ 14–15, mang nét văn hóa thuần Việt với kỹ thuật làm men tro trấu tự nhiên xuất khẩu sang hơn 30 quốc gia.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-hd",
      name: "Hải Dương",
      slug: "hai-duong",
      code: "HD",
      region: "BAC",
    },
  },
  {
    id: "prod-coop-5",
    name: "HTX Nông nghiệp Cao nguyên đá Mèo Vạc",
    slug: "htx-nong-nghiep-meo-vac",
    type: "COOPERATIVE",
    phone: "0219.3871.123",
    address: "Thị trấn Mèo Vạc, huyện Mèo Vạc, tỉnh Hà Giang",
    avatar: "/logo.webp",
    coverImage: "/anh_phong_canh.webp",
    bio: "Quy tụ hơn 80 hộ đồng bào dân tộc thiểu số phát triển đàn ong nội, khai thác mật hoa bạc hà nguyên chất vùng cao nguyên đá.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-hg",
      name: "Hà Giang",
      slug: "ha-giang",
      code: "HG",
      region: "BAC",
    },
  },
  {
    id: "prod-coop-6",
    name: "Công ty Cổ phần Dược Lâm Đồng Ladophar",
    slug: "cong-ty-duoc-lam-dong-ladophar",
    type: "ENTERPRISE",
    phone: "0263.3822.456",
    address: "Số 18 Ngô Quyền, Phường 6, TP. Đà Lạt, tỉnh Lâm Đồng",
    avatar: "/logo.webp",
    coverImage: "/anh_phong_canh.webp",
    bio: "Thương hiệu dược liệu hàng đầu cao nguyên với chuỗi giá trị Atiso đạt chuẩn GlobalGAP và nhà máy sản xuất đạt chứng nhận GMP-WHO.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-ld",
      name: "Lâm Đồng",
      slug: "lam-dong",
      code: "LD",
      region: "TRUNG",
    },
  },
  {
    id: "prod-coop-7",
    name: "HTX Dệt lụa truyền thống Mã Châu",
    slug: "htx-det-lua-ma-chau",
    type: "COOPERATIVE",
    phone: "0235.3877.888",
    address: "Thị trấn Nam Phước, huyện Duy Xuyên, tỉnh Quảng Nam",
    avatar: "/logo.webp",
    coverImage: "/anh_phong_canh.webp",
    bio: "Bảo tồn làng nghề tơ lụa Mã Châu danh tiếng của thương cảng Hội An xưa, kết hợp dệt thủ công và thiết kế thời trang ứng dụng cao cấp.",
    _status: "published",
    isFeatured: false,
    province: {
      id: "p-qn",
      name: "Quảng Nam",
      slug: "quang-nam",
      code: "QN",
      region: "TRUNG",
    },
  },
  {
    id: "prod-coop-8",
    name: "DNTN Hồ Quang Trí",
    slug: "dntn-ho-quang-tri",
    type: "ENTERPRISE",
    phone: "0299.3852.789",
    address:
      "Đường Tỉnh 934, thị trấn Mỹ Xuyên, huyện Mỹ Xuyên, tỉnh Sóc Trăng",
    avatar: "/logo.webp",
    coverImage: "/anh_phong_canh.webp",
    bio: "Doanh nghiệp độc quyền phân phối và phát triển thương hiệu dòng lúa gạo ST24, ST25 chính hiệu Ông Cua tại thị trường trong nước và quốc tế.",
    _status: "published",
    isFeatured: true,
    province: {
      id: "p-st",
      name: "Sóc Trăng",
      slug: "soc-trang",
      code: "ST",
      region: "NAM",
    },
  },
];

export async function listProducers(
  params: ListProducersParams = {},
): Promise<PaginatedProducersResult> {
  const { type, province, q, page = 1, limit = 12, isFeatured } = params;

  const keyParts = [
    "producers",
    type || "all",
    province || "all",
    q || "all",
    String(isFeatured ?? "all"),
    String(page),
    String(limit),
  ];

  return getCached(
    keyParts,
    ["producers"],
    async () => {
      const payload = await getPayloadClient();

      if (!payload) {
        let filtered = [...fallbackProducers];

        if (type) {
          filtered = filtered.filter((p) => p.type === type);
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
              p.name.toLowerCase().includes(query) ||
              (p.bio && p.bio.toLowerCase().includes(query)) ||
              (p.address && p.address.toLowerCase().includes(query)),
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

        if (type) where.type = { equals: type };
        if (isFeatured !== undefined) where.isFeatured = { equals: isFeatured };
        if (province) where["province.slug"] = { equals: province };
        if (q) {
          where.or = [
            { name: { contains: q } },
            { address: { contains: q } },
            { bio: { contains: q } },
          ];
        }

        const res = await payload.find<Producer>({
          collection: "producers",
          where,
          locale: "vi",
          overrideAccess: false,
          sort: "name",
          limit,
          select: {
            name: true,
            slug: true,
            type: true,
            province: true,
            address: true,
            phone: true,
            email: true,
            website: true,
            avatar: true,
            coverImage: true,
            bio: true,
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
          docs: fallbackProducers.slice(0, limit),
          totalDocs: fallbackProducers.length,
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

export async function getProducer(
  slug: string,
  draft = false,
): Promise<Producer | null> {
  const fetcher = async () => {
    const payload = await getPayloadClient();
    if (!payload) {
      return fallbackProducers.find((p) => p.slug === slug) || null;
    }

    try {
      const where: Record<string, unknown> = {
        slug: { equals: slug },
      };
      if (!draft) {
        where._status = { equals: "published" };
      }

      const res = await payload.find<Producer>({
        collection: "producers",
        where,
        locale: "vi",
        overrideAccess: false,
        limit: 1,
      });

      return res.docs?.[0] || null;
    } catch {
      return fallbackProducers.find((p) => p.slug === slug) || null;
    }
  };

  if (draft) {
    return fetcher();
  }

  return getCached(
    ["producer", slug],
    ["producers", `producer:${slug}`],
    fetcher,
    3600,
  );
}
