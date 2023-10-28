import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, Box, Button, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "services/auth";

export default function ProfileIcon({ src }) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <Box>
      <Button
        id="basic-button"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Avatar src={src} data-testid="image" />
      </Button>
      {open && (
        <div data-testid="profileIconMenu">
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem
              data-testid="MyAccount"
              onClick={() => navigate("my-account")}
            >
              My Account
            </MenuItem>
            <div onClick={logOut} data-testid="logoutBtn">
              <MenuItem>Log Out</MenuItem>
            </div>
          </Menu>
        </div>
      )}
    </Box>
  );
}

ProfileIcon.propTypes = {
  src: PropTypes.string.isRequired,
};
