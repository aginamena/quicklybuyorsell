import { Firestore } from "config/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function storeProfile(userProfile) {
  await setDoc(doc(Firestore, `users/${userProfile.uid}`), userProfile);
}
