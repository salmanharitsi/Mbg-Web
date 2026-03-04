> [!WARNING]
> **⚠️ PERHATIAN — PENTING UNTUK DIBACA**
>
> Proyek ini dibuat **khusus sebagai tugas dalam proses rekrutmen** dan **bukan merupakan produk resmi pemerintah**. Beberapa poin penting:
>
> - 📊 **Seluruh data yang ditampilkan adalah data dummy** (fiktif), dibuat semata-mata untuk keperluan demonstrasi teknis. Data tidak mencerminkan kondisi nyata program MBG di lapangan.
> - 📝 Sebagian konten dan penjelasan program MBG dikutip/diadaptasi dari situs resmi Badan Gizi Nasional: **[bgn.go.id](https://www.bgn.go.id/)** dan Perpres Nomor 83 Tahun 2024.
> - 🚫 Proyek ini tidak berafiliasi dengan, disponsori oleh, atau mewakili Badan Gizi Nasional (BGN) maupun instansi pemerintah lainnya.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Motion-11-FF4154?style=for-the-badge&logo=framer&logoColor=white" />
<img src="https://img.shields.io/badge/Leaflet.js-1.9-199900?style=for-the-badge&logo=leaflet&logoColor=white" />
<img src="https://img.shields.io/badge/Recharts-2-22C55E?style=for-the-badge" />

<br /><br />

# 🥗 Portal Makan Bergizi Gratis
### Sistem Informasi & Visualisasi Sebaran Program MBG

**Website informatif dan interaktif untuk memantau penyebaran Program Makan Bergizi Gratis (MBG) di seluruh Indonesia — menuju Indonesia Emas 2045.**

<br />

[🌐 Live Demo](https://mbg-web.vercel.app/)

</div>

---

## 📸 Tampilan

| Landing Page | Halaman Sebaran |
|---|---|
| Hero section dengan animasi dan statistik | Peta interaktif seluruh Indonesia |
| About BGN dengan floating card | Chart distribusi per provinsi/kab/kota |
| Timeline program MBG 2024–2045 | Tabel data lengkap dengan filter |

---

## ✨ Fitur Unggulan

### 🏠 Landing Page

| Fitur | Deskripsi |
|---|---|
| **Hero Section Animatif** | Full-screen gradient gelap dengan animated blob, grid pattern, dan stat cards glassmorphic yang muncul dengan stagger animation |
| **Navbar Glassmorphic** | Transparan di atas, frosted glass saat scroll; mobile-responsive dengan slide-in drawer menu |
| **About BGN** | Profil Badan Gizi Nasional dengan floating card animasi dan 4 pilar program |
| **Sasaran Program** | Tiga kartu sasaran (Peserta Didik, Anak-Anak, Ibu Hamil & Menyusui) dengan statistik target penerima |
| **Tujuan Strategis** | Enam tujuan strategis BGN dalam grid card interaktif dengan nomor besar dekoratif |
| **Timeline MBG** | 8 milestone perjalanan program dari Oktober 2024 hingga Indonesia Emas 2045 dengan status badge |
| **Mitra & Kolaborasi** | Infinite horizontal scroll seamless logo 12+ kementerian/lembaga, berhenti saat di-hover |
| **FAQ Accordion** | 8 pertanyaan umum dengan animasi expand/collapse smooth |
| **Footer** | Tautan navigasi lengkap, info kontak BGN, dan tautan eksternal kementerian |

### 🗺️ Halaman Sebaran MBG

#### Section 01 — Grafik Batang Interaktif
- **Toggle tampilan** Per Provinsi (top 20) ↔ Per Kab/Kota (top 25)
- **Dropdown filter provinsi** saat mode Kab/Kota aktif
- **3 bar per area**: Sekolah MBG · Anak Usia Emas · Ibu Hamil & Menyusui
- **Custom tooltip glassmorphic** dengan detail data saat hover
- **Summary strip** total statistik yang otomatis terupdate sesuai filter
- Dibangun dengan **Recharts** untuk performa optimal

#### Section 02 — Peta Geografis Interaktif
- **Peta Leaflet.js** dengan tile CartoDB Light yang bersih dan modern
- **Circle heatmap markers** — warna berubah dari hijau muda ke hijau tua berdasarkan intensitas data
- **Toggle** Per Provinsi ↔ Per Kab/Kota, circle otomatis redraw
- **Search bar cerdas** — ketik nama daerah → dropdown suggestion → klik → map langsung fly + zoom
- **Tooltip hover** berisi 3 data lengkap per area (sekolah, anak, ibu hamil)
- **Custom zoom controls** + tombol reset view ke posisi Indonesia penuh
- **Legend intensitas** warna di pojok bawah kiri
- Diload secara **dynamic (no SSR)** agar tidak konflik dengan server-side rendering Next.js

#### Section 03 — Tabel Data Lengkap
- **250+ baris** data seluruh kab/kota Indonesia
- **Sort semua kolom** — klik header untuk toggle ascending/descending
- **Search full-text** berdasarkan nama kota/kabupaten atau provinsi
- **Filter dropdown** per provinsi
- **Pagination** 10 data per halaman dengan navigasi lengkap (prev/next/jump)
- **Mini bar visualizer** per baris di kolom Sekolah & Anak Usia Emas
- **Summary stats** otomatis terupdate sesuai filter aktif

### 🎨 Desain & UX

- **Glassmorphism** — `backdrop-filter: blur` pada navbar, cards, dan tooltip
- **Motion (Framer Motion)** — `useInView` triggers, stagger reveals, hover microinteractions, page load animations
- **Fully Responsive** — Mobile-first, grid adaptive, typography fluid dengan `clamp()`
- **Custom color system** — Primary hijau (`#16a34a`) + Secondary emas (`#eab308`) via Tailwind v4 `@theme`
- **Custom utilities** — `glass`, `glass-light`, `glass-dark`, `text-gradient`, `font-display`, `font-body`
- **Tipografi** — Plus Jakarta Sans (display/heading) + DM Sans (body text)
- **No SSR issues** — Leaflet diload dinamis untuk kompatibilitas penuh Next.js App Router

---

## 🛠️ Tech Stack

| Kategori | Library / Tool | Versi |
|---|---|---|
| Framework | Next.js (App Router) | 15.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | v4 |
| Animation | Motion (Framer Motion) | 11.x |
| Mapping | Leaflet.js | 1.9.x |
| Charting | Recharts | 2.x |
| Icons | Lucide React | latest |
| Fonts | Plus Jakarta Sans, DM Sans | Google Fonts |
| Map Tiles | CartoDB Positron | — |

---

## 🚀 Instalasi & Menjalankan Lokal

### Prasyarat

Pastikan sudah terinstall di komputer Anda:

- **Node.js** `>= 18.17.0` — [Download](https://nodejs.org/)
- **npm** `>= 9.x` atau **yarn** / **pnpm**
- **Git** — [Download](https://git-scm.com/)

### Langkah-langkah

**1. Clone repository**

```bash
git clone https://github.com/salmanharitsi/Mbg-Web.git
cd mbg-web
```

**2. Install dependencies utama**

```bash
npm install
```

**3. Install dependencies tambahan** (Leaflet + Recharts)

```bash
npm install recharts leaflet
npm install --save-dev @types/leaflet
```

**4. Jalankan development server**

```bash
npm run dev
```

**5. Buka di browser**

```
http://localhost:3000
```

### Script yang Tersedia

| Script | Perintah | Deskripsi |
|---|---|---|
| Development | `npm run dev` | Jalankan server development dengan hot-reload |
| Build | `npm run build` | Build untuk production |
| Start | `npm run start` | Jalankan hasil build production |
| Lint | `npm run lint` | Cek kualitas kode dengan ESLint |

---

## 👤 Author

<table>
  <tr>
    <td align="center">
      <b>Salman Al Haritsi</b><br />
      <sub>Frontend Developer</sub><br />
      <a href="https://github.com/salman-alharitsi">GitHub</a>
    </td>
  </tr>
</table>

---

## 📄 Lisensi

Proyek ini dibuat **khusus untuk keperluan rekrutmen** dan tidak dimaksudkan untuk penggunaan komersial maupun produksi. Seluruh konten yang diadaptasi dari sumber resmi pemerintah tetap menjadi hak milik instansi terkait.

---
