'use client';

import Image from 'next/image';
import { clsx } from '../lib/utils';

interface DestinationCardProps {
  name: string;
  province: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  categories: string[];
  ocopProducts: number;
  attractions: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  onClick?: () => void;
  className?: string;
}

export function DestinationCard({
  name,
  province,
  description,
  image,
  categories,
  ocopProducts,
  attractions,
  rating,
  reviewCount,
  featured,
  onClick,
  className,
}: DestinationCardProps) {
  return (
    <article
      className={clsx(
        'group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer',
        featured && 'ring-2 ring-primary-500/50 dark:ring-primary-400/50',
        className
      )}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-semibold text-white bg-primary-600 rounded-full">
              Nổi bật
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent">
          <div className="flex flex-wrap gap-1.5">
            {categories.slice(0, 4).map((category, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
              {name}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {province}
            </p>
          </div>
          {rating && (
            <div className="flex items-center gap-1 text-sm text-amber-500 shrink-0">
              <span className="material-symbols-outlined text-base">star</span>
              <span className="font-medium">{rating.toFixed(1)}</span>
              {reviewCount && <span className="text-neutral-500 dark:text-neutral-400">({reviewCount})</span>}
            </div>
          )}
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">local_mall</span>
              {ocopProducts} Sản phẩm OCOP
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">place</span>
              {attractions} Điểm du lịch
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}