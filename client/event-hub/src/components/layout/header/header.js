import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    position: "relative"
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
            <a href="/" className={classes.logoLink}>
              Eventhub
            </a>
          </Typography>
          <div>
            <Button href="/">Browse Events</Button>
            <Button href="/">Organize</Button>
            <Button href="/">Help</Button>
            <Button href="/" color="secondary">
              Create Event
            </Button>
            <Button href="/">Sign In</Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withStyles(styles)(header);
