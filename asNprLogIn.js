// Firebase SDK import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAbFSCL1Fz-O4c2mhppptMKAAdjDhXz3b0",
  authDomain: "newspaper-reports-live-comment.firebaseapp.com",
  projectId: "newspaper-reports-live-comment",
  storageBucket: "newspaper-reports-live-comment.appspot.com",
  messagingSenderId: "1098835117794",
  appId: "1:1098835117794:web:77a9bed9be4b8132df40bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login form submit
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("✅ Login Successful!");
          // redirect বা অন্য কাজ করুন
        })
        .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/invalid-login-credentials" || errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
            alert("ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে। দয়া করে আবার চেষ্টা করুন।");
        } else if (errorCode === "auth/too-many-requests") {
            alert("অনেকবার চেষ্টা করা হয়েছে। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।");
        } else {
            alert("একটি ত্রুটি ঘটেছে: " + error.message);
        }
        });
    });
  }
});