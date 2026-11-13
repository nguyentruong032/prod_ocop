export const DEFAULT_PAGE_SIZE = 12;

export interface PaginationInfo {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export function getPaginationInfo(
  totalItems: number,
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
): PaginationInfo {
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(totalItems / safePageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);

  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return {
    currentPage,
    pageSize: safePageSize,
    totalItems,
    totalPages,
    hasPrevPage,
    hasNextPage,
    prevPage: hasPrevPage ? currentPage - 1 : null,
    nextPage: hasNextPage ? currentPage + 1 : null,
  };
}

export function parsePageParam(param: string | string[] | undefined): number {
  if (!param) return 1;
  const parsed = Array.isArray(param) ? parseInt(param[0] ?? '1', 10) : parseInt(param, 10);
  return Number.isNaN(parsed) || parsed < 1 ? 1 : parsed;
}
