# AGENTS.md — QUY ƯỚC CHO AI VIẾT & REVIEW CODE (Gemini, Claude)

Đặt file này ở **gốc repo**. Mọi phiên làm việc với AI phải nạp file này + đúng 1 tài liệu tác vụ (`01-FE.md` hoặc `02-CMS-BE.md`), không nạp cả bộ để tránh loãng ngữ cảnh.

## 1. Dự án trong 6 dòng
- Web tạp chí OCOP Việt Nam. **1 repo, 1 app Next.js 16 + Payload 3.x + PostgreSQL**, đứng sau Nginx.
- Website ở `src/app/(frontend)`, CMS ở `/admin` (do Payload sinh, nằm `src/app/(payload)`).
- Dữ liệu đọc bằng **Payload Local API** (không gọi HTTP nội bộ).
- Ngôn ngữ giao diện Phase 1: **chỉ tiếng Việt**; mã nguồn, tên biến, commit: **tiếng Anh**; nhãn admin, thông báo lỗi, copy giao diện: **tiếng Việt có dấu**.
- Hạn go-live 07/12/2026. Phạm vi: `00-TONG-QUAN.md` mục 1. **Không làm việc ngoài phạm vi Phase 1.**
- Nội dung bài viết lưu **10 năm, không xóa cứng**.

## 2. Cấu trúc thư mục (bắt buộc)
```text
src/
├── payload.config.ts
├── collections/        # 1 file / collection, tên PascalCase: Articles.ts
├── globals/            # Home.ts, SiteSettings.ts
├── blocks/             # home/*.ts  (block trang chủ), richtext/*.ts (block trong bài)
├── access/             # isAdmin.ts, isEditorOrAbove.ts, isOwnDraft.ts ...
├── hooks/              # revalidate.ts, audit.ts, slugify.ts, searchIndex.ts, ...
├── endpoints/          # submit.ts, track.ts, search.ts, suggest.ts, health.ts
├── jobs/               # purgeSubmissions.ts
├── migrations/         # sinh bằng payload migrate:create, COMMIT vào git
├── seed/               # provinces.json, landing-pages.ts, seed.ts
├── lib/                # cache.ts, paths.ts, normalize.ts, turnstile.ts, media-loader.ts
├── components/
│   ├── ui/             # nguyên tử dùng chung: ArticleCard, ProductCard, FilterBar, Pagination ...
│   ├── layout/         # Header, Footer
│   ├── sections/       # khối trang chủ (HeroSection, KpiStatsSection ...)
│   └── features/       # news/ products/ stories/ destinations/ submission/ search/
├── app/
│   ├── (payload)/      # do Payload sinh — KHÔNG sửa tay trừ khi tài liệu yêu cầu
│   └── (frontend)/[locale]/...
├── i18n/vi.json, en.json
└── payload-types.ts    # sinh tự động — KHÔNG sửa tay
deploy/                 # docker-compose, nginx, scripts
docs/                   # các file md này
```

## 3. Quy tắc code
1. TypeScript `strict`. **Cấm `any`**; dùng kiểu sinh từ `payload-types.ts`. Chạy `pnpm payload generate:types` sau mỗi lần đổi schema.
2. Mỗi `page.tsx` ≤ 80 dòng: đọc `params`/`searchParams` → gọi hàm trong `lib/data/*` → truyền vào component. Trong Next 16 `params`, `searchParams`, `cookies()`, `headers()` đều **async**, phải `await`.
3. **Cấm hardcode nội dung** (bài, sản phẩm, số liệu, địa danh) trong `.tsx/.ts`. Chữ cố định của giao diện (nút, nhãn) đặt trong `i18n/vi.json`.
4. **Cấm HTML thô từ người dùng**: không `dangerouslySetInnerHTML` với dữ liệu CMS/gửi bài. Nội dung bài render từ Lexical JSON bằng `RichText` component.
5. Mặc định **Server Component**. Chỉ `'use client'` cho danh sách ở `01-FE.md` mục 9.
6. Đường dẫn công khai của mỗi bản ghi tạo qua **một hàm duy nhất** `lib/paths.ts` (`getDocPath(collection, doc)`); dùng chung cho link, sitemap, search-index, revalidate.
7. Mọi truy vấn dữ liệu công khai đi qua `lib/data/*` bọc `getCached(...)` (xem `01-FE.md` mục 5). Không gọi `payload.find` trực tiếp trong component.
8. Ảnh: chỉ dùng `MediaImage` (next/image + loader imgproxy). **Cấm `<img>` thuần và mọi URL `lh3.googleusercontent.com`.** Không có link `.html`.
9. Phân quyền **luôn kiểm ở `access` của collection/field** (BE), không dựa vào ẩn nút ở giao diện.
10. Production/staging: `db.push = false`; thay đổi schema bằng **migration** được commit.
11. Bí mật chỉ qua biến môi trường; không commit `.env`. Không log email/SĐT/IP người gửi.
12. Không thêm thư viện mới nếu chưa cần; thêm thì ghi lý do vào PR. Không nâng major Next/Payload/React trong dự án.
13. Lỗi trả cho người dùng bằng tiếng Việt, không lộ stack trace.

## 4. Mẫu collection (BE phải tuân theo)
- Có `labels` và `admin.group`, `admin.useAsTitle`, `admin.defaultColumns` tiếng Việt.
- Nội dung công khai: `versions: { drafts: { autosave: true, schedulePublish: true }, maxPerDoc: 50 }`.
- `access`: dùng helper trong `src/access/`; `delete: () => false` cho nội dung công khai.
- Hooks theo thứ tự: `beforeValidate` (slug) → `beforeChange` (tính trường phụ) → `afterChange` (revalidate, search-index, audit) → `afterDelete` (chỉ với collection được phép xóa).
- Mọi trường bắt buộc khi xuất bản dùng `required: true` (Payload chỉ ép khi publish, nháp được bỏ qua).

## 5. Quy trình 1 tác vụ với AI
1. Người điều phối chọn **1 lát cắt** (`00-TONG-QUAN.md` mục 6) và 1 mục trong tài liệu `01`/`02`.
2. Prompt mẫu cho **Gemini (viết code):**
   ```text
   Bạn là dev của repo OCOP. Đọc AGENTS.md và mục <X> trong <file>.
   Nhiệm vụ: <mô tả 1–2 câu>. Chỉ sửa các file: <danh sách>.
   Không thêm tính năng ngoài mục này. Sau khi xong, chạy:
   pnpm lint && pnpm type-check && pnpm payload generate:types && pnpm build
   và báo kết quả + danh sách file đã đổi.
   ```
3. Dev chạy thử **trên trình duyệt** theo tiêu chí nghiệm thu của mục đó (không chỉ tin vào AI).
4. Prompt mẫu cho **Claude (review):**
   ```text
   Review diff sau theo docs/99-CHECKLIST-VERIFY.md, các mục: <A,B,...>.
   Liệt kê lỗi theo mức Chặn / Nên sửa / Gợi ý, kèm file:dòng. Không viết lại code nếu không được yêu cầu.
   ```
5. Merge khi: CI xanh + không còn mục "Chặn" + dev xác nhận nghiệm thu bằng tay.

## 6. Điều AI không được tự làm
- Xóa hoặc đổi tên collection/field đã có dữ liệu thật mà không có migration.
- Tắt `access`, bật `overrideAccess: true` trong code phục vụ request của người dùng (chỉ dùng trong job/endpoint đã được tài liệu cho phép).
- Tắt kiểm tra TypeScript/ESLint (`ignoreBuildErrors`, `eslint-disable` hàng loạt).
- Chạy lệnh phá dữ liệu (`DROP`, `TRUNCATE`, `rm -rf /data`).
- Sinh ảnh/nội dung giả đưa vào production; dữ liệu giả chỉ nằm trong `seed/` và gắn nhãn `[DEV]`.

## 7. Lệnh thường dùng
```bash
pnpm dev                              # chạy local
pnpm payload generate:types           # sinh kiểu
pnpm payload migrate:create <ten>     # tạo migration
pnpm payload migrate                  # áp migration
pnpm payload jobs:run --cron "*/1 * * * *"   # chạy job nền (container jobs)
pnpm seed                             # nạp dữ liệu mẫu/ban đầu
pnpm lint && pnpm type-check && pnpm build
```
