import React, { Component } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Layout from "./components/LogIn/layout";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/SignIn" component={Layout} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
