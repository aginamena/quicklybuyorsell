import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import BackdropCmp from "components/BackdropCmp";
import { AppContext, MyAccountContext } from "context/appContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function PopoverCmp({ popup, setPopup, productId }) {
  //snackbar can be used also to delete product
  const {
    setShowSnackbarCmp,
    setShowBackdropCmp,
    setShowDialogCmp,
    setSelectedProductId,
  } = useContext(AppContext);
  const { setTabPosition } = useContext(MyAccountContext);

  function editProduct() {
    const tabPosition = 0;
    setTabPosition(tabPosition);
    setSelectedProductId(productId);
  }

  async function deleteProduct() {
    setShowDialogCmp(true);
    setSelectedProductId(productId);
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
        <Typography sx={{ p: 2, cursor: "pointer" }}>
          View created product
        </Typography>
      </Link>
      <Typography
        onClick={editProduct}
        sx={{
          p: 2,
          cursor: "pointer",
        }}
      >
        Edit product
      </Typography>
      <Typography
        onClick={deleteProduct}
        sx={{
          p: 2,
          cursor: "pointer",
        }}
      >
        Delete product
      </Typography>
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
