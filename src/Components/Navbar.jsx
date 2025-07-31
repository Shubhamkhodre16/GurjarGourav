import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import Logo from "../assets/image/ChatGPT Image Jul 26, 2025, 08_25_29 PM.png";
// import LanguageSwitcher from "../Pages/LanguageSwitcher";
// import { useTranslation } from "react-i18next";

const navItems = [
  { labelKey: "होम", path: "/" },
  { labelKey: "हमारे बारे में", path: "/हमारे बारे में" },
  { labelKey: "ईवेंट के लिए प्रविष्टियाँ", path: "/ईवेंट के लिए प्रविष्टियाँ" },
  { labelKey: "छात्रवृत्ति फ़ॉर्म", path: "/छात्रवृत्ति फ़ॉर्म" },
  { labelKey: "पत्रकार समारोह", path: "/पत्रकार समारोह" },
  { labelKey: "सम्मान समारोह", path: "/सम्मान समारोह" },
  { labelKey: "संपर्क करें", path: "/संपर्क करें" },
];

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const { t } = useTranslation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#F2EDE9", boxShadow: 4,  }}>
        <Toolbar sx={{ justifyContent: "space-between", px:{xs:2 , lg:3} }}>
          <Box sx={{ width: { xs: "fit-content", sm: 160, md: 180, lg: "60px" }, borderRadius:"50%" , height:{xs:"50px" , lg:"60px"}, py:{lg:1}  } }>
            <img src={Logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain", cursor: "pointer" , borderRadius:"50%" }} />
          </Box>

          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)} sx={{ color: "black", backgroundColor: "white",  mr:{xs:"0px"} }}>
              <MenuIcon  />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={{ md: 1, lg: 3 }} alignItems="center">
              {navItems.map(({ labelKey, path }) => (
                <Button
                  key={labelKey}
                  component={NavLink}
                  to={path}
                  sx={{
                    color: "black",
                    fontWeight: { xs: 300, sm: 400, md: 500, lg: 600 },
                    textTransform: "none",
                    fontSize: { md: "0.9rem", lg: "1rem" },
                    "&:hover": {
                      color: "#a16627",
                      backgroundColor: "transparent",
                    },
                    "&.active": {
                      color: "#a16627",
                      borderBottom: "2px solid #a16627",
                    },
                  }}
                >
                  {labelKey}
                </Button>
              ))}
              {/* <LanguageSwitcher /> */}
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 200,
            backgroundColor: "#F2EDE9",
            color: "black",
            // top: "70px",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent:"space-between",  padding: "10px 10px 10px 10px" }}>
          <img src={Logo} alt="Logo" style={{ width: "50px", height: "50px", objectFit: "contain" , borderRadius:"50%" }} />
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "black"  }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navItems.map(({ labelKey, path }) => (
            <ListItem key={labelKey} disablePadding>
              <ListItemButton
                component={NavLink}
                to={path}
                onClick={toggleDrawer(false)}
                sx={{
                  "&.active": {
                    color: "#6831AD",
                    fontWeight: "bold",
                  },
                  px: 2,
                }}
              >
                <ListItemText primary={<Typography sx={{ fontSize: "1rem" }}>{labelKey}</Typography>} />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ px: 2, pt: 1 }}>
            {/* <LanguageSwitcher /> */}
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;