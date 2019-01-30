import React from "react";

const SolutionPage = props => {
  //I could have state here, but there's no reason to at the moment, since all my information
  // is passed down as props from the Parent Component
  console.log("My Props in the SolutionPage component are...");

  console.log(props);

  return (
    <div>
      <p>
        {/*Render the name, age and location*/}
        {props.name} - {props.age} - {props.location}
      </p>
      <button onClick={props.reset}>Home</button>
    </div>
  );
};

export default SolutionPage;
