import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = { like: false };

  onLikeToggle = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    return (
      <div className="characterContainer">
        <Name
          character={this.props.item.character}
          like={this.state.like}
          onLikeToggle={this.onLikeToggle}
        />
        <Quote quote={this.props.item.quote} />
        <Image image={this.props.item.image} like={this.state.like} />
        <Delete />
      </div>
    );
  }
}

export default Character;
