import { Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { collection, firestore, query, where } from "config/firebase";
import { executeQueryOnProductsCollection } from "pages/util";
import { useQuery } from "react-query";
export default function ProductsForReview() {
  async function getProductsForReview() {
    const q = query(
      collection(firestore, "products"),
      where("productStatus", "==", "On review")
    );
    const productsForReview = await executeQueryOnProductsCollection(q);
    return productsForReview;
  }

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["ProductForReview"],
    queryFn: getProductsForReview,
  });

  if (isError) {
    alert("An error occured");
    return null;
  }

  return (
    <Container>
      <Toolbar />
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <DisplayProducts products={products} isPrivate={false} />
      )}
    </Container>
  );
}
