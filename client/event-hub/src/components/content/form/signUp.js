import React, { Component, Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SignInServices from "../../../services/api/signInServices";

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
  }
});
class signUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };
  firstNameInputHandler = event => {
    this.setState({
      firstName: event.target.value
    });
  };
  lastNameInputHandler = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  passwordInputHandler = event => {
    this.setState({
      password: event.target.value
    });
  };
  signUpPostHandler = () => {
    const signUpPost = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password
    };
    SignInServices.start(signUpPost);
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
          id="outlined-name-first"
          label="First Name"
          margin="normal"
          variant="outlined"
          className={classes.name}
          onChange={this.firstNameInputHandler}
        />
        <TextField
          id="outlined-name-last"
          label="Last Name"
          margin="normal"
          variant="outlined"
          className={classes.name}
          onChange={this.lastNameInputHandler}
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
        >
          <Link to={`/SignIn/where`} className={classes.toolbarItem}>
            Sign Up
          </Link>
        </Button>
      </Fragment>
    );
  }
}

export default withStyles(styles)(signUp);
