import React, { Component } from "react";
import StatePage from "./childStatelessComponents/StatePage";
import PropsPage from "./childStatelessComponents/PropsPage";
import "./App.css";
import SolutionParent from "./SolutionParent";

class App extends Component {
  //This is the current internal state of my parent component. It keeps track of
  // which pages need to be rendered.
  state = {
    statePage: false,
    propsPage: false,
    solutionClick: false
  };

  //Function that runs once the Parent Component is ready to go!
  componentDidMount = () => {
    console.log("The component has mounted and its state is...");
    console.log(this.state);
  };

  //This function changes state, setting statePage to true and propsPage to false
  propsClick = () => {
    this.setState({
      statePage: false,
      propsPage: true,
      solutionClick: false
    });
  };

  //This function changes state, setting statePage to false and propsPage to true
  stateClick = () => {
    this.setState({
      statePage: true,
      propsPage: false,
      solutionClick: false
    });
  };

  //This function sets it back to the initial state and is available in child components as props
  resetClick = () => {
    this.setState({
      statePage: false,
      propsPage: false,
      solutionClick: false
    });
  };

  //I've added this in to render a solution, there are better ways
  // to do this, but we're focusing on the basics
  solutionClick = () => {
    this.setState({
      statePage: false,
      propsPage: false,
      solutionClick: true
    });
  };

  render() {
    return (
      <div>
        {/* If statePage is set to true in state, then display my StatePage
        component */}
        {this.state.statePage && (
          <StatePage name="Leslie" age="26" reset={this.resetClick} />
        )}
        {/*If propsPage is set to true in state, then display my PropsPage
        component*/}
        {this.state.propsPage && (
          <PropsPage name="Chief" age="22" reset={this.resetClick} />
        )}
        {/*If both statePage and propsPage are false, display the home page info*/}
        {this.state.statePage !== true && this.state.propsPage !== true && (
          <div className="App">
            <header className="App-header">
              Learn React State and Props
              {/*When this button is clicked run the stateClick function*/}
              <button onClick={this.stateClick}>Learn About State</button>
              {/*When this button is clicked run the propsClick function*/}
              <button onClick={this.propsClick}>Learn About Props</button>
            </header>
          </div>
        )}
        {/*When this button is clicked run the solutionClick function*/}
        <button onClick={this.solutionClick}>Solution..scroll down</button>
        {this.state.solutionClick === true && (
          <SolutionParent reset={this.resetClick} />
        )}
      </div>
    );
  }
}

export default App;
