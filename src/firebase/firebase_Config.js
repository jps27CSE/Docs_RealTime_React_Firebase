// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8GVviFdZ7rnE8XJBB30BLp8kTvz3CSqs",
  authDomain: "docreactfirebase.firebaseapp.com",
  projectId: "docreactfirebase",
  storageBucket: "docreactfirebase.appspot.com",
  messagingSenderId: "233621450568",
  appId: "1:233621450568:web:96af7cdf3928913a8b0d7d",
  measurementId: "G-F7X74VMVK1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);
