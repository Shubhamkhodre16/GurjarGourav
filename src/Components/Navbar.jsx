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
import Logo from "../assets/image/gaurav navbar img.png";
import LanguageSwitcher from "../Pages/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const navItems = [
  { labelKey: "navbar.home", path: "/" },
  { labelKey: "navbar.about", path: "/about" },
  { labelKey: "navbar.entries", path: "/entries" },
  { labelKey: "navbar.scholarship", path: "/scholarship" },
  { labelKey: "navbar.patrakaar", path: "/patrakaar" },
  { labelKey: "navbar.samman", path: "/samman" },
  { labelKey: "navbar.contact", path: "/contact" },
];

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useTranslation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#F2EDE9", boxShadow: 4, px: { xs: 2, sm: 4 } }}>
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Box sx={{ width: { xs: 140, sm: 160, md: 180, lg: 260 } }}>
            <img src={Logo} alt="Logo" style={{ width: "100%", height: "auto", objectFit: "contain", cursor: "pointer" }} />
          </Box>

          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)} sx={{ color: "black", backgroundColor: "white" }}>
              <MenuIcon />
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
                      color: "#6831AD",
                      backgroundColor: "transparent",
                    },
                    "&.active": {
                      color: "#6831AD",
                      borderBottom: "2px solid #6831AD",
                    },
                  }}
                >
                  {t(labelKey)}
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
            top: "70px",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "black" }}>
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
                <ListItemText primary={<Typography sx={{ fontSize: "1rem" }}>{t(labelKey)}</Typography>} />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ px: 2, pt: 1 }}>
            <LanguageSwitcher />
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;