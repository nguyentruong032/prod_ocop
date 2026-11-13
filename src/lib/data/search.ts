import { getCached } from "@/lib/cache";
import { getPayloadClient } from "@/lib/payload";
import { normalize } from "@/lib/normalize";
import { getDocPath } from "@/lib/paths";
import { listArticles } from "./articles";
import { listProducts } from "./products";
import { listProducers } from "./producers";
import { listEvents } from "./events";
import { listDestinations } from "./destinations";
import { listLegalDocs } from "./legal-docs";
import type { Province } from "@/payload-types";

export type SearchType =
  | "ALL"
  | "ARTICLE"
  | "PRODUCT"
  | "PRODUCER"
  | "EVENT"
  | "DESTINATION"
  | "LEGAL";

export interface SearchParams {
  q?: string;
  type?: SearchType | string;
  province?: string;
  page?: number;
  pageSize?: number;
}

export interface SearchItem {
  id: string;
  title: string;
  excerpt?: string;
  path: string;
  type: SearchType;
  typeLabel: string;
  coverImage?: string;
  provinceName?: string;
  publishedAt?: string;
}

export interface SearchResult {
  items: SearchItem[];
  totalItems: number;
  totalPages: number;
  page: number;
  pageSize: number;
  facets: Record<string, number>;
}

const typeLabels: Record<SearchType, string> = {
  ALL: "Tất cả",
  ARTICLE: "Bài viết & Tin tức",
  PRODUCT: "Sản phẩm OCOP",
  PRODUCER: "Chủ thể OCOP",
  EVENT: "Sự kiện",
  DESTINATION: "Điểm đến du lịch",
  LEGAL: "Văn bản & Chính sách",
};

export async function search(params: SearchParams = {}): Promise<SearchResult> {
  const {
    q = "",
    type = "ALL",
    province,
    page = 1,
    pageSize = 12,
  } = params;

  const trimmedQ = q.trim();
  const normalizedType = (type.toUpperCase() as SearchType) || "ALL";

  const keyParts = [
    "search",
    trimmedQ ? encodeURIComponent(trimmedQ) : "empty",
    normalizedType,
    province || "all",
    String(page),
    String(pageSize),
  ];

  return getCached(
    keyParts,
    ["search"],
    async () => {
      // If query is empty, return empty result
      if (!trimmedQ) {
        return {
          items: [],
          totalItems: 0,
          totalPages: 0,
          page,
          pageSize,
          facets: {
            ALL: 0,
            ARTICLE: 0,
            PRODUCT: 0,
            PRODUCER: 0,
            EVENT: 0,
            DESTINATION: 0,
            LEGAL: 0,
          },
        };
      }

      const payload = await getPayloadClient();
      if (payload) {
        try {
          const where: Record<string, unknown> = {};
          if (trimmedQ) {
            where.or = [
              { titleNorm: { contains: normalize(trimmedQ) } },
              { excerptNorm: { contains: normalize(trimmedQ) } },
            ];
          }
          if (normalizedType !== "ALL") {
            where.type = { equals: normalizedType };
          }
          if (province) {
            where["province.slug"] = { equals: province };
          }

          const res = await payload.find({
            collection: "search-index",
            where,
            locale: "vi",
            overrideAccess: false,
            limit: pageSize,
            sort: "-publishedAt",
          });

          const docsList = (res.docs || []) as Array<Record<string, unknown>>;
          const items: SearchItem[] = docsList.map((doc) => {
            const docType = (doc.type as SearchType) || "ARTICLE";
            return {
              id: String(doc.id || ""),
              title: String(doc.title || ""),
              excerpt: String(doc.excerpt || doc.excerptNorm || ""),
              path: String(doc.path || "/vi"),
              type: docType,
              typeLabel: typeLabels[docType] || "Nội dung",
              coverImage: typeof doc.coverImage === "string" ? doc.coverImage : undefined,
              publishedAt: typeof doc.publishedAt === "string" ? doc.publishedAt : undefined,
            };
          });

          const totalItems = res.totalDocs || items.length;
          const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

          return {
            items,
            totalItems,
            totalPages,
            page,
            pageSize,
            facets: {
              ALL: totalItems,
              ARTICLE: totalItems,
              PRODUCT: 0,
              PRODUCER: 0,
              EVENT: 0,
              DESTINATION: 0,
              LEGAL: 0,
            },
          };
        } catch {
          // Fallback to local aggregation
        }
      }

      // Local aggregation across all collections
      const [articlesRes, productsRes, producersRes, eventsRes, destinationsRes, legalDocsRes] =
        await Promise.all([
          listArticles({ limit: 50 }),
          listProducts({ limit: 50 }),
          listProducers({ limit: 50 }),
          listEvents({ limit: 50 }),
          listDestinations({ limit: 50 }),
          listLegalDocs({ limit: 50 }),
        ]);

      const allItems: SearchItem[] = [];

      // Articles
      for (const a of articlesRes.docs) {
        allItems.push({
          id: a.id,
          title: a.title,
          excerpt: a.excerpt || "",
          path: getDocPath("articles", a),
          type: "ARTICLE",
          typeLabel: typeLabels.ARTICLE,
          coverImage: typeof a.coverImage === "string" ? a.coverImage : undefined,
          provinceName:
            typeof a.province === "object" && a.province !== null
              ? (a.province as Province).name
              : undefined,
          publishedAt: a.publishedAt || undefined,
        });
      }

      // Products
      for (const p of productsRes.docs) {
        allItems.push({
          id: p.id,
          title: p.title,
          excerpt: p.excerpt || "",
          path: getDocPath("products", p),
          type: "PRODUCT",
          typeLabel: typeLabels.PRODUCT,
          coverImage: typeof p.coverImage === "string" ? p.coverImage : undefined,
          provinceName:
            typeof p.province === "object" && p.province !== null
              ? (p.province as Province).name
              : undefined,
        });
      }

      // Producers
      for (const prod of producersRes.docs) {
        allItems.push({
          id: prod.id,
          title: prod.name,
          excerpt: prod.bio || "",
          path: getDocPath("producers", prod),
          type: "PRODUCER",
          typeLabel: typeLabels.PRODUCER,
          coverImage: typeof prod.coverImage === "string" ? prod.coverImage : undefined,
          provinceName:
            typeof prod.province === "object" && prod.province !== null
              ? (prod.province as Province).name
              : undefined,
        });
      }

      // Events
      for (const e of eventsRes.docs) {
        allItems.push({
          id: e.id,
          title: e.title,
          excerpt: e.excerpt || "",
          path: getDocPath("events", e),
          type: "EVENT",
          typeLabel: typeLabels.EVENT,
          coverImage: typeof e.coverImage === "string" ? e.coverImage : undefined,
          provinceName:
            typeof e.province === "object" && e.province !== null
              ? (e.province as Province).name
              : undefined,
          publishedAt: e.startAt,
        });
      }

      // Destinations
      for (const d of destinationsRes.docs) {
        allItems.push({
          id: d.id,
          title: d.title,
          excerpt: d.excerpt || "",
          path: getDocPath("destinations", d),
          type: "DESTINATION",
          typeLabel: typeLabels.DESTINATION,
          coverImage: typeof d.coverImage === "string" ? d.coverImage : undefined,
          provinceName:
            typeof d.province === "object" && d.province !== null
              ? (d.province as Province).name
              : undefined,
        });
      }

      // Legal Docs
      for (const l of legalDocsRes.docs) {
        allItems.push({
          id: l.id,
          title: `${l.docNumber} — ${l.title}`,
          excerpt: l.signer ? `Người ký: ${l.signer}` : "",
          path: getDocPath("legal-documents", l),
          type: "LEGAL",
          typeLabel: typeLabels.LEGAL,
          publishedAt: l.issuedDate || undefined,
        });
      }

      // Filter by query
      const queryNorm = normalize(trimmedQ);
      const queryWords = queryNorm.split(" ").filter(Boolean);

      const matched = allItems.filter((item) => {
        const titleNorm = normalize(item.title);
        const excerptNorm = normalize(item.excerpt || "");
        return queryWords.every(
          (w) => titleNorm.includes(w) || excerptNorm.includes(w),
        );
      });

      // Calculate facets
      const facets: Record<string, number> = {
        ALL: matched.length,
        ARTICLE: matched.filter((i) => i.type === "ARTICLE").length,
        PRODUCT: matched.filter((i) => i.type === "PRODUCT").length,
        PRODUCER: matched.filter((i) => i.type === "PRODUCER").length,
        EVENT: matched.filter((i) => i.type === "EVENT").length,
        DESTINATION: matched.filter((i) => i.type === "DESTINATION").length,
        LEGAL: matched.filter((i) => i.type === "LEGAL").length,
      };

      // Filter by type
      let typeFiltered = matched;
      if (normalizedType !== "ALL") {
        typeFiltered = matched.filter((item) => item.type === normalizedType);
      }

      const totalItems = typeFiltered.length;
      const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
      const offset = (page - 1) * pageSize;
      const items = typeFiltered.slice(offset, offset + pageSize);

      return {
        items,
        totalItems,
        totalPages,
        page,
        pageSize,
        facets,
      };
    },
    600,
  );
}
