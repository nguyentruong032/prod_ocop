export interface Media {
  id: string;
  alt?: string | null;
  caption?: string | null;
  credit?: string | null;
  filename: string;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  url?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Province {
  id: string;
  name: string;
  slug: string;
  code: string;
  region: 'BAC' | 'TRUNG' | 'NAM';
  sortOrder?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'contributor';
  fullName?: string | null;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SEOData {
  title?: string | null;
  description?: string | null;
  ogImage?: Media | string | null;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  kind: 'NEWS' | 'STORY' | 'INTEGRATION';
  topic?: string | null;
  _status?: 'draft' | 'published';
  publishedAt?: string | null;
  coverImage?: Media | string | null;
  excerpt?: string | null;
  province?: Province | string | null;
  isFeatured?: boolean | null;
  isArchived?: boolean | null;
  readingMinutes?: number | null;
  videoUrl?: string | null;
  content?: Record<string, unknown> | null;
  seo?: SEOData | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  _status?: 'draft' | 'published';
  publishedAt?: string | null;
  startAt: string;
  endAt?: string | null;
  location?: string | null;
  coverImage?: Media | string | null;
  excerpt?: string | null;
  province?: Province | string | null;
  isFeatured?: boolean | null;
  agenda?: Record<string, unknown> | null;
  seo?: SEOData | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  slug: string;
  docNumber: string;
  signer?: string | null;
  issuingAuthority?: string | null;
  level?: string | null;
  issuedDate?: string | null;
  effectiveDate?: string | null;
  pdfFile?: Media | string | null;
  _status?: 'draft' | 'published';
  isFeatured?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Producer {
  id: string;
  name: string;
  slug: string;
  type?: 'COOPERATIVE' | 'ENTERPRISE' | 'HOUSEHOLD' | null;
  province?: Province | string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  avatar?: Media | string | null;
  coverImage?: Media | string | null;
  bio?: string | null;
  _status?: 'draft' | 'published';
  isFeatured?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  stars: 3 | 4 | 5;
  category: 'NONG_SAN_THUC_PHAM' | 'DUOC_LIEU_SUC_KHOE' | 'THU_CONG_MY_NGHE' | 'KHAC';
  province?: Province | string | null;
  producer?: Producer | string | null;
  coverImage?: Media | string | null;
  gallery?: Array<{ image: Media | string; id?: string }> | null;
  excerpt?: string | null;
  _status?: 'draft' | 'published';
  isFeatured?: boolean | null;
  seo?: SEOData | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Destination {
  id: string;
  title: string;
  slug: string;
  kind: 'DESTINATION' | 'CRAFT_VILLAGE' | 'ECO_TOUR';
  province?: Province | string | null;
  coverImage?: Media | string | null;
  excerpt?: string | null;
  _status?: 'draft' | 'published';
  isFeatured?: boolean | null;
  seo?: SEOData | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface LandingPage {
  id: string;
  key: string;
  heading: string;
  intro?: string | null;
  heroImage?: Media | string | null;
  pinned?: Array<{
    relationTo: 'articles' | 'products' | 'destinations' | 'events';
    value: Article | Product | Destination | Event | string;
  }> | null;
  body?: Record<string, unknown> | null;
  seo?: SEOData | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface SiteSetting {
  id?: string;
  siteName?: string | null;
  tagline?: string | null;
  hotline?: string | null;
  contactEmail?: string | null;
  address?: string | null;
  socialLinks?: Array<{
    platform: string;
    url: string;
    id?: string;
  }> | null;
  editorialContact?: {
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    hours?: string | null;
  } | null;
  announcement?: {
    enabled?: boolean | null;
    text?: string | null;
    link?: string | null;
  } | null;
  defaultOgImage?: Media | string | null;
  footerNote?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export type HeroBlock = {
  blockType: 'hero';
  eyebrow?: string | null;
  heading: string;
  subheading?: string | null;
  image?: Media | string | null;
  primaryCta?: { label: string; href: string } | null;
  secondaryCta?: { label: string; href: string } | null;
};

export type QuickLinksBlock = {
  blockType: 'quickLinks';
  items?: Array<{
    icon?: string | null;
    label: string;
    description?: string | null;
    href: string;
    id?: string;
  }> | null;
};

export type KpiStatsBlock = {
  blockType: 'kpiStats';
  items?: Array<{
    value: string;
    label: string;
    note?: string | null;
    id?: string;
  }> | null;
};

export type FeaturedNewsBlock = {
  blockType: 'featuredNews';
  heading?: string | null;
  mode?: 'auto' | 'pinned' | null;
  pinned?: Array<Article | string> | null;
  limit?: number | null;
};

export type FeaturedProductsBlock = {
  blockType: 'featuredProducts';
  heading?: string | null;
  mode?: 'auto' | 'pinned' | null;
  pinned?: Array<Product | string> | null;
  limit?: number | null;
};

export type FeaturedStoriesBlock = {
  blockType: 'featuredStories';
  heading?: string | null;
  mode?: 'auto' | 'pinned' | null;
  pinned?: Array<Article | string> | null;
  limit?: number | null;
};

export type FeaturedDestinationsBlock = {
  blockType: 'featuredDestinations';
  heading?: string | null;
  mode?: 'auto' | 'pinned' | null;
  pinned?: Array<Destination | string> | null;
  limit?: number | null;
};

export type IntegrationPillarsBlock = {
  blockType: 'integrationPillars';
  items?: Array<{
    title: string;
    description?: string | null;
    href: string;
    image?: Media | string | null;
    id?: string;
  }> | null;
};

export type CtaBannerBlock = {
  blockType: 'ctaBanner';
  heading: string;
  text?: string | null;
  cta?: { label: string; href: string } | null;
  image?: Media | string | null;
};

export type RichTextBlock = {
  blockType: 'richText';
  content?: Record<string, unknown> | null;
};

export type HomeBlock =
  | HeroBlock
  | QuickLinksBlock
  | KpiStatsBlock
  | FeaturedNewsBlock
  | FeaturedProductsBlock
  | FeaturedStoriesBlock
  | FeaturedDestinationsBlock
  | IntegrationPillarsBlock
  | CtaBannerBlock
  | RichTextBlock;

export interface Home {
  id?: string;
  layout?: HomeBlock[] | null;
  seo?: SEOData | null;
  createdAt?: string;
  updatedAt?: string;
}
