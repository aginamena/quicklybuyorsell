import {
  collection,
  firestore,
  orderBy,
  query,
  where,
  limit,
  startAfter,
} from "config/firebase";
import { executeQueryOnProductsCollection } from "pages/util";

export async function getAllPublishedProducts(
  selectedCategory,
  productId,
  setHasMore,
  filter
) {
  const filterCondition = createFilterCondition(filter);
  const q = productId
    ? query(
        collection(firestore, "products"),
        where("category", "==", selectedCategory),
        where("productStatus", "==", "Published"),
        orderBy("productId", "desc"),
        ...filterCondition,
        startAfter(productId),
        limit(13)
      )
    : query(
        collection(firestore, "products"),
        where("category", "==", selectedCategory),
        where("productStatus", "==", "Published"),
        orderBy("productId", "desc"),
        ...filterCondition,
        limit(13)
      );

  const products = await executeQueryOnProductsCollection(q);
  if (products.length < 13) {
    setHasMore(false);
    return products;
  }
  return products.splice(0, 12);
}

function createFilterCondition(filter) {
  const condition = [];
  Object.keys(filter).forEach((key) => {
    const value = filter[key];
    if (key == "type") {
      condition.push(where("type", "==", value));
    }
  });
  return condition;
}
