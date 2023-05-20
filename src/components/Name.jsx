import React, { Component } from "react";

class Name extends Component {
  render() {
    const { like, character, onLikeToggle } = this.props;

    return (
      <div>
        <p>{character}</p>
        <button onClick={onLikeToggle}>{like ? "liked" : "not liked"}</button>
      </div>
    );
  }
}

export default Name;
