import {
  Container,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFromFirestore, getUser, updateDataInFirestore } from "pages/util";
import Contact from "./Contact";
import ImageGalleryCmp from "./ImageGalleryCmp";
import Specification from "./Specification";
import { acceptProduct, isUserAdmin, rejectProduct } from "./util";
import BackdropCmp from "components/BackdropCmp";
import { AppContext } from "context/appContext";

export default function ProductDetails() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [creatorOfProduct, setCreatorOfProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { setShowSnackbarCmp, setShowBackdropCmp } = useContext(AppContext);

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

  const isUserAuthourized = isUserAdmin();

  async function handleAccptProduct() {
    setShowBackdropCmp(true);
    await acceptProduct(productId);
    setShowBackdropCmp(false);
    setShowSnackbarCmp({
      shouldShow: true,
      message: "Product has been published to the marketplace",
    });
  }
  async function handleRejectProduct() {
    setShowBackdropCmp(true);
    await rejectProduct(productId);
    setShowBackdropCmp(false);
    setShowSnackbarCmp({
      shouldShow: true,
      message:
        "Product has been removed from review. Message or call the seller that their product has been rejected from review",
    });
  }

  return (
    <Container style={{ marginBottom: "50px" }}>
      <Toolbar />
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
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
          {isUserAuthourized && (
            <Box style={{ marginTop: "30px" }}>
              <Button color="success" onClick={handleAccptProduct}>
                Accept product
              </Button>
              <Button color="error" onClick={handleRejectProduct}>
                Reject product
              </Button>
              <BackdropCmp />
            </Box>
          )}
        </>
      )}
    </Container>
  );
}
