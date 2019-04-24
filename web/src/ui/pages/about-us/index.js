import React, { Component } from "react";
import CSSModules from "react-css-modules";
import Spotlight from "./spotlight";
import autoLogin from "../../../process/users/auth/auto-login";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creators: [],
      creator: {},
      updatedFirstName: "",
      updatedLastName: ""
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/creators")
      .then(response => {
        console.log("here is the about page response", response);
        this.setState({ creators: response.data.creators });
      })
      .catch(err => {
        console.log("Error fetching daily creator");
      });
  }

  fetchCreatorDetails = (event, userhandle) => {
    event.preventDefault();
    axiosWrapper
      .get(`/creators/${userhandle}`)
      .then(response => {
        console.log("Here is the creator's information:", response);
        this.setState({
          creator: response.data.creator,
          updatedFirstName: response.data.creator.firstName,
          updatedLastName: response.data.creator.lastName
        });
      })
      .catch(err => {
        console.log("You clicked on:", userhandle);
      });
  };
  changeFirstName = event => {
    event.preventDefault();
    this.setState({
      updatedFirstName: event.target.value
    });
  };
  changeLastName = event => {
    event.preventDefault();
    this.setState({
      updatedLastName: event.target.value
    });
  };

  submitCreatorUpdate = (event, userhandle) => {
    event.preventDefault();
    axiosWrapper
      .put(`/creators/${userhandle}`, {
        creator: {
          ...this.state.creator,
          firstName: this.state.updatedFirstName,
          lastName: this.state.updatedLastName
        }
      })
      .then(response => {
        console.log("updated creator response", response);
        const { creator } = response.data;
        this.setState({
          creator
        });
      })
      .catch(err => {
        console.log("You clicked on:", userhandle);
      });
  };

  render() {
    return (
      <div styleName="container">
        <aside styleName="left-side">
          Creators:
          <ol>
            {this.state.creators.map((creator, index) => {
              return (
                <li
                  key={index}
                  onClick={event =>
                    this.fetchCreatorDetails(event, creator.userHandle)
                  }
                >
                  {creator.firstName}
                </li>
              );
            })}
          </ol>
        </aside>

        <div styleName="right-side">
          <Spotlight
            submitCreatorUpdate={this.submitCreatorUpdate}
            changeFirstName={this.changeFirstName}
            creator={this.state.creator}
            updatedFirstName={this.state.updatedFirstName}
            updatedLastName={this.state.updatedLastName}
            changeLastName={this.changeLastName}
          />
        </div>
      </div>
    );
  }
}

export default autoLogin(CSSModules(AboutUs, css));
