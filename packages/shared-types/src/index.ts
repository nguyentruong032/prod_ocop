// Shared TypeScript types for OCOP Vietnam Digital Platform
// Single source of truth for all data structures across micro-frontends

import type { ReactNode } from 'react';

// ============================================
// BASE TYPES
// ============================================

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  structuredData?: Record<string, unknown>;
}

export interface MediaAsset {
  id?: string;
  url: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  type: 'image' | 'video' | 'audio';
  mimeType?: string;
  size?: number;
}

export interface LocationData {
  province: string;
  district?: string;
  ward?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  address?: string;
}

// ============================================
// BRAND & SITE CONFIG
// ============================================

export interface BrandColors {
  primary: string;
  secondary: string;
  tertiary: string;
  gold: string;
  surface: string;
  warmWhite: string;
  softGreen: string;
  darkGreen: string;
}

export interface BrandConfig {
  name: string;
  shortName: string;
  tagline: string;
  logo: string;
  logoAlt: string;
  colors: BrandColors;
}

export interface NavigationItem {
  key: string;
  label: string;
  href: string;
  isActive?: boolean;
  children?: NavigationItem[];
}

export interface NavigationConfig {
  main: NavigationItem[];
  cta: {
    label: string;
    href: string;
    icon: string;
  };
  user: {
    icon: string;
    href: string;
  };
}

export interface FooterColumn {
  title: string;
  links: Array<{
    label: string;
    href: string;
    key?: string;
  }>;
}

export interface FooterConfig {
  brand: {
    name: string;
    description: string;
    badge: string;
  };
  columns: FooterColumn[];
  copyright: string;
  badge: string;
}

export interface FormField {
  name: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'file' | 'url';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  accept?: string;
}

export interface FormConfig {
  title: string;
  description?: string;
  fields: FormField[];
  submitLabel: string;
  successMessage: string;
}

export interface SearchSuggestion {
  title: string;
  type: string;
  url: string;
  category: string;
  icon: string;
}

export interface SearchConfig {
  placeholder: string;
  suggestions: SearchSuggestion[];
}

export interface SiteConfig {
  brand: BrandConfig;
  navigation: NavigationConfig;
  footer: FooterConfig;
  forms: {
    newsletter: FormConfig;
    contact: FormConfig;
    ketNoi: FormConfig;
  };
  search: SearchConfig;
}

// ============================================
// CONTENT TYPES
// ============================================

export interface HeroData {
  eyebrow?: string;
  headline: string;
  description?: string;
  ctaPrimary?: {
    label: string;
    href: string;
    variant: 'primary' | 'outline' | 'text' | 'secondary';
  };
  ctaSecondary?: {
    label: string;
    href: string;
    variant: 'primary' | 'outline' | 'text' | 'secondary';
  };
  badge?: string;
  backgroundImage?: string;
}

export interface QuickLink {
  icon: string;
  iconBg: string;
  label: string;
  desc: string;
  href: string;
}

export interface SectionData {
  id: string;
  label?: string;
  title: string;
  headline?: string;
  description?: string;
  badge?: string;
  bgColor?: string;
  filterTabs?: string[];
  filterCategories?: Record<string, string[]>;
}

export interface PageData {
  hero: HeroData;
  quickLinks?: QuickLink[];
  sections?: SectionData[];
  filterTabs?: string[];
  filterCategories?: Record<string, string[]>;
  eventStatusTabs?: string[];
  tabs?: string[];
}

// ============================================
// PRODUCT TYPES
// ============================================

export interface ProductSpecs {
  weight?: string[];
  origin?: string;
  harvestSeason?: string;
  materials?: string[];
  dimensions?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  stars: 3 | 4 | 5;
  category: string;
  subCategory?: string;
  province: string;
  district?: string;
  producer: string;
  producerType: 'Hợp tác xã' | 'Doanh nghiệp' | 'Hộ gia đình' | 'Cá nhân';
  description: string;
  ingredients?: string[];
  process?: string[];
  certifications?: string[];
  awards?: string[];
  nutritionInfo?: string;
  storage?: string;
  price?: string;
  images: string[];
  videoUrl?: string;
  specs?: ProductSpecs;
  seo: SEOData;
  relatedProducts?: string[];
  location?: LocationData;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductFilter {
  stars?: (3 | 4 | 5)[];
  category?: string[];
  province?: string[];
  producerType?: string[];
}

// ============================================
// STORY/ARTICLE TYPES
// ============================================

export type StoryType = 'feature' | 'story' | 'video' | 'interview' | 'photo-essay';

export interface Story {
  id: string;
  slug: string;
  type: StoryType;
  category: string;
  subCategory?: string;
  province: string;
  district?: string;
  headline: string;
  subHeadline?: string;
  excerpt: string;
  content: string; // HTML content
  author: string;
  authorRole?: string;
  publishedDate: string; // ISO date
  readTime: string;
  tags: string[];
  featuredImage: string;
  images?: string[];
  videoUrl?: string;
  duration?: string; // for video type
  relatedProducts?: string[];
  relatedStories?: string[];
  seo: SEOData;
  location?: LocationData;
  createdAt?: string;
  updatedAt?: string;
}

// ============================================
// CRAFT VILLAGE TYPES
// ============================================

export interface CraftVillageProduct {
  name: string;
  image: string;
  description: string;
  price: string;
}

export interface CraftVillageExperience {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

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
  products: CraftVillageProduct[];
  experiences: CraftVillageExperience[];
  images: string[];
  highlights: string[];
  contact: {
    phone: string;
    email: string;
    website?: string;
    address: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  seo: SEOData;
  createdAt?: string;
  updatedAt?: string;
}

// ============================================
// ECOSYSTEM JOURNEY TYPES
// ============================================

export interface EcosystemJourneyItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface EcosystemJourney {
  id: string;
  slug: string;
  name: string;
  region: string;
  description: string;
  shortDescription: string;
  duration: string;
  difficulty: string;
  bestTime: string;
  provinces: string[];
  highlights: string[];
  itinerary: EcosystemJourneyItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  priceFrom: string;
  priceTo: string;
  images: string[];
  seo: SEOData;
  createdAt?: string;
  updatedAt?: string;
}

// ============================================
// TOUR TYPES
// ============================================

export interface TourItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface Tour {
  id: string;
  slug: string;
  name: string;
  region: string;
  province: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  highlights: string[];
  itinerary: TourItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  images: string[];
  seo: SEOData;
  createdAt?: string;
  updatedAt?: string;
}

// ============================================
// DESTINATION TYPES
// ============================================

export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  category: string;
  province: string;
  district?: string;
  productsCount: number;
  storiesCount: number;
  description?: string;
  image: string;
  images?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  highlights?: string[];
  mapData?: MapSVGData;
  seo: SEOData;
  location?: LocationData;
}

export interface MapSVGData {
  svg: string;
  viewBox: string;
  paths: MapPath[];
  markers: MapMarker[];
}

export interface MapPath {
  id: string;
  d: string;
  fill: string;
  stroke?: string;
  strokeWidth?: number;
  name: string;
  data?: Record<string, string | number>;
}

export interface MapMarker {
  id: string;
  x: number;
  y: number;
  label: string;
  type: 'destination' | 'craft-village' | 'product' | 'story';
  data?: Record<string, string | number>;
}

export interface DestinationStats {
  destinations: number;
  craftVillages: number;
  regions: string[];
}

// ============================================
// NEWS & EVENTS TYPES
// ============================================

export type NewsCategory = 
  | 'chinh-sach-co-che' 
  | 'hoat-dong-xuc-tien' 
  | 'ocop-dia-phuong' 
  | 'chinh-sach' 
  | 'thi-truong';

export type EventStatus = 'sap-dien-ra' | 'dang-dien-ra' | 'da-ket-thuc';

export type EventType = 
  | 'hoi-cho' 
  | 'trien-lam' 
  | 'workshop' 
  | 'dao-tao' 
  | 'hoi-nghi' 
  | 'webinar';

export interface NewsArticle {
  id: string;
  slug: string;
  category: NewsCategory;
  title: string;
  headline?: string; // Legacy support
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  excerpt: string;
  content: string; // HTML content
  author: string;
  authorRole?: string;
  thumbnail?: MediaAsset;
  image?: string; // Legacy support
  isBreaking?: boolean;
  isFeatured?: boolean;
  viewCount?: number;
  readTime: string;
  tags: string[];
  seo: SEOData & {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
  };
  location?: LocationData;
  createdAt?: string;
  updatedAtField?: string; // Renamed to avoid conflict
}

export interface EventLocation {
  venue: string;
  address?: string;
  province: string;
  district?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Event {
  id: string;
  slug: string;
  type: EventType;
  status: EventStatus;
  title: string;
  headline?: string; // Legacy support
  startDate: string; // ISO date
  endDate?: string; // ISO date
  startTime?: string; // HH:mm
  endTime?: string; // HH:mm
  location: EventLocation;
  // Flattened location properties for backward compatibility with components
  venue: string;
  address?: string;
  province: string;
  district?: string;
  shortDescription: string;
  description: string; // HTML content
  // Alias for description for backward compatibility
  content: string;
  thumbnail?: MediaAsset;
  image?: string; // Legacy support
  isOnline?: boolean;
  isFree?: boolean;
  organizer?: string;
  contactEmail?: string;
  contactPhone?: string;
  registrationUrl?: string;
  website?: string;
  targetAudience?: string;
  speakers?: string[];
  capacity?: number;
  tags?: string[];
  seo: SEOData & {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
  };
  locationData?: LocationData; // Legacy support
  createdAt?: string;
  updatedAt?: string;
}

// ============================================
// UI COMPONENT TYPES
// ============================================

export interface TabConfig {
  id: string;
  label: string;
  count?: number;
  icon?: string;
  href?: string;
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
  icon?: string;
}

export interface SearchResult {
  id: string;
  type: 'news' | 'event' | 'product' | 'story' | 'destination' | 'chu-the' | 'integration' | 'ocop-now';
  title: string;
  excerpt: string;
  url: string;
  image?: string;
  category?: string;
  date?: string;
  tags?: string[];
}

export interface SearchSuggestionsResponse {
  suggestions: SearchResult[];
  query: string;
  total: number;
}

// ============================================
// REGISTRATION TYPES
// ============================================

export interface RegistrationSubmission {
  eventSlug: string;
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  position?: string;
  notes?: string;
  consentMarketing?: boolean;
  consentPrivacy: boolean;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  registrationId?: string;
  confirmationCode?: string;
  errors?: Record<string, string>;
}

// ============================================
// CHU THE (ENTITIES) TYPES
// ============================================

export interface ChuThe {
  id: string;
  slug: string;
  tenChuThe: string;
  loaiHinh: 'Hợp tác xã' | 'Doanh nghiệp' | 'Hộ gia đình' | 'Cá nhân';
  tenSanPham: string;
  hangSao: '5 Sao' | '4 Sao' | '3 Sao';
  nganhHang: string;
  tinhThanh: string;
  nguoiDaiDien: string;
  email: string;
  phone: string;
  website?: string;
  moTa: string;
  hinhAnh?: string[];
  certifications?: string[];
  awards?: string[];
  location?: LocationData;
  seo: SEOData;
  createdAt?: string;
  updatedAt?: string;
}

// ============================================
// INTEGRATION/EXPORT TYPES
// ============================================

export interface IntegrationArticle {
  id: string;
  slug: string;
  category: 'Xuất khẩu & Thị trường quốc tế' | 'Tiêu chuẩn & Chứng nhận' | 'Chuyển đổi số' | 'OCOP NOW';
  headline: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole?: string;
  date: string; // ISO date
  readTime?: string;
  image?: string;
  tags?: string[];
  seo: SEOData;
}

export interface IntegrationMetrics {
  value: string;
  label: string;
  icon: string;
  color: 'primary' | 'secondary' | 'gold' | 'darkGreen';
}

export interface AnalyticsData {
  title: string;
  data: Array<{
    label: string;
    value: number;
    color: string;
  }>;
}

// ============================================
// OCOP NOW TYPES
// ============================================

export interface OCOPNowItem {
  id: string;
  slug: string;
  type: 'policy' | 'event' | 'market-update' | 'technology' | 'success-story';
  headline: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  source: string;
  tags: string[];
  seo: SEOData;
}

// ============================================
// COMPONENT PROP TYPES
// ============================================

export interface CardProps<T extends { id: string; slug: string }> {
  item: T;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
  className?: string;
  onClick?: () => void;
}

export interface GridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  columns?: { base: number; sm: number; md: number; lg: number; xl: number };
  gap?: string;
  className?: string;
}

export interface FilterProps<T> {
  activeFilters: Partial<T>;
  onFilterChange: (filters: Partial<T>) => void;
  options: Record<keyof T, string[]>;
  className?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
  error?: {
    code: string;
    message: string;
  };
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ============================================
// REVALIDATION TAGS
// ============================================

export const REVALIDATE_TAGS = {
  products: 'products',
  stories: 'stories',
  destinations: 'destinations',
  news: 'news',
  events: 'events',
  chuThe: 'chu-the',
  integration: 'integration',
  ocopNow: 'ocop-now',
  siteConfig: 'site-config',
  search: 'search',
} as const;

export type RevalidateTag = (typeof REVALIDATE_TAGS)[keyof typeof REVALIDATE_TAGS];

// ============================================
// ROUTE PARAMS
// ============================================

export interface RouteParams {
  slug: string;
  category?: string;
  tag?: string;
  page?: string;
}

export interface SearchParams {
  q?: string;
  category?: string;
  stars?: string;
  province?: string;
  type?: string;
  status?: string;
  page?: string;
  limit?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}