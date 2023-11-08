import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import BackdropCmp from "components/BackdropCmp";
import { MyAccountContext } from "context/appContext";
import { storeDataInFirestore } from "pages/util";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function PopoverCmp({ popup, setPopup, productId }) {
  const { setShowSnackbarCmp, setShowBackdropCmp } =
    useContext(MyAccountContext);

  async function addToReview() {
    setShowBackdropCmp(true);
    const path = `productsForReview/${productId}`;
    await storeDataInFirestore(path, { productId });
    setShowBackdropCmp(false);
    setShowSnackbarCmp({
      shouldShow: true,
      message: "We are currently reviewing your product",
    });
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
      <Link
        style={{ textDecoration: "none", color: "white" }}
        onClick={addToReview}
      >
        <Typography sx={{ p: 2 }}>
          Publish product to the marketplace
        </Typography>
      </Link>
      <Link style={{ textDecoration: "none", color: "white" }}>
        <Typography sx={{ p: 2 }}>Boost product</Typography>
      </Link>
      <Link style={{ textDecoration: "none", color: "white" }}>
        <Typography sx={{ p: 2 }}>Product analytics</Typography>
      </Link>
      <Link style={{ textDecoration: "none", color: "white" }}>
        <Typography sx={{ p: 2 }}>Delete product</Typography>
      </Link>
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
};
