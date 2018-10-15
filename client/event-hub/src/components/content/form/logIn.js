import React, { Component, Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SignInServices from "../../../services/api/signInServices";

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

class logIn extends Component {
  state = { password: "" };
  passwordInputHandler = event => {
    this.setState({
      password: event.target.value
    });
  };
  logInPostHandler = () => {
    const logInPost = {
      password: this.state.password
    };
    SignInServices.start(logInPost);
  };
  render() {
    const { classes } = this.props;
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
          onChange={this.passwordInputHandler}
        />
        <br />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.logInPostHandler}
        >
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
  }
}

export default withStyles(styles)(logIn);
