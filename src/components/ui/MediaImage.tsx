import Image, { type ImageProps } from 'next/image';
import ocopMediaLoader from '@/lib/media-loader';
import type { Media } from '@/payload-types';

export interface MediaImageProps extends Omit<ImageProps, 'src' | 'alt' | 'loader'> {
  media?: Media | string | null;
  src?: string | null;
  alt?: string | null;
  caption?: string | null;
  credit?: string | null;
  showCaption?: boolean;
  className?: string;
  imageClassName?: string;
}

export function MediaImage({
  media,
  src,
  alt,
  caption,
  credit,
  showCaption = false,
  className = '',
  imageClassName = '',
  width,
  height,
  fill,
  sizes,
  priority,
  ...rest
}: MediaImageProps) {
  let resolvedSrc = '/logo.webp';
  let resolvedAlt = '';
  let resolvedCaption = caption;
  let resolvedCredit = credit;

  if (typeof media === 'string') {
    resolvedSrc = media;
    resolvedAlt = alt || '';
  } else if (media && typeof media === 'object') {
    resolvedSrc = media.filename || media.url || '/logo.webp';
    resolvedAlt = alt !== undefined ? (alt || '') : (media.alt || '');
    resolvedCaption = caption || media.caption || null;
    resolvedCredit = credit || media.credit || null;
  } else if (src) {
    resolvedSrc = src;
    resolvedAlt = alt || '';
  }

  // Prevent Google lh3 external links
  if (resolvedSrc.includes('lh3.googleusercontent.com')) {
    resolvedSrc = '/anh_phong_canh.webp';
  }

  const imageElement = fill ? (
    <Image
      src={resolvedSrc}
      alt={resolvedAlt}
      loader={ocopMediaLoader}
      fill
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      priority={priority}
      className={`object-cover ${imageClassName}`}
      {...rest}
    />
  ) : (
    <Image
      src={resolvedSrc}
      alt={resolvedAlt}
      loader={ocopMediaLoader}
      width={width || 600}
      height={height || 400}
      sizes={sizes}
      priority={priority}
      className={`h-auto w-full object-cover ${imageClassName}`}
      {...rest}
    />
  );

  if (showCaption && (resolvedCaption || resolvedCredit)) {
    return (
      <figure className={`my-4 flex flex-col ${className}`}>
        <div className="relative overflow-hidden rounded-lg">{imageElement}</div>
        <figcaption className="mt-2 text-center text-xs text-on-surface-variant font-body-sm">
          {resolvedCaption && <span>{resolvedCaption}</span>}
          {resolvedCredit && (
            <span className="italic text-outline"> (Nguồn: {resolvedCredit})</span>
          )}
        </figcaption>
      </figure>
    );
  }

  if (fill) {
    return <div className={`relative overflow-hidden ${className}`}>{imageElement}</div>;
  }

  return imageElement;
}

export default MediaImage;
