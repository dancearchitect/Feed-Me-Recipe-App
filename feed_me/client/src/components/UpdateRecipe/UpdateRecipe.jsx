import React, { Component } from "react";
import "./UpdateRecipe.css";
import { Redirect } from "react-router-dom";

import { updateRecipe } from "../../services/api-helper";

class UpdateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false,
      newRecipe: {}
    };
  }
  componentDidMount() {
    this.setState({ newRecipe: this.props.location.state.recipe });
  }

  updateRecipeSubmit = async e => {
    e.preventDefault();
    const newRecipe = this.state.newRecipe;
    const recipeUpdated = await updateRecipe(
      newRecipe,
      this.props.location.state.recipeId
    );
    console.log(recipeUpdated);
    await this.setState({ updated: true });
  };

  handleFormChange = async e => {
    e.preventDefault();
    const { name, value } = e.target;
    await this.setState(prevState => ({
      newRecipe: {
        ...prevState.newRecipe,
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
      ingredients1,
      ingredients2,
      ingredients3,
      ingredients4,
      ingredients5,
      ingredients6,
      ingredients7,
      ingredients8,
      ingredients9,
      ingredients10,
      measurements1,
      measurements2,
      measurements3,
      measurements4,
      measurements5,
      measurements6,
      measurements7,
      measurements8,
      measurements9,
      measurements10,
      instructions
    } = this.state.newRecipe;
    if (!this.state.updated) {
      return (
        <div>
          <h1>Update Recipe</h1>
          <div className="update-recipe-form">
            <form onSubmit={this.updateRecipeSubmit} className="update-form">
              <div className="update-recipe-row">
                <div className="update-recipe-column">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
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
                <div className="update-recipe-column">
                  <label>Ingredient 1</label>
                  <input
                    type="text"
                    name="ingredients1"
                    value={ingredients1}
                    onChange={this.handleFormChange}
                  />
                  <label>Ingredient 2</label>
                  <input
                    type="text"
                    name="ingredients2"
                    value={ingredients2}
                    onChange={this.handleFormChange}
                  />{" "}
                  <label>Ingredient 3</label>
                  <input
                    type="text"
                    name="ingredients3"
                    value={ingredients3}
                    onChange={this.handleFormChange}
                  />{" "}
                  <label>Ingredient 4</label>
                  <input
                    type="text"
                    name="ingredients4"
                    value={ingredients4}
                    onChange={this.handleFormChange}
                  />{" "}
                  <label>Ingredient 5</label>
                  <input
                    type="text"
                    name="ingredients5"
                    value={ingredients5}
                    onChange={this.handleFormChange}
                  />{" "}
                  <label>Ingredient 6</label>
                  <input
                    type="text"
                    name="ingredients6"
                    value={ingredients6}
                    onChange={this.handleFormChange}
                  />{" "}
                  <label>Ingredient 7</label>
                  <input
                    type="text"
                    name="ingredients7"
                    value={ingredients7}
                    onChange={this.handleFormChange}
                  />{" "}
                  <label>Ingredient 8</label>
                  <input
                    type="text"
                    name="ingredients8"
                    value={ingredients8}
                    onChange={this.handleFormChange}
                  />{" "}
                  <label>Ingredient 9</label>
                  <input
                    type="text"
                    name="ingredients9"
                    value={ingredients9}
                    onChange={this.handleFormChange}
                  />
                  <label>Ingredient 10</label>
                  <input
                    type="text"
                    name="ingredients10"
                    value={ingredients10}
                    onChange={this.handleFormChange}
                  />
                </div>
                <div className="update-recipe-column">
                  <label>Measurement 1</label>
                  <input
                    type="text"
                    name="measurements1"
                    value={measurements1}
                    onChange={this.handleFormChange}
                  />
                  <label>Measurement 2</label>
                  <input
                    type="text"
                    name="measurements2"
                    value={measurements2}
                    onChange={this.handleFormChange}
                  />

                  <label>Measurement 3</label>
                  <input
                    type="text"
                    name="measurements3"
                    value={measurements3}
                    onChange={this.handleFormChange}
                  />

                  <label>Measurement 4</label>
                  <input
                    type="text"
                    name="measurements4"
                    value={measurements4}
                    onChange={this.handleFormChange}
                  />

                  <label>Measurement 5</label>
                  <input
                    type="text"
                    name="measurements5"
                    value={measurements5}
                    onChange={this.handleFormChange}
                  />

                  <label>Measurement 6</label>
                  <input
                    type="text"
                    name="measurements6"
                    value={measurements6}
                    onChange={this.handleFormChange}
                  />

                  <label>Measurement 7</label>
                  <input
                    type="text"
                    name="measurements7"
                    value={measurements7}
                    onChange={this.handleFormChange}
                  />

                  <label>Measurement 8</label>
                  <input
                    type="text"
                    name="measurements8"
                    value={measurements8}
                    onChange={this.handleFormChange}
                  />

                  <label>Measurement 9</label>
                  <input
                    type="text"
                    name="measurements9"
                    value={measurements9}
                    onChange={this.handleFormChange}
                  />

                  <label>Measurement 10</label>
                  <input
                    type="text"
                    name="measurements10"
                    value={measurements10}
                    onChange={this.handleFormChange}
                  />
                </div>
                <div className="create-recipe-instructions">
                  <label className="create-recipe-instructions-title">
                    Instructions
                  </label>
                  <textarea
                    name="instructions"
                    value={instructions}
                    onChange={this.handleFormChange}
                    className="create-recipe-instructions-size"
                  />
                </div>
              </div>
              <div className="update-recipe-button-container">
                <button type="submit" className="update-recipe-button-size">
                  Update Recipe!
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/recipes" />;
    }
  }
}

export default UpdateRecipe;
