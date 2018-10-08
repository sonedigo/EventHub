import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core";
import classes from "./header.css";

const header = props => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          <a href="/" className={classes.MainLogo}>
            {" "}
            Eventhub{" "}
          </a>
        </Typography>
        <Tabs>
          <Tab label="Browse Events" />
          <Tab label="Organize" />
          <Tab label="Help" />
          <Tab label="Create Event" />
          <Tab label="Sign In" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default header;
