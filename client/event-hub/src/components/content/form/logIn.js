import React, { Component, Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SignInServices from "../../../services/apiServices/signInServices";
import checkValidality from "../../../services/validationServices/validation";

const styles = theme => ({
  textField: {
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "330px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px"
    }
  },
  button: {
    backgroundColor: "#ff3333",
    width: "350px",
    margin: "10px 0",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      width: "330px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px"
    }
  },
  toolbarItem: {
    textDecoration: "none",
    color: "white",
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "330px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px"
    }
  },
  remarkItem: {
    textDecoration: "none",
    color: "#3d64ff",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  errorText: {
    color: "red",
    padding: "10px 0 30px 0",
    fontSize: "15px"
  }
});

class logIn extends Component {
  state = {
    password: {
      value: "",
      validation: {
        isRequired: true,
        isPassword: true
      },
      valid: false,
      touched: false
    }
  };
  passwordInputHandler = event => {
    let updatePassword = { ...this.state.password };
    updatePassword.value = event.target.value;
    updatePassword.touched = true;
    updatePassword.valid = checkValidality(
      updatePassword.value,
      updatePassword.validation
    );
    this.setState({
      password: updatePassword
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
    const Password = this.state.password;
    let Error =
      Password.touched === true && Password.valid === false ? (
        <div className={classes.errorText}>
          Minimum eight characters, at least one uppercase letter, one lowercase
          letter, one number and one special character
        </div>
      ) : null;
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
          error={Password.touched && !Password.valid}
        />
        <br />
        {Error}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.logInPostHandler}
          disabled={!Password.valid}
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
