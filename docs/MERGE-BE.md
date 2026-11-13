# KẾ HOẠCH & CHECKLIST HỢP NHẤT FRONTEND VỚI PAYLOAD CMS (BE)

Tài liệu này liệt kê toàn bộ các file, mảng dữ liệu giả, stub typing và thành phần cần dọn dẹp, thay thế hoặc đối chiếu khi hợp nhất mã nguồn Frontend với nhánh Backend Payload CMS (`02-CMS-BE.md`).

---

## 1. Bảng tổng hợp các hạng mục cần xử lý khi Merge

| # | Hạng mục / File | Trạng thái hiện tại ở FE | Hành động khi ghép BE | Mức độ ưu tiên |
|---|---|---|---|---|
| 1 | `src/payload-types.ts` | File tự định nghĩa thủ công tạm thời | **Thay bằng bản BE sinh tự động** qua `pnpm payload generate:types` | Bắt buộc (Chặn build) |
| 2 | `src/types/payload.d.ts` | Stub khai báo module `payload` tạm | **Xóa bỏ hoàn toàn file này** khi cài gói Payload chính thức | Bắt buộc |
| 3 | `src/lib/payload.ts` | Wrapper dynamic import giả lập | **Thay bằng bản BE** gọi `getPayload({ config })` từ `@payloadcms/next` | Bắt buộc |
| 4 | `src/lib/paths.ts` | Ánh xạ bản ghi sang URL duy nhất | **Dùng chung**: BE hooks (`revalidate`, `searchIndex`) phải import hàm này | Bắt buộc đối chiếu |
| 5 | `src/lib/normalize.ts` | Hàm chuẩn hóa tiếng Việt bỏ dấu | **Dùng chung**: Đối chiếu với hàm normalize của BE search index | Bắt buộc đối chiếu |
| 6 | `src/lib/turnstile.ts` | Xác minh Cloudflare Turnstile (có bypass dev) | **Thay bằng bản BE** hoặc siết chặt kiểm tra secret ở production | Quan trọng |
| 7 | `src/app/(frontend)/api/internal/revalidate/route.ts` | Endpoint nhận tag revalidate | **Đối chiếu secret và tag cache** với hook `afterChange`/`afterDelete` của BE | Quan trọng |
| 8 | 3 Route Mock: `/api/public/submissions`, `/track`, `/suggest` | Bản giả lập có đánh dấu `[DEV] MOCK` (chặn 404 prod) | **Xóa bỏ cả 3 file** khi BE mở endpoints tùy biến Payload | Bắt buộc |
| 9 | `src/lib/data/search.ts` | Tìm kiếm in-memory gom từ 6 hàm list | **Dọn dẹp code fallback**: chuyển sang gọi thuần collection `search-index` | Quan trọng |
| 10 | Các mảng `fallback*` trong `src/lib/data/*` và `sections/*` | Dữ liệu giả viết cứng để FE chạy offline | **Xóa bỏ hoặc chuyển vào `seed/`**, trả về mảng rỗng `[]` khi DB chưa có dữ liệu | Quan trọng |
| 11 | Thư mục seed (`seed/` hoặc `src/seed/`) | Dữ liệu mẫu ban đầu | **Đối chiếu schema với BE**, gắn nhãn `[DEV]` cho dữ liệu thử nghiệm | Đề xuất |
| 12 | Các file có `'use client'` ngoài danh sách `01-FE.md` mục 9 | 5–6 file (`Header.tsx`, các `SubNav.tsx`, `SubmissionPageView.tsx`) | **Refactor đưa về Server Component** hoặc tách controller client nhỏ | Nên làm |

---

## 2. Chi tiết từng hạng mục

### 2.1 `src/payload-types.ts`
- **Hiện trạng:** Được tạo tạm thời ở FE để định kiểu cho TypeScript (`Article`, `Product`, `Producer`, `Event`, `LegalDocument`, `Destination`, `Province`, `LandingPage`, `SiteSetting`, `Home`...).
- **Vì sao phải xử lý:** BE có các collection Payload định nghĩa chính thức bằng code. Khi build trên hệ thống BE, các kiểu phải được sinh ra từ chính Payload schema để đảm bảo an toàn kiểu tuyệt đối.
- **Hành động:**
  - Chạy `pnpm payload generate:types` để ghi đè `src/payload-types.ts`.
  - **Đối chiếu tên trường giữa FE và BE:**
    - `Article`: kiểm tra trường `kind` (`NEWS | STORY | INTEGRATION`), `topic`, `marketCode` (`EU | US | JAPAN | CHINA | HALAL`).
    - `Producer`: FE đang dùng `name`, BE `02-CMS-BE.md` mục 2 ghi `title` (kế thừa `commonContentFields`). Cần thống nhất `title` hay `name`.
    - `LegalDocument`: FE đang dùng `docNumber`, BE ghi `documentNumber`.
    - `Destination`: đối chiếu các trường con theo loại: `craftGroup`, `ageYears`, `artisanCount`, `isNationalHeritage` (với `CRAFT_VILLAGE`) và `ecosystem`, `durationDays`, `isFeaturedRoute`, `itinerary` (với `ECO_TOUR`).

### 2.2 `src/types/payload.d.ts`
- **Hiện trạng:** Chứa khai báo tạm `declare module "payload"` và `declare module "@/payload.config"` để TypeScript không báo lỗi thiếu thư viện khi chưa cài `@payloadcms/*`.
- **Vì sao phải xử lý:** Khi BE cài đặt các package Payload thật, file khai báo module stub này sẽ gây xung đột kiểu (type conflict) hoặc làm lu mờ declaration chính thức của Payload.
- **Hành động:** **Xóa bỏ hoàn toàn** file `src/types/payload.d.ts`.

### 2.3 `src/lib/payload.ts`
- **Hiện trạng:** Đang dùng `new Function("modulePath", "return import(modulePath)")` để import động Payload và trả về wrapper `PayloadLocalClient`.
- **Vì sao phải xử lý:** Đây chỉ là shim chạy trong môi trường FE khi chưa kết nối Database PostgreSQL. Khi chạy production với Payload, code cần gọi Payload Local API thật với kết nối DB pooling.
- **Hành động:** **Thay bằng bản BE**:
  ```ts
  import { getPayload } from 'payload'
  import config from '@/payload.config'

  export const getPayloadClient = async () => {
    return getPayload({ config })
  }
  ```

### 2.4 `src/lib/paths.ts`
- **Hiện trạng:** Khai báo hàm `getDocPath(collection, doc, locale = 'vi')` tạo URL công khai duy nhất cho từng loại nội dung dựa trên `slug` và `kind`.
- **Vì sao phải xử lý:** Theo `01-FE.md` mục 7 và `02-CMS-BE.md` mục 8.1, hàm này là quy chuẩn duy nhất cho cả FE (render link, sitemap, breadcrumb) và BE (hook đồng bộ bảng `search-index`, hook revalidate cache).
- **Hành động:** **Giữ nguyên và dùng chung**. Đảm bảo phía BE hook import đúng từ `@/lib/paths`. Kiểm tra hàm không được phụ thuộc vào quan hệ (depth) để chạy an toàn ở cả hook `depth = 0`.

### 2.5 `src/lib/normalize.ts`
- **Hiện trạng:** Khai báo hàm `normalize(text)` chuyển đổi ký tự tiếng Việt có dấu, ký tự `đ/Đ` thành không dấu dạng thường để so khớp chuỗi.
- **Vì sao phải xử lý:** Phục vụ chức năng tìm kiếm không dấu (`tra tan cuong` -> `Trà Tân Cương`). Phía BE dùng hàm này trong hook `syncSearchIndex` để sinh trường `titleNorm`, `excerptNorm`, `bodyNorm`.
- **Hành động:** **Giữ nguyên và dùng chung**. Chạy unit test kiểm chứng tính nhất quán giữa FE và BE.

### 2.6 `src/lib/turnstile.ts`
- **Hiện trạng:** Xác minh token Cloudflare Turnstile với điều kiện nếu không có `TURNSTILE_SECRET_KEY` thì tự động bỏ qua để thuận tiện test offline.
- **Vì sao phải xử lý:** Trong môi trường production, việc bỏ qua Turnstile khi thiếu biến môi trường sẽ tạo lỗ hổng cho spam bot gửi bài hàng loạt.
- **Hành động:**
  - Thay bằng bản BE hoặc cập nhật: bắt buộc kiểm tra `TURNSTILE_SECRET_KEY` ở production (`process.env.NODE_ENV === 'production'`).
  - Đảm bảo biến môi trường `TURNSTILE_SECRET_KEY` đã được cấu hình trên server deploy.

### 2.7 `src/app/(frontend)/api/internal/revalidate/route.ts`
- **Hiện trạng:** Nhận request POST/GET kèm `secret` và các `tags` hoặc `path` để gọi `revalidateTag` / `revalidatePath`.
- **Vì sao phải xử lý:** Cần đồng bộ cơ chế bảo mật (secret key) với các hook `afterChange` và `afterDelete` trong các collection của Payload BE.
- **Hành động:**
  - Đối chiếu tên biến môi trường (ví dụ `REVALIDATE_SECRET` hoặc `INTERNAL_API_SECRET`).
  - Kiểm tra các tag được hook Payload bắn sang: `articles`, `article:${slug}`, `products`, `product:${slug}`, `destinations`, `events`, `producers`, `globals`.

### 2.8 Ba Route API Mock (`/api/public/*`)
- **Danh sách file:**
  1. `src/app/(frontend)/api/public/submissions/route.ts`
  2. `src/app/(frontend)/api/public/submissions/track/route.ts`
  3. `src/app/(frontend)/api/public/search/suggest/route.ts`
- **Hiện trạng:** Đã được gắn cờ `// [DEV] MOCK: xóa khi ghép BE-4` ở đầu file và trả về HTTP 404 khi chạy ở `NODE_ENV === 'production'`.
- **Vì sao phải xử lý:** Theo kiến trúc `02-CMS-BE.md` mục 7.2 và 8.2, các endpoint này do Payload CMS phụ trách thông qua cấu hình `endpoints` trong `payload.config.ts` (ví dụ `src/endpoints/submit.ts`, `src/endpoints/track.ts`, `src/endpoints/suggest.ts`). Nếu giữ các route handler này của Next.js App Router sẽ gây xung đột đường dẫn hoặc bypass quyền xử lý của Payload.
- **Hành động:** **Xóa bỏ cả 3 file route này** khi BE đã đăng ký các endpoint tương ứng trong Payload config.

### 2.9 `src/lib/data/search.ts`
- **Hiện trạng:** Hỗ trợ truy vấn bảng `search-index` khi có Payload, nhưng có khối fallback lớn tự động gọi 6 hàm `list*` để gom dữ liệu và tìm kiếm in-memory.
- **Vì sao phải xử lý:** Tìm kiếm in-memory gây chậm và tốn RAM trên server production khi lượng bản ghi lớn.
- **Hành động:** Dọn bỏ đoạn mã gom dữ liệu in-memory fallback. Chuyển sang gọi thuần túy collection `search-index` thông qua Payload Local API hoặc PostgreSQL trigram search.

---

## 3. Danh sách các mảng dữ liệu Fallback (kết quả Grep)

Dưới đây là danh sách đầy đủ các file và vị trí đang định nghĩa mảng dữ liệu giả (`fallback*`) trong mã nguồn:

### 3.1 Trong các hàm đọc dữ liệu (`src/lib/data/`)
1. **`src/lib/data/articles.ts:27`**: `fallbackArticles: Article[]` (18 bài viết phân loại `NEWS`, `STORY`, `INTEGRATION`).
2. **`src/lib/data/events.ts:23`**: `fallbackEvents: Event[]` (4 sự kiện xúc tiến thương mại).
3. **`src/lib/data/legal-docs.ts:22`**: `fallbackLegalDocs: LegalDocument[]` (5 văn bản quy phạm pháp luật).
4. **`src/lib/data/products.ts:37`**: `fallbackProducts: Product[]` (12 sản phẩm OCOP từ 3 đến 5 sao).
5. **`src/lib/data/producers.ts:24`**: `fallbackProducers: Producer[]` (8 hồ sơ chủ thể OCOP).
6. **`src/lib/data/destinations.ts:38`**: `fallbackDestinations: Destination[]` (10 điểm đến, làng nghề và tour sinh thái).
7. **`src/lib/data/globals.ts`**:
   - `fallbackSettings: SiteSetting` (thông tin tòa soạn, hotline, email, mạng xã hội).
   - `fallbackHome: Home` (cấu hình các block trang chủ).
   - `fallbackProvinces: Province[]` (danh sách 63 tỉnh thành).
   - `fallbackLandingPages: Record<string, LandingPage>` (dữ liệu 21 landing page).

### 3.2 Trong các Section Trang chủ (`src/components/sections/`)
1. **`src/components/sections/FeaturedNewsSection.tsx:10`**: `fallbackArticles`
2. **`src/components/sections/FeaturedProductsSection.tsx:10`**: `fallbackProducts`
3. **`src/components/sections/FeaturedStoriesSection.tsx:13`**: `fallbackStories`
4. **`src/components/sections/FeaturedDestinationsSection.tsx:10`**: `fallbackDestinations`

> **Hành động:** Khi BE đã seed database PostgreSQL đầy đủ, xóa bỏ các mảng fallback này trong `src/lib/data/*` và trả về `docs: []` nếu database rỗng. Các section trang chủ sẽ nhận trực tiếp dữ liệu từ props do Server Component truyền vào.

---

## 4. Kiểm tra thư mục Seed (`seed/` hoặc `src/seed/`)
- **Hiện trạng:** Repo hiện tại chưa có thư mục `src/seed/` nội bộ.
- **Hành động khi ghép BE:**
  - Tận dụng các dữ liệu mẫu đã được soạn thảo kỹ lưỡng trong các mảng `fallback*` ở trên để đưa vào file seed chính thức của BE (`src/seed/seed.ts`).
  - Gắn nhãn `[DEV]` cho tất cả các bản ghi mẫu theo đúng quy ước `AGENTS.md` mục 6 để phân biệt với dữ liệu sản xuất thật.

---

## 5. Rà soát các file có `'use client'` ngoài danh sách `01-FE.md` mục 9

Theo bảng quy ước tại **mục 9 của `01-FE.md`**, chỉ có 7 nhóm component sau đây được phép sử dụng directive `'use client'`:
1. `UrlFilterBarClient`
2. `SearchModalClient`
3. `SubmissionFormClient`
4. `TrackingFormClient`
5. `ReadingProgressClient`
6. `VideoEmbedClient`
7. `ImageLightboxClient` / `ProductGalleryClient`

### Danh sách các file hiện có `'use client'` nằm ngoài danh mục trên:

| File | Lý do hiện tại dùng `'use client'` | Đề xuất giải pháp refactor khi Merge |
|---|---|---|
| **1. `src/components/layout/Header.tsx`** | Quản lý state mở/đóng mobile menu drawer, state mở modal tìm kiếm (`isSearchOpen`), và hiệu ứng background khi cuộn trang. | Tách nút menu mobile và nút mở tìm kiếm thành một client wrapper nhỏ (ví dụ `HeaderClientControls.tsx`), đưa phần lớn `Header.tsx` về Server Component thuần. |
| **2. `src/components/features/submissions/SubmissionPageView.tsx`** | Quản lý state tab kích hoạt (`activeTab: "submit" \| "track"`). | Có thể chuyển sang quản lý tab qua URL query param `?tab=submit` (Server Component) hoặc giữ lại dưới dạng composite client component chứa 2 form client con. |
| **3. `src/components/features/news/NewsSubNav.tsx`** | Sử dụng hook `usePathname()` để highlight tab menu con đang active. | Chuyển thành Server Component tương tự như [DestinationSubnav.tsx](file:///home/dmin/projects/WEB_OCOP/prod_ocop/src/components/features/destinations/DestinationSubnav.tsx) (nhận prop `activeTab` từ page truyền vào). |
| **4. `src/components/features/integration/IntegrationSubNav.tsx`** | Sử dụng hook `usePathname()` để highlight tab active. | Chuyển thành Server Component nhận prop `activeTab`. |
| **5. `src/components/features/stories/StoriesSubNav.tsx`** | Sử dụng hook `usePathname()` để highlight tab active. | Chuyển thành Server Component nhận prop `activeTab`. |
| **6. `src/components/features/products/ProductsSubNav.tsx`** | Sử dụng hook `usePathname()` để highlight tab active. | Chuyển thành Server Component nhận prop `activeTab`. |

---

## 6. Checklist nghiệm thu khi hoàn tất Hợp nhất (Merge DoD)

- [ ] 1. `pnpm payload generate:types` chạy không lỗi và sinh ra `src/payload-types.ts` chuẩn từ DB schema.
- [ ] 2. Không còn file stub `src/types/payload.d.ts` trong repo.
- [ ] 3. Xóa bỏ 3 route mock tại `src/app/(frontend)/api/public/` và kiểm tra endpoint Payload xử lý đúng.
- [ ] 4. Mọi truy vấn `lib/data/*` kết nối trực tiếp đến PostgreSQL qua Payload Local API với `overrideAccess: false` và `locale: 'vi'`.
- [ ] 5. Kiểm tra hook `revalidate` của BE kích hoạt đúng tag và xóa cache thành công trong $\le 5$ giây sau khi Publish bài.
- [ ] 6. Tìm kiếm tiếng Việt không dấu (`tra tan cuong`) trả về đúng bản ghi có dấu trên PostgreSQL pg_trgm.
- [ ] 7. Chạy `pnpm lint && pnpm type-check && pnpm build` đạt kết quả xanh (0 error, 0 warning).
