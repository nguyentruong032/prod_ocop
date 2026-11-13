import { getCached } from "@/lib/cache";
import { getPayloadClient } from "@/lib/payload";
import type { Destination, Province } from "@/payload-types";

export interface ListDestinationsParams {
  kind?: "DESTINATION" | "CRAFT_VILLAGE" | "ECO_TOUR";
  ecosystem?:
    | "HIGHLAND_TEA_COFFEE"
    | "RIVER_GARDEN_DELTA"
    | "MEDICINAL_FOREST"
    | "COASTAL_ISLAND"
    | string;
  craftGroup?:
    | "GOM_SU"
    | "DET_MAY"
    | "MAY_TRE_DAN"
    | "DIEU_KHAC"
    | "KIM_HOAN"
    | "KHAC"
    | string;
  province?: string;
  q?: string;
  page?: number;
  limit?: number;
  isFeatured?: boolean;
}

export interface PaginatedDestinationsResult {
  docs: Destination[];
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const fallbackDestinations: Destination[] = [
  {
    id: "dest-1",
    title: "Làng gốm Bát Tràng — Ngàn năm giữ hồn đất Việt",
    slug: "lang-gom-bat-trang",
    kind: "CRAFT_VILLAGE",
    craftGroup: "GOM_SU",
    ageYears: 1000,
    artisanCount: 150,
    isNationalHeritage: true,
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Cái nôi gốm sứ cổ truyền của vùng châu thổ sông Hồng với hàng trăm lò gốm nghệ thuật và các tác phẩm gốm OCOP 5 sao trứ danh.",
    address: "Xã Bát Tràng, Huyện Gia Lâm, Hà Nội",
    province: {
      id: "p-hn",
      name: "Hà Nội",
      slug: "ha-noi",
      code: "HN",
      region: "BAC",
    },
    isFeatured: true,
    _status: "published",
    createdAt: "2026-11-01T08:00:00Z",
  },
  {
    id: "dest-2",
    title: "Làng lụa Vạn Phúc — Tinh hoa the lụa Hà Đông",
    slug: "lang-lua-van-phuc",
    kind: "CRAFT_VILLAGE",
    craftGroup: "DET_MAY",
    ageYears: 1000,
    artisanCount: 120,
    isNationalHeritage: true,
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Vẻ đẹp óng ả mềm mại của lụa tơ tằm truyền thống, nơi lưu giữ tinh hoa khung cửi cổ truyền và sản phẩm khăn lụa OCOP tiêu biểu.",
    address: "Phường Vạn Phúc, Quận Hà Đông, Hà Nội",
    province: {
      id: "p-hn",
      name: "Hà Nội",
      slug: "ha-noi",
      code: "HN",
      region: "BAC",
    },
    isFeatured: true,
    _status: "published",
    createdAt: "2026-11-02T08:00:00Z",
  },
  {
    id: "dest-3",
    title: "Làng mây tre đan Phú Vinh — Bàn tay vàng Chương Mỹ",
    slug: "lang-may-tre-dan-phu-vinh",
    kind: "CRAFT_VILLAGE",
    craftGroup: "MAY_TRE_DAN",
    ageYears: 300,
    artisanCount: 85,
    isNationalHeritage: false,
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Nghệ thuật đan lát mây tre tinh xảo bậc nhất miền Bắc, đưa sản phẩm thủ công mỹ nghệ vươn ra các thị trường xuất khẩu Châu Âu và Nhật Bản.",
    address: "Xã Phú Nghĩa, Huyện Chương Mỹ, Hà Nội",
    province: {
      id: "p-hn",
      name: "Hà Nội",
      slug: "ha-noi",
      code: "HN",
      region: "BAC",
    },
    isFeatured: false,
    _status: "published",
    createdAt: "2026-11-03T08:00:00Z",
  },
  {
    id: "dest-4",
    title: "Làng đá mỹ nghệ Non Nước — Điêu khắc đá Ngũ Hành Sơn",
    slug: "lang-da-my-nghe-non-nuoc",
    kind: "CRAFT_VILLAGE",
    craftGroup: "DIEU_KHAC",
    ageYears: 400,
    artisanCount: 95,
    isNationalHeritage: true,
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Di sản văn hóa phi vật thể quốc gia dưới chân danh thắng Ngũ Hành Sơn, nổi danh với những tác phẩm tượng đá và đồ trang sức chạm khắc tinh tế.",
    address: "Phường Hòa Hải, Quận Ngũ Hành Sơn, Đà Nẵng",
    province: {
      id: "p-dn",
      name: "Đà Nẵng",
      slug: "da-nang",
      code: "DN",
      region: "TRUNG",
    },
    isFeatured: true,
    _status: "published",
    createdAt: "2026-11-04T08:00:00Z",
  },
  {
    id: "dest-5",
    title: "Làng kim hoàn Định Công — Tinh hoa đậu bạc kinh kỳ",
    slug: "lang-kim-hoan-dinh-cong",
    kind: "CRAFT_VILLAGE",
    craftGroup: "KIM_HOAN",
    ageYears: 1500,
    artisanCount: 40,
    isNationalHeritage: false,
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Nghệ thuật kéo sợi và đậu bạc truyền thống thăng hoa qua đôi bàn tay khéo léo của các nghệ nhân Thăng Long ngàn năm văn hiến.",
    address: "Phường Định Công, Quận Hoàng Mai, Hà Nội",
    province: {
      id: "p-hn",
      name: "Hà Nội",
      slug: "ha-noi",
      code: "HN",
      region: "BAC",
    },
    isFeatured: false,
    _status: "published",
    createdAt: "2026-11-05T08:00:00Z",
  },
  {
    id: "dest-6",
    title: "Tuyến du lịch nông nghiệp sinh thái Trà Tân Cương — Hồ Núi Cốc",
    slug: "tuyen-du-lich-sinh-thai-tra-tan-cuong-ho-nui-coc",
    kind: "ECO_TOUR",
    ecosystem: "HIGHLAND_TEA_COFFEE",
    durationDays: 2,
    isFeaturedRoute: true,
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Hành trình đưa du khách về thủ phủ chè Đệ nhất danh trà, trực tiếp trải nghiệm hái búp chè tươi, sao chè thủ công và thưởng trà trong không gian hồ Núi Cốc thơ mộng.",
    address: "Xã Tân Cương, TP. Thái Nguyên, Tỉnh Thái Nguyên",
    province: {
      id: "p-tn",
      name: "Thái Nguyên",
      slug: "thai-nguyen",
      code: "TN",
      region: "BAC",
    },
    itinerary: [
      {
        day: 1,
        title: "Khám phá vùng nguyên liệu Chè di sản Tân Cương",
        description:
          "Trải nghiệm hái chè cùng các nghệ nhân, tìm hiểu quy trình chế biến trà móc câu, trà tôm nõn đạt chuẩn OCOP 5 sao.",
      },
      {
        day: 2,
        title: "Du thuyền sinh thái Hồ Núi Cốc và ẩm thực trà",
        description:
          "Thưởng ngoạn cảnh quan hồ Núi Cốc, giao lưu văn hóa nghệ thuật dân tộc và thưởng thức mâm cỗ trà xanh truyền thống.",
      },
    ],
    isFeatured: true,
    _status: "published",
    createdAt: "2026-11-06T08:00:00Z",
  },
  {
    id: "dest-7",
    title: "Hành trình miệt vườn sông nước Chợ Lách — Cù lao dừa Bến Tre",
    slug: "hanh-trinh-miet-vuon-song-nuoc-cho-lach-ben-tre",
    kind: "ECO_TOUR",
    ecosystem: "RIVER_GARDEN_DELTA",
    durationDays: 1,
    isFeaturedRoute: true,
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Trải nghiệm chèo xuồng len lỏi rạch dừa nước, thưởng thức trái cây chín cây tại vườn và khám phá quy trình làm kẹo dừa, tinh dầu dừa OCOP Bến Tre.",
    address: "Huyện Chợ Lách, Tỉnh Bến Tre",
    province: {
      id: "p-bt",
      name: "Bến Tre",
      slug: "ben-tre",
      code: "BT",
      region: "NAM",
    },
    itinerary: [
      {
        day: 1,
        title: "Trải nghiệm văn hóa sông nước miệt vườn và làng hoa kiểng",
        description:
          "Chèo xuồng ba lá, hái sầu riêng Cái Mơn, tham quan hợp tác xã chế biến các sản phẩm từ dừa đạt chuẩn 4 sao OCOP.",
      },
    ],
    isFeatured: true,
    _status: "published",
    createdAt: "2026-11-07T08:00:00Z",
  },
  {
    id: "dest-8",
    title: "Khám phá rừng dược liệu quý Quốc bảo Sâm Ngọc Linh Tu Mơ Rông",
    slug: "kham-pha-rung-duoc-lieu-sam-ngoc-linh-tu-mo-rong",
    kind: "ECO_TOUR",
    ecosystem: "MEDICINAL_FOREST",
    durationDays: 3,
    isFeaturedRoute: true,
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Tuyến trekking dưới tán rừng nguyên sinh Kon Tum, khám phá vùng trồng sâm tự nhiên ở độ cao hơn 1.800m và tìm hiểu văn hóa đồng bào Xơ Đăng.",
    address: "Huyện Tu Mơ Rông, Tỉnh Kon Tum",
    province: {
      id: "p-kt",
      name: "Kon Tum",
      slug: "kon-tum",
      code: "KT",
      region: "TRUNG",
    },
    itinerary: [
      {
        day: 1,
        title: "Khởi hành từ Măng Đen đến thung lũng Tu Mơ Rông",
        description:
          "Băng qua những cánh rừng thông cổ thụ, gặp gỡ đồng bào bản địa và nghỉ ngơi tại homestay cộng đồng Xơ Đăng.",
      },
      {
        day: 2,
        title: "Trekking đỉnh Ngọc Linh và thăm vườn bảo tồn sâm",
        description:
          "Tận mắt chiêm ngưỡng cây Sâm Ngọc Linh - Quốc bảo Việt Nam dưới tán rừng già, thưởng thức trà sâm lá kim quý giá.",
      },
      {
        day: 3,
        title: "Trải nghiệm không gian cồng chiêng và ẩm thực rừng",
        description:
          "Thưởng thức gà nướng cơm lam nướng ống tre, giao lưu vũ điệu xoang và kết thúc hành trình.",
      },
    ],
    isFeatured: true,
    _status: "published",
    createdAt: "2026-11-08T08:00:00Z",
  },
  {
    id: "dest-9",
    title: "Trải nghiệm nông nghiệp đảo ngọc Phú Quốc: Vườn tiêu & Nhà thùng nước mắm",
    slug: "trai-nghiem-nong-nghiep-dao-ngoc-phu-quoc",
    kind: "ECO_TOUR",
    ecosystem: "COASTAL_ISLAND",
    durationDays: 2,
    isFeaturedRoute: false,
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Khám phá các trang trại nông sản hữu cơ hải đảo, vườn hồ tiêu trĩu quả và truyền thống ủ chượp nước mắm cá cơm 100 năm tuổi.",
    address: "TP. Phú Quốc, Tỉnh Kiên Giang",
    province: {
      id: "p-kg",
      name: "Kiên Giang",
      slug: "kien-giang",
      code: "KG",
      region: "NAM",
    },
    itinerary: [
      {
        day: 1,
        title: "Tham quan vườn tiêu Suối Đá và trang trại sim rừng",
        description:
          "Tìm hiểu kỹ thuật trồng tiêu đảo trứ danh, thưởng thức rượu sim và mật sim OCOP 4 sao.",
      },
      {
        day: 2,
        title: "Khám phá nhà thùng nước mắm truyền thống và làng chài cổ",
        description:
          "Tận mắt chứng kiến thùng gỗ bời lời khổng lồ và quy trình chiết rút nước mắm nhĩ cốt đạm cao.",
      },
    ],
    isFeatured: false,
    _status: "published",
    createdAt: "2026-11-09T08:00:00Z",
  },
  {
    id: "dest-10",
    title: "Không gian văn hóa Cồng chiêng Tây Nguyên gắn liền chuỗi Cà phê OCOP",
    slug: "khong-gian-van-hoa-cong-chieng-tay-nguyen-dak-lak",
    kind: "DESTINATION",
    coverImage: "/anh_phong_canh.webp",
    excerpt:
      "Điểm đến trải nghiệm văn hóa cồng chiêng di sản thế giới kết hợp tham quan nông trường cà phê Robusta đặc sản Đắk Lắk.",
    address: "TP. Buôn Ma Thuột, Tỉnh Đắk Lắk",
    province: {
      id: "p-dl",
      name: "Đắk Lắk",
      slug: "dak-lak",
      code: "DL",
      region: "TRUNG",
    },
    isFeatured: true,
    _status: "published",
    createdAt: "2026-11-10T08:00:00Z",
  },
];

export async function listDestinations(
  params: ListDestinationsParams = {},
): Promise<PaginatedDestinationsResult> {
  const {
    kind,
    ecosystem,
    craftGroup,
    province,
    q,
    page = 1,
    limit = 12,
    isFeatured,
  } = params;

  const keyParts = [
    "destinations",
    kind || "all",
    ecosystem || "all",
    craftGroup || "all",
    province || "all",
    q ? encodeURIComponent(q) : "all",
    String(isFeatured ?? "all"),
    String(page),
    String(limit),
  ];

  return getCached(
    keyParts,
    ["destinations"],
    async () => {
      const payload = await getPayloadClient();
      if (!payload) {
        let filtered = [...fallbackDestinations];
        if (kind) filtered = filtered.filter((d) => d.kind === kind);
        if (ecosystem) filtered = filtered.filter((d) => d.ecosystem === ecosystem);
        if (craftGroup) filtered = filtered.filter((d) => d.craftGroup === craftGroup);
        if (isFeatured !== undefined)
          filtered = filtered.filter((d) => Boolean(d.isFeatured) === isFeatured);
        if (province) {
          filtered = filtered.filter((d) => {
            if (typeof d.province === "object" && d.province !== null) {
              const p = d.province as Province;
              return p.slug === province || p.id === province || p.code === province;
            }
            return d.province === province;
          });
        }
        if (q) {
          const lowerQ = q.toLowerCase();
          filtered = filtered.filter(
            (d) =>
              d.title.toLowerCase().includes(lowerQ) ||
              (d.excerpt && d.excerpt.toLowerCase().includes(lowerQ)),
          );
        }

        const totalDocs = filtered.length;
        const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
        const offset = (page - 1) * limit;
        const docs = filtered.slice(offset, offset + limit);

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

        if (kind) where.kind = { equals: kind };
        if (ecosystem) where.ecosystem = { equals: ecosystem };
        if (craftGroup) where.craftGroup = { equals: craftGroup };
        if (isFeatured !== undefined) where.isFeatured = { equals: isFeatured };
        if (province) where["province.slug"] = { equals: province };
        if (q) {
          where.or = [
            { title: { contains: q } },
            { excerpt: { contains: q } },
          ];
        }

        const res = await payload.find<Destination>({
          collection: "destinations",
          where,
          locale: "vi",
          overrideAccess: false,
          limit,
          sort: "-publishedAt",
          select: {
            title: true,
            slug: true,
            kind: true,
            craftGroup: true,
            ecosystem: true,
            durationDays: true,
            ageYears: true,
            artisanCount: true,
            isNationalHeritage: true,
            isFeaturedRoute: true,
            coverImage: true,
            excerpt: true,
            address: true,
            province: true,
            isFeatured: true,
            publishedAt: true,
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
          docs: fallbackDestinations.slice(0, limit),
          totalDocs: fallbackDestinations.length,
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

export async function getDestination(
  slug: string,
  draft = false,
): Promise<Destination | null> {
  const fetcher = async () => {
    const payload = await getPayloadClient();
    if (!payload) {
      return fallbackDestinations.find((d) => d.slug === slug) || null;
    }

    try {
      const where: Record<string, unknown> = {
        slug: { equals: slug },
      };
      if (!draft) {
        where._status = { equals: "published" };
      }

      const res = await payload.find<Destination>({
        collection: "destinations",
        where,
        locale: "vi",
        overrideAccess: false,
        limit: 1,
      });

      return res.docs?.[0] || null;
    } catch {
      return fallbackDestinations.find((d) => d.slug === slug) || null;
    }
  };

  if (draft) {
    return fetcher();
  }

  return getCached(
    ["destination", slug],
    ["destinations", `destination:${slug}`],
    fetcher,
    3600,
  );
}
