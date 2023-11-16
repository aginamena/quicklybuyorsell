import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AppContext } from "context/appContext";
import { Toolbar, Typography } from "@mui/material";
import { categories, getAllCategoryNames } from "structure/categories";

export default function DrawerCmp() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { showDrawerCmp, setShowDrawerCmp } = useContext(AppContext);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Drawer
        open={showDrawerCmp}
        sx={{ textAlign: "center" }}
        onClose={() => setShowDrawerCmp(false)}
      >
        <Toolbar />
        <Typography variant="h5">All categories</Typography>
        <List>
          {categories.map(({ Name, Icon }, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemIcon>{Icon}</ListItemIcon>
                <ListItemText primary={Name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography sx={{ textDecoration: "underline", marginTop: "40px" }}>
          Sell your products
        </Typography>
      </Drawer>
    </div>
  );
}
