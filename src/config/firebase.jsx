import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAdditionalUserInfo,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
getAnalytics(app);

export {
  auth,
  browserLocalPersistence,
  collection,
  deleteDoc,
  deleteObject,
  doc,
  firestore,
  getAdditionalUserInfo,
  getDoc,
  getDocs,
  getDownloadURL,
  limit,
  onAuthStateChanged,
  orderBy,
  provider,
  query,
  ref,
  setDoc,
  setPersistence,
  signInWithPopup,
  signOut,
  storage,
  updateDoc,
  uploadBytes,
  where,
};
