import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { AppContext } from "context/appContext";
import React, { useContext } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarCmp() {
  const { showSnackbarCmp, setShowSnackbarCmp } = useContext(AppContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbarCmp({
      shouldShow: false,
      message: "",
    });
  };

  return (
    <Snackbar open={showSnackbarCmp.shouldShow} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{ width: "100%", color: "white" }}
      >
        {showSnackbarCmp.message}
      </Alert>
    </Snackbar>
  );
}
