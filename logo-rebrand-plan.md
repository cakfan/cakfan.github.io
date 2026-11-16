# Logo Rebrand Plan — "Titik Akhir"

> **Project:** `cakfan.github.io` — portfolio of Taufan Fatahillah
> **Dokumen ini:** rencana rebrand logo + identitas: mark, wordmark, lockup, favicon, **handle `@withcakfan` sebagai aset visual**, **avatar sosial**, **watermark & template Instagram**, OG, dan aturan pemakaian.
> **Dokumen terkait:** `brand-guidelines.md` (§2 Logo & Wordmark), `redesign-plan.md` (§4 Brand Refresh).
> **Status:** rencana — belum ada aset yang diubah.
> **Prinsip kerja:** simple, clean, modern, dan **unik karena keputusan**, bukan karena dekorasi.

---

## 1. Ringkasan

Logo saat ini adalah **teks**: `taufan fatahillah.` dengan titik accent, dan monogram `tf.` untuk mobile. Tidak ada bentuk yang benar-benar dimiliki brand — semuanya bergantung pada font yang sedang dimuat.

Rebrand ini mengubah titik (`.`) dari **aksen tipografis** menjadi **identitas inti**:

> **Mark tidak lagi menempel pada teks. Titik menjadi mark.**

Hasil akhirnya: satu mark geometris (bingkai + titik kotak), satu wordmark dengan titik kotak yang identik, satu sistem lockup, satu favicon yang tidak bergantung font, satu **avatar yang dikenali di 32 px**, satu **watermark yang konsisten di setiap post**, dan satu filosofi yang bisa dijelaskan dalam satu kalimat.

### 1.1 Apa yang berubah

| Aspek          | Sekarang                                        | Setelah rebrand                                            |
| -------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| Mark           | tidak ada (hanya teks `tf.`)                    | bingkai + titik kotak, geometri 32×32                      |
| Wordmark       | Geist 600 + glyph `.` accent                    | Geist 600 + **kotak** accent (bukan glyph)                 |
| Titik          | bulat, ukuran mengikuti font                    | **kotak**, ukuran tetap, satu-satunya elemen accent        |
| Favicon        | `<text>` + font sistem                          | path murni, render identik di semua OS                     |
| Header mobile  | `tf.`                                           | mark saja                                                  |
| Header desktop | wordmark saja                                   | lockup: mark + wordmark                                    |
| **Handle**     | teks biasa, tidak konsisten (`cakfan` / `withcakfan`) | **`@withcakfan` sebagai aset visual** (mono + kotak) |
| **Avatar**     | tidak ada, tiap platform beda                   | satu avatar kanonik + varian optis untuk ≤48 px            |
| **Watermark**  | tidak konsisten / tidak ada                     | 3 mode (corner, credit bar, cover lockup) + aturan warna   |
| **Template IG**| bebas, tanpa grid                               | 3 template dengan grid 1080, mono label, credit bar        |
| Avatar/OG/CV   | tidak ada aset resmi                            | satu set varian resmi + folder aset                        |
| Aturan         | 5 baris di `brand-guidelines.md`                | konstruksi, clear space, min size, varian, sosial, do/don't |

### 1.2 Definisi sukses

**Logo & web**

- Mark terbaca sebagai `t` (atau minimal sebagai bentuk yang konsisten) pada **16×16 px**.
- Favicon punya bentuk **identik** di Windows, macOS, Android, dan iOS.
- Wordmark dan mark memakai **geometri titik yang sama** (bukan dua dot berbeda).
- Tidak ada glyph teks di dalam file logo mana pun.
- `next build` tetap sukses; tidak ada layout shift saat font swap.

**Sosial**

- Avatar tetap dikenali saat ditampilkan **32 px** di feed, dan tidak ada bagian yang terpotong saat crop lingkaran.
- Satu avatar yang sama dipakai di **6 platform** (Instagram, LinkedIn, GitHub, X, YouTube, WhatsApp).
- Tiga post berbeda diletakkan berdampingan → tetap terlihat **satu seri**.
- Watermark tidak pernah menutupi subjek, wajah, atau teks milik gambar.
- Semua aset sosial punya **file sumber** (SVG/design file), bukan hanya PNG jadi.

**Identitas**

- Semua elemen wajib di §4.5 (visual DNA) muncul di minimal satu touchpoint per halaman/post.
- `@withcakfan` muncul sebagai **aset visual** (mono + titik), bukan teks lepas, di setiap touchpoint publik.
- Handle dan penulisan nama konsisten di seluruh platform (§4.4).

---

## 2. Audit Logo Saat Ini

Temuan di bawah berasal dari kondisi repo saat dokumen ini dibuat.

| #   | File                                | Temuan                                                                                                                 | Dampak                                                              |
| --- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1   | `src/components/brand/monogram.tsx` | Monogram adalah dua huruf teks `tf` + glyph `.`                                                                        | Tidak ada bentuk yang bisa diingat; bentuk berubah bila font gagal dimuat |
| 2   | `src/components/brand/wordmark.tsx` | Titik memakai glyph `.` dari Geist                                                                                     | Posisi, ketebalan, dan diameter titik berubah mengikuti ukuran teks |
| 3   | `src/app/icon.svg`                  | Favicon memakai `<text>` + `font-family="ui-sans-serif, system-ui…"`                                                    | Render berbeda di tiap OS/browser; tidak konsisten dengan wordmark  |
| 4   | —                                   | Tidak ada logo mark, tidak ada file aset (SVG/PNG) untuk dipakai di luar web                                            | Avatar GitHub/LinkedIn, OG, CV, dan sertifikat memakai teks acak    |
| 5   | —                                   | Tidak ada clear space, minimum size, atau versi monokrom                                                               | Tidak ada aturan saat logo dipakai di konteks baru                  |
| 6   | `monogram.tsx`                      | `tf` + titik = tiga bentuk rapat pada satu ukuran kecil                                                                | Di 16 px, bentuknya menjadi noise, bukan monogram                   |
| 7   | —                                   | Titik accent sudah menjadi signature, tapi hanya sebagai efek samping tipografi                                        | Aset paling berharga dari brand justru belum dieksploitasi          |
| 8   | `content/site-config.json`          | Handle tidak konsisten: `cakfan` (web/GitHub/LinkedIn) vs `withcakfan` (Instagram)                                      | Sulit dicari, melemahkan identitas lintas platform → dikunci di §4.4 |
| 9   | —                                   | Tidak ada avatar resmi; foto/teks berbeda di tiap platform                                                              | Orang yang menemukan konten IG tidak bisa memverifikasi pemiliknya  |
| 10  | —                                   | Post IG tidak punya grid, label, atau watermark yang konsisten                                                          | Konten terasa lepas, tidak terakumulasi menjadi brand              |

**Kesimpulan audit:** masalahnya bukan "logo kurang bagus", tapi **logo belum ada**, dan identitasnya belum turun ke luar website. Rebrand harus mengubah titik itu menjadi bentuk yang bisa berdiri sendiri — lalu membawanya ke avatar dan setiap post.

---

## 3. Filosofi Brand

### 3.1 Kalimat inti

> **Titik akhir bukan tanda berhenti. Ia tanda bahwa sesuatu sudah selesai dengan benar.**

Software tidak bernilai karena ditulis, tetapi karena **bekerja**. Titik adalah tanda baca terkecil yang hanya boleh muncul ketika sebuah kalimat benar-benar selesai. Karena itu titik dipilih sebagai logo: ia adalah metafora paling ringkas untuk pekerjaan yang tuntas.

### 3.2 Tiga lapis makna

| Elemen     | Nama       | Makna                                                                | Perilaku visual                                  |
| ---------- | ---------- | -------------------------------------------------------------------- | ------------------------------------------------ |
| Persegi    | **Bingkai** | Ruang kerja: halaman, kanvas, frame yang menampung proses            | persegi tertutup, stroke seragam, sudut siku     |
| Kotak      | **Titik**  | Hasil: satu-satunya bagian berwarna, satu-satunya hal yang "selesai" | kotak accent, di pusat bingkai, tidak pernah dua |

Bingkai selalu memakai warna teks (`currentColor`). Titik selalu accent. Artinya: **proses itu netral, hasil itu yang diberi warna.** Tidak ada elemen lain yang boleh berwarna.

### 3.3 Bukan huruf, bukan inisial

Versi pertama mark ini memakai huruf `t`. Yang membatalkannya bukan selera, tetapi pengujian: pada 16–24 px bentuk itu terbaca sebagai **salib**, dan pada 48 px ke atas baru terlihat seperti huruf. Logo yang maknanya berubah tergantung ukuran adalah logo yang belum selesai.

Mark akhirnya melepas huruf sepenuhnya — **satu bingkai, satu titik**. Tidak ada inisial yang perlu ditebak, tidak ada asosiasi yang perlu diluruskan. Bingkai adalah halaman; titik adalah tanda bahwa halaman itu selesai. Satu kalimat, dua elemen.

### 3.4 Manifesto (dipakai di About, OG, dan dokumentasi)

1. Struktur dulu, dekorasi belakangan.
2. Satu bingkai, satu titik, satu warna.
3. Yang kecil harus tetap benar saat diperkecil.
4. Kalau tidak membantu memahami, itu bukan bagian dari logo.
5. Selesai lebih baik daripada mengesankan.

### 3.5 Atribut

**Adjectives:** precise · calm · capable · human
**Anti-adjectives:** playful · corporate · dekoratif · luxury

### 3.6 Nada visual

Logo ini harus terasa seperti **gambar teknik**, bukan seperti logo startup. Garis seragam, sudut siku, tanpa gradien, tanpa bayangan, tanpa huruf melengkung dekoratif. Kesan yang dituju: tenang, yakin, dan sedikit dingin — lalu dihangatkan oleh satu kotak accent.

---

## 4. Brand Identity Platform

Logo hanya pintu masuk. Bagian ini memastikan identitasnya tetap sama saat keluar dari website — di avatar, di caption, di carousel, di CV.

### 4.1 Platform brand

| Elemen       | Isi                                                                                     |
| ------------ | --------------------------------------------------------------------------------------- |
| **Purpose**  | Membuat pekerjaan engineer terasa selesai dan bisa dipercaya.                           |
| **Positioning** | Software engineer yang membangun software yang benar-benar bekerja — web, mobile, API. |
| **Promise**  | "Kalau saya kirim, ia bekerja."                                                          |
| **Personality** | precise · calm · capable · human                                                      |
| **Enemy**    | Dekorasi tanpa alasan, klaim tanpa bukti, istilah tanpa isi.                             |
| **Provenance** | Satu orang, satu standar, satu titik.                                                  |

### 4.2 Empat pilar + buktinya

Pilar tanpa bukti visual hanya jadi kata sifat. Setiap pilar harus punya wujud yang bisa dilihat.

| Pilar          | Arti                               | Bukti visual                                      | Bukti konten                          |
| -------------- | ---------------------------------- | ------------------------------------------------- | ------------------------------------- |
| **Precision**  | Tepat, tidak kira-kira             | grid 32, stroke 1:6, sudut siku                   | angka, versi, tanggal, ukuran         |
| **Clarity**    | Jelas, satu pesan per bidang       | satu accent, hairline, whitespace besar           | satu ide per slide                    |
| **Completion** | Tuntas, ada akhir yang jelas       | titik di baseline                                 | before/after, status "shipped"        |
| **Craft**      | Rapi sampai detail kecil           | mono metadata, tracking konsisten                 | label, index, kredit              |

### 4.3 Voice & tone

**Aturan**

1. Kalimat pendek. Maksimal dua baris per kalimat di caption.
2. Sentence case. Tidak ada Title Case pada heading.
3. Angka lebih baik daripada kata sifat: "3 minggu" > "cepat".
4. Satu emoji maksimal, dan hanya bila menambah makna. Lebih baik nol.
5. Jangan memakai kata yang tidak bisa dibuktikan: *passionate, excited, thrilled, world-class, scalable* (tanpa angka).

**Sebelum / sesudah**

| Sebelum                                              | Sesudah                                                        |
| ---------------------------------------------------- | -------------------------------------------------------------- |
| "Passionate developer with extensive experience"     | "Saya membangun aplikasi web, mobile, dan API yang dipakai harian." |
| "Check out my new project!!!"                        | "Ongkir SDK: 12 kota, 1 endpoint."                              |
| "Super excited to announce..."                       | "Rilis: harga pangan. 3 minggu, 1 orang."                       |
| "Beautiful, modern, blazing fast UI"                 | "Halaman produk: 1 request, 180 ms di 3G."                      |

### 4.4 Nama & handle — dua nama, satu titik

| Konteks              | Penulisan resmi              | Aturan                                          |
| -------------------- | ---------------------------- | ----------------------------------------------- |
| Nama lengkap         | `Taufan Fatahillah`          | teks formal, CV, metadata, `<title>`            |
| Wordmark nama        | `taufan fatahillah` + kotak  | Geist 600, lowercase (§9)                       |
| **Handle publik**    | **`@withcakfan`**            | **aset visual**, Geist Mono 500 + kotak (§10.2) |
| Handle kode/repo     | `cakfan`                     | hanya alamat: `github.com/cakfan`               |
| Bio Instagram        | `withcakfan`                 | tanpa `@` — platform menambahkannya sendiri     |
| Credit line di gambar| `@withcakfan` (mono)         | tanpa nama lengkap, tanpa spasi                 |

**Keputusan: `@withcakfan` adalah satu-satunya handle visual resmi.**

`cakfan` tetap hidup sebagai **alamat** (URL GitHub, domain, repo) karena tidak bisa diubah tanpa memutus tautan. Tapi `cakfan` tidak pernah tampil sebagai elemen visual: tidak di watermark, tidak di end card, tidak di OG, tidak di email signature.

**Larangan penulisan:**

- `with_cakfan`, `with-cakfan`, `with.cakfan` — pemisah merusak pencarian.
- `WithCakfan`, `WITHCAKFAN` — handle peka huruf besar-kecil.
- `@withcakfan.` dengan titik dari font — titik harus kotak (§10.2).
- Mencampur `cakfan` dan `@withcakfan` dalam satu gambar.

### 4.5 Visual DNA (wajib muncul)

Tujuh elemen ini yang membuat orang mengenali brand tanpa membaca nama:

| #   | Elemen                 | Wujud                                              | Frekuensi minimal           |
| --- | ---------------------- | -------------------------------------------------- | --------------------------- |
| 1   | **Kotak titik**        | 1 kotak accent per komposisi                       | 1× per halaman/post         |
| 2   | **Hairline**           | garis 1px, border, pemisah                         | 1× per section/slide        |
| 3   | **Mono label**         | uppercase, tracking `0.14em`, 11–14px              | 1× per section/slide        |
| 4   | **Index**              | `01 /`, `02 /` di awal label                       | 1× per section/slide        |
| 5   | **Paper & ink**        | `#F4F5F1` / `#0C0E0D`, tanpa warna ketiga          | selalu                      |
| 6   | **Satu accent**        | `#C2351F` / `#FF8A70`                              | maksimal 1× per viewport    |
| 7   | **Handle mono**        | `@withcakfan`, tracking `0.14em`, lowercase        | 1× di footer/end card/signature |

### 4.6 Brand architecture

```
Taufan Fatahillah (master brand)
├── Portfolio & CV            → lockup / wordmark
├── Project case studies      → cover tipografis, TANPA logo proyek
├── Content series (IG)       → label seri mono: "01 / NOTE"
└── Social presence           → avatar kanonik + watermark
```

**Aturan:** tidak ada logo terpisah untuk proyek, seri konten, atau layanan. Semuanya meminjam sistem master brand. Satu-satunya mark yang boleh muncul adalah mark ini.

### 4.7 Recognition test

Sebelum rilis, jalankan tiga uji:

1. **Tes 3 detik** — lihat satu post selama 3 detik, tutup. Apa yang tersisa? Harus: kotak accent + satu bentuk.
2. **Tes 3 post** — tiga post berdampingan dengan nama disembunyikan. Apakah terlihat satu penulis?
3. **Tes 32 px** — avatar di ukuran feed. Apakah masih terbaca sebagai mark, bukan noda?

Jika salah satu gagal, perbaiki sistem — jangan menambah dekorasi.

---

## 5. Konsep Logo

### 5.1 Arah terpilih — "Titik Akhir / The Full Stop"

**Bentuk:** satu bingkai persegi dan satu kotak accent di tengahnya. Dua elemen, satu arti.

```
   ┌─────────┐
   │         │
   │    ▪    │
   │         │
   └─────────┘
```

**Kenapa ini yang dipilih:**

1. **Bukan logo huruf.** Ini tanda baca yang dijadikan mark. Hampir semua portfolio developer memakai inisial, bracket, atau kursor terminal.
2. **Kontinu, bukan ganti total.** Titik accent sudah ada di brand lama. Rebrand ini menaikkannya dari aksen menjadi identitas — pengunjung lama masih mengenali, pengunjung baru melihat bentuk yang tegas.
3. **Skala ekstrem.** Dua bentuk dengan stroke seragam tidak punya detail yang bisa hilang: tetap utuh di 16 px dan tetap rapi di 512 px.
4. **Satu accent per viewport.** Titik adalah satu-satunya elemen berwarna di seluruh situs. Ini memperkuat aturan accent yang sudah ada, bukan menambah aturan baru.
5. **Bisa dijelaskan dalam satu kalimat.** "Bingkai adalah halaman; titik adalah tanda bahwa halaman itu sudah selesai." Logo yang butuh paragraf untuk dijelaskan biasanya belum selesai.

**Kalibrasi wajib: huruf dibuang.** Versi pertama memakai huruf `t` geometris. Masalahnya bukan selera: pada 16–24 px, batang tegak + palang horizontal selalu terbaca sebagai **salib**, dan itu asosiasi yang tidak ada hubungannya dengan brand. Kaki lengkung hanya menyelamatkan bentuk di atas 48 px. Solusinya bukan memperbaiki huruf, tetapi berhenti memakai huruf — bingkai memberi bentuk yang bisa diingat tanpa perlu inisial.

**Kenapa bingkai, bukan hanya titik.** Titik saja adalah bentuk paling murni, tetapi dua hal menggagalkannya: ia tidak bisa dibedakan dari ikon aplikasi lain, dan ia bertabrakan dengan titik penutup di wordmark — lockup akan menampilkan dua titik berdampingan. Bingkai memberi titik itu **wadah**, sehingga mark dan wordmark tetap terbaca sebagai dua hal berbeda.

**Keputusan kunci: titik berbentuk kotak, bukan bulat.**

Kotak membuatnya terasa seperti piksel — unit terkecil dari sistem digital. Kotak juga:
- tetap tajam di 16 px (lingkaran menjadi blur),
- sejalan dengan sudut siku dan `radius-control` 6px,
- membedakan dari ratusan logo bertitik bulat,
- bisa dipakai sebagai *device* di UI (bullet, status, separator) tanpa perlu aset tambahan.

### 5.2 Kenapa mark ini aman di avatar & watermark

Dua konteks tersulit untuk sebuah logo adalah **crop lingkaran** dan **foto yang ramai**. Mark ini lolos keduanya karena keputusan geometri, bukan karena penyesuaian darurat:

| Uji | Kenapa lolos |
| --- | --- |
| Crop lingkaran | Bingkai luar `22 × 22` unit (69% artboard). Pada avatar skala `28×`, bingkai menjadi 616 px dan setengah diagonalnya 218 px — jauh di dalam jari-jari aman 512 px. |
| Tanpa accent | Titik adalah **bentuk**, bukan warna. Dalam monokrom, mark tetap utuh — hanya kehilangan satu-satunya warna. |
| Di atas foto | Bentuknya hanya 2 elemen; cukup satu versi monokrom paper untuk semua foto, tanpa outline. |
| 32 px | Dua bentuk, stroke 1:6.3. Tidak ada detail yang hilang. |
| Grayscale/print | Kontras bingkai–paper ≥ 4.5:1, tercetak hitam putih tetap terbaca. |

### 5.3 Alternatif yang dipertimbangkan

| Arah                                              | Kenapa menarik                  | Kenapa ditolak                                                      |
| ------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------- |
| `</>` atau bracket sebagai mark                   | instan dibaca "coding"          | cliché, dipakai ribuan portfolio, tidak punya makna personal        |
| Kursor terminal `>_`                              | terasa seperti engineer         | terlalu literal, terlihat seperti tema editor kode                  |
| Inisial `TF` dalam lingkaran/kotak                | aman dan mudah dibuat           | generik, tidak bisa dibedakan dari logo perusahaan lain             |
| Monogram blok penuh (huruf tebal bersambung)       | berani di ukuran besar          | berat, tidak ramah di header kecil, bertabrakan dengan tipografi ringan situs |
| Gradient blob / bentuk organik                    | modern sekilas                  | melanggar brand guidelines (tanpa gradient, tanpa blob), cepat basi |

### 5.4 Anti-reference

Jangan mengambil inspirasi dari: logo SaaS dengan gradient mesh, maskot, huruf melengkung ber-shadow, badge dengan border ganda, atau logo yang hanya berfungsi di atas background gelap.

---

## 6. Konstruksi

### 6.1 Grid & proporsi

| Parameter        | Nilai                                   | Catatan                                     |
| ---------------- | --------------------------------------- | ------------------------------------------- |
| Artboard         | `32 × 32`                               | sama dengan favicon, memudahkan 1:1          |
| Stroke           | `3`                                     | stroke seragam untuk semua elemen            |
| Cap              | `square`                                | sudut siku, sesuai bahasa visual             |
| Bingkai          | `19 × 19` di `x 6.5, y 6.5`             | visual (dengan stroke) `5 → 27`              |
| Ruang dalam      | `16 × 16`                               | jarak bingkai ke titik `5.25` di tiap sisi   |
| Titik            | kotak `5.5 × 5.5` di `x 13.25, y 13.25` | tepat di pusat geometri (16, 16)             |

Rasio yang harus dijaga saat mengubah ukuran: **stroke : bingkai = 1 : 6.3**, **titik : stroke = 1.83 : 1**.

### 6.2 SVG mark (sumber kebenaran)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"
     role="img" aria-label="Taufan Fatahillah">
  <path d="M6.5 6.5H25.5V25.5H6.5Z" stroke="currentColor" stroke-width="3" stroke-linecap="square" />
  <rect x="13.25" y="13.25" width="5.5" height="5.5" fill="#C2351F" />
</svg>
```

Tidak ada varian compact: geometri ini sudah terbaca di 16 px tanpa penyesuaian. Di dalam tile (favicon, avatar) seluruh grup diperkecil `0.9` agar bingkai tidak menempel ke sudut tile.

**Aturan teknis:**

- Bingkai digambar sebagai `path` tertutup, bukan `rect`, agar `pathLength={1}` dan animasi draw bekerja tanpa varian browser.
- Titik **selalu** `rect`, tidak pernah `circle` dan tidak pernah glyph `.`.
- Warna mark utama: `currentColor`. Warna titik: token `--accent` (light `#C2351F`, dark `#FF8A70`).
- Jangan membungkus mark dengan background kecuali pada varian app icon dan avatar.
- Untuk konteks monokrom (watermark, print), titik memakai `fill="currentColor"` — bukan dihapus.

### 6.3 Koreksi optis

Geometri ini **simetris**, jadi tidak ada pergeseran optis yang diperlukan. Saat mengubah ukuran, cek empat hal:

1. **Ketebalan bingkai.** Jangan menurunkan stroke di bawah `3`: di bawah itu bingkai mulai hilang pada 16 px. Jangan menaikkannya: titik akan tenggelam.
2. **Ukuran titik.** `5.5` adalah batas bawah. Titik `5` masih terbaca di 128 px ke atas, tetapi menghilang lebih cepat dari bingkai saat diperkecil.
3. **Pusat.** Titik harus tepat di `(16, 16)`. Pergeseran 0.5 unit sudah terlihat sebagai ketidakseimbangan pada 512 px.
4. **Skala di dalam tile.** Selalu `0.9` dari artboard penuh, dengan translate `1.6` di kedua sumbu. Tanpa itu bingkai menempel ke tepi tile dan terlihat seperti border, bukan mark.

### 6.4 Clear space

- Minimum: **setengah sisi titik** (`2.75/32` dari tinggi mark) di semua sisi.
- Untuk mark di dalam header, minimum `12px` dari elemen lain.
- Tidak ada teks atau garis yang boleh masuk area clear space.
- Di avatar: clear space efektif = **20%** dari diameter (bingkai 60%, sisa 40% dibagi dua).

### 6.5 Ukuran minimum

| Varian         | Minimum      | Catatan                                    |
| -------------- | ------------ | ------------------------------------------ |
| Mark           | `16 × 16 px` | favicon; geometri tunggal, tanpa varian optis |
| Lockup         | `96 px` lebar | di bawah itu pakai mark saja              |
| Wordmark       | `14 px` tinggi huruf | titik kotak tetap 2 px minimum      |
| App icon       | `32 × 32 px` | mark di skala `0.9`                         |
| Avatar         | `32 × 32 px` tampil | sumber 1024, mark 60% sisi tile      |
| Watermark      | `24 × 24 px` tampil | monokrom, tanpa titik accent di foto |

---

## 7. Sistem Varian

| #   | Varian              | Komposisi                         | Pemakaian                              | File target                        |
| --- | ------------------- | --------------------------------- | -------------------------------------- | ---------------------------------- |
| 1   | **Lockup primary**  | mark + wordmark, horizontal       | header desktop ≥ sm                    | `components/brand/lockup.tsx`      |
| 2   | **Wordmark**        | teks + titik kotak                | footer besar, OG, CV header            | `components/brand/wordmark.tsx`    |
| 3   | **Mark**            | bingkai + titik saja              | header mobile, bullet, UI              | `components/brand/mark.tsx`        |
| 4   | **Stacked lockup**  | mark di atas wordmark             | footer, OG, cover CV, cover IG         | komposisi                          |
| 5   | **App icon**        | mark di atas tile ink, radius 6   | favicon, apple-touch, PWA              | `src/app/icon.svg`                 |
| 6   | **Avatar**          | mark di atas tile ink, full-bleed | Instagram, LinkedIn, GitHub, X, YouTube | `public/brand/social/avatar-*`     |
| 7   | **Watermark mark**  | mark monokrom 32×32               | corner post, reel, story               | `public/brand/social/watermark-mark.svg` |
| 8   | **Credit bar**      | bar paper + mark + `@handle`      | carousel, insight card                 | `public/brand/social/credit-bar.svg` |
| 9   | **Handle signature**| `@withcakfan` mono + kotak        | footer web, OG, end card               | `components/brand/handle.tsx`      |
| 10  | **Handle stack**    | mark di atas `@withcakfan`        | email signature, cover IG              | `public/brand/social/handle-stack.svg` |
| 11  | **Monokrom**        | `currentColor` untuk semua elemen | print, watermark, grayscale            | varian prop, bukan file terpisah   |
| 12  | **Reversed**        | paper di atas ink                 | dark mode, tile, OG alternatif         | varian prop                        |

### 7.1 Aturan titik (paling penting)

- **Hanya satu titik per komposisi.** Lockup menaruh titik di wordmark, sehingga mark di lockup memakai titik `currentColor`, bukan accent.
- Mark sendirian → titik accent.
- Mark di dalam app icon/avatar → titik accent (versi terang di atas ink).
- **Di atas foto → titik monokrom.** Accent di atas foto tidak bisa dijamin kontrasnya.
- Handle signature hanya memasang kotak accent bila **tidak ada** accent lain (mark, wordmark, atau kotak akhir baris).
- Jangan pernah menaruh titik accent di wordmark **dan** mark secara bersamaan.

### 7.2 Touchpoint matrix

| Touchpoint            | Varian              | Catatan                                  |
| --------------------- | ------------------- | ---------------------------------------- |
| Header website ≥ sm   | Lockup              | titik accent hanya di wordmark           |
| Header website < sm   | Mark 28 px          | titik accent                              |
| Footer website        | Stacked lockup + handle | brand moment, handle signature       |
| Favicon / tab         | App icon            | tile gelap, semua tema                   |
| **Avatar sosial**     | Avatar ink          | tanpa wordmark, mark 60% tile            |
| OG image              | Stacked lockup + credit line | 1200×630                        |
| **Feed IG**           | Watermark corner    | 34 px, paper 90% di atas foto            |
| **Carousel IG**       | Credit bar          | tinggi 84 px, hairline atas              |
| **Story / Reel**      | Watermark corner    | di dalam safe zone, monokrom             |
| CV PDF                | Monokrom lockup + handle | titik = currentColor, handle plain  |
| Email signature       | Monokrom lockup + handle stack | lebar ≥ 96 px               |
| GitHub README         | Monokrom mark + `@withcakfan` | SVG inline, handle plain        |
| Sertifikat / print    | Monokrom lockup     | hitam 100%                               |

---

## 8. Warna

Tidak ada token baru. Logo memakai token yang sudah ada agar tidak ada drift.

**Kenapa vermilion, bukan biru.** Mark ini secara harfiah adalah tanda baca. Merah koreksi adalah warna yang dipakai penyunting untuk menandai naskah selesai — jadi accent-nya membawa makna "titik akhir", bukan sekadar "warna brand". Biru elektrik adalah accent default hampir semua produk tech: aman, tetapi tidak membedakan. Vermilion juga tetap terbaca sebagai sinyal di antara paper dan ink tanpa perlu warna kedua.

| Elemen          | Light     | Dark      | Token               |
| --------------- | --------- | --------- | ------------------- |
| Bingkai         | `#0C0E0D` | `#F2F4EF` | `--foreground`      |
| Titik           | `#C2351F` | `#FF8A70` | `--accent`          |
| Tile app icon   | `#0C0E0D` | `#0C0E0D` | selalu ink          |
| Mark di tile    | `#F2F4EF` | `#F2F4EF` | paper               |
| Titik di tile   | `#FF8A70` | `#FF8A70` | accent dark         |
| Watermark foto  | `#F4F5F1` | `#F4F5F1` | paper, 88–92%       |
| Credit bar      | `#F4F5F1` | `#F4F5F1` | paper (selalu terang) |

**Aturan:**

- Pada background accent, seluruh mark memakai `--accent-foreground` (monokrom). Titik tidak boleh accent di atas accent.
- Kontras bingkai minimal 4.5:1 terhadap background.
- Titik accent pada light `#C2351F` di atas paper lolos AA; pada dark pakai `#FF8A70`.
- App icon dan avatar selalu memakai tile gelap, di tema apa pun, agar dikenali sama di semua tab dan platform.
- Di atas foto, hanya paper/ink. Accent dilarang karena kontras tidak bisa dijamin.

---

## 9. Tipografi Wordmark

| Properti   | Nilai                                    |
| ---------- | ---------------------------------------- |
| Font       | Geist (variable)                         |
| Weight     | 600                                      |
| Case       | lowercase                                |
| Tracking   | `-0.035em`                               |
| Titik      | kotak accent, sisi `0.16em`, gap `0.07em` |
| Alignment  | titik duduk di baseline, bukan di x-height |

### 9.1 Implementasi titik kotak

Titik **tidak boleh** berupa karakter `.`, karena:
- lebarnya mengikuti metrik font,
- posisinya bergeser antar browser,
- tidak bisa disamakan dengan titik pada mark.

Gunakan elemen dekoratif:

```tsx
<span className="inline-flex items-baseline">
  <span className="tracking-[-0.035em]">taufan fatahillah</span>
  <span
    aria-hidden="true"
    className="ml-[0.07em] inline-block h-[0.16em] w-[0.16em] bg-accent"
  />
</span>
```

Karena `inline-block` kosong menempatkan baseline-nya di tepi bawah, kotak otomatis duduk di baseline teks. Bila ada drift di Safari, ganti dengan `<svg viewBox="0 0 4 4">` berisi satu `rect`.

### 9.2 Catatan kerning

- `f` dan `a` pada "fatahillah" paling rawan terlihat renggang pada tracking negatif; cek di 14 px.
- Jangan memakai `font-optical-sizing` atau `letter-spacing` berbeda per ukuran — satu nilai untuk semua.
- Wordmark **tidak** memakai mark di dalam teks (jangan menaruh mark di antara "taufan" dan "fatahillah").

### 9.3 Tipografi untuk aset sosial

- Teks di gambar **selalu di-bake** (outline atau raster), tidak pernah diandalkan dari font aplikasi.
- Pasangan tetap: Geist 600 untuk headline, Geist 400 untuk body, Geist Mono 500 untuk label/handle.
- Ukuran minimum di kanvas 1080: body `28 px`, label `22 px`, headline `64 px`.
- Jangan memakai font pihak ketiga, script, atau hand-lettering untuk konten.
- Handle `@withcakfan` ditulis dengan Geist Mono, tracking `0.14em`, lowercase.

### 9.4 Opsi v2 (opsional, di luar scope)

Menggambar ulang 3 huruf kunci (`t`, `f`, `a`) sebagai lettering kustom agar mark dan wordmark punya DNA yang persis sama. Ditunda karena biaya tinggi dan manfaatnya kecil dibanding v1.

---

## 10. Signature Devices — Titik & Handle

Tiga device yang membuat brand dikenali bahkan ketika nama tidak dibaca: **kotak titik**, **handle mono**, dan **credit line**. Ketiganya memakai bahasa visual yang sama dengan mark — jadi bukan hiasan tambahan, tapi perpanjangan dari sistem yang sudah ada.

### 10.1 Kotak titik

Titik kotak dipakai sebagai elemen sistem, bukan hanya bagian logo.

| Pemakaian              | Spesifikasi                                    |
| ---------------------- | ---------------------------------------------- |
| Bullet list            | `4×4 px`, accent, sejajar x-height             |
| Status availability    | `6×6 px`, accent                               |
| Separator metadata     | `2×2 px`, `muted-foreground`, gap `0.5em`      |
| Penanda item aktif nav | `4×4 px` di kiri label, accent                 |
| Credit bar IG          | `8×8 px` di kanan bar, accent                  |
| Section index          | tetap pakai `/`, jangan diganti titik          |

### 10.2 Handle `@withcakfan`

**Kenapa handle harus jadi aset, bukan teks biasa**

Di sosial, orang tidak mencari "Taufan Fatahillah" — mereka mencari `@withcakfan`. Kalau handle hanya ditulis di caption, ia hilang begitu gambar disimpan, di-screenshot, atau di-repost. Sebagai aset visual, handle ikut terbawa di setiap gambar dan menjadi jalan balik ke profil.

**Dua nama, dua suara**

| Nama               | Font        | Alasan                                                       |
| ------------------ | ----------- | ------------------------------------------------------------ |
| `taufan fatahillah`| Geist (grotesk) | nama manusia — dibaca sebagai orang, dipakai di web       |
| `@withcakfan`      | Geist Mono  | alamat mesin — unik, peka huruf besar-kecil, harus bisa dicari persis |

Mono bukan pilihan estetika. Handle adalah **alamat**, dan alamat harus terlihat seperti alamat: lebar seragam, tidak bisa disalahbaca, dan tidak "menyamar" sebagai judul.

**Konstruksi**

| Properti        | Nilai                                                        |
| --------------- | ------------------------------------------------------------ |
| Teks            | `@withcakfan` — lowercase, tanpa pemisah, tanpa spasi         |
| Font            | Geist Mono 500                                                |
| Tracking        | `0.14em` (positif, bukan negatif seperti wordmark)            |
| `@`             | ukuran sama dengan teks; turunkan ke `0.9×` hanya jika terasa berat |
| Gap `@` → `w`   | `0.04em`                                                      |
| Kotak titik     | `0.16em`, gap `0.12em`, duduk di baseline                     |
| Lebar terhitung | 11 sel × `0.6em` + tracking ≈ `8.2em` — bisa diprediksi untuk template |
| Ukuran minimum  | `10 px`                                                       |
| Ukuran sasaran  | `14 px` (web), `20 px` (credit bar), `28 px` (OG)              |

Lebar yang bisa diprediksi itu penting: handle selalu `8.2em`, sehingga bisa ditempatkan di grid tanpa mengukur manual.

**Varian**

| Varian        | Bentuk                              | Pakai                                          |
| ------------- | ----------------------------------- | ---------------------------------------------- |
| **Signature** | `@withcakfan` + kotak accent        | footer web, end card, OG                       |
| **Plain**     | `@withcakfan` tanpa kotak           | caption, body, bio, daftar kontak              |
| **Mono**      | semua `currentColor`, tanpa accent  | di atas foto, print, CV                        |
| **Stack**     | mark di atas `@withcakfan`          | email signature, end card, cover IG            |

**Aturan pakai**

- Kotak hanya di konteks **tanda tangan** (akhir komposisi). Di tengah kalimat, kotak berubah jadi tanda baca palsu — pakai varian plain.
- Handle signature memakai titik accent **hanya jika** tidak ada accent lain dalam komposisi. Jika mark hadir dengan titik accent, handle memakai varian plain atau mono.
- Handle **tidak boleh** masuk ke dalam mark atau avatar. Mark tetap satu-satunya bentuk.
- Di web, handle adalah tautan nyata dengan `rel="me"` agar identitasnya bisa diverifikasi.
- Di gambar, teks di-outline. Di web, teks tetap teks asli supaya bisa dipilih, dicari, dan dibaca screen reader.

**Implementasi web**

```tsx
// src/components/brand/handle.tsx
import { cn } from "@/lib/utils";

type HandleContentProps = { dot?: boolean; mono?: boolean };

function HandleContent({ dot = true, mono = false }: HandleContentProps) {
  return (
    <>
      @withcakfan
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            "ml-[0.12em] inline-block h-[0.16em] w-[0.16em]",
            mono ? "bg-current" : "bg-accent"
          )}
        />
      )}
    </>
  );
}

export default function Handle({
  className,
  dot,
  mono,
  link = false,
}: HandleContentProps & { className?: string; link?: boolean }) {
  const classes = cn("font-mono lowercase tracking-[0.14em]", className);

  if (!link) {
    return (
      <span className={classes}>
        <HandleContent dot={dot} mono={mono} />
      </span>
    );
  }

  return (
    <a
      href="https://instagram.com/withcakfan"
      rel="me"
      target="_blank"
      className={classes}
    >
      <HandleContent dot={dot} mono={mono} />
    </a>
  );
}
```

Catatan: `tracking` menambah spasi setelah huruf terakhir; gap ke kotak karena itu cukup `0.12em`, lebih kecil dari yang terlihat.

### 10.3 Credit line

Kombinasi handle + alamat situs, dipakai di OG, footer, dan email.

```
@withcakfan  ·  cakfan.github.io
```

| Properti     | Nilai                                      |
| ------------ | ------------------------------------------ |
| Handle       | §10.2 varian **plain**, `14–20 px`          |
| Pemisah      | hairline `1px × 12px`, `muted-foreground`   |
| URL          | Geist Mono 500, `muted-foreground`          |
| Gap          | `12 px` kiri-kanan pemisah                  |
| Accent       | satu kotak `4×4` di akhir baris (opsional)  |

Credit line **tidak** memakai titik accent di handle, karena kotak di akhir baris sudah menjadi accent tunggal.

### 10.4 Larangan gabungan

- Jangan memakai titik sebagai background pattern atau tekstur.
- Jangan memperbesar titik melebihi `8px` di UI.
- Jangan memakai titik sebagai ikon tombol atau pengganti bullet di konten panjang (>3 item).
- Jangan memutar titik 45° (berubah jadi diamond — bahasa visual berbeda).
- Jangan menulis handle dengan font grotesk; handle selalu mono.
- Jangan memakai handle sebagai pengganti mark di avatar.
- Jangan menaruh handle dan nama lengkap dalam satu lockup — pilih salah satu.
- Jangan membuat versi "kreatif" dari handle (italic, outline, dua warna, emoji).

---

## 11. Avatar Sosial

Avatar adalah logo yang paling sering dilihat orang dan paling jarang diperhatikan pemiliknya. Karena itu avatar diperlakukan sebagai **varian resmi**, bukan foto yang dipotong sembarangan.

### 11.1 Ukuran platform

| Platform         | Upload ideal | Tampil umum     | Crop      |
| ---------------- | ------------ | --------------- | --------- |
| Instagram        | `1080×1080`  | `32–150 px`     | lingkaran |
| LinkedIn         | `400×400`    | `48–200 px`     | lingkaran |
| GitHub           | `460×460`    | `32–90 px`      | lingkaran |
| X / Twitter      | `400×400`    | `32–48 px`      | lingkaran |
| YouTube          | `800×800`    | `48–176 px`     | lingkaran |
| WhatsApp/Telegram| `500×500`    | `40–96 px`      | lingkaran |
| Email / Notion   | `512×512`    | `24–64 px`      | kotak     |

Satu file sumber `1024×1024` cukup; turunkan ukurannya per platform dari file yang sama.

### 11.2 Geometri avatar

| Parameter        | Nilai                                  |
| ---------------- | -------------------------------------- |
| Kanvas           | `1024 × 1024`                          |
| Background       | ink `#0C0E0D`, full-bleed (tanpa radius) |
| Skala mark       | `28×` dari grid 32 → bingkai 616 px (60.2%) |
| Posisi           | `translate(64, 64)` sebelum scale     |
| Titik            | `5.5 × 5.5` accent dark `#FF8A70`      |
| Lingkaran aman   | diameter `0.84 × 1024` (861 px)        |
| Clear space      | ≥ 20% diameter                         |

**Kenapa `translate(64, 64)`:** bingkai luar `5–27` dari grid 32 diskalakan `28×` menempati `204–820` di kanvas 1024 — center matematis `512, 512`, tanpa pergeseran optis karena bentuknya simetris. Bingkai 60% sisi tile menyisakan margin `204 px` di setiap sisi; setengah diagonal bingkai hanya `218 px`, jauh di dalam lingkaran aman `430 px` (jari-jari).

### 11.3 SVG avatar (kanonik)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"
     role="img" aria-label="Taufan Fatahillah">
  <rect width="1024" height="1024" fill="#0C0E0D" />
  <g transform="translate(64 64) scale(28)">
    <path d="M6.5 6.5H25.5V25.5H6.5Z" fill="none" stroke="#F2F4EF" stroke-width="3" stroke-linecap="square" />
    <rect x="13.25" y="13.25" width="5.5" height="5.5" fill="#FF8A70" />
  </g>
</svg>
```

### 11.4 Varian avatar

| Varian   | Background | Mark       | Titik      | Pakai untuk                                   |
| -------- | ---------- | ---------- | ---------- | --------------------------------------------- |
| **Ink** (kanonik) | `#0C0E0D` | `#F2F4EF` | `#FF8A70` | semua platform, semua tema — **default** |
| Paper    | `#F4F5F1`  | `#0C0E0D` | `#C2351F` | konteks cetak/terang, slide, email header      |
| Accent   | `#C2351F`  | `#FFFFFF` | `#FFFFFF` | kampanye/OG saja, **bukan** avatar profil      |
| Mono     | transparan | `currentColor` | `currentColor` | watermark, footer dokumen              |

**Aturan:**

- Avatar **tidak boleh** memuat wordmark, URL, atau tagline — semuanya hilang di 32 px.
- Avatar **tidak boleh** memakai foto orang. Mark adalah tanda, bukan wajah.
- Jangan menambahkan ring/border: platform sudah memberi ring sendiri, dan ring ganda terlihat seperti kesalahan.
- Jangan memakai varian paper di satu platform dan ink di platform lain — pilih satu, konsisten.
- File harus aman di crop lingkaran **dan** crop kotak (LinkedIn desktop lama, Google).

### 11.5 Penamaan file

```
public/brand/social/
├── avatar-ink-1024.png
├── avatar-ink-512.png
├── avatar-ink-400.png
├── avatar-paper-1024.png
├── avatar-accent-1024.png
└── avatar-mono.svg
```

Ekspor PNG tanpa kompresi lossy berlebihan; background harus solid sampai tepi, bukan transparan.

---

## 12. Watermark & Template Instagram

Watermark yang baik adalah **kredit teknis**, bukan stempel. Ia harus ada saat dicari dan hilang saat tidak dicari.

### 12.1 Prinsip

1. **Satu watermark per gambar.** Tidak ada kombinasi corner + bar.
2. **Tidak menutupi subjek.** Wajah, teks, dan detail produk tidak boleh tertutup.
3. **Tanpa efek.** Tanpa shadow, outline, blur backdrop, atau gradient.
4. **Posisi konsisten** di seluruh carousel dan sepanjang reel.
5. **Ukurannya kecil.** Kalau watermark jadi hal pertama yang dilihat, ia terlalu besar.
6. **Monokrom di atas foto.** Accent hanya di atas bidang datar.

### 12.2 Tiga mode watermark

| Mode | Nama             | Bentuk                                                    | Kapan dipakai                          |
| ---- | ---------------- | --------------------------------------------------------- | -------------------------------------- |
| W1   | **Corner mark**  | mark monokrom 34 px di salah satu sudut (+ handle plain 14 px bila sudut luas) | foto tunggal, story, reel              |
| W2   | **Credit bar**   | bar paper 84 px + mark + `@handle` + kotak accent          | carousel, insight card, dokumentasi    |
| W3   | **Cover lockup** | stacked lockup di tengah bidang paper                      | slide pertama/terakhir, cover proyek   |

W3 adalah satu-satunya tempat wordmark boleh muncul di feed.

### 12.3 Grid & ukuran (basis 1080)

| Format          | Kanvas      | Mode default | Ukuran            | Inset              |
| --------------- | ----------- | ------------ | ----------------- | ------------------ |
| Feed 4:5        | `1080×1350` | W1 kanan-bawah | mark `34 px`    | `64 px`            |
| Feed 1:1        | `1080×1080` | W1 kanan-bawah | mark `34 px`    | `64 px`            |
| Carousel slide  | `1080×1350` | W2 bawah      | bar `84 px`       | full-width         |
| Story 9:16      | `1080×1920` | W1 kiri-atas  | mark `40 px`      | `64 px`, `y=280`   |
| Reel cover      | `1080×1920` | W1 kiri-atas  | mark `40 px`      | `64 px`, `y=280`   |
| Cover / end     | `1080×1350` | W3 tengah     | mark `96 px`      | margin `96 px`     |
| OG / web        | `1200×630`  | W3 kiri       | mark `72 px`      | margin `72 px`     |

**Safe zone Story/Reel:** atas `250 px`, bawah `320 px`, kanan `120 px` (area ikon aksi). Watermark wajib berada di dalam sisa area.

**Handle di W1 (opsional):** `14 px`, gap `12 px` di kanan mark, varian **plain/mono**. Hanya dipakai bila sudut benar-benar kosong. Jika ragu, mark saja — handle yang berdesakan dengan detail foto lebih buruk daripada tidak ada handle.

### 12.4 SVG watermark mark (monokrom)

```svg
<!-- public/brand/social/watermark-mark.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
     width="34" height="34" fill="none" color="#0C0E0D" aria-hidden="true">
  <path d="M6.5 6.5H25.5V25.5H6.5Z" stroke="currentColor" stroke-width="3" stroke-linecap="square" />
  <rect x="13.25" y="13.25" width="5.5" height="5.5" fill="currentColor" />
</svg>
```

Dipakai sebagai `<img>`/komponen dengan `color` diatur per konteks. Titik **selalu** `currentColor` agar tetap satu warna. Untuk PNG, rasterizer tidak mewarisi `currentColor` — ubah atribut `color` di root (`#0C0E0D` untuk foto terang, `#F4F5F1` untuk foto gelap).

### 12.5 Credit bar (W2)

```
┌──────────────────────────────────────────────────────────┐
│  mark   @withcakfan                              ▪       │  84 px
└──────────────────────────────────────────────────────────┘
  hairline 1px di atas bar · paper #F4F5F1
```

| Properti        | Nilai                                  |
| --------------- | -------------------------------------- |
| Tinggi          | `84 px`                                |
| Background      | `#F4F5F1` (selalu terang)              |
| Hairline atas   | `1px` `#D5D8D1`                        |
| Mark            | `32×32`, ink, titik `currentColor`     |
| Handle          | §10.2 varian **plain** (tanpa kotak), `20 px` — accent sudah diwakili kotak kanan |
| Kotak accent    | `8×8`, `#C2351F`, `64 px` dari kanan   |
| Padding kiri    | `64 px`                                |

Credit bar dipakai di **semua slide tengah** carousel. Slide pertama memakai W3, slide terakhir W3 + satu CTA.

### 12.6 Aturan warna per background

| Background            | Mark            | Titik              | Opacity  |
| --------------------- | --------------- | ------------------ | -------- |
| Foto gelap/ramai      | paper `#F4F5F1` | paper (monokrom)   | `90%`    |
| Foto terang           | ink `#0C0E0D`   | ink (monokrom)     | `90%`    |
| Bidang paper          | ink             | accent `#C2351F`   | `100%`   |
| Bidang ink            | paper           | accent `#FF8A70`   | `100%`   |
| Screenshot produk     | paper atau ink  | monokrom           | `88%`    |

Cara memilih: lihat 4 sudut, pilih sudut dengan detail paling sedikit. Jika keempat sudut ramai, **jangan** memaksa W1 — pakai W2 yang menyediakan bidang bersih.

### 12.7 Template feed

Tiga template yang cukup untuk seluruh konten.

**T1 — Cover (slide 1 / post tunggal)**

| Zona        | Isi                                                     |
| ----------- | ------------------------------------------------------- |
| Kiri atas   | label mono `01 / CASE STUDY`                            |
| Tengah      | stacked lockup (mark 96 px) atau judul Geist 600 96 px  |
| Kiri bawah  | `cakfan.github.io` mono, muted                          |
| Kanan bawah | kotak accent 8×8                                        |
| Background  | paper, satu hairline horizontal di atas footer          |

**T2 — Insight card (slide tengah)**

| Zona        | Isi                                                     |
| ----------- | ------------------------------------------------------- |
| Kiri atas   | label mono `02 / NOTE`                                  |
| Body        | maksimal 3 baris, 12 kata, Geist 600 72 px, line-height 1.15 |
| Bawah       | credit bar 84 px                                        |
| Background  | paper atau ink (bergantian antar slide untuk ritme)     |

**T3 — End card (slide terakhir)**

| Zona        | Isi                                                     |
| ----------- | ------------------------------------------------------- |
| Tengah      | stacked lockup + satu kalimat penutup                   |
| Bawah       | credit line: `@withcakfan` (plain) · `cakfan.github.io` |
| Kanan atas  | kotak accent 8×8                                        |
| Background  | ink (kontras dengan slide sebelumnya)                   |

**Aturan konten:**

- Satu ide per slide. Maksimal 12 kata untuk headline.
- Nomor index harus berurutan dan konsisten: `01 /`, `02 /`, `03 /`.
- Jangan menaruh dua jenis label dalam satu slide.
- Jangan memakai screenshot penuh sebagai background dengan teks di atasnya.

### 12.8 Story & Reel

- W1 di kiri-atas (`x=64`, `y=280`), mark `40 px`, monokrom.
- Posisi **identik** di setiap frame; jangan memindahkan watermark antar frame.
- Di Reel, watermark statis — tidak fade in/out, tidak bergerak.
- Jangan menaruh watermark di area yang tertutup UI (bawah 320 px, kanan 120 px).
- Sticker/link/CTA tidak boleh menempel pada watermark; beri jarak minimal `24 px`.

### 12.9 Larangan watermark

| Jangan                                        | Alasan                                       |
| --------------------------------------------- | -------------------------------------------- |
| Watermark besar di tengah gambar              | mengganggu konten, terlihat amatir           |
| Watermark berulang (tiled)                    | merusak gambar, bukan branding               |
| Watermark dengan shadow/outline               | melanggar bahasa visual brand                |
| Watermark accent di atas foto                 | kontras tidak terjamin                       |
| Wordmark penuh di setiap slide carousel       | terlalu ramai; gunakan credit bar            |
| Watermark yang berubah posisi antar slide     | merusak konsistensi seri                     |
| Menempelkan watermark di atas teks/wajah      | mengganggu keterbacaan                       |

### 12.10 Penamaan file aset sosial

```
public/brand/social/
├── avatar-*.png
├── watermark-mark.svg
├── credit-bar.svg
├── handle-signature.svg
├── handle-plain.svg
├── handle-stack.svg
├── template-cover.svg
├── template-insight.svg
├── template-end.svg
└── README.md          ← aturan pakai, ukuran, warna
```

File sumber disimpan sebagai SVG; ekspor PNG per platform dari sumber yang sama.

---

## 13. Motion

Motion hanya boleh **sekali**, saat mark pertama kali muncul di halaman utama. Tidak ada animasi idle.

| Tahap | Elemen          | Durasi | Easing   |
| ----- | --------------- | ------ | -------- |
| 1     | bingkai (draw)  | 200 ms | ease-out |
| 2     | titik (fade)    | 120 ms | ease-out, delay 120 ms |

- Implementasi: `pathLength="1"` + `stroke-dasharray: 1` / `stroke-dashoffset: 1` untuk garis, `opacity` untuk titik — di CSS `.brand-draw`, hanya aktif lewat prop `animate` pada `Mark`/`Lockup`.
- Total ≤ 320 ms. Tidak ada bounce, scale, atau rotasi.
- `@media (prefers-reduced-motion: reduce)` → semua elemen tampil langsung.
- Logo di header **tidak** dianimasikan setiap navigasi; hanya pada initial load.
- Hover pada logo: `opacity: 0.7` (sudah ada), tanpa transform.
- **Sosial:** watermark dan avatar statis. Tidak ada animated logo di feed, story, atau reel.

---

## 14. Do / Don't

| Do                                              | Don't                                            |
| ----------------------------------------------- | ------------------------------------------------ |
| Pakai SVG asli, ukuran berapa pun               | Memakai PNG untuk header atau mark kecil         |
| Satu titik accent per komposisi                 | Dua titik accent dalam satu lockup               |
| Titik selalu kotak                              | Mengganti titik jadi bulat, bintang, atau huruf  |
| Mark memakai `currentColor`                     | Hardcode `#0C0E0D` di komponen React             |
| Geser mark secara optis di avatar               | Memusatkan mark secara matematis di lingkaran    |
| Jaga clear space satu titik                     | Menempelkan mark ke tepi container               |
| Monokrom saat background ramai                  | Menambah outline atau shadow agar "terlihat"     |
| Tile gelap untuk favicon dan avatar             | Favicon/avatar transparan yang hilang di tab terang |
| Ukuran minimum 16 px                            | Memaksa logo di 12 px                            |
| Watermark 34 px di sudut kosong                 | Watermark besar di tengah gambar                 |
| Satu avatar kanonik di semua platform           | Avatar berbeda di tiap platform                  |
| Credit bar di slide tengah carousel             | Wordmark penuh di setiap slide                   |
| Teks sosial di-bake jadi outline/raster         | Mengandalkan font aplikasi untuk headline        |
| Label mono + index di setiap slide              | Slide tanpa penanda seri                          |

---

## 15. Implementasi Teknis

### 15.1 Peta file

**Web**

| Aksi     | File                                    | Isi                                                        |
| -------- | --------------------------------------- | ---------------------------------------------------------- |
| Baru     | `src/components/brand/mark.tsx`         | komponen SVG mark, prop `dot` (`accent`/`current`)          |
| Baru     | `src/components/brand/lockup.tsx`       | mark + wordmark, aturan satu titik                          |
| Ubah     | `src/components/brand/wordmark.tsx`     | ganti glyph `.` dengan kotak accent                        |
| Ubah     | `src/components/brand/monogram.tsx`     | **hapus** (digantikan `mark.tsx`)                          |
| Ubah     | `src/components/layout/site-header.tsx` | `<Mark>` di mobile, `<Lockup>` di desktop                  |
| Baru     | `src/components/brand/handle.tsx`       | `@withcakfan` mono + kotak, prop `dot`/`mono`/`link`        |
| Ubah     | `src/components/layout/site-footer.tsx` | stacked lockup + handle signature                          |
| Ubah     | `src/app/icon.svg`                      | path murni, tanpa `<text>`                                 |
| Baru     | `src/app/apple-icon.png`                | 180×180, tile ink, tanpa transparansi                       |
| Baru     | `public/brand/og-source.svg`            | sumber OG 1200×630                                         |
| Ubah     | `public/og.png`                         | hasil raster dari sumber di atas                           |

**Sosial**

| Aksi     | File                                            | Isi                                  |
| -------- | ----------------------------------------------- | ------------------------------------ |
| Baru     | `public/brand/social/avatar-ink-1024.png`       | avatar kanonik                       |
| Baru     | `public/brand/social/avatar-ink-{512,400}.png`  | turunan ukuran                       |
| Baru     | `public/brand/social/avatar-paper-1024.png`     | varian terang                        |
| Baru     | `public/brand/social/avatar-accent-1024.png`    | varian kampanye (bukan profil)       |
| Baru     | `public/brand/social/avatar-mono.svg`           | untuk watermark/footer dokumen       |
| Baru     | `public/brand/social/watermark-mark.svg`        | W1 monokrom                          |
| Baru     | `public/brand/social/credit-bar.svg`            | W2                                   |
| Baru     | `public/brand/social/handle-signature.svg`       | `@withcakfan` + kotak (outline)      |
| Baru     | `public/brand/social/handle-plain.svg`           | `@withcakfan` tanpa kotak            |
| Baru     | `public/brand/social/handle-stack.svg`           | mark + handle (email/end card)       |
| Baru     | `public/brand/social/template-{cover,insight,end}.svg` | T1–T3                        |
| Baru     | `public/brand/social/README.md`                 | aturan pakai + ukuran                |

**Dokumentasi**

| Aksi | File                     | Isi                                        |
| ---- | ------------------------ | ------------------------------------------ |
| Ubah | `brand-guidelines.md` §2 | aturan logo baru + referensi file          |
| Ubah | `brand-guidelines.md`    | tambah §10 (handle), §11 (avatar & aset sosial), §12 (watermark & template), §13 (referensi) |

Catatan: `redesign-plan.md` bersifat historis. Rujukan monogram `tf.` di sana tidak lagi menjadi sumber kebenaran; dokumen ini dan `brand-guidelines.md` yang berlaku.

### 15.2 Komponen mark

```tsx
// src/components/brand/mark.tsx
import { cn } from "@/lib/utils";

export default function Mark({
  className,
  title,
  dot = "accent",
}: {
  className?: string;
  title?: string;
  dot?: "accent" | "current";
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-[1.15em] w-[1.15em]", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g stroke="currentColor" strokeWidth={3} strokeLinecap="square" fill="none">
        <path d="M6.5 6.5H25.5V25.5H6.5Z" pathLength={1} />
      </g>
      <rect
        x={13.25}
        y={13.25}
        width={5.5}
        height={5.5}
        className={dot === "accent" ? "fill-accent" : "fill-current"}
      />
    </svg>
  );
}
```

### 15.3 Komponen lockup

```tsx
// src/components/brand/lockup.tsx
import Link from "next/link";
import Mark from "./mark";
import { cn } from "@/lib/utils";

export default function Lockup({
  href = "/",
  className,
}: {
  href?: string | null;
  className?: string;
}) {
  const content = (
    <>
      <Mark dot="current" className="h-[1.05em] w-[1.05em] shrink-0" />
      <span className="inline-flex items-baseline">
        <span className="tracking-[-0.035em]">taufan fatahillah</span>
        <span
          aria-hidden="true"
          className="ml-[0.07em] inline-block h-[0.16em] w-[0.16em] bg-accent"
        />
      </span>
    </>
  );

  const classes = cn(
    "inline-flex items-center gap-[0.45em] text-[0.95rem] font-semibold text-foreground transition-opacity hover:opacity-70",
    className
  );

  if (!href) {
    return (
      <span className={classes} aria-label="Taufan Fatahillah">
        {content}
      </span>
    );
  }

  return (
    <Link href={href} className={classes} aria-label="Taufan Fatahillah — Home">
      {content}
    </Link>
  );
}
```

### 15.4 Favicon / app icon

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img"
     aria-label="Taufan Fatahillah">
  <rect width="32" height="32" rx="6" fill="#0C0E0D" />
  <g transform="translate(1.6 1.6) scale(0.9)">
    <path d="M6.5 6.5H25.5V25.5H6.5Z" fill="none" stroke="#F2F4EF" stroke-width="3" stroke-linecap="square" />
    <rect x="13.25" y="13.25" width="5.5" height="5.5" fill="#FF8A70" />
  </g>
</svg>
```

Catatan:
- Tile gelap dipilih agar favicon konsisten di light dan dark mode.
- `rx="6"` mengikuti `--radius-control` yang diskalakan ke 32.
- Tidak ada `<text>` — path murni, sehingga tidak bergantung font.
- Mark memakai geometri yang sama, hanya diskalakan `0.9` agar bingkai tidak menempel ke sudut tile. Tidak ada perubahan stroke — di 16 px stroke efektif tetap `1.35 px`.
- Margin efektif `6.1` unit (19%) di semua sisi.

### 15.5 OG image (1200×630)

| Zona       | Isi                                                     |
| ---------- | ------------------------------------------------------- |
| Kiri atas  | `01 / SOFTWARE ENGINEER` (Geist Mono, 14px, uppercase)  |
| Tengah     | stacked lockup: mark 72px, wordmark 54px                |
| Kiri bawah | `cakfan.github.io` (mono, muted)                        |
| Kanan bawah| kotak accent 8×8 — **satu-satunya accent**              |
| Background | `#F4F5F1`, satu hairline 1px di atas footer zona       |

Karena kotak sudut memegang accent, titik di mark **dan** wordmark memakai `currentColor`. Ini menjaga aturan satu accent per komposisi dan menyiapkan bahasa yang sama untuk template sosial lain.

Simpan sumber sebagai SVG, rasterize ke `public/og.png` saat build manual. Jangan memakai screenshot atau gradient.

### 15.6 Metadata & sosial

- `src/app/icon.svg` → Next.js menghasilkan favicon otomatis.
- Tambah `apple-icon.png` (180×180) dan rujuk `themeColor` bila diperlukan.
- Pastikan `openGraph.images` tetap menunjuk `og.png`.
- Avatar dan template sosial **tidak** disajikan dari domain; simpan sebagai aset desain di `public/brand/social/` untuk sumber tunggal.
- Handle di `site-config.json` disamakan dengan keputusan §4.4.

---

## 16. QA Checklist

**Bentuk**

- [ ] Mark terbaca di 16, 24, 32, 64, 512 px.
- [ ] Titik tetap terpisah dari bingkai di 16 px.
- [ ] Tidak ada bentuk yang pecah saat di-zoom browser.
- [ ] Mark seimbang secara optis di dalam lingkaran avatar.

**Warna**

- [ ] Light, dark, grayscale, dan di atas accent.
- [ ] Bingkai ≥ 4.5:1 terhadap background.
- [ ] Tidak ada dua titik accent dalam satu komposisi.

**Avatar**

- [ ] Terbaca di 32 px (ukuran feed Instagram).
- [ ] Tidak ada bagian terpotong saat crop lingkaran **dan** crop kotak.
- [ ] Satu varian dipakai konsisten di 6 platform.
- [ ] Tidak ada wordmark, URL, atau foto orang.
- [ ] Background solid sampai tepi, bukan transparan.

**Watermark & template**

- [ ] Tiga post berdampingan terlihat satu seri.
- [ ] Watermark tidak menutupi subjek, wajah, atau teks.
- [ ] Satu watermark per gambar.
- [ ] Posisi watermark identik di seluruh slide carousel.
- [ ] Story/Reel: watermark tidak masuk area UI (atas 250, bawah 320, kanan 120).
- [ ] Kontras watermark terhadap area di belakangnya ≥ 3:1 (target 4.5:1).
- [ ] Tidak ada shadow, outline, blur, atau gradient.
- [ ] Semua teks di-bake; tidak ada font aplikasi.
- [ ] Label mono + index konsisten (`01 /`, `02 /`, …).

**Identitas**

- [ ] Handle seragam di semua platform sesuai §4.4.
- [ ] `@withcakfan` tampil sebagai aset mono + kotak, bukan teks lepas, di setiap touchpoint publik.
- [ ] Handle tidak pernah ditulis dengan pemisah, huruf kapital, atau font grotesk.
- [ ] Handle signature hanya memasang kotak accent bila tidak ada accent lain.
- [ ] Minimal 3 elemen visual DNA muncul di setiap post.
- [ ] Tes 3 detik dan tes 3 post lolos (§4.7).

**Teknis**

- [ ] Semua aset SVG logo tanpa `<text>` dan tanpa font reference.
- [ ] Favicon identik di Chrome, Firefox, Safari, Edge.
- [ ] `next build` sukses, static export tetap jalan.
- [ ] Tidak ada layout shift saat font swap di header.
- [ ] `aria-label` ada pada link logo; mark dekoratif `aria-hidden`.

**Dokumentasi**

- [ ] `brand-guidelines.md` §2 diperbarui + §10–12 ditambahkan.
- [ ] Tidak ada referensi `monogram.tsx` yang tersisa di kode aktif.
- [ ] `public/brand/social/README.md` berisi ukuran, warna, dan larangan.

---

## 17. Roadmap

| Fase | Kerja                                                              | Output                        | Estimasi |
| ---- | ------------------------------------------------------------------ | ----------------------------- | -------- |
| 0    | Audit & kunci keputusan (dokumen ini)                               | plan disetujui                | 0.5 hari |
| 1    | Eksplorasi mark + kalibrasi optis (16/24/32/48)                     | 3 kandidat, 1 final           | 1.5 hari |
| 2    | Produksi aset web (mark, lockup, icon, OG)                          | file final + preview          | 0.5 hari |
| 3    | Implementasi web (komponen, header, footer, metadata)               | PR komponen                   | 0.5 hari |
| 4    | **Produksi social kit** (4 avatar, 3 template, watermark, credit bar) | folder `public/brand/social/` | 1 hari   |
| 5    | **Terapkan ke platform** (IG, LinkedIn, GitHub, X, YouTube)         | profil konsisten              | 0.5 hari |
| 6    | QA (checklist §16) + uji 320/768/1440 + tes 32 px                   | laporan QA                    | 0.5 hari |
| 7    | Update dokumentasi + rilis                                          | merge + deploy                | 0.5 hari |

**Urutan rollout:** mark → komponen web → favicon → avatar (paling terlihat) → template IG → watermark → OG → dokumentasi.

Jangan mengganti favicon dan avatar sebelum mark final, karena browser, platform, dan cache sosial menyimpan versi lama dalam waktu lama.

---

## 18. Keputusan Terbuka

1. **Titik kotak vs titik bulat.** Rekomendasi: kotak. Bulat lebih "friendly", tapi kehilangan diferensiasi dan ketajaman di 16 px.
2. **Mark di header desktop atau hanya wordmark?** Rekomendasi: lockup. Mark memberi jangkar visual pada navigasi yang padat.
3. **Tile favicon gelap permanen atau mengikuti tema?** Rekomendasi: gelap permanen, agar dikenali sama di semua tab.
4. **Apakah `tf` tetap dipakai sebagai fallback teks?** Rekomendasi: tidak. Mark menggantikannya sepenuhnya.
5. **Animasi draw-in dipertahankan?** Rekomendasi: ya, satu kali di halaman utama; jika ragu, hapus — logo tetap utuh tanpa motion.
6. **Handle: `cakfan` atau `withcakfan`?** ✅ **Diputuskan:** `@withcakfan` adalah handle visual resmi (§4.4). `cakfan` hidup hanya sebagai alamat URL/repo dan tidak pernah tampil sebagai elemen visual.
7. **Avatar default: ink atau paper?** Rekomendasi: ink — kontras stabil di UI terang maupun gelap, dan menyamakan avatar dengan favicon.
8. **Watermark default feed: corner atau credit bar?** Rekomendasi: corner untuk foto tunggal, credit bar untuk carousel.
9. **Watermark di Reel?** Rekomendasi: ya, statis di kiri-atas; jika terasa mengganggu, hilangkan sama sekali — jangan animasikan.
10. **Monokrom di atas foto atau beri "chip" paper?** Rekomendasi: monokrom tanpa chip. Chip menambah bentuk keempat dan melanggar kesederhanaan mark.
11. **Handle ikut di watermark corner (W1)?** Rekomendasi: hanya bila sudut gambar benar-benar kosong; default mark saja. Handle yang berdesakan dengan detail foto lebih buruk daripada tidak ada.
12. **Handle di header website?** Rekomendasi: tidak. Header memakai nama; handle masuk di footer dan credit line.

---

## 19. Satu Kalimat untuk Ditulis di Mana Pun

> **Satu bingkai untuk ruang kerja, satu titik untuk pekerjaan yang selesai.**

Dan di bawahnya, selalu:

> **`@withcakfan` — dua nama, satu titik.**
