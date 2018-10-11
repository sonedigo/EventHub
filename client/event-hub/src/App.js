import React, { Component } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Layout from "./components/LogIn/layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
