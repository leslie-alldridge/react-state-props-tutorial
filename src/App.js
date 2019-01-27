import React, { Component } from "react";
import StatePage from "./pages/StatePage";
import "./App.css";

class App extends Component {
  state = {
    statePage: false,
    propsPage: false
  };

  stateClick = () => {
    this.setState({
      statePage: true,
      propsPage: false
    });
  };

  render() {
    return (
      <div>
        {this.state.statePage && <StatePage />}
        {this.state.statePage !== true && this.state.propsPage !== true && (
          <div className="App">
            <header className="App-header">
              Learn React State and Props
              <button onClick={this.stateClick}>Learn About State</button>
            </header>
          </div>
        )}
      </div>
    );
  }
}

export default App;
