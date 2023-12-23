import { Divider, Drawer, Toolbar, Typography } from "@mui/material";

import { AppContext } from "context/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function DrawerCmp() {
  const { showDrawerCmp, setShowDrawerCmp } = useContext(AppContext);

  return (
    <Drawer
      open={showDrawerCmp}
      sx={{ textAlign: "center" }}
      onClose={() => setShowDrawerCmp(false)}
    >
      <Toolbar />
      <Typography style={{ width: "250px" }}>
        Quickly Buy or Sell (QBOS)
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: "5px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />
      <Link to="sell-your-products">
        <Typography
          sx={{
            marginTop: "40px",
            color: "white",
            textDecoration: "underline",
          }}
        >
          Sell your products
        </Typography>
      </Link>
    </Drawer>
  );
}
