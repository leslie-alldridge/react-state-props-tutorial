import React, { Component } from "react";
import Gist from "react-gist";

class StatePage extends Component {
  state = {
    string: "This is a message saved in state",
    object: {
      key: 1,
      value: "My favourite car manufacturer is Honda"
    },
    number: 1,
    array: [1, 2, 3],
    function: () => {
      alert("you run the function");
    }
  };
  render() {
    console.log(this.state);

    return (
      <div>
        <h2>Let's learn about state in React</h2>
        <p>Currently my state looks like this:</p>
        <Gist id="c596b9e61bc51043c3b81ec42f5ac434" />
        <script src="https://gist.github.com/leslie-alldridge/c596b9e61bc51043c3b81ec42f5ac434.js" />
      </div>
    );
  }
}

export default StatePage;
