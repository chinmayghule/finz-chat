import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtOgsaj-08Mb9cfQFv93uGXjzLZcM8nbI",
  authDomain: "finz-chat.firebaseapp.com",
  projectId: "finz-chat",
  storageBucket: "finz-chat.appspot.com",
  messagingSenderId: "324285725803",
  appId: "1:324285725803:web:c18fb66de6bf864603452e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };