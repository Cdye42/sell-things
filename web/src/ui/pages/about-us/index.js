import React, { Component } from "react";
import CSSModules from "react-css-modules";

import autoLogin from "../../../process/users/auth/auto-login";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creators: [],
      creator: {},
      updatedCreator: {}
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
          updatedCreator: response.data.creator
        });
      })
      .catch(err => {
        console.log("You clicked on:", userhandle);
      });
  };
  updateCreator = event => {
    event.preventDefault();
    this.setState({
      updatedCreator: {
        ...this.state.updatedCreator,
        firstName: event.target.value
      }
    });
  };

  submitCreatorUpdate = (event,
  userhandle => {
    event.preventDefault();
    axiosWrapper
      .put(`/creators/${userhandle}`, this.state.updatedCreator)
      .then(response => {
        console.log("updated creator response", response);
      })
      .catch(err => {
        console.log("You clicked on:", userhandle);
      });
  });

  renderSpotlight = () => {
    const { creator, updatedCreator } = this.state;
    if (creator && creator.firstName)
      return (
        <div>
          <div>{creator.firstName}</div>
          <div>{creator.email}</div>
          <form
            onSubmit={event =>
              this.submitCreatorUpdate(event, creator.userHandle)
            }
          >
            <input
              type="text"
              value={updatedCreator.firstName}
              placeholder="First Name"
              onChange={this.updateCreator}
            />
            <button
              type="submit"
              onClick={event =>
                this.submitCreatorUpdate(event, creator.userHandle)
              }
            >
              Update Info
            </button>
          </form>
        </div>
      );

    return null;
  };

  render() {
    return (
      <div>
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
          <div styleName="right-side">{this.renderSpotlight()}</div>
        </div>
      </div>
    );
  }
}

export default autoLogin(CSSModules(AboutUs, css));
