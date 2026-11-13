import type { ImageLoaderProps } from "next/image";

export function ocopMediaLoader({ src, width }: ImageLoaderProps): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/")) return src;
  const base = process.env.NEXT_PUBLIC_MEDIA_URL || "";
  const preset =
    width <= 400
      ? "thumb"
      : width <= 640
        ? "w640"
        : width <= 1080
          ? "w1080"
          : "w1920";
  return `${base}/media/img/${preset}/${src.replace(/^\/+/, "")}@webp`;
}

export default ocopMediaLoader;
