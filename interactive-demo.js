/**
 * Interactive Demo - Full functionality for OCOP Vietnam Digital Platform
 * Makes all 21 pages fully interactive like a real website
 */
(function () {
  'use strict';

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 z-[9999] px-6 py-3 rounded-lg shadow-xl text-white font-label-md text-label-md transition-all duration-300 transform translate-y-full opacity-0 ${
      type === 'success' ? 'bg-secondary' : type === 'error' ? 'bg-error' : 'bg-primary'
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-full', 'opacity-0');
    });
    setTimeout(() => {
      toast.classList.add('translate-y-full', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function showError(field, message) {
    clearError(field);
    field.classList.add('border-error', 'focus:border-error', 'focus:ring-1', 'focus:ring-error');
    const err = document.createElement('p');
    err.className = 'mt-1 text-error font-label-sm text-label-sm error-message';
    err.textContent = message;
    field.parentNode.appendChild(err);
  }

  function clearError(field) {
    field.classList.remove('border-error', 'focus:border-error', 'focus:ring-1', 'focus:ring-error');
    const err = field.parentNode.querySelector('.error-message');
    if (err) err.remove();
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^(0|\+84)([0-9]{9,10})$/.test(phone.replace(/\s/g, ''));
  }

  // ============================================
  // 1. CARD & CTA CLICK HANDLERS
  // ============================================
  function initCardClicks() {
    // Product Cards -> /san-pham-ocop/[slug]
    $$('[data-card-type="product"], .product-card, article[data-path="san-pham-ocop"]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        const slug = card.dataset.slug || 'tra-dinh-ngoc-tan-cuong';
        window.location.href = `/san-pham-ocop/${slug}`;
      });
    });

    // Story Cards -> /cau-chuyen-ocop/[slug]
    $$('[data-card-type="story"], .story-card, article[data-path="cau-chuyen-ocop"]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        const slug = card.dataset.slug || 'giu-lua-nghe-sao-che-tan-cuong';
        window.location.href = `/cau-chuyen-ocop/${slug}`;
      });
    });

    // News Cards -> /tin-tuc-su-kien/tin/[slug]
    $$('[data-card-type="news"], .news-card, article[data-path="tin-tuc-su-kien"]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        const slug = card.dataset.slug || 'hon-200-chu-the-tham-gia-tuan-le-san-pham-ocop-tai-ha-noi';
        window.location.href = `/tin-tuc-su-kien/tin/${slug}`;
      });
    });

    // Event Cards -> /tin-tuc-su-kien/su-kien/[slug]
    $$('[data-card-type="event"], .event-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        const slug = card.dataset.slug || 'hoi-cho-gioi-thieu-san-pham-ocop-va-dac-san-vung-mien-2026';
        window.location.href = `/tin-tuc-su-kien/su-kien/${slug}`;
      });
    });

    // Business Cards -> /chu-the-ocop/[slug]
    $$('[data-card-type="business"], .business-card, article[data-path="chu-the-ocop"]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        const slug = card.dataset.slug || 'hop-tac-xa-tra-tan-cuong-thai-nguyen';
        window.location.href = `/chu-the-ocop/${slug}`;
      });
    });

    // Locality Cards -> /diem-den-du-lich/[slug]
    $$('[data-card-type="locality"], .locality-card, article[data-path="diem-den-du-lich"]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        const slug = card.dataset.slug || 'tinh-thai-nguyen';
        window.location.href = `/diem-den-du-lich/${slug}`;
      });
    });

    // Market Cards -> /ocop-hoi-nhap/[slug]
    $$('[data-card-type="market"], .market-card, article[data-path="ocop-hoi-nhap"]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        const slug = card.dataset.slug || 'tiem-nang-dua-tra-va-thao-duoc-vao-eu';
        window.location.href = `/ocop-hoi-nhap/${slug}`;
      });
    });

    // Generic CTA buttons with href="#" -> map to appropriate pages
    $$('a[href="#"]').forEach(link => {
      const text = link.textContent.trim().toLowerCase();
      if (text.includes('khám phá câu chuyện') || text.includes('đọc câu chuyện')) {
        link.href = '/cau-chuyen-ocop';
      } else if (text.includes('khám phá sản phẩm') || text.includes('xem tất cả sản phẩm')) {
        link.href = '/san-pham-ocop';
      } else if (text.includes('xem thêm tin tức') || text.includes('xem thêm tin')) {
        link.href = '/tin-tuc-su-kien';
      } else if (text.includes('khám phá điểm đến') || text.includes('xem lộ trình')) {
        link.href = '/diem-den-du-lich';
      } else if (text.includes('đọc phân tích') || text.includes('xem phân tích')) {
        link.href = '/ocop-hoi-nhap';
      } else if (text.includes('gửi hồ sơ') || text.includes('gửi bài')) {
        link.href = '/ket-noi';
      } else if (text.includes('xem góc nhìn')) {
        link.href = '/ban-doc-toa-soan?tab=goc-nhin';
      } else if (text.includes('tìm hiểu nguồn gốc') || text.includes('xem chi tiết')) {
        // On detail pages, these links should navigate to the list page
        if (window.location.pathname.includes('/san-pham-ocop/')) link.href = '/san-pham-ocop';
        else if (window.location.pathname.includes('/cau-chuyen-ocop/')) link.href = '/cau-chuyen-ocop';
        else if (window.location.pathname.includes('/chu-the-ocop/')) link.href = '/cau-chuyen-ocop';
        else if (window.location.pathname.includes('/diem-den-du-lich/')) link.href = '/diem-den-du-lich';
        else if (window.location.pathname.includes('/ocop-hoi-nhap/')) link.href = '/ocop-hoi-nhap';
        else link.href = '/';
      } else {
        link.href = '/';
      }
    });

    // Fallback: Make any <article> clickable if it contains an internal link
    // This handles cards on homepage and other pages that don't have explicit data-card-type
    $$('article').forEach(card => {
      // Skip if already has a click handler (from above data-card-type handlers)
      if (card.style.cursor === 'pointer') return;
      
      const link = card.querySelector('a[href^="/"]:not([href="#"])');
      if (link) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          // Don't navigate if clicking an interactive element
          if (e.target.closest('a, button, input, select, textarea')) return;
          window.location.href = link.href;
        });
      }
    });
  }

  // ============================================
  // 2. TAB/CHIP FILTER & DROPDOWN FILTER
  // ============================================
  function initTabFilters() {
    // Tab buttons with data-tab attribute
    $$('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        const container = btn.closest('[data-tab-container]') || btn.closest('section') || document;

        // Update active state
        $$('[data-tab]', container).forEach(b => b.classList.remove('bg-primary', 'text-on-primary', 'bg-surface-container-lowest', 'text-primary', 'font-semibold', 'border-b-2', 'border-primary'));
        btn.classList.add('bg-primary', 'text-on-primary', 'font-semibold');

        // Filter cards
        $$('[data-category]', container).forEach(card => {
          const categories = card.dataset.category.split(' ');
          if (tab === 'all' || categories.includes(tab)) {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.3s ease';
          } else {
            card.style.display = 'none';
          }
        });

        // Handle empty state
        updateEmptyState(container, tab);
      });
    });

    // Chip filters (same as tabs but different UI)
    $$('[data-chip]').forEach(chip => {
      chip.addEventListener('click', () => {
        const filter = chip.dataset.chip;
        const container = chip.closest('[data-chip-container]') || chip.closest('section') || document;

        chip.classList.toggle('bg-primary');
        chip.classList.toggle('text-on-primary');
        chip.classList.toggle('bg-surface-container-lowest');
        chip.classList.toggle('text-primary');

        const activeChips = $$('[data-chip].bg-primary', container).map(c => c.dataset.chip);

        $$('[data-category]', container).forEach(card => {
          const categories = card.dataset.category.split(' ');
          const match = activeChips.length === 0 || activeChips.some(c => categories.includes(c));
          card.style.display = match ? '' : 'none';
        });

        updateEmptyState(container, activeChips.join(','));
      });
    });

    // Class-based filter tabs/chips (legacy markup without data attributes)
    // Supports .filter-chip, .filter-tab, .story-filter-btn plus generic grid filtering
    function normalizeText(str) {
      return (str || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function getFilterGroup(btn) {
      // Use the parent container of the buttons
      const parent = btn.parentElement;
      // Identify the grid of cards near the buttons: walk up to section and find article grid
      const section = btn.closest('section') || btn.closest('[data-filter-section]') || btn.closest('main') || document;
      return { parent, section };
    }

    function applyTextFilter(btn) {
      const label = normalizeText(btn.textContent);
      const { parent, section } = getFilterGroup(btn);
      const isAll = label === 'tat ca' || label === 'all' || label.includes('tat ca');

      // Visual active state: clear siblings, set active
      Array.from(parent.children).forEach(sibling => {
        sibling.classList.remove('active', 'bg-primary', 'text-on-primary', 'bg-[#1F4D3A]', 'text-white', 'font-semibold');
        // restore idle look for filter-chip/filter-tab
        if (sibling.classList.contains('filter-chip') || sibling.classList.contains('filter-tab')) {
          sibling.classList.add('bg-white', 'text-[#414844]');
        }
      });
      btn.classList.remove('bg-white', 'text-[#414844]');
      btn.classList.add('active', 'bg-primary', 'text-on-primary', 'font-semibold');

      // Find candidate cards
      const cards = Array.from(section.querySelectorAll('article'));
      cards.forEach(card => {
        if (isAll) {
          card.style.display = '';
          return;
        }
        const cardText = normalizeText(card.textContent);
        // token match: every meaningful word group from the filter label should appear
        const tokens = label.split(' ').filter(t => t.length > 2 && t !== 'va' && t !== 'the' && t !== 'cac' && t !== 'cho');
        const match = tokens.length === 0 || tokens.some(t => cardText.includes(t));
        card.style.display = match ? '' : 'none';
      });
    }

    $$('.filter-chip, .filter-tab').forEach(btn => {
      if (btn.dataset.filterBound) return;
      btn.dataset.filterBound = 'true';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        applyTextFilter(btn);
      });
    });

    // Clear filters button
    $$('[data-clear-filters]').forEach(btn => {
      btn.addEventListener('click', () => {
        const container = btn.closest('[data-tab-container], [data-chip-container]') || btn.closest('section') || document;
        $$('[data-tab], [data-chip]', container).forEach(el => {
          el.classList.remove('bg-primary', 'text-on-primary', 'bg-surface-container-lowest', 'text-primary', 'font-semibold', 'border-b-2', 'border-primary');
        });
        $$('[data-tab][data-tab="all"], [data-chip][data-chip="all"]', container).forEach(el => {
          el.classList.add('bg-primary', 'text-on-primary', 'font-semibold');
        });
        $$('[data-category]', container).forEach(card => card.style.display = '');
        updateEmptyState(container, 'all');
      });
    });

    // Event status tabs (Sắp diễn ra / Đang diễn ra / Đã kết thúc)
    $$('[data-event-status]').forEach(btn => {
      btn.addEventListener('click', () => {
        const status = btn.dataset.eventStatus;
        const container = btn.closest('[data-event-container]') || document;

        $$('[data-event-status]', container).forEach(b => {
          b.classList.remove('bg-primary', 'text-on-primary', 'bg-surface-container-lowest', 'text-primary');
        });
        btn.classList.add('bg-primary', 'text-on-primary');

        $$('[data-event-item]', container).forEach(item => {
          const itemStatus = item.dataset.eventStatus;
          item.style.display = (status === 'all' || itemStatus === status) ? '' : 'none';
        });
      });
    });
  }

  function updateEmptyState(container, activeFilter) {
    const visibleCards = $$('[data-category]:not([style*="display: none"]), [data-event-item]:not([style*="display: none"])', container).length;
    let emptyState = container.querySelector('[data-empty-state]');

    if (visibleCards === 0) {
      if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.dataset.emptyState = 'true';
        emptyState.className = 'col-span-full text-center py-12';
        emptyState.innerHTML = `
          <div class="w-16 h-16 rounded-full bg-surface-container-low mx-auto mb-4 flex items-center justify-center text-on-surface-variant">
            <span class="material-symbols-outlined text-[40px]">filter_alt_off</span>
          </div>
          <h3 class="font-title-editorial text-title-editorial text-primary mb-2">Không tìm thấy kết quả</h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-4">Không có mục nào khớp với bộ lọc "<strong>${activeFilter}</strong>".</p>
          <button data-clear-filters class="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition">Xóa bộ lọc</button>
        `;
        const grid = container.querySelector('[data-category], [data-event-item]')?.parentElement;
        if (grid) grid.appendChild(emptyState);
        // Re-bind clear button
        emptyState.querySelector('[data-clear-filters]')?.addEventListener('click', () => {
          $$('[data-tab][data-tab="all"], [data-chip][data-chip="all"]', container).forEach(el => el.click());
        });
      }
    } else if (emptyState) {
      emptyState.remove();
    }
  }

  // ============================================
  // 3. SEARCH PAGE (enhancement for /tim-kiem)
  // Search modal is handled by navigation-active.js
  // ============================================
  function initSearchPage() {
    // Search page: highlight query from URL and render suggestions
    if (window.location.pathname.startsWith('/tim-kiem')) {
      const searchInput = $('#search-input');
      const searchResults = $('#search-results');
      if (!searchInput || !searchResults) return;

      // Sample data for suggestions (same as in navigation-active.js enhancement)
      const searchData = [
        { title: 'Trà Đinh Ngọc Tân Cương', type: 'Sản phẩm OCOP 5 Sao', url: '/san-pham-ocop/tra-dinh-ngoc-tan-cuong', category: 'san-pham' },
        { title: 'Hợp tác xã Trà Tân Cương Thái Nguyên', type: 'Chủ thể OCOP', url: '/chu-the-ocop/hop-tac-xa-tra-tan-cuong-thai-nguyen', category: 'chu-the' },
        { title: 'Giữ lửa nghề sao chè Tân Cương', type: 'Câu chuyện OCOP', url: '/cau-chuyen-ocop/giu-lua-nghe-sao-che-tan-cuong', category: 'cau-chuyen' },
        { title: 'Tỉnh Thái Nguyên', type: 'Điểm đến & Du lịch', url: '/diem-den-du-lich/tinh-thai-nguyen', category: 'diem-den' },
        { title: 'Tiềm năng đưa trà vào EU', type: 'OCOP Hội nhập', url: '/ocop-hoi-nhap/tiem-nang-dua-tra-va-thao-duoc-vao-eu', category: 'hoi-nhap' },
        { title: 'Hơn 200 chủ thể tham gia tuần lễ', type: 'Tin tức & Sự kiện', url: '/tin-tuc-su-kien/tin/hon-200-chu-the-tham-gia-tuan-le-san-pham-ocop-tai-ha-noi', category: 'tin-tuc' },
        { title: 'Hội chợ OCOP 2026', type: 'Sự kiện', url: '/tin-tuc-su-kien/su-kien/hoi-cho-gioi-thieu-san-pham-ocop-va-dac-san-vung-mien-2026', category: 'su-kien' },
        { title: 'Chính sách gói tín dụng xanh', type: 'Tin tức & Sự kiện', url: '/tin-tuc-su-kien?tab=chinh-sach', category: 'tin-tuc' },
      ];

      function getCategoryIcon(cat) {
        const icons = {
          'san-pham': 'stars', 'chu-the': 'groups', 'cau-chuyen': 'auto_stories',
          'diem-den': 'place', 'hoi-nhap': 'public', 'tin-tuc': 'newspaper', 'su-kien': 'event'
        };
        return icons[cat] || 'search';
      }

      function renderSuggestions(query) {
        const filtered = query
          ? searchData.filter(d => d.title.toLowerCase().includes(query.toLowerCase()) || d.type.toLowerCase().includes(query.toLowerCase()))
          : searchData.slice(0, 5);

        searchResults.innerHTML = filtered.map(item => `
          <a href="${item.url}" class="block px-4 py-3 hover:bg-surface-container transition-colors flex items-center gap-3 group" data-search-result>
            <div class="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0">
              <span class="material-symbols-outlined text-[20px]">${getCategoryIcon(item.category)}</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-body-sm text-body-sm text-on-surface truncate group-hover:text-primary transition-colors">${item.title}</p>
              <p class="font-label-sm text-label-sm text-on-surface-variant">${item.type}</p>
            </div>
            <span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-transform group-hover:translate-x-1">chevron_right</span>
          </a>
        `).join('') + (query && filtered.length === 0 ? `
          <div class="px-4 py-6 text-center text-on-surface-variant">
            <span class="material-symbols-outlined text-[32px] block mb-2">search_off</span>
            <p>Không tìm thấy kết quả cho "<strong>${query}</strong>"</p>
          </div>
        ` : '');
      }

      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      if (q) {
        searchInput.value = q;
        renderSuggestions(q);
        const headerTitle = $('h1, .font-headline-lg');
        if (headerTitle) headerTitle.textContent = `Kết quả tìm kiếm cho: "${q}"`;
      }

      searchInput.addEventListener('input', (e) => renderSuggestions(e.target.value.trim()));
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const query = searchInput.value.trim();
          if (query) {
            window.location.href = `/tim-kiem?q=${encodeURIComponent(query)}`;
          }
        }
      });
    }
  }

  // ============================================
  // 4. FORM HANDLERS
  // ============================================
  function initForms() {
    // Newsletter forms (Footer & Newsletter section)
    // Collect forms explicitly or any form containing an email input
    const newsletterForms = new Set([
      ...$$('form[data-form="newsletter"]'),
      ...$$('input[type="email"]').map(input => input.closest('form')).filter(Boolean)
    ]);

    newsletterForms.forEach(form => {
      if (form.dataset.formInit) return;
      // Skip forms already handled as contact / ket-noi forms
      if (form.matches('#contact-form, form[data-form="contact"], #ket-noi-form, form[data-form="ket-noi"]')) return;
      form.dataset.formInit = 'true';

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput?.value.trim();

        if (!email) {
          showError(emailInput, 'Vui lòng nhập địa chỉ email');
          return;
        }
        if (!validateEmail(email)) {
          showError(emailInput, 'Địa chỉ email không hợp lệ');
          return;
        }

        clearError(emailInput);
        showToast('Cảm ơn bạn đã đăng ký nhận bản tin! Email xác nhận đã được gửi.');
        form.reset();
      });

      // Clear error on input
      const emailInput = form.querySelector('input[type="email"]');
      emailInput?.addEventListener('input', () => clearError(emailInput));
    });

    // Contact form (/lien-he)
    $$('#contact-form, form[data-form="contact"]').forEach(form => {
      if (form.dataset.formInit) return;
      form.dataset.formInit = 'true';

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        const fields = {
          fullName: form.querySelector('#fullName, [name="fullName"]'),
          email: form.querySelector('#email, [name="email"]'),
          phone: form.querySelector('#phoneNumber, [name="phone"]'),
          category: form.querySelector('#categoryTopic, [name="category"]'),
          message: form.querySelector('#contentMessage, [name="message"]')
        };

        if (!fields.fullName?.value.trim()) { showError(fields.fullName, 'Vui lòng nhập họ và tên'); valid = false; }
        if (!fields.email?.value.trim()) { showError(fields.email, 'Vui lòng nhập email'); valid = false; }
        else if (!validateEmail(fields.email.value.trim())) { showError(fields.email, 'Email không hợp lệ'); valid = false; }
        if (fields.phone?.value && !validatePhone(fields.phone.value)) { showError(fields.phone, 'Số điện thoại không hợp lệ'); valid = false; }
        if (!fields.category?.value) { showError(fields.category, 'Vui lòng chọn chuyên mục'); valid = false; }
        if (!fields.message?.value.trim()) { showError(fields.message, 'Vui lòng nhập nội dung'); valid = false; }

        Object.values(fields).forEach(f => f?.addEventListener('input', () => clearError(f), { once: true }));

        if (valid) {
          showToast('Cảm ơn bạn! Thông tin đã được gửi thành công đến Tòa soạn OCOP Việt Nam.');
          form.reset();
        }
      });
    });

    // Kết nối Chủ thể form (/ket-noi) - 12 fields
    $$('#ket-noi-form, form[data-form="ket-noi"]').forEach(form => {
      if (form.dataset.formInit) return;
      form.dataset.formInit = 'true';

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            showError(field, 'Trường này là bắt buộc');
            valid = false;
          } else if (field.type === 'email' && !validateEmail(field.value.trim())) {
            showError(field, 'Email không hợp lệ');
            valid = false;
          } else if (field.type === 'tel' && field.value && !validatePhone(field.value)) {
            showError(field, 'Số điện thoại không hợp lệ');
            valid = false;
          }
          field.addEventListener('input', () => clearError(field), { once: true });
        });

        if (valid) {
          showToast('Tòa soạn đã ghi nhận hồ sơ chủ thể OCOP. Bộ phận tư liệu sẽ liên hệ thẩm định.');
          form.reset();
        }
      });
    });

    // Bạn đọc & Tòa soạn - Tab switcher
    $$('[data-tab-form]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tabForm;
        $$('[data-tab-form]', btn.parentElement).forEach(b => b.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-sm', 'font-semibold'));
        $$('[data-form-tab]').forEach(t => t.classList.add('hidden'));
        btn.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-sm', 'font-semibold');
        $(`[data-form-tab="${tab}"]`)?.classList.remove('hidden');
      });
    });
  }

  // ============================================
  // 5. INTERACTIVE MAP (HOMEPAGE & /diem-den-du-lich)
  // ============================================
  function initInteractiveMap() {
    const mapContainer = $('[data-interactive-map]') || $('#map-container');
    if (!mapContainer) return;

    // SVG map points
    $$('[data-map-point]', mapContainer).forEach(point => {
      point.style.cursor = 'pointer';
      point.addEventListener('click', () => {
        const region = point.dataset.mapPoint;
        const infoCard = $(`[data-map-info="${region}"]`, mapContainer);
        $$('[data-map-info]', mapContainer).forEach(c => c.classList.add('hidden'));
        infoCard?.classList.remove('hidden');

        // Update active state on map
        $$('[data-map-point]', mapContainer).forEach(p => p.classList.remove('ring-2', 'ring-primary'));
        point.classList.add('ring-2', 'ring-primary');
      });

      point.addEventListener('mouseenter', () => {
        const tooltip = point.dataset.tooltip;
        if (tooltip) {
          point.setAttribute('title', tooltip);
        }
      });
    });

    // Region filter buttons
    $$('[data-map-filter]', mapContainer).forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.mapFilter;
        $$('[data-map-filter]', mapContainer).forEach(b => {
          b.classList.remove('bg-primary', 'text-on-primary');
          b.classList.add('bg-surface', 'text-on-surface');
        });
        btn.classList.add('bg-primary', 'text-on-primary');
        btn.classList.remove('bg-surface', 'text-on-surface');

        $$('[data-map-region]', mapContainer).forEach(region => {
          region.style.display = (filter === 'all' || region.dataset.mapRegion === filter) ? '' : 'none';
        });
      });
    });
  }

  // ============================================
  // 6. EVENT DETAIL PAGE - STATUS TABS
  // ============================================
  function initEventStatusTabs() {
    const container = $('[data-event-detail]');
    if (!container) return;

    $$('[data-event-status-tab]', container).forEach(btn => {
      btn.addEventListener('click', () => {
        const status = btn.dataset.eventStatusTab;
        $$('[data-event-status-tab]', container).forEach(b => {
          b.classList.remove('bg-primary', 'text-on-primary', 'border-b-2', 'border-primary');
          b.classList.add('border-transparent');
        });
        btn.classList.add('bg-primary', 'text-on-primary', 'border-b-2', 'border-primary');
        btn.classList.remove('border-transparent');

        $$('[data-event-status-content]', container).forEach(c => {
          c.classList.toggle('hidden', c.dataset.eventStatusContent !== status);
        });
      });
    });
  }

  // ============================================
  // 7. READING PROGRESS BAR (Story Detail)
  // ============================================
  function initReadingProgress() {
    const article = $('article[data-story-detail], .story-detail article');
    if (!article) return;

    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-primary z-[1000] transform origin-left scale-x-0 transition-transform duration-100 ease-out';
    progressBar.style.transformOrigin = 'left center';
    document.body.appendChild(progressBar);

    const updateProgress = () => {
      const rect = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const articleTop = rect.top;
      const articleBottom = rect.bottom;

      if (articleBottom <= 0 || articleTop >= windowHeight) {
        progressBar.style.transform = 'scaleX(0)';
        return;
      }

      const visibleTop = Math.max(0, -articleTop);
      const visibleHeight = Math.min(articleBottom, windowHeight) - Math.max(articleTop, 0);
      const progress = Math.min(1, (visibleTop + visibleHeight / 2) / rect.height);
      progressBar.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ============================================
  // 8. SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const target = $(href);
        if (target) {
          e.preventDefault();
          const header = $('header.sticky.top-0');
          const offset = header?.offsetHeight || 0;
          const targetPos = target.getBoundingClientRect().top + window.scrollY - offset - 20;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  // ============================================
  // 9. LAZY LOAD IMAGES
  // ============================================
  function initLazyLoad() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '100px' });

      $$('img[data-src], img.lazy').forEach(img => observer.observe(img));
    }
  }

  // ============================================
  // INITIALIZATION
  // ============================================
  function init() {
    initCardClicks();
    initTabFilters();
    initSearchPage();
    initForms();
    initInteractiveMap();
    initEventStatusTabs();
    initReadingProgress();
    initSmoothScroll();
    initLazyLoad();

    // Re-initialize on dynamic content (for SPA-like navigation)
    document.addEventListener('DOMContentLoaded', () => {
      // Trigger tab from URL query param
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      if (tab) {
        const tabBtn = $(`[data-tab="${tab}"], [data-chip="${tab}"]`);
        tabBtn?.click();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for debugging
  window.OCOPInteractive = {
    showToast,
    initCardClicks,
    initTabFilters,
    initSearchPage,
    initForms
  };
})();

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  [data-category] { transition: opacity 0.3s ease, transform 0.3s ease; }
  [data-category][style*="display: none"] { opacity: 0; transform: translateY(-10px); pointer-events: none; }
  .ring-2 { box-shadow: 0 0 0 2px var(--tw-ring-color); }
  .transition-transform { transition: transform 0.2s ease; }
`;
document.head.appendChild(style);