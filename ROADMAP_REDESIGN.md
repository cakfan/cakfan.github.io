# Roadmap Redesign Portfolio — cakfan.github.io

> Dokumen ini ditujukan untuk dibaca dan dieksekusi oleh AI coding agent (mis. Claude Code).
> Setiap task punya acceptance criteria yang jelas agar bisa diverifikasi tanpa ambiguitas.
> Kerjakan phase secara berurutan — jangan lompat ke phase berikutnya sebelum acceptance criteria phase sebelumnya terpenuhi.

---

## 0. Context & Constraints

**Project**: Redesign portfolio pribadi Taufan Fatahillah (Front-End Engineer, Jember, Indonesia).
**Current site**: https://cakfan.github.io/ — single-page Next.js scroll site, deployed ke GitHub Pages.
**Target stack**: Next.js 16 (App Router), TypeScript, TailwindCSS, shadcn/ui.
**Deploy target**: GitHub Pages (static export) — asumsikan `output: 'export'` di `next.config`, kecuali dinyatakan lain oleh user.

### Positioning (WAJIB dipatuhi di semua copy & IA)

> "Front-End Engineer yang membangun untuk hasil bisnis, bukan cuma untuk demo."
> Dibuktikan lewat produk nyata yang dipakai UMKM di Jember (DKM Cakes & Cookies, EmasAji).

**Tujuan utama**: melamar posisi full-time/kontrak di perusahaan.
**Pesan yang harus konsisten muncul**: business-aware engineering, end-to-end ownership, craft dengan standar tinggi (SEO, a11y, performa).

### Non-goals / hal yang harus DIHINDARI

- Jangan buat portfolio jadi terasa seperti "template SaaS landing page" (gradient neon, particle background, cursor-follow blob, tilt-3D card).
- Jangan sejajarkan project template-clone (Wadde, Supacars, PastiLaris, Foodyar, dst) dengan case study client work — itu harus di tier terpisah dengan bobot visual lebih kecil.
- Jangan reuse identik design system dari proyek DKM Cakes (Fraunces + dark patisserie palette) — itu brand milik klien, portfolio ini butuh identitas sendiri.
- Jangan tambahkan section "Local Business" terpisah di navigasi utama — lebur ke dalam `/work` sebagai kategori/filter.

---

## 1. Source of Truth — Data yang Harus Diekstrak dari Codebase Lokal

Project sudah tersedia di lokal — TIDAK perlu scrape situs live. Agent harus membaca langsung dari source code project existing (cari komponen/data section Home, Projects, Local Business, Experience — kemungkinan berupa hardcoded JSX, array konstanta, atau file data terpisah) untuk memindahkan konten berikut:

- [ ] Semua project (judul, deskripsi, tech stack, URL live, URL GitHub, screenshot) — total ±15 item
- [ ] Data 2 local business (DKM Cakes, EmasAji): nama, kategori, deskripsi, alamat, jam operasional, no. telepon, screenshot, URL
- [ ] Experience timeline lengkap (4 entri: Freelance Full-Stack, BuildWithAngga, Kerja IT Jepang, Freelance Android/Web)
- [ ] Social links: LinkedIn, GitHub, Instagram
- [ ] Meta/OG data existing (untuk referensi, akan ditulis ulang sesuai positioning baru)
- [ ] Font & warna existing (untuk referensi kontras, TIDAK untuk direuse identik)
- [ ] Aset gambar/screenshot existing di folder `public/` atau `src/assets/` — pastikan path-nya ikut ter-mapping ke `images` field di `work.json`, jangan sampai ada referensi gambar yang broken setelah restrukturisasi folder

**Cara kerja yang disarankan untuk agent**: jalankan `view`/`grep` pada direktori project lokal untuk menemukan lokasi data existing (mis. cari string "DKM Cakes", "EmasAji", atau nama-nama project lain di Section 2.1) sebelum menulis `content/*.json`, agar tidak ada data yang terlewat atau salah salin.

**Acceptance criteria**: ada file `content/work.json`, `content/experience.json`, `content/site-config.json` yang berisi semua data di atas, terstruktur sesuai schema di Section 3, dan semua path gambar valid mengarah ke aset yang benar-benar ada di project.

---

## 2. Information Architecture (Final)

```
/                    → Home: hero + 1 featured case study + filosofi kerja singkat + CTA
/about               → Cerita personal + filosofi kerja (business-aware engineering)
/work                → Listing semua project, di-tier (lihat Section 2.1), filter by category
/work/[slug]         → Detail per project — case study (tier 1) atau project detail (tier 2/3)
/experience          → Timeline pengalaman kerja
/contact             → CTA kontak
```

Tidak ada lagi `/local-business` terpisah — data local business masuk ke `work.json` dengan `category: "client-work"`.

### 2.1 Project Tiering (WAJIB diterapkan di /work)

| Tier | Kategori      | Project                                                                                                    | Perlakuan visual                                                                                                                   |
| ---- | ------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1    | `client-work` | DKM Cakes & Cookies, EmasAji                                                                               | Card besar, 1 metrik hasil ditampilkan di card, section paling atas di `/work`, halaman detail lengkap (5 bagian, lihat Section 4) |
| 2    | `engineering` | DelokFilm, DawahPlay, E-Commerce Admin, Dockeranium, Introvesia.com                                        | Grid 3 kolom, card medium, fokus ke stack & fitur teknis                                                                           |
| 3    | `experiment`  | Wadde, Supacars, PastiLaris, Moviez Streaming, Transaction Dashboard, Foodyar, Pricing Pro, Detail Product | Compact list/grid kecil di bagian paling bawah `/work`, bobot visual rendah, boleh collapsed by default                            |

**Acceptance criteria**: `/work` menampilkan 3 section berbeda sesuai tier di atas, dengan hierarki visual yang jelas (Tier 1 paling mencolok, Tier 3 paling ringkas).

---

## 3. Data Schema

### `content/work.json`

```typescript
type WorkTier = 1 | 2 | 3;
type WorkCategory = "client-work" | "engineering" | "experiment";

interface WorkMetric {
  label: string; // e.g. "Lighthouse Performance"
  value: string; // e.g. "98"
}

interface WorkItem {
  slug: string; // e.g. "dkm-cakes"
  tier: WorkTier;
  category: WorkCategory;
  title: string;
  tagline: string; // 1 kalimat, outcome-oriented
  metric?: WorkMetric; // wajib untuk tier 1, opsional untuk tier lain
  context?: string; // wajib untuk tier 1 — masalah bisnis klien
  approach?: string; // wajib untuk tier 1 — keputusan teknis & alasannya
  challenges?: string[]; // opsional, tantangan teknis spesifik
  results?: string; // wajib untuk tier 1 — hasil kuantitatif/kualitatif
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[]; // path relatif ke /public
  // khusus client-work (data eks "local business")
  clientMeta?: {
    address?: string;
    hours?: string;
    phone?: string;
  };
}
```

### `content/experience.json`

```typescript
interface ExperienceItem {
  period: string; // e.g. "Feb 2026 – Present"
  role: string;
  organization: string;
  bullets: string[]; // reframe ke dampak, bukan cuma tugas
}
```

### `content/site-config.json`

```typescript
interface SiteConfig {
  name: string;
  title: string; // "Front-End Engineer"
  positioningTagline: string; // hero headline outcome-driven
  availability: string; // "Open to full-time opportunities"
  social: { linkedin: string; github: string; instagram: string };
  cvUrl: string;
}
```

**Acceptance criteria**: ketiga file JSON di atas valid, semua field wajib untuk tier 1 (`context`, `approach`, `results`, `metric`) terisi untuk DKM Cakes dan EmasAji minimal dengan draft copy (boleh placeholder ditandai `TODO` jika data numerik belum tersedia dari user).

---

## 4. Halaman `/work/[slug]` — Struktur Konten (Tier 1 / Case Study)

Agent harus membangun template dengan urutan section berikut, dirender dari field `WorkItem`:

1. **Hero** — title, tagline, meta (role, timeline, stack, link live), gambar besar
2. **Konteks Bisnis** — dari field `context`, framing masalah nyata klien sebelum bicara teknis
3. **Pendekatan & Keputusan Teknis** — dari field `approach` + `challenges`, jelaskan trade-off (bukan cuma nama tools)
4. **Hasil** — dari field `results` + `metric` ditampilkan besar/mencolok
5. **CTA Penutup** — link ke project lain / `/contact`

Untuk Tier 2, gunakan template lebih ringkas (skip section 2, gabung 3+4 jadi satu blok fitur teknis).
Untuk Tier 3, tidak perlu halaman detail — cukup link keluar (live URL/GitHub) dari card di `/work`, atau modal ringan.

**Acceptance criteria**: buka `/work/dkm-cakes` dan `/work/emasaji` menampilkan kelima section di atas dengan konten terisi (bukan lorem ipsum).

---

## 5. Design System

| Aspek                | Keputusan                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Heading font         | Serif editorial (Newsreader / Instrument Serif / Fraunces weight berat) — bukan Fraunces yang sama persis dengan DKM Cakes |
| Body font            | Sans netral: Geist / Inter / Manrope                                                                                       |
| Warna dasar          | Off-white `~#FAFAF7` / off-black `~#141412` (bukan pure white/black)                                                       |
| Accent color         | Satu warna saja, dipakai hemat — hanya untuk metrik angka, link, CTA                                                       |
| Tech-stack tags      | Teks monokrom kecil, BUKAN colored pill/badge warna-warni                                                                  |
| Layout               | Editorial: max-width baca ~65-75ch untuk paragraf di case study, whitespace besar antar section                            |
| Dark mode            | Pertahankan toggle existing, tapi audit ulang kontras (bukan sekadar invert)                                               |
| Motion               | View Transitions API antar `/work` → `/work/[slug]`; scroll count-up untuk metrik; wajib hormati `prefers-reduced-motion`  |
| Motion yang DILARANG | Particle background, cursor-follow blob, tilt-3D hover card                                                                |

**Acceptance criteria**: tidak ada colored badge/pill untuk tech stack di manapun; kontras warna teks vs background lolos WCAG AA di kedua tema; transisi `/work` → `/work/[slug]` menggunakan View Transitions dan terdegradasi dengan baik saat `prefers-reduced-motion: reduce`.

---

## 6. Folder Structure Target

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Home
│   ├── globals.css
│   ├── about/page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       └── opengraph-image.tsx
│   ├── experience/page.tsx
│   ├── contact/page.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/{nav,footer,theme-toggle}.tsx
│   ├── work/{work-card,work-filter,metric-stat,case-study-section}.tsx
│   ├── home/{hero,featured-case-study}.tsx
│   └── ui/                         # shadcn primitives, token di-override
├── content/
│   ├── work.json
│   ├── experience.json
│   └── site-config.json
├── lib/
│   ├── get-work.ts
│   └── metadata.ts
└── types/
    └── work.ts
```

**Acceptance criteria**: struktur folder sesuai di atas, tidak ada file konten hardcoded langsung di komponen — semua narik dari `content/*.json` via `lib/get-work.ts`.

---

## 7. Phase & Task Breakdown

### Phase 0 — Setup & Migrasi Data

- [ ] Audit struktur project Next.js existing di lokal (`view` root & `src/` directory) untuk memahami versi Next.js saat ini, struktur komponen, dan lokasi data project/experience/local-business
- [ ] Upgrade/konfirmasi Next.js 16 App Router + TypeScript + Tailwind + shadcn/ui sudah terpasang sesuai target stack
- [ ] Extract semua konten dari codebase lama sesuai Section 1 (baca dari source, BUKAN scrape live site)
- [ ] Buat `content/work.json`, `content/experience.json`, `content/site-config.json` sesuai schema Section 3
- [ ] Buat `types/work.ts` dan `lib/get-work.ts` (helper: `getAllWork()`, `getWorkBySlug()`, `getWorkByTier()`)

**Definition of done**: `npm run build` sukses dengan data dummy/hasil migrasi, tidak ada type error.

### Phase 1 — Design System Foundation

- [ ] Setup font (heading serif + body sans) via `next/font`
- [ ] Definisikan CSS variables warna (light/dark) di `globals.css`, override token shadcn
- [ ] Hapus/ganti semua colored badge/pill component jadi versi monokrom
- [ ] Buat komponen `metric-stat.tsx` (angka besar + label, dengan varian count-up)

**Definition of done**: ada halaman `/style-preview` (boleh sementara, dihapus sebelum production) yang menampilkan semua komponen dasar dengan design token baru.

### Phase 2 — IA & Routing Skeleton

- [ ] Buat semua route sesuai Section 2 (boleh masih placeholder content)
- [ ] Update `nav.tsx` — hilangkan "Local Business" dari nav utama, sesuaikan dengan IA baru
- [ ] Setup `generateStaticParams` di `work/[slug]/page.tsx` dari `work.json`
- [ ] Setup `generateMetadata` dinamis per route (title, description, OG dari `site-config.json` / `WorkItem`)

**Definition of done**: semua route bisa diakses tanpa 404, `next build` menghasilkan static export lengkap semua slug project.

### Phase 3 — Halaman `/work` (Listing)

- [ ] Implementasi `work-card.tsx` dengan 2 varian visual (tier 1 besar, tier 2/3 kecil)
- [ ] Implementasi `work-filter.tsx` (client component, filter by category)
- [ ] Render 3 section sesuai tiering Section 2.1

**Definition of done**: `/work` menampilkan seluruh project dari `work.json` ter-tier dengan benar, filter berfungsi tanpa reload halaman.

### Phase 4 — Halaman `/work/[slug]` (Detail)

- [ ] Implementasi template Tier 1 (5 section, Section 4)
- [ ] Implementasi template Tier 2 (ringkas)
- [ ] Isi konten lengkap untuk `dkm-cakes` dan `emasaji` (prioritas utama — ini bukti positioning)
- [ ] Isi konten Tier 2 untuk minimal 3 project engineering

**Definition of done**: `/work/dkm-cakes` dan `/work/emasaji` fully-populated sesuai acceptance criteria Section 4.

### Phase 5 — Home Page

- [ ] Hero dengan tagline outcome-driven dari `site-config.json`
- [ ] Section featured case study (pilih salah satu Tier 1, render pakai `case-study-section.tsx` versi ringkas)
- [ ] Section filosofi kerja singkat (bukan list skill pill datar)
- [ ] CTA akhir ke `/contact`

**Definition of done**: Home tidak lagi menampilkan semua konten (no full project dump, no full experience timeline) — hanya hook + 1 featured case study.

### Phase 6 — About, Experience, Contact

- [ ] `/about`: narasi personal + filosofi kerja, konsisten dengan positioning
- [ ] `/experience`: render dari `experience.json`, bullet direframe ke dampak (bukan tugas datar)
- [ ] `/contact`: CTA jelas + info kontak/social

**Definition of done**: ketiga halaman terisi konten final (bukan placeholder), copy konsisten dengan positioning statement Section 0.

### Phase 7 — Motion & Polish

- [ ] Implementasi View Transitions antara `/work` ↔ `/work/[slug]`
- [ ] Implementasi scroll count-up di `metric-stat.tsx`
- [ ] Pastikan semua motion menghormati `prefers-reduced-motion`
- [ ] Audit kontras warna WCAG AA (light & dark mode)

**Definition of done**: transisi halaman terasa halus, tidak ada motion yang berjalan saat `prefers-reduced-motion: reduce` di-set di OS/browser.

### Phase 8 — SEO & Metadata

- [ ] `generateMetadata` per halaman (title, description, OG image)
- [ ] JSON-LD `Person` schema di `/`
- [ ] `sitemap.ts` mencakup semua route + dynamic slugs
- [ ] Audit `next.config` untuk static export GitHub Pages (`output: 'export'`, `images.unoptimized: true` jika perlu)

**Definition of done**: `next build && next start` (atau preview static export) lolos audit Lighthouse SEO ≥95, semua meta tag & JSON-LD tervalidasi (mis. via Google Rich Results Test).

### Phase 9 — QA & Deploy

- [ ] Cross-browser check (Chrome, Safari, Firefox) khusus View Transitions & animasi SVG jika ada
- [ ] Mobile responsiveness check semua halaman
- [ ] Update GitHub Actions workflow deploy (`withastro/action` pattern lama tidak relevan — pastikan pakai workflow Next.js static export ke GitHub Pages)
- [ ] Update `public/CNAME` jika custom domain dipakai
- [ ] Final review: bandingkan tiap halaman terhadap acceptance criteria phase 0-8

**Definition of done**: situs live di domain production, semua route dapat diakses, tidak ada broken link/image dari migrasi data lama.

---

## 8. Urutan Eksekusi (Ringkasan untuk Agent)

Jalankan phase secara berurutan: **0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9**.
Phase 4 (case study DKM Cakes & EmasAji) adalah **prioritas kualitas tertinggi** karena ini bukti utama positioning — jangan buru-buru isi dengan konten tipis, ambil waktu ekstra di sini dibanding phase lain jika perlu trade-off waktu.

Jika ada data yang belum tersedia dari user (mis. metrik numerik hasil DKM Cakes/EmasAji, testimoni klien), tandai dengan komentar `{/* TODO: butuh input user — [deskripsi data yang dibutuhkan] */}` di kode, JANGAN mengarang angka.
