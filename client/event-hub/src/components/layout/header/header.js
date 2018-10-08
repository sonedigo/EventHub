import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const header = props => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          <a href="#">Eventhub</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default header;
