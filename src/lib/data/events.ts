import { getCached } from "@/lib/cache";
import { getPayloadClient } from "@/lib/payload";
import type { Event, Province } from "@/payload-types";

export interface ListEventsParams {
  when?: "upcoming" | "ongoing" | "ended" | "all";
  province?: string;
  page?: number;
  limit?: number;
  isFeatured?: boolean;
}

export interface PaginatedEventsResult {
  docs: Event[];
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const fallbackEvents: Event[] = [
  {
    id: "event-fallback-1",
    title: "Hội chợ Triển lãm Sản phẩm OCOP Quốc gia và Quốc tế 2026",
    slug: "hoi-cho-trien-lam-san-pham-ocop-quoc-gia-2026",
    _status: "published",
    startAt: "2026-11-25T08:00:00Z",
    endAt: "2026-11-29T18:00:00Z",
    location: "Trung tâm Triển lãm Quốc tế I.C.E, Hà Nội",
    excerpt:
      "Quy tụ hơn 500 gian hàng từ 63 tỉnh thành và các tổ chức đối tác thương mại quốc tế, thúc đẩy kết nối chuỗi cung ứng nông sản.",
    coverImage: "/anh_phong_canh.webp",
    isFeatured: true,
    province: {
      id: "p-hn",
      name: "Hà Nội",
      slug: "ha-noi",
      code: "HN",
      region: "BAC",
    },
    agenda: {
      schedule: [
        {
          time: "08:00 - 09:30, 25/11",
          activity:
            "Lễ khai mạc chính thức và tham quan các gian hàng tiêu biểu",
        },
        {
          time: "14:00 - 17:00, 26/11",
          activity: "Diễn đàn Kết nối Giao thương OCOP B2B Quốc tế",
        },
        {
          time: "09:00 - 16:30, 27/11",
          activity:
            "Hội thảo Ứng dụng AI và Blockchain trong Truy xuất nguồn gốc OCOP",
        },
        {
          time: "15:00 - 17:30, 29/11",
          activity: "Bế mạc, vinh danh các sản phẩm và chủ thể tiêu biểu",
        },
      ],
    },
  },
  {
    id: "event-fallback-2",
    title: "Diễn đàn Xúc tiến Thương mại Nông sản OCOP Đồng bằng Sông Cửu Long",
    slug: "dien-dan-xuc-tien-thuong-mai-ocop-dbscl",
    _status: "published",
    startAt: "2026-12-05T08:30:00Z",
    endAt: "2026-12-07T17:00:00Z",
    location: "Trung tâm Hội nghị TP. Cần Thơ",
    excerpt:
      "Tập trung tháo gỡ rào cản logistics xuất khẩu, giới thiệu các sản phẩm trái cây và thủy hải sản chế biến sâu đạt chuẩn 4-5 sao.",
    coverImage: "/anh_phong_canh.webp",
    isFeatured: true,
    province: {
      id: "p-ct",
      name: "Cần Thơ",
      slug: "can-tho",
      code: "CT",
      region: "NAM",
    },
    agenda: {
      schedule: [
        {
          time: "08:30 - 11:30, 05/12",
          activity:
            "Khai mạc diễn đàn và báo cáo toàn cảnh chuỗi giá trị ĐBSCL",
        },
        {
          time: "13:30 - 17:00, 06/12",
          activity:
            "Phiên kết nối giữa các tập đoàn bán lẻ quốc tế và HTX địa phương",
        },
      ],
    },
  },
  {
    id: "event-fallback-3",
    title: "Tuần lễ Văn hóa Ẩm thực và Giới thiệu Sản vật OCOP Tây Bắc",
    slug: "tuan-le-van-hoa-am-thuc-san-vat-ocop-tay-bac",
    _status: "published",
    startAt: "2026-10-15T09:00:00Z",
    endAt: "2026-10-20T21:00:00Z",
    location: "Quảng trường Tây Bắc, Sơn La",
    excerpt:
      "Không gian trải nghiệm ẩm thực bản địa kết hợp trình diễn nghề làm chè, dệt thổ cẩm và chế biến nông sản vùng cao.",
    coverImage: "/anh_phong_canh.webp",
    isFeatured: false,
    province: {
      id: "p-sl",
      name: "Sơn La",
      slug: "son-la",
      code: "SL",
      region: "BAC",
    },
  },
  {
    id: "event-fallback-4",
    title: "Hội nghị Kết nối Cung Cầu Nông sản An toàn và OCOP Miền Trung",
    slug: "hoi-nghi-ket-noi-cung-cau-nong-san-mien-trung",
    _status: "published",
    startAt: "2026-12-18T08:00:00Z",
    endAt: "2026-12-20T17:30:00Z",
    location: "Cung Thể thao Tiên Sơn, Đà Nẵng",
    excerpt:
      "Mở rộng thị trường tiêu thụ tại các hệ thống siêu thị và resort du lịch miền Trung cho sản phẩm thảo dược và thủ công mỹ nghệ.",
    coverImage: "/anh_phong_canh.webp",
    isFeatured: false,
    province: {
      id: "p-dn",
      name: "Đà Nẵng",
      slug: "da-nang",
      code: "DN",
      region: "TRUNG",
    },
  },
];

export async function listEvents(
  params: ListEventsParams = {},
): Promise<PaginatedEventsResult> {
  const { when = "all", province, page = 1, limit = 12, isFeatured } = params;

  const keyParts = [
    "events",
    when,
    province || "all",
    String(isFeatured ?? "all"),
    String(page),
    String(limit),
  ];

  return getCached(
    keyParts,
    ["events"],
    async () => {
      const payload = await getPayloadClient();
      const now = new Date().toISOString();

      if (!payload) {
        let filtered = [...fallbackEvents];

        if (when === "upcoming") {
          filtered = filtered.filter((e) => e.startAt > now);
        } else if (when === "ongoing") {
          filtered = filtered.filter(
            (e) => e.startAt <= now && (!e.endAt || e.endAt >= now),
          );
        } else if (when === "ended") {
          filtered = filtered.filter((e) =>
            e.endAt ? e.endAt < now : e.startAt < now,
          );
        }

        if (isFeatured !== undefined) {
          filtered = filtered.filter(
            (e) => Boolean(e.isFeatured) === isFeatured,
          );
        }

        if (province) {
          filtered = filtered.filter((e) => {
            if (!e.province || typeof e.province !== "object") return false;
            return (
              (e.province as Province).slug === province ||
              (e.province as Province).id === province
            );
          });
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

        if (when === "upcoming") {
          where.startAt = { greater_than: now };
        } else if (when === "ongoing") {
          where.startAt = { less_than_equal: now };
          where.endAt = { greater_than_equal: now };
        } else if (when === "ended") {
          where.endAt = { less_than: now };
        }

        if (isFeatured !== undefined) where.isFeatured = { equals: isFeatured };
        if (province) where["province.slug"] = { equals: province };

        const res = await payload.find<Event>({
          collection: "events",
          where,
          locale: "vi",
          overrideAccess: false,
          sort: when === "ended" ? "-startAt" : "startAt",
          limit,
          select: {
            title: true,
            slug: true,
            startAt: true,
            endAt: true,
            location: true,
            coverImage: true,
            excerpt: true,
            province: true,
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
          docs: fallbackEvents.slice(0, limit),
          totalDocs: fallbackEvents.length,
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

export async function getEvent(
  slug: string,
  draft = false,
): Promise<Event | null> {
  const fetcher = async () => {
    const payload = await getPayloadClient();
    if (!payload) {
      return fallbackEvents.find((e) => e.slug === slug) || null;
    }

    try {
      const where: Record<string, unknown> = {
        slug: { equals: slug },
      };
      if (!draft) {
        where._status = { equals: "published" };
      }

      const res = await payload.find<Event>({
        collection: "events",
        where,
        locale: "vi",
        overrideAccess: false,
        limit: 1,
      });

      return res.docs?.[0] || null;
    } catch {
      return fallbackEvents.find((e) => e.slug === slug) || null;
    }
  };

  if (draft) {
    return fetcher();
  }

  return getCached(["event", slug], ["events", `event:${slug}`], fetcher, 3600);
}
