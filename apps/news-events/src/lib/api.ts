// API Client for news-events micro-frontend
// Typed fetchers matching @ocop/shared-types interfaces

import type {
  NewsArticle,
  Event,
  PaginatedResponse,
  SearchResult,
  SearchSuggestionsResponse,
  SiteConfig,
  RegistrationSubmission,
  RegistrationResponse,
} from '@ocop/shared-types';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3006';

function buildUrl(endpoint: string, params?: Record<string, string | number | undefined>): string {
  const url = new URL(`${API_BASE}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url.toString();
}

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    next: { revalidate: 60 }, // Default ISR revalidation
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `HTTP error ${response.status}`);
  }

  return response.json();
}

// News API
export async function fetchNewsPaginated(params: {
  page?: string;
  limit?: string;
  category?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}): Promise<PaginatedResponse<NewsArticle>> {
  return fetchJson<PaginatedResponse<NewsArticle>>(buildUrl('/api/news', params));
}

export async function fetchNewsBySlug(slug: string): Promise<NewsArticle> {
  return fetchJson<NewsArticle>(buildUrl(`/api/news/${slug}`));
}

export async function fetchLatestNews(limit = 5): Promise<NewsArticle[]> {
  const response = await fetchNewsPaginated({ limit: String(limit), sort: 'publishedAt', order: 'desc' });
  return response.data;
}

export async function fetchFeaturedNews(limit = 3): Promise<NewsArticle[]> {
  const response = await fetchNewsPaginated({ limit: String(limit), sort: 'viewCount', order: 'desc' });
  return response.data.filter((n) => n.isFeatured);
}

export async function fetchBreakingNews(limit = 2): Promise<NewsArticle[]> {
  const response = await fetchNewsPaginated({ limit: String(limit), sort: 'publishedAt', order: 'desc' });
  return response.data.filter((n) => n.isBreaking);
}

export async function fetchRelatedNews(currentSlug: string, category: string, limit = 3): Promise<NewsArticle[]> {
  const response = await fetchNewsPaginated({ category, limit: String(limit + 1), sort: 'publishedAt', order: 'desc' });
  return response.data.filter((n) => n.slug !== currentSlug).slice(0, limit);
}

export async function fetchNewsCategories(): Promise<{ value: string; label: string; count: number }[]> {
  const response = await fetchNewsPaginated({ limit: '1' });
  // In production, this would be a dedicated endpoint
  return [
    { value: 'chinh-sach-co-che', label: 'Chính sách & Cơ chế', count: 0 },
    { value: 'hoat-dong-xuc-tien', label: 'Hoạt động - Xúc tiến thương mại', count: 0 },
    { value: 'ocop-dia-phuong', label: 'OCOP Địa phương', count: 0 },
    { value: 'chinh-sach', label: 'Chính sách', count: 0 },
    { value: 'thi-truong', label: 'Báo cáo thị trường', count: 0 },
  ];
}

// Events API
export async function fetchEventsPaginated(params: {
  page?: string;
  limit?: string;
  status?: string;
  type?: string;
  province?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}): Promise<PaginatedResponse<Event>> {
  return fetchJson<PaginatedResponse<Event>>(buildUrl('/api/events', params));
}

export async function fetchEventBySlug(slug: string): Promise<Event> {
  return fetchJson<Event>(buildUrl(`/api/events/${slug}`));
}

export async function fetchUpcomingEvents(limit = 5): Promise<Event[]> {
  const response = await fetchEventsPaginated({ status: 'sap-dien-ra', limit: String(limit), sort: 'startDate', order: 'asc' });
  return response.data;
}

export async function fetchOngoingEvents(limit = 5): Promise<Event[]> {
  const response = await fetchEventsPaginated({ status: 'dang-dien-ra', limit: String(limit), sort: 'startDate', order: 'asc' });
  return response.data;
}

export async function fetchPastEvents(limit = 5): Promise<Event[]> {
  const response = await fetchEventsPaginated({ status: 'da-ket-thuc', limit: String(limit), sort: 'startDate', order: 'desc' });
  return response.data;
}

export async function fetchEventsByType(type: string, limit = 5): Promise<Event[]> {
  const response = await fetchEventsPaginated({ type, limit: String(limit), sort: 'startDate', order: 'asc' });
  return response.data;
}

export async function fetchEventsByProvince(province: string, limit = 5): Promise<Event[]> {
  const response = await fetchEventsPaginated({ province, limit: String(limit), sort: 'startDate', order: 'asc' });
  return response.data;
}

// Integration API
export async function fetchIntegrationPaginated(params: {
  page?: string;
  limit?: string;
  category?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}): Promise<PaginatedResponse<any>> {
  return fetchJson<PaginatedResponse<any>>(buildUrl('/api/integration', params));
}

export async function fetchIntegrationBySlug(slug: string): Promise<any> {
  return fetchJson<any>(buildUrl(`/api/integration/${slug}`));
}

// OCOP Now API
export async function fetchOcopNowPaginated(params: {
  page?: string;
  limit?: string;
  type?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}): Promise<PaginatedResponse<any>> {
  return fetchJson<PaginatedResponse<any>>(buildUrl('/api/ocop-now', params));
}

export async function fetchOcopNowBySlug(slug: string): Promise<any> {
  return fetchJson<any>(buildUrl(`/api/ocop-now/${slug}`));
}

// Search API
export async function search(params: {
  q: string;
  type?: 'all' | 'news' | 'events' | 'products' | 'stories' | 'destinations' | 'integration' | 'ocop-now' | 'chu-the';
  page?: string;
  limit?: string;
}): Promise<SearchResult> {
  return fetchJson<SearchResult>(buildUrl('/api/search', params));
}

export async function fetchSearchSuggestions(q: string, limit = 5): Promise<SearchSuggestionsResponse> {
  return fetchJson<SearchSuggestionsResponse>(buildUrl('/api/search/suggestions', { q, limit: String(limit) }));
}

// Site Config API
export async function fetchSiteConfig(): Promise<SiteConfig> {
  return fetchJson<SiteConfig>(buildUrl('/api/site-config'));
}

// Registration API
export async function submitRegistration(data: RegistrationSubmission): Promise<RegistrationResponse> {
  const response = await fetch(`${API_BASE}/api/registration`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `HTTP error ${response.status}`);
  }

  return response.json();
}

// Products API
export async function fetchProductsPaginated(params: {
  page?: string;
  limit?: string;
  category?: string;
  province?: string;
  rating?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}): Promise<PaginatedResponse<any>> {
  return fetchJson<PaginatedResponse<any>>(buildUrl('/api/products', params));
}

export async function fetchProductBySlug(slug: string): Promise<any> {
  return fetchJson<any>(buildUrl(`/api/products/${slug}`));
}

// Chu The API
export async function fetchChuThePaginated(params: {
  page?: string;
  limit?: string;
  type?: string;
  province?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}): Promise<PaginatedResponse<any>> {
  return fetchJson<PaginatedResponse<any>>(buildUrl('/api/chu-the', params));
}

export async function fetchChuTheBySlug(slug: string): Promise<any> {
  return fetchJson<any>(buildUrl(`/api/chu-the/${slug}`));
}