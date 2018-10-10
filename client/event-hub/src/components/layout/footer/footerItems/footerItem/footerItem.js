import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  footerContainer: {
    margin: "5px 0"
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
    <div className={classes.footerContainer}>
      <a href="#" className={classes.footerLink}>
        {props.children}
      </a>
    </div>
  );
};

export default withStyles(styles)(footerItem);
