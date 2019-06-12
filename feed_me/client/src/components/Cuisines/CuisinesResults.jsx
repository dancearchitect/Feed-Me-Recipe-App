import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CuisinesList from "./CuisinesList";

class CuisinesResults extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      recipes: {},
      filtered: false
    };
  }

  componentDidMount = async () => {
    await this.fetchAllRecipies();
    await this.filterByCuisine();
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

  fetchAllRecipiesByCuisine = async recipe_id => {
    const recipes = await axios.get(
      `http://localhost:4567/cuisines/${recipe_id}`
    );
    const apiData = recipes.data;
    this.setState({
      apiData,
      apiDataLoaded: true
    });
  };

  filterByCuisine = async name => {
    const filter = await this.state.apiData.filter(recipe => {
      return recipe.cuisine === this.props.location.state.recipe;
    });
    this.setState({ filterRecipe: filter });
    console.log(filter);
    this.setState({ filtered: true });
  };

  showAllRecipesByCuisineOnPage = () => {
    console.log("trying to show results filtered");
    return this.state.filterRecipe.map(recipe => {
      console.log("filter");
      return (
        <div className="all-recipes" key={recipe.id}>
          <h3 className="all-recipes-image">
            <Link
              onClick={this.props.setFromCuisine}
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
        <div className="cuisines-results-back-button-container">
          <Link
            to={{
              pathname: "/cuisines"
            }}
          >
            <button type="button" className="cuisines-results-back-button">
              Back
            </button>
          </Link>
        </div>
        <div className="recipes-list">
          {this.state.filtered ? (
            this.showAllRecipesByCuisineOnPage()
          ) : (
            <h3>Slicing Tomatoes...</h3>
          )}
        </div>
      </div>
    );
  }
}

export default CuisinesResults;
