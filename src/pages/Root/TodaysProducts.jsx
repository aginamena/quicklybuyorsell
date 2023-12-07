import { Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import {
  collection,
  firestore,
  limit,
  orderBy,
  query,
  where,
} from "config/firebase";
import { executeQueryOnProductsCollection } from "pages/util";
import { useQuery } from "react-query";

export default function TodaysProducts() {
  async function getLast8PublishedProducts() {
    const q = query(
      collection(firestore, "products"),
      where("productStatus", "==", "Published"),
      orderBy("productId", "desc"),
      limit(8)
    );
    const last8Products = await executeQueryOnProductsCollection(q);
    return last8Products;
  }

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["TodaysProducts"],
    queryFn: getLast8PublishedProducts,
  });

  if (isError) {
    alert("An error occured");
    return null;
  }
  return (
    <Container>
      <Toolbar />
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Todays products
      </Typography>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <DisplayProducts products={products} isPrivate={false} />
      )}
    </Container>
  );
}
