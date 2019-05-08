import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Here is some item</div>;
  }
}
export default protectedRoute(CSSModules(ItemDetail, css));
