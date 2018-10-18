import React, { Component } from "react";
import { Icon } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  wrapper: {},
  header: {},
  headerTitle: {},
  list: {},
  listItem: {},
  item: {
    display: "inline-block",
    padding: "0 5px",
    color: "#dbdae3",
    listStyle: "none"
  },
  footerLink: {
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
class headerItem2 extends Component {
  state = {
    listOpen: false,
    headerTitle: this.props.title
  };

  toggleList = () => {
    this.setState(prevState => {
      listOpen: !prevState.listOpen;
    });
  };

  render() {
    const { classes } = this.props;
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;
    return (
      <li className={classes.item}>
        <a href="/" className={classes.footerLink}>
          {this.props.children}
          <Icon className={classes.icon}>keyboard_arrow_down</Icon>
        </a>
      </li>
    );
  }
}

export default withStyles(styles)(headerItem2);
