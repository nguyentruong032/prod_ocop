# Page Inventory — OCOP Việt Nam Điện tử → Next.js Multi-Zones Migration

**Generated:** 2026-11-09  
**Source:** 21 static `index.html` pages + `shared-header.html` + `shared-footer.html` at repo root (no `v6-demo/` folder exists).  
**Scope:** Phase 0 — full inventory before Gate 0 approval. No app code written.

---

## 1. Route Mapping Table

| Route cũ (static) | Route mới (Next.js) | Zone | Khối (theo thứ tự DOM) | Dữ liệu cần | Client component | Ghi chú SEO / Risk |
|---|---|---|---|---|---|---|
| `/index.html` | `/` | web-main | 1. Hero (KHỐI 02)<br>2. Cổng khám phá nhanh (KHỐI 03)<br>3. Tin tức & Sự kiện (KHỐI 04)<br>4. Sản phẩm OCOP (KHỐI 05)<br>5. Câu chuyện OCOP (KHỐI 06)<br>6. Điểm đến & Du lịch (KHỐI 07)<br>7. OCOP Hội nhập (KHỐI 08) | `OCOP_CONTENT.pages.home` | – | **Title OK.** No meta description, no canonical, no OG. 9 remote images (lh3.googleusercontent.com). Repeats Google Fonts. |
| `/tin-tuc-su-kien/index.html` | `/tin-tuc-su-kien` | web-news | 1. Hero & Điều hướng (KHỐI 02)<br>2. Tin & Sự kiện tiêu điểm (KHỐI 03)<br>3. Lịch sự kiện xúc tiến TM (KHỐI 04)<br>4. Tin tức dòng chảy & Bộ lọc (KHỐI 05) | `pages.news.landing` + filter config | `FilterChips` (KHỐI 05) | **Title zone name wrong:** "Báo chí Văn hóa & Di sản Bản địa" (should match web-news). No meta desc / canonical / OG. 10 remote images. |
| `/tin-tuc-su-kien/chinh-sach-va-co-che/index.html` | `/tin-tuc-su-kien/chinh-sach-va-co-che` | web-news | 1. Kho Văn bản Quy phạm (Interactive Document Repository)<br>2. Dòng chảy Tin tức & Phân tích (6 Editorial Cards) | `pages.news.policy` | `Select` (jurisdiction dropdown) | No H1. No meta desc / canonical / OG. 10 remote images. |
| `/tin-tuc-su-kien/xuc-tien-thuong-mai/index.html` | `/tin-tuc-su-kien/xuc-tien-thuong-mai` | web-news | 1. Lead Editorial Feature<br>2. 4 Event Cards (3 status badges)<br>3. Filter Controls<br>4. 6 Editorial Cards Grid | `pages.news.trade` | `EventStatusTabs` (filter) | No meta desc / canonical / OG. 10 remote images. |
| `/tin-tuc-su-kien/ocop-dia-phuong/index.html` | `/tin-tuc-su-kien/ocop-dia-phuong` | web-news | 1. Section Header<br>2. 6-Card Editorial Grid (regions)<br>3. Department Portal & Dossier Reception | `pages.news.local` | – | **No H1.** No meta desc / canonical / OG. 10 remote images. |
| `/san-pham-ocop/index.html` | `/san-pham-ocop` | web-products | 1. Hero & Điều hướng (KHỐI 02)<br>2. Sản phẩm tiêu điểm 5 sao (KHỐI 03)<br>3. Lối tắt 4 nhóm danh mục (KHỐI 04)<br>4. Bộ lọc đa chiều & Lưới sản phẩm (KHỐI 05)<br>5. Câu chuyện sản phẩm liên quan (KHỐI 06) | `pages.products.landing` + 4 category groups | `ProductFilterTabs` (KHỐI 05), `SearchInput` (8 matches) | **Title zone name wrong:** "Tạp chí tri thức bản địa..." No meta desc / canonical / OG. 18 remote images. **DUPLICATE script src** (content.js ×1, content-loader ×1, navigation-active ×2). |
| `/san-pham-ocop/nong-san-va-thuc-pham/index.html` | `/san-pham-ocop/nong-san-va-thuc-pham` | web-products | 1. Bento Grid 4 Tiêu Điểm<br>2. 12 Product Cards (CARD 1–12) | `pages.products.agri` | – | No meta desc / canonical / OG. 17 remote images. |
| `/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe/index.html` | `/san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe` | web-products | 1. Bento Grid for National Treasures (Card 2,3)<br>2. Ký sự & Nghiên cứu (3 Story Cards)<br>3. Bản tin Tòa soạn (Newsletter) | `pages.products.med` | – | **No H1** (missing). **Duplicate `<html lang="vi">`** (line 3 & 138). No meta desc / canonical / OG. 19 remote images. **DUPLICATE script src** (navigation-active ×2). |
| `/san-pham-ocop/san-pham-theo-sao/index.html` | `/san-pham-ocop/san-pham-theo-sao` | web-products | 1. Thống kê Metric Cards<br>2. Dấu ấn OCOP 5 Sao<br>3. Lưới 12 Product Cards<br>4. Ký sự Di sản | `pages.products.star` | `Select` (sort dropdown) | **No H1.** No meta desc / canonical / OG. 19 remote images. |
| `/san-pham-ocop/thu-cong-my-nghe/index.html` | `/san-pham-ocop/thu-cong-my-nghe` | web-products | 1. Decorative Floating Card<br>2. Bento Curated Showcase (Lead + 11 Cards) | `pages.products.craft` | – | No meta desc / canonical / OG. 18 remote images. |
| `/cau-chuyen-ocop/index.html` | `/cau-chuyen-ocop` | web-stories | 1. Hero & Điều hướng (KHỐI 02)<br>2. Câu chuyện tiêu điểm (KHỐI 03)<br>3. Văn hóa & Tinh hoa bản địa (KHỐI 04)<br>4. Hồ sơ Chủ thể OCOP (KHỐI 05)<br>5. Không gian Video/Multimedia (KHỐI 06)<br>6. Danh sách Câu chuyện mới (KHỐI 07) | `pages.stories.landing` | `VideoPlayer` (KHỐI 06), `TabFilters` (onclick×5) | **Title zone name wrong:** "Báo chí Điện tử Phi Thương mại". No meta desc / canonical / OG. No `<img>` in HTML (loaded via JS). **DUPLICATE script src** (content.js, content-loader, interactive-demo, navigation-active ×2). |
| `/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia/index.html` | `/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia` | web-stories | 1. Tiêu Điểm Ký Sự Di Sản (Heritage Cover)<br>2. Bản Đồ Văn Hóa & Không Gian Tri Thức<br>3. Dòng Chảy Bài Viết & Filter (data-category×5)<br>4. Chân Dung Nghệ Nhân<br>5. Bản Tin Tòa Soạn | `pages.stories.culture` | `CategoryFilterChips` (data-category×5) | No meta desc / canonical / OG. 14 remote images. |
| `/cau-chuyen-ocop/phong-su-da-phuong-tien/index.html` | `/cau-chuyen-ocop/phong-su-da-phuong-tien` | web-stories | 1. Hero Chuyên đề<br>2. Rạp Chiếu Phim Tài liệu (Cinema Player)<br>3. Podcast "Tiếng Nói Từ Đất Mẹ" (3 cards)<br>4. Phóng sự Ảnh Tương Tác (Photo Essays)<br>5. Thư Viện Video (Filter Tabs + 6 Video Cards) | `pages.stories.media` | `VideoTabs` (video filter), `CinemaPlayer` | No meta desc / canonical / OG. 16 remote images. |
| `/cau-chuyen-ocop/hanh-trinh-chu-the-ocop/index.html` | `/cau-chuyen-ocop/hanh-trinh-chu-the-ocop` | web-stories | 1. Hero: Khởi nghiệp Từ Đất Mẹ<br>2. Section Header<br>3. 6 Cards (Card 1–6)<br>4. Newsletter Section | `pages.stories.journey` | – | No meta desc / canonical / OG. 7 remote images. |
| `/diem-den-du-lich/index.html` | `/diem-den-du-lich` | web-destinations | 1. Header 2 tầng (inline, KHỐI 01)<br>2. Hero & Điều hướng (KHỐI 02)<br>3. Bản đồ OCOP Tương tác (KHỐI 03)<br>4. Điểm đến tiêu điểm (KHỐI 04)<br>5. Làng nghề & Du lịch sinh thái (KHỐI 05)<br>6. Sản phẩm & Câu chuyện gần vùng đất (KHỐI 06)<br>7. Footer (KHỐI 08) | `pages.destinations.landing` | `InteractiveMap` (KHỐI 03) | **Title zone name wrong:** "Báo chí Điện tử Phi Thương mại" (same as stories). No meta desc / canonical / OG. No `<img>` in HTML (map is SVG). **DUPLICATE script src** (content.js, content-loader, interactive-demo, navigation-active ×2). |
| `/diem-den-du-lich/ban-do-ocop-viet-nam/index.html` | `/diem-den-du-lich/ban-do-ocop-viet-nam` | web-destinations | 1. 6-Card Editorial Grid (Hà Nội, Thái Nguyên, Quảng Nam, Đắk Lắk, Bến Tre, Cà Mau) | `pages.destinations.map` | – | No meta desc / canonical / OG. 9 remote images. |
| `/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop/index.html` | `/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop` | web-destinations | 1. Hero Card + 3 Secondary (Bento)<br>2. Main Lead Feature (8 cols)<br>3. 9 Cards (Card 1–9) | `pages.destinations.ecotour` | – | No meta desc / canonical / OG. 17 remote images. |
| `/diem-den-du-lich/lang-nghe-truyen-thong/index.html` | `/diem-den-du-lich/lang-nghe-truyen-thong` | web-destinations | 1. Editorial Hero + 3 Spotlight Cards<br>2. Filter & Search Bar<br>3. 9 Deep Dossier Cards (Bát Tràng, Quất Động, Ngũ Xã, Mỹ Nghiệp, Đồng Xâm, Kim Bồng, Non Nước, Thuận Hưng, Sa Đéc) | `pages.destinations.craft` | `FilterChips` (Filter & Search Bar) | No meta desc / canonical / OG. 10 remote images. |
| `/tim-kiem/index.html` | `/tim-kiem` | web-main | 1. Đầu trang Tìm kiếm & Chip Lọc (KHỐI 02)<br>2. Danh sách Kết quả & Trạng thái rỗng (KHỐI 03)<br>3. Search Modal Overlay (KHỐI 04) | `pages.search` | `SearchFilterChips`, `SearchModal`, `SearchInput` | **NO `<title>` TAG.** No meta desc / canonical / OG. 3 remote images. |
| `/gui-bai-ho-so-ocop/index.html` | `/gui-bai-ho-so-ocop` | web-main | 1. Hero & Điều hướng (KHỐI 02)<br>2. Khu Vực Biểu Mẫu 2 Tab (KHỐI 05) — **out of order**<br>3. Ý kiến Bạn đọc (KHỐI 03)<br>4. Quy trình 3 Bước (KHỐI 04)<br>5. Thông tin Tòa soạn (KHỐI 06) | `pages.submit` | `TabSwitch` (2 tabs), `FormValidation` (input×9, select×2, textarea×2) | **NO HEADER / FOOTER.** Uses `../index.html` relative paths. **DUPLICATE script loads** (content.js×2, content-loader×2, navigation-active×2, interactive-demo×2). No meta desc / canonical / OG. |
| `/404/index.html` | `/404` | web-main | 1. Trang lỗi 404 (KHỐI TRANG LỖI)<br>2. 6 Quick-link Cards to zones | – | – | Title OK. No meta desc / canonical / OG. No images. |

---

## 2. Deferred Detail Pages — "CẦN DUYỆT THIẾT KẾ"

| Route mới (proposed) | Zone | Layout note |
|---|---|---|
| `/san-pham-ocop/[slug]` | web-products | Minimal layout: Hero (product name, star rating, province), Image gallery, Specs table, Story section, Related products. **Awaiting design approval.** |
| `/cau-chuyen-ocop/[slug]` | web-stories | Minimal layout: Hero (title, author, date, read time), Cover image, Article body (rich text), Author bio, Related stories. **Awaiting design approval.** |
| `/diem-den-du-lich/[slug]` | web-destinations | Minimal layout: Hero (destination name, province, tags), Map embed, Highlights grid, Itinerary, Products & Stories from region. **Awaiting design approval.** |
| `/tin-tuc-su-kien/tin/[slug]` | web-news | Minimal layout: Hero (headline, category, date, author), Cover, Article body, Tags, Related news/events. **Awaiting design approval.** |
| `/tin-tuc-su-kien/su-kien/[slug]` | web-news | Minimal layout: Hero (event name, date, location, status badge), Details (agenda, speakers, register), Map, Related. **Awaiting design approval.** |

> **Note:** These 5 detail routes do **not** exist as static HTML today. They will be created as SSR pages in their respective zones with shared `ProductDetail` / `StoryDetail` / `DestinationDetail` / `NewsDetail` / `EventDetail` Server Components once design is approved. No client components needed unless comments/map/video are required.

---

## 3. Proposed Shared Components (packages/ui)

| Component | Purpose | Client? | Used by |
|---|---|---|---|
| `Header` | Server Component; sticky, dropdowns, search trigger, CTA | No (small `NavLink` client for active state) | All pages via layout |
| `Footer` | Server Component; 4-column grid, newsletter, social, copyright | No | All pages via layout |
| `NavLink` | `<a>` for cross-zone, `next/link` within zone; `usePathname()` for active | **Yes** (minimal) | Header |
| `AppLink` | Encapsulates cross-zone vs intra-zone logic | No (wrapper) | All internal links |
| `HeroSection` | Reusable hero with eyebrow, headline, description, CTA | No | All landing pages |
| `SectionHeader` | Title + optional description + filter/action slot | No | All KHỐI sections |
| `Card` (polymorphic) | ProductCard, StoryCard, EventCard, BusinessCard, LocalityCard, IntegrationCard, NewsCard, VideoCard, PolicyCard, HeroCard, SpotlightCard | No | All grids |
| `BentoGrid` | CSS Grid layout for mixed-size cards (2–4 cols) | No | Home, category pages |
| `FilterChips` | Pill-style filter with active state, keyboard accessible | **Yes** | Search, category pages, stories filter |
| `TabSwitch` | 2-tab switch (gui-bai-ho-so-ocop) | **Yes** | Submit page |
| `SearchModal` | Overlay search with suggestions (from content.js) | **Yes** | Header (global), Search page |
| `InteractiveMap` | SVG Vietnam map with province hover/click | **Yes** | Destinations landing |
| `VideoPlayer` / `CinemaPlayer` | Video embed with chapters, captions | **Yes** | Stories multimedia, video library |
| `FormValidation` | Reusable field validation (email, phone, required) | **Yes** | Submit page, newsletter, contact |
| `EventStatusTabs` | 3-status badge filter (upcoming/ongoing/past) | **Yes** | News trade page |
| `CategoryFilterChips` | Data-category filter (van-hoa page) | **Yes** | Stories culture page |
| `ProductFilterTabs` | 4-category depth filter (san-pham landing) | **Yes** | Products landing |
| `ReadingProgress` | Top progress bar for long articles | **Yes** | Detail pages (when built) |
| `LazyImage` | Wrapper for remote images with blur placeholder, `loading="lazy"` | **Yes** | All cards with images |
| `SEOMeta` | Generates `<title>`, meta description, canonical, OG, Twitter, JSON-LD | No | All pages (via layout) |
| `Breadcrumb` | Auto-generated from route segments | No | All non-home pages |
| `Pagination` | Infinite scroll / numbered for grids | **Yes** (if infinite) | Landing grids |

---

## 4. Per-Page SEO Audit Summary

| Issue | Pages affected | Severity |
|---|---|---|
| **Missing `<meta name="description">`** | **ALL 21 pages** | Critical |
| **Missing `rel="canonical"`** | **ALL 21 pages** | Critical |
| **Missing Open Graph / Twitter Cards** | **ALL 21 pages** | Critical |
| **No `<title>` tag** | `/tim-kiem` | Critical |
| **Missing `<h1>`** | `/404` (expected), `/san-pham-theo-sao`, `/chinh-sach-va-co-che`, `/ocop-dia-phuong`, `/xuc-tien-thuong-mai` | High |
| **Inconsistent zone titles** | 4 zone landings use wrong taglines | High |
| **All images remote (lh3.googleusercontent.com)** | 216 `<img>` across pages, 252 refs total | High (perf, SEO, CORS, no control) |
| **Repeated Google Fonts preconnect** | Every page head | Medium |
| **Duplicate script loads** | `san-pham-ocop/index`, `duoc-lieu`, `gui-bai-ho-so-ocop`, `cau-chuyen-ocop/index`, `diem-den-du-lich/index` | Medium |
| **`gui-bai-ho-so-ocop` no header/footer, relative `../` paths** | 1 page | High (broken in Next.js) |
| **DOM order ≠ KHỐI number order** | `gui-bai-ho-so-ocop` (02,05,03,04,06) | Low |
| **Malformed duplicate `<html lang>`** | `duoc-lieu-va-san-pham-suc-khoe` | Medium |
| **No JSON-LD structured data** | All pages | Medium |

---

## 5. Content Data Source Analysis

- **`content.js`** (104 KB) — IIFE assigning `window.OCOP_CONTENT` with:
  - `siteConfig` → brand, **navigation (6 items, WRONG vs header)**, footer, forms, search suggestions
  - `pages.*` → structured data for home, news, products, stories, destinations, search, submit
  - **Discard** `siteConfig.navigation` (6 items) — use `shared-header.html` (4 items + CTA) as single source.
- **`content-loader.js`** (52 KB) — DOM injector using `eval('window.OCOP_CONTENT.'+path)`; targets `[data-render="section-header"]` + `[data-content-key]`. Replace with typed TypeScript modules in `packages/content`.
- **`interactive-demo.js`** (32 KB) — Client interaction groups: `initTabFilters`, `initSearchPage`, `initReadingProgress`, `initLazyLoad`, `initInteractiveMap`, `initForms`, `initEventStatusTabs`, `initCardClicks`, `renderSuggestions`, `initSmoothScroll`. Map 1:1 to Client Components above.
- **`navigation-active.js`** (10 KB) — Fetches `shared-header.html` client-side, marks active by `data-path`. **Delete**; replace with `NavLink` using `usePathname()`.

---

## 6. Image Assets

| Source | Count | Size | Action |
|---|---|---|---|
| `https://lh3.googleusercontent.com/...` | 216 `<img>`, 252 refs | Unknown (external) | **Migrate to local `/public/images/` or optimized CDN (Vercel Image Optimization).** Audit each for alt text, dimensions, WebP/AVIF. |
| `/images/placeholder.jpg` | 1 file, 8 KB | 8 KB | Keep as fallback/blur placeholder. |
| `/logo.png` | 1 file, 66 KB | 66 KB | Optimize to WebP/AVIF, add to `packages/ui/public` or `web-main/public`. |
| `/fonts/MaterialSymbolsOutlined.woff2` + CSS | 2 files | ~ | Self-host via `next/font` or `packages/ui/fonts`. |

---

## 7. Tailwind Config Variants (7+ inline configs)

Each page embeds a slightly different `tailwind.config = { ... }` in `<script>`. Key differences: color palette extensions, `darkMode: "class"`, font families. **Consolidate** into single `packages/tailwind-config` (or `packages/config/tailwind.ts`) with design tokens from `packages/tokens`.

---

## 8. Gate 0 — Decision Required

**Approve to proceed to Phase 1 (Monorepo scaffold + shared packages)?**

- [ ] Route mapping table confirmed
- [ ] Shared component list confirmed
- [ ] Detail pages "cần duyệt thiết kế" acknowledged
- [ ] SEO audit findings accepted as baseline
- [ ] `v6-demo/` path contradiction acknowledged (repo root is source)
- [ ] Content.js navigation discard confirmed (use shared-header)

---

*End of inventory. Ready for Gate 0 review.*