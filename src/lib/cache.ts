import { unstable_cache } from "next/cache";

export function getCached<T>(
  keyParts: string[],
  tags: string[],
  fn: () => Promise<T>,
  revalidate = 3600,
): Promise<T> {
  return unstable_cache(fn, keyParts, { tags, revalidate })();
}
