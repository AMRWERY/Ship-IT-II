import { defineStore } from "pinia";
import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useCartersProductsStore = defineStore("carters-products", {
  state: () => {
    return {
      products: [],
      selectedProduct: null,
      filteredProducts: [],
    };
  },

  actions: {
    async fetchProducts() {
      const querySnap = await getDocs(
        query(collection(db, "carters-products"))
      );
      let products = [];
      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        products.push(pro);
        // console.log(products);
      });
      this.products = products;
    },

    async getProductById(id) {
      const docSnap = await getDoc(doc(db, "carters-products", id));
      if (docSnap.exists()) {
        let product = { ...docSnap.data(), id: id };
        // console.log(product);
        this.selectedProduct = product;
      }
    },

    filterProducts(minPrice, maxPrice) {
      if (!minPrice && !maxPrice) {
        this.filteredProducts = [];
      } else {
        this.filteredProducts = this.products.filter((product) => {
          return (
            (!minPrice || product.price >= minPrice) &&
            (!maxPrice || product.price <= maxPrice)
          );
        });
      }
      // console.log("Filtered products in store:", this.filteredProducts);
    },
  },

  getters: {
    getProductDetails: (state) => state.products,
    getFilteredProducts: (state) => state.filteredProducts,
  },
});
