import React, { Component } from "react";
import Header from "./components/header/header";
import Footer from "./containers/footerLayout";
import SignIn from "./containers/signInLayout";
import Error from "./components/content/error/notFound";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
