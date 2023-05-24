import React, { Component } from "react";
import Character from "./Character.jsx";

class Simpsons extends Component {
  state = {};

  // charIndexViewer = (index) => {
  //   console.log(index);
  // };

  render() {
    const { simpsons } = this.props;
    return (
      <>
        {simpsons.map((item, index) => {
          return (
            <>
              <Character item={item} key={item.quote} />
            </>
          );
        })}
      </>
    );
  }
}

export default Simpsons;

{
  /* <ol>
        {this.state.data.map((item) => {
          return (
            <li
              key={item.quote}
              onClick={() => {
                this.delete(index);
              }}
            >
              {item.character}
            </li>
          );
        })}
      </ol> */
}
