import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class RegionsResults extends Component {
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

  filterByRegion = async (name) => {
    const filter = await this.state.apiData.filter(recipe => {
      return recipe.region === this.props.location.state.recipe;
    });
    this.setState({ filterRecipe: filter });
    console.log(filter);
    this.setState({ filtered: true });
  };

  showAllRecipesByRegionOnPage = () => {
    console.log("trying to show results filtered");
    return this.state.filterRecipe.map(recipe => {
      console.log("filter");
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
    console.log(this.props.location.state)
    return (
      <div>
        <h1>All Recipes</h1>
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