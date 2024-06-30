// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ToastContainer } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBer6RjEkexxWPpgOiR7eWMtN0nUFFenXo",
  authDomain: "hotel-booking-5c6df.firebaseapp.com",
  projectId: "hotel-booking-5c6df",
  storageBucket: "hotel-booking-5c6df.appspot.com",
  messagingSenderId: "1069792237458",
  appId: "1:1069792237458:web:b6fd04757ff417ebd0134b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

