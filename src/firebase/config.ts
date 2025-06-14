import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAP1xo8fBVjLJqwFGad2_GiWFtgT-QCmco",
  authDomain: "front-end-with-gouse.firebaseapp.com",
  projectId: "front-end-with-gouse",
  storageBucket: "front-end-with-gouse.firebasestorage.app",
  messagingSenderId: "167007477624",
  appId: "1:167007477624:web:211c67ce193cc7a7eb328d",
  measurementId: "G-QLT87GPMLX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();