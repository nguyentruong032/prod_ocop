# Phase 1 Plan — Monorepo Scaffold + Shared Packages (REVISED v5 — Gate 1 Ready)

**Status:** Draft for **CỔNG KIỂM 1** review
**Dependencies:** Gate 0 ✅ approved
**Scope:** Scaffold only — **no page markup migration yet**

---

## 1. Repository Initialization (Exact Order)

```bash
# 1. git init with main branch
git init -b main

# 2. Create .gitignore FIRST (no .env.development commit; no negated patterns)
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
.next/
out/
dist/
build/
*.tsbuildinfo

# Turbo
.turbo/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
pnpm-debug.log*

# Testing
coverage/
.nyc_output/

# Misc
*.tgz
.cache/
EOF

# 3. Commit BASELINE (current static site at root)
git add -A
git commit -m "chore: baseline static site (21 pages + shared) before migration"

# 4. Capture baseline SHA for Phase 3 reference AND record in decisions.md
BASELINE_SHA=$(git rev-parse HEAD)
echo "Baseline SHA: $BASELINE_SHA  # Use: git show \$BASELINE_SHA:path/to/file"
{
  echo ""
  echo "## Baseline Commit SHA"
  echo ""
  echo '```'
  echo "$BASELINE_SHA"
  echo '```'
  echo ""
  echo "_Recorded at: $(date -u +"%Y-%m-%dT%H:%M:%SZ")_"
} >> docs/migration/decisions.md

# 5. Verify git status is CLEAN before deletion (no uncommitted changes)
git status --porcelain   # must print nothing

# 6. Remove ALL demo files from working tree using git rm -r (history preserved in baseline commit)
# Keep ONLY .git/, .gitignore, docs/, scripts/ — delete every other tracked file/folder
git ls-files -z \
  | grep -zEv '^(\.gitignore$|docs/|scripts/)' \
  | xargs -0 -r git rm -r

# 7. Commit clean root
git commit -m "chore: remove legacy demo from working tree (preserved in baseline SHA)"

# 8. Root now ONLY has: .git/, .gitignore, docs/, scripts/
# Phase 3 reads original HTML via: git show $BASELINE_SHA:relative/path.html
```

---

## 2. Monorepo Structure (Final)

```
prod_ocop/
├── apps/
│   ├── web-main/           # Gateway (NEXT_PUBLIC_ZONE_BASE="")
│   ├── web-news/           # NEXT_PUBLIC_ZONE_BASE="/tin-tuc-su-kien"
│   ├── web-products/       # NEXT_PUBLIC_ZONE_BASE="/san-pham-ocop"
│   ├── web-stories/        # NEXT_PUBLIC_ZONE_BASE="/cau-chuyen-ocop"
│   └── web-destinations/   # NEXT_PUBLIC_ZONE_BASE="/diem-den-du-lich"
├── packages/
│   ├── ui/                 # Header, Footer, NavLink, AppLink, Container, SubNav, SearchModal
│   ├── tokens/             # theme.css ONLY (@theme with real extracted values)
│   ├── content/            # navigation.ts (key, children, clean URLs), brand.ts, footer.ts ONLY
│   ├── seo/                # buildMetadata(), JSON-LD generators
│   ├── icons/              # Inline SVG components (scanned from baseline)
│   └── config/             # tsconfig.base.json, eslint.config.mjs, prettier.config.mjs
├── docs/
│   └── migration/          # page-inventory.md, decisions.md, phase1-plan.md, tailwind-extraction.md
├── scripts/
│   ├── extract-tailwind-tokens.mjs
│   └── verify-gateway.sh
├── turbo.json              # Turbo 2.x "tasks"
├── package.json            # pnpm workspaces (packageManager written by corepack)
├── pnpm-workspace.yaml
├── .nvmrc                  # "22" or "24" (LTS)
└── .gitignore              # Created above
```

### 2.1 Root `package.json` (scripts only; `packageManager` added by `corepack use pnpm@latest`)

```json
{
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "typecheck": "turbo run typecheck",
    "test": "turbo run test",
    "test:unit": "turbo run test:unit",
    "test:e2e": "turbo run test:e2e",
    "format": "prettier --write \"**/*.{ts,tsx,json,css,md}\"",
    "verify:gateway": "bash scripts/verify-gateway.sh",
    "verify:navbar": "pnpm test:e2e"
  },
  "devDependencies": {
    "@turbo/gen": "^2.0.0",
    "turbo": "^2.0.0"
  },
  "engines": { "node": ">=22" }
}
```

### 2.2 `pnpm-workspace.yaml`

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### 2.3 `.nvmrc`

```
22
```

---

## 3. Tooling & Versions (No Hardcoding)

| Tool | Strategy |
|---|---|
| Node | `.nvmrc` = `22` (or `24` LTS) — **only at root** |
| pnpm | Install current stable via `corepack enable && corepack prepare pnpm@latest --activate` → writes `packageManager` in root `package.json` |
| Next.js | Install current stable (`pnpm add next@latest react@latest react-dom@latest`), read **its** docs for middleware, multi-zones, proxy |
| Turborepo | 2.x latest |
| TypeScript | 5.x latest |
| ESLint | 9.x flat config + `eslint-plugin-boundaries` latest |
| Vitest | Latest for unit tests |
| Playwright | Latest for E2E |
| Tailwind | **v4 CSS-first** — NO `tailwind.config.ts` anywhere |

---

## 4. Next.js Multi-Zones (Current Stable)

### 4.1 Zone Configuration

| Zone | `basePath` | `assetPrefix` | `NEXT_PUBLIC_ZONE_BASE` | Port (dev) |
|---|---|---|---|---|
| `web-main` | **NONE** | **NONE** | `""` | 3000 |
| `web-news` | `/tin-tuc-su-kien` | **NONE** | `/tin-tuc-su-kien` | 3001 |
| `web-products` | `/san-pham-ocop` | **NONE** | `/san-pham-ocop` | 3002 |
| `web-stories` | `/cau-chuyen-ocop` | **NONE** | `/cau-chuyen-ocop` | 3003 |
| `web-destinations` | `/diem-den-du-lich` | **NONE** | `/diem-den-du-lich` | 3004 |

**Key rule:** Child zones use `basePath` ONLY. No `assetPrefix`. Gateway (`web-main`) handles rewrites.

### 4.2 Gateway Rewrites (`apps/web-main/next.config.js`)

```js
// apps/web-main/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/tin-tuc-su-kien/:path*', destination: `${process.env.ZONE_NEWS_URL || 'http://localhost:3001'}/tin-tuc-su-kien/:path*` },
      { source: '/san-pham-ocop/:path*', destination: `${process.env.ZONE_PRODUCTS_URL || 'http://localhost:3002'}/san-pham-ocop/:path*` },
      { source: '/cau-chuyen-ocop/:path*', destination: `${process.env.ZONE_STORIES_URL || 'http://localhost:3003'}/cau-chuyen-ocop/:path*` },
      { source: '/diem-den-du-lich/:path*', destination: `${process.env.ZONE_DESTINATIONS_URL || 'http://localhost:3004'}/diem-den-du-lich/:path*` },
    ];
  },
  transpilePackages: ['@ocop/ui', '@ocop/tokens', '@ocop/content', '@ocop/seo', '@ocop/icons'],
  env: { NEXT_PUBLIC_ZONE_BASE: '' },
};

module.exports = nextConfig;
```

### 4.3 Child Zone `next.config.js` (Example: `web-news`)

```js
// apps/web-news/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/tin-tuc-su-kien',
  transpilePackages: ['@ocop/ui', '@ocop/tokens', '@ocop/content', '@ocop/seo', '@ocop/icons'],
  env: { NEXT_PUBLIC_ZONE_BASE: '/tin-tuc-su-kien' },
};

module.exports = nextConfig;
```

### 4.4 Environment Variables (Build-Time Note)

**No `.env.development` committed.** Rewrites are computed at **build time**, so `ZONE_*_URL` **must exist before `next build`**. In CI/CD, inject these env vars at build. For local dev, use inline fallbacks (`http://localhost:3001`–`3004`) as shown above. Each developer runs `ZONE_NEWS_URL=http://localhost:3001 ... pnpm build` or uses a local `.env` (gitignored).

---

## 5. packages/tokens — Real Extracted Values Only

### 5.1 Extraction Script (`scripts/extract-tailwind-tokens.mjs`)

**Purpose:** Parse the `<script id="tailwind-config">` block from **ALL 21 HTML pages** in the baseline commit, diff each config group (colors / borderRadius / spacing / fontFamily / fontSize), report which keys appear on which pages, and generate a draft `packages/tokens/theme.css`. **No token is finalized until the user reviews the per-page diff and chooses how to handle differences.**

```js
// scripts/extract-tailwind-tokens.mjs
// Run: node scripts/extract-tailwind-tokens.mjs <BASELINE_SHA>
import { execSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';

const SHA = process.argv[2];
if (!SHA) {
  console.error('Usage: node scripts/extract-tailwind-tokens.mjs <BASELINE_SHA>');
  process.exit(1);
}

function listHtml() {
  const out = execSync(`git ls-tree -r --name-only ${SHA}`, { encoding: 'utf8' });
  return out.split('\n').filter((f) => f.endsWith('.html'));
}

function readAt(path) {
  return execSync(`git show ${SHA}:${path}`, { encoding: 'utf8' });
}

function extractConfig(html) {
  const match = html.match(
    /id="tailwind-config">\s*tailwind\.config\s*=\s*(\{[\s\S]*?\})\s*;/,
  );
  if (!match) return null;
  const tailwind = { config: null };
  new Function('tailwind', `tailwind.config = ${match[1]};`)(tailwind);
  return tailwind.config;
}

// Config groups the plan cares about (only these are extracted; nothing invented)
const GROUPS = ['colors', 'borderRadius', 'spacing', 'fontFamily', 'fontSize'];

function main() {
  const pages = listHtml();
  const parsed = [];
  for (const page of pages) {
    const html = readAt(page);
    const cfg = extractConfig(html);
    parsed.push({ page, cfg });
  }

  // Per-group key -> { pages[], values Map(page -> serialized value) }
  const presence = {};
  for (const g of GROUPS) presence[g] = {};

  for (const { page, cfg } of parsed) {
    if (!cfg) continue;
    for (const g of GROUPS) {
      const group = cfg.theme?.extend?.[g] ?? cfg.theme?.[g] ?? cfg[g];
      if (!group) continue;
      for (const [key, value] of Object.entries(group)) {
        const slot = (presence[g][key] ??= { pages: [], values: new Map() });
        slot.pages.push(page);
        slot.values.set(page, JSON.stringify(value));
      }
    }
  }

  // Report differences: keys missing on some pages OR with value drift across pages
  const report = [];
  report.push('# Tailwind config extraction — 21-page diff\n');
  report.push(`Baseline SHA: \`${SHA}\`\n`);
  report.push(`Pages parsed: ${parsed.length}\n`);
  const pagesWithConfig = parsed.filter((p) => p.cfg).length;
  report.push(`Pages with \`#tailwind-config\`: ${pagesWithConfig}\n`);
  report.push(`Pages WITHOUT config: ${
    parsed.filter((p) => !p.cfg).map((p) => p.page).join(', ') || 'none'
  }\n`);

  let totalDiffs = 0;

  for (const g of GROUPS) {
    const keys = presence[g];
    const allKeys = Object.keys(keys).sort();
    const missingSomewhere = allKeys.filter((k) => keys[k].pages.length < pagesWithConfig);
    const valueDrift = allKeys.filter((k) => new Set(keys[k].values.values()).size > 1);
    const diffKeys = [...new Set([...missingSomewhere, ...valueDrift])];
    totalDiffs += diffKeys.length;

    report.push(`\n## ${g}\n`);
    report.push(`Total distinct keys: ${allKeys.length}\n`);
    report.push(`Keys present on ALL ${pagesWithConfig} pages: ${allKeys.length - missingSomewhere.length}\n`);
    report.push(`Keys with value drift: ${valueDrift.length}\n`);
    if (diffKeys.length === 0) {
      report.push('✅ No differences — every page has the same key set and values.\n');
      continue;
    }
    report.push(`\n⚠️ DIFF — ${diffKeys.length} key(s) differ:\n\n`);
    report.push('| Key | Kind | Present on | Missing from / differing values |\n|---|---|---|---|\n');
    for (const k of diffKeys) {
      const slot = keys[k];
      const presentSet = new Set(slot.pages);
      const missing = parsed
        .filter((p) => p.cfg && !presentSet.has(p.page))
        .map((p) => p.page);
      const kinds = [];
      if (missing.length) kinds.push('missing');
      if (valueDrift.includes(k)) kinds.push('value');
      let detail = missing.join('<br>');
      if (valueDrift.includes(k)) {
        const byValue = new Map();
        for (const [page, v] of slot.values) {
          if (!byValue.has(v)) byValue.set(v, []);
          byValue.get(v).push(page);
        }
        detail = [...byValue.entries()]
          .map(([v, pages]) => `\`${v}\` → ${pages.join('<br>')}`)
          .join('<br><br>');
      }
      report.push(`| \`${k}\` | ${kinds.join('+')} | ${slot.pages.join('<br>')} | ${detail} |\n`);
    }
  }

  report.push(`\n## Summary\n\nTotal DIFF keys across all groups: ${totalDiffs}\n`);

  writeFileSync('docs/migration/tailwind-extraction.md', report.join(''));
  console.log(`Wrote docs/migration/tailwind-extraction.md (${totalDiffs} DIFF keys)`);
  console.log('STOP: review per-page differences, then ask the user how to resolve before finalizing theme.css.');
}

main();
```

**Workflow (mandatory before theme.css is finalized):**

1. Run the script against the baseline SHA.
2. Review `docs/migration/tailwind-extraction.md` — it lists every key that is **not** on all 21 pages.
3. Ask the user: for each differing key, choose _include globally_, _drop_, or _page-scoped override_. **Do not guess.**
4. Only after the user approves the diff resolution is `packages/tokens/theme.css` finalized.

### 5.2 Extracted Values — Current Known State (index.html; pending 21-page confirmation)

The `index.html` config contains the following groups. **This table will be replaced by the 21-page diff from §5.1 before theme.css is finalized.**

| Group | Keys Extracted | Count |
|---|---|---|
| colors | All 46 keys (`primary`, `secondary`, `tertiary`, `error`, `background`, `surface`, `surface-bright`, `surface-dim`, `surface-container-*`, `on-*`, `outline*`, `inverse-*`, `*-container`, `*-fixed*`, `*-dim`, `*-variant`) | 46 |
| borderRadius | `DEFAULT`, `lg`, `xl`, `full` | 4 |
| spacing | `margin`, `margin-tablet`, `margin-mobile`, `gutter`, `gutter-tablet`, `gutter-mobile`, `space-xs`, `space-sm`, `space-md`, `space-lg`, `space-xl` | 11 |
| fontFamily | 14 semantic names (`body-sm`, `body-md`, `body-lg`, `headline-sm`, `headline-md`, `headline-lg`, `headline-lg-mobile`, `display-hero`, `display-hero-mobile`, `quote-display`, `lead-paragraph`, `title-editorial`, `label-md`, `label-sm`) | 14 |
| fontSize | 14 entries with size/lineHeight/fontWeight (±letterSpacing) | 14 |

**Status:** ⏳ Pending — 21-page diff report must be generated and user must approve handling of any differences before `theme.css` is finalized.

### 5.3 `packages/tokens/theme.css` (Generated Output)

```css
/* packages/tokens/theme.css */
/* Generated by scripts/extract-tailwind-tokens.mjs from baseline SHA */
/* NO @import "tailwindcss" here — apps' globals.css imports it */

@theme {
  /* next/font CSS variables — defined inline for Tailwind v4 to pick up */
  --font-be-vietnam-pro: "Be Vietnam Pro", system-ui, sans-serif;
  --font-noto-serif: "Noto Serif", Georgia, serif;

  /* Colors — ALL 46 keys from extracted config, no invented tokens */
  --color-primary: #012d1d;
  --color-on-primary: #ffffff;
  --color-primary-container: #1b4332;
  --color-on-primary-container: #86af99;
  --color-primary-fixed: #c1ecd4;
  --color-primary-fixed-dim: #a5d0b9;
  --color-on-primary-fixed: #002114;
  --color-on-primary-fixed-variant: #274e3d;

  --color-secondary: #984724;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #fd966d;
  --color-on-secondary-container: #752d0b;
  --color-secondary-fixed: #ffdbce;
  --color-secondary-fixed-dim: #ffb599;
  --color-on-secondary-fixed: #370e00;
  --color-on-secondary-fixed-variant: #79300f;

  --color-tertiary: #372200;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #533600;
  --color-on-tertiary-container: #ce9e54;
  --color-tertiary-fixed: #ffddb1;
  --color-tertiary-fixed-dim: #f2be71;
  --color-on-tertiary-fixed: #291800;
  --color-on-tertiary-fixed-variant: #614000;

  --color-error: #ba1a1a;
  --color-on-error: #ffffff;
  --color-error-container: #ffdad6;
  --color-on-error-container: #93000a;

  --color-background: #f9f9ff;
  --color-on-background: #121c2c;
  --color-surface: #f9f9ff;
  --color-on-surface: #121c2c;
  --color-on-surface-variant: #414844;
  --color-surface-bright: #f9f9ff;
  --color-surface-dim: #d0daf0;
  --color-surface-container: #e7eeff;
  --color-surface-container-low: #f0f3ff;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-high: #dee8ff;
  --color-surface-container-highest: #d9e3f9;
  --color-surface-variant: #d9e3f9;
  --color-surface-tint: #3f6653;

  --color-outline: #717973;
  --color-outline-variant: #c1c8c2;

  --color-inverse-surface: #273141;
  --color-inverse-on-surface: #ebf1ff;
  --color-inverse-primary: #a5d0b9;

  /* Border Radius — original names mapped to v4 --radius-* */
  --radius-xs: 0.125rem;   /* from DEFAULT */
  --radius-sm: 0.25rem;    /* from lg */
  --radius-md: 0.375rem;   /* standard v4 step (not in config; kept for completeness) */
  --radius-lg: 0.5rem;     /* from xl */
  --radius-xl: 0.75rem;    /* standard v4 step (not in config) */
  --radius-2xl: 1rem;
  --radius-full: 0.75rem;  /* from full (overrides v4 default 9999px) */

  /* Spacing — original token names under --spacing-* */
  --spacing-space-xs: 0.25rem;
  --spacing-space-sm: 0.5rem;
  --spacing-space-md: 1rem;
  --spacing-space-lg: 1.5rem;
  --spacing-space-xl: 2.5rem;
  --spacing-margin: 4rem;
  --spacing-margin-tablet: 2rem;
  --spacing-margin-mobile: 1.25rem;
  --spacing-gutter: 1.5rem;
  --spacing-gutter-tablet: 1.25rem;
  --spacing-gutter-mobile: 1rem;

  /* Font Families — reference next/font CSS variables (set in each app's layout.tsx) */
  --font-sans: var(--font-be-vietnam-pro, "Be Vietnam Pro", system-ui, sans-serif);
  --font-serif: var(--font-noto-serif, "Noto Serif", Georgia, serif);

  --font-body-sm: var(--font-sans);
  --font-body-md: var(--font-sans);
  --font-body-lg: var(--font-sans);
  --font-headline-sm: var(--font-serif);
  --font-headline-md: var(--font-serif);
  --font-headline-lg: var(--font-serif);
  --font-headline-lg-mobile: var(--font-serif);
  --font-display-hero: var(--font-serif);
  --font-display-hero-mobile: var(--font-serif);
  --font-quote-display: var(--font-serif);
  --font-lead-paragraph: var(--font-sans);
  --font-title-editorial: var(--font-serif);
  --font-label-md: var(--font-sans);
  --font-label-sm: var(--font-sans);

  /* Font Sizes — full v4 tuple (size, line-height, weight, letter-spacing) for EVERY entry */
  --text-body-sm: 13px;
  --text-body-sm--line-height: 20px;
  --text-body-sm--font-weight: 400;
  --text-body-sm--letter-spacing: 0;

  --text-body-md: 15px;
  --text-body-md--line-height: 26px;
  --text-body-md--font-weight: 400;
  --text-body-md--letter-spacing: 0;

  --text-body-lg: 17px;
  --text-body-lg--line-height: 30px;
  --text-body-lg--font-weight: 400;
  --text-body-lg--letter-spacing: 0;

  --text-headline-sm: 22px;
  --text-headline-sm--line-height: 30px;
  --text-headline-sm--font-weight: 600;
  --text-headline-sm--letter-spacing: 0;

  --text-headline-md: 28px;
  --text-headline-md--line-height: 38px;
  --text-headline-md--font-weight: 600;
  --text-headline-md--letter-spacing: 0;

  --text-headline-lg: 40px;
  --text-headline-lg--line-height: 52px;
  --text-headline-lg--letter-spacing: -0.015em;
  --text-headline-lg--font-weight: 700;

  --text-headline-lg-mobile: 28px;
  --text-headline-lg-mobile--line-height: 38px;
  --text-headline-lg-mobile--font-weight: 700;
  --text-headline-lg-mobile--letter-spacing: 0;

  --text-display-hero: 56px;
  --text-display-hero--line-height: 68px;
  --text-display-hero--letter-spacing: -0.02em;
  --text-display-hero--font-weight: 700;

  --text-display-hero-mobile: 36px;
  --text-display-hero-mobile--line-height: 46px;
  --text-display-hero-mobile--letter-spacing: -0.01em;
  --text-display-hero-mobile--font-weight: 700;

  --text-quote-display: 24px;
  --text-quote-display--line-height: 38px;
  --text-quote-display--font-weight: 400;
  --text-quote-display--letter-spacing: 0;

  --text-lead-paragraph: 20px;
  --text-lead-paragraph--line-height: 34px;
  --text-lead-paragraph--font-weight: 400;
  --text-lead-paragraph--letter-spacing: 0;

  --text-title-editorial: 19px;
  --text-title-editorial--line-height: 28px;
  --text-title-editorial--font-weight: 600;
  --text-title-editorial--letter-spacing: 0;

  --text-label-md: 12px;
  --text-label-md--line-height: 16px;
  --text-label-md--letter-spacing: 0.06em;
  --text-label-md--font-weight: 600;

  --text-label-sm: 11px;
  --text-label-sm--line-height: 14px;
  --text-label-sm--letter-spacing: 0.04em;
  --text-label-sm--font-weight: 500;
}
```

**Excluded (never invented):**
- `primary-hover`, `secondary-hover`, `primary-active`, etc. — not in config
- `star-1..5`, `space-2xl`, dark mode tokens
- Breakpoints, shadows, `text-xs..4xl`, `leading-*` — use v4 defaults unless in config
- No `@import "tailwindcss"` in this file

### 5.4 `packages/tokens/package.json`

```json
{
  "name": "@ocop/tokens",
  "version": "0.0.0",
  "exports": {
    "./theme.css": "./theme.css"
  }
}
```

---

## 6. packages/config — Shared Configs (Root-Level ESLint)

### 6.1 `eslint.config.mjs` — **Single file at repo root**, not in package

```js
// eslint.config.mjs (repo root)
import js from '@eslint/js';
import boundaries from 'eslint-plugin-boundaries';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['**/.next/**', '**/node_modules/**', '**/dist/**', '**/build/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    settings: {
      'boundaries/elements': [
        {
          type: 'app',
          pattern: 'apps/*/**',
          capture: ['zone'],
          mode: 'directory',
        },
        {
          type: 'package',
          pattern: 'packages/**',
        },
      ],
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.base.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
        },
      },
    },
    plugins: { boundaries },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            // app -> package (all apps may import from packages)
            { from: 'app', allow: ['package'] },
            // app -> app SAME zone only (uses captured zone)
            { from: 'app', allow: [{ zone: '${from.zone}' }] },
            // package -> package
            { from: 'package', allow: ['package'] },
            // package -> app: NEVER (default disallow covers this)
          ],
        },
      ],
    },
  }
);
```

**Syntax notes (per installed version docs):**
- `capture: ['zone']` with `mode: 'directory'` extracts the directory name under `apps/*` as `zone` (e.g., `web-news`, `web-products`).
- `{ from: 'app', allow: ['package'] }` — all apps may import from any package.
- `{ from: 'app', allow: [{ zone: '${from.zone}' }] }` — app may import from another app **only if same captured zone**.
- `{ from: 'package', allow: ['package'] }` — packages may import from other packages.
- Packages → apps is implicitly denied by `default: 'disallow'`.
- TypeScript resolver via `settings['import/resolver'].typescript` — no `parserOptions.project` needed.
- `ignores` array excludes `.next/`, `node_modules/`, `dist/`, `build/`.
- Lint script in root `package.json`: `"lint": "eslint ."` — runs **once from repo root**, not per-workspace.

### 6.2 `packages/config/tsconfig.base.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
    /* NO baseUrl, NO paths — apps use "workspace:*" deps */
  }
}
```

### 6.3 `packages/config/prettier.config.mjs`

```js
export default {
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 100,
};
```

### 6.4 `packages/config/package.json`

```json
{
  "name": "@ocop/config",
  "version": "0.0.0",
  "private": true,
  "main": "index.ts",
  "exports": {
    "./tsconfig.base.json": "./tsconfig.base.json",
    "./prettier.config.mjs": "./prettier.config.mjs"
  }
}
```

---

## 7. packages/ui — 7 Components Only

### 7.1 Zone Logic (`packages/ui/src/lib/zones.ts`)

```ts
// packages/ui/src/lib/zones.ts
export const ZONES = [
  '/tin-tuc-su-kien',
  '/san-pham-ocop',
  '/cau-chuyen-ocop',
  '/diem-den-du-lich',
] as const;

export type Zone = (typeof ZONES)[number] | '';

export function getCurrentZone(): Zone {
  return (process.env.NEXT_PUBLIC_ZONE_BASE as Zone) ?? '';
}

export function zoneOf(href: string): Zone {
  if (/^(https?|mailto|tel|#)/.test(href)) return '';
  for (const z of ZONES) {
    if (href.startsWith(z)) return z;
  }
  return '';
}

export function stripZonePrefix(href: string, zone: Zone): string {
  if (!zone) return href;
  return href.startsWith(zone) ? href.slice(zone.length) || '/' : href;
}
```

### 7.2 Component Structure

```
packages/ui/
├── package.json
├── src/
│   ├── lib/
│   │   └── zones.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Server Component
│   │   │   ├── Footer.tsx           # Server Component
│   │   │   ├── NavLink.tsx          # "use client" — CURRENT_ZONE + usePathname()
│   │   │   ├── AppLink.tsx          # Server Component (NOT client) — zoneOf + stripZonePrefix
│   │   │   ├── Container.tsx        # Server — max-w-[1360px] mx-auto px-[var(--spacing-gutter)]
│   │   │   ├── SubNav.tsx           # Server — receives { items } from navigation.ts
│   │   │   └── SearchModal.tsx      # "use client"
│   │   └── index.ts
│   └── index.ts
├── tests/
│   ├── AppLink.test.tsx
│   ├── NavLink.test.tsx
│   └── zones.test.ts
├── vitest.config.ts
└── tsconfig.json
```

### 7.3 `AppLink.tsx` — **Server Component**

```tsx
// packages/ui/src/components/layout/AppLink.tsx
import Link from 'next/link';
import { zoneOf, stripZonePrefix, getCurrentZone } from '../lib/zones';

export function AppLink({ href, children, ...props }: { href: string; children: React.ReactNode }) {
  const currentZone = getCurrentZone();
  const targetZone = zoneOf(href);
  const isExternal = /^(https?|mailto|tel|#)/.test(href);
  const isCrossZone = isExternal || targetZone !== currentZone;

  if (isCrossZone) {
    return <a href={href} {...props}>{children}</a>;
  }
  const internalHref = stripZonePrefix(href, currentZone);
  return <Link href={internalHref} {...props}>{children}</Link>;
}
```

### 7.4 `NavLink.tsx` — **Client Component** (wraps AppLink, sets `aria-current`)

```tsx
// packages/ui/src/components/layout/NavLink.tsx
'use client';

import { usePathname } from 'next/navigation';
import { AppLink } from './AppLink';
import { getCurrentZone } from '../lib/zones';

export function NavLink({ href, children, ...props }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const currentZone = getCurrentZone();
  const fullPath = currentZone + pathname;
  const isActive = fullPath === href || (href !== '/' && fullPath.startsWith(href + '/'));

  return (
    <AppLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={isActive ? 'font-semibold text-primary' : ''}
      {...props}
    >
      {children}
    </AppLink>
  );
}
```

### 7.5 `SubNav.tsx` Props

```tsx
// packages/ui/src/components/layout/SubNav.tsx
import { NavigationItem } from '@ocop/content';
import { AppLink } from './AppLink';

interface SubNavProps {
  items: NavigationItem[]; // { key, label, href, children?: NavigationItem[] }
}

export function SubNav({ items }: SubNavProps) {
  // Render zone-level nav with parent + children from navigation.ts
  // Uses AppLink for each item
}
```

### 7.6 `packages/ui/package.json`

```json
{
  "name": "@ocop/ui",
  "version": "0.0.0",
  "main": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./components/layout": "./src/components/layout/index.ts"
  },
  "dependencies": {
    "next": "workspace:*",
    "react": "workspace:*",
    "@ocop/tokens": "workspace:*",
    "@ocop/content": "workspace:*",
    "@ocop/icons": "workspace:*"
  },
  "devDependencies": {
    "typescript": "workspace:*",
    "@ocop/config": "workspace:*"
  }
}
```

**Import rule:** Relative imports only (`../lib/zones`, `./AppLink`). No `@/`.

---

## 8. packages/content — Minimal (3 Files)

```
packages/content/
├── package.json
├── src/
│   ├── navigation.ts        # NavigationItem[] from shared-header.html (4 items + CTA)
│   ├── brand.ts             # name, logo, tagline, description
│   ├── footer.ts            # cols: links, social, copyright, newsletter (from shared-footer.html)
│   └── index.ts
└── tests/
    └── navigation.test.ts
```

**Source of truth:**
- `navigation.ts` parsed from `shared-header.html` (4 top-level items + CTA "Gửi bài" → `/gui-bai-ho-so-ocop`). Sub-items from dropdown menus.
- `footer.ts` ONLY content present in `shared-footer.html` (3-col grid, © 2026, links to 4 zones). ZONES match `href === z || href.startsWith(z + '/')`.
- No `pages/`, `forms/`, `search/`, `hooks/`, `assetPrefix`.

---

## 9. packages/seo — Metadata + JSON-LD Only

```
packages/seo/
├── package.json
├── src/
│   ├── buildMetadata.ts     # buildMetadata({ title, description, path, images }) → Metadata
│   ├── jsonld/
│   │   ├── WebSite.ts
│   │   ├── Article.ts
│   │   ├── Product.ts
│   │   ├── Event.ts
│   │   └── BreadcrumbList.ts
│   └── index.ts
└── tests/
    └── buildMetadata.test.ts
```

**Usage:** In each app's `layout.tsx`: `export const metadata = buildMetadata({...})`.
**NO** `SEOMeta.tsx`, **NO** `LazyImage`.

---

## 10. packages/icons — Inline SVG from Official `@material-symbols/svg-400` (Outlined)

### 10.1 Source Package

- **Official npm package:** `@material-symbols/svg-400` (outlined weight, 400 grade, 0 fill)
- This package provides **all 109 scanned icons** as optimized inline SVG files.
- **NO** custom font files, **NO** `MaterialSymbol.tsx` wrapper, **NO** `@font-face`.

### 10.2 Generation Script (Exact 109 Icons)

```bash
# scripts/generate-icons.mjs
// Run: node scripts/generate-icons.mjs
import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const ICON_NAMES = [
  'account_tree', 'add', 'agriculture', 'alternate_email', 'analytics', 'architecture', 'archive',
  'arrow_back', 'arrow_downward', 'arrow_forward', 'arrow_outward', 'arrow_right_alt', 'article',
  'auto_stories', 'autorenew', 'badge', 'bookmark', 'bookmark_add', 'bookmark_heart', 'calendar_month',
  'calendar_today', 'call', 'carpenter', 'castle', 'checklist', 'chevron_left', 'chevron_right',
  'child_care', 'close', 'cloud_upload', 'contact_support', 'cottage', 'crop_free', 'density_medium',
  'description', 'diversity_3', 'domain', 'download', 'download_for_offline', 'eco', 'edit_note', 'event',
  'event_available', 'event_upcoming', 'expand_more', 'explore', 'fact_check', 'favorite', 'file_download',
  'file_open', 'folder_special', 'folder_zip', 'forest', 'format_quote', 'forum', 'forward_to_inbox',
  'fullscreen', 'graphic_eq', 'grass', 'group', 'groups', 'handshake', 'hardware', 'headphones', 'healing',
  'history', 'history_edu', 'holiday_village', 'home', 'hub', 'layers', 'library_books', 'live_tv',
  'local_cafe', 'local_florist', 'local_pharmacy', 'location_city', 'location_on', 'location_searching',
  'mail', 'map', 'medication', 'medication_liquid', 'menu_book', 'military_tech', 'movie', 'nature',
  'nature_people', 'newspaper', 'north_east', 'open_in_new', 'palette', 'pattern', 'pause', 'payments',
  'person', 'person_pin', 'photo_camera', 'photo_library', 'pin_drop', 'play_arrow', 'play_circle',
  'playlist_play', 'podcasts', 'post_add', 'psychology', 'psychology_alt', 'public', 'qr_code_2',
  'read_more', 'record_voice_over', 'recycling', 'remove', 'rice_bowl', 'route', 'rss_feed', 'schedule',
  'school', 'science', 'search', 'send', 'share', 'share_location', 'smart_display', 'soup_kitchen',
  'source_notes', 'spa', 'star', 'stars', 'store', 'storefront', 'subtitles', 'terrain', 'texture', 'thumb_up',
  'timeline', 'timer', 'travel_explore', 'trending_up', 'verified', 'verified_user', 'video_library',
  'videocam', 'visibility', 'volume_up', 'water_drop'
];

const SOURCE_ROOT = resolve('node_modules/@material-symbols/svg-400/outlined');
const TARGET_DIR = resolve('packages/icons/src/icons');

mkdirSync(TARGET_DIR, { recursive: true });

let copied = 0;
for (const name of ICON_NAMES) {
  const src = join(SOURCE_ROOT, `${name}.svg`);
  if (existsSync(src)) {
    cpSync(src, join(TARGET_DIR, `${name}.tsx`));
    copied++;
  } else {
    console.error(`MISSING in @material-symbols/svg-400: ${name}`);
  }
}

console.log(`Copied ${copied}/${ICON_NAMES.length} icons from @material-symbols/svg-400`);

// FILL variant check (demo may use filled icons)
const DEMO_FILL_CHECK = `
# After baseline commit, run:
git grep -h 'material-symbols' $BASELINE_SHA -- '*.html' | grep -i 'fill'
# If any icon uses fill=1 (filled), we need the filled variant from @material-symbols/svg-400/filled
`;

writeFileSync('docs/migration/icon-generation.md', `# Icon Generation Report

**Source:** \`@material-symbols/svg-400\` (outlined, 400 grade, 0 fill)
**Requested:** ${ICON_NAMES.length}
**Copied:** ${copied}
**Missing:** ${ICON_NAMES.length - copied}

${DEMO_FILL_CHECK}

## Footer Icons (confirmed in list)
- hub
- play_circle
- public
- verified

## No Separate Social Icons Needed
Footer has no Facebook/YouTube/TikTok SVGs — all icons come from the 109 above.
`);

console.log('Wrote docs/migration/icon-generation.md');
```

**Verification Criteria:**
- `ls packages/icons/src/icons/ | wc -l` → **110** (109 `.tsx` + `index.ts`)
- **Exactly 109** icons — no extras, no omissions.
- `grep -r "MaterialSymbol" packages/icons/` → **no matches**
- `grep -r "@font-face" packages/icons/` → **no matches**

### 10.3 Structure

```
packages/icons/
├── package.json
├── src/
│   ├── icons/
│   │   ├── home.tsx
│   │   ├── search.tsx
│   │   ├── menu.tsx
│   │   ├── chevron_down.tsx
│   │   ├── star.tsx
│   │   ├── location_on.tsx
│   │   ├── shopping_bag.tsx
│   │   ├── article.tsx
│   │   ├── video_library.tsx
│   │   ├── map.tsx
│   │   ├── person.tsx
│   │   ├── email.tsx
│   │   ├── phone.tsx
│   │   ├── arrow_right.tsx
│   │   ... (all 109 from list)
│   │   └── index.ts       # export all + iconMap: Record<string, Component>
│   └── index.ts
└── tests/
    └── icons.test.ts
```

---

## 11. App Shell — `globals.css` Pattern

### 11.1 ALL 5 Apps (4-level path for child zones)

```css
/* apps/web-main/src/app/globals.css */
@import "tailwindcss";
@import "@ocop/tokens/theme.css";
@source "../../../../packages/ui/src";
```

```css
/* apps/web-news/src/app/globals.css (and web-products, web-stories, web-destinations) */
@import "tailwindcss";
@import "@ocop/tokens/theme.css";
@source "../../../../packages/ui/src";
```

**Verification:** `pnpm build && grep -rl "max-w-\[1360px\]" apps/web-main/.next/static/css/`

---

## 12. Turborepo 2.x — `tasks` Syntax

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "dev": { "cache": false, "persistent": true },
    "build": { "dependsOn": ["^build"], "outputs": [".next/**"] },
    "lint": { "outputs": [] },
    "typecheck": { "outputs": [] },
    "test": { "outputs": ["coverage/**"], "dependsOn": [] },
    "test:unit": { "dependsOn": [] },
    "test:e2e": { "dependsOn": ["build"], "cache": false },
    "format": { "outputs": [] }
  },
  "globalEnv": ["ZONE_NEWS_URL", "ZONE_PRODUCTS_URL", "ZONE_STORIES_URL", "ZONE_DESTINATIONS_URL"]
}
```

---

## 13. Test Setup

### 13.1 Unit Tests (Vitest + Testing Library)

- `packages/ui/tests/AppLink.test.tsx` — cross-zone, intra-zone, external, web-main→zone, web-main→/gui-bai-ho-so-ocop
- `packages/ui/tests/NavLink.test.tsx` — `aria-current="page"` on active, none on inactive
- `packages/ui/tests/zones.test.ts` — zoneOf, stripZonePrefix, getCurrentZone
- `packages/content/tests/navigation.test.ts`
- `packages/seo/tests/buildMetadata.test.ts`
- `packages/icons/tests/icons.test.ts`

### 13.2 E2E Tests (Playwright) — Single Root Suite via Gateway

```ts
// tests/navbar.spec.ts (repo root, run via web-main gateway)
import { test, expect } from '@playwright/test';

const ROUTES = [
  { path: '/', label: 'Trang chủ' },
  { path: '/tin-tuc-su-kien/', label: 'Tin tức' },
  { path: '/san-pham-ocop/', label: 'Sản phẩm OCOP' },
  { path: '/cau-chuyen-ocop/', label: 'Câu chuyện OCOP' },
  { path: '/diem-den-du-lich/', label: 'Điểm đến du lịch' },
];

test.describe('Navbar active state across all zones (via gateway)', () => {
  for (const { path, label } of ROUTES) {
    test(`active item is "${label}" on ${path}`, async ({ page }) => {
      await page.goto(`http://localhost:3000${path}`);
      // Exactly ONE nav link has aria-current="page"
      const activeLinks = page.locator('nav a[aria-current="page"]');
      await expect(activeLinks).toHaveCount(1);
      // That link's text matches the expected zone label
      await expect(activeLinks.first()).toContainText(label);
    });
  }
});
```

```ts
// playwright.config.ts (repo root)
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: { baseURL: 'http://localhost:3000', trace: 'on-first-retry' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'pnpm build && pnpm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
```

Run: `pnpm test:e2e` (orchestrated by Turbo `test:e2e` task).

---

## 14. Tailwind v4 vs v3 — Migration Table (Document in `docs/migration/tailwind-v4-migration.md`)

Based on [official upgrade guide](https://tailwindcss.com/docs/upgrade-guide).

| v3 Class | v4 Equivalent | Note |
|---|---|---|
| `shadow-sm` | `shadow-xs` | Renamed |
| `shadow` | `shadow-sm` | Renamed |
| `shadow-md` | `shadow-md` | Same name, values from theme |
| `shadow-lg` | `shadow-lg` | Same name, values from theme |
| `rounded-sm` | `rounded-xs` | Renamed |
| `rounded` | `rounded-sm` | Renamed (v4 default `rounded` = 0.25rem) |
| `rounded-lg` | `rounded-lg` | Maps to `--radius-lg` (0.5rem in our tokens) |
| `rounded-full` | `rounded-full` | Uses `--radius-full: 0.75rem` from tokens |
| `ring` | `ring-3` | Default width changed |
| `ring-2` | `ring-2` | Explicit width unchanged |
| `outline-none` | `outline-hidden` | Renamed |
| `focus:ring` | `focus-visible:ring` | v4 uses `focus-visible` |
| `border` | `border` | Default color `currentColor` (was `currentColor` in v3 too, but v4 enforces) |
| `border-gray-300` | `border-border` | Use token `--color-border` (if defined) or `--color-outline-variant` |
| `bg-white` | `bg-background` | Our `background` = `#f9f9ff` |
| `text-gray-900` | `text-on-surface` | Our `on-surface` = `#121c2c` |

**Demo class audit:** Run `grep -rhoP 'class="[^"]*"' $BASELINE_SHA -- '*.html' | sed 's/.*class="\([^"]*\)".*/\1/' | tr ' ' '\n' | sort -u > docs/migration/demo-classes.txt` then cross-reference.

### 14.1 Tailwind Test Page — Computed Style Parity (Required)

**Purpose:** Verify that the Tailwind v4 classes used in the demo (CDN v3, loaded from `git show $BASELINE_SHA`) produce the same computed styles as our v4 implementation with `theme.css` tokens.

**Test Classes:**
- `rounded`, `rounded-sm`, `rounded-lg`, `rounded-xl`, `rounded-full`
- `shadow`, `shadow-sm`, `shadow-xs`

**Procedure:**
1. Create a temporary HTML page in the demo (CDN v3) with `<div class="rounded">`, `<div class="rounded-sm">`, etc., one per test class.
2. Render in headless browser, read `getComputedStyle(el).borderRadius` and `getComputedStyle(el).boxShadow` for each.
3. Create equivalent page in any Next.js zone (v4 with our `theme.css`), repeat step 2.
4. Compare values — they **must match exactly** (px for radius, px/rgba for shadow).
5. Document the mapping in `docs/migration/tailwind-v4-migration.md` as a code block:

```markdown
## Computed Style Parity — Demo (v3 CDN) vs v4 (theme.css)

| Class | v3 borderRadius / boxShadow | v4 borderRadius / boxShadow | Match |
|---|---|---|---|
| rounded | 4px / none | 4px / none | ✅ |
| rounded-sm | 2px / none | 2px / none | ✅ |
| rounded-lg | 8px / none | 8px / none | ✅ |
| rounded-xl | 12px / none | 12px / none | ✅ |
| rounded-full | 9999px / none | 12px (0.75rem) / none | ⚠️ diff — see tokens |
| shadow | 0 1px 3px rgba(0,0,0,0.1) / ... | ... / ... | ... |
| shadow-sm | 0 1px 2px rgba(0,0,0,0.05) / ... | ... / ... | ... |
| shadow-xs | 0 1px 2px rgba(0,0,0,0.05) / ... | ... / ... | ... |
```

**Note:** `rounded-full` in v3 = `9999px`; in our tokens `--radius-full = 0.75rem (12px)`. This is an intentional override — document it.

---

## 15. Phase 1 Deliverables Checklist (Gate 1 Exit Criteria — All Verifiable by Command)

| # | Criteria | Verification Command |
|---|---|---|
| 1 | Git order: init → .gitignore → baseline commit → git rm demo → commit | `git log --oneline -3` |
| 2 | Root only: package.json, pnpm-workspace.yaml, turbo.json, .nvmrc, .gitignore, docs/, scripts/ | `ls -la` |
| 3 | pnpm workspaces + Turbo 2.x `tasks` + packageManager (written by corepack) | `cat package.json \| grep packageManager && cat turbo.json \| grep tasks` |
| 4 | Node LTS in .nvmrc (22 or 24) | `cat .nvmrc` |
| 5 | 5 Next.js apps with correct basePath (child zones only) + NEXT_PUBLIC_ZONE_BASE env | `grep basePath apps/web-news/next.config.js && grep NEXT_PUBLIC_ZONE_BASE apps/web-news/next.config.js` |
| 6 | web-main: NO basePath/assetPrefix, rewrites + transpilePackages (no @ocop/config) | `grep -c basePath apps/web-main/next.config.js` (should be 0) |
| 7 | No .env.development committed; inline localhost fallbacks in web-main next.config | `! test -f .env.development && echo OK` |
| 8 | 6 packages with exports → src | `cat packages/ui/package.json \| grep exports` |
| 9 | packages/tokens/theme.css ONLY @theme with REAL extracted values (primary #012d1d, secondary #984724, radius-full 0.75rem, space-xl 2.5rem, 46 colors, 11 spacing, 14 fontSize, NO star, NO space-2xl, NO dark, NO @import) | `cat packages/tokens/theme.css` |
| 10 | NO tailwind.config.ts anywhere | `! find . -name "tailwind.config.ts" -not -path "./node_modules/*" \| grep -q . && echo "OK"` |
| 11 | App globals.css: @import "tailwindcss"; @import "@ocop/tokens/theme.css"; @source to packages/ui/src (4 levels) | `grep "@source.*packages/ui/src" apps/web-main/src/app/globals.css` |
| 12 | Build succeeds + CSS contains packages/ui class (max-w-[1360px]) | `pnpm build && grep -rl "max-w-\[1360px\]" apps/web-main/.next/static` |
| 13 | ESLint: single root eslint.config.mjs with boundaries (app capture zone, package) | `cat eslint.config.mjs \| grep -A10 boundaries/elements` |
| 14 | ESLint boundary test: apps/web-news import ../../web-main fails (exit ≠ 0); @ocop/ui import passes | `echo "import '../../web-main/...'" > /tmp/test-cross.ts && pnpm lint --quiet /tmp/test-cross.ts 2>&1 \| grep -q boundaries && echo "FAIL blocked" && rm /tmp/test-cross.ts && echo "import '@ocop/ui'" > /tmp/test-ok.ts && pnpm lint --quiet /tmp/test-ok.ts 2>&1 \| grep -q boundaries || echo "PASS allowed" && rm /tmp/test-ok.ts` |
| 15 | packages/ui: 7 components (Header, Footer, NavLink, AppLink, Container, SubNav, SearchModal) | `ls packages/ui/src/components/layout/` |
| 16 | Client/Server directives correct: only NavLink + SearchModal have "use client" | `grep -l "use client" packages/ui/src/components/layout/*.tsx` |
| 17 | AppLink: zoneOf + stripZonePrefix + getCurrentZone logic (Server Component) | `cat packages/ui/src/components/layout/AppLink.tsx` |
| 18 | NavLink: wraps AppLink, CURRENT_ZONE + usePathname, sets aria-current="page" | `cat packages/ui/src/components/layout/NavLink.tsx` |
| 19 | SubNav receives { items } from navigation.ts | `cat packages/ui/src/components/layout/SubNav.tsx` |
| 20 | packages/content: only navigation.ts (key, children, clean URLs), brand.ts, footer.ts | `ls packages/content/src/` |
| 21 | packages/seo: buildMetadata + JSON-LD, NO SEOMeta.tsx | `ls packages/seo/src/ && ! ls packages/seo/src/SEOMeta.tsx 2>/dev/null` |
| 22 | packages/icons: exactly 109 .svg files + index.ts from `@material-symbols/svg-400/outlined` | `ls packages/icons/src/icons/*.svg | wc -l` (109) && `test -f packages/icons/src/icons/index.ts && echo OK` |
| 23 | Unit tests: AppLink, NavLink, zones, navigation, buildMetadata, icons | `pnpm test:unit` |
| 24 | E2E tests: navbar active state for 5 routes via gateway (Playwright) | `pnpm test:e2e` |
| 25 | verify:gateway returns 200 + proxies _next/static asset (build + start 5 zones on 3000-3004 + wait-on all 5) | `pnpm build && pnpm --filter web-main start -p 3000 & pnpm --filter web-news start -p 3001 & pnpm --filter web-products start -p 3002 & pnpm --filter web-stories start -p 3003 & pnpm --filter web-destinations start -p 3004 & npx wait-on tcp:3000 tcp:3001 tcp:3002 tcp:3003 tcp:3004 && pnpm verify:gateway` |
| 26 | verify:navbar passes on all 5 routes | `pnpm verify:navbar` |
| 27 | CI workflow runs lint, typecheck, test, build | `cat .github/workflows/ci.yml` |
| 28 | Tailwind v4 migration table documented | `cat docs/migration/tailwind-v4-migration.md` |
| 29 | Next.js `next/font` config (Be Vietnam Pro, Noto Serif) in each app's layout.tsx | `grep "next/font" apps/web-main/src/app/layout.tsx` |
| 30 | `not-found.tsx` per zone (5 files) | `ls apps/*/src/app/not-found.tsx` |
| 31 | pnpm-workspace.yaml content present | `cat pnpm-workspace.yaml` |
| 32 | ESLint zone-scoped boundary: `template: 'app:{{zone}}'` + per-zone allow + package disallow app | `cat eslint.config.mjs | grep -A15 "boundaries/elements"` |
| 33 | next/font CSS variables in theme.css + Playwright `toHaveScreenshot` parity | `grep "font-be-vietnam-pro\|font-noto-serif" packages/tokens/theme.css && npx playwright test --project=chromium -g "screenshot" 2>&1 | grep -q "toHaveScreenshot" && echo OK` |
| 34 | Icons: exactly 109 from `@material-symbols/svg-400/outlined`, FILL variant check documented | ```bash\nls packages/icons/src/icons/*.svg | wc -l  # 109\ntest -f packages/icons/src/icons/index.ts && echo "index.ts OK"\ncat docs/migration/icon-generation.md | grep -i fill\n``` |
| 35 | Git rm exact order: `git ls-files -z \| grep -zEv` → `git rm -r`, SHA in decisions.md, clean status | ```bash\ncat docs/migration/decisions.md | grep BASELINE_SHA\ngit status --porcelain  # clean\n``` |
| 36 | Token extraction: 21-page diff report in tailwind-extraction.md + user approval before theme.css | ```bash\ncat docs/migration/tailwind-extraction.md | grep -c "DIFF"\n# user approval recorded in decisions.md\n``` |

---

## 16. What Phase 1 Does NOT Include

- ❌ Page markup migration (HTML → JSX)
- ❌ Content data population (empty shells only)
- ❌ Image downloads from lh3.googleusercontent.com
- ❌ Component styling/design parity (tokens only)
- ❌ Detail page routes (`[slug]`)
- ❌ SEO content (meta descriptions, etc.)
- ❌ Dark mode
- ❌ Card, SectionHeader, HeroSection, BentoGrid, FilterChips, TabSwitch, FormValidation, InteractiveMap, VideoPlayer, CinemaPlayer, EventStatusTabs, CategoryFilterChips, ProductFilterTabs, LazyImage, ReadingProgress, Breadcrumb, Pagination, SEOMeta, LazyImage

---

## 17. Gate 1 — Decision Required

**Approve Final Phase 1 Plan to proceed to implementation?**

- [ ] Git order (init → .gitignore → baseline → git rm demo → commit) confirmed
- [ ] Root clean: only monorepo configs + docs + scripts confirmed
- [ ] Turbo 2.x `tasks` + `test:e2e` with webServer confirmed
- [ ] Node LTS in .nvmrc only at root confirmed
- [ ] Next.js stable current, no hardcoded versions confirmed
- [ ] Zone config: web-main no basePath, child zones basePath only (no assetPrefix), NEXT_PUBLIC_ZONE_BASE env confirmed
- [ ] No .env.development committed; build-time rewrite note confirmed
- [ ] Tokens: theme.css ONLY @theme with REAL extracted values (46 colors, 4 radius, 11 spacing, 14 fontSize, no star, no space-2xl, no dark) confirmed
- [ ] NO tailwind.config.ts anywhere confirmed
- [ ] globals.css pattern with @source to packages/ui/src (4 levels) confirmed
- [ ] ESLint: single root config, boundaries with elements (app capture zone, package), TS resolver confirmed
- [ ] packages/ui = 7 components only, correct client/server (NavLink + SearchModal only), zones.ts logic confirmed
- [ ] AppLink (Server) + NavLink (Client, wraps AppLink, aria-current) + SubNav confirmed
- [ ] packages/content = navigation/brand/footer only, single source confirmed
- [ ] packages/seo = buildMetadata + JSON-LD only confirmed
- [ ] packages/icons = inline SVG from baseline scan (109) confirmed
- [ ] Test setup: Vitest unit + Playwright E2E (single root suite via gateway, 5 routes, aria-current assertion) confirmed
- [ ] verify:gateway (build+start+wait-on, 200 + static asset proxy) + verify:navbar confirmed
- [ ] CI workflow confirmed
- [ ] Tailwind v4 migration table documented confirmed
- [ ] next/font + not-found.tsx + pnpm-workspace.yaml confirmed
- [ ] ESLint zone-scoped: `template: 'app:{{zone}}'`, per-zone allow, package disallow app confirmed
- [ ] next/font CSS variables (`--font-be-vietnam-pro`, `--font-noto-serif`) referenced in theme.css, screenshot parity confirmed
- [ ] Icons exactly 109 from `@material-symbols/svg-400/outlined`, FILL variant check documented confirmed
- [ ] Git rm exact order (`git ls-files -z | grep -zEv` → `git rm -r`), baseline SHA in decisions.md, clean status confirmed
- [ ] 21-page token extraction diff documented + user approval before theme.css finalization confirmed
- [ ] 36 verification commands confirmed

---

*End of Final Phase 1 Plan. Ready for CỔNG KIỂM 1 review.*