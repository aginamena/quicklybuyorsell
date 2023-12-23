import { Box } from "@mui/material";
import SearchBarCmp from "components/SearcBarCmp";
import { getUser } from "pages/util";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";

export default function Header() {
  const location = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (Object.keys(user).length == 0) {
      if (localStorage.getItem("user")) {
        setUser(getUser());
      }
    }
  }, []);

  return (
    <>
      <MainHeader user={user} setUser={setUser} />
      <div style={{ marginTop: "10px" }}></div>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <SearchBarCmp />
      </Box>
    </>
  );
}
