import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import QR from "../assets/QR.svg";
import { Link } from "react-router-dom";
import { BasicButton, LoginButton, LogoutButton } from "./index.js";
import { useAuth0 } from "@auth0/auth0-react";

const pages = ["Pricing", "Support", "Free Trial"];
const settings = ["Dashboard"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, isAuthenticated } = useAuth0();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "4.5vh",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignContent: "center",
        pt: { xl: "1rem" },
      }}
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page} className="text-link">
                    {" "}
                    <Typography textAlign="center" component={"span"}>
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to={"/"} className="text-link">
            {" "}
            <img
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                ml: { xs: "-10" },
              }}
              width={"18%"}
              src={QR}
              alt={"Menu maker app logo"}
            />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ml: "-6vw",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  width: "7vw",
                  color: "primary.verydark",
                  textAlign: "center",
                }}
              >
                <Link to={page} className="text-link">
                  {" "}
                  <Typography
                    textAlign="center"
                    component={"span"}
                    sx={{ color: "primary.verydark", fontWeight: "500" }}
                  >
                    {page}
                  </Typography>
                </Link>
              </Button>
            ))}
            {!isAuthenticated ? (
              <LoginButton />
            ) : (
              <Box style={{ maxWidth: "100px" }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ mt: 1 }}>
                    <Avatar alt={user.name} src={user.picture} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  // keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <LogoutButton />
                  {settings.map((setting) => (
                    <Link to={setting} className="text-link">
                      {" "}
                      <BasicButton
                        textAlign="center"
                        text={setting}
                        color="primary.verydark"
                        component={"span"}
                      />
                    </Link>
                  ))}
                </Menu>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
