# 99 — CHECKLIST REVIEW & NGHIỆM THU (DÙNG CHO CLAUDE VÀ NGƯỜI REVIEW)

Cách dùng: mỗi lát cắt/PR chọn các mục (A–I) liên quan, đưa diff + mục đó cho Claude (prompt mẫu ở `AGENTS.md` mục 5). Mức độ: **[CHẶN]** không merge nếu sai · **[NÊN]** sửa trong cùng sprint · **[GỢI Ý]**.
Mọi mục "kiểm bằng lệnh" do **người** chạy thật; không chấp nhận "AI nói đã chạy".

---

## A. Bảo mật & phân quyền
| # | Kiểm | Mức |
|---|---|---|
| A1 | Mỗi collection có `access` tường minh (không để mặc định). `delete: () => false` cho collection nội dung công khai | CHẶN |
| A2 | Không `overrideAccess: true` trong code phục vụ request người dùng, ngoại trừ endpoint gửi bài và job đã nêu trong `02` | CHẶN |
| A3 | Contributor không publish được: thử `PATCH /api/articles/:id` với `_status:"published"` bằng token contributor → 403 | CHẶN |
| A4 | Contributor không sửa được bản của người khác, không đọc được `submissions` | CHẶN |
| A5 | `users.create` chỉ admin; không có đăng ký công khai; khóa tài khoản bằng `isActive` | CHẶN |
| A6 | Khóa đăng nhập sai nhiều lần (`maxLoginAttempts`), mật khẩu ≥ 12 ký tự | NÊN |
| A7 | Không có `dangerouslySetInnerHTML` với dữ liệu CMS/gửi bài (`grep`) | CHẶN |
| A8 | Link trong Lexical/blocks chỉ `https://`, `mailto:`, `/...`; embed chỉ YouTube/Vimeo | CHẶN |
| A9 | `/api/preview` kiểm `secret`, chỉ nhận `path` bắt đầu bằng `/` (không open redirect) | CHẶN |
| A10 | `csrf`, `cors` chỉ cho `SITE_URL`; GraphQL tắt | NÊN |
| A11 | Không có secret trong git (`git log -p` tìm `PAYLOAD_SECRET`, `TURNSTILE`, mật khẩu) | CHẶN |
| A12 | Lỗi trả người dùng không lộ stack trace/đường dẫn nội bộ | NÊN |

## B. Dữ liệu & schema
| # | Kiểm | Mức |
|---|---|---|
| B1 | Schema đổi ⇒ có migration trong `src/migrations/`; CI chạy `migrate` trên DB trống OK | CHẶN |
| B2 | `payload-types.ts` được commit và khớp (CI `git diff --exit-code`) | CHẶN |
| B3 | `slug` unique + index; đổi slug bài đã xuất bản tạo `redirects` | CHẶN |
| B4 | `articles.topic` thuộc `kind` (hook validate + test) | NÊN |
| B5 | Trạng thái sự kiện **không lưu**, tính theo thời điểm | NÊN |
| B6 | Chỉ mục: `articles(kind,topic,_status,publishedAt)`, `products(category,stars,province)`, `events(startAt,endAt)`, `submissions(status,createdAt)`, trigram `search_index` | NÊN |
| B7 | `provinces` đúng 34 bản ghi, lấy từ nguồn chính thức; FE không hardcode danh sách | CHẶN |
| B8 | Trường bắt buộc khi publish dùng `required` (bản nháp lưu được khi thiếu) | NÊN |
| B9 | Quan hệ `tags` là `hasMany` thật (không chuỗi tự do) | NÊN |
| B10 | Không `any`; không định nghĩa lại interface thực thể ở FE (dùng `payload-types`) | NÊN |

## C. Cache & cập nhật nội dung (≤ 5 giây)
| # | Kiểm | Mức |
|---|---|---|
| C1 | Mọi hàm `lib/data/*` bọc `getCached` với tag đúng bảng ở `02` mục 6 / `01` mục 5.3 | CHẶN |
| C2 | Hook revalidate dùng `revalidateTag(tag, { expire: 0 })` (không dùng dạng 1 tham số, không `'max'` cho xuất bản) | CHẶN |
| C3 | Publish bài được ghim trang chủ ⇒ trang chủ đổi ≤ 5 s (đo thủ công trên **build production**) | CHẶN |
| C4 | Unpublish/archive ⇒ bài biến khỏi danh sách, sitemap, search-index và trang chi tiết trả 404 | CHẶN |
| C5 | Draft Mode không ghi vào cache công khai | CHẶN |
| C6 | `generateStaticParams` giới hạn số lượng; `dynamicParams` bật | NÊN |
| C7 | Nginx không cache HTML | CHẶN |

## D. Chất lượng FE
| # | Kiểm | Mức |
|---|---|---|
| D1 | `grep`: không `lh3.googleusercontent.com`, không `.html"`, không `<img ` thuần | CHẶN |
| D2 | `page.tsx` ≤ 80 dòng; không gọi `payload.find` trực tiếp trong component | NÊN |
| D3 | `'use client'` chỉ ở danh sách cho phép (`01` mục 9) | NÊN |
| D4 | Mỗi trang đúng 1 `<h1>`; heading không nhảy cấp | NÊN |
| D5 | `generateMetadata`, canonical, OG, JSON-LD đúng loại cho trang chi tiết | NÊN |
| D6 | Link nội bộ qua `getDocPath`/helper; `next/link` cho điều hướng nội bộ | NÊN |
| D7 | Trang tìm kiếm đọc `?q=`; không còn từ khóa/kết quả/modal mẫu viết cứng | CHẶN |
| D8 | `params`/`searchParams`/`cookies()` được `await` (Next 16) | CHẶN |
| D9 | Không có CSS ẩn thanh cuộn; font nạp 1 lần; logo đúng kích thước | NÊN |
| D10 | Component xử lý trạng thái rỗng, lỗi, đang tải (skeleton) cho danh sách | NÊN |

## E. Gửi bài & dữ liệu cá nhân
| # | Kiểm | Mức |
|---|---|---|
| E1 | Endpoint gửi bài: kiểm Turnstile, zod, mime + đuôi + **magic bytes**, ≤ 20 MB/tệp, tổng ≤ 50 MB, ≤ 5 tệp | CHẶN |
| E2 | Giới hạn 5 lần/giờ/IP được kiểm **trong code** (không chỉ Nginx) | CHẶN |
| E3 | `submitterIp` là IP thật (đọc `X-Forwarded-For` đúng cách), không phải IP Nginx | CHẶN |
| E4 | Không lưu toàn bộ HTTP headers; UA cắt ≤ 300 ký tự | NÊN |
| E5 | Có ô đồng ý, `consentAt`, `consentVersion`; link Chính sách quyền riêng tư tồn tại | CHẶN |
| E6 | Tệp gửi nằm ở `PRIVATE_UPLOAD_DIR`; `curl` URL tệp từ Internet → không truy cập được | CHẶN |
| E7 | Track: sai email/SĐT → 404 chung; không tiết lộ mã tồn tại; không trả ghi chú nội bộ | CHẶN |
| E8 | `APPROVED` ⇒ tạo **bản nháp** (không tự publish), trong 1 transaction, rollback khi lỗi | CHẶN |
| E9 | `ADVERTISEMENT`/`FEEDBACK` không bị chuyển đổi nhầm | NÊN |
| E10 | `REJECTED` đặt `purgeAt` đúng 3–6 tháng; job purge xóa tệp + bản ghi, idempotent | CHẶN |
| E11 | Không ghi email/SĐT/IP người gửi vào log ứng dụng hoặc `audit-logs` | CHẶN |
| E12 | Việc tải tệp đính kèm bởi biên tập viên được ghi `audit-logs` | NÊN |

## F. Media & tệp
| # | Kiểm | Mức |
|---|---|---|
| F1 | `media.alt` bắt buộc với ảnh; `credit` có thể nhập | NÊN |
| F2 | Ảnh web đi qua imgproxy preset cố định; `ONLY_PRESETS=true`; URL preset lạ → 404 | CHẶN |
| F3 | Không có đường dẫn `..` đi ra ngoài thư mục media (`curl /media/img/w640/../../etc/passwd@webp`) | CHẶN |
| F4 | `media` không xóa được; không có file `[DEV]` trong dữ liệu production | CHẶN |
| F5 | PDF văn bản mở được qua `/media/file/...` | NÊN |

## G. Hạ tầng & vận hành
| # | Kiểm | Mức |
|---|---|---|
| G1 | Chỉ 80/443 mở ra ngoài (`nmap` từ máy ngoài) | CHẶN |
| G2 | `/admin`, `/api/users/login`, `/api/articles` từ IP ngoài → 403; `/api/public/health` → 200 | CHẶN |
| G3 | `push: false` ở staging/prod; deploy chạy `migrate` trước `web` | CHẶN |
| G4 | Backup DB 6 giờ/lần chạy thật; có bản ngoại vi; có heartbeat | CHẶN |
| G5 | **Diễn tập khôi phục** thành công, RTO đã ghi (trước 03/12) | CHẶN |
| G6 | Bản bất biến theo tháng cấu hình xong | NÊN |
| G7 | Giám sát uptime + TLS + đĩa có cảnh báo thử nhận được | CHẶN |
| G8 | Container `jobs` chỉ 1 bản; log xoay vòng | NÊN |
| G9 | Header bảo mật (HSTS, nosniff, Referrer-Policy); CSP đã chạy Report-Only | NÊN |
| G10 | Có `RUNBOOK.md` + hướng dẫn Content có ảnh chụp | NÊN |

## H. Hiệu năng, SEO, truy cập
| # | Kiểm | Mức |
|---|---|---|
| H1 | Lighthouse mobile (staging): LCP ≤ 2,5 s, CLS ≤ 0,1, INP ≤ 200 ms trên trang chủ / bài / danh sách SP | NÊN |
| H2 | Accessibility ≥ 90; điều hướng bàn phím được menu, modal tìm kiếm, form | NÊN |
| H3 | `sitemap.xml`, `robots.txt`, RSS hợp lệ (validator); sitemap không chứa bản nháp/archive | CHẶN |
| H4 | Tìm kiếm `tra tan cuong` ra `Trà Tân Cương`; p95 < 300 ms với 5.000 bản ghi | NÊN |
| H5 | Load test ở mức đồng thời thỏa thuận; không 5xx; p95 < 800 ms | NÊN |
| H6 | Ảnh LCP có `priority`; mọi ảnh có `sizes`/kích thước | NÊN |

## I. Lưu trữ 10 năm
| # | Kiểm | Mức |
|---|---|---|
| I1 | Không đường nào xóa cứng nội dung đã xuất bản (REST `DELETE`, admin, script) | CHẶN |
| I2 | `versions` bật, `maxPerDoc` ≥ 50 | NÊN |
| I3 | Quy trình manifest checksum ảnh gốc hằng tháng hoạt động | NÊN |
| I4 | Có kế hoạch xuất bản archive hằng năm (script hoặc lịch việc) | GỢI Ý |

---

## Lệnh kiểm nhanh (người chạy)
```bash
# Cấm chuỗi
grep -rnE "lh3\.googleusercontent\.com|\.html\"|ignoreBuildErrors:\s*true|dangerouslySetInnerHTML" src/ || echo OK

# Quyền (thay TOKEN_*)
curl -s -o /dev/null -w "%{http_code}\n" -X PATCH https://staging.../api/articles/ID \
  -H "Authorization: JWT $TOKEN_CONTRIBUTOR" -H "Content-Type: application/json" -d '{"_status":"published"}'   # mong đợi 403
curl -s -o /dev/null -w "%{http_code}\n" -X DELETE https://staging.../api/articles/ID -H "Authorization: JWT $TOKEN_ADMIN"   # mong đợi 403/404

# Chặn từ ngoài (chạy từ IP không có trong allowlist)
for p in /admin /api/users /api/articles /api/submissions; do curl -s -o /dev/null -w "$p %{http_code}\n" https://ocopvietnam.vn$p; done   # mong đợi 403
curl -s https://ocopvietnam.vn/api/public/health

# Tệp riêng tư không công khai
curl -s -o /dev/null -w "%{http_code}\n" https://ocopvietnam.vn/media/file/../private/x.pdf   # mong đợi 400/403/404
```

## Nghiệm thu theo lát cắt
| Lát cắt | Xong khi |
|---|---|
| 1. `articles` | Content tạo bài → nháp → xem trước → publish → hiện ở danh sách + chi tiết + sitemap + tìm kiếm trong ≤ 5 s; contributor bị chặn publish; không xóa được; đổi slug có 301 |
| 2. Nhân bản: events, legal-documents, producers, products, destinations | Mỗi loại có danh sách có lọc + chi tiết + JSON-LD + sitemap; lọc theo tỉnh/sao/ngành hàng đúng |
| 3. Trang chủ & landing | Content sửa/sắp xếp khối trang chủ, ghim bài; đổi hiển thị ≤ 5 s |
| 4. Gửi bài | Gửi thật → mã tra cứu → duyệt → bản nháp → publish → tra cứu thấy link; từ chối → `purgeAt`; job purge chạy |
| 5. Go-live | Mục G, H, I đạt; danh sách go-live ở `03` mục 9 hoàn tất |
