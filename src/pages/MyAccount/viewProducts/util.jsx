import { collection, firestore, getDocs } from "config/firebase";
import { getFromFirestore } from "pages/util";

export async function getAllUsersProductsByEmail(email) {
  const path = `myAccount/${email}/products`;
  const querySnapshot = await getDocs(collection(firestore, path));
  const promises = [];
  querySnapshot.forEach((doc) => {
    const path = `products/${doc.id}`;
    promises.push(getFromFirestore(path));
  });
  const allProducts = Promise.all(promises);
  return allProducts;
}
