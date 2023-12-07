import { collection, firestore, orderBy, query, where } from "config/firebase";
import { executeQueryOnProductsCollection } from "pages/util";

export async function getAllPublishedProducts(selectedCategory) {
  const q = query(
    collection(firestore, "products"),
    where("category", "==", selectedCategory),
    where("productStatus", "==", "Published"),
    orderBy("productId", "desc")
  );
  const products = await executeQueryOnProductsCollection(q);
  return products;
}
