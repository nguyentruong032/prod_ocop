'use client';

import { useState } from 'react';
import type { TabConfig } from '@ocop/shared-types';

interface CategoryTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  tabs: TabConfig[];
}

export function CategoryTabs({ activeTab, onTabChange, tabs }: CategoryTabsProps) {
  return (
    <div className="mb-6" role="tablist" aria-label="Chuyển đổi giữa Tin tức và Sự kiện">
      <div className="flex flex-wrap gap-2 bg-ocop-primary-100 p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            id={`${tab.id}-tab`}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-ocop-primary-900 shadow-sm'
                : 'text-ocop-primary-600 hover:text-ocop-primary-900'
            }`}
          >
            <span aria-hidden="true" className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                  activeTab === tab.id
                    ? 'bg-ocop-primary-700 text-white'
                    : 'bg-ocop-primary-200 text-ocop-primary-700'
                }`}
              >
                {tab.count.toLocaleString('vi-VN')}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}