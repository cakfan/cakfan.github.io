# Brand Guidelines — Engineered clarity

> **Project:** `cakfan.github.io` — portfolio of Taufan Fatahillah
> **Versi:** 2.0 (brand refresh)
> **Dokumen terkait:** `redesign-plan.md` (§4) — sumber keputusan brand.

---

## 1. Konsep

Portfolio terasa seperti **dokumen teknis yang rapi**, bukan template SaaS: grid presisi, tipografi grotesk, label mono, satu warna sinyal, whitespace besar, dan detail kecil yang konsisten.

**Attributes:** precise · calm · capable · human
**Anti-attributes:** playful · corporate · dekoratif · luxury

**Positioning:** software engineer yang membangun software yang benar-benar bekerja — web, mobile, dan API.

---

## 2. Logo & Wordmark

Identitas terdiri dari tiga bagian yang tidak boleh saling menggantikan:

| Bagian   | Bentuk                                              | Peran                        |
| -------- | --------------------------------------------------- | ---------------------------- |
| **Mark** | huruf `t` geometris + satu titik kotak di baseline  | ikon, avatar, favicon        |
| **Wordmark** | `taufan fatahillah` + titik kotak               | nama, header, OG             |
| **Handle** | `@withcakfan` mono + titik kotak opsional         | alamat, credit, footer       |

**Konteks pemakaian**

| Konteks          | Bentuk                                   | Implementasi                          |
| ---------------- | ---------------------------------------- | ------------------------------------- |
| Header ≥ `sm`    | lockup (mark + wordmark)                 | `components/brand/lockup.tsx`         |
| Header < `sm`    | mark 28 px                               | `components/brand/mark.tsx`           |
| Footer           | mark 32 px di atas wordmark + handle     | `Wordmark`, `Mark`, `Handle`          |
| Favicon          | mark paper di atas tile ink, 32×32       | `src/app/icon.svg`                    |
| Apple icon       | tile ink penuh, 180×180                  | `src/app/apple-icon.png`              |
| Avatar           | mark compact di tile ink                 | `public/brand/social/avatar-ink-1024.png` |
| OG / sosial      | stacked lockup                           | `public/og.png`, `public/brand/social/` |

**Anatomi mark** (grid 32, stroke 3, `stroke-linecap: square`)

```svg
<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
  <path d="M12 7V18.5C12 22 14.5 24 17.5 24" />   <!-- batang + kaki lengkung -->
  <path d="M8 13H18.5" />                          <!-- palang -->
</g>
<rect x="21" y="19.5" width="5" height="5" fill="currentColor" /> <!-- titik -->
```

Kaki lengkung dipakai agar bentuknya terbaca sebagai `t` dan tidak terbaca sebagai salib. Titik duduk di baseline, sejajar ujung kaki.

**Aturan mark**

- Batang dan palang selalu `currentColor`. Titik selalu accent (`#2B3BFF` / `#9AA4FF`).
- Ukuran minimum `16 px`. Di bawah itu pakai titik compact (`5.5 × 5.5`) atau jangan pakai mark sama sekali.
- Clear space minimal satu titik di semua sisi; jangan menempelkan mark ke tepi container.
- Di dalam lockup, titik mark memakai `currentColor` — accent hanya di wordmark.
- Jangan memutar, memiringkan, memberi outline, atau memecah mark menjadi beberapa warna.

**Aturan wordmark**

- Selalu lowercase. Jangan menulis `TF`, `Taufan F.`, atau `TAUFAN FATAHILLAH`.
- Geist 600, tracking `-0.035em`.
- Titik penutup adalah **kotak** (`0.16em`, gap `0.07em`), bukan glyph `.` — ukurannya tidak ikut font.
- Titik wordmark memakai accent bila tidak ada accent lain dalam komposisi; jika ada kotak sudut, pakai `currentColor`.
- Jangan menambahkan serif, outline, gradient, shadow, atau rotasi.

---

## 3. Warna

Satu palet cool-neutral + satu accent ultramarine. Tidak ada warna kedua untuk kategori atau tag.

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

**Aturan pemakaian accent**

Gunakan `text-accent` / `bg-accent` hanya untuk:

1. Nomor index section (`01`, `02`, …)
2. Link hover dan focus ring
3. Angka metrik dan status dot
4. Satu CTA primer per section

Jangan memakai accent untuk: heading besar, body text, border massal, background section, atau tag.

- Accent light `#2B3BFF` di atas `#F4F5F1` lolos WCAG AA untuk teks normal.
- Di dark mode gunakan `#9AA4FF`; jangan menurunkan opacity accent hingga di bawah 4.5:1.
- Tidak ada gradient dekoratif, glow, glassmorphism, atau warna kedua.

---

## 4. Tipografi

| Peran          | Font       | Weight | Ukuran / Catatan                     |
| -------------- | ---------- | ------ | ------------------------------------ |
| Display        | Geist      | 600    | `text-display` — `clamp(2.75rem, 7vw, 5.25rem)` |
| Heading 1      | Geist      | 600    | `text-h1` — `clamp(2rem, 4.5vw, 3.25rem)`       |
| Heading 2      | Geist      | 600    | `text-h2` — `clamp(1.5rem, 3vw, 2.25rem)`       |
| Heading 3      | Geist      | 600    | `text-h3` — `clamp(1.125rem, 2vw, 1.375rem)`    |
| Body           | Geist      | 400    | `1rem` / `1.65`, maksimal `68ch`     |
| Label / meta   | Geist Mono | 500    | `.label-mono` — 11px, tracking `0.14em` |
| Angka / metrik | Geist Mono | 500    | `tabular-nums`                       |

**Aturan**

- Heading memakai **sentence case**, bukan Title Case.
- Maksimal dua ukuran heading per section.
- Jangan memakai `font-bold` (700); gunakan 500/600.
- Mono hanya untuk label, index, metadata, dan angka — bukan body panjang.
- Label section: `label-mono text-muted-foreground`, accent hanya pada nomor.
- Body: `text-pretty`; heading: `text-balance`.

---

## 5. Spacing, Container, Radius

- Container: `container-section` — max `76rem`, padding `1.25rem → 1.5rem → 2rem`.
- Section rhythm: `.section-padding` — `clamp(3.5rem, 7vw, 6rem)`.
- Skala spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
- Lebar baca paragraf: `60–72ch` (praktik: `max-w-[68ch]`).
- Radius: `rounded-control` (6px) untuk tombol/tag, `rounded-card` (8px) untuk card/gambar.
- Tidak ada `rounded-full` kecuali status dot.
- Shadow hanya `shadow-sm` untuk header/menu; card memakai border.

---

## 6. Tombol

| Varian      | Style                                                       | Pemakaian       |
| ----------- | ----------------------------------------------------------- | --------------- |
| `primary`   | `bg-accent text-accent-foreground`                          | CTA utama       |
| `secondary` | `border border-border`, hover `bg-muted`                    | CTA sekunder    |
| `ghost`     | tanpa border, hover `bg-muted`                              | link aksi kecil |

- Ukuran: `sm` 36px (desktop), `md` 44px (default, wajib di mobile).
- Ikon 16px, gap 8px.
- Fokus: `outline-2 outline-offset-2 outline-accent`.
- Hover: perubahan warna/opacity 8–10%, tanpa `scale`.

---

## 7. Motion

- Durasi 180–220ms, `ease-out`.
- Hover image zoom hanya di `@media (hover: hover)`.
- Tidak ada `animate-pulse`, count-up, parallax, tilt 3D, atau animasi dekoratif.
- `prefers-reduced-motion` mematikan seluruh transform & animasi.
- View Transition hanya untuk gambar work → detail.

---

## 8. Imagery

- Screenshot asli dengan rasio konsisten (`16:10`, hero detail `16:9`).
- Project tanpa screenshot memakai **cover tipografis** (nama + index + accent line), bukan `placeholder.svg` berulang.
- Jangan memakai mockup device, stock photo, ilustrasi AI generik, atau gradient blob.
- Semua gambar wajib punya `alt`; gambar dekoratif `aria-hidden`.

---

## 9. Do / Don't

| Do                                                | Don't                                               |
| ------------------------------------------------- | --------------------------------------------------- |
| Satu accent per viewport                          | Dua accent atau gradient warna-warni                |
| Mono hanya untuk label, index, metadata, angka    | Mono untuk body paragraf panjang                    |
| Heading sentence case, tracking rapat             | Title Case, serif, italic dekoratif                 |
| Hairline, border, dan grid sebagai struktur       | Glassmorphism, glow, shadow tebal                   |
| Screenshot asli dengan rasio konsisten            | Mockup device, stock photo, placeholder berulang    |
| Cover tipografis untuk project tanpa gambar       | Ilustrasi AI generik / gradient blob                |
| Whitespace besar dan ritme section yang konsisten | Semua section `py-20` seragam tanpa hierarki        |
| Satu CTA primer per section                       | Banyak tombol bersaing di area yang sama            |
| Motion fungsional 180–220ms                       | Animasi dekoratif, parallax, tilt 3D                |

---

## 10. Handle `@withcakfan`

Handle adalah **alamat**, bukan hiasan. Karena itu ia selalu mono: lebar seragam, tidak bisa disalahbaca, dan tidak menyamar sebagai judul. `cakfan` tetap hidup sebagai URL/repo, tetapi tidak pernah tampil sebagai elemen visual.

| Properti        | Nilai                                             |
| --------------- | ------------------------------------------------- |
| Teks            | `@withcakfan` — lowercase, tanpa spasi             |
| Font            | Geist Mono 500                                    |
| Tracking        | `0.14em` (positif)                                |
| Kotak titik     | `0.16em`, gap `0.12em`, duduk di baseline         |
| Ukuran minimum  | `10 px`                                           |
| Ukuran sasaran  | `14 px` (web), `20 px` (credit bar), `28 px` (OG) |
| Lebar terhitung | ± `8.2em` — cukup untuk grid tanpa mengukur ulang |

**Varian**

| Varian        | Bentuk                             | Pakai                                     |
| ------------- | ---------------------------------- | ----------------------------------------- |
| **Signature** | `@withcakfan` + kotak accent       | footer web, end card, OG                  |
| **Plain**     | `@withcakfan` tanpa kotak          | caption, body, bio, credit line           |
| **Mono**      | semua `currentColor`, tanpa accent | di atas foto, print, CV                   |
| **Stack**     | mark di atas `@withcakfan`         | email signature, end card, cover IG       |

**Aturan**

- Kotak hanya di konteks tanda tangan (akhir komposisi). Di tengah kalimat, kotak berubah jadi tanda baca palsu — pakai plain.
- Signature hanya memasang kotak accent bila **tidak ada** accent lain. Jika mark atau kotak sudut sudah beraccent, pakai plain atau mono.
- Handle tidak boleh masuk ke dalam mark atau avatar.
- Di web, handle adalah tautan nyata dengan `rel="me"`.
- Di gambar, teks di-outline/raster. Di web, teks tetap teks asli agar bisa dicari dan dibaca screen reader.
- Jangan memakai font grotesk, italic, outline, dua warna, atau emoji pada handle.

**Credit line**

```
@withcakfan  │  cakfan.github.io
```

Pemisah hairline `1 × 12 px`, gap `12 px` kiri-kanan, URL Geist Mono 400 `muted-foreground`. Accent hanya satu kotak `4×4` di akhir baris (opsional) — bukan di handle.

---

## 11. Avatar & Aset Sosial

Avatar adalah logo yang paling sering dilihat dan paling jarang diperhatikan. Karena itu avatar adalah **varian resmi**, bukan foto yang dipotong.

**Varian**

| Varian            | Background | Mark       | Titik      | Pakai                                   |
| ----------------- | ---------- | ---------- | ---------- | --------------------------------------- |
| **Ink** (kanonik) | `#0C0E0D`  | `#F2F4EF`  | `#9AA4FF`  | semua platform, semua tema — default    |
| Paper             | `#F4F5F1`  | `#0C0E0D`  | `#2B3BFF`  | cetak, slide, email header              |
| Accent            | `#2B3BFF`  | `#FFFFFF`  | `#FFFFFF`  | kampanye saja — **bukan** avatar profil |
| Mono              | transparan | `currentColor` | `currentColor` | watermark, footer dokumen          |

**Geometri kanonik** (`1024 × 1024`, full-bleed tanpa radius)

```svg
<g transform="translate(83 109) scale(26)">
  <g fill="none" stroke="#F2F4EF" stroke-width="3" stroke-linecap="square">
    <path d="M12 7V18.5C12 22 14.5 24 17.5 24" />
    <path d="M8 13H18.5" />
  </g>
  <rect x="21" y="19.5" width="5.5" height="5.5" fill="#9AA4FF" />
</g>
```

Posisi digeser optis, bukan center matematis: massa batang ada di kiri dan titik di kanan-bawah, sehingga bounding box center ≠ pusat visual. Mark menempati ± 42% diameter lingkaran aman.

**Aturan**

- Avatar tidak memuat wordmark, URL, atau tagline — semuanya hilang di 32 px.
- Tidak memakai foto orang. Mark adalah tanda, bukan wajah.
- Jangan menambahkan ring/border; platform sudah memberi ring sendiri.
- Satu varian untuk semua platform — jangan campur ink dan paper.
- Harus aman di crop lingkaran **dan** kotak.

**Berkas** — lihat `public/brand/social/README.md` untuk ukuran, warna, dan cara ekspor.

---

## 12. Watermark & Template

Watermark adalah **kredit teknis**, bukan stempel: ada saat dicari, hilang saat tidak dicari.

**Tiga mode**

| Mode | Nama         | Bentuk                                      | Pakai                        |
| ---- | ------------ | ------------------------------------------- | ---------------------------- |
| W1   | Corner mark  | mark monokrom 34 px (+ handle plain 14 px)  | foto tunggal, story, reel    |
| W2   | Credit bar   | bar paper 84 px + mark + handle + kotak     | carousel, insight, dokumentasi |
| W3   | Cover lockup | stacked lockup di tengah bidang             | slide pertama/terakhir       |

**Ukuran (basis 1080)**

| Format        | Kanvas      | Mode           | Mark     | Inset        |
| ------------- | ----------- | -------------- | -------- | ------------ |
| Feed 4:5      | `1080×1350` | W1 kanan-bawah | `34 px`  | `64 px`      |
| Feed 1:1      | `1080×1080` | W1 kanan-bawah | `34 px`  | `64 px`      |
| Carousel      | `1080×1350` | W2 bawah       | `32 px`  | full-width   |
| Story / Reel  | `1080×1920` | W1 kiri-atas   | `40 px`  | `64 px`, `y=280` |
| Cover / end   | `1080×1350` | W3 tengah      | `96 px`  | margin `96 px` |
| OG / web      | `1200×630`  | W3 kiri        | `72 px`  | margin `72 px` |

**Warna per background**

| Background       | Mark      | Titik            | Opacity |
| ---------------- | --------- | ---------------- | ------- |
| Foto gelap/ramai | `#F4F5F1` | monokrom         | `90%`   |
| Foto terang      | `#0C0E0D` | monokrom         | `90%`   |
| Bidang paper     | ink       | accent `#2B3BFF` | `100%`  |
| Bidang ink       | paper     | accent `#9AA4FF` | `100%`  |

**Aturan**

- Satu watermark per gambar. Jangan menggabung W1 + W2.
- Accent tidak pernah dipakai di atas foto.
- Posisi identik di setiap slide dan sepanjang reel; tidak fade in/out.
- Jangan menaruh watermark di area bawah `320 px` atau kanan `120 px` (UI Story/Reel).
- Tanpa shadow, outline, blur, gradient, atau pola berulang.
- Wordmark penuh hanya di W3 — slide tengah memakai credit bar.

---

## 13. Referensi Implementasi

| Aset / aturan      | File                                      |
| ------------------ | ----------------------------------------- |
| Token warna & type | `src/app/globals.css`                     |
| Font & metadata    | `src/app/layout.tsx`                      |
| Mark               | `src/components/brand/mark.tsx`           |
| Lockup             | `src/components/brand/lockup.tsx`         |
| Wordmark           | `src/components/brand/wordmark.tsx`       |
| Handle             | `src/components/brand/handle.tsx`         |
| Favicon            | `src/app/icon.svg`                        |
| Apple icon         | `src/app/apple-icon.png`                  |
| Tombol             | `src/components/ui/button.tsx`            |
| Label mono         | `.label-mono` di `globals.css`            |
| Social card        | `public/og.png` + `public/brand/og-source.svg` |
| Avatar & template  | `public/brand/social/`                    |
