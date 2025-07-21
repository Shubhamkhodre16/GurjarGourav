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

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Entries for Event", path: "/entries" },
  { label: "Scholarship Form", path: "/scholarship" },
  { label: "Patrakaar Samaroh", path: "/patrakaar" },
  { label: "Samman Samaroh", path: "/samman" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#F2EDE9",
          boxShadow: 4,
          px: { xs: 2, sm: 4 },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Box
            sx={{
              width: { xs: 140, sm: 160, md: 180, lg: 260 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Box>

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ color: "black", backgroundColor: "white" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack
              direction="row"
              spacing={{ md: 1, lg: 3 }}
              alignItems="center"
            >
              {navItems.map(({ label, path }) => (
                <Button
                  key={label}
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
                  {label}
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
            backgroundColor: "#F2EDE9",
            color: "black",
            top: "70px", 
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ color: "black" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navItems.map(({ label, path }) => (
            <ListItem key={label} disablePadding>
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
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: "1rem" }}>{label}</Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;