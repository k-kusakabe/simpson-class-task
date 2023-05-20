import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  state = {};
  render() {
    return (
      <>
        <Name character={this.props.item.character} />
        <Quote quote={this.props.item.quote} />
        <Image image={this.props.item.image} />
      </>
    );
  }
}

export default Character;
