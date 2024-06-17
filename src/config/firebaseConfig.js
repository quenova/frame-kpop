// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCX49M0bQz5j5Wr4ZZr_NhbbQ2ERfmrWw",
  authDomain: "frame-kpop.firebaseapp.com",
  projectId: "frame-kpop",
  storageBucket: "frame-kpop.appspot.com",
  messagingSenderId: "605974918144",
  appId: "1:605974918144:web:dddb76bc2e8a322ea494e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
