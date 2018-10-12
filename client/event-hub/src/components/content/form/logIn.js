import React, { Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  textField: {
    width: "350px"
  },
  button: {
    backgroundColor: "#ff3333",
    width: "350px",
    margin: "10px 0"
  },
  toolbarItem: {
    textDecoration: "none",
    color: "white"
  },
  remarkItem: {
    textDecoration: "none",
    color: "#3d64ff",
    "&:hover": {
      textDecoration: "underline"
    }
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
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
      <br />
      <Button variant="contained" color="secondary" className={classes.button}>
        <Link to={`/SignIn/where`} className={classes.toolbarItem}>
          Log In
        </Link>
      </Button>
      <br />
      <Link to="/SignIn/Status/Pass-reset" className={classes.remarkItem}>
        Forget password
      </Link>
    </Fragment>
  );
};

export default withStyles(styles)(start);
