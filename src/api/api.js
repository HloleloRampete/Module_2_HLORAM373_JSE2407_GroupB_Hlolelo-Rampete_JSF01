export async function getCategories() {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      if (!response.ok) {
        throw new Error("Data fetching failed, please check your network connection");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
      return { error: error };
    }
  }
  
  export async function fetchSingleProduct(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Data fetching failed, please check your network connection and reload.");
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      return { error: error };
    }
  }
  