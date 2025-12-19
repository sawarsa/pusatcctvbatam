// Ambil elemen
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-button');
const searchBox = document.querySelector('#search-box');

// === HAMBURGER MENU ===
hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    navbarNav.classList.toggle('active');
    searchForm.classList.remove('active');
});

// === SEARCH MENU ===
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    searchForm.classList.toggle('active');
    navbarNav.classList.remove('active');

    if (searchForm.classList.contains('active')) {
        searchBox.focus();
    }
});

// === KLIK DI LUAR ===
document.addEventListener('click', function (e) {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

// === KLIK DI DALAM SEARCH ===
searchForm.addEventListener('click', function (e) {
    e.stopPropagation();
});

// === SEARCH FILTER ISI HALAMAN ===
searchBox.addEventListener('keyup', function () {
    const keyword = searchBox.value.toLowerCase();
    const items = document.querySelectorAll('.menu-card, .product-card');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();

        if (text.includes(keyword)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

