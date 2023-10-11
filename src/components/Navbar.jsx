import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FastfoodIcon from "@mui/icons-material/Fastfood";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#ef9732",
    color: "#0e7802",
    borderRadius: "8px",
  };
  return (
    <AppBar position="static" style={navbarStyle}>
      <Toolbar>
        <Typography variant="h6">Food App </Typography>
        <FastfoodIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
