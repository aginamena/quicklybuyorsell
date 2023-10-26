import {
  auth,
  provider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "config/firebase";

export async function signInWithGoogle() {
  try {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithPopup(auth, provider);
  } catch (error) {
    alert(error.message);
  }
}

export function getUser(setUser) {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      setUser(user);
    } else setUser({});
  });
}
