import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Paper } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

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
          <Typography color="inherit" component="div">
            Clothes
          </Typography>
          <Typography color="inherit" component="div">
            Footwares
          </Typography>
          <Typography color="inherit" component="div">
            Bags
          </Typography>
          <Typography color="inherit" component="div">
            Fashion accessories
          </Typography>
          <Typography color="inherit" component="div">
            Computers
          </Typography>
          <Typography color="inherit" component="div">
            Phones
          </Typography>
          <Typography color="inherit" component="div">
            Electrical gadgets
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
