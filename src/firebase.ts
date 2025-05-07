// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDftAb5AgYT3mKdLrKHbN0Momx1Ht5msdc",
  authDomain: "project6-9fb86.firebaseapp.com",
  projectId: "project6-9fb86",
  storageBucket: "project6-9fb86.firebasestorage.app",
  messagingSenderId: "1014389322918",
  appId: "1:1014389322918:web:883b742445966981a6b067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);