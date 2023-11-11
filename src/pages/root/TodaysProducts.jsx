import { Box, Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { getAllProductsFromFirestore } from "pages/util";
import { useEffect, useState } from "react";

export default function TodaysProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getLast10PublishedProducts() {
      setLoading(true);
      const allProducts = await getAllProductsFromFirestore(
        "publishedProducts"
      );
      if (allProducts.length < 10) {
        setProducts(allProducts.reverse());
      } else {
        setProducts(allProducts.splice(allProducts.length - 10).reverse());
      }
      setLoading(false);
    }
    getLast10PublishedProducts();
  }, []);
  return (
    <Container>
      <Toolbar />
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Todays products
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <DisplayProducts products={products} isPrivate={false} />
      )}
    </Container>
  );
}
