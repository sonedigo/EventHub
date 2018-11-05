import React, { Component } from "react";
import { Icon } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
// import { nominalTypeHack } from "prop-types";

const styles = theme => ({
  item: {
    display: "flex",
    padding: "24px 19px",
    alignItems: "center"
    // backgroundColor: "#f8f7fa",
    // border: "1px solid black"
  },
  footerLink: {
    textDecoration: "none",
    color: "#6f7287",
    fontSize: "15px",
    "&:hover": {
      color: "black"
    },
    cursor: "pointer"
  },
  icon: {
    fontSize: "20px",
    margin: "0 0 -5px 0"
  }
});
const headerItem2 = props => {
  const { classes } = props;
  return (
    <div className={classes.item}>
      <div className={classes.footerLink} onClick={props.name}>
        {props.children}
        <Icon className={classes.icon}>keyboard_arrow_down</Icon>
      </div>
    </div>
  );
};

export default withStyles(styles)(headerItem2);
