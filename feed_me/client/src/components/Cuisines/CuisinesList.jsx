import React, { Component } from "react";
import axios from "axios";

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
            <h3>{recipe.cuisine}</h3>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>CuisinesList</h1>
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
