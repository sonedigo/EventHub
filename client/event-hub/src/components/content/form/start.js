import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SignInServices from "../../../services/api/signInServices";

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
  isValid: {
    border: "1px solid red"
  },
  button: {
    backgroundColor: "#ff3333",
    width: "350px",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      width: "300px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px"
    }
  },
  toolbarItem: {
    textDecoration: "none",
    color: "white",
    width: "350px",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      width: "300px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px"
    }
  },
  height: {
    height: "220px"
  },
  errorText: {
    color: "red",
    padding: "10px 0 30px 0",
    fontSize: "15px"
  }
});

class start extends Component {
  // componentDidMount() {
  //   Axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  //     console.log(response);
  //   });
  // }
  state = {
    email: {
      value: "",
      validation: {
        isRequired: true,
        isEmail: true
      },
      valid: false,
      touched: false
    }
  };
  checkValidality(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  }

  emailInputHandler = event => {
    let updateEmail = { ...this.state.email };
    updateEmail.value = event.target.value;
    updateEmail.touched = true;
    updateEmail.valid = this.checkValidality(
      updateEmail.value,
      updateEmail.validation
    );
    this.setState({
      email: updateEmail
    });
  };

  emailPostHandler = () => {
    const emailPost = {
      email: this.state.email
    };
    SignInServices.start(emailPost);
  };
  render() {
    const { classes } = this.props;
    const Email = this.state.email;
    let SignUpOrLogIn = "";
    if (this.state.email !== "") {
      SignUpOrLogIn = "LogIn";
    } else {
      SignUpOrLogIn = "SignUp";
    }
    let Error =
      Email.touched === true && Email.valid === false ? (
        <div className={classes.errorText}>This is not a valid email</div>
      ) : null;

    // if (Email.touched === true && Email.valid === false){

    // }
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
          value={Email.value}
          onChange={this.emailInputHandler}
          error={Email.touched && !Email.valid}
        />
        <br />
        {Error}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.emailPostHandler}
          disabled={!Email.valid}
        >
          <Link to={`/SignIn/${SignUpOrLogIn}`} className={classes.toolbarItem}>
            Get Started
          </Link>
        </Button>

        <div className={classes.height} />
      </div>
    );
  }
}

export default withStyles(styles)(start);
