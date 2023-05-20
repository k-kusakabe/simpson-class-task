import React, { Component } from "react";

class Name extends Component {
  state = { like: false };
  render() {
    const { like } = this.state;
    console.log(this.state, this.props);

    return (
      <>
        <p>{this.props.character}</p>
        <button
          onClick={() => {
            this.setState({ like: !this.state.like });
          }}
        >
          {like ? "liked" : "not liked"}
        </button>
      </>
    );
  }
}

export default Name;
