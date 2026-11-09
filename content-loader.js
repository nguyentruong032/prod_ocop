/**
 * OCOP Content Loader - DOM-Preserving Data Binding (Flexible Selectors)
 * Reads from window.OCOP_CONTENT and hydrates data into existing DOM structure
 * NEVER generates HTML - only updates textContent, src, href on existing elements
 * Uses cloning for additional items beyond what exists in original HTML
 * Works with semantic selectors - no data-field attributes required
 */
(function () {
  'use strict';

  // ============================================
  // UTILITIES
  // ============================================
  const $ = (sel, ctx = document) => {
    try { return ctx.querySelector(sel); } catch (e) { return null; }
  };
  const $$ = (sel, ctx = document) => {
    try { return [...ctx.querySelectorAll(sel)]; } catch (e) { return []; }
  };

  // Helper: extract slug from pathname or query string
  function getSlugFromUrl() {
    const querySlug = new URLSearchParams(window.location.search).get('slug');
    if (querySlug) return querySlug;

    const pathname = window.location.pathname;
    const parts = pathname.split('/').filter(Boolean);

    if (parts.length >= 2) {
      const categorySlugMap = {
        'san-pham-ocop': parts[1],
        'cau-chuyen-ocop': parts[1],
        'diem-den-du-lich': parts[1],
        'chu-the-ocop': parts[1],
        'ocop-hoi-nhap': parts[1],
      };

      if (categorySlugMap[parts[0]]) {
        return categorySlugMap[parts[0]];
      }

      if (parts[0] === 'tin-tuc-su-kien' && parts[1] === 'tin' && parts[2]) {
        return parts[2];
      }
      if (parts[0] === 'tin-tuc-su-kien' && parts[1] === 'su-kien' && parts[2]) {
        return parts[2];
      }
    }
    return null;
  }

  function getContent(path) {
    try {
      return eval('window.OCOP_CONTENT.' + path);
    } catch (e) {
      console.warn('Content path not found:', path, e);
      return null;
    }
  }

  function findBySlug(collection, slug) {
    const coll = window.OCOP_CONTENT[collection];
    if (!coll) return null;
    return coll.find(item => item.slug === slug) || null;
  }

  function findById(collection, id) {
    const coll = window.OCOP_CONTENT[collection];
    if (!coll) return null;
    return coll.find(item => item.id === id) || null;
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((o, k) => (o || {})[k], obj);
  }

  // ============================================
  // CORE HYDRATION FUNCTIONS
  // ============================================

  function hydrateText(el, data, fieldPath) {
    if (!el || !data) return;
    const value = getNestedValue(data, fieldPath);
    if (value !== undefined && value !== null && value !== '') {
      el.textContent = value;
    }
  }

  function hydrateImage(el, data, srcPath, altPath) {
    if (!el || !data) return;
    const src = getNestedValue(data, srcPath);
    if (src) {
      el.src = src;
      el.setAttribute('data-src', src);
    }
    if (altPath) {
      const alt = getNestedValue(data, altPath);
      if (alt) el.alt = alt;
    }
  }

  function hydrateLink(el, data, hrefPath) {
    if (!el || !data) return;
    const href = getNestedValue(data, hrefPath);
    if (href) el.href = href;
  }

  // ============================================
  // FLEXIBLE SEMANTIC SELECTORS
  // ============================================

  // Try data-field first, then fallback to semantic selectors
  function hydrateField(container, data, fieldPath, selectors) {
    // First try data-field attribute
    const fieldEl = container.querySelector('[data-field="' + fieldPath + '"]');
    if (fieldEl) {
      hydrateText(fieldEl, data, fieldPath);
      return true;
    }

    // Fallback to semantic selectors (with try-catch for invalid selectors)
    for (const sel of selectors) {
      try {
        const el = container.querySelector(sel);
        if (el && !el.hasAttribute('data-field')) {
          hydrateText(el, data, fieldPath);
          return true;
        }
      } catch (e) {
        // Ignore invalid selectors like :contains()
      }
    }
    return false;
  }

  function hydrateImageField(container, data, srcPath, altPath, selectors) {
    // First try data-img-src
    const imgEl = container.querySelector('[data-img-src="' + srcPath + '"]');
    if (imgEl) {
      hydrateImage(imgEl, data, srcPath, altPath);
      return true;
    }

    // Fallback to semantic selectors
    for (const sel of selectors) {
      try {
        const el = container.querySelector(sel);
        if (el && el.tagName === 'IMG' && !el.hasAttribute('data-img-src')) {
          hydrateImage(el, data, srcPath, altPath);
          return true;
        }
      } catch (e) {
        // Ignore invalid selectors
      }
    }
    return false;
  }

  function hydrateLinkField(container, data, hrefPath, selectors) {
    // First try data-href
    const linkEl = container.querySelector('[data-href="' + hrefPath + '"]');
    if (linkEl) {
      hydrateLink(linkEl, data, hrefPath);
      return true;
    }

    // Fallback to semantic selectors
    for (const sel of selectors) {
      try {
        const el = container.querySelector(sel);
        if (el && el.tagName === 'A' && !el.hasAttribute('data-href')) {
          hydrateLink(el, data, hrefPath);
          return true;
        }
      } catch (e) {
        // Ignore invalid selectors
      }
    }
    return false;
  }

  // ============================================
  // COMPONENT HYDRATORS
  // ============================================

  // Hero Section
  function hydrateHero(container, heroData) {
    if (!heroData || !container) return;

    // Background image
    if (heroData.backgroundImage) {
      const bgDiv = container.querySelector('[data-alt]');
      if (bgDiv) {
        bgDiv.style.backgroundImage = `url('${heroData.backgroundImage}')`;
        bgDiv.setAttribute('data-src', heroData.backgroundImage);
      }
      const section = container.closest('section') || container;
      const existingBg = section.querySelector('[style*="background-image"]');
      if (existingBg) {
        existingBg.style.backgroundImage = `url('${heroData.backgroundImage}')`;
      }
    }

    // Eyebrow - first span in inline-flex
    container.querySelectorAll('span.rounded-full, span[class*="w-1.5"]').forEach(el => el.textContent = '');

    // Headline - h1
    hydrateField(container, heroData, 'headline', [
      'h1',
      '[class*="text-headline"]',
      '[class*="font-headline"]'
    ]);

    // Description - first p after h1
    hydrateField(container, heroData, 'description', [
      'h1 + p',
      'p[class*="font-body"]',
      'p[class*="text-body"]'
    ]);

    // CTAs
    const ctaPrimary = container.querySelector('a[href*="cau-chuyen"], a[href*="san-pham"]');
    if (ctaPrimary && heroData.ctaPrimary) {
      hydrateText(ctaPrimary, heroData, 'ctaPrimary.label');
      hydrateLink(ctaPrimary, heroData, 'ctaPrimary.href');
    }

    const ctaSecondary = container.querySelector('a[href*="san-pham"]:not(:first-child), a[class*="border"]');
    if (ctaSecondary && heroData.ctaSecondary) {
      hydrateText(ctaSecondary, heroData, 'ctaSecondary.label');
      hydrateLink(ctaSecondary, heroData, 'ctaSecondary.href');
    }
  }

  // Section Header
  function hydrateSectionHeader(container, sectionData) {
    if (!sectionData || !container) return;

    // Label - span with uppercase tracking-wider
    hydrateField(container, sectionData, 'label', [
      'span[class*="uppercase"][class*="tracking"]',
      'span[class*="text-secondary"]',
      '.flex > span:first-child'
    ]);

    // Title - h2
    hydrateField(container, sectionData, 'title', [
      'h2',
      '[class*="text-headline"]'
    ]);

    // Description - p after h2
    hydrateField(container, sectionData, 'description', [
      'h2 + p',
      'p[class*="font-body"]',
      'p[class*="text-body"]'
    ]);

    // Badge - span with verified icon (removed :contains)
    hydrateField(container, sectionData, 'badge', [
      '.hidden.lg\\:flex span:last-child',
      'span[class*="text-on-surface-variant"]'
    ]);

    // Filter tabs
    if (sectionData.filterTabs) {
      $$('[data-tab]', container).forEach((btn, i) => {
        if (sectionData.filterTabs[i]) {
          btn.textContent = sectionData.filterTabs[i];
          btn.setAttribute('data-tab', sectionData.filterTabs[i].toLowerCase().replace(/\s+/g, '-'));
        }
      });
    }
  }

  // Quick Links
  function hydrateQuickLinks(container, links) {
    if (!links || !container) return;

    const cards = $$('[data-render="quick-link"], a[href^="#khoi-"], a[href*="san-pham"], a[href*="cau-chuyen"], a[href*="diem-den"], a[href*="toa-soan"]', container);
    const template = cards[0]?.cloneNode(true);

    links.forEach((link, i) => {
      let card = cards[i];
      if (!card && template) {
        card = template.cloneNode(true);
        container.appendChild(card);
      }
      if (card) {
        // Icon
        hydrateField(card, link, 'icon', [
          '.material-symbols-outlined',
          'span[class*="text-"][class*="material-symbols"]'
        ]);
        // Icon background
        hydrateField(card, link, 'iconBg', [
          'div[class*="rounded-full"][class*="bg-"]',
          '.w-14.h-14'
        ]);
        // Label
        hydrateField(card, link, 'label', [
          'h3',
          '[class*="font-title"]',
          '[class*="text-title"]'
        ]);
        // Description
        hydrateField(card, link, 'desc', [
          'p',
          '[class*="font-body"]',
          '[class*="text-body"]'
        ]);
        // Href
        hydrateLinkField(card, link, 'href', [
          'a'
        ]);
      }
    });

    // DO NOT remove excess cards - keep all original HTML cards
    // if (cards.length > links.length) {
    //   cards.slice(links.length).forEach(c => c.remove());
    // }
  }

  // ============================================
  // ARTICLE GRID HYDRATION (Sub-category pages)
  // ============================================

  // Map parent collection slug (data-collection) to content.js collection keys
  const PARENT_TO_COLLECTIONS = {
    'cau-chuyen-ocop': ['stories'],
    'san-pham-ocop': ['products'],
    'chu-the-ocop': ['businesses'],
    'diem-den-du-lich': ['destinations'],
    'tin-tuc-su-kien': ['news', 'events'],
    'ban-doc-toa-soan': ['news', 'events', 'integrationArticles'],
    'ket-noi': ['integrationArticles', 'news', 'events']
  };

  // Map filter value (URL slug) to content.js field predicates
  // Each predicate receives (item, collectionKey) for per-collection filtering
  const FILTER_PREDICATES = {
    // cau-chuyen-ocop filters — 4 stories, one per filter for meaningful separation
    'ban-sac-vung-mien': (item) => item.category === 'Văn hóa bản địa' || item.subCategory === 'Nghệ thuật truyền thống',
    'di-san-ban-dia': (item) => item.category === 'Văn hóa & Tinh hoa bản địa' || item.subCategory === 'Ký sự điền dã',
    'khoi-nghiep-xanh': (item) => item.category === 'Hành trình chủ thể' || item.subCategory === 'Khởi nghiệp',
    'chuyen-doi-so': (item) => item.category === 'Phóng sự đa phương tiện' || item.subCategory === 'Video documentary',

    // san-pham-ocop filters (products collection)
    'tra': (item) => item.subCategory === 'Trà',
    'nuoc-mam': (item) => item.subCategory === 'Nước mắm',
    'mat-ong': (item) => item.subCategory === 'Mật ong',
    'gom-su': (item) => item.subCategory === 'Gốm sứ',
    'duoc-lieu': (item) => item.category === 'Dược liệu & Sức khỏe',
    'thu-cong-my-nghe': (item) => item.category === 'Thủ công mỹ nghệ',
    'nong-san-thuc-pham': (item) => item.category === 'Nông sản & Thực phẩm',

    // chu-the-ocop filters (businesses collection)
    'chu-the-tieu-bieu': (item) => item.type === 'Hợp tác xã' || item.type === 'Doanh nghiệp',
    'danh-ba-chu-the': (item) => item.type === 'Hộ gia đình',
    'thong-ke-vung': () => true, // show all

    // diem-den-du-lich filters (destinations collection)
    'lang-nghe': (item) => item.region === 'Trung du Bắc Bộ',
    'du-lich-sinh-thai': (item) => item.region === 'Trung Bộ' || item.region === 'Nam Bộ',
    'ban-do-ocop': () => true, // show all

    // tin-tuc-su-kien filters (news + events collections)
    'tin-tuc': (item, col) => col === 'news',
    'su-kien': (item, col) => col === 'events',
    'chinh-sach': (item) => item.category === 'Chính sách & Cơ chế',
    'hoat-dong': (item) => item.category === 'Hoạt động - Xúc tiến thương mại',

    // ban-doc-toa-soan filters (news + events + integrationArticles)
    'dien-dan-ban-doc': () => true, // all
    'hoi-dap-chinh-sach': (item, col) => col === 'news' && item.category === 'Chính sách & Cơ chế',
    'ket-noi-chuyen-gia': (item, col) => col === 'integrationArticles',
    'thu-toa-soan': (item, col) => col === 'news',
    'gui-bai-ho-so-ocop': (item, col) => col === 'events',

    // ket-noi filters (integrationArticles + news + events)
    'b2b-phan-phoi': (item, col) => col === 'integrationArticles' || (col === 'news' && item.category === 'Hoạt động - Xúc tiến thương mại'),
    'chinh-sach-ho-tro': (item, col) => col === 'news' && item.category === 'Chính sách & Cơ chế',
    'su-kien-hoi-cho': (item, col) => col === 'events',
    'thuong-mai-dien-tu': (item, col) => col === 'integrationArticles',
    'tmdt-xuat-khau': (item, col) => col === 'integrationArticles'
  };

  // Map collection key to card type for interactive-demo.js click handlers
  const COLLECTION_TO_CARD_TYPE = {
    'products': 'product',
    'stories': 'story',
    'businesses': 'business',
    'destinations': 'locality',
    'news': 'news',
    'events': 'event',
    'integrationArticles': 'market'
  };

  // Generate card HTML from item data (no template cloning needed)
  function generateCardHTML(item, collection, cardType) {
    const imageUrl = item.featuredImage || item.image || item.thumbnail || item.images?.[0] || '/images/placeholder.jpg';
    const title = item.headline || item.name || 'Không có tiêu đề';
    const excerpt = item.excerpt || item.description || item.subHeadline || '';
    const category = item.category || item.subCategory || item.type || item.region || '';
    const date = item.publishedDate || item.startDate || item.establishedYear || '';
    const readTime = item.readTime ? ' · ' + item.readTime : '';
    const slug = item.slug || item.id;

    // Determine link URL based on card type
    let linkUrl = '#';
    switch (cardType) {
      case 'product': linkUrl = '/san-pham-ocop/' + slug + '/'; break;
      case 'story': linkUrl = '/cau-chuyen-ocop/' + slug + '/'; break;
      case 'business': linkUrl = '/chu-the-ocop/' + slug + '/'; break;
      case 'locality': linkUrl = '/diem-den-du-lich/' + slug + '/'; break;
      case 'news': linkUrl = '/tin-tuc-su-kien/tin/' + slug + '/'; break;
      case 'event': linkUrl = '/tin-tuc-su-kien/su-kien/' + slug + '/'; break;
      case 'market': linkUrl = '/ocop-hoi-nhap/' + slug + '/'; break;
    }

    return `
      <article class="group relative bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
        data-card-type="${cardType}"
        data-slug="${slug}"
        data-collection="${collection}"
        data-content-key="${item.id || slug}">
        <a href="${linkUrl}" class="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl" aria-label="Xem chi tiết: ${title}">
          <div class="relative aspect-[4/3] overflow-hidden bg-neutral-100">
            <img src="${imageUrl}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onerror="this.onerror=null; this.src='/images/placeholder.jpg';">
            ${category ? `<span class="absolute top-3 left-3 text-xs font-semibold text-white px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">${category}</span>` : ''}
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="font-title text-title-md text-neutral-900 line-clamp-2 group-hover:text-primary transition-colors mb-2">${title}</h3>
            ${excerpt ? `<p class="font-body text-body-sm text-neutral-600 line-clamp-3 flex-1">${excerpt}</p>` : ''}
            <div class="flex items-center gap-2 text-neutral-400 font-label-sm mt-auto pt-2 border-t border-neutral-100">
              ${date ? `<span>${date}${readTime}</span>` : ''}
            </div>
          </div>
        </a>
      </article>
    `;
  }

  // Main function to hydrate all article-grid containers on sub-category pages
  function hydrateArticleGrids() {
    const containers = $$('[data-render="article-grid"]');
    if (!containers.length) return;

    containers.forEach(container => {
      const parentCollection = container.getAttribute('data-collection');
      const filterType = container.getAttribute('data-filter-type');
      const filterValue = container.getAttribute('data-filter-value');

      if (!parentCollection) {
        console.warn('[article-grid] Missing data-collection on container', container);
        return;
      }

      // Get all items from mapped collections, tracking source collection per item
      const collectionKeys = PARENT_TO_COLLECTIONS[parentCollection] || [];
      let allItems = [];
      collectionKeys.forEach(key => {
        const items = getCollectionItems(key, null);
        if (items.length) {
          items.forEach(item => allItems.push({ item, collectionKey: key }));
        }
      });

      if (!allItems.length) {
        console.warn('[article-grid] No items found for parent collection:', parentCollection);
        return;
      }

      // Filter items if filter type/value provided
      let filteredItems = allItems;
      if (filterType === 'subcategory' && filterValue) {
        const predicate = FILTER_PREDICATES[filterValue];
        if (predicate) {
          filteredItems = allItems.filter(({ item, collectionKey }) => predicate(item, collectionKey));
        } else {
          console.warn('[article-grid] No predicate for filter:', filterValue, 'showing all');
        }
      }

      // Fallback: if no items match filter, show all from parent collection
      if (!filteredItems.length) {
        console.log('[article-grid] No matches for filter', filterValue, 'on', parentCollection, '- falling back to all items');
        filteredItems = allItems;
      }

      // Generate cards with per-item card type from source collection
      const cardsHTML = filteredItems.map(({ item, collectionKey }) => {
        const cardType = COLLECTION_TO_CARD_TYPE[collectionKey] || 'story';
        return generateCardHTML(item, collectionKey, cardType);
      }).join('');
      container.innerHTML = cardsHTML;

      // Log breakdown by collection
      const typeCounts = {};
      filteredItems.forEach(({ collectionKey }) => {
        const t = COLLECTION_TO_CARD_TYPE[collectionKey] || 'unknown';
        typeCounts[t] = (typeCounts[t] || 0) + 1;
      });
      console.log('[article-grid] Rendered', filteredItems.length, 'cards for', parentCollection, 'filter:', filterValue, 'types:', typeCounts);
    });
  }

  // Generic Grid Hydration
  function hydrateGrid(container, items, collection, fieldSelectors) {
    if (!items || !container) return;

    // Find existing cards - multiple possible selectors
    let cards = $$('[data-collection="' + collection + '"]', container);
    if (!cards.length) {
      cards = $$('article[class*="group"], div[class*="group"][class*="rounded"], div[class*="card"]', container);
    }
    if (!cards.length) {
      cards = $$('[data-render*="card"], [data-render*="grid"] > *', container);
    }

    const template = cards[0]?.cloneNode(true);

    items.forEach((item, i) => {
      let card = cards[i];
      if (!card && template) {
        card = template.cloneNode(true);
        container.appendChild(card);
      }
      if (card) {
        // Ensure data attributes
        card.setAttribute('data-collection', collection);
        card.setAttribute('data-slug', item.slug);
        card.setAttribute('data-content-key', item.id || item.slug);

        // Hydrate using semantic selectors
        hydrateCardSemantic(card, item, fieldSelectors);
      }
    });

    // DO NOT remove excess cards - keep all original HTML cards
    // This prevents cutting off cards when data has fewer items than HTML (e.g., 9 products on page but only 4 in data)
    // if (cards.length > items.length) {
    //   cards.slice(items.length).forEach(c => c.remove());
    // }
  }

  // Hydrate a single card using semantic selectors
  function hydrateCardSemantic(card, data, fieldSelectors) {
    if (!card || !data) return;

    // Default semantic selectors for common fields (NO :contains pseudo-selectors)
    const defaults = {
      // Text fields
      'category': ['span[class*="text-secondary"][class*="font-label"], span[class*="uppercase"][class*="tracking"], .flex > span:first-child'],
      'province': ['span[class*="text-secondary"] + span, span:first-child + span'],
      'name': ['h3, h4, [class*="font-title"], [class*="text-title"]'],
      'headline': ['h3, h4, [class*="font-title"], [class*="text-title"]'],
      'excerpt': ['p[class*="line-clamp"], p[class*="font-body"], p:not(:first-child)'],
      'producer': ['p[class*="font-medium"], p:last-of-type'],
      'author': ['span[class*="italic"], span[class*="font-medium"]'],
      'readTime': ['span[class*="font-label"][class*="text-on-surface"]'],
      'publishedDate': ['span:first-child', 'span[class*="font-label"]'],
      'certifiedYear': ['span[class*="verified"] + span', 'span:first-child'],
      'stars': ['span[class*="font-bold"]', 'span[class*="star"]'],
      'status': ['span[class*="rounded"][class*="bg-"]:not([class*="hover"])', 'span[class*="px-2"]'],
      'startDate': ['span[class*="font-semibold"]'],
      'location': ['span[class*="location_on"] + span', 'p[class*="location"]'],
      'description': ['p[class*="leading-relaxed"], p[class*="font-body"]'],
      'source': ['span[class*="font-medium"]'],
      'duration': ['span[class*="bg-black"]', 'span[class*="rounded"][class*="text-white"]'],
      'region': ['span[class*="text-secondary"]'],
      // Image fields
      'image': { type: 'img', selectors: ['img[class*="object-cover"]', 'img[class*="w-full"][class*="h-full"]'] },
      'featuredImage': { type: 'img', selectors: ['img[class*="object-cover"]', 'img[class*="aspect"]'] },
      'thumbnail': { type: 'img', selectors: ['img[class*="object-cover"]', 'img[class*="h-36"]'] },
      // Link fields
      'slug': { type: 'link', selectors: ['a[href*="detail"], a[href*="view"], a[class*="text-primary"][class*="font-semibold"], span[class*="cursor-pointer"]'] }
    };

    // Merge with custom selectors
    const selectors = { ...defaults, ...fieldSelectors };

    // Hydrate text fields
    for (const [field, selectorList] of Object.entries(selectors)) {
      if (selectorList && selectorList.type !== 'img' && selectorList.type !== 'link') {
        const sels = Array.isArray(selectorList) ? selectorList : [selectorList];
        hydrateField(card, data, field, sels);
      }
    }

    // Hydrate image fields
    for (const [field, config] of Object.entries(selectors)) {
      if (config && config.type === 'img') {
        const sels = config.selectors || [];
        hydrateImageField(card, data, field, field, sels);
      }
    }

    // Hydrate link fields
    for (const [field, config] of Object.entries(selectors)) {
      if (config && config.type === 'link') {
        const sels = config.selectors || [];
        hydrateLinkField(card, data, field, sels);
      }
    }

    // Special: star rating
    if (data.stars !== undefined) {
      const starEl = card.querySelector('[data-field="stars"], span[class*="star"]');
      if (starEl) {
        starEl.textContent = '★'.repeat(data.stars) + '☆'.repeat(5 - data.stars);
      }
    }

    // Special: status badge
    if (data.status) {
      const statusEl = card.querySelector('[data-field="status"], span[class*="rounded"][class*="bg-"]:not([class*="hover"])');
      if (statusEl) {
        statusEl.textContent = data.status;
        statusEl.className = statusEl.className.replace(/bg-\w+-fixed text-\w+|bg-\w+ text-\w+/, getStatusClass(data.status));
      }
    }

    card._ocopData = data;
  }

  function getStatusClass(status) {
    const statusMap = {
      'Sắp diễn ra': 'bg-tertiary-fixed text-tertiary',
      'Đang diễn ra': 'bg-primary text-on-primary',
      'Đã kết thúc': 'bg-surface-container text-on-surface-variant',
      'upcoming': 'bg-tertiary-fixed text-tertiary',
      'ongoing': 'bg-primary text-on-primary',
      'completed': 'bg-surface-container text-on-surface-variant'
    };
    return statusMap[status] || 'bg-surface-container text-on-surface-variant';
  }

  // ============================================
  // FIELD SELECTOR MAPS PER COLLECTION
  // ============================================

  const FIELD_SELECTORS = {
    products: {
      'category': ['span[class*="text-secondary"]', 'span[class*="uppercase"]'],
      'name': ['h3[class*="font-title"], h3[class*="text-title"]'],
      'producer': ['p[class*="font-medium"]'],
      'certifiedYear': ['span[class*="verified"] + span'],
      'stars': ['span[class*="font-bold"]'],
      'image': { type: 'img', selectors: ['img[class*="object-cover"]'] },
      'slug': { type: 'link', selectors: ['span[class*="cursor-pointer"], a[class*="text-primary"]'] }
    },
    stories: {
      'category': ['span[class*="text-secondary"], span[class*="uppercase"], span[class*="absolute"][class*="bottom"]'],
      'headline': ['h3[class*="font-title"], h4[class*="font-title"]'],
      'excerpt': ['p[class*="line-clamp"], p[class*="leading-relaxed"]'],
      'readTime': ['span[class*="font-label"]:not([class*="text-secondary"])'],
      'author': ['span[class*="italic"], span[class*="font-medium"]'],
      'publishedDate': ['span:first-child'],
      'featuredImage': { type: 'img', selectors: ['img[class*="object-cover"][class*="aspect"], img[class*="object-cover"][class*="h-"]'] },
      'thumbnail': { type: 'img', selectors: ['img[class*="object-cover"][class*="h-36"]'] },
      'duration': { type: 'img', selectors: ['span[class*="bg-black"]'] },
      'slug': { type: 'link', selectors: ['a[href="#"][data-action], a[class*="text-primary"][class*="font-semibold"]'] }
    },
    businesses: {
      'type': ['span[class*="text-secondary"]'],
      'name': ['h3[class*="font-title"]'],
      'representative': ['p[class*="font-medium"]'],
      'description': ['p[class*="line-clamp"]'],
      'image': { type: 'img', selectors: ['img[class*="object-cover"]'] },
      'slug': { type: 'link', selectors: ['a[class*="text-primary"]'] }
    },
    destinations: {
      'region': ['span[class*="text-secondary"]'],
      'category': ['span[class*="text-secondary"]'],
      'name': ['h3[class*="font-title"], h4[class*="font-title"]'],
      'description': ['p[class*="line-clamp"], p[class*="leading-relaxed"]'],
      'image': { type: 'img', selectors: ['img[class*="object-cover"]'] },
      'stats': ['span[class*="font-medium"]'],
      'slug': { type: 'link', selectors: ['a[class*="text-primary"][class*="font-semibold"]'] }
    },
    news: {
      'category': ['span[class*="uppercase"], span[class*="text-secondary"]'],
      'publishedDate': ['span:first-child'],
      'readTime': ['span[class*="font-label"]'],
      'headline': ['h3[class*="font-title"], h4[class*="font-title"]'],
      'excerpt': ['p[class*="line-clamp"]'],
      'source': ['span[class*="font-medium"]'],
      'location': ['span:last-child'],
      'featuredImage': { type: 'img', selectors: ['img[class*="object-cover"][class*="aspect"]'] },
      'slug': { type: 'link', selectors: ['span[class*="text-primary"][class*="font-medium"]'] }
    },
    events: {
      'status': ['span[class*="rounded"][class*="bg-"]'],
      'startDate': ['span[class*="font-semibold"]'],
      'headline': ['h4[class*="font-title"]'],
      'location': ['span[class*="location_on"] + span'],
      'description': ['p[class*="flex"][class*="gap-1"]'],
      'image': { type: 'img', selectors: ['img[class*="object-cover"]'] },
      'slug': { type: 'link', selectors: ['a[class*="bg-surface-container"]'] }
    },
    integrationArticles: {
      'category': ['span[class*="absolute"][class*="top-3"]'],
      'headline': ['h3[class*="font-title"]'],
      'excerpt': ['p[class*="leading-relaxed"]'],
      'author': ['span:first-child'],
      'publishedDate': ['span:first-child'],
      'featuredImage': { type: 'img', selectors: ['img[class*="object-cover"][class*="h-44"]'] },
      'slug': { type: 'link', selectors: ['span[class*="text-primary"][class*="font-semibold"]'] }
    }
  };

  // ============================================
  // MAIN RENDER DISPATCHER
  // ============================================

  // Fallback selectors for grids without data-render attributes
  const GRID_FALLBACKS = {
    products: [
      '[data-render="product-grid"]',
      'div.grid[data-collection="products"]',
      'section[id*="san-pham"] div.grid:has(article[data-collection="products"])',
      'section:has(article[data-collection="products"]) div.grid'
    ],
    stories: [
      '[data-render="story-grid"]',
      'div.grid[data-collection="stories"]',
      'section[id*="cau-chuyen"] div.grid:has(article[data-collection="stories"])',
      'section:has(article[data-collection="stories"]) div.grid',
      'div.grid:has(article.lg\\:col-span-7)'
    ],
    businesses: [
      '[data-render="business-grid"]',
      'div.grid[data-collection="businesses"]',
      'section[id*="chu-the"] div.grid:has([data-collection="businesses"])',
      'section:has([data-collection="businesses"]) div.grid'
    ],
    destinations: [
      '[data-render="destination-grid"]',
      'div.grid[data-collection="destinations"]',
      'section[id*="diem-den"] div.grid:has([data-collection="destinations"])',
      'section:has([data-collection="destinations"]) div.grid'
    ],
    news: [
      '[data-render="news-grid"]',
      'div.grid[data-collection="news"]',
      'section[id*="tin-tuc"] div.grid:has(article[data-collection="news"])',
      'section:has(article[data-collection="news"]) div.grid'
    ],
    events: [
      '[data-render="event-grid"]',
      'div.grid[data-collection="events"]',
      'div.lg\\:col-span-5.flex.flex-col.gap-4:has([data-collection="events"])',
      'div.flex.flex-col.gap-4:has(div[data-collection="events"])'
    ],
    integrationArticles: [
      '[data-render="integration-article-grid"]',
      'div.grid[data-collection="integrationArticles"]',
      'section[id*="ocop-hoi-nhap"] div.grid:has([data-collection="integrationArticles"])'
    ]
  };

  function findGridContainers(collection) {
    const containers = [];
    const fallbacks = GRID_FALLBACKS[collection] || [];

    // First try data-render attribute
    $$('[data-render="' + collection + '-grid"]').forEach(el => containers.push(el));

    // Then try fallbacks
    fallbacks.forEach(sel => {
      try {
        $$(sel).forEach(el => {
          if (!containers.includes(el)) containers.push(el);
        });
      } catch (e) {
        // Ignore selector errors
      }
    });

    return containers;
  }

  // ============================================
  // MAIN RENDER DISPATCHER
  // ============================================

  function renderAll() {
    if (!window.OCOP_CONTENT) {
      console.warn('OCOP_CONTENT not loaded yet');
      return;
    }

    const pageKey = getPageKey();
    const pageData = window.OCOP_CONTENT.pages?.[pageKey] || window.OCOP_CONTENT.pages?.home;

    // 1. Hydrate Hero
    const heroContainer = $('[data-render="hero"]');
    if (heroContainer) {
      const page = heroContainer.getAttribute('data-page') || pageKey;
      const heroData = window.OCOP_CONTENT.pages?.[page]?.hero || pageData?.hero;
      hydrateHero(heroContainer, heroData);
    }

    // 2. Hydrate Section Headers
    $$('[data-render="section-header"]').forEach(container => {
      const contentKey = container.getAttribute('data-content-key');
      if (contentKey && pageData?.sections) {
        const section = pageData.sections.find(s => s.id === contentKey);
        if (section) hydrateSectionHeader(container, section);
      }
    });

    // 3. Hydrate Quick Links
    const quickLinksContainer = $('[data-render="quick-links"]');
    if (quickLinksContainer && pageData?.quickLinks) {
      hydrateQuickLinks(quickLinksContainer, pageData.quickLinks);
    }

    // 4. Hydrate Product Grid
    findGridContainers('products').forEach(container => {
      const items = getCollectionItems('products', pageData);
      if (items.length) {
        hydrateGrid(container, items, 'products', FIELD_SELECTORS.products);
      }
    });

    // 5. Hydrate Story Grid
    findGridContainers('stories').forEach(container => {
      const items = getCollectionItems('stories', pageData);
      if (items.length) {
        hydrateGrid(container, items, 'stories', FIELD_SELECTORS.stories);
      }
    });

    // 6. Hydrate Business Grid
    findGridContainers('businesses').forEach(container => {
      const items = getCollectionItems('businesses', pageData);
      if (items.length) {
        hydrateGrid(container, items, 'businesses', FIELD_SELECTORS.businesses);
      }
    });

    // 7. Hydrate Destination Grid
    findGridContainers('destinations').forEach(container => {
      const items = getCollectionItems('destinations', pageData);
      if (items.length) {
        hydrateGrid(container, items, 'destinations', FIELD_SELECTORS.destinations);
      }
    });

    // 8. Hydrate News Grid
    findGridContainers('news').forEach(container => {
      const items = getCollectionItems('news', pageData);
      if (items.length) {
        hydrateGrid(container, items, 'news', FIELD_SELECTORS.news);
      }
    });

    // 9. Hydrate Event Grid
    findGridContainers('events').forEach(container => {
      const items = getCollectionItems('events', pageData);
      if (items.length) {
        hydrateGrid(container, items, 'events', FIELD_SELECTORS.events);
      }
    });

    // 10. Hydrate Integration Article Grid
    findGridContainers('integrationArticles').forEach(container => {
      const items = getCollectionItems('integrationArticles', pageData);
      if (items.length) {
        hydrateGrid(container, items, 'integrationArticles', FIELD_SELECTORS.integrationArticles);
      }
    });

    // 11. Hydrate Article Grid (sub-category pages with data-render="article-grid")
    hydrateArticleGrids();

    // 12. Hydrate Filter Tabs
    $$('[data-render="filter-tabs"]').forEach(container => {
      const page = container.getAttribute('data-page') || pageKey;
      const tabs = window.OCOP_CONTENT.pages?.[page]?.filterTabs;
      if (tabs) {
        $$('[data-tab]', container).forEach((btn, i) => {
          if (tabs[i]) {
            btn.textContent = tabs[i];
            btn.setAttribute('data-tab', tabs[i].toLowerCase().replace(/[^a-z0-9-]/g, '-'));
          }
        });
      }
    });

    // 12. Hydrate Metrics Grid
    $$('[data-render="metrics"], div.grid.grid-cols-1.md\\:grid-cols-3.gap-4.mt-6').forEach(container => {
      const metrics = pageData?.metrics || pageData?.sections?.find(s => s.id === 'khoi-08-hoc-nhap')?.metrics;
      if (metrics) {
        hydrateGrid(container, metrics, 'metrics', {
          'value': ['span[class*="font-headline"]'],
          'label': ['span[class*="font-body"]'],
          'icon': ['span[class*="material-symbols"]'],
          'color': ['div[class*="rounded-lg"][class*="bg-"]']
        });
      }
    });

    // 13. Hydrate OCOP NOW Timeline
    $$('[data-render="ocop-now"], div.bg-\\[#F8F5EE\\].rounded-2xl.shadow-sm[id="ocop-now"]').forEach(container => {
      const entries = pageData?.sections?.find(s => s.id === 'khoi-08-hoc-nhap')?.entries || [];
      hydrateOcopNow(container, entries);
    });

    // 14. Hydrate Analytics Donut
    $$('[data-render="analytics-donut"], div.lg\\:col-span-4.bg-surface.p-6.rounded-xl.shadow-xs.flex.flex-col.justify-between').forEach(container => {
      const analytics = pageData?.sections?.find(s => s.id === 'khoi-08-hoc-nhap')?.analytics;
      if (analytics) hydrateAnalyticsDonut(container, analytics);
    });

    // 15. Hydrate OCOP NOW Entries
    $$('[data-render="ocop-now-entry"], div.flex.gap-3:has(span.font-label-sm.font-semibold)').forEach(container => {
      container.setAttribute('data-render', 'ocop-now-entry');
    });

    // 16. Detail Pages - hydrate if on detail page
    const slug = getSlugFromUrl();
    if (slug) {
      hydrateDetailPage(slug);
    }

    // Dispatch ready event
    document.dispatchEvent(new CustomEvent('ocop:content-loaded', { detail: { pageKey, slug } }));
  }

  function getPageKey() {
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') return 'home';

    const parts = path.split('/').filter(Boolean);
    if (parts[0]) return parts[0];
    return 'home';
  }

  function getCollectionItems(collection, pageData) {
    if (pageData && pageData[collection]) return pageData[collection];
    if (window.OCOP_CONTENT[collection]) return window.OCOP_CONTENT[collection];
    if (pageData?.sections) {
      for (const section of pageData.sections) {
        if (section[collection]) return section[collection];
        if (section[collection + 's']) return section[collection + 's'];
      }
    }
    return [];
  }

  // ============================================
  // DETAIL PAGE HYDRATION
  // ============================================

  function hydrateDetailPage(slug) {
    if (window.location.pathname.includes('/san-pham-ocop/') && slug) {
      const product = findBySlug('products', slug);
      if (product) hydrateProductDetail(product);
    }
    if (window.location.pathname.includes('/cau-chuyen-ocop/') && slug) {
      const story = findBySlug('stories', slug);
      if (story) hydrateStoryDetail(story);
    }
    if (window.location.pathname.includes('/chu-the-ocop/') && slug) {
      const business = findBySlug('businesses', slug);
      if (business) hydrateBusinessDetail(business);
    }
    if (window.location.pathname.includes('/diem-den-du-lich/') && slug) {
      const dest = findBySlug('destinations', slug);
      if (dest) hydrateDestinationDetail(dest);
    }
    if (window.location.pathname.includes('/tin-tuc-su-kien/') && slug) {
      const news = findBySlug('news', slug);
      if (news) hydrateNewsDetail(news);
    }
    if (window.location.pathname.includes('/su-kien/') && slug) {
      const event = findBySlug('events', slug);
      if (event) hydrateEventDetail(event);
    }
    if (window.location.pathname.includes('/ocop-hoi-nhap/') && slug) {
      const article = findBySlug('integrationArticles', slug);
      if (article) hydrateIntegrationArticleDetail(article);
    }
  }

  function hydrateProductDetail(product) {
    const container = $('[data-render="product-detail"]') || $('main');
    if (!container || !product) return;

    hydrateText($('[data-field="breadcrumb-product"], nav span:last-child', container), product, 'name');

    const mainImg = $('[data-field="mainImage"], img[class*="object-cover"]', container);
    if (mainImg && product.images?.[0]) mainImg.src = product.images[0];

    $$('[data-field="thumbImage"], img[class*="h-24"]', container).forEach((img, i) => {
      if (product.images?.[i]) img.src = product.images[i];
    });

    hydrateText($('[data-field="category"], span[class*="text-secondary"]', container), product, 'category');
    hydrateText($('[data-field="name"], h1[class*="font-headline"]', container), product, 'name');
    hydrateText($('[data-field="description"], p[class*="font-body"]', container), product, 'description');
    hydrateText($('[data-field="producer"], span[class*="font-medium"]', container), product, 'producer');
    hydrateText($('[data-field="producerType"], div:first-child + span', container), product, 'producerType');
    hydrateText($('[data-field="stars"], span[class*="font-medium"][class*="text-primary"]', container), product, 'stars');
    hydrateText($('[data-field="certifiedYear"], div:first-child + span', container), product, 'certifiedYear');
    hydrateText($('[data-field="origin"], div:first-child + span', container), product, 'specs.origin');
    hydrateText($('[data-field="harvestSeason"], div:first-child + span', container), product, 'specs.harvestSeason');
    hydrateText($('[data-field="ingredients"], div:first-child + p', container), product, 'ingredients');
    hydrateText($('[data-field="process"], div:first-child + ol', container), product, 'process');
    hydrateText($('[data-field="certifications"], div:first-child + ul', container), product, 'certifications');
    hydrateText($('[data-field="awards"], div:first-child + ul', container), product, 'awards');
    hydrateText($('[data-field="nutritionInfo"], div:first-child + p', container), product, 'nutritionInfo');
    hydrateText($('[data-field="storage"], div:first-child + p', container), product, 'storage');
    hydrateText($('[data-field="price"], div:first-child + p', container), product, 'price');

    const relatedContainer = $('#related-products-' + product.id);
    if (relatedContainer && product.relatedProducts) {
      const related = product.relatedProducts.map(s => findBySlug('products', s)).filter(Boolean);
      hydrateGrid(relatedContainer, related, 'products', FIELD_SELECTORS.products);
    }
  }

  function hydrateStoryDetail(story) {
    const container = $('[data-render="story-detail"]') || $('main');
    if (!container || !story) return;

    hydrateText($('[data-field="breadcrumb-story"], nav span:last-child', container), story, 'headline');
    hydrateText($('[data-field="publishedDate"], span:first-child', container), story, 'publishedDate');
    hydrateText($('[data-field="readTime"], span[class*="font-label"]', container), story, 'readTime');
    hydrateText($('[data-field="category"], span[class*="font-semibold"]', container), story, 'category');
    hydrateText($('[data-field="headline"], h1[class*="font-headline"]', container), story, 'headline');
    hydrateText($('[data-field="subHeadline"], p[class*="font-lead"]', container), story, 'subHeadline');
    hydrateText($('[data-field="content"], div[class*="prose"], article > div', container), story, 'content');
    hydrateText($('[data-field="author"], h4[class*="font-title"]', container), story, 'author');
    hydrateText($('[data-field="authorRole"], p[class*="font-body"]', container), story, 'authorRole');

    const featuredImg = $('[data-field="featuredImage"], img[class*="object-cover"]', container);
    if (featuredImg && story.featuredImage) featuredImg.src = story.featuredImage;

    const tagsContainer = $('[data-field="tags"], div[class*="flex"][class*="gap-2"]', container);
    if (tagsContainer && story.tags) {
      tagsContainer.innerHTML = story.tags.map(t =>
        `<span class="px-3 py-1 rounded bg-surface-container text-on-surface-variant text-sm">${t}</span>`
      ).join('');
    }

    const relatedContainer = $('#related-stories-' + story.id);
    if (relatedContainer && story.relatedStories) {
      const related = story.relatedStories.map(s => findBySlug('stories', s)).filter(Boolean);
      hydrateGrid(relatedContainer, related, 'stories', FIELD_SELECTORS.stories);
    }
  }

  function hydrateBusinessDetail(business) {
    const container = $('[data-render="business-detail"]') || $('main');
    if (!container || !business) return;

    hydrateText($('[data-field="breadcrumb-business"], nav span:last-child', container), business, 'name');
    hydrateText($('[data-field="name"], h1[class*="font-headline"]', container), business, 'name');
    hydrateText($('[data-field="description"], p[class*="font-body"]', container), business, 'description');
    hydrateText($('[data-field="type"], div:first-child + span', container), business, 'type');
    hydrateText($('[data-field="representative"], div:first-child + span', container), business, 'representative');
    hydrateText($('[data-field="position"], div:first-child + span', container), business, 'position');
    hydrateText($('[data-field="establishedYear"], div:first-child + span', container), business, 'establishedYear');
    hydrateText($('[data-field="members"], div:first-child + span', container), business, 'members');
    hydrateText($('[data-field="employees"], div:first-child + span', container), business, 'employees');
    hydrateText($('[data-field="landArea"], div:first-child + span', container), business, 'landArea');
    hydrateText($('[data-field="annualRevenue"], div:first-child + span', container), business, 'annualRevenue');
    hydrateText($('[data-field="mainProducts"], div:first-child + ul', container), business, 'mainProducts');
    hydrateText($('[data-field="certifications"], div:first-child + div', container), business, 'certifications');
    hydrateText($('[data-field="exportMarkets"], div:first-child + div', container), business, 'exportMarkets');
    hydrateText($('[data-field="address"], div:first-child + span', container), business, 'contact.address');
    hydrateText($('[data-field="phone"], a[href^="tel:"]', container), business, 'contact.phone');
    hydrateText($('[data-field="email"], a[href^="mailto:"]', container), business, 'contact.email');
    hydrateText($('[data-field="website"], a[href^="http"]', container), business, 'contact.website');

    const mainImg = $('[data-field="mainImage"], img[class*="object-cover"]', container);
    if (mainImg && business.images?.[0]) mainImg.src = business.images[0];
  }

  function hydrateDestinationDetail(dest) {
    const container = $('[data-render="destination-detail"]') || $('main');
    if (!container || !dest) return;

    hydrateText($('[data-field="breadcrumb-destination"], nav span:last-child', container), dest, 'name');
    hydrateText($('[data-field="region"], span[class*="font-semibold"]', container), dest, 'region');
    hydrateText($('[data-field="category"], span[class*="text-secondary"]', container), dest, 'category');
    hydrateText($('[data-field="name"], h1[class*="font-headline"], h2[class*="font-headline"]', container), dest, 'name');
    hydrateText($('[data-field="description"], p[class*="font-body"]', container), dest, 'description');
    hydrateText($('[data-field="products"], span:first-child', container), dest, 'stats.products');
    hydrateText($('[data-field="stories"], span:first-child', container), dest, 'stats.stories');

    const mainImg = $('[data-field="mainImage"], img[class*="object-cover"]', container);
    if (mainImg && dest.image) mainImg.src = dest.image;
  }

  function hydrateNewsDetail(news) {
    const container = $('[data-render="news-detail"]') || $('main');
    if (!container || !news) return;

    hydrateText($('[data-field="breadcrumb-news"], nav span:last-child', container), news, 'headline');
    hydrateText($('[data-field="category"], span[class*="uppercase"]', container), news, 'category');
    hydrateText($('[data-field="publishedDate"], span:first-child', container), news, 'publishedDate');
    hydrateText($('[data-field="readTime"], span[class*="font-label"]', container), news, 'readTime');
    hydrateText($('[data-field="headline"], h1[class*="font-headline"]', container), news, 'headline');
    hydrateText($('[data-field="excerpt"], p[class*="line-clamp"]', container), news, 'excerpt');
    hydrateText($('[data-field="content"], div[class*="prose"]', container), news, 'content');
    hydrateText($('[data-field="source"], span[class*="font-medium"]', container), news, 'source');
    hydrateText($('[data-field="location"], span:last-child', container), news, 'location');

    const featuredImg = $('[data-field="featuredImage"], img[class*="object-cover"]', container);
    if (featuredImg && news.featuredImage) featuredImg.src = news.featuredImage;
  }

  function hydrateEventDetail(event) {
    const container = $('[data-render="event-detail"]') || $('main');
    if (!container || !event) return;

    hydrateText($('[data-field="breadcrumb-event"], nav span:last-child', container), event, 'headline');
    hydrateText($('[data-field="status"], span[class*="rounded"][class*="bg-"]', container), event, 'status');
    hydrateText($('[data-field="startDate"], span[class*="font-semibold"]', container), event, 'startDate');
    hydrateText($('[data-field="endDate"], span:first-child', container), event, 'endDate');
    hydrateText($('[data-field="headline"], h1[class*="font-headline"], h2[class*="font-headline"]', container), event, 'headline');
    hydrateText($('[data-field="location"], span[class*="location_on"] + span', container), event, 'location');
    hydrateText($('[data-field="description"], p[class*="flex"][class*="gap-1"]', container), event, 'description');

    const mainImg = $('[data-field="mainImage"], img[class*="object-cover"]', container);
    if (mainImg && event.image) mainImg.src = event.image;
  }

  function hydrateIntegrationArticleDetail(article) {
    const container = $('[data-render="integration-article-detail"]') || $('main');
    if (!container || !article) return;

    hydrateText($('[data-field="breadcrumb-article"], nav span:last-child', container), article, 'headline');
    hydrateText($('[data-field="category"], span[class*="absolute"][class*="top-3"]', container), article, 'category');
    hydrateText($('[data-field="headline"], h1[class*="font-headline"], h2[class*="font-headline"]', container), article, 'headline');
    hydrateText($('[data-field="excerpt"], p[class*="font-body"]', container), article, 'excerpt');
    hydrateText($('[data-field="author"], span:first-child', container), article, 'author');
    hydrateText($('[data-field="publishedDate"], span:first-child', container), article, 'publishedDate');
    hydrateText($('[data-field="content"], div[class*="prose"]', container), article, 'content');

    const featuredImg = $('[data-field="featuredImage"], img[class*="object-cover"]', container);
    if (featuredImg && article.featuredImage) featuredImg.src = article.featuredImage;
  }

  // ============================================
  // SPECIALIZED GRID HYDRATORS
  // ============================================

  function hydrateOcopNow(container, entries) {
    if (!entries || !container) return;

    const items = container.querySelectorAll('[data-render="ocop-now-entry"], .flex.gap-3');
    const template = items[0]?.cloneNode(true);

    entries.forEach((entry, i) => {
      let item = items[i];
      if (!item && template) {
        item = template.cloneNode(true);
        container.appendChild(item);
      }
      if (item) {
        hydrateText(item.querySelector('[data-field="time"], span:first-child'), entry, 'time');
        hydrateText(item.querySelector('[data-field="headline"], h4:first-child'), entry, 'headline');
        hydrateText(item.querySelector('[data-field="description"], p:last-child'), entry, 'description');
      }
    });

    // DO NOT remove excess items
    // if (items.length > entries.length) {
    //   [...items].slice(entries.length).forEach(el => el.remove());
    // }
  }

  function hydrateAnalyticsDonut(container, analytics) {
    if (!analytics || !container) return;

    hydrateText(container.querySelector('[data-field="title"], h3[class*="font-title"]'), analytics, 'title');

    const legendContainer = container.querySelector('[data-field="legend"], ul[class*="flex"]');
    if (legendContainer && analytics.data) {
      legendContainer.innerHTML = analytics.data.map(d => `
        <li class="flex items-center justify-between">
          <span class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full" style="background:${d.color}"></span>${d.label}</span>
          <span class="font-semibold text-primary">${d.value}%</span>
        </li>
      `).join('');
    }
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  function waitForContent() {
    if (window.OCOP_CONTENT) {
      renderAll();
    } else {
      setTimeout(waitForContent, 50);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForContent);
  } else {
    waitForContent();
  }

  window.OCOP_ContentLoader = {
    renderAll,
    hydrateHero,
    hydrateSectionHeader,
    hydrateGrid,
    hydrateDetailPage
  };
})();