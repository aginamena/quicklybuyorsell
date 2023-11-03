import { getDocs, collection, firestore } from "config/firebase";
export async function getAllProducts(email) {
  const path = `users/${email}/products`;
  const querySnapshot = await getDocs(collection(firestore, path));
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
}
