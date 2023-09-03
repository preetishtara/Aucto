import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import AuthContext from "./Context/AuthContext";

export default function ButtonAppBar() {
  // let { user } = useContext(AuthContext);
  return (
    <Box xs={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BookStore
          </Typography>
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
