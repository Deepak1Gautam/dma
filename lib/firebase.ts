import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe8R3MrENjlEJqcnb280nNyGh-baA2MVs",
  authDomain: "dma-student-marketplace.firebaseapp.com",
  projectId: "dma-student-marketplace",
  storageBucket: "dma-student-marketplace.firebasestorage.app",
  messagingSenderId: "943442562437",
  appId: "1:943442562437:web:476005dfc34587f6d788ec",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);