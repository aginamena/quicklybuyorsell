import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { AppContext } from "context/appContext";
import { Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCmp() {
  const { showDialogCmp, setShowDialogCmp } = useContext(AppContext);

  return (
    <Dialog open={showDialogCmp} TransitionComponent={Transition} keepMounted>
      <DialogTitle>We'll connect you with buyers through Whatsapp</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description" component="div">
          <Typography>
            <span style={{ color: "white" }}>First</span>, you have to be signed
            into QBOS.
          </Typography>
          <Typography>
            <span style={{ color: "white" }}>Second</span>, go to My Accounts
            and create your product.
          </Typography>
          <Typography>
            <span style={{ color: "white" }}>Third</span>, go to View products
            and publish the product to the marketplace!
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowDialogCmp(false)}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
