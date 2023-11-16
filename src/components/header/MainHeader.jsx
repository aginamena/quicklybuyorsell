import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import ProfileIcon from "./ProfileIcon";
import DialogCmp from "./DialogCmp";
import { signInWithGoogle, storeDataInFirestore } from "pages/util";
import { Link } from "react-router-dom";
import { AppContext } from "context/appContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  //   width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),

    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "600px",
    },
  },
}));

export default function MainHeader({ user, setUser }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const { setShowDialogCmp, setShowDrawerCmp } = useContext(AppContext);

  async function signIn() {
    try {
      const profile = await signInWithGoogle();
      const { phoneNumber, email, uid, displayName, photoURL } = profile.user;
      setUser({
        phoneNumber,
        email,
        uid,
        displayName,
        photoURL,
      });
      if (!phoneNumber) {
        setOpenDialog(true);
      } else {
        createProfile(phoneNumber);
      }
    } catch (error) {
      alert("An error ocurred");
    }
  }

  async function createProfile(number) {
    //store profile in database
    const updatedUser = { ...user };
    updatedUser.phoneNumber = number;
    const path = `profiles/${updatedUser.email}`;
    await storeDataInFirestore(path, updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  useEffect(() => {
    async function storeData() {
      // making sure the user has entered thier phone number inorder to create the profile
      if (number.length > 0) {
        await createProfile(number);
        setLoading(false);
        setOpenDialog(false);
      }
    }
    storeData();
  }, [number]);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box style={{ display: "flex" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setShowDrawerCmp(true)}
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box style={{ display: "flex", alignItems: "center" }}>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    marginRight: "30px",
                  }}
                >
                  Top Fashion Products
                </Typography>
              </Link>

              <Typography
                onClick={() => setShowDialogCmp(true)}
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Sell your products
              </Typography>
            </Box>
          </Box>

          <Box>
            {Object.keys(user).length !== 0 ? (
              <div data-testid="profileMenu">
                <ProfileIcon src={user.photoURL} />
              </div>
            ) : (
              <Button data-testid="signInBtn" onClick={signIn}>
                Sign in
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <DialogCmp
        openDialog={openDialog}
        setNumber={setNumber}
        loading={loading}
        setLoading={setLoading}
      />
    </Box>
  );
}

MainHeader.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};
