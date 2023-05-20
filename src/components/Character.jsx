import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

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
      </div>
    );
  }
}

export default Character;
