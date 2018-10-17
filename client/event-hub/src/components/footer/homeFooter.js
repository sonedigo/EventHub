import React from "react";
import { Grid } from "@material-ui/core";
import FooterItems from "./footerItems/homeFooterItems";
import FooterItem from "./footerItems/footerItem/homeFooterItem";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    position: "relative",
    background: "#1e0a3c",
    color: "#dbdae3",
    padding: "28px",
    fontSize: "14px",
    bottom: "0"
  }
});

const footer = props => {
  const { classes } = props;
  return (
    <Grid container justify="space-between" className={classes.container}>
      <FooterItems>
        Use Eventbrite
        <FooterItem />
        <br />
        <FooterItem>How It Works</FooterItem>
        <FooterItem>For Large & Complex Events</FooterItem>
        <FooterItem>Pricing</FooterItem>
        <FooterItem>Content Standards</FooterItem>
        <FooterItem>Eventbrite Mobile App</FooterItem>
        <FooterItem>Eventbrite Check-In App</FooterItem>
        <FooterItem>Eventbrite Spectrum</FooterItem>
        <FooterItem>Rally - Fun Things To Do</FooterItem>
        <FooterItem>Sitemap</FooterItem>
      </FooterItems>
      <FooterItems>
        Plan Events
        <FooterItem />
        <br />
        <FooterItem>Conference Management Software</FooterItem>
        <FooterItem>Food and Drink Ticketing</FooterItem>
        <FooterItem>Nonprofits & Fundraisers</FooterItem>
        <FooterItem>Sell Tickets</FooterItem>
        <FooterItem>Event Management & Planning</FooterItem>
        <FooterItem>Online Event Registration</FooterItem>
        <FooterItem>Online RSVP</FooterItem>
        <FooterItem>Music Venues & Promoters</FooterItem>
        <FooterItem>Event Equipment & Staffing</FooterItem>
        <FooterItem>Eventbrite Sales Number</FooterItem>
      </FooterItems>
      <FooterItems>
        Find Events
        <FooterItem />
        <br />
        <FooterItem>Boston Events</FooterItem>
        <FooterItem>Chicago Events</FooterItem>
        <FooterItem>Denver Events</FooterItem>
        <FooterItem>Houston Events</FooterItem>
        <FooterItem>Los Angeles Events</FooterItem>
        <FooterItem>Nashville Events</FooterItem>
        <FooterItem>New York Events</FooterItem>
        <FooterItem>San Diego Events</FooterItem>
        <FooterItem>San Francisco Events</FooterItem>
        <FooterItem>All Cities</FooterItem>
      </FooterItems>
      <FooterItems>
        Connect With Us
        <FooterItem />
        <br />
        <FooterItem>Contact Support</FooterItem>
        <FooterItem>Twitter</FooterItem>
        <FooterItem>Facebook</FooterItem>
        <FooterItem>LinkedIn</FooterItem>
        <FooterItem>Instagram</FooterItem>
        <FooterItem>Google+</FooterItem>
      </FooterItems>
    </Grid>
  );
};

export default withStyles(styles)(footer);
