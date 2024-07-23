# SwiftCart

SwiftCart is a simple and user-friendly e-commerce store built with Alpine.js and TailwindCSS. This application allows users to browse products, filter and sort them, add products to their favorites, and manage their cart. The project demonstrates the power of Alpine.js for creating reactive UI components and TailwindCSS for rapid UI development.

## Technologies Used

- **Alpine.js**: A lightweight JavaScript framework for composing behavior directly in HTML.
- **TailwindCSS**: A utility-first CSS framework for creating custom designs without writing CSS.
- **HTML5**: The standard markup language for creating web pages.
- **JavaScript**: The programming language used to build dynamic functionality in the web application.
- **FakeStoreAPI**: An API to fetch product data for the e-commerce store.

## Setup Instructions

Follow these steps to set up and run SwiftCart on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HloleloRampete/jsf-react-ecommerce.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Alpine.js-e-commerce-store
   ```

3. **Open the `index.html` file in your preferred web browser:**
   ```bash
   npm run dev
   ```
   Alternatively, you can use a live server extension in VS Code or any other development tool to serve the file.

## Usage Examples

### Viewing Products

1. **Open the Home Page:**
   - Launch `index.html` in your web browser.
   - The home page displays a grid of products fetched from the FakeStoreAPI.

2. **Filter Products:**
   - Use the category dropdown to filter products by category.
   - Enter a search query to filter products by name.
   - Select a sort order to arrange products by price (lowest to highest or highest to lowest).

3. **View Product Details:**
   - Click on any product to open a modal displaying detailed information about the product.

4. **Add to Favorites:**
   - Click the "Add to Favorite" button to add a product to your favorites list.
   - Click the "Remove Favorite" button to remove a product from your favorites list.

5. **Add to Cart:**
   - Click the "Add to Cart" button to add a product to your shopping cart.

### Managing Filters

1. **Reset Filters:**
   - Click the "Reset" button to clear all filters and display all products.

### Components

#### Header Component

- The header includes the site logo, navigation links, and icons for the wishlist and cart.
- The wishlist and cart icons show the number of items added.

#### Filter and Sort Component

- This component includes dropdowns for category selection and sort order.
- It also includes a search bar for filtering products by name and a reset button to clear all filters.

#### Main Content Section

- Displays the list of products in a responsive grid layout.
- Each product card shows the product image, title, price, category, rating, and action buttons (favorite and add to cart).

#### Product Modal

- Displays detailed information about the selected product, including image, title, price, category, description, and rating.
- Includes a button to add the product to the cart.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.


## Acknowledgements

- [Alpine.js](https://alpinejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [FakeStoreAPI](https://fakestoreapi.com/)

## How the Code Works

### HTML Structure

The `index.html` file contains the structure of the application. Key sections include:
- **Header Component**: Contains navigation links for the Wishlist, Cart, and Login pages.
- **Main Content**: Displays the filter and sort options and the product grid.

### Alpine.js Store Script

The main functionality is driven by Alpine.js, encapsulated within the `store` function:

- **State Management**:
  ```javascript
  function store() {
      return {
          searchQuery: "",
          sortOrder: "",
          selectedCategory: "",
          loading: false,
          products: [],
          filteredProductsList: [],
          favorites: [],
          showModal: false,
          selectedProduct: null,
          categories: [],
      };
  }
  ```

- **Initialization**:
  The `init` function is called when the component is initialized, fetching products from the API and setting up the categories.
  ```javascript
  init() {
      this.fetchProducts();
  }
  ```

- **Fetching Products**:
  The `fetchProducts` function fetches product data from the FakeStore API and populates the product list and categories.
  ```javascript
  async fetchProducts() {
      this.loading = true;
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.products = data;
      this.filteredProductsList = data;
      this.categories = [
          ...new Set(data.map((product) => product.category)),
      ];
      this.loading = false;
  }
  ```

- **Product Filtering and Sorting**:
  The `searchProducts` function filters and sorts products based on the search query, selected category, and sort order.
  ```javascript
  searchProducts() {
      this.filteredProductsList = this.products
          .filter((product) => {
              return (
                  product.title
                      .toLowerCase()
                      .includes(this.searchQuery.toLowerCase()) &&
                  (!this.selectedCategory ||
                      product.category === this.selectedCategory)
              );
          })
          .sort((a, b) => {
              if (this.sortOrder === "asc") return a.price - b.price;
              if (this.sortOrder === "desc") return b.price - a.price;
              return 0;
          });
  }
  ```

- **Reset Filters**:
  The `resetFilters` function clears all filters and displays all products.
  ```javascript
  resetFilters() {
      this.searchQuery = "";
      this.selectedCategory = "";
      this.sortOrder = "";
      this.filteredProductsList = this.products;
  }
  ```

- **Favorites Management**:
  The `toggleFavorite` function adds or removes a product from the favorites list.
  ```javascript
  toggleFavorite(productId) {
      if (this.isFavorite(productId)) {
          this.favorites = this.favorites.filter((id) => id !== productId);
      } else {
          this.favorites.push(productId);
      }
  }
  ```

- **Modal Management**:
  The `openModal` and `closeModal` functions control the visibility of the product details modal.
  ```javascript
  openModal(product) {
      this.selectedProduct = product;
      this.showModal = true;
  }
  closeModal() {
      this.showModal = false;
      this.selectedProduct = null;
  }
  ```

### Tailwind CSS

Tailwind CSS provides utility classes for styling components efficiently. For example:
- The product card uses classes like `bg-white`, `border`, `rounded`, and `shadow` for styling.
- Flexbox utilities (`flex`, `justify-center`, `items-center`) are used for layout.

## Conclusion

SwiftCart is a simple yet powerful e-commerce application showcasing the capabilities of Alpine.js and Tailwind CSS. By following the setup instructions, you can explore and customize this project to suit your needs.
