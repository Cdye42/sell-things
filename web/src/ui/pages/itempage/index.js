import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";
import autoLogin from "../../../process/users/auth/auto-login";

class ItemPage extends Component {
  render() {
    return (
      <div>
        <div styleName="container">
          <div styleName="main">
            <div id="main-right" />
            <div id="main-left">
              <div>this is our item page</div>;
              <div id="row1">
                <div id="box1" />
                <div id="box2" />
                <div id="box3" />
              </div>
              <div id="row2">
                <div id="box4" />
                <div id="box5" />
                <div id="box6" />
              </div>
              <div id="row3">
                <div id="box7" />
                <div id="box8" />
                <div id="box9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default autoLogin(CSSModules(ItemPage, css));
