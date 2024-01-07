import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlb8LPp4rg_yoRfe0zMF4JLkaZuL3l4Lk",
  authDomain: "ship-it-aafd7.firebaseapp.com",
  projectId: "ship-it-aafd7",
  storageBucket: "ship-it-aafd7.appspot.com",
  messagingSenderId: "44873209771",
  appId: "1:44873209771:web:db6d7d11629bc85ce0a4ee",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
