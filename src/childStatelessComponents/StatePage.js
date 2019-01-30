import React from "react";
import Gist from "react-gist";

const StatePage = props => {
  //I could have state here, but there's no reason to at the moment, since all my information
  // is passed down as props from the Parent Component

  console.log("My props in the StatePage component are...");

  console.log(props);

  return (
    <div>
      <h2>Let's learn about state in React</h2>
      <p>Currently my state looks like this in the Parent Component:</p>
      <Gist id="c596b9e61bc51043c3b81ec42f5ac434" />
      <p>
        As you can see, many types can be stored in state and passed throughout
        your React application as props
      </p>
      <p>
        {/* I access props below to render my name and age*/}
        I've passed props down into this stateless component...we have a name
        (props.name):
        {props.name} age (props.age):{props.age} and a function. Check the dev
        tools console to see more.
      </p>
      <button onClick={props.reset}>Home</button>
    </div>
  );
};

export default StatePage;
