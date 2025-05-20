// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCDLjkm_kIQDZoKHm7w4vh_W__kZE4aoME",
  authDomain: "authentication-93bb7.firebaseapp.com",
  databaseURL: "https://authentication-93bb7-default-rtdb.firebaseio.com",
  projectId: "authentication-93bb7",
  storageBucket: "authentication-93bb7.appspot.com",
  messagingSenderId: "430166080842",
  appId: "1:430166080842:web:b5f2ce18ade5f01daad5b3"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("asNprloginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("✅ Login Successful!");
          window.location.href = "https://www.newspaperreports.com";
        })
        .catch((error) => {
          const code = error.code;

          if (
            code === "auth/invalid-login-credentials" ||
            code === "auth/user-not-found" ||
            code === "auth/wrong-password"
          ) {
            alert("❌ Incorrect email or password. Please try again.");
          } else if (code === "auth/too-many-requests") {
            alert("⚠️ অনেকবার চেষ্টা করা হয়েছে। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।");
          } else {
            alert("⚠️ একটি ত্রুটি ঘটেছে: " + error.message);
          }
        });
    });
  }
});
