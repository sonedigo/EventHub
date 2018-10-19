import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  listContainer: {
    position: "absolute",
    top: "49px",
    right: "309px",
    zIndex: "1000",
    boxShadow: ""
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
