'use client';

import Image from 'next/image';
import { clsx } from '../lib/utils';

interface EcoTourCardProps {
  title: string;
  region: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  highlights: string[];
  duration: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  price?: string;
  rating?: number;
  reviewCount?: number;
  onClick?: () => void;
  className?: string;
}

const difficultyColors = {
  easy: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
  moderate: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
  challenging: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400',
};

const difficultyLabels = {
  easy: 'Dễ dàng',
  moderate: 'Trung bình',
  challenging: 'Thử thách',
};

export function EcoTourCard({
  title,
  region,
  description,
  image,
  highlights,
  duration,
  difficulty,
  price,
  rating,
  reviewCount,
  onClick,
  className,
}: EcoTourCardProps) {
  return (
    <article
      className={clsx(
        'group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer',
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
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/10 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {highlights.slice(0, 3).map((highlight, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
            {region}
          </span>
          <span className={clsx('px-2 py-0.5 text-xs font-semibold rounded-full', difficultyColors[difficulty])}>
            {difficultyLabels[difficulty]}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">schedule</span>
            {duration}
          </span>
          {rating && (
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base text-amber-500">star</span>
              {rating.toFixed(1)}
              {reviewCount && ` (${reviewCount})`}
            </span>
          )}
        </div>

        {price && (
          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              {price}
            </span>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">/ người</span>
          </div>
        )}
      </div>
    </article>
  );
}