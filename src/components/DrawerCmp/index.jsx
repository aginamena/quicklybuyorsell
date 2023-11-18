import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material";

import { AppContext } from "context/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { getAllCategoryNames } from "structure/categories";

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
      <Typography>Quickly Buy or Sell (QBOS)</Typography>
      <Divider
        sx={{
          borderBottomWidth: "5px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />
      <Typography variant="h5">All categories</Typography>
      <Box style={{ width: "250px" }}>
        {getAllCategoryNames().map((category, index) => (
          <div key={index} style={{ marginTop: "20px" }}>
            <Link
              to={`published-products/${category}`}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Typography>{category}</Typography>
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
