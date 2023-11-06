import {
  auth,
  browserLocalPersistence,
  getAdditionalUserInfo,
  provider,
  setPersistence,
  signInWithPopup,
  signOut,
} from "config/firebase";

export async function signInWithGoogle() {
  await setPersistence(auth, browserLocalPersistence);
  const user = await signInWithPopup(auth, provider);
  return user;
}

export async function logOut() {
  try {
    await signOut(auth);
  } catch (error) {
    alert("An error occured");
  }
}
