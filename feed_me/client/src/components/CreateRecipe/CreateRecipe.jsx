import React, { Component } from "react";
import "./CreateRecipe.css";

import { createRecipe } from "../../services/api-helper";

class CreateRecipe extends Component {
  constructor() {
    super();
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

  handleRecipeCreate = async e => {};

  createRecipeSubmit = async e => {
    e.preventDefault();
    const newRecipe = this.state.newrecipe;
    const recipeCreated = await createRecipe(newRecipe);
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
    this.props.appendEventFunc(recipeCreated);
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
      const { name, meal_image, cuisine, region, cook_time, servings, ingredients, measurements, instructions} = this.state
    return (
      <div>
        <h1>Create Recipe</h1>
        <div className="create-recipe-form">
          <form className="create-recipe-form" onSubmit={this.createRecipeSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleFormChange}/>
            <label>Cuisine</label>
            <input type="text" name="cuisine" onChange={this.handleFormChange}/>
            <label>Region</label>
            <input type="text" name="region" onChange={this.handleFormChange}/>
            <label>Cook Time</label>
            <input type="text" name="cooktime" onChange={this.handleFormChange}/>
            <label>Servings</label>
            <input type="text" name="servings" onChange={this.handleFormChange}/>
            <label>Ingredient</label>
            <input type="text" name="ingredients" onChange={this.handleFormChange}/>
            <label>Measurement</label>
            <input type="text" name="measurements" onChange={this.handleFormChange}/>

            <label>Instructions</label>
            <textarea rows="5" columns="20" name="instructions" onChange={this.handleFormChange}/>

            <button type="submit">Create Recipe!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateRecipe;
