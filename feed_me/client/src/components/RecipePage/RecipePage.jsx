import React, { Component } from "react";
import axios from "axios";
import "./RecipePage.css";

class RecipePage extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      recipe: {}
    };
  }
  fetchRecipe = async recipe_id => {
    const recipe = await axios.get(
      `http://localhost:3000/recipes/${recipe_id}`
    );
    this.setState({ recipe: recipe.data });
    return recipe.data;
  };

  componentDidMount = async () => {
    this.fetchRecipe(this.props.location.state);
  };

  showRecipeOnPage() {
    return (
      <div className="recipe-page" key={this.props.location.state.id}>
        <div className="recipe-page-row">
          <div className="recipe-page-column">
            <h3>{this.props.location.state.name}</h3>

            <img
              src={this.props.location.state.meal_image}
              alt="pasta"
              className="recipe-page-image"
            />
            <div className="recipe-page-stats">
              <p>Region: {this.props.location.state.region}</p>
              <p>Cuisine: {this.props.location.state.cuisine}</p>
              <p>Cook Time: {this.props.location.state.cook_time}</p>
              <p>Servings: {this.props.location.state.servings}</p>
            </div>
          </div>
          <div className="recipe-page-column">
            <div className="ingred-measure-container">

              <p>
                {this.props.location.state.ingredients[0]} {this.props.location.state.measurements[0]}
              </p>

              <p>
                {this.props.location.state.ingredients[1]} {this.props.location.state.measurements[1]}
              </p>

              <p>
                {this.props.location.state.ingredients[2]} {this.props.location.state.measurements[2]}
              </p>

              <p>
                {this.props.location.state.ingredients[3]} {this.props.location.state.measurements[3]}
              </p>

              <p>
                {this.props.location.state.ingredients[4]} {this.props.location.state.measurements[4]}
              </p>

              <p>
                {this.props.location.state.ingredients[5]} {this.props.location.state.measurements[5]}
              </p>

              <p>
                {this.props.location.state.ingredients[6]} {this.props.location.state.measurements[6]}
              </p>

              <p>
                {this.props.location.state.ingredients[7]} {this.props.location.state.measurements[7]}
              </p>

              <p>
                {this.props.location.state.ingredients[8]} {this.props.location.state.measurements[8]}
              </p>

              <p>
                {this.props.location.state.ingredients[9]} {this.props.location.state.measurements[9]}
              </p>
            </div>
          </div>
          <div className="recipe-page-column">
            <p className="instructions">{this.props.location.state.instructions}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.showRecipeOnPage()}
        </div>
      </div>
    );
  }
}

export default RecipePage;
