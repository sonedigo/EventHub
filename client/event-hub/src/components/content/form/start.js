import React, { Component, Fragment } from "react";
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

class start extends Component {
  // componentDidMount() {
  //   Axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  //     console.log(response);
  //   });
  // }
  state = {
    email: ""
  };
  inputHandler = event => {
    this.setState({
      email: event.target.value
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
    let SignUpOrLogIn = "";
    if (this.state.email !== "") {
      SignUpOrLogIn = "LogIn";
    } else {
      SignUpOrLogIn = "SignUp";
    }
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
          value={this.props.email}
          onChange={this.inputHandler}
        />
        <br />
        {/* <div>{this.state.email}</div> */}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.emailPostHandler}
        >
          <Link to={`/SignIn/${SignUpOrLogIn}`} className={classes.toolbarItem}>
            Get Started
          </Link>
        </Button>
      </Fragment>
    );
  }
}

export default withStyles(styles)(start);
