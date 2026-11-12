'use client';

import Image from 'next/image';
import { clsx } from '../lib/utils';

interface LocalityCardProps {
  name: string;
  province: string;
  region: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  stats: {
    population?: string;
    area?: string;
    ocopProducts?: number;
    craftVillages?: number;
    ecoTours?: number;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
  onClick?: () => void;
  className?: string;
}

const regionColors = {
  'Bắc Bộ': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'Trung Bộ': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
  'Nam Bộ': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
  'Tây Nguyên': 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400',
  'Đông Nam Bộ': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  'Mekong Delta': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400',
} as const;

export function LocalityCard({
  name,
  province,
  region,
  description,
  image,
  stats,
  coordinates,
  onClick,
  className,
}: LocalityCardProps) {
  const RegionColor = regionColors[region as keyof typeof regionColors] || 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300';

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
        
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={clsx('px-2.5 py-1 text-xs font-semibold rounded-full', RegionColor)}>
            {region}
          </span>
          {coordinates && (
            <button
              className="p-2 text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors"
              aria-label={`Xem ${name} trên bản đồ`}
            >
              <span className="material-symbols-outlined text-sm">map_pin</span>
            </button>
          )}
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
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {description}
        </p>

        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
          {stats.population && (
            <div className="text-center">
              <p className="text-xl font-bold text-neutral-900 dark:text-white">{stats.population}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Dân số</p>
            </div>
          )}
          {stats.area && (
            <div className="text-center">
              <p className="text-xl font-bold text-neutral-900 dark:text-white">{stats.area}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Diện tích (km²)</p>
            </div>
          )}
          {stats.ocopProducts !== undefined && (
            <div className="text-center">
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">{stats.ocopProducts}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Sản phẩm OCOP</p>
            </div>
          )}
          {stats.craftVillages !== undefined && (
            <div className="text-center">
              <p className="text-xl font-bold text-amber-600 dark:text-amber-400">{stats.craftVillages}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Làng nghề</p>
            </div>
          )}
          {stats.ecoTours !== undefined && (
            <div className="text-center">
              <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{stats.ecoTours}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Tour sinh thái</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}