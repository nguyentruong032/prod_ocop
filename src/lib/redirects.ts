import { getCached } from "@/lib/cache";
import { getPayloadClient } from "@/lib/payload";

export async function lookupRedirect(pathname: string): Promise<string | null> {
  return getCached(
    ["redirect", pathname],
    ["redirects"],
    async () => {
      const payload = await getPayloadClient();
      if (!payload) return null;

      try {
        // Check exact match, or without leading locale
        const normalized = pathname.trim();
        const altPath = normalized.startsWith("/vi")
          ? normalized.replace(/^\/vi/, "")
          : `/vi${normalized}`;

        const res = await payload.find<{
          from: string;
          to?: {
            type?: "reference" | "custom";
            url?: string;
          };
        }>({
          collection: "redirects",
          where: {
            or: [
              { from: { equals: normalized } },
              { from: { equals: altPath } },
            ],
          },
          limit: 1,
        });

        const doc = res.docs?.[0];
        if (doc?.to?.url) {
          return doc.to.url;
        }
        return null;
      } catch {
        return null;
      }
    },
    86400,
  );
}
