import React, { Component } from "react";
import MainHeader from "./components/header/mainHeader/mainPageHeader";
// import SignInHeader from "./components/header/mainHeader/signInHeader";
import Menu from "./components/content/menu/headerMenu/organizeMenu";
import Footer from "./containers/footerLayout";
import SignIn from "./containers/signInLayout";
import Error from "./components/content/error/notFound";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = { showMenu: false };
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    let menu = this.state.showMenu ? Menu : null;
    return (
      <div className="App">
        <MainHeader clicked={this.toggleMenu} />
        {menu}
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
