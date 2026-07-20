# Execution Plan — Portfolio Redesign

> Dibuat otomatis dari analisis codebase + `ROADMAP_REDESIGN.md`.
> Setiap phase punya acceptance criteria yang bisa diverifikasi.

---

## Decisions Locked

| Aspek | Keputusan |
|-------|-----------|
| i18n | Pertahankan EN/ID |
| CV page | Pertahankan di `/cv` |
| LetterGlitch | Hapus |
| Accent color | Deep Teal `#1A6B5C` |
| Missing screenshots | Placeholder dulu |

---

## Current State Summary

- **Stack**: Next.js 16.2.10, React 19, TypeScript 6, TailwindCSS v4 — sudah di target version
- **Architecture**: Single-page scroll site dengan hash navigation (`/` only + `/cv`)
- **Data**: Semua konten embedded di `src/messages/en.json` dan `src/messages/id.json` (i18n)
- **Design**: Grayscale OKLCH palette, `Outfit` + `Ovo` fonts, blue-500 accent, tidak ada shadcn/ui components (hanya token foundations)
- **14 projects** + **2 local businesses** + **4 experience entries** untuk di-migrate
- **Social links** hardcoded di 6+ files

---

## Phase 0 — Setup & Data Migration

**Goal**: Semua konten terstruktur di `content/*.json`, types & helpers siap, `npm run build` sukses.

### Step 0.1: Create `src/types/work.ts`
- Interfaces sesuai schema Section 3 roadmap
- WorkTier, WorkCategory, WorkMetric, WorkItem, ExperienceItem, SiteConfig

### Step 0.2: Create `content/site-config.json`
- Extract dari: `src/app/layout.tsx` (lines 21-43), `src/components/ui/SocialLinks.tsx` (lines 14-16), `src/components/Hero.tsx` (social links)
- Fields: `name`, `title`, `positioningTagline`, `availability`, `social`, `cvUrl`

### Step 0.3: Create `content/experience.json`
- Extract dari: `src/messages/en.json` lines 24-65 (4 entries)
- Reframe bullets dari task-based → impact-based

### Step 0.4: Create `content/work.json`
- Extract dari: `src/messages/en.json` lines 67-183 (14 projects) + lines 185-209 (2 local businesses)
- Merge local businesses sebagai `client-work` category
- Assign tiers per Section 2.1:
  - **Tier 1** (`client-work`): DKM Cakes, EmasAji
  - **Tier 2** (`engineering`): DelokFilm, DawahPlay, E-Commerce Admin, Dockeranium, Introvesia.com
  - **Tier 3** (`experiment`): Wadde, Supacars, PastiLaris, Moviez Streaming, Transaction Dashboard, Resto, Foodyar, Pricing Pro, Detail Product
- Map screenshots: `public/projects/*.jpg` → `images` field
- Projects without screenshots → `images: ["/projects/placeholder.jpg"]`
- Add placeholder image `public/projects/placeholder.jpg`
- Fill Tier 1 fields (`context`, `approach`, `results`, `metric`) dengan konten + TODO markers

### Step 0.5: Create `src/lib/get-work.ts`
- `getAllWork(): WorkItem[]`
- `getWorkBySlug(slug: string): WorkItem | undefined`
- `getWorkByTier(tier: WorkTier): WorkItem[]`
- `getWorkByCategory(category: WorkCategory): WorkItem[]`
- `getFeaturedWork(): WorkItem`

### Step 0.6: Verify `npm run build` sukses

**Definition of Done**: `npm run build` sukses, tidak ada type error, semua data terstruktur di content/*.json

---

## Phase 1 — Design System Foundation

**Goal**: New typography, color tokens, monochrome tech tags, metric-stat component.

### Step 1.1: Update `src/app/globals.css`
- Background: `#FAFAF7` (light) / `#141412` (dark)
- Accent: Deep Teal `#1A6B5C`
- WCAG AA contrast compliance

### Step 1.2: Update `src/app/layout.tsx`
- Heading: `Instrument Serif` via `next/font`
- Body: `Geist` via `next/font`
- Remove `Ovo` font

### Step 1.3: Create `src/components/ui/tech-stack.tsx`
- Monochrome text tags, bukan colored pills

### Step 1.4: Create `src/components/work/metric-stat.tsx`
- Big number + label, count-up animation

### Step 1.5: Delete `src/components/LetterGlitch.tsx`
- Remove dari Hero.tsx

### Step 1.6: Create `src/app/style-preview/page.tsx` (temporary)

**Definition of Done**: Semua komponen basic pakai design system baru, tidak ada colored pill/badge.

---

## Phase 2 — IA & Routing Skeleton

**Goal**: Semua route bisa diakses tanpa 404, nav updated.

### Step 2.1: Create route pages (placeholder):
- `src/app/about/page.tsx`
- `src/app/work/page.tsx`
- `src/app/work/[slug]/page.tsx` + `generateStaticParams`
- `src/app/experience/page.tsx`
- `src/app/contact/page.tsx`

### Step 2.2: Update `src/components/Navbar.tsx`
- Nav: Home, About, Work, Experience, Contact (+ CV)
- Route links, bukan hash links
- Hapus "Local Business"

### Step 2.3: Setup `generateStaticParams` + `generateMetadata` di `work/[slug]`

### Step 2.4: Update `src/app/sitemap.ts`

**Definition of Done**: Semua route accessible, build menghasilkan static export lengkap.

---

## Phase 3 — /work Listing Page

**Goal**: `/work` menampilkan seluruh project ter-tier, filter berfungsi.

### Step 3.1: Create `src/components/work/work-card.tsx`
- Tier 1: Large card dengan metric
- Tier 2/3: Compact card

### Step 3.2: Create `src/components/work/work-filter.tsx`
- Client component, filter by category

### Step 3.3: Implement `src/app/work/page.tsx`
- 3 section sesuai tier

**Definition of Done**: Semua 16 items ter-render dengan benar per tier.

---

## Phase 4 — /work/[slug] Detail (PRIORITAS TERTINGGI)

**Goal**: Case studies DKM Cakes & EmasAji fully populated.

### Step 4.1: Tier 1 template (5 sections):
1. Hero — title, tagline, meta, image
2. Business Context — from `context`
3. Approach & Decisions — from `approach` + `challenges`
4. Results — from `results` + `metric`
5. CTA — links ke work lain / contact

### Step 4.2: Tier 2 template (compact)

### Step 4.3: Populate DKM Cakes + EmasAji content

### Step 4.4: Populate Tier 2 content (minimal 3 project)

**Definition of Done**: `/work/dkm-cakes` dan `/work/emasaji` fully-populated.

---

## Phase 5 — Home Page

**Goal**: Hook + featured case study + philosophy + CTA. Tidak ada full dumps.

### Step 5.1: Restructure `src/app/page.tsx`
- Hero (tagline outcome-driven)
- Featured case study (1 Tier 1)
- Philosophy (singkat)
- CTA ke `/contact`

### Step 5.2: New hero component (editorial, no canvas animation)

**Definition of Done**: Home tidak menampilkan semua konten.

---

## Phase 6 — About, Experience, Contact

### Step 6.1: `/about` — Personal narrative + philosophy
### Step 6.2: `/experience` — Dari `experience.json`, impact-framed
### Step 6.3: `/contact` — CTA + social + location

**Definition of Done**: Konten final, konsisten dengan positioning.

---

## Phase 7 — Motion & Polish

### Step 7.1: View Transitions antara `/work` ↔ `/work/[slug]`
### Step 7.2: Scroll count-up di `metric-stat.tsx`
### Step 7.3: Audit `prefers-reduced-motion`
### Step 7.4: WCAG AA contrast audit

**Definition of Done**: Transisi halus, no motion saat reduced-motion, contrast passes WCAG AA.

---

## Phase 8 — SEO & Metadata

### Step 8.1: `generateMetadata` per halaman
### Step 8.2: JSON-LD `Person` schema
### Step 8.3: Update `sitemap.ts` + dynamic slugs
### Step 8.4: Audit `next.config`

**Definition of Done**: Lighthouse SEO ≥95, meta tags valid.

---

## Phase 9 — QA & Deploy

### Step 9.1: Cross-browser check
### Step 9.2: Mobile responsiveness
### Step 9.3: Update GitHub Actions workflow
### Step 9.4: Update `public/CNAME`
### Step 9.5: Final review

**Definition of Done**: Situs live, semua route accessible, tidak ada broken link/image.

---

## Estimated File Count

| Category | Files |
|----------|-------|
| New content files | 3 (`content/*.json`) |
| New types/lib | 2 (`types/work.ts`, `lib/get-work.ts`) |
| New components | ~15 (work/*, home/*, ui/tech-stack, ui/metric-stat) |
| Modified components | ~8 (Navbar, Hero, layout, globals.css, etc.) |
| New pages | 5 (about, work, work/[slug], experience, contact) |
| Deleted files | 2 (LetterGlitch.tsx, TechBadge.tsx) |
| **Total touched** | ~35 files |
