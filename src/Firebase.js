// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbERhNSBNNOrgQtBTTwsAe8cgU9w2mhWk",
  authDomain: "todolist-auth-39f0d.firebaseapp.com",
  projectId: "todolist-auth-39f0d",
  storageBucket: "todolist-auth-39f0d.appspot.com",
  messagingSenderId: "1059139618734",
  appId: "1:1059139618734:web:a7bdf5f014b1466dfaaa3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
