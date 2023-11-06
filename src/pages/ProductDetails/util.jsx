import { getProductById } from "pages/util";

export async function getProductDetailsByProductId(productId) {
  const productDetails = await getProductById(productId);
  return productDetails;
}
