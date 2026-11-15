# Redesign Plan — Simplify, Clean, Modern & Brand Refresh

> **Project:** `cakfan.github.io` — personal portfolio of Taufan Fatahillah
> **Stack:** Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS v4, lucide-react
> **Dokumen ini:** rencana eksekusi redesign yang bisa langsung dijalankan agent/manusia.
> **Hubungan dengan dokumen lain:** `ROADMAP_REDESIGN.md` adalah roadmap redesign sebelumnya. Dokumen ini adalah **iterasi penyederhanaan + brand refresh** — fokusnya memangkas, merapikan, menyamakan kualitas layout di semua ukuran layar, dan memberi identitas visual baru yang lebih fresh/modern.

---

## 1. Tujuan & Definition of Success

### 1.1 Tujuan

1. **Simplify** — kurangi jumlah section, link navigasi, varian komponen, dan token desain yang tidak terpakai.
2. **Clean** — satu bahasa visual: border tipis, whitespace konsisten, accent dipakai hemat, tanpa dekorasi berlebihan.
3. **Modern** — tipografi fluid, layout editorial-teknis, dark/light mode yang mengikuti sistem, motion halus dan tidak mengganggu.
4. **Mobile friendly** — layout dirancang dari 320px ke atas, tanpa horizontal scroll, tap target ≥44px, navigasi mobile yang benar (scroll lock, Escape, focus trap).
5. **Restructure layout** — pisahkan shell situs dan halaman CV, satukan template halaman, rapikan struktur folder.
6. **Brand refresh** — identitas visual baru yang lebih segar, modern, dan khas software engineer: wordmark baru, palet cool-neutral + ultramarine, tipografi grotesk + mono, dan signature layout yang konsisten.

### 1.2 Definition of success

- Semua halaman utama lulus pengecekan di viewport **320 / 375 / 414 / 768 / 1024 / 1440px** tanpa horizontal scroll.
- Lighthouse mobile: **Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95**.
- Jumlah link di navigasi utama turun dari **6 + CV** menjadi **5 + CV**.
- Tidak ada komponen duplikat untuk card/project/template halaman.
- Tidak ada file komponen mati (unused) tersisa di `src/components`.
- Tidak ada token warna dengan nama menyesatkan (contoh: variabel `--teal` yang isinya oranye).
- Brand baru (wordmark, palet, tipografi, signature layout) diterapkan konsisten di semua halaman dan kedua tema.
- `next build` sukses dan static export tetap kompatibel dengan GitHub Pages.

### 1.3 Non-goals

- **Tidak** menambahkan component library baru (shadcn/ui, Radix, dsb). Primitif dibuat sendiri dengan Tailwind agar bundle tetap kecil.
- **Tidak** menambah fitur baru (blog, CMS, contact form backend, analytics).
- **Tidak** mengganti stack, bahasa i18n, atau struktur konten JSON.
- **Tidak** mendesain ulang positioning, copy utama, atau struktur konten. Brand refresh fokus pada **visual identity** (wordmark, warna, tipografi, layout signature, imagery), bukan perubahan pesan.
- **Tidak** membuat animasi dekoratif baru (particle, cursor blob, parallax, tilt 3D).

---

## 2. Audit Baseline — Temuan dari Codebase Saat Ini

Temuan di bawah adalah dasar keputusan redesign. Semua path mengacu ke kondisi repo saat dokumen ini dibuat.

| #   | Area                | Temuan                                                                                                                                                                  | Dampak                                                          | Tindakan di plan ini                          |
| --- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------- |
| 1   | Navigasi            | `Navbar.tsx` menampilkan 6 link + CV + language + theme mulai breakpoint `md` (768px). Di tablet sempit ini terlalu padat.                                                | Nav berdesakan / wrap di 768–900px.                             | Pindah hamburger ke `< lg`, maksimal 5 link utama. |
| 2   | Design token        | Variabel `--teal` sebenarnya berisi oranye (`oklch(... 32)`). Banyak class `text-teal`, `bg-teal/10` yang menyesatkan.                                                     | Sulit dirawat, rawan salah pakai warna.                         | Rename ke `--accent` / `text-accent`, hapus nama `teal`. |
| 3   | Home                | `getFeaturedWork()` mengembalikan `work[0]`, yaitu **Halal MUI (tier 2)**, bukan case study tier 1.                                                                      | Section "featured" tidak menampilkan karya terkuat.             | Tambah flag `featured` eksplisit di `work.json`. |
| 4   | Hero                | `min-h-[85vh]` memakai `vh`, bukan `dvh`.                                                                                                                               | Area hero terpotong/bergeser saat address bar mobile muncul.    | Ganti ke `min-h-[100svh]` / `dvh`, kurangi tinggi. |
| 5   | Layout utility      | `section-padding` fix `6rem`; `container-section` fix `1.5rem` padding & `72rem` max-width.                                                                              | Spasi terlalu besar di mobile, konten terlalu lebar di desktop. | Buat spacing & container fluid dengan `clamp()`. |
| 6   | Work listing        | `work-page-client.tsx` menggabungkan filter pill + 3 heading tier. 24 project ditampilkan sekaligus.                                                                     | Dua mekanisme navigasi yang saling tumpang tindih.              | Hapus filter pill, ganti anchor nav ringan + section per tier. |
| 7   | Work card           | Tiga implementasi card terpisah (`Tier1Card`, `Tier2Card`, `Tier3Card`) dengan markup mirip.                                                                             | Duplikasi kode, inkonsistensi hover/ukuran.                     | Satu `WorkCard` dengan prop `variant`.        |
| 8   | Metric              | `metric-stat.tsx` mem-parsing angka dengan `replace(/[^0-9]/g, "")`. Value `"~200"` tampil `"200~"`, `"83.762"` tampil `"83762."`.                                        | Data hasil salah tampil.                                        | Ganti ke tampilan statis (hapus count-up) atau parser yang benar. |
| 9   | Services            | `services-page-content.tsx` menduplikasi konten client work, memakai pill warna `bg-teal/10`, dan panjang (202 baris).                                                   | Duplikasi konten + melanggar aturan accent hemat.               | Demote dari nav, ringkas jadi 2 blok, konten utama pindah ke About. |
| 10  | CV                  | `cv/page.tsx` menyembunyikan header/footer lewat `<style>{header, footer {display:none}}</style>`.                                                                        | Brittle, selector global, sulit dirawat.                        | Pindahkan CV ke route group tanpa shell situs. |
| 11  | Gambar              | 7 project memakai `/projects/placeholder.svg`; 1 project tanpa gambar.                                                                                                   | Kesan belum selesai, visual repetitif.                          | Card tanpa gambar → cover tipografis; sisanya lengkapi. |
| 12  | Komponen mati       | `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Contact.tsx`, `LocalBusiness.tsx`, `ui/ProjectCard.tsx`, `ui/SectionHeader.tsx`, `ui/TechBadge.tsx` tidak dipakai. | Bundle & cognitive load, grep membingungkan.                    | Hapus semua.                                  |
| 13  | Mobile menu         | Menu mobile tidak scroll-lock, tidak tutup dengan Escape, tidak focus trap, dan tidak tertutup saat route berubah selain lewat klik link.                                | Pengalaman mobile kurang baik & aksesibilitas rendah.           | Buat `MobileMenu` yang benar.                 |
| 14  | Footer              | Footer hanya satu baris copyright.                                                                                                                                       | Tidak ada navigasi sekunder / kontak cepat.                     | Footer 3 kolom → stack di mobile.             |
| 15  | Client components   | Hampir semua section `"use client"` karena `I18nProvider` berbasis context di root.                                                                                       | JS payload lebih besar dari kebutuhan.                          | Catat sebagai technical debt; tidak diubah di fase awal. |
| 16  | Font                | `Newsreader` memuat 4 weight, `Geist` memuat 4 weight eksplisit.                                                                                                          | Payload font berlebih + brand lama.                             | Hapus Newsreader; pakai Geist + Geist Mono (variable). |
| 17  | Back-to-top         | Fixed `bottom-6 right-6` tanpa safe-area, bisa menutupi CTA di mobile.                                                                                                    | Overlap elemen di layar kecil.                                  | Reposisi + safe-area, atau hapus.             |
| 18  | Tema default        | Script selalu menambahkan `.dark` kecuali user pernah memilih light.                                                                                                      | Tidak menghormati preferensi sistem.                            | Ikuti `prefers-color-scheme` saat belum ada pilihan. |
| 19  | Section rhythm      | Home memakai 4 section `py-20 border-t` berturut-turut.                                                                                                                  | Terasa repetitif dan panjang.                                   | Ringkas jadi 3 section dengan variasi rhythm. |
| 20  | Metadata            | Metadata halaman ditulis ulang manual per route (OG/Twitter duplikat).                                                                                                    | Rawan tidak konsisten.                                          | Sentralisasi helper metadata.                 |
| 21  | Naming file         | Campuran PascalCase (`Navbar.tsx`, `SocialLinks.tsx`), camelCase (`useDarkMode.ts`), dan kebab-case (`work-card.tsx`).                                                     | Sulit diprediksi, import tidak konsisten.                       | Standardisasi seluruh file ke kebab-case.     |
| 22  | Brand identity      | Editorial serif (Newsreader) + off-white hangat + accent oranye sudah umum di portfolio developer; belum memberi sinyal "engineer" yang kuat.                         | Kurang membedakan, terasa dekat dengan template AI portfolio.   | Refresh brand ke arah "engineered clarity": grotesk + mono + ultramarine. |

---

## 3. Prinsip Desain

### 3.1 Simplify

- Maksimal **5 link utama** + 1 CTA (`CV`) di header.
- **Satu** sistem card, **satu** gaya tombol primer, **satu** accent color.
- Hapus section yang tumpang tindih: `Philosophy` dilebur ke Home + About; `Services` didemote.
- Work listing punya **satu** cara navigasi (section per tier), bukan filter + heading sekaligus.
- Hapus semua komponen & token yang tidak dipakai.

### 3.2 Clean

- Border 1px sebagai pemisah utama; shadow hanya untuk elemen mengambang (header sticky, menu mobile).
- Whitespace konsisten mengikuti skala 4/8/12/16/24/32/48/64/96.
- Lebar baca paragraf **60–72ch**.
- Tidak ada gradient dekoratif, glow, atau badge warna-warni.
- Ikon hanya dari `lucide-react`, ukuran konsisten 16/18/20.

### 3.3 Modern

- Fluid typography dengan `clamp()`.
- Layout editorial-teknis: label mono uppercase + heading grotesk besar + body sans.
- Theme mengikuti sistem, bisa dioverride user.
- Motion 150–250ms, hanya opacity/translate, hormati `prefers-reduced-motion`.
- `text-balance` untuk heading, `text-pretty` untuk paragraf.

### 3.4 Mobile-first

- Baseline desain di **320px**, bukan desktop yang dikecilkan.
- Tap target minimal **44×44px**.
- Tidak ada hover-only affordance; semua card punya border/chevron yang terlihat.
- Tidak ada teks <14px untuk konten utama.
- Gambar selalu punya `aspect-ratio` agar CLS = 0.
- Gunakan `svh/dvh`, safe-area inset, dan `overflow-x: clip` pada body.

---

## 4. Brand Refresh & Design System v2

### 4.1 Konsep brand — "Engineered clarity"

> Portfolio terasa seperti **dokumen teknis yang rapi**, bukan template SaaS.
> Grid presisi, tipografi grotesk, label mono, satu warna sinyal, whitespace besar, dan detail kecil yang konsisten.

**Brand attributes:** precise · calm · capable · human.
**Anti-attributes:** playful · corporate · dekoratif · luxury.

**Ringkasan perubahan brand:**

| Aspek     | Brand lama                          | Brand baru                                  |
| --------- | ----------------------------------- | ------------------------------------------- |
| Tipografi | Newsreader serif + Geist            | Geist + Geist Mono                          |
| Warna     | Off-white hangat + oranye           | Cool paper + ink + ultramarine              |
| Bentuk    | Banyak pill & `rounded-full`        | Control 6px, card 8px, hampir kotak         |
| Layout    | Editorial hangat                    | Grid teknis + section index + hairline      |
| Logo      | `TF.` inline                        | `taufan fatahillah.` / monogram `tf.`       |
| Mood      | Tenang, editorial                   | Presisi, segar, technical, tetap human      |

**Positioning:** software engineer yang membangun software yang benar-benar bekerja — web, mobile, dan API.

**Signature visual (wajib muncul konsisten):**

1. **Wordmark lowercase + accent dot** — `taufan fatahillah.` di desktop, monogram `tf.` di mobile/favicon.
2. **Section index** — label mono uppercase dengan nomor: `01 / SELECTED WORK`.
3. **Hairline + tick** — garis 1px dan sudut tipis sebagai pemisah; bukan shadow.
4. **Satu accent ultramarine** — hanya untuk status, link, metrik, dan focus ring.
5. **Metadata mono** — stack, periode, kategori, dan angka memakai Geist Mono.
6. **Cover tipografis** — project tanpa screenshot mendapat cover berbasis nama + index, bukan placeholder berulang.

### 4.1.1 Logo & wordmark

| Konteks        | Bentuk               | Aturan                                       |
| -------------- | -------------------- | -------------------------------------------- |
| Header desktop | `taufan fatahillah.` | Geist 600, tracking -0.03em, dot accent      |
| Header mobile  | `tf.`                | Geist 600, dot accent                        |
| Favicon        | monogram `tf`        | SVG 32×32, putih di atas ink                 |
| Footer         | `taufan fatahillah.` | Boleh diperbesar sebagai brand moment        |

- Jangan memakai serif, outline, gradient, atau drop shadow pada wordmark.
- Clear space minimal setinggi huruf `x` di sekeliling wordmark.
- Gunakan monogram lowercase `tf`; jangan menulis `TF` kapital.

### 4.2 Palet warna

**Arah:** cool paper + near-black ink + ultramarine signal. Menggantikan off-white hangat + oranye agar terasa lebih fresh, modern, dan technical.

| Token                 | Light     | Dark      | Fungsi                  |
| --------------------- | --------- | --------- | ----------------------- |
| `--background`        | `#F4F5F1` | `#0A0C0B` | Permukaan halaman       |
| `--foreground`        | `#0C0E0D` | `#F2F4EF` | Teks utama              |
| `--card`              | `#FFFFFF` | `#111412` | Card / surface          |
| `--muted`             | `#E9EBE5` | `#181C19` | Hover, surface sekunder |
| `--muted-foreground`  | `#5A605B` | `#9AA29B` | Teks sekunder           |
| `--border`            | `#D5D8D1` | `#262B27` | Garis & border          |
| `--accent`            | `#2B3BFF` | `#9AA4FF` | Signal color            |
| `--accent-foreground` | `#FFFFFF` | `#0A0C0B` | Teks di atas accent     |

Ganti mapping di `@theme` dari `oklch(var(--x))` menjadi `var(--x)` agar token bisa ditulis sebagai hex penuh:

```css
@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --radius-card: 0.5rem;
  --radius-control: 0.375rem;
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

**Aturan:**

- Hapus total `--teal`, `--teal-foreground`, `--chart-1..5`, `--popover`, `--input`, `--ring`, dan semua referensi `text-teal`/`bg-teal`.
- Ganti `bg-primary`/`text-primary` → `bg-accent`/`text-accent` (token `--primary` tidak dipakai lagi).
- Light: teks accent di atas background harus ≥4.5:1; dark: gunakan accent versi lebih terang (`#9AA4FF`).
- Accent hanya untuk: status dot, link hover, label section, angka metrik, focus ring, dan 1 CTA primer.
- Tidak ada warna kedua untuk kategori/tag. Tag memakai `border` + `muted-foreground`.
- Kontras teks wajib lolos WCAG AA di light & dark.

### 4.3 Tipografi

**Drop Newsreader.** Brand baru memakai satu keluarga grotesk + satu mono untuk metadata.

| Peran          | Font       | Weight | Ukuran / Catatan                                  |
| -------------- | ---------- | ------ | ------------------------------------------------- |
| Display        | Geist      | 600    | `clamp(2.75rem, 7vw, 5.5rem)`, tracking -0.04em    |
| Heading        | Geist      | 600    | `clamp(1.5rem, 3vw, 2.25rem)`, tracking -0.03em    |
| Body           | Geist      | 400    | 1rem / 1.65, maksimal 68ch                         |
| Label / meta   | Geist Mono | 500    | 0.75rem, uppercase, tracking 0.14em                |
| Angka / metrik | Geist Mono | 500    | `font-variant-numeric: tabular-nums`               |

Fluid type scale:

```css
--text-display: clamp(2.75rem, 7vw, 5.5rem);
--text-h1: clamp(2rem, 4.5vw, 3.25rem);
--text-h2: clamp(1.5rem, 3vw, 2.25rem);
--text-h3: clamp(1.125rem, 2vw, 1.375rem);
--text-body: 1rem;      /* 16px */
--text-sm: 0.875rem;    /* 14px */
--text-xs: 0.75rem;     /* 12px, hanya label mono */
```

Aturan:

- Heading memakai **sentence case**, bukan Title Case.
- Maksimal 2 ukuran heading per section.
- Jangan pakai `font-bold` (700); gunakan 500/600.
- Mono hanya untuk label, metadata, index, dan angka — bukan body panjang.
- Label section: `font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground`, dengan accent hanya pada nomor index.

### 4.4 Spacing, container, radius

```css
@utility container-page {
  width: 100%;
  max-width: 70rem;                 /* 1120px */
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 2rem);
}

@utility section-space {
  padding-block: clamp(3.5rem, 8vw, 6.5rem);
}
```

- Grid: 4 kolom mobile → 8 tablet → 12 desktop.
- Radius: `0.375rem` untuk control/tag, `0.5rem` untuk card/gambar. Tidak ada `rounded-full` kecuali status dot.
- Shadow: `shadow-sm` hanya untuk header/menu; card memakai border.
- Divider: `border-t border-border`; tambahkan section index mono di atas heading.
- Signature layout: nomor section (`01`, `02`, …) + hairline; boleh asimetris di desktop (7/5 kolom), stack di mobile.

### 4.5 Tombol

Tiga varian saja:

| Varian      | Style                                                          | Pemakaian       |
| ----------- | -------------------------------------------------------------- | --------------- |
| `primary`   | `bg-accent text-accent-foreground`, tinggi 44px, radius 6px    | CTA utama       |
| `secondary` | `border border-border`, hover `bg-muted`                       | CTA sekunder    |
| `ghost`     | tanpa border, hover `bg-muted`                                 | link aksi kecil |

- Ukuran: `sm` 36px (hanya desktop), `md` 44px (default, wajib di mobile).
- Ikon 16px, gap 8px.
- Fokus: `outline-2 outline-offset-2 outline-accent`.
- Hapus `rounded-full` dari semua tombol. Pill hanya untuk status/label kecil jika benar-benar perlu.
- Hover: perubahan warna/opacity 8–10%, tanpa `scale`.

### 4.6 Motion

- Durasi 180–220ms, easing `ease-out`.
- Hover image zoom hanya di `@media (hover: hover)`.
- Hapus `animate-pulse` pada dot availability (atau ganti statis).
- Count-up metrik **dihapus** (lihat §2 #8 dan §6.3) — nilai langsung tampil.
- `prefers-reduced-motion` menonaktifkan semua transform & animasi.
- View Transition dipertahankan hanya untuk gambar work → detail, dengan fallback aman.

### 4.7 Dark mode

- Default mengikuti `prefers-color-scheme`.
- Pilihan user disimpan di `localStorage` (`theme = light | dark | system`).
- Script anti-flash di `<head>` hanya menambahkan `.dark` jika sistem dark **dan** user belum memilih light.
- Audit kontras ulang, jangan sekadar invert.

### 4.8 Brand do / don't

| Do                                                   | Don't                                              |
| ---------------------------------------------------- | -------------------------------------------------- |
| Satu accent per viewport                             | Dua accent atau gradient warna-warni               |
| Mono hanya untuk label, index, metadata, angka       | Mono untuk body paragraf panjang                   |
| Heading sentence case, tracking rapat                | Title Case, serif, italic dekoratif                |
| Hairline, border, dan grid sebagai struktur          | Glassmorphism, glow, shadow tebal                  |
| Screenshot asli dengan rasio konsisten               | Mockup device, stock photo, placeholder berulang   |
| Cover tipografis untuk project tanpa gambar          | Ilustrasi AI generik / gradient blob               |
| Whitespace besar dan ritme section yang konsisten    | Semua section `py-20` seragam tanpa hierarki       |
| Satu CTA primer per section                          | Banyak tombol bersaing di area yang sama           |
| Motion fungsional 180–220ms                          | Animasi dekoratif, parallax, tilt 3D               |

---

## 5. Information Architecture & Layout Restructure

### 5.1 Navigasi: sebelum vs sesudah

| Sebelum (6 + CV) | Sesudah (5 + CV) | Perubahan                                      |
| ---------------- | ---------------- | ---------------------------------------------- |
| Home             | Home             | —                                              |
| About            | About            | —                                              |
| Work             | Work             | —                                              |
| Experience       | Experience       | —                                              |
| Services         | ~~Services~~     | Pindah ke footer + ringkas, konten utama ke About |
| Contact          | Contact          | —                                              |
| CV               | CV (tombol)      | Tetap, tampil sebagai tombol CTA               |

Desktop header:

```
taufan fatahillah.   Home  Work  About  Experience  Contact   [EN] [◐] [CV ↗]
```

Mobile header:

```
tf.                                                   [◐] [☰]
```

- Breakpoint nav desktop: **`lg` (1024px)**. Di bawah itu pakai mobile menu.
- Mobile menu: full-width sheet di bawah header, tinggi `calc(100dvh - 56px)`, link 48px, CTA CV di bawah, utility (language/theme) di footer sheet.
- Tutup menu saat: klik link, Escape, route change, resize ke `lg`.
- Scroll lock pada `body` saat menu terbuka.
- Focus trap + `aria-expanded` + `aria-controls`.

### 5.2 Sitemap baru

```
/                     Home
/about                About (+ ringkasan services)
/work                 Work listing (3 tier)
/work/[slug]          Case study / project detail
/experience           Experience
/contact              Contact
/services             Tetap ada untuk link lama, konten diringkas, canonical ke /about
/cv                   CV (tanpa shell situs)
/privacy-policy       Legal (footer only)
/privacy-policy/tapscan
```

### 5.3 Restructure route group

Pisahkan shell situs dari CV agar tidak perlu hack CSS global.

```
src/app/
├── layout.tsx                 # html/body, font, provider, theme script
├── globals.css
├── (site)/
│   ├── layout.tsx             # SiteHeader + main + SiteFooter
│   ├── page.tsx               # Home
│   ├── about/page.tsx
│   ├── work/page.tsx
│   ├── work/[slug]/page.tsx
│   ├── experience/page.tsx
│   ├── contact/page.tsx
│   └── services/page.tsx
├── (print)/
│   └── cv/
│       ├── layout.tsx         # toolbar-only layout
│       └── page.tsx
├── privacy-policy/...
├── not-found.tsx
├── sitemap.ts
└── robots.ts
```

> Catatan: route group `(site)` dan `(print)` tidak mengubah URL. Ini murni memisahkan layout.

### 5.4 Footer

```
┌──────────────────────────────────────────────────────────┐
│ taufan fatahillah.  Software Engineer based in Jember.    │
│                                                          │
│ Navigate          Elsewhere         Contact              │
│ Work              GitHub            withcakfan@gmail.com │
│ About             LinkedIn          Jember, Indonesia    │
│ Experience        Instagram                              │
│ Contact                                                  │
│ Services                                                 │
│                                                          │
│ © 2026 Taufan Fatahillah              Privacy · CV       │
└──────────────────────────────────────────────────────────┘
```

- Desktop: 4 kolom (`2fr 1fr 1fr 1fr`).
- Mobile: stack, urutan Navigate → Contact → Elsewhere, link 44px.
- Footer menggantikan peran back-to-top yang mengganggu.

---

## 6. Blueprint Halaman

### 6.1 Home

**Tujuan:** menjawab "siapa kamu, apa buktinya, bagaimana menghubungi" dalam 3 layar.

```
┌─────────────────────────────────────────────┐
│ Header (fixed, 56/64px)                     │
├─────────────────────────────────────────────┤
│ 00 / SOFTWARE ENGINEER                      │
│ [● OPEN TO FULL-TIME]                       │
│ Software Engineer                           │
│ Building software that works —              │
│ across web, mobile, and APIs.               │
│ 1 paragraf singkat (maks 2 baris)           │
│ [View Work] [Get in Touch]                  │
│ (opsional: 3 social link kecil)             │
├─────────────────────────────────────────────┤
│ 01 / SELECTED WORK                          │
│ Dua case study tier 1, card lebar           │
│ [01] [gambar] DKM Cakes        10+ years    │
│ [02] [gambar] EmasAji          Driving School│
│ → View all work                             │
├─────────────────────────────────────────────┤
│ 02 / ABOUT                                  │
│ 2–3 kalimat + link ke /about                │
├─────────────────────────────────────────────┤
│ 03 / CONTACT                                │
│ Let's build something that works.           │
│ [Get in Touch]                              │
└─────────────────────────────────────────────┘
```

Perubahan dari sekarang:

- Hapus section `Philosophy` terpisah → 2 kalimat pindah ke About strip.
- `FeaturedCaseStudy` diganti `SelectedWork` yang menampilkan **2 item** dengan flag `featured: true`.
- Hero tidak lagi `min-h-[85vh]`; gunakan `min-h-[calc(100svh-4rem)]` dengan max ~640px konten.
- Hapus badge pulsing; ganti label statis dengan dot kecil accent.
- CTA akhir disederhanakan (heading + 1 tombol).

**Acceptance:** Home hanya punya 4 blok visual (Hero, Selected Work, About strip, CTA), tinggi total < 3.5 layar mobile, tidak ada section `border-t` berturut-turut lebih dari 2.

### 6.2 Work listing

```
┌─────────────────────────────────────────────┐
│ 00 / WORK                                   │
│ Things I've built, organized by type.       │
│ [01 Client] [02 Engineering] [03 Experiments]│ ← anchor, sticky
├─────────────────────────────────────────────┤
│ 01 / CLIENT WORK             2 projects     │
│ [wide card DKM]                             │
│ [wide card EmasAji]                         │
├─────────────────────────────────────────────┤
│ 02 / ENGINEERING             12 projects    │
│ [card] [card] [card]                        │
│ [card] [card] [card]                        │
├─────────────────────────────────────────────┤
│ 03 / EXPERIMENTS             8 projects     │
│ [compact list item]                         │
│ [compact list item]                         │
└─────────────────────────────────────────────┘
```

Perubahan:

- **Hapus filter pill** (`work-filter.tsx`). Ganti dengan anchor chips yang scroll ke section (`#client-work`, `#engineering`, `#experiments`).
- Anchor chips `position: sticky; top: 56px` di mobile, bisa horizontal scroll.
- Section tier punya heading + jumlah item kecil (`2 projects`, `12 projects`).
- Tier 3 default **collapsed** di mobile? Tidak — cukup compact list, jangan tambah interaksi.
- `WorkCard` tunggal:
  - `variant="feature"` → gambar besar + konten (tier 1)
  - `variant="default"` → gambar 16:10 + konten (tier 2)
  - `variant="compact"` → thumbnail 64×48 + judul + tagline (tier 3)
- Project tanpa gambar: render cover tipografis (inisial/nama project + accent line), bukan `placeholder.svg` berulang.

**Acceptance:** `/work` hanya punya satu mekanisme navigasi; 24 project tetap tampil; tidak ada filter state; semua card punya affordance yang jelas di touch.

### 6.3 Work detail (`/work/[slug]`)

Satu template `CaseStudyLayout` untuk semua tier, dengan blok kondisional.

```
← All work
[CLIENT WORK · 01]
Judul project
Tagline (1 kalimat)
[Live Site] [Source] [Docs]
[Gambar utama 16:10 / 21:9]

01 / CONTEXT
(paragraf, hanya jika ada)

02 / APPROACH & DECISIONS
(paragraf + list challenges)

03 / RESULTS
[metric besar] [metric label]

04 / MORE WORK
[next project card] [contact CTA]
```

Perubahan:

- Gabungkan `Tier1Template` + `Tier2Template` menjadi satu `CaseStudyLayout`.
- Hapus `work-detail-templates.tsx` dan `case-study-*` yang terpisah-pisah; jadikan section kecil di dalam satu file/komponen.
- Lebar konten: `max-w-[68ch]` untuk teks, gambar boleh lebih lebar (`max-w-4xl`).
- Metadata (role/stack) disajikan sebagai definisi list, bukan pill.
- `Prose` dipertahankan, tapi style `p + p` konsisten.
- Metric statis (tanpa count-up) dan ukuran responsif `text-4xl sm:text-5xl`.

**Acceptance:** `/work/dkm-cakes` dan `/work/emasaji` tampil lengkap; tier 2 tetap punya halaman detail ringkas; tidak ada template duplikat.

### 6.4 About

- Lebar baca `max-w-[68ch]`.
- Struktur: intro 2 paragraf → "How I work" 3 poin → "Toolbox" 3 kolom (stack di mobile) → CTA ke Work/Contact.
- Hapus 5 paragraf bio yang panjang; ringkas jadi 3.
- Tech list sebagai teks, bukan badge.

### 6.5 Experience

- Timeline tetap, tapi lebih rapi: garis kiri 1px, dot statis (hapus pulse), period sebagai label kecil.
- Mobile: period di atas role, bullet 2–3 per item.
- Hapus `dot-pulse`.

### 6.6 Contact

- Satu CTA email besar (`mailto:`) + lokasi + social.
- Card kontak dibuat lebih besar dan full-width di mobile.
- Hapus section "see work" duplikat; cukup link di footer.

### 6.7 Services (demoted)

- Tetap ada di `/services` untuk link lama.
- Ringkas menjadi: intro + 3 benefit + CTA. Hapus daftar 6 benefit, 8 feature, 5 process step, dan duplikasi case study.
- Tidak muncul di nav utama; muncul di footer.
- Tambahkan `alternates.canonical` ke `/about` atau biarkan self-canonical — pilih salah satu dan konsisten.

### 6.8 CV

- Pindah ke route group `(print)` dengan layout sendiri.
- Hapus `<style>` yang menyembunyikan header/footer.
- Toolbar: Back + Language + Download PDF.
- Mobile: padding `1rem`, font 14px, grid skill 1 kolom, URL tidak overflow (`break-all`).
- Print: margin 12mm, hide toolbar, hindari page break di dalam item.

---

## 7. Spesifikasi Mobile-First

### 7.1 Breakpoint

| Nama | Lebar     | Perilaku utama                                      |
| ---- | --------- | --------------------------------------------------- |
| base | 320–639   | 1 kolom, header 56px, hamburger, padding 20px       |
| sm   | 640–767   | 2 kolom untuk card kecil, tombol boleh inline       |
| md   | 768–1023  | 2 kolom konten, masih hamburger                     |
| lg   | 1024–1279 | Nav desktop tampil, 3 kolom work grid               |
| xl   | ≥1280     | Container maksimal 1120px, whitespace lebih lega    |

### 7.2 Aturan layout

- `body { overflow-x: clip; }`
- Tidak ada `w-[fixed]`, `min-w-[fixed]`, atau `grid-cols-[fixed]` di elemen konten.
- Semua gambar `fill` + parent `relative + aspect-*`.
- Semua teks panjang: `overflow-wrap: anywhere` untuk URL/email.
- Sticky header: `56px` mobile, `64px` desktop; konten diberi `scroll-margin-top`.
- Hero memakai `svh`, bukan `vh`.
- Padding horizontal halaman: `clamp(1.25rem, 4vw, 2rem)`.
- Section spacing: `clamp(3.5rem, 8vw, 6.5rem)`.
- Tombol & link utama minimal `44×44px`.
- Mobile menu: `overflow-y: auto; overscroll-behavior: contain;`.
- Safe area: `padding-bottom: env(safe-area-inset-bottom)` untuk footer/tombol fixed.

### 7.3 Per komponen

| Komponen        | Mobile                                                         |
| --------------- | -------------------------------------------------------------- |
| Header          | Wordmark kiri, theme + hamburger kanan; language pindah ke sheet. |
| Mobile menu     | Sheet penuh, link 48px, CTA CV di bawah, tutup via Escape.     |
| Hero            | Heading `clamp`, CTA stack full-width, tanpa `85vh`.           |
| Work card       | Feature: gambar di atas, konten di bawah. Default: 1 kolom.     |
| Work anchor     | Horizontal scroll, `scrollbar-width: none`, snap.              |
| Case study      | Gambar 16:10, judul 2xl, metadata stack, metric 2 kolom.       |
| Timeline        | Garis + dot 12px, padding kiri 24px.                            |
| Footer          | Stack 1 kolom, link 44px, copyright di akhir.                   |
| CV              | Padding 16px, toolbar 56px, font 14px, tanpa overflow.         |
| Back-to-top     | Hapus; footer sudah menyediakan navigasi.                      |

---

## 8. Struktur File Target

### 8.0 Konvensi penamaan

**Semua nama file dan folder source wajib kebab-case.** Ini berlaku untuk komponen, halaman, hook, util, tipe, dan dokumen.

| Jenis                | Format              | Contoh                                              |
| -------------------- | ------------------- | --------------------------------------------------- |
| Komponen React       | `kebab-case.tsx`    | `site-header.tsx`, `work-card.tsx`                  |
| Halaman App Router   | `kebab-case`        | `privacy-policy/`, `[slug]/`                        |
| Hook                 | `use-kebab-case.ts` | `use-dark-mode.ts`, `use-scroll-position.ts`        |
| Util / lib           | `kebab-case.ts`     | `get-work.ts`, `format-date.ts`                     |
| Tipe                 | `kebab-case.ts`     | `work.ts`, `site-config.ts`                         |
| Data / config        | `kebab-case.json`   | `site-config.json`, `work.json`                     |
| Dokumen              | `kebab-case.md`     | `redesign-plan.md`, `release-notes.md`              |
| Aset gambar          | `kebab-case.ext`    | `dkmcakes.jpg`, `og.png`, `github-black.svg`        |

Aturan tambahan:

- Nama **symbol/export** tetap mengikuti konvensi React: komponen `PascalCase` (`SiteHeader`), hook `camelCase` (`useDarkMode`). Yang di-kebab-case hanya **nama file**.
- Tidak ada nama file yang mengandung spasi, underscore, atau huruf kapital.
- Satu komponen utama per file; hindari `index.tsx` barrel baru kecuali untuk aset (`src/assets/index.ts`).
- File lama yang dipertahankan wajib di-rename di Phase 1, bukan dibiarkan bercampur.

```
src/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── work/page.tsx
│   │   ├── work/[slug]/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── services/page.tsx
│   │   └── privacy-policy/
│   │       ├── page.tsx
│   │       └── tapscan/page.tsx
│   ├── (print)/
│   │   └── cv/{layout,page}.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── icon.svg
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── brand/
│   │   ├── wordmark.tsx
│   │   └── monogram.tsx
│   ├── layout/
│   │   ├── site-header.tsx
│   │   ├── mobile-menu.tsx
│   │   ├── site-footer.tsx
│   │   ├── theme-toggle.tsx
│   │   └── language-toggle.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   ├── section.tsx
│   │   ├── section-heading.tsx
│   │   ├── tag-list.tsx
│   │   ├── prose.tsx
│   │   └── social-links.tsx
│   ├── work/
│   │   ├── work-card.tsx
│   │   ├── work-list.tsx
│   │   ├── work-anchor-nav.tsx
│   │   ├── case-study-layout.tsx
│   │   └── metric.tsx
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── selected-work.tsx
│   │   ├── about-strip.tsx
│   │   └── contact-cta.tsx
│   └── pages/                      # konten halaman yang tetap client (i18n)
│       ├── about-page-content.tsx
│       ├── experience-page-content.tsx
│       ├── contact-page-content.tsx
│       ├── services-page-content.tsx
│       ├── privacy-policy-page-content.tsx
│       └── tapscan-privacy-policy-page-content.tsx
├── hooks/
│   ├── use-dark-mode.ts
│   └── use-scroll-position.ts
├── lib/
│   ├── get-work.ts
│   ├── i18n.tsx
│   └── utils.ts
└── types/
    └── work.ts
```

> Catatan: `not-found.tsx` di root tidak lagi mendapat shell situs. Buat versi minimal berisi pesan + link "Back home" (tanpa header/footer), atau tambahkan `(site)/not-found.tsx` untuk 404 di dalam situs.
>
> Dokumen brand guideline disimpan di root sebagai `brand-guidelines.md` (kebab-case, sesuai §8.0).

### 8.1 File yang dihapus

- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Experience.tsx`
- `src/components/Projects.tsx`
- `src/components/Contact.tsx`
- `src/components/LocalBusiness.tsx`
- `src/components/Navbar.tsx` (diganti `layout/site-header.tsx`)
- `src/components/Footer.tsx` (diganti `layout/site-footer.tsx`)
- `src/components/BackToTopButton.tsx`
- `src/components/LanguageToggle.tsx` (pindah ke `layout/`)
- `src/components/ui/ProjectCard.tsx`
- `src/components/ui/SectionHeader.tsx`
- `src/components/ui/TechBadge.tsx`
- `src/components/ui/BulletList.tsx` (diganti list biasa)
- `src/components/ui/tech-stack.tsx` (diganti `tag-list.tsx`)
- `src/components/pages/work-detail-templates.tsx`
- `src/components/home/featured-case-study.tsx`
- `src/components/home/philosophy.tsx`
- `src/components/work/case-study-hero.tsx`
- `src/components/work/case-study-results.tsx`
- `src/components/work/case-study-cta.tsx`
- `src/components/work/work-filter.tsx`
- `src/components/work/work-page-client.tsx`
- `src/components/pages/work-page-header.tsx`

> Sebelum menghapus, jalankan `grep` ulang untuk memastikan tidak ada import tersisa.

### 8.2 File yang digabung / di-refactor

| Sekarang                                   | Menjadi                                      |
| ------------------------------------------ | -------------------------------------------- |
| `Tier1Card` + `Tier2Card` + `Tier3Card`    | `WorkCard` dengan `variant`                  |
| `Tier1Template` + `Tier2Template`          | `CaseStudyLayout` dengan blok kondisional    |
| `FeaturedCaseStudy` + `Projects`           | `SelectedWork` (home)                        |
| `Philosophy` + `AboutPageContent` intro    | `AboutStrip` (home) + About page             |
| `SocialLinks` dengan 3 mode                | `SocialLinks` dengan `variant` + data config |
| `MetricStat` count-up                      | `Metric` statis                              |
| `TF.` inline text di Navbar/Footer         | `Wordmark` / `Monogram` di `components/brand/` |

---

## 9. Rencana Eksekusi per Fase

> Kerjakan berurutan. Jangan lanjut sebelum acceptance criteria fase sebelumnya terpenuhi.

### Phase 0 — Baseline & Guardrail

- [ ] Buat branch `redesign/v2`. — **blocked:** ref `redesign` sudah ada, branch `redesign/v2` tidak bisa dibuat; pekerjaan dilakukan di `main`.
- [x] Jalankan `bun install` dan `bun run build` untuk memastikan baseline hijau.
- [ ] Simpan screenshot baseline di 320/375/768/1024/1440 untuk Home, Work, Work detail, About, Contact, CV.
- [ ] Catat Lighthouse mobile baseline (Performance, A11y, BP, SEO).
- [x] Catat daftar route aktif dan semua internal link.
- [x] Buat daftar komponen yang benar-benar dipakai (`grep` import).

**Acceptance:** build sukses, baseline screenshot & Lighthouse tersimpan, daftar file mati terverifikasi.

### Phase 1 — Prune & Restructure

- [x] Hapus semua file di §8.1 setelah verifikasi tidak ada import.
- [x] **Rename seluruh file yang dipertahankan ke kebab-case** dan update semua import:
  - `components/LanguageToggle.tsx` → `components/layout/language-toggle.tsx`
  - `components/ui/SocialLinks.tsx` → `components/ui/social-links.tsx`
  - `components/ui/Prose.tsx` → `components/ui/prose.tsx`
  - `hooks/useDarkMode.ts` → `hooks/use-dark-mode.ts`
  - `hooks/useScrollPosition.ts` → `hooks/use-scroll-position.ts`
  - File `components/pages/*` dan `components/home/*` sudah kebab-case — verifikasi saja.
- [x] Buat route group `(site)` dan `(print)`.
- [x] Pindahkan Navbar/Footer ke layout `(site)` (nama file baru: `site-header.tsx`, `site-footer.tsx`).
- [x] Buat `(print)/cv/layout.tsx`, hapus hack `<style>` di CV.
- [x] Pastikan semua URL tetap sama.
- [x] Update import path yang terkena pemindahan/rename.
- [x] Jalankan `grep -R` untuk memastikan tidak ada import ke nama file lama (PascalCase/camelCase).

**Acceptance:** `bun run build` sukses; semua route lama masih 200; CV tidak lagi menyembunyikan header lewat selector global; `src/components` hanya berisi file terpakai; **tidak ada nama file berhuruf kapital/underscore/camelCase tersisa** (kecuali file konfigurasi root seperti `README.md`).

### Phase 2 — Brand Foundation, Tokens & Primitives

- [x] Finalkan arah brand "Engineered clarity" dan tulis `brand-guidelines.md` (logo, warna, tipografi, do/don't).
- [x] Ganti font: tambah `Geist_Mono`, hapus `Newsreader` dari `layout.tsx`; update `--font-sans` / `--font-mono`.
- [x] Tulis ulang token warna di `globals.css` (§4.2); ubah mapping `@theme` ke `var(--x)`.
- [x] Hapus `--teal`, `--chart-*`, token tak terpakai; rename `text-teal` → `text-accent`.
- [x] Terapkan fluid type & spacing (§4.3–4.4).
- [x] Buat `Wordmark` + `Monogram`, `icon.svg`, hapus/arsipkan `favicon.ico` lama, dan update `theme-color` metadata.
- [x] Buat `Container`, `Section`, `SectionHeading`, `Button`, `TagList`, `Prose`, `SocialLinks`.
- [x] Ganti default theme agar mengikuti sistem (§4.7).
- [x] Hapus animasi yang tidak dipakai (`count-up`, `pulse-glow`, `dot-pulse`, `animate-scale-in` jika tak perlu).
- [ ] (Opsional) buat `/style-preview` internal untuk review token & primitif; hapus sebelum Phase 8.

**Acceptance:** tidak ada `text-teal`/`--teal`/Newsreader tersisa; tidak ada token mati; komponen wordmark & monogram siap dipakai dan tampil di `/style-preview`; `brand-guidelines.md` ada; struktur layout belum berubah tapi warna/font sudah memakai brand baru; build sukses; kontras AA light & dark.

### Phase 3 — Shell: Header, Mobile Menu, Footer

- [x] Buat `SiteHeader` desktop: `Wordmark`, 5 link, language, theme, tombol CV.
- [x] Gunakan `Monogram` (`tf.`) di mobile dan favicon.
- [x] Tampilkan nav desktop hanya di `lg`.
- [x] Buat `MobileMenu`: sheet, scroll lock, Escape, focus trap, close on route change.
- [x] Buat `SiteFooter` 4 kolom → stack mobile, dengan wordmark besar sebagai brand moment.
- [x] Hapus `BackToTopButton`.
- [x] Tambahkan skip link yang tetap berfungsi.
- [x] Terapkan safe-area dan `scroll-margin-top`.

**Acceptance:** di 320px nav tidak overflow; wordmark desktop dan monogram mobile tampil benar; menu bisa ditutup dengan Escape dan klik luar; fokus tidak keluar sheet; semua link punya tap target ≥44px; tidak ada layout shift saat membuka menu.

### Phase 4 — Home

- [x] Tambah field `featured?: boolean` di schema `WorkItem` dan `work.json`.
- [x] Tandai DKM Cakes & EmasAji sebagai featured.
- [x] Buat `getFeaturedWork()` mengembalikan item ber-flag, fallback ke tier 1 pertama.
- [x] Implementasi `Hero`, `SelectedWork`, `AboutStrip`, `ContactCTA`.
- [x] Terapkan label section bertingkat (`00 / SOFTWARE ENGINEER`, `01 / SELECTED WORK`, dst.) dan status mono `[● OPEN TO FULL-TIME]`.
- [x] Hapus `Philosophy` dan `FeaturedCaseStudy` lama.
- [x] Gunakan `svh` dan CTA full-width di mobile.

**Acceptance:** Home menampilkan 2 case study tier 1 (bukan Halal MUI); total section maksimal 4; tidak ada horizontal scroll di 320px; LCP image hero/selected work tidak memblokir.

### Phase 5 — Work Listing & Detail

- [x] Implementasi `WorkCard` dengan 3 varian.
- [x] Implementasi `WorkAnchorNav` (anchor chips, sticky, horizontal scroll).
- [x] Render section per tier dengan heading + count.
- [x] Buat cover tipografis untuk project tanpa gambar; hapus pemakaian `placeholder.svg` berulang.
- [x] Implementasi `CaseStudyLayout` tunggal.
- [x] Ganti `MetricStat` dengan `Metric` statis dan format nilai dengan benar.
- [x] Hapus template & filter lama.

**Acceptance:** `/work` punya satu mekanisme navigasi; 24 project tampil; `/work/dkm-cakes` & `/work/emasaji` lengkap; nilai `~200` dan `83.762` tampil benar; tier 2 tetap punya halaman detail.

### Phase 6 — About, Experience, Contact, Services, CV

- [x] Ringkas About menjadi 3 paragraf + 3 blok toolbox.
- [x] Rapikan timeline Experience, hapus pulse.
- [x] Sederhanakan Contact.
- [x] Ringkas Services + demote ke footer + canonical.
- [x] Reskin CV untuk mobile & print; pastikan toolbar tidak menutupi konten.
- [x] Update `sitemap.ts` (dan canonical Services bila perlu).

**Acceptance:** semua halaman terisi konten final, tidak ada placeholder, tidak ada pill warna-warni, CV bisa dicetak 1–2 halaman tanpa terpotong.

### Phase 7 — Responsive, A11y & Performance QA

- [x] Uji semua halaman di §10.2.
- [x] Perbaiki overflow, tap target, dan urutan heading.
- [x] Audit kontras light/dark (axe atau Lighthouse).
- [x] Audit konsistensi brand: wordmark, accent, mono label, index, radius, dan spacing di semua halaman.
- [x] Pastikan `prefers-reduced-motion` benar-benar mematikan animasi.
- [x] Audit keyboard: skip link, menu, card, CTA.
- [x] Kurangi JS: pastikan tidak ada komponen client baru yang tidak perlu.
- [x] Cek font payload & image sizes.
- [x] Hapus `/style-preview` jika dibuat di Phase 2.

**Acceptance:** checklist §10 lolos; tidak ada elemen yang masih memakai brand lama (serif/oranye/pill); Lighthouse mobile memenuhi target §1.2.

### Phase 8 — SEO, Deploy & Final Review

- [x] Sentralisasi metadata helper (`lib/metadata.ts`) untuk title/description/OG/Twitter.
- [x] Regenerate `public/og.png` dengan brand baru (wordmark, accent, tipografi).
- [x] Pastikan `icon.svg`, `theme-color`, dan favicon memakai brand baru.
- [x] Pastikan setiap route punya canonical & OG image valid.
- [x] Update JSON-LD jika perlu (Person, WebSite, Breadcrumb).
- [x] Verifikasi `output: "export"` + `images.unoptimized` tetap jalan di GitHub Pages.
- [ ] Deploy preview, cek semua link & gambar.
- [ ] Bandingkan dengan baseline screenshot.

**Acceptance:** tidak ada broken link/gambar, sitemap valid, deploy sukses, semua target §1.2 terpenuhi.

---

## 10. QA Checklist

### 10.1 Fungsional

- [x] Semua route dapat diakses dan tidak 404.
- [x] Semua link internal mengarah ke route yang ada.
- [x] Semua gambar punya `alt` dan tidak broken.
- [x] Language toggle tidak menyebabkan hydration error.
- [x] Theme toggle tersimpan setelah reload.
- [x] CV print menghasilkan layout rapi.
- [x] `next build` dan preview static sukses.

### 10.2 Responsive

- [x] 320px: tidak ada horizontal scroll, tidak ada teks terpotong.
- [x] 375px & 390px: CTA tidak bertumpuk aneh, gambar proporsional.
- [x] 768px: nav masih hamburger, grid 2 kolom rapi.
- [x] 1024px: nav desktop tampil tanpa wrap.
- [x] 1440px: container tidak terlalu lebar, whitespace seimbang.
- [x] Landscape mobile (667×375): hero tidak terpotong.
- [x] Zoom 200%: layout tetap terbaca.

### 10.3 Aksesibilitas

- [x] Skip link berfungsi.
- [x] Focus visible di semua elemen interaktif.
- [x] Mobile menu: Escape, focus trap, `aria-expanded`, `aria-controls`.
- [x] Urutan heading logis (satu `h1` per halaman).
- [x] Kontras teks ≥4.5:1 (AA) di light & dark.
- [x] `prefers-reduced-motion` mematikan transform/animasi.
- [x] Semua ikon dekoratif `aria-hidden`.
- [x] Form/email link punya label jelas.

### 10.4 Performance budgets

| Metrik                    | Target        |
| ------------------------- | ------------- |
| LCP (mobile)              | < 2.5s        |
| CLS                       | < 0.1         |
| INP                       | < 200ms       |
| Lighthouse Performance    | ≥ 90          |
| Lighthouse Accessibility  | ≥ 95          |
| Lighthouse Best Practices | ≥ 95          |
| Lighthouse SEO            | ≥ 95          |
| Font files                | ≤ 4 total     |
| Client JS baru            | Tidak ada     |

### 10.5 Brand consistency

- [x] Wordmark memakai `taufan fatahillah.` (desktop) / `tf.` (mobile), tidak diregangkan atau diubah warnanya.
- [x] Hanya satu accent ultramarine per viewport; tidak ada oranye/serif sisa brand lama.
- [x] Label section memakai mono, uppercase, tracking konsisten, dan index berurutan.
- [x] Angka metrik memakai Geist Mono + `tabular-nums`.
- [x] Radius konsisten: 6px control/tag, 8px card/gambar; tidak ada pill tombol.
- [x] Card memakai border, bukan shadow; shadow hanya header/menu.
- [x] Cover tipografis dipakai untuk project tanpa screenshot.
- [x] `og.png`, `icon.svg`, dan `theme-color` sudah brand baru.
- [x] `brand-guidelines.md` diperbarui jika ada pengecualian.

---

## 11. Risiko & Keputusan

### 11.1 Keputusan yang perlu dikonfirmasi user

| #   | Keputusan                                           | Rekomendasi                                                                 |
| --- | --------------------------------------------------- | --------------------------------------------------------------------------- |
| 1   | Hapus `/services` dari nav utama?                    | Ya. Tetap simpan route untuk link lama, ringkas konten, muncul di footer.    |
| 2   | Default theme light atau dark?                       | Ikuti sistem; fallback light. Lebih netral untuk first impression.           |
| 3   | Hapus count-up metric?                               | Ya. Statis lebih akurat, lebih cepat, dan tidak perlu animasi.               |
| 4   | Featured work: DKM + EmasAji atau DKM + TapScan?     | DKM + EmasAji (tier 1, bukti client work).                                   |
| 5   | Bahasa utama dokumen & UI?                           | EN default, ID tetap tersedia lewat toggle (tidak diubah di redesign ini).   |
| 6   | Arah brand refresh final?                            | "Engineered clarity": Geist + Geist Mono, cool paper + ink, accent ultramarine; drop serif & oranye. |
| 7   | Accent utama: ultramarine atau tetap hangat?         | Ultramarine `#2B3BFF` (light) / `#9AA4FF` (dark). Paling fresh & technical.   |

### 11.2 Risiko

| Risiko                                          | Mitigasi                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------ |
| Link lama ke `/services` rusak                  | Pertahankan route + canonical; jangan hapus halaman.                     |
| Redesign merusak SEO akibat konten client-side   | Tidak mengubah arsitektur i18n di fase ini; semua section tetap SSR.     |
| Placeholder gambar hilang setelah cleanup        | Ganti dengan cover tipografis sebelum menghapus aset.                    |
| Perubahan token menyebabkan kontras gagal        | Audit axe/Lighthouse setelah Phase 2 dan Phase 7.                        |
| Route group mengubah URL                         | Route group tidak memengaruhi URL; verifikasi di Phase 1.                |
| Brand baru terasa generik / mirip template        | Wajibkan signature: index mono, hairline, wordmark dot, cover tipografis. |
| Accent ultramarine terlalu dominan               | Batasi ke status/link/metrik/CTA; audit per halaman.                     |
| Ganti font menyebabkan layout shift              | `next/font` + `display: swap`, ukur CLS setelah Phase 2.                 |
| Scope creep (menambah fitur)                     | Patuhi non-goals §1.3; fitur baru masuk backlog terpisah.                |

---

## 12. Definisi Selesai (Overall)

Redesign dianggap selesai jika:

1. Semua fase 0–8 memenuhi acceptance criteria.
2. Home, Work, Work detail, About, Experience, Contact, CV tampil konsisten di light/dark dan di 320–1440px.
3. Tidak ada komponen mati, token menyesatkan, atau template duplikat.
4. Navigasi utama maksimal 5 link + CV.
5. Mobile menu memenuhi standar aksesibilitas (Escape, focus trap, scroll lock).
6. **Brand baru diterapkan konsisten**: wordmark, monogram, palet ultramarine, Geist + Geist Mono, section index, hairline, dan cover tipografis.
7. **Tidak ada sisa brand lama** (Newsreader, accent oranye, pill warna-warni, shadow tebal).
8. Lighthouse mobile memenuhi target §1.2.
9. Static export berhasil dan situs live tanpa broken link/gambar.
10. **Seluruh nama file & folder source menggunakan kebab-case** (komponen, hook, util, tipe, data, dokumen).
11. `redesign-plan.md` ini bisa dijadikan checklist akhir — semua item tercentang.

---

## 13. Estimasi Effort

| Fase | Fokus                              | Estimasi |
| ---- | ---------------------------------- | -------- |
| 0    | Baseline & guardrail               | 0.5 hari |
| 1    | Prune & restructure                | 1 hari   |
| 2    | Brand, tokens & primitives         | 2 hari   |
| 3    | Header, mobile menu, footer        | 1.5 hari |
| 4    | Home                               | 1 hari   |
| 5    | Work listing & detail              | 2 hari   |
| 6    | About, Experience, Contact, CV     | 1.5 hari |
| 7    | Responsive, a11y, performance      | 2 hari   |
| 8    | SEO & deploy                       | 1 hari   |
|      | **Total**                          | **~12.5 hari** |

> Fase 2, 3, dan 5 adalah prioritas kualitas tertinggi: brand foundation, pengalaman mobile, dan halaman bukti utama (case study).

---

## 14. Status Eksekusi

Terakhir diperbarui: 2026-11-15.

**Selesai & terverifikasi otomatis**

- Phase 1–6 dieksekusi: route group `(site)`/`(print)`, seluruh file source kebab-case, komponen mati dihapus, brand & primitives baru, shell baru, Home/Work/Detail/About/Experience/Contact/Services/CV ditulis ulang.
- `npx tsc --noEmit` bersih; `bun run build` sukses (38 static pages) dan `out/` tetap kompatibel GitHub Pages.
- Audit output HTML: setiap halaman punya tepat satu `h1`, canonical, dan `og:image`; tidak ada raw i18n key; tidak ada link internal atau aset yang hilang.
- `public/og.png` diregenerasi dengan brand baru; `src/app/icon.svg` dan `theme-color` sudah brand baru.
- `brand-guidelines.md` dibuat di root; `lib/metadata.ts` dipakai seluruh route.
- Nilai metrik `~200`, `83.762`, `10+`, dan `Driving School` tampil benar tanpa count-up.
- Home menampilkan DKM Cakes + EmasAji; `placeholder.svg` tidak lagi dipakai sebagai cover card.
- Services diringkas menjadi intro + 3 benefit + CTA, keluar dari nav utama, tetap ada di footer.
- Responsive diuji via Edge CDP pada 320/375/768/1024/1440px plus landscape 667x375 dan zoom 200% (640px): `scrollWidth === innerWidth`, tanpa elemen overflow, satu `h1` per halaman.
- Kontras AA terverifikasi di light & dark (fg 17.69/17.72, muted 5.88/7.49, accent 6.05/8.53).
- Interaksi terverifikasi: theme toggle (`.dark` + `localStorage`), mobile menu (focus trap, Escape, scroll lock, `aria-expanded`), skip link, dan focus visible.
- CV print menghasilkan **2 halaman** dengan toolbar tersembunyi, margin 12mm, tanpa item terpotong, dan tidak ada overflow horizontal.
- Hero memakai padding lebih rapat pada viewport pendek (`max-height: 480px`) agar headline tetap utuh di landscape mobile.

**Belum diverifikasi di plan ini**

- Screenshot baseline formal dan Lighthouse mobile (butuh Lighthouse/CI; audit manual via Edge CDP sudah dilakukan).
- Deploy preview ke GitHub Pages.
