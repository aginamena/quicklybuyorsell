import { Container, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { getAllProductsFromFirestore, getUser } from "pages/util";
import { useState, useEffect } from "react";

export default function ProductsForReview() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const productsForReview = await getAllProductsFromFirestore(
          "productsForReview"
        );
        setProducts(productsForReview);
      } catch (error) {
        alert("An error occured");
      }
      setLoading(false);
    }
    getProducts();
  }, []);

  return (
    <Container>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <DisplayProducts products={products} isPrivate={false} />
      )}
    </Container>
  );
}
