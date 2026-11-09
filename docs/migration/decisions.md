# Migration Decisions Log — OCOP Việt Nam Điện tử

**Started:** 2026-11-09  
**Updated:** 2026-11-09  
**Phase:** 0 (Inventory) — Gate 0 pending

---

## 1. Contradictions Between Prompt & Actual Source

| # | Prompt Claim | Actual Finding | Resolution |
|---|---|---|---|
| 1 | Demo files at `v6-demo/` | **No `v6-demo/` folder exists**; all 21 `index.html` + `shared-header.html` + `shared-footer.html` are at **repo root** | Logged. Source of truth = repo root. `v6-demo/` branch will be created from current state for comparison. |
| 2 | 21 HTML pages | Confirmed: **21 `index.html` pages** + 2 shared = 23 HTML files total | Count matches. |
| 3 | `content.js` navigation (6 items) is source | `shared-header.html` has **4 items + CTA**; `content.js` has 6 items (different) | **Decision:** Use `shared-header.html` as single source. Discard `content.js` nav config. |
| 4 | All pages have consistent zone titles | **4 zone landings use wrong taglines**:<br>• `/tin-tuc-su-kien`: "Báo chí Văn hóa & Di sản Bản địa"<br>• `/san-pham-ocop`: "Tạp chí tri thức bản địa & di sản nông thôn"<br>• `/cau-chuyen-ocop`: "Báo chí Điện tử Phi Thương mại"<br>• `/diem-den-du-lich`: "Báo chí Điện tử Phi Thương mại" (same as stories) | Must fix in Next.js zone layouts. Source of truth: zone name + consistent brand "OCOP Việt Nam Điện tử". |
| 5 | No duplicate script loads mentioned | **5 pages have duplicate `<script src>`**:<br>• `san-pham-ocop/index.html`: navigation-active ×2<br>• `duoc-lieu.../index.html`: navigation-active ×2<br>• `gui-bai-ho-so-ocop/index.html`: content.js×2, content-loader×2, navigation-active×2, interactive-demo×2<br>• `cau-chuyen-ocop/index.html`: content.js, content-loader, interactive-demo, navigation-active ×2<br>• `diem-den-du-lich/index.html`: content.js, content-loader, interactive-demo, navigation-active ×2 | Will be eliminated by Next.js module system (single import per package). |
| 6 | `gui-bai-ho-so-ocop` is a normal page | **No header/footer**, uses `../index.html` relative paths, KHỐI order out of sequence (02,05,03,04,06) | In Next.js: will get Header/Footer via layout. Relative paths → absolute `/`. KHỐI order preserved as DOM order. |
| 7 | All images in `/images/` | **Only `placeholder.jpg` (8 KB) exists locally**; 216 `<img>` tags (252 refs) all point to `lh3.googleusercontent.com` | Must migrate images to local `/public/images/` or use Vercel Image Optimization with remote patterns. |

---

## 2. Decisions Made During Phase 0

| ID | Decision | Rationale | Gate 0 Confirmation |
|----|---|---|---|
| D01 | **Target architecture: Next.js Multi-Zones (not Module Federation)** | Prompt requirement; official Next.js docs for installed version will guide `assetPrefix`/`basePath`/`rewrites()`. | ☐ |
| D02 | **5 zones**: `web-main`, `web-news`, `web-products`, `web-stories`, `web-destinations` | Maps 1:1 to current top-level folders. `web-main` = gateway via `rewrites()`. | ☐ |
| D03 | **6 shared packages**: `ui`, `tokens`, `content`, `seo`, `icons`, `config` | Separation of concerns; `ui` = Header/Footer/Card/etc; `tokens` = design tokens; `content` = typed data; `seo` = meta generators; `icons` = Material Symbols wrapper; `config` = Tailwind/ESLint/TSConfig. | ☐ |
| D04 | **Cross-zone navigation = `<a>`; intra-zone = `next/link`** | Multi-Zones requirement; encapsulated in `AppLink` component. | ☐ |
| D05 | **Header/Footer = Server Components in `packages/ui`** | SSR by default; only `NavLink` (active state) uses `"use client"` with `usePathname()`. | ☐ |
| D06 | **Delete `navigation-active.js`** | Replaced by `NavLink` client component. No client-side header fetch needed. | ☐ |
| D07 | **Single navigation source: `packages/content/src/navigation.ts`** | Based on `shared-header.html` (4 items + CTA). Discard `content.js` 6-item config. | ☐ |
| D08 | **Dependency rules: apps → packages only** | Enforced with `eslint-plugin-import` boundaries. No packages→apps, no cross-zone imports. | ☐ |
| D09 | **Server Components by default** | `"use client"` only for: filters, tabs, forms, map, video, search modal, reading progress, event tabs. | ☐ |
| D10 | **Defer 5 detail page types to "cần duyệt thiết kế"** | No static HTML exists today; will create minimal SSR layouts in respective zones once design approved. | ☐ |
| D11 | **Consolidate 7+ inline Tailwind configs → single `packages/config/tailwind.ts`** | Each page has slightly different config (colors, darkMode, fonts). Design tokens in `packages/tokens`. | ☐ |
| D12 | **Self-host Material Symbols via `next/font` or `packages/ui/fonts`** | Currently loaded via `/fonts/material-symbols.css` + WOFF2 on every page. | ☐ |
| D13 | **Migrate all remote images (`lh3.googleusercontent.com`) to local/CDN** | 216 `<img>` tags, no control over caching/optimization/alt. Use Vercel Image Optimization with `remotePatterns` or download to `/public/images/`. | ☐ |
| D14 | **Add critical SEO baseline to every page** | `SEOMeta` component generating: `<title>`, meta description, canonical, OG, Twitter, JSON-LD. | ☐ |
| D15 | **Fix missing `<h1>` on 4 content pages** | `/san-pham-theo-sao`, `/chinh-sach-va-co-che`, `/ocop-dia-phuong`, `/xuc-tien-thuong-mai` need H1 from content data. | ☐ |
| D16 | **Create `v6-demo` branch preserving current root state** | For before/after comparison after migration. Not a folder — a git branch. | ☐ |
| D17 | **Git repo not initialized yet** | Must `git init` before Phase 1 commits. Phase commits per phase with clear messages. | ☐ |
| D18 | **Next.js version not chosen yet** | Need version to read official Multi-Zones docs for `assetPrefix`/`basePath`/`rewrites()` config. | ☐ |

---

## 3. Open Questions for Gate 0 — **DECIDED**

| # | Question | Decision | Rationale |
|---|---|---|---|
| Q1 | **Next.js version?** | **15.x latest** | Latest Multi-Zones features, React 19, App Router mặc định |
| Q2 | **Package manager?** | **pnpm 9.x+** | Prompt requirement |
| Q3 | **Turborepo version?** | **2.x latest** | Prompt requirement |
| Q4 | **Image migration strategy?** | **Hybrid** | Tải hero/tiêu điểm → `/public/images/`, ảnh còn lại dùng Vercel `remotePatterns` |
| Q5 | **TypeScript strictness?** | **`strict: true` + path aliases** | Type safety cho packages |
| Q6 | **ESLint boundaries?** | **Custom rule: apps→packages only** | Enforce architecture |
| Q7 | **CSS strategy?** | **Tailwind v4 CSS-first (@theme)** | Modern, design tokens qua CSS variables |
| Q8 | **Fonts** | **`next/font` (Be Vietnam Pro, Noto Serif) + self-host Material Symbols** | Performance, no CORS |
| Q9 | **Analytics** | **Defer** | Not Phase 1 scope |
| Q10 | **i18n** | **Không thêm `[locale]`** | Route phẳng 1:1 source, thêm sau nếu cần |
| Q11 | **v6-demo branch** | **SKIP** | User: "không cần tạo nhánh v6-demo không dùng đến nó" |

---

## 4. Tailwind Config Variants Inventory (for consolidation)

| Page | Notable Differences |
|---|---|
| `index.html` | Full color palette, `darkMode: "class"`, `fontFamily: { sans: ["Be Vietnam Pro"], serif: ["Noto Serif"] }` |
| `tin-tuc-su-kien/index.html` | Subset of colors, same fonts |
| `san-pham-ocop/index.html` | Extended colors for star ratings, same fonts |
| `cau-chuyen-ocop/index.html` | Video-related color extensions |
| `diem-den-du-lich/index.html` | Map-related colors, inline SVG styles |
| `tim-kiem/index.html` | Search-specific utilities |
| `gui-bai-ho-so-ocop/index.html` | Form-focused, minimal config |
| *(all pages)* | Each embeds `tailwind.config = { ... }` in `<script>` — **7+ unique variants** |

**Action:** Extract design tokens (colors, spacing, typography, shadows) → `packages/tokens`. Single `tailwind.config.ts` in `packages/config` extending tokens.

---

## 5. Content.js → packages/content Migration Plan

| `content.js` Key | Target in `packages/content/src/` | Notes |
|---|---|---|
| `siteConfig.brand` | `brand.ts` | Brand name, logo, tagline |
| `siteConfig.navigation` | **DISCARD** | Use `navigation.ts` from `shared-header.html` |
| `siteConfig.footer` | `footer.ts` | Footer links, social, copyright |
| `siteConfig.forms` | `forms/submit.ts` | Submit page form config |
| `siteConfig.search` | `search/suggestions.ts` | Search suggestions array |
| `pages.home` | `pages/home.ts` | Hero, quick links, featured sections |
| `pages.news.*` | `pages/news/*.ts` | Landing, policy, trade, local |
| `pages.products.*` | `pages/products/*.ts` | Landing, agri, med, star, craft |
| `pages.stories.*` | `pages/stories/*.ts` | Landing, culture, media, journey |
| `pages.destinations.*` | `pages/destinations/*.ts` | Landing, map, ecotour, craft |
| `pages.search` | `pages/search.ts` | Search page config |
| `pages.submit` | `pages/submit.ts` | Submit page config |

**Type safety:** Each file exports typed constants (no `eval`, no string paths).

---

## 6. Interactive-Demo.js → Client Components Mapping

| `interactive-demo.js` Function | Target Client Component | Zone |
|---|---|---|
| `initTabFilters` | `TabSwitch`, `CategoryFilterChips`, `EventStatusTabs`, `ProductFilterTabs` | products, stories, news, submit |
| `initSearchPage` | `SearchFilterChips`, `SearchModal`, `SearchInput` | main (search), header (global) |
| `initReadingProgress` | `ReadingProgress` | detail pages (future) |
| `initLazyLoad` | `LazyImage` (wrapper) | all |
| `initInteractiveMap` | `InteractiveMap` | destinations |
| `initForms` | `FormValidation` | submit, newsletter |
| `initEventStatusTabs` | `EventStatusTabs` | news/trade |
| `initCardClicks` | Handled by `AppLink` + `Card` onClick | all |
| `renderSuggestions` | `SearchModal` suggestions | header, search |
| `initSmoothScroll` | CSS `scroll-behavior: smooth` | global |

---

## 7. Sign-off

| Role | Name | Date | Signature |
|---|---|---|---|
| Migration Lead | | | |
| Design Owner | | | |
| SEO Lead | | | |
| Tech Lead | | | |

---

*End of decisions log. Update as new decisions are made during Gates 1–5.*