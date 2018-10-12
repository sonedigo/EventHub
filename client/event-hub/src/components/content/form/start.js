import React, { Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  textField: {
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "300px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px"
    }
  },

  button: {
    backgroundColor: "#ff3333",
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "300px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px"
    }
  },
  toolbarItem: {
    textDecoration: "none",
    color: "white"
  }
});
const start = props => {
  let SignUpOrLogIn = "";
  if (false) {
    SignUpOrLogIn = "LogIn";
  } else {
    SignUpOrLogIn = "SignUp";
  }
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
        <Link to={`/SignIn/${SignUpOrLogIn}`} className={classes.toolbarItem}>
          Get Started
        </Link>
      </Button>
    </Fragment>
  );
};

export default withStyles(styles)(start);
