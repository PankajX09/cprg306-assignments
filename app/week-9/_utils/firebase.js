import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbDBcosdaOLKAPK7aX4pdvkkBsV3FMkR0",
  authDomain: "cprg306-assignments-f070f.firebaseapp.com",
  projectId: "cprg306-assignments-f070f",
  storageBucket: "cprg306-assignments-f070f.firebasestorage.app",
  messagingSenderId: "726372722345",
  appId: "1:726372722345:web:31ceec42087a1a36ababb8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);