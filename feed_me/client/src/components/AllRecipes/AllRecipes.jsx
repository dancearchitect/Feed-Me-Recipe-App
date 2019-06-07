import React, { Component } from "react";
import axios from "axios";
import "./AllRecipes.css";
import { Link } from "react-router-dom";

class AllRecipes extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    const { apiData } = this.state;
    if (apiData === null) {
      this.fetchAllRecipies();
    } else {
      await this.setState({
        apiData
      });
    }
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

  showAllRecipesOnPage() {
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
            <p className="all-recipes-name">{recipe.name}</p>
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
            this.showAllRecipesOnPage()
          ) : (
            <h3>Chopping Onions...</h3>
          )}
        </div>
      </div>
    );
  }
}

export default AllRecipes;
