import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import StartIcon from "./body/startIcon";
import SignUpIcon from "./body/signUpIcon";
import LogInIcon from "./body/logInIcon";
import Start from "./form/start";

const styles = theme => ({
  container: {
    display: "flex",
    textAlign: "center",
    margin: "20px",
    color: "#4b4d63"
  }
});
const layout = props => {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.container}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Switch>
            <Route exact path="/SignIn" component={StartIcon} />
            <Route exact path="/SignIn/SignUp" component={SignUpIcon} />
            <Route exact path="/SignIn/LogIn" component={LogInIcon} />
          </Switch>
          <Start />
        </Grid>
        <Grid item xs={2} />
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(layout);
