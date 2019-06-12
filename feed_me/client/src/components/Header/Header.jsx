import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Header.css";

import homelogo from "../../assets/audrey-logo.png";

import AllRecipes from "../../components/AllRecipes/AllRecipes";
import RecipePage from "../../components/RecipePage/RecipePage";
import CuisinesList from "../Cuisines/CuisinesList";
import RegionsList from "../Region/RegionsList";
import CreateRecipe from "../../components/CreateRecipe/CreateRecipe";
import CuisinesResults from "../Cuisines/CuisinesResults";
import UpdateRecipe from "../UpdateRecipe/UpdateRecipe";
import RegionsResults from "../Region/RegionsResults";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      fromCuisine: false,
      fromRegion: false
    };
  }
  setFromCuisine = () => {
    this.setState({ fromCuisine: true });
  };

  unsetFromCuisine = () => {
    this.setState({ fromCuisine: false });
  };

  setFromRegion = () => {
    this.setState({ fromRegion: true });
  };

  unsetFromRegion = () => {
    this.setState({ fromRegion: false });
  };
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
          </nav>
        </div>
        <Switch>
          <Route
            exact
            path="/recipes"
            render={() => <AllRecipes setData={this.props.setData} />}
          />
          <Route
            exact
            path="/cuisines"
            render={props => (
              <CuisinesList
                {...props}
                fromCuisine={this.state.fromCuisine}
                setFromCuisine={this.setFromCuisine}
                unsetFromCuisine={this.unsetFromCuisine}
              />
            )}
          />
          <Route
            exact
            path="/regions"
            render={props => (
              <RegionsList
                {...props}
                fromRegion={this.state.fromRegion}
                setFromRegion={this.setFromRegion}
                unsetFromRegion={this.unsetFromRegion}
              />
            )}
          />

          <Route
            exact
            path="/new"
            render={() => (
              <CreateRecipe appendRecipe={this.props.appendRecipe} />
            )}
          />
          <Route
            exact
            path="/recipe/:id"
            render={props => (
              <RecipePage
                {...props}
                fromCuisine={this.state.fromCuisine}
                setData={this.props.setData}
                setFromCuisine={this.setFromCuisine}
                unsetFromCuisine={this.unsetFromCuisine}
              />
            )}
          />
          <Route
            path={`/cuisines/:cuisine`}
            render={props => (
              <CuisinesResults
                {...props}
                setData={this.props.setData}
                setFromCuisine={this.setFromCuisine}
              />
            )}
          />
          <Route
            path={`/regions/:region`}
            render={props => (
              <RegionsResults {...props} setData={this.props.setData} />
            )}
          />
          <Route
            exact
            path="/updaterecipe"
            render={props => <UpdateRecipe {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Header;
