import React from "react";
import { Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  item: {
    display: "inline-block",
    padding: "0 5px",
    color: "#dbdae3",
    listStyle: "none"
  },
  footerLink: {
    textDecoration: "none",
    color: "#6f7287",
    fontSize: "15px",
    "&:hover": {
      color: "black"
    }
  },
  icon: {
    fontSize: "20px",
    margin: "0 0 -5px 0"
  }
});
const headerItem2 = props => {
  const { classes } = props;
  return (
    <li className={classes.item}>
      <a href="/" className={classes.footerLink}>
        {props.children}
        <Icon className={classes.icon}>keyboard_arrow_down</Icon>
      </a>
    </li>
  );
};

export default withStyles(styles)(headerItem2);
