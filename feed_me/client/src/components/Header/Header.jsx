import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Header.css";

import homelogo from "../../assets/audrey-logo.png";

import AllRecipes from "../../components/AllRecipes/AllRecipes";
import RecipePage from "../../components/RecipePage/RecipePage";
import Cuisines from "../Cuisines/CuisinesList";
import Region from "../../components/Region/Region";
import CreateRecipe from "../../components/CreateRecipe/CreateRecipe";
import Recipe from "../../components/RecipePage/Recipe"

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-logo">
            <Link to="/">
              <img src={homelogo} alt="home logo" className="home-logo" />
            </Link>
          </div>
          <nav>
            <li>
              <Link to="/recipes">All Recipes</Link>
            </li>
            <li>
              <Link to="/cuisines">Cuisines</Link>
            </li>
            <li>
              <Link to="/regions">Regions</Link>
            </li>
            <li>
              <Link to="/new">Create A Recipe</Link>
            </li>
            <li>
              <Link to="/recipes">Recipe Page</Link>
            </li>
          </nav>
        </div>
        <Switch>
          <Route path="/recipes" render={() => <AllRecipes />} />
          <Route path="/cuisines" render={() => <Cuisines />} />
          <Route path="/regions" render={() => <Region />} />
          <Route path="/recipe/:id" render={(props) => <RecipePage {...props}/>} />
          <Route path="/new" render={() => <CreateRecipe />} />
        </Switch>
      </div>
    );
  }
}

export default Header;
