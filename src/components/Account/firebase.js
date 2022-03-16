// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSveaJQ3poDlpinQMqYQikLQZYJpzXKRE",
  authDomain: "trident-jewelerry.firebaseapp.com",
  projectId: "trident-jewelerry",
  storageBucket: "trident-jewelerry.appspot.com",
  messagingSenderId: "136865192928",
  appId: "1:136865192928:web:594acc3bebb4d2ae746985",
  measurementId: "G-96YX0F9F0G"
};

const app = initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;