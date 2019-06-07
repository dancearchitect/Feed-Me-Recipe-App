import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegionsList.css";

class RegionsList extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
     regions : []
    };
  }

  componentDidMount = async () => {
    const recipes = await axios.get("http://localhost:4567/recipes");
    const apiData = recipes.data;
    this.setState({
      apiData,
      apiDataLoaded: true
    });
    await this.stopMultiples()
  };

  stopMultiples = () => {
    let arr = []
    let firstArr = this.state.apiData.map(recipe => {
      return recipe.region
    })
    firstArr.map(recipe => {
      firstArr.filter(filter => {
        if(arr.includes(filter)){
          // console.log('filter',filter)
          // console.log('arr',arr)
          return  null;
        } else {
          arr.push(filter)
        }
      })
      return recipe
    })
    console.log(firstArr)
    this.setState({regions:arr})
    return arr
  }

  showAllRegionsOnPage() {
    return this.state.regions.map(recipe => {
      console.log(recipe)
      return (
        <div className="regions" key={recipe}>
          <div className="all-regions">
            <h3>
              <Link
                to={{
                  pathname: `/regions/${recipe}`,
                  state: {recipe}
                }}
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
        <h1>Regions List</h1>
        <div className="regions-list">
          {this.state.apiDataLoaded ? (
            this.showAllRegionsOnPage()
          ) : (
            <h3>Flipping Pages...</h3>
            
          )}
        </div>
      </div>
    );
  }
}

export default RegionsList;
