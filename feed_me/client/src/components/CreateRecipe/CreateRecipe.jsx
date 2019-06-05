import React, { Component } from "react";
import "./CreateRecipe.css";

import { createRecipe } from "../../services/api-helper";

class CreateRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeFormData: {
        name: "",
        cuisine: "",
        region: "",
        cooktime: "",
        servings: "",
        ingredients: [],
        measurements: [],
        instructions: ""
      }
    };
  }

  handleRecipeCreate = async e => {
    e.preventDefault();
    await createRecipe(this.state.recipeFormData);
  };

  createHandleChange = async e => {
    const { recipeFormData, value } = e.target;
    console.log(e)
    this.setState(prevState => ({
      recipeFormData: {
        ...prevState.recipeFormData,
        [recipeFormData]: value
      } 
    }));
    
  };

  render() {
    return (
      <div>
        <h1>Create Recipe</h1>
        <div className="create-recipe-form">
          <form>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Cuisine</label>
            <input type="text" name="cuisine" />
            <label>Region</label>
            <input type="text" name="region" />
            <label>Cook Time</label>
            <input type="text" name="cooktime" />
            <label>Servings</label>
            <input type="text" name="servings" />
            <label>Ingredient</label>
            <input type="text" name="ingredients" />
            <label>Measurement</label>
            <input type="text" name="measurements" />

            <label>Instructions</label>
            <textarea rows="5" columns="20" name="instructions" />

            <button type="submit">Create Recipe!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateRecipe;
