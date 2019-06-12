import React, { Component } from "react";
import logo from "../../assets/feedme-logo.png";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>
          <img src={logo} alt="logo" className="logo" />
          <div className="home-intro">
            <p>
              FeedMe! is a simple site made for chefs of all levels.
              <br />
              Users can search for recipes through cuisine or region and add
              their own recipes to the site!
              <br />
              Recipes can also be updated and deleted (Eat it!) by all users.
            </p>
          </div>
        </h1>
      </div>
    );
  }
}

export default Home;
