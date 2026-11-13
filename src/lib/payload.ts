export interface PayloadLocalClient {
  findGlobal: <T = unknown>(args: {
    slug: string;
    locale?: string;
    overrideAccess?: boolean;
    depth?: number;
  }) => Promise<T>;
  find: <T = unknown>(args: {
    collection: string;
    where?: Record<string, unknown>;
    locale?: string;
    overrideAccess?: boolean;
    sort?: string;
    limit?: number;
    select?: Record<string, boolean>;
  }) => Promise<{ docs: T[]; totalDocs?: number }>;
  create?: <T = unknown>(args: {
    collection: string;
    data: Record<string, unknown>;
    overrideAccess?: boolean;
  }) => Promise<T>;
}

let cachedPayload: PayloadLocalClient | null = null;

export async function getPayloadClient(): Promise<PayloadLocalClient | null> {
  if (cachedPayload) return cachedPayload;

  try {
    const importDynamic = new Function(
      "modulePath",
      "return import(modulePath)",
    );
    const { getPayload } = await importDynamic("payload");
    const configModule = await importDynamic("@/payload.config");
    const config = configModule.default || configModule;
    cachedPayload = (await getPayload({ config })) as PayloadLocalClient;
    return cachedPayload;
  } catch {
    // Payload or database is not configured/running in offline builds
    return null;
  }
}
