import React from "react";
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
  }
});
const headerItem1 = props => {
  const { classes } = props;
  return (
    <li className={classes.item}>
      <a href="/" className={classes.footerLink}>
        {props.children}
      </a>
    </li>
  );
};

export default withStyles(styles)(headerItem1);
