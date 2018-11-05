import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import HeaderItem from "../headerItem/normalHeaderItem";
import OrganizeDropItem from "../headerItem/dropHeaderItem";

const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "white",
    boxShadow: "none"
  },
  button: {
    textTransform: "none"
  },
  toolbar: { paddingRight: "0" },
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
    border: "none",
    margin: "0"
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
    flex: "0.8",
    justifyContent: "flex-end"
  }
});

const header = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
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
            <OrganizeDropItem>Help</OrganizeDropItem>
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
