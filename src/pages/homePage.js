// src/pages/homePage.js
export default function homePage() {
  return {
    init() {
      this.fetchProducts();
    },
    products: [],
    async fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      this.products = await response.json();
    },
  };
}
