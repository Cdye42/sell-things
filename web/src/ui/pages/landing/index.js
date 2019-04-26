import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: false
    };
  }
  componentDidMount() {
    //console.log("hey");
    axiosWrapper
      .get("/items")
      .then(response => {
        console.log("got items", results);
        this.setState({ items: response.data.results });
      })
      .catch(err => {
        this.setState({
          items: [
            { id: "01", name: "hat", price: "$19.99" },
            { id: "02", name: "shoes", price: "$119.99" }
          ]
          //  error: true
        });
      });
  }

  render() {
    if (this.state.items.length > 0)
      return (
        <div styleName="container">
          results:{" "}
          <ol>
            {this.state.items.map((item, index) => {
              return <li key={index} />;
            })}
          </ol>
          <div id="id01">Item 1</div>
          <div id="id02">Item 2</div>
        </div>
      );
    if ((this.state.error = true))
      return console.log("if statement error is true");
    else return <div>null</div>;
  }
}

export default protectedRoute(CSSModules(LandingPage, css));
