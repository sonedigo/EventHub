import React, { Fragment } from "react";
import { Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  select: {
    display: "block",
    WebkitAppearance: "none",
    border: "0",
    borderRadius: "2px",
    padding: "8px 9px 12px 0px",
    backgroundColor: "inherit",
    color: "inherit",
    outline: "none",
    cursor: "pointer"
  },
  icon: {
    fontSize: "20px",
    padding: "6px 2% 0 0"
  }
});
const footSelect = props => {
  const { classes } = props;
  return (
    <Fragment>
      <select className={classes.select}>
        <option value="United States">United States</option>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
        <option value="e">e</option>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
        <option value="e">e</option>
      </select>
      <Icon className={classes.icon}>keyboard_arrow_down</Icon>
    </Fragment>
  );
};

export default withStyles(styles)(footSelect);
