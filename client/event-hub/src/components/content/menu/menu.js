import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  listContainer: {
    position: "absolute",
    top: "52px",
    right: "309px",
    zIndex: "1000",
    paddingInlineStart: "0",
    boxShadow: "0 1px 17px 0 rgba(40,44,53,.1), 0 2px 4px 0 rgba(40,44,53,.1)"
  },
  listItem: {
    display: "block",
    position: "relative",
    border: "1px",
    padding: "20px 20px",
    width: "220px",
    color: "#6f7287",
    fontSize: "15px",
    textAlign: "left",
    backgroundColor: "#fff",
    "&:hover": {
      color: "#1e0a3c",
      cursor: "pointer",
      backgroundColor: "#f8f7fa"
    }
  }
});

const menu = props => {
  const { classes } = props;
  const { list } = props;
  return (
    <ul className={classes.listContainer}>
      {list.map(item => {
        return <li className={classes.listItem}>{item.title}</li>;
      })}
    </ul>
  );
};

export default withStyles(styles)(menu);
