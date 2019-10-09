import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.name}
    </button>
  );
};

export default OperatorButton;