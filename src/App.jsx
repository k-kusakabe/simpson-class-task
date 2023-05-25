import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    //fixed the api data to have unique id
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });
    console.log(data);
    this.setState({ simpsons: data });
  }

  onDelete = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...this.state.simpsons];
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

  render() {
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;
    if (simpsons.length === 0) return <p>You deleted everything!</p>;
    return (
      <>
        <h1>Total no of liked chars #</h1>
        <Simpsons simpsons={simpsons} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;

//for loop cannot be used. Use map method (map method always returns something)
//use key to improve performance for iteration (otherwise, React re-render all list items)
//function can be passed to children as props. Those funcs can be run as callback in child components
//State cannot be passed sideways, only can inherit from parent components.
//If you want to pass the state to sibling, pass the parent so that other siblings can access.
