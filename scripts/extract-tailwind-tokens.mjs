#!/usr/bin/env node
/**
 * extract-tailwind-tokens.mjs
 * Enhanced Tailwind token extractor with value drift detection and DIFF markers.
 *
 * Usage:
 *   node scripts/extract-tailwind-tokens.mjs                    # Extract from all 21 pages
 *   node scripts/extract-tailwind-tokens.mjs --baseline <sha>   # Compare against baseline commit
 *   node scripts/extract-tailwind-tokens.mjs --output json      # Output JSON (default)
 *   node scripts/extract-tailwind-tokens.mjs --output css       # Output theme.css draft
 *
 * Output:
 *   - JSON report with tokens, per-page values, drift detection, DIFF markers
 *   - Writes theme.css draft to packages/tokens/theme.css when --output css
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = ROOT;
const TOKENS_DIR = path.join(ROOT, 'packages/tokens');
const THEME_CSS_PATH = path.join(TOKENS_DIR, 'theme.css');

// ─── Config: token groups we care about ───
const TOKEN_GROUPS = [
  'colors',
  'borderRadius',
  'spacing',
  'fontFamily',
  'fontSize',
  'lineHeight',
  'fontWeight',
  'letterSpacing',
];

// ─── Known keys from baseline (index.html) — used for drift detection ───
const BASELINE_KEYS = {
  colors: [
    'primary', 'primary-fixed', 'primary-fixed-dim', 'primary-container',
    'on-primary', 'on-primary-container', 'on-primary-fixed', 'on-primary-fixed-variant',
    'inverse-primary',
    'secondary', 'secondary-fixed', 'secondary-fixed-dim', 'secondary-container',
    'on-secondary', 'on-secondary-container', 'on-secondary-fixed', 'on-secondary-fixed-variant',
    'tertiary', 'tertiary-fixed', 'tertiary-fixed-dim', 'tertiary-container',
    'on-tertiary', 'on-tertiary-container', 'on-tertiary-fixed', 'on-tertiary-fixed-variant',
    'error', 'error-container', 'on-error', 'on-error-container',
    'background', 'on-background',
    'surface', 'surface-bright', 'surface-dim',
    'surface-container-lowest', 'surface-container-low', 'surface-container',
    'surface-container-high', 'surface-container-highest',
    'on-surface', 'on-surface-variant',
    'surface-tint', 'surface-variant',
    'outline', 'outline-variant',
    'inverse-surface', 'inverse-on-surface',
  ],
  borderRadius: ['DEFAULT', 'lg', 'xl', 'full'],
  spacing: [
    'space-xs', 'space-sm', 'space-md', 'space-lg', 'space-xl',
    'gutter', 'gutter-mobile', 'gutter-tablet',
    'margin', 'margin-mobile', 'margin-tablet',
  ],
  fontFamily: [
    'body-sm', 'body-md', 'body-lg',
    'label-sm', 'label-md',
    'lead-paragraph',
    'headline-sm', 'headline-md', 'headline-lg', 'headline-lg-mobile',
    'title-editorial', 'quote-display',
  ],
  fontSize: [
    'body-sm', 'body-md', 'body-lg',
    'label-sm', 'label-md',
    'lead-paragraph',
    'headline-sm', 'headline-md', 'headline-lg', 'headline-lg-mobile',
    'title-editorial', 'quote-display',
  ],
  lineHeight: [
    'body-sm', 'body-md', 'body-lg',
    'label-sm', 'label-md',
    'lead-paragraph',
    'headline-sm', 'headline-md', 'headline-lg', 'headline-lg-mobile',
    'title-editorial', 'quote-display',
  ],
  fontWeight: [
    'body-sm', 'body-md', 'body-lg',
    'label-sm', 'label-md',
    'lead-paragraph',
    'headline-sm', 'headline-md', 'headline-lg', 'headline-lg-mobile',
    'title-editorial', 'quote-display',
  ],
  letterSpacing: [
    'body-sm', 'body-md', 'body-lg',
    'label-sm', 'label-md',
    'lead-paragraph',
    'headline-sm', 'headline-md', 'headline-lg', 'headline-lg-mobile',
    'title-editorial', 'quote-display',
  ],
};

// ─── HTML pages to scan (21 pages) ───
const HTML_PAGES = [
  'index.html',
  '404/index.html',
  'tim-kiem/index.html',
  'san-pham-ocop/index.html',
  'san-pham-ocop/nong-san-va-thuc-pham/index.html',
  'san-pham-ocop/duoc-lieu-va-san-pham-suc-khoe/index.html',
  'san-pham-ocop/thu-cong-my-nghe/index.html',
  'san-pham-ocop/san-pham-theo-sao/index.html',
  'cau-chuyen-ocop/index.html',
  'cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia/index.html',
  'cau-chuyen-ocop/phong-su-da-phuong-tien/index.html',
  'cau-chuyen-ocop/hanh-trinh-chu-the-ocop/index.html',
  'tin-tuc-su-kien/index.html',
  'tin-tuc-su-kien/chinh-sach-va-co-che/index.html',
  'tin-tuc-su-kien/xuc-tien-thuong-mai/index.html',
  'tin-tuc-su-kien/ocop-dia-phuong/index.html',
  'diem-den-du-lich/index.html',
  'diem-den-du-lich/lang-nghe-truyen-thong/index.html',
  'diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop/index.html',
  'diem-den-du-lich/ban-do-ocop-viet-nam/index.html',
  'gui-bai-ho-so-ocop/index.html',
];

// ─── Helper: parse tailwind config from HTML ───
function extractTailwindConfig(html) {
  const match = html.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/);
  if (!match) return null;

  let configStr = match[1].trim();
  // Handle both `tailwind.config = { ... }` and bare object
  if (configStr.startsWith('tailwind.config')) {
    configStr = configStr.replace(/^tailwind\.config\s*=\s*/, '');
  }

  try {
    // Use Function constructor for safe evaluation (config is JSON-like)
    return new Function(`return ${configStr}`)();
  } catch (e) {
    console.error('Failed to parse tailwind config:', e.message);
    return null;
  }
}

// ─── Helper: flatten nested object with dot notation ───
function flatten(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flatten(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

// ─── Helper: compare values and mark drift ───
function compareValues(baseline, current, path) {
  if (baseline === current) return { status: 'SAME', baseline, current };
  if (baseline === undefined) return { status: 'NEW', baseline: null, current, path };
  if (current === undefined) return { status: 'MISSING', baseline, current: null, path };
  return { status: 'DRIFT', baseline, current, path };
}

// ─── Main extraction ───
async function extract(baselineSha = null) {
  console.log('🔍 Scanning 21 HTML pages for tailwind-config...');

  const results = {
    meta: {
      timestamp: new Date().toISOString(),
      pagesScanned: 0,
      baselineSha,
      tokenGroups: TOKEN_GROUPS,
    },
    byPage: {},
    aggregated: {},
    drift: [],
    missing: [],
    newKeys: [],
  };

  // Load baseline from git if provided
  let baselineConfigs = {};
  if (baselineSha) {
    console.log(`📜 Loading baseline from git commit ${baselineSha}...`);
    for (const page of HTML_PAGES) {
      try {
        const content = execSync(`git show ${baselineSha}:${page}`, { cwd: ROOT, encoding: 'utf8' });
        const config = extractTailwindConfig(content);
        if (config) baselineConfigs[page] = flatten(config.theme?.extend ?? {});
      } catch {
        // File may not exist at baseline
      }
    }
  }

  // Scan current pages
  for (const page of HTML_PAGES) {
    const fullPath = path.join(PAGES_DIR, page);
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️  Missing: ${page}`);
      continue;
    }

    const html = fs.readFileSync(fullPath, 'utf8');
    const config = extractTailwindConfig(html);
    if (!config) {
      console.warn(`⚠️  No tailwind-config in: ${page}`);
      continue;
    }

    const flat = flatten(config.theme?.extend ?? {});
    results.byPage[page] = flat;
    results.meta.pagesScanned++;

    // Aggregate across pages (first win, but track conflicts)
    for (const [key, value] of Object.entries(flat)) {
      if (!(key in results.aggregated)) {
        results.aggregated[key] = { value, pages: [page] };
      } else if (results.aggregated[key].value !== value) {
        results.aggregated[key].conflict = true;
        results.aggregated[key].pages.push(page);
        results.drift.push({ key, page, value, firstValue: results.aggregated[key].value });
      } else {
        results.aggregated[key].pages.push(page);
      }
    }

    // Compare against baseline
    if (baselineSha && baselineConfigs[page]) {
      const baseline = baselineConfigs[page];
      const allKeys = new Set([...Object.keys(baseline), ...Object.keys(flat)]);

      for (const key of allKeys) {
        const cmp = compareValues(baseline[key], flat[key], key);
        if (cmp.status === 'DRIFT') {
          results.drift.push({ page, ...cmp, marker: '🔴 DIFF' });
        } else if (cmp.status === 'MISSING') {
          results.missing.push({ page, key, baseline: cmp.baseline, marker: '⚪ MISSING' });
        } else if (cmp.status === 'NEW') {
          results.newKeys.push({ page, key, current: cmp.current, marker: '🟢 NEW' });
        }
      }
    }
  }

  // Validate against known baseline keys
  for (const group of TOKEN_GROUPS) {
    const expectedKeys = BASELINE_KEYS[group] || [];
    for (const expected of expectedKeys) {
      const fullKey = `${group}.${expected}`;
      if (!(fullKey in results.aggregated)) {
        results.missing.push({ key: fullKey, marker: '⚪ MISSING (not in any page)' });
      }
    }
  }

  return results;
}

// ─── Output: JSON report ───
function outputJson(results) {
  console.log(JSON.stringify(results, null, 2));
}

// ─── Output: theme.css draft ───
function outputThemeCss(results) {
  const lines = [
    '@import \'tailwindcss\';',
    '',
    '@theme {',
    '  /* ─── Color tokens ─── */',
  ];

  // Colors
  for (const [key, data] of Object.entries(results.aggregated)) {
    if (key.startsWith('colors.')) {
      const tokenName = key.replace('colors.', '').replace(/\./g, '-');
      lines.push(`  --color-${tokenName}: ${data.value};`);
    }
  }

  lines.push('', '  /* ─── Radius tokens ─── */');
  for (const [key, data] of Object.entries(results.aggregated)) {
    if (key.startsWith('borderRadius.')) {
      const tokenName = key.replace('borderRadius.', '').replace(/\./g, '-');
      lines.push(`  --radius-${tokenName}: ${data.value};`);
    }
  }

  lines.push('', '  /* ─── Spacing tokens ─── */');
  for (const [key, data] of Object.entries(results.aggregated)) {
    if (key.startsWith('spacing.')) {
      const tokenName = key.replace('spacing.', '').replace(/\./g, '-');
      lines.push(`  --space-${tokenName}: ${data.value};`);
    }
  }

  lines.push('', '  /* ─── Font Family tokens ─── */');
  for (const [key, data] of Object.entries(results.aggregated)) {
    if (key.startsWith('fontFamily.')) {
      const tokenName = key.replace('fontFamily.', '').replace(/\./g, '-');
      const fonts = Array.isArray(data.value) ? data.value.join(', ') : data.value;
      lines.push(`  --font-family-${tokenName}: ${fonts};`);
    }
  }

  lines.push('', '  /* ─── Font Size + Line Height + Weight + Letter Spacing tokens ─── */');
  lines.push('  /* NOTE: Tailwind v4 @theme does not support compound font tokens. */');
  lines.push('  /* Use these as CSS custom properties in component styles. */');
  for (const group of ['fontSize', 'lineHeight', 'fontWeight', 'letterSpacing']) {
    lines.push(`  /* ─── ${group} ─── */`);
    for (const [key, data] of Object.entries(results.aggregated)) {
      if (key.startsWith(`${group}.`)) {
        const tokenName = key.replace(`${group}.`, '').replace(/\./g, '-');
        lines.push(`  --font-${group.replace(/([A-Z])/g, '-$1').toLowerCase()}-${tokenName}: ${data.value};`);
      }
    }
  }

  lines.push('', '  /* ─── Global font stack aliases (reference next/font CSS vars) ─── */');
  lines.push('  --font-sans: var(--nf-be-vietnam-pro), system-ui, sans-serif;');
  lines.push('  --font-serif: var(--nf-noto-serif), Georgia, serif;');
  lines.push('}');

  lines.push('', '/* ─── Fallback font stacks ─── */');
  lines.push(':root {');
  lines.push('  --nf-be-vietnam-pro-fallback: \'Be Vietnam Pro\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif;');
  lines.push('  --nf-noto-serif-fallback: \'Noto Serif\', Georgia, \'Times New Roman\', serif;');
  lines.push('}');

  lines.push('', '/* ─── @source for UI package (4 levels up from apps/*/src/app/globals.css) ─── */');
  lines.push('@source \'../../../../packages/ui/src\';');

  const css = lines.join('\n');

  // Ensure tokens dir exists
  if (!fs.existsSync(TOKENS_DIR)) {
    fs.mkdirSync(TOKENS_DIR, { recursive: true });
  }

  fs.writeFileSync(THEME_CSS_PATH, css);
  console.log(`✅ Written theme.css draft to ${THEME_CSS_PATH}`);
}

// ─── CLI ───
async function main() {
  const args = process.argv.slice(2);
  const baselineIdx = args.indexOf('--baseline');
  const baselineSha = baselineIdx !== -1 ? args[baselineIdx + 1] : null;
  const outputIdx = args.indexOf('--output');
  const outputFormat = outputIdx !== -1 ? args[outputIdx + 1] : 'json';

  const results = await extract(baselineSha);

  console.log(`\n📊 Summary:`);
  console.log(`   Pages scanned: ${results.meta.pagesScanned}/21`);
  console.log(`   Unique tokens: ${Object.keys(results.aggregated).length}`);
  console.log(`   Conflicts (value drift across pages): ${results.drift.filter(d => d.marker === '🔴 DIFF').length}`);
  console.log(`   Missing vs baseline: ${results.missing.length}`);
  console.log(`   New keys vs baseline: ${results.newKeys.length}`);

  if (outputFormat === 'css') {
    outputThemeCss(results);
  } else {
    outputJson(results);
  }

  // Exit with error code if drift detected
  if (results.drift.some(d => d.marker === '🔴 DIFF')) {
    console.error('\n❌ VALUE DRIFT DETECTED — see DIFF markers above');
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});