import React, { Component } from "react";

class Spotlight extends Component {
  render() {
    const { creator, updatedFirstName, updatedLastName } = this.props;
    if (creator && creator.firstName)
      return (
        <div>
          <div>{creator.firstName}</div>
          <div>{creator.lastName}</div>
          <div>{creator.email}</div>
          <form
            onSubmit={event =>
              this.props.submitCreatorUpdate(event, creator.userHandle)
            }
          >
            <input
              type="text"
              value={updatedFirstName}
              placeholder="First Name"
              onChange={this.props.changeFirstName}
            />
            <input
              type="text"
              value={updatedLastName}
              placeholder="Last Name"
              onChange={this.props.changeLastName}
            />
            <button
              type="submit"
              onClick={event =>
                this.props.submitCreatorUpdate(event, creator.userHandle)
              }
            >
              Update Info
            </button>
          </form>
        </div>
      );

    return null;
  }
}

export default Spotlight;
