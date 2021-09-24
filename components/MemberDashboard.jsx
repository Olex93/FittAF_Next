import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import KitchenIcon from "@mui/icons-material/Kitchen";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MemberZone from "./dashboard/MemberZone";
import WorkoutVideoLibrary from "./dashboard/WorkoutVideoLibrary";
import NutritionInfo from "./dashboard/NutritionInfo";
import ContactForm from "./ContactForm";
import Router from 'next/router'
import Axios from "axios";

// const StyledAppBar = styled(AppBar)({

// })

const drawerWidth = 240;

function MemebrDashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [displayedPage, setDisplayedPage] = useState("member-zone");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const routePage = (route) => {
    setDisplayedPage(route)
  }


  const logOut = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/api/logout",
    }).then((res) => {
      // setData(res.data);
      console.log(res);
      Router.reload('/')
    });
  }

  // Content for both drawers
  const drawer = (
    <div>
      <Toolbar />
      <Divider sx={{ height: "15px", margin: 0, padding: 0 }} />
      <List>
        <ListItem button onClick={() => routePage('member-zone')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Member Zone"} />
        </ListItem>
        <ListItem button onClick={() => routePage('exercise-demo')}>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText primary={"Excercise Demos"} />
        </ListItem>
        <ListItem button onClick={() => routePage('nutrition-info')}>
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary={"Nutrition Info"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => routePage('contact')}>
          <ListItemIcon>
            <PermPhoneMsgIcon />
          </ListItemIcon>
          <ListItemText primary={"Get in touch"} />
        </ListItem>
        {/* <ListItem button>
          <ListItemIcon>
            <PermPhoneMsgIcon />
          </ListItemIcon>
          <ListItemText primary={""} />
        </ListItem> */}
      </List>
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* Red top bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: "80px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#b40202",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontFamily: "Poppins, sans-serif" }}
          >
            Customer Dashboard
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 1,
              cursor: "pointer",
            }}
          >
            <Typography
              noWrap
              component="div"
              sx={{
                fontFamily: "Poppins, sans-serif",
                marginRight: "20px",
                "&:hover": { transform: "scale(1.2)", transition: "all 0.2s" },
              }}
              onClick={() => logOut()}
            >
              Logout
            </Typography>
            <LogoutIcon
              sx={{
                "&:hover": { transform: "scale(1.2)", transition: "all 0.2s" },
              }}
              onClick={() => logOut()}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer implementation */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Temporary drawer for mobile. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Permanent drawer for desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <h1 className="signupHeading">Welcome to the Fitt AF Member Zone</h1> */}
        {displayedPage === "member-zone" && <MemberZone />}
        {displayedPage === "exercise-demo" && <WorkoutVideoLibrary />}
        {displayedPage === "nutrition-info" && <NutritionInfo />}
        {displayedPage === "contact" && <ContactForm />}


        {/* <WorkoutVideoLibrary /> */}
      </Box>
    </Box>
  );
}

export default MemebrDashboard;
