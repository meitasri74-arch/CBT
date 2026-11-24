import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDwfH7WWcOM3h_pKRLwr4xKY_GV_jFFX4k",
  authDomain: "procedure-a5193.firebaseapp.com",
  projectId: "procedure-a5193",
  storageBucket: "procedure-a5193.firebasestorage.app",
  messagingSenderId: "808813031477",
  appId: "1:808813031477:web:e9f71c6755c5fd673ec17c",
  measurementId: "G-L0V57E8WVZ"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
