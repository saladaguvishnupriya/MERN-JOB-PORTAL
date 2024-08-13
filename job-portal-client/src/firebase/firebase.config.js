// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo_Nv4KKNTot019PmBt63qx9q3kz2jlew",
  authDomain: "job-portal-demo-8517f.firebaseapp.com",
  projectId: "job-portal-demo-8517f",
  storageBucket: "job-portal-demo-8517f.appspot.com",
  messagingSenderId: "278082660209",
  appId: "1:278082660209:web:4058c7a4f8605ac5f7b8d0",
  measurementId: "G-21ZJRMGT6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;