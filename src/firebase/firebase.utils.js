import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtxB4BDj53RcK02prQvHG1aS_nXhd_87k",
  authDomain: "crwn-clothing-1db3b.firebaseapp.com",
  projectId: "crwn-clothing-1db3b",
  storageBucket: "crwn-clothing-1db3b.appspot.com",
  messagingSenderId: "123742948853",
  appId: "1:123742948853:web:12d1f1cd405078a77624bc",
  measurementId: "G-NGY4TPTQ9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Set up Google authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
