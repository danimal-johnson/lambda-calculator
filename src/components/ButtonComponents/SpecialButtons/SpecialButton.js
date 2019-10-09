import React from "react";

const SpecialButton = (props) => {
  console.log(props);

  return (
    <button className="button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.name}
    </button>
  );
};

export default SpecialButton;