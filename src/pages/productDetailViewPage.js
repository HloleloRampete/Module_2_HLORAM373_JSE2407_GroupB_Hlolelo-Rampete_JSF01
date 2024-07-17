// src/pages/productDetailViewPage.js
export default function productDetailViewPage() {
    return {
      init() {
        this.productId = Alpine.store('app').productId;
        this.fetchProduct();
      },
      productId: null,
      product: null,
      async fetchProduct() {
        const response = await fetch(`https://fakestoreapi.com/products/${this.productId}`);
        this.product = await response.json();
      },
    };
  }
  