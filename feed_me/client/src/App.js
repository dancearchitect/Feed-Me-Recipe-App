import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null
    }
  }
  setData = async apiData => {
   
    this.setState({ apiData });
  };
  appendRecipe = async (e) => {
    let {apiData } = this.state
    if(apiData != null) {
      apiData.push(e)
    }
    else {
      apiData = [].push(e)
    }
    await this.setState({
      apiData
    })
  }

  render() {
    return (
      <div className="App">
        <Header appendRecipe={this.appendRecipe} setData={this.setData}/>

        <Route exact path="/" render={() => <Home />} />
        <Footer />
        </div>
    );
  }
}

export default App;
