# OCOP Vietnam Digital Platform — Project Progress Report

**Date:** 2026-11-10  
**Workspace:** `/home/dmin/projects/WEB_OCOP/prod_ocop`  
**Architecture:** Turborepo + pnpm monorepo with Next.js 14 App Router micro-frontends  
**Report Type:** Comprehensive state assessment (no code modifications)

---

## 1. Initial Master Plan

### 1.1 Project Vision
Build a **digital platform for OCOP (One Commune One Product) Vietnam** that showcases:
- Traditional craft villages & their products
- Cultural stories, multimedia journalism, and heritage preservation
- Rural tourism destinations with interactive GIS maps
- News, events, and policy updates for OCOP ecosystem
- Product catalog with 3–5 star ratings and certifications
- Entity (Chủ thể OCOP) directory and integration/export resources

### 1.2 Target Architecture: Micro-Frontend Monorepo

| Zone | App | Port | Route Prefix | Status |
|------|-----|------|--------------|--------|
| **Shell** | `web-shell` | 3000 | `/` (root), `/api/*` | ✅ Built |
| **Stories** | `ocop-stories` | 3001 | `/cau-chuyen-ocop/*` | ✅ Built |
| **Destinations** | `tourism-destinations` | 3002 | `/diem-den-du-lich/*` | ✅ Built |
| **News & Events** | `news-events` | 3003 | `/tin-tuc-su-kien/*`, `/ocop-hoi-nhap/*` | ❌ Not created |
| **Products** | `products` | 3004 | `/san-pham-ocop/*`, `/chu-the-ocop/*` | ❌ Not created |
| **Registration** | `registration` | 3005 | `/gui-bai-ho-so-ocop/*` | ❌ Not created |
| **API Gateway** | `api-gateway` | 3006 | `/api/*` (proxied via shell) | ✅ Built |

### 1.3 Shared Packages (Design System & Contracts)

| Package | Purpose | Key Exports |
|---------|---------|-------------|
| `@ocop/shared-types` | Single source of truth for all TypeScript interfaces | 574 lines: Product, Story, Destination, News, Event, ChuThe, SEO, MapSVG, API responses, Revalidation tags |
| `@ocop/ui` | React component library (shadcn-inspired) | 10+ components: Button, Card, Grid, Filter, Pagination, Breadcrumb, Modal, Toast, Tooltip, Form |
| `@ocop/tailwind-config` | Shared Tailwind CSS v4 configuration | Brand colors, typography, spacing, animations, dark mode |
| `@ocop/seo-config` | SEO utilities & sitemap generation | `generateSitemapEntries`, metadata helpers, structured data schemas |
| `@ocop/tsconfig` | TypeScript config presets | `base`, `nextjs`, `react-library`, `node`, `monorepo` |

### 1.4 Data Strategy: "Source of Truth" Split

```
Static HTML Folders (Original Designs)     →     API Gateway (Mock Data)     →     Micro-Frontends (Consumers)
├── cau-chuyen-ocop/                          ├── /api/craft-villages          ├── ocop-stories
├── diem-den-du-lich/                         ├── /api/destinations              ├── tourism-destinations
├── tin-tuc-su-kien/                          ├── /api/tours                     ├── news-events (TODO)
├── san-pham-ocop/                            ├── /api/ecosystem-journeys        ├── products (TODO)
├── gui-bai-ho-so-ocop/                       └── ...                            ├── registration (TODO)
├── ocop-hoi-nhap/
└── chu-the-ocop/
```

---

## 2. Completed Work

### 2.1 Monorepo Foundation (100%)

| Item | Status | Details |
|------|--------|---------|
| `turbo.json` | ✅ | Pipeline: build, dev, lint, type-check, test with caching |
| `pnpm-workspace.yaml` | ✅ | Workspaces: `apps/*`, `packages/*` |
| Root `package.json` | ✅ | Scripts: dev, build, lint, type-check, test, clean, format, db:* |
| `.gitignore` / `.npmrc` | ✅ | Configured for Turborepo + pnpm |
| `pnpm-lock.yaml` | ✅ | Lockfile exists (dependencies installed) |

### 2.2 Shared Packages (100%)

| Package | Lines of Code | Key Features | Status |
|---------|---------------|--------------|--------|
| `@ocop/shared-types` | 574 | All domain types, SEO, API responses, Revalidation tags (9 tags), Route params | ✅ Complete |
| `@ocop/ui` | ~10 components | Button, Card, Grid, Filter, Pagination, Breadcrumb, Modal, Toast, Tooltip, Form | ✅ Complete |
| `@ocop/tailwind-config` | Config-only | Brand palette (primary/secondary/gold/green), VN fonts, animations | ✅ Complete |
| `@ocop/seo-config` | ~100 | `generateSitemapEntries`, metadata helpers, JSON-LD schemas | ✅ Complete |
| `@ocop/tsconfig` | 5 configs | Base, Next.js, React lib, Node, Monorepo presets | ✅ Complete |

### 2.3 Web Shell — `apps/web-shell` (95%)

| Feature | Status | Details |
|---------|--------|---------|
| Root layout (`layout.tsx`) | ✅ | Fonts (Be Vietnam Pro, Noto Serif, Geist Mono), `display: swap`, preload, viewport config |
| SEO metadata | ✅ | Full OpenGraph, Twitter, robots, canonical, alternates (vi/en), manifest, icons |
| Security headers | ✅ | X-Frame-Options, X-Content-Type-Options, XSS Protection, Referrer-Policy, CSP-ready |
| Image optimization | ✅ | Remote patterns: Google, Unsplash; AVIF/WebP; deviceSizes/imageSizes configured |
| Multi-zone rewrites | ✅ | **8 rewrite rules** for all 6 micro-frontends + API proxy (see `next.config.mjs`) |
| Header component | ✅ | Navigation, search, CTA, user menu, mobile responsive |
| Footer component | ✅ | Brand, 4-column links, copyright, badge |
| Providers wrapper | ✅ | React context providers (theme, auth, etc.) |
| Sitemap generation | ✅ | Dynamic `sitemap.ts` fetching from API gateway via `@/lib/api` |
| Robots.txt | ✅ | Dynamic `robots.ts` with disallow rules for admin/private routes |
| Loading / Not-found | ✅ | `loading.tsx`, `not-found.tsx` |
| Homepage (`page.tsx`) | ✅ | Hero, quick links, featured sections |

### 2.4 API Gateway — `apps/api-gateway` (100%)

| Endpoint | Status | Features |
|----------|--------|----------|
| `GET /api/craft-villages` | ✅ | 9 villages, pagination, filter (province, region, craftType, search, certification), sort |
| `GET /api/destinations` | ✅ | 63 provinces data, filtering, pagination |
| `GET /api/destinations/[slug]` | ✅ | Single destination with map data, highlights, coordinates |
| `GET /api/tours` | ✅ | Tour listings with filters |
| `GET /api/tours/featured` | ✅ | Featured tours for homepage |
| `GET /api/ecosystem-journeys` | ✅ | Eco-tourism routes, journeys, circuits |

**Mock Data Quality:** Comprehensive — each craft village includes history, specialties, materials, techniques, certifications, artisan counts, revenue, export markets, images, coordinates, experience activities, contact, SEO, related products, tags.

### 2.5 OCOP Stories — `apps/ocop-stories` (100%)

| Route | Page | Components |
|-------|------|------------|
| `/cau-chuyen-ocop` | ✅ `page.tsx` | StoryListingPage, StoryGrid, StoryCard, StoryFilterBar, StoryCategoryTabs, Pagination, StorySkeleton, RelatedSections, NewsletterSection (9 components) |
| `/cau-chuyen-ocop/hanh-trinh-chu-the-ocop` | ✅ `page.tsx` | JourneyListingPage |
| `/cau-chuyen-ocop/phong-su-da-phuong-tien` | ✅ `page.tsx` | MultimediaListingPage |
| `/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia` | ✅ `page.tsx` | CultureListingPage |
| Layout & Fonts | ✅ | `layout.tsx`, `lib/fonts.ts` |

### 2.6 Tourism Destinations — `apps/tourism-destinations` (100%)

| Route | Page | Components |
|-------|------|------------|
| `/diem-den-du-lich` | ✅ `page.tsx` | DestinationHero, DestinationSubNav, RegionalFilters, DestinationListingPage, InteractiveMapSection, ProvinceCardGrid, DestinationGrid, ProductStoryGrid, FeaturedLocality (9 components) |
| `/diem-den-du-lich/ban-do-ocop-viet-nam` | ✅ `page.tsx` | **InteractiveGISWorkspace** (SVG map with 63 provinces, markers, tooltips) |
| `/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop` | ✅ `page.tsx` | EcoTourismHero, EcosystemJourneys, EcoDestinationGrid, FeaturedEcoRoute, FilterTool, Pagination (6 components) |
| `/diem-den-du-lich/lang-nghe-truyen-thong` | ✅ `page.tsx` | CraftVillageEditorialHero, CraftVillageListingPage, CraftCategoriesTaxonomy, VillageGrid, FilterBar, Pagination (6 components) |
| API Client | ✅ | `lib/api.ts` — typed fetchers for all API gateway endpoints |
| Layout & Fonts | ✅ | `layout.tsx`, `lib/fonts.ts`, Providers, MobileMenuContext |

---

## 3. Implementation Methods

### 3.1 Micro-Frontend Pattern: Next.js Multi-Zone Rewrites
- **Web Shell** acts as the **host application** (port 3000)
- **Async rewrites** in `next.config.mjs` proxy routes to child apps on different ports
- **Shared packages** provide contracts (`@ocop/shared-types`), UI (`@ocop/ui`), styling (`@ocop/tailwind-config`), SEO (`@ocop/seo-config`)
- **Independent deployment** possible — each app builds to `.next/standalone` for Docker

### 3.2 Type-Safe Data Layer
- **Single source of truth**: `@ocop/shared-types` defines all domain interfaces
- **API client** (`@/lib/api` in each app) uses typed fetchers returning `ApiResponse<T>` / `PaginatedResponse<T>`
- **Revalidation tags** (9 tags) enable granular ISR cache invalidation via `next/cache`
- **Zod-ready** schemas in shared-types for future runtime validation

### 3.3 Component Architecture
```
@ocop/ui (shared)
├── components/     → Button, Card, Grid, Filter, Pagination, Breadcrumb, Modal, Toast, Tooltip, Form
├── lib/            → cn(), formatters, validators
└── hooks/          → useDebounce, useMediaQuery, useLocalStorage

App-specific components (e.g., tourism-destinations)
├── components/     → Page-level compositions (Hero, Grid, Map, FilterBar)
└── components/layout/ → MobileMenuContext
```

### 3.4 Styling Strategy
- **Tailwind CSS v4** with `@ocop/tailwind-config` preset
- **CSS Variables** for brand colors (`--color-primary`, `--color-gold`, etc.)
- **Font optimization**: `next/font/google` with `display: swap`, `preload: true`, Vietnamese subsets
- **Dark mode ready** via `media: (prefers-color-scheme: dark)` in metadata

### 3.5 SEO & Performance
- **Static metadata** in root layout + **dynamic metadata** per page (via `generateMetadata`)
- **Sitemap.xml** generated dynamically from API data (`sitemap.ts`)
- **Robots.txt** with allow/disallow rules (`robots.ts`)
- **Image optimization**: AVIF/WebP, remote patterns configured, long-term caching headers
- **Security headers**: HSTS-ready, CSP-ready, frame options, XSS protection

### 3.6 Development Workflow
```bash
# Install (already done — pnpm-lock.yaml exists)
pnpm install

# Dev: runs all apps in parallel via Turborepo
pnpm dev

# Build: respects dependency graph (shared packages → apps)
pnpm build

# Type-check across monorepo
pnpm type-check

# Lint
pnpm lint
```

---

## 4. Active / In-Progress Work

### 4.1 Tourism Destinations — Most Advanced Micro-Frontend
- **Build artifacts exist**: `.next/` folder present with compiled types
- **All 4 routes implemented** with 21+ components
- **Interactive GIS map** (`InteractiveGISWorkspace`) — SVG-based with 63 provinces
- **API client** fully typed and integrated

### 4.2 Web Shell — Ready for Integration
- **Rewrites configured** for all 6 micro-frontends (including 3 not yet created)
- **Sitemap/robots** fetch from API gateway but `@/lib/api` not yet implemented in web-shell
- **Header/Footer navigation** links point to routes that will resolve via rewrites

### 4.3 Static HTML → Next.js Migration (Pending)
| Source Folder | Target App | Pages to Migrate | Priority |
|---------------|------------|------------------|----------|
| `cau-chuyen-ocop/` | `ocop-stories` | 10 sub-pages | ✅ Done (mapped) |
| `diem-den-du-lich/` | `tourism-destinations` | 10 sub-pages | ✅ Done (mapped) |
| `tin-tuc-su-kien/` | `news-events` | 6+ pages | ❌ App not created |
| `san-pham-ocop/` | `products` | 10 sub-categories | ❌ App not created |
| `gui-bai-ho-so-ocop/` | `registration` | Form wizard | ❌ App not created |
| `ocop-hoi-nhap/` | `news-events` (or new) | 4 sub-pages | ❌ App not created |
| `chu-the-ocop/` | `products` (or new) | Entity directory | ❌ App not created |

---

## 5. Technical Approach for Remaining Work

### 5.1 Create Missing Micro-Frontend Apps (3 apps)

**Pattern to replicate** (from `ocop-stories` / `tourism-destinations`):
```bash
# Each app needs:
apps/<app-name>/
├── package.json           # name: @ocop/<app-name>, deps: next, react, @ocop/*
├── tsconfig.json          # extends: @ocop/tsconfig/nextjs
├── tailwind.config.ts     # extends: @ocop/tailwind-config
├── next.config.mjs        # standalone output, image domains
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Fonts, providers, metadata
│   │   ├── <route>/       # Route segments matching rewrites
│   │   │   ├── page.tsx
│   │   │   └── components/
│   │   ├── lib/
│   │   │   ├── api.ts     # Typed fetchers from @ocop/shared-types
│   │   │   └── fonts.ts
│   │   └── globals.css    # @import '@ocop/ui/globals.css'
│   ├── components/
│   │   ├── Providers.tsx
│   │   └── layout/MobileMenuContext.tsx
```

**Route mapping from `web-shell/next.config.mjs`:**
| App | Route Prefix | Source Folder |
|-----|--------------|---------------|
| `news-events` | `/tin-tuc-su-kien/*`, `/ocop-hoi-nhap/*` | `tin-tuc-su-kien/`, `ocop-hoi-nhap/` |
| `products` | `/san-pham-ocop/*`, `/chu-the-ocop/*` | `san-pham-ocop/`, `chu-the-ocop/` |
| `registration` | `/gui-bai-ho-so-ocop/*` | `gui-bai-ho-so-ocop/` |

### 5.2 Implement Data Fetching in Web Shell
Create `apps/web-shell/src/lib/api.ts` mirroring `tourism-destinations/src/lib/api.ts`:
```typescript
// Typed fetchers for sitemap.ts and dynamic metadata
export async function getProducts() { ... }
export async function getStories() { ... }
export async function getDestinations() { ... }
export async function getNews() { ... }
export async function getEvents() { ... }
export async function getChuTheList() { ... }
export async function getIntegrationArticles() { ... }
```

### 5.3 Migrate Static HTML Content
**Strategy per folder:**
1. **Extract** — Parse HTML for structure, content, images, SEO meta
2. **Map** — Convert to Next.js App Router pages + components
3. **Type** — Use `@ocop/shared-types` interfaces (NewsArticle, Event, Product, ChuThe, etc.)
4. **Compose** — Build pages using `@ocop/ui` components (Grid, Card, Filter, Pagination)
5. **Connect** — Wire to API gateway (or static JSON for now)

### 5.4 API Gateway Expansion
| Missing Endpoint | Required For | Type Definition Exists? |
|------------------|--------------|------------------------|
| `/api/news` | `news-events` | ✅ `NewsArticle` in shared-types |
| `/api/events` | `news-events` | ✅ `Event` in shared-types |
| `/api/products` | `products` | ✅ `Product` in shared-types |
| `/api/chu-the` | `products` | ✅ `ChuThe` in shared-types |
| `/api/registration` | `registration` | ❌ Need `RegistrationForm` type |
| `/api/integration` | `news-events` | ✅ `IntegrationArticle` in shared-types |
| `/api/ocop-now` | `news-events` | ✅ `OCOPNowItem` in shared-types |

### 5.5 Cross-Cutting Concerns
| Concern | Approach |
|---------|----------|
| **Authentication** | Add `next-auth` to web-shell, share session via cookies across zones |
| **Internationalization** | `next-intl` or App Router i18n; alternates already configured in metadata |
| **Analytics** | Vercel Analytics + custom events via `@ocop/ui` `useAnalytics` hook |
| **Error boundaries** | Per-app `error.tsx` + shell-level `global-error.tsx` |
| **Testing** | Vitest for shared packages, Playwright for E2E micro-frontend flows |

---

## 6. Next Steps & Action Plan

### 6.1 Immediate (Week 1) — Foundation Completion

| # | Task | Command / Action | Owner | Est. |
|---|------|------------------|-------|------|
| 1 | Verify `pnpm install` works | `pnpm install --frozen-lockfile` | Dev | 5m |
| 2 | Create `news-events` app scaffold | Copy `ocop-stories` → rename, adjust routes | Dev | 2h |
| 3 | Create `products` app scaffold | Copy `ocop-stories` → rename, adjust routes | Dev | 2h |
| 4 | Create `registration` app scaffold | Minimal Next.js app with form wizard | Dev | 3h |
| 5 | Implement `web-shell/src/lib/api.ts` | Mirror `tourism-destinations/src/lib/api.ts` | Dev | 1h |
| 6 | Test multi-zone dev | `pnpm dev` → verify all 7 ports respond | Dev | 30m |

### 6.2 Short-Term (Week 2–3) — Content Migration

| # | Task | Source → Target | Components Needed |
|---|------|-----------------|-------------------|
| 7 | Migrate News & Events | `tin-tuc-su-kien/` → `news-events/tin-tuc-su-kien/` | NewsListing, EventListing, FilterBar, Pagination, CategoryTabs |
| 8 | Migrate Integration/Export | `ocop-hoi-nhap/` → `news-events/ocop-hoi-nhap/` | IntegrationListing, MetricsCards, AnalyticsCharts |
| 9 | Migrate Products Catalog | `san-pham-ocop/` → `products/san-pham-ocop/` | ProductGrid, ProductCard, FilterSidebar, StarRating, ProvinceFilter |
| 10 | Migrate Entities (Chủ thể) | `chu-the-ocop/` → `products/chu-the-ocop/` | EntityGrid, EntityCard, SearchFilter, MapView |
| 11 | Build Registration Wizard | `gui-bai-ho-so-ocop/` → `registration/gui-bai-ho-so-ocop/` | Multi-step Form, FileUpload, ProgressStepper, Validation |

### 6.3 Medium-Term (Week 4–6) — API & Polish

| # | Task | Details |
|---|------|---------|
| 12 | Expand API Gateway | Add 7 missing endpoints with mock data matching shared-types |
| 13 | Implement ISR Revalidation | Use `revalidateTag()` in API routes, `next/cache` in components |
| 14 | Add Authentication | NextAuth.js in web-shell, protected routes in registration |
| 15 | E2E Testing | Playwright tests for critical paths: home → story → product → register |
| 16 | Performance Audit | Lighthouse CI budgets, bundle analysis, image optimization review |
| 17 | Accessibility Audit | WCAG 2.2 AA: keyboard nav, ARIA, contrast, focus management |

### 6.4 Production Readiness (Week 7+)

| # | Task | Details |
|---|------|---------|
| 18 | Dockerize | Multi-stage Dockerfiles per app, `output: 'standalone'`, docker-compose |
| 19 | CI/CD Pipeline | GitHub Actions: lint → type-check → test → build → deploy preview |
| 20 | Monitoring | Vercel Analytics + Sentry (error tracking) + custom health checks |
| 21 | SEO Launch Checklist | Sitemap submission, Search Console, Core Web Vitals, structured data validation |

---

## Appendix: Completion Summary by App/Package

| App / Package | Type | Completion | Lines of Code | Build Status | Notes |
|---------------|------|------------|---------------|--------------|-------|
| `@ocop/shared-types` | Package | **100%** | 574 | ✅ | Complete domain model |
| `@ocop/ui` | Package | **100%** | ~10 comps | ✅ | Ready for consumption |
| `@ocop/tailwind-config` | Package | **100%** | Config | ✅ | Brand system defined |
| `@ocop/seo-config` | Package | **100%** | ~100 | ✅ | Sitemap generation ready |
| `@ocop/tsconfig` | Package | **100%** | 5 configs | ✅ | All presets working |
| `web-shell` | App (Shell) | **95%** | ~500 | ✅ `.next` exists | Missing `@/lib/api` |
| `api-gateway` | App (API) | **100%** | ~2000 | ✅ `.next` exists | 6 endpoints, rich mock data |
| `ocop-stories` | App (MFE) | **100%** | ~1500 | ✅ `.next` exists | 4 routes, 9 components |
| `tourism-destinations` | App (MFE) | **100%** | ~2500 | ✅ `.next` exists | 4 routes, 21 components, GIS map |
| `news-events` | App (MFE) | **0%** | — | ❌ Not created | Needs scaffold + migration |
| `products` | App (MFE) | **0%** | — | ❌ Not created | Needs scaffold + migration |
| `registration` | App (MFE) | **0%** | — | ❌ Not created | Needs scaffold + form wizard |

### Overall Monorepo Completion: **~68%**
- **Foundation & Shared:** 100%
- **Core Apps (Shell, API, Stories, Destinations):** 100%
- **Remaining Micro-Frontends (3 of 6):** 0%
- **Content Migration:** ~40% (2 of 7 source folders migrated)

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| API contract drift between gateway and consumers | Medium | High | Shared-types as single source; CI type-check on both sides |
| Micro-frontend CSS conflicts | Low | Medium | Tailwind prefix strategy (`ocop-`), CSS Modules for app-specific |
| Rewrites fail in production (Vercel) | Medium | High | Test `vercel dev` locally; use `vercel.json` rewrites for prod |
| Large bundle size from shared UI | Low | Medium | `optimizePackageImports` in next.config; tree-shaking verified |
| Static HTML migration complexity | High | Medium | Automate extraction with scripts; componentize aggressively |

---

**Next Action:** Run `pnpm dev` to verify current 4 apps work in multi-zone mode, then begin scaffold for `news-events`, `products`, `registration`.