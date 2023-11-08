import { Backdrop, CircularProgress } from "@mui/material/";
import { MyAccountContext } from "context/appContext";
import { useContext } from "react";

export default function BackdropCmp() {
  const { showBackdropCmp } = useContext(MyAccountContext);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={showBackdropCmp}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
