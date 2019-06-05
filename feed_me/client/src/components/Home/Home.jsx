import React, { Component } from "react";
import logo from "../../assets/feedme-logo.png";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          <img src={logo} alt="logo" className="logo"/>
        </h1>
      </div>
    );
  }
}

export default Home;
