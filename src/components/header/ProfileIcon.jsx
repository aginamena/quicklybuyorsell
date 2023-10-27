import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, Box, Button, Menu, MenuItem } from "@mui/material";
// import { AppContext } from "providers/AppProvider";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileIcon() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  //   const { setIsUserLoggedIn } = useContext(AppContext);

  //   function logUserOut() {
  //     sessionStorage.clear();
  //     setIsUserLoggedIn(false);
  //     navigate("/home");
  //   }
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Avatar src={sessionStorage.getItem("profilePicture")} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>My Account</MenuItem>
        <MenuItem>Log Out</MenuItem>
      </Menu>
    </Box>
  );
}
