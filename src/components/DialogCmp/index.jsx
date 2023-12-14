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
import { deleteDataInFirestore } from "pages/util";
import React, { useContext, useState } from "react";
import { useQueryClient } from "react-query";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCmp() {
  const {
    showDialogCmp,
    setShowDialogCmp,
    selectedProductId,
    setSelectedProductId,
    setShowSnackbarCmp,
  } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  async function deleteProduct() {
    setLoading(true);
    await deleteDataInFirestore(`products/${selectedProductId}`);
    await queryClient.refetchQueries({
      queryKey: ["ViewProducts"],
      type: "active",
      exact: true,
    });
    setLoading(false);
    setShowDialogCmp(false);
    setShowSnackbarCmp({
      shouldShow: true,
      message: "The product has been deleted.",
    });
    setSelectedProductId("");
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
              <Button
                onClick={() => {
                  setSelectedProductId("");
                  setShowDialogCmp(false);
                }}
                color="error"
              >
                No
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
