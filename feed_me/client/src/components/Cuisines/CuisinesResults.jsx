import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CuisinesResults extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      recipes: {}
    };
  }

  componentDidMount = async () => {
    this.fetchAllRecipesByCusine();
  };

  fetchAllRecipiesByCuisine = async recipe_id => {
    const recipes = await axios.get(`http://localhost:4567/cuisines/${recipe_id}`);
    const apiData = recipes.data;
    this.setState({
      apiData,
      apiDataLoaded: true
    });
  };

  showAllRecipesByCuisineOnPage() {
    return this.state.apiData.map(recipe => {
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
  }

  render() {
    return (
      <div>
        <h1>All Recipes</h1>
        <div className="recipes-list">
          {this.state.apiDataLoaded ? (
            this.showAllRecipesByCuisineOnPage()
          ) : (
            <h3>Chopping Onions...</h3>
          )}
        </div>
      </div>
    );
  }
}

export default CuisinesResults;
