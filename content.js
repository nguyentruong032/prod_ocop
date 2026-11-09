/**
 * OCOP Vietnam Digital Platform - Central Content Repository
 * Single Source of Truth for all data-driven UI components
 * Auto-generated from existing HTML pages - DO NOT EDIT MANUALLY
 * Use content-loader.js to render dynamic content
 */
(function() {
  'use strict';

  window.OCOP_CONTENT = {
    // ============================================
    // SITE CONFIGURATION
    // ============================================
    siteConfig: {
      brand: {
        name: 'OCOP Việt Nam',
        shortName: 'OCOP',
        tagline: 'Tạp chí tri thức bản địa & di sản nông thôn',
        logo: '/logo.png',
        logoAlt: 'OCOP Việt Nam Điện tử',
        colors: {
          primary: '#012d1d',
          secondary: '#984724',
          tertiary: '#372200',
          gold: '#C89B3C',
          surface: '#f9f9ff',
          warmWhite: '#F8F5EE',
          softGreen: '#E8EFEA',
          darkGreen: '#1F4D3A'
        }
      },
      navigation: {
                main: [
          { key: 'trang-chu', label: 'Trang chủ', href: '/', isActive: false },
          { key: 'ocop-now', label: 'OCOP NOW', href: '/ocop-now', isActive: false },
          { key: 'ban-doc-va-toa-soan', label: 'Bạn đọc & Tòa soạn', href: '/ban-doc-toa-soan', children: [
            { label: 'Thư Tòa soạn', href: '/ban-doc-toa-soan/thu-toa-soan/index.html' },
            { label: 'Hỏi đáp Chính sách', href: '/ban-doc-toa-soan/hoi-dap-chinh-sach/index.html' },
            { label: 'Diễn đàn Bạn đọc', href: '/ban-doc-toa-soan/dien-dan-ban-doc/index.html' },
            { label: 'Kết nối Chuyên gia', href: '/ban-doc-toa-soan/ket-noi-chuyen-gia/index.html' },
            { label: 'Gửi bài / Hồ sơ OCOP', href: '/ban-doc-toa-soan/gui-bai-ho-so-ocop/index.html' }
          ]},
          { key: 'cau-chuyen-ocop', label: 'Câu chuyện OCOP', href: '/cau-chuyen-ocop', children: [
            { label: 'Di sản & Bản địa', href: '/cau-chuyen-ocop/di-san-ban-dia/index.html' },
            { label: 'Khởi nghiệp Xanh', href: '/cau-chuyen-ocop/khoi-nghiep-xanh/index.html' },
            { label: 'Bản sắc Vùng miền', href: '/cau-chuyen-ocop/ban-sac-vung-mien/index.html' },
            { label: 'Chuyển đổi Số', href: '/cau-chuyen-ocop/chuyen-doi-so/index.html' },
            { label: 'Khao khát Lúa séng', href: '/cau-chuyen-ocop/khao-vong-lua-seg/index.html' },
            { label: 'Dệt thổ cẩm Chăm', href: '/cau-chuyen-ocop/det-tho-cam-cham/index.html' },
            { label: 'Thanh âm Gốm đỏ', href: '/cau-chuyen-ocop/thanh-am-gom-do-vinh-long/index.html' },
            { label: 'Giữ lửa nghề chè', href: '/cau-chuyen-ocop/giu-lua-nghe-sao-che-tan-cuong/index.html' }
          ]},
          { key: 'chu-the-ocop', label: 'Chủ thể OCOP', href: '/chu-the-ocop', children: [
            { label: 'Danh bạ Chủ thể', href: '/chu-the-ocop/danh-ba-chu-the/index.html' },
            { label: 'Chủ thể Tiêu biểu', href: '/chu-the-ocop/chu-the-tieu-bieu/index.html' },
            { label: 'Thống kê Vùng', href: '/chu-the-ocop/thong-ke-vung/index.html' },
            { label: 'Hợp tác xã Trà', href: '/chu-the-ocop/hop-tac-xa-tra-tan-cuong-thai-nguyen/index.html' },
            { label: 'Doanh nghiệp Nước mắm', href: '/chu-the-ocop/doanh-nghiep-nuoc-mam-khai-hoan/index.html' },
            { label: 'HTX Nông nghiệp', href: '/chu-the-ocop/htx-nong-nghiep-cao-nguyen-meo-vac/index.html' },
            { label: 'Xưởng Nghệ', href: '/chu-the-ocop/xuong-nghe/index.html' }
          ]},
          { key: 'diem-den-va-du-lich', label: 'Điểm đến du lịch', href: '/diem-den-du-lich', children: [
            { label: 'Làng nghề', href: '/diem-den-du-lich/lang-nghe/index.html' },
            { label: 'Du lịch sinh thái', href: '/diem-den-du-lich/du-lich-sinh-thai/index.html' },
            { label: 'Bản đồ OCOP', href: '/diem-den-du-lich/ban-do-ocop/index.html' },
            { label: 'Tỉnh Thái Nguyên', href: '/diem-den-du-lich/tinh-thai-nguyen/index.html' },
            { label: 'Hội An Quảng Nam', href: '/diem-den-du-lich/hoi-an-quang-nam/index.html' },
            { label: 'Sa Đéc Đồng Tháp', href: '/diem-den-du-lich/sa-dec-dong-thap/index.html' }
          ]}
        ],
                cta: {
          label: 'Gửi bài / Hồ sơ OCOP',
          href: '/ban-doc-toa-soan/gui-bai-ho-so-ocop/index.html',
          icon: 'post_add'
        },
                user: {
          icon: 'person',
          href: '/dang-nhap'
        },
      },
      footer: {
        brand: {
          name: 'OCOP Việt Nam',
          description: 'Chuyên trang thông tin điện tử giới thiệu sản phẩm OCOP Việt Nam qua câu chuyện văn hóa bản địa, người giữ nghề, du lịch nông thôn và dữ liệu hội nhập.',
          badge: 'Tư liệu số hóa Quốc gia'
        },
                columns: [
          {
            title: 'Chuyên mục',
            links: [
              { label: 'Trang chủ', href: '/', key: 'trang-chu' },
              { label: 'OCOP NOW', href: '/ocop-now', key: 'ocop-now' },
              { label: 'Câu chuyện OCOP', href: '/cau-chuyen-ocop', key: 'cau-chuyen-ocop' },
              { label: 'Chủ thể OCOP', href: '/chu-the-ocop', key: 'chu-the-ocop' },
              { label: 'Điểm đến du lịch', href: '/diem-den-du-lich', key: 'diem-den-va-du-lich' },
              { label: 'Bạn đọc & Tòa soạn', href: '/ban-doc-toa-soan', key: 'ban-doc-va-toa-soan' }
            ]
          },
          {
            title: 'Tòa soạn & Pháp lý',
            links: [
              { label: 'Giới thiệu chuyên trang', href: '/', key: 'trang-chu' },
              { label: 'Gửi hồ sơ chủ thể', href: '/ban-doc-toa-soan/gui-bai-ho-so-ocop/index.html', key: 'gui-ho-so-ocop' },
              { label: 'Liên hệ tòa soạn', href: '/lien-he', key: 'lien-he-toa-soan' },
              { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat', key: 'chinh-sach-bao-mat' },
              { label: 'Điều khoản sử dụng', href: '/dieu-khoan', key: 'dieu-khoan-su-dung' }
            ]
          },
          {
            title: 'Kết nối & Bản tin',
            description: 'Đăng ký nhận tuyển tập các bài khảo cứu và câu chuyện di sản nông thôn định kỳ.',
            newsletter: {
              placeholder: 'Nhập địa chỉ email của bạn…',
              buttonLabel: 'Đăng ký nhận tin',
              action: '/newsletter'
            },
            social: [
              { label: 'Diễn đàn tri thức', href: '/ban-doc-toa-soan/dien-dan-ban-doc/index.html', icon: 'public', ariaLabel: 'Diễn đàn tri thức' },
              { label: 'Thư viện video tư liệu', href: '/cau-chuyen-ocop/ban-sac-vung-mien/index.html', icon: 'play_circle', ariaLabel: 'Thư viện video tư liệu' },
              { label: 'Mạng lưới chuyên gia bản địa', href: '/ban-doc-toa-soan/ket-noi-chuyen-gia/index.html', icon: 'hub', ariaLabel: 'Mạng lưới chuyên gia bản địa' }
            ]
          }
        ],
        copyright: '© 2026 OCOP Digital Platform - Chuyên trang OCOP Việt Nam Điện tử. Bảo lưu mọi quyền.',
        badge: 'Di sản Nông thôn Việt Nam'
      },
      forms: {
        newsletter: {
          title: 'Đăng ký bản tin',
          description: 'Nhận tuyển tập các bài khảo cứu và câu chuyện di sản nông thôn định kỳ.',
          fields: [
            { name: 'email', type: 'email', placeholder: 'Nhập địa chỉ email của bạn…', required: true, label: 'Email' }
          ],
          submitLabel: 'Đăng ký nhận tin',
          successMessage: 'Cảm ơn bạn đã đăng ký nhận bản tin! Email xác nhận đã được gửi.'
        },
        contact: {
          title: 'Liên hệ Tòa soạn',
          fields: [
            { name: 'fullName', type: 'text', placeholder: 'Họ và tên', required: true, label: 'Họ và tên' },
            { name: 'email', type: 'email', placeholder: 'Email', required: true, label: 'Email' },
            { name: 'phone', type: 'tel', placeholder: 'Số điện thoại', required: false, label: 'Số điện thoại' },
            { name: 'category', type: 'select', placeholder: 'Chọn chuyên mục', required: true, label: 'Chuyên mục', options: [
              'Góp ý / Khiếu nại',
              'Hợp tác nội dung',
              'Quảng cáo / Tài trợ',
              'Kỹ thuật / Hỗ trợ',
              'Khác'
            ]},
            { name: 'message', type: 'textarea', placeholder: 'Nội dung tin nhắn', required: true, label: 'Nội dung' }
          ],
          submitLabel: 'Gửi liên hệ',
          successMessage: 'Cảm ơn bạn! Thông tin đã được gửi thành công đến Tòa soạn OCOP Việt Nam.'
        },
        ketNoi: {
          title: 'Gửi hồ sơ Chủ thể OCOP',
          description: 'Điền đầy đủ thông tin để Tòa soạn tiếp nhận và thẩm định hồ sơ.',
          fields: [
            { name: 'tenChuThe', type: 'text', label: 'Tên chủ thể / Hợp tác xã', required: true },
            { name: 'loaiHinh', type: 'select', label: 'Loại hình', required: true, options: ['Hợp tác xã', 'Doanh nghiệp', 'Hộ gia đình', 'Cá nhân'] },
            { name: 'tenSanPham', type: 'text', label: 'Tên sản phẩm OCOP', required: true },
            { name: 'hangSao', type: 'select', label: 'Hạng sao OCOP', required: true, options: ['5 Sao', '4 Sao', '3 Sao'] },
            { name: 'nganhHang', type: 'select', label: 'Ngành hàng', required: true, options: ['Nông sản & Thực phẩm', 'Dược liệu & Sức khỏe', 'Thủ công mỹ nghệ', 'Du lịch nông thôn', 'Dịch vụ', 'Khác'] },
            { name: 'tinhThanh', type: 'text', label: 'Tỉnh/Thành phố', required: true },
            { name: 'nguoiDaiDien', type: 'text', label: 'Người đại diện', required: true },
            { name: 'email', type: 'email', label: 'Email', required: true },
            { name: 'phone', type: 'tel', label: 'Số điện thoại', required: true },
            { name: 'website', type: 'url', label: 'Website / Fanpage', required: false },
            { name: 'moTa', type: 'textarea', label: 'Mô tả sản phẩm / Câu chuyện', required: true },
            { name: 'hinhAnh', type: 'file', label: 'Hình ảnh minh họa', required: false, accept: 'image/*' }
          ],
          submitLabel: 'Gửi hồ sơ',
          successMessage: 'Tòa soạn đã ghi nhận hồ sơ chủ thể OCOP. Bộ phận tư liệu sẽ liên hệ thẩm định.'
        }
      },
      search: {
        placeholder: 'Nhập từ khóa tìm kiếm (VD: Chè Shan Tuyết, Gốm Bát Tràng, tiêu chuẩn 5 sao...)',
        suggestions: [
          { title: 'Trà Đinh Ngọc Tân Cương', type: 'Sản phẩm OCOP 5 Sao', url: '/san-pham-ocop/tra-dinh-ngoc-tan-cuong', category: 'san-pham', icon: 'stars' },
          { title: 'Hợp tác xã Trà Tân Cương Thái Nguyên', type: 'Chủ thể OCOP', url: '/chu-the-ocop/hop-tac-xa-tra-tan-cuong-thai-nguyen', category: 'chu-the', icon: 'groups' },
          { title: 'Giữ lửa nghề sao chè Tân Cương', type: 'Câu chuyện OCOP', url: '/cau-chuyen-ocop/giu-lua-nghe-sao-che-tan-cuong', category: 'cau-chuyen', icon: 'auto_stories' },
          { title: 'Tỉnh Thái Nguyên', type: 'Điểm đến & Du lịch', url: '/diem-den-du-lich/tinh-thai-nguyen', category: 'diem-den', icon: 'place' },
          { title: 'Tiềm năng đưa trà vào EU', type: 'OCOP Hội nhập', url: '/ocop-hoi-nhap/tiem-nang-dua-tra-va-thao-duoc-vao-eu', category: 'hoi-nhap', icon: 'public' },
          { title: 'Hơn 200 chủ thể tham gia tuần lễ', type: 'Tin tức & Sự kiện', url: '/tin-tuc-su-kien/tin/hon-200-chu-the-tham-gia-tuan-le-san-pham-ocop-tai-ha-noi', category: 'tin-tuc', icon: 'newspaper' },
          { title: 'Hội chợ OCOP 2026', type: 'Sự kiện', url: '/tin-tuc-su-kien/su-kien/hoi-cho-gioi-thieu-san-pham-ocop-va-dac-san-vung-mien-2026', category: 'su-kien', icon: 'event' },
          { title: 'Chính sách gói tín dụng xanh', type: 'Tin tức & Sự kiện', url: '/tin-tuc-su-kien?tab=chinh-sach', category: 'tin-tuc', icon: 'newspaper' }
        ]
      }
    },

    // ============================================
    // PAGES DATA
    // ============================================
    pages: {
      home: {
        hero: {
          eyebrow: 'Khám phá OCOP Việt Nam',
          headline: 'Những giá trị bản địa, những câu chuyện vượt thời gian.',
          description: 'Từ vùng nguyên liệu đặc trưng đến bàn tay người làm nghề, mỗi sản phẩm OCOP đều gắn với văn hóa và đời sống của từng miền đất.',
          ctaPrimary: { label: 'Khám phá câu chuyện', href: '#khoi-06-cau-chuyen', variant: 'primary' },
          ctaSecondary: { label: 'Khám phá sản phẩm', href: '#khoi-05-san-pham', variant: 'outline' },
          backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRwbF6mSpUS165Lv0kK1ub0j1Apqyo4pF_mGskJtCS79ZyQace58J4jJ_boXAfaG2arlnSBBCfN7ZOsLd2m3tXK4daMV5gm3TJuSGd-MustQf0fesUVlFNC_oIzVK-hKQ0XoIo8uhc1D_kNsXjdp70SjAVv8EPcAOZkWaTbq7GcZrNmHyegqmNl1Rr5hq-2aP05rY9aB1JCkZ1mVtOb28ehxWMCcFihw7sUKN6b64'
        },
        quickLinks: [
          { icon: 'workspace_premium', iconBg: 'tertiary', label: 'Sản phẩm (3–5 Sao)', desc: 'Hệ thống chuẩn hóa phân hạng chất lượng và bảo chứng nguồn gốc địa lý quốc gia.', href: '#khoi-05-san-pham' },
          { icon: 'eco', iconBg: 'primary', label: 'Dược liệu & Sức khỏe', desc: 'Tinh hoa cây thuốc quý bản địa, tri thức chữa bệnh dân gian các vùng đồng bào.', href: '#khoi-05-san-pham' },
          { icon: 'holiday_village', iconBg: 'secondary', label: 'Làng nghề & Du lịch', desc: 'Không gian trải nghiệm sinh thái, tuyến tham quan di sản thủ công và cảnh quan.', href: '#khoi-07-diem-den' },
          { icon: 'diversity_3', iconBg: 'surface', label: 'Chủ thể OCOP', desc: 'Mạng lưới hợp tác xã, doanh nghiệp cộng đồng và các nghệ nhân tài hoa giữ nghề.', href: '#khoi-09-toa-soan' }
        ],
        sections: [
          {
            id: 'khoi-03-cua-ngo',
            title: 'Cửa ngõ tư liệu số',
            headline: 'Khám phá hệ sinh thái OCOP Việt Nam.',
            description: 'Tra cứu nhanh theo dòng sản phẩm đặc trưng, câu chuyện chủ thể và bản đồ điểm đến văn hóa trên cả nước.',
            badge: 'Dữ liệu xác thực cấp Quốc gia',
            bgColor: 'surface-container-lowest'
          },
          {
            id: 'khoi-04-tin-tuc',
            label: 'CHUYÊN MỤC 01',
            title: 'Nhịp đập chính sách và chuyển động OCOP toàn quốc.',
            description: 'Tin tức, chính sách, sự kiện và hoạt động xúc tiến thương mại cập nhật liên tục.',
            filterTabs: ['Tất cả thông tin', 'Chính sách & Cơ chế', 'Hoạt động - Xúc tiến thương mại', 'OCOP Địa phương'],
            bgColor: '#F8F5EE',
            featuredArticle: {
              category: 'CHÍNH SÁCH BÁO TỰ',
              date: '24/10/2026',
              readTime: '6 phút đọc',
              headline: 'Nghị quyết mới về gói tín dụng xanh và cơ chế hỗ trợ chủ thể OCOP giai đoạn 2026–2030',
              excerpt: 'Quy hoạch tài chính đồng bộ tập trung ưu tiên liên kết hợp tác xã vùng sâu, chuẩn hóa vùng dược liệu bền vững và bảo trợ bảo tồn nghề truyền thống.',
              source: 'Văn phòng Điều phối Nông thôn mới TW',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjWJD-yF4gcEoWQLa8ke94KI2E8FHei_Fsf8eo7AksYdXfDTOiXx8qM_RiozjYR4ci9khAUUTeadCKA3Svk3iMKQckQXowmEXPa-7LfXpS-PrTJVJFBryg94tPAerZSJ4Wnc1-nzDWOsWWH9h7hrh7vTmloq6CkQ1G4LSzPpTd08Qg9bp6R47OshHUKbge7Sd73cmXyEmMseiv5swOKkeL2m9oSn3IUzRMvT0STK8'
            },
            newsCards: [
              { category: 'Hoạt động - Xúc tiến thương mại', date: '20/10/2026', headline: 'Hơn 200 chủ thể tham gia tuần lễ sản phẩm OCOP tại Hà Nội', excerpt: 'Không gian quảng bá hội tụ nông sản tinh hoa và sản phẩm thủ công mỹ nghệ của các tỉnh miền núi phía Bắc.', location: 'Hà Nội', image: '' },
              { category: 'Chính sách & Cơ chế', date: '19/10/2026', headline: 'Định hướng chuẩn hóa chuỗi giá trị phát triển OCOP gắn với tiêu chuẩn Net Zero', excerpt: 'Thúc đẩy sản xuất hữu cơ khép kín, ứng dụng bao bì thân thiện môi trường cho các nhóm ngành hàng đặc sản.', location: 'Diễn đàn Nông nghiệp', image: '' }
            ],
            eventCard: {
              status: 'Sắp diễn ra',
              date: '15–18/11/2026',
              headline: 'Hội chợ giới thiệu sản phẩm OCOP và đặc sản vùng miền 2026',
              location: 'TP. Cần Thơ',
              image: ''
            }
          },
          {
            id: 'khoi-05-san-pham',
            label: 'CHUYÊN MỤC 02',
            title: 'Mỗi sản phẩm, một dấu ấn bản địa.',
            description: 'Khám phá sản phẩm phân loại theo hạng sao (5 sao, 4 sao, 3 sao) và 3 nhóm ngành trọng tâm.',
            filterTabs: ['Tất cả', 'Nông sản & Thực phẩm', 'Dược liệu & Sức khỏe', 'Thủ công mỹ nghệ & Khác'],
            bgColor: 'surface-container-lowest',
            products: [
              { id: 'tra-dinh-ngoc-tan-cuong', name: 'Trà Đinh Ngọc Tân Cương', stars: 5, category: 'Nông sản & Thực phẩm', province: 'Thái Nguyên', producer: 'HTX Trà Tân Cương Thái Nguyên', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQZg4eHHL-Oh28ibFos0gPvVhmiL4R3TZDOk1-y7wTnpdxMJwo6TUwjxGNmAAsxr5bcv2KaK1mThBBgmZHxNOWHojD_Y9PpwSk7kun0yH0g1gF-vD-kqyV2SAOpLIsukdPetLMDR41g3tQS0uvuoY1ENAu3fBUtrozsxXvEFse0vQmRnNq-0Nn0Foo0fxGnxCR1z-B-EpJon2EIwIhHmpXB1R8OJj0PUKo8cNdkgo', certifiedYear: 2026, slug: 'tra-dinh-ngoc-tan-cuong' },
              { id: 'nuoc-mam-cot-khai-hoan', name: 'Nước mắm Cốt Khải Hoàn 43°N', stars: 5, category: 'Nông sản & Thực phẩm', province: 'Kiên Giang', producer: 'Doanh nghiệp Nước mắm Khải Hoàn Phú Quốc', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN9Jj4ZMQELsX8Ii10OfkJmfNhtIo28EehXMLa3pgJZpNUhHkdqpm3Jz8grSjevMSJ-wecMaTLqrnSNvzG5Jc7WiZijWB_SCxhXdcKA86H9U31NkXkxjhAoyqz0G8hwkWB5P5RjSZ1DFUPnypDKPeI0E-RAY2xuv7_c0yS-uRZkwDLgDgxtqqGObiP-Sv8tLAGYeAwxVIOE-sBQDxVtXXPKMFLexNG1yElcXfX470', certifiedYear: 2026, slug: 'nuoc-mam-cot-khai-hoan' },
              { id: 'mat-ong-bac-ha', name: 'Mật ong Bạc Hà Cao nguyên đá', stars: 4, category: 'Dược liệu & Sức khỏe', province: 'Hà Giang', producer: 'HTX Nông nghiệp Cao nguyên Mèo Vạc', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9H4shWXKL58ZBWGY66jltbMjcDjKuP6h3T90ZOQO_rshI_K-Gy1juBXsNJAmVJzOxfjktLKYHq4LP-F7WlLeDEyX6kjsOsYYWm2fUS9SnlXrvqekLSlGvuEtRkXjFi_WIaS4uds-2VfbqxX_Fsw7MEQJCNvziRFNVDeB-4DxD-vpii2uLaPAV2Dq_gOUfkxI5qRYZ4sSH4ol8vSBGyRE2RgCXfalZOwNEx8yejQc', certifiedYear: 2025, slug: 'mat-ong-bac-ha' },
              { id: 'gom-phu-lang', name: 'Gốm men tro Phù Lãng', stars: 4, category: 'Thủ công mỹ nghệ', province: 'Bắc Ninh', producer: 'Xưởng nghệ nhân Nguyễn Văn Tuấn', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVAmt1t6f6KrmJqdNkRSK9-zWIGLN9munCAarsnVXUK1FFz3Ec1nAxVfNW4xMOx2m21mRB12TTxS0TQCO53XutEGP3M0sVnGESt9qLdZhvjIcR6plWAjzbd4L1mep8dTzC8ruq9hAm6gEGasVyh9G_1JRE3kPYQFaU8JpgV3ltqxA34whzyqKYcAHbUengbvCeb90hfA9iNvF48hKLs6DTmMEAiwKRZt_HC3R72N8', certifiedYear: 2025, slug: 'gom-phu-lang' }
            ]
          },
          {
            id: 'khoi-06-cau-chuyen',
            label: 'CHUYÊN MỤC 03',
            title: 'Những câu chuyện làm nên phần hồn sản phẩm OCOP.',
            description: 'Hành trình khởi nghiệp của các chủ thể, tinh hoa văn hóa bản địa và những thước phim chân thực về người giữ nghề.',
            bgColor: '#F8F5EE',
            stories: [
              { id: 'giu-lua-nghe-sao-che', type: 'feature', category: 'Văn hóa & Tinh hoa bản địa', province: 'Thái Nguyên', headline: 'Giữ lửa nghề sao chè truyền thống bên sườn núi Tân Cương', excerpt: 'Hơn bốn mươi năm gắn bó với đồi chè trung du, các nghệ nhân vẫn giữ cách sao chè bằng lửa củi, đôi bàn tay trần cảm nhận độ ấm của búp chè non...', readTime: '5 phút đọc', author: 'Ký sự điền dã của Ban Biên tập', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbcSvT6wzf5dGT-zwtx5-BiDFP77jMdvMBVXaaUFUnEFySbUKrmgksRzqoHX2iMGzmhfNg1kw8-5wigxLWQqTmrv5qFib3hTiPm3VsQtdbxwniB6gdgpw9YPppVcxG9Msys3OuJKYym0-qnJRvJkVceTANCLzBWxyNtdMXqa3u6pXp952xO91u181FCRe1T9UjxdBB4vsT--TquA7qK3bZvKZTPYkUunJlW0zO8vk', slug: 'giu-lua-nghe-sao-che-tan-cuong' },
              { id: 'khao-vong-lua-seg', type: 'story', category: 'Hành trình chủ thể', province: 'Lào Cai', headline: 'Khát vọng hồi sinh giống lúa Séng Cù của người Dao đỏ', excerpt: 'Hành trình bảo tồn giống gạo thơm ngát trên những rẻo cao bậc thang Lào Cai qua nhiều thế hệ đồng bào.', readTime: '4 phút đọc', author: 'HTX Nông nghiệp Bản Liền', slug: 'khao-vong-lua-seg' },
              { id: 'det-tho-cam-cham', type: 'story', category: 'Văn hóa bản địa', province: 'An Giang', headline: 'Gìn giữ kỷ nghệ dệt thổ cẩm Chăm Châu Phong qua bao mùa nước nổi', excerpt: 'Nhịp thoi đưa bên bờ sông Hậu bảo lưu nét hoa văn dệt tay độc bản của phụ nữ làng nghề An Giang.', readTime: '6 phút đọc', author: 'Làng nghề dệt thổ cẩm Châu Phong', slug: 'det-tho-cam-cham' },
              { id: 'thanh-am-gom-do', type: 'video', category: 'Phóng sự đa phương tiện', province: 'Vĩnh Long', headline: 'Thanh âm gốm đỏ Vĩnh Long - Trăm tích trăm năm bên dòng Cổ Chiên', duration: '12:45', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhvMm5-n987KKipgAbJ8WLcsuUuEyVO5hwp609-LQlzsMTMtmNq6gFi45P4uV9_WSls9qWxVLSFnZ3IRKwUi5t4oQFGD9kG2YqFJB10fmg6hrxD2tDFK6RMAXoQ4mKrTdetfgxGDAjU_1gmAmxOb7ejsH7c9wF8oTZXkIuLUJ7oiFoUdmX2bLOoFPl9oO7zvoLY8vKLScVcv8y8kaANZPggtfBADZzvxlupQd-87k', slug: 'thanh-am-gom-do-vinh-long' }
            ]
          },
          {
            id: 'khoi-07-diem-den',
            label: 'CHUYÊN MỤC 04',
            title: 'Hành trình về những làng nghề và miền đất OCOP.',
            description: 'Kết nối điểm đến làng nghề truyền thống, tuyến du lịch sinh thái trải nghiệm và Bản đồ OCOP 34 tỉnh, thành phố.',
            bgColor: '#E8EFEA',
            mapStats: { destinations: 148, craftVillages: 420 },
            destinations: [
              { id: 'thai-nguyen', name: 'Tỉnh Thái Nguyên', region: 'Trung du Bắc Bộ', category: 'Làng nghề & Du lịch sinh thái', products: 32, stories: 12, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM', slug: 'tinh-thai-nguyen' },
              { id: 'hoi-an', name: 'Hội An, Quảng Nam', region: 'Trung Bộ', category: 'Du lịch trải nghiệm', products: 18, stories: 0, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM', slug: 'hoi-an-quang-nam' },
              { id: 'sa-dec', name: 'Sa Đéc, Đồng Tháp', region: 'Nam Bộ', category: 'Sinh thái nông nghiệp', products: 15, stories: 0, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM', slug: 'sa-dec-dong-thap' }
            ],
            regions: ['Bắc Bộ', 'Trung Bộ', 'Nam Bộ']
          },
          {
            id: 'khoi-08-hoc-nhap',
            label: 'CHUYÊN MỤC 05 · BÁO CHÍ DỮ LIỆU',
            title: 'OCOP Việt Nam vươn ra thị trường quốc tế và chuyển đổi số.',
            description: 'Phân tích xuất khẩu, tiêu chuẩn chứng nhận quốc tế, chuyển đổi số và dòng chảy thời sự OCOP NOW.',
            bgColor: 'surface-container-lowest',
            metrics: [
              { value: '45+', label: 'Quốc gia nhập khẩu sản phẩm OCOP', icon: 'public', color: 'primary' },
              { value: '1.200+', label: 'Doanh nghiệp thực hiện chuyển đổi số', icon: 'qr_code_2', color: 'secondary' },
              { value: '+28.4%', label: 'Tăng trưởng kim ngạch xuất khẩu OCOP', icon: 'trending_up', color: 'primary' }
            ],
            analytics: {
              title: 'Tỷ trọng ngành hàng OCOP 4–5 sao năm 2026 (%)',
              data: [
                { label: 'Nông sản chế biến', value: 42, color: '#1b4332' },
                { label: 'Dược liệu & Thảo mộc', value: 26, color: '#984724' },
                { label: 'Thủ công mỹ nghệ', value: 20, color: '#ce9e54' },
                { label: 'Sinh vật cảnh & Khác', value: 12, color: '#717973' }
              ]
            },
            integrationArticle: {
              category: 'Xuất khẩu & Thị trường quốc tế',
              headline: 'Tiềm năng đưa trà và thảo dược OCOP 5 sao vào thị trường châu Âu',
              excerpt: 'Nhu cầu sản phẩm hữu cơ có chứng nhận nguồn gốc tại EU mở ra cơ hội lớn giai đoạn 2026–2030...',
              author: 'TS. Lê Hoàng Nam',
              date: '10/2026',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARPK-sB1Hxl_996L23VT7vkhQas6o-RO3t85uttjM8GGzJGVfgWh-DRRVFfAvNLac6huYYAUER2MCqEBbIroHWgydsvb-_Jj4Bkl3uu6SF0iLnqB-0TJ0aDvcDwgj4rgsDT9l7J-SQZCdNnuciHcqh-fcmAbV7SWRO-aJepFOMWP3t59409rvkgh9ARxPQsJ4CeeFFd5IlXgWZZwGE0twZ-noXsuW7RuO1xP2aTKg',
              slug: 'tiem-nang-dua-tra-va-thao-duoc-vao-eu'
            }
          },
          {
            id: 'khoi-09-toa-soan',
            label: 'CHUYÊN MỤC 06',
            title: 'Góc nhìn bạn đọc và Kết nối cùng Tòa soạn.',
            description: 'Không gian chia sẻ ý kiến chuyên gia, góc nhìn độc giả và cổng tiếp nhận bài viết, hồ sơ chủ thể OCOP trên toàn quốc.',
            bgColor: '#F8F5EE',
            quote: {
              text: 'Giá trị lớn nhất của OCOP không nằm ở số lượng đơn hàng tức thời, mà ở sự phục sinh của lòng tự hào bản địa. Mỗi cây cầu nối văn hóa giữa làng quê và người tiêu dùng tri thức là một lần chúng ta bảo vệ thành công kho tàng tri thức ngàn năm của tổ tiên.',
              author: 'ThS. Nguyễn Đình Minh',
              role: 'Viện Nghiên cứu Nông nghiệp Bản địa & Phát triển Nông thôn',
              avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_-NirTexdoI9Rg-GSycuFVDvbvjkBMt5CeZzReiyBAmM_F6CuipIIzbjK6H3-6XKOPv65U2QjYPE5RJBAYaS4c0GC4fmqIjUkNO5mtP4EFqkUHKuy86xlOBksKFGoAPXYE0yPrQ43XJSARmrWIYlGBreECWWY1VlxvFaSDPdyBig720NlC6YX6D7K832wPCB0EuIpc5o-K5ZDhTS4x-VhqVdRUB0yymksmgaQlVQ'
            },
            cta: {
              primary: { label: 'Gửi hồ sơ / Bài viết', href: '/ket-noi', variant: 'secondary' },
              secondary: { label: 'Xem góc nhìn bạn đọc', href: '#', variant: 'outline' }
            }
          }
        ]
      },

      // Category pages
      'san-pham-ocop': {
        hero: {
          eyebrow: 'SẢN PHẨM OCOP VIỆT NAM',
          headline: 'Khám phá những sản phẩm mang dấu ấn bản địa Việt Nam.',
          description: 'Hệ thống tra cứu sản phẩm OCOP đạt chuẩn từ 3 đến 5 sao, kết tinh từ nguồn nguyên liệu đặc hữu và quy trình chế tác truyền thống lưu truyền qua nhiều thế hệ.',
          ctaPrimary: { label: 'Khám phá sản phẩm', href: '#khoi-tra-cuu', variant: 'primary' },
          ctaSecondary: { label: 'Dữ liệu quốc gia', href: '#', variant: 'text' },
          badge: 'Dữ liệu quốc gia lưu trữ hồ sơ tiêu chuẩn phi thương mại',
          backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz7G-mrFNyK5mKR5Wa-gn5pNvQuM49dB8jmZc5v3XzIIzInB5wc9laVTGYQMkNW8eXQdP-KBtdNoM305jYjiINT-jiWlYTRidGiE6oawkTdActQPTTYTaI50Ib29dRZKcq-iwDQHjbZC9jSbOrKR1dUAXNYJrPTUGTfrdFG4FKE9A1dnqBAPiusRVFf-cm7ndilnZ80c2f9ckWHQFms0iUnMnucuUC_u3uWw-cPbU'
        },
        filterTabs: ['Tất cả', 'Theo sao', 'Nông sản & Thực phẩm', 'Dược liệu & Sức khỏe', 'Thủ công mỹ nghệ'],
        filterCategories: {
          'theo-sao': ['5 Sao', '4 Sao', '3 Sao'],
          'nganh': ['Nông sản & Thực phẩm', 'Dược liệu & Sức khỏe', 'Thủ công mỹ nghệ', 'Du lịch nông thôn']
        }
      },
      'cau-chuyen-ocop': {
        hero: {
          eyebrow: 'CÂU CHUYỆN OCOP',
          headline: 'Những hành trình làm nên phần hồn sản phẩm.',
          description: 'Tìm hiểu về người giữ nghề, văn hóa bản địa và các dự án multimedia.',
          ctaPrimary: { label: 'Đọc câu chuyện', href: '#', variant: 'primary' }
        },
        filterTabs: ['Tất cả', 'Hành trình chủ thể', 'Văn hóa bản địa', 'Video/Multimedia']
      },
      'diem-den-du-lich': {
        hero: {
          eyebrow: 'ĐIỂM ĐẾN & DU LỊCH OCOP',
          headline: 'Mỗi vùng đất một bản sắc, mỗi làng nghề một hành trình trải nghiệm.',
          description: 'Khám phá các làng nghề truyền thống, tuyến du lịch sinh thái nông thôn và bản đồ phân bố sản phẩm OCOP khắp Việt Nam.',
          ctaPrimary: { label: 'Khám phá điểm đến', href: '#kham-pha', variant: 'primary' },
          badge: 'Dữ liệu quốc gia',
          backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjnYe1HloeoU0B_S_7xZKUBQjrLobI9JXhlumnNPlSY9Kz_F5vAdGuP_lkqPwwx2pPOo7l0lFoGCiiGi_WI-z6e2LMpAw1ZPeS0n1JjnmsMsBOiwXUXnQwOxI4nEPTxzdU4tOVQbU6sfsOKCTqopIzzqWRvIAEDO-Llc6thNtMjV1QhhaGzFDPtKzYe6RDvVum9ymBNfcNVvB7RHETCywd9n5VEV2CKaCMPlSg2c0'
        },
        filterTabs: ['Tất cả', 'Làng nghề', 'Du lịch sinh thái', 'Bản đồ OCOP']
      },
      'ocop-hoi-nhap': {
        hero: {
          eyebrow: 'OCOP HỘI NHẬP & CHUYỂN ĐỔI SỐ',
          headline: 'Đưa đặc sản bản địa vươn tầm quốc tế và chuyển đổi số.',
          description: 'Phân tích thị trường xuất khẩu, hệ thống tiêu chuẩn quốc tế, giải pháp chuyển đổi số và dòng chảy sự kiện OCOP NOW.',
          ctaPrimary: { label: 'Khám phá OCOP Hội nhập', href: '#xuat-khau', variant: 'primary' },
          backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsDZAfkBfuYTwH0-9icjx3BPhxBG4Mwrzsr-eyVlK5Pxk8skuH9vRGr4D6rn6aRgQUFtpaRVRBolabhpbLh2Tyr1q0DW6Z4xVlQpvuexAycTyHFb7UgJhWEq1hxm0vDJFSrzkQGzj4_owYL6inKteW-e_jHMEDt9z5kTRs_Pvhj-72w8ltM8N-jQIdDtWnkvb0ufspGAhSmZhHJVjmAoSqLNWmUg4AIdB_XvHdVsk'
        },
        filterTabs: ['Tất cả', 'Xuất khẩu', 'Tiêu chuẩn', 'Chuyển đổi số', 'OCOP NOW']
      },
      'tin-tuc-su-kien': {
        hero: {
          eyebrow: 'TIN TỨC & SỰ KIỆN',
          headline: 'Nhịp đập chính sách và chuyển động OCOP toàn quốc.',
          description: 'Cập nhật liên tục các tin tức chính sách, hoạt động xúc tiến thương mại, OCOP địa phương và sự kiện hội chợ.',
          ctaPrimary: { label: 'Xem tất cả tin tức', href: '#', variant: 'primary' }
        },
        filterTabs: ['Tất cả', 'Chính sách', 'Xúc tiến', 'Địa phương', 'Sự kiện'],
        eventStatusTabs: ['Sắp diễn ra', 'Đang diễn ra', 'Đã kết thúc']
      },
      'ban-doc-toa-soan': {
        hero: {
          eyebrow: 'BẠN ĐỌC & TÒA SOẠN',
          headline: 'Góc nhìn bạn đọc và Kết nối cùng Tòa soạn.',
          description: 'Không gian chia sẻ ý kiến chuyên gia, góc nhìn độc giả và cổng tiếp nhận bài viết, hồ sơ chủ thể OCOP trên toàn quốc.',
          ctaPrimary: { label: 'Gửi bài / Hồ sơ', href: '/ket-noi', variant: 'primary' }
        },
        tabs: ['Góc nhìn', 'Gửi hồ sơ', 'Liên hệ']
      },

      // Support pages
      'gioi-thieu': {
        hero: { headline: 'Giới thiệu chuyên trang', description: 'OCOP Việt Nam Điện tử - Tạp chí tri thức bản địa & di sản nông thôn.' }
      },
      'ket-noi': {
        hero: { headline: 'Kết nối Chủ thể OCOP', description: 'Gửi hồ sơ đăng ký thẩm định đạt chuẩn OCOP 3–5 sao.' }
      },
      'lien-he': {
        hero: { headline: 'Liên hệ Tòa soạn', description: 'Gửi góp ý, hợp tác nội dung, quảng cáo hoặc hỗ trợ kỹ thuật.' }
      },
      'chinh-sach-bao-mat': {
        hero: { headline: 'Chính sách bảo mật', description: 'Cam kết bảo vệ thông tin cá nhân người dùng.' }
      },
      'dieu-khoan': {
        hero: { headline: 'Điều khoản sử dụng', description: 'Điều khoản và điều kiện sử dụng dịch vụ OCOP Việt Nam Điện tử.' }
      },
      '404': {
        hero: { headline: '404', description: 'Trang bạn tìm không tồn tại.', cta: { label: 'Về trang chủ', href: '/', variant: 'primary' } }
      }
    },

    // ============================================
    // PRODUCTS COLLECTION
    // ============================================
    products: [
      {
        id: 'tra-dinh-ngoc-tan-cuong',
        slug: 'tra-dinh-ngoc-tan-cuong',
        name: 'Trà Đinh Ngọc Tân Cương',
        stars: 5,
        category: 'Nông sản & Thực phẩm',
        subCategory: 'Trà',
        province: 'Thái Nguyên',
        district: 'Tân Cương',
        producer: 'HTX Trà Tân Cương Thái Nguyên',
        producerType: 'Hợp tác xã',
        description: 'Trà xanh cao cấp được sao truyền thống trên lửa củi, giữ trọn hương vị tự nhiên của búp chè non Tây Côn Lĩnh. Quy trình sản xuất khép kín từ trồng trọt, chăm sóc, thu hái đến chế biến sao chè đều tuân thủ tiêu chuẩn ViệtGAP và đạt chứng nhận OCOP 5 Sao Quốc gia năm 2026.',
        ingredients: ['Búp chè non Tây Côn Lĩnh 100%', 'Nước suối Tân Cương', 'Lửa củi truyền thống'],
        process: ['Thu hái búp non 1 lá 1 mọc', 'Uơi tự nhiên 4-6 tiếng', 'Sao truyền thống lửa củi 30-40 phút', 'Làm nguội và phân loại', 'Đóng gói khép kín'],
        certifications: ['OCOP 5 Sao Quốc gia (2026)', 'VietGAP', 'HACCP', 'ISO 22000'],
        awards: ['Giải Vàng Hội chợ OCOP Quốc gia 2026', 'Top 10 Sản phẩm OCOP xuất sắc'],
        nutritionInfo: 'Chứa catechin, theanine, vitamin C, flavonoid tự nhiên. Không chất bảo quản, không hương liệu.',
        storage: 'Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Sử dụng trong 18 tháng.',
        price: '450.000 - 1.200.000 VNĐ/100g (tùy loại)',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAQZg4eHHL-Oh28ibFos0gPvVhmiL4R3TZDOk1-y7wTnpdxMJwo6TUwjxGNmAAsxr5bcv2KaK1mThBBgmZHxNOWHojD_Y9PpwSk7kun0yH0g1gF-vD-kqyV2SAOpLIsukdPetLMDR41g3tQS0uvuoY1ENAu3fBUtrozsxXvEFse0vQmRnNq-0Nn0Foo0fxGnxCR1z-B-EpJon2EIwIhHmpXB1R8OJj0PUKo8cNdkgo',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB_RvdKPXmCJw-0MUV_XbePYrw8EkBACCtEKe6swC_nzvlGQWzUO9G2eECWgk8FLrHTvjut8kghj--JXiWZMy_t5mh75gfYDojqbptUc2DvmPNSux9c2LMZS8bgf_0xXnOCiMyDONXM1fd49Gt_EHyi03l3a4HgXV4JA326Gh9f6HQ_T8VpU5-FEIGr7GWg83RYkZ050rizCaz7WXC3gKIR4yHuULrAUE4xEvw8GCY'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=example',
        specs: {
          weight: ['50g', '100g', '250g', '500g'],
          origin: 'Đồi chè Tân Cương, Thái Nguyên',
          harvestSeason: 'Tháng 3 - Tháng 11 hàng năm'
        },
        seo: {
          metaTitle: 'Trà Đinh Ngọc Tân Cương - Sản phẩm OCOP 5 Sao Quốc gia | Thái Nguyên',
          metaDescription: 'Trà xanh cao cấp sao truyền thống lửa củi từ đồi chè Tân Cương, đạt OCOP 5 Sao Quốc gia 2026. Mua trực tiếp từ HTX Trà Tân Cương.'
        },
        relatedProducts: ['nuoc-mam-cot-khai-hoan', 'mat-ong-bac-ha', 'gom-phu-lang']
      },
      {
        id: 'nuoc-mam-cot-khai-hoan',
        slug: 'nuoc-mam-cot-khai-hoan',
        name: 'Nước mắm Cốt Khải Hoàn 43°N',
        stars: 5,
        category: 'Nông sản & Thực phẩm',
        subCategory: 'Nước mắm',
        province: 'Kiên Giang',
        district: 'Phú Quốc',
        producer: 'Doanh nghiệp Nước mắm Khải Hoàn Phú Quốc',
        producerType: 'Doanh nghiệp',
        description: 'Nước mắm truyền thống Phú Quốc được ủ lên men tự nhiên trong váo gỗ lim hơn 12 tháng, đạt độ đạm 43°N - tiêu chuẩn cao cấp nhất. Nguyên liệu cá cơm tươi sống được đánh bắt đúng mùa, muối biển săng khô Phú Quốc. Không phụ gia, không màu nhân tạo.',
        ingredients: ['Cá cơm tươi (Stolephorus spp.)', 'Muối biển Phú Quốc', 'Nước suối núi'],
        process: ['Lựa chọn cá tươi', 'Ủ men váo gỗ lim 12+ tháng', 'Lấy nước mắm cốt lần 1', 'Lọc tự nhiên', 'Đóng chai kín'],
        certifications: ['OCOP 5 Sao Quốc gia (2026)', 'VietGAP', 'HACCP', 'ISO 22000', 'Chứng nhận 3 대륙 (US, EU, JP)'],
        awards: ['Sản phẩm OCOP xuất khẩu tiêu biểu 2026', 'Top 5 Nước mắm Việt Nam'],
        storage: 'Nơi khô ráo, nhiệt độ phòng. Sau khi mở dùng trong 12 tháng.',
        price: '180.000 - 450.000 VNĐ/chai (tùy dung tích)',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAN9Jj4ZMQELsX8Ii10OfkJmfNhtIo28EehXMLa3pgJZpNUhHkdqpm3Jz8grSjevMSJ-wecMaTLqrnSNvzG5Jc7WiZijWB_SCxhXdcKA86H9U31NkXkxjhAoyqz0G8hwkWB5P5RjSZ1DFUPnypDKPeI0E-RAY2xuv7_c0yS-uRZkwDLgDgxtqqGObiP-Sv8tLAGYeAwxVIOE-sBQDxVtXXPKMFLexNG1yElcXfX470'
        ],
        slug: 'nuoc-mam-cot-khai-hoan'
      },
      {
        id: 'mat-ong-bac-ha',
        slug: 'mat-ong-bac-ha',
        name: 'Mật ong Bạc Hà Cao nguyên đá',
        stars: 4,
        category: 'Dược liệu & Sức khỏe',
        subCategory: 'Mật ong',
        province: 'Hà Giang',
        district: 'Mèo Vạc',
        producer: 'HTX Nông nghiệp Cao nguyên Mèo Vạc',
        producerType: 'Hợp tác xã',
        description: 'Mật ong rừng tự nhiên từ hoa bạc Hà nở trên cao nguyên đá Đồng Văn - Mèo Vạc. Ong rừng (Apis dorsata) hút mật hoàn toàn tự nhiên, không nuôi cấy. Mật ong có màu hoàng kim trong suốt, vị ngọt thanh, hậu vị hơi chát đặc trưng của nectar hoa bạc Hà.',
        ingredients: ['Mật ong rừng 100% (nectar hoa bạc Hà)'],
        process: ['Thu hoạch theo mùa hoa bạc Hà (10-12)', 'Lọc tự nhiên bằng vải vải', 'Đóng chai kín không tiệt trùng nhiệt'],
        certifications: ['OCOP 4 Sao Quốc gia (2025)', 'VietGAP'],
        storage: 'Nơi khô ráo, nhiệt độ phòng. Không cần tủ lạnh.',
        price: '350.000 - 850.000 VNĐ/hũ (tùy dung tích)',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB9H4shWXKL58ZBWGY66jltbMjcDjKuP6h3T90ZOQO_rshI_K-Gy1juBXsNJAmVJzOxfjktLKYHq4LP-F7WlLeDEyX6kjsOsYYWm2fUS9SnlXrvqekLSlGvuEtRkXjFi_WIaS4uds-2VfbqxX_Fsw7MEQJCNvziRFNVDeB-4DxD-vpii2uLaPAV2Dq_gOUfkxI5qRYZ4sSH4ol8vSBGyRE2RgCXfalZOwNEx8yejQc'
        ],
        slug: 'mat-ong-bac-ha'
      },
      {
        id: 'gom-phu-lang',
        slug: 'gom-phu-lang',
        name: 'Gốm men tro Phù Lãng',
        stars: 4,
        category: 'Thủ công mỹ nghệ',
        subCategory: 'Gốm sứ',
        province: 'Bắc Ninh',
        district: 'Quế Võ',
        producer: 'Xưởng nghệ nhân Nguyễn Văn Tuấn',
        producerType: 'Hộ gia đình',
        description: 'Gốm men tro truyền thống Phù Lãng với kỹ thuật nung hồng than củi 1300°C tạo men tro tự nhiên. Mỗi sản phẩm là duy nhất với hiệu ứng men chảy, màu sắc không thể lặp lại. Truyền thống 700 năm lịch sử làng gốm Phù Lãng.',
        materials: ['Đất sét Phù Lãng', 'Tro rơm/Rơm nung', 'Than củi'],
        process: ['Luyện đất', 'Đập hình trên bàn xoay', 'Sấy tự nhiên', 'Men tro', 'Nung hồng 1300°C', 'Làm nguội từ từ'],
        certifications: ['OCOP 4 Sao Quốc gia (2025)'],
        price: '500.000 - 3.000.000 VNĐ/sản phẩm (tùy kích thước)',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBVAmt1t6f6KrmJqdNkRSK9-zWIGLN9munCAarsnVXUK1FFz3Ec1nAxVfNW4xMOx2m21mRB12TTxS0TQCO53XutEGP3M0sVnGESt9qLdZhvjIcR6plWAjzbd4L1mep8dTzC8ruq9hAm6gEGasVyh9G_1JRE3kPYQFaU8JpgV3ltqxA34whzyqKYcAHbUengbvCeb90hfA9iNvF48hKLs6DTmMEAiwKRZt_HC3R72N8'
        ],
        slug: 'gom-phu-lang'
      }
    ],

    // ============================================
    // STORIES COLLECTION
    // ============================================
    stories: [
      {
        id: 'giu-lua-nghe-sao-che-tan-cuong',
        slug: 'giu-lua-nghe-sao-che-tan-cuong',
        type: 'feature',
        category: 'Văn hóa & Tinh hoa bản địa',
        subCategory: 'Ký sự điền dã',
        province: 'Thái Nguyên',
        district: 'Tân Cương',
        headline: 'Giữ lửa nghề sao chè truyền thống bên sườn núi Tân Cương',
        subHeadline: 'Hơn bốn mươi năm gắn bó với đồi chè trung du, các nghệ nhân vẫn giữ cách sao chè bằng lửa củi, đôi bàn tay trần cảm nhận độ ấm của búp chè non...',
        excerpt: 'Hành trình gìn giữ hương vị trà xanh cao cấp qua nghệ thuật sao chè truyền thống - di sản phi vật thể của người Việt.',
        content: `
          <p>Trên sườn núi Tân Cương - "thủ phủ trà Việt Nam", hương trà xanh bao trùm không gian mỗi mùa thu hái. Nhưng ít người biết, sau mỗi gói trà thơm nồng là những bàn tay nghệ nhân đã trải qua hàng chục năm gắn bó với nghề sao chè truyền thống.</p>

          <h3>Nghệ thuật cảm nhận bằng bàn tay</h3>
          <p>Khác với dây chuyền công nghiệp hiện đại, sao chè truyền thống tại Tân Cương hoàn toàn dựa vào kinh nghiệm và trực giác của người thợ. Không có nhiệt độ kế, không có đồng hồ đếm giờ - chỉ có đôi bàn tay trần, đôi mắt thấu hiểu và trái tim gắn bó.</p>

          <blockquote>"Chè non nó như đứa con, sao quá lửa là cháy, sao ít lửa là hôi. Chỉ tay mẹ mới biết con nóng hay lạnh." - Bác Nguyễn Văn Hùng, 62 tuổi, 40 năm nghề sao chè</blockquote>

          <h3>Quy trình 5 giai đoạn</h3>
          <ol>
            <li><strong>Thu hái:</strong> Chỉ lấy búp non "1 lá 1 mọc" lúc sớm sương 4-6h sáng</li>
            <li><strong>Uơi:</strong> Trải mỏng trên nệm tre, để tự nhiên 4-6 tiếng tùy độ ẩm</li>
            <li><strong>Sao:</strong> Lò gang lửa củi, tay đảo liên tục 30-40 phút, nhiệt độ 120-150°C</li>
            <li><strong>Hấp ướt:</strong> Trùm vải ẩm 5 phút để cân bằng độ ẩm</li>
            <li><strong>Làm nguội & Phân loại:</strong> Tay lọc bỏ cọng già, vỏ, chỉ giữ lại búp non nguyên vẹn</li>
          </ol>

          <h3>Di sản sống</h3>
          <p>Năm 2026, "Nghệ thuật sao chè Tân Cương" được ghi nhận Di sản văn hóa phi vật thể cấp Quốc gia. HTX Trà Tân Cương hiện có 120 hộ gia đình tham gia, thu nhập trung bình 45-60 triệu đồng/tháng/hộ - gấp 3 lần so với bán chè tươi.</p>

          <p>Hơn là sản phẩm, mỗi gói trà Đinh Ngọc mang trong mình hồn cốt của người nông dân Việt: kiên nhẫn, tỉ mỉ, và lòng tự hào bản địa.</p>
        `,
        author: 'Ký sự điền dã của Ban Biên tập',
        authorRole: 'Phóng viên chuyên ngành Nông nghiệp',
        publishedDate: '2026-10-15',
        readTime: '5 phút đọc',
        tags: ['Trà Tân Cương', 'Sao chè truyền thống', 'Di sản phi vật thể', 'OCOP 5 Sao', 'Thái Nguyên'],
        featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbcSvT6wzf5dGT-zwtx5-BiDFP77jMdvMBVXaaUFUnEFySbUKrmgksRzqoHX2iMGzmhfNg1kw8-5wigxLWQqTmrv5qFib3hTiPm3VsQtdbxwniB6gdgpw9YPppVcxG9Msys3OuJKYym0-qnJRvJkVceTANCLzBWxyNtdMXqa3u6pXp952xO91u181FCRe1T9UjxdBB4vsT--TquA7qK3bZvKZTPYkUunJlW0zO8vk',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCbcSvT6wzf5dGT-zwtx5-BiDFP77jMdvMBVXaaUFUnEFySbUKrmgksRzqoHX2iMGzmhfNg1kw8-5wigxLWQqTmrv5qFib3hTiPm3VsQtdbxwniB6gdgpw9YPppVcxG9Msys3OuJKYym0-qnJRvJkVceTANCLzBWxyNtdMXqa3u6pXp952xO91u181FCRe1T9UjxdBB4vsT--TquA7qK3bZvKZTPYkUunJlW0zO8vk'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=example1',
        relatedProducts: ['tra-dinh-ngoc-tan-cuong'],
        relatedStories: ['khao-vong-lua-seg', 'det-tho-cam-cham'],
        seo: {
          metaTitle: 'Giữ lửa nghề sao chè truyền thống Tân Cương - Di sản phi vật thể & OCOP 5 Sao',
          metaDescription: 'Hành trình gìn giữ nghệ thuật sao chè lửa củi 40 năm của nghệ nhân Tân Cương Thái Nguyên. Di sản văn hóa phi vật thể quốc gia gắn liền sản phẩm OCOP 5 Sao Trà Đinh Ngọc.'
        }
      },
      {
        id: 'khao-vong-lua-seg',
        slug: 'khao-vong-lua-seg',
        type: 'story',
        category: 'Hành trình chủ thể',
        subCategory: 'Khởi nghiệp',
        province: 'Lào Cai',
        district: 'Bắc Hà',
        headline: 'Khát vọng hồi sinh giống lúa Séng Cù của người Dao đỏ',
        subHeadline: 'Hành trình bảo tồn giống gạo thơm ngát trên những rẻo cao bậc thang Lào Cai qua nhiều thế hệ đồng bào.',
        excerpt: 'Giống lúa Séng Cù - "hương thơm núi rừng" từng mất đi nay được hồi sinh nhờ nỗ lực của đồng bào Dao đỏ tại Lào Cai.',
        content: `
          <p>Trên những rẻo lúa bậc thang nổi tiếng tại huyện Bắc Hà, tỉnh Lào Cai, giống lúa Séng Cù - "ngọc quý" của đồng bào Dao đỏ - đã được hồi sinh sau gần 20 năm mai một.</p>

          <h3>Giống lúa "mất tích"</h3>
          <p>Séng Cù trong tiếng Dao có nghĩa là "hương thơm núi rừng". Giống lúa này từng được trồng rộng rãi trên các rẻo bậc thang, nhưng do năng suất thấp, nhạy cảm với thời tiết, dần bị thay thế bởi giống lúa lai cao sản. Đến năm 2010, giống lúa này gần như tuyệt chủng.</p>

          <h3>Hành trình hồi sinh</h3>
          <p>Năm 2015, ông Lù A Chải - trưởng lão bản Nậm Mòn - quyết định tìm lại hạt giống Séng Cù từ những vườn nhà giàu gia tộc. Chỉ tìm được 500g hạt giống. Từ 500g ấy, qua 5 vụ mùa gieo trồng, chọn lọc, nhân rộng, đến 2020 diện tích trồng Séng Cù đã đạt 15 ha.</p>

          <h3>Đạt chuẩn OCOP</h3>
          <p>Năm 2023, HTX Nông nghiệp Bản Liền thành lập, tập trung 42 hộ gia đình trồng lúa Séng Cù hữu cơ. Sản phẩm "Gạo Séng Cù Bản Liền" đạt OCOP 3 Sao năm 2024, giá bán cao gấp 3 lần gạo thường.</p>

          <blockquote>"Lúa Séng Cù không chỉ là giống cây trồng, nó là linh hồn của dân tộc Dao. Giữ được hạt giống, chúng ta giữ được bản sắc dân tộc." - Ông Lù A Chải</blockquote>
        `,
        author: 'HTX Nông nghiệp Bản Liền',
        authorRole: 'Chủ tịch HTX',
        publishedDate: '2026-09-20',
        readTime: '4 phút đọc',
        tags: ['Lúa Séng Cù', 'Dân tộc Dao', 'Bảo tồn giống', 'OCOP 3 Sao', 'Lào Cai'],
        featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        relatedProducts: [],
        seo: {
          metaTitle: 'Hồi sinh giống lúa Séng Cù - Hành trình chủ thể OCOP tại Lào Cai',
          metaDescription: 'Câu chuyện hồi sinh giống lúa Séng Cù của người Dao đỏ tại Bắc Hà, Lào Cai. Từ 500g hạt giống đến sản phẩm OCOP 3 Sao, hành trình gìn giữ bản sắc dân tộc.'
        }
      },
      {
        id: 'det-tho-cam-cham',
        slug: 'det-tho-cam-cham',
        type: 'story',
        category: 'Văn hóa bản địa',
        subCategory: 'Nghệ thuật truyền thống',
        province: 'An Giang',
        district: 'Châu Phong',
        headline: 'Gìn giữ kỷ nghệ dệt thổ cẩm Chăm Châu Phong qua bao mùa nước nổi',
        subHeadline: 'Nhịp thoi đưa bên bờ sông Hậu bảo lưu nét hoa văn dệt tay độc bản của phụ nữ làng nghề An Giang.',
        excerpt: 'Hoa văn thổ cẩm Chăm không chỉ là trang trí - đó là ngôn ngữ vô hình ghi lại lịch sử, tín ngưỡng và đời sống của người Chăm.',
        content: `
          <p>Bên bờ sông Hậu uốn lượn, làng nghề dệt thổ cẩm Chăm Châu Phong vẫn giữ nhịp thoi đưa đều đặn hàng ngày. Phụ nữ Chăm từ 15-60 tuổi ngồi trước khung dệt, tay chân phối hợp nhuần nhuyễn tạo nên những mảnh vải mang đậm hồn cốt văn hóa.</p>

          <h3>Ngôn ngữ của hoa văn</h3>
          <p>Mỗi hoa văn trên thổ cẩm đều có ý nghĩa: hoa văn "chèo ngọn" tượng trưng cho sự đoàn kết, "ngư long" tượng trưng cho sự mạnh mẽ, "ngói nhà" tượng trưng cho sự an yên. Người Chăm tin rằng khi dệt, họ đang dệt những lời cầu nguyện vào từng sợi vải.</p>

          <h3>Thách thức và cơ hội</h3>
          <p>Dệt tay hoàn toàn thủ công mất 3-4 tuần cho một mảnh vải 1.2m x 2m. Thu nhập trung bình 5-7 triệu/tháng - thấp hơn lao động phổ thông. Nhiều người trẻ rời làng đi làm công nghiệp.</p>

          <p>Năm 2025, hợp tác xã Dệt thủ công Châu Phong thành lập, kết nối với các đơn vị thiết kế thời trang bền vững tại TP.HCM và Hà Nội. Doanh thu tăng 40%, thu nhập người dệt tăng lên 8-10 triệu/tháng.</p>

          <blockquote>"Dệt không phải để bán, dệt để nhớ. Nhưng nếu bán được giá tốt, con cháu mới chịu ngồi dệt tiếp." - Bà Ka Mśli, 58 tuổi, 40 năm nghề dệt</blockquote>
        `,
        author: 'Làng nghề dệt thổ cẩm Châu Phong',
        authorRole: 'Nghệ nhân dệt truyền thống',
        publishedDate: '2026-08-15',
        readTime: '6 phút đọc',
        tags: ['Thổ cẩm Chăm', 'Dệt thủ công', 'Văn hóa Chăm', 'An Giang', 'Di sản phi vật thể'],
        featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        seo: {
          metaTitle: 'Gìn giữ kỷ nghệ dệt thổ cẩm Chăm Châu Phong - Văn hóa bản địa An Giang',
          metaDescription: 'Nhịp thoi đưa dệt thổ cẩm Chăm bên sông Hậu - ngôn ngữ vô hình của hoa văn, hành trình gìn giữ nghề truyền thống qua bao mùa nước nổi.'
        }
      },
      {
        id: 'thanh-am-gom-do',
        slug: 'thanh-am-gom-do-vinh-long',
        type: 'video',
        category: 'Phóng sự đa phương tiện',
        subCategory: 'Video documentary',
        province: 'Vĩnh Long',
        district: 'Vĩnh Long',
        headline: 'Thanh âm gốm đỏ Vĩnh Long - Trăm tích trăm năm bên dòng Cổ Chiên',
        subHeadline: 'Hành trình 100 năm làng gốm Vĩnh Long qua lăng kính người nghề, từ đất sét đến men tro, từ lò nung đến lòng người.',
        excerpt: 'Video documentary 12:45 khám phá lịch sử, kỹ thuật và con người làng gốm đỏ Vĩnh Long.',
        duration: '12:45',
        videoUrl: 'https://www.youtube.com/watch?v=example2',
        thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhvMm5-n987KKipgAbJ8WLcsuUuEyVO5hwp609-LQlzsMTMtmNq6gFi45P4uV9_WSls9qWxVLSFnZ3IRKwUi5t4oQFGD9kG2YqFJB10fmg6hrxD2tDFK6RMAXoQ4mKrTdetfgxGDAjU_1gmAmxOb7ejsH7c9wF8oTZXkIuLUJ7oiFoUdmX2bLOoFPl9oO7zvoLY8vKLScVcv8y8kaANZPggtfBADZzvxlupQd-87k',
        publishedDate: '2026-07-20',
        tags: ['Gốm đỏ Vĩnh Long', 'Làng nghề', 'Video documentary', 'Di sản nghề'],
        seo: {
          metaTitle: 'Thanh âm gốm đỏ Vĩnh Long - Video documentary 12:45 | OCOP Multimedia',
          metaDescription: 'Video documentary khám phá 100 năm lịch sử làng gốm đỏ Vĩnh Long, từ đất sét đến men tro, từ lò nung đến lòng người nghề.'
        }
      },
      {
        id: 'ban-sac-vung-mien',
        slug: 'ban-sac-vung-mien',
        type: 'feature',
        category: 'Văn hóa & Tinh hoa bản địa',
        subCategory: 'Bản sắc vùng miền',
        province: 'Lào Cai',
        district: 'Sa Pa',
        headline: 'Bản sắc vùng miền: Hành trình tìm lại hương vị nguyên bản Tây Bắc',
        subHeadline: 'Khám phá những sản phẩm OCOP mang đậm bản sắc vùng cao: táo mèo, mắc cỏ, nếp nương, và những câu chuyện người gìn giữ.',
        excerpt: 'Tây Bắc không chỉ đẹp vì những rẻo bậc thang, mà đẹp vì những bàn tay lao động gìn giữ hương vị nguyên bản qua hàng thế hệ.',
        content: `
          <p>Tại Sa Pa, Lào Cai, những sản phẩm OCOP không chỉ là hàng hóa - đó là bản hồn của vùng đất. Từ táo mèo sa phòng, mắc cỏ cầu đắng, đến nếp nương thơm lừng, mỗi sản phẩm đều mang trong mình câu chuyện của người dân tộc.</p>

          <h3>Hương vị từ rừng già</h3>
          <p>Táo mèo Sa Pa được trồng tự nhiên trên rừng già, không phân bón, không thuốc bảo vệ thực vật. Hương vị chua ngọt hòa quyện, giòn tan đặc trưng chỉ có ở độ cao 1.500m trở lên.</p>

          <h3>Người gìn giữ</h3>
          <p>Bà Vàng A Sính, 52 tuổi, người Hmông tại bản Tả Van, đã dành 30 năm gìn giữ giống táo mèo địa phương. "Giống cây giống người, mất giống là mất gốc", bà thường nói. Hiện nay, HTX Táo mèo Sa Pa do bà dẫn đầu đã đạt OCOP 4 Sao, sản phẩm xuất khẩu sang Trung Quốc và Singapore.</p>

          <blockquote>"Bản sắc vùng miền không phải để trưng bày, mà để sống, để ăn, để nhớ, và để truyền lại." - Bà Vàng A Sính</blockquote>
        `,
        author: 'Ban Biên tập OCOP Tây Bắc',
        authorRole: 'Phóng viên chuyên khu vực',
        publishedDate: '2026-11-01',
        readTime: '6 phút đọc',
        tags: ['Táo mèo Sa Pa', 'Mắc cỏ', 'Nếp nương', 'OCOP Tây Bắc', 'Văn hóa Hmông'],
        featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        seo: {
          metaTitle: 'Bản sắc vùng miền Tây Bắc - Sản phẩm OCOP & Câu chuyện người gìn giữ',
          metaDescription: 'Khám phá hương vị nguyên bản Tây Bắc qua táo mèo Sa Pa, mắc cỏ cầu đắng, nếp nương thơm. Câu chuyện người Hmông gìn giữ giống cây, gìn giữ bản sắc dân tộc.'
        }
      },
      {
        id: 'chuyen-doi-so',
        slug: 'chuyen-doi-so',
        type: 'story',
        category: 'Hành trình chủ thể',
        subCategory: 'Chuyển đổi số',
        province: 'Hà Nội',
        district: 'Cầu Giấy',
        headline: 'Chuyển đổi số: Khi nông dân Việt bán hàng trên sàn thương mại điện tử',
        subHeadline: 'Từ sổ sách tay đến dashboard dữ liệu - hành trình chuyển đổi số của các chủ thể OCOP tại Việt Nam.',
        excerpt: 'Chuyển đổi số không chỉ là công nghệ, đó là thay đổi tư duy. Những người nông dân quen tay cày bây giờ thao tác chuột, livestream bán hàng, quản lý đơn bằng app.',
        content: `
          <p>Năm 2024, hơn 1.200 chủ thể OCOP đã thực hiện chuyển đổi số. Con số này dự kiến tăng gấp đôi vào cuối 2026. Nhưng đằng sau con số là những câu chuyện thay đổi tư duy kiên cỏi của người nông dân Việt.</p>

          <h3>Từ sổ tay sang Excel</h3>
          <p>Anh Nguyễn Văn Tuấn, chủ HTX Nông sản sạch Hà Nội, chia sẻ: "Trước tôi ghi nợ, ghi bán trên cuốn sổ dày cộm. Mưa ướt, nêm mờ chữ. Chuyển sang phần mềm quản lý, tôi biết ngay hôm nay bán được bao nhiêu, tồn kho bao nhiêu, khách nào mua nhiều nhất."</p>

          <h3>Livestream - Kênh bán hàng mới</h3>
          <p>Chị Lê Thị Hương, 45 tuổi, chủ cơ sở chế biến mứt OCOP Hưng Yên, bắt đầu livestream từ đầu 2025. "Lần đầu run run, nói lắp bắp. Lần thứ 10 thì tự nhiên. Đơn hàng từ livestream giờ chiếm 60% doanh thu."</p>

          <h3>Dữ liệu - Tài sản quý giá</h3>
          <p>Chuyển đổi số giúp chủ thể OCOP nắm được dữ liệu khách hàng, thói quen tiêu dùng, từ đó điều chỉnh sản phẩm, marketing chính xác hơn. "Dữ liệu là mỏ dầu mới. Ai khai thác tốt, ai dẫn đầu", anh Tuấn khẳng định.</p>
        `,
        author: 'Bộ Nông nghiệp & PTNT',
        authorRole: 'Phòng Chuyển đổi số',
        publishedDate: '2026-10-20',
        readTime: '5 phút đọc',
        tags: ['Chuyển đổi số', 'Thương mại điện tử', 'Livestream', 'OCOP', 'Công nghệ nông nghiệp'],
        featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARPK-sB1Hxl_996L23VT7vkhQas6o-RO3t85uttjM8GGzJGVfgWh-DRRVFfAvNLac6huYYAUER2MCqEBbIroHWgydsvb-_Jj4Bkl3uu6SF0iLnqB-0TJ0aDvcDwgj4rgsDT9l7J-SQZCdNnuciHcqh-fcmAbV7SWRO-aJepFOMWP3t59409rvkgh9ARxPQsJ4CeeFFd5IlXgWZZwGE0twZ-noXsuW7RuO1xP2aTKg',
        seo: {
          metaTitle: 'Chuyển đổi số OCOP - Nông dân Việt bán hàng online, livestream, quản lý bằng app',
          metaDescription: 'Hành trình chuyển đổi số của 1.200+ chủ thể OCOP: từ sổ sách tay đến dashboard dữ liệu, livestream bán hàng, quản lý đơn bằng ứng dụng di động.'
        }
      },
      {
        id: 'di-san-ban-dia',
        slug: 'di-san-ban-dia',
        type: 'story',
        category: 'Văn hóa bản địa',
        subCategory: 'Di sản bản địa',
        province: 'Huế',
        district: 'Thừa Thiên Huế',
        headline: 'Di sản bản địa: Nhạc cung đình Huế và những ngón tay gìn giữ âm thanh ngàn năm',
        subHeadline: 'Nhạc cung đình Huế - Di sản văn hóa phi vật thể đại diện nhân loại, và hành trình truyền thừa của các nghệ nhân宮廷.',
        excerpt: 'Nhạc cung đình Huế không chỉ là âm nhạc, đó là triết lý, là lối sống, là cầu nối giữa trời đất và con người. Những nghệ nhân cung đình vẫn gìn giữ từng nốt nhạc như gìn giữ hơi thở.',
        content: `
          <p>Tại Huế, âm nhạc cung đình không chỉ biểu diễn - đó là nghi thức. Mỗi bài nhạc, mỗi điệu nhạc đều có quy tắc nghiêm ngặt về trình tự, về âm giai, về trang phục, về không gian biểu diễn.</p>

          <h3>Nghệ nhân Nguyễn Văn Đăng</h3>
          <p>Ông Đăng, 78 tuổi, là một trong những nghệ nhân còn lại biết trọn vẹn repertoire nhạc cung đình. "Tôi học từ cha, cha học từ ông. Truyền miệng, truyền tim. Không có bản ghi âm nào trọn vẹn như truyền miệng."</p>

          <h3>Truyền thừa cho thế hệ trẻ</h3>
          <p>Năm 2023, Viện Nghiên cứu Nhạc cung đình Huế thành lập lớp truyền thụ cho 30 học viên trẻ. Chương trình 3 năm: năm 1 học lý thuyết, năm 2 học nhạc cụ, năm 3 học trình độ biểu diễn. Hiện có 12 học viên đã biểu diễn được các bài nhạc lớn.</p>

          <blockquote>"Di sản không phải để bảo tàng, di sản phải sống. Sống trong lòng người, sống trong giọng hát, sống trong từng ngón tay kéo đàn, đập trống." - Nghệ nhân Nguyễn Văn Đăng</blockquote>
        `,
        author: 'Viện Nghiên cứu Nhạc cung đình Huế',
        authorRole: 'Giảng viên',
        publishedDate: '2026-09-10',
        readTime: '7 phút đọc',
        tags: ['Nhạc cung đình Huế', 'Di sản phi vật thể', 'UNESCO', 'Nghệ nhân', 'Văn hóa Huế'],
        featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        seo: {
          metaTitle: 'Di sản bản địa: Nhạc cung đình Huế & Nghệ nhân gìn giữ âm thanh ngàn năm',
          metaDescription: 'Nhạc cung đình Huế - Di sản văn hóa phi vật thể đại diện nhân loại UNESCO. Câu chuyện nghệ nhân Nguyễn Văn Đăng và hành trình truyền thừa cho thế hệ trẻ.'
        }
      },
      {
        id: 'khoi-nghiep-xanh',
        slug: 'khoi-nghiep-xanh',
        type: 'story',
        category: 'Hành trình chủ thể',
        subCategory: 'Khởi nghiệp xanh',
        province: 'Đà Nẵng',
        district: 'Sơn Trà',
        headline: 'Khởi nghiệp Xanh: Từ rác thải nông nghiệp thành vật liệu xây dựng thân thiện môi trường',
        subHeadline: 'Đội ngũ trẻ tại Đà Nẵng biến vỏ trấu, thân cây đùi ghế, rơm rạ thành gạch không nung, tấm cách nhiệt - giải pháp cho nông nghiệp và xây dựng bền vững.',
        excerpt: 'Mỗi năm Việt Nam sinh ra hàng chục triệu tấn rác thải nông nghiệp. Những người trẻ tại Đà Nẵng thấy ở đó tài nguyên, không phải rác thải.',
        content: `
          <p>Năm 2022, nhóm sinh viên Đại học Đà Nẵng (ĐH Đà Nẵng) thành lập startup "GreenBuild" với ý tưởng: biến rác thải nông nghiệp thành vật liệu xây dựng xanh.</p>

          <h3>Từ ý tưởng đến sản phẩm</h3>
          <p>Vỏ trấu, thân cây đùi ghế, rơm rạ - những thứ thường bị đốt hoặc chôn lấp - được ép thành gạch không nung, tấm cách nhiệt, ván ép sinh học. Sản phẩm đạt chuẩn chống cháy, cách nhiệt tốt hơn gạch truyền thống, giá thành thấp 20%.</p>

          <h3>Hợp tác với nông dân</h3>
          <p>GreenBuild ký hợp đồng mua vỏ trấu, rơm rạ của 500 hộ nông dân tại Quảng Nam, Quảng Ngãi. Nông dân thu thêm 2-3 triệu/tháng từ thứ trước đây bị đốt. "Trước tôi đốt vỏ trấu, khói bụi mù mịt. Giờ bán được tiền, không khí trong lành", anh Nguyễn Văn Hùng, nông dân Quảng Nam chia sẻ.</p>

          <h3>Đạt OCOP & Mở rộng</h3>
          <p>Năm 2025, "Gạch không nung từ vỏ trấu GreenBuild" đạt OCOP 3 Sao. Đơn vị đang mở rộng sản xuất lên 10.000 m²/năm, mục tiêu 2027 cung cấp cho 100 dự án nhà ở xã hội tại miền Trung.</p>

          <blockquote>"Khởi nghiệp xanh không chỉ làm giàu, mà làm sạch môi trường, làm giàu cho nông dân. Ba thắng lợi trong một." - Trần Văn Nam, CEO GreenBuild</blockquote>
        `,
        author: 'GreenBuild Startup',
        authorRole: 'CEO & Founder',
        publishedDate: '2026-10-05',
        readTime: '5 phút đọc',
        tags: ['Khởi nghiệp xanh', 'Rác thải nông nghiệp', 'Vật liệu xây dựng', 'OCOP', 'Bền vững', 'Đà Nẵng'],
        featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARPK-sB1Hxl_996L23VT7vkhQas6o-RO3t85uttjM8GGzJGVfgWh-DRRVFfAvNLac6huYYAUER2MCqEBbIroHWgydsvb-_Jj4Bkl3uu6SF0iLnqB-0TJ0aDvcDwgj4rgsDT9l7J-SQZCdNnuciHcqh-fcmAbV7SWRO-aJepFOMWP3t59409rvkgh9ARxPQsJ4CeeFFd5IlXgWZZwGE0twZ-noXsuW7RuO1xP2aTKg',
        seo: {
          metaTitle: 'Khởi nghiệp Xanh: Biến rác thải nông nghiệp thành vật liệu xây dựng OCOP',
          metaDescription: 'GreenBuild Đà Nẵng biến vỏ trấu, rơm rạ thành gạch không nung, tấm cách nhiệt OCOP 3 Sao. Giải pháp 3 thắng: sạch môi trường, giàu nông dân, vật liệu xanh.'
        }
      }
    ],

    // ============================================
    // BUSINESSES COLLECTION (Chủ thể OCOP)
    // ============================================
    businesses: [
      {
        id: 'hop-tac-xa-tra-tan-cuong-thai-nguyen',
        slug: 'hop-tac-xa-tra-tan-cuong-thai-nguyen',
        name: 'Hợp tác xã Trà Tân Cương Thái Nguyên',
        type: 'Hợp tác xã',
        positioning: 'Đơn vị tiên phong sản xuất trà OCOP 5 Sao Quốc gia, gìn giữ nghệ thuật sao chè truyền thống.',
        representative: 'Ông Nguyễn Văn Hùng',
        position: 'Chủ tịch HTX',
        province: 'Thái Nguyên',
        district: 'Tân Cương',
        address: 'Thôn Cổ Dũng, xã Tân Cương, TP. Thái Nguyên',
        establishedYear: 2010,
        members: 120,
        landArea: '45 ha',
        annualRevenue: '15-20 tỷ VNĐ',
        mainProducts: ['Trà Đinh Ngọc Tân Cương (5 Sao)', 'Trà xanh Tân Cương (4 Sao)', 'Trà đen Thanh Vị (3 Sao)'],
        certifications: ['OCOP 5 Sao', 'VietGAP', 'HACCP', 'ISO 22000', 'Di sản phi vật thể: Nghệ thuật sao chè'],
        exportMarkets: ['Nhật Bản', 'Hàn Quốc', 'Đài Loan', 'Mỹ'],
        contact: {
          phone: '0280 3845 678',
          email: 'hatxtancuong@thainguyen.gov.vn',
          website: 'hatra-tancuong.vn',
          facebook: 'HTXTratanCuong'
        },
        description: 'Hợp tác xã Trà Tân Cương thành lập năm 2010, tập hợp 120 hộ gia đình trà tại thôn Cổ Dũng. HTX tập trung sản xuất trà xanh cao cấp theo phương pháp sao truyền thống lửa củi, kết hợp tiêu chuẩn VietGAP và HACCP. Sản phẩm "Trà Đinh Ngọc Tân Cương" đạt OCOP 5 Sao Quốc gia năm 2026, xuất khẩu sang 4 quốc gia.',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM'
        ],
        seo: {
          metaTitle: 'HTX Trà Tân Cương Thái Nguyên - Chủ thể OCOP 5 Sao Trà Đinh Ngọc',
          metaDescription: 'Hợp tác xã Trà Tân Cương - đơn vị tiên phong sản xuất trà OCOP 5 Sao, gìn giữ nghệ thuật sao chè truyền thống lửa củi 40 năm tại Thái Nguyên.'
        }
      },
      {
        id: 'doanh-nghiep-nuoc-mam-khai-hoan',
        slug: 'doanh-nghiep-nuoc-mam-khai-hoan',
        name: 'Doanh nghiệp Nước mắm Khải Hoàn Phú Quốc',
        type: 'Doanh nghiệp',
        positioning: 'Thương hiệu nước mắm truyền thống Phú Quốc đạt OCOP 5 Sao, xuất khẩu 3 châu lục.',
        representative: 'Bà Nguyễn Thị Hương',
        position: 'Giám đốc',
        province: 'Kiên Giang',
        district: 'Phú Quốc',
        address: 'Khu công nghiệp An Thới, thị xã Phú Quốc, Kiên Giang',
        establishedYear: 1995,
        employees: 85,
        landArea: '2.5 ha',
        annualRevenue: '120 tỷ VNĐ',
        mainProducts: ['Nước mắm Cốt Khải Hoàn 43°N (5 Sao)', 'Nước mắm Nhĩ 35°N (4 Sao)', 'Nước mắm loại 1 (3 Sao)'],
        certifications: ['OCOP 5 Sao', 'VietGAP', 'HACCP', 'ISO 22000', 'BRCGS', 'FDA (Mỹ)', 'EU Organic'],
        exportMarkets: ['Mỹ', 'EU', 'Nhật Bản', 'Hàn Quốc', 'Singapore', 'Malaysia'],
        contact: {
          phone: '0297 3998 888',
          email: 'info@khaihoanfishsauce.vn',
          website: 'khaihoanfishsauce.vn'
        },
        description: 'Doanh nghiệp Nước mắm Khải Hoàn thành lập 1995, là đơn vị tiên phong sản xuất nước mắm truyền thống Phú Quốc theo quy trình ủ men váo gỗ lim 12+ tháng. Sản phẩm "Nước mắm Cốt Khải Hoàn 43°N" đạt OCOP 5 Sao Quốc gia, xuất khẩu ra 3 châu lục, đạt chứng nhận FDA (Mỹ), EU Organic.',
        contact: {
          phone: '0297 3998 888',
          email: 'info@khaihoanfishsauce.vn',
          website: 'khaihoanfishsauce.vn'
        },
        seo: {
          metaTitle: 'Doanh nghiệp Nước mắm Khải Hoàn - Nước mắm Phú Quốc OCOP 5 Sao',
          metaDescription: 'Doanh nghiệp Nước mắm Khải Hoàn Phú Quốc - Thương hiệu nước mắm truyền thống đạt OCOP 5 Sao, xuất khẩu 3 châu lục, chứng nhận FDA, EU Organic.'
        }
      },
      {
        id: 'htx-nong-nghiep-cao-nguyen-meo-vac',
        slug: 'htx-nong-nghiep-cao-nguyen-meo-vac',
        name: 'HTX Nông nghiệp Cao nguyên Mèo Vạc',
        type: 'Hợp tác xã',
        positioning: 'Đơn vị bảo tồn mật ong bạc Hà rừng tự nhiên trên cao nguyên đá Đồng Văn.',
        representative: 'Ông Vàng A Sính',
        position: 'Chủ tịch HTX',
        province: 'Hà Giang',
        district: 'Mèo Vạc',
        address: 'Bản Pải Lủng, xã Tả Lũng, huyện Mèo Vạc, Hà Giang',
        establishedYear: 2018,
        members: 42,
        landArea: 'Rừng tự nhiên 200 ha',
        annualRevenue: '3-5 tỷ VNĐ',
        mainProducts: ['Mật ong Bạc Hà Cao nguyên đá (4 Sao)', 'Mật ong đa hoa rừng (3 Sao)'],
        certifications: ['OCOP 4 Sao', 'VietGAP'],
        exportMarkets: ['Trong nước'],
        contact: {
          phone: '0219 3865 432',
          email: 'htxcaonguyen.meovac@hagiang.gov.vn'
        },
        description: 'HTX Nông nghiệp Cao nguyên Mèo Vạc thành lập 2018, tập hợp 42 hộ gia đình người Hmông, Dao tại cao nguyên đá Đồng Văn. HTX tập trung bảo tồn ong rừng (Apis dorsata) và thu hái mật ong bạc Hà tự nhiên theo phương pháp truyền thống. Sản phẩm "Mật ong Bạc Hà Cao nguyên đá" đạt OCOP 4 Sao năm 2025.',
        seo: {
          metaTitle: 'HTX Nông nghiệp Cao nguyên Mèo Vạc - Mật ong Bạc Hà OCOP 4 Sao',
          metaDescription: 'Hợp tác xã Nông nghiệp Cao nguyên Mèo Vạc - Đơn vị bảo tồn mật ong bạc Hà rừng tự nhiên trên cao nguyên đá Đồng Văn, đạt OCOP 4 Sao năm 2025.'
        }
      },
      {
        id: 'xuong-nghe-nhan-nguyen-van-tuan',
        slug: 'xuong-nghe-nhan-nguyen-van-tuan',
        name: 'Xưởng nghệ nhân Nguyễn Văn Tuấn',
        type: 'Hộ gia đình',
        positioning: 'Người gìn giữ ngọn lửa lò gốm men tro Phù Lãng truyền thống 700 năm.',
        representative: 'Ông Nguyễn Văn Tuấn',
        position: 'Nghệ nhân / Chủ xưởng',
        province: 'Bắc Ninh',
        district: 'Quế Võ',
        address: 'Làng gốm Phù Lãng, xã Phù Lãng, huyện Quế Võ, Bắc Ninh',
        establishedYear: 1990,
        employees: 8,
        landArea: '500 m²',
        annualRevenue: '1.2 tỷ VNĐ',
        mainProducts: ['Gốm men tro Phù Lãng (4 Sao)', 'Gốm men xanh', 'Gốm men nâu'],
        certifications: ['OCOP 4 Sao'],
        exportMarkets: ['Trong nước'],
        contact: {
          phone: '0987 654 321',
          email: 'nguyenvantuan.gom@gmail.com'
        },
        description: 'Xưởng nghệ nhân Nguyễn Văn Tuấn là đơn vị gìn giữ truyền thống gốm men tro Phù Lãng 700 năm. Nghệ nhân Nguyễn Văn Tuấn (sinh 1965) là người thừa kế thế hệ thứ 7, nung gốm hồng than củi 1300°C tạo men tro tự nhiên. Mỗi sản phẩm là duy nhất với hiệu ứng men chảy không thể lặp lại.',
        seo: {
          metaTitle: 'Nghệ nhân Nguyễn Văn Tuấn - Gốm men tro Phù Lãng OCOP 4 Sao',
          metaDescription: 'Xưởng nghệ nhân Nguyễn Văn Tuấn - Người gìn giữ ngọn lửa lò gốm men tro Phù Lãng 700 năm, đạt OCOP 4 Sao năm 2025.'
        }
      }
    ],

    // ============================================
    // DESTINATIONS COLLECTION
    // ============================================
    destinations: [
      {
        id: 'tinh-thai-nguyen',
        slug: 'tinh-thai-nguyen',
        name: 'Tỉnh Thái Nguyên',
        region: 'Trung du Bắc Bộ',
        province: 'Thái Nguyên',
        description: 'Vùng đất trung du nổi tiếng với đồi chè cổ truyền và du lịch trải nghiệm văn hóa trà. 32 sản phẩm OCOP, 12 câu chuyện, 5 làng nghề.',
        highlights: ['Đồi chè Tân Cương', 'Hồ Núi Cốc', 'Khu di tích ATK Đền Hùng', 'Làng gốm Phù Lãng (gần ranh)'],
        stats: { products: 32, stories: 12, businesses: 8, craftVillages: 5 },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        coordinates: { lat: 21.5928, lng: 105.8442 },
        itineraries: [
          { id: 'tra-cuong-1ngay', title: 'Trải nghiệm văn hóa trà 1 ngày', duration: '1 ngày', description: 'Thu hái chè - Sao chè truyền thống - Thưởng trà - Mua quà', highlights: ['Thu hái búp non 1 lá 1 mọc', 'Học sao chè lửa củi', 'Trà đạo Việt Nam', 'Mua trà OCOP 5 Sao'] },
          { id: 'nuoc-coc-2ngay', title: 'Du lịch sinh thái Hồ Núi Cốc 2 ngày 1 đêm', duration: '2 ngày 1 đêm', description: 'Du thuyền hồ - Tham quan hang động - Du lịch cộng đồng', highlights: ['Du thuyền 89 đảo', 'Hang đébrì', 'Làng nghề gốm Phù Lãng', 'Ẩm thực miền núi'] }
        ],
        seo: {
          metaTitle: 'Du lịch OCOP Thái Nguyên - Trải nghiệm văn hóa trà, làng nghề & bản đồ 34 tỉnh',
          metaDescription: 'Khám phá Thái Nguyên: đồi chè Tân Cương, hồ Núi Cốc, làng gốm Phù Lãng. 32 sản phẩm OCOP, 12 câu chuyện, 5 làng nghề. Bản đồ OCOP 34 tỉnh thành.'
        }
      },
      {
        id: 'hoi-an-quang-nam',
        slug: 'hoi-an-quang-nam',
        name: 'Hội An, Quảng Nam',
        region: 'Trung Bộ',
        province: 'Quảng Nam',
        description: 'Phố cổ Hội An - Di sản văn hóa thế giới UNESCO, kết hợp du lịch trải nghiệm làng rau Trà Quế và gốm Thanh Hà.',
        highlights: ['Phố cổ Hội An (UNESCO)', 'Làng rau Trà Quế', 'Làng gốm Thanh Hà', 'Bãi biển An Bàng', 'Cầu Nhật Bản'],
        stats: { products: 18, stories: 3, businesses: 12, craftVillages: 4 },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        coordinates: { lat: 15.8801, lng: 108.3380 },
        itineraries: [
          { id: 'hoian-traque-1ngay', title: 'Trải nghiệm canh tác hữu cơ Làng rau Trà Quế', duration: '1 ngày', description: 'Gieo trồng - Chăm sóc - Thu hoạch - Nấu ăn từ rau tự hái', highlights: ['Canh tác hữu cơ', 'Nấu ăn dân dã', 'Đạp xe quanh làng', 'Mua rau sạch'] },
          { id: 'thanha-gom-1ngay', title: 'Trải nghiệm gốm Thanh Hà', duration: '1 ngày', description: 'Đập hình - Men tro - Nung lò - Mang về sản phẩm', highlights: ['Đập hình trên bàn xoay', 'Men tro truyền thống', 'Nung lò hồng', 'Mang về cốc/gốm'] }
        ],
        seo: {
          metaTitle: 'Du lịch OCOP Hội An - Làng rau Trà Quế, gốm Thanh Hà & Di sản UNESCO',
          metaDescription: 'Trải nghiệm Hội An: phố cổ UNESCO, làng rau Trà Quế hữu cơ, gốm Thanh Hà truyền thống. 18 sản phẩm OCOP, 4 làng nghề.'
        }
      },
      {
        id: 'sa-dec-dong-thap',
        slug: 'sa-dec-dong-thap',
        name: 'Sa Đéc, Đồng Tháp',
        region: 'Nam Bộ',
        province: 'Đồng Tháp',
        description: 'Làng hoa trăm tuổi Sa Đéc và mô hình du lịch nông nghiệp xanh trên đồng bằng sông Cửu Long.',
        highlights: ['Vườn hoa Sa Đéc', 'Làng gốm Sa Đéc', 'Chợ nổi Cái Bè', 'Vườn đầm Tràm Chim'],
        stats: { products: 15, stories: 2, businesses: 8, craftVillages: 3 },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        coordinates: { lat: 10.2919, lng: 105.7581 },
        itineraries: [
          { id: 'vườn-hoa-1ngay', title: 'Tham quan Vườn hoa Sa Đéc', duration: '1 ngày', description: 'Chiêm ngưỡng trăm loài hoa - Chụp ảnh - Mua cây cảnh', highlights: ['Hoa lan, hoa cúc, hoa hồng', 'Kỹ thuật trồng kính', 'Mua hoa về trồng'] },
          { id: 'dam-tra-chim-1ngay', title: 'Du lịch sinh thái Vườn quốc gia Tràm Chim', duration: '1 ngày', description: 'Quan sát chim di cư - Du thuyền rừng ngập nước', highlights: ['Chim sếu đầu đỏ', 'Rừng Melaleuca', 'Du thuyền ghe'] }
        ],
        seo: {
          metaTitle: 'Du lịch OCOP Sa Đéc Đồng Tháp - Vườn hoa trăm tuổi & Du lịch nông nghiệp xanh',
          metaDescription: 'Khám phá Sa Đéc: Vườn hoa trăm tuổi, làng gốm, chợ nổi Cái Bè. 15 sản phẩm OCOP, du lịch nông nghiệp xanh đồng bằng sông Cửu Long.'
        }
      },
      {
        id: 'lang-nghe',
        slug: 'lang-nghe',
        name: 'Làng nghề Việt Nam',
        region: 'Toàn quốc',
        province: 'Nhiều tỉnh thành',
        description: 'Hành trình khám phá 420+ làng nghề truyền thống Việt Nam: gốm, dệt, mộc, kim loại, giấy. Mỗi làng nghề là một câu chuyện văn hóa, một di sản cần được gìn giữ và phát triển bền vững.',
        highlights: ['Làng gốm Bát Tràng (Hà Nội)', 'Làng dệt Vạn Phúc (Hà Nội)', 'Làng gốm Phù Lãng (Bắc Ninh)', 'Làng mộc Đồng Kỵ (Bắc Ninh)', 'Làng giấy Đồ (Hà Nam)', 'Làng đan tre Phú Vinh (Hà Nội)'],
        stats: { products: 280, stories: 45, businesses: 120, craftVillages: 420 },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        coordinates: { lat: 21.0285, lng: 105.8542 },
        itineraries: [
          { id: 'lang-nghe-bac-3ngay', title: 'Khám phá làng nghề miền Bắc 3 ngày', duration: '3 ngày 2 đêm', description: 'Bát Tràng - Vạn Phúc - Phù Lãng - Đồng Kỵ - Đồ', highlights: ['Đập gốm Bát Tràng', 'Dệt lụa Vạn Phúc', 'Mộc đồng Kỵ', 'Giấy thủ công Đồ', 'Ẩm thực làng nghề'] },
          { id: 'lang-nghe-trung-3ngay', title: 'Hành trình làng nghề miền Trung 3 ngày', duration: '3 ngày 2 đêm', description: 'Thanh Hà - Mỹ Xuân - Phước Kiều - Non Nước', highlights: ['Gốm Thanh Hà', 'Dệt vải Mỹ Xuân', 'Đúc đồng Phước Kiều', 'Điêu khắc đá Non Nước', 'Du lịch cộng đồng'] }
        ],
        seo: {
          metaTitle: 'Làng nghề Việt Nam - 420+ làng nghề truyền thống, du lịch trải nghiệm & sản phẩm OCOP',
          metaDescription: 'Khám phá 420+ làng nghề Việt Nam: gốm Bát Tràng, dệt Vạn Phúc, mộc Đồng Kỵ, giấy Đồ. Du lịch trải nghiệm, sản phẩm OCOP, câu chuyện người giữ nghề.'
        }
      },
      {
        id: 'du-lich-sinh-thai',
        slug: 'du-lich-sinh-thai',
        name: 'Du lịch sinh thái & Nông thôn',
        region: 'Toàn quốc',
        province: 'Nhiều tỉnh thành',
        description: 'Mô hình du lịch sinh thái, du lịch cộng đồng và nông nghiệp xanh kết hợp sản phẩm OCOP tại 34 tỉnh thành. Trải nghiệm sống cùng người dân, học nghề, thưởng thức ẩm thực bản địa.',
        highlights: ['Du lịch cộng đồng Mộc Châu (Sơn La)', 'Du lịch sinh thái Cúc Phương (Ninh Bình)', 'Nông nghiệp xanh Đà Lạt (Lâm Đồng)', 'Du lịch trải nghiệm Mê Linh (Hà Nội)', 'Hồ Ba Bể (Bắc Kạn)', 'Vườn quốc gia Yok Đôn (Đắk Lắk)'],
        stats: { products: 180, stories: 38, businesses: 95, craftVillages: 85 },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        coordinates: { lat: 21.0285, lng: 105.8542 },
        itineraries: [
          { id: 'moc-chau-2ngay', title: 'Du lịch cộng đồng Mộc Châu 2 ngày 1 đêm', duration: '2 ngày 1 đêm', description: 'Homestay người Thái - Trải nghiệm canh tác - Văn hóa sạp', highlights: ['Ngủ nhà sàn người Thái', 'Học xòe, khắp', 'Canh tác chè, cây ăn quả', 'Thưởng thức ẩm thực Tây Bắc'] },
          { id: 'cuc-phuong-2ngay', title: 'Du lịch sinh thái Cúc Phương 2 ngày 1 đêm', duration: '2 ngày 1 đêm', description: 'Rừng nguyên sinh - Hang động - Bảo tồn tự nhiên', highlights: ['Cây cổ thụ 1000 năm', 'Hang động tiền sử', 'Trung tâm cứu hộ động vật', 'Đi bộ rừng đêm'] }
        ],
        seo: {
          metaTitle: 'Du lịch sinh thái OCOP Việt Nam - Du lịch cộng đồng, nông nghiệp xanh & trải nghiệm bản địa',
          metaDescription: 'Du lịch sinh thái Việt Nam: Mộc Châu, Cúc Phương, Đà Lạt, Mê Linh, Ba Bể, Yok Đôn. Homestay, canh tác, ẩm thực bản địa, sản phẩm OCOP tại chỗ.'
        }
      },
      {
        id: 'ban-do-ocop',
        slug: 'ban-do-ocop',
        name: 'Bản đồ OCOP 34 Tỉnh thành',
        region: 'Toàn quốc',
        province: '34 Tỉnh thành',
        description: 'Bản đồ tương tác hiển thị 2.500+ sản phẩm OCOP, 1.800+ chủ thể, 420+ làng nghề, 150+ điểm đến du lịch trên 34 tỉnh thành. Tìm kiếm, lọc theo danh mục, vùng miền, cấp sao OCOP.',
        highlights: ['Tìm kiếm sản phẩm theo tên/mã', 'Lọc theo cấp sao (3-5 Sao)', 'Lọc theo danh mục (Thực phẩm, Nghệ thuật, Du lịch)', 'Xem chi tiết chủ thể, quy trình sản xuất', 'Chỉ đường đến điểm bán/du lịch', 'Xuất báo cáo PDF/Excel'],
        stats: { products: 2500, stories: 120, businesses: 1800, craftVillages: 420 },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFL1Ke88SRySTlPYnzJIharRmD2XALCQnwGRfsNcguj_aLEMr6V9rXdkBq1NJKWpoeUawNbGklbIiYpoGmnQP1CYNSyrmpG0XqJewZmKdFZWFUtrm-8wrmc0QKgoM2t9YRZl3_u-RM9GFtJ-BnMUGKXN2HiBkDyo_HpoAKwtaPbnLP5tPyK8bqtGZHffyaV7m-Zt4mxjclDjVgRJW7o4K2IhLp7x0Qp66_Lyo3QM',
        coordinates: { lat: 21.0285, lng: 105.8542 },
        itineraries: [],
        seo: {
          metaTitle: 'Bản đồ OCOP Việt Nam - 2.500+ sản phẩm, 1.800+ chủ thể, 34 tỉnh thành tương tác',
          metaDescription: 'Bản đồ OCOP Việt Nam tương tác: tìm 2.500+ sản phẩm, 1.800+ chủ thể, 420+ làng nghề, 150+ điểm đến trên 34 tỉnh. Lọc theo sao, danh mục, vùng miền.'
        }
      }
    ],

    // ============================================
    // INTEGRATION ARTICLES & OCOP NOW
    // ============================================
    integrationArticles: [
      {
        id: 'tiem-nang-dua-tra-va-thao-duoc-vao-eu',
        slug: 'tiem-nang-dua-tra-va-thao-duoc-vao-eu',
        category: 'Xuất khẩu & Thị trường quốc tế',
        headline: 'Tiềm năng đưa trà và thảo dược OCOP 5 sao vào thị trường châu Âu',
        subHeadline: 'Nhu cầu sản phẩm hữu cơ có chứng nhận nguồn gốc tại EU mở ra cơ hội lớn giai đoạn 2026–2030...',
        excerpt: 'Phân tích sâu về rào cản kỹ thuật, cơ hội thị trường và lộ trình chuẩn bị hồ sơ kỹ thuật cho trà Tân Cương và thảo dược OCOP 5 sao truy nhập EU.',
        content: `
          <p>Thị trường EU là đích đến hấp dẫn nhất cho sản phẩm OCOP Việt Nam giai đoạn 2026-2030. Với nhu cầu tiêu dùng sản phẩm hữu cơ, có chứng nhận nguồn gốc (GI) và rastreability tăng 15-20%/năm, trà Tân Cương và các dòng thảo dược OCOP 5 sao có lợi thế cạnh tranh mạnh.</p>

          <h3>Rào cản kỹ thuật chính</h3>
          <ul>
            <li><strong>Chứng nhận hữu cơ EU:</strong> Cần chuyển đổi từ VietGAP sang EU Organic (tốn 2-3 năm chuyển đổi)</li>
            <li><strong>Chỉ dẫn GI (Geographical Indication):</strong> Cần đăng ký bảo hộ chỉ dẫn địa lý tại EU cho "Trà Tân Cương"</li>
            <li><strong>Rastreability (Truy xuất nguồn gốc):</strong> Hệ thống QR code truy xuất từ vườn đến bàn tay người tiêu dùng EU</li>
            <li><strong>Tiêu chuẩn dư lượng thuốc bảo vệ thực vật:</strong> Tuân thủ MRLs (Maximum Residue Levels) khắt khe của EU</li>
          </ul>

          <h3>Cơ hội thị trường</h3>
          <p>Năm 2025, kim ngạch xuất khẩu trà sang EU đạt 45 triệu USD, tăng 28% so với 2024. Phân khúc trà hữu cơ cao cấp (premium organic tea) tăng trưởng 35%/năm. Giá trung bình trà hữu cơ Việt Nam tại EU: 12-18 EUR/kg (cao gấp 2-3 lần trà thường).</p>

          <h3>Lộ trình triển khai</h3>
          <ol>
            <li><strong>Giai đoạn 1 (2026 Q1-Q2):</strong> Đăng ký GI "Trà Tân Cương" tại Việt Nam & EU; Xây dựng hệ thống truy xuất QR code</li>
            <li><strong>Giai đoạn 2 (2026 Q3-Q4):</strong> Chuyển đổi 50% diện tích trà sang hữu cơ EU Organic; Xây dựng hồ sơ kỹ thuật EU</li>
            <li><strong>Giai đoạn 3 (2027):</strong> Nộp hồ sơ đăng ký GI tại EU; Audit hữu cơ EU Organic</li>
            <li><strong>Giai đoạn 4 (2028):</strong> Nhận chứng nhận GI & EU Organic; Khởi động marketing tại EU</li>
          </ol>
        `,
        author: 'TS. Lê Hoàng Nam',
        authorRole: 'Chuyên gia Thương mại Quốc tế, Viện Nghiên cứu Thương mại Quốc tế',
        publishedDate: '2026-10-10',
        tags: ['Xuất khẩu EU', 'Trà Tân Cương', 'Thảo dược OCOP', 'Chứng nhận hữu cơ EU', 'Chỉ dẫn địa lý'],
        featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARPK-sB1Hxl_996L23VT7vkhQas6o-RO3t85uttjM8GGzJGVfgWh-DRRVFfAvNLac6huYYAUER2MCqEBbIroHWgydsvb-_Jj4Bkl3uu6SF0iLnqB-0TJ0aDvcDwgj4rgsDT9l7J-SQZCdNnuciHcqh-fcmAbV7SWRO-aJepFOMWP3t59409rvkgh9ARxPQsJ4CeeFFd5IlXgWZZwGE0twZ-noXsuW7RuO1xP2aTKg',
        seo: {
          metaTitle: 'Tiềm năng đưa trà & thảo dược OCOP 5 sao vào EU | Phân tích thị trường',
          metaDescription: 'Phân tích rào cản, cơ hội và lộ trình đưa trà Tân Cương, thảo dược OCOP 5 sao vào thị trường EU. Chứng nhận hữu cơ, GI, truy xuất nguồn gốc, tiêu chuẩn MRLs.'
        }
      }
    ],

    ocopNow: [
      {
        id: 'ocop-now-2026-11-15-0930',
        date: '2026-11-15',
        time: '09:30',
        headline: 'Đoàn chuyên gia Nhật Bản khảo sát vùng dược liệu Quế Trà Bồng',
        description: 'Đánh giá tiêu chuẩn chế biến tinh dầu xuất khẩu. Đoàn 12 chuyên gia từ Nhật Bản (JICA, JETRO) khảo sát thực tế vùng trồng quế Trà Bồng, Quảng Ngãi - vùng nguyên liệu OCOP 4 Sao quế tinh dầu.',
        tags: ['Xuất khẩu Nhật', 'Quế Trà Bồng', 'Tinh dầu', 'JICA'],
        priority: 'high'
      },
      {
        id: 'ocop-now-2026-11-15-0815',
        date: '2026-11-15',
        time: '08:15',
        headline: 'Công bố 12 chủ thể OCOP hoàn thành mã QR truy xuất nguồn gốc số',
        description: 'Triển khai trong khuôn khổ chương trình chuyển đổi số nông nghiệp. 12 chủ thể tại Thái Nguyên, Hà Giang, Lâm Đồng hoàn tất gán mã QR truy xuất từ vườn đến người tiêu dùng.',
        tags: ['Chuyển đổi số', 'QR code', 'Truy xuất nguồn gốc', 'Thái Nguyên'],
        priority: 'high'
      },
      {
        id: 'ocop-now-2026-11-14',
        date: '2026-11-14',
        time: 'Hôm qua',
        headline: 'Ký kết ghi nhớ phân phối 5 dòng nông sản OCOP tại hội chợ ASEAN',
        description: 'Thúc đẩy xuất khẩu chính ngạch sang Singapore và Malaysia. 5 dòng sản phẩm: Trà Tân Cương, Nước mắm Phú Quốc, Mật ong Hà Giang, Gốm Phù Lãng, Café Buôn Ma Thuột.',
        tags: ['Xuất khẩu ASEAN', 'Singapore', 'Malaysia', 'Hội chợ'],
        priority: 'medium'
      },
      {
        id: 'ocop-now-2026-11-13',
        date: '2026-11-13',
        time: '14:00',
        headline: 'Bộ Nông nghiệp phê duyệt 8 tiêu chuẩn OCOP mới cho ngành dược liệu',
        description: 'Bổ sung tiêu chuẩn về độ ẩm, hàm lượng tinh dầu, dư lượng kim loại nặng cho 8 nhóm dược liệu OCOP. Hiệu lực từ 01/01/2027.',
        tags: ['Tiêu chuẩn mới', 'Dược liệu', 'Bộ NN&PTNT', 'Quy định'],
        priority: 'medium'
      },
      {
        id: 'ocop-now-2026-11-12',
        date: '2026-11-12',
        time: '10:00',
        headline: 'Hội nghị thảo luận "Chuyển đổi số OCOP: Từ hồ sơ giấy sang dữ liệu số"',
        description: 'Tập hợp 200 đại biểu từ 63 tỉnh thành, doanh nghiệp, HTX. Chia sẻ kinh nghiệm triển khai QR code, blockchain truy xuất nguồn gốc, AI dự báo thị trường.',
        tags: ['Chuyển đổi số', 'Hội nghị', 'Blockchain', 'AI', 'QR code'],
        priority: 'high'
      }
    ],

    // ============================================
    // NEWS & EVENTS
    // ============================================
    news: [
      {
        id: 'tin-200-chu-the-tuan-le-ha-noi',
        slug: 'hon-200-chu-the-tham-gia-tuan-le-san-pham-ocop-tai-ha-noi',
        category: 'Hoạt động - Xúc tiến thương mại',
        subCategory: 'Tuần lễ OCOP',
        headline: 'Hơn 200 chủ thể tham gia tuần lễ sản phẩm OCOP tại Hà Nội',
        subHeadline: 'Không gian quảng bá hội tụ nông sản tinh hoa và sản phẩm thủ công mỹ nghệ của các tỉnh miền núi phía Bắc.',
        excerpt: 'Tuần lễ sản phẩm OCOP Quốc gia 2026 diễn ra tại Trung tâm Triển lãm Việt Nam (Hà Nội) thu hút 200+ chủ thể từ 40 tỉnh thành. Không gian trưng bày 5 khu vực: Trà - Cà phê, Dược liệu, Nông sản chế biến, Thủ công mỹ nghệ, Du lịch nông thôn.',
        content: `
          <p>Sáng 20/10/2026, Tuần lễ sản phẩm OCOP Quốc gia 2026 khai mạc tại Trung tâm Triển lãm Việt Nam (148 Giảng Võ, Hà Nội). Sự kiện do Bộ Nông nghiệp và Phát triển Nông thôn phối hợp với UBND TP. Hà Nội tổ chức, thu hút hơn 200 chủ thể OCOP từ 40 tỉnh thành trên toàn quốc.</p>

          <h3>5 Khu vực trưng bày chủ đề</h3>
          <ol>
            <li><strong>Khu Trà - Cà phê:</strong> Trà Tân Cương, Cà phê Buôn Ma Thuột, Trà Shan Tuyết</li>
            <li><strong>Khu Dược liệu:</strong> Mật ong Hà Giang, Nhân sâm Ngọc Linh, Quế Trà Bồng</li>
            <li><strong>Khu Nông sản chế biến:</strong> Nước mắm Phú Quốc, Mật ong Bạc Hà, Gạo Séng Cù</li>
            <li><strong>Khu Thủ công mỹ nghệ:</strong> Gốm Phù Lãng, Thổ cẩm Chăm, Tơ tằm Vạn Phúc</li>
            <li><strong>Khu Du lịch nông thôn:</strong> Làng rau Trà Quế, Làng hoa Sa Đéc, Homestay Mộc Châu</li>
          </ol>

          <h3>Điểm nổi bật</h3>
          <ul>
            <li>200+ gian trưng bày, diện tích 5.000 m²</li>
            <li>Hội thảo "Xuất khẩu OCOP: Cơ hội & Thách thức" với 150 đại biểu</li>
            <li>Buổi đấu giá trực tuyến sản phẩm OCOP 5 Sao</li>
            <li>Demo nấu ăn từ nguyên liệu OCOP bởi Bếp trưởng nổi tiếng</li>
            <li>Khu trải nghiệm VR du lịch làng nghề OCOP</li>
          </ul>

          <p>Tuần lễ kéo dài đến 25/10/2026, dự kiến đón 50.000 lượt khách tham quan. Doanh thu giao dịch tại hội chợ ước tính 15-20 tỷ VNĐ.</p>
        `,
        author: 'Phóng viên Bộ Nông nghiệp',
        authorRole: 'Phóng viên chuyên ngành',
        publishedDate: '2026-10-20',
        readTime: '6 phút đọc',
        location: 'Hà Nội',
        tags: ['Tuần lễ OCOP', 'Hà Nội', '200 chủ thể', 'Xuất khẩu', 'Hội chợ'],
        featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjWJD-yF4gcEoWQLa8ke94KI2E8FHei_Fsf8eo7AksYdXfDTOiXx8qM_RiozjYR4ci9khAUUTeadCKA3Svk3iMKQckQXowmEXPa-7LfXpS-PrTJVJFBryg94tPAerZSJ4Wnc1-nzDWOsWWH9h7hrh7vTmloq6CkQ1G4LSzPpTd08Qg9bp6R47OshHUKbge7Sd73cmXyEmMseiv5swOKkeL2m9oSn3IUzRMvT0STK8',
        seo: {
          metaTitle: 'Tuần lễ sản phẩm OCOP Quốc gia 2026 Hà Nội - 200+ chủ thể, 5 khu vực trưng bày',
          metaDescription: 'Tuần lễ OCOP 2026 tại Hà Nội: 200 chủ thể, 5 khu vực trưng bày, hội thảo xuất khẩu, đấu giá trực tuyến. Kéo dài 20-25/10/2026.'
        }
      },
      {
        id: 'tin-chuan-hoa-chuoi-gia-tri-net-zero',
        slug: 'dinh-huong-chuan-hoa-chuoi-gia-tri-phat-trien-ocop-net-zero',
        category: 'Chính sách & Cơ chế',
        subCategory: 'Tiêu chuẩn mới',
        headline: 'Định hướng chuẩn hóa chuỗi giá trị phát triển OCOP gắn với tiêu chuẩn Net Zero',
        subHeadline: 'Thúc đẩy sản xuất hữu cơ khép kín, ứng dụng bao bì thân thiện môi trường cho các nhóm ngành hàng đặc sản.',
        excerpt: 'Bộ Nông nghiệp ban hành Chỉ thị mới về phát triển OCOP bền vững, yêu cầu 100% chủ thể OCOP 4-5 sao áp dụng sản xuất hữu cơ, bao bì phân hủy đến năm 2028.',
        content: `
          <p>Chỉ thị 15/CT-BNNPTNT ngày 15/10/2026 của Bộ Nông nghiệp quy định: Đến năm 2028, 100% chủ thể OCOP 4-5 sao phải chuyển đổi sang sản xuất hữu cơ, sử dụng bao bì thân môi trường, giảm 30% khí thải so với 2025.</p>

          <h3>Nội dung chính</h3>
          <ul>
            <li>Bắt buộc chứng nhận hữu cơ (VietGAP Organic / EU Organic) cho OCOP 4-5 sao</li>
            <li>Bao bì phải đạt tiêu chuẩn phân hủy sinh học / tái chế 100%</li>
            <li>Hệ thống truy xuất nguồn gốc QR code bắt buộc cho mọi sản phẩm OCOP</li>
            <li>Hỗ trợ tài chính 50% chi phí chuyển đổi hữu cơ (tối đa 500 triệu/đơn vị)</li>
            <li>Ưu tiên tín dụng xanh lãi suất 3-4%/năm cho chủ thể chuyển đổi</li>
          </ul>

          <h3>Lộ trình triển khai</h3>
          <table>
            <thead><tr><th>Năm</th><th>Mục tiêu</th></tr></thead>
            <tbody>
              <tr><td>2027</td><td>50% chủ thể OCOP 4-5 sao chuyển đổi hữu cơ</td></tr>
              <tr><td>2028</td><td>100% chủ thể OCOP 4-5 sao đạt tiêu chuẩn Net Zero</td></tr>
            </tbody>
          </table>
        `,
        author: 'Văn phòng Bộ NN&PTNT',
        authorRole: 'Cục Chất lượng - Xử lý & Phát triển Thị trường',
        publishedDate: '2026-10-19',
        readTime: '6 phút đọc',
        tags: ['Chính sách Net Zero', 'Hữu cơ', 'Bao bì xanh', 'Tín dụng xanh', 'OCOP bền vững'],
        seo: {
          metaTitle: 'Chỉ thị Net Zero cho OCOP: 100% hữu cơ, bao bì xanh đến 2028',
          metaDescription: 'Bộ NN&PTNT ban hành Chỉ thị 15/CT: 100% chủ thể OCOP 4-5 sao chuyển đổi hữu cơ, bao bì phân hủy, giảm 30% khí thải đến 2028. Hỗ trợ 50% chi phí.'
        }
      }
    ],

    events: [
      {
        id: 'hoi-cho-ocop-2026',
        slug: 'hoi-cho-gioi-thieu-san-pham-ocop-va-dac-san-vung-mien-2026',
        category: 'Hội chợ & Triển lãm',
        subCategory: 'Hội chợ quốc gia',
        headline: 'Hội chợ giới thiệu sản phẩm OCOP và đặc sản vùng miền 2026',
        subHeadline: 'Hội chợ OCOP Quốc gia lớn nhất năm tại TP. Cần Thơ, quy tụ 300+ chủ thể từ 63 tỉnh thành.',
        excerpt: 'Hội chợ OCOP Quốc gia 2026 diễn ra 15-18/11 tại TP. Cần Thơ. 300+ gian hàng, 5 khu vực trưng bày chuyên biệt, hội thảo xuất khẩu ASEAN, không gian VR du lịch làng nghề.',
        content: `
          <p>Hội chợ giới thiệu sản phẩm OCOP và đặc sản vùng miền 2026 - sự kiện lớn nhất năm của ngành OCOP Việt Nam - sẽ diễn ra từ 15-18/11/2026 tại Trung tâm Hội chợ Triển lãm Cần Thơ (TP. Cần Thơ).</p>

          <h3>Thông tin chính</h3>
          <ul>
            <li><strong>Thời gian:</strong> 15-18/11/2026 (4 ngày)</li>
            <li><strong>Địa điểm:</strong> Trung tâm Hội chợ Triển lãm Cần Thơ, 350 Đường 30/4, P. An Bình, Q. Ninh Kiều, TP. Cần Thơ</li>
            <li><strong>Quy mô:</strong> 300+ gian hàng, diện tích 8.000 m², 63 tỉnh thành tham gia</li>
            <li><strong>Dự kiến khách:</strong> 80.000 lượt khách tham quan</li>
          </ul>

          <h3>5 Khu vực trưng bày chuyên biệt</h3>
          <ol>
            <li><strong>Khu Trà - Cà phê - Cacao:</strong> Trà Tân Cương, Cà phê Buôn Ma Thuột, Cacao Bến Tre</li>
            <li><strong>Khu Dược liệu - Thảo mộc:</strong> Nhân sâm Ngọc Linh, Quế Trà Bồng, Mật ong Bạc Hà</li>
            <li><strong>Khu Nông sản chế biến:</strong> Nước mắm Phú Quốc, Mật ong Hà Giang, Gạo Séng Cù</li>
            <li><strong>Khu Thủ công mỹ nghệ:</strong> Gốm Phù Lãng, Thổ cẩm Chăm, Tơ tằm Vạn Phúc, Tranh sơn mài</li>
            <li><strong>Khu Du lịch nông thôn & Làng nghề:</strong> Homestay Mộc Châu, Làng rau Trà Quế, Làng hoa Sa Đéc</li>
          </ol>

          <h3>Hoạt động nổi bật</h3>
          <ul>
            <li>Hội thảo "Xuất khẩu OCOP sang ASEAN: Cơ hội & Giải pháp" (16/11)</li>
            <li>Buổi đấu giá trực tuyến "Top 10 Sản phẩm OCOP 5 Sao" (17/11)</li>
            <li>Demo nấu ăn "Vị Việt - Hương OCOP" bởi Bếp trưởng Luke Nguyễn (17/11)</li>
            <li>Không gian VR "Du lịch làng nghề 360°" - trải nghiệm immersive</li>
            <li>Buổi ký kết MOU phân phối 10 dòng sản phẩm OCOP sang Singapore, Malaysia</li>
            <li>Chương trình "Gặp gỡ Người giữ nghề" - Talkshow với 5 nghệ nhân (18/11)</li>
          </ul>

          <h3>Thông tin thực tế</h3>
          <ul>
            <li>Vé vào cửa: Miễn phí (đăng ký online tại ocopvietnam.vn)</li>
            <li>Giờ mở cửa: 8:00 - 20:00 hàng ngày</li>
            <li>Địa chỉ: 350 Đường 30/4, P. An Bình, Q. Ninh Kiều, TP. Cần Thơ</li>
            <li>Hotline: 1900-6868 (hỗ trợ khách tham quan)</li>
          </ul>
        `,
        eventType: 'fair',
        status: 'upcoming',
        startDate: '2026-11-15',
        endDate: '2026-11-18',
        location: 'TP. Cần Thơ',
        venue: 'Trung tâm Hội chợ Triển lãm Cần Thơ',
        address: '350 Đường 30/4, P. An Bình, Q. Ninh Kiều, TP. Cần Thơ',
        expectedAttendees: 80000,
        exhibitors: 300,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhvMm5-n987KKipgAbJ8WLcsuUuEyVO5hwp609-LQlzsMTMtmNq6gFi45P4uV9_WSls9qWxVLSFnZ3IRKwUi5t4oQFGD9kG2YqFJB10fmg6hrxD2tDFK6RMAXoQ4mKrTdetfgxGDAjU_1gmAmxOb7ejsH7c9wF8oTZXkIuLUJ7oiFoUdmX2bLOoFPl9oO7zvoLY8vKLScVcv8y8kaANZPggtfBADZzvxlupQd-87k',
        organizer: 'Bộ Nông nghiệp và Phát triển Nông thôn & UBND TP. Cần Thơ',
        contact: { phone: '1900-6868', email: 'hoicho2026@ocopvietnam.vn' },
        tags: ['Hội chợ OCOP', 'Cần Thơ', 'Xuất khẩu ASEAN', 'VR du lịch', '300 chủ thể'],
        seo: {
          metaTitle: 'Hội chợ OCOP Quốc gia 2026 Cần Thơ - 300 chủ thể, 15-18/11, Miễn phí vé',
          metaDescription: 'Hội chợ OCOP 2026 tại Cần Thơ: 300+ chủ thể, 15-18/11, hội thảo xuất khẩu ASEAN, VR du lịch, đấu giá trực tuyến. Miễn phí vé, đăng ký online.'
        }
      },
      {
        id: 'tuan-le-ocop-ha-noi-2026',
        slug: 'tuan-le-san-pham-ocop-quoc-gia-2026-ha-noi',
        category: 'Tuần lễ & Hội chợ',
        subCategory: 'Tuần lễ quốc gia',
        headline: 'Tuần lễ sản phẩm OCOP Quốc gia 2026 tại Hà Nội',
        subHeadline: '200+ chủ thể từ 40 tỉnh thành quy tụ tại Trung tâm Triển lãm Việt Nam.',
        eventType: 'fair',
        status: 'completed',
        startDate: '2026-10-20',
        endDate: '2026-10-25',
        location: 'Hà Nội',
        venue: 'Trung tâm Triển lãm Việt Nam',
        address: '148 Giảng Võ, Đống Đa, Hà Nội',
        expectedAttendees: 50000,
        exhibitors: 200,
        tags: ['Tuần lễ OCOP', 'Hà Nội', '200 chủ thể', 'Hội chợ'],
        seo: {
          metaTitle: 'Tuần lễ OCOP Quốc gia 2026 Hà Nội - 200 chủ thể, 5 khu vực',
          metaDescription: 'Tuần lễ OCOP 2026 Hà Nội: 200+ chủ thể, 5 khu vực trưng bày, hội thảo xuất khẩu, đấu giá trực tuyến. 20-25/10/2026.'
        }
      }
    ]
  };

  console.log('OCOP_CONTENT loaded successfully. Collections:', Object.keys(window.OCOP_CONTENT).join(', '));
})();