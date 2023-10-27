import { Box, Container, Toolbar, useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";

import { useState } from "react";
import { TabCmp } from "./style";
import CreateProduct from "./createProduct";
import ViewProducts from "./viewProducts";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function MyAccount() {
  const theme = useTheme();
  const ismediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Toolbar />
      <Container sx={{ display: { xs: "block", md: "flex" } }}>
        <Tabs
          orientation={ismediumScreenSizeAndBelow ? "horizontal" : "vertical"}
          variant={ismediumScreenSizeAndBelow ? "scrollable" : "fullWidth"}
          value={value}
          onChange={handleChange}
          allowScrollButtonsMobile
        >
          <TabCmp label="Create Products" {...a11yProps(0)} />
          <TabCmp label="View Products" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CreateProduct />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ViewProducts />
        </TabPanel>
      </Container>
    </>
  );
}
