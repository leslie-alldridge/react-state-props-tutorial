import React from "react";
import Gist from "react-gist";

const PropsPage = props => {
  //I could have state here, but there's no reason to at the moment, since all my information
  // is passed down as props from the Parent Component
  console.log("My Props in the PropsPage component are...");

  console.log(props);

  return (
    <div>
      <h2>Let's learn about props in React</h2>
      <p>Currently my props look like this:</p>
      <Gist id="b034dc76ca30d45cfbc9d2f93de8ebd5" />
      <button onClick={props.reset}>Home</button>
    </div>
  );
};

export default PropsPage;
