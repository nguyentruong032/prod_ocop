import React from "react";
import Link from "next/link";

export interface DestinationSubnavProps {
  activeTab?: "all" | "eco" | "craft";
  locale?: string;
}

export function DestinationSubnav({
  activeTab = "all",
  locale = "vi",
}: DestinationSubnavProps) {
  const tabs = [
    {
      id: "all",
      label: "Tất cả điểm đến",
      href: `/${locale}/diem-den-du-lich`,
    },
    {
      id: "eco",
      label: "Du lịch sinh thái & Trải nghiệm",
      href: `/${locale}/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop`,
    },
    {
      id: "craft",
      label: "Làng nghề truyền thống",
      href: `/${locale}/diem-den-du-lich/lang-nghe-truyen-thong`,
    },
  ];

  return (
    <div className="w-full bg-surface-container-lowest border-b border-surface-container/80 sticky top-20 z-20 backdrop-blur-md">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 sm:gap-6 overflow-x-auto py-3 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={`text-sm sm:text-base font-medium whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-white font-semibold shadow-xs"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container/50"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default DestinationSubnav;
