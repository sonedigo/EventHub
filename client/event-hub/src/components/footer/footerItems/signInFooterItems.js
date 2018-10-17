import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexFlow: "row wrap",
    padding: "28px"
  },
  left: {
    flexFlow: "row wrap",
    flex: 1,
    alignItems: "center",
    fontSize: "11px",
    color: "#6f7287"
  },
  center: {
    display: "flex",
    flexFlow: "row wrap",
    aligItems: "center",
    flex: 2
  },
  right: {
    flexFlow: "row wrap",
    flex: 1,
    alignItems: "center",
    fontSize: "10px",
    textAlign: "right"
  }
});

const footerItems = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.left}>© 2018 Eventbrite</div>
      <div className={classes.center}>{props.children}</div>
      <div className={classes.right}>© 2018 Eventbrite</div>
    </div>
  );
};

export default withStyles(styles)(footerItems);
