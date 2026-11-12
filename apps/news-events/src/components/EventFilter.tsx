'use client';

import { useState } from 'react';
import type { FilterOption } from '@ocop/shared-types';

interface EventFilterProps {
  status: string;
  statuses: FilterOption[];
  onChange: (status: string) => void;
}

const statusColors: Record<string, string> = {
  'sap-dien-ra': 'bg-blue-100 text-blue-800',
  'dang-dien-ra': 'bg-green-100 text-green-800',
  'da-ket-thuc': 'bg-gray-100 text-gray-800',
};

const statusIcons: Record<string, string> = {
  'sap-dien-ra': '⏳',
  'dang-dien-ra': '🔴',
  'da-ket-thuc': '✅',
};

export function EventFilter({ status, statuses, onChange }: EventFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <label htmlFor="event-status-filter" className="label shrink-0">
          Trạng thái:
        </label>
        <div className="relative flex-1 min-w-[200px]">
          <button
            type="button"
            id="event-status-filter"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full input flex items-center justify-between text-left"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label="Chọn trạng thái sự kiện"
          >
            <span className="flex items-center gap-2">
              {status && <span className={`badge ${statusColors[status]}`}>{statusIcons[status]} {statuses.find((s) => s.value === status)?.label}</span>}
              {!status && <span className="text-ocop-primary-600">Tất cả trạng thái</span>}
            </span>
            <svg
              className={`w-5 h-5 text-ocop-primary-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <ul
              role="listbox"
              aria-label="Trạng thái sự kiện"
              className="absolute z-10 mt-1 w-full rounded-lg border border-ocop-primary-200 bg-white shadow-lg max-h-60 overflow-auto"
            >
              {statuses.map((stat) => (
                <li key={stat.value} role="option" aria-selected={status === stat.value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(stat.value);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-sm transition-colors flex items-center gap-2 ${
                      status === stat.value
                        ? 'bg-ocop-primary-50 text-ocop-primary-900 font-medium'
                        : 'text-ocop-primary-700 hover:bg-ocop-primary-50'
                    }`}
                  >
                    <span className={`badge ${statusColors[stat.value]}`}>
                      {statusIcons[stat.value]} {stat.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="sr-only" aria-live="polite">
        {status ? `Đã chọn trạng thái: ${statuses.find((s) => s.value === status)?.label}` : 'Đang hiển thị tất cả trạng thái'}
      </div>
    </div>
  );
}