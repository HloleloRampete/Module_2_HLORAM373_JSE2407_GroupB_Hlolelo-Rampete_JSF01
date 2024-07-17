// src/sort.js

function sortComponent() {
    return {
      sorting: 'default',
  
      handleSort(event) {
        this.sorting = event.target.value;
        this.sortProducts();
      },
  
      sortProducts() {
        // Logic to sort the products
        console.log(`Sorting products by ${this.sorting}`);
        // You need to implement the actual sorting logic based on your product data
      }
    };
  }
  