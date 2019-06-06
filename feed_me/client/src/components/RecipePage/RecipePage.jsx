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
                <b>{this.props.location.state.measurements1}</b>{" "}
                {this.props.location.state.ingredients1}
              </p>

              <p>
                <b>{this.props.location.state.measurements2}</b>{" "}
                {this.props.location.state.ingredients2}
              </p>

              <p>
                <b>{this.props.location.state.measurements3}</b>{" "}
                {this.props.location.state.ingredients3}
              </p>

              <p>
                <b>{this.props.location.state.measurements4}</b>{" "}
                {this.props.location.state.ingredients4}
              </p>

              <p>
                <b>{this.props.location.state.measurements5}</b>{" "}
                {this.props.location.state.ingredients5}
              </p>

              <p>
                <b>{this.props.location.state.measurements6}</b>{" "}
                {this.props.location.state.ingredients6}
              </p>

              <p>
                <b>{this.props.location.state.measurements7}</b>{" "}
                {this.props.location.state.ingredients7}
              </p>

              <p>
                <b>{this.props.location.state.measurements8}</b>{" "}
                {this.props.location.state.ingredients8}
              </p>

              <p>
                <b>{this.props.location.state.measurements9}</b>{" "}
                {this.props.location.state.ingredients9}
              </p>

              <p>
                <b>{this.props.location.state.measurements10}</b>{" "}
                {this.props.location.state.ingredients10}
              </p>
            </div>
          </div>
          <div className="recipe-page-column">
            <p className="instructions">
              {this.props.location.state.instructions}
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div>{this.showRecipeOnPage()}</div>
      </div>
    );
  }
}

export default RecipePage;
