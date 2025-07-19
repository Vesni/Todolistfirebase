import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";   
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";




const firebaseConfig = {
  apiKey: "AIzaSyCnhb_Vy7O0Uee1xmhCxccWQedGNeYK1c4",
  authDomain: "registration-ce3ce.firebaseapp.com",
  projectId: "registration-ce3ce",
  storageBucket: "registration-ce3ce.firebasestorage.app",
  messagingSenderId: "148042226778",
  appId: "1:148042226778:web:995705971b47d4cb980c63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 



document.getElementById('sign-btn').addEventListener('click',() => {
    const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
const message = document.getElementById('message');

createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    message.style.color = "green";
    message.textContent = "Sign Up successful!!";
  })
  .catch((error) => {
    message.style.color = "red";
    message.textContent = error.message;
  });



});