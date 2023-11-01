import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Paper } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { getAllCategoryNames } from "structure/categories";

const PaperCmp = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
export default function SubHeader() {
  return (
    <div data-testid="SubHeader">
      <AppBar position="static">
        <Toolbar
          sx={{
            // display: "flex",
            justifyContent: "space-between",
          }}
        >
          {getAllCategoryNames().map((category, index) => (
            <Typography color="inherit" key={index} component="div">
              {category}
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
