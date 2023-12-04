import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import BackdropCmp from "components/BackdropCmp";
import { AppContext, MyAccountContext } from "context/appContext";
import {
  deleteDataInFirestore,
  storeDataInFirestore,
  updateDataInFirestore,
} from "pages/util";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function PopoverCmp({
  popup,
  setPopup,
  productId,
  productStatus,
}) {
  const { setShowSnackbarCmp, setShowBackdropCmp } = useContext(AppContext);
  const { setEditProductId, setTabPosition } = useContext(MyAccountContext);

  const [status, setProductStatus] = useState(productStatus);

  async function addToReview() {
    setShowBackdropCmp(true);
    await updateDataInFirestore(`products/${productId}`, {
      productStatus: "On review",
    });
    await storeDataInFirestore(`productsForReview/${productId}`, { productId });
    setShowBackdropCmp(false);
    setShowSnackbarCmp({
      shouldShow: true,
      message: "We are currently reviewing your product",
    });
    setProductStatus("On review");
  }

  async function removeFromMarketplace() {
    setShowBackdropCmp(true);
    await updateDataInFirestore(`products/${productId}`, {
      productStatus: "Not published",
    });
    await deleteDataInFirestore(`publishedProducts/${productId}`);
    setShowBackdropCmp(false);
    setShowSnackbarCmp({
      shouldShow: true,
      message: "The product has been removed from the marketplace",
    });
    setProductStatus("Not published");
  }

  function editProduct() {
    const tabPosition = 0;
    setTabPosition(tabPosition);
    setEditProductId(productId);
  }

  return (
    <Popover
      open={Boolean(popup)}
      anchorEl={popup}
      onClose={setPopup}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={`../product-details/${productId}`}
      >
        <Typography sx={{ p: 2 }}>View created product</Typography>
      </Link>
      {(status === "Not published" && (
        <>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            onClick={editProduct}
          >
            <Typography sx={{ p: 2 }}>Edit product</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            onClick={addToReview}
          >
            <Typography sx={{ p: 2 }}>
              Publish product to the marketplace
            </Typography>
          </Link>
        </>
      )) ||
        (status === "On review" && (
          <>
            <Typography sx={{ p: 2 }}>Product on review</Typography>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              onClick={editProduct}
            >
              <Typography sx={{ p: 2 }}>Edit product</Typography>
            </Link>
          </>
        )) ||
        (status === "Published" && (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            onClick={removeFromMarketplace}
          >
            <Typography sx={{ p: 2 }}>
              Remove product from marketplace
            </Typography>
          </Link>
        ))}
      {/* <Link style={{ textDecoration: "none", color: "white" }}>
        <Typography sx={{ p: 2 }}>Boost product</Typography>
      </Link>
      <Link style={{ textDecoration: "none", color: "white" }}>
        <Typography sx={{ p: 2 }}>Product analytics</Typography>
      </Link> */}
      {/* {status === "Not published" && (
        <Link style={{ textDecoration: "none", color: "white" }}>
          <Typography sx={{ p: 2 }}>Delete product</Typography>
        </Link> */}
      <BackdropCmp />
    </Popover>
  );
}

PopoverCmp.defaultProps = {
  popup: null,
};
PopoverCmp.propTypes = {
  popup: PropTypes.object,
  setPopup: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
  productStatus: PropTypes.string.isRequired,
};
