import { getCached } from "@/lib/cache";
import { getPayloadClient } from "@/lib/payload";
import type { LegalDocument } from "@/payload-types";

export interface ListLegalDocsParams {
  level?: string;
  q?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedLegalDocsResult {
  docs: LegalDocument[];
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const fallbackLegalDocs: LegalDocument[] = [
  {
    id: "doc-fallback-1",
    title:
      "Cơ chế đặc thù tín dụng xanh cho hợp tác xã OCOP ứng dụng công nghệ số",
    slug: "co-che-dac-thu-tin-dung-xanh-cho-htx-ocop",
    docNumber: "NĐ 85/2026/NĐ-CP",
    signer: "Thủ tướng Chính phủ",
    issuingAuthority: "Chính phủ",
    level: "Nghị định",
    issuedDate: "2026-10-01",
    effectiveDate: "2026-10-15",
  },
  {
    id: "doc-fallback-2",
    title: "Quy trình thẩm định, cấp, thu hồi Chứng nhận sản phẩm OCOP 4-5 sao",
    slug: "quy-trinh-tham-dinh-cap-thu-hoi-chung-nhan-ocop-4-5-sao",
    docNumber: "TT 12/2026/TT-BNNPTNT",
    signer: "Bộ trưởng Bộ NN&PTNT",
    issuingAuthority: "Bộ Nông nghiệp và PTNT",
    level: "Thông tư",
    issuedDate: "2026-09-20",
    effectiveDate: "2026-11-01",
  },
  {
    id: "doc-fallback-3",
    title: "Phê duyệt Đề án Xúc tiến thương mại OCOP số giai đoạn 2026–2030",
    slug: "phe-duyet-de-an-xuc-tien-thuong-mai-ocop-so-2026-2030",
    docNumber: "QĐ 450/QĐ-BCT",
    signer: "Bộ trưởng Bộ Công Thương",
    issuingAuthority: "Bộ Công Thương",
    level: "Quyết định",
    issuedDate: "2026-10-05",
    effectiveDate: "2026-10-20",
  },
  {
    id: "doc-fallback-4",
    title:
      "Cơ chế hỗ trợ chuyển đổi bao bì thân thiện môi trường cho sản phẩm OCOP",
    slug: "co-che-ho-tro-chuyen-doi-bao-bi-than-thien-moi-truong",
    docNumber: "NĐ 72/2026/NĐ-CP",
    signer: "Chính phủ",
    issuingAuthority: "Chính phủ",
    level: "Nghị định",
    issuedDate: "2026-09-15",
    effectiveDate: "2026-10-05",
  },
  {
    id: "doc-fallback-5",
    title:
      "Quy định bảo hộ Chỉ dẫn địa lý và Nhãn hiệu tập thể sản phẩm bản địa",
    slug: "quy-dinh-bao-ho-chi-dan-dia-ly-va-nhan-hieu-tap-the",
    docNumber: "TT 08/2026/TT-BVHTTDL",
    signer: "Bộ trưởng Bộ VHTT&DL",
    issuingAuthority: "Bộ Văn hóa, Thể thao và Du lịch",
    level: "Thông tư",
    issuedDate: "2026-09-10",
    effectiveDate: "2026-10-12",
  },
];

export async function listLegalDocs(
  params: ListLegalDocsParams = {},
): Promise<PaginatedLegalDocsResult> {
  const { level, q, page = 1, limit = 12 } = params;

  const keyParts = [
    "legal-docs",
    level || "all",
    q || "all",
    String(page),
    String(limit),
  ];

  return getCached(
    keyParts,
    ["legal-docs"],
    async () => {
      const payload = await getPayloadClient();

      if (!payload) {
        let filtered = [...fallbackLegalDocs];

        if (level) {
          filtered = filtered.filter((d) => d.level === level);
        }

        if (q) {
          const query = q.toLowerCase().trim();
          filtered = filtered.filter(
            (d) =>
              d.docNumber.toLowerCase().includes(query) ||
              d.title.toLowerCase().includes(query) ||
              (d.issuingAuthority &&
                d.issuingAuthority.toLowerCase().includes(query)),
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
        const where: Record<string, unknown> = {};

        if (level) {
          where.level = { equals: level };
        }

        if (q) {
          where.or = [
            { docNumber: { contains: q } },
            { title: { contains: q } },
          ];
        }

        const res = await payload.find<LegalDocument>({
          collection: "legal-documents",
          where,
          locale: "vi",
          overrideAccess: false,
          sort: "-issuedDate",
          limit,
          select: {
            title: true,
            slug: true,
            docNumber: true,
            signer: true,
            issuingAuthority: true,
            level: true,
            issuedDate: true,
            effectiveDate: true,
            pdfFile: true,
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
          docs: fallbackLegalDocs.slice(0, limit),
          totalDocs: fallbackLegalDocs.length,
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

export async function getLegalDoc(slug: string): Promise<LegalDocument | null> {
  return getCached(
    ["legal-doc", slug],
    ["legal-docs"],
    async () => {
      const payload = await getPayloadClient();
      if (!payload) {
        return (
          fallbackLegalDocs.find(
            (d) => d.slug === slug || d.docNumber === slug,
          ) || null
        );
      }

      try {
        const res = await payload.find<LegalDocument>({
          collection: "legal-documents",
          where: {
            or: [{ slug: { equals: slug } }, { docNumber: { equals: slug } }],
          },
          locale: "vi",
          overrideAccess: false,
          limit: 1,
        });

        return res.docs?.[0] || null;
      } catch {
        return (
          fallbackLegalDocs.find(
            (d) => d.slug === slug || d.docNumber === slug,
          ) || null
        );
      }
    },
    3600,
  );
}
