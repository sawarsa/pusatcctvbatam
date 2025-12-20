
// === AMBIL ELEMEN YANG DIPERLUKAN SAJA ===
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// === HAMBURGER MENU (Buka/Tutup Navigasi) ===
if (hamburger) {
    hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        navbarNav.classList.toggle('active');
    });
}

// === KLIK DI LUAR (Tutup Navigasi otomatis) ===
document.addEventListener('click', function (e) {
    // Jika klik dilakukan di luar navbar dan bukan di tombol hamburger, tutup menu
    if (navbarNav && !navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Tutup menu saat link di dalam navbar di-klik (opsional, bagus untuk UX satu halaman)
const navLinks = document.querySelectorAll('.navbar-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
    });
});