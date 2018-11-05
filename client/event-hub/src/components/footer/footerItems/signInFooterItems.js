import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Select from "../../select/footerSelect";

const styles = theme => ({
  container: {
    display: "flex",
    flexFlow: "row wrap",
    padding: "28px 0 14px 0"
  },
  left: {
    flexFlow: "row wrap",
    flex: 0.8,
    alignItems: "center",
    fontSize: "11px",
    color: "#6f7287",
    padding: "0 2%"
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
    padding: "0 10%"
  }
});

const footerItems = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.left}>© 2018 Eventbrite</div>
      <div className={classes.center}>{props.children}</div>

      <Select className={classes.right} />
    </div>
  );
};

export default withStyles(styles)(footerItems);
