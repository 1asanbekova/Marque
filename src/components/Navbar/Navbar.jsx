import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Navbar.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="navbar">
        <Toolbar sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "40px" }}
          >
            MARQUE
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
