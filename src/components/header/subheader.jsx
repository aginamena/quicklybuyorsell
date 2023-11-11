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
import { Link } from "react-router-dom";

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
            justifyContent: "space-evenly",
          }}
        >
          {getAllCategoryNames().map((category, index) => (
            <Link
              key={index}
              style={{ textDecoration: "none", color: "white" }}
              to={`published-products/${category}`}
            >
              {category}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
