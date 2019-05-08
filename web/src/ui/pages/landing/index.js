import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/items")
      .then(response => {
        console.log("What did we get from the backend", response);
        this.setState({ items: response.data.items });
      })
      .catch(err => {
        console.log("Something bad happened", err);
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        this is our landing page
        {items.map((item, index) => (
          <div key={index}>
            <Link to={`/items/${item.itemHandle}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default protectedRoute(CSSModules(LandingPage, css));
