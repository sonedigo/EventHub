import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import HomeFooter from "../components/footer/homeFooter";
import SignInFooter from "../components/footer/signInFooter";

const styles = theme => ({
  container: {
    display: "relative",
    textAlign: "center",
    margin: "20px",
    color: "#4b4d63"
  }
});
const layout = props => {
  const { classes } = props;
  return (
    <Fragment className={classes.container}>
      <Switch>
        <Route exact path="/" component={HomeFooter} />
        <Route path="/SignIn" component={SignInFooter} />
      </Switch>
    </Fragment>
  );
};

export default withStyles(styles)(layout);
