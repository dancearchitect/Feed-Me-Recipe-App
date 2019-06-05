import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CuisinesList.css";

class CuisinesList extends Component {
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

  showAllCuisinesOnPage() {
    return this.state.apiData.map(recipe => {
      return (
        <div className="cuisines" key={recipe.id}>
          <div className="all-cuisines">
            <h3>
              <Link
                to={{
                  pathname: `/cuisines/${recipe.cuisine}`,
                  state: recipe
                }}
              >
                {recipe.cuisine}
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
        <h1>Cuisines List</h1>
        <div className="cuisines-list">
          {this.state.apiDataLoaded ? (
            this.showAllCuisinesOnPage()
          ) : (
            <h3>Flipping Pages...</h3>
          )}
        </div>
      </div>
    );
  }
}

export default CuisinesList;
