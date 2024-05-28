// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtCrfhm5WngCEE8QnVfZBTq5vhlkDBBQg",
  authDomain: "driving-school-4832d.firebaseapp.com",
  projectId: "driving-school-4832d",
  storageBucket: "driving-school-4832d.appspot.com",
  messagingSenderId: "414885761815",
  appId: "1:414885761815:web:a0a56b683e84c28f4e1d52",
  measurementId: "G-X4FJCX4L4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const auth = firebase.auth();

const submit = document.getElementById("signup-submit-btn-el");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  createUserWithEmailAndPassword(auth, email, password, username)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = "home.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // ..
    });
});
