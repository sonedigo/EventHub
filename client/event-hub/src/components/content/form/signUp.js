import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SignInServices from "../../../services/apiServices/signInServices";
import checkValidality from "../../../services/validationServices/validation";

const styles = theme => ({
  textField: {
    width: "350px",
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "430px",
      height: "55px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px",
      height: "50px"
    }
  },
  button: {
    backgroundColor: "#ff3333",
    width: "350px",
    margin: "10px 0",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      width: "430px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px"
    }
  },
  toolbarItem: {
    textDecoration: "none",
    color: "white",
    fontWeight: "normal",
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "430px"
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
  name: {
    width: "165px",
    padding: "0 10px",
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "205px",
      height: "55px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "180px",
      height: "50px"
    }
  },
  text: {
    color: "#6f7287",
    fontSize: "12px",
    textAlign: "left",
    paddingLeft: "32%",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "33%"
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "26%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "15%"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0",
      fontSize: "12px"
    }
  },
  line: {
    width: "350px",
    height: "3px",
    border: "none",
    backgroundColor: "#edeeef",
    [theme.breakpoints.down("sm")]: {
      width: "430px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px"
    }
  },
  errorText: {
    color: "red",
    padding: "10px 0 30px 0",
    fontSize: "15px"
  }
});
class signUp extends Component {
  state = {
    firstName: {
      validation: {
        isRequired: true
      },
      valid: false,
      touched: false
    },
    lastName: {
      validation: {
        isRequired: true
      },
      valid: false,
      touched: false
    },
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

  firstNameInputHandler = event => {
    let updateFirstName = { ...this.state.firstName };
    updateFirstName.value = event.target.value;
    updateFirstName.touched = true;
    updateFirstName.valid = checkValidality(
      updateFirstName.value,
      updateFirstName.validation
    );
    this.setState({
      firstName: updateFirstName
    });
  };
  lastNameInputHandler = event => {
    let updateLastName = { ...this.state.lastName };
    updateLastName.value = event.target.value;
    updateLastName.touched = true;
    updateLastName.valid = checkValidality(
      updateLastName.value,
      updateLastName.validation
    );
    this.setState({
      lastName: updateLastName
    });
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
  signUpPostHandler = () => {
    const signUpPost = {
      firstName: this.state.firstName.value,
      lastName: this.state.lastName.value,
      password: this.state.password.value
    };
    SignInServices.start(signUpPost);
  };
  render() {
    const { classes } = this.props;
    const FirstName = this.state.firstName;
    const LastName = this.state.lastName;
    const Password = this.state.password;
    let formIsValid =
      Password.valid && FirstName.valid && LastName.valid === true;

    let Error =
      Password.touched === true && Password.valid === false ? (
        <div className={classes.errorText}>
          Minimum eight characters, at least one uppercase letter, one lowercase
          letter, one number and one special character
        </div>
      ) : null;
    return (
      <div>
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
          id="outlined-name-first"
          label="First Name"
          margin="normal"
          variant="outlined"
          className={classes.name}
          onChange={this.firstNameInputHandler}
          error={FirstName.touched && !FirstName.valid}
        />
        <TextField
          id="outlined-name-last"
          label="Last Name"
          margin="normal"
          variant="outlined"
          className={classes.name}
          onChange={this.lastNameInputHandler}
          error={LastName.touched && !LastName.valid}
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
        <hr className={classes.line} />
        <div className={classes.text}>
          Your password must be at least 8 characters
        </div>
        <br />

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.signUpPostHandler}
          disabled={!formIsValid}
        >
          <Link to={`/SignIn/where`} className={classes.toolbarItem}>
            Sign Up
          </Link>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(signUp);
