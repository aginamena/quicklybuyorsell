import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import SearchBarCmp from "components/SearcBarCmp";
import { AppContext } from "context/appContext";
import { signInWithGoogle, storeDataInFirestore } from "pages/util";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DialogCmp from "./DialogCmp";
import ProfileIcon from "./ProfileIcon";
import { styled } from "@mui/material/styles";

const ParentCmp = styled(Box)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    zIndex: theme.zIndex.drawer + 0,
    position: "static",
  },
}));

export default function MainHeader({ user, setUser }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const { setShowDrawerCmp } = useContext(AppContext);

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
      //taking the users phone number
      setOpenDialog(true);
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
    <ParentCmp
    >
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
                  QBOS
                </Typography>
              </Link>
              <Link to="sell-your-products">
                <Typography
                  sx={{
                    color: "white",
                    textDecoration: "underline",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Sell your products
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchBarCmp />
          </Box>
          <Box>
            {Object.keys(user).length !== 0 ? (
              <div data-testid="profileMenu">
                <ProfileIcon setUser={setUser} src={user.photoURL} />
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
    </ParentCmp>
  );
}

MainHeader.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};
