import { Container, Grid, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFromFirestore } from "pages/util";
import Contact from "./Contact";
import ImageGalleryCmp from "./ImageGalleryCmp";
import Specification from "./Specification";

export default function ProductDetails() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [creatorOfProduct, setCreatorOfProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProductDetails() {
      setLoading(true);
      try {
        const details = await getFromFirestore(`products/${productId}`);
        const user = await getFromFirestore(
          `profiles/${details.creatorOfProduct}`
        );
        setCreatorOfProduct(user);
        setProductDetails(details);
        setLoading(false);
      } catch (error) {
        alert("An error occured");
        setLoading(false);
      }
    }
    getProductDetails();
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }
  return (
    <Container style={{ marginBottom: "50px" }}>
      <Toolbar />
      <Grid container spacing={3}>
        {productDetails.files && (
          <Grid item md={8}>
            <ImageGalleryCmp images={productDetails.files} />
          </Grid>
        )}
        <Grid item md={4}>
          <Contact
            title={productDetails.title}
            amount={productDetails.amount}
            creatorOfProduct={creatorOfProduct}
          />
        </Grid>
      </Grid>
      <Specification
        type={productDetails.type}
        description={productDetails.description}
      />
    </Container>
  );
}
