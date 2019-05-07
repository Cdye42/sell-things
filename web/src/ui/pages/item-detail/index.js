import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";
import autoLogin from "../../../process/users/auth/auto-login";

class ItemDetailPage extends Component {
  render() {
    return <div styleName="homepage-container">Item-detail page here</div>;
  }
}
export default autoLogin(CSSModules(ItemDetailPage, css));
