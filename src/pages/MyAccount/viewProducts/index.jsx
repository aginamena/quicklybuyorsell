import { Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { getAllProductsFromFirestore, getUser } from "pages/util";
import { useEffect, useState } from "react";

export default function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllProducts() {
      setLoading(true);
      try {
        const { email } = getUser();
        const path = `myAccount/${email}/products`;
        const allMyProducts = await getAllProductsFromFirestore(path);
        setProducts(allMyProducts.reverse());
      } catch (error) {
        alert("An error occured");
      }
      setLoading(false);
    }
    getAllProducts();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (products.length == 0) {
    return <Typography>You don't have any products to display</Typography>;
  }

  return <DisplayProducts products={products} isPrivate={true} />;
}
