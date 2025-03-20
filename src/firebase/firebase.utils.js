import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase Configuration
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
const auth = getAuth(app);
const firestore = getFirestore(app);

// Create User in Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userDocRef = doc(firestore, "users", userAuth.uid);
  const snapShot = await getDoc(userDocRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      console.log("✅ User Created Successfully!");
    } catch (error) {
      console.log("❌ Error creating user:", error.message);
    }
  }

  return userDocRef;
};

// Google Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Export Firebase Utilities
export { auth, firestore, createUserWithEmailAndPassword };
