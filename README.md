# Website DIPPO AI - Panduan Upload Gratis (untuk pemula)

Isi folder ini: 6 halaman (`index.html`, `login.html`, `lupa-password.html`, `coba-gratis.html`, `cara-kerja.html`, `hubungi-kami.html`), `style.css`, `script.js`, dan folder `img` (maskot + logo).
Jangan ubah nama file atau pindahkan isinya, supaya semua link tetap jalan.

## LANGKAH 1 - Ganti nomor WhatsApp (wajib)
1. Klik kanan file `script.js` > **Open with** > **Notepad** (Windows) atau **TextEdit** (Mac).
2. Cari baris: `const WA = "6281234567890";`
3. Ganti angkanya dengan nomor WhatsApp kamu. Format: awali `62`, tanpa `+`, tanpa `0` di depan. Contoh 0812-3456-7890 menjadi `6281234567890`.
4. Simpan (Ctrl+S). Jangan hapus tanda kutip dan titik koma.

## LANGKAH 2 - Coba dulu di komputer
1. Klik dua kali `index.html`. Website terbuka di browser.
2. Klik semua tombol dan menu. Pastikan setiap halaman terbuka.
3. Klik "Chat di WhatsApp" di halaman Hubungi Kami. Pastikan WhatsApp terbuka ke nomor kamu.

## LANGKAH 3 - Upload gratis ke Netlify
1. Buka **https://app.netlify.com/drop** di browser.
2. Kalau diminta, daftar gratis (bisa dengan Google atau email), lalu buka lagi alamat di atas.
3. Pastikan folder `dippo` sudah di-extract (kalau masih .zip, klik kanan > **Extract All**).
4. **Tarik (drag) seluruh folder `dippo`** ke kotak di halaman Netlify, lalu lepas.
5. Tunggu beberapa detik. Muncul link seperti `https://nama-acak.netlify.app`. Klik link itu, website kamu sudah online.
6. Ganti nama link: masuk **Site configuration > Change site name**, isi misalnya `dippoai`. Linknya jadi `https://dippoai.netlify.app`.

## LANGKAH 4 - Kalau ada yang diubah
Ubah file di komputer, lalu di Netlify buka site kamu > tab **Deploys** > tarik lagi folder `dippo` ke kotak yang tersedia. Versi lama otomatis diganti.

## Catatan penting
- Halaman **Login** dan **Lupa password** baru tampilan. Belum ada sistem akun.
- Form **Coba Gratis** akan membuka WhatsApp dengan nama, bisnis, dan email yang diisi. **Password tidak dikirim ke mana pun.** Sebaiknya hapus kolom password kalau sistem akun belum ada.
- Domain sendiri (`.com`/`.id`) berbayar. Bisa dipasang nanti lewat **Domain management** di Netlify.
- Tampilan di Netlify bisa sedikit berbeda dari yang dijelaskan di sini karena Netlify sering memperbarui menunya.

