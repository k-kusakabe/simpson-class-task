import React, { Component } from "react";

class Image extends Component {
  render() {
    return <img src={this.props.image} alt={this.props.character} />;
  }
}

export default Image;
