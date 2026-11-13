import { getCached } from "@/lib/cache";
import { getPayloadClient } from "@/lib/payload";
import type { SiteSetting, Home, LandingPage, Province } from "@/payload-types";

const defaultSiteSettings: SiteSetting = {
  siteName: "Cổng thông tin điện tử OCOP Việt Nam",
  tagline:
    "Chuyên trang thông tin điện tử OCOP Việt Nam - Nơi tập trung, chia sẻ và lan tỏa câu chuyện, sản phẩm, và giá trị OCOP đến cộng đồng.",
  hotline: "024.3869.2173",
  contactEmail: "ocopvietnam2021@gmail.com",
  address: "Số 46 Tăng Bạt Hổ, phường Phạm Đình Hổ, quận Hai Bà Trưng, Hà Nội",
  socialLinks: [
    { platform: "Facebook", url: "https://www.facebook.com/ocopvietnam" },
    { platform: "YouTube", url: "https://www.youtube.com/@ocopvietnam" },
    { platform: "TikTok", url: "https://www.tiktok.com/@ocopvietnam" },
    { platform: "Zalo", url: "https://zalo.me/ocopvietnam" },
  ],
  editorialContact: {
    name: "Ban Biên Tập OCOP Việt Nam",
    email: "ocopvietnam2021@gmail.com",
    phone: "024.3869.2173",
    hours: "Thứ 2 - Thứ 6: 8:00 - 17:00 (GMT+7)",
  },
  footerNote: "© 2026 OCOP Việt Nam. Mọi quyền được bảo lưu.",
};

const defaultHome: Home = {
  layout: [
    {
      blockType: "hero",
      eyebrow: "CỔNG THÔNG TIN ĐIỆN TỬ OCOP VIỆT NAM",
      heading: "Tôn vinh tinh hoa làng nghề, nâng tầm nông sản Việt",
      subheading:
        "Hành trình kết nối hơn 10.000 sản phẩm OCOP đạt chuẩn từ 63 tỉnh thành, vươn tầm thị trường quốc tế.",
      image: {
        id: "default-hero-img",
        filename: "anh_phong_canh.webp",
        alt: "Phong cảnh đồng quê Việt Nam",
      },
      primaryCta: {
        label: "Khám phá sản phẩm OCOP",
        href: "/vi/san-pham-ocop",
      },
      secondaryCta: { label: "Hồ sơ chủ thể OCOP", href: "/vi/chu-the-ocop" },
    },
    {
      blockType: "quickLinks",
      items: [
        {
          id: "ql-1",
          icon: "inventory_2",
          label: "Sản phẩm 5 sao",
          description: "Sản phẩm cấp quốc gia",
          href: "/vi/san-pham-ocop/san-pham-theo-sao?stars=5",
        },
        {
          id: "ql-2",
          icon: "storefront",
          label: "Chủ thể tiêu biểu",
          description: "Hợp tác xã & Doanh nghiệp",
          href: "/vi/chu-the-ocop",
        },
        {
          id: "ql-3",
          icon: "travel_explore",
          label: "Điểm đến du lịch",
          description: "Làng nghề & Du lịch trải nghiệm",
          href: "/vi/diem-den-du-lich",
        },
        {
          id: "ql-4",
          icon: "policy",
          label: "Chính sách & Cơ chế",
          description: "Văn bản quy phạm mới nhất",
          href: "/vi/tin-tuc-su-kien/chinh-sach-va-co-che",
        },
      ],
    },
    {
      blockType: "kpiStats",
      items: [
        {
          id: "kpi-1",
          value: "14.000+",
          label: "Sản phẩm OCOP 3 sao trở lên",
          note: "trên toàn quốc",
        },
        {
          id: "kpi-2",
          value: "7.800+",
          label: "Chủ thể OCOP",
          note: "HTX, doanh nghiệp, cơ sở",
        },
        {
          id: "kpi-3",
          value: "63",
          label: "Tỉnh, thành phố",
          note: "tham gia chương trình",
        },
        {
          id: "kpi-4",
          value: "100%",
          label: "Minh bạch nguồn gốc",
          note: "được thẩm định chặt chẽ",
        },
      ],
    },
    {
      blockType: "featuredNews",
      heading: "Tin tức & Sự kiện tiêu điểm",
      mode: "auto",
      limit: 4,
    },
    {
      blockType: "featuredProducts",
      heading: "Sản phẩm OCOP tiêu biểu",
      mode: "auto",
      limit: 4,
    },
    {
      blockType: "featuredStories",
      heading: "Câu chuyện OCOP nổi bật",
      mode: "auto",
      limit: 3,
    },
    {
      blockType: "featuredDestinations",
      heading: "Điểm đến & Trải nghiệm sinh thái OCOP",
      mode: "auto",
      limit: 3,
    },
    {
      blockType: "integrationPillars",
      items: [
        {
          id: "ip-1",
          title: "Xuất khẩu & Thị trường quốc tế",
          description:
            "Mở rộng thị phần sang EU, Mỹ, Nhật Bản và các thị trường trọng điểm.",
          href: "/vi/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te",
        },
        {
          id: "ip-2",
          title: "Tiêu chuẩn & Chứng nhận quốc tế",
          description:
            "Định vị thương hiệu thông qua các chứng chỉ HACCP, ISO, GlobalGAP, Organic.",
          href: "/vi/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te",
        },
        {
          id: "ip-3",
          title: "Chuyển đổi số OCOP",
          description:
            "Thương mại điện tử, truy xuất nguồn gốc Blockchain và xúc tiến số.",
          href: "/vi/ocop-hoi-nhap/chuyen-doi-so-ocop",
        },
      ],
    },
    {
      blockType: "ctaBanner",
      heading: "Bạn là Chủ thể sản xuất OCOP?",
      text: "Đăng ký gửi hồ sơ, giới thiệu sản phẩm và tiếp cận các chương trình xúc tiến thương mại quốc gia ngay hôm nay.",
      cta: { label: "Gửi bài & Hồ sơ OCOP", href: "/vi/gui-bai-ho-so-ocop" },
    },
    {
      blockType: "richText",
      content: null,
    },
  ],
};

export async function getSiteSettings(): Promise<SiteSetting> {
  return getCached(
    ["site-settings"],
    ["site-settings"],
    async () => {
      const payload = await getPayloadClient();
      if (!payload) return defaultSiteSettings;

      try {
        const settings = await payload.findGlobal({
          slug: "site-settings",
          locale: "vi",
          overrideAccess: false,
        });
        return { ...defaultSiteSettings, ...(settings as SiteSetting) };
      } catch {
        return defaultSiteSettings;
      }
    },
    3600,
  );
}

export async function getHome(): Promise<Home> {
  return getCached(
    ["home"],
    ["home", "articles", "products", "destinations"],
    async () => {
      const payload = await getPayloadClient();
      if (!payload) return defaultHome;

      try {
        const homeData = (await payload.findGlobal({
          slug: "home",
          locale: "vi",
          overrideAccess: false,
          depth: 2,
        })) as Home | null;
        if (homeData && homeData.layout && homeData.layout.length > 0) {
          return homeData;
        }
        return defaultHome;
      } catch {
        return defaultHome;
      }
    },
    3600,
  );
}

export async function getLandingPage(key: string): Promise<LandingPage | null> {
  return getCached(
    ["landing-page", key],
    [`landing:${key}`],
    async () => {
      const payload = await getPayloadClient();
      if (!payload) return null;

      try {
        const res = await payload.find({
          collection: "landing-pages",
          where: { key: { equals: key } },
          locale: "vi",
          overrideAccess: false,
          limit: 1,
        });
        return (res.docs[0] as LandingPage) || null;
      } catch {
        return null;
      }
    },
    3600,
  );
}

export async function listProvinces(): Promise<Province[]> {
  return getCached(
    ["provinces"],
    ["provinces"],
    async () => {
      const payload = await getPayloadClient();
      if (!payload) return [];

      try {
        const res = await payload.find({
          collection: "provinces",
          locale: "vi",
          overrideAccess: false,
          sort: "sortOrder",
          limit: 100,
        });
        return (res.docs as Province[]) || [];
      } catch {
        return [];
      }
    },
    86400,
  );
}
