import React, { Component } from "react";
import SolutionPage from "./childStatelessComponents/SolutionPage";
import "./App.css";

class SolutionParent extends Component {
  //This is the current internal state of my parent component. It keeps track of
  // information entered into a form
  state = {
    name: "",
    age: "",
    location: ""
  };

  //Every time the form input changes this function is called. It will update
  // state depending on the inputs name field and assign the input value to state
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //When the form is submitted, prevent page refresh, log state and add 'submitted' to state with
  //a true value
  handleSubmit = e => {
    e.preventDefault();

    console.log("the submitted form is");
    console.log(this.state);

    this.setState({
      submitted: true
    });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        {/*When the form is submitted call handleSubmit function*/}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            //When the input changes update info in state by calling handleChange
            onChange={this.handleChange}
            placeholder="name"
            //This name here helps us save the right info to the right key in state
            name="name"
          />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="age"
            name="age"
          />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="location"
            name="location"
          />
          <button type="Submit" value="Submit">
            Submit
          </button>
        </form>
        {/*When the form is submitted render the child component with props*/}
        {this.state.submitted && (
          <SolutionPage
            //name, age and location are all props for SolutionPage. Notice how
            //the values are taken directly from state and passed through
            name={this.state.name}
            age={this.state.age}
            location={this.state.location}
            reset={this.props.reset}
          />
        )}
      </div>
    );
  }
}

export default SolutionParent;
