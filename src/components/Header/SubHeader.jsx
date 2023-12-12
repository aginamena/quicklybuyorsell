import { Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { getAllCategoryNames } from "structure/categories";

const PaperCmp = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
export default function SubHeader() {
  return (
    <AppBar position="static" sx={{ display: { xs: "none", sm: "block" } }}>
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
  );
}
