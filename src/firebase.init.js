import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHffrmmGWYmfEck5gs963BJwFK1Z4Eajk",
  authDomain: "good-doctor-1080a.firebaseapp.com",
  projectId: "good-doctor-1080a",
  storageBucket: "good-doctor-1080a.appspot.com",
  messagingSenderId: "649549702651",
  appId: "1:649549702651:web:607a2268661887edb5575e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;