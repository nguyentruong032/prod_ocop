'use server';

import type {
  Product,
  Story,
  Destination,
  NewsArticle,
  Event,
  ChuThe,
  IntegrationArticle,
  SiteConfig,
  OCOPNowItem,
  SearchParams,
  PaginatedResponse,
  ApiResponse,
  RevalidateTag,
} from '@ocop/shared-types';
import { REVALIDATE_TAGS } from '@ocop/shared-types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3006';

/**
 * Generic fetch wrapper with revalidation tags
 */
async function fetchWithRevalidation<T>(
  endpoint: string,
  tag: RevalidateTag,
  revalidate = 3600
): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    next: { revalidate, tags: [tag] },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
  }

  return res.json();
}

/**
 * ============================================
 * PRODUCT FETCHERS
 * ============================================
 */

export async function getProducts(params?: SearchParams): Promise<PaginatedResponse<Product>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<Product>>(
    `/api/products${query}`,
    REVALIDATE_TAGS.products
  );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<Product>>(
      `/api/products/${slug}`,
      REVALIDATE_TAGS.products
    );
    return response.data || null;
  } catch {
    return null;
  }
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  const response = await getProducts({ limit: String(limit), sort: 'createdAt', order: 'desc' });
  return response.data || [];
}

export async function getProductsByCategory(category: string, limit = 12): Promise<Product[]> {
  const response = await getProducts({ category, limit: String(limit) });
  return response.data || [];
}

export async function getProductsByProvince(province: string, limit = 12): Promise<Product[]> {
  const response = await getProducts({ province, limit: String(limit) });
  return response.data || [];
}

export async function getProductsByStars(stars: (3 | 4 | 5)[], limit = 12): Promise<Product[]> {
  const response = await getProducts({ stars: stars.join(','), limit: String(limit) });
  return response.data || [];
}

/**
 * ============================================
 * STORY FETCHERS
 * ============================================
 */

export async function getStories(params?: SearchParams): Promise<PaginatedResponse<Story>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<Story>>(
    `/api/stories${query}`,
    REVALIDATE_TAGS.stories
  );
}

export async function getStoryBySlug(slug: string): Promise<Story | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<Story>>(
      `/api/stories/${slug}`,
      REVALIDATE_TAGS.stories
    );
    return response.data || null;
  } catch {
    return null;
  }
}

export async function getFeaturedStories(limit = 6): Promise<Story[]> {
  const response = await getStories({ limit: String(limit), sort: 'publishedDate', order: 'desc' });
  return response.data || [];
}

export async function getStoriesByCategory(category: string, limit = 12): Promise<Story[]> {
  const response = await getStories({ category, limit: String(limit) });
  return response.data || [];
}

export async function getStoriesByType(type: Story['type'], limit = 12): Promise<Story[]> {
  const response = await getStories({ type, limit: String(limit) });
  return response.data || [];
}

export async function getStoriesByProvince(province: string, limit = 12): Promise<Story[]> {
  const response = await getStories({ province, limit: String(limit) });
  return response.data || [];
}

/**
 * ============================================
 * DESTINATION FETCHERS
 * ============================================
 */

export async function getDestinations(params?: SearchParams): Promise<PaginatedResponse<Destination>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<Destination>>(
    `/api/destinations${query}`,
    REVALIDATE_TAGS.destinations
  );
}

export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<Destination>>(
      `/api/destinations/${slug}`,
      REVALIDATE_TAGS.destinations
    );
    return response.data || null;
  } catch {
    return null;
  }
}

export async function getAllDestinations(): Promise<Destination[]> {
  const response = await getDestinations({ limit: '100' });
  return response.data || [];
}

export async function getDestinationsByRegion(region: string): Promise<Destination[]> {
  const response = await getDestinations({ category: region });
  return response.data || [];
}

export async function getDestinationsByProvince(province: string): Promise<Destination[]> {
  const response = await getDestinations({ province });
  return response.data || [];
}

/**
 * ============================================
 * NEWS FETCHERS
 * ============================================
 */

export async function getNews(params?: SearchParams): Promise<PaginatedResponse<NewsArticle>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<NewsArticle>>(
    `/api/news${query}`,
    REVALIDATE_TAGS.news
  );
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<NewsArticle>>(
      `/api/news/${slug}`,
      REVALIDATE_TAGS.news
    );
    return response.data || null;
  } catch {
    return null;
  }
}

export async function getLatestNews(limit = 10): Promise<NewsArticle[]> {
  const response = await getNews({ limit: String(limit), sort: 'date', order: 'desc' });
  return response.data || [];
}

export async function getNewsByCategory(
  category: NewsArticle['category'],
  limit = 12
): Promise<NewsArticle[]> {
  const response = await getNews({ category, limit: String(limit) });
  return response.data || [];
}

/**
 * ============================================
 * EVENT FETCHERS
 * ============================================
 */

export async function getEvents(params?: SearchParams): Promise<PaginatedResponse<Event>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<Event>>(
    `/api/events${query}`,
    REVALIDATE_TAGS.events
  );
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<Event>>(
      `/api/events/${slug}`,
      REVALIDATE_TAGS.events
    );
    return response.data || null;
  } catch {
    return null;
  }
}

export async function getUpcomingEvents(limit = 10): Promise<Event[]> {
  const response = await getEvents({
    status: 'Sắp diễn ra',
    limit: String(limit),
    sort: 'date',
    order: 'asc',
  });
  return response.data || [];
}

export async function getOngoingEvents(limit = 10): Promise<Event[]> {
  const response = await getEvents({
    status: 'Đang diễn ra',
    limit: String(limit),
  });
  return response.data || [];
}

export async function getPastEvents(limit = 10): Promise<Event[]> {
  const response = await getEvents({
    status: 'Đã kết thúc',
    limit: String(limit),
    sort: 'date',
    order: 'desc',
  });
  return response.data || [];
}

export async function getEventsByStatus(status: Event['status'], limit = 12): Promise<Event[]> {
  const response = await getEvents({ status, limit: String(limit) });
  return response.data || [];
}

/**
 * ============================================
 * CHU THE (ENTITIES) FETCHERS
 * ============================================
 */

export async function getChuTheList(params?: SearchParams): Promise<PaginatedResponse<ChuThe>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<ChuThe>>(
    `/api/chu-the${query}`,
    REVALIDATE_TAGS.chuThe
  );
}

export async function getChuTheBySlug(slug: string): Promise<ChuThe | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<ChuThe>>(
      `/api/chu-the/${slug}`,
      REVALIDATE_TAGS.chuThe
    );
    return response.data || null;
  } catch {
    return null;
  }
}

export async function getChuTheByProvince(province: string, limit = 12): Promise<ChuThe[]> {
  const response = await getChuTheList({ province, limit: String(limit) });
  return response.data || [];
}

export async function getChuTheByCategory(category: string, limit = 12): Promise<ChuThe[]> {
  const response = await getChuTheList({ category, limit: String(limit) });
  return response.data || [];
}

export async function getChuTheByStarRating(stars: ChuThe['hangSao'], limit = 12): Promise<ChuThe[]> {
  const response = await getChuTheList({ stars, limit: String(limit) });
  return response.data || [];
}

/**
 * ============================================
 * INTEGRATION/EXPORT FETCHERS
 * ============================================
 */

export async function getIntegrationArticles(params?: SearchParams): Promise<PaginatedResponse<IntegrationArticle>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<IntegrationArticle>>(
    `/api/integration${query}`,
    REVALIDATE_TAGS.integration
  );
}

export async function getIntegrationArticleBySlug(slug: string): Promise<IntegrationArticle | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<IntegrationArticle>>(
      `/api/integration/${slug}`,
      REVALIDATE_TAGS.integration
    );
    return response.data || null;
  } catch {
    return null;
  }
}

export async function getLatestIntegrationArticles(limit = 10): Promise<IntegrationArticle[]> {
  const response = await getIntegrationArticles({ limit: String(limit), sort: 'date', order: 'desc' });
  return response.data || [];
}

export async function getIntegrationArticlesByCategory(
  category: IntegrationArticle['category'],
  limit = 12
): Promise<IntegrationArticle[]> {
  const response = await getIntegrationArticles({ category, limit: String(limit) });
  return response.data || [];
}

/**
 * ============================================
 * OCOP NOW FETCHERS
 * ============================================
 */

export async function getOCOPNowItems(params?: SearchParams): Promise<PaginatedResponse<OCOPNowItem>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<OCOPNowItem>>(
    `/api/ocop-now${query}`,
    REVALIDATE_TAGS.ocopNow
  );
}

export async function getOCOPNowBySlug(slug: string): Promise<OCOPNowItem | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<OCOPNowItem>>(
      `/api/ocop-now/${slug}`,
      REVALIDATE_TAGS.ocopNow
    );
    return response.data || null;
  } catch {
    return null;
  }
}

export async function getLatestOCOPNow(limit = 10): Promise<OCOPNowItem[]> {
  const response = await getOCOPNowItems({ limit: String(limit), sort: 'publishedDate', order: 'desc' });
  return response.data || [];
}

export async function getOCOPNowByType(type: OCOPNowItem['type'], limit = 12): Promise<OCOPNowItem[]> {
  const response = await getOCOPNowItems({ type, limit: String(limit) });
  return response.data || [];
}

/**
 * ============================================
 * SITE CONFIG FETCHERS
 * ============================================
 */

export async function getSiteConfig(): Promise<SiteConfig | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<SiteConfig>>(
      '/api/site-config',
      REVALIDATE_TAGS.siteConfig,
      86400 // 24 hours
    );
    return response.data || null;
  } catch {
    return null;
  }
}

/**
 * ============================================
 * SEARCH FETCHERS
 * ============================================
 */

export interface SearchResult {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  type: 'product' | 'story' | 'destination' | 'news' | 'event' | 'chu-the' | 'integration' | 'ocop-now';
  category: string;
  image?: string;
  url: string;
}

export async function searchContent(query: string, params?: Partial<SearchParams>): Promise<SearchResult[]> {
  const searchParams = new URLSearchParams({ q: query });
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  return fetchWithRevalidation<SearchResult[]>(
    `/api/search?${searchParams.toString()}`,
    REVALIDATE_TAGS.search,
    600 // 10 minutes for search
  );
}

export async function getSearchSuggestions(query: string): Promise<string[]> {
  const searchParams = new URLSearchParams({ q: query, limit: '10' });
  return fetchWithRevalidation<string[]>(
    `/api/search/suggestions?${searchParams.toString()}`,
    REVALIDATE_TAGS.search,
    600
  );
}

/**
 * ============================================
 * CRAFT VILLAGES FETCHERS (from destinations API)
 * ============================================
 */

export interface CraftVillage {
  id: string;
  slug: string;
  name: string;
  province: string;
  region: string;
  district: string;
  craftType: string;
  establishedYear: number;
  description: string;
  shortDescription: string;
  history: string;
  specialties: string[];
  contact: {
    address: string;
    phone: string;
    email?: string;
    website?: string;
    facebook?: string;
  };
  experiences: Array<{
    name: string;
    duration: string;
    price: string;
    description: string;
  }>;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  image: string;
  images: string[];
  stars: '5 Sao' | '4 Sao' | '3 Sao';
  certifications: string[];
  awards: string[];
}

export async function getCraftVillages(params?: SearchParams): Promise<PaginatedResponse<CraftVillage>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<CraftVillage>>(
    `/api/craft-villages${query}`,
    REVALIDATE_TAGS.destinations
  );
}

export async function getCraftVillageBySlug(slug: string): Promise<CraftVillage | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<CraftVillage>>(
      `/api/craft-villages/${slug}`,
      REVALIDATE_TAGS.destinations
    );
    return response.data || null;
  } catch {
    return null;
  }
}

/**
 * ============================================
 * TOURS FETCHERS
 * ============================================
 */

export interface Tour {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  duration: string;
  price: string;
  province: string;
  region: string;
  highlights: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    activities: string[];
  }>;
  includes: string[];
  excludes: string[];
  image: string;
  images: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function getTours(params?: SearchParams): Promise<PaginatedResponse<Tour>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<Tour>>(
    `/api/tours${query}`,
    REVALIDATE_TAGS.destinations
  );
}

export async function getTourBySlug(slug: string): Promise<Tour | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<Tour>>(
      `/api/tours/${slug}`,
      REVALIDATE_TAGS.destinations
    );
    return response.data || null;
  } catch {
    return null;
  }
}

/**
 * ============================================
 * ECOSYSTEM JOURNEYS FETCHERS
 * ============================================
 */

export interface EcosystemJourney {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  province: string;
  region: string;
  duration: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  bestSeason: string;
  highlights: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
  }>;
  image: string;
  images: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export async function getEcosystemJourneys(params?: SearchParams): Promise<PaginatedResponse<EcosystemJourney>> {
  const searchParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
  }
  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
  return fetchWithRevalidation<PaginatedResponse<EcosystemJourney>>(
    `/api/ecosystem-journeys${query}`,
    REVALIDATE_TAGS.destinations
  );
}

export async function getEcosystemJourneyBySlug(slug: string): Promise<EcosystemJourney | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<EcosystemJourney>>(
      `/api/ecosystem-journeys/${slug}`,
      REVALIDATE_TAGS.destinations
    );
    return response.data || null;
  } catch {
    return null;
  }
}

/**
 * ============================================
 * SPATIAL METRICS FETCHERS
 * ============================================
 */

export interface SpatialMetrics {
  totalProducts: number;
  totalProvinces: number;
  totalCraftVillages: number;
  totalStories: number;
  productsByRegion: Record<string, number>;
  productsByCategory: Record<string, number>;
  productsByStars: Record<string, number>;
  topProvinces: Array<{ province: string; count: number }>;
  updatedAt: string;
}

export async function getSpatialMetrics(): Promise<SpatialMetrics | null> {
  try {
    const response = await fetchWithRevalidation<ApiResponse<SpatialMetrics>>(
      '/api/spatial-metrics',
      REVALIDATE_TAGS.destinations,
      86400
    );
    return response.data || null;
  } catch {
    return null;
  }
}

/**
 * ============================================
 * REGISTRATION FETCHERS (POST only)
 * ============================================
 */

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  province: string;
  productCategory: string;
  message?: string;
  files?: File[];
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  registrationId?: string;
}

export async function submitRegistration(data: RegistrationData): Promise<RegistrationResponse> {
  const res = await fetch(`${API_BASE}/api/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Registration failed' }));
    throw new Error(error.message || 'Registration failed');
  }

  return res.json();
}