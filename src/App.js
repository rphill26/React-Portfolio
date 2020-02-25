import React, { Component } from "react";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="rp-page">
        <div id="container-wrap">
          <Header />
          <div id="main-page">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
