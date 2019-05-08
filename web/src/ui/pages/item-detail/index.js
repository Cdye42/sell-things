import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
  }
  componentDidMount() {
    axiosWrapper
      .get(`/items/${this.props.match.params.id}`)
      .then(response => {
        console.log("what came from item detail backend", response);
        this.setState({ details: response.data.item });
      })
      .catch(err => {
        console.log("Something wrong in item detail", err);
      });
  }
  render() {
    const { details } = this.state;
    console.log("here", this.props);
    if (!details.name) return <div>loading</div>;

    return <div>Here is some item {details.name}</div>;
  }
}
export default protectedRoute(CSSModules(ItemDetail, css));
