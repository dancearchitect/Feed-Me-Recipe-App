import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CuisinesList.css";

class CuisinesList extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      cuisines: []
    };
  }

  componentDidMount = async () => {
    const recipes = await axios.get("http://localhost:4567/recipes");
    const apiData = recipes.data;
    this.setState({
      apiData,
      apiDataLoaded: true
    });
    await this.stopMultiples();
    this.props.unsetFromCuisine()
  };

  stopMultiples = () => {
    let arr = [];
    let firstArr = this.state.apiData.map(recipe => {
      return recipe.cuisine;
    });
    firstArr.map(recipe => {
      firstArr.filter(filter => {
        if (arr.includes(filter)) {
          // console.log('filter',filter)
          // console.log('arr',arr)
          return null;
        } else {
          arr.push(filter);
        }
      });
      return recipe;
    });
    this.setState({ cuisines: arr });
    return arr;
  };

  showAllCuisinesOnPage() {
    return this.state.cuisines.map(recipe => {
      return (
        <div className="cuisines" key={recipe}>
          <div className="all-cuisines">
            <h3>
              <Link
                to={{
                  pathname: `/cuisines/${recipe}`,
                  state: { recipe }
                }} onClick={this.props.setFromCuisine}
              >
                {recipe}
              </Link>
            </h3>
          </div>
        </div>
      );
    });
  }

  render() {
    
    return (
      <div>
        <div className="cuisines-list">
          {this.state.apiDataLoaded ? (
            this.showAllCuisinesOnPage()
          ) : (
            <h3>Flipping Pages...</h3>
          )}
        </div>
      </div>
    );
  }
}

export default CuisinesList;
