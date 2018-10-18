import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import HeaderItem from "./headerItem/normalHeaderItem";
import DropItem from "./headerItem/dropHeaderItem";

const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "white",
    boxShadow: "none"
  },
  button: {
    textTransform: "none"
  },
  toolbarTitle: {
    flex: 1
  },
  logoLink: {
    textDecoration: "none",
    color: "Green"
  },
  underline: {
    height: "1px",
    backgroundColor: "#eeedf2",
    border: "none"
  },
  toolbarItem: {
    textDecoration: "none",
    color: "#6f7287",
    "&:hover": {
      color: "black"
    }
  },
  active: {
    color: "#3D64FF",
    fontWeight: "bold"
  },
  itemContainer: {
    display: "flex",
    flex: "0.6",
    justifyContent: "space-around"
  }
});

const header = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.toolbarTitle}
          >
            <Link to="/" className={classes.logoLink}>
              Eventhub
            </Link>
          </Typography>
          <div className={classes.itemContainer}>
            <HeaderItem href="/"> Browse Events</HeaderItem>
            <DropItem> Organize </DropItem>
            <DropItem> Help </DropItem>
            <HeaderItem href="/">
              <span className={classes.active}>Create Event</span>
            </HeaderItem>
            <HeaderItem>
              <Link to={"/SignIn"} className={classes.toolbarItem}>
                Sign In
              </Link>
            </HeaderItem>
          </div>
        </Toolbar>
      </AppBar>
      <hr className={classes.underline} />
    </React.Fragment>
  );
};

export default withStyles(styles)(header);
