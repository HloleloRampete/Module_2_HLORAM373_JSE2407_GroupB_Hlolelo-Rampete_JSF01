import { fetchProducts } from './api.js';

function productList() {
  return {
    products: [],
    loading: true,
    error: null,

    async initializeProducts() {
      console.log('Initializing products...');
      try {
        const fetchedProducts = await fetchProducts();
        console.log('Fetched Products:', fetchedProducts);
        this.products = fetchedProducts;
        console.log('Products state:', this.products);
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },

    viewProduct(id) {
      console.log(`View Product ID: ${id}`);
    },

    addToFavorites(event) {
      event.stopPropagation();
      console.log('Add to Favorites');
    }
  };
}

window.productList = productList;
