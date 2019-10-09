import React, {useState} from "react";
import OperatorButton from "./OperatorButton";

//import any components needed
import { operators, numbers } from '../../../data';
//Import your array data to from the provided data file

const Operators = (props) => {

  const [oper, setOper] = useState (operators); 
  console.log ("Operator props: " + props);
  console.log (operators);
  // STEP 2 - add the imported data to state
  return (
    <div className = "operatorContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       oper.map((operators, index) => (
         <OperatorButton key={index} operator={operators} />
       ))
       }
    </div>
  );
};

export default Operators;