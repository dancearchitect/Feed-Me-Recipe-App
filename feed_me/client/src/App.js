import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
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

  showRecipesOnPage() {
    return this.state.apiData.map(recipe => {
      return (
        <div className="recipe" key={recipe.id}>
          <h3 className="name">{recipe.name}</h3>
          <img src={recipe.meal_image} alt="pasta" />
          <p>{recipe.region}</p>
          <p>{recipe.cuisine}</p>
          <p>{recipe.cook_time}</p>
          <p>{recipe.servings}</p>
          <div className="ingred-measure">
            <p className="ingredients">{recipe.ingredients[0]}</p>
            <p className="measurement">{recipe.measurements[0]}</p>
            <br />
            <p className="ingredients">{recipe.ingredients[1]}</p>
            <p className="measurement">{recipe.measurements[1]}</p>
            <br />
            <p className="ingredients">{recipe.ingredients[2]}</p>
            <p className="measurement">{recipe.measurements[2]}</p>
            <br />
            <p className="ingredients">{recipe.ingredients[3]}</p>
            <p className="measurement">{recipe.measurements[3]}</p>
            <br />
            <p className="ingredients">{recipe.ingredients[4]}</p>
            <p className="measurement">{recipe.measurements[4]}</p>
            <br />
            <p className="ingredients">{recipe.ingredients[5]}</p>
            <p className="measurement">{recipe.measurements[5]}</p>
            <br />
            <p className="ingredients">{recipe.ingredients[6]}</p>
            <p className="measurement">{recipe.measurements[6]}</p>
            <br />
            <p className="ingredients">{recipe.ingredients[7]}</p>
            <p className="measurement">{recipe.measurements[7]}</p>
            <br />
            <p className="ingredients">{recipe.ingredients[8]}</p>
            <p className="measurement">{recipe.measurements[8]}</p>
            <br />
            <p className="ingredients">{recipe.ingredients[9]}</p>
            <p className="measurement">{recipe.measurements[9]}</p>
           </div> 
           <br />
            <p className="instructions">{recipe.instructions}</p>
          
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.apiDataLoaded ? this.showRecipesOnPage() : <p>:(</p>}
        </div>
      </div>
    );
  }
}

export default App;
