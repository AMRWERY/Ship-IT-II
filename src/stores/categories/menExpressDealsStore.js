import { defineStore } from "pinia";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { storage, db } from "@/firebase/config";
import { getDocs, collection, query } from "firebase/firestore";

export const useMenExpressDealsStore = defineStore("men-express-products", {
  state: () => {
    return {
      images: [],
      files: [],
    };
  },

  actions: {
    async fetchAllExpressImages() {
      try {
        const imagesRef = ref(storage, "/Express Deals (men)");
        const imagesList = await listAll(imagesRef);
        for (const imageRef of imagesList.items) {
          const downloadURL = await getDownloadURL(imageRef);
          this.images.push({ name: imageRef.name, url: downloadURL });
        }
        const querySnap = await getDocs(
          query(collection(db, "men-express-deals"))
        );
        let products = [];
        querySnap.forEach((doc) => {
          let pro = {
            id: doc.id,
            ...doc.data(),
          };
          products.push(pro);
          //   console.log(products);
        });
        this.expressDeals = products;
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    },

    addFile(file) {
      this.files.push(file);
    },

    clearFiles() {
      this.files = [];
    },

    async uploadImg(file) {
      const storage = getStorage();
      const storagePath = "/Express Deals (men)/" + file.name;
      const storageRef = ref(storage, storagePath);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        console.log(`File ${file.name} uploaded:`, snapshot);
        this.fetchImg(storagePath);
      } catch (error) {
        console.error(`Error uploading file ${file.name}:`, error);
      }
    },

    async fetchImgExpress(filePath) {
      try {
        const downloadURL = await getDownloadURL(ref(storage, filePath));
        this.images.push({ name: filePath, url: downloadURL });
      } catch (error) {
        console.error(`Error fetching image ${filePath}:`, error);
      }
    },
  },
});
