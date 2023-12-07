import { Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { collection, firestore, orderBy, query, where } from "config/firebase";
import { executeQueryOnProductsCollection, getUser } from "pages/util";
import { useQuery } from "react-query";

export default function ViewProducts() {
  async function getAllProducts() {
    const { email } = getUser();
    const q = query(
      collection(firestore, "products"),
      where("creatorOfProduct", "==", email),
      orderBy("productId", "desc")
    );
    const allMyProducts = await executeQueryOnProductsCollection(q);
    return allMyProducts;
  }
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["ViewProducts"], queryFn: getAllProducts });

  if (isError) {
    alert("An error occured");
    return null;
  }

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (products.length == 0) {
    return <Typography>You don't have any products to display</Typography>;
  }

  return <DisplayProducts products={products} isPrivate={true} />;
}
