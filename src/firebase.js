// InitializeFirebase.js
import "firebase/app";
import { initializeApp } from "firebase/app";

import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiuzRZjl7B6TxD97MF7KPtIg8hQPL4Zyw",
  authDomain: "portfolio-503c4.firebaseapp.com",
  projectId: "portfolio-503c4",
  storageBucket: "portfolio-503c4.appspot.com",
  messagingSenderId: "407026084206",
  appId: "1:407026084206:web:37646a4b616ceee61d797f",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
