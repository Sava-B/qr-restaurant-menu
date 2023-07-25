// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { motion } from "framer-motion";
// import Button from "@mui/material/Button";
// import Home from "./Home";
import ResponsiveAppBar from "./AppBarHomepage";
// import SignIn from "./SignIn";
// import SupportPage from "./Support";
// import ErrorPage from "../error-page";
import { Outlet } from "react-router-dom";
import StickyFooter from "./StickyFooter";
// import { AppBar } from "@mui/material";
import { Box, Typography } from "@mui/material";


import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      background: "#D3D0C8",
      // 00ccff
      main: "#C4B487",
      verydark: "#262524",
      // grey: "#808080"
      grey: "#D3D0C8",
    },
    secondary: {
      main: "#FFFFFF",
    },
    action: {
      active: "rgb(200,0,0)",
      activeOpacity: 1,
      hover: "rgb(200,0,0)",
      hoverOpacity: 0,
      focus: "rgb(200,0,0)",
      focusOpacity: 1,
      selected: "rgb(200,0,0)",
      selectedOpacity: 0,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        mode: "dark",
      },
      styleOverrides: {
        primary: {
          root: {
            backgroundColor: "#808080",
          },
        },
      },
    },
    button: {
      "&:hover": {
        background: "none",
      },

      TextField: {
        defaultProps: {
          color: "secondary.main",
        },
        styleOverrides: {
          primary: {
            root: {
              color: "secondary.main",
            },
          },
        },
      },
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      color: "#545451",
    },
    body2: {
      color: "#545451",
    },
    h1: {
      fontSize: 100,
      color: "#545451",
    },
    h2: {
      color: "#545451",
    },
    h3: {
      color: "#545451",
    },
    h4: {
      color: "#545451",
    },
    h5: {
      color: "#545451",
    },
    h6: {
      color: "#545451",
    },
    overline: {
      color: "#545451",
    },
    caption: {
      color: "#545451",
    },
    p: {
      color: "#545451",
    },
  },
});

export default function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box bgcolor="primary.grey">
          {" "}
          <ResponsiveAppBar />
          <div id="detail">
            <Outlet />
          </div>
          <StickyFooter />
        </Box>
      </ThemeProvider>
    </>
  );
}
