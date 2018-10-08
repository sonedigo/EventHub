import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import classes from "./header.css";

const header = props => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          className={classes.MainLogo}
        >
          <a href="/" active>
            Eventhub
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default header;
