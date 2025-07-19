// getFireStore ---> connects to the firebase db 
// collection --> access the group of documents 

// addDoc  -----> adds a new document(row) into the firebase db

// onSnapShot  ----> Auto-updates the UI when Firestore data changes



// query and orderBy --->   filtering the documents
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getFirestore,collection,addDoc,onSnapshot,query,orderBy, deleteDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
  apiKey: "AIzaSyCnhb_Vy7O0Uee1xmhCxccWQedGNeYK1c4",
  authDomain: "registration-ce3ce.firebaseapp.com",
  projectId: "registration-ce3ce",
  storageBucket: "registration-ce3ce.firebasestorage.app",
  messagingSenderId: "148042226778",
  appId: "1:148042226778:web:995705971b47d4cb980c63"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("addTaskBtn");

const taskList = document.createElement("ul");
taskList.style.listStyle = "none";
taskList.style.marginTop = "20px";

document.querySelector(".main-box1").appendChild(taskList);
// fetch id ----> getElementById()
// fetch class ---->  querySelector()

taskBtn.addEventListener("click", async () => {
  // trim the extra spaces
  const task = taskInput.value.trim();

  if (task !== "") {
    await addDoc(collection(db, "tasks"), {
      // document data goes here

task: task,
completed: false,
timestamp: new Date(),
uid: "demo"

    });
    taskInput.value = ""; //clearing the input field
  }
});
const q = query(collection(db, 'tasks'), orderBy('timestamp'));

onSnapshot(q, (snapshot) => {
  taskList.innerHTML = ""; // clear current list

  snapshot.forEach((docvar) => {
    const taskItem = document.createElement("li");


const taskText = document.createElement("span");



const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.color = "red";






    taskItem.textContent = docvar.data().task; // Assuming 'Task' is the field name for the task text
    taskItem.style.margin = "10px";
taskItem.style.padding = "10px";
taskItem.style.fontSize = "20px";
taskItem.style.color = "white";
taskItem.style.width = "60%";
taskItem.style.borderRadius = "8px";
taskItem.style.backgroundColor = "rgba(255, 163, 163, 0.79)";
taskItem.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.2)";
taskItem.style.textAlign = "center";
    taskList.appendChild(taskItem);



deleteBtn.addEventListener("click", async () => {
     
      await deleteDoc(doc(db, "tasks", docvar.id));
    });

    
    taskItem.appendChild(deleteBtn);

  });
});