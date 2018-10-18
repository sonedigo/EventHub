import React from "react";
import { Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import OrganizeMenu from "../menu/headerMenu/organizeMenu";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexFlow: "column wrap"
  },
  title: {
    lineHeight: "1.2",
    fontSize: "33px",
    letterSpacing: ".6px",
    margin: "5px 0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "27px"
    }
  },
  subTitle: {
    width: "100%",
    color: "#6f7287",
    fontSize: "14px"
  },
  icon: {
    width: "100%",
    color: "#ff3333",
    fontSize: "60px",
    margin: "30px 0 10px 0"
  }
});
const errorIcon = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <OrganizeMenu />
      <Icon className={classes.icon}>mood_bad</Icon>
      <div className={classes.title}>404 Not Found</div>
      <div className={classes.subTitle}>That page doesn't exist.</div>
    </div>
  );
};

export default withStyles(styles)(errorIcon);
