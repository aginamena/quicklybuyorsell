import { Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { getAllProductsFromFirestore, getUser } from "pages/util";
import { useQuery } from "react-query";

export default function ViewProducts() {
  async function getAllProducts() {
    const { email } = getUser();
    const path = `myAccount/${email}/products`;
    const allMyProducts = await getAllProductsFromFirestore(path);
    return allMyProducts.reverse();
  }
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("ViewProducts", getAllProducts);

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
