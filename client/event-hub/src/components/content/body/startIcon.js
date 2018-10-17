import React from "react";
import { Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    lineHeight: "1.2",
    fontSize: "33px",
    letterSpacing: ".6px",
    margin: "5px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "27px"
    }
  },
  subTitle: {
    color: "#6f7287",
    fontSize: "14px"
  },
  icon: {
    color: "#ff3333",
    fontSize: "60px",
    margin: "30px 0 10px 0"
  },
  height: {
    height: "50px"
  }
});
const icon1 = props => {
  const { classes } = props;
  return (
    <div>
      <Icon className={classes.icon}>star</Icon>
      <div className={classes.title}>Let's get started</div>
      <div className={classes.subTitle}>
        Enter your email to sign up or log in.
      </div>
      <div className={classes.height} />
    </div>
  );
};

export default withStyles(styles)(icon1);
