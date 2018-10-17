import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  item: {
    padding: "0 5px",
    color: "#dbdae3"
  },
  footerLink: {
    textDecoration: "none",
    color: "#dbdae3",
    fontSize: "11px",

    "&:hover": {
      textDecoration: "underline",
      color: "#3659e3"
    }
  }
});
const footerItem = props => {
  const { classes } = props;
  return (
    <li className={classes.item}>
      <a href="/" className={classes.footerLink}>
        {props.children}
      </a>
    </li>
  );
};

export default withStyles(styles)(footerItem);
