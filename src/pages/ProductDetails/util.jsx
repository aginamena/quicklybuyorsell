import {
  deleteDataInFirestore,
  getUser,
  storeDataInFirestore,
  updateDataInFirestore,
} from "pages/util";

export function isUserAdmin() {
  const currentUser = getUser();
  return currentUser && currentUser.email === "aginamena5@gmail.com";
}

export async function acceptProduct(productId) {
  Promise.all([
    updateDataInFirestore(`products/${productId}`, {
      productStatus: "Published",
    }),
    deleteDataInFirestore(`productsForReview/${productId}`),
    storeDataInFirestore(`publishedProducts/${productId}`, { productId }),
  ]);
}

export async function rejectProduct(productId) {
  Promise.all([
    updateDataInFirestore(`products/${productId}`, {
      productStatus: "Not published",
    }),
    deleteDataInFirestore(`productsForReview/${productId}`),
  ]);
}
