# HƯỚNG DẪN KỸ THUẬT & HẠ TẦNG CHO GIAI ĐOẠN PHASE 2 (2027)

Tài liệu chi tiết hướng dẫn thiết lập và tích hợp các tính năng nâng cao thuộc danh mục Phase 2 quy định tại `00-TONG-QUAN.md` mục 1.2.

---

## 1. Bản đồ GIS OCOP Việt Nam & Bảng ánh xạ 34 Tỉnh thành
- **Frontend URL:** `/diem-den-du-lich/ban-do-ocop-viet-nam`
- **Bộ dữ liệu ánh xạ hành chính:** `src/lib/provinces-administrative-reform.ts`
- **Các thành phần giao diện:**
  - `src/components/features/destinations/map/GisMetricsSection.tsx`: 4 chỉ số không gian địa lý cốt lõi.
  - `src/components/features/destinations/map/InteractiveGisWorkspace.tsx`: Bàn làm việc GIS tương tác, chuyển đổi 63 tỉnh hiện hữu và 34 tỉnh quy hoạch, lọc theo lớp dữ liệu (5 Sao, Làng nghề, Du lịch OCOP), zoom và tra cứu tọa độ vệ tinh.
  - `src/components/features/destinations/map/RepresentativeProvincesGrid.tsx`: Danh mục 6 địa phương tiêu biểu hoàn thiện hồ sơ dữ liệu.
  - `src/components/features/destinations/map/GeospatialJournalismSection.tsx`: Biểu đồ trắc đồ phân bố theo độ cao và bài luận địa văn hóa.

---

## 2. Tìm kiếm Typo-Tolerant với Meilisearch
- **Container:** `getmeili/meilisearch:v1.12` tại cổng 7700.
- **Biến môi trường:**
  ```env
  MEILISEARCH_HOST=http://meilisearch:7700
  MEILISEARCH_KEY=your_secure_meili_master_key
  ```
- **Quy trình đồng bộ dữ liệu:**
  Hook `afterChange` của các collection `Articles`, `Products`, `Producers`, `Destinations` đẩy document JSON lên index Meilisearch:
  ```typescript
  // src/hooks/meilisearchSync.ts
  import { MeiliSearch } from 'meilisearch';

  const client = new MeiliSearch({
    host: process.env.MEILISEARCH_HOST || 'http://localhost:7700',
    apiKey: process.env.MEILISEARCH_KEY,
  });

  export const syncToMeilisearch = async (indexName: string, doc: any) => {
    const index = client.index(indexName);
    await index.addDocuments([doc]);
  };
  ```

---

## 3. Quét virus mã độc với ClamAV Daemon
- **Mục đích:** Quét toàn bộ tệp đính kèm người dùng tải lên qua trang `/gui-bai-ho-so-ocop` trước khi lưu vào `/data/private`.
- **Container:** `clamav/clamav:stable` lắng nghe cổng TCP `3310`.
- **Payload Hook Integration:**
  Thực hiện trong `beforeChange` của collection `Submissions`:
  ```typescript
  import net from 'net';

  export async function scanBufferWithClamAV(fileBuffer: Buffer): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const socket = net.createConnection({ host: process.env.CLAMAV_HOST || 'clamav', port: 3310 });
      socket.write('zINSTREAM\0');
      // Gửi stream buffer qua giao thức INSTREAM của clamd...
      socket.on('data', (data) => {
        const response = data.toString();
        if (response.includes('OK')) resolve(true);
        else resolve(false); // Phát hiện virus
      });
      socket.on('error', reject);
    });
  }
  ```

---

## 4. Bảo mật 2FA TOTP cho Quản trị viên CMS
- **Mục đích:** Bắt buộc xác thực 2 bước (Google Authenticator / Authy) khi đăng nhập vào `/admin`.
- **Cấu hình Payload:**
  Sử dụng cấu hình xác thực TOTP (RFC 6238) trong collection `Users`:
  ```typescript
  // src/collections/Users.ts
  export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
      useAPIKey: false,
      // Cấu hình mã bí mật TOTP và trường trạng thái 2FA
    },
    fields: [
      {
        name: 'twoFactorSecret',
        type: 'text',
        admin: { readOnly: true },
        access: { read: () => false },
      },
      {
        name: 'twoFactorEnabled',
        type: 'checkbox',
        defaultValue: false,
      },
    ],
  };
  ```

---

## 5. Tự động chuyển mã Video HLS Adaptive Streaming
- **Mục đích:** Chuyển đổi video gốc `.mp4/.mov` của các phóng sự đa phương tiện sang luồng HLS (`.m3u8` + `.ts` chunk đa độ phân giải 1080p, 720p, 480p).
- **Lệnh FFMPEG chuyển mã:**
  ```bash
  ffmpeg -i input.mp4 \
    -filter_complex \
    "[0:v]split=3[v1][v2][v3]; \
     [v1]scale=w=1920:h=1080[v1out]; \
     [v2]scale=w=1280:h=720[v2out]; \
     [v3]scale=w=854:h=480[v3out]" \
    -map "[v1out]" -c:v:0 libx264 -b:v:0 5000k \
    -map "[v2out]" -c:v:1 libx264 -b:v:1 2800k \
    -map "[v3out]" -c:v:2 libx264 -b:v:2 1400k \
    -map a:0 -c:a aac -b:a 128k \
    -f hls -hls_time 6 -hls_playlist_type vod \
    -master_pl_name master.m3u8 \
    output_%v/prog_index.m3u8
  ```

---

## 6. Đa ngôn ngữ (English) & Google News Sitemap
- **Hreflang SEO:** Đã được tích hợp tự động qua hàm `buildMetadata` trong `src/lib/seo.ts` với các thẻ `vi`, `en` và `x-default`.
- **Google News Sitemap:** Truy cập tại đường dẫn trực tiếp `/news-sitemap.xml` sinh cấu trúc XML đúng chuẩn `<urlset><url><news:news>`.
- **Bản tin điện tử:** Form đăng ký bản tin `NewsletterFormClient` tại Footer gửi request về `POST /api/public/newsletter`.
