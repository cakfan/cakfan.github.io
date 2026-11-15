# Aset Sosial — Taufan Fatahillah

Sumber tunggal untuk avatar, watermark, dan template Instagram. SVG adalah sumber; PNG adalah ekspor siap unggah. Jangan mengedit PNG.

## Warna

| Nama    | Hex       | Pakai                                      |
| ------- | --------- | ------------------------------------------ |
| Ink     | `#0C0E0D` | teks utama, mark di bidang terang          |
| Paper   | `#F4F5F1` | background template, mark di bidang gelap  |
| Accent  | `#C2351F` | satu kotak accent di bidang terang         |
| Accent+ | `#FF8A70` | accent di bidang ink / avatar              |
| Muted   | `#5A605B` | label, URL, teks sekunder di paper         |
| Muted+  | `#A8AEA8` | teks sekunder di ink                       |
| Hairline| `#D5D8D1` | garis 1 px di paper                        |

## Aturan

1. **Satu accent per komposisi.** Kalau kotak sudut dipakai, titik di mark dan wordmark memakai `currentColor`.
2. **Monokrom di atas foto.** Accent tidak pernah muncul di watermark yang menempel pada gambar.
3. **Satu watermark per gambar.** Pilih W1, W2, atau W3 — jangan digabung.
4. **Posisi tetap** di seluruh carousel dan sepanjang reel.
5. **Tanpa efek.** Tidak ada shadow, outline, blur, atau gradient.
6. Handle selalu Geist Mono 500, lowercase, tracking `0.14em`. Jangan diganti font grotesk.

## Aset

| File                        | Ukuran      | Pakai                                                  |
| --------------------------- | ----------- | ------------------------------------------------------ |
| `avatar-ink-1024.png`       | 1024×1024   | avatar kanonik semua platform                          |
| `avatar-ink-512.png`        | 512×512     | email, Notion, WhatsApp                                |
| `avatar-ink-400.png`        | 400×400     | LinkedIn, X                                            |
| `avatar-paper-1024.png`     | 1024×1024   | konteks terang, slide, email header                    |
| `avatar-accent-1024.png`    | 1024×1024   | kampanye saja — **bukan** avatar profil                |
| `avatar-mono.svg`           | 32 grid     | watermark, footer dokumen (transparan, `currentColor`) |
| `watermark-mark.svg`        | 34×34       | W1 corner mark; ubah `color` di root untuk foto gelap  |
| `credit-bar.svg` / `.png`   | 1080×84     | W2 bar bawah slide tengah carousel                     |
| `handle-signature.svg`      | 268×48      | handle + kotak accent, akhir komposisi                 |
| `handle-plain.svg`          | 258×48      | handle tanpa kotak, caption/bio/credit line            |
| `handle-stack.svg`          | 176×104     | mark di atas handle, email signature                   |
| `template-cover.svg`        | 1080×1350   | T1 slide pertama / post tunggal                        |
| `template-insight.svg`      | 1080×1350   | T2 slide tengah                                        |
| `template-end.svg`          | 1080×1350   | T3 slide terakhir                                      |

Ekspor `@2x` disediakan untuk ketiga varian handle. `watermark-mark@4x.png` adalah referensi bentuk, bukan ukuran pakai.

## Mode watermark

| Mode | Bentuk                                   | Penempatan                          |
| ---- | ---------------------------------------- | ----------------------------------- |
| W1   | mark 34 px (story/reel 40 px), monokrom  | sudut paling kosong, inset 64 px    |
| W2   | credit bar 84 px, full-width             | bawah slide tengah                  |
| W3   | stacked lockup di tengah bidang paper    | slide pertama/terakhir, cover       |

Story/Reel: watermark di `x=64`, `y=280`. Jangan masuk area bawah `320 px` atau kanan `120 px`.

## Regenerasi PNG

SVG memakai teks Geist/Geist Mono. Untuk ekspor ulang, pasang font di sistem lalu render dengan sharp:

```js
await sharp("template-cover.svg", { density: 96 })
  .resize({ width: 1080 })
  .png()
  .toFile("template-cover.png");
```

Tanpa Geist terpasang, teks akan jatuh ke font fallback dan metriknya bergeser. Selalu periksa hasil ekspor sebelum mengunggah.
