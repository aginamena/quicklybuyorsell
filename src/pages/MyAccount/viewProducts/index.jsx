import { Grid, Typography } from "@mui/material";
import Displaycard from "components/Card";
import { useEffect, useState } from "react";
import { getAllProducts } from "./util";

export default function ViewProducts({ email }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const allMyProducts = await getAllProducts(email);
      setProducts(allMyProducts.reverse());
      setLoading(false);
    }
    getProducts();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (products.length == 0) {
    return <Typography>You don't have any products to display</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {products.map(({ amount, title, files }, index) => (
        <Grid key={index} item>
          <Displaycard amount={amount} title={title} imagePath={files[0]} />
        </Grid>
      ))}
    </Grid>
  );
}
