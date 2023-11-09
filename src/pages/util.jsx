import {
  auth,
  provider,
  signInWithPopup,
  signOut,
  doc,
  getDoc,
  firestore,
  setDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
} from "config/firebase";

export async function getFromFirestore(path) {
  const docRef = doc(firestore, path);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("No Document found");
  }
}
export async function getAllProductsFromFirestore(path) {
  const querySnapshot = await getDocs(collection(firestore, path));
  const promises = [];
  querySnapshot.forEach((doc) => {
    const path = `products/${doc.id}`;
    promises.push(getFromFirestore(path));
  });
  const allProducts = Promise.all(promises);
  return allProducts;
}

export function getUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
}

export async function deleteDataInFirestore(path) {
  await deleteDoc(doc(firestore, path));
}
export async function updateDataInFirestore(path, data) {
  await updateDoc(doc(firestore, path), data);
}
export async function storeDataInFirestore(path, data) {
  await setDoc(doc(firestore, path), data);
}

export async function signInWithGoogle() {
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
