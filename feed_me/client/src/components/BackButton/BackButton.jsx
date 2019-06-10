import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackButton extends Component {
  render() {
    return (
      <div>
        <Link
          to={{
            pathname: "/recipes"
          }}
        >
          <button type="button" className="recipe-page-back-button">
            Back
          </button>
        </Link>
      </div>
    );
  }
}

export default BackButton;
