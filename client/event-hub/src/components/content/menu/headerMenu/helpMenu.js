import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "../menu";

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
class organizeMenu extends Component {
  state = {
    helpOptions: [
      {
        id: 0,
        title: "How it works",
        selected: false,
        key: "organize"
      },
      {
        id: 1,
        title: "What Does it cost to create a event",
        selected: false,
        key: "help"
      },
      {
        id: 2,
        title: "Where are my tickets",
        selected: false,
        key: "help"
      },
      {
        id: 3,
        title: "How to connect with event organizer",
        selected: false,
        key: "help"
      },
      {
        id: 4,
        title: "Help Center",
        selected: false,
        key: "help"
      }
    ]
  };
  render() {
    return <Menu title="Help" list={this.state.helpOptions} />;
  }
}

export default withStyles(styles)(organizeMenu);
