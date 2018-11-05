import React, { Component } from "react";
import MainHeader from "./components/header/mainHeader/mainPageHeader";
import SignInHeader from "./components/header/mainHeader/signInHeader";
import OrganizeMenu from "./components/content/menu/headerMenu/organizeMenu";
import HelpMenu from "./components/content/menu/headerMenu/helpMenu";
import Footer from "./containers/footerLayout";
import SignIn from "./containers/signInLayout";
import Error from "./components/content/error/notFound";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    showOrganizeMenu: false,
    showHelpMenu: false
  };

  toggleOrganizeMenu = () => {
    this.setState({
      showOrganizeMenu: !this.state.showOrganizeMenu
    });
  };
  toggleHelpMenu = () => {
    this.setState({
      showHelpMenu: !this.state.showHelpMenu
    });
  };

  render() {
    let organizeMenu = this.state.showOrganizeMenu ? <OrganizeMenu /> : null;
    let helpMenu = this.state.showHelpMenu ? <HelpMenu /> : null;
    return (
      <div className="App">
        <Switch>
          <Route
            path="/SignIn"
            // component={SignInHeader}
            render={() => <SignInHeader clicked={this.toggleHelpMenu} />}
          />
          <Route
            path="/"
            render={() => <MainHeader clicked={this.toggleOrganizeMenu} />}
          />
        </Switch>
        {/* <MainHeader clicked={this.toggleMenu} />
        <MainHeader clicked={this.toggleMenu} /> */}
        {organizeMenu}
        {helpMenu}
        <Switch>
          <Route path="/SignIn" component={SignIn} />
          <Route component={Error} />
        </Switch>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
