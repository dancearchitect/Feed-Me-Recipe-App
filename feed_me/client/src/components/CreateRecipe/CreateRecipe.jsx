import React, { Component } from "react";
import "./CreateRecipe.css";

import { createRecipe } from "../../services/api-helper";

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newrecipe: {
        name: "",
        meal_image: "",
        cuisine: "",
        region: "",
        cook_time: "",
        servings: "",
        ingredients: [],
        measurements: [],
        instructions: ""
      }
    };
  }

  createRecipeSubmit = async e => {
    e.preventDefault();
    const newRecipe = this.state.newrecipe;
    const recipeCreated = await createRecipe(newRecipe);
    console.log(recipeCreated)

    this.setState({
      newrecipe: {
        name: "",
        meal_image: "",
        cuisine: "",
        region: "",
        cook_time: "",
        servings: "",
        ingredients: [],
        measurements: [],
        instructions: ""
      }
    });
    this.props.appendRecipe(recipeCreated);
  };

  handleFormChange = async e => {
    e.preventDefault();
    const { name, value } = e.target;
    await this.setState(prevState => ({
      newrecipe: {
        ...prevState.newrecipe,
        [name]: value
      }
    }));
  };

  render() {
    const {
      name,
      meal_image,
      cuisine,
      region,
      cook_time,
      servings,
      ingredients,
      measurements,
      instructions
    } = this.state;
    return (
      <div>
        <h1>Create Recipe</h1>
        <div className="create-recipe-form">
          <form onSubmit={this.createRecipeSubmit}>
            <div className="create-recipe-row">
              <div className="create-recipe-column">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleFormChange}
                />
                <label>Cuisine</label>
                <input
                  type="text"
                  name="cuisine"
                  value={cuisine}
                  onChange={this.handleFormChange}
                />
                <label>Region</label>
                <input
                  type="text"
                  name="region"
                  value={region}
                  onChange={this.handleFormChange}
                />
                <label>Cook Time</label>
                <input
                  type="text"
                  name="cook_time"
                  value={cook_time}
                  onChange={this.handleFormChange}
                />
                <label>Servings</label>
                <input
                  type="text"
                  name="servings"
                  value={servings}
                  onChange={this.handleFormChange}
                />
                <label>Image</label>
                <input
                  type="text"
                  name="meal_image"
                  value={meal_image}
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="create-recipe-column">
                <label>Ingredient 1</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 1</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
                <label>Ingredient 2</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 2</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
                <label>Ingredient 3</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 3</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
                <label>Ingredient 4</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 4</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
                <label>Ingredient 5</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 5</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="create-recipe-column">
                <label>Ingredient 6</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 6</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
                <label>Ingredient 7</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 7</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
                <label>Ingredient 8</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 8</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
                <label>Ingredient 9</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 9</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
                <label>Ingredient 10</label>
                <input
                  type="text"
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleFormChange}
                />
                <label>Measurement 10</label>
                <input
                  type="text"
                  name="measurements"
                  value={measurements}
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="create-recipe-instruc">
                <label>Instructions</label>
                <textarea
                  rows="10"
                  columns="200"
                  name="instructions"
                  value={instructions}
                  onChange={this.handleFormChange}
                />
              </div>
            </div>
            <div className="create-recipe-button">
              <button type="submit">Create Recipe!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateRecipe;
