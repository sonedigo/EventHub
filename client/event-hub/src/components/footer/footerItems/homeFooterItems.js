import React from "react";
import { Grid } from "@material-ui/core";

const footerItems = props => {
  return (
    <Grid item xs={3}>
      {props.children}
    </Grid>
  );
};

export default footerItems;
