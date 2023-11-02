import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarCmp({ message }) {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{ width: "100%", color: "white" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
