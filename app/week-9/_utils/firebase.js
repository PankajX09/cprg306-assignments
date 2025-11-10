import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBbDBcosdaOLKAPK7aX4pdvkkBsV3FMkR0",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "cprg306-assignments-f070f.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "cprg306-assignments-f070f",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "cprg306-assignments-f070f.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "726372722345",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:726372722345:web:31ceec42087a1a36ababb8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);