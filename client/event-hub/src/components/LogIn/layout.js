import React, { Fragment } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Icon from "./body/icon1";
import Start from "./form/start";

const styles = theme => ({
  container: {
    display: "flex",
    textAlign: "center",
    margin: "20px",
    color: "#4b4d63"
  }
});
const layout = props => {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.container}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Icon />
          <Start />
        </Grid>
        <Grid item xs={4} />
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(layout);
