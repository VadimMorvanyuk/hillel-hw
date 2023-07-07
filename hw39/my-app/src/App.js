import Example from "./Example ";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      country: 'Ukraine'
    };
  }

  changeNameHandler = () => {
    const value = this.state.country === 'Ukraine' ? 'Ukraine is the best country' : 'Ukraine';
    this.setState({ country: value });
  };

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Example country={this.state.country} />
        <button onClick={this.changeNameHandler}>Click</button>
      </div>
    );
  }
}

export default App;
