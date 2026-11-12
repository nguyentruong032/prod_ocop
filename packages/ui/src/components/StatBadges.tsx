'use client';

import { clsx } from '../lib/utils';

interface StatBadgeProps {
  label: string;
  value: string | number;
  icon?: string;
  iconColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

const iconColors = {
  primary: 'text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30',
  secondary: 'text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800',
  success: 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30',
  warning: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30',
  danger: 'text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/30',
  info: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30',
};

export function StatBadge({
  label,
  value,
  icon,
  iconColor = 'primary',
  trend,
  variant = 'default',
  className,
}: StatBadgeProps) {
  if (variant === 'compact') {
    return (
      <div className={clsx('flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-800 rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-700', className)}>
        {icon && (
          <span className={clsx('p-1.5 rounded-lg', iconColors[iconColor])}>
            <span className="material-symbols-outlined text-lg">{icon}</span>
          </span>
        )}
        <div className="flex flex-col">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">{label}</span>
          <span className="text-sm font-semibold text-neutral-900 dark:text-white">{value}</span>
        </div>
        {trend && (
          <span className={clsx('ml-auto text-xs font-medium flex items-center gap-0.5', trend.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400')}>
            <span className="material-symbols-outlined text-xs">{trend.positive ? 'trending_up' : 'trending_down'}</span>
            {trend.value > 0 ? '+' : ''}{trend.value}% {trend.label}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={clsx('p-5 bg-white dark:bg-neutral-800 rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-700', className)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              {icon && (
                <div className={clsx('p-3 rounded-xl', iconColors[iconColor])}>
                  <span className="material-symbols-outlined text-2xl">{icon}</span>
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{label}</p>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white mt-1">{value}</p>
              </div>
            </div>
            {trend && (
              <div className={clsx('mt-3 flex items-center gap-1.5', trend.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400')}>
                <span className="material-symbols-outlined text-sm">{trend.positive ? 'trending_up' : 'trending_down'}</span>
                <span className="text-sm font-medium">{trend.value > 0 ? '+' : ''}{trend.value}%</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{trend.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={clsx('p-4 bg-white dark:bg-neutral-800 rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-700', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && (
            <div className={clsx('p-2.5 rounded-lg', iconColors[iconColor])}>
              <span className="material-symbols-outlined text-xl">{icon}</span>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{label}</p>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white mt-0.5">{value}</p>
          </div>
        </div>
        {trend && (
          <div className={clsx('flex items-center gap-1 text-sm font-medium', trend.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400')}>
            <span className="material-symbols-outlined text-base">{trend.positive ? 'trending_up' : 'trending_down'}</span>
            <span>{trend.value > 0 ? '+' : ''}{trend.value}%</span>
            <span className="text-neutral-500 dark:text-neutral-400">{trend.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// SpatialMetricsBar - specialized for the map page
interface SpatialMetricsBarProps {
  metrics: Array<{
    label: string;
    value: string | number;
    icon: string;
    iconColor: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
    subLabel?: string;
    trend?: {
      value: number;
      positive: boolean;
    };
  }>;
  className?: string;
}

export function SpatialMetricsBar({ metrics, className }: SpatialMetricsBarProps) {
  return (
    <div className={clsx('grid grid-cols-2 md:grid-cols-4 gap-4', className)} role="region" aria-label="Chỉ số không gian">
      {metrics.map((metric, index) => (
        <StatBadge
          key={index}
          label={metric.label}
          value={metric.value}
          icon={metric.icon}
          iconColor={metric.iconColor}
          variant="default"
          trend={metric.trend ? { ...metric.trend, label: metric.subLabel || 'so với năm trước' } : undefined}
        />
      ))}
    </div>
  );
}

// KPICard - for dashboard-style metrics
interface KPICardProps {
  title: string;
  value: string | number;
  icon: string;
  iconColor: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  description?: string;
  trend?: {
    value: number;
    label: string;
    positive: boolean;
  };
  progress?: {
    current: number;
    target: number;
  };
  className?: string;
}

export function KPICard({
  title,
  value,
  icon,
  iconColor,
  description,
  trend,
  progress,
  className,
}: KPICardProps) {
  const progressPercent = progress ? Math.min(100, Math.round((progress.current / progress.target) * 100)) : null;

  return (
    <div className={clsx('p-6 bg-white dark:bg-neutral-800 rounded-2xl ring-1 ring-neutral-200 dark:ring-neutral-700', className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <div className={clsx('p-3 rounded-xl', iconColors[iconColor])}>
              <span className="material-symbols-outlined text-2xl">{icon}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{title}</p>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white mt-1">{value}</p>
            </div>
          </div>

          {description && (
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
          )}

          {trend && (
            <div className={clsx('mt-3 flex items-center gap-1.5', trend.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400')}>
              <span className="material-symbols-outlined text-sm">{trend.positive ? 'trending_up' : 'trending_down'}</span>
              <span className="text-sm font-medium">{trend.value > 0 ? '+' : ''}{trend.value}%</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">{trend.label}</span>
            </div>
          )}

          {progress && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-neutral-500 dark:text-neutral-400">Tiến độ</span>
                <span className="font-medium text-neutral-900 dark:text-white">{progressPercent}%</span>
              </div>
              <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className={clsx('h-full rounded-full transition-all duration-500', iconColors[iconColor].replace('bg-', 'bg-').replace('text-', ''))}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {progress.current.toLocaleString()} / {progress.target.toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}