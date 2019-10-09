import React from "react";

const SpecialButton = (props) => {

  return (
    <button className="button" onClick={() => props.displayUpdate(props.symbol)} >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.symbol}
    </button>
  );
};

export default SpecialButton;