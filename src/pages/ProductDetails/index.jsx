import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetailsByProductId } from "./util";
import ImageGalleryCmp from "./ImageGalleryCmp";
import Specification from "./Specification";
import Contact from "./Contact";

export default function ProductDetails() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProductDetails() {
      setLoading(true);
      const details = await getProductDetailsByProductId(productId);
      console.log(details);
      setProductDetails(details);
      setLoading(false);
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
