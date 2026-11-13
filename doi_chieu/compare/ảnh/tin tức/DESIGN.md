---
name: Vietnamese Terroir & Cultural Chronicle
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daf0'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d9e3f9'
  on-surface: '#121c2c'
  on-surface-variant: '#414844'
  inverse-surface: '#273141'
  inverse-on-surface: '#ebf1ff'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#984724'
  on-secondary: '#ffffff'
  secondary-container: '#fd966d'
  on-secondary-container: '#752d0b'
  tertiary: '#372200'
  on-tertiary: '#ffffff'
  tertiary-container: '#533600'
  on-tertiary-container: '#ce9e54'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#79300f'
  tertiary-fixed: '#ffddb1'
  tertiary-fixed-dim: '#f2be71'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#614000'
  background: '#f9f9ff'
  on-background: '#121c2c'
  surface-variant: '#d9e3f9'
typography:
  display-hero:
    fontFamily: Noto Serif
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 38px
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-editorial:
    fontFamily: Noto Serif
    fontSize: 19px
    fontWeight: '600'
    lineHeight: 28px
  lead-paragraph:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 34px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  quote-display:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 38px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-tablet: 1.25rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system serves a cultural-journalism and longform editorial portal dedicated to documenting Vietnam's One Commune One Product (OCOP) movement. The platform honors indigenous agriculture, medicinal flora, ancestral craft villages, and regional heritage. It is explicitly not a marketplace: there are no transactions, shopping carts, or price tags. Instead, the interface acts as an authoritative, archival literary magazine.

The aesthetic merges classical editorial layouts with tactile cultural sensibilities. It draws visual inspiration from traditional Vietnamese artisanal materials—lacquerware, unglazed terracotta, sun-dried parchment, and dense forest canopies. The tone is deliberate, reverent, and deeply grounded, evoking scholarly inquiry, pride of place, and agrarian craftsmanship. Visual density is paced like a high-end print periodical, utilizing generous literary margins, asymmetrical editorial spreads, detailed metadata treatments, and rich typographic hierarchies.

## Colors
The color architecture reflects the natural and craft landscapes of Vietnam: dense montane flora, clay kilns, sun-dried grains, and archival paper.

### Core Palette
- **Primary (Deep Forest Green):** `#1B4332` (Interactive hover: `#132E22`). Serves as the primary anchor for major mastheads, lead headings, key buttons, and structured borders.
- **Secondary (Terracotta):** `#9C4A27`. Represents fired earth, pottery, and agrarian warmth. Used for editorial highlights, pull quotes, thematic accents, and secondary actions (hover states transition to a solid `#9C4A27` fill with white text).
- **Tertiary (Harvest Gold):** `#D4A359`. Reserved exclusively for national OCOP star rating designations (3-star, 4-star, 5-star badges) and certification emblems. Never used for generic decoration or buttons.

### Backgrounds & Surfaces
- **Canvas (Warm Ivory):** `#FAF8F5`. The default foundation, emulating uncoated archival paper.
- **Alternating Section (Sand):** `#F2ECE1`. Used for rhythm breaks, archival sidebars, author dossiers, and interview panels.
- **Surface Elevation (Card White):** `#FFFFFF`. Used for elevated editorial cards, archival indices, and structured reading panels.
- **Borders & Dividers:** Low-contrast organic grey-brown `#E2DBD0` for formal rules and dividing lines.

### Text & Metadata
- **Headings & Titles:** `#1C1E1B` (Ink Black with an organic warm undertone).
- **Body Content:** `#2D3748` (Muted Charcoal for sustained reading comfort).
- **Metadata & Captions:** `#4A5568` (Balanced Slate for timestamps, photographic attributions, and geographic regions).
- **Editorial Hyperlinks:** `#2B6CB0` (Text hover: `#1E4E8C`, accompanied by an underline accent).

### Topical Category Tags
Category tag badges use a dedicated tint system composed of a 12% opacity fill paired with a solid 100% stroke and text label:
- **Tin tức & Sự kiện (News & Events):** `#2B5B84`
- **Sản phẩm bản địa (Products & Origin):** `#24553D`
- **Câu chuyện OCOP (Cultural Stories):** `#9C4A27`
- **Điểm đến & Làng nghề (Destinations & Crafts):** `#3B7A57`
- **Hội nhập & Phát triển (Integration):** `#5B4B8A`
- **Góc nhìn chuyên gia (Editorial & Essay):** `#7A5C3E`

### Temporal Event Statuses
- **Sắp diễn ra (Upcoming):** `#1E4E8C`
- **Đang diễn ra (Active / Ongoing):** `#2D6A4F`
- **Đã kết thúc (Concluded):** `#6C757D`

## Typography
Typography is the primary voice of the platform. The system couples **Noto Serif** (chosen for its balanced diacritic rendering in Vietnamese, editorial elegance, and historical gravitas) with **Be Vietnam Pro** (crafted explicitly for Vietnamese orthography, offering optimal optical performance and contemporary legibility).

### Typographic Hierarchy & Usage
- **Longform Essay Reading:** Main essay text is typeset at `17px` (`body-lg`) with an expansive line height of `30px` to guarantee an unhurried, comfortable reading rhythm. Maximum text container width is capped at 68ch to avoid line fatigue.
- **Editorial Pull Quotes:** Handled via `quote-display`, styled in italicized Noto Serif, paired with a subtle terracotta vertical rule on the left edge.
- **Bilingual & Fieldwork Captions:** Typeset in `body-sm` using Be Vietnam Pro, tinted with metadata slate (`#4A5568`), often accompanied by photographic origin credits and province markers.
- **Category Labels:** Typeset in all-caps using `label-md` with `0.06em` tracking, providing clear distinction between structural tags and reading prose.

## Layout & Spacing
The layout adheres to a classical publication grid that balances structured academic columns with dynamic photojournalistic arrangements.

### Grid Architecture
- **Desktop (1280px and above):** 12-column layout with a maximum container width of `1360px`, `4rem` outer canvas margins, and `1.5rem` gutters. Lead articles utilize an asymmetrical 8-column reading well complemented by a 4-column cultural provenance sidebar (regional maps, artisan profiles, OCOP evaluation criteria).
- **Tablet (768px - 1279px):** 8-column layout with `2rem` outer margins and `1.25rem` gutters. Sidebars reposition below the primary essay flow.
- **Mobile (Below 768px):** 4-column layout with `1.25rem` outer margins and `1rem` gutters. All components reflow into a clean, vertical reading column.

### Rhythmic Spacing
Editorial flow requires generous breathing room. Feature breaks and thematic transitions use wide section gaps (4rem to 6rem), preventing visual clutter and emphasizing the physical weight of each recorded story.

## Elevation & Depth
In keeping with an editorial, publication-first philosophy, this design system avoids aggressive shadows, synthetic glowing surfaces, and skeuomorphic bevels. Visual depth is established via subtle surface tonality and understated borders.

- **Tonal Grounding:** Depth is conveyed through flat, tactile surface layering. Articles rest directly upon the Warm Ivory canvas (`#FAF8F5`), while archival indices, fact sheets, and profile modules sit on Card White (`#FFFFFF`) or Alternating Sand (`#F2ECE1`).
- **Low-Contrast Structural Outlines:** Surfaces are bounded by whisper-quiet borders (`1px solid #E2DBD0`). This introduces definition without disrupting the literary atmosphere.
- **Subtle Ambient Lift:** When interactive cards elevate on hover, they employ a gentle, organic ambient shadow: `0 8px 24px -4px rgba(27, 67, 50, 0.06)`. The green tint mirrors natural forest ambient occlusion rather than synthetic grey dropshadows.
- **Divider Treatment:** Section breaks frequently employ traditional editorial flourishes: a single hairline horizontal rule (`#E2DBD0`) paired with an understated diamond glyph or central typographic ornament.

## Shapes
To preserve the structured feel of a printed gazette, the shape geometry is restrained and architectural. 

- **Level 1 (Soft):** Structural elements rely on crisp angles tempered by minimal 0.25rem (`4px`) radii on interactive buttons, input elements, and cards.
- **Images & Photography:** Archival portraits and photojournalism spreads are rendered strictly rectangular (`0px` border-radius) or framed with hairline borders to emulate classic printed folios and exhibition catalogues.
- **Badges & Chips:** Minor tags, category indicators, and status badges take a slightly softer 0.25rem corner to separate them from photographic assets while avoiding playful pill shapes.

## Components

### Buttons & Editorial Links
- **Primary Editorial Button:** Deep Forest Green (`#1B4332`) solid background with Warm Ivory (`#FAF8F5`) text. Corner radius `0.25rem`. Hover shifts to `#132E22`. Used for primary research actions: "Đọc toàn văn hồ sơ" (Read complete dossier), "Xem tư liệu số" (View digital archives).
- **Secondary Cultural Button:** Terracotta outline (`1px solid #9C4A27`) with Terracotta text on transparent background. Hover state fills solid `#9C4A27` with pure white text (`#FFFFFF`). Used for narrative links: "Tìm hiểu vùng nguyên liệu" (Explore botanical origins).
- **Ghost/Tertiary Link:** Underlined `#2B6CB0` with an animated arrow glyph, transitioning to `#1E4E8C` on hover.

### Category Chips & Taxonomies
- Tags feature a 12% opacity tint of their respective topical color for the background, framed with a 1px solid border at 30% opacity, and solid color text. Height is fixed at `28px`, text typeset in `label-sm`.
- Tags are non-pill, shaped with a modest `0.25rem` radius.

### OCOP Star Certification Badges
- Strictly functional indicators verifying the official national classification (3 sao, 4 sao, 5 sao).
- Background is Deep Forest Green (`#1B4332`) or Crisp White (`#FFFFFF`) with a 1px solid `#D4A359` frame. Stars are rendered using solid Harvest Gold (`#D4A359`). No other UI elements may co-opt this gold palette.

### Event Status Badges
- **Sắp diễn ra:** Tinted navy background (`#E8EEF5`), text `#1E4E8C`.
- **Đang diễn ra:** Tinted sage background (`#EAF2EE`), text `#2D6A4F`, accompanied by a subtle pulsing dot.
- **Đã kết thúc:** Muted ash background (`#F0F1F2`), text `#6C757D`.

### Editorial Cards (No Commercial Artifacts)
- **Feature Journal Card:** Comprises high-fidelity photojournalism, category tag chip, province metadata (e.g., "Mường Khương, Lào Cai"), Noto Serif headline, short narrative synopsis, and reading duration. Never displays prices, SKU codes, or cart indicators.
- **Artisan / Craft Dossier Card:** Alternating Sand (`#F2ECE1`) container with ink-line portraits, biographical detail, and list of preserved generational techniques.

### Inputs & Research Queries
- Input fields sit on Card White (`#FFFFFF`) or Warm Ivory (`#FAF8F5`) with a 1px border of `#D4CEC4`. Focus states transition to a 1px border of `#1B4332` with zero box-shadow bloom. Typographic placeholders are set in `Be Vietnam Pro` `#718096` italic.

### Archival Indices & Cultural Timelines
- Tabular lists and chronologies are separated by `#E2DBD0` horizontal dividers. Metadata columns (Year, Commune, Ecological zone, Certification level) use strict baseline alignments and mono-spaced numeral treatments.