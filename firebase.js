//
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

//
const firebaseConfig = {
  apiKey: "AIzaSyD2zv3-hzcb3RiqYDhbZAEnj1Spka9ONmw",
  authDomain: "g-win-3e858.firebaseapp.com",
  projectId: "g-win-3e858"
};

//
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

----------------
window.signUp = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created successfully!");

      // Redirect to application page instead of dashboard
      window.location.href = "application.html";
    })
    .catch((error) => {
      // Show error message
      alert("Error: " + error.message);
    });
}

window.location.href = "submitted.html";
----------------
window.login = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");

      // Redirect logged-in users to dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      // Show error message
      alert("Error: " + error.message);
    });
}

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
