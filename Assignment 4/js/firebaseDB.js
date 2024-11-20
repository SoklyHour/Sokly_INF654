// Import the functions you need from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTwGX_CQ81d3b5cdfIDKVyHeNp-SmQeOg",
  authDomain: "tracker-61a00.firebaseapp.com",
  projectId: "tracker-61a00",
  storageBucket: "tracker-61a00.firebasestorage.app",
  messagingSenderId: "366967901447",
  appId: "1:366967901447:web:5376661214d9d9762b89a2",
  measurementId: "G-3EW1W0MM8X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a task
export async function addTaskToFirebase(task) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    return { id: docRef.id, ...task };
  } catch (e) {
    console.error("Error adding task: ", e);
  }
}

export async function getTasksFromFirebase() {
  const tasks = [];
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.error("Error retrieving tasks: ", e);
  }
  return tasks;
}

export async function deleteTaskFromFirebase(id) {
  try {
    await deleteDoc(doc(db, "tasks", id));
  } catch (e) {
    console.error("Error deleting task: ", e);
  }
}

export async function updateTaskInFirebase(id, updatedData) {
  console.log(updatedData, id);
  try {
    const taskRef = doc(db, "tasks", id);
    console.log(taskRef);
    await updateDoc(taskRef, updatedData);
  } catch (e) {
    console.error("Error updating task: ", e);
  }
}