import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import RegionsList from "./RegionsList";

class RegionsResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      apiDataLoaded: false,
      recipes: {},
      filtered: false,
      filterRecipe: []
    };
  }

  componentDidMount = async () => {
    await this.fetchAllRecipies();
    await this.filterByRegion();
  };

  fetchAllRecipies = async () => {
    const recipes = await axios.get("http://localhost:4567/recipes");
    const apiData = recipes.data;
    this.props.setData(apiData);
    this.setState({
      apiData,
      apiDataLoaded: true
    });
  };

  fetchAllRecipiesByRegion = async recipe_id => {
    const recipes = await axios.get(
      `http://localhost:4567/regions/${recipe_id}`
    );
    const apiData = recipes.data;
    this.setState({
      apiData,
      apiDataLoaded: true
    });
  };

  filterByRegion = async name => {
    const filter = await this.state.apiData.filter(recipe => {
      return recipe.region === this.props.location.state.recipe;
    });
    this.setState({ filterRecipe: filter });
    this.setState({ filtered: true });
  };

  showAllRecipesByRegionOnPage = () => {
    return this.state.filterRecipe.map(recipe => {
      return (
        <div className="all-recipes" key={recipe.id}>
          <h3 className="all-recipes-image">
            <Link
              to={{
                pathname: `/recipe/${recipe.id}`,
                state: recipe
              }}
            >
              {" "}
              <img src={recipe.meal_image} alt="meal" />
            </Link>
          </h3>
          <div className="all-recipes-stats">
            <p>{recipe.name}</p>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Region: {recipe.region}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Servings: {recipe.servings}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="regions-results-back-button-container">
          <Link
            to={{
              pathname: "/regions"
            }}
          >
            <button type="button" className="regions-results-back-button">
              Back
            </button>
          </Link>
        </div>
        <div className="recipes-list">
          {this.state.filtered ? (
            this.showAllRecipesByRegionOnPage()
          ) : (
            <h3>Slicing Tomatoes...</h3>
          )}
        </div>
      </div>
    );
  }
}

export default RegionsResults;
