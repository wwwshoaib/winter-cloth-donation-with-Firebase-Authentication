import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdx6TwQqo_FMoq2hLDMEqKGq5rFHAB3u4",
  authDomain: "winter-cloth-donation-d6de8.firebaseapp.com",
  projectId: "winter-cloth-donation-d6de8",
  storageBucket: "winter-cloth-donation-d6de8.firebasestorage.app",
  messagingSenderId: "362326395122",
  appId: "1:362326395122:web:0d4f7a447e9d4ea084286b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
