import React from "react";
import { Box, Avatar, IconButton, Toolbar, AppBar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = ({ user, handleLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={user.avatar} sx={{ marginRight: 2 }} />
        </Box>
        <IconButton color="inherit" onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
