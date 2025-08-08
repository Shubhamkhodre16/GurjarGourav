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
import Logo from "../assets/image/ChatGPT Image Aug 6, 2025, 03_27_34 PM.png";
// import LanguageSwitcher from "../Pages/LanguageSwitcher";
// import { useTranslation } from "react-i18next";

const navItems = [
  { labelKey: "होम", path: "/" },
  { labelKey: "हमारे बारे में", path: "/AboutUs" },
  { labelKey: "कार्यक्रम", path: "/Events" },
  { labelKey: "इतिहास", path: "/Histories" },
  { labelKey: "उपलब्धियां और पुरस्कार", path: "/Achievements_And_Awards" },
  { labelKey: "सम्मान समारोह", path: "/All_Members" },
  { labelKey: "संपर्क करें", path: "/ContactUs" },
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
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#a16627", boxShadow: 4 }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, lg: 3 } }}>
          {/* <Box
            component={NavLink}
            to="/"
            sx={{
              width: { xs: "fit-content", sm: "60px", md: "60px", lg: "60px" },
              borderRadius: "50%",
              height: { xs: "50px", lg: "60px" },
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            />
          </Box> */}

          {/* <Typography
            variant="h5"
            fontWeight="bold"
            color="white"
            component={NavLink}
            to="/"
            sx={{
              flexGrow: 1,
              ml: 1,
              textDecoration: "none",
              fontSize: { xs: "1.2rem" },
            }}
          >
            भुआणा गुर्जर
          </Typography> */}

          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              
              borderRadius: "50px", 
              width: "fit-content",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="logo"
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid white",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              भुआणा गुर्जर
            </Typography>
          </Box> */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 0.5 },
              padding:"8px 0px" ,
              borderRadius: "50px",
              width: "fit-content",
              flexWrap: "wrap", 
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="logo"
              sx={{
                width: { xs: 40, sm: 50 },
                height: { xs: 40, sm: 50 },
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid white",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                fontWeight: "bold",
                color: "#fff",
                whiteSpace: "nowrap", // prevent text breaking in awkward places
              }}
            >
              भुआणा गुर्जर
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{
                color: "black",
                backgroundColor: "white",
                mr: { xs: "0px" },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack
              direction="row"
              spacing={{ md: 1, lg: 3 }}
              alignItems="center"
            >
              {navItems.map(({ labelKey, path }) => (
                <Button
                  key={labelKey}
                  component={NavLink}
                  to={path}
                  sx={{
                    color: "white",
                    fontWeight: { xs: 300, sm: 400, md: 500, lg: 600 },
                    textTransform: "none",
                    fontSize: { md: "0.9rem", lg: "1rem" },
                    "&:hover": {
                      color: "#333",
                      backgroundColor: "transparent",
                    },
                    "&.active": {
                      color: "#333",
                      borderBottom: "2px solid #333",
                    },
                  }}
                >
                  {labelKey}
                </Button>
              ))}
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
            backgroundColor: "#a16627",
            color: "white",
            // top: "70px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 10px 10px 10px",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
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
                    color: "black",
                    fontWeight: "bold",
                  },
                  px: 2,
                }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: "1rem" }}>
                      {labelKey}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ px: 2, pt: 1 }}>{/* <LanguageSwitcher /> */}</Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
