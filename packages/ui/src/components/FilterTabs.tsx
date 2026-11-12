'use client';

import { useState, useCallback, useMemo } from 'react';
import { clsx } from '../lib/utils';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
  icon?: string;
}

interface FilterGroup {
  key: string;
  label: string;
  options: FilterOption[];
  multiple?: boolean;
  icon?: string;
}

interface FilterTabsProps {
  groups: FilterGroup[];
  activeFilters: Record<string, string[]>;
  onChange: (filters: Record<string, string[]>) => void;
  className?: string;
  showCounts?: boolean;
  variant?: 'tabs' | 'chips' | 'dropdown';
}

export function FilterTabs({
  groups,
  activeFilters,
  onChange,
  className,
  showCounts = true,
  variant = 'chips',
}: FilterTabsProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const handleToggle = useCallback(
    (groupKey: string, value: string) => {
      const current = activeFilters[groupKey] || [];
      const isActive = current.includes(value);
      const group = groups.find((g) => g.key === groupKey);
      const multiple = group?.multiple ?? false;

      let next: string[];
      if (multiple) {
        next = isActive ? current.filter((v) => v !== value) : [...current, value];
      } else {
        next = isActive ? [] : [value];
      }

      onChange({ ...activeFilters, [groupKey]: next });
    },
    [activeFilters, groups, onChange]
  );

  const handleClearGroup = useCallback(
    (groupKey: string) => {
      onChange({ ...activeFilters, [groupKey]: [] });
    },
    [activeFilters, onChange]
  );

  const handleClearAll = useCallback(() => {
    const cleared = Object.keys(activeFilters).reduce((acc, key) => ({ ...acc, [key]: [] }), {});
    onChange(cleared);
  }, [activeFilters, onChange]);

  const totalActiveFilters = useMemo(
    () => Object.values(activeFilters).flat().length,
    [activeFilters]
  );

  if (groups.length === 0) return null;

  return (
    <div className={clsx('space-y-4', className)}>
      {variant === 'tabs' && (
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Bộ lọc">
          {groups.map((group) => (
            <button
              key={group.key}
              role="tab"
              aria-selected={expandedGroups.has(group.key)}
              aria-controls={`${group.key}-panel`}
              id={`${group.key}-tab`}
              onClick={() =>
                setExpandedGroups((prev) => {
                  const next = new Set(prev);
                  if (next.has(group.key)) next.delete(group.key);
                  else next.add(group.key);
                  return next;
                })
              }
              className={clsx(
                'px-4 py-2 text-sm font-medium rounded-full transition-all',
                expandedGroups.has(group.key)
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 ring-1 ring-neutral-200 dark:ring-neutral-700 hover:ring-primary-500'
              )}
            >
              {group.label}
              {showCounts && (
                <span className={clsx('ml-1.5 px-1.5 py-0.5 text-xs rounded-full', expandedGroups.has(group.key) ? 'bg-primary-500/20 text-primary-100' : 'bg-neutral-100 dark:bg-neutral-700')}>
                  {(activeFilters[group.key] || []).length}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4" role="tabpanel">
        {groups.map((group) => {
          const isActive = (activeFilters[group.key] || []).length > 0;
          const isExpanded = variant === 'tabs' ? expandedGroups.has(group.key) : true;

          if (!isExpanded && variant === 'tabs') return null;

          return (
            <div
              key={group.key}
              id={`${group.key}-panel`}
              role="tabpanel"
              aria-labelledby={`${group.key}-tab`}
              className={clsx('space-y-2', variant === 'dropdown' && 'relative')}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{group.label}</h4>
                {isActive && (
                  <button
                    onClick={() => handleClearGroup(group.key)}
                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                    aria-label={`Xóa bộ lọc ${group.label}`}
                  >
                    Xóa
                  </button>
                )}
              </div>

              {variant === 'chips' && (
                <div className="flex flex-wrap gap-2" role="group" aria-label={group.label}>
                  {group.options.map((option) => {
                    const isSelected = (activeFilters[group.key] || []).includes(option.value);
                    return (
                      <button
                        key={option.value}
                        type="button"
                        role="checkbox"
                        aria-checked={isSelected}
                        aria-label={`${option.label}${option.count !== undefined ? ` (${option.count})` : ''}`}
                        onClick={() => handleToggle(group.key, option.value)}
                        className={clsx(
                          'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full transition-all',
                          isSelected
                            ? 'bg-primary-600 text-white shadow-sm'
                            : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 ring-1 ring-neutral-200 dark:ring-neutral-700 hover:ring-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                        )}
                      >
                        {option.icon && <span className="material-symbols-outlined text-base">{option.icon}</span>}
                        {option.label}
                        {showCounts && option.count !== undefined && (
                          <span className={clsx('px-1.5 py-0.5 text-xs rounded-full', isSelected ? 'bg-primary-500/20 text-primary-100' : 'bg-neutral-100 dark:bg-neutral-700')}>
                            {option.count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {variant === 'dropdown' && (
                <details className="group">
                  <summary className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-700 rounded-lg cursor-pointer list-none">
                    <span>
                      {isActive ? (
                        <>
                          <span className="text-primary-600 dark:text-primary-400">Đã chọn: </span>
                          {(activeFilters[group.key] || []).slice(0, 2).map((v, i) => {
                            const opt = group.options.find((o) => o.value === v);
                            return (
                              <span key={i} className={clsx('ml-1 px-2 py-0.5 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded')}>
                                {opt?.label ?? v}
                              </span>
                            );
                          })}
                          {(activeFilters[group.key] || []).length > 2 && (
                            <span className="ml-1 text-neutral-500 dark:text-neutral-400">+{(activeFilters[group.key] || []).length - 2} khác</span>
                          )}
                        </>
                      ) : (
                        'Chọn bộ lọc'
                      )}
                    </span>
                    <span className="material-symbols-outlined text-base transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white dark:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-700 rounded-lg shadow-lg p-2">
                    <div className="space-y-1">
                      {group.options.map((option) => {
                        const isSelected = (activeFilters[group.key] || []).includes(option.value);
                        return (
                          <label key={option.value} className="flex items-center gap-2 px-2 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded cursor-pointer">
                            <input
                              type={group.multiple ? 'checkbox' : 'radio'}
                              name={group.key}
                              checked={isSelected}
                              onChange={() => handleToggle(group.key, option.value)}
                              className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                            />
                            <span>{option.label}</span>
                            {showCounts && option.count !== undefined && (
                              <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-400">({option.count})</span>
                            )}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </details>
              )}
            </div>
          );
        })}
      </div>

      {totalActiveFilters > 0 && (
        <button
          onClick={handleClearAll}
          className="w-full px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-700 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          Xóa tất cả bộ lọc ({totalActiveFilters})
        </button>
      )}
    </div>
  );
}

// FilterBar - a horizontal filter bar for mobile-friendly filtering
interface FilterBarProps {
  groups: FilterGroup[];
  activeFilters: Record<string, string[]>;
  onChange: (filters: Record<string, string[]>) => void;
  className?: string;
  maxVisibleGroups?: number;
}

export function FilterBar({
  groups,
  activeFilters,
  onChange,
  className,
  maxVisibleGroups = 3,
}: FilterBarProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleGroups = showAll ? groups : groups.slice(0, maxVisibleGroups);
  const hasMore = groups.length > maxVisibleGroups;

  return (
    <div className={clsx('space-y-3', className)}>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Bộ lọc nhanh">
        {visibleGroups.map((group) => {
          const activeValues = activeFilters[group.key] || [];
          const isActive = activeValues.length > 0;
          const displayValue = group.multiple
            ? activeValues.length > 1
              ? `${activeValues.length} mục`
              : group.options.find((o) => o.value === activeValues[0])?.label ?? activeValues[0]
            : group.options.find((o) => o.value === activeValues[0])?.label ?? activeValues[0];

          return (
            <button
              key={group.key}
              type="button"
              onClick={() => {
                // For FilterBar, we could open a modal or navigate to full filter page
                // For now, just toggle first option as demo
                const firstOption = group.options[0]?.value;
                if (firstOption) {
                  handleToggle(group.key, firstOption);
                }
              }}
              className={clsx(
                'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full transition-all',
                isActive
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 ring-1 ring-neutral-200 dark:ring-neutral-700'
              )}
              aria-pressed={isActive}
            >
              {group.icon && <span className="material-symbols-outlined text-base">{group.icon}</span>}
              <span>{group.label}</span>
              {isActive && <span className="text-primary-100">{displayValue}</span>}
            </button>
          );
        })}
      </div>

      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
        >
          {showAll ? 'Thu gọn' : `Hiện thêm ${groups.length - maxVisibleGroups} bộ lọc khác`}
          <span className="material-symbols-outlined text-sm ml-1">{showAll ? 'expand_less' : 'expand_more'}</span>
        </button>
      )}

      {Object.values(activeFilters).flat().length > 0 && (
        <button
          onClick={() => {
            const cleared = Object.keys(activeFilters).reduce((acc, key) => ({ ...acc, [key]: [] }), {});
            onChange(cleared);
          }}
          className="text-sm text-neutral-500 dark:text-neutral-400 hover:underline"
        >
          Xóa tất cả bộ lọc
        </button>
      )}
    </div>
  );
}

function handleToggle(groupKey: string, value: string) {
  // This is a placeholder - in real usage, this would be passed as prop
  console.log('Toggle filter:', groupKey, value);
}