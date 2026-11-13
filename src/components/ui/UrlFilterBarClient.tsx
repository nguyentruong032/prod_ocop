"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterField {
  name: string;
  label: string;
  options: FilterOption[];
}

export interface UrlFilterBarClientProps {
  fields: FilterField[];
  className?: string;
}

export function UrlFilterBarClient({
  fields,
  className = "",
}: UrlFilterBarClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    // Always reset page to 1 on filter change
    params.delete("page");

    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  const handleReset = () => {
    router.push(pathname, { scroll: false });
  };

  const hasActiveFilters = fields.some((field) =>
    Boolean(searchParams.get(field.name)),
  );

  return (
    <div
      className={`p-4 bg-surface-container-lowest rounded-xl border border-surface-container shadow-xs ${className}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        {fields.map((field) => {
          const currentValue = searchParams.get(field.name) || "";

          return (
            <div key={field.name} className="flex-1 min-w-[160px] max-w-xs">
              <label htmlFor={`filter-${field.name}`} className="sr-only">
                {field.label}
              </label>
              <div className="relative">
                <select
                  id={`filter-${field.name}`}
                  value={currentValue}
                  onChange={(e) =>
                    handleFilterChange(field.name, e.target.value)
                  }
                  className="w-full h-10 px-3 pr-8 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="">{field.label}: Tất cả</option>
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-[18px] text-outline pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
                  arrow_drop_down
                </span>
              </div>
            </div>
          );
        })}

        {hasActiveFilters && (
          <button
            type="button"
            onClick={handleReset}
            className="h-10 px-3 rounded-lg border border-outline-variant/60 text-secondary hover:bg-surface-beige text-body-sm font-body-sm flex items-center gap-1 transition-colors ml-auto"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
            <span>Xóa bộ lọc</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default UrlFilterBarClient;
