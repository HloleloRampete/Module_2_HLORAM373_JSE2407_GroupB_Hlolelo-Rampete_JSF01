// src/main.js
import Alpine from 'alpinejs';
import homePage from './pages/homePage.js';
import productDetailViewPage from './pages/productDetailViewPage.js';
import loginPage from './pages/loginPage.js';
import navbar from './components/header.js';
import sortComponent from './components/sort.js';
import filterComponent from './components/filter.js';


window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
  Alpine.store('app', {
    currentPage: 'home',
    productId: null,
  });

  Alpine.data('app', () => ({
    init() {
      // Any initialization logic can go here
    },
  }));

  Alpine.data('homePage', homePage);
  Alpine.data('productDetailViewPage', productDetailViewPage);
  Alpine.data('loginPage', loginPage);
  Alpine.data('navbar', navbar);
  Alpine.data('sortComponent', sortComponent);
  Alpine.data('filterComponent', filterComponent);
});

Alpine.start();
