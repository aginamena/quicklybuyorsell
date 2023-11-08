import { Container, Toolbar, useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";

import TabPanel from "components/TabPanel";
import { useEffect, useState } from "react";

import SnackbarCmp from "components/SnackbarCmp";
import { MyAccountContext } from "context/appContext";
import { getUser } from "pages/util";
import CreateProducts from "./CreateProducts";
import ViewProducts from "./ViewProducts";
import { TabCmp } from "./style";

export default function MyAccount() {
  const [user, setUser] = useState({});
  const [showSnackbarCmp, setShowSnackbarCmp] = useState({
    shouldShow: false,
    message: "",
  });
  const [showBackdropCmp, setShowBackdropCmp] = useState(false);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const theme = useTheme();
  const ismediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const state = {
    user,
    setUser,
    showSnackbarCmp,
    setShowSnackbarCmp,
    showBackdropCmp,
    setShowBackdropCmp,
  };

  return (
    <MyAccountContext.Provider value={state}>
      <Toolbar />
      <Container sx={{ display: { xs: "block", md: "flex" } }}>
        <Tabs
          orientation={ismediumScreenSizeAndBelow ? "horizontal" : "vertical"}
          variant={ismediumScreenSizeAndBelow ? "scrollable" : "fullWidth"}
          value={value}
          onChange={handleChange}
          allowScrollButtonsMobile
        >
          <TabCmp label="Create Products" data-testid="Create Products" />
          <TabCmp label="View Products" data-testid="View Products" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CreateProducts />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ViewProducts email={user.email} />
        </TabPanel>
        <SnackbarCmp />
      </Container>
    </MyAccountContext.Provider>
  );
}
