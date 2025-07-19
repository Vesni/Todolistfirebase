import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";   
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";




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



document.getElementById('login-btn').addEventListener('click',() => {

const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
const message = document.getElementById('message'); 

signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    message.style.color = "green";
    message.textContent = "Login Successful!!";
  })
  .catch((error) => { 
    message.style.color = "red";
    message.textContent = "Login Failed!!";
  });


});
document.getElementById("forgetPass").addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById("message");

  if (!email) {
    message.style.color = "red";
    message.textContent = "Please enter your Gmail ID.";
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      message.style.color = "green";
      message.textContent = "Reset link is sent to your mail, Please check it.";
    })
    .catch((error) => {
      message.style.color = "red";
      message.textContent = error.message;
    });
});

document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      message.style.color = "green";
      message.textContent = 'Login successful! Redirecting.....';

      setTimeout(() => {
        window.location.href = 'Home.html';
      }, 1500); 
    })
    .catch((error) => {
      message.textContent = error.message;
    });
});