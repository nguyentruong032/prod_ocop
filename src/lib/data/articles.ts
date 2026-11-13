import { getCached } from "@/lib/cache";
import { getPayloadClient } from "@/lib/payload";
import type { Article, Province } from "@/payload-types";

export interface ListArticlesParams {
  kind?: "NEWS" | "STORY" | "INTEGRATION";
  topic?: string;
  pillar?: string;
  marketCode?: "EU" | "US" | "JAPAN" | "CHINA" | "HALAL" | string;
  province?: string;
  region?: "BAC" | "TRUNG" | "NAM";
  page?: number;
  limit?: number;
  isFeatured?: boolean;
}

export interface PaginatedArticlesResult {
  docs: Article[];
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const fallbackArticles: Article[] = [
  // --- NEWS ---
  {
    id: "news-fallback-1",
    title:
      "Phát triển thương hiệu OCOP gắn với tiêu chuẩn chất lượng và chuyển đổi số",
    slug: "phat-trien-thuong-hieu-ocop-gan-voi-tieu-chuan-chat-luong",
    kind: "NEWS",
    topic: "POLICY",
    _status: "published",
    publishedAt: "2026-11-10T08:00:00Z",
    excerpt:
      "Hội nghị toàn quốc đánh giá kết quả triển khai chương trình OCOP giai đoạn mới, thúc đẩy liên kết chuỗi giá trị và thương mại số.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 5,
    isFeatured: true,
    province: {
      id: "p-hn",
      name: "Hà Nội",
      slug: "ha-noi",
      code: "HN",
      region: "BAC",
    },
  },
  {
    id: "news-fallback-2",
    title: "Xúc tiến thương mại các sản phẩm OCOP 5 sao tại thị trường quốc tế",
    slug: "xuc-tien-thuong-mai-san-pham-ocop-5-sao-quoc-te",
    kind: "NEWS",
    topic: "TRADE",
    _status: "published",
    publishedAt: "2026-11-08T09:30:00Z",
    excerpt:
      "Đoàn doanh nghiệp OCOP Việt Nam tham gia hội chợ thương mại nông sản quốc tế, mở rộng hợp đồng xuất khẩu chính ngạch.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 4,
    isFeatured: true,
    province: {
      id: "p-hcm",
      name: "TP. Hồ Chí Minh",
      slug: "tp-ho-chi-minh",
      code: "SG",
      region: "NAM",
    },
  },
  {
    id: "news-fallback-3",
    title:
      "Hải Phòng: Mô hình OCOP Cảng đầu tiên kết nối logistics xuất khẩu trực tiếp",
    slug: "hai-phong-mo-hinh-ocop-cang-dau-tien",
    kind: "NEWS",
    topic: "LOCAL_OCOP",
    _status: "published",
    publishedAt: "2026-11-06T14:00:00Z",
    excerpt:
      "Khu tập trung OCOP đa năng tích hợp kho lạnh, kiểm định và bến bãi giúp các sản phẩm đạt chuẩn vươn ra biển lớn.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 6,
    province: {
      id: "p-hp",
      name: "Hải Phòng",
      slug: "hai-phong",
      code: "HP",
      region: "BAC",
    },
  },
  {
    id: "news-fallback-4",
    title: "Hỗ trợ các chủ thể OCOP hoàn thiện bao bì và chỉ dẫn địa lý",
    slug: "ho-tro-chu-the-ocop-hoan-thien-bao-bi-chi-dan-dia-ly",
    kind: "NEWS",
    topic: "LOCAL_OCOP",
    _status: "published",
    publishedAt: "2026-11-05T14:00:00Z",
    excerpt:
      "Các địa phương đẩy mạnh tập huấn nâng cao năng lực thiết kế nhận diện thương hiệu và bảo hộ sở hữu trí tuệ cho sản phẩm làng nghề.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 4,
    province: {
      id: "p-tn",
      name: "Thái Nguyên",
      slug: "thai-nguyen",
      code: "TN",
      region: "BAC",
    },
  },
  {
    id: "news-fallback-5",
    title:
      "Đắk Lắk: Cà phê Buôn Ma Thuột OCOP 5 sao và hành trình chinh phục thị trường EU",
    slug: "dak-lak-ca-phe-buon-ma-thuot-ocop-5-sao",
    kind: "NEWS",
    topic: "LOCAL_OCOP",
    _status: "published",
    publishedAt: "2026-11-03T11:00:00Z",
    excerpt:
      "Hội đồng thẩm định OCOP cấp Quốc gia phê duyệt hồ sơ đề cử cà phê Buôn Ma Thuột đạt 5 sao và nộp bảo hộ chỉ dẫn địa lý tại EU.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 5,
    province: {
      id: "p-dl",
      name: "Đắk Lắk",
      slug: "dak-lak",
      code: "DL",
      region: "TRUNG",
    },
  },
  {
    id: "news-fallback-6",
    title:
      "Bến Tre: Chuyển đổi số chuỗi giá trị dừa OCOP từ vườn đến tay người tiêu dùng",
    slug: "ben-tre-chuyen-doi-so-chuoi-gia-tri-dua-ocop",
    kind: "NEWS",
    topic: "LOCAL_OCOP",
    _status: "published",
    publishedAt: "2026-11-01T08:30:00Z",
    excerpt:
      "HTX Dừa Xanh triển khai hệ thống truy xuất nguồn gốc số minh bạch dữ liệu nhật ký canh tác và chế biến.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 5,
    province: {
      id: "p-bt",
      name: "Bến Tre",
      slug: "ben-tre",
      code: "BT",
      region: "NAM",
    },
  },

  // --- INTEGRATION ---
  {
    id: "integration-fallback-1",
    title:
      "Mở đường xuất khẩu nông sản OCOP 5 sao sang các thị trường FTA trọng điểm",
    slug: "mo-duong-xuat-khau-nong-san-ocop-5-sao-sang-thi-truong-fta",
    kind: "INTEGRATION",
    topic: "EXPORT_MARKET",
    marketCode: "EU",
    _status: "published",
    publishedAt: "2026-11-09T08:00:00Z",
    excerpt:
      "Tổng quan thực địa cơ hội tận dụng biểu thuế suất ưu đãi từ EVFTA và CPTPP cho các mặt hàng nông sản chế biến sâu đạt chuẩn 5 sao.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 6,
    isFeatured: true,
    province: {
      id: "p-hn",
      name: "Hà Nội",
      slug: "ha-noi",
      code: "HN",
      region: "BAC",
    },
  },
  {
    id: "integration-fallback-2",
    title:
      "Tiêu chuẩn GlobalGAP và HACCP: Vé thông hành cho thực phẩm OCOP vào EU",
    slug: "tieu-chuan-globalgap-va-haccp-ve-thong-hanh-thuc-pham-ocop",
    kind: "INTEGRATION",
    topic: "STANDARDS",
    _status: "published",
    publishedAt: "2026-11-07T10:00:00Z",
    excerpt:
      "Phân tích lộ trình chứng nhận an toàn thực phẩm quốc tế, kiểm soát dư lượng thuốc BVTV và các quy chuẩn thẩm định nguồn gốc nghiêm ngặt.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 7,
    isFeatured: false,
    province: {
      id: "p-hcm",
      name: "TP. Hồ Chí Minh",
      slug: "tp-ho-chi-minh",
      code: "SG",
      region: "NAM",
    },
  },
  {
    id: "integration-fallback-3",
    title:
      "Chuyển đổi số chuỗi cung ứng OCOP: Nền tảng số kết nối logistics toàn cầu",
    slug: "chuyen-doi-so-chuoi-cung-ung-ocop-logistics-toan-cau",
    kind: "INTEGRATION",
    topic: "DIGITAL",
    _status: "published",
    publishedAt: "2026-11-05T15:00:00Z",
    excerpt:
      "Ứng dụng định danh số sản phẩm, blockchain nhật ký điện tử và kho thông minh giúp chủ thể tối ưu hóa chi phí vận chuyển quốc tế.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 5,
    isFeatured: true,
    province: {
      id: "p-hp",
      name: "Hải Phòng",
      slug: "hai-phong",
      code: "HP",
      region: "BAC",
    },
  },
  {
    id: "integration-fallback-4",
    title:
      "Kinh nghiệm chinh phục thị trường Nhật Bản từ Hợp tác xã Chè Tân Cương",
    slug: "kinh-nghiem-chinh-phuc-thi-truong-nhat-ban-tu-htx-che-tan-cuong",
    kind: "INTEGRATION",
    topic: "EXPORT_MARKET",
    marketCode: "JAPAN",
    _status: "published",
    publishedAt: "2026-11-02T09:00:00Z",
    excerpt:
      "Bài học thực tiễn về kiểm định chất lượng, bao bì song ngữ và văn hóa đối tác kinh doanh tại thị trường Đông Bắc Á.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 8,
    province: {
      id: "p-tn",
      name: "Thái Nguyên",
      slug: "thai-nguyen",
      code: "TN",
      region: "BAC",
    },
  },
  {
    id: "integration-fallback-5",
    title:
      "Nông sản OCOP vượt rào cản kỹ thuật FDA để tiến sâu vào thị trường Hoa Kỳ",
    slug: "nong-san-ocop-vuot-rao-can-fda-thi-truong-hoa-ky",
    kind: "INTEGRATION",
    topic: "EXPORT_MARKET",
    marketCode: "US",
    _status: "published",
    publishedAt: "2026-10-29T08:30:00Z",
    excerpt:
      "Quy trình kiểm định khắt khe của Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA) và kinh nghiệm từ các doanh nghiệp xuất khẩu gia vị OCOP.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 7,
    province: {
      id: "p-kg",
      name: "Kiên Giang",
      slug: "kien-giang",
      code: "KG",
      region: "NAM",
    },
  },
  {
    id: "integration-fallback-6",
    title:
      "Xuất khẩu chính ngạch sang Trung Quốc: Đăng ký mã vùng trồng và cơ sở đóng gói",
    slug: "xuat-khau-chinh-ngach-trung-quoc-dang-ky-ma-vung-trong",
    kind: "INTEGRATION",
    topic: "EXPORT_MARKET",
    marketCode: "CHINA",
    _status: "published",
    publishedAt: "2026-10-25T14:00:00Z",
    excerpt:
      "Đáp ứng Lệnh 248 và 249 của Tổng cục Hải quan Trung Quốc để mở rộng xuất khẩu trái cây và nông sản chế biến OCOP.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 6,
    province: {
      id: "p-bt",
      name: "Bến Tre",
      slug: "ben-tre",
      code: "BT",
      region: "NAM",
    },
  },
  {
    id: "integration-fallback-7",
    title:
      "Tiềm năng xuất khẩu thực phẩm OCOP vào thị trường Halal 2 tỷ dân",
    slug: "tiem-nang-xuat-khau-thuc-pham-ocop-thi-truong-halal",
    kind: "INTEGRATION",
    topic: "EXPORT_MARKET",
    marketCode: "HALAL",
    _status: "published",
    publishedAt: "2026-10-20T10:00:00Z",
    excerpt:
      "Chứng nhận Halal toàn cầu mở ra cánh cửa xuất khẩu quy mô lớn sang các quốc gia Hồi giáo khu vực Trung Đông và Đông Nam Á.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 8,
    province: {
      id: "p-dl",
      name: "Đắk Lắk",
      slug: "dak-lak",
      code: "DL",
      region: "TRUNG",
    },
  },

  // --- STORY ---
  {
    id: "story-fallback-1",
    title:
      "Hồn đất hóa gốm: Trầm tích văn hóa 600 năm Chu Đậu vươn ra thế giới",
    slug: "hon-dat-hoa-gom-tram-tich-van-hoa-600-nam-chu-dau",
    kind: "STORY",
    topic: "CULTURE",
    _status: "published",
    publishedAt: "2026-11-10T14:00:00Z",
    excerpt:
      "Ký sự đi sâu vào kỹ thuật làm men tro trấu tự nhiên thuần khiết và hành trình phục dựng dòng gốm ngự dụng lừng danh thời Lê - Mạc.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 9,
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
    id: "story-fallback-2",
    title:
      "Huyền thoại Sâm Ngọc Linh: Báu vật đại ngàn dưới tán rừng nguyên sinh",
    slug: "huyen-thoai-sam-ngoc-linh-bau-vat-dai-ngan",
    kind: "STORY",
    topic: "REPORTAGE",
    _status: "published",
    publishedAt: "2026-11-08T16:30:00Z",
    excerpt:
      "Thước phim phóng sự tài liệu sống động về cuộc sống gìn giữ cây sâm quý của đồng bào Xơ Đăng trên đỉnh núi sương mù Ngọc Linh.",
    coverImage: "/anh_phong_canh.webp",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    readingMinutes: 11,
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
    id: "story-fallback-3",
    title:
      "Người giữ hồn thổ cẩm Mỹ Nghiệp: Dệt khát vọng từ khung cửi trăm năm",
    slug: "nguoi-giu-hon-tho-cam-my-nghiep-det-khat-vong",
    kind: "STORY",
    topic: "JOURNEY",
    _status: "published",
    publishedAt: "2026-11-04T11:00:00Z",
    excerpt:
      "Hành trình khởi nghiệp đầy trăn trở của những nghệ nhân Chăm đưa hoa văn cổ truyền vào các bộ sưu tập thời trang hiện đại đạt chuẩn OCOP.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 7,
    isFeatured: false,
    province: {
      id: "p-nt",
      name: "Ninh Thuận",
      slug: "ninh-thuan",
      code: "NT",
      region: "NAM",
    },
  },
  {
    id: "story-fallback-4",
    title:
      "Phim tài liệu: Bản hòa tấu cồng chiêng và giọt men rượu cần đại ngàn",
    slug: "phim-tai-lieu-ban-hoa-tau-cong-chieng-va-men-ruou-can",
    kind: "STORY",
    topic: "REPORTAGE",
    _status: "published",
    publishedAt: "2026-11-01T10:00:00Z",
    excerpt:
      "Thước phim điền dã 4K khám phá bí quyết ủ men lá rừng của đồng bào Tây Nguyên, kết nối di sản phi vật thể với du lịch nông thôn.",
    coverImage: "/anh_phong_canh.webp",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    readingMinutes: 12,
    isFeatured: false,
    province: {
      id: "p-gl",
      name: "Gia Lai",
      slug: "gia-lai",
      code: "GL",
      region: "TRUNG",
    },
  },
  {
    id: "story-fallback-5",
    title:
      "Hành trình thanh niên người Tày đưa mật ong hoa bạc hà chạm chuẩn 5 sao",
    slug: "hanh-trinh-thanh-nien-nguoi-tay-dua-mat-ong-bac-ha-5-sao",
    kind: "STORY",
    topic: "JOURNEY",
    _status: "published",
    publishedAt: "2026-10-28T09:00:00Z",
    excerpt:
      "Từ những tổ ong vách đá cheo leo ở Đồng Văn đến chuỗi liên kết nuôi ong khép kín mang lại sinh kế thoát nghèo cho hàng trăm hộ gia đình.",
    coverImage: "/anh_phong_canh.webp",
    readingMinutes: 8,
    isFeatured: false,
    province: {
      id: "p-hg",
      name: "Hà Giang",
      slug: "ha-giang",
      code: "HG",
      region: "BAC",
    },
  },
];

export async function listArticles(
  params: ListArticlesParams = {},
): Promise<PaginatedArticlesResult> {
  const {
    kind,
    topic,
    pillar,
    marketCode,
    province,
    region,
    page = 1,
    limit = 12,
    isFeatured,
  } = params;

  const effectiveTopic = topic || pillar;

  const keyParts = [
    "articles",
    kind || "all",
    effectiveTopic || "all",
    marketCode || "all",
    province || "all",
    region || "all",
    String(isFeatured ?? "all"),
    String(page),
    String(limit),
  ];

  return getCached(
    keyParts,
    ["articles"],
    async () => {
      const payload = await getPayloadClient();
      if (!payload) {
        let filtered = [...fallbackArticles];
        if (kind) filtered = filtered.filter((a) => a.kind === kind);
        if (effectiveTopic)
          filtered = filtered.filter((a) => a.topic === effectiveTopic);
        if (marketCode)
          filtered = filtered.filter((a) => a.marketCode === marketCode);
        if (isFeatured !== undefined)
          filtered = filtered.filter(
            (a) => Boolean(a.isFeatured) === isFeatured,
          );
        if (province) {
          filtered = filtered.filter((a) => {
            if (!a.province || typeof a.province !== "object") return false;
            return (
              (a.province as Province).slug === province ||
              (a.province as Province).id === province
            );
          });
        }
        if (region) {
          filtered = filtered.filter((a) => {
            if (!a.province || typeof a.province !== "object") return false;
            return (a.province as Province).region === region;
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

        if (kind) where.kind = { equals: kind };
        if (effectiveTopic) where.topic = { equals: effectiveTopic };
        if (marketCode) where.marketCode = { equals: marketCode };
        if (isFeatured !== undefined) where.isFeatured = { equals: isFeatured };
        if (province) where["province.slug"] = { equals: province };
        if (region) where["province.region"] = { equals: region };

        const res = await payload.find<Article>({
          collection: "articles",
          where,
          locale: "vi",
          overrideAccess: false,
          sort: "-publishedAt",
          limit,
          select: {
            title: true,
            slug: true,
            kind: true,
            topic: true,
            marketCode: true,
            publishedAt: true,
            coverImage: true,
            excerpt: true,
            province: true,
            isFeatured: true,
            readingMinutes: true,
            videoUrl: true,
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
          docs: fallbackArticles
            .filter((a) => !kind || a.kind === kind)
            .slice(0, limit),
          totalDocs: fallbackArticles.length,
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

export async function getArticle(
  slug: string,
  kind?: "NEWS" | "STORY" | "INTEGRATION",
  draft = false,
): Promise<Article | null> {
  const fetcher = async () => {
    const payload = await getPayloadClient();
    if (!payload) {
      const found = fallbackArticles.find((a) => a.slug === slug);
      if (found && (!kind || found.kind === kind)) return found;
      return null;
    }

    try {
      const where: Record<string, unknown> = {
        slug: { equals: slug },
      };
      if (!draft) {
        where._status = { equals: "published" };
      }
      if (kind) {
        where.kind = { equals: kind };
      }

      const res = await payload.find<Article>({
        collection: "articles",
        where,
        locale: "vi",
        overrideAccess: false,
        limit: 1,
      });

      return res.docs?.[0] || null;
    } catch {
      return fallbackArticles.find((a) => a.slug === slug) || null;
    }
  };

  if (draft) {
    return fetcher();
  }

  return getCached(
    ["article", slug, kind || "any"],
    ["articles", `article:${slug}`],
    fetcher,
    3600,
  );
}

export async function getRelatedArticles(
  articleId: string,
  kind: "NEWS" | "STORY" | "INTEGRATION",
  topic?: string | null,
  limit = 4,
): Promise<Article[]> {
  return getCached(
    ["related-articles", articleId, kind, topic || "none", String(limit)],
    ["articles"],
    async () => {
      const payload = await getPayloadClient();
      if (!payload) {
        return fallbackArticles
          .filter((a) => a.id !== articleId && a.kind === kind)
          .slice(0, limit);
      }

      try {
        const where: Record<string, unknown> = {
          _status: { equals: "published" },
          id: { not_equals: articleId },
          kind: { equals: kind },
        };
        if (topic) {
          where.topic = { equals: topic };
        }

        const res = await payload.find<Article>({
          collection: "articles",
          where,
          locale: "vi",
          overrideAccess: false,
          sort: "-publishedAt",
          limit,
          select: {
            title: true,
            slug: true,
            kind: true,
            topic: true,
            publishedAt: true,
            coverImage: true,
            excerpt: true,
            province: true,
            readingMinutes: true,
          },
        });

        return res.docs || [];
      } catch {
        return fallbackArticles
          .filter((a) => a.id !== articleId && a.kind === kind)
          .slice(0, limit);
      }
    },
    3600,
  );
}
