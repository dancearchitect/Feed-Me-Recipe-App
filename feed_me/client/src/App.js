import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path="/" render={() => <Home />} />
      </div>
    );
  }
}

export default App;
