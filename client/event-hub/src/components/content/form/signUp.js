import React, { Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
    fontWeight: "normal"
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
        id="outlined-name"
        label="First Name"
        margin="normal"
        variant="outlined"
        className={classes.name}
      />
      <TextField
        id="outlined-name"
        label="Last Name"
        margin="normal"
        variant="outlined"
        className={classes.name}
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
      <hr className={classes.line} />
      <div className={classes.text}>
        Your password must be at least 8 characters
      </div>
      <br />
      <Button variant="contained" color="secondary" className={classes.button}>
        <Link to={`/SignIn/where`} className={classes.toolbarItem}>
          Sign Up
        </Link>
      </Button>
    </Fragment>
  );
};

export default withStyles(styles)(start);
