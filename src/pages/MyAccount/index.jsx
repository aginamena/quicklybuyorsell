import { Container, Toolbar, useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";

import TabPanel from "components/TabPanel";
import React, { useState } from "react";
import CreateProducts from "./CreateProducts";
import ViewProducts from "./ViewProduct";
import { TabCmp } from "./style";

export default function MyAccount() {
  const theme = useTheme();
  const ismediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
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
          <ViewProducts />
        </TabPanel>
      </Container>
    </React.Fragment>
  );
}
