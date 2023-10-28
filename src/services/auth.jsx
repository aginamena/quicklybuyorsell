import {
  auth,
  browserLocalPersistence,
  provider,
  setPersistence,
  signInWithPopup,
  signOut,
} from "config/firebase";

export async function signInWithGoogle() {
  try {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithPopup(auth, provider);
  } catch (error) {
    alert("An error occured");
  }
}

export async function logOut() {
  try {
    await signOut(auth);
  } catch (error) {
    alert("An error occured");
  }
}
