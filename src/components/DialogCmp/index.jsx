import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
  Typography,
} from "@mui/material/";
import { AppContext } from "context/appContext";
import { deleteDataInFirestore, getUser } from "pages/util";
import React, { useContext, useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCmp() {
  const {
    showDialogCmp,
    setShowDialogCmp,
    selectedProductId,
    setShowSnackbarCmp,
  } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  async function deleteProduct() {
    setLoading(true);
    const { email } = getUser();
    await deleteDataInFirestore(`products/${selectedProductId}`);
    setLoading(false);
    setShowDialogCmp(false);
    setShowSnackbarCmp({
      shouldShow: true,
      message: "The product has been deleted.",
    });
  }

  return (
    <React.Fragment>
      <Dialog open={showDialogCmp} TransitionComponent={Transition}>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : (
            <>
              <Button onClick={deleteProduct}>Yes</Button>
              <Button onClick={() => setShowDialogCmp(false)} color="error">
                No
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
