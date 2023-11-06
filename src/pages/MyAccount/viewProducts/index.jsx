import { Grid, Typography } from "@mui/material";
import Displaycard from "components/Card";
import { useEffect, useState } from "react";
import { getAllUsersProductsByEmail } from "./util";

export default function ViewProducts({ email }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllProducts() {
      setLoading(true);
      try {
        const allMyProducts = await getAllUsersProductsByEmail(email);
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

  return (
    <Grid container spacing={2}>
      {products.map(({ amount, title, files, productId }, index) => (
        <Grid key={index} item>
          <Displaycard
            productId={productId}
            amount={amount}
            title={title}
            imagePath={files[0]}
          />
        </Grid>
      ))}
    </Grid>
  );
}
