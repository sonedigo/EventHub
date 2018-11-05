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
    organizeOptions: [
      {
        id: 0,
        title: "Overview",
        selected: false,
        key: "organize"
      },
      {
        id: 1,
        title: "Pricing",
        selected: false,
        key: "organize"
      },
      {
        id: 2,
        title: "Blog",
        selected: false,
        key: "organize"
      },
      {
        id: 3,
        title: "Resources",
        selected: false,
        key: "organize"
      }
    ]
  };
  render() {
    return <Menu list={this.state.organizeOptions} />;
  }
}

export default withStyles(styles)(organizeMenu);
