import React, { Component } from "react";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
