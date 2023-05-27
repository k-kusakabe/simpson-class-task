import React, { Component } from "react";

class Controls extends Component {
  state = {};
  render() {
    const { onNameInput } = this.props;
    return (
      <>
        <select onChange={onNameInput}>
          <option value=""></option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </>
    );
  }
}

export default Controls;
