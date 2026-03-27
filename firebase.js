// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD2zv3-hzcb3RiqYDhbZAEnj1Spka9ONmw",
  authDomain: "g-win-3e858.firebaseapp.com",
  projectId: "g-win-3e858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SIGN UP
window.signUp = function() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {

      alert("Account created successfully!");

      // Go to application page
      window.location.href = "application.html";

    })
    .catch((error) => {

      alert("Error: " + error.message);

    });
};

// LOGIN
window.login = function() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {

      alert("Login successful!");

      // Go to dashboard
      window.location.href = "dashboard.html";

    })
    .catch((error) => {

      alert("Error: " + error.message);

    });
};
