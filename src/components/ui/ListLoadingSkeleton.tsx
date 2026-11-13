import React from "react";

export interface ListLoadingSkeletonProps {
  columns?: 3 | 4;
  cardCount?: number;
  showSubnav?: boolean;
  showFilterBar?: boolean;
  type?: "article" | "product" | "producer" | "destination" | "search";
}

export function ListLoadingSkeleton({
  columns = 3,
  cardCount = 6,
  showSubnav = true,
  showFilterBar = true,
  type = "article",
}: ListLoadingSkeletonProps) {
  const colClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="w-full bg-surface pb-16 animate-pulse">
      {/* Subnav Placeholder */}
      {showSubnav && (
        <div className="w-full bg-surface-container-lowest border-b border-surface-container/60 py-3.5 mb-6">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
            <div className="h-8 w-28 bg-surface-container rounded-lg" />
            <div className="h-8 w-36 bg-surface-container rounded-lg" />
            <div className="h-8 w-32 bg-surface-container rounded-lg" />
            <div className="h-8 w-24 bg-surface-container rounded-lg hidden sm:block" />
          </div>
        </div>
      )}

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Breadcrumb & Header Placeholder */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-4 w-16 bg-surface-container rounded" />
          <div className="h-4 w-4 bg-surface-container-low rounded" />
          <div className="h-4 w-28 bg-surface-container rounded" />
        </div>

        <div className="mb-8">
          <div className="h-4 w-36 bg-surface-container rounded mb-3" />
          <div className="h-9 w-72 sm:w-96 bg-surface-container rounded-lg mb-3" />
          <div className="h-4 w-full max-w-xl bg-surface-container-low rounded" />
        </div>

        {/* Filter Bar Placeholder */}
        {showFilterBar && (
          <div className="w-full bg-surface-container-lowest p-4 rounded-xl border border-surface-container/60 mb-8 flex items-center gap-3 flex-wrap">
            <div className="h-10 w-32 bg-surface-container rounded-lg" />
            <div className="h-10 w-36 bg-surface-container rounded-lg" />
            <div className="h-10 w-40 bg-surface-container rounded-lg" />
            <div className="ml-auto h-10 w-24 bg-surface-container rounded-lg hidden sm:block" />
          </div>
        )}

        {/* Card Grid Skeleton */}
        <div className={`grid ${colClass} gap-6`}>
          {Array.from({ length: cardCount }).map((_, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-xl border border-surface-container/60 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Box Skeleton */}
              <div
                className={`w-full bg-surface-container relative ${
                  type === "product" ? "aspect-square" : "aspect-16/10"
                }`}
              >
                <div className="absolute top-3 left-3 h-5 w-20 bg-surface-container-lowest/80 rounded" />
              </div>

              {/* Content Skeleton */}
              <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="h-3.5 w-24 bg-surface-container rounded" />
                    <div className="h-3.5 w-16 bg-surface-container-low rounded" />
                  </div>
                  <div className="h-5 w-full bg-surface-container rounded" />
                  <div className="h-5 w-3/4 bg-surface-container rounded" />
                  {type !== "product" && (
                    <div className="h-3.5 w-full bg-surface-container-low rounded mt-1" />
                  )}
                </div>

                <div className="pt-3 border-t border-surface-container/40 flex items-center justify-between">
                  <div className="h-4 w-28 bg-surface-container-low rounded" />
                  <div className="h-4 w-16 bg-surface-container rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListLoadingSkeleton;
