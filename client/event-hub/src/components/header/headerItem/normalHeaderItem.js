import React from "react";
import { withStyles } from "@material-ui/core/styles";

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
    }
  }
});
const headerItem1 = props => {
  const { classes } = props;
  return (
    <div className={classes.item}>
      <a href="/" className={classes.footerLink}>
        {props.children}
      </a>
    </div>
  );
};

export default withStyles(styles)(headerItem1);
