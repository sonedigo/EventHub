import React, { Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    backgroundColor: "#ff3333"
  }
});
const start = props => {
  const { classes } = props;
  return (
    <Fragment>
      <TextField
        id="outlined-email-input"
        label="Enter email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <br />
      <Button variant="contained" color="secondary" className={classes.button}>
        Get Started
      </Button>
    </Fragment>
  );
};

export default withStyles(styles)(start);
