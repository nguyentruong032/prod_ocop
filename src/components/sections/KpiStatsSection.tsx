import React from 'react';
import type { KpiStatsBlock } from '@/payload-types';

export interface KpiStatsSectionProps {
  block: KpiStatsBlock;
}

export function KpiStatsSection({ block }: KpiStatsSectionProps) {
  const items = block.items || [];

  if (items.length === 0) return null;

  return (
    <section className="w-full bg-primary-container text-on-primary-fixed py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-on-primary-container/20">
          {items.map((stat, idx) => (
            <div
              key={stat.id || idx}
              className={`flex flex-col items-center text-center px-4 ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-accent mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="font-body-md text-sm md:text-base font-semibold text-on-primary">
                {stat.label}
              </span>
              {stat.note && (
                <span className="font-body-sm text-xs text-on-primary-container/80 mt-1">
                  {stat.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KpiStatsSection;
