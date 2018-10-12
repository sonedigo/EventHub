import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "white",
    boxShadow: "none"
  },
  toolbarTitle: {
    flex: 1
  },
  logoLink: {
    textDecoration: "none",
    color: "Green"
  },
  toolbarLink: {
    justifyContent: "flex-end"
  },
  underline: {
    color: "#4b4d63"
  },
  toolbarItem: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)"
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
          <div>
            <Button href="/">Browse Events</Button>
            <Button href="/">Organize</Button>
            <Button href="/">Help</Button>
            <Button href="/" color="secondary">
              Create Event
            </Button>
            <Button>
              <Link
                to={{
                  pathname: "/SignIn",
                  search: "?referrer=%2F"
                }}
                className={classes.toolbarItem}
              >
                Sign In
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <hr className />
    </React.Fragment>
  );
};

export default withStyles(styles)(header);