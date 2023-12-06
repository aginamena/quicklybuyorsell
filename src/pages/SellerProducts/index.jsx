import { Container, Typography, Toolbar } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { getAllProductsFromFirestore } from "pages/util";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function SellerProducts() {
  const { sellerEmail } = useParams();

  async function getAllProducts() {
    const path = `myAccount/${sellerEmail}/products`;
    const allMyProducts = await getAllProductsFromFirestore(path);
    return allMyProducts.reverse();
  }

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["SellerProducts", sellerEmail],
    queryFn: getAllProducts,
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
      ) : products.length == 0 ? (
        <Typography>Seller hasn't created any products</Typography>
      ) : (
        <DisplayProducts products={products} isPrivate={false} />
      )}
    </Container>
  );
}
