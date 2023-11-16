import { Box, Drawer, Toolbar, Typography } from "@mui/material";

import { AppContext } from "context/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { categories } from "structure/categories";

export default function DrawerCmp() {
  const { showDrawerCmp, setShowDrawerCmp, setShowDialogCmp } =
    useContext(AppContext);

  return (
    <Drawer
      open={showDrawerCmp}
      sx={{ textAlign: "center" }}
      onClose={() => setShowDrawerCmp(false)}
    >
      <Toolbar />
      <Typography variant="h5">All categories</Typography>
      <Box style={{ width: "250px" }}>
        {categories.map(({ Name }, index) => (
          <div key={index} style={{ marginTop: "20px" }}>
            <Link
              to={`published-products/${Name}`}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Typography>{Name}</Typography>
            </Link>
          </div>
        ))}
      </Box>
      <Typography
        onClick={() => setShowDialogCmp(true)}
        sx={{
          cursor: "pointer",
          textDecoration: "underline",
          marginTop: "40px",
        }}
      >
        Sell your products
      </Typography>
    </Drawer>
  );
}
