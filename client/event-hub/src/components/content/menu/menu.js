import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({});

const menu = props => {
  const { classes } = props;
  const { list } = props;
  return (
    <ul>
      {list.map(item => {
        return <li>{item.title}</li>;
      })}
    </ul>
  );
};

export default withStyles(styles)(menu);
