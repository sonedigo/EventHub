import React from "react";
// import FooterItems from "./footerItems/footerItems";
import FooterItem from "./footerItems/footerItem/signInFooterItem/signInFooterItem";
import PlainFooterItem from "./footerItems/footerItem/signInFooterItem/signInPlainItem";
import FooterItems from "./footerItems/signInFooterItems";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    position: "absolute",
    background: "#1e0a3c",
    color: "#dbdae3",
    padding: "0",
    width: "100%",
    fontSize: "14px",
    bottom: "0"
  }
});

const footer = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <FooterItems>
        <PlainFooterItem>About</PlainFooterItem>
        <FooterItem>Blog</FooterItem>
        <FooterItem>Help</FooterItem>
        <FooterItem>Careers</FooterItem>
        <FooterItem>Press</FooterItem>
        <FooterItem>Security</FooterItem>
        <FooterItem>Developers</FooterItem>
        <FooterItem>Terms</FooterItem>
        <FooterItem>Privacy</FooterItem>
        <FooterItem>Cookies</FooterItem>
      </FooterItems>
    </div>
  );
};

export default withStyles(styles)(footer);
