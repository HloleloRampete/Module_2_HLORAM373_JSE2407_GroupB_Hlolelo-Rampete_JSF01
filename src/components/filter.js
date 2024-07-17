// src/filter.js

import { getCategories } from "../api/api"; // Make sure to adjust the import path

function filterComponent() {
  return {
    categories: [],
    filterItem: "All categories",
    searchTerm: "",
    error: null,

    async initializeCategories() {
      try {
        const { response, error } = await getCategories();
        if (error) {
          this.error = error;
        } else {
          this.categories = response;
        }
      } catch (err) {
        this.error = err.message;
      }
    },

    toggleDropdown() {
      const dropDown = document.getElementById("dropdown");
      dropDown.classList.toggle("hidden");
    },

    handleFilter(category) {
      this.filterItem = category;
      document.getElementById("dropdown").classList.add("hidden");
      this.fetchProducts();
    },

    handleSearch(event) {
      this.searchTerm = event.target.value;
      this.searchProducts();
    },

    async fetchProducts() {
      // Implement the logic to fetch products based on filterItem
      console.log(`Fetching products for category: ${this.filterItem}`);
      // You need to implement the actual fetch logic based on your API
    },

    async searchProducts() {
      // Implement the logic to search products based on searchTerm
      console.log(`Searching products for term: ${this.searchTerm}`);
      // You need to implement the actual search logic based on your API
    }
  };
}
