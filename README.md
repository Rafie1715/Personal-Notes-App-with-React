# Personal Notes App (Aplikasi Catatan Pribadi)

Aplikasi manajemen catatan pribadi berbasis web yang dibangun menggunakan **React** dan **Vite**. Aplikasi ini memungkinkan pengguna untuk membuat, menyimpan, mengarsipkan, dan menghapus catatan, serta mendukung fitur autentikasi, tema (gelap/terang), dan multi-bahasa.

## 🌟 Fitur Utama

* **Autentikasi Pengguna**: Registrasi akun baru dan Login untuk mengakses catatan pribadi.
* **Manajemen Catatan**:
    * Membuat catatan baru.
    * Melihat daftar catatan aktif.
    * Melihat detail catatan.
    * Menghapus catatan.
* **Arsip Catatan**: Fitur untuk mengarsipkan catatan (menyembunyikan dari daftar utama) dan mengembalikannya (unarchive).
* **Pencarian**: Mencari catatan berdasarkan judul secara *real-time*.
* **Personalisasi**:
    * **Tema**: Dukungan Dark Mode (Mode Gelap) dan Light Mode (Mode Terang).
    * **Bahasa**: Dukungan alih bahasa (Bahasa Indonesia & English).
* **Desain Responsif**: Tampilan yang menyesuaikan ukuran layar perangkat.

## 🛠️ Teknologi yang Digunakan

* [React](https://react.dev/) (v19) - Library UI utama.
* [Vite](https://vitejs.dev/) - Build tool dan development server yang cepat.
* [React Router DOM](https://reactrouter.com/) (v7) - Untuk manajemen routing halaman.
* [Context API](https://react.dev/reference/react/useContext) - Untuk manajemen state global (Tema & Bahasa).
* [React Icons](https://react-icons.github.io/react-icons/) - Koleksi ikon vektor.
* [HTML React Parser](https://www.npmjs.com/package/html-react-parser) - Untuk merender string HTML menjadi komponen React.
* REST API - Menggunakan API publik dari Dicoding (`https://notes-api.dicoding.dev/v1`).

## ⚙️ Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:
* [Node.js](https://nodejs.org/) (Versi LTS direkomendasikan).
* npm (biasanya sudah termasuk dalam instalasi Node.js).

## 🚀 Instalasi dan Menjalankan Proyek

1.  **Clone repositori ini** (atau ekstrak file zip):
    ```bash
    git clone [https://github.com/username-anda/personal-notes-app.git](https://github.com/username-anda/personal-notes-app.git)
    cd personal-notes-app
    ```

2.  **Instal dependensi**:
    ```bash
    npm install
    ```

3.  **Jalankan server pengembangan**:
    ```bash
    npm run dev
    ```

4.  **Buka aplikasi**:
    Buka browser dan kunjungi `http://localhost:5173` (atau port lain yang ditampilkan di terminal).

## cdc Skrip Tersedia

Dalam direktori proyek, Anda dapat menjalankan perintah berikut:

* `npm run dev`: Menjalankan aplikasi dalam mode pengembangan.
* `npm run build`: Membangun aplikasi untuk produksi ke folder `dist`.
* `npm run preview`: Menjalankan pratinjau lokal dari hasil build produksi.
* `npm run lint`: Memeriksa kode menggunakan ESLint untuk menemukan masalah potensial.

## 📂 Struktur Proyek

```text
src/
├── components/       # Komponen UI yang dapat digunakan kembali (NoteList, NoteItem, Navigation, dll)
├── contexts/         # React Context untuk state global (LocaleContext, ThemeContext)
├── hooks/            # Custom Hooks (contoh: useInput)
├── pages/            # Komponen Halaman (HomePage, AddPage, LoginPage, dll)
├── styles/           # File CSS global
├── utils/            # Fungsi utilitas dan konfigurasi API (network-data.js)
├── App.jsx           # Komponen utama dan konfigurasi Routing
└── main.jsx          # Titik masuk aplikasi (Entry point)
