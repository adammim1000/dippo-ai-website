/* GANTI nomor WhatsApp di bawah (format 62 tanpa + dan tanpa 0 di depan) */
const WA = "6285889002998";
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(a.dataset.wa);
});
document.querySelectorAll(".mata").forEach(b => b.addEventListener("click", () => {
  const i = b.parentElement.querySelector("input");
  i.type = i.type === "password" ? "text" : "password";
}));
const f = document.querySelector("form[data-aksi]");
if (f) f.addEventListener("submit", e => {
  e.preventDefault();
  const p = document.querySelector(".pesan");
  if (f.dataset.aksi === "daftar") {
    const d = new FormData(f);
    const t = "Halo DIPPO, saya ingin coba gratis 14 hari. Nama: " + d.get("nama") + ", Bisnis: " + d.get("bisnis") + ", Email: " + d.get("email");
    window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(t), "_blank");
  } else {
    p.textContent = f.dataset.aksi === "login"
      ? "Login belum aktif. Untuk mencoba, daftar lewat Coba Gratis."
      : "Fitur ini belum aktif. Hubungi kami lewat WhatsApp.";
    p.style.display = "block";
  }
});
