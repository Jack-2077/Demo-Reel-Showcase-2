import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white"
    }
  }
}));

export default function ElevateAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar style={{ background: "#000200" }}>
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Scroll to Elevate App Bar
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              {["Info", "Photo", "Work"].map((item) => (
                <Link
                  component={RouterLink}
                  to={item}
                  underline="none"
                  className={classes.link}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </React.Fragment>
  );
}
