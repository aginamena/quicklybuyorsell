import { getDocs, collection, firestore } from "config/firebase";
import { getProductById } from "pages/util";

export async function getAllUsersProductsByEmail(email) {
  const path = `users/${email}/products`;
  const querySnapshot = await getDocs(collection(firestore, path));
  const promises = [];
  querySnapshot.forEach((doc) => {
    promises.push(getProductById(doc.id));
  });
  const allProducts = Promise.all(promises);
  return allProducts;
}
