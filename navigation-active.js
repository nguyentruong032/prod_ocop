/**
 * Navigation Active State & Tab Auto-Scroll Handler
 * Handles:
 * 1. Active state for Navbar based on current URL (6-item navbar: Trang chủ, OCOP NOW, Bạn đọc & Tòa soạn, Câu chuyện OCOP, Chủ thể OCOP, Điểm đến du lịch)
 * 2. Query param ?tab=... auto-scroll and tab activation (SAFE: no infinite reload)
 * 3. Search Modal keyboard shortcuts (Cmd/Ctrl+K, ESC)
 * 4. Shared Header/Footer runtime injection
 */
(function () {
  'use strict';

  // ============================================
  // CONFIGURATION: Route to Navbar Item Mapping (6-item navbar)
  // ============================================
  const NAV_ALIASES = {
    'ocop-hoi-nhap': 'diem-den-du-lich',
  };
  function getActiveNavKey() {
    const segment = window.location.pathname.split('/').filter(Boolean)[0];
    if (!segment) return null; // trang chủ: navbar không có mục Trang chủ
    const key = NAV_ALIASES[segment] || segment;
    return document.querySelector(`.nav-link[data-path="${key}"]`) ? key : null;
  }
  // ============================================
  // ACTIVE STATE HANDLER
  // ============================================
  function updateActiveNav() {
    const activeNavKey = getActiveNavKey();

    document.querySelectorAll('.nav-link').forEach(link => {
      const isActive = link.getAttribute('data-path') === activeNavKey;
      const textSpan = link.querySelector('span:not(.material-symbols-outlined)');

      link.classList.toggle('text-[#1F4D3A]', isActive);
      link.classList.toggle('font-bold', isActive);
      link.classList.toggle('border-b-2', isActive);
      link.classList.toggle('border-[#1F4D3A]', isActive);
      link.classList.toggle('text-on-surface-variant', !isActive);
      link.classList.toggle('border-transparent', !isActive);

      if (textSpan) {
        textSpan.style.color = isActive ? '#1F4D3A' : '';
        textSpan.style.fontWeight = isActive ? '700' : '';
      }
    });
  }

  // ============================================
  // TAB AUTO-SCROLL & ACTIVATION FROM QUERY PARAM (SAFE - NO INFINITE RELOAD)
  // ============================================
  function handleTabFromQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');

    if (!tab) return;

    // 1. Try selector mapping FIRST (safe: only scrolls, never clicks <a>)
    const selector = TAB_SELECTORS[tab];
    if (selector) {
      // Search ONLY within <main> to avoid header/footer dropdown links
      const main = document.querySelector('main');
      const target = main ? main.querySelector(selector) : document.querySelector(selector);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.classList.add('ring-2', 'ring-primary', 'rounded-lg');
        setTimeout(() => target.classList.remove('ring-2', 'ring-primary', 'rounded-lg'), 3000);
        return;
      }
    }

    // 2. Fallback: find button[data-tab="..."] ONLY within <main> (safe: buttons don't navigate)
    const main = document.querySelector('main');
    if (main) {
      const tabButton = main.querySelector(`button[data-tab="${tab}"]`);
      if (tabButton) {
        tabButton.click();
        return;
      }
    }

    // 3. Handle anchor links (e.g., #ban-do-ocop, #ocop-now)
    if (window.location.hash) {
      const anchor = document.querySelector(window.location.hash);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        anchor.classList.add('ring-2', 'ring-primary', 'rounded-lg');
        setTimeout(() => anchor.classList.remove('ring-2', 'ring-primary', 'rounded-lg'), 3000);
      }
    }
  }

  // ============================================
  // INTERCEPT DROPDOWN CLICKS ON SAME PAGE (PREVENT RELOAD, SCROLL INSTEAD)
  // ============================================
  function initDropdownIntercept() {
    // Only intercept clicks on dropdown links that have ?tab= and are on the SAME pathname
    document.querySelectorAll('header nav .absolute.top-full a[href*="?tab="]').forEach(link => {
      link.addEventListener('click', (e) => {
        const currentPath = window.location.pathname;
        const linkPath = new URL(link.href, window.location.origin).pathname;

        // If same page (e.g., on /san-pham-ocop and clicking /san-pham-ocop?tab=...)
        if (currentPath === linkPath) {
          e.preventDefault();
          e.stopPropagation();

          const tab = new URL(link.href, window.location.origin).searchParams.get('tab');
          if (tab) {
            history.pushState(null, '', link.href);
            handleTabFromQueryParam();
          }
        }
      });
    });
  }

  // ============================================
  // SEARCH MODAL HANDLER
  // ============================================
  function initSearchModal() {
    const searchTrigger = document.getElementById('search-modal-trigger');
    const searchTriggerMobile = document.getElementById('search-modal-trigger-mobile');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-modal-close');
    const searchInput = document.getElementById('search-input');

    const openModal = () => {
      if (searchModal) {
        searchModal.classList.remove('hidden');
        searchModal.classList.add('flex');
        if (searchInput) searchInput.focus();
      }
    };

    const closeModal = () => {
      if (searchModal) {
        searchModal.classList.add('hidden');
        searchModal.classList.remove('flex');
        if (searchInput) searchInput.blur();
      }
    };

    [searchTrigger, searchTriggerMobile].forEach(btn => {
      if (btn) btn.addEventListener('click', openModal);
    });

    if (searchClose) searchClose.addEventListener('click', closeModal);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openModal();
      }
      // ESC to close
      if (e.key === 'Escape' && searchModal && !searchModal.classList.contains('hidden')) {
        closeModal();
      }
    });

    // Close on backdrop click
    if (searchModal) {
      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeModal();
      });
    }
  }

  // ============================================
  // DROPDOWN HOVER/FOCUS HANDLER
  // ============================================
  function initDropdowns() {
    const dropdownGroups = document.querySelectorAll('header nav .relative.group');

    dropdownGroups.forEach(group => {
      const trigger = group.querySelector('a');
      const dropdown = group.querySelector('.absolute.top-full');

      if (trigger && dropdown) {
        group.addEventListener('mouseenter', () => {
          dropdown.classList.remove('hidden');
          dropdown.classList.add('flex');
        });

        group.addEventListener('mouseleave', () => {
          dropdown.classList.add('hidden');
          dropdown.classList.remove('flex');
        });

        trigger.addEventListener('focus', () => {
          dropdown.classList.remove('hidden');
          dropdown.classList.add('flex');
        });

        trigger.addEventListener('blur', (e) => {
          setTimeout(() => {
            if (!dropdown.contains(document.activeElement)) {
              dropdown.classList.add('hidden');
              dropdown.classList.remove('flex');
            }
          }, 100);
        });

        dropdown.addEventListener('focusin', () => {
          dropdown.classList.remove('hidden');
          dropdown.classList.add('flex');
        });

        dropdown.addEventListener('focusout', (e) => {
          setTimeout(() => {
            if (!group.contains(document.activeElement)) {
              dropdown.classList.add('hidden');
              dropdown.classList.remove('flex');
            }
          }, 100);
        });
      }
    });
  }

  // ============================================
  // SHARED HEADER/FOOTER RUNTIME INJECTION
  // ============================================
  async function injectSharedComponents() {
    try {
      // Fetch and inject shared header
      const headerResponse = await fetch('/shared-header.html');
      if (headerResponse.ok) {
        const headerHtml = await headerResponse.text();
        const existingHeader = document.querySelector('header');
        if (existingHeader) {
          existingHeader.outerHTML = headerHtml;
        } else {
          // Insert at beginning of body if no header exists
          document.body.insertAdjacentHTML('afterbegin', headerHtml);
        }
      }

      // Fetch and inject shared footer
      const footerResponse = await fetch('/shared-footer.html');
      if (footerResponse.ok) {
        const footerHtml = await footerResponse.text();
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
          existingFooter.outerHTML = footerHtml;
        } else {
          // Append to body if no footer exists
          document.body.insertAdjacentHTML('beforeend', footerHtml);
        }
      }
    } catch (error) {
      console.warn('Failed to inject shared components:', error);
    }
  }

  // ============================================
  // INITIALIZATION
  // ============================================
  async function init() {
    // Inject shared header/footer FIRST (before other initializers)
    await injectSharedComponents();

    updateActiveNav();
    handleTabFromQueryParam();
    initSearchModal();
    initDropdowns();
    initDropdownIntercept();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-run on navigation (for SPA-like behavior if needed)
  window.addEventListener('popstate', () => {
    updateActiveNav();
    handleTabFromQueryParam();
    initDropdownIntercept();
  });

  // Expose for manual use
  window.NavigationActive = {
    updateActiveNav,
    handleTabFromQueryParam,
    initSearchModal,
    initDropdowns,
    initDropdownIntercept,
  };
})();