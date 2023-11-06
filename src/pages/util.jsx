import { doc, getDoc, firestore } from "config/firebase";

export async function getProductById(productId) {
  const docRef = doc(firestore, "products", productId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("No Document found");
  }
}
