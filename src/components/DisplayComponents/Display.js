import React from "react";

const Display = (props) => {

  console.log("Display props: " + props);

  return <div className="display">{"♾ + 1"}</div>;
};

export default Display;