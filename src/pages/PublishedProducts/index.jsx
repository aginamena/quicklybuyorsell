import { Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPublishedProducts } from "./util";

export default function PublishedProducts() {
  const { selectedCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const publishedProducts = await getAllPublishedProducts(selectedCategory);
      setProducts(publishedProducts);
      setLoading(false);
    }
    getProducts();
  }, []);
  return (
    <Container>
      <Toolbar />
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <DisplayProducts products={products} isPrivate={false} />
      )}
    </Container>
  );
}
