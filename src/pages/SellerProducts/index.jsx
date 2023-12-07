import { Container, Toolbar, Typography } from "@mui/material";
import DisplayProducts from "components/DisplayProducts";
import { collection, firestore, orderBy, query, where } from "config/firebase";
import { executeQueryOnProductsCollection, isUserAdmin } from "pages/util";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function SellerProducts() {
  const { sellerEmail } = useParams();

  async function getAllProducts() {
    const isAdmin = isUserAdmin();
    const q = isAdmin
      ? query(
          collection(firestore, "products"),
          where("creatorOfProduct", "==", sellerEmail),
          orderBy("productId", "desc")
        )
      : query(
          collection(firestore, "products"),
          where("creatorOfProduct", "==", sellerEmail),
          where("productStatus", "==", "Published"),
          orderBy("productId", "desc")
        );
    const sellersProducts = await executeQueryOnProductsCollection(q);
    return sellersProducts;
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
        <Typography>
          Seller hasn't created any products or they are not live yet.
        </Typography>
      ) : (
        <DisplayProducts products={products} isPrivate={false} />
      )}
    </Container>
  );
}
