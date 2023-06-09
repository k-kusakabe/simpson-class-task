import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  render() {
    const { character, quote, image, id, characterDirection, liked } =
      this.props.item;

    const { onDelete, onLikeToggle } = this.props;

    if (characterDirection === "Left") {
      return (
        <div className="characterContainer">
          <Name
            character={character}
            onLikeToggle={this.props.onLikeToggle}
            id={id}
            liked={liked}
          />
          <Image image={image} />
          <Quote quote={quote} />
          <Delete onDelete={this.props.onDelete} id={id} />
        </div>
      );
    }

    return (
      <div className="characterContainer">
        <Name
          character={character}
          onLikeToggle={onLikeToggle}
          id={id}
          liked={liked}
        />
        <Quote quote={quote} />
        <Image image={image} />
        <Delete onDelete={onDelete} id={id} />
      </div>
    );
  }
}

export default Character;
