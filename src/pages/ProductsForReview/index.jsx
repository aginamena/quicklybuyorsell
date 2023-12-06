import { Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { getAllProductsFromFirestore } from "pages/util";
import { useQuery } from "react-query";

export default function ProductsForReview() {
  async function getProductsForReview() {
    const productsForReview = await getAllProductsFromFirestore(
      "productsForReview"
    );
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
