import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {

apiKey: "YOURKEY",

authDomain: "YOURDOMAIN",

projectId: "YOURPROJECT"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signUp=function(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

createUserWithEmailAndPassword(auth,email,password)

.then(()=>{

alert("Account created");

});

}

window.login=function(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then(()=>{

window.location="dashboard.html";

});

}