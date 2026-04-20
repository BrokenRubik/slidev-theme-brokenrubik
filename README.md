# @brokenrubik/slidev-theme-brokenrubik

[![NPM version](https://img.shields.io/npm/v/@brokenrubik/slidev-theme-brokenrubik?color=9547FF&label=)](https://www.npmjs.com/package/@brokenrubik/slidev-theme-brokenrubik)

Official BrokenRubik brand theme for [Slidev](https://github.com/slidevjs/slidev). Dark-first, Aspekta type, three brand colors (primary `#9547FF`, secondary `#DFF95F`, accent `#FF707A`) and a set of opinionated layouts plus reusable components.

## Install

In any Slidev project:

```bash
pnpm add -D @brokenrubik/slidev-theme-brokenrubik
```

Then point your deck at the theme:

```md
---
theme: '@brokenrubik/slidev-theme-brokenrubik'
---
```

> Slidev only auto-expands **unscoped** theme names (e.g. `foo` → `slidev-theme-foo`). Scoped packages like this one must be referenced by their full package name.

## Headmatter

The minimum required for a new deck — everything else has a sensible default:

```yaml
---
theme: '@brokenrubik/slidev-theme-brokenrubik'
title: Your deck title
---
```

### Baked-in defaults

The theme sets these on your behalf. Override any of them in headmatter if a specific deck needs something different:

| Key            | Default                 | Purpose                                 |
| -------------- | ----------------------- | --------------------------------------- |
| `colorSchema`  | `both`                  | Dark and light both ship; press `D` to toggle. Set to `dark` or `light` to lock. |
| `transition`   | `slide-left`            | House motion.                           |
| `titleTemplate`| `%s — BrokenRubik`      | Branded browser tab.                    |
| `favicon`      | `/favicon.ico`          | BR favicon shipped with the theme.      |
| `aspectRatio`  | `16/9`                  | Explicit — don't inherit surprises.     |
| `canvasWidth`  | `980`                   | Standard Slidev canvas.                 |
| `drawings.persist` | `false`             | Scribbles stay session-local.           |
| `fonts.*`      | Aspekta + Fira Code     | See below — **not** overridable.        |
| `themeConfig.surface` | `#141414`        | Single slide background for the whole deck. |
| `themeConfig.surface-elev` | `#1a1a1a`   | Raised surfaces (code blocks, tool cards). |

### One surface for every slide

Every layout (cover, intro, section, fact, quote, end, default…) now uses the **same background** — driven by a single CSS variable so you never see two shades of black in one deck. Change it per deck in headmatter:

```yaml
---
theme: '@brokenrubik/slidev-theme-brokenrubik'
themeConfig:
  surface: '#000000'       # pure black for stronger contrast
  surface-elev: '#141414'  # optional — for code blocks & raised cards
---
```

> **Typography is not configurable.** The theme forces **Aspekta** (sans) and **Fira Code** (mono) via `!important` in CSS to keep every BrokenRubik deck visually consistent. Any `fonts:` headmatter setting is effectively ignored at render time.

## Layouts

| Layout       | Purpose                                                    |
| ------------ | ---------------------------------------------------------- |
| `cover`      | Opening slide with the BR logo + big title on black        |
| `intro`      | Secondary opener — logo + content block                    |
| `section`    | Section divider with uppercase eyebrow + secondary-colored title |
| `statement`  | Centered large statement on black                          |
| `fact`       | Giant number + small caption for hero stats                |
| `quote`      | Branded pull-quote with author & role                      |
| `end`        | Closing slide with logo + optional URL                     |
| `default`    | Standard content slide (inherits brand typography)         |
| `three-cols` | Three equal columns via default slot + `::center::` + `::right::` |
| `three-cols-header` | Shared title spans 3 columns; content in `::left::` / `::center::` / `::right::` (+ optional `::bottom::`) |

### `two-cols-header` / `three-cols-header`

Shared header across all columns — the right pattern when the columns are parallel ideas under a single topic (don't use the left column as a description label).

```md
---
layout: three-cols-header
---

<Eyebrow>Layout</Eyebrow>

# Three columns with header

Lede paragraph that applies to all three columns.

::left::

<Card type="primary" title="Plan">...</Card>

::center::

<Card type="secondary" title="Build">...</Card>

::right::

<Card type="accent" title="Ship">...</Card>

::bottom::

Optional footer row that also spans all three columns.
```

`two-cols-header` ships with Slidev itself; `three-cols-header` is added by this theme.

### `cover` / `intro`

Always render the BR logo above the title — by design.

```md
---
layout: cover
# or: layout: intro
variant: light   # 'light' (default) | 'dark' — pick logo color
align: left      # 'left' (default) | 'center' — cover only
---

# Your title

Subtitle or lede paragraph.
```

### `section`

```md
---
layout: section
eyebrow: "Foundations"
---

# Colors, type, tone
```

### `fact`

```md
---
layout: fact
---

# 150+

Projects delivered since 2017
```

### `quote`

Colored accent frame with a decorative quote mark, tinted background gradient, and a brand-dot attribution. Bold any phrase inside the quote and it renders in the accent color.

```md
---
layout: quote
author: "Anonymous client"
role: "NetSuite admin"
color: primary     # 'primary' (default) | 'secondary' | 'accent'
---

The quote text goes here, with a **highlighted phrase** in the accent color.
```

### `end`

```md
---
layout: end
url: https://brokenrubik.co
logo: true
---

# Ready to present.
```

## Components

All components are auto-registered by Slidev — use them inline in Markdown.

### `<Callout>`

Colored notification banner with left border.

```md
<Callout type="primary">Primary emphasis.</Callout>
<Callout type="secondary">Positive / tip.</Callout>
<Callout type="accent">Warning / risk.</Callout>
```

### `<Card>`

Bordered content block, good for grids of 2–4.

```md
<div class="grid grid-cols-3 gap-4">
  <Card type="primary" title="SuiteScript">Inside NetSuite, free, since 2019.</Card>
  <Card type="secondary" title="REST API">External systems over HTTP.</Card>
  <Card type="accent" title="ODBC / JDBC">For BI tools. License required.</Card>
</div>
```

Props: `type: 'primary' | 'secondary' | 'accent' | 'muted'` (default `muted`), `title?: string`.

### `<Step>`

Numbered step with a brand-colored circle.

```md
<Step :n="1">Install the theme</Step>
<Step :n="2">Set it in your frontmatter</Step>
<Step :n="3">Write your slides</Step>
```

Props: `n`, `color: 'primary' | 'secondary' | 'accent'`.

### `<DotItem>`

Bullet-dot list item colored by intent.

```md
<DotItem color="primary"><strong>Primary</strong> — default attention</DotItem>
<DotItem color="secondary"><strong>Secondary</strong> — a metric or success marker</DotItem>
<DotItem color="accent"><strong>Accent</strong> — a warning</DotItem>
```

### `<Stat>`

Big number with a small caption.

```md
<Stat value="2019" label="Available since" color="secondary" />
<Stat value="100K" label="Rows per query" color="primary" />
```

### `<Eyebrow>`

Uppercase label — useful in `default` slides to mimic the section style.

```md
<Eyebrow color="primary">Foundations</Eyebrow>
```

### `<BRLogo>`

The BrokenRubik logo. `variant: 'light' | 'dark'` (default `light`).

```md
<BRLogo variant="light" class="h-10" />
```

### `<BRBackground>` — image or video background

Drop behind any slide's content. Auto-detects video vs image from the file extension and renders a configurable darkening overlay so white text stays readable.

```md
<!-- Video (autoplay, muted, loop, playsinline) -->
<BRBackground src="/videos/bg-video.mp4" :overlay="0.65" />

<!-- Image, no overlay -->
<BRBackground src="/images/hero.jpg" :overlay="false" />

<!-- Custom overlay color -->
<BRBackground src="/images/product.jpg" :overlay="0.4" overlayColor="#9547FF" />
```

**Shortcut** — on the `cover` layout, you can set the background directly in frontmatter:

```md
---
layout: cover
background: /videos/bg-video.mp4
overlay: 0.65
---

# Big title on top of the video
```

Props:

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `src` | `string` | — | Path / URL to image or video. |
| `type` | `'auto' \| 'image' \| 'video'` | `'auto'` | Detection by extension: `.mp4`, `.webm`, `.mov`, `.ogv`, `.m4v` → video. |
| `overlay` | `boolean \| number` | `true` | `true` = 55% black, `false` = none, `0–1` = custom opacity. |
| `overlayColor` | `string` | `'#000'` | Any CSS color; tint the overlay a brand color if you want. |
| `poster` | `string` | — | Poster image shown while the video loads. |
| `fit` | `'cover' \| 'contain'` | `'cover'` | `object-fit` for the media. |
| `z` | `number` | `0` | Z-index inside the slide; leave at default so slide content sits above. |

**Tips:**
- Videos must be **muted** for browsers to autoplay — the component sets this automatically.
- Large MP4s hurt cold-load time. Keep backgrounds under ~5MB, or provide a `poster` image.
- On `cover`/`intro`, the BR logo renders above the overlay automatically — no extra work.

### `<Compare>`

Side-by-side column comparison with a centered divider and brand-colored headers.

```md
<Compare leftLabel="Before" rightLabel="After">
  <template #left>
  - Point-and-click
  - One level of joins
  </template>
  <template #right>
  - Standard SQL
  - Unlimited joins
  </template>
</Compare>
```

Props: `leftLabel?`, `rightLabel?`, `leftColor` (default `'primary'`), `rightColor` (default `'secondary'`). Pass `'muted'` to de-emphasize one side.

### `<Timeline>` + `<TimelineItem>`

Vertical evolution timeline with color-coded year markers.

```md
<Timeline>
  <TimelineItem when="2019" color="primary">First milestone</TimelineItem>
  <TimelineItem when="2024" color="secondary">Recent change</TimelineItem>
  <TimelineItem when="2026" color="accent">Upcoming deprecation</TimelineItem>
</Timeline>
```

### `<Pros>` + `<Cons>`

Green check / red cross bulleted lists for contrasting options.

```md
<div class="grid grid-cols-2 gap-4">
<Pros title="What you gain">

- Unlimited joins
- Subqueries

</Pros>
<Cons title="What you lose">

- Point-and-click UI

</Cons>
</div>
```

### `<Pill>`

Small rounded chip for inline labels.

```md
<Pill color="secondary">Free</Pill>
<Pill color="primary">Since 2019</Pill>
<Pill color="accent">Deprecated</Pill>
```

Props: `color: 'primary' | 'secondary' | 'accent' | 'muted'`.

### `<Tool>`

Logo + name card for an integration or third-party tool. Becomes a link when `href` is set. If `logo` is missing or fails to load, falls back to a first-letter badge in brand primary.

```md
<!-- With a logo (favicon, iconify, or local SVG) -->
<Tool name="Celigo" logo="https://www.celigo.com/favicon.ico" note="Native SuiteQL + JDBC" href="https://celigo.com" />
<Tool name="Postman" logo="https://api.iconify.design/simple-icons/postman.svg?color=white" />

<!-- No logo — first-letter fallback -->
<Tool name="Acme Integrations" note="In-house connector" />
```

Good logo sources:
- The vendor's own favicon: `https://<domain>/favicon.ico`
- Iconify Simple-Icons API: `https://api.iconify.design/simple-icons/<slug>.svg?color=white`
- A local SVG you ship in `public/logos/`

### `<Checklist>`

Actionable check-style bullet list — for next-steps slides.

```md
<Checklist>

- Install the sandbox
- Import the sample data
- Run the first query

</Checklist>
```

### `<Metric>`

Stat with optional delta, trend, and **count-up animation**.

```md
<Metric value="$4.2M" label="Revenue (Q1)" delta="+18%" trend="up" color="secondary" />
<Metric value="3.1d" label="Close time" delta="-22%" trend="down" />
<Metric value="150" label="Projects delivered" animate />
<Metric value="2026" color="primary" animate :from="2010" :duration="2000" />
```

Props:

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `value` | `string \| number` | — | Final value. Numeric portion is parsed for animation; prefix/suffix (e.g. `$`, `%`, `M`) are preserved. |
| `label` | `string` | — | Caption under the number. |
| `delta` | `string` | — | Delta pill (e.g. `+18%`, `-22%`). |
| `trend` | `'up' \| 'down' \| 'flat'` | `'flat'` | Arrow + color for the delta pill. |
| `color` | `'primary' \| 'secondary' \| 'accent'` | `'secondary'` | Color of the big number. |
| `animate` | `boolean` | `false` | Count up from `from` → `value` on slide enter. Resets when leaving. |
| `from` | `number` | `0` | Starting point of the count-up. |
| `duration` | `number` (ms) | `1500` | Duration of the animation. |

Uses `useIsSlideActive()` so the animation only fires when the slide is in view — and replays every time the user navigates back to it.

### `<Kbd>`

Styled keyboard key.

```md
Press <Kbd>Shift</Kbd> + <Kbd>Space</Kbd> to go back.
```

### `<Plan>`

Pricing / subscription card. Compose multiple `<Plan>` in a `grid-cols-2/3/4` for a side-by-side comparison. One plan can be `highlight`-ed as the recommended choice (branded badge, colored price, filled CTA).

```md
<div class="grid grid-cols-3 gap-4">

<Plan name="Starter" currency="$" price="0" period="/mo"
      description="For solo operators."
      cta="Start free">

- Up to 3 seats
- 1 GB storage
- Community support
- ~~Priority SLA~~

</Plan>

<Plan name="Pro" currency="$" price="29" period="/mo"
      description="For teams."
      cta="Start 14-day trial"
      ctaHref="https://brokenrubik.co"
      highlight>

- Unlimited seats
- 100 GB storage
- Priority support
- AI Connector included

</Plan>

<Plan name="Enterprise" price="Custom"
      description="For regulated teams."
      cta="Talk to sales"
      ctaHref="https://brokenrubik.co"
      color="accent">

- Dedicated environment
- SSO + audit log
- Named support engineer
- Custom SLA

</Plan>

</div>
```

Props:

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `name` | `string` | — | Plan name. |
| `price` | `string \| number` | — | Big price number. Pass `"Custom"` for contact-sales plans. |
| `currency` | `string` | — | Small prefix glyph: `"$"`, `"€"`, `"£"`. |
| `period` | `string` | — | Suffix after the price: `"/mo"`, `"per user / month"`. |
| `description` | `string` | — | Short tagline under the name. |
| `cta` | `string` | — | CTA button label. Omit to hide the button. |
| `ctaHref` | `string` | — | If set, CTA becomes a link opening in a new tab. |
| `highlight` | `boolean` | `false` | Raise as the recommended plan — colored badge, colored price, filled CTA. |
| `badge` | `string` | `"Most popular"` | Custom badge text when `highlight` is on. |
| `color` | `'primary' \| 'secondary' \| 'accent'` | `'primary'` | Accent color used for highlight, price, badge, CTA. |

**Feature list syntax** — the default slot is a Markdown list:

- A plain item → ✓ (secondary color)
- `~~strikethrough~~` → `—` in muted color (signals "not included")

## Colors — never hard-code hex

The theme exposes brand colors through **three layers**; pick whichever fits the context. You should never need to know or type a hex value in a deck.

### 1. UnoCSS utility classes (use in Markdown)

`theme.colors.{primary,secondary,accent,brand.*}` are wired up in the theme's `uno.config.ts`. Opacity modifiers work because colors are declared with `<alpha-value>` slots.

| Class | Result |
|---|---|
| `text-primary`, `bg-primary`, `border-primary` | Full-opacity brand purple |
| `text-secondary`, `bg-secondary`, `border-secondary` | Lime |
| `text-accent`, `bg-accent`, `border-accent` | Coral |
| `bg-primary/20`, `border-secondary/40`, `text-accent/70` | Same colors with opacity modifier |
| `bg-brand-surface`, `bg-brand-black`, `border-brand-border` | Theme surfaces and borders |
| `text-brand-muted`, `bg-brand-faint` | Low-contrast text and backgrounds |

Extra shortcuts defined in `uno.config.ts`:

| Shortcut | Expands to |
|---|---|
| `br-eyebrow` | `text-primary text-sm font-semibold uppercase tracking-widest` |
| `br-caption` | `text-brand-muted text-sm` |
| `br-ring-primary` / `-secondary` / `-accent` | Tinted background + ring border |

### 2. Slidev `themeConfig` CSS variables (use in raw CSS)

The theme sets these defaults so Slidev's built-in color utilities work:

```yaml
# Theme default (override per-deck in headmatter if you really must)
themeConfig:
  primary: '#9547FF'
  secondary: '#DFF95F'
  accent: '#FF707A'
```

→ exposes `--slidev-theme-primary`, `--slidev-theme-secondary`, `--slidev-theme-accent` on `:root`. Used by Slidev internals for progress bar, selection, etc.

### 3. BR CSS variables (use inside component `<style>` blocks)

For the tinted / ring variants the utility classes don't cover:

```css
var(--br-primary)        var(--br-primary-soft)     var(--br-primary-ring)
var(--br-secondary)      var(--br-secondary-soft)   var(--br-secondary-ring)
var(--br-accent)         var(--br-accent-soft)      var(--br-accent-ring)
var(--br-black)          var(--br-surface)          var(--br-surface-elev)
var(--br-border)         var(--br-muted)            var(--br-faint)
```

### Rule of thumb

- **In Markdown or HTML in slides** → utility classes (`bg-primary/20`, `text-secondary`).
- **In a Vue component's scoped style** → `var(--br-*)`.
- **Never** → `text-[#9547FF]` or `background: #DFF95F`.

### Dark ↔ light theme

The theme ships both; Slidev's `D` shortcut toggles at runtime.

- Brand colors are defined as RGB triplets (`--br-primary-rgb` etc.) that flip between dark-mode and light-mode values. `text-primary`, `bg-secondary`, `border-accent`, and every `var(--br-primary)` use automatically follow — no per-component override required.
- In light mode, brand colors darken slightly so white text on a colored pill stays readable and lime/coral marks don't vanish on white (#DFF95F lime becomes #6B8000 olive, #FF707A coral becomes #C9434D rose).
- Surfaces, borders, muted text, and heading fg all flip too (`--br-surface`, `--br-border`, `--br-fg`, `--br-fg-heading`).
- BR logos auto-swap — `<BRLogo variant="auto">` and the bottom-right watermark render the light logo on dark surfaces, the dark logo on light ones. `variant="light"` / `variant="dark"` overrides if you need a fixed one.
- Need the full-saturation brand hue on a light surface (rare — big display fills only)? Use `bg-primary-vivid`, `text-secondary-vivid`, `border-accent-vivid`.

## Fonts

Aspekta (weights 300–800) is bundled and served from `/fonts/Aspekta-*.woff2`. Fira Code for monospace is loaded via Slidev's font loader. Both are applied to every text element with `!important`, so decks can't drift.

## Watermark

A faint BrokenRubik logo sits in the bottom-right corner of every content slide (implemented via `global-bottom.vue`). It's hidden on `cover`, `intro`, and `end` layouts — each of those already shows the full logo. The watermark is purely decorative (`aria-hidden`) and respects `prefers-reduced-motion` / print styling.

## Assets

The theme ships with both logo variants:

- `/images/br-light-logo.svg` — white fill, for dark backgrounds
- `/images/br-dark-logo.svg` — black fill, for light backgrounds

Use them directly or via the `<BRLogo>` component.

## Local development

```bash
pnpm install
pnpm run dev        # live-reload example.md
pnpm run build      # build static SPA
pnpm run export     # export example.md → PDF
pnpm run screenshot # export example.md → PNGs
```

## License

MIT © BrokenRubik
