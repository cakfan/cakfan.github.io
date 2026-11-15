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

| Konteks        | Bentuk               | Implementasi                                |
| -------------- | -------------------- | ------------------------------------------- |
| Header desktop | `taufan fatahillah.` | `components/brand/wordmark.tsx`             |
| Header mobile  | `tf.`                | `components/brand/monogram.tsx`             |
| Footer         | `taufan fatahillah.` | `Wordmark` dengan `text-2xl`                |
| Favicon        | monogram `tf.`       | `src/app/icon.svg` (32×32, paper di atas ink) |

**Aturan**

- Selalu lowercase. Jangan menulis `TF`, `Taufan F.`, atau `TAUFAN FATAHILLAH`.
- Titik penutup selalu memakai **accent**, bukan warna teks.
- Weight 600, tracking rapat (`-0.03em` s.d. `-0.05em`).
- Clear space minimal setinggi huruf `x` di semua sisi.
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

## 10. Referensi Implementasi

| Aset / aturan      | File                                      |
| ------------------ | ----------------------------------------- |
| Token warna & type | `src/app/globals.css`                     |
| Font & metadata    | `src/app/layout.tsx`                      |
| Wordmark           | `src/components/brand/wordmark.tsx`       |
| Monogram           | `src/components/brand/monogram.tsx`       |
| Favicon            | `src/app/icon.svg`                        |
| Tombol             | `src/components/ui/button.tsx`            |
| Label mono         | `.label-mono` di `globals.css`            |
| Social card        | `public/og.png`                           |
