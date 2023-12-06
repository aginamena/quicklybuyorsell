import { Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getAllPublishedProducts } from "./util";

export default function PublishedProducts() {
  const { selectedCategory } = useParams();

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PublishedProducts", selectedCategory],
    queryFn: () => getAllPublishedProducts(selectedCategory),
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
