# 00 — TỔNG QUAN DỰ ÁN & KẾ HOẠCH THỰC HIỆN
# DỰ ÁN: CỔNG THÔNG TIN ĐIỆN TỬ OCOP VIỆT NAM (WEB TẠP CHÍ)

- **Phiên bản:** 2.0 (viết lại theo hướng CMS có sẵn: Payload)
- **Ngày:** 2026-11-13 — **Hạn go-live:** 2026-12-07 (Thứ Hai)
- **Người phê duyệt:** Techlead
- **Thay thế:** bộ tài liệu 01–04 phiên bản 1.0 (kiến trúc 6 container, NestJS tự viết, ~150 route, 54 bảng). Bộ cũ chỉ còn dùng làm tham chiếu thiết kế giao diện.

> Đọc theo thứ tự: `00` (file này) → `AGENTS.md` → `01-FE` / `02-CMS-BE` → `03-DEVOPS` → `99-CHECKLIST-VERIFY`.

---

## 1. Mục tiêu & Phạm vi

**Mục tiêu:** đến 07/12/2026, đội Content đăng và quản lý được bài viết trên CMS, công chúng đọc được trên web, tiếng Việt, chạy ổn định trên 1 server.

### 1.1 Trong phạm vi Phase 1 (đến 07/12)

| Nhóm | Hạng mục |
|---|---|
| Trang công khai (chỉ tiếng Việt) | Trang chủ (khối tiêu điểm do Content ghim); Tin tức & Sự kiện (danh sách, chi tiết); Văn bản chính sách (danh sách, PDF); Sản phẩm OCOP & Chủ thể OCOP (lọc theo tỉnh, sao, ngành hàng; chi tiết); Câu chuyện OCOP (video chỉ nhúng); Điểm đến, Làng nghề, Du lịch sinh thái (danh sách, chi tiết); OCOP Hội nhập (chuyên mục bài viết, lọc theo trụ cột); Tìm kiếm; Gửi bài & tra cứu trạng thái |
| SEO nền | Metadata, sitemap, robots, JSON-LD, redirect 301 khi đổi slug, RSS |
| Quản trị (CMS) | Đăng nhập, 3 vai trò, CRUD mọi loại nội dung, trình soạn thảo, thư viện ảnh, bản nháp/xuất bản/xem trước, ghim trang chủ, duyệt/từ chối bài gửi, lịch sử phiên bản, audit log |
| Hạ tầng | 1 server, Docker Compose, CI tối thiểu, staging, sao lưu + diễn tập khôi phục, giám sát uptime |

### 1.2 Ngoài phạm vi Phase 1 (để Phase 2, tháng 12–01)

Bản đồ GIS 34 tỉnh; tiếng Anh (giữ khung kỹ thuật, ẩn giao diện EN); HLS/podcast/photo essay; ma trận tiêu chuẩn quốc tế dạng dữ liệu; 2FA admin; quét virus ClamAV; Meilisearch; newsletter; hreflang & Google News sitemap; bảng ánh xạ 63→34 tỉnh; page builder đầy đủ cho mọi trang.

> **Phải nói rõ với bên đặt hàng:** 07/12 là go-live **Phase 1**. Nếu họ kỳ vọng đủ GIS, tiếng Anh, HLS thì không kịp với 3 người / 24 ngày; cần xác nhận bằng văn bản trước 16/11.

---

## 2. Quyết định Kiến trúc (đã chốt)

| Mã | Quyết định | Lý do |
|---|---|---|
| ARC-01 | **1 repo, 1 ứng dụng Next.js 16** chứa cả website (`(frontend)`) và CMS (`/admin`) | Bỏ 6 port, bỏ BE riêng, bỏ HTTP giữa FE và BE. Cập nhật nội dung ≤ 5 giây vì cùng tiến trình. |
| ARC-02 | **CMS = Payload 3.x** (MIT, chạy trong Next.js, PostgreSQL) thay cho NestJS + admin tự dựng | Có sẵn: admin UI, auth, phân quyền, bản nháp, lịch sử phiên bản, xuất bản hẹn giờ, thư viện media, Local API. Tiết kiệm phần lớn ~150 route + 6 phân hệ admin. |
| ARC-03 | FE đọc dữ liệu bằng **Payload Local API** trong Server Component, bọc cache có gắn tag | Không có REST nội bộ cần viết. Revalidate theo tag ngay trong hook lưu/xuất bản. |
| ARC-04 | **PostgreSQL** là nguồn dữ liệu duy nhất; **tìm kiếm bằng Postgres** (không dấu + trigram) | Không Meilisearch ở Phase 1. |
| ARC-05 | **Lưu file trên đĩa server** (`/data/media`, `/data/private`), qua cấu hình `upload` của Payload; **không dựng S3/MinIO** | Đơn giản; giữ 10 năm dựa vào quy tắc không xóa + sao lưu (mục 4), không phụ thuộc engine S3. |
| ARC-06 | **imgproxy** tối ưu ảnh theo preset cố định, đứng sau Nginx cache | Giữ từ thiết kế cũ. |
| ARC-07 | Nội dung bài lưu **JSON của Lexical** (richText), không lưu HTML thô | Tránh XSS, chuẩn hóa chú thích ảnh/embed. |
| ARC-08 | **Đa ngôn ngữ: bật cấu hình `localization` (vi mặc định, en có sẵn) ngay từ đầu**, giao diện Phase 1 chỉ có `vi` | Thêm ngôn ngữ về sau cho dữ liệu 10 năm phải migrate. Nếu spike S2 thất bại: tắt localization (xem 5.2). |
| ARC-09 | Header, menu chính, Footer **nằm trong code**; thông tin liên hệ/footer/banner thông báo lấy từ global `site-settings` | Menu 6 mục là cố định; chuyên mục con là route cố định. |
| ARC-10 | **Duyệt bài gửi = tạo BẢN NHÁP ở collection đích**, biên tập viên hoàn thiện rồi mới Publish | Thay cho "tự động xuất bản" của bản 1.0 (rủi ro đăng nội dung chưa kiểm). Cần Techlead xác nhận. |
| ARC-11 | **Next.js 16.2+** (không dùng 14/15), Node 22 LTS, Tailwind 4, pnpm | Next 14 đã hết hỗ trợ; Payload ghi nhận hỗ trợ Next 16 từ bản 3.73 và yêu cầu Next ≥ 16.2.0. |
| ARC-12 | Không dùng Redis, Meilisearch, ClamAV, worker riêng ở Phase 1; có 1 container `jobs` chạy lệnh job của Payload (hẹn giờ xuất bản, dọn dẹp) | Giảm số container còn 5. |

---

## 3. Ai làm gì

| Người | Trách nhiệm chính | Phần việc cụ thể |
|---|---|---|
| **BE** | Lõi Payload | Collections, access, hooks, endpoint tùy biến (gửi bài, tra cứu, tìm kiếm), job, migration, seed, test quyền. Tài liệu: `02`. |
| **FE** | Website công khai | Layout, design tokens, toàn bộ route `(frontend)`, component khối trang chủ, SEO, preview. Tài liệu: `01`. |
| **FE + BE** | Tùy chỉnh admin | Nhãn tiếng Việt, nhóm menu admin, trình soạn thảo. Chia theo `02` mục 9. |
| **Techlead/DevOps** | Hạ tầng + chất lượng | Server, Docker, Nginx, CI/CD, staging, backup/restore, giám sát, review bằng Claude theo `99`, hướng dẫn cho Content. Tài liệu: `03`. |

**Quy trình AI:** Gemini viết code theo từng "lát cắt" (mục 6), Claude review theo `99-CHECKLIST-VERIFY.md` trước khi merge. Quy ước chi tiết ở `AGENTS.md`.

---

## 4. Quy tắc Lưu trữ 10 năm (chỉ áp dụng cho **bài viết đã xuất bản**)

"Bài viết" gồm các collection nội dung công khai: `articles`, `events`, `legal-documents`, `products`, `producers`, `destinations` và tệp trong `media` được các bài tham chiếu.

1. **Không xóa cứng** nội dung đã xuất bản: `access.delete = false` cho mọi vai trò (kể cả admin) trên các collection trên. Muốn gỡ bài: chuyển `Unpublish` hoặc đặt `isArchived = true`.
2. Giữ **lịch sử phiên bản** (`versions`), không xóa.
3. Đổi `slug` bài đã xuất bản → tự tạo redirect 301 (collection `redirects`).
4. **Sao lưu 3-2-1** (chi tiết `03` mục 6): DB + `/data/media` + `/data/private`, có bản bất biến theo tháng và diễn tập khôi phục.
5. Mỗi năm xuất 1 bản **JSON + ảnh gốc** để không phụ thuộc phần mềm; lập kế hoạch nâng cấp major của Postgres, Next.js, Payload.
6. **Không thuộc quy tắc 10 năm:** hồ sơ người gửi (`submissions`), log truy cập, audit log chi tiết. Các mục này có thời hạn riêng ở `02` mục 7 và cần pháp chế xác nhận.

---

## 5. Rủi ro & Cổng quyết định

### 5.1 Rủi ro chính

| # | Rủi ro | Giảm thiểu |
|---|---|---|
| R1 | BE chưa quen Payload | Spike 14–15/11; AI hỗ trợ; tài liệu `02` đã chia sẵn cấu hình |
| R2 | Payload 3.x + Next 16 có lỗi chưa gặp | Pin version sau spike; không nâng major giữa dự án |
| R3 | Content chưa có nội dung/ảnh thật | Bắt đầu nhập trên staging từ 28/11; ảnh AI trong tài liệu cũ chỉ để dev |
| R4 | Phạm vi trượt | Cổng G1 (16/11), G2 (25/11); freeze 03/12 |
| R5 | 1 server là điểm lỗi duy nhất | Backup 6 giờ/lần + diễn tập khôi phục + RTO/RPO ghi rõ ở `03` |
| R6 | Dữ liệu cá nhân (Luật 91/2025/QH15 hiệu lực 01/01/2026) | Tối thiểu hóa dữ liệu, ô đồng ý, hạn lưu; pháp chế xác nhận |

### 5.2 Spike bắt buộc (BE làm 14–15/11, FE hỗ trợ S3) — **Cổng G1: tối 16/11**

| Mã | Việc kiểm chứng | Đạt khi | Nếu không đạt |
|---|---|---|---|
| S1 | Dựng Payload + Next 16.2 + Postgres, collection `articles` có drafts + versions + `schedulePublish` | Tạo nháp, publish, hẹn giờ chạy được qua `jobs` | Dùng phương án B (dưới) |
| S2 | **Localization (vi/en) + blocks + drafts + Postgres** cho global `home` | Lưu/đọc nhiều lần, thứ tự block không lệch, đổi tab ngôn ngữ không mất dữ liệu (có issue GitHub từng báo lỗi mảng blocks trên Postgres, chưa biết đã sửa) | Tắt `localization` ở Phase 1; `home` chỉ dùng trường cố định thay vì blocks nếu lỗi nằm ở blocks |
| S3 | Sửa bài → hook `revalidateTag` → trang chủ + trang chi tiết đổi trong ≤ 5 giây | Đạt trên build production (`next start`/standalone), không phải dev | FE/BE chỉnh chữ ký `revalidateTag` của Next 16 (có tham số profile); xem `01` mục 6 |
| S4 | 3 vai trò: contributor chỉ tạo nháp của mình; editor publish; không ai xóa được bài | Test bằng 3 tài khoản thật qua admin **và** qua REST | Sửa `access` |
| S5 | Nạp 5.000 bản ghi giả vào products/articles, đo lọc theo tỉnh/sao và tìm không dấu | p95 < 300 ms trên máy dev | Thêm index (xem `02` mục 8) |
| S6 | Build Docker standalone + chạy `payload migrate` + upload ảnh ra volume + imgproxy đọc được | Ảnh upload hiện qua `/media/img/w640/...` | DevOps xử lý |

**Phương án B (nếu G1 thất bại):** vẫn dùng Payload nhưng bỏ phần lỗi (localization/blocks); nếu chính S1 hỏng thì chuyển Directus hoặc Strapi — cần thiết kế lại `02` (ước tính +4–5 ngày, chỉ chấp nhận nếu quyết định trước 20/11).

### 5.3 Cổng khác

- **G2 — 25/11:** toàn bộ collection + trang danh sách/chi tiết chạy được trên staging. Thiếu → cắt hạng mục theo thứ tự: RSS → Hội nhập sub-route → làng nghề/du lịch sinh thái → lọc nâng cao.
- **Freeze 03/12 (tối):** chỉ sửa lỗi.

---

## 6. Lịch thực hiện (theo ngày)

Làm cả Thứ 7, Chủ nhật. "Lát cắt" = làm trọn từ DB → admin → trang công khai → revalidate, rồi mới nhân bản.

| Ngày | BE | FE | Techlead/DevOps |
|---|---|---|---|
| **T7 14/11 – CN 15/11** | Spike S1, S2, S4, S6; scaffold repo từ `create-payload-app` | Design tokens (Tailwind 4), layout, Header/Footer, `MediaImage`; spike S3 cùng BE | Chốt `AGENTS.md`, repo, CI khung; chuẩn bị checklist server |
| **T2 16/11** | **Cổng G1** | — | Nhận server, cài Docker/Nginx |
| **16–18/11** | Lát cắt 1 `articles` + `media` + `users`/access + audit + redirect | Trang danh sách/chi tiết bài (3 kind), Preview | Server, Postgres, Nginx, staging, imgproxy, CI chạy được |
| **19–20/11** | Seed `provinces`, `tags`; hook revalidate, slug, search-index | Lọc/phân trang, `UrlFilterBar`, tìm kiếm | Backup 6h + giám sát |
| **21–24/11** | `events`, `legal-documents`, `producers`, `products`, `destinations` | Trang tương ứng; `home` (blocks), `landing-pages` | Hardening, headers, rate limit |
| **25/11** | **Cổng G2** | | |
| **26–30/11** | `landing-pages` seed, `site-settings`, global `home`; test quyền | SEO (sitemap, JSON-LD, RSS), a11y, hiệu năng | Staging cho Content; tài liệu hướng dẫn Content |
| **28/11 →** | | | **Content bắt đầu nhập nội dung thật trên staging** |
| **29/11–03/12** | Gửi bài: endpoint, `submissions`, chuyển bản nháp, purge job, track | Form gửi bài, trang tra cứu | Diễn tập restore, load test, rà bảo mật |
| **03/12 tối** | **Freeze** | | |
| **04–06/12** | Sửa lỗi | Sửa lỗi | UAT với Content; chuyển DNS/TLS; checklist go-live |
| **T2 07/12** | Trực | Trực | **Go-live + bàn giao** |

---

## 7. Danh sách việc cần Techlead chốt trước 16/11

1. Xác nhận **Payload** là CMS (hoặc chọn lại nếu spike thất bại).
2. Xác nhận **ARC-10** (duyệt = tạo bản nháp).
3. Loại hình pháp lý của website (báo/tạp chí điện tử có giấy phép hay cổng thông tin cơ quan) → ảnh hưởng nơi đặt máy chủ, lưu nhật ký.
4. Thời hạn lưu hồ sơ người gửi **đã duyệt** (mặc định tài liệu: 24 tháng rồi ẩn danh) — pháp chế xác nhận.
5. Nguồn dữ liệu chính thức **34 tỉnh/thành** để nạp `provinces`.
6. Nhà cung cấp lưu bản sao ngoại vi + bản bất biến theo tháng.
7. Domain, chứng chỉ TLS, danh sách IP/VPN được vào `/admin`.
8. Trình bày xác nhận phạm vi Phase 1 với bên đặt hàng.

---

## 8. Bản đồ chuyển đổi từ bộ tài liệu 1.0

| Bản 1.0 | Bản 2.0 |
|---|---|
| ~150 route BE (NestJS) | Collections Payload (REST/Local API sinh tự động) + 5 endpoint tùy biến |
| 54 bảng, DDL viết tay | Schema sinh từ code + migration |
| `be-worker` (BullMQ, ffmpeg, ClamAV, Meili) | Job của Payload: hẹn giờ xuất bản, dọn kho gửi bài |
| App CMS admin tự dựng (port 3001) | `/admin` của Payload |
| `page_sections` + 12 `sectionType` cho 21 trang | Global `home` (blocks) + collection `landing-pages` (trường cố định) |
| `submission_trash` | `submissions.status = REJECTED` + `purgeAt` + job dọn |
| MinIO/S3 3 bucket | Đĩa server, 2 thư mục (`/data/media`, `/data/private`) |
| Redis cache handler | Không cần (1 instance) |
| 6 feature package | Thư mục `components/features/*` trong 1 app |
