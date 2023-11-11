import { getAllProductsFromFirestore } from "pages/util";

export async function getAllPublishedProducts(selectedCategory) {
  console.log(selectedCategory);
  const products = await getAllProductsFromFirestore("publishedProducts");
  return products
    .filter(({ category }) => category === selectedCategory)
    .reverse();
}
