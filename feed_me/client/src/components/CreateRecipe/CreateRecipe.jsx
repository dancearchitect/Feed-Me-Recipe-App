import React, { Component } from "react";
import "./CreateRecipe.css";
import { Redirect } from "react-router-dom";

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
        ingredients1: "",
        ingredients2: "",
        ingredients3: "",
        ingredients4: "",
        ingredients5: "",
        ingredients6: "",
        ingredients7: "",
        ingredients8: "",
        ingredients9: "",
        ingredients10: "",
        measurements1: "",
        measurements2: "",
        measurements3: "",
        measurements4: "",
        measurements5: "",
        measurements6: "",
        measurements7: "",
        measurements8: "",
        measurements9: "",
        measurements10: "",
        instructions: "",
        user_id: 1
      },
      created: false
    };
  }

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   });
  // };
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to="/recipes" />;
  //   }
  // };

  createRecipeSubmit = async e => {
    e.preventDefault();
    const newRecipe = this.state.newrecipe;
    const recipeCreated = await createRecipe(newRecipe);
    console.log(recipeCreated);
    this.setState({created: true})
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
    } = this.state;
    if(!this.state.created){
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
                <div className="create-recipe-ingred-measure-row">
                  <div className="create-recipe-ingred-measure-column">
                    <label>Ingredient 1</label>
                    <input
                      type="text"
                      name="ingredients1"
                      value={ingredients1}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 1</label>
                    <input
                      type="text"
                      name="measurements1"
                      value={measurements1}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
                <div className="create-recipe-ingred-measure-row">
                  <div className="create-recipe-ingred-measure-column">
                    <label>Ingredient 2</label>
                    <input
                      type="text"
                      name="ingredients2"
                      value={ingredients2}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 2</label>
                    <input
                      type="text"
                      name="measurements2"
                      value={measurements2}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
                <div className="create-recipe-ingred-measure-row">
                  <div className="create-recipe-ingred-measure-column">
                    <label>Ingredient 3</label>
                    <input
                      type="text"
                      name="ingredients3"
                      value={ingredients3}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 3</label>
                    <input
                      type="text"
                      name="measurements3"
                      value={measurements3}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
                <div className="create-recipe-ingred-measure-row">
                  <div className="create-recipe-ingred-measure-column">
                    <label>Ingredient 4</label>
                    <input
                      type="text"
                      name="ingredients4"
                      value={ingredients4}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 4</label>
                    <input
                      type="text"
                      name="measurements4"
                      value={measurements4}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
                <div className="create-recipe-ingred-measure-row">
                  <div className="create-recipe-ingred-measure-column">
                    <label>Ingredient 5</label>
                    <input
                      type="text"
                      name="ingredients5"
                      value={ingredients5}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 5</label>
                    <input
                      type="text"
                      name="measurements5"
                      value={measurements5}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
              </div>
              <div className="create-recipe-ingred-measure-row">
                <div className="create-recipe-ingred-measure-column">
                  <div className="create-recipe-column">
                    <label>Ingredient 6</label>
                    <input
                      type="text"
                      name="ingredients6"
                      value={ingredients6}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 6</label>
                    <input
                      type="text"
                      name="measurements6"
                      value={measurements6}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
                <div className="create-recipe-ingred-measure-row">
                  <div className="create-recipe-ingred-measure-column">
                    <label>Ingredient 7</label>
                    <input
                      type="text"
                      name="ingredients7"
                      value={ingredients7}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 7</label>
                    <input
                      type="text"
                      name="measurements7"
                      value={measurements7}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
                <div className="create-recipe-ingred-measure-row">
                  <div className="create-recipe-ingred-measure-column">
                    <label>Ingredient 8</label>
                    <input
                      type="text"
                      name="ingredients8"
                      value={ingredients8}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 8</label>
                    <input
                      type="text"
                      name="measurements8"
                      value={measurements8}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
                <div className="create-recipe-ingred-measure-row">
                  <div className="create-recipe-ingred-measure-column">
                    <label>Ingredient 9</label>
                    <input
                      type="text"
                      name="ingredients9"
                      value={ingredients9}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 9</label>
                    <input
                      type="text"
                      name="measurements9"
                      value={measurements9}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
                <div className="create-recipe-ingred-measure-row">
                  <div className="create-recipe-ingred-measure-column">
                    <label>Ingredient 10</label>
                    <input
                      type="text"
                      name="ingredients10"
                      value={ingredients10}
                      onChange={this.handleFormChange}
                    />
                  </div>
                  <div className="create-recipe-ingred-measure-column">
                    <label>Measurement 10</label>
                    <input
                      type="text"
                      name="measurements10"
                      value={measurements10}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
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
              <div className="create-recipe-button">
                {/* {this.renderRedirect()} */}
                <button type="submit">
                  Create Recipe!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );}
    else{
      return <Redirect to='/recipes' />
    }
  }
}

export default CreateRecipe;
