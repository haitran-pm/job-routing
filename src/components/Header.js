import React, { useState, useContext, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ToggleButton from "@mui/material/ToggleButton";
import LoginModal from "./LoginModal";
import AuthProvider from "../contexts/AuthProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function Header() {
  const Auth = AuthProvider();
  const { username, password, isLoading, error, isLoggedIn, isModalShowed } =
    Auth.state;
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "login" });
  //   try {
  //     await login({ username, password });
  //     dispatch({ type: "success" });
  //   } catch (error) {
  //     dispatch({ type: "error" });
  //   }
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ marginBottom: 4 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", sm: "block" } }}
            >
              Job Routing
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box display="flex" flexGrow={1} justifyContent="flex-end">
              {!isLoggedIn ? (
                <>
                  <Button
                    startIcon={<LoginIcon />}
                    color="inherit"
                    disableRipple
                    // onClick={() => dispatch({ type: "open" })}
                    sx={{
                      ml: "auto",
                      textTransform: "none",
                      fontWeight: 400,
                      display: { xs: "none", sm: "none", md: "inline-flex" },
                    }}
                  >
                    Sign in
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    startIcon={<AccountCircleIcon />}
                    color="inherit"
                    disableRipple
                    sx={{
                      textTransform: "none",
                      fontWeight: 400,
                      display: { xs: "none", sm: "none", md: "inline-flex" },
                    }}
                  >
                    Welcome, {username}
                  </Button>
                  <Button
                    startIcon={<LogoutIcon />}
                    color="inherit"
                    disableRipple
                    sx={{
                      textTransform: "none",
                      fontWeight: 400,
                      display: { xs: "none", sm: "none", md: "inline-flex" },
                    }}
                    // onClick={() => dispatch({ type: "logout" })}
                  >
                    Sign out
                  </Button>
                </>
              )}

              {/* <ToggleButton
                value="check"
                size="small"
                selected={!darkMode}
                onChange={() => setDarkMode((prevMode) => !prevMode)}
                sx={{
                  border: "none",
                  ml: 1,
                  display: { xs: "none", sm: "none", md: "inline-flex" },
                }}
              >
                {darkMode ? (
                  <LightModeIcon />
                ) : (
                  <DarkModeIcon sx={{ color: "white", background: "none" }} />
                )}
              </ToggleButton> */}
              <IconButton
                size="medium"
                edge="end"
                aria-label="display more actions"
                color="inherit"
                sx={{ display: { sm: "block", md: "none" } }}
              >
                <MoreIcon />
              </IconButton>
            </Box>
            {/* <LoginModal state={state} dispatch={dispatch} onSubmit={onSubmit} /> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
