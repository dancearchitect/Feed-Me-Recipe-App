import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegionsList.css";

class RegionsList extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    const recipes = await axios.get("http://localhost:4567/recipes");
    const apiData = recipes.data;
    this.setState({
      apiData,
      apiDataLoaded: true
    });
  };

  showAllRegionsOnPage() {
    return this.state.apiData.map(recipe => {
      return (
        <div className="regions" key={recipe.id}>
          <div className="all-regions">
            <h3>
              <Link
                to={{
                  pathname: `/regions/${recipe.region}`,
                  state: recipe
                }}
              >
                {recipe.region}
              </Link>
            </h3>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Regions List</h1>
        <div className="regions-list">
          {this.state.apiDataLoaded ? (
            this.showAllRegionsOnPage()
          ) : (
            <h3>Flipping Pages...</h3>
          )}
        </div>
      </div>
    );
  }
}

export default RegionsList;
