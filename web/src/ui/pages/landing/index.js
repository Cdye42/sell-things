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
            { id: "01", name: "2QNS", price: "$129.99" },
            { id: "02", name: "1QNS", price: "$109.99" }
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
              return (
                <li key={index}>
                  {item.name}
                  {item.price}{" "}
                </li>
              );
            })}
          </ol>
          <li id="id01" />
          <div id="id02" />
        </div>
      );
    if ((this.state.error = true))
      return console.log("if statement error is true");
    else return <div>null</div>;
  }
}

export default protectedRoute(CSSModules(LandingPage, css));
