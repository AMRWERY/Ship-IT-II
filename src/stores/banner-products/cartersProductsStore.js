import { defineStore } from "pinia";
import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useCartersProductsStore = defineStore("carters-products", {
  state: () => {
    return {
      products: [],
      selectedProduct: null,
      cart: [],
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

    addToCart(product) {
      const existingCartData = JSON.parse(sessionStorage.getItem("cart")) || [];
      const existingProductIndex = existingCartData.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        existingCartData[existingProductIndex].quantity += 1;
      } else {
        existingCartData.push({ ...product, quantity: 1 });
      }
      sessionStorage.setItem("cart", JSON.stringify(existingCartData));
      this.cart = existingCartData;
    },

    getCart() {
      const cartData = JSON.parse(sessionStorage.getItem("cart")) || [];
      // console.log("Cart data:", cartData);
      return cartData;
    },
  },

  getters: {
    getProductDetails: (state) => state.products,
  },
});
