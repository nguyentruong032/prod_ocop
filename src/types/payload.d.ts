declare module 'payload' {
  export interface GetPayloadOptions {
    config: unknown;
  }
  export function getPayload(options: GetPayloadOptions): Promise<unknown>;
}

declare module '@/payload.config' {
  const config: unknown;
  export default config;
}
