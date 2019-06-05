import React, { Component } from "react";
import axios from "axios";
import "./RecipePage.css";

class RecipePage extends Component {
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

  showRecipeOnPage() {
    return this.state.apiData.map(recipe => {
      return (
        <div className="recipe-page" key={recipe.id}>
          <div className="recipe-page-row">
            <div className="recipe-page-column">
              <h3>{recipe.name}</h3>

              <img
                src={recipe.meal_image}
                alt="pasta"
                className="recipe-page-image"
              />
              <div className="recipe-page-stats">
              <p>Region: {recipe.region}</p>
              <p>Cuisine: {recipe.cuisine}</p>
              <p>Cook Time: {recipe.cook_time}</p>
              <p>Servings: {recipe.servings}</p>
            </div>
            </div>
            <div className="recipe-page-column">
              <div className="ingred-measure-container">
                <p className="ingredients">{recipe.ingredients[0]} {recipe.measurements[0]}</p>

                <p className="ingredients">{recipe.ingredients[1]} {recipe.measurements[1]}</p>

                <p className="ingredients">{recipe.ingredients[2]} {recipe.measurements[2]}</p>

                <p className="ingredients">{recipe.ingredients[3]} {recipe.measurements[3]}</p>

                <p className="ingredients">{recipe.ingredients[4]} {recipe.measurements[4]}</p>

                <p className="ingredients">{recipe.ingredients[5]} {recipe.measurements[5]}</p>

                <p className="ingredients">{recipe.ingredients[6]} {recipe.measurements[6]}</p>

                <p className="ingredients">{recipe.ingredients[7]} {recipe.measurements[7]}</p>

                <p className="ingredients">{recipe.ingredients[8]} {recipe.measurements[8]}</p>

                <p className="ingredients">{recipe.ingredients[9]} {recipe.measurements[9]}</p>
              </div>
            </div>
            <div className="recipe-page-column">
              <p className="instructions">{recipe.instructions}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.apiDataLoaded ? this.showRecipeOnPage() : <p>:(</p>}
        </div>
      </div>
    );
  }
}

export default RecipePage;
